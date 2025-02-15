# `linuxVirtualMachineScaleSet` Submodule <a name="`linuxVirtualMachineScaleSet` Submodule" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LinuxVirtualMachineScaleSet <a name="LinuxVirtualMachineScaleSet" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set azurerm_linux_virtual_machine_scale_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  admin_username: str,
  location: str,
  name: str,
  network_interface: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterface]],
  os_disk: LinuxVirtualMachineScaleSetOsDisk,
  resource_group_name: str,
  sku: str,
  additional_capabilities: LinuxVirtualMachineScaleSetAdditionalCapabilities = None,
  admin_password: str = None,
  admin_ssh_key: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetAdminSshKey]] = None,
  automatic_instance_repair: LinuxVirtualMachineScaleSetAutomaticInstanceRepair = None,
  automatic_os_upgrade_policy: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy = None,
  boot_diagnostics: LinuxVirtualMachineScaleSetBootDiagnostics = None,
  capacity_reservation_group_id: str = None,
  computer_name_prefix: str = None,
  custom_data: str = None,
  data_disk: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetDataDisk]] = None,
  disable_password_authentication: typing.Union[bool, IResolvable] = None,
  do_not_run_extensions_on_overprovisioned_machines: typing.Union[bool, IResolvable] = None,
  edge_zone: str = None,
  encryption_at_host_enabled: typing.Union[bool, IResolvable] = None,
  eviction_policy: str = None,
  extension: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetExtension]] = None,
  extension_operations_enabled: typing.Union[bool, IResolvable] = None,
  extensions_time_budget: str = None,
  gallery_application: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetGalleryApplication]] = None,
  health_probe_id: str = None,
  host_group_id: str = None,
  id: str = None,
  identity: LinuxVirtualMachineScaleSetIdentity = None,
  instances: typing.Union[int, float] = None,
  max_bid_price: typing.Union[int, float] = None,
  overprovision: typing.Union[bool, IResolvable] = None,
  plan: LinuxVirtualMachineScaleSetPlan = None,
  platform_fault_domain_count: typing.Union[int, float] = None,
  priority: str = None,
  provision_vm_agent: typing.Union[bool, IResolvable] = None,
  proximity_placement_group_id: str = None,
  rolling_upgrade_policy: LinuxVirtualMachineScaleSetRollingUpgradePolicy = None,
  scale_in: LinuxVirtualMachineScaleSetScaleIn = None,
  secret: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetSecret]] = None,
  secure_boot_enabled: typing.Union[bool, IResolvable] = None,
  single_placement_group: typing.Union[bool, IResolvable] = None,
  source_image_id: str = None,
  source_image_reference: LinuxVirtualMachineScaleSetSourceImageReference = None,
  spot_restore: LinuxVirtualMachineScaleSetSpotRestore = None,
  tags: typing.Mapping[str] = None,
  termination_notification: LinuxVirtualMachineScaleSetTerminationNotification = None,
  timeouts: LinuxVirtualMachineScaleSetTimeouts = None,
  upgrade_mode: str = None,
  user_data: str = None,
  vtpm_enabled: typing.Union[bool, IResolvable] = None,
  zone_balance: typing.Union[bool, IResolvable] = None,
  zones: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.adminUsername">admin_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#admin_username LinuxVirtualMachineScaleSet#admin_username}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#location LinuxVirtualMachineScaleSet#location}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface">LinuxVirtualMachineScaleSetNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.osDisk">os_disk</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk">LinuxVirtualMachineScaleSetOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#resource_group_name LinuxVirtualMachineScaleSet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#sku LinuxVirtualMachineScaleSet#sku}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.additionalCapabilities">additional_capabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities">LinuxVirtualMachineScaleSetAdditionalCapabilities</a></code> | additional_capabilities block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.adminPassword">admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#admin_password LinuxVirtualMachineScaleSet#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.adminSshKey">admin_ssh_key</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey">LinuxVirtualMachineScaleSetAdminSshKey</a>]]</code> | admin_ssh_key block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.automaticInstanceRepair">automatic_instance_repair</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair">LinuxVirtualMachineScaleSetAutomaticInstanceRepair</a></code> | automatic_instance_repair block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.automaticOsUpgradePolicy">automatic_os_upgrade_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy">LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy</a></code> | automatic_os_upgrade_policy block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.bootDiagnostics">boot_diagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics">LinuxVirtualMachineScaleSetBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.capacityReservationGroupId">capacity_reservation_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#capacity_reservation_group_id LinuxVirtualMachineScaleSet#capacity_reservation_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.computerNamePrefix">computer_name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#computer_name_prefix LinuxVirtualMachineScaleSet#computer_name_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.customData">custom_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#custom_data LinuxVirtualMachineScaleSet#custom_data}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.dataDisk">data_disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk">LinuxVirtualMachineScaleSetDataDisk</a>]]</code> | data_disk block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.disablePasswordAuthentication">disable_password_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#disable_password_authentication LinuxVirtualMachineScaleSet#disable_password_authentication}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.doNotRunExtensionsOnOverprovisionedMachines">do_not_run_extensions_on_overprovisioned_machines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#do_not_run_extensions_on_overprovisioned_machines LinuxVirtualMachineScaleSet#do_not_run_extensions_on_overprovisioned_machines}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.edgeZone">edge_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#edge_zone LinuxVirtualMachineScaleSet#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.encryptionAtHostEnabled">encryption_at_host_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#encryption_at_host_enabled LinuxVirtualMachineScaleSet#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.evictionPolicy">eviction_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#eviction_policy LinuxVirtualMachineScaleSet#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.extension">extension</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension">LinuxVirtualMachineScaleSetExtension</a>]]</code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.extensionOperationsEnabled">extension_operations_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#extension_operations_enabled LinuxVirtualMachineScaleSet#extension_operations_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.extensionsTimeBudget">extensions_time_budget</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#extensions_time_budget LinuxVirtualMachineScaleSet#extensions_time_budget}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.galleryApplication">gallery_application</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplication">LinuxVirtualMachineScaleSetGalleryApplication</a>]]</code> | gallery_application block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.healthProbeId">health_probe_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#health_probe_id LinuxVirtualMachineScaleSet#health_probe_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.hostGroupId">host_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#host_group_id LinuxVirtualMachineScaleSet#host_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#id LinuxVirtualMachineScaleSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentity">LinuxVirtualMachineScaleSetIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.instances">instances</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#instances LinuxVirtualMachineScaleSet#instances}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.maxBidPrice">max_bid_price</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#max_bid_price LinuxVirtualMachineScaleSet#max_bid_price}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.overprovision">overprovision</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#overprovision LinuxVirtualMachineScaleSet#overprovision}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan">LinuxVirtualMachineScaleSetPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.platformFaultDomainCount">platform_fault_domain_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#platform_fault_domain_count LinuxVirtualMachineScaleSet#platform_fault_domain_count}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.priority">priority</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#priority LinuxVirtualMachineScaleSet#priority}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.provisionVmAgent">provision_vm_agent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#provision_vm_agent LinuxVirtualMachineScaleSet#provision_vm_agent}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.proximityPlacementGroupId">proximity_placement_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#proximity_placement_group_id LinuxVirtualMachineScaleSet#proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.rollingUpgradePolicy">rolling_upgrade_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy">LinuxVirtualMachineScaleSetRollingUpgradePolicy</a></code> | rolling_upgrade_policy block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.scaleIn">scale_in</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleIn">LinuxVirtualMachineScaleSetScaleIn</a></code> | scale_in block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.secret">secret</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret">LinuxVirtualMachineScaleSetSecret</a>]]</code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.secureBootEnabled">secure_boot_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#secure_boot_enabled LinuxVirtualMachineScaleSet#secure_boot_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.singlePlacementGroup">single_placement_group</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#single_placement_group LinuxVirtualMachineScaleSet#single_placement_group}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.sourceImageId">source_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#source_image_id LinuxVirtualMachineScaleSet#source_image_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.sourceImageReference">source_image_reference</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference">LinuxVirtualMachineScaleSetSourceImageReference</a></code> | source_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.spotRestore">spot_restore</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestore">LinuxVirtualMachineScaleSetSpotRestore</a></code> | spot_restore block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#tags LinuxVirtualMachineScaleSet#tags}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.terminationNotification">termination_notification</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotification">LinuxVirtualMachineScaleSetTerminationNotification</a></code> | termination_notification block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts">LinuxVirtualMachineScaleSetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.upgradeMode">upgrade_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#upgrade_mode LinuxVirtualMachineScaleSet#upgrade_mode}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#user_data LinuxVirtualMachineScaleSet#user_data}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.vtpmEnabled">vtpm_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#vtpm_enabled LinuxVirtualMachineScaleSet#vtpm_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.zoneBalance">zone_balance</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#zone_balance LinuxVirtualMachineScaleSet#zone_balance}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#zones LinuxVirtualMachineScaleSet#zones}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.adminUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#admin_username LinuxVirtualMachineScaleSet#admin_username}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#location LinuxVirtualMachineScaleSet#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}.

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.networkInterface"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface">LinuxVirtualMachineScaleSetNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#network_interface LinuxVirtualMachineScaleSet#network_interface}

---

##### `os_disk`<sup>Required</sup> <a name="os_disk" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.osDisk"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk">LinuxVirtualMachineScaleSetOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#os_disk LinuxVirtualMachineScaleSet#os_disk}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#resource_group_name LinuxVirtualMachineScaleSet#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#sku LinuxVirtualMachineScaleSet#sku}.

---

##### `additional_capabilities`<sup>Optional</sup> <a name="additional_capabilities" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.additionalCapabilities"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities">LinuxVirtualMachineScaleSetAdditionalCapabilities</a>

additional_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#additional_capabilities LinuxVirtualMachineScaleSet#additional_capabilities}

---

##### `admin_password`<sup>Optional</sup> <a name="admin_password" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.adminPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#admin_password LinuxVirtualMachineScaleSet#admin_password}.

---

##### `admin_ssh_key`<sup>Optional</sup> <a name="admin_ssh_key" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.adminSshKey"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey">LinuxVirtualMachineScaleSetAdminSshKey</a>]]

admin_ssh_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#admin_ssh_key LinuxVirtualMachineScaleSet#admin_ssh_key}

---

##### `automatic_instance_repair`<sup>Optional</sup> <a name="automatic_instance_repair" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.automaticInstanceRepair"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair">LinuxVirtualMachineScaleSetAutomaticInstanceRepair</a>

automatic_instance_repair block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#automatic_instance_repair LinuxVirtualMachineScaleSet#automatic_instance_repair}

---

##### `automatic_os_upgrade_policy`<sup>Optional</sup> <a name="automatic_os_upgrade_policy" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.automaticOsUpgradePolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy">LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy</a>

automatic_os_upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#automatic_os_upgrade_policy LinuxVirtualMachineScaleSet#automatic_os_upgrade_policy}

---

##### `boot_diagnostics`<sup>Optional</sup> <a name="boot_diagnostics" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.bootDiagnostics"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics">LinuxVirtualMachineScaleSetBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#boot_diagnostics LinuxVirtualMachineScaleSet#boot_diagnostics}

---

##### `capacity_reservation_group_id`<sup>Optional</sup> <a name="capacity_reservation_group_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.capacityReservationGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#capacity_reservation_group_id LinuxVirtualMachineScaleSet#capacity_reservation_group_id}.

---

##### `computer_name_prefix`<sup>Optional</sup> <a name="computer_name_prefix" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.computerNamePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#computer_name_prefix LinuxVirtualMachineScaleSet#computer_name_prefix}.

---

##### `custom_data`<sup>Optional</sup> <a name="custom_data" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.customData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#custom_data LinuxVirtualMachineScaleSet#custom_data}.

---

##### `data_disk`<sup>Optional</sup> <a name="data_disk" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.dataDisk"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk">LinuxVirtualMachineScaleSetDataDisk</a>]]

data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#data_disk LinuxVirtualMachineScaleSet#data_disk}

---

##### `disable_password_authentication`<sup>Optional</sup> <a name="disable_password_authentication" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.disablePasswordAuthentication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#disable_password_authentication LinuxVirtualMachineScaleSet#disable_password_authentication}.

---

##### `do_not_run_extensions_on_overprovisioned_machines`<sup>Optional</sup> <a name="do_not_run_extensions_on_overprovisioned_machines" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.doNotRunExtensionsOnOverprovisionedMachines"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#do_not_run_extensions_on_overprovisioned_machines LinuxVirtualMachineScaleSet#do_not_run_extensions_on_overprovisioned_machines}.

---

##### `edge_zone`<sup>Optional</sup> <a name="edge_zone" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.edgeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#edge_zone LinuxVirtualMachineScaleSet#edge_zone}.

---

##### `encryption_at_host_enabled`<sup>Optional</sup> <a name="encryption_at_host_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.encryptionAtHostEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#encryption_at_host_enabled LinuxVirtualMachineScaleSet#encryption_at_host_enabled}.

---

##### `eviction_policy`<sup>Optional</sup> <a name="eviction_policy" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.evictionPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#eviction_policy LinuxVirtualMachineScaleSet#eviction_policy}.

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.extension"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension">LinuxVirtualMachineScaleSetExtension</a>]]

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#extension LinuxVirtualMachineScaleSet#extension}

---

##### `extension_operations_enabled`<sup>Optional</sup> <a name="extension_operations_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.extensionOperationsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#extension_operations_enabled LinuxVirtualMachineScaleSet#extension_operations_enabled}.

---

##### `extensions_time_budget`<sup>Optional</sup> <a name="extensions_time_budget" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.extensionsTimeBudget"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#extensions_time_budget LinuxVirtualMachineScaleSet#extensions_time_budget}.

---

##### `gallery_application`<sup>Optional</sup> <a name="gallery_application" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.galleryApplication"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplication">LinuxVirtualMachineScaleSetGalleryApplication</a>]]

gallery_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#gallery_application LinuxVirtualMachineScaleSet#gallery_application}

---

##### `health_probe_id`<sup>Optional</sup> <a name="health_probe_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.healthProbeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#health_probe_id LinuxVirtualMachineScaleSet#health_probe_id}.

---

##### `host_group_id`<sup>Optional</sup> <a name="host_group_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.hostGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#host_group_id LinuxVirtualMachineScaleSet#host_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#id LinuxVirtualMachineScaleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentity">LinuxVirtualMachineScaleSetIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#identity LinuxVirtualMachineScaleSet#identity}

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.instances"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#instances LinuxVirtualMachineScaleSet#instances}.

---

##### `max_bid_price`<sup>Optional</sup> <a name="max_bid_price" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.maxBidPrice"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#max_bid_price LinuxVirtualMachineScaleSet#max_bid_price}.

---

##### `overprovision`<sup>Optional</sup> <a name="overprovision" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.overprovision"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#overprovision LinuxVirtualMachineScaleSet#overprovision}.

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.plan"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan">LinuxVirtualMachineScaleSetPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#plan LinuxVirtualMachineScaleSet#plan}

---

##### `platform_fault_domain_count`<sup>Optional</sup> <a name="platform_fault_domain_count" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.platformFaultDomainCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#platform_fault_domain_count LinuxVirtualMachineScaleSet#platform_fault_domain_count}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.priority"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#priority LinuxVirtualMachineScaleSet#priority}.

---

##### `provision_vm_agent`<sup>Optional</sup> <a name="provision_vm_agent" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.provisionVmAgent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#provision_vm_agent LinuxVirtualMachineScaleSet#provision_vm_agent}.

---

##### `proximity_placement_group_id`<sup>Optional</sup> <a name="proximity_placement_group_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.proximityPlacementGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#proximity_placement_group_id LinuxVirtualMachineScaleSet#proximity_placement_group_id}.

---

##### `rolling_upgrade_policy`<sup>Optional</sup> <a name="rolling_upgrade_policy" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.rollingUpgradePolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy">LinuxVirtualMachineScaleSetRollingUpgradePolicy</a>

rolling_upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#rolling_upgrade_policy LinuxVirtualMachineScaleSet#rolling_upgrade_policy}

---

##### `scale_in`<sup>Optional</sup> <a name="scale_in" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.scaleIn"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleIn">LinuxVirtualMachineScaleSetScaleIn</a>

scale_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#scale_in LinuxVirtualMachineScaleSet#scale_in}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.secret"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret">LinuxVirtualMachineScaleSetSecret</a>]]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#secret LinuxVirtualMachineScaleSet#secret}

---

##### `secure_boot_enabled`<sup>Optional</sup> <a name="secure_boot_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.secureBootEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#secure_boot_enabled LinuxVirtualMachineScaleSet#secure_boot_enabled}.

---

##### `single_placement_group`<sup>Optional</sup> <a name="single_placement_group" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.singlePlacementGroup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#single_placement_group LinuxVirtualMachineScaleSet#single_placement_group}.

---

##### `source_image_id`<sup>Optional</sup> <a name="source_image_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.sourceImageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#source_image_id LinuxVirtualMachineScaleSet#source_image_id}.

---

##### `source_image_reference`<sup>Optional</sup> <a name="source_image_reference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.sourceImageReference"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference">LinuxVirtualMachineScaleSetSourceImageReference</a>

source_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#source_image_reference LinuxVirtualMachineScaleSet#source_image_reference}

---

##### `spot_restore`<sup>Optional</sup> <a name="spot_restore" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.spotRestore"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestore">LinuxVirtualMachineScaleSetSpotRestore</a>

spot_restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#spot_restore LinuxVirtualMachineScaleSet#spot_restore}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#tags LinuxVirtualMachineScaleSet#tags}.

---

##### `termination_notification`<sup>Optional</sup> <a name="termination_notification" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.terminationNotification"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotification">LinuxVirtualMachineScaleSetTerminationNotification</a>

termination_notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#termination_notification LinuxVirtualMachineScaleSet#termination_notification}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts">LinuxVirtualMachineScaleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#timeouts LinuxVirtualMachineScaleSet#timeouts}

---

##### `upgrade_mode`<sup>Optional</sup> <a name="upgrade_mode" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.upgradeMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#upgrade_mode LinuxVirtualMachineScaleSet#upgrade_mode}.

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.userData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#user_data LinuxVirtualMachineScaleSet#user_data}.

---

##### `vtpm_enabled`<sup>Optional</sup> <a name="vtpm_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.vtpmEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#vtpm_enabled LinuxVirtualMachineScaleSet#vtpm_enabled}.

---

##### `zone_balance`<sup>Optional</sup> <a name="zone_balance" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.zoneBalance"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#zone_balance LinuxVirtualMachineScaleSet#zone_balance}.

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.Initializer.parameter.zones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#zones LinuxVirtualMachineScaleSet#zones}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAdditionalCapabilities">put_additional_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAdminSshKey">put_admin_ssh_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAutomaticInstanceRepair">put_automatic_instance_repair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAutomaticOsUpgradePolicy">put_automatic_os_upgrade_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putBootDiagnostics">put_boot_diagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putDataDisk">put_data_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putExtension">put_extension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putGalleryApplication">put_gallery_application</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putNetworkInterface">put_network_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putOsDisk">put_os_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putPlan">put_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putRollingUpgradePolicy">put_rolling_upgrade_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putScaleIn">put_scale_in</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putSecret">put_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putSourceImageReference">put_source_image_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putSpotRestore">put_spot_restore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putTerminationNotification">put_termination_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetAdditionalCapabilities">reset_additional_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetAdminPassword">reset_admin_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetAdminSshKey">reset_admin_ssh_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetAutomaticInstanceRepair">reset_automatic_instance_repair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetAutomaticOsUpgradePolicy">reset_automatic_os_upgrade_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetBootDiagnostics">reset_boot_diagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetCapacityReservationGroupId">reset_capacity_reservation_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetComputerNamePrefix">reset_computer_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetCustomData">reset_custom_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetDataDisk">reset_data_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetDisablePasswordAuthentication">reset_disable_password_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetDoNotRunExtensionsOnOverprovisionedMachines">reset_do_not_run_extensions_on_overprovisioned_machines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetEdgeZone">reset_edge_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetEncryptionAtHostEnabled">reset_encryption_at_host_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetEvictionPolicy">reset_eviction_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetExtension">reset_extension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetExtensionOperationsEnabled">reset_extension_operations_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetExtensionsTimeBudget">reset_extensions_time_budget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetGalleryApplication">reset_gallery_application</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetHealthProbeId">reset_health_probe_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetHostGroupId">reset_host_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetInstances">reset_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetMaxBidPrice">reset_max_bid_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetOverprovision">reset_overprovision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetPlan">reset_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetPlatformFaultDomainCount">reset_platform_fault_domain_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetProvisionVmAgent">reset_provision_vm_agent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetProximityPlacementGroupId">reset_proximity_placement_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetRollingUpgradePolicy">reset_rolling_upgrade_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetScaleIn">reset_scale_in</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetSecret">reset_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetSecureBootEnabled">reset_secure_boot_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetSinglePlacementGroup">reset_single_placement_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetSourceImageId">reset_source_image_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetSourceImageReference">reset_source_image_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetSpotRestore">reset_spot_restore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetTerminationNotification">reset_termination_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetUpgradeMode">reset_upgrade_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetUserData">reset_user_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetVtpmEnabled">reset_vtpm_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetZoneBalance">reset_zone_balance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetZones">reset_zones</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_additional_capabilities` <a name="put_additional_capabilities" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAdditionalCapabilities"></a>

```python
def put_additional_capabilities(
  ultra_ssd_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `ultra_ssd_enabled`<sup>Optional</sup> <a name="ultra_ssd_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAdditionalCapabilities.parameter.ultraSsdEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#ultra_ssd_enabled LinuxVirtualMachineScaleSet#ultra_ssd_enabled}.

---

##### `put_admin_ssh_key` <a name="put_admin_ssh_key" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAdminSshKey"></a>

```python
def put_admin_ssh_key(
  value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetAdminSshKey]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAdminSshKey.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey">LinuxVirtualMachineScaleSetAdminSshKey</a>]]

---

##### `put_automatic_instance_repair` <a name="put_automatic_instance_repair" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAutomaticInstanceRepair"></a>

```python
def put_automatic_instance_repair(
  enabled: typing.Union[bool, IResolvable],
  action: str = None,
  grace_period: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAutomaticInstanceRepair.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#enabled LinuxVirtualMachineScaleSet#enabled}.

---

###### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAutomaticInstanceRepair.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#action LinuxVirtualMachineScaleSet#action}.

---

###### `grace_period`<sup>Optional</sup> <a name="grace_period" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAutomaticInstanceRepair.parameter.gracePeriod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#grace_period LinuxVirtualMachineScaleSet#grace_period}.

---

##### `put_automatic_os_upgrade_policy` <a name="put_automatic_os_upgrade_policy" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAutomaticOsUpgradePolicy"></a>

```python
def put_automatic_os_upgrade_policy(
  disable_automatic_rollback: typing.Union[bool, IResolvable],
  enable_automatic_os_upgrade: typing.Union[bool, IResolvable]
) -> None
```

###### `disable_automatic_rollback`<sup>Required</sup> <a name="disable_automatic_rollback" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAutomaticOsUpgradePolicy.parameter.disableAutomaticRollback"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#disable_automatic_rollback LinuxVirtualMachineScaleSet#disable_automatic_rollback}.

---

###### `enable_automatic_os_upgrade`<sup>Required</sup> <a name="enable_automatic_os_upgrade" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putAutomaticOsUpgradePolicy.parameter.enableAutomaticOsUpgrade"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#enable_automatic_os_upgrade LinuxVirtualMachineScaleSet#enable_automatic_os_upgrade}.

---

##### `put_boot_diagnostics` <a name="put_boot_diagnostics" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putBootDiagnostics"></a>

```python
def put_boot_diagnostics(
  storage_account_uri: str = None
) -> None
```

###### `storage_account_uri`<sup>Optional</sup> <a name="storage_account_uri" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putBootDiagnostics.parameter.storageAccountUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#storage_account_uri LinuxVirtualMachineScaleSet#storage_account_uri}.

---

##### `put_data_disk` <a name="put_data_disk" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putDataDisk"></a>

```python
def put_data_disk(
  value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetDataDisk]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putDataDisk.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk">LinuxVirtualMachineScaleSetDataDisk</a>]]

---

##### `put_extension` <a name="put_extension" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putExtension"></a>

```python
def put_extension(
  value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetExtension]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putExtension.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension">LinuxVirtualMachineScaleSetExtension</a>]]

---

##### `put_gallery_application` <a name="put_gallery_application" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putGalleryApplication"></a>

```python
def put_gallery_application(
  value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetGalleryApplication]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putGalleryApplication.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplication">LinuxVirtualMachineScaleSetGalleryApplication</a>]]

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#type LinuxVirtualMachineScaleSet#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#identity_ids LinuxVirtualMachineScaleSet#identity_ids}.

---

##### `put_network_interface` <a name="put_network_interface" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putNetworkInterface"></a>

```python
def put_network_interface(
  value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterface]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putNetworkInterface.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface">LinuxVirtualMachineScaleSetNetworkInterface</a>]]

---

##### `put_os_disk` <a name="put_os_disk" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putOsDisk"></a>

```python
def put_os_disk(
  caching: str,
  storage_account_type: str,
  diff_disk_settings: LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings = None,
  disk_encryption_set_id: str = None,
  disk_size_gb: typing.Union[int, float] = None,
  secure_vm_disk_encryption_set_id: str = None,
  security_encryption_type: str = None,
  write_accelerator_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putOsDisk.parameter.caching"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#caching LinuxVirtualMachineScaleSet#caching}.

---

###### `storage_account_type`<sup>Required</sup> <a name="storage_account_type" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putOsDisk.parameter.storageAccountType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#storage_account_type LinuxVirtualMachineScaleSet#storage_account_type}.

---

###### `diff_disk_settings`<sup>Optional</sup> <a name="diff_disk_settings" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putOsDisk.parameter.diffDiskSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings">LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings</a>

diff_disk_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#diff_disk_settings LinuxVirtualMachineScaleSet#diff_disk_settings}

---

###### `disk_encryption_set_id`<sup>Optional</sup> <a name="disk_encryption_set_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putOsDisk.parameter.diskEncryptionSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#disk_encryption_set_id LinuxVirtualMachineScaleSet#disk_encryption_set_id}.

---

###### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putOsDisk.parameter.diskSizeGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#disk_size_gb LinuxVirtualMachineScaleSet#disk_size_gb}.

---

###### `secure_vm_disk_encryption_set_id`<sup>Optional</sup> <a name="secure_vm_disk_encryption_set_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putOsDisk.parameter.secureVmDiskEncryptionSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#secure_vm_disk_encryption_set_id LinuxVirtualMachineScaleSet#secure_vm_disk_encryption_set_id}.

---

###### `security_encryption_type`<sup>Optional</sup> <a name="security_encryption_type" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putOsDisk.parameter.securityEncryptionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#security_encryption_type LinuxVirtualMachineScaleSet#security_encryption_type}.

---

###### `write_accelerator_enabled`<sup>Optional</sup> <a name="write_accelerator_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putOsDisk.parameter.writeAcceleratorEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#write_accelerator_enabled LinuxVirtualMachineScaleSet#write_accelerator_enabled}.

---

##### `put_plan` <a name="put_plan" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putPlan"></a>

```python
def put_plan(
  name: str,
  product: str,
  publisher: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putPlan.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}.

---

###### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putPlan.parameter.product"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#product LinuxVirtualMachineScaleSet#product}.

---

###### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putPlan.parameter.publisher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#publisher LinuxVirtualMachineScaleSet#publisher}.

---

##### `put_rolling_upgrade_policy` <a name="put_rolling_upgrade_policy" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putRollingUpgradePolicy"></a>

```python
def put_rolling_upgrade_policy(
  max_batch_instance_percent: typing.Union[int, float],
  max_unhealthy_instance_percent: typing.Union[int, float],
  max_unhealthy_upgraded_instance_percent: typing.Union[int, float],
  pause_time_between_batches: str,
  cross_zone_upgrades_enabled: typing.Union[bool, IResolvable] = None,
  maximum_surge_instances_enabled: typing.Union[bool, IResolvable] = None,
  prioritize_unhealthy_instances_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `max_batch_instance_percent`<sup>Required</sup> <a name="max_batch_instance_percent" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putRollingUpgradePolicy.parameter.maxBatchInstancePercent"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#max_batch_instance_percent LinuxVirtualMachineScaleSet#max_batch_instance_percent}.

---

###### `max_unhealthy_instance_percent`<sup>Required</sup> <a name="max_unhealthy_instance_percent" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putRollingUpgradePolicy.parameter.maxUnhealthyInstancePercent"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#max_unhealthy_instance_percent LinuxVirtualMachineScaleSet#max_unhealthy_instance_percent}.

---

###### `max_unhealthy_upgraded_instance_percent`<sup>Required</sup> <a name="max_unhealthy_upgraded_instance_percent" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putRollingUpgradePolicy.parameter.maxUnhealthyUpgradedInstancePercent"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#max_unhealthy_upgraded_instance_percent LinuxVirtualMachineScaleSet#max_unhealthy_upgraded_instance_percent}.

---

###### `pause_time_between_batches`<sup>Required</sup> <a name="pause_time_between_batches" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putRollingUpgradePolicy.parameter.pauseTimeBetweenBatches"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#pause_time_between_batches LinuxVirtualMachineScaleSet#pause_time_between_batches}.

---

###### `cross_zone_upgrades_enabled`<sup>Optional</sup> <a name="cross_zone_upgrades_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putRollingUpgradePolicy.parameter.crossZoneUpgradesEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#cross_zone_upgrades_enabled LinuxVirtualMachineScaleSet#cross_zone_upgrades_enabled}.

---

###### `maximum_surge_instances_enabled`<sup>Optional</sup> <a name="maximum_surge_instances_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putRollingUpgradePolicy.parameter.maximumSurgeInstancesEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#maximum_surge_instances_enabled LinuxVirtualMachineScaleSet#maximum_surge_instances_enabled}.

---

###### `prioritize_unhealthy_instances_enabled`<sup>Optional</sup> <a name="prioritize_unhealthy_instances_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putRollingUpgradePolicy.parameter.prioritizeUnhealthyInstancesEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#prioritize_unhealthy_instances_enabled LinuxVirtualMachineScaleSet#prioritize_unhealthy_instances_enabled}.

---

##### `put_scale_in` <a name="put_scale_in" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putScaleIn"></a>

```python
def put_scale_in(
  force_deletion_enabled: typing.Union[bool, IResolvable] = None,
  rule: str = None
) -> None
```

###### `force_deletion_enabled`<sup>Optional</sup> <a name="force_deletion_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putScaleIn.parameter.forceDeletionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#force_deletion_enabled LinuxVirtualMachineScaleSet#force_deletion_enabled}.

---

###### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putScaleIn.parameter.rule"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#rule LinuxVirtualMachineScaleSet#rule}.

---

##### `put_secret` <a name="put_secret" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putSecret"></a>

```python
def put_secret(
  value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetSecret]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putSecret.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret">LinuxVirtualMachineScaleSetSecret</a>]]

---

##### `put_source_image_reference` <a name="put_source_image_reference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putSourceImageReference"></a>

```python
def put_source_image_reference(
  offer: str,
  publisher: str,
  sku: str,
  version: str
) -> None
```

###### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putSourceImageReference.parameter.offer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#offer LinuxVirtualMachineScaleSet#offer}.

---

###### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putSourceImageReference.parameter.publisher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#publisher LinuxVirtualMachineScaleSet#publisher}.

---

###### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putSourceImageReference.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#sku LinuxVirtualMachineScaleSet#sku}.

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putSourceImageReference.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#version LinuxVirtualMachineScaleSet#version}.

---

##### `put_spot_restore` <a name="put_spot_restore" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putSpotRestore"></a>

```python
def put_spot_restore(
  enabled: typing.Union[bool, IResolvable] = None,
  timeout: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putSpotRestore.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#enabled LinuxVirtualMachineScaleSet#enabled}.

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putSpotRestore.parameter.timeout"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#timeout LinuxVirtualMachineScaleSet#timeout}.

---

##### `put_termination_notification` <a name="put_termination_notification" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putTerminationNotification"></a>

```python
def put_termination_notification(
  enabled: typing.Union[bool, IResolvable],
  timeout: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putTerminationNotification.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#enabled LinuxVirtualMachineScaleSet#enabled}.

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putTerminationNotification.parameter.timeout"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#timeout LinuxVirtualMachineScaleSet#timeout}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#create LinuxVirtualMachineScaleSet#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#delete LinuxVirtualMachineScaleSet#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#read LinuxVirtualMachineScaleSet#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#update LinuxVirtualMachineScaleSet#update}.

---

##### `reset_additional_capabilities` <a name="reset_additional_capabilities" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetAdditionalCapabilities"></a>

```python
def reset_additional_capabilities() -> None
```

##### `reset_admin_password` <a name="reset_admin_password" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetAdminPassword"></a>

```python
def reset_admin_password() -> None
```

##### `reset_admin_ssh_key` <a name="reset_admin_ssh_key" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetAdminSshKey"></a>

```python
def reset_admin_ssh_key() -> None
```

##### `reset_automatic_instance_repair` <a name="reset_automatic_instance_repair" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetAutomaticInstanceRepair"></a>

```python
def reset_automatic_instance_repair() -> None
```

##### `reset_automatic_os_upgrade_policy` <a name="reset_automatic_os_upgrade_policy" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetAutomaticOsUpgradePolicy"></a>

```python
def reset_automatic_os_upgrade_policy() -> None
```

##### `reset_boot_diagnostics` <a name="reset_boot_diagnostics" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetBootDiagnostics"></a>

```python
def reset_boot_diagnostics() -> None
```

##### `reset_capacity_reservation_group_id` <a name="reset_capacity_reservation_group_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetCapacityReservationGroupId"></a>

```python
def reset_capacity_reservation_group_id() -> None
```

##### `reset_computer_name_prefix` <a name="reset_computer_name_prefix" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetComputerNamePrefix"></a>

```python
def reset_computer_name_prefix() -> None
```

##### `reset_custom_data` <a name="reset_custom_data" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetCustomData"></a>

```python
def reset_custom_data() -> None
```

##### `reset_data_disk` <a name="reset_data_disk" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetDataDisk"></a>

```python
def reset_data_disk() -> None
```

##### `reset_disable_password_authentication` <a name="reset_disable_password_authentication" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetDisablePasswordAuthentication"></a>

```python
def reset_disable_password_authentication() -> None
```

##### `reset_do_not_run_extensions_on_overprovisioned_machines` <a name="reset_do_not_run_extensions_on_overprovisioned_machines" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetDoNotRunExtensionsOnOverprovisionedMachines"></a>

```python
def reset_do_not_run_extensions_on_overprovisioned_machines() -> None
```

##### `reset_edge_zone` <a name="reset_edge_zone" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetEdgeZone"></a>

```python
def reset_edge_zone() -> None
```

##### `reset_encryption_at_host_enabled` <a name="reset_encryption_at_host_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetEncryptionAtHostEnabled"></a>

```python
def reset_encryption_at_host_enabled() -> None
```

##### `reset_eviction_policy` <a name="reset_eviction_policy" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetEvictionPolicy"></a>

```python
def reset_eviction_policy() -> None
```

##### `reset_extension` <a name="reset_extension" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetExtension"></a>

```python
def reset_extension() -> None
```

##### `reset_extension_operations_enabled` <a name="reset_extension_operations_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetExtensionOperationsEnabled"></a>

```python
def reset_extension_operations_enabled() -> None
```

##### `reset_extensions_time_budget` <a name="reset_extensions_time_budget" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetExtensionsTimeBudget"></a>

```python
def reset_extensions_time_budget() -> None
```

##### `reset_gallery_application` <a name="reset_gallery_application" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetGalleryApplication"></a>

```python
def reset_gallery_application() -> None
```

##### `reset_health_probe_id` <a name="reset_health_probe_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetHealthProbeId"></a>

```python
def reset_health_probe_id() -> None
```

##### `reset_host_group_id` <a name="reset_host_group_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetHostGroupId"></a>

```python
def reset_host_group_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_instances` <a name="reset_instances" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetInstances"></a>

```python
def reset_instances() -> None
```

##### `reset_max_bid_price` <a name="reset_max_bid_price" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetMaxBidPrice"></a>

```python
def reset_max_bid_price() -> None
```

##### `reset_overprovision` <a name="reset_overprovision" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetOverprovision"></a>

```python
def reset_overprovision() -> None
```

##### `reset_plan` <a name="reset_plan" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetPlan"></a>

```python
def reset_plan() -> None
```

##### `reset_platform_fault_domain_count` <a name="reset_platform_fault_domain_count" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetPlatformFaultDomainCount"></a>

```python
def reset_platform_fault_domain_count() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_provision_vm_agent` <a name="reset_provision_vm_agent" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetProvisionVmAgent"></a>

```python
def reset_provision_vm_agent() -> None
```

##### `reset_proximity_placement_group_id` <a name="reset_proximity_placement_group_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetProximityPlacementGroupId"></a>

```python
def reset_proximity_placement_group_id() -> None
```

##### `reset_rolling_upgrade_policy` <a name="reset_rolling_upgrade_policy" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetRollingUpgradePolicy"></a>

```python
def reset_rolling_upgrade_policy() -> None
```

##### `reset_scale_in` <a name="reset_scale_in" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetScaleIn"></a>

```python
def reset_scale_in() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetSecret"></a>

```python
def reset_secret() -> None
```

##### `reset_secure_boot_enabled` <a name="reset_secure_boot_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetSecureBootEnabled"></a>

```python
def reset_secure_boot_enabled() -> None
```

##### `reset_single_placement_group` <a name="reset_single_placement_group" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetSinglePlacementGroup"></a>

```python
def reset_single_placement_group() -> None
```

##### `reset_source_image_id` <a name="reset_source_image_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetSourceImageId"></a>

```python
def reset_source_image_id() -> None
```

##### `reset_source_image_reference` <a name="reset_source_image_reference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetSourceImageReference"></a>

```python
def reset_source_image_reference() -> None
```

##### `reset_spot_restore` <a name="reset_spot_restore" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetSpotRestore"></a>

```python
def reset_spot_restore() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_termination_notification` <a name="reset_termination_notification" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetTerminationNotification"></a>

```python
def reset_termination_notification() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_upgrade_mode` <a name="reset_upgrade_mode" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetUpgradeMode"></a>

```python
def reset_upgrade_mode() -> None
```

##### `reset_user_data` <a name="reset_user_data" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetUserData"></a>

```python
def reset_user_data() -> None
```

##### `reset_vtpm_enabled` <a name="reset_vtpm_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetVtpmEnabled"></a>

```python
def reset_vtpm_enabled() -> None
```

##### `reset_zone_balance` <a name="reset_zone_balance" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetZoneBalance"></a>

```python
def reset_zone_balance() -> None
```

##### `reset_zones` <a name="reset_zones" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.resetZones"></a>

```python
def reset_zones() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LinuxVirtualMachineScaleSet resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LinuxVirtualMachineScaleSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LinuxVirtualMachineScaleSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LinuxVirtualMachineScaleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LinuxVirtualMachineScaleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.additionalCapabilities">additional_capabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference">LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.adminSshKey">admin_ssh_key</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList">LinuxVirtualMachineScaleSetAdminSshKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.automaticInstanceRepair">automatic_instance_repair</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference">LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.automaticOsUpgradePolicy">automatic_os_upgrade_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference">LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.bootDiagnostics">boot_diagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference">LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.dataDisk">data_disk</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList">LinuxVirtualMachineScaleSetDataDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList">LinuxVirtualMachineScaleSetExtensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.galleryApplication">gallery_application</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList">LinuxVirtualMachineScaleSetGalleryApplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference">LinuxVirtualMachineScaleSetIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.networkInterface">network_interface</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList">LinuxVirtualMachineScaleSetNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.osDisk">os_disk</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference">LinuxVirtualMachineScaleSetOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference">LinuxVirtualMachineScaleSetPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.rollingUpgradePolicy">rolling_upgrade_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference">LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.scaleIn">scale_in</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference">LinuxVirtualMachineScaleSetScaleInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList">LinuxVirtualMachineScaleSetSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.sourceImageReference">source_image_reference</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference">LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.spotRestore">spot_restore</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference">LinuxVirtualMachineScaleSetSpotRestoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.terminationNotification">termination_notification</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference">LinuxVirtualMachineScaleSetTerminationNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference">LinuxVirtualMachineScaleSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.uniqueId">unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.additionalCapabilitiesInput">additional_capabilities_input</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities">LinuxVirtualMachineScaleSetAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.adminPasswordInput">admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.adminSshKeyInput">admin_ssh_key_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey">LinuxVirtualMachineScaleSetAdminSshKey</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.adminUsernameInput">admin_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.automaticInstanceRepairInput">automatic_instance_repair_input</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair">LinuxVirtualMachineScaleSetAutomaticInstanceRepair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.automaticOsUpgradePolicyInput">automatic_os_upgrade_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy">LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.bootDiagnosticsInput">boot_diagnostics_input</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics">LinuxVirtualMachineScaleSetBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.capacityReservationGroupIdInput">capacity_reservation_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.computerNamePrefixInput">computer_name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.customDataInput">custom_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.dataDiskInput">data_disk_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk">LinuxVirtualMachineScaleSetDataDisk</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.disablePasswordAuthenticationInput">disable_password_authentication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.doNotRunExtensionsOnOverprovisionedMachinesInput">do_not_run_extensions_on_overprovisioned_machines_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.edgeZoneInput">edge_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.encryptionAtHostEnabledInput">encryption_at_host_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.evictionPolicyInput">eviction_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.extensionInput">extension_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension">LinuxVirtualMachineScaleSetExtension</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.extensionOperationsEnabledInput">extension_operations_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.extensionsTimeBudgetInput">extensions_time_budget_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.galleryApplicationInput">gallery_application_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplication">LinuxVirtualMachineScaleSetGalleryApplication</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.healthProbeIdInput">health_probe_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.hostGroupIdInput">host_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentity">LinuxVirtualMachineScaleSetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.instancesInput">instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.maxBidPriceInput">max_bid_price_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.networkInterfaceInput">network_interface_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface">LinuxVirtualMachineScaleSetNetworkInterface</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.osDiskInput">os_disk_input</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk">LinuxVirtualMachineScaleSetOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.overprovisionInput">overprovision_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.planInput">plan_input</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan">LinuxVirtualMachineScaleSetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.platformFaultDomainCountInput">platform_fault_domain_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.priorityInput">priority_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.provisionVmAgentInput">provision_vm_agent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.proximityPlacementGroupIdInput">proximity_placement_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.rollingUpgradePolicyInput">rolling_upgrade_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy">LinuxVirtualMachineScaleSetRollingUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.scaleInInput">scale_in_input</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleIn">LinuxVirtualMachineScaleSetScaleIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.secretInput">secret_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret">LinuxVirtualMachineScaleSetSecret</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.secureBootEnabledInput">secure_boot_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.singlePlacementGroupInput">single_placement_group_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.sourceImageIdInput">source_image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.sourceImageReferenceInput">source_image_reference_input</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference">LinuxVirtualMachineScaleSetSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.spotRestoreInput">spot_restore_input</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestore">LinuxVirtualMachineScaleSetSpotRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.terminationNotificationInput">termination_notification_input</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotification">LinuxVirtualMachineScaleSetTerminationNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts">LinuxVirtualMachineScaleSetTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.upgradeModeInput">upgrade_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.userDataInput">user_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.vtpmEnabledInput">vtpm_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.zoneBalanceInput">zone_balance_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.zonesInput">zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.adminUsername">admin_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.capacityReservationGroupId">capacity_reservation_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.computerNamePrefix">computer_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.customData">custom_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.disablePasswordAuthentication">disable_password_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.doNotRunExtensionsOnOverprovisionedMachines">do_not_run_extensions_on_overprovisioned_machines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.edgeZone">edge_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.encryptionAtHostEnabled">encryption_at_host_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.evictionPolicy">eviction_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.extensionOperationsEnabled">extension_operations_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.extensionsTimeBudget">extensions_time_budget</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.healthProbeId">health_probe_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.hostGroupId">host_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.instances">instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.maxBidPrice">max_bid_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.overprovision">overprovision</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.platformFaultDomainCount">platform_fault_domain_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.priority">priority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.provisionVmAgent">provision_vm_agent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.proximityPlacementGroupId">proximity_placement_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.secureBootEnabled">secure_boot_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.singlePlacementGroup">single_placement_group</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.sourceImageId">source_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.upgradeMode">upgrade_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.userData">user_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.vtpmEnabled">vtpm_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.zoneBalance">zone_balance</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `additional_capabilities`<sup>Required</sup> <a name="additional_capabilities" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.additionalCapabilities"></a>

```python
additional_capabilities: LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference">LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference</a>

---

##### `admin_ssh_key`<sup>Required</sup> <a name="admin_ssh_key" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.adminSshKey"></a>

```python
admin_ssh_key: LinuxVirtualMachineScaleSetAdminSshKeyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList">LinuxVirtualMachineScaleSetAdminSshKeyList</a>

---

##### `automatic_instance_repair`<sup>Required</sup> <a name="automatic_instance_repair" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.automaticInstanceRepair"></a>

```python
automatic_instance_repair: LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference">LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference</a>

---

##### `automatic_os_upgrade_policy`<sup>Required</sup> <a name="automatic_os_upgrade_policy" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.automaticOsUpgradePolicy"></a>

```python
automatic_os_upgrade_policy: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference">LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference</a>

---

##### `boot_diagnostics`<sup>Required</sup> <a name="boot_diagnostics" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.bootDiagnostics"></a>

```python
boot_diagnostics: LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference">LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference</a>

---

##### `data_disk`<sup>Required</sup> <a name="data_disk" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.dataDisk"></a>

```python
data_disk: LinuxVirtualMachineScaleSetDataDiskList
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList">LinuxVirtualMachineScaleSetDataDiskList</a>

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.extension"></a>

```python
extension: LinuxVirtualMachineScaleSetExtensionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList">LinuxVirtualMachineScaleSetExtensionList</a>

---

##### `gallery_application`<sup>Required</sup> <a name="gallery_application" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.galleryApplication"></a>

```python
gallery_application: LinuxVirtualMachineScaleSetGalleryApplicationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList">LinuxVirtualMachineScaleSetGalleryApplicationList</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.identity"></a>

```python
identity: LinuxVirtualMachineScaleSetIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference">LinuxVirtualMachineScaleSetIdentityOutputReference</a>

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.networkInterface"></a>

```python
network_interface: LinuxVirtualMachineScaleSetNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList">LinuxVirtualMachineScaleSetNetworkInterfaceList</a>

---

##### `os_disk`<sup>Required</sup> <a name="os_disk" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.osDisk"></a>

```python
os_disk: LinuxVirtualMachineScaleSetOsDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference">LinuxVirtualMachineScaleSetOsDiskOutputReference</a>

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.plan"></a>

```python
plan: LinuxVirtualMachineScaleSetPlanOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference">LinuxVirtualMachineScaleSetPlanOutputReference</a>

---

##### `rolling_upgrade_policy`<sup>Required</sup> <a name="rolling_upgrade_policy" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.rollingUpgradePolicy"></a>

```python
rolling_upgrade_policy: LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference">LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference</a>

---

##### `scale_in`<sup>Required</sup> <a name="scale_in" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.scaleIn"></a>

```python
scale_in: LinuxVirtualMachineScaleSetScaleInOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference">LinuxVirtualMachineScaleSetScaleInOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.secret"></a>

```python
secret: LinuxVirtualMachineScaleSetSecretList
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList">LinuxVirtualMachineScaleSetSecretList</a>

---

##### `source_image_reference`<sup>Required</sup> <a name="source_image_reference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.sourceImageReference"></a>

```python
source_image_reference: LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference">LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference</a>

---

##### `spot_restore`<sup>Required</sup> <a name="spot_restore" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.spotRestore"></a>

```python
spot_restore: LinuxVirtualMachineScaleSetSpotRestoreOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference">LinuxVirtualMachineScaleSetSpotRestoreOutputReference</a>

---

##### `termination_notification`<sup>Required</sup> <a name="termination_notification" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.terminationNotification"></a>

```python
termination_notification: LinuxVirtualMachineScaleSetTerminationNotificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference">LinuxVirtualMachineScaleSetTerminationNotificationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.timeouts"></a>

```python
timeouts: LinuxVirtualMachineScaleSetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference">LinuxVirtualMachineScaleSetTimeoutsOutputReference</a>

---

##### `unique_id`<sup>Required</sup> <a name="unique_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.uniqueId"></a>

```python
unique_id: str
```

- *Type:* str

---

##### `additional_capabilities_input`<sup>Optional</sup> <a name="additional_capabilities_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.additionalCapabilitiesInput"></a>

```python
additional_capabilities_input: LinuxVirtualMachineScaleSetAdditionalCapabilities
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities">LinuxVirtualMachineScaleSetAdditionalCapabilities</a>

---

##### `admin_password_input`<sup>Optional</sup> <a name="admin_password_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.adminPasswordInput"></a>

```python
admin_password_input: str
```

- *Type:* str

---

##### `admin_ssh_key_input`<sup>Optional</sup> <a name="admin_ssh_key_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.adminSshKeyInput"></a>

```python
admin_ssh_key_input: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetAdminSshKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey">LinuxVirtualMachineScaleSetAdminSshKey</a>]]

---

##### `admin_username_input`<sup>Optional</sup> <a name="admin_username_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.adminUsernameInput"></a>

```python
admin_username_input: str
```

- *Type:* str

---

##### `automatic_instance_repair_input`<sup>Optional</sup> <a name="automatic_instance_repair_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.automaticInstanceRepairInput"></a>

```python
automatic_instance_repair_input: LinuxVirtualMachineScaleSetAutomaticInstanceRepair
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair">LinuxVirtualMachineScaleSetAutomaticInstanceRepair</a>

---

##### `automatic_os_upgrade_policy_input`<sup>Optional</sup> <a name="automatic_os_upgrade_policy_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.automaticOsUpgradePolicyInput"></a>

```python
automatic_os_upgrade_policy_input: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy">LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy</a>

---

##### `boot_diagnostics_input`<sup>Optional</sup> <a name="boot_diagnostics_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.bootDiagnosticsInput"></a>

```python
boot_diagnostics_input: LinuxVirtualMachineScaleSetBootDiagnostics
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics">LinuxVirtualMachineScaleSetBootDiagnostics</a>

---

##### `capacity_reservation_group_id_input`<sup>Optional</sup> <a name="capacity_reservation_group_id_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.capacityReservationGroupIdInput"></a>

```python
capacity_reservation_group_id_input: str
```

- *Type:* str

---

##### `computer_name_prefix_input`<sup>Optional</sup> <a name="computer_name_prefix_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.computerNamePrefixInput"></a>

```python
computer_name_prefix_input: str
```

- *Type:* str

---

##### `custom_data_input`<sup>Optional</sup> <a name="custom_data_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.customDataInput"></a>

```python
custom_data_input: str
```

- *Type:* str

---

##### `data_disk_input`<sup>Optional</sup> <a name="data_disk_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.dataDiskInput"></a>

```python
data_disk_input: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetDataDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk">LinuxVirtualMachineScaleSetDataDisk</a>]]

---

##### `disable_password_authentication_input`<sup>Optional</sup> <a name="disable_password_authentication_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.disablePasswordAuthenticationInput"></a>

```python
disable_password_authentication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `do_not_run_extensions_on_overprovisioned_machines_input`<sup>Optional</sup> <a name="do_not_run_extensions_on_overprovisioned_machines_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.doNotRunExtensionsOnOverprovisionedMachinesInput"></a>

```python
do_not_run_extensions_on_overprovisioned_machines_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `edge_zone_input`<sup>Optional</sup> <a name="edge_zone_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.edgeZoneInput"></a>

```python
edge_zone_input: str
```

- *Type:* str

---

##### `encryption_at_host_enabled_input`<sup>Optional</sup> <a name="encryption_at_host_enabled_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.encryptionAtHostEnabledInput"></a>

```python
encryption_at_host_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `eviction_policy_input`<sup>Optional</sup> <a name="eviction_policy_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.evictionPolicyInput"></a>

```python
eviction_policy_input: str
```

- *Type:* str

---

##### `extension_input`<sup>Optional</sup> <a name="extension_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.extensionInput"></a>

```python
extension_input: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetExtension]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension">LinuxVirtualMachineScaleSetExtension</a>]]

---

##### `extension_operations_enabled_input`<sup>Optional</sup> <a name="extension_operations_enabled_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.extensionOperationsEnabledInput"></a>

```python
extension_operations_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `extensions_time_budget_input`<sup>Optional</sup> <a name="extensions_time_budget_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.extensionsTimeBudgetInput"></a>

```python
extensions_time_budget_input: str
```

- *Type:* str

---

##### `gallery_application_input`<sup>Optional</sup> <a name="gallery_application_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.galleryApplicationInput"></a>

```python
gallery_application_input: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetGalleryApplication]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplication">LinuxVirtualMachineScaleSetGalleryApplication</a>]]

---

##### `health_probe_id_input`<sup>Optional</sup> <a name="health_probe_id_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.healthProbeIdInput"></a>

```python
health_probe_id_input: str
```

- *Type:* str

---

##### `host_group_id_input`<sup>Optional</sup> <a name="host_group_id_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.hostGroupIdInput"></a>

```python
host_group_id_input: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.identityInput"></a>

```python
identity_input: LinuxVirtualMachineScaleSetIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentity">LinuxVirtualMachineScaleSetIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instances_input`<sup>Optional</sup> <a name="instances_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.instancesInput"></a>

```python
instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `max_bid_price_input`<sup>Optional</sup> <a name="max_bid_price_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.maxBidPriceInput"></a>

```python
max_bid_price_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_interface_input`<sup>Optional</sup> <a name="network_interface_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.networkInterfaceInput"></a>

```python
network_interface_input: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface">LinuxVirtualMachineScaleSetNetworkInterface</a>]]

---

##### `os_disk_input`<sup>Optional</sup> <a name="os_disk_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.osDiskInput"></a>

```python
os_disk_input: LinuxVirtualMachineScaleSetOsDisk
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk">LinuxVirtualMachineScaleSetOsDisk</a>

---

##### `overprovision_input`<sup>Optional</sup> <a name="overprovision_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.overprovisionInput"></a>

```python
overprovision_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `plan_input`<sup>Optional</sup> <a name="plan_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.planInput"></a>

```python
plan_input: LinuxVirtualMachineScaleSetPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan">LinuxVirtualMachineScaleSetPlan</a>

---

##### `platform_fault_domain_count_input`<sup>Optional</sup> <a name="platform_fault_domain_count_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.platformFaultDomainCountInput"></a>

```python
platform_fault_domain_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.priorityInput"></a>

```python
priority_input: str
```

- *Type:* str

---

##### `provision_vm_agent_input`<sup>Optional</sup> <a name="provision_vm_agent_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.provisionVmAgentInput"></a>

```python
provision_vm_agent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `proximity_placement_group_id_input`<sup>Optional</sup> <a name="proximity_placement_group_id_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.proximityPlacementGroupIdInput"></a>

```python
proximity_placement_group_id_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `rolling_upgrade_policy_input`<sup>Optional</sup> <a name="rolling_upgrade_policy_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.rollingUpgradePolicyInput"></a>

```python
rolling_upgrade_policy_input: LinuxVirtualMachineScaleSetRollingUpgradePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy">LinuxVirtualMachineScaleSetRollingUpgradePolicy</a>

---

##### `scale_in_input`<sup>Optional</sup> <a name="scale_in_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.scaleInInput"></a>

```python
scale_in_input: LinuxVirtualMachineScaleSetScaleIn
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleIn">LinuxVirtualMachineScaleSetScaleIn</a>

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.secretInput"></a>

```python
secret_input: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret">LinuxVirtualMachineScaleSetSecret</a>]]

---

##### `secure_boot_enabled_input`<sup>Optional</sup> <a name="secure_boot_enabled_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.secureBootEnabledInput"></a>

```python
secure_boot_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `single_placement_group_input`<sup>Optional</sup> <a name="single_placement_group_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.singlePlacementGroupInput"></a>

```python
single_placement_group_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `source_image_id_input`<sup>Optional</sup> <a name="source_image_id_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.sourceImageIdInput"></a>

```python
source_image_id_input: str
```

- *Type:* str

---

##### `source_image_reference_input`<sup>Optional</sup> <a name="source_image_reference_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.sourceImageReferenceInput"></a>

```python
source_image_reference_input: LinuxVirtualMachineScaleSetSourceImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference">LinuxVirtualMachineScaleSetSourceImageReference</a>

---

##### `spot_restore_input`<sup>Optional</sup> <a name="spot_restore_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.spotRestoreInput"></a>

```python
spot_restore_input: LinuxVirtualMachineScaleSetSpotRestore
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestore">LinuxVirtualMachineScaleSetSpotRestore</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `termination_notification_input`<sup>Optional</sup> <a name="termination_notification_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.terminationNotificationInput"></a>

```python
termination_notification_input: LinuxVirtualMachineScaleSetTerminationNotification
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotification">LinuxVirtualMachineScaleSetTerminationNotification</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LinuxVirtualMachineScaleSetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts">LinuxVirtualMachineScaleSetTimeouts</a>]

---

##### `upgrade_mode_input`<sup>Optional</sup> <a name="upgrade_mode_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.upgradeModeInput"></a>

```python
upgrade_mode_input: str
```

- *Type:* str

---

##### `user_data_input`<sup>Optional</sup> <a name="user_data_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.userDataInput"></a>

```python
user_data_input: str
```

- *Type:* str

---

##### `vtpm_enabled_input`<sup>Optional</sup> <a name="vtpm_enabled_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.vtpmEnabledInput"></a>

```python
vtpm_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `zone_balance_input`<sup>Optional</sup> <a name="zone_balance_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.zoneBalanceInput"></a>

```python
zone_balance_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `zones_input`<sup>Optional</sup> <a name="zones_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.zonesInput"></a>

```python
zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

---

##### `capacity_reservation_group_id`<sup>Required</sup> <a name="capacity_reservation_group_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.capacityReservationGroupId"></a>

```python
capacity_reservation_group_id: str
```

- *Type:* str

---

##### `computer_name_prefix`<sup>Required</sup> <a name="computer_name_prefix" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.computerNamePrefix"></a>

```python
computer_name_prefix: str
```

- *Type:* str

---

##### `custom_data`<sup>Required</sup> <a name="custom_data" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.customData"></a>

```python
custom_data: str
```

- *Type:* str

---

##### `disable_password_authentication`<sup>Required</sup> <a name="disable_password_authentication" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.disablePasswordAuthentication"></a>

```python
disable_password_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `do_not_run_extensions_on_overprovisioned_machines`<sup>Required</sup> <a name="do_not_run_extensions_on_overprovisioned_machines" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.doNotRunExtensionsOnOverprovisionedMachines"></a>

```python
do_not_run_extensions_on_overprovisioned_machines: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `edge_zone`<sup>Required</sup> <a name="edge_zone" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.edgeZone"></a>

```python
edge_zone: str
```

- *Type:* str

---

##### `encryption_at_host_enabled`<sup>Required</sup> <a name="encryption_at_host_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.encryptionAtHostEnabled"></a>

```python
encryption_at_host_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `eviction_policy`<sup>Required</sup> <a name="eviction_policy" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.evictionPolicy"></a>

```python
eviction_policy: str
```

- *Type:* str

---

##### `extension_operations_enabled`<sup>Required</sup> <a name="extension_operations_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.extensionOperationsEnabled"></a>

```python
extension_operations_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `extensions_time_budget`<sup>Required</sup> <a name="extensions_time_budget" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.extensionsTimeBudget"></a>

```python
extensions_time_budget: str
```

- *Type:* str

---

##### `health_probe_id`<sup>Required</sup> <a name="health_probe_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.healthProbeId"></a>

```python
health_probe_id: str
```

- *Type:* str

---

##### `host_group_id`<sup>Required</sup> <a name="host_group_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.hostGroupId"></a>

```python
host_group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.instances"></a>

```python
instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `max_bid_price`<sup>Required</sup> <a name="max_bid_price" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.maxBidPrice"></a>

```python
max_bid_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `overprovision`<sup>Required</sup> <a name="overprovision" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.overprovision"></a>

```python
overprovision: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `platform_fault_domain_count`<sup>Required</sup> <a name="platform_fault_domain_count" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.platformFaultDomainCount"></a>

```python
platform_fault_domain_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.priority"></a>

```python
priority: str
```

- *Type:* str

---

##### `provision_vm_agent`<sup>Required</sup> <a name="provision_vm_agent" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.provisionVmAgent"></a>

```python
provision_vm_agent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `proximity_placement_group_id`<sup>Required</sup> <a name="proximity_placement_group_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.proximityPlacementGroupId"></a>

```python
proximity_placement_group_id: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `secure_boot_enabled`<sup>Required</sup> <a name="secure_boot_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.secureBootEnabled"></a>

```python
secure_boot_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `single_placement_group`<sup>Required</sup> <a name="single_placement_group" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.singlePlacementGroup"></a>

```python
single_placement_group: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `source_image_id`<sup>Required</sup> <a name="source_image_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.sourceImageId"></a>

```python
source_image_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `upgrade_mode`<sup>Required</sup> <a name="upgrade_mode" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.upgradeMode"></a>

```python
upgrade_mode: str
```

- *Type:* str

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

##### `vtpm_enabled`<sup>Required</sup> <a name="vtpm_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.vtpmEnabled"></a>

```python
vtpm_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `zone_balance`<sup>Required</sup> <a name="zone_balance" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.zoneBalance"></a>

```python
zone_balance: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LinuxVirtualMachineScaleSetAdditionalCapabilities <a name="LinuxVirtualMachineScaleSetAdditionalCapabilities" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities(
  ultra_ssd_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities.property.ultraSsdEnabled">ultra_ssd_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#ultra_ssd_enabled LinuxVirtualMachineScaleSet#ultra_ssd_enabled}. |

---

##### `ultra_ssd_enabled`<sup>Optional</sup> <a name="ultra_ssd_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities.property.ultraSsdEnabled"></a>

```python
ultra_ssd_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#ultra_ssd_enabled LinuxVirtualMachineScaleSet#ultra_ssd_enabled}.

---

### LinuxVirtualMachineScaleSetAdminSshKey <a name="LinuxVirtualMachineScaleSetAdminSshKey" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey(
  public_key: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey.property.publicKey">public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#public_key LinuxVirtualMachineScaleSet#public_key}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#username LinuxVirtualMachineScaleSet#username}. |

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#public_key LinuxVirtualMachineScaleSet#public_key}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#username LinuxVirtualMachineScaleSet#username}.

---

### LinuxVirtualMachineScaleSetAutomaticInstanceRepair <a name="LinuxVirtualMachineScaleSetAutomaticInstanceRepair" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair(
  enabled: typing.Union[bool, IResolvable],
  action: str = None,
  grace_period: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#enabled LinuxVirtualMachineScaleSet#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#action LinuxVirtualMachineScaleSet#action}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair.property.gracePeriod">grace_period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#grace_period LinuxVirtualMachineScaleSet#grace_period}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#enabled LinuxVirtualMachineScaleSet#enabled}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#action LinuxVirtualMachineScaleSet#action}.

---

##### `grace_period`<sup>Optional</sup> <a name="grace_period" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair.property.gracePeriod"></a>

```python
grace_period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#grace_period LinuxVirtualMachineScaleSet#grace_period}.

---

### LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy <a name="LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy(
  disable_automatic_rollback: typing.Union[bool, IResolvable],
  enable_automatic_os_upgrade: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy.property.disableAutomaticRollback">disable_automatic_rollback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#disable_automatic_rollback LinuxVirtualMachineScaleSet#disable_automatic_rollback}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy.property.enableAutomaticOsUpgrade">enable_automatic_os_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#enable_automatic_os_upgrade LinuxVirtualMachineScaleSet#enable_automatic_os_upgrade}. |

---

##### `disable_automatic_rollback`<sup>Required</sup> <a name="disable_automatic_rollback" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy.property.disableAutomaticRollback"></a>

```python
disable_automatic_rollback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#disable_automatic_rollback LinuxVirtualMachineScaleSet#disable_automatic_rollback}.

---

##### `enable_automatic_os_upgrade`<sup>Required</sup> <a name="enable_automatic_os_upgrade" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy.property.enableAutomaticOsUpgrade"></a>

```python
enable_automatic_os_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#enable_automatic_os_upgrade LinuxVirtualMachineScaleSet#enable_automatic_os_upgrade}.

---

### LinuxVirtualMachineScaleSetBootDiagnostics <a name="LinuxVirtualMachineScaleSetBootDiagnostics" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics(
  storage_account_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics.property.storageAccountUri">storage_account_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#storage_account_uri LinuxVirtualMachineScaleSet#storage_account_uri}. |

---

##### `storage_account_uri`<sup>Optional</sup> <a name="storage_account_uri" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics.property.storageAccountUri"></a>

```python
storage_account_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#storage_account_uri LinuxVirtualMachineScaleSet#storage_account_uri}.

---

### LinuxVirtualMachineScaleSetConfig <a name="LinuxVirtualMachineScaleSetConfig" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  admin_username: str,
  location: str,
  name: str,
  network_interface: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterface]],
  os_disk: LinuxVirtualMachineScaleSetOsDisk,
  resource_group_name: str,
  sku: str,
  additional_capabilities: LinuxVirtualMachineScaleSetAdditionalCapabilities = None,
  admin_password: str = None,
  admin_ssh_key: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetAdminSshKey]] = None,
  automatic_instance_repair: LinuxVirtualMachineScaleSetAutomaticInstanceRepair = None,
  automatic_os_upgrade_policy: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy = None,
  boot_diagnostics: LinuxVirtualMachineScaleSetBootDiagnostics = None,
  capacity_reservation_group_id: str = None,
  computer_name_prefix: str = None,
  custom_data: str = None,
  data_disk: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetDataDisk]] = None,
  disable_password_authentication: typing.Union[bool, IResolvable] = None,
  do_not_run_extensions_on_overprovisioned_machines: typing.Union[bool, IResolvable] = None,
  edge_zone: str = None,
  encryption_at_host_enabled: typing.Union[bool, IResolvable] = None,
  eviction_policy: str = None,
  extension: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetExtension]] = None,
  extension_operations_enabled: typing.Union[bool, IResolvable] = None,
  extensions_time_budget: str = None,
  gallery_application: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetGalleryApplication]] = None,
  health_probe_id: str = None,
  host_group_id: str = None,
  id: str = None,
  identity: LinuxVirtualMachineScaleSetIdentity = None,
  instances: typing.Union[int, float] = None,
  max_bid_price: typing.Union[int, float] = None,
  overprovision: typing.Union[bool, IResolvable] = None,
  plan: LinuxVirtualMachineScaleSetPlan = None,
  platform_fault_domain_count: typing.Union[int, float] = None,
  priority: str = None,
  provision_vm_agent: typing.Union[bool, IResolvable] = None,
  proximity_placement_group_id: str = None,
  rolling_upgrade_policy: LinuxVirtualMachineScaleSetRollingUpgradePolicy = None,
  scale_in: LinuxVirtualMachineScaleSetScaleIn = None,
  secret: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetSecret]] = None,
  secure_boot_enabled: typing.Union[bool, IResolvable] = None,
  single_placement_group: typing.Union[bool, IResolvable] = None,
  source_image_id: str = None,
  source_image_reference: LinuxVirtualMachineScaleSetSourceImageReference = None,
  spot_restore: LinuxVirtualMachineScaleSetSpotRestore = None,
  tags: typing.Mapping[str] = None,
  termination_notification: LinuxVirtualMachineScaleSetTerminationNotification = None,
  timeouts: LinuxVirtualMachineScaleSetTimeouts = None,
  upgrade_mode: str = None,
  user_data: str = None,
  vtpm_enabled: typing.Union[bool, IResolvable] = None,
  zone_balance: typing.Union[bool, IResolvable] = None,
  zones: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.adminUsername">admin_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#admin_username LinuxVirtualMachineScaleSet#admin_username}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#location LinuxVirtualMachineScaleSet#location}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface">LinuxVirtualMachineScaleSetNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.osDisk">os_disk</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk">LinuxVirtualMachineScaleSetOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#resource_group_name LinuxVirtualMachineScaleSet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#sku LinuxVirtualMachineScaleSet#sku}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.additionalCapabilities">additional_capabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities">LinuxVirtualMachineScaleSetAdditionalCapabilities</a></code> | additional_capabilities block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.adminPassword">admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#admin_password LinuxVirtualMachineScaleSet#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.adminSshKey">admin_ssh_key</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey">LinuxVirtualMachineScaleSetAdminSshKey</a>]]</code> | admin_ssh_key block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.automaticInstanceRepair">automatic_instance_repair</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair">LinuxVirtualMachineScaleSetAutomaticInstanceRepair</a></code> | automatic_instance_repair block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.automaticOsUpgradePolicy">automatic_os_upgrade_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy">LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy</a></code> | automatic_os_upgrade_policy block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.bootDiagnostics">boot_diagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics">LinuxVirtualMachineScaleSetBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.capacityReservationGroupId">capacity_reservation_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#capacity_reservation_group_id LinuxVirtualMachineScaleSet#capacity_reservation_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.computerNamePrefix">computer_name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#computer_name_prefix LinuxVirtualMachineScaleSet#computer_name_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.customData">custom_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#custom_data LinuxVirtualMachineScaleSet#custom_data}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.dataDisk">data_disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk">LinuxVirtualMachineScaleSetDataDisk</a>]]</code> | data_disk block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.disablePasswordAuthentication">disable_password_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#disable_password_authentication LinuxVirtualMachineScaleSet#disable_password_authentication}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.doNotRunExtensionsOnOverprovisionedMachines">do_not_run_extensions_on_overprovisioned_machines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#do_not_run_extensions_on_overprovisioned_machines LinuxVirtualMachineScaleSet#do_not_run_extensions_on_overprovisioned_machines}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.edgeZone">edge_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#edge_zone LinuxVirtualMachineScaleSet#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.encryptionAtHostEnabled">encryption_at_host_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#encryption_at_host_enabled LinuxVirtualMachineScaleSet#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.evictionPolicy">eviction_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#eviction_policy LinuxVirtualMachineScaleSet#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.extension">extension</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension">LinuxVirtualMachineScaleSetExtension</a>]]</code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.extensionOperationsEnabled">extension_operations_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#extension_operations_enabled LinuxVirtualMachineScaleSet#extension_operations_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.extensionsTimeBudget">extensions_time_budget</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#extensions_time_budget LinuxVirtualMachineScaleSet#extensions_time_budget}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.galleryApplication">gallery_application</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplication">LinuxVirtualMachineScaleSetGalleryApplication</a>]]</code> | gallery_application block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.healthProbeId">health_probe_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#health_probe_id LinuxVirtualMachineScaleSet#health_probe_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.hostGroupId">host_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#host_group_id LinuxVirtualMachineScaleSet#host_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#id LinuxVirtualMachineScaleSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentity">LinuxVirtualMachineScaleSetIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.instances">instances</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#instances LinuxVirtualMachineScaleSet#instances}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.maxBidPrice">max_bid_price</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#max_bid_price LinuxVirtualMachineScaleSet#max_bid_price}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.overprovision">overprovision</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#overprovision LinuxVirtualMachineScaleSet#overprovision}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan">LinuxVirtualMachineScaleSetPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.platformFaultDomainCount">platform_fault_domain_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#platform_fault_domain_count LinuxVirtualMachineScaleSet#platform_fault_domain_count}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.priority">priority</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#priority LinuxVirtualMachineScaleSet#priority}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.provisionVmAgent">provision_vm_agent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#provision_vm_agent LinuxVirtualMachineScaleSet#provision_vm_agent}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.proximityPlacementGroupId">proximity_placement_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#proximity_placement_group_id LinuxVirtualMachineScaleSet#proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.rollingUpgradePolicy">rolling_upgrade_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy">LinuxVirtualMachineScaleSetRollingUpgradePolicy</a></code> | rolling_upgrade_policy block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.scaleIn">scale_in</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleIn">LinuxVirtualMachineScaleSetScaleIn</a></code> | scale_in block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.secret">secret</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret">LinuxVirtualMachineScaleSetSecret</a>]]</code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.secureBootEnabled">secure_boot_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#secure_boot_enabled LinuxVirtualMachineScaleSet#secure_boot_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.singlePlacementGroup">single_placement_group</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#single_placement_group LinuxVirtualMachineScaleSet#single_placement_group}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.sourceImageId">source_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#source_image_id LinuxVirtualMachineScaleSet#source_image_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.sourceImageReference">source_image_reference</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference">LinuxVirtualMachineScaleSetSourceImageReference</a></code> | source_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.spotRestore">spot_restore</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestore">LinuxVirtualMachineScaleSetSpotRestore</a></code> | spot_restore block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#tags LinuxVirtualMachineScaleSet#tags}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.terminationNotification">termination_notification</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotification">LinuxVirtualMachineScaleSetTerminationNotification</a></code> | termination_notification block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts">LinuxVirtualMachineScaleSetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.upgradeMode">upgrade_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#upgrade_mode LinuxVirtualMachineScaleSet#upgrade_mode}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#user_data LinuxVirtualMachineScaleSet#user_data}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.vtpmEnabled">vtpm_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#vtpm_enabled LinuxVirtualMachineScaleSet#vtpm_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.zoneBalance">zone_balance</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#zone_balance LinuxVirtualMachineScaleSet#zone_balance}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#zones LinuxVirtualMachineScaleSet#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#admin_username LinuxVirtualMachineScaleSet#admin_username}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#location LinuxVirtualMachineScaleSet#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}.

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.networkInterface"></a>

```python
network_interface: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface">LinuxVirtualMachineScaleSetNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#network_interface LinuxVirtualMachineScaleSet#network_interface}

---

##### `os_disk`<sup>Required</sup> <a name="os_disk" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.osDisk"></a>

```python
os_disk: LinuxVirtualMachineScaleSetOsDisk
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk">LinuxVirtualMachineScaleSetOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#os_disk LinuxVirtualMachineScaleSet#os_disk}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#resource_group_name LinuxVirtualMachineScaleSet#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#sku LinuxVirtualMachineScaleSet#sku}.

---

##### `additional_capabilities`<sup>Optional</sup> <a name="additional_capabilities" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.additionalCapabilities"></a>

```python
additional_capabilities: LinuxVirtualMachineScaleSetAdditionalCapabilities
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities">LinuxVirtualMachineScaleSetAdditionalCapabilities</a>

additional_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#additional_capabilities LinuxVirtualMachineScaleSet#additional_capabilities}

---

##### `admin_password`<sup>Optional</sup> <a name="admin_password" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#admin_password LinuxVirtualMachineScaleSet#admin_password}.

---

##### `admin_ssh_key`<sup>Optional</sup> <a name="admin_ssh_key" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.adminSshKey"></a>

```python
admin_ssh_key: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetAdminSshKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey">LinuxVirtualMachineScaleSetAdminSshKey</a>]]

admin_ssh_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#admin_ssh_key LinuxVirtualMachineScaleSet#admin_ssh_key}

---

##### `automatic_instance_repair`<sup>Optional</sup> <a name="automatic_instance_repair" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.automaticInstanceRepair"></a>

```python
automatic_instance_repair: LinuxVirtualMachineScaleSetAutomaticInstanceRepair
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair">LinuxVirtualMachineScaleSetAutomaticInstanceRepair</a>

automatic_instance_repair block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#automatic_instance_repair LinuxVirtualMachineScaleSet#automatic_instance_repair}

---

##### `automatic_os_upgrade_policy`<sup>Optional</sup> <a name="automatic_os_upgrade_policy" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.automaticOsUpgradePolicy"></a>

```python
automatic_os_upgrade_policy: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy">LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy</a>

automatic_os_upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#automatic_os_upgrade_policy LinuxVirtualMachineScaleSet#automatic_os_upgrade_policy}

---

##### `boot_diagnostics`<sup>Optional</sup> <a name="boot_diagnostics" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.bootDiagnostics"></a>

```python
boot_diagnostics: LinuxVirtualMachineScaleSetBootDiagnostics
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics">LinuxVirtualMachineScaleSetBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#boot_diagnostics LinuxVirtualMachineScaleSet#boot_diagnostics}

---

##### `capacity_reservation_group_id`<sup>Optional</sup> <a name="capacity_reservation_group_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.capacityReservationGroupId"></a>

```python
capacity_reservation_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#capacity_reservation_group_id LinuxVirtualMachineScaleSet#capacity_reservation_group_id}.

---

##### `computer_name_prefix`<sup>Optional</sup> <a name="computer_name_prefix" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.computerNamePrefix"></a>

```python
computer_name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#computer_name_prefix LinuxVirtualMachineScaleSet#computer_name_prefix}.

---

##### `custom_data`<sup>Optional</sup> <a name="custom_data" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.customData"></a>

```python
custom_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#custom_data LinuxVirtualMachineScaleSet#custom_data}.

---

##### `data_disk`<sup>Optional</sup> <a name="data_disk" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.dataDisk"></a>

```python
data_disk: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetDataDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk">LinuxVirtualMachineScaleSetDataDisk</a>]]

data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#data_disk LinuxVirtualMachineScaleSet#data_disk}

---

##### `disable_password_authentication`<sup>Optional</sup> <a name="disable_password_authentication" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.disablePasswordAuthentication"></a>

```python
disable_password_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#disable_password_authentication LinuxVirtualMachineScaleSet#disable_password_authentication}.

---

##### `do_not_run_extensions_on_overprovisioned_machines`<sup>Optional</sup> <a name="do_not_run_extensions_on_overprovisioned_machines" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.doNotRunExtensionsOnOverprovisionedMachines"></a>

```python
do_not_run_extensions_on_overprovisioned_machines: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#do_not_run_extensions_on_overprovisioned_machines LinuxVirtualMachineScaleSet#do_not_run_extensions_on_overprovisioned_machines}.

---

##### `edge_zone`<sup>Optional</sup> <a name="edge_zone" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.edgeZone"></a>

```python
edge_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#edge_zone LinuxVirtualMachineScaleSet#edge_zone}.

---

##### `encryption_at_host_enabled`<sup>Optional</sup> <a name="encryption_at_host_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.encryptionAtHostEnabled"></a>

```python
encryption_at_host_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#encryption_at_host_enabled LinuxVirtualMachineScaleSet#encryption_at_host_enabled}.

---

##### `eviction_policy`<sup>Optional</sup> <a name="eviction_policy" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.evictionPolicy"></a>

```python
eviction_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#eviction_policy LinuxVirtualMachineScaleSet#eviction_policy}.

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.extension"></a>

```python
extension: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetExtension]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension">LinuxVirtualMachineScaleSetExtension</a>]]

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#extension LinuxVirtualMachineScaleSet#extension}

---

##### `extension_operations_enabled`<sup>Optional</sup> <a name="extension_operations_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.extensionOperationsEnabled"></a>

```python
extension_operations_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#extension_operations_enabled LinuxVirtualMachineScaleSet#extension_operations_enabled}.

---

##### `extensions_time_budget`<sup>Optional</sup> <a name="extensions_time_budget" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.extensionsTimeBudget"></a>

```python
extensions_time_budget: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#extensions_time_budget LinuxVirtualMachineScaleSet#extensions_time_budget}.

---

##### `gallery_application`<sup>Optional</sup> <a name="gallery_application" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.galleryApplication"></a>

```python
gallery_application: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetGalleryApplication]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplication">LinuxVirtualMachineScaleSetGalleryApplication</a>]]

gallery_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#gallery_application LinuxVirtualMachineScaleSet#gallery_application}

---

##### `health_probe_id`<sup>Optional</sup> <a name="health_probe_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.healthProbeId"></a>

```python
health_probe_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#health_probe_id LinuxVirtualMachineScaleSet#health_probe_id}.

---

##### `host_group_id`<sup>Optional</sup> <a name="host_group_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.hostGroupId"></a>

```python
host_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#host_group_id LinuxVirtualMachineScaleSet#host_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#id LinuxVirtualMachineScaleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.identity"></a>

```python
identity: LinuxVirtualMachineScaleSetIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentity">LinuxVirtualMachineScaleSetIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#identity LinuxVirtualMachineScaleSet#identity}

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.instances"></a>

```python
instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#instances LinuxVirtualMachineScaleSet#instances}.

---

##### `max_bid_price`<sup>Optional</sup> <a name="max_bid_price" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.maxBidPrice"></a>

```python
max_bid_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#max_bid_price LinuxVirtualMachineScaleSet#max_bid_price}.

---

##### `overprovision`<sup>Optional</sup> <a name="overprovision" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.overprovision"></a>

```python
overprovision: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#overprovision LinuxVirtualMachineScaleSet#overprovision}.

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.plan"></a>

```python
plan: LinuxVirtualMachineScaleSetPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan">LinuxVirtualMachineScaleSetPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#plan LinuxVirtualMachineScaleSet#plan}

---

##### `platform_fault_domain_count`<sup>Optional</sup> <a name="platform_fault_domain_count" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.platformFaultDomainCount"></a>

```python
platform_fault_domain_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#platform_fault_domain_count LinuxVirtualMachineScaleSet#platform_fault_domain_count}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.priority"></a>

```python
priority: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#priority LinuxVirtualMachineScaleSet#priority}.

---

##### `provision_vm_agent`<sup>Optional</sup> <a name="provision_vm_agent" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.provisionVmAgent"></a>

```python
provision_vm_agent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#provision_vm_agent LinuxVirtualMachineScaleSet#provision_vm_agent}.

---

##### `proximity_placement_group_id`<sup>Optional</sup> <a name="proximity_placement_group_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.proximityPlacementGroupId"></a>

```python
proximity_placement_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#proximity_placement_group_id LinuxVirtualMachineScaleSet#proximity_placement_group_id}.

---

##### `rolling_upgrade_policy`<sup>Optional</sup> <a name="rolling_upgrade_policy" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.rollingUpgradePolicy"></a>

```python
rolling_upgrade_policy: LinuxVirtualMachineScaleSetRollingUpgradePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy">LinuxVirtualMachineScaleSetRollingUpgradePolicy</a>

rolling_upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#rolling_upgrade_policy LinuxVirtualMachineScaleSet#rolling_upgrade_policy}

---

##### `scale_in`<sup>Optional</sup> <a name="scale_in" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.scaleIn"></a>

```python
scale_in: LinuxVirtualMachineScaleSetScaleIn
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleIn">LinuxVirtualMachineScaleSetScaleIn</a>

scale_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#scale_in LinuxVirtualMachineScaleSet#scale_in}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.secret"></a>

```python
secret: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret">LinuxVirtualMachineScaleSetSecret</a>]]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#secret LinuxVirtualMachineScaleSet#secret}

---

##### `secure_boot_enabled`<sup>Optional</sup> <a name="secure_boot_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.secureBootEnabled"></a>

```python
secure_boot_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#secure_boot_enabled LinuxVirtualMachineScaleSet#secure_boot_enabled}.

---

##### `single_placement_group`<sup>Optional</sup> <a name="single_placement_group" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.singlePlacementGroup"></a>

```python
single_placement_group: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#single_placement_group LinuxVirtualMachineScaleSet#single_placement_group}.

---

##### `source_image_id`<sup>Optional</sup> <a name="source_image_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.sourceImageId"></a>

```python
source_image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#source_image_id LinuxVirtualMachineScaleSet#source_image_id}.

---

##### `source_image_reference`<sup>Optional</sup> <a name="source_image_reference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.sourceImageReference"></a>

```python
source_image_reference: LinuxVirtualMachineScaleSetSourceImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference">LinuxVirtualMachineScaleSetSourceImageReference</a>

source_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#source_image_reference LinuxVirtualMachineScaleSet#source_image_reference}

---

##### `spot_restore`<sup>Optional</sup> <a name="spot_restore" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.spotRestore"></a>

```python
spot_restore: LinuxVirtualMachineScaleSetSpotRestore
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestore">LinuxVirtualMachineScaleSetSpotRestore</a>

spot_restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#spot_restore LinuxVirtualMachineScaleSet#spot_restore}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#tags LinuxVirtualMachineScaleSet#tags}.

---

##### `termination_notification`<sup>Optional</sup> <a name="termination_notification" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.terminationNotification"></a>

```python
termination_notification: LinuxVirtualMachineScaleSetTerminationNotification
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotification">LinuxVirtualMachineScaleSetTerminationNotification</a>

termination_notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#termination_notification LinuxVirtualMachineScaleSet#termination_notification}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.timeouts"></a>

```python
timeouts: LinuxVirtualMachineScaleSetTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts">LinuxVirtualMachineScaleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#timeouts LinuxVirtualMachineScaleSet#timeouts}

---

##### `upgrade_mode`<sup>Optional</sup> <a name="upgrade_mode" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.upgradeMode"></a>

```python
upgrade_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#upgrade_mode LinuxVirtualMachineScaleSet#upgrade_mode}.

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.userData"></a>

```python
user_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#user_data LinuxVirtualMachineScaleSet#user_data}.

---

##### `vtpm_enabled`<sup>Optional</sup> <a name="vtpm_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.vtpmEnabled"></a>

```python
vtpm_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#vtpm_enabled LinuxVirtualMachineScaleSet#vtpm_enabled}.

---

##### `zone_balance`<sup>Optional</sup> <a name="zone_balance" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.zoneBalance"></a>

```python
zone_balance: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#zone_balance LinuxVirtualMachineScaleSet#zone_balance}.

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetConfig.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#zones LinuxVirtualMachineScaleSet#zones}.

---

### LinuxVirtualMachineScaleSetDataDisk <a name="LinuxVirtualMachineScaleSetDataDisk" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk(
  caching: str,
  disk_size_gb: typing.Union[int, float],
  lun: typing.Union[int, float],
  storage_account_type: str,
  create_option: str = None,
  disk_encryption_set_id: str = None,
  name: str = None,
  ultra_ssd_disk_iops_read_write: typing.Union[int, float] = None,
  ultra_ssd_disk_mbps_read_write: typing.Union[int, float] = None,
  write_accelerator_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.caching">caching</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#caching LinuxVirtualMachineScaleSet#caching}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#disk_size_gb LinuxVirtualMachineScaleSet#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.lun">lun</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#lun LinuxVirtualMachineScaleSet#lun}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.storageAccountType">storage_account_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#storage_account_type LinuxVirtualMachineScaleSet#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.createOption">create_option</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#create_option LinuxVirtualMachineScaleSet#create_option}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.diskEncryptionSetId">disk_encryption_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#disk_encryption_set_id LinuxVirtualMachineScaleSet#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.ultraSsdDiskIopsReadWrite">ultra_ssd_disk_iops_read_write</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#ultra_ssd_disk_iops_read_write LinuxVirtualMachineScaleSet#ultra_ssd_disk_iops_read_write}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.ultraSsdDiskMbpsReadWrite">ultra_ssd_disk_mbps_read_write</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#ultra_ssd_disk_mbps_read_write LinuxVirtualMachineScaleSet#ultra_ssd_disk_mbps_read_write}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.writeAcceleratorEnabled">write_accelerator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#write_accelerator_enabled LinuxVirtualMachineScaleSet#write_accelerator_enabled}. |

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.caching"></a>

```python
caching: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#caching LinuxVirtualMachineScaleSet#caching}.

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#disk_size_gb LinuxVirtualMachineScaleSet#disk_size_gb}.

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.lun"></a>

```python
lun: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#lun LinuxVirtualMachineScaleSet#lun}.

---

##### `storage_account_type`<sup>Required</sup> <a name="storage_account_type" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.storageAccountType"></a>

```python
storage_account_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#storage_account_type LinuxVirtualMachineScaleSet#storage_account_type}.

---

##### `create_option`<sup>Optional</sup> <a name="create_option" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.createOption"></a>

```python
create_option: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#create_option LinuxVirtualMachineScaleSet#create_option}.

---

##### `disk_encryption_set_id`<sup>Optional</sup> <a name="disk_encryption_set_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.diskEncryptionSetId"></a>

```python
disk_encryption_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#disk_encryption_set_id LinuxVirtualMachineScaleSet#disk_encryption_set_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}.

---

##### `ultra_ssd_disk_iops_read_write`<sup>Optional</sup> <a name="ultra_ssd_disk_iops_read_write" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.ultraSsdDiskIopsReadWrite"></a>

```python
ultra_ssd_disk_iops_read_write: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#ultra_ssd_disk_iops_read_write LinuxVirtualMachineScaleSet#ultra_ssd_disk_iops_read_write}.

---

##### `ultra_ssd_disk_mbps_read_write`<sup>Optional</sup> <a name="ultra_ssd_disk_mbps_read_write" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.ultraSsdDiskMbpsReadWrite"></a>

```python
ultra_ssd_disk_mbps_read_write: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#ultra_ssd_disk_mbps_read_write LinuxVirtualMachineScaleSet#ultra_ssd_disk_mbps_read_write}.

---

##### `write_accelerator_enabled`<sup>Optional</sup> <a name="write_accelerator_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk.property.writeAcceleratorEnabled"></a>

```python
write_accelerator_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#write_accelerator_enabled LinuxVirtualMachineScaleSet#write_accelerator_enabled}.

---

### LinuxVirtualMachineScaleSetExtension <a name="LinuxVirtualMachineScaleSetExtension" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension(
  name: str,
  publisher: str,
  type: str,
  type_handler_version: str,
  automatic_upgrade_enabled: typing.Union[bool, IResolvable] = None,
  auto_upgrade_minor_version: typing.Union[bool, IResolvable] = None,
  force_update_tag: str = None,
  protected_settings: str = None,
  protected_settings_from_key_vault: LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault = None,
  provision_after_extensions: typing.List[str] = None,
  settings: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#publisher LinuxVirtualMachineScaleSet#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#type LinuxVirtualMachineScaleSet#type}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.typeHandlerVersion">type_handler_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#type_handler_version LinuxVirtualMachineScaleSet#type_handler_version}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.automaticUpgradeEnabled">automatic_upgrade_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#automatic_upgrade_enabled LinuxVirtualMachineScaleSet#automatic_upgrade_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.autoUpgradeMinorVersion">auto_upgrade_minor_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#auto_upgrade_minor_version LinuxVirtualMachineScaleSet#auto_upgrade_minor_version}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.forceUpdateTag">force_update_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#force_update_tag LinuxVirtualMachineScaleSet#force_update_tag}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.protectedSettings">protected_settings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#protected_settings LinuxVirtualMachineScaleSet#protected_settings}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.protectedSettingsFromKeyVault">protected_settings_from_key_vault</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a></code> | protected_settings_from_key_vault block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.provisionAfterExtensions">provision_after_extensions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#provision_after_extensions LinuxVirtualMachineScaleSet#provision_after_extensions}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.settings">settings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#settings LinuxVirtualMachineScaleSet#settings}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#publisher LinuxVirtualMachineScaleSet#publisher}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#type LinuxVirtualMachineScaleSet#type}.

---

##### `type_handler_version`<sup>Required</sup> <a name="type_handler_version" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.typeHandlerVersion"></a>

```python
type_handler_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#type_handler_version LinuxVirtualMachineScaleSet#type_handler_version}.

---

##### `automatic_upgrade_enabled`<sup>Optional</sup> <a name="automatic_upgrade_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.automaticUpgradeEnabled"></a>

```python
automatic_upgrade_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#automatic_upgrade_enabled LinuxVirtualMachineScaleSet#automatic_upgrade_enabled}.

---

##### `auto_upgrade_minor_version`<sup>Optional</sup> <a name="auto_upgrade_minor_version" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.autoUpgradeMinorVersion"></a>

```python
auto_upgrade_minor_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#auto_upgrade_minor_version LinuxVirtualMachineScaleSet#auto_upgrade_minor_version}.

---

##### `force_update_tag`<sup>Optional</sup> <a name="force_update_tag" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.forceUpdateTag"></a>

```python
force_update_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#force_update_tag LinuxVirtualMachineScaleSet#force_update_tag}.

---

##### `protected_settings`<sup>Optional</sup> <a name="protected_settings" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.protectedSettings"></a>

```python
protected_settings: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#protected_settings LinuxVirtualMachineScaleSet#protected_settings}.

---

##### `protected_settings_from_key_vault`<sup>Optional</sup> <a name="protected_settings_from_key_vault" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.protectedSettingsFromKeyVault"></a>

```python
protected_settings_from_key_vault: LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

protected_settings_from_key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#protected_settings_from_key_vault LinuxVirtualMachineScaleSet#protected_settings_from_key_vault}

---

##### `provision_after_extensions`<sup>Optional</sup> <a name="provision_after_extensions" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.provisionAfterExtensions"></a>

```python
provision_after_extensions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#provision_after_extensions LinuxVirtualMachineScaleSet#provision_after_extensions}.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension.property.settings"></a>

```python
settings: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#settings LinuxVirtualMachineScaleSet#settings}.

---

### LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault <a name="LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault(
  secret_url: str,
  source_vault_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.secretUrl">secret_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#secret_url LinuxVirtualMachineScaleSet#secret_url}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.sourceVaultId">source_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#source_vault_id LinuxVirtualMachineScaleSet#source_vault_id}. |

---

##### `secret_url`<sup>Required</sup> <a name="secret_url" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.secretUrl"></a>

```python
secret_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#secret_url LinuxVirtualMachineScaleSet#secret_url}.

---

##### `source_vault_id`<sup>Required</sup> <a name="source_vault_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault.property.sourceVaultId"></a>

```python
source_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#source_vault_id LinuxVirtualMachineScaleSet#source_vault_id}.

---

### LinuxVirtualMachineScaleSetGalleryApplication <a name="LinuxVirtualMachineScaleSetGalleryApplication" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplication.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplication(
  version_id: str,
  configuration_blob_uri: str = None,
  order: typing.Union[int, float] = None,
  tag: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplication.property.versionId">version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#version_id LinuxVirtualMachineScaleSet#version_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplication.property.configurationBlobUri">configuration_blob_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#configuration_blob_uri LinuxVirtualMachineScaleSet#configuration_blob_uri}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplication.property.order">order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#order LinuxVirtualMachineScaleSet#order}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplication.property.tag">tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#tag LinuxVirtualMachineScaleSet#tag}. |

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplication.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#version_id LinuxVirtualMachineScaleSet#version_id}.

---

##### `configuration_blob_uri`<sup>Optional</sup> <a name="configuration_blob_uri" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplication.property.configurationBlobUri"></a>

```python
configuration_blob_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#configuration_blob_uri LinuxVirtualMachineScaleSet#configuration_blob_uri}.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplication.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#order LinuxVirtualMachineScaleSet#order}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplication.property.tag"></a>

```python
tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#tag LinuxVirtualMachineScaleSet#tag}.

---

### LinuxVirtualMachineScaleSetIdentity <a name="LinuxVirtualMachineScaleSetIdentity" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#type LinuxVirtualMachineScaleSet#type}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#identity_ids LinuxVirtualMachineScaleSet#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#type LinuxVirtualMachineScaleSet#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#identity_ids LinuxVirtualMachineScaleSet#identity_ids}.

---

### LinuxVirtualMachineScaleSetNetworkInterface <a name="LinuxVirtualMachineScaleSetNetworkInterface" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface(
  ip_configuration: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration]],
  name: str,
  dns_servers: typing.List[str] = None,
  enable_accelerated_networking: typing.Union[bool, IResolvable] = None,
  enable_ip_forwarding: typing.Union[bool, IResolvable] = None,
  network_security_group_id: str = None,
  primary: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.ipConfiguration">ip_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a>]]</code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.dnsServers">dns_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#dns_servers LinuxVirtualMachineScaleSet#dns_servers}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.enableAcceleratedNetworking">enable_accelerated_networking</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#enable_accelerated_networking LinuxVirtualMachineScaleSet#enable_accelerated_networking}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.enableIpForwarding">enable_ip_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#enable_ip_forwarding LinuxVirtualMachineScaleSet#enable_ip_forwarding}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.networkSecurityGroupId">network_security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#network_security_group_id LinuxVirtualMachineScaleSet#network_security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#primary LinuxVirtualMachineScaleSet#primary}. |

---

##### `ip_configuration`<sup>Required</sup> <a name="ip_configuration" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.ipConfiguration"></a>

```python
ip_configuration: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a>]]

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#ip_configuration LinuxVirtualMachineScaleSet#ip_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}.

---

##### `dns_servers`<sup>Optional</sup> <a name="dns_servers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.dnsServers"></a>

```python
dns_servers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#dns_servers LinuxVirtualMachineScaleSet#dns_servers}.

---

##### `enable_accelerated_networking`<sup>Optional</sup> <a name="enable_accelerated_networking" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.enableAcceleratedNetworking"></a>

```python
enable_accelerated_networking: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#enable_accelerated_networking LinuxVirtualMachineScaleSet#enable_accelerated_networking}.

---

##### `enable_ip_forwarding`<sup>Optional</sup> <a name="enable_ip_forwarding" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.enableIpForwarding"></a>

```python
enable_ip_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#enable_ip_forwarding LinuxVirtualMachineScaleSet#enable_ip_forwarding}.

---

##### `network_security_group_id`<sup>Optional</sup> <a name="network_security_group_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.networkSecurityGroupId"></a>

```python
network_security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#network_security_group_id LinuxVirtualMachineScaleSet#network_security_group_id}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#primary LinuxVirtualMachineScaleSet#primary}.

---

### LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration <a name="LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration(
  name: str,
  application_gateway_backend_address_pool_ids: typing.List[str] = None,
  application_security_group_ids: typing.List[str] = None,
  load_balancer_backend_address_pool_ids: typing.List[str] = None,
  load_balancer_inbound_nat_rules_ids: typing.List[str] = None,
  primary: typing.Union[bool, IResolvable] = None,
  public_ip_address: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress]] = None,
  subnet_id: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.applicationGatewayBackendAddressPoolIds">application_gateway_backend_address_pool_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#application_gateway_backend_address_pool_ids LinuxVirtualMachineScaleSet#application_gateway_backend_address_pool_ids}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.applicationSecurityGroupIds">application_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#application_security_group_ids LinuxVirtualMachineScaleSet#application_security_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.loadBalancerBackendAddressPoolIds">load_balancer_backend_address_pool_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#load_balancer_backend_address_pool_ids LinuxVirtualMachineScaleSet#load_balancer_backend_address_pool_ids}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.loadBalancerInboundNatRulesIds">load_balancer_inbound_nat_rules_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#load_balancer_inbound_nat_rules_ids LinuxVirtualMachineScaleSet#load_balancer_inbound_nat_rules_ids}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#primary LinuxVirtualMachineScaleSet#primary}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.publicIpAddress">public_ip_address</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress</a>]]</code> | public_ip_address block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#subnet_id LinuxVirtualMachineScaleSet#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#version LinuxVirtualMachineScaleSet#version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}.

---

##### `application_gateway_backend_address_pool_ids`<sup>Optional</sup> <a name="application_gateway_backend_address_pool_ids" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.applicationGatewayBackendAddressPoolIds"></a>

```python
application_gateway_backend_address_pool_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#application_gateway_backend_address_pool_ids LinuxVirtualMachineScaleSet#application_gateway_backend_address_pool_ids}.

---

##### `application_security_group_ids`<sup>Optional</sup> <a name="application_security_group_ids" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.applicationSecurityGroupIds"></a>

```python
application_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#application_security_group_ids LinuxVirtualMachineScaleSet#application_security_group_ids}.

---

##### `load_balancer_backend_address_pool_ids`<sup>Optional</sup> <a name="load_balancer_backend_address_pool_ids" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.loadBalancerBackendAddressPoolIds"></a>

```python
load_balancer_backend_address_pool_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#load_balancer_backend_address_pool_ids LinuxVirtualMachineScaleSet#load_balancer_backend_address_pool_ids}.

---

##### `load_balancer_inbound_nat_rules_ids`<sup>Optional</sup> <a name="load_balancer_inbound_nat_rules_ids" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.loadBalancerInboundNatRulesIds"></a>

```python
load_balancer_inbound_nat_rules_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#load_balancer_inbound_nat_rules_ids LinuxVirtualMachineScaleSet#load_balancer_inbound_nat_rules_ids}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#primary LinuxVirtualMachineScaleSet#primary}.

---

##### `public_ip_address`<sup>Optional</sup> <a name="public_ip_address" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.publicIpAddress"></a>

```python
public_ip_address: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress</a>]]

public_ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#public_ip_address LinuxVirtualMachineScaleSet#public_ip_address}

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#subnet_id LinuxVirtualMachineScaleSet#subnet_id}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#version LinuxVirtualMachineScaleSet#version}.

---

### LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress <a name="LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress(
  name: str,
  domain_name_label: str = None,
  idle_timeout_in_minutes: typing.Union[int, float] = None,
  ip_tag: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag]] = None,
  public_ip_prefix_id: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.domainNameLabel">domain_name_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#domain_name_label LinuxVirtualMachineScaleSet#domain_name_label}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.idleTimeoutInMinutes">idle_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#idle_timeout_in_minutes LinuxVirtualMachineScaleSet#idle_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.ipTag">ip_tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag</a>]]</code> | ip_tag block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.publicIpPrefixId">public_ip_prefix_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#public_ip_prefix_id LinuxVirtualMachineScaleSet#public_ip_prefix_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#version LinuxVirtualMachineScaleSet#version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}.

---

##### `domain_name_label`<sup>Optional</sup> <a name="domain_name_label" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.domainNameLabel"></a>

```python
domain_name_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#domain_name_label LinuxVirtualMachineScaleSet#domain_name_label}.

---

##### `idle_timeout_in_minutes`<sup>Optional</sup> <a name="idle_timeout_in_minutes" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.idleTimeoutInMinutes"></a>

```python
idle_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#idle_timeout_in_minutes LinuxVirtualMachineScaleSet#idle_timeout_in_minutes}.

---

##### `ip_tag`<sup>Optional</sup> <a name="ip_tag" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.ipTag"></a>

```python
ip_tag: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag</a>]]

ip_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#ip_tag LinuxVirtualMachineScaleSet#ip_tag}

---

##### `public_ip_prefix_id`<sup>Optional</sup> <a name="public_ip_prefix_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.publicIpPrefixId"></a>

```python
public_ip_prefix_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#public_ip_prefix_id LinuxVirtualMachineScaleSet#public_ip_prefix_id}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#version LinuxVirtualMachineScaleSet#version}.

---

### LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag <a name="LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag(
  tag: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.property.tag">tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#tag LinuxVirtualMachineScaleSet#tag}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#type LinuxVirtualMachineScaleSet#type}. |

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.property.tag"></a>

```python
tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#tag LinuxVirtualMachineScaleSet#tag}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#type LinuxVirtualMachineScaleSet#type}.

---

### LinuxVirtualMachineScaleSetOsDisk <a name="LinuxVirtualMachineScaleSetOsDisk" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk(
  caching: str,
  storage_account_type: str,
  diff_disk_settings: LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings = None,
  disk_encryption_set_id: str = None,
  disk_size_gb: typing.Union[int, float] = None,
  secure_vm_disk_encryption_set_id: str = None,
  security_encryption_type: str = None,
  write_accelerator_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.caching">caching</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#caching LinuxVirtualMachineScaleSet#caching}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.storageAccountType">storage_account_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#storage_account_type LinuxVirtualMachineScaleSet#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.diffDiskSettings">diff_disk_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings">LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings</a></code> | diff_disk_settings block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.diskEncryptionSetId">disk_encryption_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#disk_encryption_set_id LinuxVirtualMachineScaleSet#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#disk_size_gb LinuxVirtualMachineScaleSet#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.secureVmDiskEncryptionSetId">secure_vm_disk_encryption_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#secure_vm_disk_encryption_set_id LinuxVirtualMachineScaleSet#secure_vm_disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.securityEncryptionType">security_encryption_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#security_encryption_type LinuxVirtualMachineScaleSet#security_encryption_type}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.writeAcceleratorEnabled">write_accelerator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#write_accelerator_enabled LinuxVirtualMachineScaleSet#write_accelerator_enabled}. |

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.caching"></a>

```python
caching: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#caching LinuxVirtualMachineScaleSet#caching}.

---

##### `storage_account_type`<sup>Required</sup> <a name="storage_account_type" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.storageAccountType"></a>

```python
storage_account_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#storage_account_type LinuxVirtualMachineScaleSet#storage_account_type}.

---

##### `diff_disk_settings`<sup>Optional</sup> <a name="diff_disk_settings" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.diffDiskSettings"></a>

```python
diff_disk_settings: LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings">LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings</a>

diff_disk_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#diff_disk_settings LinuxVirtualMachineScaleSet#diff_disk_settings}

---

##### `disk_encryption_set_id`<sup>Optional</sup> <a name="disk_encryption_set_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.diskEncryptionSetId"></a>

```python
disk_encryption_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#disk_encryption_set_id LinuxVirtualMachineScaleSet#disk_encryption_set_id}.

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#disk_size_gb LinuxVirtualMachineScaleSet#disk_size_gb}.

---

##### `secure_vm_disk_encryption_set_id`<sup>Optional</sup> <a name="secure_vm_disk_encryption_set_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.secureVmDiskEncryptionSetId"></a>

```python
secure_vm_disk_encryption_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#secure_vm_disk_encryption_set_id LinuxVirtualMachineScaleSet#secure_vm_disk_encryption_set_id}.

---

##### `security_encryption_type`<sup>Optional</sup> <a name="security_encryption_type" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.securityEncryptionType"></a>

```python
security_encryption_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#security_encryption_type LinuxVirtualMachineScaleSet#security_encryption_type}.

---

##### `write_accelerator_enabled`<sup>Optional</sup> <a name="write_accelerator_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk.property.writeAcceleratorEnabled"></a>

```python
write_accelerator_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#write_accelerator_enabled LinuxVirtualMachineScaleSet#write_accelerator_enabled}.

---

### LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings <a name="LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings(
  option: str,
  placement: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings.property.option">option</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#option LinuxVirtualMachineScaleSet#option}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings.property.placement">placement</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#placement LinuxVirtualMachineScaleSet#placement}. |

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings.property.option"></a>

```python
option: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#option LinuxVirtualMachineScaleSet#option}.

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings.property.placement"></a>

```python
placement: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#placement LinuxVirtualMachineScaleSet#placement}.

---

### LinuxVirtualMachineScaleSetPlan <a name="LinuxVirtualMachineScaleSetPlan" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan(
  name: str,
  product: str,
  publisher: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan.property.product">product</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#product LinuxVirtualMachineScaleSet#product}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#publisher LinuxVirtualMachineScaleSet#publisher}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#name LinuxVirtualMachineScaleSet#name}.

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan.property.product"></a>

```python
product: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#product LinuxVirtualMachineScaleSet#product}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#publisher LinuxVirtualMachineScaleSet#publisher}.

---

### LinuxVirtualMachineScaleSetRollingUpgradePolicy <a name="LinuxVirtualMachineScaleSetRollingUpgradePolicy" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy(
  max_batch_instance_percent: typing.Union[int, float],
  max_unhealthy_instance_percent: typing.Union[int, float],
  max_unhealthy_upgraded_instance_percent: typing.Union[int, float],
  pause_time_between_batches: str,
  cross_zone_upgrades_enabled: typing.Union[bool, IResolvable] = None,
  maximum_surge_instances_enabled: typing.Union[bool, IResolvable] = None,
  prioritize_unhealthy_instances_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy.property.maxBatchInstancePercent">max_batch_instance_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#max_batch_instance_percent LinuxVirtualMachineScaleSet#max_batch_instance_percent}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy.property.maxUnhealthyInstancePercent">max_unhealthy_instance_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#max_unhealthy_instance_percent LinuxVirtualMachineScaleSet#max_unhealthy_instance_percent}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy.property.maxUnhealthyUpgradedInstancePercent">max_unhealthy_upgraded_instance_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#max_unhealthy_upgraded_instance_percent LinuxVirtualMachineScaleSet#max_unhealthy_upgraded_instance_percent}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy.property.pauseTimeBetweenBatches">pause_time_between_batches</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#pause_time_between_batches LinuxVirtualMachineScaleSet#pause_time_between_batches}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy.property.crossZoneUpgradesEnabled">cross_zone_upgrades_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#cross_zone_upgrades_enabled LinuxVirtualMachineScaleSet#cross_zone_upgrades_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy.property.maximumSurgeInstancesEnabled">maximum_surge_instances_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#maximum_surge_instances_enabled LinuxVirtualMachineScaleSet#maximum_surge_instances_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy.property.prioritizeUnhealthyInstancesEnabled">prioritize_unhealthy_instances_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#prioritize_unhealthy_instances_enabled LinuxVirtualMachineScaleSet#prioritize_unhealthy_instances_enabled}. |

---

##### `max_batch_instance_percent`<sup>Required</sup> <a name="max_batch_instance_percent" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy.property.maxBatchInstancePercent"></a>

```python
max_batch_instance_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#max_batch_instance_percent LinuxVirtualMachineScaleSet#max_batch_instance_percent}.

---

##### `max_unhealthy_instance_percent`<sup>Required</sup> <a name="max_unhealthy_instance_percent" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy.property.maxUnhealthyInstancePercent"></a>

```python
max_unhealthy_instance_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#max_unhealthy_instance_percent LinuxVirtualMachineScaleSet#max_unhealthy_instance_percent}.

---

##### `max_unhealthy_upgraded_instance_percent`<sup>Required</sup> <a name="max_unhealthy_upgraded_instance_percent" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy.property.maxUnhealthyUpgradedInstancePercent"></a>

```python
max_unhealthy_upgraded_instance_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#max_unhealthy_upgraded_instance_percent LinuxVirtualMachineScaleSet#max_unhealthy_upgraded_instance_percent}.

---

##### `pause_time_between_batches`<sup>Required</sup> <a name="pause_time_between_batches" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy.property.pauseTimeBetweenBatches"></a>

```python
pause_time_between_batches: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#pause_time_between_batches LinuxVirtualMachineScaleSet#pause_time_between_batches}.

---

##### `cross_zone_upgrades_enabled`<sup>Optional</sup> <a name="cross_zone_upgrades_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy.property.crossZoneUpgradesEnabled"></a>

```python
cross_zone_upgrades_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#cross_zone_upgrades_enabled LinuxVirtualMachineScaleSet#cross_zone_upgrades_enabled}.

---

##### `maximum_surge_instances_enabled`<sup>Optional</sup> <a name="maximum_surge_instances_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy.property.maximumSurgeInstancesEnabled"></a>

```python
maximum_surge_instances_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#maximum_surge_instances_enabled LinuxVirtualMachineScaleSet#maximum_surge_instances_enabled}.

---

##### `prioritize_unhealthy_instances_enabled`<sup>Optional</sup> <a name="prioritize_unhealthy_instances_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy.property.prioritizeUnhealthyInstancesEnabled"></a>

```python
prioritize_unhealthy_instances_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#prioritize_unhealthy_instances_enabled LinuxVirtualMachineScaleSet#prioritize_unhealthy_instances_enabled}.

---

### LinuxVirtualMachineScaleSetScaleIn <a name="LinuxVirtualMachineScaleSetScaleIn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleIn.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleIn(
  force_deletion_enabled: typing.Union[bool, IResolvable] = None,
  rule: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleIn.property.forceDeletionEnabled">force_deletion_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#force_deletion_enabled LinuxVirtualMachineScaleSet#force_deletion_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleIn.property.rule">rule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#rule LinuxVirtualMachineScaleSet#rule}. |

---

##### `force_deletion_enabled`<sup>Optional</sup> <a name="force_deletion_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleIn.property.forceDeletionEnabled"></a>

```python
force_deletion_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#force_deletion_enabled LinuxVirtualMachineScaleSet#force_deletion_enabled}.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleIn.property.rule"></a>

```python
rule: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#rule LinuxVirtualMachineScaleSet#rule}.

---

### LinuxVirtualMachineScaleSetSecret <a name="LinuxVirtualMachineScaleSetSecret" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret(
  certificate: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetSecretCertificate]],
  key_vault_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret.property.certificate">certificate</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate">LinuxVirtualMachineScaleSetSecretCertificate</a>]]</code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#key_vault_id LinuxVirtualMachineScaleSet#key_vault_id}. |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret.property.certificate"></a>

```python
certificate: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetSecretCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate">LinuxVirtualMachineScaleSetSecretCertificate</a>]]

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#certificate LinuxVirtualMachineScaleSet#certificate}

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#key_vault_id LinuxVirtualMachineScaleSet#key_vault_id}.

---

### LinuxVirtualMachineScaleSetSecretCertificate <a name="LinuxVirtualMachineScaleSetSecretCertificate" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate(
  url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#url LinuxVirtualMachineScaleSet#url}. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#url LinuxVirtualMachineScaleSet#url}.

---

### LinuxVirtualMachineScaleSetSourceImageReference <a name="LinuxVirtualMachineScaleSetSourceImageReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference(
  offer: str,
  publisher: str,
  sku: str,
  version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference.property.offer">offer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#offer LinuxVirtualMachineScaleSet#offer}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#publisher LinuxVirtualMachineScaleSet#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#sku LinuxVirtualMachineScaleSet#sku}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#version LinuxVirtualMachineScaleSet#version}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference.property.offer"></a>

```python
offer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#offer LinuxVirtualMachineScaleSet#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#publisher LinuxVirtualMachineScaleSet#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#sku LinuxVirtualMachineScaleSet#sku}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#version LinuxVirtualMachineScaleSet#version}.

---

### LinuxVirtualMachineScaleSetSpotRestore <a name="LinuxVirtualMachineScaleSetSpotRestore" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestore.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestore(
  enabled: typing.Union[bool, IResolvable] = None,
  timeout: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestore.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#enabled LinuxVirtualMachineScaleSet#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestore.property.timeout">timeout</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#timeout LinuxVirtualMachineScaleSet#timeout}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestore.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#enabled LinuxVirtualMachineScaleSet#enabled}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestore.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#timeout LinuxVirtualMachineScaleSet#timeout}.

---

### LinuxVirtualMachineScaleSetTerminationNotification <a name="LinuxVirtualMachineScaleSetTerminationNotification" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotification.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotification(
  enabled: typing.Union[bool, IResolvable],
  timeout: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotification.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#enabled LinuxVirtualMachineScaleSet#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotification.property.timeout">timeout</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#timeout LinuxVirtualMachineScaleSet#timeout}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotification.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#enabled LinuxVirtualMachineScaleSet#enabled}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotification.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#timeout LinuxVirtualMachineScaleSet#timeout}.

---

### LinuxVirtualMachineScaleSetTimeouts <a name="LinuxVirtualMachineScaleSetTimeouts" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#create LinuxVirtualMachineScaleSet#create}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#delete LinuxVirtualMachineScaleSet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#read LinuxVirtualMachineScaleSet#read}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#update LinuxVirtualMachineScaleSet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#create LinuxVirtualMachineScaleSet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#delete LinuxVirtualMachineScaleSet#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#read LinuxVirtualMachineScaleSet#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#update LinuxVirtualMachineScaleSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference <a name="LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled">reset_ultra_ssd_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ultra_ssd_enabled` <a name="reset_ultra_ssd_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled"></a>

```python
def reset_ultra_ssd_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput">ultra_ssd_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled">ultra_ssd_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities">LinuxVirtualMachineScaleSetAdditionalCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ultra_ssd_enabled_input`<sup>Optional</sup> <a name="ultra_ssd_enabled_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput"></a>

```python
ultra_ssd_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ultra_ssd_enabled`<sup>Required</sup> <a name="ultra_ssd_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled"></a>

```python
ultra_ssd_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: LinuxVirtualMachineScaleSetAdditionalCapabilities
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdditionalCapabilities">LinuxVirtualMachineScaleSetAdditionalCapabilities</a>

---


### LinuxVirtualMachineScaleSetAdminSshKeyList <a name="LinuxVirtualMachineScaleSetAdminSshKeyList" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LinuxVirtualMachineScaleSetAdminSshKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey">LinuxVirtualMachineScaleSetAdminSshKey</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetAdminSshKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey">LinuxVirtualMachineScaleSetAdminSshKey</a>]]

---


### LinuxVirtualMachineScaleSetAdminSshKeyOutputReference <a name="LinuxVirtualMachineScaleSetAdminSshKeyOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.publicKeyInput">public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey">LinuxVirtualMachineScaleSetAdminSshKey</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_key_input`<sup>Optional</sup> <a name="public_key_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.publicKeyInput"></a>

```python
public_key_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKeyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LinuxVirtualMachineScaleSetAdminSshKey]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAdminSshKey">LinuxVirtualMachineScaleSetAdminSshKey</a>]

---


### LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference <a name="LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resetGracePeriod">reset_grace_period</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_grace_period` <a name="reset_grace_period" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.resetGracePeriod"></a>

```python
def reset_grace_period() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.gracePeriodInput">grace_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.gracePeriod">grace_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair">LinuxVirtualMachineScaleSetAutomaticInstanceRepair</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `grace_period_input`<sup>Optional</sup> <a name="grace_period_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.gracePeriodInput"></a>

```python
grace_period_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `grace_period`<sup>Required</sup> <a name="grace_period" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.gracePeriod"></a>

```python
grace_period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepairOutputReference.property.internalValue"></a>

```python
internal_value: LinuxVirtualMachineScaleSetAutomaticInstanceRepair
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticInstanceRepair">LinuxVirtualMachineScaleSetAutomaticInstanceRepair</a>

---


### LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference <a name="LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.disableAutomaticRollbackInput">disable_automatic_rollback_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.enableAutomaticOsUpgradeInput">enable_automatic_os_upgrade_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.disableAutomaticRollback">disable_automatic_rollback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.enableAutomaticOsUpgrade">enable_automatic_os_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy">LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_automatic_rollback_input`<sup>Optional</sup> <a name="disable_automatic_rollback_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.disableAutomaticRollbackInput"></a>

```python
disable_automatic_rollback_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_automatic_os_upgrade_input`<sup>Optional</sup> <a name="enable_automatic_os_upgrade_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.enableAutomaticOsUpgradeInput"></a>

```python
enable_automatic_os_upgrade_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_automatic_rollback`<sup>Required</sup> <a name="disable_automatic_rollback" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.disableAutomaticRollback"></a>

```python
disable_automatic_rollback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_automatic_os_upgrade`<sup>Required</sup> <a name="enable_automatic_os_upgrade" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.enableAutomaticOsUpgrade"></a>

```python
enable_automatic_os_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference.property.internalValue"></a>

```python
internal_value: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy">LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy</a>

---


### LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference <a name="LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.resetStorageAccountUri">reset_storage_account_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_storage_account_uri` <a name="reset_storage_account_uri" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.resetStorageAccountUri"></a>

```python
def reset_storage_account_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.property.storageAccountUriInput">storage_account_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.property.storageAccountUri">storage_account_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics">LinuxVirtualMachineScaleSetBootDiagnostics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_account_uri_input`<sup>Optional</sup> <a name="storage_account_uri_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.property.storageAccountUriInput"></a>

```python
storage_account_uri_input: str
```

- *Type:* str

---

##### `storage_account_uri`<sup>Required</sup> <a name="storage_account_uri" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.property.storageAccountUri"></a>

```python
storage_account_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnosticsOutputReference.property.internalValue"></a>

```python
internal_value: LinuxVirtualMachineScaleSetBootDiagnostics
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetBootDiagnostics">LinuxVirtualMachineScaleSetBootDiagnostics</a>

---


### LinuxVirtualMachineScaleSetDataDiskList <a name="LinuxVirtualMachineScaleSetDataDiskList" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LinuxVirtualMachineScaleSetDataDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk">LinuxVirtualMachineScaleSetDataDisk</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetDataDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk">LinuxVirtualMachineScaleSetDataDisk</a>]]

---


### LinuxVirtualMachineScaleSetDataDiskOutputReference <a name="LinuxVirtualMachineScaleSetDataDiskOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.resetCreateOption">reset_create_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.resetDiskEncryptionSetId">reset_disk_encryption_set_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.resetUltraSsdDiskIopsReadWrite">reset_ultra_ssd_disk_iops_read_write</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.resetUltraSsdDiskMbpsReadWrite">reset_ultra_ssd_disk_mbps_read_write</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.resetWriteAcceleratorEnabled">reset_write_accelerator_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create_option` <a name="reset_create_option" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.resetCreateOption"></a>

```python
def reset_create_option() -> None
```

##### `reset_disk_encryption_set_id` <a name="reset_disk_encryption_set_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.resetDiskEncryptionSetId"></a>

```python
def reset_disk_encryption_set_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_ultra_ssd_disk_iops_read_write` <a name="reset_ultra_ssd_disk_iops_read_write" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.resetUltraSsdDiskIopsReadWrite"></a>

```python
def reset_ultra_ssd_disk_iops_read_write() -> None
```

##### `reset_ultra_ssd_disk_mbps_read_write` <a name="reset_ultra_ssd_disk_mbps_read_write" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.resetUltraSsdDiskMbpsReadWrite"></a>

```python
def reset_ultra_ssd_disk_mbps_read_write() -> None
```

##### `reset_write_accelerator_enabled` <a name="reset_write_accelerator_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.resetWriteAcceleratorEnabled"></a>

```python
def reset_write_accelerator_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.cachingInput">caching_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.createOptionInput">create_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.diskEncryptionSetIdInput">disk_encryption_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.lunInput">lun_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.storageAccountTypeInput">storage_account_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskIopsReadWriteInput">ultra_ssd_disk_iops_read_write_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskMbpsReadWriteInput">ultra_ssd_disk_mbps_read_write_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.writeAcceleratorEnabledInput">write_accelerator_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.caching">caching</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.createOption">create_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.diskEncryptionSetId">disk_encryption_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.lun">lun</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.storageAccountType">storage_account_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskIopsReadWrite">ultra_ssd_disk_iops_read_write</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskMbpsReadWrite">ultra_ssd_disk_mbps_read_write</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.writeAcceleratorEnabled">write_accelerator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk">LinuxVirtualMachineScaleSetDataDisk</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `caching_input`<sup>Optional</sup> <a name="caching_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.cachingInput"></a>

```python
caching_input: str
```

- *Type:* str

---

##### `create_option_input`<sup>Optional</sup> <a name="create_option_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.createOptionInput"></a>

```python
create_option_input: str
```

- *Type:* str

---

##### `disk_encryption_set_id_input`<sup>Optional</sup> <a name="disk_encryption_set_id_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.diskEncryptionSetIdInput"></a>

```python
disk_encryption_set_id_input: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lun_input`<sup>Optional</sup> <a name="lun_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.lunInput"></a>

```python
lun_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `storage_account_type_input`<sup>Optional</sup> <a name="storage_account_type_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.storageAccountTypeInput"></a>

```python
storage_account_type_input: str
```

- *Type:* str

---

##### `ultra_ssd_disk_iops_read_write_input`<sup>Optional</sup> <a name="ultra_ssd_disk_iops_read_write_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskIopsReadWriteInput"></a>

```python
ultra_ssd_disk_iops_read_write_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ultra_ssd_disk_mbps_read_write_input`<sup>Optional</sup> <a name="ultra_ssd_disk_mbps_read_write_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskMbpsReadWriteInput"></a>

```python
ultra_ssd_disk_mbps_read_write_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `write_accelerator_enabled_input`<sup>Optional</sup> <a name="write_accelerator_enabled_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.writeAcceleratorEnabledInput"></a>

```python
write_accelerator_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.caching"></a>

```python
caching: str
```

- *Type:* str

---

##### `create_option`<sup>Required</sup> <a name="create_option" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.createOption"></a>

```python
create_option: str
```

- *Type:* str

---

##### `disk_encryption_set_id`<sup>Required</sup> <a name="disk_encryption_set_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.diskEncryptionSetId"></a>

```python
disk_encryption_set_id: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.lun"></a>

```python
lun: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `storage_account_type`<sup>Required</sup> <a name="storage_account_type" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.storageAccountType"></a>

```python
storage_account_type: str
```

- *Type:* str

---

##### `ultra_ssd_disk_iops_read_write`<sup>Required</sup> <a name="ultra_ssd_disk_iops_read_write" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskIopsReadWrite"></a>

```python
ultra_ssd_disk_iops_read_write: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ultra_ssd_disk_mbps_read_write`<sup>Required</sup> <a name="ultra_ssd_disk_mbps_read_write" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.ultraSsdDiskMbpsReadWrite"></a>

```python
ultra_ssd_disk_mbps_read_write: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `write_accelerator_enabled`<sup>Required</sup> <a name="write_accelerator_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.writeAcceleratorEnabled"></a>

```python
write_accelerator_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDiskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LinuxVirtualMachineScaleSetDataDisk]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetDataDisk">LinuxVirtualMachineScaleSetDataDisk</a>]

---


### LinuxVirtualMachineScaleSetExtensionList <a name="LinuxVirtualMachineScaleSetExtensionList" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LinuxVirtualMachineScaleSetExtensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension">LinuxVirtualMachineScaleSetExtension</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetExtension]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension">LinuxVirtualMachineScaleSetExtension</a>]]

---


### LinuxVirtualMachineScaleSetExtensionOutputReference <a name="LinuxVirtualMachineScaleSetExtensionOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.putProtectedSettingsFromKeyVault">put_protected_settings_from_key_vault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetAutomaticUpgradeEnabled">reset_automatic_upgrade_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetAutoUpgradeMinorVersion">reset_auto_upgrade_minor_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetForceUpdateTag">reset_force_update_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetProtectedSettings">reset_protected_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetProtectedSettingsFromKeyVault">reset_protected_settings_from_key_vault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetProvisionAfterExtensions">reset_provision_after_extensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetSettings">reset_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_protected_settings_from_key_vault` <a name="put_protected_settings_from_key_vault" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.putProtectedSettingsFromKeyVault"></a>

```python
def put_protected_settings_from_key_vault(
  secret_url: str,
  source_vault_id: str
) -> None
```

###### `secret_url`<sup>Required</sup> <a name="secret_url" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.putProtectedSettingsFromKeyVault.parameter.secretUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#secret_url LinuxVirtualMachineScaleSet#secret_url}.

---

###### `source_vault_id`<sup>Required</sup> <a name="source_vault_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.putProtectedSettingsFromKeyVault.parameter.sourceVaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#source_vault_id LinuxVirtualMachineScaleSet#source_vault_id}.

---

##### `reset_automatic_upgrade_enabled` <a name="reset_automatic_upgrade_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetAutomaticUpgradeEnabled"></a>

```python
def reset_automatic_upgrade_enabled() -> None
```

##### `reset_auto_upgrade_minor_version` <a name="reset_auto_upgrade_minor_version" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetAutoUpgradeMinorVersion"></a>

```python
def reset_auto_upgrade_minor_version() -> None
```

##### `reset_force_update_tag` <a name="reset_force_update_tag" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetForceUpdateTag"></a>

```python
def reset_force_update_tag() -> None
```

##### `reset_protected_settings` <a name="reset_protected_settings" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetProtectedSettings"></a>

```python
def reset_protected_settings() -> None
```

##### `reset_protected_settings_from_key_vault` <a name="reset_protected_settings_from_key_vault" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetProtectedSettingsFromKeyVault"></a>

```python
def reset_protected_settings_from_key_vault() -> None
```

##### `reset_provision_after_extensions` <a name="reset_provision_after_extensions" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetProvisionAfterExtensions"></a>

```python
def reset_provision_after_extensions() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.resetSettings"></a>

```python
def reset_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsFromKeyVault">protected_settings_from_key_vault</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference">LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.automaticUpgradeEnabledInput">automatic_upgrade_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.autoUpgradeMinorVersionInput">auto_upgrade_minor_version_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.forceUpdateTagInput">force_update_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsFromKeyVaultInput">protected_settings_from_key_vault_input</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsInput">protected_settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.provisionAfterExtensionsInput">provision_after_extensions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.settingsInput">settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.typeHandlerVersionInput">type_handler_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.automaticUpgradeEnabled">automatic_upgrade_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.autoUpgradeMinorVersion">auto_upgrade_minor_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.forceUpdateTag">force_update_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.protectedSettings">protected_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.provisionAfterExtensions">provision_after_extensions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.settings">settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.typeHandlerVersion">type_handler_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension">LinuxVirtualMachineScaleSetExtension</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `protected_settings_from_key_vault`<sup>Required</sup> <a name="protected_settings_from_key_vault" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsFromKeyVault"></a>

```python
protected_settings_from_key_vault: LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference">LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference</a>

---

##### `automatic_upgrade_enabled_input`<sup>Optional</sup> <a name="automatic_upgrade_enabled_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.automaticUpgradeEnabledInput"></a>

```python
automatic_upgrade_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_upgrade_minor_version_input`<sup>Optional</sup> <a name="auto_upgrade_minor_version_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.autoUpgradeMinorVersionInput"></a>

```python
auto_upgrade_minor_version_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_update_tag_input`<sup>Optional</sup> <a name="force_update_tag_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.forceUpdateTagInput"></a>

```python
force_update_tag_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protected_settings_from_key_vault_input`<sup>Optional</sup> <a name="protected_settings_from_key_vault_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsFromKeyVaultInput"></a>

```python
protected_settings_from_key_vault_input: LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

---

##### `protected_settings_input`<sup>Optional</sup> <a name="protected_settings_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.protectedSettingsInput"></a>

```python
protected_settings_input: str
```

- *Type:* str

---

##### `provision_after_extensions_input`<sup>Optional</sup> <a name="provision_after_extensions_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.provisionAfterExtensionsInput"></a>

```python
provision_after_extensions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.settingsInput"></a>

```python
settings_input: str
```

- *Type:* str

---

##### `type_handler_version_input`<sup>Optional</sup> <a name="type_handler_version_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.typeHandlerVersionInput"></a>

```python
type_handler_version_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `automatic_upgrade_enabled`<sup>Required</sup> <a name="automatic_upgrade_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.automaticUpgradeEnabled"></a>

```python
automatic_upgrade_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_upgrade_minor_version`<sup>Required</sup> <a name="auto_upgrade_minor_version" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.autoUpgradeMinorVersion"></a>

```python
auto_upgrade_minor_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_update_tag`<sup>Required</sup> <a name="force_update_tag" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.forceUpdateTag"></a>

```python
force_update_tag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protected_settings`<sup>Required</sup> <a name="protected_settings" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.protectedSettings"></a>

```python
protected_settings: str
```

- *Type:* str

---

##### `provision_after_extensions`<sup>Required</sup> <a name="provision_after_extensions" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.provisionAfterExtensions"></a>

```python
provision_after_extensions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.settings"></a>

```python
settings: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `type_handler_version`<sup>Required</sup> <a name="type_handler_version" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.typeHandlerVersion"></a>

```python
type_handler_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LinuxVirtualMachineScaleSetExtension]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtension">LinuxVirtualMachineScaleSetExtension</a>]

---


### LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference <a name="LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrlInput">secret_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultIdInput">source_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrl">secret_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultId">source_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_url_input`<sup>Optional</sup> <a name="secret_url_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrlInput"></a>

```python
secret_url_input: str
```

- *Type:* str

---

##### `source_vault_id_input`<sup>Optional</sup> <a name="source_vault_id_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultIdInput"></a>

```python
source_vault_id_input: str
```

- *Type:* str

---

##### `secret_url`<sup>Required</sup> <a name="secret_url" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.secretUrl"></a>

```python
secret_url: str
```

- *Type:* str

---

##### `source_vault_id`<sup>Required</sup> <a name="source_vault_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultId"></a>

```python
source_vault_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference.property.internalValue"></a>

```python
internal_value: LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault">LinuxVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault</a>

---


### LinuxVirtualMachineScaleSetGalleryApplicationList <a name="LinuxVirtualMachineScaleSetGalleryApplicationList" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LinuxVirtualMachineScaleSetGalleryApplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplication">LinuxVirtualMachineScaleSetGalleryApplication</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetGalleryApplication]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplication">LinuxVirtualMachineScaleSetGalleryApplication</a>]]

---


### LinuxVirtualMachineScaleSetGalleryApplicationOutputReference <a name="LinuxVirtualMachineScaleSetGalleryApplicationOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.resetConfigurationBlobUri">reset_configuration_blob_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.resetTag">reset_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_configuration_blob_uri` <a name="reset_configuration_blob_uri" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.resetConfigurationBlobUri"></a>

```python
def reset_configuration_blob_uri() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.property.configurationBlobUriInput">configuration_blob_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.property.orderInput">order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.property.versionIdInput">version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.property.configurationBlobUri">configuration_blob_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplication">LinuxVirtualMachineScaleSetGalleryApplication</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration_blob_uri_input`<sup>Optional</sup> <a name="configuration_blob_uri_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.property.configurationBlobUriInput"></a>

```python
configuration_blob_uri_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.property.orderInput"></a>

```python
order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `version_id_input`<sup>Optional</sup> <a name="version_id_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.property.versionIdInput"></a>

```python
version_id_input: str
```

- *Type:* str

---

##### `configuration_blob_uri`<sup>Required</sup> <a name="configuration_blob_uri" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.property.configurationBlobUri"></a>

```python
configuration_blob_uri: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplicationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LinuxVirtualMachineScaleSetGalleryApplication]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetGalleryApplication">LinuxVirtualMachineScaleSetGalleryApplication</a>]

---


### LinuxVirtualMachineScaleSetIdentityOutputReference <a name="LinuxVirtualMachineScaleSetIdentityOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentity">LinuxVirtualMachineScaleSetIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentityOutputReference.property.internalValue"></a>

```python
internal_value: LinuxVirtualMachineScaleSetIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetIdentity">LinuxVirtualMachineScaleSetIdentity</a>

---


### LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList <a name="LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a>]]

---


### LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference <a name="LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.putPublicIpAddress">put_public_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetApplicationGatewayBackendAddressPoolIds">reset_application_gateway_backend_address_pool_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetApplicationSecurityGroupIds">reset_application_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetLoadBalancerBackendAddressPoolIds">reset_load_balancer_backend_address_pool_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetLoadBalancerInboundNatRulesIds">reset_load_balancer_inbound_nat_rules_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetPublicIpAddress">reset_public_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_public_ip_address` <a name="put_public_ip_address" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.putPublicIpAddress"></a>

```python
def put_public_ip_address(
  value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.putPublicIpAddress.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress</a>]]

---

##### `reset_application_gateway_backend_address_pool_ids` <a name="reset_application_gateway_backend_address_pool_ids" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetApplicationGatewayBackendAddressPoolIds"></a>

```python
def reset_application_gateway_backend_address_pool_ids() -> None
```

##### `reset_application_security_group_ids` <a name="reset_application_security_group_ids" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetApplicationSecurityGroupIds"></a>

```python
def reset_application_security_group_ids() -> None
```

##### `reset_load_balancer_backend_address_pool_ids` <a name="reset_load_balancer_backend_address_pool_ids" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetLoadBalancerBackendAddressPoolIds"></a>

```python
def reset_load_balancer_backend_address_pool_ids() -> None
```

##### `reset_load_balancer_inbound_nat_rules_ids` <a name="reset_load_balancer_inbound_nat_rules_ids" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetLoadBalancerInboundNatRulesIds"></a>

```python
def reset_load_balancer_inbound_nat_rules_ids() -> None
```

##### `reset_primary` <a name="reset_primary" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```

##### `reset_public_ip_address` <a name="reset_public_ip_address" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetPublicIpAddress"></a>

```python
def reset_public_ip_address() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddress">public_ip_address</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIdsInput">application_gateway_backend_address_pool_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIdsInput">application_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIdsInput">load_balancer_backend_address_pool_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIdsInput">load_balancer_inbound_nat_rules_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primaryInput">primary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddressInput">public_ip_address_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIds">application_gateway_backend_address_pool_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIds">application_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIds">load_balancer_backend_address_pool_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIds">load_balancer_inbound_nat_rules_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_ip_address`<sup>Required</sup> <a name="public_ip_address" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddress"></a>

```python
public_ip_address: LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList</a>

---

##### `application_gateway_backend_address_pool_ids_input`<sup>Optional</sup> <a name="application_gateway_backend_address_pool_ids_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIdsInput"></a>

```python
application_gateway_backend_address_pool_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `application_security_group_ids_input`<sup>Optional</sup> <a name="application_security_group_ids_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIdsInput"></a>

```python
application_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `load_balancer_backend_address_pool_ids_input`<sup>Optional</sup> <a name="load_balancer_backend_address_pool_ids_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIdsInput"></a>

```python
load_balancer_backend_address_pool_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `load_balancer_inbound_nat_rules_ids_input`<sup>Optional</sup> <a name="load_balancer_inbound_nat_rules_ids_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIdsInput"></a>

```python
load_balancer_inbound_nat_rules_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primaryInput"></a>

```python
primary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `public_ip_address_input`<sup>Optional</sup> <a name="public_ip_address_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddressInput"></a>

```python
public_ip_address_input: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress</a>]]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `application_gateway_backend_address_pool_ids`<sup>Required</sup> <a name="application_gateway_backend_address_pool_ids" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIds"></a>

```python
application_gateway_backend_address_pool_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `application_security_group_ids`<sup>Required</sup> <a name="application_security_group_ids" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIds"></a>

```python
application_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `load_balancer_backend_address_pool_ids`<sup>Required</sup> <a name="load_balancer_backend_address_pool_ids" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIds"></a>

```python
load_balancer_backend_address_pool_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `load_balancer_inbound_nat_rules_ids`<sup>Required</sup> <a name="load_balancer_inbound_nat_rules_ids" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIds"></a>

```python
load_balancer_inbound_nat_rules_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a>]

---


### LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList <a name="LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag</a>]]

---


### LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference <a name="LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag</a>]

---


### LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList <a name="LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress</a>]]

---


### LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference <a name="LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.putIpTag">put_ip_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetDomainNameLabel">reset_domain_name_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetIdleTimeoutInMinutes">reset_idle_timeout_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetIpTag">reset_ip_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetPublicIpPrefixId">reset_public_ip_prefix_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ip_tag` <a name="put_ip_tag" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.putIpTag"></a>

```python
def put_ip_tag(
  value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.putIpTag.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag</a>]]

---

##### `reset_domain_name_label` <a name="reset_domain_name_label" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetDomainNameLabel"></a>

```python
def reset_domain_name_label() -> None
```

##### `reset_idle_timeout_in_minutes` <a name="reset_idle_timeout_in_minutes" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetIdleTimeoutInMinutes"></a>

```python
def reset_idle_timeout_in_minutes() -> None
```

##### `reset_ip_tag` <a name="reset_ip_tag" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetIpTag"></a>

```python
def reset_ip_tag() -> None
```

##### `reset_public_ip_prefix_id` <a name="reset_public_ip_prefix_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetPublicIpPrefixId"></a>

```python
def reset_public_ip_prefix_id() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTag">ip_tag</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabelInput">domain_name_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutesInput">idle_timeout_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTagInput">ip_tag_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixIdInput">public_ip_prefix_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabel">domain_name_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutes">idle_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixId">public_ip_prefix_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_tag`<sup>Required</sup> <a name="ip_tag" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTag"></a>

```python
ip_tag: LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList</a>

---

##### `domain_name_label_input`<sup>Optional</sup> <a name="domain_name_label_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabelInput"></a>

```python
domain_name_label_input: str
```

- *Type:* str

---

##### `idle_timeout_in_minutes_input`<sup>Optional</sup> <a name="idle_timeout_in_minutes_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutesInput"></a>

```python
idle_timeout_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_tag_input`<sup>Optional</sup> <a name="ip_tag_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTagInput"></a>

```python
ip_tag_input: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_ip_prefix_id_input`<sup>Optional</sup> <a name="public_ip_prefix_id_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixIdInput"></a>

```python
public_ip_prefix_id_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `domain_name_label`<sup>Required</sup> <a name="domain_name_label" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabel"></a>

```python
domain_name_label: str
```

- *Type:* str

---

##### `idle_timeout_in_minutes`<sup>Required</sup> <a name="idle_timeout_in_minutes" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutes"></a>

```python
idle_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_ip_prefix_id`<sup>Required</sup> <a name="public_ip_prefix_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixId"></a>

```python
public_ip_prefix_id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress</a>]

---


### LinuxVirtualMachineScaleSetNetworkInterfaceList <a name="LinuxVirtualMachineScaleSetNetworkInterfaceList" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface">LinuxVirtualMachineScaleSetNetworkInterface</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface">LinuxVirtualMachineScaleSetNetworkInterface</a>]]

---


### LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference <a name="LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.putIpConfiguration">put_ip_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.resetDnsServers">reset_dns_servers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.resetEnableAcceleratedNetworking">reset_enable_accelerated_networking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.resetEnableIpForwarding">reset_enable_ip_forwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.resetNetworkSecurityGroupId">reset_network_security_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ip_configuration` <a name="put_ip_configuration" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.putIpConfiguration"></a>

```python
def put_ip_configuration(
  value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.putIpConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a>]]

---

##### `reset_dns_servers` <a name="reset_dns_servers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.resetDnsServers"></a>

```python
def reset_dns_servers() -> None
```

##### `reset_enable_accelerated_networking` <a name="reset_enable_accelerated_networking" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.resetEnableAcceleratedNetworking"></a>

```python
def reset_enable_accelerated_networking() -> None
```

##### `reset_enable_ip_forwarding` <a name="reset_enable_ip_forwarding" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.resetEnableIpForwarding"></a>

```python
def reset_enable_ip_forwarding() -> None
```

##### `reset_network_security_group_id` <a name="reset_network_security_group_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.resetNetworkSecurityGroupId"></a>

```python
def reset_network_security_group_id() -> None
```

##### `reset_primary` <a name="reset_primary" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfiguration">ip_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServersInput">dns_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableAcceleratedNetworkingInput">enable_accelerated_networking_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableIpForwardingInput">enable_ip_forwarding_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfigurationInput">ip_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupIdInput">network_security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primaryInput">primary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServers">dns_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableAcceleratedNetworking">enable_accelerated_networking</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableIpForwarding">enable_ip_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupId">network_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface">LinuxVirtualMachineScaleSetNetworkInterface</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_configuration`<sup>Required</sup> <a name="ip_configuration" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfiguration"></a>

```python
ip_configuration: LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationList</a>

---

##### `dns_servers_input`<sup>Optional</sup> <a name="dns_servers_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServersInput"></a>

```python
dns_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_accelerated_networking_input`<sup>Optional</sup> <a name="enable_accelerated_networking_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableAcceleratedNetworkingInput"></a>

```python
enable_accelerated_networking_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_ip_forwarding_input`<sup>Optional</sup> <a name="enable_ip_forwarding_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableIpForwardingInput"></a>

```python
enable_ip_forwarding_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_configuration_input`<sup>Optional</sup> <a name="ip_configuration_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfigurationInput"></a>

```python
ip_configuration_input: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration">LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_security_group_id_input`<sup>Optional</sup> <a name="network_security_group_id_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupIdInput"></a>

```python
network_security_group_id_input: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primaryInput"></a>

```python
primary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dns_servers`<sup>Required</sup> <a name="dns_servers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServers"></a>

```python
dns_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_accelerated_networking`<sup>Required</sup> <a name="enable_accelerated_networking" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableAcceleratedNetworking"></a>

```python
enable_accelerated_networking: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_ip_forwarding`<sup>Required</sup> <a name="enable_ip_forwarding" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.enableIpForwarding"></a>

```python
enable_ip_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_security_group_id`<sup>Required</sup> <a name="network_security_group_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupId"></a>

```python
network_security_group_id: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LinuxVirtualMachineScaleSetNetworkInterface]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetNetworkInterface">LinuxVirtualMachineScaleSetNetworkInterface</a>]

---


### LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference <a name="LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.resetPlacement">reset_placement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_placement` <a name="reset_placement" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.resetPlacement"></a>

```python
def reset_placement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.optionInput">option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.placementInput">placement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.option">option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.placement">placement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings">LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `option_input`<sup>Optional</sup> <a name="option_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.optionInput"></a>

```python
option_input: str
```

- *Type:* str

---

##### `placement_input`<sup>Optional</sup> <a name="placement_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.placementInput"></a>

```python
placement_input: str
```

- *Type:* str

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.option"></a>

```python
option: str
```

- *Type:* str

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.placement"></a>

```python
placement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference.property.internalValue"></a>

```python
internal_value: LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings">LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings</a>

---


### LinuxVirtualMachineScaleSetOsDiskOutputReference <a name="LinuxVirtualMachineScaleSetOsDiskOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.putDiffDiskSettings">put_diff_disk_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resetDiffDiskSettings">reset_diff_disk_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resetDiskEncryptionSetId">reset_disk_encryption_set_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resetDiskSizeGb">reset_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resetSecureVmDiskEncryptionSetId">reset_secure_vm_disk_encryption_set_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resetSecurityEncryptionType">reset_security_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resetWriteAcceleratorEnabled">reset_write_accelerator_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_diff_disk_settings` <a name="put_diff_disk_settings" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.putDiffDiskSettings"></a>

```python
def put_diff_disk_settings(
  option: str,
  placement: str = None
) -> None
```

###### `option`<sup>Required</sup> <a name="option" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.putDiffDiskSettings.parameter.option"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#option LinuxVirtualMachineScaleSet#option}.

---

###### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.putDiffDiskSettings.parameter.placement"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/linux_virtual_machine_scale_set#placement LinuxVirtualMachineScaleSet#placement}.

---

##### `reset_diff_disk_settings` <a name="reset_diff_disk_settings" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resetDiffDiskSettings"></a>

```python
def reset_diff_disk_settings() -> None
```

##### `reset_disk_encryption_set_id` <a name="reset_disk_encryption_set_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resetDiskEncryptionSetId"></a>

```python
def reset_disk_encryption_set_id() -> None
```

##### `reset_disk_size_gb` <a name="reset_disk_size_gb" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resetDiskSizeGb"></a>

```python
def reset_disk_size_gb() -> None
```

##### `reset_secure_vm_disk_encryption_set_id` <a name="reset_secure_vm_disk_encryption_set_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resetSecureVmDiskEncryptionSetId"></a>

```python
def reset_secure_vm_disk_encryption_set_id() -> None
```

##### `reset_security_encryption_type` <a name="reset_security_encryption_type" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resetSecurityEncryptionType"></a>

```python
def reset_security_encryption_type() -> None
```

##### `reset_write_accelerator_enabled` <a name="reset_write_accelerator_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.resetWriteAcceleratorEnabled"></a>

```python
def reset_write_accelerator_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.diffDiskSettings">diff_disk_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference">LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.cachingInput">caching_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.diffDiskSettingsInput">diff_disk_settings_input</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings">LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.diskEncryptionSetIdInput">disk_encryption_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.secureVmDiskEncryptionSetIdInput">secure_vm_disk_encryption_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.securityEncryptionTypeInput">security_encryption_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.storageAccountTypeInput">storage_account_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.writeAcceleratorEnabledInput">write_accelerator_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.caching">caching</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.diskEncryptionSetId">disk_encryption_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.secureVmDiskEncryptionSetId">secure_vm_disk_encryption_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.securityEncryptionType">security_encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.storageAccountType">storage_account_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.writeAcceleratorEnabled">write_accelerator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk">LinuxVirtualMachineScaleSetOsDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `diff_disk_settings`<sup>Required</sup> <a name="diff_disk_settings" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.diffDiskSettings"></a>

```python
diff_disk_settings: LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference">LinuxVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference</a>

---

##### `caching_input`<sup>Optional</sup> <a name="caching_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.cachingInput"></a>

```python
caching_input: str
```

- *Type:* str

---

##### `diff_disk_settings_input`<sup>Optional</sup> <a name="diff_disk_settings_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.diffDiskSettingsInput"></a>

```python
diff_disk_settings_input: LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings">LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings</a>

---

##### `disk_encryption_set_id_input`<sup>Optional</sup> <a name="disk_encryption_set_id_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.diskEncryptionSetIdInput"></a>

```python
disk_encryption_set_id_input: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secure_vm_disk_encryption_set_id_input`<sup>Optional</sup> <a name="secure_vm_disk_encryption_set_id_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.secureVmDiskEncryptionSetIdInput"></a>

```python
secure_vm_disk_encryption_set_id_input: str
```

- *Type:* str

---

##### `security_encryption_type_input`<sup>Optional</sup> <a name="security_encryption_type_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.securityEncryptionTypeInput"></a>

```python
security_encryption_type_input: str
```

- *Type:* str

---

##### `storage_account_type_input`<sup>Optional</sup> <a name="storage_account_type_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.storageAccountTypeInput"></a>

```python
storage_account_type_input: str
```

- *Type:* str

---

##### `write_accelerator_enabled_input`<sup>Optional</sup> <a name="write_accelerator_enabled_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.writeAcceleratorEnabledInput"></a>

```python
write_accelerator_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.caching"></a>

```python
caching: str
```

- *Type:* str

---

##### `disk_encryption_set_id`<sup>Required</sup> <a name="disk_encryption_set_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.diskEncryptionSetId"></a>

```python
disk_encryption_set_id: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secure_vm_disk_encryption_set_id`<sup>Required</sup> <a name="secure_vm_disk_encryption_set_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.secureVmDiskEncryptionSetId"></a>

```python
secure_vm_disk_encryption_set_id: str
```

- *Type:* str

---

##### `security_encryption_type`<sup>Required</sup> <a name="security_encryption_type" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.securityEncryptionType"></a>

```python
security_encryption_type: str
```

- *Type:* str

---

##### `storage_account_type`<sup>Required</sup> <a name="storage_account_type" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.storageAccountType"></a>

```python
storage_account_type: str
```

- *Type:* str

---

##### `write_accelerator_enabled`<sup>Required</sup> <a name="write_accelerator_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.writeAcceleratorEnabled"></a>

```python
write_accelerator_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDiskOutputReference.property.internalValue"></a>

```python
internal_value: LinuxVirtualMachineScaleSetOsDisk
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetOsDisk">LinuxVirtualMachineScaleSetOsDisk</a>

---


### LinuxVirtualMachineScaleSetPlanOutputReference <a name="LinuxVirtualMachineScaleSetPlanOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.productInput">product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan">LinuxVirtualMachineScaleSetPlan</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `product_input`<sup>Optional</sup> <a name="product_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.productInput"></a>

```python
product_input: str
```

- *Type:* str

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlanOutputReference.property.internalValue"></a>

```python
internal_value: LinuxVirtualMachineScaleSetPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetPlan">LinuxVirtualMachineScaleSetPlan</a>

---


### LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference <a name="LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.resetCrossZoneUpgradesEnabled">reset_cross_zone_upgrades_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.resetMaximumSurgeInstancesEnabled">reset_maximum_surge_instances_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.resetPrioritizeUnhealthyInstancesEnabled">reset_prioritize_unhealthy_instances_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cross_zone_upgrades_enabled` <a name="reset_cross_zone_upgrades_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.resetCrossZoneUpgradesEnabled"></a>

```python
def reset_cross_zone_upgrades_enabled() -> None
```

##### `reset_maximum_surge_instances_enabled` <a name="reset_maximum_surge_instances_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.resetMaximumSurgeInstancesEnabled"></a>

```python
def reset_maximum_surge_instances_enabled() -> None
```

##### `reset_prioritize_unhealthy_instances_enabled` <a name="reset_prioritize_unhealthy_instances_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.resetPrioritizeUnhealthyInstancesEnabled"></a>

```python
def reset_prioritize_unhealthy_instances_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.crossZoneUpgradesEnabledInput">cross_zone_upgrades_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxBatchInstancePercentInput">max_batch_instance_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maximumSurgeInstancesEnabledInput">maximum_surge_instances_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyInstancePercentInput">max_unhealthy_instance_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyUpgradedInstancePercentInput">max_unhealthy_upgraded_instance_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.pauseTimeBetweenBatchesInput">pause_time_between_batches_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.prioritizeUnhealthyInstancesEnabledInput">prioritize_unhealthy_instances_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.crossZoneUpgradesEnabled">cross_zone_upgrades_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxBatchInstancePercent">max_batch_instance_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maximumSurgeInstancesEnabled">maximum_surge_instances_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyInstancePercent">max_unhealthy_instance_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyUpgradedInstancePercent">max_unhealthy_upgraded_instance_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.pauseTimeBetweenBatches">pause_time_between_batches</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.prioritizeUnhealthyInstancesEnabled">prioritize_unhealthy_instances_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy">LinuxVirtualMachineScaleSetRollingUpgradePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cross_zone_upgrades_enabled_input`<sup>Optional</sup> <a name="cross_zone_upgrades_enabled_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.crossZoneUpgradesEnabledInput"></a>

```python
cross_zone_upgrades_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_batch_instance_percent_input`<sup>Optional</sup> <a name="max_batch_instance_percent_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxBatchInstancePercentInput"></a>

```python
max_batch_instance_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_surge_instances_enabled_input`<sup>Optional</sup> <a name="maximum_surge_instances_enabled_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maximumSurgeInstancesEnabledInput"></a>

```python
maximum_surge_instances_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_unhealthy_instance_percent_input`<sup>Optional</sup> <a name="max_unhealthy_instance_percent_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyInstancePercentInput"></a>

```python
max_unhealthy_instance_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_unhealthy_upgraded_instance_percent_input`<sup>Optional</sup> <a name="max_unhealthy_upgraded_instance_percent_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyUpgradedInstancePercentInput"></a>

```python
max_unhealthy_upgraded_instance_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pause_time_between_batches_input`<sup>Optional</sup> <a name="pause_time_between_batches_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.pauseTimeBetweenBatchesInput"></a>

```python
pause_time_between_batches_input: str
```

- *Type:* str

---

##### `prioritize_unhealthy_instances_enabled_input`<sup>Optional</sup> <a name="prioritize_unhealthy_instances_enabled_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.prioritizeUnhealthyInstancesEnabledInput"></a>

```python
prioritize_unhealthy_instances_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cross_zone_upgrades_enabled`<sup>Required</sup> <a name="cross_zone_upgrades_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.crossZoneUpgradesEnabled"></a>

```python
cross_zone_upgrades_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_batch_instance_percent`<sup>Required</sup> <a name="max_batch_instance_percent" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxBatchInstancePercent"></a>

```python
max_batch_instance_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_surge_instances_enabled`<sup>Required</sup> <a name="maximum_surge_instances_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maximumSurgeInstancesEnabled"></a>

```python
maximum_surge_instances_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_unhealthy_instance_percent`<sup>Required</sup> <a name="max_unhealthy_instance_percent" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyInstancePercent"></a>

```python
max_unhealthy_instance_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_unhealthy_upgraded_instance_percent`<sup>Required</sup> <a name="max_unhealthy_upgraded_instance_percent" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.maxUnhealthyUpgradedInstancePercent"></a>

```python
max_unhealthy_upgraded_instance_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pause_time_between_batches`<sup>Required</sup> <a name="pause_time_between_batches" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.pauseTimeBetweenBatches"></a>

```python
pause_time_between_batches: str
```

- *Type:* str

---

##### `prioritize_unhealthy_instances_enabled`<sup>Required</sup> <a name="prioritize_unhealthy_instances_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.prioritizeUnhealthyInstancesEnabled"></a>

```python
prioritize_unhealthy_instances_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicyOutputReference.property.internalValue"></a>

```python
internal_value: LinuxVirtualMachineScaleSetRollingUpgradePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetRollingUpgradePolicy">LinuxVirtualMachineScaleSetRollingUpgradePolicy</a>

---


### LinuxVirtualMachineScaleSetScaleInOutputReference <a name="LinuxVirtualMachineScaleSetScaleInOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.resetForceDeletionEnabled">reset_force_deletion_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.resetRule">reset_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_force_deletion_enabled` <a name="reset_force_deletion_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.resetForceDeletionEnabled"></a>

```python
def reset_force_deletion_enabled() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.resetRule"></a>

```python
def reset_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.property.forceDeletionEnabledInput">force_deletion_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.property.ruleInput">rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.property.forceDeletionEnabled">force_deletion_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.property.rule">rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleIn">LinuxVirtualMachineScaleSetScaleIn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `force_deletion_enabled_input`<sup>Optional</sup> <a name="force_deletion_enabled_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.property.forceDeletionEnabledInput"></a>

```python
force_deletion_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.property.ruleInput"></a>

```python
rule_input: str
```

- *Type:* str

---

##### `force_deletion_enabled`<sup>Required</sup> <a name="force_deletion_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.property.forceDeletionEnabled"></a>

```python
force_deletion_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.property.rule"></a>

```python
rule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleInOutputReference.property.internalValue"></a>

```python
internal_value: LinuxVirtualMachineScaleSetScaleIn
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetScaleIn">LinuxVirtualMachineScaleSetScaleIn</a>

---


### LinuxVirtualMachineScaleSetSecretCertificateList <a name="LinuxVirtualMachineScaleSetSecretCertificateList" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LinuxVirtualMachineScaleSetSecretCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate">LinuxVirtualMachineScaleSetSecretCertificate</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetSecretCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate">LinuxVirtualMachineScaleSetSecretCertificate</a>]]

---


### LinuxVirtualMachineScaleSetSecretCertificateOutputReference <a name="LinuxVirtualMachineScaleSetSecretCertificateOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate">LinuxVirtualMachineScaleSetSecretCertificate</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LinuxVirtualMachineScaleSetSecretCertificate]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate">LinuxVirtualMachineScaleSetSecretCertificate</a>]

---


### LinuxVirtualMachineScaleSetSecretList <a name="LinuxVirtualMachineScaleSetSecretList" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LinuxVirtualMachineScaleSetSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret">LinuxVirtualMachineScaleSetSecret</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret">LinuxVirtualMachineScaleSetSecret</a>]]

---


### LinuxVirtualMachineScaleSetSecretOutputReference <a name="LinuxVirtualMachineScaleSetSecretOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.putCertificate">put_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_certificate` <a name="put_certificate" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.putCertificate"></a>

```python
def put_certificate(
  value: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetSecretCertificate]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.putCertificate.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate">LinuxVirtualMachineScaleSetSecretCertificate</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList">LinuxVirtualMachineScaleSetSecretCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.certificateInput">certificate_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate">LinuxVirtualMachineScaleSetSecretCertificate</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.keyVaultIdInput">key_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret">LinuxVirtualMachineScaleSetSecret</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.certificate"></a>

```python
certificate: LinuxVirtualMachineScaleSetSecretCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificateList">LinuxVirtualMachineScaleSetSecretCertificateList</a>

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.certificateInput"></a>

```python
certificate_input: typing.Union[IResolvable, typing.List[LinuxVirtualMachineScaleSetSecretCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretCertificate">LinuxVirtualMachineScaleSetSecretCertificate</a>]]

---

##### `key_vault_id_input`<sup>Optional</sup> <a name="key_vault_id_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.keyVaultIdInput"></a>

```python
key_vault_id_input: str
```

- *Type:* str

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecretOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LinuxVirtualMachineScaleSetSecret]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSecret">LinuxVirtualMachineScaleSetSecret</a>]

---


### LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference <a name="LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.offerInput">offer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.offer">offer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference">LinuxVirtualMachineScaleSetSourceImageReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `offer_input`<sup>Optional</sup> <a name="offer_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.offerInput"></a>

```python
offer_input: str
```

- *Type:* str

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.offer"></a>

```python
offer: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReferenceOutputReference.property.internalValue"></a>

```python
internal_value: LinuxVirtualMachineScaleSetSourceImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSourceImageReference">LinuxVirtualMachineScaleSetSourceImageReference</a>

---


### LinuxVirtualMachineScaleSetSpotRestoreOutputReference <a name="LinuxVirtualMachineScaleSetSpotRestoreOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestore">LinuxVirtualMachineScaleSetSpotRestore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestoreOutputReference.property.internalValue"></a>

```python
internal_value: LinuxVirtualMachineScaleSetSpotRestore
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetSpotRestore">LinuxVirtualMachineScaleSetSpotRestore</a>

---


### LinuxVirtualMachineScaleSetTerminationNotificationOutputReference <a name="LinuxVirtualMachineScaleSetTerminationNotificationOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotification">LinuxVirtualMachineScaleSetTerminationNotification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotificationOutputReference.property.internalValue"></a>

```python
internal_value: LinuxVirtualMachineScaleSetTerminationNotification
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTerminationNotification">LinuxVirtualMachineScaleSetTerminationNotification</a>

---


### LinuxVirtualMachineScaleSetTimeoutsOutputReference <a name="LinuxVirtualMachineScaleSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import linux_virtual_machine_scale_set

linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts">LinuxVirtualMachineScaleSetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LinuxVirtualMachineScaleSetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.linuxVirtualMachineScaleSet.LinuxVirtualMachineScaleSetTimeouts">LinuxVirtualMachineScaleSetTimeouts</a>]

---



