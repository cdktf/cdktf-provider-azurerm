# `mobileNetworkPacketCoreControlPlane` Submodule <a name="`mobileNetworkPacketCoreControlPlane` Submodule" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MobileNetworkPacketCoreControlPlane <a name="MobileNetworkPacketCoreControlPlane" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane azurerm_mobile_network_packet_core_control_plane}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_packet_core_control_plane.MobileNetworkPacketCoreControlPlane;

MobileNetworkPacketCoreControlPlane.Builder.create(Construct scope, java.lang.String id)
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
    .localDiagnosticsAccess(MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .siteIds(java.util.List<java.lang.String>)
    .sku(java.lang.String)
//  .controlPlaneAccessIpv4Address(java.lang.String)
//  .controlPlaneAccessIpv4Gateway(java.lang.String)
//  .controlPlaneAccessIpv4Subnet(java.lang.String)
//  .controlPlaneAccessName(java.lang.String)
//  .coreNetworkTechnology(java.lang.String)
//  .id(java.lang.String)
//  .identity(MobileNetworkPacketCoreControlPlaneIdentity)
//  .interoperabilitySettingsJson(java.lang.String)
//  .platform(MobileNetworkPacketCoreControlPlanePlatform)
//  .softwareVersion(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MobileNetworkPacketCoreControlPlaneTimeouts)
//  .userEquipmentMtuInBytes(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.localDiagnosticsAccess">localDiagnosticsAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a></code> | local_diagnostics_access block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#location MobileNetworkPacketCoreControlPlane#location}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#name MobileNetworkPacketCoreControlPlane#name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#resource_group_name MobileNetworkPacketCoreControlPlane#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.siteIds">siteIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#site_ids MobileNetworkPacketCoreControlPlane#site_ids}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#sku MobileNetworkPacketCoreControlPlane#sku}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.controlPlaneAccessIpv4Address">controlPlaneAccessIpv4Address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_address MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_address}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.controlPlaneAccessIpv4Gateway">controlPlaneAccessIpv4Gateway</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_gateway MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_gateway}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.controlPlaneAccessIpv4Subnet">controlPlaneAccessIpv4Subnet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_subnet MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_subnet}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.controlPlaneAccessName">controlPlaneAccessName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_name MobileNetworkPacketCoreControlPlane#control_plane_access_name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.coreNetworkTechnology">coreNetworkTechnology</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#core_network_technology MobileNetworkPacketCoreControlPlane#core_network_technology}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#id MobileNetworkPacketCoreControlPlane#id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity">MobileNetworkPacketCoreControlPlaneIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.interoperabilitySettingsJson">interoperabilitySettingsJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#interoperability_settings_json MobileNetworkPacketCoreControlPlane#interoperability_settings_json}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.platform">platform</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform">MobileNetworkPacketCoreControlPlanePlatform</a></code> | platform block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.softwareVersion">softwareVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#software_version MobileNetworkPacketCoreControlPlane#software_version}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#tags MobileNetworkPacketCoreControlPlane#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts">MobileNetworkPacketCoreControlPlaneTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.userEquipmentMtuInBytes">userEquipmentMtuInBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#user_equipment_mtu_in_bytes MobileNetworkPacketCoreControlPlane#user_equipment_mtu_in_bytes}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `localDiagnosticsAccess`<sup>Required</sup> <a name="localDiagnosticsAccess" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.localDiagnosticsAccess"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a>

local_diagnostics_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#local_diagnostics_access MobileNetworkPacketCoreControlPlane#local_diagnostics_access}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#location MobileNetworkPacketCoreControlPlane#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#name MobileNetworkPacketCoreControlPlane#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#resource_group_name MobileNetworkPacketCoreControlPlane#resource_group_name}.

---

##### `siteIds`<sup>Required</sup> <a name="siteIds" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.siteIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#site_ids MobileNetworkPacketCoreControlPlane#site_ids}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.sku"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#sku MobileNetworkPacketCoreControlPlane#sku}.

---

##### `controlPlaneAccessIpv4Address`<sup>Optional</sup> <a name="controlPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.controlPlaneAccessIpv4Address"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_address MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_address}.

---

##### `controlPlaneAccessIpv4Gateway`<sup>Optional</sup> <a name="controlPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.controlPlaneAccessIpv4Gateway"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_gateway MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_gateway}.

---

##### `controlPlaneAccessIpv4Subnet`<sup>Optional</sup> <a name="controlPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.controlPlaneAccessIpv4Subnet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_subnet MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_subnet}.

---

##### `controlPlaneAccessName`<sup>Optional</sup> <a name="controlPlaneAccessName" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.controlPlaneAccessName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_name MobileNetworkPacketCoreControlPlane#control_plane_access_name}.

---

##### `coreNetworkTechnology`<sup>Optional</sup> <a name="coreNetworkTechnology" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.coreNetworkTechnology"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#core_network_technology MobileNetworkPacketCoreControlPlane#core_network_technology}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#id MobileNetworkPacketCoreControlPlane#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity">MobileNetworkPacketCoreControlPlaneIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#identity MobileNetworkPacketCoreControlPlane#identity}

---

##### `interoperabilitySettingsJson`<sup>Optional</sup> <a name="interoperabilitySettingsJson" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.interoperabilitySettingsJson"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#interoperability_settings_json MobileNetworkPacketCoreControlPlane#interoperability_settings_json}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.platform"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform">MobileNetworkPacketCoreControlPlanePlatform</a>

platform block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#platform MobileNetworkPacketCoreControlPlane#platform}

---

##### `softwareVersion`<sup>Optional</sup> <a name="softwareVersion" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.softwareVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#software_version MobileNetworkPacketCoreControlPlane#software_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#tags MobileNetworkPacketCoreControlPlane#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts">MobileNetworkPacketCoreControlPlaneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#timeouts MobileNetworkPacketCoreControlPlane#timeouts}

---

##### `userEquipmentMtuInBytes`<sup>Optional</sup> <a name="userEquipmentMtuInBytes" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.userEquipmentMtuInBytes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#user_equipment_mtu_in_bytes MobileNetworkPacketCoreControlPlane#user_equipment_mtu_in_bytes}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putLocalDiagnosticsAccess">putLocalDiagnosticsAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putPlatform">putPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetControlPlaneAccessIpv4Address">resetControlPlaneAccessIpv4Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetControlPlaneAccessIpv4Gateway">resetControlPlaneAccessIpv4Gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetControlPlaneAccessIpv4Subnet">resetControlPlaneAccessIpv4Subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetControlPlaneAccessName">resetControlPlaneAccessName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetCoreNetworkTechnology">resetCoreNetworkTechnology</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetInteroperabilitySettingsJson">resetInteroperabilitySettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetPlatform">resetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetSoftwareVersion">resetSoftwareVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetUserEquipmentMtuInBytes">resetUserEquipmentMtuInBytes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putIdentity"></a>

```java
public void putIdentity(MobileNetworkPacketCoreControlPlaneIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity">MobileNetworkPacketCoreControlPlaneIdentity</a>

---

##### `putLocalDiagnosticsAccess` <a name="putLocalDiagnosticsAccess" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putLocalDiagnosticsAccess"></a>

```java
public void putLocalDiagnosticsAccess(MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putLocalDiagnosticsAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a>

---

##### `putPlatform` <a name="putPlatform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putPlatform"></a>

```java
public void putPlatform(MobileNetworkPacketCoreControlPlanePlatform value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putPlatform.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform">MobileNetworkPacketCoreControlPlanePlatform</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putTimeouts"></a>

```java
public void putTimeouts(MobileNetworkPacketCoreControlPlaneTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts">MobileNetworkPacketCoreControlPlaneTimeouts</a>

---

##### `resetControlPlaneAccessIpv4Address` <a name="resetControlPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetControlPlaneAccessIpv4Address"></a>

```java
public void resetControlPlaneAccessIpv4Address()
```

##### `resetControlPlaneAccessIpv4Gateway` <a name="resetControlPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetControlPlaneAccessIpv4Gateway"></a>

```java
public void resetControlPlaneAccessIpv4Gateway()
```

##### `resetControlPlaneAccessIpv4Subnet` <a name="resetControlPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetControlPlaneAccessIpv4Subnet"></a>

```java
public void resetControlPlaneAccessIpv4Subnet()
```

##### `resetControlPlaneAccessName` <a name="resetControlPlaneAccessName" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetControlPlaneAccessName"></a>

```java
public void resetControlPlaneAccessName()
```

##### `resetCoreNetworkTechnology` <a name="resetCoreNetworkTechnology" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetCoreNetworkTechnology"></a>

```java
public void resetCoreNetworkTechnology()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetInteroperabilitySettingsJson` <a name="resetInteroperabilitySettingsJson" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetInteroperabilitySettingsJson"></a>

```java
public void resetInteroperabilitySettingsJson()
```

##### `resetPlatform` <a name="resetPlatform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetPlatform"></a>

```java
public void resetPlatform()
```

##### `resetSoftwareVersion` <a name="resetSoftwareVersion" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetSoftwareVersion"></a>

```java
public void resetSoftwareVersion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserEquipmentMtuInBytes` <a name="resetUserEquipmentMtuInBytes" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetUserEquipmentMtuInBytes"></a>

```java
public void resetUserEquipmentMtuInBytes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MobileNetworkPacketCoreControlPlane resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_packet_core_control_plane.MobileNetworkPacketCoreControlPlane;

MobileNetworkPacketCoreControlPlane.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_packet_core_control_plane.MobileNetworkPacketCoreControlPlane;

MobileNetworkPacketCoreControlPlane.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_packet_core_control_plane.MobileNetworkPacketCoreControlPlane;

MobileNetworkPacketCoreControlPlane.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_packet_core_control_plane.MobileNetworkPacketCoreControlPlane;

MobileNetworkPacketCoreControlPlane.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MobileNetworkPacketCoreControlPlane.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MobileNetworkPacketCoreControlPlane resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MobileNetworkPacketCoreControlPlane to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MobileNetworkPacketCoreControlPlane that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MobileNetworkPacketCoreControlPlane to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference">MobileNetworkPacketCoreControlPlaneIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.localDiagnosticsAccess">localDiagnosticsAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.platform">platform</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference">MobileNetworkPacketCoreControlPlanePlatformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference">MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4AddressInput">controlPlaneAccessIpv4AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4GatewayInput">controlPlaneAccessIpv4GatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4SubnetInput">controlPlaneAccessIpv4SubnetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessNameInput">controlPlaneAccessNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.coreNetworkTechnologyInput">coreNetworkTechnologyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity">MobileNetworkPacketCoreControlPlaneIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.interoperabilitySettingsJsonInput">interoperabilitySettingsJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.localDiagnosticsAccessInput">localDiagnosticsAccessInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.platformInput">platformInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform">MobileNetworkPacketCoreControlPlanePlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.siteIdsInput">siteIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.softwareVersionInput">softwareVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts">MobileNetworkPacketCoreControlPlaneTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.userEquipmentMtuInBytesInput">userEquipmentMtuInBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4Address">controlPlaneAccessIpv4Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4Gateway">controlPlaneAccessIpv4Gateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4Subnet">controlPlaneAccessIpv4Subnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessName">controlPlaneAccessName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.coreNetworkTechnology">coreNetworkTechnology</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.interoperabilitySettingsJson">interoperabilitySettingsJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.siteIds">siteIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.softwareVersion">softwareVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.userEquipmentMtuInBytes">userEquipmentMtuInBytes</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.identity"></a>

```java
public MobileNetworkPacketCoreControlPlaneIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference">MobileNetworkPacketCoreControlPlaneIdentityOutputReference</a>

---

##### `localDiagnosticsAccess`<sup>Required</sup> <a name="localDiagnosticsAccess" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.localDiagnosticsAccess"></a>

```java
public MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference getLocalDiagnosticsAccess();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference</a>

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.platform"></a>

```java
public MobileNetworkPacketCoreControlPlanePlatformOutputReference getPlatform();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference">MobileNetworkPacketCoreControlPlanePlatformOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.timeouts"></a>

```java
public MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference">MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference</a>

---

##### `controlPlaneAccessIpv4AddressInput`<sup>Optional</sup> <a name="controlPlaneAccessIpv4AddressInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4AddressInput"></a>

```java
public java.lang.String getControlPlaneAccessIpv4AddressInput();
```

- *Type:* java.lang.String

---

##### `controlPlaneAccessIpv4GatewayInput`<sup>Optional</sup> <a name="controlPlaneAccessIpv4GatewayInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4GatewayInput"></a>

```java
public java.lang.String getControlPlaneAccessIpv4GatewayInput();
```

- *Type:* java.lang.String

---

##### `controlPlaneAccessIpv4SubnetInput`<sup>Optional</sup> <a name="controlPlaneAccessIpv4SubnetInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4SubnetInput"></a>

```java
public java.lang.String getControlPlaneAccessIpv4SubnetInput();
```

- *Type:* java.lang.String

---

##### `controlPlaneAccessNameInput`<sup>Optional</sup> <a name="controlPlaneAccessNameInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessNameInput"></a>

```java
public java.lang.String getControlPlaneAccessNameInput();
```

- *Type:* java.lang.String

---

##### `coreNetworkTechnologyInput`<sup>Optional</sup> <a name="coreNetworkTechnologyInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.coreNetworkTechnologyInput"></a>

```java
public java.lang.String getCoreNetworkTechnologyInput();
```

- *Type:* java.lang.String

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.identityInput"></a>

```java
public MobileNetworkPacketCoreControlPlaneIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity">MobileNetworkPacketCoreControlPlaneIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `interoperabilitySettingsJsonInput`<sup>Optional</sup> <a name="interoperabilitySettingsJsonInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.interoperabilitySettingsJsonInput"></a>

```java
public java.lang.String getInteroperabilitySettingsJsonInput();
```

- *Type:* java.lang.String

---

##### `localDiagnosticsAccessInput`<sup>Optional</sup> <a name="localDiagnosticsAccessInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.localDiagnosticsAccessInput"></a>

```java
public MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess getLocalDiagnosticsAccessInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.platformInput"></a>

```java
public MobileNetworkPacketCoreControlPlanePlatform getPlatformInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform">MobileNetworkPacketCoreControlPlanePlatform</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `siteIdsInput`<sup>Optional</sup> <a name="siteIdsInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.siteIdsInput"></a>

```java
public java.util.List<java.lang.String> getSiteIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `softwareVersionInput`<sup>Optional</sup> <a name="softwareVersionInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.softwareVersionInput"></a>

```java
public java.lang.String getSoftwareVersionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts">MobileNetworkPacketCoreControlPlaneTimeouts</a>

---

##### `userEquipmentMtuInBytesInput`<sup>Optional</sup> <a name="userEquipmentMtuInBytesInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.userEquipmentMtuInBytesInput"></a>

```java
public java.lang.Number getUserEquipmentMtuInBytesInput();
```

- *Type:* java.lang.Number

---

##### `controlPlaneAccessIpv4Address`<sup>Required</sup> <a name="controlPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4Address"></a>

```java
public java.lang.String getControlPlaneAccessIpv4Address();
```

- *Type:* java.lang.String

---

##### `controlPlaneAccessIpv4Gateway`<sup>Required</sup> <a name="controlPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4Gateway"></a>

```java
public java.lang.String getControlPlaneAccessIpv4Gateway();
```

- *Type:* java.lang.String

---

##### `controlPlaneAccessIpv4Subnet`<sup>Required</sup> <a name="controlPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4Subnet"></a>

```java
public java.lang.String getControlPlaneAccessIpv4Subnet();
```

- *Type:* java.lang.String

---

##### `controlPlaneAccessName`<sup>Required</sup> <a name="controlPlaneAccessName" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessName"></a>

```java
public java.lang.String getControlPlaneAccessName();
```

- *Type:* java.lang.String

---

##### `coreNetworkTechnology`<sup>Required</sup> <a name="coreNetworkTechnology" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.coreNetworkTechnology"></a>

```java
public java.lang.String getCoreNetworkTechnology();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `interoperabilitySettingsJson`<sup>Required</sup> <a name="interoperabilitySettingsJson" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.interoperabilitySettingsJson"></a>

```java
public java.lang.String getInteroperabilitySettingsJson();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `siteIds`<sup>Required</sup> <a name="siteIds" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.siteIds"></a>

```java
public java.util.List<java.lang.String> getSiteIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `softwareVersion`<sup>Required</sup> <a name="softwareVersion" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.softwareVersion"></a>

```java
public java.lang.String getSoftwareVersion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `userEquipmentMtuInBytes`<sup>Required</sup> <a name="userEquipmentMtuInBytes" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.userEquipmentMtuInBytes"></a>

```java
public java.lang.Number getUserEquipmentMtuInBytes();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MobileNetworkPacketCoreControlPlaneConfig <a name="MobileNetworkPacketCoreControlPlaneConfig" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_packet_core_control_plane.MobileNetworkPacketCoreControlPlaneConfig;

MobileNetworkPacketCoreControlPlaneConfig.builder()
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
    .localDiagnosticsAccess(MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .siteIds(java.util.List<java.lang.String>)
    .sku(java.lang.String)
//  .controlPlaneAccessIpv4Address(java.lang.String)
//  .controlPlaneAccessIpv4Gateway(java.lang.String)
//  .controlPlaneAccessIpv4Subnet(java.lang.String)
//  .controlPlaneAccessName(java.lang.String)
//  .coreNetworkTechnology(java.lang.String)
//  .id(java.lang.String)
//  .identity(MobileNetworkPacketCoreControlPlaneIdentity)
//  .interoperabilitySettingsJson(java.lang.String)
//  .platform(MobileNetworkPacketCoreControlPlanePlatform)
//  .softwareVersion(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MobileNetworkPacketCoreControlPlaneTimeouts)
//  .userEquipmentMtuInBytes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.localDiagnosticsAccess">localDiagnosticsAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a></code> | local_diagnostics_access block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#location MobileNetworkPacketCoreControlPlane#location}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#name MobileNetworkPacketCoreControlPlane#name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#resource_group_name MobileNetworkPacketCoreControlPlane#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.siteIds">siteIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#site_ids MobileNetworkPacketCoreControlPlane#site_ids}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#sku MobileNetworkPacketCoreControlPlane#sku}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.controlPlaneAccessIpv4Address">controlPlaneAccessIpv4Address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_address MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_address}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.controlPlaneAccessIpv4Gateway">controlPlaneAccessIpv4Gateway</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_gateway MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_gateway}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.controlPlaneAccessIpv4Subnet">controlPlaneAccessIpv4Subnet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_subnet MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_subnet}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.controlPlaneAccessName">controlPlaneAccessName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_name MobileNetworkPacketCoreControlPlane#control_plane_access_name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.coreNetworkTechnology">coreNetworkTechnology</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#core_network_technology MobileNetworkPacketCoreControlPlane#core_network_technology}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#id MobileNetworkPacketCoreControlPlane#id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity">MobileNetworkPacketCoreControlPlaneIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.interoperabilitySettingsJson">interoperabilitySettingsJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#interoperability_settings_json MobileNetworkPacketCoreControlPlane#interoperability_settings_json}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.platform">platform</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform">MobileNetworkPacketCoreControlPlanePlatform</a></code> | platform block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.softwareVersion">softwareVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#software_version MobileNetworkPacketCoreControlPlane#software_version}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#tags MobileNetworkPacketCoreControlPlane#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts">MobileNetworkPacketCoreControlPlaneTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.userEquipmentMtuInBytes">userEquipmentMtuInBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#user_equipment_mtu_in_bytes MobileNetworkPacketCoreControlPlane#user_equipment_mtu_in_bytes}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `localDiagnosticsAccess`<sup>Required</sup> <a name="localDiagnosticsAccess" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.localDiagnosticsAccess"></a>

```java
public MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess getLocalDiagnosticsAccess();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a>

local_diagnostics_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#local_diagnostics_access MobileNetworkPacketCoreControlPlane#local_diagnostics_access}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#location MobileNetworkPacketCoreControlPlane#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#name MobileNetworkPacketCoreControlPlane#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#resource_group_name MobileNetworkPacketCoreControlPlane#resource_group_name}.

---

##### `siteIds`<sup>Required</sup> <a name="siteIds" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.siteIds"></a>

```java
public java.util.List<java.lang.String> getSiteIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#site_ids MobileNetworkPacketCoreControlPlane#site_ids}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#sku MobileNetworkPacketCoreControlPlane#sku}.

---

##### `controlPlaneAccessIpv4Address`<sup>Optional</sup> <a name="controlPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.controlPlaneAccessIpv4Address"></a>

```java
public java.lang.String getControlPlaneAccessIpv4Address();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_address MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_address}.

---

##### `controlPlaneAccessIpv4Gateway`<sup>Optional</sup> <a name="controlPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.controlPlaneAccessIpv4Gateway"></a>

```java
public java.lang.String getControlPlaneAccessIpv4Gateway();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_gateway MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_gateway}.

---

##### `controlPlaneAccessIpv4Subnet`<sup>Optional</sup> <a name="controlPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.controlPlaneAccessIpv4Subnet"></a>

```java
public java.lang.String getControlPlaneAccessIpv4Subnet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_subnet MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_subnet}.

---

##### `controlPlaneAccessName`<sup>Optional</sup> <a name="controlPlaneAccessName" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.controlPlaneAccessName"></a>

```java
public java.lang.String getControlPlaneAccessName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_name MobileNetworkPacketCoreControlPlane#control_plane_access_name}.

---

##### `coreNetworkTechnology`<sup>Optional</sup> <a name="coreNetworkTechnology" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.coreNetworkTechnology"></a>

```java
public java.lang.String getCoreNetworkTechnology();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#core_network_technology MobileNetworkPacketCoreControlPlane#core_network_technology}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#id MobileNetworkPacketCoreControlPlane#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.identity"></a>

```java
public MobileNetworkPacketCoreControlPlaneIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity">MobileNetworkPacketCoreControlPlaneIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#identity MobileNetworkPacketCoreControlPlane#identity}

---

##### `interoperabilitySettingsJson`<sup>Optional</sup> <a name="interoperabilitySettingsJson" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.interoperabilitySettingsJson"></a>

```java
public java.lang.String getInteroperabilitySettingsJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#interoperability_settings_json MobileNetworkPacketCoreControlPlane#interoperability_settings_json}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.platform"></a>

```java
public MobileNetworkPacketCoreControlPlanePlatform getPlatform();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform">MobileNetworkPacketCoreControlPlanePlatform</a>

platform block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#platform MobileNetworkPacketCoreControlPlane#platform}

---

##### `softwareVersion`<sup>Optional</sup> <a name="softwareVersion" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.softwareVersion"></a>

```java
public java.lang.String getSoftwareVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#software_version MobileNetworkPacketCoreControlPlane#software_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#tags MobileNetworkPacketCoreControlPlane#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.timeouts"></a>

```java
public MobileNetworkPacketCoreControlPlaneTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts">MobileNetworkPacketCoreControlPlaneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#timeouts MobileNetworkPacketCoreControlPlane#timeouts}

---

##### `userEquipmentMtuInBytes`<sup>Optional</sup> <a name="userEquipmentMtuInBytes" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.userEquipmentMtuInBytes"></a>

```java
public java.lang.Number getUserEquipmentMtuInBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#user_equipment_mtu_in_bytes MobileNetworkPacketCoreControlPlane#user_equipment_mtu_in_bytes}.

---

### MobileNetworkPacketCoreControlPlaneIdentity <a name="MobileNetworkPacketCoreControlPlaneIdentity" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_packet_core_control_plane.MobileNetworkPacketCoreControlPlaneIdentity;

MobileNetworkPacketCoreControlPlaneIdentity.builder()
    .identityIds(java.util.List<java.lang.String>)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#identity_ids MobileNetworkPacketCoreControlPlane#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#type MobileNetworkPacketCoreControlPlane#type}. |

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#identity_ids MobileNetworkPacketCoreControlPlane#identity_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#type MobileNetworkPacketCoreControlPlane#type}.

---

### MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess <a name="MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_packet_core_control_plane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess;

MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess.builder()
    .authenticationType(java.lang.String)
//  .httpsServerCertificateUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#authentication_type MobileNetworkPacketCoreControlPlane#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess.property.httpsServerCertificateUrl">httpsServerCertificateUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#https_server_certificate_url MobileNetworkPacketCoreControlPlane#https_server_certificate_url}. |

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#authentication_type MobileNetworkPacketCoreControlPlane#authentication_type}.

---

##### `httpsServerCertificateUrl`<sup>Optional</sup> <a name="httpsServerCertificateUrl" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess.property.httpsServerCertificateUrl"></a>

```java
public java.lang.String getHttpsServerCertificateUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#https_server_certificate_url MobileNetworkPacketCoreControlPlane#https_server_certificate_url}.

---

### MobileNetworkPacketCoreControlPlanePlatform <a name="MobileNetworkPacketCoreControlPlanePlatform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_packet_core_control_plane.MobileNetworkPacketCoreControlPlanePlatform;

MobileNetworkPacketCoreControlPlanePlatform.builder()
    .type(java.lang.String)
//  .arcKubernetesClusterId(java.lang.String)
//  .customLocationId(java.lang.String)
//  .edgeDeviceId(java.lang.String)
//  .stackHciClusterId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#type MobileNetworkPacketCoreControlPlane#type}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.arcKubernetesClusterId">arcKubernetesClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#arc_kubernetes_cluster_id MobileNetworkPacketCoreControlPlane#arc_kubernetes_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.customLocationId">customLocationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#custom_location_id MobileNetworkPacketCoreControlPlane#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.edgeDeviceId">edgeDeviceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#edge_device_id MobileNetworkPacketCoreControlPlane#edge_device_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.stackHciClusterId">stackHciClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#stack_hci_cluster_id MobileNetworkPacketCoreControlPlane#stack_hci_cluster_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#type MobileNetworkPacketCoreControlPlane#type}.

---

##### `arcKubernetesClusterId`<sup>Optional</sup> <a name="arcKubernetesClusterId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.arcKubernetesClusterId"></a>

```java
public java.lang.String getArcKubernetesClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#arc_kubernetes_cluster_id MobileNetworkPacketCoreControlPlane#arc_kubernetes_cluster_id}.

---

##### `customLocationId`<sup>Optional</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.customLocationId"></a>

```java
public java.lang.String getCustomLocationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#custom_location_id MobileNetworkPacketCoreControlPlane#custom_location_id}.

---

##### `edgeDeviceId`<sup>Optional</sup> <a name="edgeDeviceId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.edgeDeviceId"></a>

```java
public java.lang.String getEdgeDeviceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#edge_device_id MobileNetworkPacketCoreControlPlane#edge_device_id}.

---

##### `stackHciClusterId`<sup>Optional</sup> <a name="stackHciClusterId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.stackHciClusterId"></a>

```java
public java.lang.String getStackHciClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#stack_hci_cluster_id MobileNetworkPacketCoreControlPlane#stack_hci_cluster_id}.

---

### MobileNetworkPacketCoreControlPlaneTimeouts <a name="MobileNetworkPacketCoreControlPlaneTimeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_packet_core_control_plane.MobileNetworkPacketCoreControlPlaneTimeouts;

MobileNetworkPacketCoreControlPlaneTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#create MobileNetworkPacketCoreControlPlane#create}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#delete MobileNetworkPacketCoreControlPlane#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#read MobileNetworkPacketCoreControlPlane#read}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#update MobileNetworkPacketCoreControlPlane#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#create MobileNetworkPacketCoreControlPlane#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#delete MobileNetworkPacketCoreControlPlane#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#read MobileNetworkPacketCoreControlPlane#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/mobile_network_packet_core_control_plane#update MobileNetworkPacketCoreControlPlane#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MobileNetworkPacketCoreControlPlaneIdentityOutputReference <a name="MobileNetworkPacketCoreControlPlaneIdentityOutputReference" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_packet_core_control_plane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference;

new MobileNetworkPacketCoreControlPlaneIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity">MobileNetworkPacketCoreControlPlaneIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.internalValue"></a>

```java
public MobileNetworkPacketCoreControlPlaneIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity">MobileNetworkPacketCoreControlPlaneIdentity</a>

---


### MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference <a name="MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_packet_core_control_plane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference;

new MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.resetHttpsServerCertificateUrl">resetHttpsServerCertificateUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpsServerCertificateUrl` <a name="resetHttpsServerCertificateUrl" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.resetHttpsServerCertificateUrl"></a>

```java
public void resetHttpsServerCertificateUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.httpsServerCertificateUrlInput">httpsServerCertificateUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.httpsServerCertificateUrl">httpsServerCertificateUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.authenticationTypeInput"></a>

```java
public java.lang.String getAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `httpsServerCertificateUrlInput`<sup>Optional</sup> <a name="httpsServerCertificateUrlInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.httpsServerCertificateUrlInput"></a>

```java
public java.lang.String getHttpsServerCertificateUrlInput();
```

- *Type:* java.lang.String

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `httpsServerCertificateUrl`<sup>Required</sup> <a name="httpsServerCertificateUrl" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.httpsServerCertificateUrl"></a>

```java
public java.lang.String getHttpsServerCertificateUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.internalValue"></a>

```java
public MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a>

---


### MobileNetworkPacketCoreControlPlanePlatformOutputReference <a name="MobileNetworkPacketCoreControlPlanePlatformOutputReference" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_packet_core_control_plane.MobileNetworkPacketCoreControlPlanePlatformOutputReference;

new MobileNetworkPacketCoreControlPlanePlatformOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resetArcKubernetesClusterId">resetArcKubernetesClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resetCustomLocationId">resetCustomLocationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resetEdgeDeviceId">resetEdgeDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resetStackHciClusterId">resetStackHciClusterId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArcKubernetesClusterId` <a name="resetArcKubernetesClusterId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resetArcKubernetesClusterId"></a>

```java
public void resetArcKubernetesClusterId()
```

##### `resetCustomLocationId` <a name="resetCustomLocationId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resetCustomLocationId"></a>

```java
public void resetCustomLocationId()
```

##### `resetEdgeDeviceId` <a name="resetEdgeDeviceId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resetEdgeDeviceId"></a>

```java
public void resetEdgeDeviceId()
```

##### `resetStackHciClusterId` <a name="resetStackHciClusterId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resetStackHciClusterId"></a>

```java
public void resetStackHciClusterId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.arcKubernetesClusterIdInput">arcKubernetesClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.customLocationIdInput">customLocationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.edgeDeviceIdInput">edgeDeviceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.stackHciClusterIdInput">stackHciClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.arcKubernetesClusterId">arcKubernetesClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.customLocationId">customLocationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.edgeDeviceId">edgeDeviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.stackHciClusterId">stackHciClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform">MobileNetworkPacketCoreControlPlanePlatform</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arcKubernetesClusterIdInput`<sup>Optional</sup> <a name="arcKubernetesClusterIdInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.arcKubernetesClusterIdInput"></a>

```java
public java.lang.String getArcKubernetesClusterIdInput();
```

- *Type:* java.lang.String

---

##### `customLocationIdInput`<sup>Optional</sup> <a name="customLocationIdInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.customLocationIdInput"></a>

```java
public java.lang.String getCustomLocationIdInput();
```

- *Type:* java.lang.String

---

##### `edgeDeviceIdInput`<sup>Optional</sup> <a name="edgeDeviceIdInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.edgeDeviceIdInput"></a>

```java
public java.lang.String getEdgeDeviceIdInput();
```

- *Type:* java.lang.String

---

##### `stackHciClusterIdInput`<sup>Optional</sup> <a name="stackHciClusterIdInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.stackHciClusterIdInput"></a>

```java
public java.lang.String getStackHciClusterIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `arcKubernetesClusterId`<sup>Required</sup> <a name="arcKubernetesClusterId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.arcKubernetesClusterId"></a>

```java
public java.lang.String getArcKubernetesClusterId();
```

- *Type:* java.lang.String

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.customLocationId"></a>

```java
public java.lang.String getCustomLocationId();
```

- *Type:* java.lang.String

---

##### `edgeDeviceId`<sup>Required</sup> <a name="edgeDeviceId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.edgeDeviceId"></a>

```java
public java.lang.String getEdgeDeviceId();
```

- *Type:* java.lang.String

---

##### `stackHciClusterId`<sup>Required</sup> <a name="stackHciClusterId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.stackHciClusterId"></a>

```java
public java.lang.String getStackHciClusterId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.internalValue"></a>

```java
public MobileNetworkPacketCoreControlPlanePlatform getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform">MobileNetworkPacketCoreControlPlanePlatform</a>

---


### MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference <a name="MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_packet_core_control_plane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference;

new MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts">MobileNetworkPacketCoreControlPlaneTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts">MobileNetworkPacketCoreControlPlaneTimeouts</a>

---



