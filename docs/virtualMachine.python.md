# `virtualMachine` Submodule <a name="`virtualMachine` Submodule" id="@cdktf/provider-azurerm.virtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachine <a name="VirtualMachine" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine azurerm_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachine(
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
  network_interface_ids: typing.List[str],
  resource_group_name: str,
  storage_os_disk: VirtualMachineStorageOsDisk,
  vm_size: str,
  additional_capabilities: VirtualMachineAdditionalCapabilities = None,
  availability_set_id: str = None,
  boot_diagnostics: VirtualMachineBootDiagnostics = None,
  delete_data_disks_on_termination: typing.Union[bool, IResolvable] = None,
  delete_os_disk_on_termination: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: VirtualMachineIdentity = None,
  license_type: str = None,
  os_profile: VirtualMachineOsProfile = None,
  os_profile_linux_config: VirtualMachineOsProfileLinuxConfig = None,
  os_profile_secrets: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileSecrets]] = None,
  os_profile_windows_config: VirtualMachineOsProfileWindowsConfig = None,
  plan: VirtualMachinePlan = None,
  primary_network_interface_id: str = None,
  proximity_placement_group_id: str = None,
  storage_data_disk: typing.Union[IResolvable, typing.List[VirtualMachineStorageDataDisk]] = None,
  storage_image_reference: VirtualMachineStorageImageReference = None,
  tags: typing.Mapping[str] = None,
  timeouts: VirtualMachineTimeouts = None,
  zones: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#location VirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#name VirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.networkInterfaceIds">network_interface_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#network_interface_ids VirtualMachine#network_interface_ids}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#resource_group_name VirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.storageOsDisk">storage_os_disk</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk">VirtualMachineStorageOsDisk</a></code> | storage_os_disk block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.vmSize">vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#vm_size VirtualMachine#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.additionalCapabilities">additional_capabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilities">VirtualMachineAdditionalCapabilities</a></code> | additional_capabilities block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.availabilitySetId">availability_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#availability_set_id VirtualMachine#availability_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.bootDiagnostics">boot_diagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnostics">VirtualMachineBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.deleteDataDisksOnTermination">delete_data_disks_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#delete_data_disks_on_termination VirtualMachine#delete_data_disks_on_termination}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.deleteOsDiskOnTermination">delete_os_disk_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#delete_os_disk_on_termination VirtualMachine#delete_os_disk_on_termination}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#id VirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentity">VirtualMachineIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.licenseType">license_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#license_type VirtualMachine#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.osProfile">os_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfile">VirtualMachineOsProfile</a></code> | os_profile block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.osProfileLinuxConfig">os_profile_linux_config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfig">VirtualMachineOsProfileLinuxConfig</a></code> | os_profile_linux_config block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.osProfileSecrets">os_profile_secrets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecrets">VirtualMachineOsProfileSecrets</a>]]</code> | os_profile_secrets block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.osProfileWindowsConfig">os_profile_windows_config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfig">VirtualMachineOsProfileWindowsConfig</a></code> | os_profile_windows_config block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlan">VirtualMachinePlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.primaryNetworkInterfaceId">primary_network_interface_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#primary_network_interface_id VirtualMachine#primary_network_interface_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.proximityPlacementGroupId">proximity_placement_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#proximity_placement_group_id VirtualMachine#proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.storageDataDisk">storage_data_disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk">VirtualMachineStorageDataDisk</a>]]</code> | storage_data_disk block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.storageImageReference">storage_image_reference</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReference">VirtualMachineStorageImageReference</a></code> | storage_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#tags VirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeouts">VirtualMachineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#zones VirtualMachine#zones}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#location VirtualMachine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#name VirtualMachine#name}.

---

##### `network_interface_ids`<sup>Required</sup> <a name="network_interface_ids" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.networkInterfaceIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#network_interface_ids VirtualMachine#network_interface_ids}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#resource_group_name VirtualMachine#resource_group_name}.

---

##### `storage_os_disk`<sup>Required</sup> <a name="storage_os_disk" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.storageOsDisk"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk">VirtualMachineStorageOsDisk</a>

storage_os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#storage_os_disk VirtualMachine#storage_os_disk}

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.vmSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#vm_size VirtualMachine#vm_size}.

---

##### `additional_capabilities`<sup>Optional</sup> <a name="additional_capabilities" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.additionalCapabilities"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilities">VirtualMachineAdditionalCapabilities</a>

additional_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#additional_capabilities VirtualMachine#additional_capabilities}

---

##### `availability_set_id`<sup>Optional</sup> <a name="availability_set_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.availabilitySetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#availability_set_id VirtualMachine#availability_set_id}.

---

##### `boot_diagnostics`<sup>Optional</sup> <a name="boot_diagnostics" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.bootDiagnostics"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnostics">VirtualMachineBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#boot_diagnostics VirtualMachine#boot_diagnostics}

---

##### `delete_data_disks_on_termination`<sup>Optional</sup> <a name="delete_data_disks_on_termination" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.deleteDataDisksOnTermination"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#delete_data_disks_on_termination VirtualMachine#delete_data_disks_on_termination}.

---

##### `delete_os_disk_on_termination`<sup>Optional</sup> <a name="delete_os_disk_on_termination" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.deleteOsDiskOnTermination"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#delete_os_disk_on_termination VirtualMachine#delete_os_disk_on_termination}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#id VirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentity">VirtualMachineIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#identity VirtualMachine#identity}

---

##### `license_type`<sup>Optional</sup> <a name="license_type" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.licenseType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#license_type VirtualMachine#license_type}.

---

##### `os_profile`<sup>Optional</sup> <a name="os_profile" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.osProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfile">VirtualMachineOsProfile</a>

os_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#os_profile VirtualMachine#os_profile}

---

##### `os_profile_linux_config`<sup>Optional</sup> <a name="os_profile_linux_config" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.osProfileLinuxConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfig">VirtualMachineOsProfileLinuxConfig</a>

os_profile_linux_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#os_profile_linux_config VirtualMachine#os_profile_linux_config}

---

##### `os_profile_secrets`<sup>Optional</sup> <a name="os_profile_secrets" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.osProfileSecrets"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecrets">VirtualMachineOsProfileSecrets</a>]]

os_profile_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#os_profile_secrets VirtualMachine#os_profile_secrets}

---

##### `os_profile_windows_config`<sup>Optional</sup> <a name="os_profile_windows_config" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.osProfileWindowsConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfig">VirtualMachineOsProfileWindowsConfig</a>

os_profile_windows_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#os_profile_windows_config VirtualMachine#os_profile_windows_config}

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.plan"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlan">VirtualMachinePlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#plan VirtualMachine#plan}

---

##### `primary_network_interface_id`<sup>Optional</sup> <a name="primary_network_interface_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.primaryNetworkInterfaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#primary_network_interface_id VirtualMachine#primary_network_interface_id}.

---

##### `proximity_placement_group_id`<sup>Optional</sup> <a name="proximity_placement_group_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.proximityPlacementGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#proximity_placement_group_id VirtualMachine#proximity_placement_group_id}.

---

##### `storage_data_disk`<sup>Optional</sup> <a name="storage_data_disk" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.storageDataDisk"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk">VirtualMachineStorageDataDisk</a>]]

storage_data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#storage_data_disk VirtualMachine#storage_data_disk}

---

##### `storage_image_reference`<sup>Optional</sup> <a name="storage_image_reference" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.storageImageReference"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReference">VirtualMachineStorageImageReference</a>

storage_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#storage_image_reference VirtualMachine#storage_image_reference}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#tags VirtualMachine#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeouts">VirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#timeouts VirtualMachine#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.Initializer.parameter.zones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#zones VirtualMachine#zones}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putAdditionalCapabilities">put_additional_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putBootDiagnostics">put_boot_diagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putOsProfile">put_os_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putOsProfileLinuxConfig">put_os_profile_linux_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putOsProfileSecrets">put_os_profile_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putOsProfileWindowsConfig">put_os_profile_windows_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putPlan">put_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putStorageDataDisk">put_storage_data_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putStorageImageReference">put_storage_image_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putStorageOsDisk">put_storage_os_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetAdditionalCapabilities">reset_additional_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetAvailabilitySetId">reset_availability_set_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetBootDiagnostics">reset_boot_diagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetDeleteDataDisksOnTermination">reset_delete_data_disks_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetDeleteOsDiskOnTermination">reset_delete_os_disk_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetLicenseType">reset_license_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetOsProfile">reset_os_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetOsProfileLinuxConfig">reset_os_profile_linux_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetOsProfileSecrets">reset_os_profile_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetOsProfileWindowsConfig">reset_os_profile_windows_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetPlan">reset_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetPrimaryNetworkInterfaceId">reset_primary_network_interface_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetProximityPlacementGroupId">reset_proximity_placement_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetStorageDataDisk">reset_storage_data_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetStorageImageReference">reset_storage_image_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetZones">reset_zones</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_additional_capabilities` <a name="put_additional_capabilities" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putAdditionalCapabilities"></a>

```python
def put_additional_capabilities(
  ultra_ssd_enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `ultra_ssd_enabled`<sup>Required</sup> <a name="ultra_ssd_enabled" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putAdditionalCapabilities.parameter.ultraSsdEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#ultra_ssd_enabled VirtualMachine#ultra_ssd_enabled}.

---

##### `put_boot_diagnostics` <a name="put_boot_diagnostics" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putBootDiagnostics"></a>

```python
def put_boot_diagnostics(
  enabled: typing.Union[bool, IResolvable],
  storage_uri: str
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putBootDiagnostics.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#enabled VirtualMachine#enabled}.

---

###### `storage_uri`<sup>Required</sup> <a name="storage_uri" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putBootDiagnostics.parameter.storageUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#storage_uri VirtualMachine#storage_uri}.

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#type VirtualMachine#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#identity_ids VirtualMachine#identity_ids}.

---

##### `put_os_profile` <a name="put_os_profile" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putOsProfile"></a>

```python
def put_os_profile(
  admin_username: str,
  computer_name: str,
  admin_password: str = None,
  custom_data: str = None
) -> None
```

###### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putOsProfile.parameter.adminUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#admin_username VirtualMachine#admin_username}.

---

###### `computer_name`<sup>Required</sup> <a name="computer_name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putOsProfile.parameter.computerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#computer_name VirtualMachine#computer_name}.

---

###### `admin_password`<sup>Optional</sup> <a name="admin_password" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putOsProfile.parameter.adminPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#admin_password VirtualMachine#admin_password}.

---

###### `custom_data`<sup>Optional</sup> <a name="custom_data" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putOsProfile.parameter.customData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#custom_data VirtualMachine#custom_data}.

---

##### `put_os_profile_linux_config` <a name="put_os_profile_linux_config" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putOsProfileLinuxConfig"></a>

```python
def put_os_profile_linux_config(
  disable_password_authentication: typing.Union[bool, IResolvable],
  ssh_keys: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileLinuxConfigSshKeys]] = None
) -> None
```

###### `disable_password_authentication`<sup>Required</sup> <a name="disable_password_authentication" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putOsProfileLinuxConfig.parameter.disablePasswordAuthentication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#disable_password_authentication VirtualMachine#disable_password_authentication}.

---

###### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putOsProfileLinuxConfig.parameter.sshKeys"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys">VirtualMachineOsProfileLinuxConfigSshKeys</a>]]

ssh_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#ssh_keys VirtualMachine#ssh_keys}

---

##### `put_os_profile_secrets` <a name="put_os_profile_secrets" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putOsProfileSecrets"></a>

```python
def put_os_profile_secrets(
  value: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileSecrets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putOsProfileSecrets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecrets">VirtualMachineOsProfileSecrets</a>]]

---

##### `put_os_profile_windows_config` <a name="put_os_profile_windows_config" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putOsProfileWindowsConfig"></a>

```python
def put_os_profile_windows_config(
  additional_unattend_config: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig]] = None,
  enable_automatic_upgrades: typing.Union[bool, IResolvable] = None,
  provision_vm_agent: typing.Union[bool, IResolvable] = None,
  timezone: str = None,
  winrm: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileWindowsConfigWinrm]] = None
) -> None
```

###### `additional_unattend_config`<sup>Optional</sup> <a name="additional_unattend_config" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putOsProfileWindowsConfig.parameter.additionalUnattendConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig</a>]]

additional_unattend_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#additional_unattend_config VirtualMachine#additional_unattend_config}

---

###### `enable_automatic_upgrades`<sup>Optional</sup> <a name="enable_automatic_upgrades" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putOsProfileWindowsConfig.parameter.enableAutomaticUpgrades"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#enable_automatic_upgrades VirtualMachine#enable_automatic_upgrades}.

---

###### `provision_vm_agent`<sup>Optional</sup> <a name="provision_vm_agent" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putOsProfileWindowsConfig.parameter.provisionVmAgent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#provision_vm_agent VirtualMachine#provision_vm_agent}.

---

###### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putOsProfileWindowsConfig.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#timezone VirtualMachine#timezone}.

---

###### `winrm`<sup>Optional</sup> <a name="winrm" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putOsProfileWindowsConfig.parameter.winrm"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm">VirtualMachineOsProfileWindowsConfigWinrm</a>]]

winrm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#winrm VirtualMachine#winrm}

---

##### `put_plan` <a name="put_plan" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putPlan"></a>

```python
def put_plan(
  name: str,
  product: str,
  publisher: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putPlan.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#name VirtualMachine#name}.

---

###### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putPlan.parameter.product"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#product VirtualMachine#product}.

---

###### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putPlan.parameter.publisher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#publisher VirtualMachine#publisher}.

---

##### `put_storage_data_disk` <a name="put_storage_data_disk" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putStorageDataDisk"></a>

```python
def put_storage_data_disk(
  value: typing.Union[IResolvable, typing.List[VirtualMachineStorageDataDisk]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putStorageDataDisk.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk">VirtualMachineStorageDataDisk</a>]]

---

##### `put_storage_image_reference` <a name="put_storage_image_reference" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putStorageImageReference"></a>

```python
def put_storage_image_reference(
  id: str = None,
  offer: str = None,
  publisher: str = None,
  sku: str = None,
  version: str = None
) -> None
```

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putStorageImageReference.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#id VirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `offer`<sup>Optional</sup> <a name="offer" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putStorageImageReference.parameter.offer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#offer VirtualMachine#offer}.

---

###### `publisher`<sup>Optional</sup> <a name="publisher" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putStorageImageReference.parameter.publisher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#publisher VirtualMachine#publisher}.

---

###### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putStorageImageReference.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#sku VirtualMachine#sku}.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putStorageImageReference.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#version VirtualMachine#version}.

---

##### `put_storage_os_disk` <a name="put_storage_os_disk" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putStorageOsDisk"></a>

```python
def put_storage_os_disk(
  create_option: str,
  name: str,
  caching: str = None,
  disk_size_gb: typing.Union[int, float] = None,
  image_uri: str = None,
  managed_disk_id: str = None,
  managed_disk_type: str = None,
  os_type: str = None,
  vhd_uri: str = None,
  write_accelerator_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `create_option`<sup>Required</sup> <a name="create_option" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putStorageOsDisk.parameter.createOption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#create_option VirtualMachine#create_option}.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putStorageOsDisk.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#name VirtualMachine#name}.

---

###### `caching`<sup>Optional</sup> <a name="caching" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putStorageOsDisk.parameter.caching"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#caching VirtualMachine#caching}.

---

###### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putStorageOsDisk.parameter.diskSizeGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#disk_size_gb VirtualMachine#disk_size_gb}.

---

###### `image_uri`<sup>Optional</sup> <a name="image_uri" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putStorageOsDisk.parameter.imageUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#image_uri VirtualMachine#image_uri}.

---

###### `managed_disk_id`<sup>Optional</sup> <a name="managed_disk_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putStorageOsDisk.parameter.managedDiskId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#managed_disk_id VirtualMachine#managed_disk_id}.

---

###### `managed_disk_type`<sup>Optional</sup> <a name="managed_disk_type" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putStorageOsDisk.parameter.managedDiskType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#managed_disk_type VirtualMachine#managed_disk_type}.

---

###### `os_type`<sup>Optional</sup> <a name="os_type" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putStorageOsDisk.parameter.osType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#os_type VirtualMachine#os_type}.

---

###### `vhd_uri`<sup>Optional</sup> <a name="vhd_uri" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putStorageOsDisk.parameter.vhdUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#vhd_uri VirtualMachine#vhd_uri}.

---

###### `write_accelerator_enabled`<sup>Optional</sup> <a name="write_accelerator_enabled" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putStorageOsDisk.parameter.writeAcceleratorEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#write_accelerator_enabled VirtualMachine#write_accelerator_enabled}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#create VirtualMachine#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#delete VirtualMachine#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#read VirtualMachine#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#update VirtualMachine#update}.

---

##### `reset_additional_capabilities` <a name="reset_additional_capabilities" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetAdditionalCapabilities"></a>

```python
def reset_additional_capabilities() -> None
```

##### `reset_availability_set_id` <a name="reset_availability_set_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetAvailabilitySetId"></a>

```python
def reset_availability_set_id() -> None
```

##### `reset_boot_diagnostics` <a name="reset_boot_diagnostics" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetBootDiagnostics"></a>

```python
def reset_boot_diagnostics() -> None
```

##### `reset_delete_data_disks_on_termination` <a name="reset_delete_data_disks_on_termination" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetDeleteDataDisksOnTermination"></a>

```python
def reset_delete_data_disks_on_termination() -> None
```

##### `reset_delete_os_disk_on_termination` <a name="reset_delete_os_disk_on_termination" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetDeleteOsDiskOnTermination"></a>

```python
def reset_delete_os_disk_on_termination() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_license_type` <a name="reset_license_type" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetLicenseType"></a>

```python
def reset_license_type() -> None
```

##### `reset_os_profile` <a name="reset_os_profile" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetOsProfile"></a>

```python
def reset_os_profile() -> None
```

##### `reset_os_profile_linux_config` <a name="reset_os_profile_linux_config" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetOsProfileLinuxConfig"></a>

```python
def reset_os_profile_linux_config() -> None
```

##### `reset_os_profile_secrets` <a name="reset_os_profile_secrets" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetOsProfileSecrets"></a>

```python
def reset_os_profile_secrets() -> None
```

##### `reset_os_profile_windows_config` <a name="reset_os_profile_windows_config" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetOsProfileWindowsConfig"></a>

```python
def reset_os_profile_windows_config() -> None
```

##### `reset_plan` <a name="reset_plan" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetPlan"></a>

```python
def reset_plan() -> None
```

##### `reset_primary_network_interface_id` <a name="reset_primary_network_interface_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetPrimaryNetworkInterfaceId"></a>

```python
def reset_primary_network_interface_id() -> None
```

##### `reset_proximity_placement_group_id` <a name="reset_proximity_placement_group_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetProximityPlacementGroupId"></a>

```python
def reset_proximity_placement_group_id() -> None
```

##### `reset_storage_data_disk` <a name="reset_storage_data_disk" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetStorageDataDisk"></a>

```python
def reset_storage_data_disk() -> None
```

##### `reset_storage_image_reference` <a name="reset_storage_image_reference" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetStorageImageReference"></a>

```python
def reset_storage_image_reference() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zones` <a name="reset_zones" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.resetZones"></a>

```python
def reset_zones() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachine.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachine.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachine.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VirtualMachine to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.additionalCapabilities">additional_capabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference">VirtualMachineAdditionalCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.bootDiagnostics">boot_diagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference">VirtualMachineBootDiagnosticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference">VirtualMachineIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.osProfile">os_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference">VirtualMachineOsProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.osProfileLinuxConfig">os_profile_linux_config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference">VirtualMachineOsProfileLinuxConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.osProfileSecrets">os_profile_secrets</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList">VirtualMachineOsProfileSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.osProfileWindowsConfig">os_profile_windows_config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference">VirtualMachineOsProfileWindowsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference">VirtualMachinePlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.storageDataDisk">storage_data_disk</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList">VirtualMachineStorageDataDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.storageImageReference">storage_image_reference</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference">VirtualMachineStorageImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.storageOsDisk">storage_os_disk</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference">VirtualMachineStorageOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference">VirtualMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.additionalCapabilitiesInput">additional_capabilities_input</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilities">VirtualMachineAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.availabilitySetIdInput">availability_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.bootDiagnosticsInput">boot_diagnostics_input</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnostics">VirtualMachineBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.deleteDataDisksOnTerminationInput">delete_data_disks_on_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.deleteOsDiskOnTerminationInput">delete_os_disk_on_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentity">VirtualMachineIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.licenseTypeInput">license_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.networkInterfaceIdsInput">network_interface_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.osProfileInput">os_profile_input</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfile">VirtualMachineOsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.osProfileLinuxConfigInput">os_profile_linux_config_input</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfig">VirtualMachineOsProfileLinuxConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.osProfileSecretsInput">os_profile_secrets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecrets">VirtualMachineOsProfileSecrets</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.osProfileWindowsConfigInput">os_profile_windows_config_input</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfig">VirtualMachineOsProfileWindowsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.planInput">plan_input</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlan">VirtualMachinePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.primaryNetworkInterfaceIdInput">primary_network_interface_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.proximityPlacementGroupIdInput">proximity_placement_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.storageDataDiskInput">storage_data_disk_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk">VirtualMachineStorageDataDisk</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.storageImageReferenceInput">storage_image_reference_input</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReference">VirtualMachineStorageImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.storageOsDiskInput">storage_os_disk_input</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk">VirtualMachineStorageOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeouts">VirtualMachineTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.vmSizeInput">vm_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.zonesInput">zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.availabilitySetId">availability_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.deleteDataDisksOnTermination">delete_data_disks_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.deleteOsDiskOnTermination">delete_os_disk_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.licenseType">license_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.networkInterfaceIds">network_interface_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.primaryNetworkInterfaceId">primary_network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.proximityPlacementGroupId">proximity_placement_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.vmSize">vm_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `additional_capabilities`<sup>Required</sup> <a name="additional_capabilities" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.additionalCapabilities"></a>

```python
additional_capabilities: VirtualMachineAdditionalCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference">VirtualMachineAdditionalCapabilitiesOutputReference</a>

---

##### `boot_diagnostics`<sup>Required</sup> <a name="boot_diagnostics" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.bootDiagnostics"></a>

```python
boot_diagnostics: VirtualMachineBootDiagnosticsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference">VirtualMachineBootDiagnosticsOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.identity"></a>

```python
identity: VirtualMachineIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference">VirtualMachineIdentityOutputReference</a>

---

##### `os_profile`<sup>Required</sup> <a name="os_profile" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.osProfile"></a>

```python
os_profile: VirtualMachineOsProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference">VirtualMachineOsProfileOutputReference</a>

---

##### `os_profile_linux_config`<sup>Required</sup> <a name="os_profile_linux_config" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.osProfileLinuxConfig"></a>

```python
os_profile_linux_config: VirtualMachineOsProfileLinuxConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference">VirtualMachineOsProfileLinuxConfigOutputReference</a>

---

##### `os_profile_secrets`<sup>Required</sup> <a name="os_profile_secrets" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.osProfileSecrets"></a>

```python
os_profile_secrets: VirtualMachineOsProfileSecretsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList">VirtualMachineOsProfileSecretsList</a>

---

##### `os_profile_windows_config`<sup>Required</sup> <a name="os_profile_windows_config" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.osProfileWindowsConfig"></a>

```python
os_profile_windows_config: VirtualMachineOsProfileWindowsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference">VirtualMachineOsProfileWindowsConfigOutputReference</a>

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.plan"></a>

```python
plan: VirtualMachinePlanOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference">VirtualMachinePlanOutputReference</a>

---

##### `storage_data_disk`<sup>Required</sup> <a name="storage_data_disk" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.storageDataDisk"></a>

```python
storage_data_disk: VirtualMachineStorageDataDiskList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList">VirtualMachineStorageDataDiskList</a>

---

##### `storage_image_reference`<sup>Required</sup> <a name="storage_image_reference" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.storageImageReference"></a>

```python
storage_image_reference: VirtualMachineStorageImageReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference">VirtualMachineStorageImageReferenceOutputReference</a>

---

##### `storage_os_disk`<sup>Required</sup> <a name="storage_os_disk" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.storageOsDisk"></a>

```python
storage_os_disk: VirtualMachineStorageOsDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference">VirtualMachineStorageOsDiskOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.timeouts"></a>

```python
timeouts: VirtualMachineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference">VirtualMachineTimeoutsOutputReference</a>

---

##### `additional_capabilities_input`<sup>Optional</sup> <a name="additional_capabilities_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.additionalCapabilitiesInput"></a>

```python
additional_capabilities_input: VirtualMachineAdditionalCapabilities
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilities">VirtualMachineAdditionalCapabilities</a>

---

##### `availability_set_id_input`<sup>Optional</sup> <a name="availability_set_id_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.availabilitySetIdInput"></a>

```python
availability_set_id_input: str
```

- *Type:* str

---

##### `boot_diagnostics_input`<sup>Optional</sup> <a name="boot_diagnostics_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.bootDiagnosticsInput"></a>

```python
boot_diagnostics_input: VirtualMachineBootDiagnostics
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnostics">VirtualMachineBootDiagnostics</a>

---

##### `delete_data_disks_on_termination_input`<sup>Optional</sup> <a name="delete_data_disks_on_termination_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.deleteDataDisksOnTerminationInput"></a>

```python
delete_data_disks_on_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_os_disk_on_termination_input`<sup>Optional</sup> <a name="delete_os_disk_on_termination_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.deleteOsDiskOnTerminationInput"></a>

```python
delete_os_disk_on_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.identityInput"></a>

```python
identity_input: VirtualMachineIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentity">VirtualMachineIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `license_type_input`<sup>Optional</sup> <a name="license_type_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.licenseTypeInput"></a>

```python
license_type_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_interface_ids_input`<sup>Optional</sup> <a name="network_interface_ids_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.networkInterfaceIdsInput"></a>

```python
network_interface_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `os_profile_input`<sup>Optional</sup> <a name="os_profile_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.osProfileInput"></a>

```python
os_profile_input: VirtualMachineOsProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfile">VirtualMachineOsProfile</a>

---

##### `os_profile_linux_config_input`<sup>Optional</sup> <a name="os_profile_linux_config_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.osProfileLinuxConfigInput"></a>

```python
os_profile_linux_config_input: VirtualMachineOsProfileLinuxConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfig">VirtualMachineOsProfileLinuxConfig</a>

---

##### `os_profile_secrets_input`<sup>Optional</sup> <a name="os_profile_secrets_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.osProfileSecretsInput"></a>

```python
os_profile_secrets_input: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileSecrets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecrets">VirtualMachineOsProfileSecrets</a>]]

---

##### `os_profile_windows_config_input`<sup>Optional</sup> <a name="os_profile_windows_config_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.osProfileWindowsConfigInput"></a>

```python
os_profile_windows_config_input: VirtualMachineOsProfileWindowsConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfig">VirtualMachineOsProfileWindowsConfig</a>

---

##### `plan_input`<sup>Optional</sup> <a name="plan_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.planInput"></a>

```python
plan_input: VirtualMachinePlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlan">VirtualMachinePlan</a>

---

##### `primary_network_interface_id_input`<sup>Optional</sup> <a name="primary_network_interface_id_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.primaryNetworkInterfaceIdInput"></a>

```python
primary_network_interface_id_input: str
```

- *Type:* str

---

##### `proximity_placement_group_id_input`<sup>Optional</sup> <a name="proximity_placement_group_id_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.proximityPlacementGroupIdInput"></a>

```python
proximity_placement_group_id_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `storage_data_disk_input`<sup>Optional</sup> <a name="storage_data_disk_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.storageDataDiskInput"></a>

```python
storage_data_disk_input: typing.Union[IResolvable, typing.List[VirtualMachineStorageDataDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk">VirtualMachineStorageDataDisk</a>]]

---

##### `storage_image_reference_input`<sup>Optional</sup> <a name="storage_image_reference_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.storageImageReferenceInput"></a>

```python
storage_image_reference_input: VirtualMachineStorageImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReference">VirtualMachineStorageImageReference</a>

---

##### `storage_os_disk_input`<sup>Optional</sup> <a name="storage_os_disk_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.storageOsDiskInput"></a>

```python
storage_os_disk_input: VirtualMachineStorageOsDisk
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk">VirtualMachineStorageOsDisk</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VirtualMachineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeouts">VirtualMachineTimeouts</a>]

---

##### `vm_size_input`<sup>Optional</sup> <a name="vm_size_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.vmSizeInput"></a>

```python
vm_size_input: str
```

- *Type:* str

---

##### `zones_input`<sup>Optional</sup> <a name="zones_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.zonesInput"></a>

```python
zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_set_id`<sup>Required</sup> <a name="availability_set_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.availabilitySetId"></a>

```python
availability_set_id: str
```

- *Type:* str

---

##### `delete_data_disks_on_termination`<sup>Required</sup> <a name="delete_data_disks_on_termination" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.deleteDataDisksOnTermination"></a>

```python
delete_data_disks_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_os_disk_on_termination`<sup>Required</sup> <a name="delete_os_disk_on_termination" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.deleteOsDiskOnTermination"></a>

```python
delete_os_disk_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_interface_ids`<sup>Required</sup> <a name="network_interface_ids" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.networkInterfaceIds"></a>

```python
network_interface_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `primary_network_interface_id`<sup>Required</sup> <a name="primary_network_interface_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.primaryNetworkInterfaceId"></a>

```python
primary_network_interface_id: str
```

- *Type:* str

---

##### `proximity_placement_group_id`<sup>Required</sup> <a name="proximity_placement_group_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.proximityPlacementGroupId"></a>

```python
proximity_placement_group_id: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineAdditionalCapabilities <a name="VirtualMachineAdditionalCapabilities" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilities.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineAdditionalCapabilities(
  ultra_ssd_enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilities.property.ultraSsdEnabled">ultra_ssd_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#ultra_ssd_enabled VirtualMachine#ultra_ssd_enabled}. |

---

##### `ultra_ssd_enabled`<sup>Required</sup> <a name="ultra_ssd_enabled" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilities.property.ultraSsdEnabled"></a>

```python
ultra_ssd_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#ultra_ssd_enabled VirtualMachine#ultra_ssd_enabled}.

---

### VirtualMachineBootDiagnostics <a name="VirtualMachineBootDiagnostics" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnostics.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineBootDiagnostics(
  enabled: typing.Union[bool, IResolvable],
  storage_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnostics.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#enabled VirtualMachine#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnostics.property.storageUri">storage_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#storage_uri VirtualMachine#storage_uri}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnostics.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#enabled VirtualMachine#enabled}.

---

##### `storage_uri`<sup>Required</sup> <a name="storage_uri" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnostics.property.storageUri"></a>

```python
storage_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#storage_uri VirtualMachine#storage_uri}.

---

### VirtualMachineConfig <a name="VirtualMachineConfig" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  network_interface_ids: typing.List[str],
  resource_group_name: str,
  storage_os_disk: VirtualMachineStorageOsDisk,
  vm_size: str,
  additional_capabilities: VirtualMachineAdditionalCapabilities = None,
  availability_set_id: str = None,
  boot_diagnostics: VirtualMachineBootDiagnostics = None,
  delete_data_disks_on_termination: typing.Union[bool, IResolvable] = None,
  delete_os_disk_on_termination: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: VirtualMachineIdentity = None,
  license_type: str = None,
  os_profile: VirtualMachineOsProfile = None,
  os_profile_linux_config: VirtualMachineOsProfileLinuxConfig = None,
  os_profile_secrets: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileSecrets]] = None,
  os_profile_windows_config: VirtualMachineOsProfileWindowsConfig = None,
  plan: VirtualMachinePlan = None,
  primary_network_interface_id: str = None,
  proximity_placement_group_id: str = None,
  storage_data_disk: typing.Union[IResolvable, typing.List[VirtualMachineStorageDataDisk]] = None,
  storage_image_reference: VirtualMachineStorageImageReference = None,
  tags: typing.Mapping[str] = None,
  timeouts: VirtualMachineTimeouts = None,
  zones: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#location VirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#name VirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.networkInterfaceIds">network_interface_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#network_interface_ids VirtualMachine#network_interface_ids}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#resource_group_name VirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.storageOsDisk">storage_os_disk</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk">VirtualMachineStorageOsDisk</a></code> | storage_os_disk block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.vmSize">vm_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#vm_size VirtualMachine#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.additionalCapabilities">additional_capabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilities">VirtualMachineAdditionalCapabilities</a></code> | additional_capabilities block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.availabilitySetId">availability_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#availability_set_id VirtualMachine#availability_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.bootDiagnostics">boot_diagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnostics">VirtualMachineBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.deleteDataDisksOnTermination">delete_data_disks_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#delete_data_disks_on_termination VirtualMachine#delete_data_disks_on_termination}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.deleteOsDiskOnTermination">delete_os_disk_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#delete_os_disk_on_termination VirtualMachine#delete_os_disk_on_termination}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#id VirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentity">VirtualMachineIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.licenseType">license_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#license_type VirtualMachine#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.osProfile">os_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfile">VirtualMachineOsProfile</a></code> | os_profile block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.osProfileLinuxConfig">os_profile_linux_config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfig">VirtualMachineOsProfileLinuxConfig</a></code> | os_profile_linux_config block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.osProfileSecrets">os_profile_secrets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecrets">VirtualMachineOsProfileSecrets</a>]]</code> | os_profile_secrets block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.osProfileWindowsConfig">os_profile_windows_config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfig">VirtualMachineOsProfileWindowsConfig</a></code> | os_profile_windows_config block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlan">VirtualMachinePlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.primaryNetworkInterfaceId">primary_network_interface_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#primary_network_interface_id VirtualMachine#primary_network_interface_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.proximityPlacementGroupId">proximity_placement_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#proximity_placement_group_id VirtualMachine#proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.storageDataDisk">storage_data_disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk">VirtualMachineStorageDataDisk</a>]]</code> | storage_data_disk block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.storageImageReference">storage_image_reference</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReference">VirtualMachineStorageImageReference</a></code> | storage_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#tags VirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeouts">VirtualMachineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#zones VirtualMachine#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#location VirtualMachine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#name VirtualMachine#name}.

---

##### `network_interface_ids`<sup>Required</sup> <a name="network_interface_ids" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.networkInterfaceIds"></a>

```python
network_interface_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#network_interface_ids VirtualMachine#network_interface_ids}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#resource_group_name VirtualMachine#resource_group_name}.

---

##### `storage_os_disk`<sup>Required</sup> <a name="storage_os_disk" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.storageOsDisk"></a>

```python
storage_os_disk: VirtualMachineStorageOsDisk
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk">VirtualMachineStorageOsDisk</a>

storage_os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#storage_os_disk VirtualMachine#storage_os_disk}

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#vm_size VirtualMachine#vm_size}.

---

##### `additional_capabilities`<sup>Optional</sup> <a name="additional_capabilities" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.additionalCapabilities"></a>

```python
additional_capabilities: VirtualMachineAdditionalCapabilities
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilities">VirtualMachineAdditionalCapabilities</a>

additional_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#additional_capabilities VirtualMachine#additional_capabilities}

---

##### `availability_set_id`<sup>Optional</sup> <a name="availability_set_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.availabilitySetId"></a>

```python
availability_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#availability_set_id VirtualMachine#availability_set_id}.

---

##### `boot_diagnostics`<sup>Optional</sup> <a name="boot_diagnostics" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.bootDiagnostics"></a>

```python
boot_diagnostics: VirtualMachineBootDiagnostics
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnostics">VirtualMachineBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#boot_diagnostics VirtualMachine#boot_diagnostics}

---

##### `delete_data_disks_on_termination`<sup>Optional</sup> <a name="delete_data_disks_on_termination" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.deleteDataDisksOnTermination"></a>

```python
delete_data_disks_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#delete_data_disks_on_termination VirtualMachine#delete_data_disks_on_termination}.

---

##### `delete_os_disk_on_termination`<sup>Optional</sup> <a name="delete_os_disk_on_termination" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.deleteOsDiskOnTermination"></a>

```python
delete_os_disk_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#delete_os_disk_on_termination VirtualMachine#delete_os_disk_on_termination}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#id VirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.identity"></a>

```python
identity: VirtualMachineIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentity">VirtualMachineIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#identity VirtualMachine#identity}

---

##### `license_type`<sup>Optional</sup> <a name="license_type" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#license_type VirtualMachine#license_type}.

---

##### `os_profile`<sup>Optional</sup> <a name="os_profile" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.osProfile"></a>

```python
os_profile: VirtualMachineOsProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfile">VirtualMachineOsProfile</a>

os_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#os_profile VirtualMachine#os_profile}

---

##### `os_profile_linux_config`<sup>Optional</sup> <a name="os_profile_linux_config" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.osProfileLinuxConfig"></a>

```python
os_profile_linux_config: VirtualMachineOsProfileLinuxConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfig">VirtualMachineOsProfileLinuxConfig</a>

os_profile_linux_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#os_profile_linux_config VirtualMachine#os_profile_linux_config}

---

##### `os_profile_secrets`<sup>Optional</sup> <a name="os_profile_secrets" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.osProfileSecrets"></a>

```python
os_profile_secrets: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileSecrets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecrets">VirtualMachineOsProfileSecrets</a>]]

os_profile_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#os_profile_secrets VirtualMachine#os_profile_secrets}

---

##### `os_profile_windows_config`<sup>Optional</sup> <a name="os_profile_windows_config" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.osProfileWindowsConfig"></a>

```python
os_profile_windows_config: VirtualMachineOsProfileWindowsConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfig">VirtualMachineOsProfileWindowsConfig</a>

os_profile_windows_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#os_profile_windows_config VirtualMachine#os_profile_windows_config}

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.plan"></a>

```python
plan: VirtualMachinePlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlan">VirtualMachinePlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#plan VirtualMachine#plan}

---

##### `primary_network_interface_id`<sup>Optional</sup> <a name="primary_network_interface_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.primaryNetworkInterfaceId"></a>

```python
primary_network_interface_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#primary_network_interface_id VirtualMachine#primary_network_interface_id}.

---

##### `proximity_placement_group_id`<sup>Optional</sup> <a name="proximity_placement_group_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.proximityPlacementGroupId"></a>

```python
proximity_placement_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#proximity_placement_group_id VirtualMachine#proximity_placement_group_id}.

---

##### `storage_data_disk`<sup>Optional</sup> <a name="storage_data_disk" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.storageDataDisk"></a>

```python
storage_data_disk: typing.Union[IResolvable, typing.List[VirtualMachineStorageDataDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk">VirtualMachineStorageDataDisk</a>]]

storage_data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#storage_data_disk VirtualMachine#storage_data_disk}

---

##### `storage_image_reference`<sup>Optional</sup> <a name="storage_image_reference" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.storageImageReference"></a>

```python
storage_image_reference: VirtualMachineStorageImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReference">VirtualMachineStorageImageReference</a>

storage_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#storage_image_reference VirtualMachine#storage_image_reference}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#tags VirtualMachine#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.timeouts"></a>

```python
timeouts: VirtualMachineTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeouts">VirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#timeouts VirtualMachine#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineConfig.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#zones VirtualMachine#zones}.

---

### VirtualMachineIdentity <a name="VirtualMachineIdentity" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#type VirtualMachine#type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#identity_ids VirtualMachine#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#type VirtualMachine#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#identity_ids VirtualMachine#identity_ids}.

---

### VirtualMachineOsProfile <a name="VirtualMachineOsProfile" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineOsProfile(
  admin_username: str,
  computer_name: str,
  admin_password: str = None,
  custom_data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfile.property.adminUsername">admin_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#admin_username VirtualMachine#admin_username}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfile.property.computerName">computer_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#computer_name VirtualMachine#computer_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfile.property.adminPassword">admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#admin_password VirtualMachine#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfile.property.customData">custom_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#custom_data VirtualMachine#custom_data}. |

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfile.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#admin_username VirtualMachine#admin_username}.

---

##### `computer_name`<sup>Required</sup> <a name="computer_name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfile.property.computerName"></a>

```python
computer_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#computer_name VirtualMachine#computer_name}.

---

##### `admin_password`<sup>Optional</sup> <a name="admin_password" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfile.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#admin_password VirtualMachine#admin_password}.

---

##### `custom_data`<sup>Optional</sup> <a name="custom_data" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfile.property.customData"></a>

```python
custom_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#custom_data VirtualMachine#custom_data}.

---

### VirtualMachineOsProfileLinuxConfig <a name="VirtualMachineOsProfileLinuxConfig" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineOsProfileLinuxConfig(
  disable_password_authentication: typing.Union[bool, IResolvable],
  ssh_keys: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileLinuxConfigSshKeys]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfig.property.disablePasswordAuthentication">disable_password_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#disable_password_authentication VirtualMachine#disable_password_authentication}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfig.property.sshKeys">ssh_keys</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys">VirtualMachineOsProfileLinuxConfigSshKeys</a>]]</code> | ssh_keys block. |

---

##### `disable_password_authentication`<sup>Required</sup> <a name="disable_password_authentication" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfig.property.disablePasswordAuthentication"></a>

```python
disable_password_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#disable_password_authentication VirtualMachine#disable_password_authentication}.

---

##### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfig.property.sshKeys"></a>

```python
ssh_keys: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileLinuxConfigSshKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys">VirtualMachineOsProfileLinuxConfigSshKeys</a>]]

ssh_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#ssh_keys VirtualMachine#ssh_keys}

---

### VirtualMachineOsProfileLinuxConfigSshKeys <a name="VirtualMachineOsProfileLinuxConfigSshKeys" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys(
  key_data: str,
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys.property.keyData">key_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#key_data VirtualMachine#key_data}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#path VirtualMachine#path}. |

---

##### `key_data`<sup>Required</sup> <a name="key_data" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys.property.keyData"></a>

```python
key_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#key_data VirtualMachine#key_data}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#path VirtualMachine#path}.

---

### VirtualMachineOsProfileSecrets <a name="VirtualMachineOsProfileSecrets" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecrets.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineOsProfileSecrets(
  source_vault_id: str,
  vault_certificates: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileSecretsVaultCertificates]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecrets.property.sourceVaultId">source_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#source_vault_id VirtualMachine#source_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecrets.property.vaultCertificates">vault_certificates</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates">VirtualMachineOsProfileSecretsVaultCertificates</a>]]</code> | vault_certificates block. |

---

##### `source_vault_id`<sup>Required</sup> <a name="source_vault_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecrets.property.sourceVaultId"></a>

```python
source_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#source_vault_id VirtualMachine#source_vault_id}.

---

##### `vault_certificates`<sup>Optional</sup> <a name="vault_certificates" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecrets.property.vaultCertificates"></a>

```python
vault_certificates: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileSecretsVaultCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates">VirtualMachineOsProfileSecretsVaultCertificates</a>]]

vault_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#vault_certificates VirtualMachine#vault_certificates}

---

### VirtualMachineOsProfileSecretsVaultCertificates <a name="VirtualMachineOsProfileSecretsVaultCertificates" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates(
  certificate_url: str,
  certificate_store: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates.property.certificateUrl">certificate_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#certificate_url VirtualMachine#certificate_url}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates.property.certificateStore">certificate_store</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#certificate_store VirtualMachine#certificate_store}. |

---

##### `certificate_url`<sup>Required</sup> <a name="certificate_url" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates.property.certificateUrl"></a>

```python
certificate_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#certificate_url VirtualMachine#certificate_url}.

---

##### `certificate_store`<sup>Optional</sup> <a name="certificate_store" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates.property.certificateStore"></a>

```python
certificate_store: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#certificate_store VirtualMachine#certificate_store}.

---

### VirtualMachineOsProfileWindowsConfig <a name="VirtualMachineOsProfileWindowsConfig" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineOsProfileWindowsConfig(
  additional_unattend_config: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig]] = None,
  enable_automatic_upgrades: typing.Union[bool, IResolvable] = None,
  provision_vm_agent: typing.Union[bool, IResolvable] = None,
  timezone: str = None,
  winrm: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileWindowsConfigWinrm]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.additionalUnattendConfig">additional_unattend_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig</a>]]</code> | additional_unattend_config block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.enableAutomaticUpgrades">enable_automatic_upgrades</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#enable_automatic_upgrades VirtualMachine#enable_automatic_upgrades}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.provisionVmAgent">provision_vm_agent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#provision_vm_agent VirtualMachine#provision_vm_agent}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#timezone VirtualMachine#timezone}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.winrm">winrm</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm">VirtualMachineOsProfileWindowsConfigWinrm</a>]]</code> | winrm block. |

---

##### `additional_unattend_config`<sup>Optional</sup> <a name="additional_unattend_config" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.additionalUnattendConfig"></a>

```python
additional_unattend_config: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig</a>]]

additional_unattend_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#additional_unattend_config VirtualMachine#additional_unattend_config}

---

##### `enable_automatic_upgrades`<sup>Optional</sup> <a name="enable_automatic_upgrades" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.enableAutomaticUpgrades"></a>

```python
enable_automatic_upgrades: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#enable_automatic_upgrades VirtualMachine#enable_automatic_upgrades}.

---

##### `provision_vm_agent`<sup>Optional</sup> <a name="provision_vm_agent" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.provisionVmAgent"></a>

```python
provision_vm_agent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#provision_vm_agent VirtualMachine#provision_vm_agent}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#timezone VirtualMachine#timezone}.

---

##### `winrm`<sup>Optional</sup> <a name="winrm" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfig.property.winrm"></a>

```python
winrm: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileWindowsConfigWinrm]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm">VirtualMachineOsProfileWindowsConfigWinrm</a>]]

winrm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#winrm VirtualMachine#winrm}

---

### VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig <a name="VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig(
  component: str,
  content: str,
  pass: str,
  setting_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.property.component">component</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#component VirtualMachine#component}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#content VirtualMachine#content}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.property.pass">pass</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#pass VirtualMachine#pass}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.property.settingName">setting_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#setting_name VirtualMachine#setting_name}. |

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.property.component"></a>

```python
component: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#component VirtualMachine#component}.

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#content VirtualMachine#content}.

---

##### `pass`<sup>Required</sup> <a name="pass" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.property.pass"></a>

```python
pass: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#pass VirtualMachine#pass}.

---

##### `setting_name`<sup>Required</sup> <a name="setting_name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig.property.settingName"></a>

```python
setting_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#setting_name VirtualMachine#setting_name}.

---

### VirtualMachineOsProfileWindowsConfigWinrm <a name="VirtualMachineOsProfileWindowsConfigWinrm" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm(
  protocol: str,
  certificate_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#protocol VirtualMachine#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm.property.certificateUrl">certificate_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#certificate_url VirtualMachine#certificate_url}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#protocol VirtualMachine#protocol}.

---

##### `certificate_url`<sup>Optional</sup> <a name="certificate_url" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm.property.certificateUrl"></a>

```python
certificate_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#certificate_url VirtualMachine#certificate_url}.

---

### VirtualMachinePlan <a name="VirtualMachinePlan" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlan.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachinePlan(
  name: str,
  product: str,
  publisher: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlan.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#name VirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlan.property.product">product</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#product VirtualMachine#product}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlan.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#publisher VirtualMachine#publisher}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlan.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#name VirtualMachine#name}.

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlan.property.product"></a>

```python
product: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#product VirtualMachine#product}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlan.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#publisher VirtualMachine#publisher}.

---

### VirtualMachineStorageDataDisk <a name="VirtualMachineStorageDataDisk" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineStorageDataDisk(
  create_option: str,
  lun: typing.Union[int, float],
  name: str,
  caching: str = None,
  disk_size_gb: typing.Union[int, float] = None,
  managed_disk_id: str = None,
  managed_disk_type: str = None,
  vhd_uri: str = None,
  write_accelerator_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk.property.createOption">create_option</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#create_option VirtualMachine#create_option}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk.property.lun">lun</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#lun VirtualMachine#lun}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#name VirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk.property.caching">caching</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#caching VirtualMachine#caching}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#disk_size_gb VirtualMachine#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk.property.managedDiskId">managed_disk_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#managed_disk_id VirtualMachine#managed_disk_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk.property.managedDiskType">managed_disk_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#managed_disk_type VirtualMachine#managed_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk.property.vhdUri">vhd_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#vhd_uri VirtualMachine#vhd_uri}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk.property.writeAcceleratorEnabled">write_accelerator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#write_accelerator_enabled VirtualMachine#write_accelerator_enabled}. |

---

##### `create_option`<sup>Required</sup> <a name="create_option" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk.property.createOption"></a>

```python
create_option: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#create_option VirtualMachine#create_option}.

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk.property.lun"></a>

```python
lun: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#lun VirtualMachine#lun}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#name VirtualMachine#name}.

---

##### `caching`<sup>Optional</sup> <a name="caching" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk.property.caching"></a>

```python
caching: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#caching VirtualMachine#caching}.

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#disk_size_gb VirtualMachine#disk_size_gb}.

---

##### `managed_disk_id`<sup>Optional</sup> <a name="managed_disk_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk.property.managedDiskId"></a>

```python
managed_disk_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#managed_disk_id VirtualMachine#managed_disk_id}.

---

##### `managed_disk_type`<sup>Optional</sup> <a name="managed_disk_type" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk.property.managedDiskType"></a>

```python
managed_disk_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#managed_disk_type VirtualMachine#managed_disk_type}.

---

##### `vhd_uri`<sup>Optional</sup> <a name="vhd_uri" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk.property.vhdUri"></a>

```python
vhd_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#vhd_uri VirtualMachine#vhd_uri}.

---

##### `write_accelerator_enabled`<sup>Optional</sup> <a name="write_accelerator_enabled" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk.property.writeAcceleratorEnabled"></a>

```python
write_accelerator_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#write_accelerator_enabled VirtualMachine#write_accelerator_enabled}.

---

### VirtualMachineStorageImageReference <a name="VirtualMachineStorageImageReference" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineStorageImageReference(
  id: str = None,
  offer: str = None,
  publisher: str = None,
  sku: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReference.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#id VirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReference.property.offer">offer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#offer VirtualMachine#offer}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReference.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#publisher VirtualMachine#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReference.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#sku VirtualMachine#sku}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReference.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#version VirtualMachine#version}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReference.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#id VirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `offer`<sup>Optional</sup> <a name="offer" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReference.property.offer"></a>

```python
offer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#offer VirtualMachine#offer}.

---

##### `publisher`<sup>Optional</sup> <a name="publisher" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#publisher VirtualMachine#publisher}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#sku VirtualMachine#sku}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReference.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#version VirtualMachine#version}.

---

### VirtualMachineStorageOsDisk <a name="VirtualMachineStorageOsDisk" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineStorageOsDisk(
  create_option: str,
  name: str,
  caching: str = None,
  disk_size_gb: typing.Union[int, float] = None,
  image_uri: str = None,
  managed_disk_id: str = None,
  managed_disk_type: str = None,
  os_type: str = None,
  vhd_uri: str = None,
  write_accelerator_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk.property.createOption">create_option</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#create_option VirtualMachine#create_option}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#name VirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk.property.caching">caching</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#caching VirtualMachine#caching}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#disk_size_gb VirtualMachine#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk.property.imageUri">image_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#image_uri VirtualMachine#image_uri}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk.property.managedDiskId">managed_disk_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#managed_disk_id VirtualMachine#managed_disk_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk.property.managedDiskType">managed_disk_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#managed_disk_type VirtualMachine#managed_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk.property.osType">os_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#os_type VirtualMachine#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk.property.vhdUri">vhd_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#vhd_uri VirtualMachine#vhd_uri}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk.property.writeAcceleratorEnabled">write_accelerator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#write_accelerator_enabled VirtualMachine#write_accelerator_enabled}. |

---

##### `create_option`<sup>Required</sup> <a name="create_option" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk.property.createOption"></a>

```python
create_option: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#create_option VirtualMachine#create_option}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#name VirtualMachine#name}.

---

##### `caching`<sup>Optional</sup> <a name="caching" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk.property.caching"></a>

```python
caching: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#caching VirtualMachine#caching}.

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#disk_size_gb VirtualMachine#disk_size_gb}.

---

##### `image_uri`<sup>Optional</sup> <a name="image_uri" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#image_uri VirtualMachine#image_uri}.

---

##### `managed_disk_id`<sup>Optional</sup> <a name="managed_disk_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk.property.managedDiskId"></a>

```python
managed_disk_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#managed_disk_id VirtualMachine#managed_disk_id}.

---

##### `managed_disk_type`<sup>Optional</sup> <a name="managed_disk_type" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk.property.managedDiskType"></a>

```python
managed_disk_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#managed_disk_type VirtualMachine#managed_disk_type}.

---

##### `os_type`<sup>Optional</sup> <a name="os_type" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk.property.osType"></a>

```python
os_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#os_type VirtualMachine#os_type}.

---

##### `vhd_uri`<sup>Optional</sup> <a name="vhd_uri" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk.property.vhdUri"></a>

```python
vhd_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#vhd_uri VirtualMachine#vhd_uri}.

---

##### `write_accelerator_enabled`<sup>Optional</sup> <a name="write_accelerator_enabled" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk.property.writeAcceleratorEnabled"></a>

```python
write_accelerator_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#write_accelerator_enabled VirtualMachine#write_accelerator_enabled}.

---

### VirtualMachineTimeouts <a name="VirtualMachineTimeouts" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#create VirtualMachine#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#delete VirtualMachine#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#read VirtualMachine#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#update VirtualMachine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#create VirtualMachine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#delete VirtualMachine#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#read VirtualMachine#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/virtual_machine#update VirtualMachine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineAdditionalCapabilitiesOutputReference <a name="VirtualMachineAdditionalCapabilitiesOutputReference" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput">ultra_ssd_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled">ultra_ssd_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilities">VirtualMachineAdditionalCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ultra_ssd_enabled_input`<sup>Optional</sup> <a name="ultra_ssd_enabled_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput"></a>

```python
ultra_ssd_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ultra_ssd_enabled`<sup>Required</sup> <a name="ultra_ssd_enabled" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled"></a>

```python
ultra_ssd_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachineAdditionalCapabilities
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineAdditionalCapabilities">VirtualMachineAdditionalCapabilities</a>

---


### VirtualMachineBootDiagnosticsOutputReference <a name="VirtualMachineBootDiagnosticsOutputReference" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineBootDiagnosticsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.storageUriInput">storage_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.storageUri">storage_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnostics">VirtualMachineBootDiagnostics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_uri_input`<sup>Optional</sup> <a name="storage_uri_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.storageUriInput"></a>

```python
storage_uri_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_uri`<sup>Required</sup> <a name="storage_uri" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.storageUri"></a>

```python
storage_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnosticsOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachineBootDiagnostics
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineBootDiagnostics">VirtualMachineBootDiagnostics</a>

---


### VirtualMachineIdentityOutputReference <a name="VirtualMachineIdentityOutputReference" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentity">VirtualMachineIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentityOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachineIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineIdentity">VirtualMachineIdentity</a>

---


### VirtualMachineOsProfileLinuxConfigOutputReference <a name="VirtualMachineOsProfileLinuxConfigOutputReference" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.putSshKeys">put_ssh_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.resetSshKeys">reset_ssh_keys</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ssh_keys` <a name="put_ssh_keys" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.putSshKeys"></a>

```python
def put_ssh_keys(
  value: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileLinuxConfigSshKeys]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.putSshKeys.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys">VirtualMachineOsProfileLinuxConfigSshKeys</a>]]

---

##### `reset_ssh_keys` <a name="reset_ssh_keys" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.resetSshKeys"></a>

```python
def reset_ssh_keys() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.sshKeys">ssh_keys</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList">VirtualMachineOsProfileLinuxConfigSshKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.disablePasswordAuthenticationInput">disable_password_authentication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.sshKeysInput">ssh_keys_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys">VirtualMachineOsProfileLinuxConfigSshKeys</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.disablePasswordAuthentication">disable_password_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfig">VirtualMachineOsProfileLinuxConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.sshKeys"></a>

```python
ssh_keys: VirtualMachineOsProfileLinuxConfigSshKeysList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList">VirtualMachineOsProfileLinuxConfigSshKeysList</a>

---

##### `disable_password_authentication_input`<sup>Optional</sup> <a name="disable_password_authentication_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.disablePasswordAuthenticationInput"></a>

```python
disable_password_authentication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssh_keys_input`<sup>Optional</sup> <a name="ssh_keys_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.sshKeysInput"></a>

```python
ssh_keys_input: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileLinuxConfigSshKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys">VirtualMachineOsProfileLinuxConfigSshKeys</a>]]

---

##### `disable_password_authentication`<sup>Required</sup> <a name="disable_password_authentication" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.disablePasswordAuthentication"></a>

```python
disable_password_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachineOsProfileLinuxConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfig">VirtualMachineOsProfileLinuxConfig</a>

---


### VirtualMachineOsProfileLinuxConfigSshKeysList <a name="VirtualMachineOsProfileLinuxConfigSshKeysList" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualMachineOsProfileLinuxConfigSshKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys">VirtualMachineOsProfileLinuxConfigSshKeys</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileLinuxConfigSshKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys">VirtualMachineOsProfileLinuxConfigSshKeys</a>]]

---


### VirtualMachineOsProfileLinuxConfigSshKeysOutputReference <a name="VirtualMachineOsProfileLinuxConfigSshKeysOutputReference" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.keyDataInput">key_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.keyData">key_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys">VirtualMachineOsProfileLinuxConfigSshKeys</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_data_input`<sup>Optional</sup> <a name="key_data_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.keyDataInput"></a>

```python
key_data_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `key_data`<sup>Required</sup> <a name="key_data" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.keyData"></a>

```python
key_data: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeysOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualMachineOsProfileLinuxConfigSshKeys]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileLinuxConfigSshKeys">VirtualMachineOsProfileLinuxConfigSshKeys</a>]

---


### VirtualMachineOsProfileOutputReference <a name="VirtualMachineOsProfileOutputReference" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineOsProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.resetAdminPassword">reset_admin_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.resetCustomData">reset_custom_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_admin_password` <a name="reset_admin_password" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.resetAdminPassword"></a>

```python
def reset_admin_password() -> None
```

##### `reset_custom_data` <a name="reset_custom_data" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.resetCustomData"></a>

```python
def reset_custom_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.property.adminPasswordInput">admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.property.adminUsernameInput">admin_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.property.computerNameInput">computer_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.property.customDataInput">custom_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.property.adminUsername">admin_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.property.computerName">computer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.property.customData">custom_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfile">VirtualMachineOsProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_password_input`<sup>Optional</sup> <a name="admin_password_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.property.adminPasswordInput"></a>

```python
admin_password_input: str
```

- *Type:* str

---

##### `admin_username_input`<sup>Optional</sup> <a name="admin_username_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.property.adminUsernameInput"></a>

```python
admin_username_input: str
```

- *Type:* str

---

##### `computer_name_input`<sup>Optional</sup> <a name="computer_name_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.property.computerNameInput"></a>

```python
computer_name_input: str
```

- *Type:* str

---

##### `custom_data_input`<sup>Optional</sup> <a name="custom_data_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.property.customDataInput"></a>

```python
custom_data_input: str
```

- *Type:* str

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

---

##### `computer_name`<sup>Required</sup> <a name="computer_name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.property.computerName"></a>

```python
computer_name: str
```

- *Type:* str

---

##### `custom_data`<sup>Required</sup> <a name="custom_data" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.property.customData"></a>

```python
custom_data: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachineOsProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfile">VirtualMachineOsProfile</a>

---


### VirtualMachineOsProfileSecretsList <a name="VirtualMachineOsProfileSecretsList" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineOsProfileSecretsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualMachineOsProfileSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecrets">VirtualMachineOsProfileSecrets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileSecrets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecrets">VirtualMachineOsProfileSecrets</a>]]

---


### VirtualMachineOsProfileSecretsOutputReference <a name="VirtualMachineOsProfileSecretsOutputReference" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineOsProfileSecretsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.putVaultCertificates">put_vault_certificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.resetVaultCertificates">reset_vault_certificates</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vault_certificates` <a name="put_vault_certificates" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.putVaultCertificates"></a>

```python
def put_vault_certificates(
  value: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileSecretsVaultCertificates]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.putVaultCertificates.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates">VirtualMachineOsProfileSecretsVaultCertificates</a>]]

---

##### `reset_vault_certificates` <a name="reset_vault_certificates" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.resetVaultCertificates"></a>

```python
def reset_vault_certificates() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.vaultCertificates">vault_certificates</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList">VirtualMachineOsProfileSecretsVaultCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.sourceVaultIdInput">source_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.vaultCertificatesInput">vault_certificates_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates">VirtualMachineOsProfileSecretsVaultCertificates</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.sourceVaultId">source_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecrets">VirtualMachineOsProfileSecrets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vault_certificates`<sup>Required</sup> <a name="vault_certificates" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.vaultCertificates"></a>

```python
vault_certificates: VirtualMachineOsProfileSecretsVaultCertificatesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList">VirtualMachineOsProfileSecretsVaultCertificatesList</a>

---

##### `source_vault_id_input`<sup>Optional</sup> <a name="source_vault_id_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.sourceVaultIdInput"></a>

```python
source_vault_id_input: str
```

- *Type:* str

---

##### `vault_certificates_input`<sup>Optional</sup> <a name="vault_certificates_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.vaultCertificatesInput"></a>

```python
vault_certificates_input: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileSecretsVaultCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates">VirtualMachineOsProfileSecretsVaultCertificates</a>]]

---

##### `source_vault_id`<sup>Required</sup> <a name="source_vault_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.sourceVaultId"></a>

```python
source_vault_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualMachineOsProfileSecrets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecrets">VirtualMachineOsProfileSecrets</a>]

---


### VirtualMachineOsProfileSecretsVaultCertificatesList <a name="VirtualMachineOsProfileSecretsVaultCertificatesList" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualMachineOsProfileSecretsVaultCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates">VirtualMachineOsProfileSecretsVaultCertificates</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileSecretsVaultCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates">VirtualMachineOsProfileSecretsVaultCertificates</a>]]

---


### VirtualMachineOsProfileSecretsVaultCertificatesOutputReference <a name="VirtualMachineOsProfileSecretsVaultCertificatesOutputReference" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.resetCertificateStore">reset_certificate_store</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_store` <a name="reset_certificate_store" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.resetCertificateStore"></a>

```python
def reset_certificate_store() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.certificateStoreInput">certificate_store_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.certificateUrlInput">certificate_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.certificateStore">certificate_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.certificateUrl">certificate_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates">VirtualMachineOsProfileSecretsVaultCertificates</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_store_input`<sup>Optional</sup> <a name="certificate_store_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.certificateStoreInput"></a>

```python
certificate_store_input: str
```

- *Type:* str

---

##### `certificate_url_input`<sup>Optional</sup> <a name="certificate_url_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.certificateUrlInput"></a>

```python
certificate_url_input: str
```

- *Type:* str

---

##### `certificate_store`<sup>Required</sup> <a name="certificate_store" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.certificateStore"></a>

```python
certificate_store: str
```

- *Type:* str

---

##### `certificate_url`<sup>Required</sup> <a name="certificate_url" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.certificateUrl"></a>

```python
certificate_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualMachineOsProfileSecretsVaultCertificates]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileSecretsVaultCertificates">VirtualMachineOsProfileSecretsVaultCertificates</a>]

---


### VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList <a name="VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig</a>]]

---


### VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference <a name="VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.componentInput">component_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.passInput">pass_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.settingNameInput">setting_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.component">component</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.pass">pass</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.settingName">setting_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component_input`<sup>Optional</sup> <a name="component_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.componentInput"></a>

```python
component_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `pass_input`<sup>Optional</sup> <a name="pass_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.passInput"></a>

```python
pass_input: str
```

- *Type:* str

---

##### `setting_name_input`<sup>Optional</sup> <a name="setting_name_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.settingNameInput"></a>

```python
setting_name_input: str
```

- *Type:* str

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.component"></a>

```python
component: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `pass`<sup>Required</sup> <a name="pass" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.pass"></a>

```python
pass: str
```

- *Type:* str

---

##### `setting_name`<sup>Required</sup> <a name="setting_name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.settingName"></a>

```python
setting_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig</a>]

---


### VirtualMachineOsProfileWindowsConfigOutputReference <a name="VirtualMachineOsProfileWindowsConfigOutputReference" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.putAdditionalUnattendConfig">put_additional_unattend_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.putWinrm">put_winrm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetAdditionalUnattendConfig">reset_additional_unattend_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetEnableAutomaticUpgrades">reset_enable_automatic_upgrades</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetProvisionVmAgent">reset_provision_vm_agent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetTimezone">reset_timezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetWinrm">reset_winrm</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_additional_unattend_config` <a name="put_additional_unattend_config" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.putAdditionalUnattendConfig"></a>

```python
def put_additional_unattend_config(
  value: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.putAdditionalUnattendConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig</a>]]

---

##### `put_winrm` <a name="put_winrm" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.putWinrm"></a>

```python
def put_winrm(
  value: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileWindowsConfigWinrm]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.putWinrm.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm">VirtualMachineOsProfileWindowsConfigWinrm</a>]]

---

##### `reset_additional_unattend_config` <a name="reset_additional_unattend_config" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetAdditionalUnattendConfig"></a>

```python
def reset_additional_unattend_config() -> None
```

##### `reset_enable_automatic_upgrades` <a name="reset_enable_automatic_upgrades" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetEnableAutomaticUpgrades"></a>

```python
def reset_enable_automatic_upgrades() -> None
```

##### `reset_provision_vm_agent` <a name="reset_provision_vm_agent" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetProvisionVmAgent"></a>

```python
def reset_provision_vm_agent() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetTimezone"></a>

```python
def reset_timezone() -> None
```

##### `reset_winrm` <a name="reset_winrm" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.resetWinrm"></a>

```python
def reset_winrm() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.additionalUnattendConfig">additional_unattend_config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.winrm">winrm</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList">VirtualMachineOsProfileWindowsConfigWinrmList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.additionalUnattendConfigInput">additional_unattend_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.enableAutomaticUpgradesInput">enable_automatic_upgrades_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.provisionVmAgentInput">provision_vm_agent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.winrmInput">winrm_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm">VirtualMachineOsProfileWindowsConfigWinrm</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.enableAutomaticUpgrades">enable_automatic_upgrades</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.provisionVmAgent">provision_vm_agent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfig">VirtualMachineOsProfileWindowsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_unattend_config`<sup>Required</sup> <a name="additional_unattend_config" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.additionalUnattendConfig"></a>

```python
additional_unattend_config: VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList</a>

---

##### `winrm`<sup>Required</sup> <a name="winrm" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.winrm"></a>

```python
winrm: VirtualMachineOsProfileWindowsConfigWinrmList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList">VirtualMachineOsProfileWindowsConfigWinrmList</a>

---

##### `additional_unattend_config_input`<sup>Optional</sup> <a name="additional_unattend_config_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.additionalUnattendConfigInput"></a>

```python
additional_unattend_config_input: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig">VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig</a>]]

---

##### `enable_automatic_upgrades_input`<sup>Optional</sup> <a name="enable_automatic_upgrades_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.enableAutomaticUpgradesInput"></a>

```python
enable_automatic_upgrades_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `provision_vm_agent_input`<sup>Optional</sup> <a name="provision_vm_agent_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.provisionVmAgentInput"></a>

```python
provision_vm_agent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `winrm_input`<sup>Optional</sup> <a name="winrm_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.winrmInput"></a>

```python
winrm_input: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileWindowsConfigWinrm]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm">VirtualMachineOsProfileWindowsConfigWinrm</a>]]

---

##### `enable_automatic_upgrades`<sup>Required</sup> <a name="enable_automatic_upgrades" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.enableAutomaticUpgrades"></a>

```python
enable_automatic_upgrades: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `provision_vm_agent`<sup>Required</sup> <a name="provision_vm_agent" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.provisionVmAgent"></a>

```python
provision_vm_agent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachineOsProfileWindowsConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfig">VirtualMachineOsProfileWindowsConfig</a>

---


### VirtualMachineOsProfileWindowsConfigWinrmList <a name="VirtualMachineOsProfileWindowsConfigWinrmList" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualMachineOsProfileWindowsConfigWinrmOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm">VirtualMachineOsProfileWindowsConfigWinrm</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualMachineOsProfileWindowsConfigWinrm]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm">VirtualMachineOsProfileWindowsConfigWinrm</a>]]

---


### VirtualMachineOsProfileWindowsConfigWinrmOutputReference <a name="VirtualMachineOsProfileWindowsConfigWinrmOutputReference" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.resetCertificateUrl">reset_certificate_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_url` <a name="reset_certificate_url" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.resetCertificateUrl"></a>

```python
def reset_certificate_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.certificateUrlInput">certificate_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.certificateUrl">certificate_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm">VirtualMachineOsProfileWindowsConfigWinrm</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_url_input`<sup>Optional</sup> <a name="certificate_url_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.certificateUrlInput"></a>

```python
certificate_url_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `certificate_url`<sup>Required</sup> <a name="certificate_url" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.certificateUrl"></a>

```python
certificate_url: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrmOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualMachineOsProfileWindowsConfigWinrm]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineOsProfileWindowsConfigWinrm">VirtualMachineOsProfileWindowsConfigWinrm</a>]

---


### VirtualMachinePlanOutputReference <a name="VirtualMachinePlanOutputReference" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachinePlanOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.property.productInput">product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlan">VirtualMachinePlan</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `product_input`<sup>Optional</sup> <a name="product_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.property.productInput"></a>

```python
product_input: str
```

- *Type:* str

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlanOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachinePlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachinePlan">VirtualMachinePlan</a>

---


### VirtualMachineStorageDataDiskList <a name="VirtualMachineStorageDataDiskList" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineStorageDataDiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualMachineStorageDataDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk">VirtualMachineStorageDataDisk</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualMachineStorageDataDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk">VirtualMachineStorageDataDisk</a>]]

---


### VirtualMachineStorageDataDiskOutputReference <a name="VirtualMachineStorageDataDiskOutputReference" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineStorageDataDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetCaching">reset_caching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetDiskSizeGb">reset_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetManagedDiskId">reset_managed_disk_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetManagedDiskType">reset_managed_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetVhdUri">reset_vhd_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetWriteAcceleratorEnabled">reset_write_accelerator_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_caching` <a name="reset_caching" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetCaching"></a>

```python
def reset_caching() -> None
```

##### `reset_disk_size_gb` <a name="reset_disk_size_gb" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetDiskSizeGb"></a>

```python
def reset_disk_size_gb() -> None
```

##### `reset_managed_disk_id` <a name="reset_managed_disk_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetManagedDiskId"></a>

```python
def reset_managed_disk_id() -> None
```

##### `reset_managed_disk_type` <a name="reset_managed_disk_type" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetManagedDiskType"></a>

```python
def reset_managed_disk_type() -> None
```

##### `reset_vhd_uri` <a name="reset_vhd_uri" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetVhdUri"></a>

```python
def reset_vhd_uri() -> None
```

##### `reset_write_accelerator_enabled` <a name="reset_write_accelerator_enabled" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.resetWriteAcceleratorEnabled"></a>

```python
def reset_write_accelerator_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.cachingInput">caching_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.createOptionInput">create_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.lunInput">lun_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.managedDiskIdInput">managed_disk_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.managedDiskTypeInput">managed_disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.vhdUriInput">vhd_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.writeAcceleratorEnabledInput">write_accelerator_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.caching">caching</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.createOption">create_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.lun">lun</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.managedDiskId">managed_disk_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.managedDiskType">managed_disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.vhdUri">vhd_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.writeAcceleratorEnabled">write_accelerator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk">VirtualMachineStorageDataDisk</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `caching_input`<sup>Optional</sup> <a name="caching_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.cachingInput"></a>

```python
caching_input: str
```

- *Type:* str

---

##### `create_option_input`<sup>Optional</sup> <a name="create_option_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.createOptionInput"></a>

```python
create_option_input: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lun_input`<sup>Optional</sup> <a name="lun_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.lunInput"></a>

```python
lun_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `managed_disk_id_input`<sup>Optional</sup> <a name="managed_disk_id_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.managedDiskIdInput"></a>

```python
managed_disk_id_input: str
```

- *Type:* str

---

##### `managed_disk_type_input`<sup>Optional</sup> <a name="managed_disk_type_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.managedDiskTypeInput"></a>

```python
managed_disk_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `vhd_uri_input`<sup>Optional</sup> <a name="vhd_uri_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.vhdUriInput"></a>

```python
vhd_uri_input: str
```

- *Type:* str

---

##### `write_accelerator_enabled_input`<sup>Optional</sup> <a name="write_accelerator_enabled_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.writeAcceleratorEnabledInput"></a>

```python
write_accelerator_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.caching"></a>

```python
caching: str
```

- *Type:* str

---

##### `create_option`<sup>Required</sup> <a name="create_option" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.createOption"></a>

```python
create_option: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.lun"></a>

```python
lun: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `managed_disk_id`<sup>Required</sup> <a name="managed_disk_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.managedDiskId"></a>

```python
managed_disk_id: str
```

- *Type:* str

---

##### `managed_disk_type`<sup>Required</sup> <a name="managed_disk_type" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.managedDiskType"></a>

```python
managed_disk_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `vhd_uri`<sup>Required</sup> <a name="vhd_uri" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.vhdUri"></a>

```python
vhd_uri: str
```

- *Type:* str

---

##### `write_accelerator_enabled`<sup>Required</sup> <a name="write_accelerator_enabled" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.writeAcceleratorEnabled"></a>

```python
write_accelerator_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDiskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualMachineStorageDataDisk]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageDataDisk">VirtualMachineStorageDataDisk</a>]

---


### VirtualMachineStorageImageReferenceOutputReference <a name="VirtualMachineStorageImageReferenceOutputReference" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineStorageImageReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetOffer">reset_offer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetPublisher">reset_publisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetSku">reset_sku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_offer` <a name="reset_offer" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetOffer"></a>

```python
def reset_offer() -> None
```

##### `reset_publisher` <a name="reset_publisher" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetPublisher"></a>

```python
def reset_publisher() -> None
```

##### `reset_sku` <a name="reset_sku" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetSku"></a>

```python
def reset_sku() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.offerInput">offer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.offer">offer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReference">VirtualMachineStorageImageReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `offer_input`<sup>Optional</sup> <a name="offer_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.offerInput"></a>

```python
offer_input: str
```

- *Type:* str

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.offer"></a>

```python
offer: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReferenceOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachineStorageImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageImageReference">VirtualMachineStorageImageReference</a>

---


### VirtualMachineStorageOsDiskOutputReference <a name="VirtualMachineStorageOsDiskOutputReference" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineStorageOsDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetCaching">reset_caching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetDiskSizeGb">reset_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetImageUri">reset_image_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetManagedDiskId">reset_managed_disk_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetManagedDiskType">reset_managed_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetOsType">reset_os_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetVhdUri">reset_vhd_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetWriteAcceleratorEnabled">reset_write_accelerator_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_caching` <a name="reset_caching" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetCaching"></a>

```python
def reset_caching() -> None
```

##### `reset_disk_size_gb` <a name="reset_disk_size_gb" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetDiskSizeGb"></a>

```python
def reset_disk_size_gb() -> None
```

##### `reset_image_uri` <a name="reset_image_uri" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetImageUri"></a>

```python
def reset_image_uri() -> None
```

##### `reset_managed_disk_id` <a name="reset_managed_disk_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetManagedDiskId"></a>

```python
def reset_managed_disk_id() -> None
```

##### `reset_managed_disk_type` <a name="reset_managed_disk_type" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetManagedDiskType"></a>

```python
def reset_managed_disk_type() -> None
```

##### `reset_os_type` <a name="reset_os_type" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetOsType"></a>

```python
def reset_os_type() -> None
```

##### `reset_vhd_uri` <a name="reset_vhd_uri" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetVhdUri"></a>

```python
def reset_vhd_uri() -> None
```

##### `reset_write_accelerator_enabled` <a name="reset_write_accelerator_enabled" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.resetWriteAcceleratorEnabled"></a>

```python
def reset_write_accelerator_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.cachingInput">caching_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.createOptionInput">create_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.imageUriInput">image_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.managedDiskIdInput">managed_disk_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.managedDiskTypeInput">managed_disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.osTypeInput">os_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.vhdUriInput">vhd_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.writeAcceleratorEnabledInput">write_accelerator_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.caching">caching</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.createOption">create_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.managedDiskId">managed_disk_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.managedDiskType">managed_disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.osType">os_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.vhdUri">vhd_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.writeAcceleratorEnabled">write_accelerator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk">VirtualMachineStorageOsDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `caching_input`<sup>Optional</sup> <a name="caching_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.cachingInput"></a>

```python
caching_input: str
```

- *Type:* str

---

##### `create_option_input`<sup>Optional</sup> <a name="create_option_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.createOptionInput"></a>

```python
create_option_input: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `image_uri_input`<sup>Optional</sup> <a name="image_uri_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.imageUriInput"></a>

```python
image_uri_input: str
```

- *Type:* str

---

##### `managed_disk_id_input`<sup>Optional</sup> <a name="managed_disk_id_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.managedDiskIdInput"></a>

```python
managed_disk_id_input: str
```

- *Type:* str

---

##### `managed_disk_type_input`<sup>Optional</sup> <a name="managed_disk_type_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.managedDiskTypeInput"></a>

```python
managed_disk_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `os_type_input`<sup>Optional</sup> <a name="os_type_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.osTypeInput"></a>

```python
os_type_input: str
```

- *Type:* str

---

##### `vhd_uri_input`<sup>Optional</sup> <a name="vhd_uri_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.vhdUriInput"></a>

```python
vhd_uri_input: str
```

- *Type:* str

---

##### `write_accelerator_enabled_input`<sup>Optional</sup> <a name="write_accelerator_enabled_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.writeAcceleratorEnabledInput"></a>

```python
write_accelerator_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.caching"></a>

```python
caching: str
```

- *Type:* str

---

##### `create_option`<sup>Required</sup> <a name="create_option" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.createOption"></a>

```python
create_option: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `managed_disk_id`<sup>Required</sup> <a name="managed_disk_id" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.managedDiskId"></a>

```python
managed_disk_id: str
```

- *Type:* str

---

##### `managed_disk_type`<sup>Required</sup> <a name="managed_disk_type" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.managedDiskType"></a>

```python
managed_disk_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.osType"></a>

```python
os_type: str
```

- *Type:* str

---

##### `vhd_uri`<sup>Required</sup> <a name="vhd_uri" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.vhdUri"></a>

```python
vhd_uri: str
```

- *Type:* str

---

##### `write_accelerator_enabled`<sup>Required</sup> <a name="write_accelerator_enabled" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.writeAcceleratorEnabled"></a>

```python
write_accelerator_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDiskOutputReference.property.internalValue"></a>

```python
internal_value: VirtualMachineStorageOsDisk
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineStorageOsDisk">VirtualMachineStorageOsDisk</a>

---


### VirtualMachineTimeoutsOutputReference <a name="VirtualMachineTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_machine

virtualMachine.VirtualMachineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeouts">VirtualMachineTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualMachineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualMachine.VirtualMachineTimeouts">VirtualMachineTimeouts</a>]

---



