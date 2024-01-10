# `expressRouteCircuitPeering` Submodule <a name="`expressRouteCircuitPeering` Submodule" id="@cdktf/provider-azurerm.expressRouteCircuitPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExpressRouteCircuitPeering <a name="ExpressRouteCircuitPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering azurerm_express_route_circuit_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit_peering

expressRouteCircuitPeering.ExpressRouteCircuitPeering(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  express_route_circuit_name: str,
  peering_type: str,
  resource_group_name: str,
  vlan_id: typing.Union[int, float],
  id: str = None,
  ipv4_enabled: typing.Union[bool, IResolvable] = None,
  ipv6: ExpressRouteCircuitPeeringIpv6 = None,
  microsoft_peering_config: ExpressRouteCircuitPeeringMicrosoftPeeringConfig = None,
  peer_asn: typing.Union[int, float] = None,
  primary_peer_address_prefix: str = None,
  route_filter_id: str = None,
  secondary_peer_address_prefix: str = None,
  shared_key: str = None,
  timeouts: ExpressRouteCircuitPeeringTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.expressRouteCircuitName">express_route_circuit_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#express_route_circuit_name ExpressRouteCircuitPeering#express_route_circuit_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.peeringType">peering_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#peering_type ExpressRouteCircuitPeering#peering_type}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#resource_group_name ExpressRouteCircuitPeering#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.vlanId">vlan_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#vlan_id ExpressRouteCircuitPeering#vlan_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#id ExpressRouteCircuitPeering#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.ipv4Enabled">ipv4_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#ipv4_enabled ExpressRouteCircuitPeering#ipv4_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a></code> | ipv6 block. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.microsoftPeeringConfig">microsoft_peering_config</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a></code> | microsoft_peering_config block. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.peerAsn">peer_asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#peer_asn ExpressRouteCircuitPeering#peer_asn}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.primaryPeerAddressPrefix">primary_peer_address_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.routeFilterId">route_filter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.secondaryPeerAddressPrefix">secondary_peer_address_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.sharedKey">shared_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#shared_key ExpressRouteCircuitPeering#shared_key}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `express_route_circuit_name`<sup>Required</sup> <a name="express_route_circuit_name" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.expressRouteCircuitName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#express_route_circuit_name ExpressRouteCircuitPeering#express_route_circuit_name}.

---

##### `peering_type`<sup>Required</sup> <a name="peering_type" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.peeringType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#peering_type ExpressRouteCircuitPeering#peering_type}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#resource_group_name ExpressRouteCircuitPeering#resource_group_name}.

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.vlanId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#vlan_id ExpressRouteCircuitPeering#vlan_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#id ExpressRouteCircuitPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv4_enabled`<sup>Optional</sup> <a name="ipv4_enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.ipv4Enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#ipv4_enabled ExpressRouteCircuitPeering#ipv4_enabled}.

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.ipv6"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a>

ipv6 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#ipv6 ExpressRouteCircuitPeering#ipv6}

---

##### `microsoft_peering_config`<sup>Optional</sup> <a name="microsoft_peering_config" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.microsoftPeeringConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a>

microsoft_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#microsoft_peering_config ExpressRouteCircuitPeering#microsoft_peering_config}

---

##### `peer_asn`<sup>Optional</sup> <a name="peer_asn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.peerAsn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#peer_asn ExpressRouteCircuitPeering#peer_asn}.

---

##### `primary_peer_address_prefix`<sup>Optional</sup> <a name="primary_peer_address_prefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.primaryPeerAddressPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}.

---

##### `route_filter_id`<sup>Optional</sup> <a name="route_filter_id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.routeFilterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}.

---

##### `secondary_peer_address_prefix`<sup>Optional</sup> <a name="secondary_peer_address_prefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.secondaryPeerAddressPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}.

---

##### `shared_key`<sup>Optional</sup> <a name="shared_key" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.sharedKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#shared_key ExpressRouteCircuitPeering#shared_key}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#timeouts ExpressRouteCircuitPeering#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putIpv6">put_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putMicrosoftPeeringConfig">put_microsoft_peering_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetIpv4Enabled">reset_ipv4_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetIpv6">reset_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetMicrosoftPeeringConfig">reset_microsoft_peering_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetPeerAsn">reset_peer_asn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetPrimaryPeerAddressPrefix">reset_primary_peer_address_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetRouteFilterId">reset_route_filter_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetSecondaryPeerAddressPrefix">reset_secondary_peer_address_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetSharedKey">reset_shared_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ipv6` <a name="put_ipv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putIpv6"></a>

```python
def put_ipv6(
  primary_peer_address_prefix: str,
  secondary_peer_address_prefix: str,
  enabled: typing.Union[bool, IResolvable] = None,
  microsoft_peering: ExpressRouteCircuitPeeringIpv6MicrosoftPeering = None,
  route_filter_id: str = None
) -> None
```

###### `primary_peer_address_prefix`<sup>Required</sup> <a name="primary_peer_address_prefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putIpv6.parameter.primaryPeerAddressPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}.

---

###### `secondary_peer_address_prefix`<sup>Required</sup> <a name="secondary_peer_address_prefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putIpv6.parameter.secondaryPeerAddressPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putIpv6.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#enabled ExpressRouteCircuitPeering#enabled}.

---

###### `microsoft_peering`<sup>Optional</sup> <a name="microsoft_peering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putIpv6.parameter.microsoftPeering"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a>

microsoft_peering block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#microsoft_peering ExpressRouteCircuitPeering#microsoft_peering}

---

###### `route_filter_id`<sup>Optional</sup> <a name="route_filter_id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putIpv6.parameter.routeFilterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}.

---

##### `put_microsoft_peering_config` <a name="put_microsoft_peering_config" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putMicrosoftPeeringConfig"></a>

```python
def put_microsoft_peering_config(
  advertised_public_prefixes: typing.List[str],
  advertised_communities: typing.List[str] = None,
  customer_asn: typing.Union[int, float] = None,
  routing_registry_name: str = None
) -> None
```

###### `advertised_public_prefixes`<sup>Required</sup> <a name="advertised_public_prefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putMicrosoftPeeringConfig.parameter.advertisedPublicPrefixes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}.

---

###### `advertised_communities`<sup>Optional</sup> <a name="advertised_communities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putMicrosoftPeeringConfig.parameter.advertisedCommunities"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#advertised_communities ExpressRouteCircuitPeering#advertised_communities}.

---

###### `customer_asn`<sup>Optional</sup> <a name="customer_asn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putMicrosoftPeeringConfig.parameter.customerAsn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}.

---

###### `routing_registry_name`<sup>Optional</sup> <a name="routing_registry_name" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putMicrosoftPeeringConfig.parameter.routingRegistryName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#create ExpressRouteCircuitPeering#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#delete ExpressRouteCircuitPeering#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#read ExpressRouteCircuitPeering#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#update ExpressRouteCircuitPeering#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ipv4_enabled` <a name="reset_ipv4_enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetIpv4Enabled"></a>

```python
def reset_ipv4_enabled() -> None
```

##### `reset_ipv6` <a name="reset_ipv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetIpv6"></a>

```python
def reset_ipv6() -> None
```

##### `reset_microsoft_peering_config` <a name="reset_microsoft_peering_config" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetMicrosoftPeeringConfig"></a>

```python
def reset_microsoft_peering_config() -> None
```

##### `reset_peer_asn` <a name="reset_peer_asn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetPeerAsn"></a>

```python
def reset_peer_asn() -> None
```

##### `reset_primary_peer_address_prefix` <a name="reset_primary_peer_address_prefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetPrimaryPeerAddressPrefix"></a>

```python
def reset_primary_peer_address_prefix() -> None
```

##### `reset_route_filter_id` <a name="reset_route_filter_id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetRouteFilterId"></a>

```python
def reset_route_filter_id() -> None
```

##### `reset_secondary_peer_address_prefix` <a name="reset_secondary_peer_address_prefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetSecondaryPeerAddressPrefix"></a>

```python
def reset_secondary_peer_address_prefix() -> None
```

##### `reset_shared_key` <a name="reset_shared_key" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetSharedKey"></a>

```python
def reset_shared_key() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ExpressRouteCircuitPeering resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit_peering

expressRouteCircuitPeering.ExpressRouteCircuitPeering.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit_peering

expressRouteCircuitPeering.ExpressRouteCircuitPeering.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit_peering

expressRouteCircuitPeering.ExpressRouteCircuitPeering.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit_peering

expressRouteCircuitPeering.ExpressRouteCircuitPeering.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ExpressRouteCircuitPeering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ExpressRouteCircuitPeering to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ExpressRouteCircuitPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ExpressRouteCircuitPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.azureAsn">azure_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.gatewayManagerEtag">gateway_manager_etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference">ExpressRouteCircuitPeeringIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.microsoftPeeringConfig">microsoft_peering_config</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference">ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryAzurePort">primary_azure_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryAzurePort">secondary_azure_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference">ExpressRouteCircuitPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.expressRouteCircuitNameInput">express_route_circuit_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv4EnabledInput">ipv4_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv6Input">ipv6_input</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.microsoftPeeringConfigInput">microsoft_peering_config_input</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peerAsnInput">peer_asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peeringTypeInput">peering_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryPeerAddressPrefixInput">primary_peer_address_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.routeFilterIdInput">route_filter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryPeerAddressPrefixInput">secondary_peer_address_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.sharedKeyInput">shared_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.vlanIdInput">vlan_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.expressRouteCircuitName">express_route_circuit_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv4Enabled">ipv4_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peerAsn">peer_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peeringType">peering_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryPeerAddressPrefix">primary_peer_address_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.routeFilterId">route_filter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryPeerAddressPrefix">secondary_peer_address_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.sharedKey">shared_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.vlanId">vlan_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `azure_asn`<sup>Required</sup> <a name="azure_asn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.azureAsn"></a>

```python
azure_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gateway_manager_etag`<sup>Required</sup> <a name="gateway_manager_etag" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.gatewayManagerEtag"></a>

```python
gateway_manager_etag: str
```

- *Type:* str

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv6"></a>

```python
ipv6: ExpressRouteCircuitPeeringIpv6OutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference">ExpressRouteCircuitPeeringIpv6OutputReference</a>

---

##### `microsoft_peering_config`<sup>Required</sup> <a name="microsoft_peering_config" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.microsoftPeeringConfig"></a>

```python
microsoft_peering_config: ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference">ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference</a>

---

##### `primary_azure_port`<sup>Required</sup> <a name="primary_azure_port" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryAzurePort"></a>

```python
primary_azure_port: str
```

- *Type:* str

---

##### `secondary_azure_port`<sup>Required</sup> <a name="secondary_azure_port" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryAzurePort"></a>

```python
secondary_azure_port: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.timeouts"></a>

```python
timeouts: ExpressRouteCircuitPeeringTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference">ExpressRouteCircuitPeeringTimeoutsOutputReference</a>

---

##### `express_route_circuit_name_input`<sup>Optional</sup> <a name="express_route_circuit_name_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.expressRouteCircuitNameInput"></a>

```python
express_route_circuit_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipv4_enabled_input`<sup>Optional</sup> <a name="ipv4_enabled_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv4EnabledInput"></a>

```python
ipv4_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ipv6_input`<sup>Optional</sup> <a name="ipv6_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv6Input"></a>

```python
ipv6_input: ExpressRouteCircuitPeeringIpv6
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a>

---

##### `microsoft_peering_config_input`<sup>Optional</sup> <a name="microsoft_peering_config_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.microsoftPeeringConfigInput"></a>

```python
microsoft_peering_config_input: ExpressRouteCircuitPeeringMicrosoftPeeringConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a>

---

##### `peer_asn_input`<sup>Optional</sup> <a name="peer_asn_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peerAsnInput"></a>

```python
peer_asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peering_type_input`<sup>Optional</sup> <a name="peering_type_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peeringTypeInput"></a>

```python
peering_type_input: str
```

- *Type:* str

---

##### `primary_peer_address_prefix_input`<sup>Optional</sup> <a name="primary_peer_address_prefix_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryPeerAddressPrefixInput"></a>

```python
primary_peer_address_prefix_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `route_filter_id_input`<sup>Optional</sup> <a name="route_filter_id_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.routeFilterIdInput"></a>

```python
route_filter_id_input: str
```

- *Type:* str

---

##### `secondary_peer_address_prefix_input`<sup>Optional</sup> <a name="secondary_peer_address_prefix_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryPeerAddressPrefixInput"></a>

```python
secondary_peer_address_prefix_input: str
```

- *Type:* str

---

##### `shared_key_input`<sup>Optional</sup> <a name="shared_key_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.sharedKeyInput"></a>

```python
shared_key_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ExpressRouteCircuitPeeringTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a>]

---

##### `vlan_id_input`<sup>Optional</sup> <a name="vlan_id_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.vlanIdInput"></a>

```python
vlan_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `express_route_circuit_name`<sup>Required</sup> <a name="express_route_circuit_name" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.expressRouteCircuitName"></a>

```python
express_route_circuit_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipv4_enabled`<sup>Required</sup> <a name="ipv4_enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv4Enabled"></a>

```python
ipv4_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `peer_asn`<sup>Required</sup> <a name="peer_asn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peerAsn"></a>

```python
peer_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peering_type`<sup>Required</sup> <a name="peering_type" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peeringType"></a>

```python
peering_type: str
```

- *Type:* str

---

##### `primary_peer_address_prefix`<sup>Required</sup> <a name="primary_peer_address_prefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryPeerAddressPrefix"></a>

```python
primary_peer_address_prefix: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `route_filter_id`<sup>Required</sup> <a name="route_filter_id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.routeFilterId"></a>

```python
route_filter_id: str
```

- *Type:* str

---

##### `secondary_peer_address_prefix`<sup>Required</sup> <a name="secondary_peer_address_prefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryPeerAddressPrefix"></a>

```python
secondary_peer_address_prefix: str
```

- *Type:* str

---

##### `shared_key`<sup>Required</sup> <a name="shared_key" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.sharedKey"></a>

```python
shared_key: str
```

- *Type:* str

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.vlanId"></a>

```python
vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ExpressRouteCircuitPeeringConfig <a name="ExpressRouteCircuitPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit_peering

expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  express_route_circuit_name: str,
  peering_type: str,
  resource_group_name: str,
  vlan_id: typing.Union[int, float],
  id: str = None,
  ipv4_enabled: typing.Union[bool, IResolvable] = None,
  ipv6: ExpressRouteCircuitPeeringIpv6 = None,
  microsoft_peering_config: ExpressRouteCircuitPeeringMicrosoftPeeringConfig = None,
  peer_asn: typing.Union[int, float] = None,
  primary_peer_address_prefix: str = None,
  route_filter_id: str = None,
  secondary_peer_address_prefix: str = None,
  shared_key: str = None,
  timeouts: ExpressRouteCircuitPeeringTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.expressRouteCircuitName">express_route_circuit_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#express_route_circuit_name ExpressRouteCircuitPeering#express_route_circuit_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.peeringType">peering_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#peering_type ExpressRouteCircuitPeering#peering_type}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#resource_group_name ExpressRouteCircuitPeering#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.vlanId">vlan_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#vlan_id ExpressRouteCircuitPeering#vlan_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#id ExpressRouteCircuitPeering#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.ipv4Enabled">ipv4_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#ipv4_enabled ExpressRouteCircuitPeering#ipv4_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a></code> | ipv6 block. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.microsoftPeeringConfig">microsoft_peering_config</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a></code> | microsoft_peering_config block. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.peerAsn">peer_asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#peer_asn ExpressRouteCircuitPeering#peer_asn}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.primaryPeerAddressPrefix">primary_peer_address_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.routeFilterId">route_filter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.secondaryPeerAddressPrefix">secondary_peer_address_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.sharedKey">shared_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#shared_key ExpressRouteCircuitPeering#shared_key}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `express_route_circuit_name`<sup>Required</sup> <a name="express_route_circuit_name" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.expressRouteCircuitName"></a>

```python
express_route_circuit_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#express_route_circuit_name ExpressRouteCircuitPeering#express_route_circuit_name}.

---

##### `peering_type`<sup>Required</sup> <a name="peering_type" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.peeringType"></a>

```python
peering_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#peering_type ExpressRouteCircuitPeering#peering_type}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#resource_group_name ExpressRouteCircuitPeering#resource_group_name}.

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.vlanId"></a>

```python
vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#vlan_id ExpressRouteCircuitPeering#vlan_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#id ExpressRouteCircuitPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv4_enabled`<sup>Optional</sup> <a name="ipv4_enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.ipv4Enabled"></a>

```python
ipv4_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#ipv4_enabled ExpressRouteCircuitPeering#ipv4_enabled}.

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.ipv6"></a>

```python
ipv6: ExpressRouteCircuitPeeringIpv6
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a>

ipv6 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#ipv6 ExpressRouteCircuitPeering#ipv6}

---

##### `microsoft_peering_config`<sup>Optional</sup> <a name="microsoft_peering_config" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.microsoftPeeringConfig"></a>

```python
microsoft_peering_config: ExpressRouteCircuitPeeringMicrosoftPeeringConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a>

microsoft_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#microsoft_peering_config ExpressRouteCircuitPeering#microsoft_peering_config}

---

##### `peer_asn`<sup>Optional</sup> <a name="peer_asn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.peerAsn"></a>

```python
peer_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#peer_asn ExpressRouteCircuitPeering#peer_asn}.

---

##### `primary_peer_address_prefix`<sup>Optional</sup> <a name="primary_peer_address_prefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.primaryPeerAddressPrefix"></a>

```python
primary_peer_address_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}.

---

##### `route_filter_id`<sup>Optional</sup> <a name="route_filter_id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.routeFilterId"></a>

```python
route_filter_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}.

---

##### `secondary_peer_address_prefix`<sup>Optional</sup> <a name="secondary_peer_address_prefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.secondaryPeerAddressPrefix"></a>

```python
secondary_peer_address_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}.

---

##### `shared_key`<sup>Optional</sup> <a name="shared_key" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.sharedKey"></a>

```python
shared_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#shared_key ExpressRouteCircuitPeering#shared_key}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.timeouts"></a>

```python
timeouts: ExpressRouteCircuitPeeringTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#timeouts ExpressRouteCircuitPeering#timeouts}

---

### ExpressRouteCircuitPeeringIpv6 <a name="ExpressRouteCircuitPeeringIpv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit_peering

expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6(
  primary_peer_address_prefix: str,
  secondary_peer_address_prefix: str,
  enabled: typing.Union[bool, IResolvable] = None,
  microsoft_peering: ExpressRouteCircuitPeeringIpv6MicrosoftPeering = None,
  route_filter_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.primaryPeerAddressPrefix">primary_peer_address_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.secondaryPeerAddressPrefix">secondary_peer_address_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#enabled ExpressRouteCircuitPeering#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.microsoftPeering">microsoft_peering</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a></code> | microsoft_peering block. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.routeFilterId">route_filter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}. |

---

##### `primary_peer_address_prefix`<sup>Required</sup> <a name="primary_peer_address_prefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.primaryPeerAddressPrefix"></a>

```python
primary_peer_address_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}.

---

##### `secondary_peer_address_prefix`<sup>Required</sup> <a name="secondary_peer_address_prefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.secondaryPeerAddressPrefix"></a>

```python
secondary_peer_address_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#enabled ExpressRouteCircuitPeering#enabled}.

---

##### `microsoft_peering`<sup>Optional</sup> <a name="microsoft_peering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.microsoftPeering"></a>

```python
microsoft_peering: ExpressRouteCircuitPeeringIpv6MicrosoftPeering
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a>

microsoft_peering block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#microsoft_peering ExpressRouteCircuitPeering#microsoft_peering}

---

##### `route_filter_id`<sup>Optional</sup> <a name="route_filter_id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.routeFilterId"></a>

```python
route_filter_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}.

---

### ExpressRouteCircuitPeeringIpv6MicrosoftPeering <a name="ExpressRouteCircuitPeeringIpv6MicrosoftPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit_peering

expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering(
  advertised_communities: typing.List[str] = None,
  advertised_public_prefixes: typing.List[str] = None,
  customer_asn: typing.Union[int, float] = None,
  routing_registry_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.advertisedCommunities">advertised_communities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#advertised_communities ExpressRouteCircuitPeering#advertised_communities}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.advertisedPublicPrefixes">advertised_public_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.customerAsn">customer_asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.routingRegistryName">routing_registry_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}. |

---

##### `advertised_communities`<sup>Optional</sup> <a name="advertised_communities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.advertisedCommunities"></a>

```python
advertised_communities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#advertised_communities ExpressRouteCircuitPeering#advertised_communities}.

---

##### `advertised_public_prefixes`<sup>Optional</sup> <a name="advertised_public_prefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.advertisedPublicPrefixes"></a>

```python
advertised_public_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}.

---

##### `customer_asn`<sup>Optional</sup> <a name="customer_asn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.customerAsn"></a>

```python
customer_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}.

---

##### `routing_registry_name`<sup>Optional</sup> <a name="routing_registry_name" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.routingRegistryName"></a>

```python
routing_registry_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}.

---

### ExpressRouteCircuitPeeringMicrosoftPeeringConfig <a name="ExpressRouteCircuitPeeringMicrosoftPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit_peering

expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig(
  advertised_public_prefixes: typing.List[str],
  advertised_communities: typing.List[str] = None,
  customer_asn: typing.Union[int, float] = None,
  routing_registry_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.advertisedPublicPrefixes">advertised_public_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.advertisedCommunities">advertised_communities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#advertised_communities ExpressRouteCircuitPeering#advertised_communities}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.customerAsn">customer_asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.routingRegistryName">routing_registry_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}. |

---

##### `advertised_public_prefixes`<sup>Required</sup> <a name="advertised_public_prefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.advertisedPublicPrefixes"></a>

```python
advertised_public_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}.

---

##### `advertised_communities`<sup>Optional</sup> <a name="advertised_communities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.advertisedCommunities"></a>

```python
advertised_communities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#advertised_communities ExpressRouteCircuitPeering#advertised_communities}.

---

##### `customer_asn`<sup>Optional</sup> <a name="customer_asn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.customerAsn"></a>

```python
customer_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}.

---

##### `routing_registry_name`<sup>Optional</sup> <a name="routing_registry_name" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.routingRegistryName"></a>

```python
routing_registry_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}.

---

### ExpressRouteCircuitPeeringTimeouts <a name="ExpressRouteCircuitPeeringTimeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit_peering

expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#create ExpressRouteCircuitPeering#create}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#delete ExpressRouteCircuitPeering#delete}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#read ExpressRouteCircuitPeering#read}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#update ExpressRouteCircuitPeering#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#create ExpressRouteCircuitPeering#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#delete ExpressRouteCircuitPeering#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#read ExpressRouteCircuitPeering#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#update ExpressRouteCircuitPeering#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference <a name="ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit_peering

expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetAdvertisedCommunities">reset_advertised_communities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetAdvertisedPublicPrefixes">reset_advertised_public_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetCustomerAsn">reset_customer_asn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetRoutingRegistryName">reset_routing_registry_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_advertised_communities` <a name="reset_advertised_communities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetAdvertisedCommunities"></a>

```python
def reset_advertised_communities() -> None
```

##### `reset_advertised_public_prefixes` <a name="reset_advertised_public_prefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetAdvertisedPublicPrefixes"></a>

```python
def reset_advertised_public_prefixes() -> None
```

##### `reset_customer_asn` <a name="reset_customer_asn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetCustomerAsn"></a>

```python
def reset_customer_asn() -> None
```

##### `reset_routing_registry_name` <a name="reset_routing_registry_name" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetRoutingRegistryName"></a>

```python
def reset_routing_registry_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedCommunitiesInput">advertised_communities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedPublicPrefixesInput">advertised_public_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.customerAsnInput">customer_asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.routingRegistryNameInput">routing_registry_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedCommunities">advertised_communities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedPublicPrefixes">advertised_public_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.customerAsn">customer_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.routingRegistryName">routing_registry_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advertised_communities_input`<sup>Optional</sup> <a name="advertised_communities_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedCommunitiesInput"></a>

```python
advertised_communities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `advertised_public_prefixes_input`<sup>Optional</sup> <a name="advertised_public_prefixes_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedPublicPrefixesInput"></a>

```python
advertised_public_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `customer_asn_input`<sup>Optional</sup> <a name="customer_asn_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.customerAsnInput"></a>

```python
customer_asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `routing_registry_name_input`<sup>Optional</sup> <a name="routing_registry_name_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.routingRegistryNameInput"></a>

```python
routing_registry_name_input: str
```

- *Type:* str

---

##### `advertised_communities`<sup>Required</sup> <a name="advertised_communities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedCommunities"></a>

```python
advertised_communities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `advertised_public_prefixes`<sup>Required</sup> <a name="advertised_public_prefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedPublicPrefixes"></a>

```python
advertised_public_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `customer_asn`<sup>Required</sup> <a name="customer_asn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.customerAsn"></a>

```python
customer_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `routing_registry_name`<sup>Required</sup> <a name="routing_registry_name" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.routingRegistryName"></a>

```python
routing_registry_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.internalValue"></a>

```python
internal_value: ExpressRouteCircuitPeeringIpv6MicrosoftPeering
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a>

---


### ExpressRouteCircuitPeeringIpv6OutputReference <a name="ExpressRouteCircuitPeeringIpv6OutputReference" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit_peering

expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.putMicrosoftPeering">put_microsoft_peering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetMicrosoftPeering">reset_microsoft_peering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetRouteFilterId">reset_route_filter_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_microsoft_peering` <a name="put_microsoft_peering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.putMicrosoftPeering"></a>

```python
def put_microsoft_peering(
  advertised_communities: typing.List[str] = None,
  advertised_public_prefixes: typing.List[str] = None,
  customer_asn: typing.Union[int, float] = None,
  routing_registry_name: str = None
) -> None
```

###### `advertised_communities`<sup>Optional</sup> <a name="advertised_communities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.putMicrosoftPeering.parameter.advertisedCommunities"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#advertised_communities ExpressRouteCircuitPeering#advertised_communities}.

---

###### `advertised_public_prefixes`<sup>Optional</sup> <a name="advertised_public_prefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.putMicrosoftPeering.parameter.advertisedPublicPrefixes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}.

---

###### `customer_asn`<sup>Optional</sup> <a name="customer_asn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.putMicrosoftPeering.parameter.customerAsn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}.

---

###### `routing_registry_name`<sup>Optional</sup> <a name="routing_registry_name" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.putMicrosoftPeering.parameter.routingRegistryName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_microsoft_peering` <a name="reset_microsoft_peering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetMicrosoftPeering"></a>

```python
def reset_microsoft_peering() -> None
```

##### `reset_route_filter_id` <a name="reset_route_filter_id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetRouteFilterId"></a>

```python
def reset_route_filter_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.microsoftPeering">microsoft_peering</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference">ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.microsoftPeeringInput">microsoft_peering_input</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.primaryPeerAddressPrefixInput">primary_peer_address_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.routeFilterIdInput">route_filter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.secondaryPeerAddressPrefixInput">secondary_peer_address_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.primaryPeerAddressPrefix">primary_peer_address_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.routeFilterId">route_filter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.secondaryPeerAddressPrefix">secondary_peer_address_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `microsoft_peering`<sup>Required</sup> <a name="microsoft_peering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.microsoftPeering"></a>

```python
microsoft_peering: ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference">ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `microsoft_peering_input`<sup>Optional</sup> <a name="microsoft_peering_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.microsoftPeeringInput"></a>

```python
microsoft_peering_input: ExpressRouteCircuitPeeringIpv6MicrosoftPeering
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a>

---

##### `primary_peer_address_prefix_input`<sup>Optional</sup> <a name="primary_peer_address_prefix_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.primaryPeerAddressPrefixInput"></a>

```python
primary_peer_address_prefix_input: str
```

- *Type:* str

---

##### `route_filter_id_input`<sup>Optional</sup> <a name="route_filter_id_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.routeFilterIdInput"></a>

```python
route_filter_id_input: str
```

- *Type:* str

---

##### `secondary_peer_address_prefix_input`<sup>Optional</sup> <a name="secondary_peer_address_prefix_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.secondaryPeerAddressPrefixInput"></a>

```python
secondary_peer_address_prefix_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `primary_peer_address_prefix`<sup>Required</sup> <a name="primary_peer_address_prefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.primaryPeerAddressPrefix"></a>

```python
primary_peer_address_prefix: str
```

- *Type:* str

---

##### `route_filter_id`<sup>Required</sup> <a name="route_filter_id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.routeFilterId"></a>

```python
route_filter_id: str
```

- *Type:* str

---

##### `secondary_peer_address_prefix`<sup>Required</sup> <a name="secondary_peer_address_prefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.secondaryPeerAddressPrefix"></a>

```python
secondary_peer_address_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.internalValue"></a>

```python
internal_value: ExpressRouteCircuitPeeringIpv6
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a>

---


### ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference <a name="ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit_peering

expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetAdvertisedCommunities">reset_advertised_communities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetCustomerAsn">reset_customer_asn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetRoutingRegistryName">reset_routing_registry_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_advertised_communities` <a name="reset_advertised_communities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetAdvertisedCommunities"></a>

```python
def reset_advertised_communities() -> None
```

##### `reset_customer_asn` <a name="reset_customer_asn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetCustomerAsn"></a>

```python
def reset_customer_asn() -> None
```

##### `reset_routing_registry_name` <a name="reset_routing_registry_name" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetRoutingRegistryName"></a>

```python
def reset_routing_registry_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedCommunitiesInput">advertised_communities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedPublicPrefixesInput">advertised_public_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.customerAsnInput">customer_asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.routingRegistryNameInput">routing_registry_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedCommunities">advertised_communities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedPublicPrefixes">advertised_public_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.customerAsn">customer_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.routingRegistryName">routing_registry_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advertised_communities_input`<sup>Optional</sup> <a name="advertised_communities_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedCommunitiesInput"></a>

```python
advertised_communities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `advertised_public_prefixes_input`<sup>Optional</sup> <a name="advertised_public_prefixes_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedPublicPrefixesInput"></a>

```python
advertised_public_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `customer_asn_input`<sup>Optional</sup> <a name="customer_asn_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.customerAsnInput"></a>

```python
customer_asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `routing_registry_name_input`<sup>Optional</sup> <a name="routing_registry_name_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.routingRegistryNameInput"></a>

```python
routing_registry_name_input: str
```

- *Type:* str

---

##### `advertised_communities`<sup>Required</sup> <a name="advertised_communities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedCommunities"></a>

```python
advertised_communities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `advertised_public_prefixes`<sup>Required</sup> <a name="advertised_public_prefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedPublicPrefixes"></a>

```python
advertised_public_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `customer_asn`<sup>Required</sup> <a name="customer_asn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.customerAsn"></a>

```python
customer_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `routing_registry_name`<sup>Required</sup> <a name="routing_registry_name" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.routingRegistryName"></a>

```python
routing_registry_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.internalValue"></a>

```python
internal_value: ExpressRouteCircuitPeeringMicrosoftPeeringConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a>

---


### ExpressRouteCircuitPeeringTimeoutsOutputReference <a name="ExpressRouteCircuitPeeringTimeoutsOutputReference" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit_peering

expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ExpressRouteCircuitPeeringTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a>]

---



