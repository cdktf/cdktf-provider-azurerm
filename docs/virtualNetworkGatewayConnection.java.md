# `virtualNetworkGatewayConnection` Submodule <a name="`virtualNetworkGatewayConnection` Submodule" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualNetworkGatewayConnection <a name="VirtualNetworkGatewayConnection" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection azurerm_virtual_network_gateway_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_connection.VirtualNetworkGatewayConnection;

VirtualNetworkGatewayConnection.Builder.create(Construct scope, java.lang.String id)
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
    .type(java.lang.String)
    .virtualNetworkGatewayId(java.lang.String)
//  .authorizationKey(java.lang.String)
//  .connectionMode(java.lang.String)
//  .connectionProtocol(java.lang.String)
//  .customBgpAddresses(VirtualNetworkGatewayConnectionCustomBgpAddresses)
//  .dpdTimeoutSeconds(java.lang.Number)
//  .egressNatRuleIds(java.util.List<java.lang.String>)
//  .enableBgp(java.lang.Boolean)
//  .enableBgp(IResolvable)
//  .expressRouteCircuitId(java.lang.String)
//  .expressRouteGatewayBypass(java.lang.Boolean)
//  .expressRouteGatewayBypass(IResolvable)
//  .id(java.lang.String)
//  .ingressNatRuleIds(java.util.List<java.lang.String>)
//  .ipsecPolicy(VirtualNetworkGatewayConnectionIpsecPolicy)
//  .localAzureIpAddressEnabled(java.lang.Boolean)
//  .localAzureIpAddressEnabled(IResolvable)
//  .localNetworkGatewayId(java.lang.String)
//  .peerVirtualNetworkGatewayId(java.lang.String)
//  .privateLinkFastPathEnabled(java.lang.Boolean)
//  .privateLinkFastPathEnabled(IResolvable)
//  .routingWeight(java.lang.Number)
//  .sharedKey(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VirtualNetworkGatewayConnectionTimeouts)
//  .trafficSelectorPolicy(IResolvable)
//  .trafficSelectorPolicy(java.util.List<VirtualNetworkGatewayConnectionTrafficSelectorPolicy>)
//  .usePolicyBasedTrafficSelectors(java.lang.Boolean)
//  .usePolicyBasedTrafficSelectors(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#location VirtualNetworkGatewayConnection#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#name VirtualNetworkGatewayConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#resource_group_name VirtualNetworkGatewayConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#type VirtualNetworkGatewayConnection#type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.virtualNetworkGatewayId">virtualNetworkGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#virtual_network_gateway_id VirtualNetworkGatewayConnection#virtual_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.authorizationKey">authorizationKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#authorization_key VirtualNetworkGatewayConnection#authorization_key}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.connectionMode">connectionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#connection_mode VirtualNetworkGatewayConnection#connection_mode}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.connectionProtocol">connectionProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#connection_protocol VirtualNetworkGatewayConnection#connection_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.customBgpAddresses">customBgpAddresses</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses">VirtualNetworkGatewayConnectionCustomBgpAddresses</a></code> | custom_bgp_addresses block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.dpdTimeoutSeconds">dpdTimeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#dpd_timeout_seconds VirtualNetworkGatewayConnection#dpd_timeout_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.egressNatRuleIds">egressNatRuleIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#egress_nat_rule_ids VirtualNetworkGatewayConnection#egress_nat_rule_ids}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.enableBgp">enableBgp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#enable_bgp VirtualNetworkGatewayConnection#enable_bgp}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.expressRouteCircuitId">expressRouteCircuitId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#express_route_circuit_id VirtualNetworkGatewayConnection#express_route_circuit_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.expressRouteGatewayBypass">expressRouteGatewayBypass</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#express_route_gateway_bypass VirtualNetworkGatewayConnection#express_route_gateway_bypass}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#id VirtualNetworkGatewayConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.ingressNatRuleIds">ingressNatRuleIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#ingress_nat_rule_ids VirtualNetworkGatewayConnection#ingress_nat_rule_ids}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.ipsecPolicy">ipsecPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a></code> | ipsec_policy block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.localAzureIpAddressEnabled">localAzureIpAddressEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#local_azure_ip_address_enabled VirtualNetworkGatewayConnection#local_azure_ip_address_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.localNetworkGatewayId">localNetworkGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#local_network_gateway_id VirtualNetworkGatewayConnection#local_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.peerVirtualNetworkGatewayId">peerVirtualNetworkGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#peer_virtual_network_gateway_id VirtualNetworkGatewayConnection#peer_virtual_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.privateLinkFastPathEnabled">privateLinkFastPathEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#private_link_fast_path_enabled VirtualNetworkGatewayConnection#private_link_fast_path_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.routingWeight">routingWeight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#routing_weight VirtualNetworkGatewayConnection#routing_weight}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.sharedKey">sharedKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#shared_key VirtualNetworkGatewayConnection#shared_key}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#tags VirtualNetworkGatewayConnection#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts">VirtualNetworkGatewayConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.trafficSelectorPolicy">trafficSelectorPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy">VirtualNetworkGatewayConnectionTrafficSelectorPolicy</a>></code> | traffic_selector_policy block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.usePolicyBasedTrafficSelectors">usePolicyBasedTrafficSelectors</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#use_policy_based_traffic_selectors VirtualNetworkGatewayConnection#use_policy_based_traffic_selectors}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#location VirtualNetworkGatewayConnection#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#name VirtualNetworkGatewayConnection#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#resource_group_name VirtualNetworkGatewayConnection#resource_group_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#type VirtualNetworkGatewayConnection#type}.

---

##### `virtualNetworkGatewayId`<sup>Required</sup> <a name="virtualNetworkGatewayId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.virtualNetworkGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#virtual_network_gateway_id VirtualNetworkGatewayConnection#virtual_network_gateway_id}.

---

##### `authorizationKey`<sup>Optional</sup> <a name="authorizationKey" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.authorizationKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#authorization_key VirtualNetworkGatewayConnection#authorization_key}.

---

##### `connectionMode`<sup>Optional</sup> <a name="connectionMode" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.connectionMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#connection_mode VirtualNetworkGatewayConnection#connection_mode}.

---

##### `connectionProtocol`<sup>Optional</sup> <a name="connectionProtocol" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.connectionProtocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#connection_protocol VirtualNetworkGatewayConnection#connection_protocol}.

---

##### `customBgpAddresses`<sup>Optional</sup> <a name="customBgpAddresses" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.customBgpAddresses"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses">VirtualNetworkGatewayConnectionCustomBgpAddresses</a>

custom_bgp_addresses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#custom_bgp_addresses VirtualNetworkGatewayConnection#custom_bgp_addresses}

---

##### `dpdTimeoutSeconds`<sup>Optional</sup> <a name="dpdTimeoutSeconds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.dpdTimeoutSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#dpd_timeout_seconds VirtualNetworkGatewayConnection#dpd_timeout_seconds}.

---

##### `egressNatRuleIds`<sup>Optional</sup> <a name="egressNatRuleIds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.egressNatRuleIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#egress_nat_rule_ids VirtualNetworkGatewayConnection#egress_nat_rule_ids}.

---

##### `enableBgp`<sup>Optional</sup> <a name="enableBgp" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.enableBgp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#enable_bgp VirtualNetworkGatewayConnection#enable_bgp}.

---

##### `expressRouteCircuitId`<sup>Optional</sup> <a name="expressRouteCircuitId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.expressRouteCircuitId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#express_route_circuit_id VirtualNetworkGatewayConnection#express_route_circuit_id}.

---

##### `expressRouteGatewayBypass`<sup>Optional</sup> <a name="expressRouteGatewayBypass" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.expressRouteGatewayBypass"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#express_route_gateway_bypass VirtualNetworkGatewayConnection#express_route_gateway_bypass}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#id VirtualNetworkGatewayConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingressNatRuleIds`<sup>Optional</sup> <a name="ingressNatRuleIds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.ingressNatRuleIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#ingress_nat_rule_ids VirtualNetworkGatewayConnection#ingress_nat_rule_ids}.

---

##### `ipsecPolicy`<sup>Optional</sup> <a name="ipsecPolicy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.ipsecPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a>

ipsec_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#ipsec_policy VirtualNetworkGatewayConnection#ipsec_policy}

---

##### `localAzureIpAddressEnabled`<sup>Optional</sup> <a name="localAzureIpAddressEnabled" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.localAzureIpAddressEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#local_azure_ip_address_enabled VirtualNetworkGatewayConnection#local_azure_ip_address_enabled}.

---

##### `localNetworkGatewayId`<sup>Optional</sup> <a name="localNetworkGatewayId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.localNetworkGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#local_network_gateway_id VirtualNetworkGatewayConnection#local_network_gateway_id}.

---

##### `peerVirtualNetworkGatewayId`<sup>Optional</sup> <a name="peerVirtualNetworkGatewayId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.peerVirtualNetworkGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#peer_virtual_network_gateway_id VirtualNetworkGatewayConnection#peer_virtual_network_gateway_id}.

---

##### `privateLinkFastPathEnabled`<sup>Optional</sup> <a name="privateLinkFastPathEnabled" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.privateLinkFastPathEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#private_link_fast_path_enabled VirtualNetworkGatewayConnection#private_link_fast_path_enabled}.

---

##### `routingWeight`<sup>Optional</sup> <a name="routingWeight" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.routingWeight"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#routing_weight VirtualNetworkGatewayConnection#routing_weight}.

---

##### `sharedKey`<sup>Optional</sup> <a name="sharedKey" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.sharedKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#shared_key VirtualNetworkGatewayConnection#shared_key}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#tags VirtualNetworkGatewayConnection#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts">VirtualNetworkGatewayConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#timeouts VirtualNetworkGatewayConnection#timeouts}

---

##### `trafficSelectorPolicy`<sup>Optional</sup> <a name="trafficSelectorPolicy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.trafficSelectorPolicy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy">VirtualNetworkGatewayConnectionTrafficSelectorPolicy</a>>

traffic_selector_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#traffic_selector_policy VirtualNetworkGatewayConnection#traffic_selector_policy}

---

##### `usePolicyBasedTrafficSelectors`<sup>Optional</sup> <a name="usePolicyBasedTrafficSelectors" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.usePolicyBasedTrafficSelectors"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#use_policy_based_traffic_selectors VirtualNetworkGatewayConnection#use_policy_based_traffic_selectors}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putCustomBgpAddresses">putCustomBgpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putIpsecPolicy">putIpsecPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putTrafficSelectorPolicy">putTrafficSelectorPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetAuthorizationKey">resetAuthorizationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetConnectionMode">resetConnectionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetConnectionProtocol">resetConnectionProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetCustomBgpAddresses">resetCustomBgpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetDpdTimeoutSeconds">resetDpdTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetEgressNatRuleIds">resetEgressNatRuleIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetEnableBgp">resetEnableBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetExpressRouteCircuitId">resetExpressRouteCircuitId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetExpressRouteGatewayBypass">resetExpressRouteGatewayBypass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetIngressNatRuleIds">resetIngressNatRuleIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetIpsecPolicy">resetIpsecPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetLocalAzureIpAddressEnabled">resetLocalAzureIpAddressEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetLocalNetworkGatewayId">resetLocalNetworkGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetPeerVirtualNetworkGatewayId">resetPeerVirtualNetworkGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetPrivateLinkFastPathEnabled">resetPrivateLinkFastPathEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetRoutingWeight">resetRoutingWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetSharedKey">resetSharedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetTrafficSelectorPolicy">resetTrafficSelectorPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetUsePolicyBasedTrafficSelectors">resetUsePolicyBasedTrafficSelectors</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomBgpAddresses` <a name="putCustomBgpAddresses" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putCustomBgpAddresses"></a>

```java
public void putCustomBgpAddresses(VirtualNetworkGatewayConnectionCustomBgpAddresses value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putCustomBgpAddresses.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses">VirtualNetworkGatewayConnectionCustomBgpAddresses</a>

---

##### `putIpsecPolicy` <a name="putIpsecPolicy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putIpsecPolicy"></a>

```java
public void putIpsecPolicy(VirtualNetworkGatewayConnectionIpsecPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putIpsecPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putTimeouts"></a>

```java
public void putTimeouts(VirtualNetworkGatewayConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts">VirtualNetworkGatewayConnectionTimeouts</a>

---

##### `putTrafficSelectorPolicy` <a name="putTrafficSelectorPolicy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putTrafficSelectorPolicy"></a>

```java
public void putTrafficSelectorPolicy(IResolvable OR java.util.List<VirtualNetworkGatewayConnectionTrafficSelectorPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putTrafficSelectorPolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy">VirtualNetworkGatewayConnectionTrafficSelectorPolicy</a>>

---

##### `resetAuthorizationKey` <a name="resetAuthorizationKey" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetAuthorizationKey"></a>

```java
public void resetAuthorizationKey()
```

##### `resetConnectionMode` <a name="resetConnectionMode" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetConnectionMode"></a>

```java
public void resetConnectionMode()
```

##### `resetConnectionProtocol` <a name="resetConnectionProtocol" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetConnectionProtocol"></a>

```java
public void resetConnectionProtocol()
```

##### `resetCustomBgpAddresses` <a name="resetCustomBgpAddresses" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetCustomBgpAddresses"></a>

```java
public void resetCustomBgpAddresses()
```

##### `resetDpdTimeoutSeconds` <a name="resetDpdTimeoutSeconds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetDpdTimeoutSeconds"></a>

```java
public void resetDpdTimeoutSeconds()
```

##### `resetEgressNatRuleIds` <a name="resetEgressNatRuleIds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetEgressNatRuleIds"></a>

```java
public void resetEgressNatRuleIds()
```

##### `resetEnableBgp` <a name="resetEnableBgp" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetEnableBgp"></a>

```java
public void resetEnableBgp()
```

##### `resetExpressRouteCircuitId` <a name="resetExpressRouteCircuitId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetExpressRouteCircuitId"></a>

```java
public void resetExpressRouteCircuitId()
```

##### `resetExpressRouteGatewayBypass` <a name="resetExpressRouteGatewayBypass" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetExpressRouteGatewayBypass"></a>

```java
public void resetExpressRouteGatewayBypass()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetId"></a>

```java
public void resetId()
```

##### `resetIngressNatRuleIds` <a name="resetIngressNatRuleIds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetIngressNatRuleIds"></a>

```java
public void resetIngressNatRuleIds()
```

##### `resetIpsecPolicy` <a name="resetIpsecPolicy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetIpsecPolicy"></a>

```java
public void resetIpsecPolicy()
```

##### `resetLocalAzureIpAddressEnabled` <a name="resetLocalAzureIpAddressEnabled" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetLocalAzureIpAddressEnabled"></a>

```java
public void resetLocalAzureIpAddressEnabled()
```

##### `resetLocalNetworkGatewayId` <a name="resetLocalNetworkGatewayId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetLocalNetworkGatewayId"></a>

```java
public void resetLocalNetworkGatewayId()
```

##### `resetPeerVirtualNetworkGatewayId` <a name="resetPeerVirtualNetworkGatewayId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetPeerVirtualNetworkGatewayId"></a>

```java
public void resetPeerVirtualNetworkGatewayId()
```

##### `resetPrivateLinkFastPathEnabled` <a name="resetPrivateLinkFastPathEnabled" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetPrivateLinkFastPathEnabled"></a>

```java
public void resetPrivateLinkFastPathEnabled()
```

##### `resetRoutingWeight` <a name="resetRoutingWeight" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetRoutingWeight"></a>

```java
public void resetRoutingWeight()
```

##### `resetSharedKey` <a name="resetSharedKey" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetSharedKey"></a>

```java
public void resetSharedKey()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTrafficSelectorPolicy` <a name="resetTrafficSelectorPolicy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetTrafficSelectorPolicy"></a>

```java
public void resetTrafficSelectorPolicy()
```

##### `resetUsePolicyBasedTrafficSelectors` <a name="resetUsePolicyBasedTrafficSelectors" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetUsePolicyBasedTrafficSelectors"></a>

```java
public void resetUsePolicyBasedTrafficSelectors()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualNetworkGatewayConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_connection.VirtualNetworkGatewayConnection;

VirtualNetworkGatewayConnection.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_connection.VirtualNetworkGatewayConnection;

VirtualNetworkGatewayConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_connection.VirtualNetworkGatewayConnection;

VirtualNetworkGatewayConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_connection.VirtualNetworkGatewayConnection;

VirtualNetworkGatewayConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VirtualNetworkGatewayConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VirtualNetworkGatewayConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VirtualNetworkGatewayConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VirtualNetworkGatewayConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VirtualNetworkGatewayConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.customBgpAddresses">customBgpAddresses</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference">VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ipsecPolicy">ipsecPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference">VirtualNetworkGatewayConnectionIpsecPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference">VirtualNetworkGatewayConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.trafficSelectorPolicy">trafficSelectorPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList">VirtualNetworkGatewayConnectionTrafficSelectorPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.authorizationKeyInput">authorizationKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connectionModeInput">connectionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connectionProtocolInput">connectionProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.customBgpAddressesInput">customBgpAddressesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses">VirtualNetworkGatewayConnectionCustomBgpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.dpdTimeoutSecondsInput">dpdTimeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.egressNatRuleIdsInput">egressNatRuleIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.enableBgpInput">enableBgpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteCircuitIdInput">expressRouteCircuitIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteGatewayBypassInput">expressRouteGatewayBypassInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ingressNatRuleIdsInput">ingressNatRuleIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ipsecPolicyInput">ipsecPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localAzureIpAddressEnabledInput">localAzureIpAddressEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localNetworkGatewayIdInput">localNetworkGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayIdInput">peerVirtualNetworkGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.privateLinkFastPathEnabledInput">privateLinkFastPathEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.routingWeightInput">routingWeightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.sharedKeyInput">sharedKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts">VirtualNetworkGatewayConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.trafficSelectorPolicyInput">trafficSelectorPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy">VirtualNetworkGatewayConnectionTrafficSelectorPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectorsInput">usePolicyBasedTrafficSelectorsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.virtualNetworkGatewayIdInput">virtualNetworkGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.authorizationKey">authorizationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connectionMode">connectionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connectionProtocol">connectionProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.dpdTimeoutSeconds">dpdTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.egressNatRuleIds">egressNatRuleIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.enableBgp">enableBgp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteCircuitId">expressRouteCircuitId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteGatewayBypass">expressRouteGatewayBypass</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ingressNatRuleIds">ingressNatRuleIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localAzureIpAddressEnabled">localAzureIpAddressEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localNetworkGatewayId">localNetworkGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayId">peerVirtualNetworkGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.privateLinkFastPathEnabled">privateLinkFastPathEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.routingWeight">routingWeight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.sharedKey">sharedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectors">usePolicyBasedTrafficSelectors</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.virtualNetworkGatewayId">virtualNetworkGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customBgpAddresses`<sup>Required</sup> <a name="customBgpAddresses" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.customBgpAddresses"></a>

```java
public VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference getCustomBgpAddresses();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference">VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference</a>

---

##### `ipsecPolicy`<sup>Required</sup> <a name="ipsecPolicy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ipsecPolicy"></a>

```java
public VirtualNetworkGatewayConnectionIpsecPolicyOutputReference getIpsecPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference">VirtualNetworkGatewayConnectionIpsecPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.timeouts"></a>

```java
public VirtualNetworkGatewayConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference">VirtualNetworkGatewayConnectionTimeoutsOutputReference</a>

---

##### `trafficSelectorPolicy`<sup>Required</sup> <a name="trafficSelectorPolicy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.trafficSelectorPolicy"></a>

```java
public VirtualNetworkGatewayConnectionTrafficSelectorPolicyList getTrafficSelectorPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList">VirtualNetworkGatewayConnectionTrafficSelectorPolicyList</a>

---

##### `authorizationKeyInput`<sup>Optional</sup> <a name="authorizationKeyInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.authorizationKeyInput"></a>

```java
public java.lang.String getAuthorizationKeyInput();
```

- *Type:* java.lang.String

---

##### `connectionModeInput`<sup>Optional</sup> <a name="connectionModeInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connectionModeInput"></a>

```java
public java.lang.String getConnectionModeInput();
```

- *Type:* java.lang.String

---

##### `connectionProtocolInput`<sup>Optional</sup> <a name="connectionProtocolInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connectionProtocolInput"></a>

```java
public java.lang.String getConnectionProtocolInput();
```

- *Type:* java.lang.String

---

##### `customBgpAddressesInput`<sup>Optional</sup> <a name="customBgpAddressesInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.customBgpAddressesInput"></a>

```java
public VirtualNetworkGatewayConnectionCustomBgpAddresses getCustomBgpAddressesInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses">VirtualNetworkGatewayConnectionCustomBgpAddresses</a>

---

##### `dpdTimeoutSecondsInput`<sup>Optional</sup> <a name="dpdTimeoutSecondsInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.dpdTimeoutSecondsInput"></a>

```java
public java.lang.Number getDpdTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `egressNatRuleIdsInput`<sup>Optional</sup> <a name="egressNatRuleIdsInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.egressNatRuleIdsInput"></a>

```java
public java.util.List<java.lang.String> getEgressNatRuleIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableBgpInput`<sup>Optional</sup> <a name="enableBgpInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.enableBgpInput"></a>

```java
public java.lang.Object getEnableBgpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expressRouteCircuitIdInput`<sup>Optional</sup> <a name="expressRouteCircuitIdInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteCircuitIdInput"></a>

```java
public java.lang.String getExpressRouteCircuitIdInput();
```

- *Type:* java.lang.String

---

##### `expressRouteGatewayBypassInput`<sup>Optional</sup> <a name="expressRouteGatewayBypassInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteGatewayBypassInput"></a>

```java
public java.lang.Object getExpressRouteGatewayBypassInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ingressNatRuleIdsInput`<sup>Optional</sup> <a name="ingressNatRuleIdsInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ingressNatRuleIdsInput"></a>

```java
public java.util.List<java.lang.String> getIngressNatRuleIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipsecPolicyInput`<sup>Optional</sup> <a name="ipsecPolicyInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ipsecPolicyInput"></a>

```java
public VirtualNetworkGatewayConnectionIpsecPolicy getIpsecPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a>

---

##### `localAzureIpAddressEnabledInput`<sup>Optional</sup> <a name="localAzureIpAddressEnabledInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localAzureIpAddressEnabledInput"></a>

```java
public java.lang.Object getLocalAzureIpAddressEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `localNetworkGatewayIdInput`<sup>Optional</sup> <a name="localNetworkGatewayIdInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localNetworkGatewayIdInput"></a>

```java
public java.lang.String getLocalNetworkGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `peerVirtualNetworkGatewayIdInput`<sup>Optional</sup> <a name="peerVirtualNetworkGatewayIdInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayIdInput"></a>

```java
public java.lang.String getPeerVirtualNetworkGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `privateLinkFastPathEnabledInput`<sup>Optional</sup> <a name="privateLinkFastPathEnabledInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.privateLinkFastPathEnabledInput"></a>

```java
public java.lang.Object getPrivateLinkFastPathEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `routingWeightInput`<sup>Optional</sup> <a name="routingWeightInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.routingWeightInput"></a>

```java
public java.lang.Number getRoutingWeightInput();
```

- *Type:* java.lang.Number

---

##### `sharedKeyInput`<sup>Optional</sup> <a name="sharedKeyInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.sharedKeyInput"></a>

```java
public java.lang.String getSharedKeyInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts">VirtualNetworkGatewayConnectionTimeouts</a>

---

##### `trafficSelectorPolicyInput`<sup>Optional</sup> <a name="trafficSelectorPolicyInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.trafficSelectorPolicyInput"></a>

```java
public java.lang.Object getTrafficSelectorPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy">VirtualNetworkGatewayConnectionTrafficSelectorPolicy</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `usePolicyBasedTrafficSelectorsInput`<sup>Optional</sup> <a name="usePolicyBasedTrafficSelectorsInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectorsInput"></a>

```java
public java.lang.Object getUsePolicyBasedTrafficSelectorsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `virtualNetworkGatewayIdInput`<sup>Optional</sup> <a name="virtualNetworkGatewayIdInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.virtualNetworkGatewayIdInput"></a>

```java
public java.lang.String getVirtualNetworkGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `authorizationKey`<sup>Required</sup> <a name="authorizationKey" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.authorizationKey"></a>

```java
public java.lang.String getAuthorizationKey();
```

- *Type:* java.lang.String

---

##### `connectionMode`<sup>Required</sup> <a name="connectionMode" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connectionMode"></a>

```java
public java.lang.String getConnectionMode();
```

- *Type:* java.lang.String

---

##### `connectionProtocol`<sup>Required</sup> <a name="connectionProtocol" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connectionProtocol"></a>

```java
public java.lang.String getConnectionProtocol();
```

- *Type:* java.lang.String

---

##### `dpdTimeoutSeconds`<sup>Required</sup> <a name="dpdTimeoutSeconds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.dpdTimeoutSeconds"></a>

```java
public java.lang.Number getDpdTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `egressNatRuleIds`<sup>Required</sup> <a name="egressNatRuleIds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.egressNatRuleIds"></a>

```java
public java.util.List<java.lang.String> getEgressNatRuleIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableBgp`<sup>Required</sup> <a name="enableBgp" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.enableBgp"></a>

```java
public java.lang.Object getEnableBgp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expressRouteCircuitId`<sup>Required</sup> <a name="expressRouteCircuitId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteCircuitId"></a>

```java
public java.lang.String getExpressRouteCircuitId();
```

- *Type:* java.lang.String

---

##### `expressRouteGatewayBypass`<sup>Required</sup> <a name="expressRouteGatewayBypass" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteGatewayBypass"></a>

```java
public java.lang.Object getExpressRouteGatewayBypass();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ingressNatRuleIds`<sup>Required</sup> <a name="ingressNatRuleIds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ingressNatRuleIds"></a>

```java
public java.util.List<java.lang.String> getIngressNatRuleIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `localAzureIpAddressEnabled`<sup>Required</sup> <a name="localAzureIpAddressEnabled" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localAzureIpAddressEnabled"></a>

```java
public java.lang.Object getLocalAzureIpAddressEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `localNetworkGatewayId`<sup>Required</sup> <a name="localNetworkGatewayId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localNetworkGatewayId"></a>

```java
public java.lang.String getLocalNetworkGatewayId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `peerVirtualNetworkGatewayId`<sup>Required</sup> <a name="peerVirtualNetworkGatewayId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayId"></a>

```java
public java.lang.String getPeerVirtualNetworkGatewayId();
```

- *Type:* java.lang.String

---

##### `privateLinkFastPathEnabled`<sup>Required</sup> <a name="privateLinkFastPathEnabled" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.privateLinkFastPathEnabled"></a>

```java
public java.lang.Object getPrivateLinkFastPathEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `routingWeight`<sup>Required</sup> <a name="routingWeight" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.routingWeight"></a>

```java
public java.lang.Number getRoutingWeight();
```

- *Type:* java.lang.Number

---

##### `sharedKey`<sup>Required</sup> <a name="sharedKey" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.sharedKey"></a>

```java
public java.lang.String getSharedKey();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `usePolicyBasedTrafficSelectors`<sup>Required</sup> <a name="usePolicyBasedTrafficSelectors" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectors"></a>

```java
public java.lang.Object getUsePolicyBasedTrafficSelectors();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `virtualNetworkGatewayId`<sup>Required</sup> <a name="virtualNetworkGatewayId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.virtualNetworkGatewayId"></a>

```java
public java.lang.String getVirtualNetworkGatewayId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualNetworkGatewayConnectionConfig <a name="VirtualNetworkGatewayConnectionConfig" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_connection.VirtualNetworkGatewayConnectionConfig;

VirtualNetworkGatewayConnectionConfig.builder()
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
    .type(java.lang.String)
    .virtualNetworkGatewayId(java.lang.String)
//  .authorizationKey(java.lang.String)
//  .connectionMode(java.lang.String)
//  .connectionProtocol(java.lang.String)
//  .customBgpAddresses(VirtualNetworkGatewayConnectionCustomBgpAddresses)
//  .dpdTimeoutSeconds(java.lang.Number)
//  .egressNatRuleIds(java.util.List<java.lang.String>)
//  .enableBgp(java.lang.Boolean)
//  .enableBgp(IResolvable)
//  .expressRouteCircuitId(java.lang.String)
//  .expressRouteGatewayBypass(java.lang.Boolean)
//  .expressRouteGatewayBypass(IResolvable)
//  .id(java.lang.String)
//  .ingressNatRuleIds(java.util.List<java.lang.String>)
//  .ipsecPolicy(VirtualNetworkGatewayConnectionIpsecPolicy)
//  .localAzureIpAddressEnabled(java.lang.Boolean)
//  .localAzureIpAddressEnabled(IResolvable)
//  .localNetworkGatewayId(java.lang.String)
//  .peerVirtualNetworkGatewayId(java.lang.String)
//  .privateLinkFastPathEnabled(java.lang.Boolean)
//  .privateLinkFastPathEnabled(IResolvable)
//  .routingWeight(java.lang.Number)
//  .sharedKey(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VirtualNetworkGatewayConnectionTimeouts)
//  .trafficSelectorPolicy(IResolvable)
//  .trafficSelectorPolicy(java.util.List<VirtualNetworkGatewayConnectionTrafficSelectorPolicy>)
//  .usePolicyBasedTrafficSelectors(java.lang.Boolean)
//  .usePolicyBasedTrafficSelectors(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#location VirtualNetworkGatewayConnection#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#name VirtualNetworkGatewayConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#resource_group_name VirtualNetworkGatewayConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#type VirtualNetworkGatewayConnection#type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.virtualNetworkGatewayId">virtualNetworkGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#virtual_network_gateway_id VirtualNetworkGatewayConnection#virtual_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.authorizationKey">authorizationKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#authorization_key VirtualNetworkGatewayConnection#authorization_key}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.connectionMode">connectionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#connection_mode VirtualNetworkGatewayConnection#connection_mode}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.connectionProtocol">connectionProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#connection_protocol VirtualNetworkGatewayConnection#connection_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.customBgpAddresses">customBgpAddresses</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses">VirtualNetworkGatewayConnectionCustomBgpAddresses</a></code> | custom_bgp_addresses block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.dpdTimeoutSeconds">dpdTimeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#dpd_timeout_seconds VirtualNetworkGatewayConnection#dpd_timeout_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.egressNatRuleIds">egressNatRuleIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#egress_nat_rule_ids VirtualNetworkGatewayConnection#egress_nat_rule_ids}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.enableBgp">enableBgp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#enable_bgp VirtualNetworkGatewayConnection#enable_bgp}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.expressRouteCircuitId">expressRouteCircuitId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#express_route_circuit_id VirtualNetworkGatewayConnection#express_route_circuit_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.expressRouteGatewayBypass">expressRouteGatewayBypass</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#express_route_gateway_bypass VirtualNetworkGatewayConnection#express_route_gateway_bypass}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#id VirtualNetworkGatewayConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.ingressNatRuleIds">ingressNatRuleIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#ingress_nat_rule_ids VirtualNetworkGatewayConnection#ingress_nat_rule_ids}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.ipsecPolicy">ipsecPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a></code> | ipsec_policy block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.localAzureIpAddressEnabled">localAzureIpAddressEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#local_azure_ip_address_enabled VirtualNetworkGatewayConnection#local_azure_ip_address_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.localNetworkGatewayId">localNetworkGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#local_network_gateway_id VirtualNetworkGatewayConnection#local_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.peerVirtualNetworkGatewayId">peerVirtualNetworkGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#peer_virtual_network_gateway_id VirtualNetworkGatewayConnection#peer_virtual_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.privateLinkFastPathEnabled">privateLinkFastPathEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#private_link_fast_path_enabled VirtualNetworkGatewayConnection#private_link_fast_path_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.routingWeight">routingWeight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#routing_weight VirtualNetworkGatewayConnection#routing_weight}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.sharedKey">sharedKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#shared_key VirtualNetworkGatewayConnection#shared_key}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#tags VirtualNetworkGatewayConnection#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts">VirtualNetworkGatewayConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.trafficSelectorPolicy">trafficSelectorPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy">VirtualNetworkGatewayConnectionTrafficSelectorPolicy</a>></code> | traffic_selector_policy block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.usePolicyBasedTrafficSelectors">usePolicyBasedTrafficSelectors</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#use_policy_based_traffic_selectors VirtualNetworkGatewayConnection#use_policy_based_traffic_selectors}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#location VirtualNetworkGatewayConnection#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#name VirtualNetworkGatewayConnection#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#resource_group_name VirtualNetworkGatewayConnection#resource_group_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#type VirtualNetworkGatewayConnection#type}.

---

##### `virtualNetworkGatewayId`<sup>Required</sup> <a name="virtualNetworkGatewayId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.virtualNetworkGatewayId"></a>

```java
public java.lang.String getVirtualNetworkGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#virtual_network_gateway_id VirtualNetworkGatewayConnection#virtual_network_gateway_id}.

---

##### `authorizationKey`<sup>Optional</sup> <a name="authorizationKey" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.authorizationKey"></a>

```java
public java.lang.String getAuthorizationKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#authorization_key VirtualNetworkGatewayConnection#authorization_key}.

---

##### `connectionMode`<sup>Optional</sup> <a name="connectionMode" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.connectionMode"></a>

```java
public java.lang.String getConnectionMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#connection_mode VirtualNetworkGatewayConnection#connection_mode}.

---

##### `connectionProtocol`<sup>Optional</sup> <a name="connectionProtocol" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.connectionProtocol"></a>

```java
public java.lang.String getConnectionProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#connection_protocol VirtualNetworkGatewayConnection#connection_protocol}.

---

##### `customBgpAddresses`<sup>Optional</sup> <a name="customBgpAddresses" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.customBgpAddresses"></a>

```java
public VirtualNetworkGatewayConnectionCustomBgpAddresses getCustomBgpAddresses();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses">VirtualNetworkGatewayConnectionCustomBgpAddresses</a>

custom_bgp_addresses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#custom_bgp_addresses VirtualNetworkGatewayConnection#custom_bgp_addresses}

---

##### `dpdTimeoutSeconds`<sup>Optional</sup> <a name="dpdTimeoutSeconds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.dpdTimeoutSeconds"></a>

```java
public java.lang.Number getDpdTimeoutSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#dpd_timeout_seconds VirtualNetworkGatewayConnection#dpd_timeout_seconds}.

---

##### `egressNatRuleIds`<sup>Optional</sup> <a name="egressNatRuleIds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.egressNatRuleIds"></a>

```java
public java.util.List<java.lang.String> getEgressNatRuleIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#egress_nat_rule_ids VirtualNetworkGatewayConnection#egress_nat_rule_ids}.

---

##### `enableBgp`<sup>Optional</sup> <a name="enableBgp" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.enableBgp"></a>

```java
public java.lang.Object getEnableBgp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#enable_bgp VirtualNetworkGatewayConnection#enable_bgp}.

---

##### `expressRouteCircuitId`<sup>Optional</sup> <a name="expressRouteCircuitId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.expressRouteCircuitId"></a>

```java
public java.lang.String getExpressRouteCircuitId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#express_route_circuit_id VirtualNetworkGatewayConnection#express_route_circuit_id}.

---

##### `expressRouteGatewayBypass`<sup>Optional</sup> <a name="expressRouteGatewayBypass" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.expressRouteGatewayBypass"></a>

```java
public java.lang.Object getExpressRouteGatewayBypass();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#express_route_gateway_bypass VirtualNetworkGatewayConnection#express_route_gateway_bypass}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#id VirtualNetworkGatewayConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingressNatRuleIds`<sup>Optional</sup> <a name="ingressNatRuleIds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.ingressNatRuleIds"></a>

```java
public java.util.List<java.lang.String> getIngressNatRuleIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#ingress_nat_rule_ids VirtualNetworkGatewayConnection#ingress_nat_rule_ids}.

---

##### `ipsecPolicy`<sup>Optional</sup> <a name="ipsecPolicy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.ipsecPolicy"></a>

```java
public VirtualNetworkGatewayConnectionIpsecPolicy getIpsecPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a>

ipsec_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#ipsec_policy VirtualNetworkGatewayConnection#ipsec_policy}

---

##### `localAzureIpAddressEnabled`<sup>Optional</sup> <a name="localAzureIpAddressEnabled" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.localAzureIpAddressEnabled"></a>

```java
public java.lang.Object getLocalAzureIpAddressEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#local_azure_ip_address_enabled VirtualNetworkGatewayConnection#local_azure_ip_address_enabled}.

---

##### `localNetworkGatewayId`<sup>Optional</sup> <a name="localNetworkGatewayId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.localNetworkGatewayId"></a>

```java
public java.lang.String getLocalNetworkGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#local_network_gateway_id VirtualNetworkGatewayConnection#local_network_gateway_id}.

---

##### `peerVirtualNetworkGatewayId`<sup>Optional</sup> <a name="peerVirtualNetworkGatewayId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.peerVirtualNetworkGatewayId"></a>

```java
public java.lang.String getPeerVirtualNetworkGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#peer_virtual_network_gateway_id VirtualNetworkGatewayConnection#peer_virtual_network_gateway_id}.

---

##### `privateLinkFastPathEnabled`<sup>Optional</sup> <a name="privateLinkFastPathEnabled" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.privateLinkFastPathEnabled"></a>

```java
public java.lang.Object getPrivateLinkFastPathEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#private_link_fast_path_enabled VirtualNetworkGatewayConnection#private_link_fast_path_enabled}.

---

##### `routingWeight`<sup>Optional</sup> <a name="routingWeight" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.routingWeight"></a>

```java
public java.lang.Number getRoutingWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#routing_weight VirtualNetworkGatewayConnection#routing_weight}.

---

##### `sharedKey`<sup>Optional</sup> <a name="sharedKey" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.sharedKey"></a>

```java
public java.lang.String getSharedKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#shared_key VirtualNetworkGatewayConnection#shared_key}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#tags VirtualNetworkGatewayConnection#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.timeouts"></a>

```java
public VirtualNetworkGatewayConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts">VirtualNetworkGatewayConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#timeouts VirtualNetworkGatewayConnection#timeouts}

---

##### `trafficSelectorPolicy`<sup>Optional</sup> <a name="trafficSelectorPolicy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.trafficSelectorPolicy"></a>

```java
public java.lang.Object getTrafficSelectorPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy">VirtualNetworkGatewayConnectionTrafficSelectorPolicy</a>>

traffic_selector_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#traffic_selector_policy VirtualNetworkGatewayConnection#traffic_selector_policy}

---

##### `usePolicyBasedTrafficSelectors`<sup>Optional</sup> <a name="usePolicyBasedTrafficSelectors" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.usePolicyBasedTrafficSelectors"></a>

```java
public java.lang.Object getUsePolicyBasedTrafficSelectors();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#use_policy_based_traffic_selectors VirtualNetworkGatewayConnection#use_policy_based_traffic_selectors}.

---

### VirtualNetworkGatewayConnectionCustomBgpAddresses <a name="VirtualNetworkGatewayConnectionCustomBgpAddresses" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_connection.VirtualNetworkGatewayConnectionCustomBgpAddresses;

VirtualNetworkGatewayConnectionCustomBgpAddresses.builder()
    .primary(java.lang.String)
//  .secondary(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses.property.primary">primary</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#primary VirtualNetworkGatewayConnection#primary}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses.property.secondary">secondary</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#secondary VirtualNetworkGatewayConnection#secondary}. |

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses.property.primary"></a>

```java
public java.lang.String getPrimary();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#primary VirtualNetworkGatewayConnection#primary}.

---

##### `secondary`<sup>Optional</sup> <a name="secondary" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses.property.secondary"></a>

```java
public java.lang.String getSecondary();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#secondary VirtualNetworkGatewayConnection#secondary}.

---

### VirtualNetworkGatewayConnectionIpsecPolicy <a name="VirtualNetworkGatewayConnectionIpsecPolicy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_connection.VirtualNetworkGatewayConnectionIpsecPolicy;

VirtualNetworkGatewayConnectionIpsecPolicy.builder()
    .dhGroup(java.lang.String)
    .ikeEncryption(java.lang.String)
    .ikeIntegrity(java.lang.String)
    .ipsecEncryption(java.lang.String)
    .ipsecIntegrity(java.lang.String)
    .pfsGroup(java.lang.String)
//  .saDatasize(java.lang.Number)
//  .saLifetime(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.dhGroup">dhGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#dh_group VirtualNetworkGatewayConnection#dh_group}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ikeEncryption">ikeEncryption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#ike_encryption VirtualNetworkGatewayConnection#ike_encryption}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ikeIntegrity">ikeIntegrity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#ike_integrity VirtualNetworkGatewayConnection#ike_integrity}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ipsecEncryption">ipsecEncryption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#ipsec_encryption VirtualNetworkGatewayConnection#ipsec_encryption}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ipsecIntegrity">ipsecIntegrity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#ipsec_integrity VirtualNetworkGatewayConnection#ipsec_integrity}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.pfsGroup">pfsGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#pfs_group VirtualNetworkGatewayConnection#pfs_group}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.saDatasize">saDatasize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#sa_datasize VirtualNetworkGatewayConnection#sa_datasize}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.saLifetime">saLifetime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#sa_lifetime VirtualNetworkGatewayConnection#sa_lifetime}. |

---

##### `dhGroup`<sup>Required</sup> <a name="dhGroup" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.dhGroup"></a>

```java
public java.lang.String getDhGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#dh_group VirtualNetworkGatewayConnection#dh_group}.

---

##### `ikeEncryption`<sup>Required</sup> <a name="ikeEncryption" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ikeEncryption"></a>

```java
public java.lang.String getIkeEncryption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#ike_encryption VirtualNetworkGatewayConnection#ike_encryption}.

---

##### `ikeIntegrity`<sup>Required</sup> <a name="ikeIntegrity" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ikeIntegrity"></a>

```java
public java.lang.String getIkeIntegrity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#ike_integrity VirtualNetworkGatewayConnection#ike_integrity}.

---

##### `ipsecEncryption`<sup>Required</sup> <a name="ipsecEncryption" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ipsecEncryption"></a>

```java
public java.lang.String getIpsecEncryption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#ipsec_encryption VirtualNetworkGatewayConnection#ipsec_encryption}.

---

##### `ipsecIntegrity`<sup>Required</sup> <a name="ipsecIntegrity" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ipsecIntegrity"></a>

```java
public java.lang.String getIpsecIntegrity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#ipsec_integrity VirtualNetworkGatewayConnection#ipsec_integrity}.

---

##### `pfsGroup`<sup>Required</sup> <a name="pfsGroup" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.pfsGroup"></a>

```java
public java.lang.String getPfsGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#pfs_group VirtualNetworkGatewayConnection#pfs_group}.

---

##### `saDatasize`<sup>Optional</sup> <a name="saDatasize" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.saDatasize"></a>

```java
public java.lang.Number getSaDatasize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#sa_datasize VirtualNetworkGatewayConnection#sa_datasize}.

---

##### `saLifetime`<sup>Optional</sup> <a name="saLifetime" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.saLifetime"></a>

```java
public java.lang.Number getSaLifetime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#sa_lifetime VirtualNetworkGatewayConnection#sa_lifetime}.

---

### VirtualNetworkGatewayConnectionTimeouts <a name="VirtualNetworkGatewayConnectionTimeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_connection.VirtualNetworkGatewayConnectionTimeouts;

VirtualNetworkGatewayConnectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#create VirtualNetworkGatewayConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#delete VirtualNetworkGatewayConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#read VirtualNetworkGatewayConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#update VirtualNetworkGatewayConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#create VirtualNetworkGatewayConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#delete VirtualNetworkGatewayConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#read VirtualNetworkGatewayConnection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#update VirtualNetworkGatewayConnection#update}.

---

### VirtualNetworkGatewayConnectionTrafficSelectorPolicy <a name="VirtualNetworkGatewayConnectionTrafficSelectorPolicy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_connection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy;

VirtualNetworkGatewayConnectionTrafficSelectorPolicy.builder()
    .localAddressCidrs(java.util.List<java.lang.String>)
    .remoteAddressCidrs(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy.property.localAddressCidrs">localAddressCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#local_address_cidrs VirtualNetworkGatewayConnection#local_address_cidrs}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy.property.remoteAddressCidrs">remoteAddressCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#remote_address_cidrs VirtualNetworkGatewayConnection#remote_address_cidrs}. |

---

##### `localAddressCidrs`<sup>Required</sup> <a name="localAddressCidrs" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy.property.localAddressCidrs"></a>

```java
public java.util.List<java.lang.String> getLocalAddressCidrs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#local_address_cidrs VirtualNetworkGatewayConnection#local_address_cidrs}.

---

##### `remoteAddressCidrs`<sup>Required</sup> <a name="remoteAddressCidrs" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy.property.remoteAddressCidrs"></a>

```java
public java.util.List<java.lang.String> getRemoteAddressCidrs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/virtual_network_gateway_connection#remote_address_cidrs VirtualNetworkGatewayConnection#remote_address_cidrs}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference <a name="VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_connection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference;

new VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.resetSecondary">resetSecondary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecondary` <a name="resetSecondary" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.resetSecondary"></a>

```java
public void resetSecondary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.primaryInput">primaryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.secondaryInput">secondaryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.primary">primary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.secondary">secondary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses">VirtualNetworkGatewayConnectionCustomBgpAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.primaryInput"></a>

```java
public java.lang.String getPrimaryInput();
```

- *Type:* java.lang.String

---

##### `secondaryInput`<sup>Optional</sup> <a name="secondaryInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.secondaryInput"></a>

```java
public java.lang.String getSecondaryInput();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.primary"></a>

```java
public java.lang.String getPrimary();
```

- *Type:* java.lang.String

---

##### `secondary`<sup>Required</sup> <a name="secondary" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.secondary"></a>

```java
public java.lang.String getSecondary();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.internalValue"></a>

```java
public VirtualNetworkGatewayConnectionCustomBgpAddresses getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses">VirtualNetworkGatewayConnectionCustomBgpAddresses</a>

---


### VirtualNetworkGatewayConnectionIpsecPolicyOutputReference <a name="VirtualNetworkGatewayConnectionIpsecPolicyOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_connection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference;

new VirtualNetworkGatewayConnectionIpsecPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resetSaDatasize">resetSaDatasize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resetSaLifetime">resetSaLifetime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSaDatasize` <a name="resetSaDatasize" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resetSaDatasize"></a>

```java
public void resetSaDatasize()
```

##### `resetSaLifetime` <a name="resetSaLifetime" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resetSaLifetime"></a>

```java
public void resetSaLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroupInput">dhGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryptionInput">ikeEncryptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrityInput">ikeIntegrityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryptionInput">ipsecEncryptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrityInput">ipsecIntegrityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroupInput">pfsGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasizeInput">saDatasizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetimeInput">saLifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroup">dhGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryption">ikeEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrity">ikeIntegrity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryption">ipsecEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrity">ipsecIntegrity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroup">pfsGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasize">saDatasize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetime">saLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dhGroupInput`<sup>Optional</sup> <a name="dhGroupInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroupInput"></a>

```java
public java.lang.String getDhGroupInput();
```

- *Type:* java.lang.String

---

##### `ikeEncryptionInput`<sup>Optional</sup> <a name="ikeEncryptionInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryptionInput"></a>

```java
public java.lang.String getIkeEncryptionInput();
```

- *Type:* java.lang.String

---

##### `ikeIntegrityInput`<sup>Optional</sup> <a name="ikeIntegrityInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrityInput"></a>

```java
public java.lang.String getIkeIntegrityInput();
```

- *Type:* java.lang.String

---

##### `ipsecEncryptionInput`<sup>Optional</sup> <a name="ipsecEncryptionInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryptionInput"></a>

```java
public java.lang.String getIpsecEncryptionInput();
```

- *Type:* java.lang.String

---

##### `ipsecIntegrityInput`<sup>Optional</sup> <a name="ipsecIntegrityInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrityInput"></a>

```java
public java.lang.String getIpsecIntegrityInput();
```

- *Type:* java.lang.String

---

##### `pfsGroupInput`<sup>Optional</sup> <a name="pfsGroupInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroupInput"></a>

```java
public java.lang.String getPfsGroupInput();
```

- *Type:* java.lang.String

---

##### `saDatasizeInput`<sup>Optional</sup> <a name="saDatasizeInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasizeInput"></a>

```java
public java.lang.Number getSaDatasizeInput();
```

- *Type:* java.lang.Number

---

##### `saLifetimeInput`<sup>Optional</sup> <a name="saLifetimeInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetimeInput"></a>

```java
public java.lang.Number getSaLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `dhGroup`<sup>Required</sup> <a name="dhGroup" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroup"></a>

```java
public java.lang.String getDhGroup();
```

- *Type:* java.lang.String

---

##### `ikeEncryption`<sup>Required</sup> <a name="ikeEncryption" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryption"></a>

```java
public java.lang.String getIkeEncryption();
```

- *Type:* java.lang.String

---

##### `ikeIntegrity`<sup>Required</sup> <a name="ikeIntegrity" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrity"></a>

```java
public java.lang.String getIkeIntegrity();
```

- *Type:* java.lang.String

---

##### `ipsecEncryption`<sup>Required</sup> <a name="ipsecEncryption" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryption"></a>

```java
public java.lang.String getIpsecEncryption();
```

- *Type:* java.lang.String

---

##### `ipsecIntegrity`<sup>Required</sup> <a name="ipsecIntegrity" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrity"></a>

```java
public java.lang.String getIpsecIntegrity();
```

- *Type:* java.lang.String

---

##### `pfsGroup`<sup>Required</sup> <a name="pfsGroup" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroup"></a>

```java
public java.lang.String getPfsGroup();
```

- *Type:* java.lang.String

---

##### `saDatasize`<sup>Required</sup> <a name="saDatasize" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasize"></a>

```java
public java.lang.Number getSaDatasize();
```

- *Type:* java.lang.Number

---

##### `saLifetime`<sup>Required</sup> <a name="saLifetime" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetime"></a>

```java
public java.lang.Number getSaLifetime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.internalValue"></a>

```java
public VirtualNetworkGatewayConnectionIpsecPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a>

---


### VirtualNetworkGatewayConnectionTimeoutsOutputReference <a name="VirtualNetworkGatewayConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_connection.VirtualNetworkGatewayConnectionTimeoutsOutputReference;

new VirtualNetworkGatewayConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts">VirtualNetworkGatewayConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts">VirtualNetworkGatewayConnectionTimeouts</a>

---


### VirtualNetworkGatewayConnectionTrafficSelectorPolicyList <a name="VirtualNetworkGatewayConnectionTrafficSelectorPolicyList" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_connection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList;

new VirtualNetworkGatewayConnectionTrafficSelectorPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.get"></a>

```java
public VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy">VirtualNetworkGatewayConnectionTrafficSelectorPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy">VirtualNetworkGatewayConnectionTrafficSelectorPolicy</a>>

---


### VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference <a name="VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_connection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference;

new VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressCidrsInput">localAddressCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressCidrsInput">remoteAddressCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressCidrs">localAddressCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressCidrs">remoteAddressCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy">VirtualNetworkGatewayConnectionTrafficSelectorPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localAddressCidrsInput`<sup>Optional</sup> <a name="localAddressCidrsInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressCidrsInput"></a>

```java
public java.util.List<java.lang.String> getLocalAddressCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `remoteAddressCidrsInput`<sup>Optional</sup> <a name="remoteAddressCidrsInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressCidrsInput"></a>

```java
public java.util.List<java.lang.String> getRemoteAddressCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `localAddressCidrs`<sup>Required</sup> <a name="localAddressCidrs" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressCidrs"></a>

```java
public java.util.List<java.lang.String> getLocalAddressCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `remoteAddressCidrs`<sup>Required</sup> <a name="remoteAddressCidrs" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressCidrs"></a>

```java
public java.util.List<java.lang.String> getRemoteAddressCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy">VirtualNetworkGatewayConnectionTrafficSelectorPolicy</a>

---



