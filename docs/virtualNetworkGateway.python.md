# `virtualNetworkGateway` Submodule <a name="`virtualNetworkGateway` Submodule" id="@cdktf/provider-azurerm.virtualNetworkGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualNetworkGateway <a name="VirtualNetworkGateway" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway azurerm_virtual_network_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGateway(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ip_configuration: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayIpConfiguration]],
  location: str,
  name: str,
  resource_group_name: str,
  sku: str,
  type: str,
  active_active: typing.Union[bool, IResolvable] = None,
  bgp_settings: VirtualNetworkGatewayBgpSettings = None,
  custom_route: VirtualNetworkGatewayCustomRoute = None,
  default_local_network_gateway_id: str = None,
  edge_zone: str = None,
  enable_bgp: typing.Union[bool, IResolvable] = None,
  generation: str = None,
  id: str = None,
  private_ip_address_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: VirtualNetworkGatewayTimeouts = None,
  vpn_client_configuration: VirtualNetworkGatewayVpnClientConfiguration = None,
  vpn_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.ipConfiguration">ip_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>]]</code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#location VirtualNetworkGateway#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#resource_group_name VirtualNetworkGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#sku VirtualNetworkGateway#sku}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#type VirtualNetworkGateway#type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.activeActive">active_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#active_active VirtualNetworkGateway#active_active}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.bgpSettings">bgp_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a></code> | bgp_settings block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.customRoute">custom_route</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRoute">VirtualNetworkGatewayCustomRoute</a></code> | custom_route block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.defaultLocalNetworkGatewayId">default_local_network_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#default_local_network_gateway_id VirtualNetworkGateway#default_local_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.edgeZone">edge_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#edge_zone VirtualNetworkGateway#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.enableBgp">enable_bgp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#enable_bgp VirtualNetworkGateway#enable_bgp}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.generation">generation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#generation VirtualNetworkGateway#generation}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#id VirtualNetworkGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.privateIpAddressEnabled">private_ip_address_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#private_ip_address_enabled VirtualNetworkGateway#private_ip_address_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#tags VirtualNetworkGateway#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.vpnClientConfiguration">vpn_client_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a></code> | vpn_client_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.vpnType">vpn_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#vpn_type VirtualNetworkGateway#vpn_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_configuration`<sup>Required</sup> <a name="ip_configuration" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.ipConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>]]

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#ip_configuration VirtualNetworkGateway#ip_configuration}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#location VirtualNetworkGateway#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#resource_group_name VirtualNetworkGateway#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#sku VirtualNetworkGateway#sku}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#type VirtualNetworkGateway#type}.

---

##### `active_active`<sup>Optional</sup> <a name="active_active" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.activeActive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#active_active VirtualNetworkGateway#active_active}.

---

##### `bgp_settings`<sup>Optional</sup> <a name="bgp_settings" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.bgpSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a>

bgp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#bgp_settings VirtualNetworkGateway#bgp_settings}

---

##### `custom_route`<sup>Optional</sup> <a name="custom_route" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.customRoute"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRoute">VirtualNetworkGatewayCustomRoute</a>

custom_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#custom_route VirtualNetworkGateway#custom_route}

---

##### `default_local_network_gateway_id`<sup>Optional</sup> <a name="default_local_network_gateway_id" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.defaultLocalNetworkGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#default_local_network_gateway_id VirtualNetworkGateway#default_local_network_gateway_id}.

---

##### `edge_zone`<sup>Optional</sup> <a name="edge_zone" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.edgeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#edge_zone VirtualNetworkGateway#edge_zone}.

---

##### `enable_bgp`<sup>Optional</sup> <a name="enable_bgp" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.enableBgp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#enable_bgp VirtualNetworkGateway#enable_bgp}.

---

##### `generation`<sup>Optional</sup> <a name="generation" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.generation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#generation VirtualNetworkGateway#generation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#id VirtualNetworkGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `private_ip_address_enabled`<sup>Optional</sup> <a name="private_ip_address_enabled" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.privateIpAddressEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#private_ip_address_enabled VirtualNetworkGateway#private_ip_address_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#tags VirtualNetworkGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#timeouts VirtualNetworkGateway#timeouts}

---

##### `vpn_client_configuration`<sup>Optional</sup> <a name="vpn_client_configuration" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.vpnClientConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a>

vpn_client_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#vpn_client_configuration VirtualNetworkGateway#vpn_client_configuration}

---

##### `vpn_type`<sup>Optional</sup> <a name="vpn_type" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.Initializer.parameter.vpnType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#vpn_type VirtualNetworkGateway#vpn_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putBgpSettings">put_bgp_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putCustomRoute">put_custom_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putIpConfiguration">put_ip_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putVpnClientConfiguration">put_vpn_client_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetActiveActive">reset_active_active</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetBgpSettings">reset_bgp_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetCustomRoute">reset_custom_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetDefaultLocalNetworkGatewayId">reset_default_local_network_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetEdgeZone">reset_edge_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetEnableBgp">reset_enable_bgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetGeneration">reset_generation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetPrivateIpAddressEnabled">reset_private_ip_address_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetVpnClientConfiguration">reset_vpn_client_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetVpnType">reset_vpn_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_bgp_settings` <a name="put_bgp_settings" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putBgpSettings"></a>

```python
def put_bgp_settings(
  asn: typing.Union[int, float] = None,
  peering_addresses: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayBgpSettingsPeeringAddresses]] = None,
  peer_weight: typing.Union[int, float] = None
) -> None
```

###### `asn`<sup>Optional</sup> <a name="asn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putBgpSettings.parameter.asn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#asn VirtualNetworkGateway#asn}.

---

###### `peering_addresses`<sup>Optional</sup> <a name="peering_addresses" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putBgpSettings.parameter.peeringAddresses"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddresses">VirtualNetworkGatewayBgpSettingsPeeringAddresses</a>]]

peering_addresses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#peering_addresses VirtualNetworkGateway#peering_addresses}

---

###### `peer_weight`<sup>Optional</sup> <a name="peer_weight" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putBgpSettings.parameter.peerWeight"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#peer_weight VirtualNetworkGateway#peer_weight}.

---

##### `put_custom_route` <a name="put_custom_route" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putCustomRoute"></a>

```python
def put_custom_route(
  address_prefixes: typing.List[str] = None
) -> None
```

###### `address_prefixes`<sup>Optional</sup> <a name="address_prefixes" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putCustomRoute.parameter.addressPrefixes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#address_prefixes VirtualNetworkGateway#address_prefixes}.

---

##### `put_ip_configuration` <a name="put_ip_configuration" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putIpConfiguration"></a>

```python
def put_ip_configuration(
  value: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayIpConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putIpConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#create VirtualNetworkGateway#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#delete VirtualNetworkGateway#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#read VirtualNetworkGateway#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#update VirtualNetworkGateway#update}.

---

##### `put_vpn_client_configuration` <a name="put_vpn_client_configuration" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putVpnClientConfiguration"></a>

```python
def put_vpn_client_configuration(
  address_space: typing.List[str],
  aad_audience: str = None,
  aad_issuer: str = None,
  aad_tenant: str = None,
  radius_server_address: str = None,
  radius_server_secret: str = None,
  revoked_certificate: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate]] = None,
  root_certificate: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayVpnClientConfigurationRootCertificate]] = None,
  vpn_auth_types: typing.List[str] = None,
  vpn_client_protocols: typing.List[str] = None
) -> None
```

###### `address_space`<sup>Required</sup> <a name="address_space" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putVpnClientConfiguration.parameter.addressSpace"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#address_space VirtualNetworkGateway#address_space}.

---

###### `aad_audience`<sup>Optional</sup> <a name="aad_audience" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putVpnClientConfiguration.parameter.aadAudience"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#aad_audience VirtualNetworkGateway#aad_audience}.

---

###### `aad_issuer`<sup>Optional</sup> <a name="aad_issuer" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putVpnClientConfiguration.parameter.aadIssuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#aad_issuer VirtualNetworkGateway#aad_issuer}.

---

###### `aad_tenant`<sup>Optional</sup> <a name="aad_tenant" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putVpnClientConfiguration.parameter.aadTenant"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#aad_tenant VirtualNetworkGateway#aad_tenant}.

---

###### `radius_server_address`<sup>Optional</sup> <a name="radius_server_address" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putVpnClientConfiguration.parameter.radiusServerAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#radius_server_address VirtualNetworkGateway#radius_server_address}.

---

###### `radius_server_secret`<sup>Optional</sup> <a name="radius_server_secret" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putVpnClientConfiguration.parameter.radiusServerSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#radius_server_secret VirtualNetworkGateway#radius_server_secret}.

---

###### `revoked_certificate`<sup>Optional</sup> <a name="revoked_certificate" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putVpnClientConfiguration.parameter.revokedCertificate"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>]]

revoked_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#revoked_certificate VirtualNetworkGateway#revoked_certificate}

---

###### `root_certificate`<sup>Optional</sup> <a name="root_certificate" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putVpnClientConfiguration.parameter.rootCertificate"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>]]

root_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#root_certificate VirtualNetworkGateway#root_certificate}

---

###### `vpn_auth_types`<sup>Optional</sup> <a name="vpn_auth_types" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putVpnClientConfiguration.parameter.vpnAuthTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#vpn_auth_types VirtualNetworkGateway#vpn_auth_types}.

---

###### `vpn_client_protocols`<sup>Optional</sup> <a name="vpn_client_protocols" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.putVpnClientConfiguration.parameter.vpnClientProtocols"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#vpn_client_protocols VirtualNetworkGateway#vpn_client_protocols}.

---

##### `reset_active_active` <a name="reset_active_active" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetActiveActive"></a>

```python
def reset_active_active() -> None
```

##### `reset_bgp_settings` <a name="reset_bgp_settings" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetBgpSettings"></a>

```python
def reset_bgp_settings() -> None
```

##### `reset_custom_route` <a name="reset_custom_route" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetCustomRoute"></a>

```python
def reset_custom_route() -> None
```

##### `reset_default_local_network_gateway_id` <a name="reset_default_local_network_gateway_id" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetDefaultLocalNetworkGatewayId"></a>

```python
def reset_default_local_network_gateway_id() -> None
```

##### `reset_edge_zone` <a name="reset_edge_zone" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetEdgeZone"></a>

```python
def reset_edge_zone() -> None
```

##### `reset_enable_bgp` <a name="reset_enable_bgp" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetEnableBgp"></a>

```python
def reset_enable_bgp() -> None
```

##### `reset_generation` <a name="reset_generation" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetGeneration"></a>

```python
def reset_generation() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_private_ip_address_enabled` <a name="reset_private_ip_address_enabled" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetPrivateIpAddressEnabled"></a>

```python
def reset_private_ip_address_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpn_client_configuration` <a name="reset_vpn_client_configuration" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetVpnClientConfiguration"></a>

```python
def reset_vpn_client_configuration() -> None
```

##### `reset_vpn_type` <a name="reset_vpn_type" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.resetVpnType"></a>

```python
def reset_vpn_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VirtualNetworkGateway resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VirtualNetworkGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VirtualNetworkGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VirtualNetworkGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualNetworkGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.bgpSettings">bgp_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference">VirtualNetworkGatewayBgpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.customRoute">custom_route</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference">VirtualNetworkGatewayCustomRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.ipConfiguration">ip_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList">VirtualNetworkGatewayIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference">VirtualNetworkGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.vpnClientConfiguration">vpn_client_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference">VirtualNetworkGatewayVpnClientConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.activeActiveInput">active_active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.bgpSettingsInput">bgp_settings_input</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.customRouteInput">custom_route_input</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRoute">VirtualNetworkGatewayCustomRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.defaultLocalNetworkGatewayIdInput">default_local_network_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.edgeZoneInput">edge_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.enableBgpInput">enable_bgp_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.generationInput">generation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.ipConfigurationInput">ip_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.privateIpAddressEnabledInput">private_ip_address_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.vpnClientConfigurationInput">vpn_client_configuration_input</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.vpnTypeInput">vpn_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.activeActive">active_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.defaultLocalNetworkGatewayId">default_local_network_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.edgeZone">edge_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.enableBgp">enable_bgp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.generation">generation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.privateIpAddressEnabled">private_ip_address_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.vpnType">vpn_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bgp_settings`<sup>Required</sup> <a name="bgp_settings" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.bgpSettings"></a>

```python
bgp_settings: VirtualNetworkGatewayBgpSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference">VirtualNetworkGatewayBgpSettingsOutputReference</a>

---

##### `custom_route`<sup>Required</sup> <a name="custom_route" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.customRoute"></a>

```python
custom_route: VirtualNetworkGatewayCustomRouteOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference">VirtualNetworkGatewayCustomRouteOutputReference</a>

---

##### `ip_configuration`<sup>Required</sup> <a name="ip_configuration" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.ipConfiguration"></a>

```python
ip_configuration: VirtualNetworkGatewayIpConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList">VirtualNetworkGatewayIpConfigurationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.timeouts"></a>

```python
timeouts: VirtualNetworkGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference">VirtualNetworkGatewayTimeoutsOutputReference</a>

---

##### `vpn_client_configuration`<sup>Required</sup> <a name="vpn_client_configuration" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.vpnClientConfiguration"></a>

```python
vpn_client_configuration: VirtualNetworkGatewayVpnClientConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference">VirtualNetworkGatewayVpnClientConfigurationOutputReference</a>

---

##### `active_active_input`<sup>Optional</sup> <a name="active_active_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.activeActiveInput"></a>

```python
active_active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bgp_settings_input`<sup>Optional</sup> <a name="bgp_settings_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.bgpSettingsInput"></a>

```python
bgp_settings_input: VirtualNetworkGatewayBgpSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a>

---

##### `custom_route_input`<sup>Optional</sup> <a name="custom_route_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.customRouteInput"></a>

```python
custom_route_input: VirtualNetworkGatewayCustomRoute
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRoute">VirtualNetworkGatewayCustomRoute</a>

---

##### `default_local_network_gateway_id_input`<sup>Optional</sup> <a name="default_local_network_gateway_id_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.defaultLocalNetworkGatewayIdInput"></a>

```python
default_local_network_gateway_id_input: str
```

- *Type:* str

---

##### `edge_zone_input`<sup>Optional</sup> <a name="edge_zone_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.edgeZoneInput"></a>

```python
edge_zone_input: str
```

- *Type:* str

---

##### `enable_bgp_input`<sup>Optional</sup> <a name="enable_bgp_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.enableBgpInput"></a>

```python
enable_bgp_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `generation_input`<sup>Optional</sup> <a name="generation_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.generationInput"></a>

```python
generation_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_configuration_input`<sup>Optional</sup> <a name="ip_configuration_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.ipConfigurationInput"></a>

```python
ip_configuration_input: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayIpConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>]]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `private_ip_address_enabled_input`<sup>Optional</sup> <a name="private_ip_address_enabled_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.privateIpAddressEnabledInput"></a>

```python
private_ip_address_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VirtualNetworkGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vpn_client_configuration_input`<sup>Optional</sup> <a name="vpn_client_configuration_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.vpnClientConfigurationInput"></a>

```python
vpn_client_configuration_input: VirtualNetworkGatewayVpnClientConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a>

---

##### `vpn_type_input`<sup>Optional</sup> <a name="vpn_type_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.vpnTypeInput"></a>

```python
vpn_type_input: str
```

- *Type:* str

---

##### `active_active`<sup>Required</sup> <a name="active_active" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.activeActive"></a>

```python
active_active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_local_network_gateway_id`<sup>Required</sup> <a name="default_local_network_gateway_id" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.defaultLocalNetworkGatewayId"></a>

```python
default_local_network_gateway_id: str
```

- *Type:* str

---

##### `edge_zone`<sup>Required</sup> <a name="edge_zone" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.edgeZone"></a>

```python
edge_zone: str
```

- *Type:* str

---

##### `enable_bgp`<sup>Required</sup> <a name="enable_bgp" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.enableBgp"></a>

```python
enable_bgp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.generation"></a>

```python
generation: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_ip_address_enabled`<sup>Required</sup> <a name="private_ip_address_enabled" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.privateIpAddressEnabled"></a>

```python
private_ip_address_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vpn_type`<sup>Required</sup> <a name="vpn_type" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.vpnType"></a>

```python
vpn_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualNetworkGatewayBgpSettings <a name="VirtualNetworkGatewayBgpSettings" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayBgpSettings(
  asn: typing.Union[int, float] = None,
  peering_addresses: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayBgpSettingsPeeringAddresses]] = None,
  peer_weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#asn VirtualNetworkGateway#asn}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings.property.peeringAddresses">peering_addresses</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddresses">VirtualNetworkGatewayBgpSettingsPeeringAddresses</a>]]</code> | peering_addresses block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings.property.peerWeight">peer_weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#peer_weight VirtualNetworkGateway#peer_weight}. |

---

##### `asn`<sup>Optional</sup> <a name="asn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#asn VirtualNetworkGateway#asn}.

---

##### `peering_addresses`<sup>Optional</sup> <a name="peering_addresses" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings.property.peeringAddresses"></a>

```python
peering_addresses: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayBgpSettingsPeeringAddresses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddresses">VirtualNetworkGatewayBgpSettingsPeeringAddresses</a>]]

peering_addresses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#peering_addresses VirtualNetworkGateway#peering_addresses}

---

##### `peer_weight`<sup>Optional</sup> <a name="peer_weight" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings.property.peerWeight"></a>

```python
peer_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#peer_weight VirtualNetworkGateway#peer_weight}.

---

### VirtualNetworkGatewayBgpSettingsPeeringAddresses <a name="VirtualNetworkGatewayBgpSettingsPeeringAddresses" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddresses.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddresses(
  apipa_addresses: typing.List[str] = None,
  ip_configuration_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddresses.property.apipaAddresses">apipa_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#apipa_addresses VirtualNetworkGateway#apipa_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddresses.property.ipConfigurationName">ip_configuration_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#ip_configuration_name VirtualNetworkGateway#ip_configuration_name}. |

---

##### `apipa_addresses`<sup>Optional</sup> <a name="apipa_addresses" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddresses.property.apipaAddresses"></a>

```python
apipa_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#apipa_addresses VirtualNetworkGateway#apipa_addresses}.

---

##### `ip_configuration_name`<sup>Optional</sup> <a name="ip_configuration_name" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddresses.property.ipConfigurationName"></a>

```python
ip_configuration_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#ip_configuration_name VirtualNetworkGateway#ip_configuration_name}.

---

### VirtualNetworkGatewayConfig <a name="VirtualNetworkGatewayConfig" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ip_configuration: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayIpConfiguration]],
  location: str,
  name: str,
  resource_group_name: str,
  sku: str,
  type: str,
  active_active: typing.Union[bool, IResolvable] = None,
  bgp_settings: VirtualNetworkGatewayBgpSettings = None,
  custom_route: VirtualNetworkGatewayCustomRoute = None,
  default_local_network_gateway_id: str = None,
  edge_zone: str = None,
  enable_bgp: typing.Union[bool, IResolvable] = None,
  generation: str = None,
  id: str = None,
  private_ip_address_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: VirtualNetworkGatewayTimeouts = None,
  vpn_client_configuration: VirtualNetworkGatewayVpnClientConfiguration = None,
  vpn_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.ipConfiguration">ip_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>]]</code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#location VirtualNetworkGateway#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#resource_group_name VirtualNetworkGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#sku VirtualNetworkGateway#sku}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#type VirtualNetworkGateway#type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.activeActive">active_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#active_active VirtualNetworkGateway#active_active}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.bgpSettings">bgp_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a></code> | bgp_settings block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.customRoute">custom_route</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRoute">VirtualNetworkGatewayCustomRoute</a></code> | custom_route block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.defaultLocalNetworkGatewayId">default_local_network_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#default_local_network_gateway_id VirtualNetworkGateway#default_local_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.edgeZone">edge_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#edge_zone VirtualNetworkGateway#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.enableBgp">enable_bgp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#enable_bgp VirtualNetworkGateway#enable_bgp}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.generation">generation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#generation VirtualNetworkGateway#generation}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#id VirtualNetworkGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.privateIpAddressEnabled">private_ip_address_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#private_ip_address_enabled VirtualNetworkGateway#private_ip_address_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#tags VirtualNetworkGateway#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.vpnClientConfiguration">vpn_client_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a></code> | vpn_client_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.vpnType">vpn_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#vpn_type VirtualNetworkGateway#vpn_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_configuration`<sup>Required</sup> <a name="ip_configuration" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.ipConfiguration"></a>

```python
ip_configuration: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayIpConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>]]

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#ip_configuration VirtualNetworkGateway#ip_configuration}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#location VirtualNetworkGateway#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#resource_group_name VirtualNetworkGateway#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#sku VirtualNetworkGateway#sku}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#type VirtualNetworkGateway#type}.

---

##### `active_active`<sup>Optional</sup> <a name="active_active" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.activeActive"></a>

```python
active_active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#active_active VirtualNetworkGateway#active_active}.

---

##### `bgp_settings`<sup>Optional</sup> <a name="bgp_settings" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.bgpSettings"></a>

```python
bgp_settings: VirtualNetworkGatewayBgpSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a>

bgp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#bgp_settings VirtualNetworkGateway#bgp_settings}

---

##### `custom_route`<sup>Optional</sup> <a name="custom_route" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.customRoute"></a>

```python
custom_route: VirtualNetworkGatewayCustomRoute
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRoute">VirtualNetworkGatewayCustomRoute</a>

custom_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#custom_route VirtualNetworkGateway#custom_route}

---

##### `default_local_network_gateway_id`<sup>Optional</sup> <a name="default_local_network_gateway_id" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.defaultLocalNetworkGatewayId"></a>

```python
default_local_network_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#default_local_network_gateway_id VirtualNetworkGateway#default_local_network_gateway_id}.

---

##### `edge_zone`<sup>Optional</sup> <a name="edge_zone" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.edgeZone"></a>

```python
edge_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#edge_zone VirtualNetworkGateway#edge_zone}.

---

##### `enable_bgp`<sup>Optional</sup> <a name="enable_bgp" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.enableBgp"></a>

```python
enable_bgp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#enable_bgp VirtualNetworkGateway#enable_bgp}.

---

##### `generation`<sup>Optional</sup> <a name="generation" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.generation"></a>

```python
generation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#generation VirtualNetworkGateway#generation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#id VirtualNetworkGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `private_ip_address_enabled`<sup>Optional</sup> <a name="private_ip_address_enabled" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.privateIpAddressEnabled"></a>

```python
private_ip_address_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#private_ip_address_enabled VirtualNetworkGateway#private_ip_address_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#tags VirtualNetworkGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.timeouts"></a>

```python
timeouts: VirtualNetworkGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#timeouts VirtualNetworkGateway#timeouts}

---

##### `vpn_client_configuration`<sup>Optional</sup> <a name="vpn_client_configuration" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.vpnClientConfiguration"></a>

```python
vpn_client_configuration: VirtualNetworkGatewayVpnClientConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a>

vpn_client_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#vpn_client_configuration VirtualNetworkGateway#vpn_client_configuration}

---

##### `vpn_type`<sup>Optional</sup> <a name="vpn_type" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayConfig.property.vpnType"></a>

```python
vpn_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#vpn_type VirtualNetworkGateway#vpn_type}.

---

### VirtualNetworkGatewayCustomRoute <a name="VirtualNetworkGatewayCustomRoute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayCustomRoute(
  address_prefixes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRoute.property.addressPrefixes">address_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#address_prefixes VirtualNetworkGateway#address_prefixes}. |

---

##### `address_prefixes`<sup>Optional</sup> <a name="address_prefixes" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRoute.property.addressPrefixes"></a>

```python
address_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#address_prefixes VirtualNetworkGateway#address_prefixes}.

---

### VirtualNetworkGatewayIpConfiguration <a name="VirtualNetworkGatewayIpConfiguration" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration(
  public_ip_address_id: str,
  subnet_id: str,
  name: str = None,
  private_ip_address_allocation: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.property.publicIpAddressId">public_ip_address_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#public_ip_address_id VirtualNetworkGateway#public_ip_address_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#subnet_id VirtualNetworkGateway#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.property.privateIpAddressAllocation">private_ip_address_allocation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#private_ip_address_allocation VirtualNetworkGateway#private_ip_address_allocation}. |

---

##### `public_ip_address_id`<sup>Required</sup> <a name="public_ip_address_id" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.property.publicIpAddressId"></a>

```python
public_ip_address_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#public_ip_address_id VirtualNetworkGateway#public_ip_address_id}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#subnet_id VirtualNetworkGateway#subnet_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}.

---

##### `private_ip_address_allocation`<sup>Optional</sup> <a name="private_ip_address_allocation" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration.property.privateIpAddressAllocation"></a>

```python
private_ip_address_allocation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#private_ip_address_allocation VirtualNetworkGateway#private_ip_address_allocation}.

---

### VirtualNetworkGatewayTimeouts <a name="VirtualNetworkGatewayTimeouts" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#create VirtualNetworkGateway#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#delete VirtualNetworkGateway#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#read VirtualNetworkGateway#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#update VirtualNetworkGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#create VirtualNetworkGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#delete VirtualNetworkGateway#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#read VirtualNetworkGateway#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#update VirtualNetworkGateway#update}.

---

### VirtualNetworkGatewayVpnClientConfiguration <a name="VirtualNetworkGatewayVpnClientConfiguration" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration(
  address_space: typing.List[str],
  aad_audience: str = None,
  aad_issuer: str = None,
  aad_tenant: str = None,
  radius_server_address: str = None,
  radius_server_secret: str = None,
  revoked_certificate: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate]] = None,
  root_certificate: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayVpnClientConfigurationRootCertificate]] = None,
  vpn_auth_types: typing.List[str] = None,
  vpn_client_protocols: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.addressSpace">address_space</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#address_space VirtualNetworkGateway#address_space}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.aadAudience">aad_audience</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#aad_audience VirtualNetworkGateway#aad_audience}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.aadIssuer">aad_issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#aad_issuer VirtualNetworkGateway#aad_issuer}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.aadTenant">aad_tenant</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#aad_tenant VirtualNetworkGateway#aad_tenant}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.radiusServerAddress">radius_server_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#radius_server_address VirtualNetworkGateway#radius_server_address}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.radiusServerSecret">radius_server_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#radius_server_secret VirtualNetworkGateway#radius_server_secret}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.revokedCertificate">revoked_certificate</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>]]</code> | revoked_certificate block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.rootCertificate">root_certificate</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>]]</code> | root_certificate block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.vpnAuthTypes">vpn_auth_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#vpn_auth_types VirtualNetworkGateway#vpn_auth_types}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.vpnClientProtocols">vpn_client_protocols</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#vpn_client_protocols VirtualNetworkGateway#vpn_client_protocols}. |

---

##### `address_space`<sup>Required</sup> <a name="address_space" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.addressSpace"></a>

```python
address_space: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#address_space VirtualNetworkGateway#address_space}.

---

##### `aad_audience`<sup>Optional</sup> <a name="aad_audience" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.aadAudience"></a>

```python
aad_audience: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#aad_audience VirtualNetworkGateway#aad_audience}.

---

##### `aad_issuer`<sup>Optional</sup> <a name="aad_issuer" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.aadIssuer"></a>

```python
aad_issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#aad_issuer VirtualNetworkGateway#aad_issuer}.

---

##### `aad_tenant`<sup>Optional</sup> <a name="aad_tenant" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.aadTenant"></a>

```python
aad_tenant: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#aad_tenant VirtualNetworkGateway#aad_tenant}.

---

##### `radius_server_address`<sup>Optional</sup> <a name="radius_server_address" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.radiusServerAddress"></a>

```python
radius_server_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#radius_server_address VirtualNetworkGateway#radius_server_address}.

---

##### `radius_server_secret`<sup>Optional</sup> <a name="radius_server_secret" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.radiusServerSecret"></a>

```python
radius_server_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#radius_server_secret VirtualNetworkGateway#radius_server_secret}.

---

##### `revoked_certificate`<sup>Optional</sup> <a name="revoked_certificate" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.revokedCertificate"></a>

```python
revoked_certificate: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>]]

revoked_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#revoked_certificate VirtualNetworkGateway#revoked_certificate}

---

##### `root_certificate`<sup>Optional</sup> <a name="root_certificate" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.rootCertificate"></a>

```python
root_certificate: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayVpnClientConfigurationRootCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>]]

root_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#root_certificate VirtualNetworkGateway#root_certificate}

---

##### `vpn_auth_types`<sup>Optional</sup> <a name="vpn_auth_types" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.vpnAuthTypes"></a>

```python
vpn_auth_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#vpn_auth_types VirtualNetworkGateway#vpn_auth_types}.

---

##### `vpn_client_protocols`<sup>Optional</sup> <a name="vpn_client_protocols" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration.property.vpnClientProtocols"></a>

```python
vpn_client_protocols: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#vpn_client_protocols VirtualNetworkGateway#vpn_client_protocols}.

---

### VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate <a name="VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate(
  name: str,
  thumbprint: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate.property.thumbprint">thumbprint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#thumbprint VirtualNetworkGateway#thumbprint}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}.

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#thumbprint VirtualNetworkGateway#thumbprint}.

---

### VirtualNetworkGatewayVpnClientConfigurationRootCertificate <a name="VirtualNetworkGatewayVpnClientConfigurationRootCertificate" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate(
  name: str,
  public_cert_data: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate.property.publicCertData">public_cert_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#public_cert_data VirtualNetworkGateway#public_cert_data}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}.

---

##### `public_cert_data`<sup>Required</sup> <a name="public_cert_data" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate.property.publicCertData"></a>

```python
public_cert_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/virtual_network_gateway#public_cert_data VirtualNetworkGateway#public_cert_data}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualNetworkGatewayBgpSettingsOutputReference <a name="VirtualNetworkGatewayBgpSettingsOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.putPeeringAddresses">put_peering_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resetAsn">reset_asn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resetPeeringAddresses">reset_peering_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resetPeerWeight">reset_peer_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_peering_addresses` <a name="put_peering_addresses" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.putPeeringAddresses"></a>

```python
def put_peering_addresses(
  value: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayBgpSettingsPeeringAddresses]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.putPeeringAddresses.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddresses">VirtualNetworkGatewayBgpSettingsPeeringAddresses</a>]]

---

##### `reset_asn` <a name="reset_asn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resetAsn"></a>

```python
def reset_asn() -> None
```

##### `reset_peering_addresses` <a name="reset_peering_addresses" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resetPeeringAddresses"></a>

```python
def reset_peering_addresses() -> None
```

##### `reset_peer_weight` <a name="reset_peer_weight" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.resetPeerWeight"></a>

```python
def reset_peer_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.peeringAddresses">peering_addresses</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList">VirtualNetworkGatewayBgpSettingsPeeringAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.asnInput">asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.peeringAddressesInput">peering_addresses_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddresses">VirtualNetworkGatewayBgpSettingsPeeringAddresses</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.peerWeightInput">peer_weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.peerWeight">peer_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `peering_addresses`<sup>Required</sup> <a name="peering_addresses" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.peeringAddresses"></a>

```python
peering_addresses: VirtualNetworkGatewayBgpSettingsPeeringAddressesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList">VirtualNetworkGatewayBgpSettingsPeeringAddressesList</a>

---

##### `asn_input`<sup>Optional</sup> <a name="asn_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.asnInput"></a>

```python
asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peering_addresses_input`<sup>Optional</sup> <a name="peering_addresses_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.peeringAddressesInput"></a>

```python
peering_addresses_input: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayBgpSettingsPeeringAddresses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddresses">VirtualNetworkGatewayBgpSettingsPeeringAddresses</a>]]

---

##### `peer_weight_input`<sup>Optional</sup> <a name="peer_weight_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.peerWeightInput"></a>

```python
peer_weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peer_weight`<sup>Required</sup> <a name="peer_weight" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.peerWeight"></a>

```python
peer_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsOutputReference.property.internalValue"></a>

```python
internal_value: VirtualNetworkGatewayBgpSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettings">VirtualNetworkGatewayBgpSettings</a>

---


### VirtualNetworkGatewayBgpSettingsPeeringAddressesList <a name="VirtualNetworkGatewayBgpSettingsPeeringAddressesList" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddresses">VirtualNetworkGatewayBgpSettingsPeeringAddresses</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayBgpSettingsPeeringAddresses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddresses">VirtualNetworkGatewayBgpSettingsPeeringAddresses</a>]]

---


### VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference <a name="VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.resetApipaAddresses">reset_apipa_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.resetIpConfigurationName">reset_ip_configuration_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_apipa_addresses` <a name="reset_apipa_addresses" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.resetApipaAddresses"></a>

```python
def reset_apipa_addresses() -> None
```

##### `reset_ip_configuration_name` <a name="reset_ip_configuration_name" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.resetIpConfigurationName"></a>

```python
def reset_ip_configuration_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.property.defaultAddresses">default_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.property.tunnelIpAddresses">tunnel_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.property.apipaAddressesInput">apipa_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.property.ipConfigurationNameInput">ip_configuration_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.property.apipaAddresses">apipa_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.property.ipConfigurationName">ip_configuration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddresses">VirtualNetworkGatewayBgpSettingsPeeringAddresses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_addresses`<sup>Required</sup> <a name="default_addresses" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.property.defaultAddresses"></a>

```python
default_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel_ip_addresses`<sup>Required</sup> <a name="tunnel_ip_addresses" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.property.tunnelIpAddresses"></a>

```python
tunnel_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `apipa_addresses_input`<sup>Optional</sup> <a name="apipa_addresses_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.property.apipaAddressesInput"></a>

```python
apipa_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_configuration_name_input`<sup>Optional</sup> <a name="ip_configuration_name_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.property.ipConfigurationNameInput"></a>

```python
ip_configuration_name_input: str
```

- *Type:* str

---

##### `apipa_addresses`<sup>Required</sup> <a name="apipa_addresses" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.property.apipaAddresses"></a>

```python
apipa_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_configuration_name`<sup>Required</sup> <a name="ip_configuration_name" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.property.ipConfigurationName"></a>

```python
ip_configuration_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualNetworkGatewayBgpSettingsPeeringAddresses]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayBgpSettingsPeeringAddresses">VirtualNetworkGatewayBgpSettingsPeeringAddresses</a>]

---


### VirtualNetworkGatewayCustomRouteOutputReference <a name="VirtualNetworkGatewayCustomRouteOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.resetAddressPrefixes">reset_address_prefixes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address_prefixes` <a name="reset_address_prefixes" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.resetAddressPrefixes"></a>

```python
def reset_address_prefixes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.property.addressPrefixesInput">address_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.property.addressPrefixes">address_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRoute">VirtualNetworkGatewayCustomRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_prefixes_input`<sup>Optional</sup> <a name="address_prefixes_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.property.addressPrefixesInput"></a>

```python
address_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `address_prefixes`<sup>Required</sup> <a name="address_prefixes" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.property.addressPrefixes"></a>

```python
address_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRouteOutputReference.property.internalValue"></a>

```python
internal_value: VirtualNetworkGatewayCustomRoute
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayCustomRoute">VirtualNetworkGatewayCustomRoute</a>

---


### VirtualNetworkGatewayIpConfigurationList <a name="VirtualNetworkGatewayIpConfigurationList" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualNetworkGatewayIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayIpConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>]]

---


### VirtualNetworkGatewayIpConfigurationOutputReference <a name="VirtualNetworkGatewayIpConfigurationOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.resetPrivateIpAddressAllocation">reset_private_ip_address_allocation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_private_ip_address_allocation` <a name="reset_private_ip_address_allocation" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.resetPrivateIpAddressAllocation"></a>

```python
def reset_private_ip_address_allocation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.privateIpAddressAllocationInput">private_ip_address_allocation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.publicIpAddressIdInput">public_ip_address_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.privateIpAddressAllocation">private_ip_address_allocation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.publicIpAddressId">public_ip_address_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `private_ip_address_allocation_input`<sup>Optional</sup> <a name="private_ip_address_allocation_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.privateIpAddressAllocationInput"></a>

```python
private_ip_address_allocation_input: str
```

- *Type:* str

---

##### `public_ip_address_id_input`<sup>Optional</sup> <a name="public_ip_address_id_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.publicIpAddressIdInput"></a>

```python
public_ip_address_id_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_ip_address_allocation`<sup>Required</sup> <a name="private_ip_address_allocation" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.privateIpAddressAllocation"></a>

```python
private_ip_address_allocation: str
```

- *Type:* str

---

##### `public_ip_address_id`<sup>Required</sup> <a name="public_ip_address_id" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.publicIpAddressId"></a>

```python
public_ip_address_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualNetworkGatewayIpConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayIpConfiguration">VirtualNetworkGatewayIpConfiguration</a>]

---


### VirtualNetworkGatewayTimeoutsOutputReference <a name="VirtualNetworkGatewayTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualNetworkGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayTimeouts">VirtualNetworkGatewayTimeouts</a>]

---


### VirtualNetworkGatewayVpnClientConfigurationOutputReference <a name="VirtualNetworkGatewayVpnClientConfigurationOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.putRevokedCertificate">put_revoked_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.putRootCertificate">put_root_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetAadAudience">reset_aad_audience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetAadIssuer">reset_aad_issuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetAadTenant">reset_aad_tenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetRadiusServerAddress">reset_radius_server_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetRadiusServerSecret">reset_radius_server_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetRevokedCertificate">reset_revoked_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetRootCertificate">reset_root_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetVpnAuthTypes">reset_vpn_auth_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetVpnClientProtocols">reset_vpn_client_protocols</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_revoked_certificate` <a name="put_revoked_certificate" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.putRevokedCertificate"></a>

```python
def put_revoked_certificate(
  value: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.putRevokedCertificate.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>]]

---

##### `put_root_certificate` <a name="put_root_certificate" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.putRootCertificate"></a>

```python
def put_root_certificate(
  value: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayVpnClientConfigurationRootCertificate]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.putRootCertificate.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>]]

---

##### `reset_aad_audience` <a name="reset_aad_audience" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetAadAudience"></a>

```python
def reset_aad_audience() -> None
```

##### `reset_aad_issuer` <a name="reset_aad_issuer" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetAadIssuer"></a>

```python
def reset_aad_issuer() -> None
```

##### `reset_aad_tenant` <a name="reset_aad_tenant" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetAadTenant"></a>

```python
def reset_aad_tenant() -> None
```

##### `reset_radius_server_address` <a name="reset_radius_server_address" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetRadiusServerAddress"></a>

```python
def reset_radius_server_address() -> None
```

##### `reset_radius_server_secret` <a name="reset_radius_server_secret" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetRadiusServerSecret"></a>

```python
def reset_radius_server_secret() -> None
```

##### `reset_revoked_certificate` <a name="reset_revoked_certificate" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetRevokedCertificate"></a>

```python
def reset_revoked_certificate() -> None
```

##### `reset_root_certificate` <a name="reset_root_certificate" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetRootCertificate"></a>

```python
def reset_root_certificate() -> None
```

##### `reset_vpn_auth_types` <a name="reset_vpn_auth_types" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetVpnAuthTypes"></a>

```python
def reset_vpn_auth_types() -> None
```

##### `reset_vpn_client_protocols` <a name="reset_vpn_client_protocols" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.resetVpnClientProtocols"></a>

```python
def reset_vpn_client_protocols() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.revokedCertificate">revoked_certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.rootCertificate">root_certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList">VirtualNetworkGatewayVpnClientConfigurationRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.aadAudienceInput">aad_audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.aadIssuerInput">aad_issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.aadTenantInput">aad_tenant_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.addressSpaceInput">address_space_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerAddressInput">radius_server_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerSecretInput">radius_server_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.revokedCertificateInput">revoked_certificate_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.rootCertificateInput">root_certificate_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.vpnAuthTypesInput">vpn_auth_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.vpnClientProtocolsInput">vpn_client_protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.aadAudience">aad_audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.aadIssuer">aad_issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.aadTenant">aad_tenant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.addressSpace">address_space</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerAddress">radius_server_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerSecret">radius_server_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.vpnAuthTypes">vpn_auth_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.vpnClientProtocols">vpn_client_protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `revoked_certificate`<sup>Required</sup> <a name="revoked_certificate" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.revokedCertificate"></a>

```python
revoked_certificate: VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList</a>

---

##### `root_certificate`<sup>Required</sup> <a name="root_certificate" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.rootCertificate"></a>

```python
root_certificate: VirtualNetworkGatewayVpnClientConfigurationRootCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList">VirtualNetworkGatewayVpnClientConfigurationRootCertificateList</a>

---

##### `aad_audience_input`<sup>Optional</sup> <a name="aad_audience_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.aadAudienceInput"></a>

```python
aad_audience_input: str
```

- *Type:* str

---

##### `aad_issuer_input`<sup>Optional</sup> <a name="aad_issuer_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.aadIssuerInput"></a>

```python
aad_issuer_input: str
```

- *Type:* str

---

##### `aad_tenant_input`<sup>Optional</sup> <a name="aad_tenant_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.aadTenantInput"></a>

```python
aad_tenant_input: str
```

- *Type:* str

---

##### `address_space_input`<sup>Optional</sup> <a name="address_space_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.addressSpaceInput"></a>

```python
address_space_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `radius_server_address_input`<sup>Optional</sup> <a name="radius_server_address_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerAddressInput"></a>

```python
radius_server_address_input: str
```

- *Type:* str

---

##### `radius_server_secret_input`<sup>Optional</sup> <a name="radius_server_secret_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerSecretInput"></a>

```python
radius_server_secret_input: str
```

- *Type:* str

---

##### `revoked_certificate_input`<sup>Optional</sup> <a name="revoked_certificate_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.revokedCertificateInput"></a>

```python
revoked_certificate_input: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>]]

---

##### `root_certificate_input`<sup>Optional</sup> <a name="root_certificate_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.rootCertificateInput"></a>

```python
root_certificate_input: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayVpnClientConfigurationRootCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>]]

---

##### `vpn_auth_types_input`<sup>Optional</sup> <a name="vpn_auth_types_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.vpnAuthTypesInput"></a>

```python
vpn_auth_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpn_client_protocols_input`<sup>Optional</sup> <a name="vpn_client_protocols_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.vpnClientProtocolsInput"></a>

```python
vpn_client_protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `aad_audience`<sup>Required</sup> <a name="aad_audience" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.aadAudience"></a>

```python
aad_audience: str
```

- *Type:* str

---

##### `aad_issuer`<sup>Required</sup> <a name="aad_issuer" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.aadIssuer"></a>

```python
aad_issuer: str
```

- *Type:* str

---

##### `aad_tenant`<sup>Required</sup> <a name="aad_tenant" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.aadTenant"></a>

```python
aad_tenant: str
```

- *Type:* str

---

##### `address_space`<sup>Required</sup> <a name="address_space" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.addressSpace"></a>

```python
address_space: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `radius_server_address`<sup>Required</sup> <a name="radius_server_address" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerAddress"></a>

```python
radius_server_address: str
```

- *Type:* str

---

##### `radius_server_secret`<sup>Required</sup> <a name="radius_server_secret" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.radiusServerSecret"></a>

```python
radius_server_secret: str
```

- *Type:* str

---

##### `vpn_auth_types`<sup>Required</sup> <a name="vpn_auth_types" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.vpnAuthTypes"></a>

```python
vpn_auth_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpn_client_protocols`<sup>Required</sup> <a name="vpn_client_protocols" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.vpnClientProtocols"></a>

```python
vpn_client_protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: VirtualNetworkGatewayVpnClientConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfiguration">VirtualNetworkGatewayVpnClientConfiguration</a>

---


### VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList <a name="VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>]]

---


### VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference <a name="VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.thumbprintInput">thumbprint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.thumbprint">thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `thumbprint_input`<sup>Optional</sup> <a name="thumbprint_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.thumbprintInput"></a>

```python
thumbprint_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate</a>]

---


### VirtualNetworkGatewayVpnClientConfigurationRootCertificateList <a name="VirtualNetworkGatewayVpnClientConfigurationRootCertificateList" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayVpnClientConfigurationRootCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>]]

---


### VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference <a name="VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway

virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.publicCertDataInput">public_cert_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.publicCertData">public_cert_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_cert_data_input`<sup>Optional</sup> <a name="public_cert_data_input" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.publicCertDataInput"></a>

```python
public_cert_data_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_cert_data`<sup>Required</sup> <a name="public_cert_data" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.publicCertData"></a>

```python
public_cert_data: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualNetworkGatewayVpnClientConfigurationRootCertificate]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualNetworkGateway.VirtualNetworkGatewayVpnClientConfigurationRootCertificate">VirtualNetworkGatewayVpnClientConfigurationRootCertificate</a>]

---



