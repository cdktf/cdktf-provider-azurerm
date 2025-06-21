# `mobileNetworkPacketCoreControlPlane` Submodule <a name="`mobileNetworkPacketCoreControlPlane` Submodule" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MobileNetworkPacketCoreControlPlane <a name="MobileNetworkPacketCoreControlPlane" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane azurerm_mobile_network_packet_core_control_plane}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_packet_core_control_plane

mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  local_diagnostics_access: MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess,
  location: str,
  name: str,
  resource_group_name: str,
  site_ids: typing.List[str],
  sku: str,
  control_plane_access_ipv4_address: str = None,
  control_plane_access_ipv4_gateway: str = None,
  control_plane_access_ipv4_subnet: str = None,
  control_plane_access_name: str = None,
  core_network_technology: str = None,
  id: str = None,
  identity: MobileNetworkPacketCoreControlPlaneIdentity = None,
  interoperability_settings_json: str = None,
  platform: MobileNetworkPacketCoreControlPlanePlatform = None,
  software_version: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: MobileNetworkPacketCoreControlPlaneTimeouts = None,
  user_equipment_mtu_in_bytes: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.localDiagnosticsAccess">local_diagnostics_access</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a></code> | local_diagnostics_access block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#location MobileNetworkPacketCoreControlPlane#location}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#name MobileNetworkPacketCoreControlPlane#name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#resource_group_name MobileNetworkPacketCoreControlPlane#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.siteIds">site_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#site_ids MobileNetworkPacketCoreControlPlane#site_ids}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#sku MobileNetworkPacketCoreControlPlane#sku}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.controlPlaneAccessIpv4Address">control_plane_access_ipv4_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_address MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_address}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.controlPlaneAccessIpv4Gateway">control_plane_access_ipv4_gateway</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_gateway MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_gateway}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.controlPlaneAccessIpv4Subnet">control_plane_access_ipv4_subnet</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_subnet MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_subnet}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.controlPlaneAccessName">control_plane_access_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_name MobileNetworkPacketCoreControlPlane#control_plane_access_name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.coreNetworkTechnology">core_network_technology</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#core_network_technology MobileNetworkPacketCoreControlPlane#core_network_technology}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#id MobileNetworkPacketCoreControlPlane#id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity">MobileNetworkPacketCoreControlPlaneIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.interoperabilitySettingsJson">interoperability_settings_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#interoperability_settings_json MobileNetworkPacketCoreControlPlane#interoperability_settings_json}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.platform">platform</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform">MobileNetworkPacketCoreControlPlanePlatform</a></code> | platform block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.softwareVersion">software_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#software_version MobileNetworkPacketCoreControlPlane#software_version}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#tags MobileNetworkPacketCoreControlPlane#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts">MobileNetworkPacketCoreControlPlaneTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.userEquipmentMtuInBytes">user_equipment_mtu_in_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#user_equipment_mtu_in_bytes MobileNetworkPacketCoreControlPlane#user_equipment_mtu_in_bytes}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `local_diagnostics_access`<sup>Required</sup> <a name="local_diagnostics_access" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.localDiagnosticsAccess"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a>

local_diagnostics_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#local_diagnostics_access MobileNetworkPacketCoreControlPlane#local_diagnostics_access}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#location MobileNetworkPacketCoreControlPlane#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#name MobileNetworkPacketCoreControlPlane#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#resource_group_name MobileNetworkPacketCoreControlPlane#resource_group_name}.

---

##### `site_ids`<sup>Required</sup> <a name="site_ids" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.siteIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#site_ids MobileNetworkPacketCoreControlPlane#site_ids}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#sku MobileNetworkPacketCoreControlPlane#sku}.

---

##### `control_plane_access_ipv4_address`<sup>Optional</sup> <a name="control_plane_access_ipv4_address" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.controlPlaneAccessIpv4Address"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_address MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_address}.

---

##### `control_plane_access_ipv4_gateway`<sup>Optional</sup> <a name="control_plane_access_ipv4_gateway" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.controlPlaneAccessIpv4Gateway"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_gateway MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_gateway}.

---

##### `control_plane_access_ipv4_subnet`<sup>Optional</sup> <a name="control_plane_access_ipv4_subnet" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.controlPlaneAccessIpv4Subnet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_subnet MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_subnet}.

---

##### `control_plane_access_name`<sup>Optional</sup> <a name="control_plane_access_name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.controlPlaneAccessName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_name MobileNetworkPacketCoreControlPlane#control_plane_access_name}.

---

##### `core_network_technology`<sup>Optional</sup> <a name="core_network_technology" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.coreNetworkTechnology"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#core_network_technology MobileNetworkPacketCoreControlPlane#core_network_technology}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#id MobileNetworkPacketCoreControlPlane#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity">MobileNetworkPacketCoreControlPlaneIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#identity MobileNetworkPacketCoreControlPlane#identity}

---

##### `interoperability_settings_json`<sup>Optional</sup> <a name="interoperability_settings_json" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.interoperabilitySettingsJson"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#interoperability_settings_json MobileNetworkPacketCoreControlPlane#interoperability_settings_json}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.platform"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform">MobileNetworkPacketCoreControlPlanePlatform</a>

platform block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#platform MobileNetworkPacketCoreControlPlane#platform}

---

##### `software_version`<sup>Optional</sup> <a name="software_version" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.softwareVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#software_version MobileNetworkPacketCoreControlPlane#software_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#tags MobileNetworkPacketCoreControlPlane#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts">MobileNetworkPacketCoreControlPlaneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#timeouts MobileNetworkPacketCoreControlPlane#timeouts}

---

##### `user_equipment_mtu_in_bytes`<sup>Optional</sup> <a name="user_equipment_mtu_in_bytes" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.Initializer.parameter.userEquipmentMtuInBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#user_equipment_mtu_in_bytes MobileNetworkPacketCoreControlPlane#user_equipment_mtu_in_bytes}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putLocalDiagnosticsAccess">put_local_diagnostics_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putPlatform">put_platform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetControlPlaneAccessIpv4Address">reset_control_plane_access_ipv4_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetControlPlaneAccessIpv4Gateway">reset_control_plane_access_ipv4_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetControlPlaneAccessIpv4Subnet">reset_control_plane_access_ipv4_subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetControlPlaneAccessName">reset_control_plane_access_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetCoreNetworkTechnology">reset_core_network_technology</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetInteroperabilitySettingsJson">reset_interoperability_settings_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetPlatform">reset_platform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetSoftwareVersion">reset_software_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetUserEquipmentMtuInBytes">reset_user_equipment_mtu_in_bytes</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putIdentity"></a>

```python
def put_identity(
  identity_ids: typing.List[str],
  type: str
) -> None
```

###### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#identity_ids MobileNetworkPacketCoreControlPlane#identity_ids}.

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#type MobileNetworkPacketCoreControlPlane#type}.

---

##### `put_local_diagnostics_access` <a name="put_local_diagnostics_access" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putLocalDiagnosticsAccess"></a>

```python
def put_local_diagnostics_access(
  authentication_type: str,
  https_server_certificate_url: str = None
) -> None
```

###### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putLocalDiagnosticsAccess.parameter.authenticationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#authentication_type MobileNetworkPacketCoreControlPlane#authentication_type}.

---

###### `https_server_certificate_url`<sup>Optional</sup> <a name="https_server_certificate_url" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putLocalDiagnosticsAccess.parameter.httpsServerCertificateUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#https_server_certificate_url MobileNetworkPacketCoreControlPlane#https_server_certificate_url}.

---

##### `put_platform` <a name="put_platform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putPlatform"></a>

```python
def put_platform(
  type: str,
  arc_kubernetes_cluster_id: str = None,
  custom_location_id: str = None,
  edge_device_id: str = None,
  stack_hci_cluster_id: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putPlatform.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#type MobileNetworkPacketCoreControlPlane#type}.

---

###### `arc_kubernetes_cluster_id`<sup>Optional</sup> <a name="arc_kubernetes_cluster_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putPlatform.parameter.arcKubernetesClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#arc_kubernetes_cluster_id MobileNetworkPacketCoreControlPlane#arc_kubernetes_cluster_id}.

---

###### `custom_location_id`<sup>Optional</sup> <a name="custom_location_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putPlatform.parameter.customLocationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#custom_location_id MobileNetworkPacketCoreControlPlane#custom_location_id}.

---

###### `edge_device_id`<sup>Optional</sup> <a name="edge_device_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putPlatform.parameter.edgeDeviceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#edge_device_id MobileNetworkPacketCoreControlPlane#edge_device_id}.

---

###### `stack_hci_cluster_id`<sup>Optional</sup> <a name="stack_hci_cluster_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putPlatform.parameter.stackHciClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#stack_hci_cluster_id MobileNetworkPacketCoreControlPlane#stack_hci_cluster_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#create MobileNetworkPacketCoreControlPlane#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#delete MobileNetworkPacketCoreControlPlane#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#read MobileNetworkPacketCoreControlPlane#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#update MobileNetworkPacketCoreControlPlane#update}.

---

##### `reset_control_plane_access_ipv4_address` <a name="reset_control_plane_access_ipv4_address" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetControlPlaneAccessIpv4Address"></a>

```python
def reset_control_plane_access_ipv4_address() -> None
```

##### `reset_control_plane_access_ipv4_gateway` <a name="reset_control_plane_access_ipv4_gateway" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetControlPlaneAccessIpv4Gateway"></a>

```python
def reset_control_plane_access_ipv4_gateway() -> None
```

##### `reset_control_plane_access_ipv4_subnet` <a name="reset_control_plane_access_ipv4_subnet" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetControlPlaneAccessIpv4Subnet"></a>

```python
def reset_control_plane_access_ipv4_subnet() -> None
```

##### `reset_control_plane_access_name` <a name="reset_control_plane_access_name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetControlPlaneAccessName"></a>

```python
def reset_control_plane_access_name() -> None
```

##### `reset_core_network_technology` <a name="reset_core_network_technology" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetCoreNetworkTechnology"></a>

```python
def reset_core_network_technology() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_interoperability_settings_json` <a name="reset_interoperability_settings_json" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetInteroperabilitySettingsJson"></a>

```python
def reset_interoperability_settings_json() -> None
```

##### `reset_platform` <a name="reset_platform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetPlatform"></a>

```python
def reset_platform() -> None
```

##### `reset_software_version` <a name="reset_software_version" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetSoftwareVersion"></a>

```python
def reset_software_version() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_equipment_mtu_in_bytes` <a name="reset_user_equipment_mtu_in_bytes" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.resetUserEquipmentMtuInBytes"></a>

```python
def reset_user_equipment_mtu_in_bytes() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MobileNetworkPacketCoreControlPlane resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_packet_core_control_plane

mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_packet_core_control_plane

mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_packet_core_control_plane

mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_packet_core_control_plane

mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MobileNetworkPacketCoreControlPlane resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MobileNetworkPacketCoreControlPlane to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MobileNetworkPacketCoreControlPlane that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MobileNetworkPacketCoreControlPlane to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference">MobileNetworkPacketCoreControlPlaneIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.localDiagnosticsAccess">local_diagnostics_access</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.platform">platform</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference">MobileNetworkPacketCoreControlPlanePlatformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference">MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4AddressInput">control_plane_access_ipv4_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4GatewayInput">control_plane_access_ipv4_gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4SubnetInput">control_plane_access_ipv4_subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessNameInput">control_plane_access_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.coreNetworkTechnologyInput">core_network_technology_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity">MobileNetworkPacketCoreControlPlaneIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.interoperabilitySettingsJsonInput">interoperability_settings_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.localDiagnosticsAccessInput">local_diagnostics_access_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.platformInput">platform_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform">MobileNetworkPacketCoreControlPlanePlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.siteIdsInput">site_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.softwareVersionInput">software_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts">MobileNetworkPacketCoreControlPlaneTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.userEquipmentMtuInBytesInput">user_equipment_mtu_in_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4Address">control_plane_access_ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4Gateway">control_plane_access_ipv4_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4Subnet">control_plane_access_ipv4_subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessName">control_plane_access_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.coreNetworkTechnology">core_network_technology</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.interoperabilitySettingsJson">interoperability_settings_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.siteIds">site_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.softwareVersion">software_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.userEquipmentMtuInBytes">user_equipment_mtu_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.identity"></a>

```python
identity: MobileNetworkPacketCoreControlPlaneIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference">MobileNetworkPacketCoreControlPlaneIdentityOutputReference</a>

---

##### `local_diagnostics_access`<sup>Required</sup> <a name="local_diagnostics_access" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.localDiagnosticsAccess"></a>

```python
local_diagnostics_access: MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference</a>

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.platform"></a>

```python
platform: MobileNetworkPacketCoreControlPlanePlatformOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference">MobileNetworkPacketCoreControlPlanePlatformOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.timeouts"></a>

```python
timeouts: MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference">MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference</a>

---

##### `control_plane_access_ipv4_address_input`<sup>Optional</sup> <a name="control_plane_access_ipv4_address_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4AddressInput"></a>

```python
control_plane_access_ipv4_address_input: str
```

- *Type:* str

---

##### `control_plane_access_ipv4_gateway_input`<sup>Optional</sup> <a name="control_plane_access_ipv4_gateway_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4GatewayInput"></a>

```python
control_plane_access_ipv4_gateway_input: str
```

- *Type:* str

---

##### `control_plane_access_ipv4_subnet_input`<sup>Optional</sup> <a name="control_plane_access_ipv4_subnet_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4SubnetInput"></a>

```python
control_plane_access_ipv4_subnet_input: str
```

- *Type:* str

---

##### `control_plane_access_name_input`<sup>Optional</sup> <a name="control_plane_access_name_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessNameInput"></a>

```python
control_plane_access_name_input: str
```

- *Type:* str

---

##### `core_network_technology_input`<sup>Optional</sup> <a name="core_network_technology_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.coreNetworkTechnologyInput"></a>

```python
core_network_technology_input: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.identityInput"></a>

```python
identity_input: MobileNetworkPacketCoreControlPlaneIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity">MobileNetworkPacketCoreControlPlaneIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `interoperability_settings_json_input`<sup>Optional</sup> <a name="interoperability_settings_json_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.interoperabilitySettingsJsonInput"></a>

```python
interoperability_settings_json_input: str
```

- *Type:* str

---

##### `local_diagnostics_access_input`<sup>Optional</sup> <a name="local_diagnostics_access_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.localDiagnosticsAccessInput"></a>

```python
local_diagnostics_access_input: MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `platform_input`<sup>Optional</sup> <a name="platform_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.platformInput"></a>

```python
platform_input: MobileNetworkPacketCoreControlPlanePlatform
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform">MobileNetworkPacketCoreControlPlanePlatform</a>

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `site_ids_input`<sup>Optional</sup> <a name="site_ids_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.siteIdsInput"></a>

```python
site_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `software_version_input`<sup>Optional</sup> <a name="software_version_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.softwareVersionInput"></a>

```python
software_version_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MobileNetworkPacketCoreControlPlaneTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts">MobileNetworkPacketCoreControlPlaneTimeouts</a>]

---

##### `user_equipment_mtu_in_bytes_input`<sup>Optional</sup> <a name="user_equipment_mtu_in_bytes_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.userEquipmentMtuInBytesInput"></a>

```python
user_equipment_mtu_in_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `control_plane_access_ipv4_address`<sup>Required</sup> <a name="control_plane_access_ipv4_address" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4Address"></a>

```python
control_plane_access_ipv4_address: str
```

- *Type:* str

---

##### `control_plane_access_ipv4_gateway`<sup>Required</sup> <a name="control_plane_access_ipv4_gateway" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4Gateway"></a>

```python
control_plane_access_ipv4_gateway: str
```

- *Type:* str

---

##### `control_plane_access_ipv4_subnet`<sup>Required</sup> <a name="control_plane_access_ipv4_subnet" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessIpv4Subnet"></a>

```python
control_plane_access_ipv4_subnet: str
```

- *Type:* str

---

##### `control_plane_access_name`<sup>Required</sup> <a name="control_plane_access_name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.controlPlaneAccessName"></a>

```python
control_plane_access_name: str
```

- *Type:* str

---

##### `core_network_technology`<sup>Required</sup> <a name="core_network_technology" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.coreNetworkTechnology"></a>

```python
core_network_technology: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interoperability_settings_json`<sup>Required</sup> <a name="interoperability_settings_json" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.interoperabilitySettingsJson"></a>

```python
interoperability_settings_json: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `site_ids`<sup>Required</sup> <a name="site_ids" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.siteIds"></a>

```python
site_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `software_version`<sup>Required</sup> <a name="software_version" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.softwareVersion"></a>

```python
software_version: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_equipment_mtu_in_bytes`<sup>Required</sup> <a name="user_equipment_mtu_in_bytes" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.userEquipmentMtuInBytes"></a>

```python
user_equipment_mtu_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlane.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MobileNetworkPacketCoreControlPlaneConfig <a name="MobileNetworkPacketCoreControlPlaneConfig" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_packet_core_control_plane

mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  local_diagnostics_access: MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess,
  location: str,
  name: str,
  resource_group_name: str,
  site_ids: typing.List[str],
  sku: str,
  control_plane_access_ipv4_address: str = None,
  control_plane_access_ipv4_gateway: str = None,
  control_plane_access_ipv4_subnet: str = None,
  control_plane_access_name: str = None,
  core_network_technology: str = None,
  id: str = None,
  identity: MobileNetworkPacketCoreControlPlaneIdentity = None,
  interoperability_settings_json: str = None,
  platform: MobileNetworkPacketCoreControlPlanePlatform = None,
  software_version: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: MobileNetworkPacketCoreControlPlaneTimeouts = None,
  user_equipment_mtu_in_bytes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.localDiagnosticsAccess">local_diagnostics_access</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a></code> | local_diagnostics_access block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#location MobileNetworkPacketCoreControlPlane#location}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#name MobileNetworkPacketCoreControlPlane#name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#resource_group_name MobileNetworkPacketCoreControlPlane#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.siteIds">site_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#site_ids MobileNetworkPacketCoreControlPlane#site_ids}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#sku MobileNetworkPacketCoreControlPlane#sku}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.controlPlaneAccessIpv4Address">control_plane_access_ipv4_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_address MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_address}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.controlPlaneAccessIpv4Gateway">control_plane_access_ipv4_gateway</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_gateway MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_gateway}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.controlPlaneAccessIpv4Subnet">control_plane_access_ipv4_subnet</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_subnet MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_subnet}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.controlPlaneAccessName">control_plane_access_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_name MobileNetworkPacketCoreControlPlane#control_plane_access_name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.coreNetworkTechnology">core_network_technology</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#core_network_technology MobileNetworkPacketCoreControlPlane#core_network_technology}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#id MobileNetworkPacketCoreControlPlane#id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity">MobileNetworkPacketCoreControlPlaneIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.interoperabilitySettingsJson">interoperability_settings_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#interoperability_settings_json MobileNetworkPacketCoreControlPlane#interoperability_settings_json}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.platform">platform</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform">MobileNetworkPacketCoreControlPlanePlatform</a></code> | platform block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.softwareVersion">software_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#software_version MobileNetworkPacketCoreControlPlane#software_version}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#tags MobileNetworkPacketCoreControlPlane#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts">MobileNetworkPacketCoreControlPlaneTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.userEquipmentMtuInBytes">user_equipment_mtu_in_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#user_equipment_mtu_in_bytes MobileNetworkPacketCoreControlPlane#user_equipment_mtu_in_bytes}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `local_diagnostics_access`<sup>Required</sup> <a name="local_diagnostics_access" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.localDiagnosticsAccess"></a>

```python
local_diagnostics_access: MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a>

local_diagnostics_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#local_diagnostics_access MobileNetworkPacketCoreControlPlane#local_diagnostics_access}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#location MobileNetworkPacketCoreControlPlane#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#name MobileNetworkPacketCoreControlPlane#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#resource_group_name MobileNetworkPacketCoreControlPlane#resource_group_name}.

---

##### `site_ids`<sup>Required</sup> <a name="site_ids" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.siteIds"></a>

```python
site_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#site_ids MobileNetworkPacketCoreControlPlane#site_ids}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#sku MobileNetworkPacketCoreControlPlane#sku}.

---

##### `control_plane_access_ipv4_address`<sup>Optional</sup> <a name="control_plane_access_ipv4_address" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.controlPlaneAccessIpv4Address"></a>

```python
control_plane_access_ipv4_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_address MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_address}.

---

##### `control_plane_access_ipv4_gateway`<sup>Optional</sup> <a name="control_plane_access_ipv4_gateway" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.controlPlaneAccessIpv4Gateway"></a>

```python
control_plane_access_ipv4_gateway: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_gateway MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_gateway}.

---

##### `control_plane_access_ipv4_subnet`<sup>Optional</sup> <a name="control_plane_access_ipv4_subnet" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.controlPlaneAccessIpv4Subnet"></a>

```python
control_plane_access_ipv4_subnet: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_subnet MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_subnet}.

---

##### `control_plane_access_name`<sup>Optional</sup> <a name="control_plane_access_name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.controlPlaneAccessName"></a>

```python
control_plane_access_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_name MobileNetworkPacketCoreControlPlane#control_plane_access_name}.

---

##### `core_network_technology`<sup>Optional</sup> <a name="core_network_technology" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.coreNetworkTechnology"></a>

```python
core_network_technology: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#core_network_technology MobileNetworkPacketCoreControlPlane#core_network_technology}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#id MobileNetworkPacketCoreControlPlane#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.identity"></a>

```python
identity: MobileNetworkPacketCoreControlPlaneIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity">MobileNetworkPacketCoreControlPlaneIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#identity MobileNetworkPacketCoreControlPlane#identity}

---

##### `interoperability_settings_json`<sup>Optional</sup> <a name="interoperability_settings_json" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.interoperabilitySettingsJson"></a>

```python
interoperability_settings_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#interoperability_settings_json MobileNetworkPacketCoreControlPlane#interoperability_settings_json}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.platform"></a>

```python
platform: MobileNetworkPacketCoreControlPlanePlatform
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform">MobileNetworkPacketCoreControlPlanePlatform</a>

platform block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#platform MobileNetworkPacketCoreControlPlane#platform}

---

##### `software_version`<sup>Optional</sup> <a name="software_version" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.softwareVersion"></a>

```python
software_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#software_version MobileNetworkPacketCoreControlPlane#software_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#tags MobileNetworkPacketCoreControlPlane#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.timeouts"></a>

```python
timeouts: MobileNetworkPacketCoreControlPlaneTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts">MobileNetworkPacketCoreControlPlaneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#timeouts MobileNetworkPacketCoreControlPlane#timeouts}

---

##### `user_equipment_mtu_in_bytes`<sup>Optional</sup> <a name="user_equipment_mtu_in_bytes" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneConfig.property.userEquipmentMtuInBytes"></a>

```python
user_equipment_mtu_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#user_equipment_mtu_in_bytes MobileNetworkPacketCoreControlPlane#user_equipment_mtu_in_bytes}.

---

### MobileNetworkPacketCoreControlPlaneIdentity <a name="MobileNetworkPacketCoreControlPlaneIdentity" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_packet_core_control_plane

mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity(
  identity_ids: typing.List[str],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#identity_ids MobileNetworkPacketCoreControlPlane#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#type MobileNetworkPacketCoreControlPlane#type}. |

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#identity_ids MobileNetworkPacketCoreControlPlane#identity_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#type MobileNetworkPacketCoreControlPlane#type}.

---

### MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess <a name="MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_packet_core_control_plane

mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess(
  authentication_type: str,
  https_server_certificate_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess.property.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#authentication_type MobileNetworkPacketCoreControlPlane#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess.property.httpsServerCertificateUrl">https_server_certificate_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#https_server_certificate_url MobileNetworkPacketCoreControlPlane#https_server_certificate_url}. |

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#authentication_type MobileNetworkPacketCoreControlPlane#authentication_type}.

---

##### `https_server_certificate_url`<sup>Optional</sup> <a name="https_server_certificate_url" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess.property.httpsServerCertificateUrl"></a>

```python
https_server_certificate_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#https_server_certificate_url MobileNetworkPacketCoreControlPlane#https_server_certificate_url}.

---

### MobileNetworkPacketCoreControlPlanePlatform <a name="MobileNetworkPacketCoreControlPlanePlatform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_packet_core_control_plane

mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform(
  type: str,
  arc_kubernetes_cluster_id: str = None,
  custom_location_id: str = None,
  edge_device_id: str = None,
  stack_hci_cluster_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#type MobileNetworkPacketCoreControlPlane#type}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.arcKubernetesClusterId">arc_kubernetes_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#arc_kubernetes_cluster_id MobileNetworkPacketCoreControlPlane#arc_kubernetes_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.customLocationId">custom_location_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#custom_location_id MobileNetworkPacketCoreControlPlane#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.edgeDeviceId">edge_device_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#edge_device_id MobileNetworkPacketCoreControlPlane#edge_device_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.stackHciClusterId">stack_hci_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#stack_hci_cluster_id MobileNetworkPacketCoreControlPlane#stack_hci_cluster_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#type MobileNetworkPacketCoreControlPlane#type}.

---

##### `arc_kubernetes_cluster_id`<sup>Optional</sup> <a name="arc_kubernetes_cluster_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.arcKubernetesClusterId"></a>

```python
arc_kubernetes_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#arc_kubernetes_cluster_id MobileNetworkPacketCoreControlPlane#arc_kubernetes_cluster_id}.

---

##### `custom_location_id`<sup>Optional</sup> <a name="custom_location_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.customLocationId"></a>

```python
custom_location_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#custom_location_id MobileNetworkPacketCoreControlPlane#custom_location_id}.

---

##### `edge_device_id`<sup>Optional</sup> <a name="edge_device_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.edgeDeviceId"></a>

```python
edge_device_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#edge_device_id MobileNetworkPacketCoreControlPlane#edge_device_id}.

---

##### `stack_hci_cluster_id`<sup>Optional</sup> <a name="stack_hci_cluster_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform.property.stackHciClusterId"></a>

```python
stack_hci_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#stack_hci_cluster_id MobileNetworkPacketCoreControlPlane#stack_hci_cluster_id}.

---

### MobileNetworkPacketCoreControlPlaneTimeouts <a name="MobileNetworkPacketCoreControlPlaneTimeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_packet_core_control_plane

mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#create MobileNetworkPacketCoreControlPlane#create}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#delete MobileNetworkPacketCoreControlPlane#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#read MobileNetworkPacketCoreControlPlane#read}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#update MobileNetworkPacketCoreControlPlane#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#create MobileNetworkPacketCoreControlPlane#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#delete MobileNetworkPacketCoreControlPlane#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#read MobileNetworkPacketCoreControlPlane#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mobile_network_packet_core_control_plane#update MobileNetworkPacketCoreControlPlane#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MobileNetworkPacketCoreControlPlaneIdentityOutputReference <a name="MobileNetworkPacketCoreControlPlaneIdentityOutputReference" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_packet_core_control_plane

mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity">MobileNetworkPacketCoreControlPlaneIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentityOutputReference.property.internalValue"></a>

```python
internal_value: MobileNetworkPacketCoreControlPlaneIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneIdentity">MobileNetworkPacketCoreControlPlaneIdentity</a>

---


### MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference <a name="MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_packet_core_control_plane

mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.resetHttpsServerCertificateUrl">reset_https_server_certificate_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_https_server_certificate_url` <a name="reset_https_server_certificate_url" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.resetHttpsServerCertificateUrl"></a>

```python
def reset_https_server_certificate_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.authenticationTypeInput">authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.httpsServerCertificateUrlInput">https_server_certificate_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.httpsServerCertificateUrl">https_server_certificate_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_type_input`<sup>Optional</sup> <a name="authentication_type_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.authenticationTypeInput"></a>

```python
authentication_type_input: str
```

- *Type:* str

---

##### `https_server_certificate_url_input`<sup>Optional</sup> <a name="https_server_certificate_url_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.httpsServerCertificateUrlInput"></a>

```python
https_server_certificate_url_input: str
```

- *Type:* str

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `https_server_certificate_url`<sup>Required</sup> <a name="https_server_certificate_url" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.httpsServerCertificateUrl"></a>

```python
https_server_certificate_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference.property.internalValue"></a>

```python
internal_value: MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess">MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess</a>

---


### MobileNetworkPacketCoreControlPlanePlatformOutputReference <a name="MobileNetworkPacketCoreControlPlanePlatformOutputReference" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_packet_core_control_plane

mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resetArcKubernetesClusterId">reset_arc_kubernetes_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resetCustomLocationId">reset_custom_location_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resetEdgeDeviceId">reset_edge_device_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resetStackHciClusterId">reset_stack_hci_cluster_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arc_kubernetes_cluster_id` <a name="reset_arc_kubernetes_cluster_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resetArcKubernetesClusterId"></a>

```python
def reset_arc_kubernetes_cluster_id() -> None
```

##### `reset_custom_location_id` <a name="reset_custom_location_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resetCustomLocationId"></a>

```python
def reset_custom_location_id() -> None
```

##### `reset_edge_device_id` <a name="reset_edge_device_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resetEdgeDeviceId"></a>

```python
def reset_edge_device_id() -> None
```

##### `reset_stack_hci_cluster_id` <a name="reset_stack_hci_cluster_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.resetStackHciClusterId"></a>

```python
def reset_stack_hci_cluster_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.arcKubernetesClusterIdInput">arc_kubernetes_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.customLocationIdInput">custom_location_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.edgeDeviceIdInput">edge_device_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.stackHciClusterIdInput">stack_hci_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.arcKubernetesClusterId">arc_kubernetes_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.customLocationId">custom_location_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.edgeDeviceId">edge_device_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.stackHciClusterId">stack_hci_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform">MobileNetworkPacketCoreControlPlanePlatform</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arc_kubernetes_cluster_id_input`<sup>Optional</sup> <a name="arc_kubernetes_cluster_id_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.arcKubernetesClusterIdInput"></a>

```python
arc_kubernetes_cluster_id_input: str
```

- *Type:* str

---

##### `custom_location_id_input`<sup>Optional</sup> <a name="custom_location_id_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.customLocationIdInput"></a>

```python
custom_location_id_input: str
```

- *Type:* str

---

##### `edge_device_id_input`<sup>Optional</sup> <a name="edge_device_id_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.edgeDeviceIdInput"></a>

```python
edge_device_id_input: str
```

- *Type:* str

---

##### `stack_hci_cluster_id_input`<sup>Optional</sup> <a name="stack_hci_cluster_id_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.stackHciClusterIdInput"></a>

```python
stack_hci_cluster_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `arc_kubernetes_cluster_id`<sup>Required</sup> <a name="arc_kubernetes_cluster_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.arcKubernetesClusterId"></a>

```python
arc_kubernetes_cluster_id: str
```

- *Type:* str

---

##### `custom_location_id`<sup>Required</sup> <a name="custom_location_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.customLocationId"></a>

```python
custom_location_id: str
```

- *Type:* str

---

##### `edge_device_id`<sup>Required</sup> <a name="edge_device_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.edgeDeviceId"></a>

```python
edge_device_id: str
```

- *Type:* str

---

##### `stack_hci_cluster_id`<sup>Required</sup> <a name="stack_hci_cluster_id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.stackHciClusterId"></a>

```python
stack_hci_cluster_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatformOutputReference.property.internalValue"></a>

```python
internal_value: MobileNetworkPacketCoreControlPlanePlatform
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlanePlatform">MobileNetworkPacketCoreControlPlanePlatform</a>

---


### MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference <a name="MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mobile_network_packet_core_control_plane

mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts">MobileNetworkPacketCoreControlPlaneTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MobileNetworkPacketCoreControlPlaneTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreControlPlane.MobileNetworkPacketCoreControlPlaneTimeouts">MobileNetworkPacketCoreControlPlaneTimeouts</a>]

---



