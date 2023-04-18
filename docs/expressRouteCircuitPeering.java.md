# `azurerm_express_route_circuit_peering`

Refer to the Terraform Registory for docs: [`azurerm_express_route_circuit_peering`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering).

# `expressRouteCircuitPeering` Submodule <a name="`expressRouteCircuitPeering` Submodule" id="@cdktf/provider-azurerm.expressRouteCircuitPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExpressRouteCircuitPeering <a name="ExpressRouteCircuitPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering azurerm_express_route_circuit_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_circuit_peering.ExpressRouteCircuitPeering;

ExpressRouteCircuitPeering.Builder.create(Construct scope, java.lang.String id)
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
    .expressRouteCircuitName(java.lang.String)
    .peeringType(java.lang.String)
    .resourceGroupName(java.lang.String)
    .vlanId(java.lang.Number)
//  .id(java.lang.String)
//  .ipv4Enabled(java.lang.Boolean)
//  .ipv4Enabled(IResolvable)
//  .ipv6(ExpressRouteCircuitPeeringIpv6)
//  .microsoftPeeringConfig(ExpressRouteCircuitPeeringMicrosoftPeeringConfig)
//  .peerAsn(java.lang.Number)
//  .primaryPeerAddressPrefix(java.lang.String)
//  .routeFilterId(java.lang.String)
//  .secondaryPeerAddressPrefix(java.lang.String)
//  .sharedKey(java.lang.String)
//  .timeouts(ExpressRouteCircuitPeeringTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.expressRouteCircuitName">expressRouteCircuitName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#express_route_circuit_name ExpressRouteCircuitPeering#express_route_circuit_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.peeringType">peeringType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#peering_type ExpressRouteCircuitPeering#peering_type}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#resource_group_name ExpressRouteCircuitPeering#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.vlanId">vlanId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#vlan_id ExpressRouteCircuitPeering#vlan_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#id ExpressRouteCircuitPeering#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.ipv4Enabled">ipv4Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#ipv4_enabled ExpressRouteCircuitPeering#ipv4_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a></code> | ipv6 block. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.microsoftPeeringConfig">microsoftPeeringConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a></code> | microsoft_peering_config block. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.peerAsn">peerAsn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#peer_asn ExpressRouteCircuitPeering#peer_asn}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.primaryPeerAddressPrefix">primaryPeerAddressPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.routeFilterId">routeFilterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.secondaryPeerAddressPrefix">secondaryPeerAddressPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.sharedKey">sharedKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#shared_key ExpressRouteCircuitPeering#shared_key}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `expressRouteCircuitName`<sup>Required</sup> <a name="expressRouteCircuitName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.expressRouteCircuitName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#express_route_circuit_name ExpressRouteCircuitPeering#express_route_circuit_name}.

---

##### `peeringType`<sup>Required</sup> <a name="peeringType" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.peeringType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#peering_type ExpressRouteCircuitPeering#peering_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#resource_group_name ExpressRouteCircuitPeering#resource_group_name}.

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.vlanId"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#vlan_id ExpressRouteCircuitPeering#vlan_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#id ExpressRouteCircuitPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv4Enabled`<sup>Optional</sup> <a name="ipv4Enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.ipv4Enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#ipv4_enabled ExpressRouteCircuitPeering#ipv4_enabled}.

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.ipv6"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a>

ipv6 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#ipv6 ExpressRouteCircuitPeering#ipv6}

---

##### `microsoftPeeringConfig`<sup>Optional</sup> <a name="microsoftPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.microsoftPeeringConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a>

microsoft_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#microsoft_peering_config ExpressRouteCircuitPeering#microsoft_peering_config}

---

##### `peerAsn`<sup>Optional</sup> <a name="peerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.peerAsn"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#peer_asn ExpressRouteCircuitPeering#peer_asn}.

---

##### `primaryPeerAddressPrefix`<sup>Optional</sup> <a name="primaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.primaryPeerAddressPrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}.

---

##### `routeFilterId`<sup>Optional</sup> <a name="routeFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.routeFilterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}.

---

##### `secondaryPeerAddressPrefix`<sup>Optional</sup> <a name="secondaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.secondaryPeerAddressPrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}.

---

##### `sharedKey`<sup>Optional</sup> <a name="sharedKey" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.sharedKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#shared_key ExpressRouteCircuitPeering#shared_key}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#timeouts ExpressRouteCircuitPeering#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putIpv6">putIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putMicrosoftPeeringConfig">putMicrosoftPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetIpv4Enabled">resetIpv4Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetIpv6">resetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetMicrosoftPeeringConfig">resetMicrosoftPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetPeerAsn">resetPeerAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetPrimaryPeerAddressPrefix">resetPrimaryPeerAddressPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetRouteFilterId">resetRouteFilterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetSecondaryPeerAddressPrefix">resetSecondaryPeerAddressPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetSharedKey">resetSharedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putIpv6` <a name="putIpv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putIpv6"></a>

```java
public void putIpv6(ExpressRouteCircuitPeeringIpv6 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putIpv6.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a>

---

##### `putMicrosoftPeeringConfig` <a name="putMicrosoftPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putMicrosoftPeeringConfig"></a>

```java
public void putMicrosoftPeeringConfig(ExpressRouteCircuitPeeringMicrosoftPeeringConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putMicrosoftPeeringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putTimeouts"></a>

```java
public void putTimeouts(ExpressRouteCircuitPeeringTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetId"></a>

```java
public void resetId()
```

##### `resetIpv4Enabled` <a name="resetIpv4Enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetIpv4Enabled"></a>

```java
public void resetIpv4Enabled()
```

##### `resetIpv6` <a name="resetIpv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetIpv6"></a>

```java
public void resetIpv6()
```

##### `resetMicrosoftPeeringConfig` <a name="resetMicrosoftPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetMicrosoftPeeringConfig"></a>

```java
public void resetMicrosoftPeeringConfig()
```

##### `resetPeerAsn` <a name="resetPeerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetPeerAsn"></a>

```java
public void resetPeerAsn()
```

##### `resetPrimaryPeerAddressPrefix` <a name="resetPrimaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetPrimaryPeerAddressPrefix"></a>

```java
public void resetPrimaryPeerAddressPrefix()
```

##### `resetRouteFilterId` <a name="resetRouteFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetRouteFilterId"></a>

```java
public void resetRouteFilterId()
```

##### `resetSecondaryPeerAddressPrefix` <a name="resetSecondaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetSecondaryPeerAddressPrefix"></a>

```java
public void resetSecondaryPeerAddressPrefix()
```

##### `resetSharedKey` <a name="resetSharedKey" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetSharedKey"></a>

```java
public void resetSharedKey()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_circuit_peering.ExpressRouteCircuitPeering;

ExpressRouteCircuitPeering.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_circuit_peering.ExpressRouteCircuitPeering;

ExpressRouteCircuitPeering.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_circuit_peering.ExpressRouteCircuitPeering;

ExpressRouteCircuitPeering.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.azureAsn">azureAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.gatewayManagerEtag">gatewayManagerEtag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference">ExpressRouteCircuitPeeringIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.microsoftPeeringConfig">microsoftPeeringConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference">ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryAzurePort">primaryAzurePort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryAzurePort">secondaryAzurePort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference">ExpressRouteCircuitPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.expressRouteCircuitNameInput">expressRouteCircuitNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv4EnabledInput">ipv4EnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv6Input">ipv6Input</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.microsoftPeeringConfigInput">microsoftPeeringConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peerAsnInput">peerAsnInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peeringTypeInput">peeringTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryPeerAddressPrefixInput">primaryPeerAddressPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.routeFilterIdInput">routeFilterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryPeerAddressPrefixInput">secondaryPeerAddressPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.sharedKeyInput">sharedKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.vlanIdInput">vlanIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.expressRouteCircuitName">expressRouteCircuitName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv4Enabled">ipv4Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peerAsn">peerAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peeringType">peeringType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryPeerAddressPrefix">primaryPeerAddressPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.routeFilterId">routeFilterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryPeerAddressPrefix">secondaryPeerAddressPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.sharedKey">sharedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.vlanId">vlanId</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `azureAsn`<sup>Required</sup> <a name="azureAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.azureAsn"></a>

```java
public java.lang.Number getAzureAsn();
```

- *Type:* java.lang.Number

---

##### `gatewayManagerEtag`<sup>Required</sup> <a name="gatewayManagerEtag" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.gatewayManagerEtag"></a>

```java
public java.lang.String getGatewayManagerEtag();
```

- *Type:* java.lang.String

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv6"></a>

```java
public ExpressRouteCircuitPeeringIpv6OutputReference getIpv6();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference">ExpressRouteCircuitPeeringIpv6OutputReference</a>

---

##### `microsoftPeeringConfig`<sup>Required</sup> <a name="microsoftPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.microsoftPeeringConfig"></a>

```java
public ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference getMicrosoftPeeringConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference">ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference</a>

---

##### `primaryAzurePort`<sup>Required</sup> <a name="primaryAzurePort" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryAzurePort"></a>

```java
public java.lang.String getPrimaryAzurePort();
```

- *Type:* java.lang.String

---

##### `secondaryAzurePort`<sup>Required</sup> <a name="secondaryAzurePort" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryAzurePort"></a>

```java
public java.lang.String getSecondaryAzurePort();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.timeouts"></a>

```java
public ExpressRouteCircuitPeeringTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference">ExpressRouteCircuitPeeringTimeoutsOutputReference</a>

---

##### `expressRouteCircuitNameInput`<sup>Optional</sup> <a name="expressRouteCircuitNameInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.expressRouteCircuitNameInput"></a>

```java
public java.lang.String getExpressRouteCircuitNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipv4EnabledInput`<sup>Optional</sup> <a name="ipv4EnabledInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv4EnabledInput"></a>

```java
public java.lang.Object getIpv4EnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv6Input"></a>

```java
public ExpressRouteCircuitPeeringIpv6 getIpv6Input();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a>

---

##### `microsoftPeeringConfigInput`<sup>Optional</sup> <a name="microsoftPeeringConfigInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.microsoftPeeringConfigInput"></a>

```java
public ExpressRouteCircuitPeeringMicrosoftPeeringConfig getMicrosoftPeeringConfigInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a>

---

##### `peerAsnInput`<sup>Optional</sup> <a name="peerAsnInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peerAsnInput"></a>

```java
public java.lang.Number getPeerAsnInput();
```

- *Type:* java.lang.Number

---

##### `peeringTypeInput`<sup>Optional</sup> <a name="peeringTypeInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peeringTypeInput"></a>

```java
public java.lang.String getPeeringTypeInput();
```

- *Type:* java.lang.String

---

##### `primaryPeerAddressPrefixInput`<sup>Optional</sup> <a name="primaryPeerAddressPrefixInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryPeerAddressPrefixInput"></a>

```java
public java.lang.String getPrimaryPeerAddressPrefixInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `routeFilterIdInput`<sup>Optional</sup> <a name="routeFilterIdInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.routeFilterIdInput"></a>

```java
public java.lang.String getRouteFilterIdInput();
```

- *Type:* java.lang.String

---

##### `secondaryPeerAddressPrefixInput`<sup>Optional</sup> <a name="secondaryPeerAddressPrefixInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryPeerAddressPrefixInput"></a>

```java
public java.lang.String getSecondaryPeerAddressPrefixInput();
```

- *Type:* java.lang.String

---

##### `sharedKeyInput`<sup>Optional</sup> <a name="sharedKeyInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.sharedKeyInput"></a>

```java
public java.lang.String getSharedKeyInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.vlanIdInput"></a>

```java
public java.lang.Number getVlanIdInput();
```

- *Type:* java.lang.Number

---

##### `expressRouteCircuitName`<sup>Required</sup> <a name="expressRouteCircuitName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.expressRouteCircuitName"></a>

```java
public java.lang.String getExpressRouteCircuitName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipv4Enabled`<sup>Required</sup> <a name="ipv4Enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv4Enabled"></a>

```java
public java.lang.Object getIpv4Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peerAsn"></a>

```java
public java.lang.Number getPeerAsn();
```

- *Type:* java.lang.Number

---

##### `peeringType`<sup>Required</sup> <a name="peeringType" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peeringType"></a>

```java
public java.lang.String getPeeringType();
```

- *Type:* java.lang.String

---

##### `primaryPeerAddressPrefix`<sup>Required</sup> <a name="primaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryPeerAddressPrefix"></a>

```java
public java.lang.String getPrimaryPeerAddressPrefix();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `routeFilterId`<sup>Required</sup> <a name="routeFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.routeFilterId"></a>

```java
public java.lang.String getRouteFilterId();
```

- *Type:* java.lang.String

---

##### `secondaryPeerAddressPrefix`<sup>Required</sup> <a name="secondaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryPeerAddressPrefix"></a>

```java
public java.lang.String getSecondaryPeerAddressPrefix();
```

- *Type:* java.lang.String

---

##### `sharedKey`<sup>Required</sup> <a name="sharedKey" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.sharedKey"></a>

```java
public java.lang.String getSharedKey();
```

- *Type:* java.lang.String

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.vlanId"></a>

```java
public java.lang.Number getVlanId();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ExpressRouteCircuitPeeringConfig <a name="ExpressRouteCircuitPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_circuit_peering.ExpressRouteCircuitPeeringConfig;

ExpressRouteCircuitPeeringConfig.builder()
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
    .expressRouteCircuitName(java.lang.String)
    .peeringType(java.lang.String)
    .resourceGroupName(java.lang.String)
    .vlanId(java.lang.Number)
//  .id(java.lang.String)
//  .ipv4Enabled(java.lang.Boolean)
//  .ipv4Enabled(IResolvable)
//  .ipv6(ExpressRouteCircuitPeeringIpv6)
//  .microsoftPeeringConfig(ExpressRouteCircuitPeeringMicrosoftPeeringConfig)
//  .peerAsn(java.lang.Number)
//  .primaryPeerAddressPrefix(java.lang.String)
//  .routeFilterId(java.lang.String)
//  .secondaryPeerAddressPrefix(java.lang.String)
//  .sharedKey(java.lang.String)
//  .timeouts(ExpressRouteCircuitPeeringTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.expressRouteCircuitName">expressRouteCircuitName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#express_route_circuit_name ExpressRouteCircuitPeering#express_route_circuit_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.peeringType">peeringType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#peering_type ExpressRouteCircuitPeering#peering_type}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#resource_group_name ExpressRouteCircuitPeering#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.vlanId">vlanId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#vlan_id ExpressRouteCircuitPeering#vlan_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#id ExpressRouteCircuitPeering#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.ipv4Enabled">ipv4Enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#ipv4_enabled ExpressRouteCircuitPeering#ipv4_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a></code> | ipv6 block. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.microsoftPeeringConfig">microsoftPeeringConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a></code> | microsoft_peering_config block. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.peerAsn">peerAsn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#peer_asn ExpressRouteCircuitPeering#peer_asn}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.primaryPeerAddressPrefix">primaryPeerAddressPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.routeFilterId">routeFilterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.secondaryPeerAddressPrefix">secondaryPeerAddressPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.sharedKey">sharedKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#shared_key ExpressRouteCircuitPeering#shared_key}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `expressRouteCircuitName`<sup>Required</sup> <a name="expressRouteCircuitName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.expressRouteCircuitName"></a>

```java
public java.lang.String getExpressRouteCircuitName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#express_route_circuit_name ExpressRouteCircuitPeering#express_route_circuit_name}.

---

##### `peeringType`<sup>Required</sup> <a name="peeringType" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.peeringType"></a>

```java
public java.lang.String getPeeringType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#peering_type ExpressRouteCircuitPeering#peering_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#resource_group_name ExpressRouteCircuitPeering#resource_group_name}.

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.vlanId"></a>

```java
public java.lang.Number getVlanId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#vlan_id ExpressRouteCircuitPeering#vlan_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#id ExpressRouteCircuitPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv4Enabled`<sup>Optional</sup> <a name="ipv4Enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.ipv4Enabled"></a>

```java
public java.lang.Object getIpv4Enabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#ipv4_enabled ExpressRouteCircuitPeering#ipv4_enabled}.

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.ipv6"></a>

```java
public ExpressRouteCircuitPeeringIpv6 getIpv6();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a>

ipv6 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#ipv6 ExpressRouteCircuitPeering#ipv6}

---

##### `microsoftPeeringConfig`<sup>Optional</sup> <a name="microsoftPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.microsoftPeeringConfig"></a>

```java
public ExpressRouteCircuitPeeringMicrosoftPeeringConfig getMicrosoftPeeringConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a>

microsoft_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#microsoft_peering_config ExpressRouteCircuitPeering#microsoft_peering_config}

---

##### `peerAsn`<sup>Optional</sup> <a name="peerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.peerAsn"></a>

```java
public java.lang.Number getPeerAsn();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#peer_asn ExpressRouteCircuitPeering#peer_asn}.

---

##### `primaryPeerAddressPrefix`<sup>Optional</sup> <a name="primaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.primaryPeerAddressPrefix"></a>

```java
public java.lang.String getPrimaryPeerAddressPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}.

---

##### `routeFilterId`<sup>Optional</sup> <a name="routeFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.routeFilterId"></a>

```java
public java.lang.String getRouteFilterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}.

---

##### `secondaryPeerAddressPrefix`<sup>Optional</sup> <a name="secondaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.secondaryPeerAddressPrefix"></a>

```java
public java.lang.String getSecondaryPeerAddressPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}.

---

##### `sharedKey`<sup>Optional</sup> <a name="sharedKey" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.sharedKey"></a>

```java
public java.lang.String getSharedKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#shared_key ExpressRouteCircuitPeering#shared_key}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.timeouts"></a>

```java
public ExpressRouteCircuitPeeringTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#timeouts ExpressRouteCircuitPeering#timeouts}

---

### ExpressRouteCircuitPeeringIpv6 <a name="ExpressRouteCircuitPeeringIpv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_circuit_peering.ExpressRouteCircuitPeeringIpv6;

ExpressRouteCircuitPeeringIpv6.builder()
    .primaryPeerAddressPrefix(java.lang.String)
    .secondaryPeerAddressPrefix(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .microsoftPeering(ExpressRouteCircuitPeeringIpv6MicrosoftPeering)
//  .routeFilterId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.primaryPeerAddressPrefix">primaryPeerAddressPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.secondaryPeerAddressPrefix">secondaryPeerAddressPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#enabled ExpressRouteCircuitPeering#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.microsoftPeering">microsoftPeering</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a></code> | microsoft_peering block. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.routeFilterId">routeFilterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}. |

---

##### `primaryPeerAddressPrefix`<sup>Required</sup> <a name="primaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.primaryPeerAddressPrefix"></a>

```java
public java.lang.String getPrimaryPeerAddressPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}.

---

##### `secondaryPeerAddressPrefix`<sup>Required</sup> <a name="secondaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.secondaryPeerAddressPrefix"></a>

```java
public java.lang.String getSecondaryPeerAddressPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#enabled ExpressRouteCircuitPeering#enabled}.

---

##### `microsoftPeering`<sup>Optional</sup> <a name="microsoftPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.microsoftPeering"></a>

```java
public ExpressRouteCircuitPeeringIpv6MicrosoftPeering getMicrosoftPeering();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a>

microsoft_peering block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#microsoft_peering ExpressRouteCircuitPeering#microsoft_peering}

---

##### `routeFilterId`<sup>Optional</sup> <a name="routeFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.routeFilterId"></a>

```java
public java.lang.String getRouteFilterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}.

---

### ExpressRouteCircuitPeeringIpv6MicrosoftPeering <a name="ExpressRouteCircuitPeeringIpv6MicrosoftPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_circuit_peering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering;

ExpressRouteCircuitPeeringIpv6MicrosoftPeering.builder()
//  .advertisedCommunities(java.util.List<java.lang.String>)
//  .advertisedPublicPrefixes(java.util.List<java.lang.String>)
//  .customerAsn(java.lang.Number)
//  .routingRegistryName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.advertisedCommunities">advertisedCommunities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#advertised_communities ExpressRouteCircuitPeering#advertised_communities}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.advertisedPublicPrefixes">advertisedPublicPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.customerAsn">customerAsn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.routingRegistryName">routingRegistryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}. |

---

##### `advertisedCommunities`<sup>Optional</sup> <a name="advertisedCommunities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.advertisedCommunities"></a>

```java
public java.util.List<java.lang.String> getAdvertisedCommunities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#advertised_communities ExpressRouteCircuitPeering#advertised_communities}.

---

##### `advertisedPublicPrefixes`<sup>Optional</sup> <a name="advertisedPublicPrefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.advertisedPublicPrefixes"></a>

```java
public java.util.List<java.lang.String> getAdvertisedPublicPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}.

---

##### `customerAsn`<sup>Optional</sup> <a name="customerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.customerAsn"></a>

```java
public java.lang.Number getCustomerAsn();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}.

---

##### `routingRegistryName`<sup>Optional</sup> <a name="routingRegistryName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.routingRegistryName"></a>

```java
public java.lang.String getRoutingRegistryName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}.

---

### ExpressRouteCircuitPeeringMicrosoftPeeringConfig <a name="ExpressRouteCircuitPeeringMicrosoftPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_circuit_peering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig;

ExpressRouteCircuitPeeringMicrosoftPeeringConfig.builder()
    .advertisedPublicPrefixes(java.util.List<java.lang.String>)
//  .advertisedCommunities(java.util.List<java.lang.String>)
//  .customerAsn(java.lang.Number)
//  .routingRegistryName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.advertisedPublicPrefixes">advertisedPublicPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.advertisedCommunities">advertisedCommunities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#advertised_communities ExpressRouteCircuitPeering#advertised_communities}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.customerAsn">customerAsn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.routingRegistryName">routingRegistryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}. |

---

##### `advertisedPublicPrefixes`<sup>Required</sup> <a name="advertisedPublicPrefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.advertisedPublicPrefixes"></a>

```java
public java.util.List<java.lang.String> getAdvertisedPublicPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}.

---

##### `advertisedCommunities`<sup>Optional</sup> <a name="advertisedCommunities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.advertisedCommunities"></a>

```java
public java.util.List<java.lang.String> getAdvertisedCommunities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#advertised_communities ExpressRouteCircuitPeering#advertised_communities}.

---

##### `customerAsn`<sup>Optional</sup> <a name="customerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.customerAsn"></a>

```java
public java.lang.Number getCustomerAsn();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}.

---

##### `routingRegistryName`<sup>Optional</sup> <a name="routingRegistryName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.routingRegistryName"></a>

```java
public java.lang.String getRoutingRegistryName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}.

---

### ExpressRouteCircuitPeeringTimeouts <a name="ExpressRouteCircuitPeeringTimeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_circuit_peering.ExpressRouteCircuitPeeringTimeouts;

ExpressRouteCircuitPeeringTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#create ExpressRouteCircuitPeering#create}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#delete ExpressRouteCircuitPeering#delete}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#read ExpressRouteCircuitPeering#read}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#update ExpressRouteCircuitPeering#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#create ExpressRouteCircuitPeering#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#delete ExpressRouteCircuitPeering#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#read ExpressRouteCircuitPeering#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/express_route_circuit_peering#update ExpressRouteCircuitPeering#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference <a name="ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_circuit_peering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference;

new ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetAdvertisedCommunities">resetAdvertisedCommunities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetAdvertisedPublicPrefixes">resetAdvertisedPublicPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetCustomerAsn">resetCustomerAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetRoutingRegistryName">resetRoutingRegistryName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdvertisedCommunities` <a name="resetAdvertisedCommunities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetAdvertisedCommunities"></a>

```java
public void resetAdvertisedCommunities()
```

##### `resetAdvertisedPublicPrefixes` <a name="resetAdvertisedPublicPrefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetAdvertisedPublicPrefixes"></a>

```java
public void resetAdvertisedPublicPrefixes()
```

##### `resetCustomerAsn` <a name="resetCustomerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetCustomerAsn"></a>

```java
public void resetCustomerAsn()
```

##### `resetRoutingRegistryName` <a name="resetRoutingRegistryName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetRoutingRegistryName"></a>

```java
public void resetRoutingRegistryName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedCommunitiesInput">advertisedCommunitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedPublicPrefixesInput">advertisedPublicPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.customerAsnInput">customerAsnInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.routingRegistryNameInput">routingRegistryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedCommunities">advertisedCommunities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedPublicPrefixes">advertisedPublicPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.customerAsn">customerAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.routingRegistryName">routingRegistryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `advertisedCommunitiesInput`<sup>Optional</sup> <a name="advertisedCommunitiesInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedCommunitiesInput"></a>

```java
public java.util.List<java.lang.String> getAdvertisedCommunitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `advertisedPublicPrefixesInput`<sup>Optional</sup> <a name="advertisedPublicPrefixesInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedPublicPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getAdvertisedPublicPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customerAsnInput`<sup>Optional</sup> <a name="customerAsnInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.customerAsnInput"></a>

```java
public java.lang.Number getCustomerAsnInput();
```

- *Type:* java.lang.Number

---

##### `routingRegistryNameInput`<sup>Optional</sup> <a name="routingRegistryNameInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.routingRegistryNameInput"></a>

```java
public java.lang.String getRoutingRegistryNameInput();
```

- *Type:* java.lang.String

---

##### `advertisedCommunities`<sup>Required</sup> <a name="advertisedCommunities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedCommunities"></a>

```java
public java.util.List<java.lang.String> getAdvertisedCommunities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `advertisedPublicPrefixes`<sup>Required</sup> <a name="advertisedPublicPrefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedPublicPrefixes"></a>

```java
public java.util.List<java.lang.String> getAdvertisedPublicPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customerAsn`<sup>Required</sup> <a name="customerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.customerAsn"></a>

```java
public java.lang.Number getCustomerAsn();
```

- *Type:* java.lang.Number

---

##### `routingRegistryName`<sup>Required</sup> <a name="routingRegistryName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.routingRegistryName"></a>

```java
public java.lang.String getRoutingRegistryName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.internalValue"></a>

```java
public ExpressRouteCircuitPeeringIpv6MicrosoftPeering getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a>

---


### ExpressRouteCircuitPeeringIpv6OutputReference <a name="ExpressRouteCircuitPeeringIpv6OutputReference" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_circuit_peering.ExpressRouteCircuitPeeringIpv6OutputReference;

new ExpressRouteCircuitPeeringIpv6OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.putMicrosoftPeering">putMicrosoftPeering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetMicrosoftPeering">resetMicrosoftPeering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetRouteFilterId">resetRouteFilterId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMicrosoftPeering` <a name="putMicrosoftPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.putMicrosoftPeering"></a>

```java
public void putMicrosoftPeering(ExpressRouteCircuitPeeringIpv6MicrosoftPeering value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.putMicrosoftPeering.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetMicrosoftPeering` <a name="resetMicrosoftPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetMicrosoftPeering"></a>

```java
public void resetMicrosoftPeering()
```

##### `resetRouteFilterId` <a name="resetRouteFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetRouteFilterId"></a>

```java
public void resetRouteFilterId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.microsoftPeering">microsoftPeering</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference">ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.microsoftPeeringInput">microsoftPeeringInput</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.primaryPeerAddressPrefixInput">primaryPeerAddressPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.routeFilterIdInput">routeFilterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.secondaryPeerAddressPrefixInput">secondaryPeerAddressPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.primaryPeerAddressPrefix">primaryPeerAddressPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.routeFilterId">routeFilterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.secondaryPeerAddressPrefix">secondaryPeerAddressPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `microsoftPeering`<sup>Required</sup> <a name="microsoftPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.microsoftPeering"></a>

```java
public ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference getMicrosoftPeering();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference">ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `microsoftPeeringInput`<sup>Optional</sup> <a name="microsoftPeeringInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.microsoftPeeringInput"></a>

```java
public ExpressRouteCircuitPeeringIpv6MicrosoftPeering getMicrosoftPeeringInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a>

---

##### `primaryPeerAddressPrefixInput`<sup>Optional</sup> <a name="primaryPeerAddressPrefixInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.primaryPeerAddressPrefixInput"></a>

```java
public java.lang.String getPrimaryPeerAddressPrefixInput();
```

- *Type:* java.lang.String

---

##### `routeFilterIdInput`<sup>Optional</sup> <a name="routeFilterIdInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.routeFilterIdInput"></a>

```java
public java.lang.String getRouteFilterIdInput();
```

- *Type:* java.lang.String

---

##### `secondaryPeerAddressPrefixInput`<sup>Optional</sup> <a name="secondaryPeerAddressPrefixInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.secondaryPeerAddressPrefixInput"></a>

```java
public java.lang.String getSecondaryPeerAddressPrefixInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `primaryPeerAddressPrefix`<sup>Required</sup> <a name="primaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.primaryPeerAddressPrefix"></a>

```java
public java.lang.String getPrimaryPeerAddressPrefix();
```

- *Type:* java.lang.String

---

##### `routeFilterId`<sup>Required</sup> <a name="routeFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.routeFilterId"></a>

```java
public java.lang.String getRouteFilterId();
```

- *Type:* java.lang.String

---

##### `secondaryPeerAddressPrefix`<sup>Required</sup> <a name="secondaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.secondaryPeerAddressPrefix"></a>

```java
public java.lang.String getSecondaryPeerAddressPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.internalValue"></a>

```java
public ExpressRouteCircuitPeeringIpv6 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a>

---


### ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference <a name="ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_circuit_peering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference;

new ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetAdvertisedCommunities">resetAdvertisedCommunities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetCustomerAsn">resetCustomerAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetRoutingRegistryName">resetRoutingRegistryName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdvertisedCommunities` <a name="resetAdvertisedCommunities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetAdvertisedCommunities"></a>

```java
public void resetAdvertisedCommunities()
```

##### `resetCustomerAsn` <a name="resetCustomerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetCustomerAsn"></a>

```java
public void resetCustomerAsn()
```

##### `resetRoutingRegistryName` <a name="resetRoutingRegistryName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetRoutingRegistryName"></a>

```java
public void resetRoutingRegistryName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedCommunitiesInput">advertisedCommunitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedPublicPrefixesInput">advertisedPublicPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.customerAsnInput">customerAsnInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.routingRegistryNameInput">routingRegistryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedCommunities">advertisedCommunities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedPublicPrefixes">advertisedPublicPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.customerAsn">customerAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.routingRegistryName">routingRegistryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `advertisedCommunitiesInput`<sup>Optional</sup> <a name="advertisedCommunitiesInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedCommunitiesInput"></a>

```java
public java.util.List<java.lang.String> getAdvertisedCommunitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `advertisedPublicPrefixesInput`<sup>Optional</sup> <a name="advertisedPublicPrefixesInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedPublicPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getAdvertisedPublicPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customerAsnInput`<sup>Optional</sup> <a name="customerAsnInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.customerAsnInput"></a>

```java
public java.lang.Number getCustomerAsnInput();
```

- *Type:* java.lang.Number

---

##### `routingRegistryNameInput`<sup>Optional</sup> <a name="routingRegistryNameInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.routingRegistryNameInput"></a>

```java
public java.lang.String getRoutingRegistryNameInput();
```

- *Type:* java.lang.String

---

##### `advertisedCommunities`<sup>Required</sup> <a name="advertisedCommunities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedCommunities"></a>

```java
public java.util.List<java.lang.String> getAdvertisedCommunities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `advertisedPublicPrefixes`<sup>Required</sup> <a name="advertisedPublicPrefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedPublicPrefixes"></a>

```java
public java.util.List<java.lang.String> getAdvertisedPublicPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customerAsn`<sup>Required</sup> <a name="customerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.customerAsn"></a>

```java
public java.lang.Number getCustomerAsn();
```

- *Type:* java.lang.Number

---

##### `routingRegistryName`<sup>Required</sup> <a name="routingRegistryName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.routingRegistryName"></a>

```java
public java.lang.String getRoutingRegistryName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.internalValue"></a>

```java
public ExpressRouteCircuitPeeringMicrosoftPeeringConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a>

---


### ExpressRouteCircuitPeeringTimeoutsOutputReference <a name="ExpressRouteCircuitPeeringTimeoutsOutputReference" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_circuit_peering.ExpressRouteCircuitPeeringTimeoutsOutputReference;

new ExpressRouteCircuitPeeringTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



