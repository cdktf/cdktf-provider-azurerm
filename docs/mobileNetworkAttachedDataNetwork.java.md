# `azurerm_mobile_network_attached_data_network`

Refer to the Terraform Registory for docs: [`azurerm_mobile_network_attached_data_network`](https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network).

# `mobileNetworkAttachedDataNetwork` Submodule <a name="`mobileNetworkAttachedDataNetwork` Submodule" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MobileNetworkAttachedDataNetwork <a name="MobileNetworkAttachedDataNetwork" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network azurerm_mobile_network_attached_data_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_attached_data_network.MobileNetworkAttachedDataNetwork;

MobileNetworkAttachedDataNetwork.Builder.create(Construct scope, java.lang.String id)
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
    .dnsAddresses(java.util.List<java.lang.String>)
    .location(java.lang.String)
    .mobileNetworkDataNetworkName(java.lang.String)
    .mobileNetworkPacketCoreDataPlaneId(java.lang.String)
//  .id(java.lang.String)
//  .networkAddressPortTranslation(MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MobileNetworkAttachedDataNetworkTimeouts)
//  .userEquipmentAddressPoolPrefixes(java.util.List<java.lang.String>)
//  .userEquipmentStaticAddressPoolPrefixes(java.util.List<java.lang.String>)
//  .userPlaneAccessIpv4Address(java.lang.String)
//  .userPlaneAccessIpv4Gateway(java.lang.String)
//  .userPlaneAccessIpv4Subnet(java.lang.String)
//  .userPlaneAccessName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.dnsAddresses">dnsAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#dns_addresses MobileNetworkAttachedDataNetwork#dns_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#location MobileNetworkAttachedDataNetwork#location}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.mobileNetworkDataNetworkName">mobileNetworkDataNetworkName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#mobile_network_data_network_name MobileNetworkAttachedDataNetwork#mobile_network_data_network_name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.mobileNetworkPacketCoreDataPlaneId">mobileNetworkPacketCoreDataPlaneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#mobile_network_packet_core_data_plane_id MobileNetworkAttachedDataNetwork#mobile_network_packet_core_data_plane_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#id MobileNetworkAttachedDataNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.networkAddressPortTranslation">networkAddressPortTranslation</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a></code> | network_address_port_translation block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#tags MobileNetworkAttachedDataNetwork#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts">MobileNetworkAttachedDataNetworkTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.userEquipmentAddressPoolPrefixes">userEquipmentAddressPoolPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#user_equipment_address_pool_prefixes MobileNetworkAttachedDataNetwork#user_equipment_address_pool_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.userEquipmentStaticAddressPoolPrefixes">userEquipmentStaticAddressPoolPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#user_equipment_static_address_pool_prefixes MobileNetworkAttachedDataNetwork#user_equipment_static_address_pool_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.userPlaneAccessIpv4Address">userPlaneAccessIpv4Address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_address MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_address}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.userPlaneAccessIpv4Gateway">userPlaneAccessIpv4Gateway</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_gateway MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_gateway}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.userPlaneAccessIpv4Subnet">userPlaneAccessIpv4Subnet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_subnet MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_subnet}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.userPlaneAccessName">userPlaneAccessName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#user_plane_access_name MobileNetworkAttachedDataNetwork#user_plane_access_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dnsAddresses`<sup>Required</sup> <a name="dnsAddresses" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.dnsAddresses"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#dns_addresses MobileNetworkAttachedDataNetwork#dns_addresses}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#location MobileNetworkAttachedDataNetwork#location}.

---

##### `mobileNetworkDataNetworkName`<sup>Required</sup> <a name="mobileNetworkDataNetworkName" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.mobileNetworkDataNetworkName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#mobile_network_data_network_name MobileNetworkAttachedDataNetwork#mobile_network_data_network_name}.

---

##### `mobileNetworkPacketCoreDataPlaneId`<sup>Required</sup> <a name="mobileNetworkPacketCoreDataPlaneId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.mobileNetworkPacketCoreDataPlaneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#mobile_network_packet_core_data_plane_id MobileNetworkAttachedDataNetwork#mobile_network_packet_core_data_plane_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#id MobileNetworkAttachedDataNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkAddressPortTranslation`<sup>Optional</sup> <a name="networkAddressPortTranslation" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.networkAddressPortTranslation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a>

network_address_port_translation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#network_address_port_translation MobileNetworkAttachedDataNetwork#network_address_port_translation}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#tags MobileNetworkAttachedDataNetwork#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts">MobileNetworkAttachedDataNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#timeouts MobileNetworkAttachedDataNetwork#timeouts}

---

##### `userEquipmentAddressPoolPrefixes`<sup>Optional</sup> <a name="userEquipmentAddressPoolPrefixes" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.userEquipmentAddressPoolPrefixes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#user_equipment_address_pool_prefixes MobileNetworkAttachedDataNetwork#user_equipment_address_pool_prefixes}.

---

##### `userEquipmentStaticAddressPoolPrefixes`<sup>Optional</sup> <a name="userEquipmentStaticAddressPoolPrefixes" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.userEquipmentStaticAddressPoolPrefixes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#user_equipment_static_address_pool_prefixes MobileNetworkAttachedDataNetwork#user_equipment_static_address_pool_prefixes}.

---

##### `userPlaneAccessIpv4Address`<sup>Optional</sup> <a name="userPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.userPlaneAccessIpv4Address"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_address MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_address}.

---

##### `userPlaneAccessIpv4Gateway`<sup>Optional</sup> <a name="userPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.userPlaneAccessIpv4Gateway"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_gateway MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_gateway}.

---

##### `userPlaneAccessIpv4Subnet`<sup>Optional</sup> <a name="userPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.userPlaneAccessIpv4Subnet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_subnet MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_subnet}.

---

##### `userPlaneAccessName`<sup>Optional</sup> <a name="userPlaneAccessName" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.userPlaneAccessName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#user_plane_access_name MobileNetworkAttachedDataNetwork#user_plane_access_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.putNetworkAddressPortTranslation">putNetworkAddressPortTranslation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetNetworkAddressPortTranslation">resetNetworkAddressPortTranslation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserEquipmentAddressPoolPrefixes">resetUserEquipmentAddressPoolPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserEquipmentStaticAddressPoolPrefixes">resetUserEquipmentStaticAddressPoolPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserPlaneAccessIpv4Address">resetUserPlaneAccessIpv4Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserPlaneAccessIpv4Gateway">resetUserPlaneAccessIpv4Gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserPlaneAccessIpv4Subnet">resetUserPlaneAccessIpv4Subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserPlaneAccessName">resetUserPlaneAccessName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putNetworkAddressPortTranslation` <a name="putNetworkAddressPortTranslation" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.putNetworkAddressPortTranslation"></a>

```java
public void putNetworkAddressPortTranslation(MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.putNetworkAddressPortTranslation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.putTimeouts"></a>

```java
public void putTimeouts(MobileNetworkAttachedDataNetworkTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts">MobileNetworkAttachedDataNetworkTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetId"></a>

```java
public void resetId()
```

##### `resetNetworkAddressPortTranslation` <a name="resetNetworkAddressPortTranslation" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetNetworkAddressPortTranslation"></a>

```java
public void resetNetworkAddressPortTranslation()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserEquipmentAddressPoolPrefixes` <a name="resetUserEquipmentAddressPoolPrefixes" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserEquipmentAddressPoolPrefixes"></a>

```java
public void resetUserEquipmentAddressPoolPrefixes()
```

##### `resetUserEquipmentStaticAddressPoolPrefixes` <a name="resetUserEquipmentStaticAddressPoolPrefixes" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserEquipmentStaticAddressPoolPrefixes"></a>

```java
public void resetUserEquipmentStaticAddressPoolPrefixes()
```

##### `resetUserPlaneAccessIpv4Address` <a name="resetUserPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserPlaneAccessIpv4Address"></a>

```java
public void resetUserPlaneAccessIpv4Address()
```

##### `resetUserPlaneAccessIpv4Gateway` <a name="resetUserPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserPlaneAccessIpv4Gateway"></a>

```java
public void resetUserPlaneAccessIpv4Gateway()
```

##### `resetUserPlaneAccessIpv4Subnet` <a name="resetUserPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserPlaneAccessIpv4Subnet"></a>

```java
public void resetUserPlaneAccessIpv4Subnet()
```

##### `resetUserPlaneAccessName` <a name="resetUserPlaneAccessName" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserPlaneAccessName"></a>

```java
public void resetUserPlaneAccessName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_attached_data_network.MobileNetworkAttachedDataNetwork;

MobileNetworkAttachedDataNetwork.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_attached_data_network.MobileNetworkAttachedDataNetwork;

MobileNetworkAttachedDataNetwork.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_attached_data_network.MobileNetworkAttachedDataNetwork;

MobileNetworkAttachedDataNetwork.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.networkAddressPortTranslation">networkAddressPortTranslation</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference">MobileNetworkAttachedDataNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.dnsAddressesInput">dnsAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.mobileNetworkDataNetworkNameInput">mobileNetworkDataNetworkNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.mobileNetworkPacketCoreDataPlaneIdInput">mobileNetworkPacketCoreDataPlaneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.networkAddressPortTranslationInput">networkAddressPortTranslationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts">MobileNetworkAttachedDataNetworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userEquipmentAddressPoolPrefixesInput">userEquipmentAddressPoolPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userEquipmentStaticAddressPoolPrefixesInput">userEquipmentStaticAddressPoolPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4AddressInput">userPlaneAccessIpv4AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4GatewayInput">userPlaneAccessIpv4GatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4SubnetInput">userPlaneAccessIpv4SubnetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessNameInput">userPlaneAccessNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.dnsAddresses">dnsAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.mobileNetworkDataNetworkName">mobileNetworkDataNetworkName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.mobileNetworkPacketCoreDataPlaneId">mobileNetworkPacketCoreDataPlaneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userEquipmentAddressPoolPrefixes">userEquipmentAddressPoolPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userEquipmentStaticAddressPoolPrefixes">userEquipmentStaticAddressPoolPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Address">userPlaneAccessIpv4Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Gateway">userPlaneAccessIpv4Gateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Subnet">userPlaneAccessIpv4Subnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessName">userPlaneAccessName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `networkAddressPortTranslation`<sup>Required</sup> <a name="networkAddressPortTranslation" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.networkAddressPortTranslation"></a>

```java
public MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference getNetworkAddressPortTranslation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.timeouts"></a>

```java
public MobileNetworkAttachedDataNetworkTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference">MobileNetworkAttachedDataNetworkTimeoutsOutputReference</a>

---

##### `dnsAddressesInput`<sup>Optional</sup> <a name="dnsAddressesInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.dnsAddressesInput"></a>

```java
public java.util.List<java.lang.String> getDnsAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `mobileNetworkDataNetworkNameInput`<sup>Optional</sup> <a name="mobileNetworkDataNetworkNameInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.mobileNetworkDataNetworkNameInput"></a>

```java
public java.lang.String getMobileNetworkDataNetworkNameInput();
```

- *Type:* java.lang.String

---

##### `mobileNetworkPacketCoreDataPlaneIdInput`<sup>Optional</sup> <a name="mobileNetworkPacketCoreDataPlaneIdInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.mobileNetworkPacketCoreDataPlaneIdInput"></a>

```java
public java.lang.String getMobileNetworkPacketCoreDataPlaneIdInput();
```

- *Type:* java.lang.String

---

##### `networkAddressPortTranslationInput`<sup>Optional</sup> <a name="networkAddressPortTranslationInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.networkAddressPortTranslationInput"></a>

```java
public MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation getNetworkAddressPortTranslationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts">MobileNetworkAttachedDataNetworkTimeouts</a>

---

##### `userEquipmentAddressPoolPrefixesInput`<sup>Optional</sup> <a name="userEquipmentAddressPoolPrefixesInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userEquipmentAddressPoolPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getUserEquipmentAddressPoolPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userEquipmentStaticAddressPoolPrefixesInput`<sup>Optional</sup> <a name="userEquipmentStaticAddressPoolPrefixesInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userEquipmentStaticAddressPoolPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getUserEquipmentStaticAddressPoolPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userPlaneAccessIpv4AddressInput`<sup>Optional</sup> <a name="userPlaneAccessIpv4AddressInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4AddressInput"></a>

```java
public java.lang.String getUserPlaneAccessIpv4AddressInput();
```

- *Type:* java.lang.String

---

##### `userPlaneAccessIpv4GatewayInput`<sup>Optional</sup> <a name="userPlaneAccessIpv4GatewayInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4GatewayInput"></a>

```java
public java.lang.String getUserPlaneAccessIpv4GatewayInput();
```

- *Type:* java.lang.String

---

##### `userPlaneAccessIpv4SubnetInput`<sup>Optional</sup> <a name="userPlaneAccessIpv4SubnetInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4SubnetInput"></a>

```java
public java.lang.String getUserPlaneAccessIpv4SubnetInput();
```

- *Type:* java.lang.String

---

##### `userPlaneAccessNameInput`<sup>Optional</sup> <a name="userPlaneAccessNameInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessNameInput"></a>

```java
public java.lang.String getUserPlaneAccessNameInput();
```

- *Type:* java.lang.String

---

##### `dnsAddresses`<sup>Required</sup> <a name="dnsAddresses" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.dnsAddresses"></a>

```java
public java.util.List<java.lang.String> getDnsAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `mobileNetworkDataNetworkName`<sup>Required</sup> <a name="mobileNetworkDataNetworkName" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.mobileNetworkDataNetworkName"></a>

```java
public java.lang.String getMobileNetworkDataNetworkName();
```

- *Type:* java.lang.String

---

##### `mobileNetworkPacketCoreDataPlaneId`<sup>Required</sup> <a name="mobileNetworkPacketCoreDataPlaneId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.mobileNetworkPacketCoreDataPlaneId"></a>

```java
public java.lang.String getMobileNetworkPacketCoreDataPlaneId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `userEquipmentAddressPoolPrefixes`<sup>Required</sup> <a name="userEquipmentAddressPoolPrefixes" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userEquipmentAddressPoolPrefixes"></a>

```java
public java.util.List<java.lang.String> getUserEquipmentAddressPoolPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userEquipmentStaticAddressPoolPrefixes`<sup>Required</sup> <a name="userEquipmentStaticAddressPoolPrefixes" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userEquipmentStaticAddressPoolPrefixes"></a>

```java
public java.util.List<java.lang.String> getUserEquipmentStaticAddressPoolPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userPlaneAccessIpv4Address`<sup>Required</sup> <a name="userPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Address"></a>

```java
public java.lang.String getUserPlaneAccessIpv4Address();
```

- *Type:* java.lang.String

---

##### `userPlaneAccessIpv4Gateway`<sup>Required</sup> <a name="userPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Gateway"></a>

```java
public java.lang.String getUserPlaneAccessIpv4Gateway();
```

- *Type:* java.lang.String

---

##### `userPlaneAccessIpv4Subnet`<sup>Required</sup> <a name="userPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Subnet"></a>

```java
public java.lang.String getUserPlaneAccessIpv4Subnet();
```

- *Type:* java.lang.String

---

##### `userPlaneAccessName`<sup>Required</sup> <a name="userPlaneAccessName" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessName"></a>

```java
public java.lang.String getUserPlaneAccessName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MobileNetworkAttachedDataNetworkConfig <a name="MobileNetworkAttachedDataNetworkConfig" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_attached_data_network.MobileNetworkAttachedDataNetworkConfig;

MobileNetworkAttachedDataNetworkConfig.builder()
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
    .dnsAddresses(java.util.List<java.lang.String>)
    .location(java.lang.String)
    .mobileNetworkDataNetworkName(java.lang.String)
    .mobileNetworkPacketCoreDataPlaneId(java.lang.String)
//  .id(java.lang.String)
//  .networkAddressPortTranslation(MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MobileNetworkAttachedDataNetworkTimeouts)
//  .userEquipmentAddressPoolPrefixes(java.util.List<java.lang.String>)
//  .userEquipmentStaticAddressPoolPrefixes(java.util.List<java.lang.String>)
//  .userPlaneAccessIpv4Address(java.lang.String)
//  .userPlaneAccessIpv4Gateway(java.lang.String)
//  .userPlaneAccessIpv4Subnet(java.lang.String)
//  .userPlaneAccessName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.dnsAddresses">dnsAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#dns_addresses MobileNetworkAttachedDataNetwork#dns_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#location MobileNetworkAttachedDataNetwork#location}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.mobileNetworkDataNetworkName">mobileNetworkDataNetworkName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#mobile_network_data_network_name MobileNetworkAttachedDataNetwork#mobile_network_data_network_name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.mobileNetworkPacketCoreDataPlaneId">mobileNetworkPacketCoreDataPlaneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#mobile_network_packet_core_data_plane_id MobileNetworkAttachedDataNetwork#mobile_network_packet_core_data_plane_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#id MobileNetworkAttachedDataNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.networkAddressPortTranslation">networkAddressPortTranslation</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a></code> | network_address_port_translation block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#tags MobileNetworkAttachedDataNetwork#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts">MobileNetworkAttachedDataNetworkTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userEquipmentAddressPoolPrefixes">userEquipmentAddressPoolPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#user_equipment_address_pool_prefixes MobileNetworkAttachedDataNetwork#user_equipment_address_pool_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userEquipmentStaticAddressPoolPrefixes">userEquipmentStaticAddressPoolPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#user_equipment_static_address_pool_prefixes MobileNetworkAttachedDataNetwork#user_equipment_static_address_pool_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userPlaneAccessIpv4Address">userPlaneAccessIpv4Address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_address MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_address}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userPlaneAccessIpv4Gateway">userPlaneAccessIpv4Gateway</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_gateway MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_gateway}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userPlaneAccessIpv4Subnet">userPlaneAccessIpv4Subnet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_subnet MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_subnet}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userPlaneAccessName">userPlaneAccessName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#user_plane_access_name MobileNetworkAttachedDataNetwork#user_plane_access_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dnsAddresses`<sup>Required</sup> <a name="dnsAddresses" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.dnsAddresses"></a>

```java
public java.util.List<java.lang.String> getDnsAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#dns_addresses MobileNetworkAttachedDataNetwork#dns_addresses}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#location MobileNetworkAttachedDataNetwork#location}.

---

##### `mobileNetworkDataNetworkName`<sup>Required</sup> <a name="mobileNetworkDataNetworkName" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.mobileNetworkDataNetworkName"></a>

```java
public java.lang.String getMobileNetworkDataNetworkName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#mobile_network_data_network_name MobileNetworkAttachedDataNetwork#mobile_network_data_network_name}.

---

##### `mobileNetworkPacketCoreDataPlaneId`<sup>Required</sup> <a name="mobileNetworkPacketCoreDataPlaneId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.mobileNetworkPacketCoreDataPlaneId"></a>

```java
public java.lang.String getMobileNetworkPacketCoreDataPlaneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#mobile_network_packet_core_data_plane_id MobileNetworkAttachedDataNetwork#mobile_network_packet_core_data_plane_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#id MobileNetworkAttachedDataNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkAddressPortTranslation`<sup>Optional</sup> <a name="networkAddressPortTranslation" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.networkAddressPortTranslation"></a>

```java
public MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation getNetworkAddressPortTranslation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a>

network_address_port_translation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#network_address_port_translation MobileNetworkAttachedDataNetwork#network_address_port_translation}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#tags MobileNetworkAttachedDataNetwork#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.timeouts"></a>

```java
public MobileNetworkAttachedDataNetworkTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts">MobileNetworkAttachedDataNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#timeouts MobileNetworkAttachedDataNetwork#timeouts}

---

##### `userEquipmentAddressPoolPrefixes`<sup>Optional</sup> <a name="userEquipmentAddressPoolPrefixes" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userEquipmentAddressPoolPrefixes"></a>

```java
public java.util.List<java.lang.String> getUserEquipmentAddressPoolPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#user_equipment_address_pool_prefixes MobileNetworkAttachedDataNetwork#user_equipment_address_pool_prefixes}.

---

##### `userEquipmentStaticAddressPoolPrefixes`<sup>Optional</sup> <a name="userEquipmentStaticAddressPoolPrefixes" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userEquipmentStaticAddressPoolPrefixes"></a>

```java
public java.util.List<java.lang.String> getUserEquipmentStaticAddressPoolPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#user_equipment_static_address_pool_prefixes MobileNetworkAttachedDataNetwork#user_equipment_static_address_pool_prefixes}.

---

##### `userPlaneAccessIpv4Address`<sup>Optional</sup> <a name="userPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userPlaneAccessIpv4Address"></a>

```java
public java.lang.String getUserPlaneAccessIpv4Address();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_address MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_address}.

---

##### `userPlaneAccessIpv4Gateway`<sup>Optional</sup> <a name="userPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userPlaneAccessIpv4Gateway"></a>

```java
public java.lang.String getUserPlaneAccessIpv4Gateway();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_gateway MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_gateway}.

---

##### `userPlaneAccessIpv4Subnet`<sup>Optional</sup> <a name="userPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userPlaneAccessIpv4Subnet"></a>

```java
public java.lang.String getUserPlaneAccessIpv4Subnet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_subnet MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_subnet}.

---

##### `userPlaneAccessName`<sup>Optional</sup> <a name="userPlaneAccessName" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userPlaneAccessName"></a>

```java
public java.lang.String getUserPlaneAccessName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#user_plane_access_name MobileNetworkAttachedDataNetwork#user_plane_access_name}.

---

### MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation <a name="MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_attached_data_network.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation;

MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.builder()
//  .icmpPinholeTimeoutInSeconds(java.lang.Number)
//  .pinholeMaximumNumber(java.lang.Number)
//  .portRange(MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange)
//  .tcpPinholeTimeoutInSeconds(java.lang.Number)
//  .tcpPortReuseMinimumHoldTimeInSeconds(java.lang.Number)
//  .udpPinholeTimeoutInSeconds(java.lang.Number)
//  .udpPortReuseMinimumHoldTimeInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.icmpPinholeTimeoutInSeconds">icmpPinholeTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#icmp_pinhole_timeout_in_seconds MobileNetworkAttachedDataNetwork#icmp_pinhole_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.pinholeMaximumNumber">pinholeMaximumNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#pinhole_maximum_number MobileNetworkAttachedDataNetwork#pinhole_maximum_number}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.portRange">portRange</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a></code> | port_range block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.tcpPinholeTimeoutInSeconds">tcpPinholeTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#tcp_pinhole_timeout_in_seconds MobileNetworkAttachedDataNetwork#tcp_pinhole_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.tcpPortReuseMinimumHoldTimeInSeconds">tcpPortReuseMinimumHoldTimeInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#tcp_port_reuse_minimum_hold_time_in_seconds MobileNetworkAttachedDataNetwork#tcp_port_reuse_minimum_hold_time_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.udpPinholeTimeoutInSeconds">udpPinholeTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#udp_pinhole_timeout_in_seconds MobileNetworkAttachedDataNetwork#udp_pinhole_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.udpPortReuseMinimumHoldTimeInSeconds">udpPortReuseMinimumHoldTimeInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#udp_port_reuse_minimum_hold_time_in_seconds MobileNetworkAttachedDataNetwork#udp_port_reuse_minimum_hold_time_in_seconds}. |

---

##### `icmpPinholeTimeoutInSeconds`<sup>Optional</sup> <a name="icmpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.icmpPinholeTimeoutInSeconds"></a>

```java
public java.lang.Number getIcmpPinholeTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#icmp_pinhole_timeout_in_seconds MobileNetworkAttachedDataNetwork#icmp_pinhole_timeout_in_seconds}.

---

##### `pinholeMaximumNumber`<sup>Optional</sup> <a name="pinholeMaximumNumber" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.pinholeMaximumNumber"></a>

```java
public java.lang.Number getPinholeMaximumNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#pinhole_maximum_number MobileNetworkAttachedDataNetwork#pinhole_maximum_number}.

---

##### `portRange`<sup>Optional</sup> <a name="portRange" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.portRange"></a>

```java
public MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange getPortRange();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a>

port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#port_range MobileNetworkAttachedDataNetwork#port_range}

---

##### `tcpPinholeTimeoutInSeconds`<sup>Optional</sup> <a name="tcpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.tcpPinholeTimeoutInSeconds"></a>

```java
public java.lang.Number getTcpPinholeTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#tcp_pinhole_timeout_in_seconds MobileNetworkAttachedDataNetwork#tcp_pinhole_timeout_in_seconds}.

---

##### `tcpPortReuseMinimumHoldTimeInSeconds`<sup>Optional</sup> <a name="tcpPortReuseMinimumHoldTimeInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.tcpPortReuseMinimumHoldTimeInSeconds"></a>

```java
public java.lang.Number getTcpPortReuseMinimumHoldTimeInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#tcp_port_reuse_minimum_hold_time_in_seconds MobileNetworkAttachedDataNetwork#tcp_port_reuse_minimum_hold_time_in_seconds}.

---

##### `udpPinholeTimeoutInSeconds`<sup>Optional</sup> <a name="udpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.udpPinholeTimeoutInSeconds"></a>

```java
public java.lang.Number getUdpPinholeTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#udp_pinhole_timeout_in_seconds MobileNetworkAttachedDataNetwork#udp_pinhole_timeout_in_seconds}.

---

##### `udpPortReuseMinimumHoldTimeInSeconds`<sup>Optional</sup> <a name="udpPortReuseMinimumHoldTimeInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.udpPortReuseMinimumHoldTimeInSeconds"></a>

```java
public java.lang.Number getUdpPortReuseMinimumHoldTimeInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#udp_port_reuse_minimum_hold_time_in_seconds MobileNetworkAttachedDataNetwork#udp_port_reuse_minimum_hold_time_in_seconds}.

---

### MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange <a name="MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_attached_data_network.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange;

MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange.builder()
//  .maximum(java.lang.Number)
//  .minimum(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange.property.maximum">maximum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#maximum MobileNetworkAttachedDataNetwork#maximum}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange.property.minimum">minimum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#minimum MobileNetworkAttachedDataNetwork#minimum}. |

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange.property.maximum"></a>

```java
public java.lang.Number getMaximum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#maximum MobileNetworkAttachedDataNetwork#maximum}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange.property.minimum"></a>

```java
public java.lang.Number getMinimum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#minimum MobileNetworkAttachedDataNetwork#minimum}.

---

### MobileNetworkAttachedDataNetworkTimeouts <a name="MobileNetworkAttachedDataNetworkTimeouts" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_attached_data_network.MobileNetworkAttachedDataNetworkTimeouts;

MobileNetworkAttachedDataNetworkTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#create MobileNetworkAttachedDataNetwork#create}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#delete MobileNetworkAttachedDataNetwork#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#read MobileNetworkAttachedDataNetwork#read}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#update MobileNetworkAttachedDataNetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#create MobileNetworkAttachedDataNetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#delete MobileNetworkAttachedDataNetwork#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#read MobileNetworkAttachedDataNetwork#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/mobile_network_attached_data_network#update MobileNetworkAttachedDataNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference <a name="MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_attached_data_network.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference;

new MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.putPortRange">putPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetIcmpPinholeTimeoutInSeconds">resetIcmpPinholeTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetPinholeMaximumNumber">resetPinholeMaximumNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetPortRange">resetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetTcpPinholeTimeoutInSeconds">resetTcpPinholeTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetTcpPortReuseMinimumHoldTimeInSeconds">resetTcpPortReuseMinimumHoldTimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetUdpPinholeTimeoutInSeconds">resetUdpPinholeTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetUdpPortReuseMinimumHoldTimeInSeconds">resetUdpPortReuseMinimumHoldTimeInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPortRange` <a name="putPortRange" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.putPortRange"></a>

```java
public void putPortRange(MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.putPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a>

---

##### `resetIcmpPinholeTimeoutInSeconds` <a name="resetIcmpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetIcmpPinholeTimeoutInSeconds"></a>

```java
public void resetIcmpPinholeTimeoutInSeconds()
```

##### `resetPinholeMaximumNumber` <a name="resetPinholeMaximumNumber" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetPinholeMaximumNumber"></a>

```java
public void resetPinholeMaximumNumber()
```

##### `resetPortRange` <a name="resetPortRange" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetPortRange"></a>

```java
public void resetPortRange()
```

##### `resetTcpPinholeTimeoutInSeconds` <a name="resetTcpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetTcpPinholeTimeoutInSeconds"></a>

```java
public void resetTcpPinholeTimeoutInSeconds()
```

##### `resetTcpPortReuseMinimumHoldTimeInSeconds` <a name="resetTcpPortReuseMinimumHoldTimeInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetTcpPortReuseMinimumHoldTimeInSeconds"></a>

```java
public void resetTcpPortReuseMinimumHoldTimeInSeconds()
```

##### `resetUdpPinholeTimeoutInSeconds` <a name="resetUdpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetUdpPinholeTimeoutInSeconds"></a>

```java
public void resetUdpPinholeTimeoutInSeconds()
```

##### `resetUdpPortReuseMinimumHoldTimeInSeconds` <a name="resetUdpPortReuseMinimumHoldTimeInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetUdpPortReuseMinimumHoldTimeInSeconds"></a>

```java
public void resetUdpPortReuseMinimumHoldTimeInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.portRange">portRange</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.icmpPinholeTimeoutInSecondsInput">icmpPinholeTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.pinholeMaximumNumberInput">pinholeMaximumNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.portRangeInput">portRangeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPinholeTimeoutInSecondsInput">tcpPinholeTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPortReuseMinimumHoldTimeInSecondsInput">tcpPortReuseMinimumHoldTimeInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPinholeTimeoutInSecondsInput">udpPinholeTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPortReuseMinimumHoldTimeInSecondsInput">udpPortReuseMinimumHoldTimeInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.icmpPinholeTimeoutInSeconds">icmpPinholeTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.pinholeMaximumNumber">pinholeMaximumNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPinholeTimeoutInSeconds">tcpPinholeTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPortReuseMinimumHoldTimeInSeconds">tcpPortReuseMinimumHoldTimeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPinholeTimeoutInSeconds">udpPinholeTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPortReuseMinimumHoldTimeInSeconds">udpPortReuseMinimumHoldTimeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.portRange"></a>

```java
public MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference getPortRange();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference</a>

---

##### `icmpPinholeTimeoutInSecondsInput`<sup>Optional</sup> <a name="icmpPinholeTimeoutInSecondsInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.icmpPinholeTimeoutInSecondsInput"></a>

```java
public java.lang.Number getIcmpPinholeTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `pinholeMaximumNumberInput`<sup>Optional</sup> <a name="pinholeMaximumNumberInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.pinholeMaximumNumberInput"></a>

```java
public java.lang.Number getPinholeMaximumNumberInput();
```

- *Type:* java.lang.Number

---

##### `portRangeInput`<sup>Optional</sup> <a name="portRangeInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.portRangeInput"></a>

```java
public MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange getPortRangeInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a>

---

##### `tcpPinholeTimeoutInSecondsInput`<sup>Optional</sup> <a name="tcpPinholeTimeoutInSecondsInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPinholeTimeoutInSecondsInput"></a>

```java
public java.lang.Number getTcpPinholeTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `tcpPortReuseMinimumHoldTimeInSecondsInput`<sup>Optional</sup> <a name="tcpPortReuseMinimumHoldTimeInSecondsInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPortReuseMinimumHoldTimeInSecondsInput"></a>

```java
public java.lang.Number getTcpPortReuseMinimumHoldTimeInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `udpPinholeTimeoutInSecondsInput`<sup>Optional</sup> <a name="udpPinholeTimeoutInSecondsInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPinholeTimeoutInSecondsInput"></a>

```java
public java.lang.Number getUdpPinholeTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `udpPortReuseMinimumHoldTimeInSecondsInput`<sup>Optional</sup> <a name="udpPortReuseMinimumHoldTimeInSecondsInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPortReuseMinimumHoldTimeInSecondsInput"></a>

```java
public java.lang.Number getUdpPortReuseMinimumHoldTimeInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `icmpPinholeTimeoutInSeconds`<sup>Required</sup> <a name="icmpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.icmpPinholeTimeoutInSeconds"></a>

```java
public java.lang.Number getIcmpPinholeTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `pinholeMaximumNumber`<sup>Required</sup> <a name="pinholeMaximumNumber" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.pinholeMaximumNumber"></a>

```java
public java.lang.Number getPinholeMaximumNumber();
```

- *Type:* java.lang.Number

---

##### `tcpPinholeTimeoutInSeconds`<sup>Required</sup> <a name="tcpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPinholeTimeoutInSeconds"></a>

```java
public java.lang.Number getTcpPinholeTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `tcpPortReuseMinimumHoldTimeInSeconds`<sup>Required</sup> <a name="tcpPortReuseMinimumHoldTimeInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPortReuseMinimumHoldTimeInSeconds"></a>

```java
public java.lang.Number getTcpPortReuseMinimumHoldTimeInSeconds();
```

- *Type:* java.lang.Number

---

##### `udpPinholeTimeoutInSeconds`<sup>Required</sup> <a name="udpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPinholeTimeoutInSeconds"></a>

```java
public java.lang.Number getUdpPinholeTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `udpPortReuseMinimumHoldTimeInSeconds`<sup>Required</sup> <a name="udpPortReuseMinimumHoldTimeInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPortReuseMinimumHoldTimeInSeconds"></a>

```java
public java.lang.Number getUdpPortReuseMinimumHoldTimeInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.internalValue"></a>

```java
public MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a>

---


### MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference <a name="MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_attached_data_network.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference;

new MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resetMaximum">resetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resetMinimum">resetMinimum</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximum` <a name="resetMaximum" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resetMaximum"></a>

```java
public void resetMaximum()
```

##### `resetMinimum` <a name="resetMinimum" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resetMinimum"></a>

```java
public void resetMinimum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.maximumInput">maximumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.minimumInput">minimumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.maximum">maximum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.minimum">minimum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.maximumInput"></a>

```java
public java.lang.Number getMaximumInput();
```

- *Type:* java.lang.Number

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.minimumInput"></a>

```java
public java.lang.Number getMinimumInput();
```

- *Type:* java.lang.Number

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.maximum"></a>

```java
public java.lang.Number getMaximum();
```

- *Type:* java.lang.Number

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.minimum"></a>

```java
public java.lang.Number getMinimum();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.internalValue"></a>

```java
public MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a>

---


### MobileNetworkAttachedDataNetworkTimeoutsOutputReference <a name="MobileNetworkAttachedDataNetworkTimeoutsOutputReference" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_attached_data_network.MobileNetworkAttachedDataNetworkTimeoutsOutputReference;

new MobileNetworkAttachedDataNetworkTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts">MobileNetworkAttachedDataNetworkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts">MobileNetworkAttachedDataNetworkTimeouts</a>

---



