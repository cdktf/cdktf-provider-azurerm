# `azurerm_virtual_network_gateway_connection`

Refer to the Terraform Registory for docs: [`azurerm_virtual_network_gateway_connection`](https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection).

# `virtualNetworkGatewayConnection` Submodule <a name="`virtualNetworkGatewayConnection` Submodule" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualNetworkGatewayConnection <a name="VirtualNetworkGatewayConnection" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection azurerm_virtual_network_gateway_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_connection

virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection(
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
  type: str,
  virtual_network_gateway_id: str,
  authorization_key: str = None,
  connection_mode: str = None,
  connection_protocol: str = None,
  custom_bgp_addresses: VirtualNetworkGatewayConnectionCustomBgpAddresses = None,
  dpd_timeout_seconds: typing.Union[int, float] = None,
  egress_nat_rule_ids: typing.List[str] = None,
  enable_bgp: typing.Union[bool, IResolvable] = None,
  express_route_circuit_id: str = None,
  express_route_gateway_bypass: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ingress_nat_rule_ids: typing.List[str] = None,
  ipsec_policy: VirtualNetworkGatewayConnectionIpsecPolicy = None,
  local_azure_ip_address_enabled: typing.Union[bool, IResolvable] = None,
  local_network_gateway_id: str = None,
  peer_virtual_network_gateway_id: str = None,
  routing_weight: typing.Union[int, float] = None,
  shared_key: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: VirtualNetworkGatewayConnectionTimeouts = None,
  traffic_selector_policy: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayConnectionTrafficSelectorPolicy]] = None,
  use_policy_based_traffic_selectors: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#location VirtualNetworkGatewayConnection#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#name VirtualNetworkGatewayConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#resource_group_name VirtualNetworkGatewayConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#type VirtualNetworkGatewayConnection#type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.virtualNetworkGatewayId">virtual_network_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#virtual_network_gateway_id VirtualNetworkGatewayConnection#virtual_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.authorizationKey">authorization_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#authorization_key VirtualNetworkGatewayConnection#authorization_key}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.connectionMode">connection_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#connection_mode VirtualNetworkGatewayConnection#connection_mode}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.connectionProtocol">connection_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#connection_protocol VirtualNetworkGatewayConnection#connection_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.customBgpAddresses">custom_bgp_addresses</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses">VirtualNetworkGatewayConnectionCustomBgpAddresses</a></code> | custom_bgp_addresses block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.dpdTimeoutSeconds">dpd_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#dpd_timeout_seconds VirtualNetworkGatewayConnection#dpd_timeout_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.egressNatRuleIds">egress_nat_rule_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#egress_nat_rule_ids VirtualNetworkGatewayConnection#egress_nat_rule_ids}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.enableBgp">enable_bgp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#enable_bgp VirtualNetworkGatewayConnection#enable_bgp}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.expressRouteCircuitId">express_route_circuit_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#express_route_circuit_id VirtualNetworkGatewayConnection#express_route_circuit_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.expressRouteGatewayBypass">express_route_gateway_bypass</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#express_route_gateway_bypass VirtualNetworkGatewayConnection#express_route_gateway_bypass}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#id VirtualNetworkGatewayConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.ingressNatRuleIds">ingress_nat_rule_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#ingress_nat_rule_ids VirtualNetworkGatewayConnection#ingress_nat_rule_ids}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.ipsecPolicy">ipsec_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a></code> | ipsec_policy block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.localAzureIpAddressEnabled">local_azure_ip_address_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#local_azure_ip_address_enabled VirtualNetworkGatewayConnection#local_azure_ip_address_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.localNetworkGatewayId">local_network_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#local_network_gateway_id VirtualNetworkGatewayConnection#local_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.peerVirtualNetworkGatewayId">peer_virtual_network_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#peer_virtual_network_gateway_id VirtualNetworkGatewayConnection#peer_virtual_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.routingWeight">routing_weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#routing_weight VirtualNetworkGatewayConnection#routing_weight}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.sharedKey">shared_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#shared_key VirtualNetworkGatewayConnection#shared_key}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#tags VirtualNetworkGatewayConnection#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts">VirtualNetworkGatewayConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.trafficSelectorPolicy">traffic_selector_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy">VirtualNetworkGatewayConnectionTrafficSelectorPolicy</a>]]</code> | traffic_selector_policy block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.usePolicyBasedTrafficSelectors">use_policy_based_traffic_selectors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#use_policy_based_traffic_selectors VirtualNetworkGatewayConnection#use_policy_based_traffic_selectors}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#location VirtualNetworkGatewayConnection#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#name VirtualNetworkGatewayConnection#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#resource_group_name VirtualNetworkGatewayConnection#resource_group_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#type VirtualNetworkGatewayConnection#type}.

---

##### `virtual_network_gateway_id`<sup>Required</sup> <a name="virtual_network_gateway_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.virtualNetworkGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#virtual_network_gateway_id VirtualNetworkGatewayConnection#virtual_network_gateway_id}.

---

##### `authorization_key`<sup>Optional</sup> <a name="authorization_key" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.authorizationKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#authorization_key VirtualNetworkGatewayConnection#authorization_key}.

---

##### `connection_mode`<sup>Optional</sup> <a name="connection_mode" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.connectionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#connection_mode VirtualNetworkGatewayConnection#connection_mode}.

---

##### `connection_protocol`<sup>Optional</sup> <a name="connection_protocol" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.connectionProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#connection_protocol VirtualNetworkGatewayConnection#connection_protocol}.

---

##### `custom_bgp_addresses`<sup>Optional</sup> <a name="custom_bgp_addresses" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.customBgpAddresses"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses">VirtualNetworkGatewayConnectionCustomBgpAddresses</a>

custom_bgp_addresses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#custom_bgp_addresses VirtualNetworkGatewayConnection#custom_bgp_addresses}

---

##### `dpd_timeout_seconds`<sup>Optional</sup> <a name="dpd_timeout_seconds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.dpdTimeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#dpd_timeout_seconds VirtualNetworkGatewayConnection#dpd_timeout_seconds}.

---

##### `egress_nat_rule_ids`<sup>Optional</sup> <a name="egress_nat_rule_ids" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.egressNatRuleIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#egress_nat_rule_ids VirtualNetworkGatewayConnection#egress_nat_rule_ids}.

---

##### `enable_bgp`<sup>Optional</sup> <a name="enable_bgp" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.enableBgp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#enable_bgp VirtualNetworkGatewayConnection#enable_bgp}.

---

##### `express_route_circuit_id`<sup>Optional</sup> <a name="express_route_circuit_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.expressRouteCircuitId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#express_route_circuit_id VirtualNetworkGatewayConnection#express_route_circuit_id}.

---

##### `express_route_gateway_bypass`<sup>Optional</sup> <a name="express_route_gateway_bypass" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.expressRouteGatewayBypass"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#express_route_gateway_bypass VirtualNetworkGatewayConnection#express_route_gateway_bypass}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#id VirtualNetworkGatewayConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress_nat_rule_ids`<sup>Optional</sup> <a name="ingress_nat_rule_ids" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.ingressNatRuleIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#ingress_nat_rule_ids VirtualNetworkGatewayConnection#ingress_nat_rule_ids}.

---

##### `ipsec_policy`<sup>Optional</sup> <a name="ipsec_policy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.ipsecPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a>

ipsec_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#ipsec_policy VirtualNetworkGatewayConnection#ipsec_policy}

---

##### `local_azure_ip_address_enabled`<sup>Optional</sup> <a name="local_azure_ip_address_enabled" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.localAzureIpAddressEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#local_azure_ip_address_enabled VirtualNetworkGatewayConnection#local_azure_ip_address_enabled}.

---

##### `local_network_gateway_id`<sup>Optional</sup> <a name="local_network_gateway_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.localNetworkGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#local_network_gateway_id VirtualNetworkGatewayConnection#local_network_gateway_id}.

---

##### `peer_virtual_network_gateway_id`<sup>Optional</sup> <a name="peer_virtual_network_gateway_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.peerVirtualNetworkGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#peer_virtual_network_gateway_id VirtualNetworkGatewayConnection#peer_virtual_network_gateway_id}.

---

##### `routing_weight`<sup>Optional</sup> <a name="routing_weight" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.routingWeight"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#routing_weight VirtualNetworkGatewayConnection#routing_weight}.

---

##### `shared_key`<sup>Optional</sup> <a name="shared_key" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.sharedKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#shared_key VirtualNetworkGatewayConnection#shared_key}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#tags VirtualNetworkGatewayConnection#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts">VirtualNetworkGatewayConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#timeouts VirtualNetworkGatewayConnection#timeouts}

---

##### `traffic_selector_policy`<sup>Optional</sup> <a name="traffic_selector_policy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.trafficSelectorPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy">VirtualNetworkGatewayConnectionTrafficSelectorPolicy</a>]]

traffic_selector_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#traffic_selector_policy VirtualNetworkGatewayConnection#traffic_selector_policy}

---

##### `use_policy_based_traffic_selectors`<sup>Optional</sup> <a name="use_policy_based_traffic_selectors" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.usePolicyBasedTrafficSelectors"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#use_policy_based_traffic_selectors VirtualNetworkGatewayConnection#use_policy_based_traffic_selectors}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putCustomBgpAddresses">put_custom_bgp_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putIpsecPolicy">put_ipsec_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putTrafficSelectorPolicy">put_traffic_selector_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetAuthorizationKey">reset_authorization_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetConnectionMode">reset_connection_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetConnectionProtocol">reset_connection_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetCustomBgpAddresses">reset_custom_bgp_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetDpdTimeoutSeconds">reset_dpd_timeout_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetEgressNatRuleIds">reset_egress_nat_rule_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetEnableBgp">reset_enable_bgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetExpressRouteCircuitId">reset_express_route_circuit_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetExpressRouteGatewayBypass">reset_express_route_gateway_bypass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetIngressNatRuleIds">reset_ingress_nat_rule_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetIpsecPolicy">reset_ipsec_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetLocalAzureIpAddressEnabled">reset_local_azure_ip_address_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetLocalNetworkGatewayId">reset_local_network_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetPeerVirtualNetworkGatewayId">reset_peer_virtual_network_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetRoutingWeight">reset_routing_weight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetSharedKey">reset_shared_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetTrafficSelectorPolicy">reset_traffic_selector_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetUsePolicyBasedTrafficSelectors">reset_use_policy_based_traffic_selectors</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_custom_bgp_addresses` <a name="put_custom_bgp_addresses" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putCustomBgpAddresses"></a>

```python
def put_custom_bgp_addresses(
  primary: str,
  secondary: str
) -> None
```

###### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putCustomBgpAddresses.parameter.primary"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#primary VirtualNetworkGatewayConnection#primary}.

---

###### `secondary`<sup>Required</sup> <a name="secondary" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putCustomBgpAddresses.parameter.secondary"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#secondary VirtualNetworkGatewayConnection#secondary}.

---

##### `put_ipsec_policy` <a name="put_ipsec_policy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putIpsecPolicy"></a>

```python
def put_ipsec_policy(
  dh_group: str,
  ike_encryption: str,
  ike_integrity: str,
  ipsec_encryption: str,
  ipsec_integrity: str,
  pfs_group: str,
  sa_datasize: typing.Union[int, float] = None,
  sa_lifetime: typing.Union[int, float] = None
) -> None
```

###### `dh_group`<sup>Required</sup> <a name="dh_group" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putIpsecPolicy.parameter.dhGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#dh_group VirtualNetworkGatewayConnection#dh_group}.

---

###### `ike_encryption`<sup>Required</sup> <a name="ike_encryption" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putIpsecPolicy.parameter.ikeEncryption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#ike_encryption VirtualNetworkGatewayConnection#ike_encryption}.

---

###### `ike_integrity`<sup>Required</sup> <a name="ike_integrity" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putIpsecPolicy.parameter.ikeIntegrity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#ike_integrity VirtualNetworkGatewayConnection#ike_integrity}.

---

###### `ipsec_encryption`<sup>Required</sup> <a name="ipsec_encryption" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putIpsecPolicy.parameter.ipsecEncryption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#ipsec_encryption VirtualNetworkGatewayConnection#ipsec_encryption}.

---

###### `ipsec_integrity`<sup>Required</sup> <a name="ipsec_integrity" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putIpsecPolicy.parameter.ipsecIntegrity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#ipsec_integrity VirtualNetworkGatewayConnection#ipsec_integrity}.

---

###### `pfs_group`<sup>Required</sup> <a name="pfs_group" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putIpsecPolicy.parameter.pfsGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#pfs_group VirtualNetworkGatewayConnection#pfs_group}.

---

###### `sa_datasize`<sup>Optional</sup> <a name="sa_datasize" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putIpsecPolicy.parameter.saDatasize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#sa_datasize VirtualNetworkGatewayConnection#sa_datasize}.

---

###### `sa_lifetime`<sup>Optional</sup> <a name="sa_lifetime" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putIpsecPolicy.parameter.saLifetime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#sa_lifetime VirtualNetworkGatewayConnection#sa_lifetime}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#create VirtualNetworkGatewayConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#delete VirtualNetworkGatewayConnection#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#read VirtualNetworkGatewayConnection#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#update VirtualNetworkGatewayConnection#update}.

---

##### `put_traffic_selector_policy` <a name="put_traffic_selector_policy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putTrafficSelectorPolicy"></a>

```python
def put_traffic_selector_policy(
  value: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayConnectionTrafficSelectorPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putTrafficSelectorPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy">VirtualNetworkGatewayConnectionTrafficSelectorPolicy</a>]]

---

##### `reset_authorization_key` <a name="reset_authorization_key" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetAuthorizationKey"></a>

```python
def reset_authorization_key() -> None
```

##### `reset_connection_mode` <a name="reset_connection_mode" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetConnectionMode"></a>

```python
def reset_connection_mode() -> None
```

##### `reset_connection_protocol` <a name="reset_connection_protocol" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetConnectionProtocol"></a>

```python
def reset_connection_protocol() -> None
```

##### `reset_custom_bgp_addresses` <a name="reset_custom_bgp_addresses" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetCustomBgpAddresses"></a>

```python
def reset_custom_bgp_addresses() -> None
```

##### `reset_dpd_timeout_seconds` <a name="reset_dpd_timeout_seconds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetDpdTimeoutSeconds"></a>

```python
def reset_dpd_timeout_seconds() -> None
```

##### `reset_egress_nat_rule_ids` <a name="reset_egress_nat_rule_ids" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetEgressNatRuleIds"></a>

```python
def reset_egress_nat_rule_ids() -> None
```

##### `reset_enable_bgp` <a name="reset_enable_bgp" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetEnableBgp"></a>

```python
def reset_enable_bgp() -> None
```

##### `reset_express_route_circuit_id` <a name="reset_express_route_circuit_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetExpressRouteCircuitId"></a>

```python
def reset_express_route_circuit_id() -> None
```

##### `reset_express_route_gateway_bypass` <a name="reset_express_route_gateway_bypass" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetExpressRouteGatewayBypass"></a>

```python
def reset_express_route_gateway_bypass() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ingress_nat_rule_ids` <a name="reset_ingress_nat_rule_ids" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetIngressNatRuleIds"></a>

```python
def reset_ingress_nat_rule_ids() -> None
```

##### `reset_ipsec_policy` <a name="reset_ipsec_policy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetIpsecPolicy"></a>

```python
def reset_ipsec_policy() -> None
```

##### `reset_local_azure_ip_address_enabled` <a name="reset_local_azure_ip_address_enabled" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetLocalAzureIpAddressEnabled"></a>

```python
def reset_local_azure_ip_address_enabled() -> None
```

##### `reset_local_network_gateway_id` <a name="reset_local_network_gateway_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetLocalNetworkGatewayId"></a>

```python
def reset_local_network_gateway_id() -> None
```

##### `reset_peer_virtual_network_gateway_id` <a name="reset_peer_virtual_network_gateway_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetPeerVirtualNetworkGatewayId"></a>

```python
def reset_peer_virtual_network_gateway_id() -> None
```

##### `reset_routing_weight` <a name="reset_routing_weight" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetRoutingWeight"></a>

```python
def reset_routing_weight() -> None
```

##### `reset_shared_key` <a name="reset_shared_key" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetSharedKey"></a>

```python
def reset_shared_key() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_traffic_selector_policy` <a name="reset_traffic_selector_policy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetTrafficSelectorPolicy"></a>

```python
def reset_traffic_selector_policy() -> None
```

##### `reset_use_policy_based_traffic_selectors` <a name="reset_use_policy_based_traffic_selectors" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetUsePolicyBasedTrafficSelectors"></a>

```python
def reset_use_policy_based_traffic_selectors() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_connection

virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_connection

virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_connection

virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.customBgpAddresses">custom_bgp_addresses</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference">VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ipsecPolicy">ipsec_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference">VirtualNetworkGatewayConnectionIpsecPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference">VirtualNetworkGatewayConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.trafficSelectorPolicy">traffic_selector_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList">VirtualNetworkGatewayConnectionTrafficSelectorPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.authorizationKeyInput">authorization_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connectionModeInput">connection_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connectionProtocolInput">connection_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.customBgpAddressesInput">custom_bgp_addresses_input</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses">VirtualNetworkGatewayConnectionCustomBgpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.dpdTimeoutSecondsInput">dpd_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.egressNatRuleIdsInput">egress_nat_rule_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.enableBgpInput">enable_bgp_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteCircuitIdInput">express_route_circuit_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteGatewayBypassInput">express_route_gateway_bypass_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ingressNatRuleIdsInput">ingress_nat_rule_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ipsecPolicyInput">ipsec_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localAzureIpAddressEnabledInput">local_azure_ip_address_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localNetworkGatewayIdInput">local_network_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayIdInput">peer_virtual_network_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.routingWeightInput">routing_weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.sharedKeyInput">shared_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts">VirtualNetworkGatewayConnectionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.trafficSelectorPolicyInput">traffic_selector_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy">VirtualNetworkGatewayConnectionTrafficSelectorPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectorsInput">use_policy_based_traffic_selectors_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.virtualNetworkGatewayIdInput">virtual_network_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.authorizationKey">authorization_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connectionMode">connection_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connectionProtocol">connection_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.dpdTimeoutSeconds">dpd_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.egressNatRuleIds">egress_nat_rule_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.enableBgp">enable_bgp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteCircuitId">express_route_circuit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteGatewayBypass">express_route_gateway_bypass</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ingressNatRuleIds">ingress_nat_rule_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localAzureIpAddressEnabled">local_azure_ip_address_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localNetworkGatewayId">local_network_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayId">peer_virtual_network_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.routingWeight">routing_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.sharedKey">shared_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectors">use_policy_based_traffic_selectors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.virtualNetworkGatewayId">virtual_network_gateway_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_bgp_addresses`<sup>Required</sup> <a name="custom_bgp_addresses" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.customBgpAddresses"></a>

```python
custom_bgp_addresses: VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference">VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference</a>

---

##### `ipsec_policy`<sup>Required</sup> <a name="ipsec_policy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ipsecPolicy"></a>

```python
ipsec_policy: VirtualNetworkGatewayConnectionIpsecPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference">VirtualNetworkGatewayConnectionIpsecPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.timeouts"></a>

```python
timeouts: VirtualNetworkGatewayConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference">VirtualNetworkGatewayConnectionTimeoutsOutputReference</a>

---

##### `traffic_selector_policy`<sup>Required</sup> <a name="traffic_selector_policy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.trafficSelectorPolicy"></a>

```python
traffic_selector_policy: VirtualNetworkGatewayConnectionTrafficSelectorPolicyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList">VirtualNetworkGatewayConnectionTrafficSelectorPolicyList</a>

---

##### `authorization_key_input`<sup>Optional</sup> <a name="authorization_key_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.authorizationKeyInput"></a>

```python
authorization_key_input: str
```

- *Type:* str

---

##### `connection_mode_input`<sup>Optional</sup> <a name="connection_mode_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connectionModeInput"></a>

```python
connection_mode_input: str
```

- *Type:* str

---

##### `connection_protocol_input`<sup>Optional</sup> <a name="connection_protocol_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connectionProtocolInput"></a>

```python
connection_protocol_input: str
```

- *Type:* str

---

##### `custom_bgp_addresses_input`<sup>Optional</sup> <a name="custom_bgp_addresses_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.customBgpAddressesInput"></a>

```python
custom_bgp_addresses_input: VirtualNetworkGatewayConnectionCustomBgpAddresses
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses">VirtualNetworkGatewayConnectionCustomBgpAddresses</a>

---

##### `dpd_timeout_seconds_input`<sup>Optional</sup> <a name="dpd_timeout_seconds_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.dpdTimeoutSecondsInput"></a>

```python
dpd_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `egress_nat_rule_ids_input`<sup>Optional</sup> <a name="egress_nat_rule_ids_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.egressNatRuleIdsInput"></a>

```python
egress_nat_rule_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_bgp_input`<sup>Optional</sup> <a name="enable_bgp_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.enableBgpInput"></a>

```python
enable_bgp_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `express_route_circuit_id_input`<sup>Optional</sup> <a name="express_route_circuit_id_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteCircuitIdInput"></a>

```python
express_route_circuit_id_input: str
```

- *Type:* str

---

##### `express_route_gateway_bypass_input`<sup>Optional</sup> <a name="express_route_gateway_bypass_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteGatewayBypassInput"></a>

```python
express_route_gateway_bypass_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingress_nat_rule_ids_input`<sup>Optional</sup> <a name="ingress_nat_rule_ids_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ingressNatRuleIdsInput"></a>

```python
ingress_nat_rule_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipsec_policy_input`<sup>Optional</sup> <a name="ipsec_policy_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ipsecPolicyInput"></a>

```python
ipsec_policy_input: VirtualNetworkGatewayConnectionIpsecPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a>

---

##### `local_azure_ip_address_enabled_input`<sup>Optional</sup> <a name="local_azure_ip_address_enabled_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localAzureIpAddressEnabledInput"></a>

```python
local_azure_ip_address_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `local_network_gateway_id_input`<sup>Optional</sup> <a name="local_network_gateway_id_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localNetworkGatewayIdInput"></a>

```python
local_network_gateway_id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `peer_virtual_network_gateway_id_input`<sup>Optional</sup> <a name="peer_virtual_network_gateway_id_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayIdInput"></a>

```python
peer_virtual_network_gateway_id_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `routing_weight_input`<sup>Optional</sup> <a name="routing_weight_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.routingWeightInput"></a>

```python
routing_weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shared_key_input`<sup>Optional</sup> <a name="shared_key_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.sharedKeyInput"></a>

```python
shared_key_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[VirtualNetworkGatewayConnectionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts">VirtualNetworkGatewayConnectionTimeouts</a>, cdktf.IResolvable]

---

##### `traffic_selector_policy_input`<sup>Optional</sup> <a name="traffic_selector_policy_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.trafficSelectorPolicyInput"></a>

```python
traffic_selector_policy_input: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayConnectionTrafficSelectorPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy">VirtualNetworkGatewayConnectionTrafficSelectorPolicy</a>]]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `use_policy_based_traffic_selectors_input`<sup>Optional</sup> <a name="use_policy_based_traffic_selectors_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectorsInput"></a>

```python
use_policy_based_traffic_selectors_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `virtual_network_gateway_id_input`<sup>Optional</sup> <a name="virtual_network_gateway_id_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.virtualNetworkGatewayIdInput"></a>

```python
virtual_network_gateway_id_input: str
```

- *Type:* str

---

##### `authorization_key`<sup>Required</sup> <a name="authorization_key" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.authorizationKey"></a>

```python
authorization_key: str
```

- *Type:* str

---

##### `connection_mode`<sup>Required</sup> <a name="connection_mode" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connectionMode"></a>

```python
connection_mode: str
```

- *Type:* str

---

##### `connection_protocol`<sup>Required</sup> <a name="connection_protocol" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connectionProtocol"></a>

```python
connection_protocol: str
```

- *Type:* str

---

##### `dpd_timeout_seconds`<sup>Required</sup> <a name="dpd_timeout_seconds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.dpdTimeoutSeconds"></a>

```python
dpd_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `egress_nat_rule_ids`<sup>Required</sup> <a name="egress_nat_rule_ids" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.egressNatRuleIds"></a>

```python
egress_nat_rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_bgp`<sup>Required</sup> <a name="enable_bgp" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.enableBgp"></a>

```python
enable_bgp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `express_route_circuit_id`<sup>Required</sup> <a name="express_route_circuit_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteCircuitId"></a>

```python
express_route_circuit_id: str
```

- *Type:* str

---

##### `express_route_gateway_bypass`<sup>Required</sup> <a name="express_route_gateway_bypass" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteGatewayBypass"></a>

```python
express_route_gateway_bypass: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingress_nat_rule_ids`<sup>Required</sup> <a name="ingress_nat_rule_ids" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ingressNatRuleIds"></a>

```python
ingress_nat_rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `local_azure_ip_address_enabled`<sup>Required</sup> <a name="local_azure_ip_address_enabled" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localAzureIpAddressEnabled"></a>

```python
local_azure_ip_address_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `local_network_gateway_id`<sup>Required</sup> <a name="local_network_gateway_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localNetworkGatewayId"></a>

```python
local_network_gateway_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `peer_virtual_network_gateway_id`<sup>Required</sup> <a name="peer_virtual_network_gateway_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayId"></a>

```python
peer_virtual_network_gateway_id: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `routing_weight`<sup>Required</sup> <a name="routing_weight" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.routingWeight"></a>

```python
routing_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shared_key`<sup>Required</sup> <a name="shared_key" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.sharedKey"></a>

```python
shared_key: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `use_policy_based_traffic_selectors`<sup>Required</sup> <a name="use_policy_based_traffic_selectors" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectors"></a>

```python
use_policy_based_traffic_selectors: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `virtual_network_gateway_id`<sup>Required</sup> <a name="virtual_network_gateway_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.virtualNetworkGatewayId"></a>

```python
virtual_network_gateway_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualNetworkGatewayConnectionConfig <a name="VirtualNetworkGatewayConnectionConfig" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_connection

virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig(
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
  type: str,
  virtual_network_gateway_id: str,
  authorization_key: str = None,
  connection_mode: str = None,
  connection_protocol: str = None,
  custom_bgp_addresses: VirtualNetworkGatewayConnectionCustomBgpAddresses = None,
  dpd_timeout_seconds: typing.Union[int, float] = None,
  egress_nat_rule_ids: typing.List[str] = None,
  enable_bgp: typing.Union[bool, IResolvable] = None,
  express_route_circuit_id: str = None,
  express_route_gateway_bypass: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ingress_nat_rule_ids: typing.List[str] = None,
  ipsec_policy: VirtualNetworkGatewayConnectionIpsecPolicy = None,
  local_azure_ip_address_enabled: typing.Union[bool, IResolvable] = None,
  local_network_gateway_id: str = None,
  peer_virtual_network_gateway_id: str = None,
  routing_weight: typing.Union[int, float] = None,
  shared_key: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: VirtualNetworkGatewayConnectionTimeouts = None,
  traffic_selector_policy: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayConnectionTrafficSelectorPolicy]] = None,
  use_policy_based_traffic_selectors: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#location VirtualNetworkGatewayConnection#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#name VirtualNetworkGatewayConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#resource_group_name VirtualNetworkGatewayConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#type VirtualNetworkGatewayConnection#type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.virtualNetworkGatewayId">virtual_network_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#virtual_network_gateway_id VirtualNetworkGatewayConnection#virtual_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.authorizationKey">authorization_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#authorization_key VirtualNetworkGatewayConnection#authorization_key}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.connectionMode">connection_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#connection_mode VirtualNetworkGatewayConnection#connection_mode}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.connectionProtocol">connection_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#connection_protocol VirtualNetworkGatewayConnection#connection_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.customBgpAddresses">custom_bgp_addresses</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses">VirtualNetworkGatewayConnectionCustomBgpAddresses</a></code> | custom_bgp_addresses block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.dpdTimeoutSeconds">dpd_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#dpd_timeout_seconds VirtualNetworkGatewayConnection#dpd_timeout_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.egressNatRuleIds">egress_nat_rule_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#egress_nat_rule_ids VirtualNetworkGatewayConnection#egress_nat_rule_ids}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.enableBgp">enable_bgp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#enable_bgp VirtualNetworkGatewayConnection#enable_bgp}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.expressRouteCircuitId">express_route_circuit_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#express_route_circuit_id VirtualNetworkGatewayConnection#express_route_circuit_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.expressRouteGatewayBypass">express_route_gateway_bypass</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#express_route_gateway_bypass VirtualNetworkGatewayConnection#express_route_gateway_bypass}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#id VirtualNetworkGatewayConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.ingressNatRuleIds">ingress_nat_rule_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#ingress_nat_rule_ids VirtualNetworkGatewayConnection#ingress_nat_rule_ids}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.ipsecPolicy">ipsec_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a></code> | ipsec_policy block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.localAzureIpAddressEnabled">local_azure_ip_address_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#local_azure_ip_address_enabled VirtualNetworkGatewayConnection#local_azure_ip_address_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.localNetworkGatewayId">local_network_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#local_network_gateway_id VirtualNetworkGatewayConnection#local_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.peerVirtualNetworkGatewayId">peer_virtual_network_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#peer_virtual_network_gateway_id VirtualNetworkGatewayConnection#peer_virtual_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.routingWeight">routing_weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#routing_weight VirtualNetworkGatewayConnection#routing_weight}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.sharedKey">shared_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#shared_key VirtualNetworkGatewayConnection#shared_key}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#tags VirtualNetworkGatewayConnection#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts">VirtualNetworkGatewayConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.trafficSelectorPolicy">traffic_selector_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy">VirtualNetworkGatewayConnectionTrafficSelectorPolicy</a>]]</code> | traffic_selector_policy block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.usePolicyBasedTrafficSelectors">use_policy_based_traffic_selectors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#use_policy_based_traffic_selectors VirtualNetworkGatewayConnection#use_policy_based_traffic_selectors}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#location VirtualNetworkGatewayConnection#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#name VirtualNetworkGatewayConnection#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#resource_group_name VirtualNetworkGatewayConnection#resource_group_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#type VirtualNetworkGatewayConnection#type}.

---

##### `virtual_network_gateway_id`<sup>Required</sup> <a name="virtual_network_gateway_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.virtualNetworkGatewayId"></a>

```python
virtual_network_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#virtual_network_gateway_id VirtualNetworkGatewayConnection#virtual_network_gateway_id}.

---

##### `authorization_key`<sup>Optional</sup> <a name="authorization_key" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.authorizationKey"></a>

```python
authorization_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#authorization_key VirtualNetworkGatewayConnection#authorization_key}.

---

##### `connection_mode`<sup>Optional</sup> <a name="connection_mode" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.connectionMode"></a>

```python
connection_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#connection_mode VirtualNetworkGatewayConnection#connection_mode}.

---

##### `connection_protocol`<sup>Optional</sup> <a name="connection_protocol" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.connectionProtocol"></a>

```python
connection_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#connection_protocol VirtualNetworkGatewayConnection#connection_protocol}.

---

##### `custom_bgp_addresses`<sup>Optional</sup> <a name="custom_bgp_addresses" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.customBgpAddresses"></a>

```python
custom_bgp_addresses: VirtualNetworkGatewayConnectionCustomBgpAddresses
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses">VirtualNetworkGatewayConnectionCustomBgpAddresses</a>

custom_bgp_addresses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#custom_bgp_addresses VirtualNetworkGatewayConnection#custom_bgp_addresses}

---

##### `dpd_timeout_seconds`<sup>Optional</sup> <a name="dpd_timeout_seconds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.dpdTimeoutSeconds"></a>

```python
dpd_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#dpd_timeout_seconds VirtualNetworkGatewayConnection#dpd_timeout_seconds}.

---

##### `egress_nat_rule_ids`<sup>Optional</sup> <a name="egress_nat_rule_ids" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.egressNatRuleIds"></a>

```python
egress_nat_rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#egress_nat_rule_ids VirtualNetworkGatewayConnection#egress_nat_rule_ids}.

---

##### `enable_bgp`<sup>Optional</sup> <a name="enable_bgp" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.enableBgp"></a>

```python
enable_bgp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#enable_bgp VirtualNetworkGatewayConnection#enable_bgp}.

---

##### `express_route_circuit_id`<sup>Optional</sup> <a name="express_route_circuit_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.expressRouteCircuitId"></a>

```python
express_route_circuit_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#express_route_circuit_id VirtualNetworkGatewayConnection#express_route_circuit_id}.

---

##### `express_route_gateway_bypass`<sup>Optional</sup> <a name="express_route_gateway_bypass" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.expressRouteGatewayBypass"></a>

```python
express_route_gateway_bypass: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#express_route_gateway_bypass VirtualNetworkGatewayConnection#express_route_gateway_bypass}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#id VirtualNetworkGatewayConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress_nat_rule_ids`<sup>Optional</sup> <a name="ingress_nat_rule_ids" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.ingressNatRuleIds"></a>

```python
ingress_nat_rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#ingress_nat_rule_ids VirtualNetworkGatewayConnection#ingress_nat_rule_ids}.

---

##### `ipsec_policy`<sup>Optional</sup> <a name="ipsec_policy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.ipsecPolicy"></a>

```python
ipsec_policy: VirtualNetworkGatewayConnectionIpsecPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a>

ipsec_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#ipsec_policy VirtualNetworkGatewayConnection#ipsec_policy}

---

##### `local_azure_ip_address_enabled`<sup>Optional</sup> <a name="local_azure_ip_address_enabled" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.localAzureIpAddressEnabled"></a>

```python
local_azure_ip_address_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#local_azure_ip_address_enabled VirtualNetworkGatewayConnection#local_azure_ip_address_enabled}.

---

##### `local_network_gateway_id`<sup>Optional</sup> <a name="local_network_gateway_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.localNetworkGatewayId"></a>

```python
local_network_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#local_network_gateway_id VirtualNetworkGatewayConnection#local_network_gateway_id}.

---

##### `peer_virtual_network_gateway_id`<sup>Optional</sup> <a name="peer_virtual_network_gateway_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.peerVirtualNetworkGatewayId"></a>

```python
peer_virtual_network_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#peer_virtual_network_gateway_id VirtualNetworkGatewayConnection#peer_virtual_network_gateway_id}.

---

##### `routing_weight`<sup>Optional</sup> <a name="routing_weight" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.routingWeight"></a>

```python
routing_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#routing_weight VirtualNetworkGatewayConnection#routing_weight}.

---

##### `shared_key`<sup>Optional</sup> <a name="shared_key" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.sharedKey"></a>

```python
shared_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#shared_key VirtualNetworkGatewayConnection#shared_key}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#tags VirtualNetworkGatewayConnection#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.timeouts"></a>

```python
timeouts: VirtualNetworkGatewayConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts">VirtualNetworkGatewayConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#timeouts VirtualNetworkGatewayConnection#timeouts}

---

##### `traffic_selector_policy`<sup>Optional</sup> <a name="traffic_selector_policy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.trafficSelectorPolicy"></a>

```python
traffic_selector_policy: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayConnectionTrafficSelectorPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy">VirtualNetworkGatewayConnectionTrafficSelectorPolicy</a>]]

traffic_selector_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#traffic_selector_policy VirtualNetworkGatewayConnection#traffic_selector_policy}

---

##### `use_policy_based_traffic_selectors`<sup>Optional</sup> <a name="use_policy_based_traffic_selectors" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.usePolicyBasedTrafficSelectors"></a>

```python
use_policy_based_traffic_selectors: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#use_policy_based_traffic_selectors VirtualNetworkGatewayConnection#use_policy_based_traffic_selectors}.

---

### VirtualNetworkGatewayConnectionCustomBgpAddresses <a name="VirtualNetworkGatewayConnectionCustomBgpAddresses" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_connection

virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses(
  primary: str,
  secondary: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses.property.primary">primary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#primary VirtualNetworkGatewayConnection#primary}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses.property.secondary">secondary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#secondary VirtualNetworkGatewayConnection#secondary}. |

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses.property.primary"></a>

```python
primary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#primary VirtualNetworkGatewayConnection#primary}.

---

##### `secondary`<sup>Required</sup> <a name="secondary" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses.property.secondary"></a>

```python
secondary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#secondary VirtualNetworkGatewayConnection#secondary}.

---

### VirtualNetworkGatewayConnectionIpsecPolicy <a name="VirtualNetworkGatewayConnectionIpsecPolicy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_connection

virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy(
  dh_group: str,
  ike_encryption: str,
  ike_integrity: str,
  ipsec_encryption: str,
  ipsec_integrity: str,
  pfs_group: str,
  sa_datasize: typing.Union[int, float] = None,
  sa_lifetime: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.dhGroup">dh_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#dh_group VirtualNetworkGatewayConnection#dh_group}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ikeEncryption">ike_encryption</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#ike_encryption VirtualNetworkGatewayConnection#ike_encryption}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ikeIntegrity">ike_integrity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#ike_integrity VirtualNetworkGatewayConnection#ike_integrity}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ipsecEncryption">ipsec_encryption</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#ipsec_encryption VirtualNetworkGatewayConnection#ipsec_encryption}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ipsecIntegrity">ipsec_integrity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#ipsec_integrity VirtualNetworkGatewayConnection#ipsec_integrity}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.pfsGroup">pfs_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#pfs_group VirtualNetworkGatewayConnection#pfs_group}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.saDatasize">sa_datasize</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#sa_datasize VirtualNetworkGatewayConnection#sa_datasize}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.saLifetime">sa_lifetime</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#sa_lifetime VirtualNetworkGatewayConnection#sa_lifetime}. |

---

##### `dh_group`<sup>Required</sup> <a name="dh_group" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.dhGroup"></a>

```python
dh_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#dh_group VirtualNetworkGatewayConnection#dh_group}.

---

##### `ike_encryption`<sup>Required</sup> <a name="ike_encryption" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ikeEncryption"></a>

```python
ike_encryption: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#ike_encryption VirtualNetworkGatewayConnection#ike_encryption}.

---

##### `ike_integrity`<sup>Required</sup> <a name="ike_integrity" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ikeIntegrity"></a>

```python
ike_integrity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#ike_integrity VirtualNetworkGatewayConnection#ike_integrity}.

---

##### `ipsec_encryption`<sup>Required</sup> <a name="ipsec_encryption" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ipsecEncryption"></a>

```python
ipsec_encryption: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#ipsec_encryption VirtualNetworkGatewayConnection#ipsec_encryption}.

---

##### `ipsec_integrity`<sup>Required</sup> <a name="ipsec_integrity" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ipsecIntegrity"></a>

```python
ipsec_integrity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#ipsec_integrity VirtualNetworkGatewayConnection#ipsec_integrity}.

---

##### `pfs_group`<sup>Required</sup> <a name="pfs_group" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.pfsGroup"></a>

```python
pfs_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#pfs_group VirtualNetworkGatewayConnection#pfs_group}.

---

##### `sa_datasize`<sup>Optional</sup> <a name="sa_datasize" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.saDatasize"></a>

```python
sa_datasize: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#sa_datasize VirtualNetworkGatewayConnection#sa_datasize}.

---

##### `sa_lifetime`<sup>Optional</sup> <a name="sa_lifetime" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.saLifetime"></a>

```python
sa_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#sa_lifetime VirtualNetworkGatewayConnection#sa_lifetime}.

---

### VirtualNetworkGatewayConnectionTimeouts <a name="VirtualNetworkGatewayConnectionTimeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_connection

virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#create VirtualNetworkGatewayConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#delete VirtualNetworkGatewayConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#read VirtualNetworkGatewayConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#update VirtualNetworkGatewayConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#create VirtualNetworkGatewayConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#delete VirtualNetworkGatewayConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#read VirtualNetworkGatewayConnection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#update VirtualNetworkGatewayConnection#update}.

---

### VirtualNetworkGatewayConnectionTrafficSelectorPolicy <a name="VirtualNetworkGatewayConnectionTrafficSelectorPolicy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_connection

virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy(
  local_address_cidrs: typing.List[str],
  remote_address_cidrs: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy.property.localAddressCidrs">local_address_cidrs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#local_address_cidrs VirtualNetworkGatewayConnection#local_address_cidrs}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy.property.remoteAddressCidrs">remote_address_cidrs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#remote_address_cidrs VirtualNetworkGatewayConnection#remote_address_cidrs}. |

---

##### `local_address_cidrs`<sup>Required</sup> <a name="local_address_cidrs" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy.property.localAddressCidrs"></a>

```python
local_address_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#local_address_cidrs VirtualNetworkGatewayConnection#local_address_cidrs}.

---

##### `remote_address_cidrs`<sup>Required</sup> <a name="remote_address_cidrs" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy.property.remoteAddressCidrs"></a>

```python
remote_address_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/virtual_network_gateway_connection#remote_address_cidrs VirtualNetworkGatewayConnection#remote_address_cidrs}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference <a name="VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_connection

virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.primaryInput">primary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.secondaryInput">secondary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.primary">primary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.secondary">secondary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses">VirtualNetworkGatewayConnectionCustomBgpAddresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.primaryInput"></a>

```python
primary_input: str
```

- *Type:* str

---

##### `secondary_input`<sup>Optional</sup> <a name="secondary_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.secondaryInput"></a>

```python
secondary_input: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.primary"></a>

```python
primary: str
```

- *Type:* str

---

##### `secondary`<sup>Required</sup> <a name="secondary" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.secondary"></a>

```python
secondary: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.internalValue"></a>

```python
internal_value: VirtualNetworkGatewayConnectionCustomBgpAddresses
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses">VirtualNetworkGatewayConnectionCustomBgpAddresses</a>

---


### VirtualNetworkGatewayConnectionIpsecPolicyOutputReference <a name="VirtualNetworkGatewayConnectionIpsecPolicyOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_connection

virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resetSaDatasize">reset_sa_datasize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resetSaLifetime">reset_sa_lifetime</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_sa_datasize` <a name="reset_sa_datasize" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resetSaDatasize"></a>

```python
def reset_sa_datasize() -> None
```

##### `reset_sa_lifetime` <a name="reset_sa_lifetime" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resetSaLifetime"></a>

```python
def reset_sa_lifetime() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroupInput">dh_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryptionInput">ike_encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrityInput">ike_integrity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryptionInput">ipsec_encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrityInput">ipsec_integrity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroupInput">pfs_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasizeInput">sa_datasize_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetimeInput">sa_lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroup">dh_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryption">ike_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrity">ike_integrity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryption">ipsec_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrity">ipsec_integrity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroup">pfs_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasize">sa_datasize</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetime">sa_lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dh_group_input`<sup>Optional</sup> <a name="dh_group_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroupInput"></a>

```python
dh_group_input: str
```

- *Type:* str

---

##### `ike_encryption_input`<sup>Optional</sup> <a name="ike_encryption_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryptionInput"></a>

```python
ike_encryption_input: str
```

- *Type:* str

---

##### `ike_integrity_input`<sup>Optional</sup> <a name="ike_integrity_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrityInput"></a>

```python
ike_integrity_input: str
```

- *Type:* str

---

##### `ipsec_encryption_input`<sup>Optional</sup> <a name="ipsec_encryption_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryptionInput"></a>

```python
ipsec_encryption_input: str
```

- *Type:* str

---

##### `ipsec_integrity_input`<sup>Optional</sup> <a name="ipsec_integrity_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrityInput"></a>

```python
ipsec_integrity_input: str
```

- *Type:* str

---

##### `pfs_group_input`<sup>Optional</sup> <a name="pfs_group_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroupInput"></a>

```python
pfs_group_input: str
```

- *Type:* str

---

##### `sa_datasize_input`<sup>Optional</sup> <a name="sa_datasize_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasizeInput"></a>

```python
sa_datasize_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sa_lifetime_input`<sup>Optional</sup> <a name="sa_lifetime_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetimeInput"></a>

```python
sa_lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dh_group`<sup>Required</sup> <a name="dh_group" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroup"></a>

```python
dh_group: str
```

- *Type:* str

---

##### `ike_encryption`<sup>Required</sup> <a name="ike_encryption" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryption"></a>

```python
ike_encryption: str
```

- *Type:* str

---

##### `ike_integrity`<sup>Required</sup> <a name="ike_integrity" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrity"></a>

```python
ike_integrity: str
```

- *Type:* str

---

##### `ipsec_encryption`<sup>Required</sup> <a name="ipsec_encryption" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryption"></a>

```python
ipsec_encryption: str
```

- *Type:* str

---

##### `ipsec_integrity`<sup>Required</sup> <a name="ipsec_integrity" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrity"></a>

```python
ipsec_integrity: str
```

- *Type:* str

---

##### `pfs_group`<sup>Required</sup> <a name="pfs_group" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroup"></a>

```python
pfs_group: str
```

- *Type:* str

---

##### `sa_datasize`<sup>Required</sup> <a name="sa_datasize" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasize"></a>

```python
sa_datasize: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sa_lifetime`<sup>Required</sup> <a name="sa_lifetime" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetime"></a>

```python
sa_lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.internalValue"></a>

```python
internal_value: VirtualNetworkGatewayConnectionIpsecPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a>

---


### VirtualNetworkGatewayConnectionTimeoutsOutputReference <a name="VirtualNetworkGatewayConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_connection

virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts">VirtualNetworkGatewayConnectionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[VirtualNetworkGatewayConnectionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts">VirtualNetworkGatewayConnectionTimeouts</a>, cdktf.IResolvable]

---


### VirtualNetworkGatewayConnectionTrafficSelectorPolicyList <a name="VirtualNetworkGatewayConnectionTrafficSelectorPolicyList" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_connection

virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy">VirtualNetworkGatewayConnectionTrafficSelectorPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayConnectionTrafficSelectorPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy">VirtualNetworkGatewayConnectionTrafficSelectorPolicy</a>]]

---


### VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference <a name="VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_connection

virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressCidrsInput">local_address_cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressCidrsInput">remote_address_cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressCidrs">local_address_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressCidrs">remote_address_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy">VirtualNetworkGatewayConnectionTrafficSelectorPolicy</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_address_cidrs_input`<sup>Optional</sup> <a name="local_address_cidrs_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressCidrsInput"></a>

```python
local_address_cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `remote_address_cidrs_input`<sup>Optional</sup> <a name="remote_address_cidrs_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressCidrsInput"></a>

```python
remote_address_cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `local_address_cidrs`<sup>Required</sup> <a name="local_address_cidrs" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressCidrs"></a>

```python
local_address_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `remote_address_cidrs`<sup>Required</sup> <a name="remote_address_cidrs" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressCidrs"></a>

```python
remote_address_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[VirtualNetworkGatewayConnectionTrafficSelectorPolicy, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy">VirtualNetworkGatewayConnectionTrafficSelectorPolicy</a>, cdktf.IResolvable]

---



