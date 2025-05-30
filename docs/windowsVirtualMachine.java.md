# `windowsVirtualMachine` Submodule <a name="`windowsVirtualMachine` Submodule" id="@cdktf/provider-azurerm.windowsVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WindowsVirtualMachine <a name="WindowsVirtualMachine" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine azurerm_windows_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachine;

WindowsVirtualMachine.Builder.create(Construct scope, java.lang.String id)
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
    .adminPassword(java.lang.String)
    .adminUsername(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .networkInterfaceIds(java.util.List<java.lang.String>)
    .osDisk(WindowsVirtualMachineOsDisk)
    .resourceGroupName(java.lang.String)
    .size(java.lang.String)
//  .additionalCapabilities(WindowsVirtualMachineAdditionalCapabilities)
//  .additionalUnattendContent(IResolvable)
//  .additionalUnattendContent(java.util.List<WindowsVirtualMachineAdditionalUnattendContent>)
//  .allowExtensionOperations(java.lang.Boolean)
//  .allowExtensionOperations(IResolvable)
//  .availabilitySetId(java.lang.String)
//  .bootDiagnostics(WindowsVirtualMachineBootDiagnostics)
//  .bypassPlatformSafetyChecksOnUserScheduleEnabled(java.lang.Boolean)
//  .bypassPlatformSafetyChecksOnUserScheduleEnabled(IResolvable)
//  .capacityReservationGroupId(java.lang.String)
//  .computerName(java.lang.String)
//  .customData(java.lang.String)
//  .dedicatedHostGroupId(java.lang.String)
//  .dedicatedHostId(java.lang.String)
//  .diskControllerType(java.lang.String)
//  .edgeZone(java.lang.String)
//  .enableAutomaticUpdates(java.lang.Boolean)
//  .enableAutomaticUpdates(IResolvable)
//  .encryptionAtHostEnabled(java.lang.Boolean)
//  .encryptionAtHostEnabled(IResolvable)
//  .evictionPolicy(java.lang.String)
//  .extensionsTimeBudget(java.lang.String)
//  .galleryApplication(IResolvable)
//  .galleryApplication(java.util.List<WindowsVirtualMachineGalleryApplication>)
//  .hotpatchingEnabled(java.lang.Boolean)
//  .hotpatchingEnabled(IResolvable)
//  .id(java.lang.String)
//  .identity(WindowsVirtualMachineIdentity)
//  .licenseType(java.lang.String)
//  .maxBidPrice(java.lang.Number)
//  .osImageNotification(WindowsVirtualMachineOsImageNotification)
//  .patchAssessmentMode(java.lang.String)
//  .patchMode(java.lang.String)
//  .plan(WindowsVirtualMachinePlan)
//  .platformFaultDomain(java.lang.Number)
//  .priority(java.lang.String)
//  .provisionVmAgent(java.lang.Boolean)
//  .provisionVmAgent(IResolvable)
//  .proximityPlacementGroupId(java.lang.String)
//  .rebootSetting(java.lang.String)
//  .secret(IResolvable)
//  .secret(java.util.List<WindowsVirtualMachineSecret>)
//  .secureBootEnabled(java.lang.Boolean)
//  .secureBootEnabled(IResolvable)
//  .sourceImageId(java.lang.String)
//  .sourceImageReference(WindowsVirtualMachineSourceImageReference)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .terminationNotification(WindowsVirtualMachineTerminationNotification)
//  .timeouts(WindowsVirtualMachineTimeouts)
//  .timezone(java.lang.String)
//  .userData(java.lang.String)
//  .virtualMachineScaleSetId(java.lang.String)
//  .vmAgentPlatformUpdatesEnabled(java.lang.Boolean)
//  .vmAgentPlatformUpdatesEnabled(IResolvable)
//  .vtpmEnabled(java.lang.Boolean)
//  .vtpmEnabled(IResolvable)
//  .winrmListener(IResolvable)
//  .winrmListener(java.util.List<WindowsVirtualMachineWinrmListener>)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#admin_password WindowsVirtualMachine#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#admin_username WindowsVirtualMachine#admin_username}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#location WindowsVirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.networkInterfaceIds">networkInterfaceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#network_interface_ids WindowsVirtualMachine#network_interface_ids}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.osDisk">osDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#resource_group_name WindowsVirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.size">size</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#size WindowsVirtualMachine#size}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.additionalCapabilities">additionalCapabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a></code> | additional_capabilities block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.additionalUnattendContent">additionalUnattendContent</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>></code> | additional_unattend_content block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.allowExtensionOperations">allowExtensionOperations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#allow_extension_operations WindowsVirtualMachine#allow_extension_operations}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.availabilitySetId">availabilitySetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#availability_set_id WindowsVirtualMachine#availability_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.bootDiagnostics">bootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.bypassPlatformSafetyChecksOnUserScheduleEnabled">bypassPlatformSafetyChecksOnUserScheduleEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#bypass_platform_safety_checks_on_user_schedule_enabled WindowsVirtualMachine#bypass_platform_safety_checks_on_user_schedule_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.capacityReservationGroupId">capacityReservationGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#capacity_reservation_group_id WindowsVirtualMachine#capacity_reservation_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.computerName">computerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#computer_name WindowsVirtualMachine#computer_name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.customData">customData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#custom_data WindowsVirtualMachine#custom_data}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.dedicatedHostGroupId">dedicatedHostGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#dedicated_host_group_id WindowsVirtualMachine#dedicated_host_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.dedicatedHostId">dedicatedHostId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#dedicated_host_id WindowsVirtualMachine#dedicated_host_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.diskControllerType">diskControllerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#disk_controller_type WindowsVirtualMachine#disk_controller_type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.edgeZone">edgeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#edge_zone WindowsVirtualMachine#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.enableAutomaticUpdates">enableAutomaticUpdates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#enable_automatic_updates WindowsVirtualMachine#enable_automatic_updates}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#encryption_at_host_enabled WindowsVirtualMachine#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.evictionPolicy">evictionPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#eviction_policy WindowsVirtualMachine#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.extensionsTimeBudget">extensionsTimeBudget</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#extensions_time_budget WindowsVirtualMachine#extensions_time_budget}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.galleryApplication">galleryApplication</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>></code> | gallery_application block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.hotpatchingEnabled">hotpatchingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#hotpatching_enabled WindowsVirtualMachine#hotpatching_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#id WindowsVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity">WindowsVirtualMachineIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.licenseType">licenseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#license_type WindowsVirtualMachine#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.maxBidPrice">maxBidPrice</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#max_bid_price WindowsVirtualMachine#max_bid_price}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.osImageNotification">osImageNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification">WindowsVirtualMachineOsImageNotification</a></code> | os_image_notification block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.patchAssessmentMode">patchAssessmentMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#patch_assessment_mode WindowsVirtualMachine#patch_assessment_mode}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.patchMode">patchMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#patch_mode WindowsVirtualMachine#patch_mode}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.platformFaultDomain">platformFaultDomain</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#platform_fault_domain WindowsVirtualMachine#platform_fault_domain}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.priority">priority</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#priority WindowsVirtualMachine#priority}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.provisionVmAgent">provisionVmAgent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#provision_vm_agent WindowsVirtualMachine#provision_vm_agent}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.proximityPlacementGroupId">proximityPlacementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#proximity_placement_group_id WindowsVirtualMachine#proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.rebootSetting">rebootSetting</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#reboot_setting WindowsVirtualMachine#reboot_setting}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.secret">secret</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>></code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.secureBootEnabled">secureBootEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#secure_boot_enabled WindowsVirtualMachine#secure_boot_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.sourceImageId">sourceImageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#source_image_id WindowsVirtualMachine#source_image_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.sourceImageReference">sourceImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a></code> | source_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#tags WindowsVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.terminationNotification">terminationNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification">WindowsVirtualMachineTerminationNotification</a></code> | termination_notification block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#timezone WindowsVirtualMachine#timezone}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.userData">userData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#user_data WindowsVirtualMachine#user_data}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.virtualMachineScaleSetId">virtualMachineScaleSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#virtual_machine_scale_set_id WindowsVirtualMachine#virtual_machine_scale_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.vmAgentPlatformUpdatesEnabled">vmAgentPlatformUpdatesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#vm_agent_platform_updates_enabled WindowsVirtualMachine#vm_agent_platform_updates_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.vtpmEnabled">vtpmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#vtpm_enabled WindowsVirtualMachine#vtpm_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.winrmListener">winrmListener</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>></code> | winrm_listener block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#zone WindowsVirtualMachine#zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.adminPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#admin_password WindowsVirtualMachine#admin_password}.

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.adminUsername"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#admin_username WindowsVirtualMachine#admin_username}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#location WindowsVirtualMachine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}.

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.networkInterfaceIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#network_interface_ids WindowsVirtualMachine#network_interface_ids}.

---

##### `osDisk`<sup>Required</sup> <a name="osDisk" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.osDisk"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#os_disk WindowsVirtualMachine#os_disk}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#resource_group_name WindowsVirtualMachine#resource_group_name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.size"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#size WindowsVirtualMachine#size}.

---

##### `additionalCapabilities`<sup>Optional</sup> <a name="additionalCapabilities" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.additionalCapabilities"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a>

additional_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#additional_capabilities WindowsVirtualMachine#additional_capabilities}

---

##### `additionalUnattendContent`<sup>Optional</sup> <a name="additionalUnattendContent" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.additionalUnattendContent"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>>

additional_unattend_content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#additional_unattend_content WindowsVirtualMachine#additional_unattend_content}

---

##### `allowExtensionOperations`<sup>Optional</sup> <a name="allowExtensionOperations" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.allowExtensionOperations"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#allow_extension_operations WindowsVirtualMachine#allow_extension_operations}.

---

##### `availabilitySetId`<sup>Optional</sup> <a name="availabilitySetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.availabilitySetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#availability_set_id WindowsVirtualMachine#availability_set_id}.

---

##### `bootDiagnostics`<sup>Optional</sup> <a name="bootDiagnostics" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.bootDiagnostics"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#boot_diagnostics WindowsVirtualMachine#boot_diagnostics}

---

##### `bypassPlatformSafetyChecksOnUserScheduleEnabled`<sup>Optional</sup> <a name="bypassPlatformSafetyChecksOnUserScheduleEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.bypassPlatformSafetyChecksOnUserScheduleEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#bypass_platform_safety_checks_on_user_schedule_enabled WindowsVirtualMachine#bypass_platform_safety_checks_on_user_schedule_enabled}.

---

##### `capacityReservationGroupId`<sup>Optional</sup> <a name="capacityReservationGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.capacityReservationGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#capacity_reservation_group_id WindowsVirtualMachine#capacity_reservation_group_id}.

---

##### `computerName`<sup>Optional</sup> <a name="computerName" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.computerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#computer_name WindowsVirtualMachine#computer_name}.

---

##### `customData`<sup>Optional</sup> <a name="customData" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.customData"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#custom_data WindowsVirtualMachine#custom_data}.

---

##### `dedicatedHostGroupId`<sup>Optional</sup> <a name="dedicatedHostGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.dedicatedHostGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#dedicated_host_group_id WindowsVirtualMachine#dedicated_host_group_id}.

---

##### `dedicatedHostId`<sup>Optional</sup> <a name="dedicatedHostId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.dedicatedHostId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#dedicated_host_id WindowsVirtualMachine#dedicated_host_id}.

---

##### `diskControllerType`<sup>Optional</sup> <a name="diskControllerType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.diskControllerType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#disk_controller_type WindowsVirtualMachine#disk_controller_type}.

---

##### `edgeZone`<sup>Optional</sup> <a name="edgeZone" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.edgeZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#edge_zone WindowsVirtualMachine#edge_zone}.

---

##### `enableAutomaticUpdates`<sup>Optional</sup> <a name="enableAutomaticUpdates" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.enableAutomaticUpdates"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#enable_automatic_updates WindowsVirtualMachine#enable_automatic_updates}.

---

##### `encryptionAtHostEnabled`<sup>Optional</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.encryptionAtHostEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#encryption_at_host_enabled WindowsVirtualMachine#encryption_at_host_enabled}.

---

##### `evictionPolicy`<sup>Optional</sup> <a name="evictionPolicy" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.evictionPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#eviction_policy WindowsVirtualMachine#eviction_policy}.

---

##### `extensionsTimeBudget`<sup>Optional</sup> <a name="extensionsTimeBudget" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.extensionsTimeBudget"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#extensions_time_budget WindowsVirtualMachine#extensions_time_budget}.

---

##### `galleryApplication`<sup>Optional</sup> <a name="galleryApplication" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.galleryApplication"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>>

gallery_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#gallery_application WindowsVirtualMachine#gallery_application}

---

##### `hotpatchingEnabled`<sup>Optional</sup> <a name="hotpatchingEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.hotpatchingEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#hotpatching_enabled WindowsVirtualMachine#hotpatching_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#id WindowsVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity">WindowsVirtualMachineIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#identity WindowsVirtualMachine#identity}

---

##### `licenseType`<sup>Optional</sup> <a name="licenseType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.licenseType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#license_type WindowsVirtualMachine#license_type}.

---

##### `maxBidPrice`<sup>Optional</sup> <a name="maxBidPrice" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.maxBidPrice"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#max_bid_price WindowsVirtualMachine#max_bid_price}.

---

##### `osImageNotification`<sup>Optional</sup> <a name="osImageNotification" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.osImageNotification"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification">WindowsVirtualMachineOsImageNotification</a>

os_image_notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#os_image_notification WindowsVirtualMachine#os_image_notification}

---

##### `patchAssessmentMode`<sup>Optional</sup> <a name="patchAssessmentMode" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.patchAssessmentMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#patch_assessment_mode WindowsVirtualMachine#patch_assessment_mode}.

---

##### `patchMode`<sup>Optional</sup> <a name="patchMode" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.patchMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#patch_mode WindowsVirtualMachine#patch_mode}.

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.plan"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#plan WindowsVirtualMachine#plan}

---

##### `platformFaultDomain`<sup>Optional</sup> <a name="platformFaultDomain" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.platformFaultDomain"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#platform_fault_domain WindowsVirtualMachine#platform_fault_domain}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.priority"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#priority WindowsVirtualMachine#priority}.

---

##### `provisionVmAgent`<sup>Optional</sup> <a name="provisionVmAgent" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.provisionVmAgent"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#provision_vm_agent WindowsVirtualMachine#provision_vm_agent}.

---

##### `proximityPlacementGroupId`<sup>Optional</sup> <a name="proximityPlacementGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.proximityPlacementGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#proximity_placement_group_id WindowsVirtualMachine#proximity_placement_group_id}.

---

##### `rebootSetting`<sup>Optional</sup> <a name="rebootSetting" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.rebootSetting"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#reboot_setting WindowsVirtualMachine#reboot_setting}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.secret"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#secret WindowsVirtualMachine#secret}

---

##### `secureBootEnabled`<sup>Optional</sup> <a name="secureBootEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.secureBootEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#secure_boot_enabled WindowsVirtualMachine#secure_boot_enabled}.

---

##### `sourceImageId`<sup>Optional</sup> <a name="sourceImageId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.sourceImageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#source_image_id WindowsVirtualMachine#source_image_id}.

---

##### `sourceImageReference`<sup>Optional</sup> <a name="sourceImageReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.sourceImageReference"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a>

source_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#source_image_reference WindowsVirtualMachine#source_image_reference}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#tags WindowsVirtualMachine#tags}.

---

##### `terminationNotification`<sup>Optional</sup> <a name="terminationNotification" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.terminationNotification"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification">WindowsVirtualMachineTerminationNotification</a>

termination_notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#termination_notification WindowsVirtualMachine#termination_notification}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#timeouts WindowsVirtualMachine#timeouts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.timezone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#timezone WindowsVirtualMachine#timezone}.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.userData"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#user_data WindowsVirtualMachine#user_data}.

---

##### `virtualMachineScaleSetId`<sup>Optional</sup> <a name="virtualMachineScaleSetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.virtualMachineScaleSetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#virtual_machine_scale_set_id WindowsVirtualMachine#virtual_machine_scale_set_id}.

---

##### `vmAgentPlatformUpdatesEnabled`<sup>Optional</sup> <a name="vmAgentPlatformUpdatesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.vmAgentPlatformUpdatesEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#vm_agent_platform_updates_enabled WindowsVirtualMachine#vm_agent_platform_updates_enabled}.

---

##### `vtpmEnabled`<sup>Optional</sup> <a name="vtpmEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.vtpmEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#vtpm_enabled WindowsVirtualMachine#vtpm_enabled}.

---

##### `winrmListener`<sup>Optional</sup> <a name="winrmListener" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.winrmListener"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>>

winrm_listener block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#winrm_listener WindowsVirtualMachine#winrm_listener}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#zone WindowsVirtualMachine#zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalCapabilities">putAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalUnattendContent">putAdditionalUnattendContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putBootDiagnostics">putBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putGalleryApplication">putGalleryApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putOsDisk">putOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putOsImageNotification">putOsImageNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putPlan">putPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putSourceImageReference">putSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putTerminationNotification">putTerminationNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putWinrmListener">putWinrmListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAdditionalCapabilities">resetAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAdditionalUnattendContent">resetAdditionalUnattendContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAllowExtensionOperations">resetAllowExtensionOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAvailabilitySetId">resetAvailabilitySetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetBootDiagnostics">resetBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetBypassPlatformSafetyChecksOnUserScheduleEnabled">resetBypassPlatformSafetyChecksOnUserScheduleEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetCapacityReservationGroupId">resetCapacityReservationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetComputerName">resetComputerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetCustomData">resetCustomData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetDedicatedHostGroupId">resetDedicatedHostGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetDedicatedHostId">resetDedicatedHostId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetDiskControllerType">resetDiskControllerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetEdgeZone">resetEdgeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetEnableAutomaticUpdates">resetEnableAutomaticUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetEncryptionAtHostEnabled">resetEncryptionAtHostEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetEvictionPolicy">resetEvictionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetExtensionsTimeBudget">resetExtensionsTimeBudget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetGalleryApplication">resetGalleryApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetHotpatchingEnabled">resetHotpatchingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetLicenseType">resetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetMaxBidPrice">resetMaxBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetOsImageNotification">resetOsImageNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPatchAssessmentMode">resetPatchAssessmentMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPatchMode">resetPatchMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPlan">resetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPlatformFaultDomain">resetPlatformFaultDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetProvisionVmAgent">resetProvisionVmAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetProximityPlacementGroupId">resetProximityPlacementGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetRebootSetting">resetRebootSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetSecureBootEnabled">resetSecureBootEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetSourceImageId">resetSourceImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetSourceImageReference">resetSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetTerminationNotification">resetTerminationNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetUserData">resetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetVirtualMachineScaleSetId">resetVirtualMachineScaleSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetVmAgentPlatformUpdatesEnabled">resetVmAgentPlatformUpdatesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetVtpmEnabled">resetVtpmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetWinrmListener">resetWinrmListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalCapabilities` <a name="putAdditionalCapabilities" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalCapabilities"></a>

```java
public void putAdditionalCapabilities(WindowsVirtualMachineAdditionalCapabilities value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a>

---

##### `putAdditionalUnattendContent` <a name="putAdditionalUnattendContent" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalUnattendContent"></a>

```java
public void putAdditionalUnattendContent(IResolvable OR java.util.List<WindowsVirtualMachineAdditionalUnattendContent> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putAdditionalUnattendContent.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>>

---

##### `putBootDiagnostics` <a name="putBootDiagnostics" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putBootDiagnostics"></a>

```java
public void putBootDiagnostics(WindowsVirtualMachineBootDiagnostics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putBootDiagnostics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a>

---

##### `putGalleryApplication` <a name="putGalleryApplication" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putGalleryApplication"></a>

```java
public void putGalleryApplication(IResolvable OR java.util.List<WindowsVirtualMachineGalleryApplication> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putGalleryApplication.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putIdentity"></a>

```java
public void putIdentity(WindowsVirtualMachineIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity">WindowsVirtualMachineIdentity</a>

---

##### `putOsDisk` <a name="putOsDisk" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putOsDisk"></a>

```java
public void putOsDisk(WindowsVirtualMachineOsDisk value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putOsDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a>

---

##### `putOsImageNotification` <a name="putOsImageNotification" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putOsImageNotification"></a>

```java
public void putOsImageNotification(WindowsVirtualMachineOsImageNotification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putOsImageNotification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification">WindowsVirtualMachineOsImageNotification</a>

---

##### `putPlan` <a name="putPlan" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putPlan"></a>

```java
public void putPlan(WindowsVirtualMachinePlan value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putPlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a>

---

##### `putSecret` <a name="putSecret" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putSecret"></a>

```java
public void putSecret(IResolvable OR java.util.List<WindowsVirtualMachineSecret> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putSecret.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>>

---

##### `putSourceImageReference` <a name="putSourceImageReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putSourceImageReference"></a>

```java
public void putSourceImageReference(WindowsVirtualMachineSourceImageReference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putSourceImageReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a>

---

##### `putTerminationNotification` <a name="putTerminationNotification" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putTerminationNotification"></a>

```java
public void putTerminationNotification(WindowsVirtualMachineTerminationNotification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putTerminationNotification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification">WindowsVirtualMachineTerminationNotification</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putTimeouts"></a>

```java
public void putTimeouts(WindowsVirtualMachineTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a>

---

##### `putWinrmListener` <a name="putWinrmListener" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putWinrmListener"></a>

```java
public void putWinrmListener(IResolvable OR java.util.List<WindowsVirtualMachineWinrmListener> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.putWinrmListener.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>>

---

##### `resetAdditionalCapabilities` <a name="resetAdditionalCapabilities" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAdditionalCapabilities"></a>

```java
public void resetAdditionalCapabilities()
```

##### `resetAdditionalUnattendContent` <a name="resetAdditionalUnattendContent" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAdditionalUnattendContent"></a>

```java
public void resetAdditionalUnattendContent()
```

##### `resetAllowExtensionOperations` <a name="resetAllowExtensionOperations" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAllowExtensionOperations"></a>

```java
public void resetAllowExtensionOperations()
```

##### `resetAvailabilitySetId` <a name="resetAvailabilitySetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetAvailabilitySetId"></a>

```java
public void resetAvailabilitySetId()
```

##### `resetBootDiagnostics` <a name="resetBootDiagnostics" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetBootDiagnostics"></a>

```java
public void resetBootDiagnostics()
```

##### `resetBypassPlatformSafetyChecksOnUserScheduleEnabled` <a name="resetBypassPlatformSafetyChecksOnUserScheduleEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetBypassPlatformSafetyChecksOnUserScheduleEnabled"></a>

```java
public void resetBypassPlatformSafetyChecksOnUserScheduleEnabled()
```

##### `resetCapacityReservationGroupId` <a name="resetCapacityReservationGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetCapacityReservationGroupId"></a>

```java
public void resetCapacityReservationGroupId()
```

##### `resetComputerName` <a name="resetComputerName" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetComputerName"></a>

```java
public void resetComputerName()
```

##### `resetCustomData` <a name="resetCustomData" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetCustomData"></a>

```java
public void resetCustomData()
```

##### `resetDedicatedHostGroupId` <a name="resetDedicatedHostGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetDedicatedHostGroupId"></a>

```java
public void resetDedicatedHostGroupId()
```

##### `resetDedicatedHostId` <a name="resetDedicatedHostId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetDedicatedHostId"></a>

```java
public void resetDedicatedHostId()
```

##### `resetDiskControllerType` <a name="resetDiskControllerType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetDiskControllerType"></a>

```java
public void resetDiskControllerType()
```

##### `resetEdgeZone` <a name="resetEdgeZone" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetEdgeZone"></a>

```java
public void resetEdgeZone()
```

##### `resetEnableAutomaticUpdates` <a name="resetEnableAutomaticUpdates" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetEnableAutomaticUpdates"></a>

```java
public void resetEnableAutomaticUpdates()
```

##### `resetEncryptionAtHostEnabled` <a name="resetEncryptionAtHostEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetEncryptionAtHostEnabled"></a>

```java
public void resetEncryptionAtHostEnabled()
```

##### `resetEvictionPolicy` <a name="resetEvictionPolicy" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetEvictionPolicy"></a>

```java
public void resetEvictionPolicy()
```

##### `resetExtensionsTimeBudget` <a name="resetExtensionsTimeBudget" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetExtensionsTimeBudget"></a>

```java
public void resetExtensionsTimeBudget()
```

##### `resetGalleryApplication` <a name="resetGalleryApplication" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetGalleryApplication"></a>

```java
public void resetGalleryApplication()
```

##### `resetHotpatchingEnabled` <a name="resetHotpatchingEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetHotpatchingEnabled"></a>

```java
public void resetHotpatchingEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetLicenseType` <a name="resetLicenseType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetLicenseType"></a>

```java
public void resetLicenseType()
```

##### `resetMaxBidPrice` <a name="resetMaxBidPrice" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetMaxBidPrice"></a>

```java
public void resetMaxBidPrice()
```

##### `resetOsImageNotification` <a name="resetOsImageNotification" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetOsImageNotification"></a>

```java
public void resetOsImageNotification()
```

##### `resetPatchAssessmentMode` <a name="resetPatchAssessmentMode" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPatchAssessmentMode"></a>

```java
public void resetPatchAssessmentMode()
```

##### `resetPatchMode` <a name="resetPatchMode" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPatchMode"></a>

```java
public void resetPatchMode()
```

##### `resetPlan` <a name="resetPlan" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPlan"></a>

```java
public void resetPlan()
```

##### `resetPlatformFaultDomain` <a name="resetPlatformFaultDomain" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPlatformFaultDomain"></a>

```java
public void resetPlatformFaultDomain()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetProvisionVmAgent` <a name="resetProvisionVmAgent" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetProvisionVmAgent"></a>

```java
public void resetProvisionVmAgent()
```

##### `resetProximityPlacementGroupId` <a name="resetProximityPlacementGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetProximityPlacementGroupId"></a>

```java
public void resetProximityPlacementGroupId()
```

##### `resetRebootSetting` <a name="resetRebootSetting" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetRebootSetting"></a>

```java
public void resetRebootSetting()
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetSecret"></a>

```java
public void resetSecret()
```

##### `resetSecureBootEnabled` <a name="resetSecureBootEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetSecureBootEnabled"></a>

```java
public void resetSecureBootEnabled()
```

##### `resetSourceImageId` <a name="resetSourceImageId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetSourceImageId"></a>

```java
public void resetSourceImageId()
```

##### `resetSourceImageReference` <a name="resetSourceImageReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetSourceImageReference"></a>

```java
public void resetSourceImageReference()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetTags"></a>

```java
public void resetTags()
```

##### `resetTerminationNotification` <a name="resetTerminationNotification" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetTerminationNotification"></a>

```java
public void resetTerminationNotification()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetTimezone"></a>

```java
public void resetTimezone()
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetUserData"></a>

```java
public void resetUserData()
```

##### `resetVirtualMachineScaleSetId` <a name="resetVirtualMachineScaleSetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetVirtualMachineScaleSetId"></a>

```java
public void resetVirtualMachineScaleSetId()
```

##### `resetVmAgentPlatformUpdatesEnabled` <a name="resetVmAgentPlatformUpdatesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetVmAgentPlatformUpdatesEnabled"></a>

```java
public void resetVmAgentPlatformUpdatesEnabled()
```

##### `resetVtpmEnabled` <a name="resetVtpmEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetVtpmEnabled"></a>

```java
public void resetVtpmEnabled()
```

##### `resetWinrmListener` <a name="resetWinrmListener" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetWinrmListener"></a>

```java
public void resetWinrmListener()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WindowsVirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachine;

WindowsVirtualMachine.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachine;

WindowsVirtualMachine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachine;

WindowsVirtualMachine.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachine;

WindowsVirtualMachine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WindowsVirtualMachine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WindowsVirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WindowsVirtualMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WindowsVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WindowsVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.additionalCapabilities">additionalCapabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference">WindowsVirtualMachineAdditionalCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.additionalUnattendContent">additionalUnattendContent</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList">WindowsVirtualMachineAdditionalUnattendContentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.bootDiagnostics">bootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference">WindowsVirtualMachineBootDiagnosticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.galleryApplication">galleryApplication</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList">WindowsVirtualMachineGalleryApplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference">WindowsVirtualMachineIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osDisk">osDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference">WindowsVirtualMachineOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osImageNotification">osImageNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference">WindowsVirtualMachineOsImageNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference">WindowsVirtualMachinePlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.privateIpAddresses">privateIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.publicIpAddress">publicIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.publicIpAddresses">publicIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList">WindowsVirtualMachineSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageReference">sourceImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference">WindowsVirtualMachineSourceImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terminationNotification">terminationNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference">WindowsVirtualMachineTerminationNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference">WindowsVirtualMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineId">virtualMachineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.winrmListener">winrmListener</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList">WindowsVirtualMachineWinrmListenerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.additionalCapabilitiesInput">additionalCapabilitiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.additionalUnattendContentInput">additionalUnattendContentInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.adminPasswordInput">adminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.adminUsernameInput">adminUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.allowExtensionOperationsInput">allowExtensionOperationsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.availabilitySetIdInput">availabilitySetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.bootDiagnosticsInput">bootDiagnosticsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.bypassPlatformSafetyChecksOnUserScheduleEnabledInput">bypassPlatformSafetyChecksOnUserScheduleEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.capacityReservationGroupIdInput">capacityReservationGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.computerNameInput">computerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.customDataInput">customDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dedicatedHostGroupIdInput">dedicatedHostGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dedicatedHostIdInput">dedicatedHostIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.diskControllerTypeInput">diskControllerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.edgeZoneInput">edgeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.enableAutomaticUpdatesInput">enableAutomaticUpdatesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.encryptionAtHostEnabledInput">encryptionAtHostEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.evictionPolicyInput">evictionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.extensionsTimeBudgetInput">extensionsTimeBudgetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.galleryApplicationInput">galleryApplicationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.hotpatchingEnabledInput">hotpatchingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity">WindowsVirtualMachineIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.licenseTypeInput">licenseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.maxBidPriceInput">maxBidPriceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.networkInterfaceIdsInput">networkInterfaceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osDiskInput">osDiskInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osImageNotificationInput">osImageNotificationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification">WindowsVirtualMachineOsImageNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.patchAssessmentModeInput">patchAssessmentModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.patchModeInput">patchModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.planInput">planInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.platformFaultDomainInput">platformFaultDomainInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.priorityInput">priorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.provisionVmAgentInput">provisionVmAgentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.proximityPlacementGroupIdInput">proximityPlacementGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.rebootSettingInput">rebootSettingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.secretInput">secretInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.secureBootEnabledInput">secureBootEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sizeInput">sizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageIdInput">sourceImageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageReferenceInput">sourceImageReferenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terminationNotificationInput">terminationNotificationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification">WindowsVirtualMachineTerminationNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.userDataInput">userDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineScaleSetIdInput">virtualMachineScaleSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.vmAgentPlatformUpdatesEnabledInput">vmAgentPlatformUpdatesEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.vtpmEnabledInput">vtpmEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.winrmListenerInput">winrmListenerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.allowExtensionOperations">allowExtensionOperations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.availabilitySetId">availabilitySetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.bypassPlatformSafetyChecksOnUserScheduleEnabled">bypassPlatformSafetyChecksOnUserScheduleEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.capacityReservationGroupId">capacityReservationGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.computerName">computerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.customData">customData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dedicatedHostGroupId">dedicatedHostGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dedicatedHostId">dedicatedHostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.diskControllerType">diskControllerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.edgeZone">edgeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.enableAutomaticUpdates">enableAutomaticUpdates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.evictionPolicy">evictionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.extensionsTimeBudget">extensionsTimeBudget</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.hotpatchingEnabled">hotpatchingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.maxBidPrice">maxBidPrice</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.patchAssessmentMode">patchAssessmentMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.patchMode">patchMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.platformFaultDomain">platformFaultDomain</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.priority">priority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.provisionVmAgent">provisionVmAgent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.proximityPlacementGroupId">proximityPlacementGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.rebootSetting">rebootSetting</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.secureBootEnabled">secureBootEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.size">size</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageId">sourceImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.userData">userData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineScaleSetId">virtualMachineScaleSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.vmAgentPlatformUpdatesEnabled">vmAgentPlatformUpdatesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.vtpmEnabled">vtpmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `additionalCapabilities`<sup>Required</sup> <a name="additionalCapabilities" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.additionalCapabilities"></a>

```java
public WindowsVirtualMachineAdditionalCapabilitiesOutputReference getAdditionalCapabilities();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference">WindowsVirtualMachineAdditionalCapabilitiesOutputReference</a>

---

##### `additionalUnattendContent`<sup>Required</sup> <a name="additionalUnattendContent" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.additionalUnattendContent"></a>

```java
public WindowsVirtualMachineAdditionalUnattendContentList getAdditionalUnattendContent();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList">WindowsVirtualMachineAdditionalUnattendContentList</a>

---

##### `bootDiagnostics`<sup>Required</sup> <a name="bootDiagnostics" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.bootDiagnostics"></a>

```java
public WindowsVirtualMachineBootDiagnosticsOutputReference getBootDiagnostics();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference">WindowsVirtualMachineBootDiagnosticsOutputReference</a>

---

##### `galleryApplication`<sup>Required</sup> <a name="galleryApplication" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.galleryApplication"></a>

```java
public WindowsVirtualMachineGalleryApplicationList getGalleryApplication();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList">WindowsVirtualMachineGalleryApplicationList</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.identity"></a>

```java
public WindowsVirtualMachineIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference">WindowsVirtualMachineIdentityOutputReference</a>

---

##### `osDisk`<sup>Required</sup> <a name="osDisk" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osDisk"></a>

```java
public WindowsVirtualMachineOsDiskOutputReference getOsDisk();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference">WindowsVirtualMachineOsDiskOutputReference</a>

---

##### `osImageNotification`<sup>Required</sup> <a name="osImageNotification" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osImageNotification"></a>

```java
public WindowsVirtualMachineOsImageNotificationOutputReference getOsImageNotification();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference">WindowsVirtualMachineOsImageNotificationOutputReference</a>

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.plan"></a>

```java
public WindowsVirtualMachinePlanOutputReference getPlan();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference">WindowsVirtualMachinePlanOutputReference</a>

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `privateIpAddresses`<sup>Required</sup> <a name="privateIpAddresses" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.privateIpAddresses"></a>

```java
public java.util.List<java.lang.String> getPrivateIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.publicIpAddress"></a>

```java
public java.lang.String getPublicIpAddress();
```

- *Type:* java.lang.String

---

##### `publicIpAddresses`<sup>Required</sup> <a name="publicIpAddresses" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.publicIpAddresses"></a>

```java
public java.util.List<java.lang.String> getPublicIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.secret"></a>

```java
public WindowsVirtualMachineSecretList getSecret();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList">WindowsVirtualMachineSecretList</a>

---

##### `sourceImageReference`<sup>Required</sup> <a name="sourceImageReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageReference"></a>

```java
public WindowsVirtualMachineSourceImageReferenceOutputReference getSourceImageReference();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference">WindowsVirtualMachineSourceImageReferenceOutputReference</a>

---

##### `terminationNotification`<sup>Required</sup> <a name="terminationNotification" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terminationNotification"></a>

```java
public WindowsVirtualMachineTerminationNotificationOutputReference getTerminationNotification();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference">WindowsVirtualMachineTerminationNotificationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.timeouts"></a>

```java
public WindowsVirtualMachineTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference">WindowsVirtualMachineTimeoutsOutputReference</a>

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineId"></a>

```java
public java.lang.String getVirtualMachineId();
```

- *Type:* java.lang.String

---

##### `winrmListener`<sup>Required</sup> <a name="winrmListener" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.winrmListener"></a>

```java
public WindowsVirtualMachineWinrmListenerList getWinrmListener();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList">WindowsVirtualMachineWinrmListenerList</a>

---

##### `additionalCapabilitiesInput`<sup>Optional</sup> <a name="additionalCapabilitiesInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.additionalCapabilitiesInput"></a>

```java
public WindowsVirtualMachineAdditionalCapabilities getAdditionalCapabilitiesInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a>

---

##### `additionalUnattendContentInput`<sup>Optional</sup> <a name="additionalUnattendContentInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.additionalUnattendContentInput"></a>

```java
public java.lang.Object getAdditionalUnattendContentInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>>

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.adminPasswordInput"></a>

```java
public java.lang.String getAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `adminUsernameInput`<sup>Optional</sup> <a name="adminUsernameInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.adminUsernameInput"></a>

```java
public java.lang.String getAdminUsernameInput();
```

- *Type:* java.lang.String

---

##### `allowExtensionOperationsInput`<sup>Optional</sup> <a name="allowExtensionOperationsInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.allowExtensionOperationsInput"></a>

```java
public java.lang.Object getAllowExtensionOperationsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilitySetIdInput`<sup>Optional</sup> <a name="availabilitySetIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.availabilitySetIdInput"></a>

```java
public java.lang.String getAvailabilitySetIdInput();
```

- *Type:* java.lang.String

---

##### `bootDiagnosticsInput`<sup>Optional</sup> <a name="bootDiagnosticsInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.bootDiagnosticsInput"></a>

```java
public WindowsVirtualMachineBootDiagnostics getBootDiagnosticsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a>

---

##### `bypassPlatformSafetyChecksOnUserScheduleEnabledInput`<sup>Optional</sup> <a name="bypassPlatformSafetyChecksOnUserScheduleEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.bypassPlatformSafetyChecksOnUserScheduleEnabledInput"></a>

```java
public java.lang.Object getBypassPlatformSafetyChecksOnUserScheduleEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `capacityReservationGroupIdInput`<sup>Optional</sup> <a name="capacityReservationGroupIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.capacityReservationGroupIdInput"></a>

```java
public java.lang.String getCapacityReservationGroupIdInput();
```

- *Type:* java.lang.String

---

##### `computerNameInput`<sup>Optional</sup> <a name="computerNameInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.computerNameInput"></a>

```java
public java.lang.String getComputerNameInput();
```

- *Type:* java.lang.String

---

##### `customDataInput`<sup>Optional</sup> <a name="customDataInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.customDataInput"></a>

```java
public java.lang.String getCustomDataInput();
```

- *Type:* java.lang.String

---

##### `dedicatedHostGroupIdInput`<sup>Optional</sup> <a name="dedicatedHostGroupIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dedicatedHostGroupIdInput"></a>

```java
public java.lang.String getDedicatedHostGroupIdInput();
```

- *Type:* java.lang.String

---

##### `dedicatedHostIdInput`<sup>Optional</sup> <a name="dedicatedHostIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dedicatedHostIdInput"></a>

```java
public java.lang.String getDedicatedHostIdInput();
```

- *Type:* java.lang.String

---

##### `diskControllerTypeInput`<sup>Optional</sup> <a name="diskControllerTypeInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.diskControllerTypeInput"></a>

```java
public java.lang.String getDiskControllerTypeInput();
```

- *Type:* java.lang.String

---

##### `edgeZoneInput`<sup>Optional</sup> <a name="edgeZoneInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.edgeZoneInput"></a>

```java
public java.lang.String getEdgeZoneInput();
```

- *Type:* java.lang.String

---

##### `enableAutomaticUpdatesInput`<sup>Optional</sup> <a name="enableAutomaticUpdatesInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.enableAutomaticUpdatesInput"></a>

```java
public java.lang.Object getEnableAutomaticUpdatesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionAtHostEnabledInput`<sup>Optional</sup> <a name="encryptionAtHostEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.encryptionAtHostEnabledInput"></a>

```java
public java.lang.Object getEncryptionAtHostEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `evictionPolicyInput`<sup>Optional</sup> <a name="evictionPolicyInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.evictionPolicyInput"></a>

```java
public java.lang.String getEvictionPolicyInput();
```

- *Type:* java.lang.String

---

##### `extensionsTimeBudgetInput`<sup>Optional</sup> <a name="extensionsTimeBudgetInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.extensionsTimeBudgetInput"></a>

```java
public java.lang.String getExtensionsTimeBudgetInput();
```

- *Type:* java.lang.String

---

##### `galleryApplicationInput`<sup>Optional</sup> <a name="galleryApplicationInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.galleryApplicationInput"></a>

```java
public java.lang.Object getGalleryApplicationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>>

---

##### `hotpatchingEnabledInput`<sup>Optional</sup> <a name="hotpatchingEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.hotpatchingEnabledInput"></a>

```java
public java.lang.Object getHotpatchingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.identityInput"></a>

```java
public WindowsVirtualMachineIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity">WindowsVirtualMachineIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.licenseTypeInput"></a>

```java
public java.lang.String getLicenseTypeInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maxBidPriceInput`<sup>Optional</sup> <a name="maxBidPriceInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.maxBidPriceInput"></a>

```java
public java.lang.Number getMaxBidPriceInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIdsInput`<sup>Optional</sup> <a name="networkInterfaceIdsInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.networkInterfaceIdsInput"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfaceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `osDiskInput`<sup>Optional</sup> <a name="osDiskInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osDiskInput"></a>

```java
public WindowsVirtualMachineOsDisk getOsDiskInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a>

---

##### `osImageNotificationInput`<sup>Optional</sup> <a name="osImageNotificationInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.osImageNotificationInput"></a>

```java
public WindowsVirtualMachineOsImageNotification getOsImageNotificationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification">WindowsVirtualMachineOsImageNotification</a>

---

##### `patchAssessmentModeInput`<sup>Optional</sup> <a name="patchAssessmentModeInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.patchAssessmentModeInput"></a>

```java
public java.lang.String getPatchAssessmentModeInput();
```

- *Type:* java.lang.String

---

##### `patchModeInput`<sup>Optional</sup> <a name="patchModeInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.patchModeInput"></a>

```java
public java.lang.String getPatchModeInput();
```

- *Type:* java.lang.String

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.planInput"></a>

```java
public WindowsVirtualMachinePlan getPlanInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a>

---

##### `platformFaultDomainInput`<sup>Optional</sup> <a name="platformFaultDomainInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.platformFaultDomainInput"></a>

```java
public java.lang.Number getPlatformFaultDomainInput();
```

- *Type:* java.lang.Number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.priorityInput"></a>

```java
public java.lang.String getPriorityInput();
```

- *Type:* java.lang.String

---

##### `provisionVmAgentInput`<sup>Optional</sup> <a name="provisionVmAgentInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.provisionVmAgentInput"></a>

```java
public java.lang.Object getProvisionVmAgentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `proximityPlacementGroupIdInput`<sup>Optional</sup> <a name="proximityPlacementGroupIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.proximityPlacementGroupIdInput"></a>

```java
public java.lang.String getProximityPlacementGroupIdInput();
```

- *Type:* java.lang.String

---

##### `rebootSettingInput`<sup>Optional</sup> <a name="rebootSettingInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.rebootSettingInput"></a>

```java
public java.lang.String getRebootSettingInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.secretInput"></a>

```java
public java.lang.Object getSecretInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>>

---

##### `secureBootEnabledInput`<sup>Optional</sup> <a name="secureBootEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.secureBootEnabledInput"></a>

```java
public java.lang.Object getSecureBootEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sizeInput"></a>

```java
public java.lang.String getSizeInput();
```

- *Type:* java.lang.String

---

##### `sourceImageIdInput`<sup>Optional</sup> <a name="sourceImageIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageIdInput"></a>

```java
public java.lang.String getSourceImageIdInput();
```

- *Type:* java.lang.String

---

##### `sourceImageReferenceInput`<sup>Optional</sup> <a name="sourceImageReferenceInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageReferenceInput"></a>

```java
public WindowsVirtualMachineSourceImageReference getSourceImageReferenceInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `terminationNotificationInput`<sup>Optional</sup> <a name="terminationNotificationInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.terminationNotificationInput"></a>

```java
public WindowsVirtualMachineTerminationNotification getTerminationNotificationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification">WindowsVirtualMachineTerminationNotification</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a>

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.userDataInput"></a>

```java
public java.lang.String getUserDataInput();
```

- *Type:* java.lang.String

---

##### `virtualMachineScaleSetIdInput`<sup>Optional</sup> <a name="virtualMachineScaleSetIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineScaleSetIdInput"></a>

```java
public java.lang.String getVirtualMachineScaleSetIdInput();
```

- *Type:* java.lang.String

---

##### `vmAgentPlatformUpdatesEnabledInput`<sup>Optional</sup> <a name="vmAgentPlatformUpdatesEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.vmAgentPlatformUpdatesEnabledInput"></a>

```java
public java.lang.Object getVmAgentPlatformUpdatesEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vtpmEnabledInput`<sup>Optional</sup> <a name="vtpmEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.vtpmEnabledInput"></a>

```java
public java.lang.Object getVtpmEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `winrmListenerInput`<sup>Optional</sup> <a name="winrmListenerInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.winrmListenerInput"></a>

```java
public java.lang.Object getWinrmListenerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

---

##### `allowExtensionOperations`<sup>Required</sup> <a name="allowExtensionOperations" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.allowExtensionOperations"></a>

```java
public java.lang.Object getAllowExtensionOperations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilitySetId`<sup>Required</sup> <a name="availabilitySetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.availabilitySetId"></a>

```java
public java.lang.String getAvailabilitySetId();
```

- *Type:* java.lang.String

---

##### `bypassPlatformSafetyChecksOnUserScheduleEnabled`<sup>Required</sup> <a name="bypassPlatformSafetyChecksOnUserScheduleEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.bypassPlatformSafetyChecksOnUserScheduleEnabled"></a>

```java
public java.lang.Object getBypassPlatformSafetyChecksOnUserScheduleEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `capacityReservationGroupId`<sup>Required</sup> <a name="capacityReservationGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.capacityReservationGroupId"></a>

```java
public java.lang.String getCapacityReservationGroupId();
```

- *Type:* java.lang.String

---

##### `computerName`<sup>Required</sup> <a name="computerName" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.computerName"></a>

```java
public java.lang.String getComputerName();
```

- *Type:* java.lang.String

---

##### `customData`<sup>Required</sup> <a name="customData" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.customData"></a>

```java
public java.lang.String getCustomData();
```

- *Type:* java.lang.String

---

##### `dedicatedHostGroupId`<sup>Required</sup> <a name="dedicatedHostGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dedicatedHostGroupId"></a>

```java
public java.lang.String getDedicatedHostGroupId();
```

- *Type:* java.lang.String

---

##### `dedicatedHostId`<sup>Required</sup> <a name="dedicatedHostId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.dedicatedHostId"></a>

```java
public java.lang.String getDedicatedHostId();
```

- *Type:* java.lang.String

---

##### `diskControllerType`<sup>Required</sup> <a name="diskControllerType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.diskControllerType"></a>

```java
public java.lang.String getDiskControllerType();
```

- *Type:* java.lang.String

---

##### `edgeZone`<sup>Required</sup> <a name="edgeZone" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.edgeZone"></a>

```java
public java.lang.String getEdgeZone();
```

- *Type:* java.lang.String

---

##### `enableAutomaticUpdates`<sup>Required</sup> <a name="enableAutomaticUpdates" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.enableAutomaticUpdates"></a>

```java
public java.lang.Object getEnableAutomaticUpdates();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionAtHostEnabled`<sup>Required</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.encryptionAtHostEnabled"></a>

```java
public java.lang.Object getEncryptionAtHostEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `evictionPolicy`<sup>Required</sup> <a name="evictionPolicy" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.evictionPolicy"></a>

```java
public java.lang.String getEvictionPolicy();
```

- *Type:* java.lang.String

---

##### `extensionsTimeBudget`<sup>Required</sup> <a name="extensionsTimeBudget" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.extensionsTimeBudget"></a>

```java
public java.lang.String getExtensionsTimeBudget();
```

- *Type:* java.lang.String

---

##### `hotpatchingEnabled`<sup>Required</sup> <a name="hotpatchingEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.hotpatchingEnabled"></a>

```java
public java.lang.Object getHotpatchingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `maxBidPrice`<sup>Required</sup> <a name="maxBidPrice" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.maxBidPrice"></a>

```java
public java.lang.Number getMaxBidPrice();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.networkInterfaceIds"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfaceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `patchAssessmentMode`<sup>Required</sup> <a name="patchAssessmentMode" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.patchAssessmentMode"></a>

```java
public java.lang.String getPatchAssessmentMode();
```

- *Type:* java.lang.String

---

##### `patchMode`<sup>Required</sup> <a name="patchMode" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.patchMode"></a>

```java
public java.lang.String getPatchMode();
```

- *Type:* java.lang.String

---

##### `platformFaultDomain`<sup>Required</sup> <a name="platformFaultDomain" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.platformFaultDomain"></a>

```java
public java.lang.Number getPlatformFaultDomain();
```

- *Type:* java.lang.Number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

---

##### `provisionVmAgent`<sup>Required</sup> <a name="provisionVmAgent" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.provisionVmAgent"></a>

```java
public java.lang.Object getProvisionVmAgent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `proximityPlacementGroupId`<sup>Required</sup> <a name="proximityPlacementGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.proximityPlacementGroupId"></a>

```java
public java.lang.String getProximityPlacementGroupId();
```

- *Type:* java.lang.String

---

##### `rebootSetting`<sup>Required</sup> <a name="rebootSetting" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.rebootSetting"></a>

```java
public java.lang.String getRebootSetting();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `secureBootEnabled`<sup>Required</sup> <a name="secureBootEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.secureBootEnabled"></a>

```java
public java.lang.Object getSecureBootEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

---

##### `sourceImageId`<sup>Required</sup> <a name="sourceImageId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.sourceImageId"></a>

```java
public java.lang.String getSourceImageId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

---

##### `virtualMachineScaleSetId`<sup>Required</sup> <a name="virtualMachineScaleSetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.virtualMachineScaleSetId"></a>

```java
public java.lang.String getVirtualMachineScaleSetId();
```

- *Type:* java.lang.String

---

##### `vmAgentPlatformUpdatesEnabled`<sup>Required</sup> <a name="vmAgentPlatformUpdatesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.vmAgentPlatformUpdatesEnabled"></a>

```java
public java.lang.Object getVmAgentPlatformUpdatesEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vtpmEnabled`<sup>Required</sup> <a name="vtpmEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.vtpmEnabled"></a>

```java
public java.lang.Object getVtpmEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WindowsVirtualMachineAdditionalCapabilities <a name="WindowsVirtualMachineAdditionalCapabilities" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineAdditionalCapabilities;

WindowsVirtualMachineAdditionalCapabilities.builder()
//  .hibernationEnabled(java.lang.Boolean)
//  .hibernationEnabled(IResolvable)
//  .ultraSsdEnabled(java.lang.Boolean)
//  .ultraSsdEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities.property.hibernationEnabled">hibernationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#hibernation_enabled WindowsVirtualMachine#hibernation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities.property.ultraSsdEnabled">ultraSsdEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#ultra_ssd_enabled WindowsVirtualMachine#ultra_ssd_enabled}. |

---

##### `hibernationEnabled`<sup>Optional</sup> <a name="hibernationEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities.property.hibernationEnabled"></a>

```java
public java.lang.Object getHibernationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#hibernation_enabled WindowsVirtualMachine#hibernation_enabled}.

---

##### `ultraSsdEnabled`<sup>Optional</sup> <a name="ultraSsdEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities.property.ultraSsdEnabled"></a>

```java
public java.lang.Object getUltraSsdEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#ultra_ssd_enabled WindowsVirtualMachine#ultra_ssd_enabled}.

---

### WindowsVirtualMachineAdditionalUnattendContent <a name="WindowsVirtualMachineAdditionalUnattendContent" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineAdditionalUnattendContent;

WindowsVirtualMachineAdditionalUnattendContent.builder()
    .content(java.lang.String)
    .setting(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#content WindowsVirtualMachine#content}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.property.setting">setting</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#setting WindowsVirtualMachine#setting}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#content WindowsVirtualMachine#content}.

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent.property.setting"></a>

```java
public java.lang.String getSetting();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#setting WindowsVirtualMachine#setting}.

---

### WindowsVirtualMachineBootDiagnostics <a name="WindowsVirtualMachineBootDiagnostics" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineBootDiagnostics;

WindowsVirtualMachineBootDiagnostics.builder()
//  .storageAccountUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics.property.storageAccountUri">storageAccountUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#storage_account_uri WindowsVirtualMachine#storage_account_uri}. |

---

##### `storageAccountUri`<sup>Optional</sup> <a name="storageAccountUri" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics.property.storageAccountUri"></a>

```java
public java.lang.String getStorageAccountUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#storage_account_uri WindowsVirtualMachine#storage_account_uri}.

---

### WindowsVirtualMachineConfig <a name="WindowsVirtualMachineConfig" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineConfig;

WindowsVirtualMachineConfig.builder()
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
    .adminPassword(java.lang.String)
    .adminUsername(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .networkInterfaceIds(java.util.List<java.lang.String>)
    .osDisk(WindowsVirtualMachineOsDisk)
    .resourceGroupName(java.lang.String)
    .size(java.lang.String)
//  .additionalCapabilities(WindowsVirtualMachineAdditionalCapabilities)
//  .additionalUnattendContent(IResolvable)
//  .additionalUnattendContent(java.util.List<WindowsVirtualMachineAdditionalUnattendContent>)
//  .allowExtensionOperations(java.lang.Boolean)
//  .allowExtensionOperations(IResolvable)
//  .availabilitySetId(java.lang.String)
//  .bootDiagnostics(WindowsVirtualMachineBootDiagnostics)
//  .bypassPlatformSafetyChecksOnUserScheduleEnabled(java.lang.Boolean)
//  .bypassPlatformSafetyChecksOnUserScheduleEnabled(IResolvable)
//  .capacityReservationGroupId(java.lang.String)
//  .computerName(java.lang.String)
//  .customData(java.lang.String)
//  .dedicatedHostGroupId(java.lang.String)
//  .dedicatedHostId(java.lang.String)
//  .diskControllerType(java.lang.String)
//  .edgeZone(java.lang.String)
//  .enableAutomaticUpdates(java.lang.Boolean)
//  .enableAutomaticUpdates(IResolvable)
//  .encryptionAtHostEnabled(java.lang.Boolean)
//  .encryptionAtHostEnabled(IResolvable)
//  .evictionPolicy(java.lang.String)
//  .extensionsTimeBudget(java.lang.String)
//  .galleryApplication(IResolvable)
//  .galleryApplication(java.util.List<WindowsVirtualMachineGalleryApplication>)
//  .hotpatchingEnabled(java.lang.Boolean)
//  .hotpatchingEnabled(IResolvable)
//  .id(java.lang.String)
//  .identity(WindowsVirtualMachineIdentity)
//  .licenseType(java.lang.String)
//  .maxBidPrice(java.lang.Number)
//  .osImageNotification(WindowsVirtualMachineOsImageNotification)
//  .patchAssessmentMode(java.lang.String)
//  .patchMode(java.lang.String)
//  .plan(WindowsVirtualMachinePlan)
//  .platformFaultDomain(java.lang.Number)
//  .priority(java.lang.String)
//  .provisionVmAgent(java.lang.Boolean)
//  .provisionVmAgent(IResolvable)
//  .proximityPlacementGroupId(java.lang.String)
//  .rebootSetting(java.lang.String)
//  .secret(IResolvable)
//  .secret(java.util.List<WindowsVirtualMachineSecret>)
//  .secureBootEnabled(java.lang.Boolean)
//  .secureBootEnabled(IResolvable)
//  .sourceImageId(java.lang.String)
//  .sourceImageReference(WindowsVirtualMachineSourceImageReference)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .terminationNotification(WindowsVirtualMachineTerminationNotification)
//  .timeouts(WindowsVirtualMachineTimeouts)
//  .timezone(java.lang.String)
//  .userData(java.lang.String)
//  .virtualMachineScaleSetId(java.lang.String)
//  .vmAgentPlatformUpdatesEnabled(java.lang.Boolean)
//  .vmAgentPlatformUpdatesEnabled(IResolvable)
//  .vtpmEnabled(java.lang.Boolean)
//  .vtpmEnabled(IResolvable)
//  .winrmListener(IResolvable)
//  .winrmListener(java.util.List<WindowsVirtualMachineWinrmListener>)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#admin_password WindowsVirtualMachine#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#admin_username WindowsVirtualMachine#admin_username}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#location WindowsVirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#network_interface_ids WindowsVirtualMachine#network_interface_ids}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.osDisk">osDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#resource_group_name WindowsVirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.size">size</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#size WindowsVirtualMachine#size}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.additionalCapabilities">additionalCapabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a></code> | additional_capabilities block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.additionalUnattendContent">additionalUnattendContent</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>></code> | additional_unattend_content block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.allowExtensionOperations">allowExtensionOperations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#allow_extension_operations WindowsVirtualMachine#allow_extension_operations}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.availabilitySetId">availabilitySetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#availability_set_id WindowsVirtualMachine#availability_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.bootDiagnostics">bootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.bypassPlatformSafetyChecksOnUserScheduleEnabled">bypassPlatformSafetyChecksOnUserScheduleEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#bypass_platform_safety_checks_on_user_schedule_enabled WindowsVirtualMachine#bypass_platform_safety_checks_on_user_schedule_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.capacityReservationGroupId">capacityReservationGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#capacity_reservation_group_id WindowsVirtualMachine#capacity_reservation_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.computerName">computerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#computer_name WindowsVirtualMachine#computer_name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.customData">customData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#custom_data WindowsVirtualMachine#custom_data}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.dedicatedHostGroupId">dedicatedHostGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#dedicated_host_group_id WindowsVirtualMachine#dedicated_host_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.dedicatedHostId">dedicatedHostId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#dedicated_host_id WindowsVirtualMachine#dedicated_host_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.diskControllerType">diskControllerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#disk_controller_type WindowsVirtualMachine#disk_controller_type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.edgeZone">edgeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#edge_zone WindowsVirtualMachine#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.enableAutomaticUpdates">enableAutomaticUpdates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#enable_automatic_updates WindowsVirtualMachine#enable_automatic_updates}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#encryption_at_host_enabled WindowsVirtualMachine#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.evictionPolicy">evictionPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#eviction_policy WindowsVirtualMachine#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.extensionsTimeBudget">extensionsTimeBudget</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#extensions_time_budget WindowsVirtualMachine#extensions_time_budget}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.galleryApplication">galleryApplication</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>></code> | gallery_application block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.hotpatchingEnabled">hotpatchingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#hotpatching_enabled WindowsVirtualMachine#hotpatching_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#id WindowsVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity">WindowsVirtualMachineIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#license_type WindowsVirtualMachine#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.maxBidPrice">maxBidPrice</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#max_bid_price WindowsVirtualMachine#max_bid_price}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.osImageNotification">osImageNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification">WindowsVirtualMachineOsImageNotification</a></code> | os_image_notification block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.patchAssessmentMode">patchAssessmentMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#patch_assessment_mode WindowsVirtualMachine#patch_assessment_mode}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.patchMode">patchMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#patch_mode WindowsVirtualMachine#patch_mode}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.platformFaultDomain">platformFaultDomain</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#platform_fault_domain WindowsVirtualMachine#platform_fault_domain}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.priority">priority</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#priority WindowsVirtualMachine#priority}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provisionVmAgent">provisionVmAgent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#provision_vm_agent WindowsVirtualMachine#provision_vm_agent}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.proximityPlacementGroupId">proximityPlacementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#proximity_placement_group_id WindowsVirtualMachine#proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.rebootSetting">rebootSetting</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#reboot_setting WindowsVirtualMachine#reboot_setting}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.secret">secret</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>></code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.secureBootEnabled">secureBootEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#secure_boot_enabled WindowsVirtualMachine#secure_boot_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.sourceImageId">sourceImageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#source_image_id WindowsVirtualMachine#source_image_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.sourceImageReference">sourceImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a></code> | source_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#tags WindowsVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.terminationNotification">terminationNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification">WindowsVirtualMachineTerminationNotification</a></code> | termination_notification block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#timezone WindowsVirtualMachine#timezone}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.userData">userData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#user_data WindowsVirtualMachine#user_data}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.virtualMachineScaleSetId">virtualMachineScaleSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#virtual_machine_scale_set_id WindowsVirtualMachine#virtual_machine_scale_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.vmAgentPlatformUpdatesEnabled">vmAgentPlatformUpdatesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#vm_agent_platform_updates_enabled WindowsVirtualMachine#vm_agent_platform_updates_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.vtpmEnabled">vtpmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#vtpm_enabled WindowsVirtualMachine#vtpm_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.winrmListener">winrmListener</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>></code> | winrm_listener block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#zone WindowsVirtualMachine#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#admin_password WindowsVirtualMachine#admin_password}.

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#admin_username WindowsVirtualMachine#admin_username}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#location WindowsVirtualMachine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}.

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.networkInterfaceIds"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfaceIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#network_interface_ids WindowsVirtualMachine#network_interface_ids}.

---

##### `osDisk`<sup>Required</sup> <a name="osDisk" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.osDisk"></a>

```java
public WindowsVirtualMachineOsDisk getOsDisk();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#os_disk WindowsVirtualMachine#os_disk}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#resource_group_name WindowsVirtualMachine#resource_group_name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#size WindowsVirtualMachine#size}.

---

##### `additionalCapabilities`<sup>Optional</sup> <a name="additionalCapabilities" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.additionalCapabilities"></a>

```java
public WindowsVirtualMachineAdditionalCapabilities getAdditionalCapabilities();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a>

additional_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#additional_capabilities WindowsVirtualMachine#additional_capabilities}

---

##### `additionalUnattendContent`<sup>Optional</sup> <a name="additionalUnattendContent" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.additionalUnattendContent"></a>

```java
public java.lang.Object getAdditionalUnattendContent();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>>

additional_unattend_content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#additional_unattend_content WindowsVirtualMachine#additional_unattend_content}

---

##### `allowExtensionOperations`<sup>Optional</sup> <a name="allowExtensionOperations" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.allowExtensionOperations"></a>

```java
public java.lang.Object getAllowExtensionOperations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#allow_extension_operations WindowsVirtualMachine#allow_extension_operations}.

---

##### `availabilitySetId`<sup>Optional</sup> <a name="availabilitySetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.availabilitySetId"></a>

```java
public java.lang.String getAvailabilitySetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#availability_set_id WindowsVirtualMachine#availability_set_id}.

---

##### `bootDiagnostics`<sup>Optional</sup> <a name="bootDiagnostics" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.bootDiagnostics"></a>

```java
public WindowsVirtualMachineBootDiagnostics getBootDiagnostics();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#boot_diagnostics WindowsVirtualMachine#boot_diagnostics}

---

##### `bypassPlatformSafetyChecksOnUserScheduleEnabled`<sup>Optional</sup> <a name="bypassPlatformSafetyChecksOnUserScheduleEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.bypassPlatformSafetyChecksOnUserScheduleEnabled"></a>

```java
public java.lang.Object getBypassPlatformSafetyChecksOnUserScheduleEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#bypass_platform_safety_checks_on_user_schedule_enabled WindowsVirtualMachine#bypass_platform_safety_checks_on_user_schedule_enabled}.

---

##### `capacityReservationGroupId`<sup>Optional</sup> <a name="capacityReservationGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.capacityReservationGroupId"></a>

```java
public java.lang.String getCapacityReservationGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#capacity_reservation_group_id WindowsVirtualMachine#capacity_reservation_group_id}.

---

##### `computerName`<sup>Optional</sup> <a name="computerName" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.computerName"></a>

```java
public java.lang.String getComputerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#computer_name WindowsVirtualMachine#computer_name}.

---

##### `customData`<sup>Optional</sup> <a name="customData" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.customData"></a>

```java
public java.lang.String getCustomData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#custom_data WindowsVirtualMachine#custom_data}.

---

##### `dedicatedHostGroupId`<sup>Optional</sup> <a name="dedicatedHostGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.dedicatedHostGroupId"></a>

```java
public java.lang.String getDedicatedHostGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#dedicated_host_group_id WindowsVirtualMachine#dedicated_host_group_id}.

---

##### `dedicatedHostId`<sup>Optional</sup> <a name="dedicatedHostId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.dedicatedHostId"></a>

```java
public java.lang.String getDedicatedHostId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#dedicated_host_id WindowsVirtualMachine#dedicated_host_id}.

---

##### `diskControllerType`<sup>Optional</sup> <a name="diskControllerType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.diskControllerType"></a>

```java
public java.lang.String getDiskControllerType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#disk_controller_type WindowsVirtualMachine#disk_controller_type}.

---

##### `edgeZone`<sup>Optional</sup> <a name="edgeZone" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.edgeZone"></a>

```java
public java.lang.String getEdgeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#edge_zone WindowsVirtualMachine#edge_zone}.

---

##### `enableAutomaticUpdates`<sup>Optional</sup> <a name="enableAutomaticUpdates" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.enableAutomaticUpdates"></a>

```java
public java.lang.Object getEnableAutomaticUpdates();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#enable_automatic_updates WindowsVirtualMachine#enable_automatic_updates}.

---

##### `encryptionAtHostEnabled`<sup>Optional</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.encryptionAtHostEnabled"></a>

```java
public java.lang.Object getEncryptionAtHostEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#encryption_at_host_enabled WindowsVirtualMachine#encryption_at_host_enabled}.

---

##### `evictionPolicy`<sup>Optional</sup> <a name="evictionPolicy" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.evictionPolicy"></a>

```java
public java.lang.String getEvictionPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#eviction_policy WindowsVirtualMachine#eviction_policy}.

---

##### `extensionsTimeBudget`<sup>Optional</sup> <a name="extensionsTimeBudget" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.extensionsTimeBudget"></a>

```java
public java.lang.String getExtensionsTimeBudget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#extensions_time_budget WindowsVirtualMachine#extensions_time_budget}.

---

##### `galleryApplication`<sup>Optional</sup> <a name="galleryApplication" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.galleryApplication"></a>

```java
public java.lang.Object getGalleryApplication();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>>

gallery_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#gallery_application WindowsVirtualMachine#gallery_application}

---

##### `hotpatchingEnabled`<sup>Optional</sup> <a name="hotpatchingEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.hotpatchingEnabled"></a>

```java
public java.lang.Object getHotpatchingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#hotpatching_enabled WindowsVirtualMachine#hotpatching_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#id WindowsVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.identity"></a>

```java
public WindowsVirtualMachineIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity">WindowsVirtualMachineIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#identity WindowsVirtualMachine#identity}

---

##### `licenseType`<sup>Optional</sup> <a name="licenseType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#license_type WindowsVirtualMachine#license_type}.

---

##### `maxBidPrice`<sup>Optional</sup> <a name="maxBidPrice" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.maxBidPrice"></a>

```java
public java.lang.Number getMaxBidPrice();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#max_bid_price WindowsVirtualMachine#max_bid_price}.

---

##### `osImageNotification`<sup>Optional</sup> <a name="osImageNotification" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.osImageNotification"></a>

```java
public WindowsVirtualMachineOsImageNotification getOsImageNotification();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification">WindowsVirtualMachineOsImageNotification</a>

os_image_notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#os_image_notification WindowsVirtualMachine#os_image_notification}

---

##### `patchAssessmentMode`<sup>Optional</sup> <a name="patchAssessmentMode" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.patchAssessmentMode"></a>

```java
public java.lang.String getPatchAssessmentMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#patch_assessment_mode WindowsVirtualMachine#patch_assessment_mode}.

---

##### `patchMode`<sup>Optional</sup> <a name="patchMode" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.patchMode"></a>

```java
public java.lang.String getPatchMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#patch_mode WindowsVirtualMachine#patch_mode}.

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.plan"></a>

```java
public WindowsVirtualMachinePlan getPlan();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#plan WindowsVirtualMachine#plan}

---

##### `platformFaultDomain`<sup>Optional</sup> <a name="platformFaultDomain" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.platformFaultDomain"></a>

```java
public java.lang.Number getPlatformFaultDomain();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#platform_fault_domain WindowsVirtualMachine#platform_fault_domain}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#priority WindowsVirtualMachine#priority}.

---

##### `provisionVmAgent`<sup>Optional</sup> <a name="provisionVmAgent" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.provisionVmAgent"></a>

```java
public java.lang.Object getProvisionVmAgent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#provision_vm_agent WindowsVirtualMachine#provision_vm_agent}.

---

##### `proximityPlacementGroupId`<sup>Optional</sup> <a name="proximityPlacementGroupId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.proximityPlacementGroupId"></a>

```java
public java.lang.String getProximityPlacementGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#proximity_placement_group_id WindowsVirtualMachine#proximity_placement_group_id}.

---

##### `rebootSetting`<sup>Optional</sup> <a name="rebootSetting" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.rebootSetting"></a>

```java
public java.lang.String getRebootSetting();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#reboot_setting WindowsVirtualMachine#reboot_setting}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.secret"></a>

```java
public java.lang.Object getSecret();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#secret WindowsVirtualMachine#secret}

---

##### `secureBootEnabled`<sup>Optional</sup> <a name="secureBootEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.secureBootEnabled"></a>

```java
public java.lang.Object getSecureBootEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#secure_boot_enabled WindowsVirtualMachine#secure_boot_enabled}.

---

##### `sourceImageId`<sup>Optional</sup> <a name="sourceImageId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.sourceImageId"></a>

```java
public java.lang.String getSourceImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#source_image_id WindowsVirtualMachine#source_image_id}.

---

##### `sourceImageReference`<sup>Optional</sup> <a name="sourceImageReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.sourceImageReference"></a>

```java
public WindowsVirtualMachineSourceImageReference getSourceImageReference();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a>

source_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#source_image_reference WindowsVirtualMachine#source_image_reference}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#tags WindowsVirtualMachine#tags}.

---

##### `terminationNotification`<sup>Optional</sup> <a name="terminationNotification" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.terminationNotification"></a>

```java
public WindowsVirtualMachineTerminationNotification getTerminationNotification();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification">WindowsVirtualMachineTerminationNotification</a>

termination_notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#termination_notification WindowsVirtualMachine#termination_notification}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.timeouts"></a>

```java
public WindowsVirtualMachineTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#timeouts WindowsVirtualMachine#timeouts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#timezone WindowsVirtualMachine#timezone}.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#user_data WindowsVirtualMachine#user_data}.

---

##### `virtualMachineScaleSetId`<sup>Optional</sup> <a name="virtualMachineScaleSetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.virtualMachineScaleSetId"></a>

```java
public java.lang.String getVirtualMachineScaleSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#virtual_machine_scale_set_id WindowsVirtualMachine#virtual_machine_scale_set_id}.

---

##### `vmAgentPlatformUpdatesEnabled`<sup>Optional</sup> <a name="vmAgentPlatformUpdatesEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.vmAgentPlatformUpdatesEnabled"></a>

```java
public java.lang.Object getVmAgentPlatformUpdatesEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#vm_agent_platform_updates_enabled WindowsVirtualMachine#vm_agent_platform_updates_enabled}.

---

##### `vtpmEnabled`<sup>Optional</sup> <a name="vtpmEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.vtpmEnabled"></a>

```java
public java.lang.Object getVtpmEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#vtpm_enabled WindowsVirtualMachine#vtpm_enabled}.

---

##### `winrmListener`<sup>Optional</sup> <a name="winrmListener" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.winrmListener"></a>

```java
public java.lang.Object getWinrmListener();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>>

winrm_listener block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#winrm_listener WindowsVirtualMachine#winrm_listener}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#zone WindowsVirtualMachine#zone}.

---

### WindowsVirtualMachineGalleryApplication <a name="WindowsVirtualMachineGalleryApplication" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineGalleryApplication;

WindowsVirtualMachineGalleryApplication.builder()
    .versionId(java.lang.String)
//  .automaticUpgradeEnabled(java.lang.Boolean)
//  .automaticUpgradeEnabled(IResolvable)
//  .configurationBlobUri(java.lang.String)
//  .order(java.lang.Number)
//  .tag(java.lang.String)
//  .treatFailureAsDeploymentFailureEnabled(java.lang.Boolean)
//  .treatFailureAsDeploymentFailureEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.versionId">versionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#version_id WindowsVirtualMachine#version_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.automaticUpgradeEnabled">automaticUpgradeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#automatic_upgrade_enabled WindowsVirtualMachine#automatic_upgrade_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.configurationBlobUri">configurationBlobUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#configuration_blob_uri WindowsVirtualMachine#configuration_blob_uri}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.order">order</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#order WindowsVirtualMachine#order}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.tag">tag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#tag WindowsVirtualMachine#tag}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.treatFailureAsDeploymentFailureEnabled">treatFailureAsDeploymentFailureEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#treat_failure_as_deployment_failure_enabled WindowsVirtualMachine#treat_failure_as_deployment_failure_enabled}. |

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#version_id WindowsVirtualMachine#version_id}.

---

##### `automaticUpgradeEnabled`<sup>Optional</sup> <a name="automaticUpgradeEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.automaticUpgradeEnabled"></a>

```java
public java.lang.Object getAutomaticUpgradeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#automatic_upgrade_enabled WindowsVirtualMachine#automatic_upgrade_enabled}.

---

##### `configurationBlobUri`<sup>Optional</sup> <a name="configurationBlobUri" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.configurationBlobUri"></a>

```java
public java.lang.String getConfigurationBlobUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#configuration_blob_uri WindowsVirtualMachine#configuration_blob_uri}.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#order WindowsVirtualMachine#order}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#tag WindowsVirtualMachine#tag}.

---

##### `treatFailureAsDeploymentFailureEnabled`<sup>Optional</sup> <a name="treatFailureAsDeploymentFailureEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication.property.treatFailureAsDeploymentFailureEnabled"></a>

```java
public java.lang.Object getTreatFailureAsDeploymentFailureEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#treat_failure_as_deployment_failure_enabled WindowsVirtualMachine#treat_failure_as_deployment_failure_enabled}.

---

### WindowsVirtualMachineIdentity <a name="WindowsVirtualMachineIdentity" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineIdentity;

WindowsVirtualMachineIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#type WindowsVirtualMachine#type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#identity_ids WindowsVirtualMachine#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#type WindowsVirtualMachine#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#identity_ids WindowsVirtualMachine#identity_ids}.

---

### WindowsVirtualMachineOsDisk <a name="WindowsVirtualMachineOsDisk" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineOsDisk;

WindowsVirtualMachineOsDisk.builder()
    .caching(java.lang.String)
    .storageAccountType(java.lang.String)
//  .diffDiskSettings(WindowsVirtualMachineOsDiskDiffDiskSettings)
//  .diskEncryptionSetId(java.lang.String)
//  .diskSizeGb(java.lang.Number)
//  .name(java.lang.String)
//  .secureVmDiskEncryptionSetId(java.lang.String)
//  .securityEncryptionType(java.lang.String)
//  .writeAcceleratorEnabled(java.lang.Boolean)
//  .writeAcceleratorEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.caching">caching</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#caching WindowsVirtualMachine#caching}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#storage_account_type WindowsVirtualMachine#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diffDiskSettings">diffDiskSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a></code> | diff_disk_settings block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#disk_encryption_set_id WindowsVirtualMachine#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#disk_size_gb WindowsVirtualMachine#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.secureVmDiskEncryptionSetId">secureVmDiskEncryptionSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#secure_vm_disk_encryption_set_id WindowsVirtualMachine#secure_vm_disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.securityEncryptionType">securityEncryptionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#security_encryption_type WindowsVirtualMachine#security_encryption_type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.writeAcceleratorEnabled">writeAcceleratorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#write_accelerator_enabled WindowsVirtualMachine#write_accelerator_enabled}. |

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.caching"></a>

```java
public java.lang.String getCaching();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#caching WindowsVirtualMachine#caching}.

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.storageAccountType"></a>

```java
public java.lang.String getStorageAccountType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#storage_account_type WindowsVirtualMachine#storage_account_type}.

---

##### `diffDiskSettings`<sup>Optional</sup> <a name="diffDiskSettings" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diffDiskSettings"></a>

```java
public WindowsVirtualMachineOsDiskDiffDiskSettings getDiffDiskSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a>

diff_disk_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#diff_disk_settings WindowsVirtualMachine#diff_disk_settings}

---

##### `diskEncryptionSetId`<sup>Optional</sup> <a name="diskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diskEncryptionSetId"></a>

```java
public java.lang.String getDiskEncryptionSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#disk_encryption_set_id WindowsVirtualMachine#disk_encryption_set_id}.

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#disk_size_gb WindowsVirtualMachine#disk_size_gb}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}.

---

##### `secureVmDiskEncryptionSetId`<sup>Optional</sup> <a name="secureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.secureVmDiskEncryptionSetId"></a>

```java
public java.lang.String getSecureVmDiskEncryptionSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#secure_vm_disk_encryption_set_id WindowsVirtualMachine#secure_vm_disk_encryption_set_id}.

---

##### `securityEncryptionType`<sup>Optional</sup> <a name="securityEncryptionType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.securityEncryptionType"></a>

```java
public java.lang.String getSecurityEncryptionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#security_encryption_type WindowsVirtualMachine#security_encryption_type}.

---

##### `writeAcceleratorEnabled`<sup>Optional</sup> <a name="writeAcceleratorEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk.property.writeAcceleratorEnabled"></a>

```java
public java.lang.Object getWriteAcceleratorEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#write_accelerator_enabled WindowsVirtualMachine#write_accelerator_enabled}.

---

### WindowsVirtualMachineOsDiskDiffDiskSettings <a name="WindowsVirtualMachineOsDiskDiffDiskSettings" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineOsDiskDiffDiskSettings;

WindowsVirtualMachineOsDiskDiffDiskSettings.builder()
    .option(java.lang.String)
//  .placement(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings.property.option">option</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#option WindowsVirtualMachine#option}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings.property.placement">placement</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#placement WindowsVirtualMachine#placement}. |

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings.property.option"></a>

```java
public java.lang.String getOption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#option WindowsVirtualMachine#option}.

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings.property.placement"></a>

```java
public java.lang.String getPlacement();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#placement WindowsVirtualMachine#placement}.

---

### WindowsVirtualMachineOsImageNotification <a name="WindowsVirtualMachineOsImageNotification" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineOsImageNotification;

WindowsVirtualMachineOsImageNotification.builder()
//  .timeout(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification.property.timeout">timeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#timeout WindowsVirtualMachine#timeout}. |

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#timeout WindowsVirtualMachine#timeout}.

---

### WindowsVirtualMachinePlan <a name="WindowsVirtualMachinePlan" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachinePlan;

WindowsVirtualMachinePlan.builder()
    .name(java.lang.String)
    .product(java.lang.String)
    .publisher(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan.property.product">product</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#product WindowsVirtualMachine#product}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan.property.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#publisher WindowsVirtualMachine#publisher}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#name WindowsVirtualMachine#name}.

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#product WindowsVirtualMachine#product}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#publisher WindowsVirtualMachine#publisher}.

---

### WindowsVirtualMachineSecret <a name="WindowsVirtualMachineSecret" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineSecret;

WindowsVirtualMachineSecret.builder()
    .certificate(IResolvable)
    .certificate(java.util.List<WindowsVirtualMachineSecretCertificate>)
    .keyVaultId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret.property.certificate">certificate</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>></code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#key_vault_id WindowsVirtualMachine#key_vault_id}. |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret.property.certificate"></a>

```java
public java.lang.Object getCertificate();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>>

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#certificate WindowsVirtualMachine#certificate}

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#key_vault_id WindowsVirtualMachine#key_vault_id}.

---

### WindowsVirtualMachineSecretCertificate <a name="WindowsVirtualMachineSecretCertificate" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineSecretCertificate;

WindowsVirtualMachineSecretCertificate.builder()
    .store(java.lang.String)
    .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate.property.store">store</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#store WindowsVirtualMachine#store}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#url WindowsVirtualMachine#url}. |

---

##### `store`<sup>Required</sup> <a name="store" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate.property.store"></a>

```java
public java.lang.String getStore();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#store WindowsVirtualMachine#store}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#url WindowsVirtualMachine#url}.

---

### WindowsVirtualMachineSourceImageReference <a name="WindowsVirtualMachineSourceImageReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineSourceImageReference;

WindowsVirtualMachineSourceImageReference.builder()
    .offer(java.lang.String)
    .publisher(java.lang.String)
    .sku(java.lang.String)
    .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.offer">offer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#offer WindowsVirtualMachine#offer}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#publisher WindowsVirtualMachine#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#sku WindowsVirtualMachine#sku}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#version WindowsVirtualMachine#version}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#offer WindowsVirtualMachine#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#publisher WindowsVirtualMachine#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#sku WindowsVirtualMachine#sku}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#version WindowsVirtualMachine#version}.

---

### WindowsVirtualMachineTerminationNotification <a name="WindowsVirtualMachineTerminationNotification" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineTerminationNotification;

WindowsVirtualMachineTerminationNotification.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .timeout(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#enabled WindowsVirtualMachine#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification.property.timeout">timeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#timeout WindowsVirtualMachine#timeout}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#enabled WindowsVirtualMachine#enabled}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#timeout WindowsVirtualMachine#timeout}.

---

### WindowsVirtualMachineTimeouts <a name="WindowsVirtualMachineTimeouts" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineTimeouts;

WindowsVirtualMachineTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#create WindowsVirtualMachine#create}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#delete WindowsVirtualMachine#delete}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#read WindowsVirtualMachine#read}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#update WindowsVirtualMachine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#create WindowsVirtualMachine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#delete WindowsVirtualMachine#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#read WindowsVirtualMachine#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#update WindowsVirtualMachine#update}.

---

### WindowsVirtualMachineWinrmListener <a name="WindowsVirtualMachineWinrmListener" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineWinrmListener;

WindowsVirtualMachineWinrmListener.builder()
    .protocol(java.lang.String)
//  .certificateUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#protocol WindowsVirtualMachine#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener.property.certificateUrl">certificateUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#certificate_url WindowsVirtualMachine#certificate_url}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#protocol WindowsVirtualMachine#protocol}.

---

##### `certificateUrl`<sup>Optional</sup> <a name="certificateUrl" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener.property.certificateUrl"></a>

```java
public java.lang.String getCertificateUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/windows_virtual_machine#certificate_url WindowsVirtualMachine#certificate_url}.

---

## Classes <a name="Classes" id="Classes"></a>

### WindowsVirtualMachineAdditionalCapabilitiesOutputReference <a name="WindowsVirtualMachineAdditionalCapabilitiesOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference;

new WindowsVirtualMachineAdditionalCapabilitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resetHibernationEnabled">resetHibernationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled">resetUltraSsdEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHibernationEnabled` <a name="resetHibernationEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resetHibernationEnabled"></a>

```java
public void resetHibernationEnabled()
```

##### `resetUltraSsdEnabled` <a name="resetUltraSsdEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled"></a>

```java
public void resetUltraSsdEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.hibernationEnabledInput">hibernationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput">ultraSsdEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.hibernationEnabled">hibernationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled">ultraSsdEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hibernationEnabledInput`<sup>Optional</sup> <a name="hibernationEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.hibernationEnabledInput"></a>

```java
public java.lang.Object getHibernationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ultraSsdEnabledInput`<sup>Optional</sup> <a name="ultraSsdEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput"></a>

```java
public java.lang.Object getUltraSsdEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hibernationEnabled`<sup>Required</sup> <a name="hibernationEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.hibernationEnabled"></a>

```java
public java.lang.Object getHibernationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ultraSsdEnabled`<sup>Required</sup> <a name="ultraSsdEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled"></a>

```java
public java.lang.Object getUltraSsdEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilitiesOutputReference.property.internalValue"></a>

```java
public WindowsVirtualMachineAdditionalCapabilities getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalCapabilities">WindowsVirtualMachineAdditionalCapabilities</a>

---


### WindowsVirtualMachineAdditionalUnattendContentList <a name="WindowsVirtualMachineAdditionalUnattendContentList" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineAdditionalUnattendContentList;

new WindowsVirtualMachineAdditionalUnattendContentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.get"></a>

```java
public WindowsVirtualMachineAdditionalUnattendContentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>>

---


### WindowsVirtualMachineAdditionalUnattendContentOutputReference <a name="WindowsVirtualMachineAdditionalUnattendContentOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineAdditionalUnattendContentOutputReference;

new WindowsVirtualMachineAdditionalUnattendContentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.settingInput">settingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.setting">setting</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `settingInput`<sup>Optional</sup> <a name="settingInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.settingInput"></a>

```java
public java.lang.String getSettingInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.setting"></a>

```java
public java.lang.String getSetting();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContentOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineAdditionalUnattendContent">WindowsVirtualMachineAdditionalUnattendContent</a>

---


### WindowsVirtualMachineBootDiagnosticsOutputReference <a name="WindowsVirtualMachineBootDiagnosticsOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineBootDiagnosticsOutputReference;

new WindowsVirtualMachineBootDiagnosticsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.resetStorageAccountUri">resetStorageAccountUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageAccountUri` <a name="resetStorageAccountUri" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.resetStorageAccountUri"></a>

```java
public void resetStorageAccountUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUriInput">storageAccountUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUri">storageAccountUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storageAccountUriInput`<sup>Optional</sup> <a name="storageAccountUriInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUriInput"></a>

```java
public java.lang.String getStorageAccountUriInput();
```

- *Type:* java.lang.String

---

##### `storageAccountUri`<sup>Required</sup> <a name="storageAccountUri" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUri"></a>

```java
public java.lang.String getStorageAccountUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnosticsOutputReference.property.internalValue"></a>

```java
public WindowsVirtualMachineBootDiagnostics getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineBootDiagnostics">WindowsVirtualMachineBootDiagnostics</a>

---


### WindowsVirtualMachineGalleryApplicationList <a name="WindowsVirtualMachineGalleryApplicationList" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineGalleryApplicationList;

new WindowsVirtualMachineGalleryApplicationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.get"></a>

```java
public WindowsVirtualMachineGalleryApplicationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>>

---


### WindowsVirtualMachineGalleryApplicationOutputReference <a name="WindowsVirtualMachineGalleryApplicationOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineGalleryApplicationOutputReference;

new WindowsVirtualMachineGalleryApplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetAutomaticUpgradeEnabled">resetAutomaticUpgradeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetConfigurationBlobUri">resetConfigurationBlobUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetTreatFailureAsDeploymentFailureEnabled">resetTreatFailureAsDeploymentFailureEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutomaticUpgradeEnabled` <a name="resetAutomaticUpgradeEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetAutomaticUpgradeEnabled"></a>

```java
public void resetAutomaticUpgradeEnabled()
```

##### `resetConfigurationBlobUri` <a name="resetConfigurationBlobUri" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetConfigurationBlobUri"></a>

```java
public void resetConfigurationBlobUri()
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetTag"></a>

```java
public void resetTag()
```

##### `resetTreatFailureAsDeploymentFailureEnabled` <a name="resetTreatFailureAsDeploymentFailureEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.resetTreatFailureAsDeploymentFailureEnabled"></a>

```java
public void resetTreatFailureAsDeploymentFailureEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.automaticUpgradeEnabledInput">automaticUpgradeEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.configurationBlobUriInput">configurationBlobUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.tagInput">tagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.treatFailureAsDeploymentFailureEnabledInput">treatFailureAsDeploymentFailureEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.versionIdInput">versionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.automaticUpgradeEnabled">automaticUpgradeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.configurationBlobUri">configurationBlobUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.order">order</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.treatFailureAsDeploymentFailureEnabled">treatFailureAsDeploymentFailureEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `automaticUpgradeEnabledInput`<sup>Optional</sup> <a name="automaticUpgradeEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.automaticUpgradeEnabledInput"></a>

```java
public java.lang.Object getAutomaticUpgradeEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `configurationBlobUriInput`<sup>Optional</sup> <a name="configurationBlobUriInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.configurationBlobUriInput"></a>

```java
public java.lang.String getConfigurationBlobUriInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.orderInput"></a>

```java
public java.lang.Number getOrderInput();
```

- *Type:* java.lang.Number

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.tagInput"></a>

```java
public java.lang.String getTagInput();
```

- *Type:* java.lang.String

---

##### `treatFailureAsDeploymentFailureEnabledInput`<sup>Optional</sup> <a name="treatFailureAsDeploymentFailureEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.treatFailureAsDeploymentFailureEnabledInput"></a>

```java
public java.lang.Object getTreatFailureAsDeploymentFailureEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.versionIdInput"></a>

```java
public java.lang.String getVersionIdInput();
```

- *Type:* java.lang.String

---

##### `automaticUpgradeEnabled`<sup>Required</sup> <a name="automaticUpgradeEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.automaticUpgradeEnabled"></a>

```java
public java.lang.Object getAutomaticUpgradeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `configurationBlobUri`<sup>Required</sup> <a name="configurationBlobUri" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.configurationBlobUri"></a>

```java
public java.lang.String getConfigurationBlobUri();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `treatFailureAsDeploymentFailureEnabled`<sup>Required</sup> <a name="treatFailureAsDeploymentFailureEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.treatFailureAsDeploymentFailureEnabled"></a>

```java
public java.lang.Object getTreatFailureAsDeploymentFailureEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplicationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineGalleryApplication">WindowsVirtualMachineGalleryApplication</a>

---


### WindowsVirtualMachineIdentityOutputReference <a name="WindowsVirtualMachineIdentityOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineIdentityOutputReference;

new WindowsVirtualMachineIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity">WindowsVirtualMachineIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentityOutputReference.property.internalValue"></a>

```java
public WindowsVirtualMachineIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineIdentity">WindowsVirtualMachineIdentity</a>

---


### WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference <a name="WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference;

new WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.resetPlacement">resetPlacement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPlacement` <a name="resetPlacement" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.resetPlacement"></a>

```java
public void resetPlacement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.optionInput">optionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.placementInput">placementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.option">option</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.placement">placement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `optionInput`<sup>Optional</sup> <a name="optionInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.optionInput"></a>

```java
public java.lang.String getOptionInput();
```

- *Type:* java.lang.String

---

##### `placementInput`<sup>Optional</sup> <a name="placementInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.placementInput"></a>

```java
public java.lang.String getPlacementInput();
```

- *Type:* java.lang.String

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.option"></a>

```java
public java.lang.String getOption();
```

- *Type:* java.lang.String

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.placement"></a>

```java
public java.lang.String getPlacement();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.internalValue"></a>

```java
public WindowsVirtualMachineOsDiskDiffDiskSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a>

---


### WindowsVirtualMachineOsDiskOutputReference <a name="WindowsVirtualMachineOsDiskOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineOsDiskOutputReference;

new WindowsVirtualMachineOsDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.putDiffDiskSettings">putDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiffDiskSettings">resetDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiskEncryptionSetId">resetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetSecureVmDiskEncryptionSetId">resetSecureVmDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetSecurityEncryptionType">resetSecurityEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetWriteAcceleratorEnabled">resetWriteAcceleratorEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDiffDiskSettings` <a name="putDiffDiskSettings" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.putDiffDiskSettings"></a>

```java
public void putDiffDiskSettings(WindowsVirtualMachineOsDiskDiffDiskSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.putDiffDiskSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a>

---

##### `resetDiffDiskSettings` <a name="resetDiffDiskSettings" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiffDiskSettings"></a>

```java
public void resetDiffDiskSettings()
```

##### `resetDiskEncryptionSetId` <a name="resetDiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiskEncryptionSetId"></a>

```java
public void resetDiskEncryptionSetId()
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetSecureVmDiskEncryptionSetId` <a name="resetSecureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetSecureVmDiskEncryptionSetId"></a>

```java
public void resetSecureVmDiskEncryptionSetId()
```

##### `resetSecurityEncryptionType` <a name="resetSecurityEncryptionType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetSecurityEncryptionType"></a>

```java
public void resetSecurityEncryptionType()
```

##### `resetWriteAcceleratorEnabled` <a name="resetWriteAcceleratorEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.resetWriteAcceleratorEnabled"></a>

```java
public void resetWriteAcceleratorEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diffDiskSettings">diffDiskSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference">WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.cachingInput">cachingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diffDiskSettingsInput">diffDiskSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskEncryptionSetIdInput">diskEncryptionSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.secureVmDiskEncryptionSetIdInput">secureVmDiskEncryptionSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.securityEncryptionTypeInput">securityEncryptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.storageAccountTypeInput">storageAccountTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabledInput">writeAcceleratorEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.caching">caching</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.secureVmDiskEncryptionSetId">secureVmDiskEncryptionSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.securityEncryptionType">securityEncryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabled">writeAcceleratorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diffDiskSettings`<sup>Required</sup> <a name="diffDiskSettings" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diffDiskSettings"></a>

```java
public WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference getDiffDiskSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference">WindowsVirtualMachineOsDiskDiffDiskSettingsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `cachingInput`<sup>Optional</sup> <a name="cachingInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.cachingInput"></a>

```java
public java.lang.String getCachingInput();
```

- *Type:* java.lang.String

---

##### `diffDiskSettingsInput`<sup>Optional</sup> <a name="diffDiskSettingsInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diffDiskSettingsInput"></a>

```java
public WindowsVirtualMachineOsDiskDiffDiskSettings getDiffDiskSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskDiffDiskSettings">WindowsVirtualMachineOsDiskDiffDiskSettings</a>

---

##### `diskEncryptionSetIdInput`<sup>Optional</sup> <a name="diskEncryptionSetIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskEncryptionSetIdInput"></a>

```java
public java.lang.String getDiskEncryptionSetIdInput();
```

- *Type:* java.lang.String

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskSizeGbInput"></a>

```java
public java.lang.Number getDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `secureVmDiskEncryptionSetIdInput`<sup>Optional</sup> <a name="secureVmDiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.secureVmDiskEncryptionSetIdInput"></a>

```java
public java.lang.String getSecureVmDiskEncryptionSetIdInput();
```

- *Type:* java.lang.String

---

##### `securityEncryptionTypeInput`<sup>Optional</sup> <a name="securityEncryptionTypeInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.securityEncryptionTypeInput"></a>

```java
public java.lang.String getSecurityEncryptionTypeInput();
```

- *Type:* java.lang.String

---

##### `storageAccountTypeInput`<sup>Optional</sup> <a name="storageAccountTypeInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.storageAccountTypeInput"></a>

```java
public java.lang.String getStorageAccountTypeInput();
```

- *Type:* java.lang.String

---

##### `writeAcceleratorEnabledInput`<sup>Optional</sup> <a name="writeAcceleratorEnabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabledInput"></a>

```java
public java.lang.Object getWriteAcceleratorEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.caching"></a>

```java
public java.lang.String getCaching();
```

- *Type:* java.lang.String

---

##### `diskEncryptionSetId`<sup>Required</sup> <a name="diskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskEncryptionSetId"></a>

```java
public java.lang.String getDiskEncryptionSetId();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `secureVmDiskEncryptionSetId`<sup>Required</sup> <a name="secureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.secureVmDiskEncryptionSetId"></a>

```java
public java.lang.String getSecureVmDiskEncryptionSetId();
```

- *Type:* java.lang.String

---

##### `securityEncryptionType`<sup>Required</sup> <a name="securityEncryptionType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.securityEncryptionType"></a>

```java
public java.lang.String getSecurityEncryptionType();
```

- *Type:* java.lang.String

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.storageAccountType"></a>

```java
public java.lang.String getStorageAccountType();
```

- *Type:* java.lang.String

---

##### `writeAcceleratorEnabled`<sup>Required</sup> <a name="writeAcceleratorEnabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabled"></a>

```java
public java.lang.Object getWriteAcceleratorEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDiskOutputReference.property.internalValue"></a>

```java
public WindowsVirtualMachineOsDisk getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsDisk">WindowsVirtualMachineOsDisk</a>

---


### WindowsVirtualMachineOsImageNotificationOutputReference <a name="WindowsVirtualMachineOsImageNotificationOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineOsImageNotificationOutputReference;

new WindowsVirtualMachineOsImageNotificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.timeout">timeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification">WindowsVirtualMachineOsImageNotification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.timeoutInput"></a>

```java
public java.lang.String getTimeoutInput();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotificationOutputReference.property.internalValue"></a>

```java
public WindowsVirtualMachineOsImageNotification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineOsImageNotification">WindowsVirtualMachineOsImageNotification</a>

---


### WindowsVirtualMachinePlanOutputReference <a name="WindowsVirtualMachinePlanOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachinePlanOutputReference;

new WindowsVirtualMachinePlanOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.productInput">productInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.publisherInput">publisherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.product">product</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.productInput"></a>

```java
public java.lang.String getProductInput();
```

- *Type:* java.lang.String

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.publisherInput"></a>

```java
public java.lang.String getPublisherInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlanOutputReference.property.internalValue"></a>

```java
public WindowsVirtualMachinePlan getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachinePlan">WindowsVirtualMachinePlan</a>

---


### WindowsVirtualMachineSecretCertificateList <a name="WindowsVirtualMachineSecretCertificateList" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineSecretCertificateList;

new WindowsVirtualMachineSecretCertificateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.get"></a>

```java
public WindowsVirtualMachineSecretCertificateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>>

---


### WindowsVirtualMachineSecretCertificateOutputReference <a name="WindowsVirtualMachineSecretCertificateOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineSecretCertificateOutputReference;

new WindowsVirtualMachineSecretCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.storeInput">storeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.store">store</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storeInput`<sup>Optional</sup> <a name="storeInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.storeInput"></a>

```java
public java.lang.String getStoreInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `store`<sup>Required</sup> <a name="store" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.store"></a>

```java
public java.lang.String getStore();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>

---


### WindowsVirtualMachineSecretList <a name="WindowsVirtualMachineSecretList" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineSecretList;

new WindowsVirtualMachineSecretList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.get"></a>

```java
public WindowsVirtualMachineSecretOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>>

---


### WindowsVirtualMachineSecretOutputReference <a name="WindowsVirtualMachineSecretOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineSecretOutputReference;

new WindowsVirtualMachineSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.putCertificate">putCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificate` <a name="putCertificate" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.putCertificate"></a>

```java
public void putCertificate(IResolvable OR java.util.List<WindowsVirtualMachineSecretCertificate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.putCertificate.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList">WindowsVirtualMachineSecretCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.certificateInput">certificateInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.certificate"></a>

```java
public WindowsVirtualMachineSecretCertificateList getCertificate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificateList">WindowsVirtualMachineSecretCertificateList</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.certificateInput"></a>

```java
public java.lang.Object getCertificateInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretCertificate">WindowsVirtualMachineSecretCertificate</a>>

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.keyVaultIdInput"></a>

```java
public java.lang.String getKeyVaultIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecretOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSecret">WindowsVirtualMachineSecret</a>

---


### WindowsVirtualMachineSourceImageReferenceOutputReference <a name="WindowsVirtualMachineSourceImageReferenceOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineSourceImageReferenceOutputReference;

new WindowsVirtualMachineSourceImageReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.offerInput">offerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.publisherInput">publisherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.offer">offer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `offerInput`<sup>Optional</sup> <a name="offerInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.offerInput"></a>

```java
public java.lang.String getOfferInput();
```

- *Type:* java.lang.String

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.publisherInput"></a>

```java
public java.lang.String getPublisherInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReferenceOutputReference.property.internalValue"></a>

```java
public WindowsVirtualMachineSourceImageReference getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineSourceImageReference">WindowsVirtualMachineSourceImageReference</a>

---


### WindowsVirtualMachineTerminationNotificationOutputReference <a name="WindowsVirtualMachineTerminationNotificationOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineTerminationNotificationOutputReference;

new WindowsVirtualMachineTerminationNotificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.timeout">timeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification">WindowsVirtualMachineTerminationNotification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.timeoutInput"></a>

```java
public java.lang.String getTimeoutInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotificationOutputReference.property.internalValue"></a>

```java
public WindowsVirtualMachineTerminationNotification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTerminationNotification">WindowsVirtualMachineTerminationNotification</a>

---


### WindowsVirtualMachineTimeoutsOutputReference <a name="WindowsVirtualMachineTimeoutsOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineTimeoutsOutputReference;

new WindowsVirtualMachineTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineTimeouts">WindowsVirtualMachineTimeouts</a>

---


### WindowsVirtualMachineWinrmListenerList <a name="WindowsVirtualMachineWinrmListenerList" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineWinrmListenerList;

new WindowsVirtualMachineWinrmListenerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.get"></a>

```java
public WindowsVirtualMachineWinrmListenerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>>

---


### WindowsVirtualMachineWinrmListenerOutputReference <a name="WindowsVirtualMachineWinrmListenerOutputReference" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.windows_virtual_machine.WindowsVirtualMachineWinrmListenerOutputReference;

new WindowsVirtualMachineWinrmListenerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.resetCertificateUrl">resetCertificateUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateUrl` <a name="resetCertificateUrl" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.resetCertificateUrl"></a>

```java
public void resetCertificateUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.certificateUrlInput">certificateUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.certificateUrl">certificateUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateUrlInput`<sup>Optional</sup> <a name="certificateUrlInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.certificateUrlInput"></a>

```java
public java.lang.String getCertificateUrlInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `certificateUrl`<sup>Required</sup> <a name="certificateUrl" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.certificateUrl"></a>

```java
public java.lang.String getCertificateUrl();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListenerOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.windowsVirtualMachine.WindowsVirtualMachineWinrmListener">WindowsVirtualMachineWinrmListener</a>

---



