# `azurerm_point_to_site_vpn_gateway`

Refer to the Terraform Registory for docs: [`azurerm_point_to_site_vpn_gateway`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway).

# `pointToSiteVpnGateway` Submodule <a name="`pointToSiteVpnGateway` Submodule" id="@cdktf/provider-azurerm.pointToSiteVpnGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PointToSiteVpnGateway <a name="PointToSiteVpnGateway" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway azurerm_point_to_site_vpn_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import point_to_site_vpn_gateway

pointToSiteVpnGateway.PointToSiteVpnGateway(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_configuration: PointToSiteVpnGatewayConnectionConfiguration,
  location: str,
  name: str,
  resource_group_name: str,
  scale_unit: typing.Union[int, float],
  virtual_hub_id: str,
  vpn_server_configuration_id: str,
  dns_servers: typing.List[str] = None,
  id: str = None,
  routing_preference_internet_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: PointToSiteVpnGatewayTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.connectionConfiguration">connection_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration">PointToSiteVpnGatewayConnectionConfiguration</a></code> | connection_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#location PointToSiteVpnGateway#location}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#name PointToSiteVpnGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#resource_group_name PointToSiteVpnGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.scaleUnit">scale_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#scale_unit PointToSiteVpnGateway#scale_unit}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.virtualHubId">virtual_hub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#virtual_hub_id PointToSiteVpnGateway#virtual_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.vpnServerConfigurationId">vpn_server_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#vpn_server_configuration_id PointToSiteVpnGateway#vpn_server_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.dnsServers">dns_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#dns_servers PointToSiteVpnGateway#dns_servers}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#id PointToSiteVpnGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.routingPreferenceInternetEnabled">routing_preference_internet_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#routing_preference_internet_enabled PointToSiteVpnGateway#routing_preference_internet_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#tags PointToSiteVpnGateway#tags}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_configuration`<sup>Required</sup> <a name="connection_configuration" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.connectionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration">PointToSiteVpnGatewayConnectionConfiguration</a>

connection_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#connection_configuration PointToSiteVpnGateway#connection_configuration}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#location PointToSiteVpnGateway#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#name PointToSiteVpnGateway#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#resource_group_name PointToSiteVpnGateway#resource_group_name}.

---

##### `scale_unit`<sup>Required</sup> <a name="scale_unit" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.scaleUnit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#scale_unit PointToSiteVpnGateway#scale_unit}.

---

##### `virtual_hub_id`<sup>Required</sup> <a name="virtual_hub_id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.virtualHubId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#virtual_hub_id PointToSiteVpnGateway#virtual_hub_id}.

---

##### `vpn_server_configuration_id`<sup>Required</sup> <a name="vpn_server_configuration_id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.vpnServerConfigurationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#vpn_server_configuration_id PointToSiteVpnGateway#vpn_server_configuration_id}.

---

##### `dns_servers`<sup>Optional</sup> <a name="dns_servers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.dnsServers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#dns_servers PointToSiteVpnGateway#dns_servers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#id PointToSiteVpnGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `routing_preference_internet_enabled`<sup>Optional</sup> <a name="routing_preference_internet_enabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.routingPreferenceInternetEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#routing_preference_internet_enabled PointToSiteVpnGateway#routing_preference_internet_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#tags PointToSiteVpnGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#timeouts PointToSiteVpnGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putConnectionConfiguration">put_connection_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetDnsServers">reset_dns_servers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetRoutingPreferenceInternetEnabled">reset_routing_preference_internet_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_connection_configuration` <a name="put_connection_configuration" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putConnectionConfiguration"></a>

```python
def put_connection_configuration(
  name: str,
  vpn_client_address_pool: PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool,
  internet_security_enabled: typing.Union[bool, IResolvable] = None,
  route: PointToSiteVpnGatewayConnectionConfigurationRoute = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putConnectionConfiguration.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#name PointToSiteVpnGateway#name}.

---

###### `vpn_client_address_pool`<sup>Required</sup> <a name="vpn_client_address_pool" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putConnectionConfiguration.parameter.vpnClientAddressPool"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a>

vpn_client_address_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#vpn_client_address_pool PointToSiteVpnGateway#vpn_client_address_pool}

---

###### `internet_security_enabled`<sup>Optional</sup> <a name="internet_security_enabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putConnectionConfiguration.parameter.internetSecurityEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#internet_security_enabled PointToSiteVpnGateway#internet_security_enabled}.

---

###### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putConnectionConfiguration.parameter.route"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a>

route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#route PointToSiteVpnGateway#route}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#create PointToSiteVpnGateway#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#delete PointToSiteVpnGateway#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#read PointToSiteVpnGateway#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#update PointToSiteVpnGateway#update}.

---

##### `reset_dns_servers` <a name="reset_dns_servers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetDnsServers"></a>

```python
def reset_dns_servers() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_routing_preference_internet_enabled` <a name="reset_routing_preference_internet_enabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetRoutingPreferenceInternetEnabled"></a>

```python
def reset_routing_preference_internet_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import point_to_site_vpn_gateway

pointToSiteVpnGateway.PointToSiteVpnGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import point_to_site_vpn_gateway

pointToSiteVpnGateway.PointToSiteVpnGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import point_to_site_vpn_gateway

pointToSiteVpnGateway.PointToSiteVpnGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.connectionConfiguration">connection_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference">PointToSiteVpnGatewayConnectionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference">PointToSiteVpnGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.connectionConfigurationInput">connection_configuration_input</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration">PointToSiteVpnGatewayConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.dnsServersInput">dns_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.routingPreferenceInternetEnabledInput">routing_preference_internet_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.scaleUnitInput">scale_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.virtualHubIdInput">virtual_hub_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.vpnServerConfigurationIdInput">vpn_server_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.dnsServers">dns_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.routingPreferenceInternetEnabled">routing_preference_internet_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.scaleUnit">scale_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.virtualHubId">virtual_hub_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.vpnServerConfigurationId">vpn_server_configuration_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_configuration`<sup>Required</sup> <a name="connection_configuration" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.connectionConfiguration"></a>

```python
connection_configuration: PointToSiteVpnGatewayConnectionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference">PointToSiteVpnGatewayConnectionConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.timeouts"></a>

```python
timeouts: PointToSiteVpnGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference">PointToSiteVpnGatewayTimeoutsOutputReference</a>

---

##### `connection_configuration_input`<sup>Optional</sup> <a name="connection_configuration_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.connectionConfigurationInput"></a>

```python
connection_configuration_input: PointToSiteVpnGatewayConnectionConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration">PointToSiteVpnGatewayConnectionConfiguration</a>

---

##### `dns_servers_input`<sup>Optional</sup> <a name="dns_servers_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.dnsServersInput"></a>

```python
dns_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `routing_preference_internet_enabled_input`<sup>Optional</sup> <a name="routing_preference_internet_enabled_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.routingPreferenceInternetEnabledInput"></a>

```python
routing_preference_internet_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scale_unit_input`<sup>Optional</sup> <a name="scale_unit_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.scaleUnitInput"></a>

```python
scale_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[PointToSiteVpnGatewayTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a>, cdktf.IResolvable]

---

##### `virtual_hub_id_input`<sup>Optional</sup> <a name="virtual_hub_id_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.virtualHubIdInput"></a>

```python
virtual_hub_id_input: str
```

- *Type:* str

---

##### `vpn_server_configuration_id_input`<sup>Optional</sup> <a name="vpn_server_configuration_id_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.vpnServerConfigurationIdInput"></a>

```python
vpn_server_configuration_id_input: str
```

- *Type:* str

---

##### `dns_servers`<sup>Required</sup> <a name="dns_servers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.dnsServers"></a>

```python
dns_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `routing_preference_internet_enabled`<sup>Required</sup> <a name="routing_preference_internet_enabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.routingPreferenceInternetEnabled"></a>

```python
routing_preference_internet_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scale_unit`<sup>Required</sup> <a name="scale_unit" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.scaleUnit"></a>

```python
scale_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `virtual_hub_id`<sup>Required</sup> <a name="virtual_hub_id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.virtualHubId"></a>

```python
virtual_hub_id: str
```

- *Type:* str

---

##### `vpn_server_configuration_id`<sup>Required</sup> <a name="vpn_server_configuration_id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.vpnServerConfigurationId"></a>

```python
vpn_server_configuration_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PointToSiteVpnGatewayConfig <a name="PointToSiteVpnGatewayConfig" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import point_to_site_vpn_gateway

pointToSiteVpnGateway.PointToSiteVpnGatewayConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_configuration: PointToSiteVpnGatewayConnectionConfiguration,
  location: str,
  name: str,
  resource_group_name: str,
  scale_unit: typing.Union[int, float],
  virtual_hub_id: str,
  vpn_server_configuration_id: str,
  dns_servers: typing.List[str] = None,
  id: str = None,
  routing_preference_internet_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: PointToSiteVpnGatewayTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.connectionConfiguration">connection_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration">PointToSiteVpnGatewayConnectionConfiguration</a></code> | connection_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#location PointToSiteVpnGateway#location}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#name PointToSiteVpnGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#resource_group_name PointToSiteVpnGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.scaleUnit">scale_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#scale_unit PointToSiteVpnGateway#scale_unit}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.virtualHubId">virtual_hub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#virtual_hub_id PointToSiteVpnGateway#virtual_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.vpnServerConfigurationId">vpn_server_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#vpn_server_configuration_id PointToSiteVpnGateway#vpn_server_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.dnsServers">dns_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#dns_servers PointToSiteVpnGateway#dns_servers}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#id PointToSiteVpnGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.routingPreferenceInternetEnabled">routing_preference_internet_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#routing_preference_internet_enabled PointToSiteVpnGateway#routing_preference_internet_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#tags PointToSiteVpnGateway#tags}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_configuration`<sup>Required</sup> <a name="connection_configuration" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.connectionConfiguration"></a>

```python
connection_configuration: PointToSiteVpnGatewayConnectionConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration">PointToSiteVpnGatewayConnectionConfiguration</a>

connection_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#connection_configuration PointToSiteVpnGateway#connection_configuration}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#location PointToSiteVpnGateway#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#name PointToSiteVpnGateway#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#resource_group_name PointToSiteVpnGateway#resource_group_name}.

---

##### `scale_unit`<sup>Required</sup> <a name="scale_unit" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.scaleUnit"></a>

```python
scale_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#scale_unit PointToSiteVpnGateway#scale_unit}.

---

##### `virtual_hub_id`<sup>Required</sup> <a name="virtual_hub_id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.virtualHubId"></a>

```python
virtual_hub_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#virtual_hub_id PointToSiteVpnGateway#virtual_hub_id}.

---

##### `vpn_server_configuration_id`<sup>Required</sup> <a name="vpn_server_configuration_id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.vpnServerConfigurationId"></a>

```python
vpn_server_configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#vpn_server_configuration_id PointToSiteVpnGateway#vpn_server_configuration_id}.

---

##### `dns_servers`<sup>Optional</sup> <a name="dns_servers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.dnsServers"></a>

```python
dns_servers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#dns_servers PointToSiteVpnGateway#dns_servers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#id PointToSiteVpnGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `routing_preference_internet_enabled`<sup>Optional</sup> <a name="routing_preference_internet_enabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.routingPreferenceInternetEnabled"></a>

```python
routing_preference_internet_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#routing_preference_internet_enabled PointToSiteVpnGateway#routing_preference_internet_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#tags PointToSiteVpnGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConfig.property.timeouts"></a>

```python
timeouts: PointToSiteVpnGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#timeouts PointToSiteVpnGateway#timeouts}

---

### PointToSiteVpnGatewayConnectionConfiguration <a name="PointToSiteVpnGatewayConnectionConfiguration" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import point_to_site_vpn_gateway

pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration(
  name: str,
  vpn_client_address_pool: PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool,
  internet_security_enabled: typing.Union[bool, IResolvable] = None,
  route: PointToSiteVpnGatewayConnectionConfigurationRoute = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#name PointToSiteVpnGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.vpnClientAddressPool">vpn_client_address_pool</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a></code> | vpn_client_address_pool block. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.internetSecurityEnabled">internet_security_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#internet_security_enabled PointToSiteVpnGateway#internet_security_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.route">route</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a></code> | route block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#name PointToSiteVpnGateway#name}.

---

##### `vpn_client_address_pool`<sup>Required</sup> <a name="vpn_client_address_pool" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.vpnClientAddressPool"></a>

```python
vpn_client_address_pool: PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a>

vpn_client_address_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#vpn_client_address_pool PointToSiteVpnGateway#vpn_client_address_pool}

---

##### `internet_security_enabled`<sup>Optional</sup> <a name="internet_security_enabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.internetSecurityEnabled"></a>

```python
internet_security_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#internet_security_enabled PointToSiteVpnGateway#internet_security_enabled}.

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration.property.route"></a>

```python
route: PointToSiteVpnGatewayConnectionConfigurationRoute
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a>

route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#route PointToSiteVpnGateway#route}

---

### PointToSiteVpnGatewayConnectionConfigurationRoute <a name="PointToSiteVpnGatewayConnectionConfigurationRoute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import point_to_site_vpn_gateway

pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute(
  associated_route_table_id: str,
  inbound_route_map_id: str = None,
  outbound_route_map_id: str = None,
  propagated_route_table: PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.associatedRouteTableId">associated_route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#associated_route_table_id PointToSiteVpnGateway#associated_route_table_id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.inboundRouteMapId">inbound_route_map_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#inbound_route_map_id PointToSiteVpnGateway#inbound_route_map_id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.outboundRouteMapId">outbound_route_map_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#outbound_route_map_id PointToSiteVpnGateway#outbound_route_map_id}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.propagatedRouteTable">propagated_route_table</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a></code> | propagated_route_table block. |

---

##### `associated_route_table_id`<sup>Required</sup> <a name="associated_route_table_id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.associatedRouteTableId"></a>

```python
associated_route_table_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#associated_route_table_id PointToSiteVpnGateway#associated_route_table_id}.

---

##### `inbound_route_map_id`<sup>Optional</sup> <a name="inbound_route_map_id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.inboundRouteMapId"></a>

```python
inbound_route_map_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#inbound_route_map_id PointToSiteVpnGateway#inbound_route_map_id}.

---

##### `outbound_route_map_id`<sup>Optional</sup> <a name="outbound_route_map_id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.outboundRouteMapId"></a>

```python
outbound_route_map_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#outbound_route_map_id PointToSiteVpnGateway#outbound_route_map_id}.

---

##### `propagated_route_table`<sup>Optional</sup> <a name="propagated_route_table" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute.property.propagatedRouteTable"></a>

```python
propagated_route_table: PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a>

propagated_route_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#propagated_route_table PointToSiteVpnGateway#propagated_route_table}

---

### PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable <a name="PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import point_to_site_vpn_gateway

pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable(
  ids: typing.List[str],
  labels: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable.property.ids">ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#ids PointToSiteVpnGateway#ids}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable.property.labels">labels</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#labels PointToSiteVpnGateway#labels}. |

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable.property.ids"></a>

```python
ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#ids PointToSiteVpnGateway#ids}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#labels PointToSiteVpnGateway#labels}.

---

### PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool <a name="PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import point_to_site_vpn_gateway

pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool(
  address_prefixes: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool.property.addressPrefixes">address_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#address_prefixes PointToSiteVpnGateway#address_prefixes}. |

---

##### `address_prefixes`<sup>Required</sup> <a name="address_prefixes" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool.property.addressPrefixes"></a>

```python
address_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#address_prefixes PointToSiteVpnGateway#address_prefixes}.

---

### PointToSiteVpnGatewayTimeouts <a name="PointToSiteVpnGatewayTimeouts" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import point_to_site_vpn_gateway

pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#create PointToSiteVpnGateway#create}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#delete PointToSiteVpnGateway#delete}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#read PointToSiteVpnGateway#read}. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#update PointToSiteVpnGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#create PointToSiteVpnGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#delete PointToSiteVpnGateway#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#read PointToSiteVpnGateway#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#update PointToSiteVpnGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PointToSiteVpnGatewayConnectionConfigurationOutputReference <a name="PointToSiteVpnGatewayConnectionConfigurationOutputReference" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import point_to_site_vpn_gateway

pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putRoute">put_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putVpnClientAddressPool">put_vpn_client_address_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resetInternetSecurityEnabled">reset_internet_security_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resetRoute">reset_route</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_route` <a name="put_route" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putRoute"></a>

```python
def put_route(
  associated_route_table_id: str,
  inbound_route_map_id: str = None,
  outbound_route_map_id: str = None,
  propagated_route_table: PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable = None
) -> None
```

###### `associated_route_table_id`<sup>Required</sup> <a name="associated_route_table_id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putRoute.parameter.associatedRouteTableId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#associated_route_table_id PointToSiteVpnGateway#associated_route_table_id}.

---

###### `inbound_route_map_id`<sup>Optional</sup> <a name="inbound_route_map_id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putRoute.parameter.inboundRouteMapId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#inbound_route_map_id PointToSiteVpnGateway#inbound_route_map_id}.

---

###### `outbound_route_map_id`<sup>Optional</sup> <a name="outbound_route_map_id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putRoute.parameter.outboundRouteMapId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#outbound_route_map_id PointToSiteVpnGateway#outbound_route_map_id}.

---

###### `propagated_route_table`<sup>Optional</sup> <a name="propagated_route_table" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putRoute.parameter.propagatedRouteTable"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a>

propagated_route_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#propagated_route_table PointToSiteVpnGateway#propagated_route_table}

---

##### `put_vpn_client_address_pool` <a name="put_vpn_client_address_pool" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putVpnClientAddressPool"></a>

```python
def put_vpn_client_address_pool(
  address_prefixes: typing.List[str]
) -> None
```

###### `address_prefixes`<sup>Required</sup> <a name="address_prefixes" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.putVpnClientAddressPool.parameter.addressPrefixes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#address_prefixes PointToSiteVpnGateway#address_prefixes}.

---

##### `reset_internet_security_enabled` <a name="reset_internet_security_enabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resetInternetSecurityEnabled"></a>

```python
def reset_internet_security_enabled() -> None
```

##### `reset_route` <a name="reset_route" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.resetRoute"></a>

```python
def reset_route() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.route">route</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference">PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.vpnClientAddressPool">vpn_client_address_pool</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.internetSecurityEnabledInput">internet_security_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.routeInput">route_input</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.vpnClientAddressPoolInput">vpn_client_address_pool_input</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.internetSecurityEnabled">internet_security_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration">PointToSiteVpnGatewayConnectionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.route"></a>

```python
route: PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference">PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference</a>

---

##### `vpn_client_address_pool`<sup>Required</sup> <a name="vpn_client_address_pool" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.vpnClientAddressPool"></a>

```python
vpn_client_address_pool: PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference</a>

---

##### `internet_security_enabled_input`<sup>Optional</sup> <a name="internet_security_enabled_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.internetSecurityEnabledInput"></a>

```python
internet_security_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `route_input`<sup>Optional</sup> <a name="route_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.routeInput"></a>

```python
route_input: PointToSiteVpnGatewayConnectionConfigurationRoute
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a>

---

##### `vpn_client_address_pool_input`<sup>Optional</sup> <a name="vpn_client_address_pool_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.vpnClientAddressPoolInput"></a>

```python
vpn_client_address_pool_input: PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a>

---

##### `internet_security_enabled`<sup>Required</sup> <a name="internet_security_enabled" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.internetSecurityEnabled"></a>

```python
internet_security_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: PointToSiteVpnGatewayConnectionConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfiguration">PointToSiteVpnGatewayConnectionConfiguration</a>

---


### PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference <a name="PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import point_to_site_vpn_gateway

pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.putPropagatedRouteTable">put_propagated_route_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resetInboundRouteMapId">reset_inbound_route_map_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resetOutboundRouteMapId">reset_outbound_route_map_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resetPropagatedRouteTable">reset_propagated_route_table</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_propagated_route_table` <a name="put_propagated_route_table" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.putPropagatedRouteTable"></a>

```python
def put_propagated_route_table(
  ids: typing.List[str],
  labels: typing.List[str] = None
) -> None
```

###### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.putPropagatedRouteTable.parameter.ids"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#ids PointToSiteVpnGateway#ids}.

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.putPropagatedRouteTable.parameter.labels"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/point_to_site_vpn_gateway#labels PointToSiteVpnGateway#labels}.

---

##### `reset_inbound_route_map_id` <a name="reset_inbound_route_map_id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resetInboundRouteMapId"></a>

```python
def reset_inbound_route_map_id() -> None
```

##### `reset_outbound_route_map_id` <a name="reset_outbound_route_map_id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resetOutboundRouteMapId"></a>

```python
def reset_outbound_route_map_id() -> None
```

##### `reset_propagated_route_table` <a name="reset_propagated_route_table" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.resetPropagatedRouteTable"></a>

```python
def reset_propagated_route_table() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.propagatedRouteTable">propagated_route_table</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.associatedRouteTableIdInput">associated_route_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.inboundRouteMapIdInput">inbound_route_map_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.outboundRouteMapIdInput">outbound_route_map_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.propagatedRouteTableInput">propagated_route_table_input</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.associatedRouteTableId">associated_route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.inboundRouteMapId">inbound_route_map_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.outboundRouteMapId">outbound_route_map_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `propagated_route_table`<sup>Required</sup> <a name="propagated_route_table" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.propagatedRouteTable"></a>

```python
propagated_route_table: PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference</a>

---

##### `associated_route_table_id_input`<sup>Optional</sup> <a name="associated_route_table_id_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.associatedRouteTableIdInput"></a>

```python
associated_route_table_id_input: str
```

- *Type:* str

---

##### `inbound_route_map_id_input`<sup>Optional</sup> <a name="inbound_route_map_id_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.inboundRouteMapIdInput"></a>

```python
inbound_route_map_id_input: str
```

- *Type:* str

---

##### `outbound_route_map_id_input`<sup>Optional</sup> <a name="outbound_route_map_id_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.outboundRouteMapIdInput"></a>

```python
outbound_route_map_id_input: str
```

- *Type:* str

---

##### `propagated_route_table_input`<sup>Optional</sup> <a name="propagated_route_table_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.propagatedRouteTableInput"></a>

```python
propagated_route_table_input: PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a>

---

##### `associated_route_table_id`<sup>Required</sup> <a name="associated_route_table_id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.associatedRouteTableId"></a>

```python
associated_route_table_id: str
```

- *Type:* str

---

##### `inbound_route_map_id`<sup>Required</sup> <a name="inbound_route_map_id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.inboundRouteMapId"></a>

```python
inbound_route_map_id: str
```

- *Type:* str

---

##### `outbound_route_map_id`<sup>Required</sup> <a name="outbound_route_map_id" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.outboundRouteMapId"></a>

```python
outbound_route_map_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference.property.internalValue"></a>

```python
internal_value: PointToSiteVpnGatewayConnectionConfigurationRoute
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoute">PointToSiteVpnGatewayConnectionConfigurationRoute</a>

---


### PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference <a name="PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import point_to_site_vpn_gateway

pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.resetLabels">reset_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.idsInput">ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.ids">ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ids_input`<sup>Optional</sup> <a name="ids_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.idsInput"></a>

```python
ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.labelsInput"></a>

```python
labels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.ids"></a>

```python
ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference.property.internalValue"></a>

```python
internal_value: PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable">PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable</a>

---


### PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference <a name="PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import point_to_site_vpn_gateway

pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.addressPrefixesInput">address_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.addressPrefixes">address_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_prefixes_input`<sup>Optional</sup> <a name="address_prefixes_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.addressPrefixesInput"></a>

```python
address_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `address_prefixes`<sup>Required</sup> <a name="address_prefixes" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.addressPrefixes"></a>

```python
address_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference.property.internalValue"></a>

```python
internal_value: PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool
```

- *Type:* <a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool">PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool</a>

---


### PointToSiteVpnGatewayTimeoutsOutputReference <a name="PointToSiteVpnGatewayTimeoutsOutputReference" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import point_to_site_vpn_gateway

pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[PointToSiteVpnGatewayTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.pointToSiteVpnGateway.PointToSiteVpnGatewayTimeouts">PointToSiteVpnGatewayTimeouts</a>, cdktf.IResolvable]

---



