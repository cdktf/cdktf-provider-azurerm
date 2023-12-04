# `linuxVirtualMachine` Submodule <a name="`linuxVirtualMachine` Submodule" id="@cdktf/provider-azurerm.linuxVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LinuxVirtualMachine <a name="LinuxVirtualMachine" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine azurerm_linux_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachine;

LinuxVirtualMachine.Builder.create(Construct scope, java.lang.String id)
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
    .adminUsername(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .networkInterfaceIds(java.util.List<java.lang.String>)
    .osDisk(LinuxVirtualMachineOsDisk)
    .resourceGroupName(java.lang.String)
    .size(java.lang.String)
//  .additionalCapabilities(LinuxVirtualMachineAdditionalCapabilities)
//  .adminPassword(java.lang.String)
//  .adminSshKey(IResolvable)
//  .adminSshKey(java.util.List<LinuxVirtualMachineAdminSshKey>)
//  .allowExtensionOperations(java.lang.Boolean)
//  .allowExtensionOperations(IResolvable)
//  .availabilitySetId(java.lang.String)
//  .bootDiagnostics(LinuxVirtualMachineBootDiagnostics)
//  .bypassPlatformSafetyChecksOnUserScheduleEnabled(java.lang.Boolean)
//  .bypassPlatformSafetyChecksOnUserScheduleEnabled(IResolvable)
//  .capacityReservationGroupId(java.lang.String)
//  .computerName(java.lang.String)
//  .customData(java.lang.String)
//  .dedicatedHostGroupId(java.lang.String)
//  .dedicatedHostId(java.lang.String)
//  .disablePasswordAuthentication(java.lang.Boolean)
//  .disablePasswordAuthentication(IResolvable)
//  .edgeZone(java.lang.String)
//  .encryptionAtHostEnabled(java.lang.Boolean)
//  .encryptionAtHostEnabled(IResolvable)
//  .evictionPolicy(java.lang.String)
//  .extensionsTimeBudget(java.lang.String)
//  .galleryApplication(IResolvable)
//  .galleryApplication(java.util.List<LinuxVirtualMachineGalleryApplication>)
//  .id(java.lang.String)
//  .identity(LinuxVirtualMachineIdentity)
//  .licenseType(java.lang.String)
//  .maxBidPrice(java.lang.Number)
//  .patchAssessmentMode(java.lang.String)
//  .patchMode(java.lang.String)
//  .plan(LinuxVirtualMachinePlan)
//  .platformFaultDomain(java.lang.Number)
//  .priority(java.lang.String)
//  .provisionVmAgent(java.lang.Boolean)
//  .provisionVmAgent(IResolvable)
//  .proximityPlacementGroupId(java.lang.String)
//  .rebootSetting(java.lang.String)
//  .secret(IResolvable)
//  .secret(java.util.List<LinuxVirtualMachineSecret>)
//  .secureBootEnabled(java.lang.Boolean)
//  .secureBootEnabled(IResolvable)
//  .sourceImageId(java.lang.String)
//  .sourceImageReference(LinuxVirtualMachineSourceImageReference)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .terminationNotification(LinuxVirtualMachineTerminationNotification)
//  .timeouts(LinuxVirtualMachineTimeouts)
//  .userData(java.lang.String)
//  .virtualMachineScaleSetId(java.lang.String)
//  .vtpmEnabled(java.lang.Boolean)
//  .vtpmEnabled(IResolvable)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#admin_username LinuxVirtualMachine#admin_username}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#location LinuxVirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#name LinuxVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.networkInterfaceIds">networkInterfaceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#network_interface_ids LinuxVirtualMachine#network_interface_ids}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.osDisk">osDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#resource_group_name LinuxVirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.size">size</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#size LinuxVirtualMachine#size}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.additionalCapabilities">additionalCapabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a></code> | additional_capabilities block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#admin_password LinuxVirtualMachine#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.adminSshKey">adminSshKey</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey">LinuxVirtualMachineAdminSshKey</a>></code> | admin_ssh_key block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.allowExtensionOperations">allowExtensionOperations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#allow_extension_operations LinuxVirtualMachine#allow_extension_operations}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.availabilitySetId">availabilitySetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#availability_set_id LinuxVirtualMachine#availability_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.bootDiagnostics">bootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.bypassPlatformSafetyChecksOnUserScheduleEnabled">bypassPlatformSafetyChecksOnUserScheduleEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#bypass_platform_safety_checks_on_user_schedule_enabled LinuxVirtualMachine#bypass_platform_safety_checks_on_user_schedule_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.capacityReservationGroupId">capacityReservationGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#capacity_reservation_group_id LinuxVirtualMachine#capacity_reservation_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.computerName">computerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#computer_name LinuxVirtualMachine#computer_name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.customData">customData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#custom_data LinuxVirtualMachine#custom_data}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.dedicatedHostGroupId">dedicatedHostGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#dedicated_host_group_id LinuxVirtualMachine#dedicated_host_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.dedicatedHostId">dedicatedHostId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#dedicated_host_id LinuxVirtualMachine#dedicated_host_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.disablePasswordAuthentication">disablePasswordAuthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#disable_password_authentication LinuxVirtualMachine#disable_password_authentication}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.edgeZone">edgeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#edge_zone LinuxVirtualMachine#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#encryption_at_host_enabled LinuxVirtualMachine#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.evictionPolicy">evictionPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#eviction_policy LinuxVirtualMachine#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.extensionsTimeBudget">extensionsTimeBudget</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#extensions_time_budget LinuxVirtualMachine#extensions_time_budget}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.galleryApplication">galleryApplication</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication">LinuxVirtualMachineGalleryApplication</a>></code> | gallery_application block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#id LinuxVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity">LinuxVirtualMachineIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.licenseType">licenseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#license_type LinuxVirtualMachine#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.maxBidPrice">maxBidPrice</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#max_bid_price LinuxVirtualMachine#max_bid_price}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.patchAssessmentMode">patchAssessmentMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#patch_assessment_mode LinuxVirtualMachine#patch_assessment_mode}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.patchMode">patchMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#patch_mode LinuxVirtualMachine#patch_mode}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.platformFaultDomain">platformFaultDomain</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#platform_fault_domain LinuxVirtualMachine#platform_fault_domain}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.priority">priority</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#priority LinuxVirtualMachine#priority}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.provisionVmAgent">provisionVmAgent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#provision_vm_agent LinuxVirtualMachine#provision_vm_agent}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.proximityPlacementGroupId">proximityPlacementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#proximity_placement_group_id LinuxVirtualMachine#proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.rebootSetting">rebootSetting</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#reboot_setting LinuxVirtualMachine#reboot_setting}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.secret">secret</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecret">LinuxVirtualMachineSecret</a>></code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.secureBootEnabled">secureBootEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#secure_boot_enabled LinuxVirtualMachine#secure_boot_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.sourceImageId">sourceImageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#source_image_id LinuxVirtualMachine#source_image_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.sourceImageReference">sourceImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a></code> | source_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#tags LinuxVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.terminationNotification">terminationNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification">LinuxVirtualMachineTerminationNotification</a></code> | termination_notification block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts">LinuxVirtualMachineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.userData">userData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#user_data LinuxVirtualMachine#user_data}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.virtualMachineScaleSetId">virtualMachineScaleSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#virtual_machine_scale_set_id LinuxVirtualMachine#virtual_machine_scale_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.vtpmEnabled">vtpmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#vtpm_enabled LinuxVirtualMachine#vtpm_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#zone LinuxVirtualMachine#zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.adminUsername"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#admin_username LinuxVirtualMachine#admin_username}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#location LinuxVirtualMachine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#name LinuxVirtualMachine#name}.

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.networkInterfaceIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#network_interface_ids LinuxVirtualMachine#network_interface_ids}.

---

##### `osDisk`<sup>Required</sup> <a name="osDisk" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.osDisk"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#os_disk LinuxVirtualMachine#os_disk}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#resource_group_name LinuxVirtualMachine#resource_group_name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.size"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#size LinuxVirtualMachine#size}.

---

##### `additionalCapabilities`<sup>Optional</sup> <a name="additionalCapabilities" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.additionalCapabilities"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a>

additional_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#additional_capabilities LinuxVirtualMachine#additional_capabilities}

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.adminPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#admin_password LinuxVirtualMachine#admin_password}.

---

##### `adminSshKey`<sup>Optional</sup> <a name="adminSshKey" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.adminSshKey"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey">LinuxVirtualMachineAdminSshKey</a>>

admin_ssh_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#admin_ssh_key LinuxVirtualMachine#admin_ssh_key}

---

##### `allowExtensionOperations`<sup>Optional</sup> <a name="allowExtensionOperations" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.allowExtensionOperations"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#allow_extension_operations LinuxVirtualMachine#allow_extension_operations}.

---

##### `availabilitySetId`<sup>Optional</sup> <a name="availabilitySetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.availabilitySetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#availability_set_id LinuxVirtualMachine#availability_set_id}.

---

##### `bootDiagnostics`<sup>Optional</sup> <a name="bootDiagnostics" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.bootDiagnostics"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#boot_diagnostics LinuxVirtualMachine#boot_diagnostics}

---

##### `bypassPlatformSafetyChecksOnUserScheduleEnabled`<sup>Optional</sup> <a name="bypassPlatformSafetyChecksOnUserScheduleEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.bypassPlatformSafetyChecksOnUserScheduleEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#bypass_platform_safety_checks_on_user_schedule_enabled LinuxVirtualMachine#bypass_platform_safety_checks_on_user_schedule_enabled}.

---

##### `capacityReservationGroupId`<sup>Optional</sup> <a name="capacityReservationGroupId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.capacityReservationGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#capacity_reservation_group_id LinuxVirtualMachine#capacity_reservation_group_id}.

---

##### `computerName`<sup>Optional</sup> <a name="computerName" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.computerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#computer_name LinuxVirtualMachine#computer_name}.

---

##### `customData`<sup>Optional</sup> <a name="customData" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.customData"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#custom_data LinuxVirtualMachine#custom_data}.

---

##### `dedicatedHostGroupId`<sup>Optional</sup> <a name="dedicatedHostGroupId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.dedicatedHostGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#dedicated_host_group_id LinuxVirtualMachine#dedicated_host_group_id}.

---

##### `dedicatedHostId`<sup>Optional</sup> <a name="dedicatedHostId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.dedicatedHostId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#dedicated_host_id LinuxVirtualMachine#dedicated_host_id}.

---

##### `disablePasswordAuthentication`<sup>Optional</sup> <a name="disablePasswordAuthentication" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.disablePasswordAuthentication"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#disable_password_authentication LinuxVirtualMachine#disable_password_authentication}.

---

##### `edgeZone`<sup>Optional</sup> <a name="edgeZone" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.edgeZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#edge_zone LinuxVirtualMachine#edge_zone}.

---

##### `encryptionAtHostEnabled`<sup>Optional</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.encryptionAtHostEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#encryption_at_host_enabled LinuxVirtualMachine#encryption_at_host_enabled}.

---

##### `evictionPolicy`<sup>Optional</sup> <a name="evictionPolicy" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.evictionPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#eviction_policy LinuxVirtualMachine#eviction_policy}.

---

##### `extensionsTimeBudget`<sup>Optional</sup> <a name="extensionsTimeBudget" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.extensionsTimeBudget"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#extensions_time_budget LinuxVirtualMachine#extensions_time_budget}.

---

##### `galleryApplication`<sup>Optional</sup> <a name="galleryApplication" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.galleryApplication"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication">LinuxVirtualMachineGalleryApplication</a>>

gallery_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#gallery_application LinuxVirtualMachine#gallery_application}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#id LinuxVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity">LinuxVirtualMachineIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#identity LinuxVirtualMachine#identity}

---

##### `licenseType`<sup>Optional</sup> <a name="licenseType" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.licenseType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#license_type LinuxVirtualMachine#license_type}.

---

##### `maxBidPrice`<sup>Optional</sup> <a name="maxBidPrice" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.maxBidPrice"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#max_bid_price LinuxVirtualMachine#max_bid_price}.

---

##### `patchAssessmentMode`<sup>Optional</sup> <a name="patchAssessmentMode" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.patchAssessmentMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#patch_assessment_mode LinuxVirtualMachine#patch_assessment_mode}.

---

##### `patchMode`<sup>Optional</sup> <a name="patchMode" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.patchMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#patch_mode LinuxVirtualMachine#patch_mode}.

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.plan"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#plan LinuxVirtualMachine#plan}

---

##### `platformFaultDomain`<sup>Optional</sup> <a name="platformFaultDomain" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.platformFaultDomain"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#platform_fault_domain LinuxVirtualMachine#platform_fault_domain}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.priority"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#priority LinuxVirtualMachine#priority}.

---

##### `provisionVmAgent`<sup>Optional</sup> <a name="provisionVmAgent" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.provisionVmAgent"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#provision_vm_agent LinuxVirtualMachine#provision_vm_agent}.

---

##### `proximityPlacementGroupId`<sup>Optional</sup> <a name="proximityPlacementGroupId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.proximityPlacementGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#proximity_placement_group_id LinuxVirtualMachine#proximity_placement_group_id}.

---

##### `rebootSetting`<sup>Optional</sup> <a name="rebootSetting" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.rebootSetting"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#reboot_setting LinuxVirtualMachine#reboot_setting}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.secret"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecret">LinuxVirtualMachineSecret</a>>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#secret LinuxVirtualMachine#secret}

---

##### `secureBootEnabled`<sup>Optional</sup> <a name="secureBootEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.secureBootEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#secure_boot_enabled LinuxVirtualMachine#secure_boot_enabled}.

---

##### `sourceImageId`<sup>Optional</sup> <a name="sourceImageId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.sourceImageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#source_image_id LinuxVirtualMachine#source_image_id}.

---

##### `sourceImageReference`<sup>Optional</sup> <a name="sourceImageReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.sourceImageReference"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a>

source_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#source_image_reference LinuxVirtualMachine#source_image_reference}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#tags LinuxVirtualMachine#tags}.

---

##### `terminationNotification`<sup>Optional</sup> <a name="terminationNotification" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.terminationNotification"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification">LinuxVirtualMachineTerminationNotification</a>

termination_notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#termination_notification LinuxVirtualMachine#termination_notification}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts">LinuxVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#timeouts LinuxVirtualMachine#timeouts}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.userData"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#user_data LinuxVirtualMachine#user_data}.

---

##### `virtualMachineScaleSetId`<sup>Optional</sup> <a name="virtualMachineScaleSetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.virtualMachineScaleSetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#virtual_machine_scale_set_id LinuxVirtualMachine#virtual_machine_scale_set_id}.

---

##### `vtpmEnabled`<sup>Optional</sup> <a name="vtpmEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.vtpmEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#vtpm_enabled LinuxVirtualMachine#vtpm_enabled}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#zone LinuxVirtualMachine#zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putAdditionalCapabilities">putAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putAdminSshKey">putAdminSshKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putBootDiagnostics">putBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putGalleryApplication">putGalleryApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putOsDisk">putOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putPlan">putPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putSourceImageReference">putSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putTerminationNotification">putTerminationNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetAdditionalCapabilities">resetAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetAdminSshKey">resetAdminSshKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetAllowExtensionOperations">resetAllowExtensionOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetAvailabilitySetId">resetAvailabilitySetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetBootDiagnostics">resetBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetBypassPlatformSafetyChecksOnUserScheduleEnabled">resetBypassPlatformSafetyChecksOnUserScheduleEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetCapacityReservationGroupId">resetCapacityReservationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetComputerName">resetComputerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetCustomData">resetCustomData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetDedicatedHostGroupId">resetDedicatedHostGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetDedicatedHostId">resetDedicatedHostId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetDisablePasswordAuthentication">resetDisablePasswordAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetEdgeZone">resetEdgeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetEncryptionAtHostEnabled">resetEncryptionAtHostEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetEvictionPolicy">resetEvictionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetExtensionsTimeBudget">resetExtensionsTimeBudget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetGalleryApplication">resetGalleryApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetLicenseType">resetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetMaxBidPrice">resetMaxBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetPatchAssessmentMode">resetPatchAssessmentMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetPatchMode">resetPatchMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetPlan">resetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetPlatformFaultDomain">resetPlatformFaultDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetProvisionVmAgent">resetProvisionVmAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetProximityPlacementGroupId">resetProximityPlacementGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetRebootSetting">resetRebootSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetSecureBootEnabled">resetSecureBootEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetSourceImageId">resetSourceImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetSourceImageReference">resetSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetTerminationNotification">resetTerminationNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetUserData">resetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetVirtualMachineScaleSetId">resetVirtualMachineScaleSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetVtpmEnabled">resetVtpmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalCapabilities` <a name="putAdditionalCapabilities" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putAdditionalCapabilities"></a>

```java
public void putAdditionalCapabilities(LinuxVirtualMachineAdditionalCapabilities value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putAdditionalCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a>

---

##### `putAdminSshKey` <a name="putAdminSshKey" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putAdminSshKey"></a>

```java
public void putAdminSshKey(IResolvable OR java.util.List<LinuxVirtualMachineAdminSshKey> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putAdminSshKey.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey">LinuxVirtualMachineAdminSshKey</a>>

---

##### `putBootDiagnostics` <a name="putBootDiagnostics" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putBootDiagnostics"></a>

```java
public void putBootDiagnostics(LinuxVirtualMachineBootDiagnostics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putBootDiagnostics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a>

---

##### `putGalleryApplication` <a name="putGalleryApplication" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putGalleryApplication"></a>

```java
public void putGalleryApplication(IResolvable OR java.util.List<LinuxVirtualMachineGalleryApplication> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putGalleryApplication.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication">LinuxVirtualMachineGalleryApplication</a>>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putIdentity"></a>

```java
public void putIdentity(LinuxVirtualMachineIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity">LinuxVirtualMachineIdentity</a>

---

##### `putOsDisk` <a name="putOsDisk" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putOsDisk"></a>

```java
public void putOsDisk(LinuxVirtualMachineOsDisk value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putOsDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a>

---

##### `putPlan` <a name="putPlan" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putPlan"></a>

```java
public void putPlan(LinuxVirtualMachinePlan value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putPlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a>

---

##### `putSecret` <a name="putSecret" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putSecret"></a>

```java
public void putSecret(IResolvable OR java.util.List<LinuxVirtualMachineSecret> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putSecret.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecret">LinuxVirtualMachineSecret</a>>

---

##### `putSourceImageReference` <a name="putSourceImageReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putSourceImageReference"></a>

```java
public void putSourceImageReference(LinuxVirtualMachineSourceImageReference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putSourceImageReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a>

---

##### `putTerminationNotification` <a name="putTerminationNotification" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putTerminationNotification"></a>

```java
public void putTerminationNotification(LinuxVirtualMachineTerminationNotification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putTerminationNotification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification">LinuxVirtualMachineTerminationNotification</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putTimeouts"></a>

```java
public void putTimeouts(LinuxVirtualMachineTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts">LinuxVirtualMachineTimeouts</a>

---

##### `resetAdditionalCapabilities` <a name="resetAdditionalCapabilities" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetAdditionalCapabilities"></a>

```java
public void resetAdditionalCapabilities()
```

##### `resetAdminPassword` <a name="resetAdminPassword" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetAdminPassword"></a>

```java
public void resetAdminPassword()
```

##### `resetAdminSshKey` <a name="resetAdminSshKey" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetAdminSshKey"></a>

```java
public void resetAdminSshKey()
```

##### `resetAllowExtensionOperations` <a name="resetAllowExtensionOperations" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetAllowExtensionOperations"></a>

```java
public void resetAllowExtensionOperations()
```

##### `resetAvailabilitySetId` <a name="resetAvailabilitySetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetAvailabilitySetId"></a>

```java
public void resetAvailabilitySetId()
```

##### `resetBootDiagnostics` <a name="resetBootDiagnostics" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetBootDiagnostics"></a>

```java
public void resetBootDiagnostics()
```

##### `resetBypassPlatformSafetyChecksOnUserScheduleEnabled` <a name="resetBypassPlatformSafetyChecksOnUserScheduleEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetBypassPlatformSafetyChecksOnUserScheduleEnabled"></a>

```java
public void resetBypassPlatformSafetyChecksOnUserScheduleEnabled()
```

##### `resetCapacityReservationGroupId` <a name="resetCapacityReservationGroupId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetCapacityReservationGroupId"></a>

```java
public void resetCapacityReservationGroupId()
```

##### `resetComputerName` <a name="resetComputerName" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetComputerName"></a>

```java
public void resetComputerName()
```

##### `resetCustomData` <a name="resetCustomData" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetCustomData"></a>

```java
public void resetCustomData()
```

##### `resetDedicatedHostGroupId` <a name="resetDedicatedHostGroupId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetDedicatedHostGroupId"></a>

```java
public void resetDedicatedHostGroupId()
```

##### `resetDedicatedHostId` <a name="resetDedicatedHostId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetDedicatedHostId"></a>

```java
public void resetDedicatedHostId()
```

##### `resetDisablePasswordAuthentication` <a name="resetDisablePasswordAuthentication" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetDisablePasswordAuthentication"></a>

```java
public void resetDisablePasswordAuthentication()
```

##### `resetEdgeZone` <a name="resetEdgeZone" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetEdgeZone"></a>

```java
public void resetEdgeZone()
```

##### `resetEncryptionAtHostEnabled` <a name="resetEncryptionAtHostEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetEncryptionAtHostEnabled"></a>

```java
public void resetEncryptionAtHostEnabled()
```

##### `resetEvictionPolicy` <a name="resetEvictionPolicy" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetEvictionPolicy"></a>

```java
public void resetEvictionPolicy()
```

##### `resetExtensionsTimeBudget` <a name="resetExtensionsTimeBudget" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetExtensionsTimeBudget"></a>

```java
public void resetExtensionsTimeBudget()
```

##### `resetGalleryApplication` <a name="resetGalleryApplication" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetGalleryApplication"></a>

```java
public void resetGalleryApplication()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetLicenseType` <a name="resetLicenseType" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetLicenseType"></a>

```java
public void resetLicenseType()
```

##### `resetMaxBidPrice` <a name="resetMaxBidPrice" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetMaxBidPrice"></a>

```java
public void resetMaxBidPrice()
```

##### `resetPatchAssessmentMode` <a name="resetPatchAssessmentMode" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetPatchAssessmentMode"></a>

```java
public void resetPatchAssessmentMode()
```

##### `resetPatchMode` <a name="resetPatchMode" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetPatchMode"></a>

```java
public void resetPatchMode()
```

##### `resetPlan` <a name="resetPlan" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetPlan"></a>

```java
public void resetPlan()
```

##### `resetPlatformFaultDomain` <a name="resetPlatformFaultDomain" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetPlatformFaultDomain"></a>

```java
public void resetPlatformFaultDomain()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetProvisionVmAgent` <a name="resetProvisionVmAgent" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetProvisionVmAgent"></a>

```java
public void resetProvisionVmAgent()
```

##### `resetProximityPlacementGroupId` <a name="resetProximityPlacementGroupId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetProximityPlacementGroupId"></a>

```java
public void resetProximityPlacementGroupId()
```

##### `resetRebootSetting` <a name="resetRebootSetting" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetRebootSetting"></a>

```java
public void resetRebootSetting()
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetSecret"></a>

```java
public void resetSecret()
```

##### `resetSecureBootEnabled` <a name="resetSecureBootEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetSecureBootEnabled"></a>

```java
public void resetSecureBootEnabled()
```

##### `resetSourceImageId` <a name="resetSourceImageId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetSourceImageId"></a>

```java
public void resetSourceImageId()
```

##### `resetSourceImageReference` <a name="resetSourceImageReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetSourceImageReference"></a>

```java
public void resetSourceImageReference()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetTags"></a>

```java
public void resetTags()
```

##### `resetTerminationNotification` <a name="resetTerminationNotification" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetTerminationNotification"></a>

```java
public void resetTerminationNotification()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetUserData"></a>

```java
public void resetUserData()
```

##### `resetVirtualMachineScaleSetId` <a name="resetVirtualMachineScaleSetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetVirtualMachineScaleSetId"></a>

```java
public void resetVirtualMachineScaleSetId()
```

##### `resetVtpmEnabled` <a name="resetVtpmEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetVtpmEnabled"></a>

```java
public void resetVtpmEnabled()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LinuxVirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachine;

LinuxVirtualMachine.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachine;

LinuxVirtualMachine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachine;

LinuxVirtualMachine.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachine;

LinuxVirtualMachine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LinuxVirtualMachine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LinuxVirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LinuxVirtualMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LinuxVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LinuxVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.additionalCapabilities">additionalCapabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference">LinuxVirtualMachineAdditionalCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.adminSshKey">adminSshKey</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList">LinuxVirtualMachineAdminSshKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.bootDiagnostics">bootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference">LinuxVirtualMachineBootDiagnosticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.galleryApplication">galleryApplication</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList">LinuxVirtualMachineGalleryApplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference">LinuxVirtualMachineIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.osDisk">osDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference">LinuxVirtualMachineOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference">LinuxVirtualMachinePlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.privateIpAddresses">privateIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.publicIpAddress">publicIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.publicIpAddresses">publicIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList">LinuxVirtualMachineSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.sourceImageReference">sourceImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference">LinuxVirtualMachineSourceImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.terminationNotification">terminationNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference">LinuxVirtualMachineTerminationNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference">LinuxVirtualMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.virtualMachineId">virtualMachineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.additionalCapabilitiesInput">additionalCapabilitiesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.adminPasswordInput">adminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.adminSshKeyInput">adminSshKeyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey">LinuxVirtualMachineAdminSshKey</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.adminUsernameInput">adminUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.allowExtensionOperationsInput">allowExtensionOperationsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.availabilitySetIdInput">availabilitySetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.bootDiagnosticsInput">bootDiagnosticsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.bypassPlatformSafetyChecksOnUserScheduleEnabledInput">bypassPlatformSafetyChecksOnUserScheduleEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.capacityReservationGroupIdInput">capacityReservationGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.computerNameInput">computerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.customDataInput">customDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.dedicatedHostGroupIdInput">dedicatedHostGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.dedicatedHostIdInput">dedicatedHostIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.disablePasswordAuthenticationInput">disablePasswordAuthenticationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.edgeZoneInput">edgeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.encryptionAtHostEnabledInput">encryptionAtHostEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.evictionPolicyInput">evictionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.extensionsTimeBudgetInput">extensionsTimeBudgetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.galleryApplicationInput">galleryApplicationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication">LinuxVirtualMachineGalleryApplication</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity">LinuxVirtualMachineIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.licenseTypeInput">licenseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.maxBidPriceInput">maxBidPriceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.networkInterfaceIdsInput">networkInterfaceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.osDiskInput">osDiskInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.patchAssessmentModeInput">patchAssessmentModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.patchModeInput">patchModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.planInput">planInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.platformFaultDomainInput">platformFaultDomainInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.priorityInput">priorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.provisionVmAgentInput">provisionVmAgentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.proximityPlacementGroupIdInput">proximityPlacementGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.rebootSettingInput">rebootSettingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.secretInput">secretInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecret">LinuxVirtualMachineSecret</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.secureBootEnabledInput">secureBootEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.sizeInput">sizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.sourceImageIdInput">sourceImageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.sourceImageReferenceInput">sourceImageReferenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.terminationNotificationInput">terminationNotificationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification">LinuxVirtualMachineTerminationNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts">LinuxVirtualMachineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.userDataInput">userDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.virtualMachineScaleSetIdInput">virtualMachineScaleSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.vtpmEnabledInput">vtpmEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.allowExtensionOperations">allowExtensionOperations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.availabilitySetId">availabilitySetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.bypassPlatformSafetyChecksOnUserScheduleEnabled">bypassPlatformSafetyChecksOnUserScheduleEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.capacityReservationGroupId">capacityReservationGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.computerName">computerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.customData">customData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.dedicatedHostGroupId">dedicatedHostGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.dedicatedHostId">dedicatedHostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.disablePasswordAuthentication">disablePasswordAuthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.edgeZone">edgeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.evictionPolicy">evictionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.extensionsTimeBudget">extensionsTimeBudget</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.maxBidPrice">maxBidPrice</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.patchAssessmentMode">patchAssessmentMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.patchMode">patchMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.platformFaultDomain">platformFaultDomain</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.priority">priority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.provisionVmAgent">provisionVmAgent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.proximityPlacementGroupId">proximityPlacementGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.rebootSetting">rebootSetting</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.secureBootEnabled">secureBootEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.size">size</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.sourceImageId">sourceImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.userData">userData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.virtualMachineScaleSetId">virtualMachineScaleSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.vtpmEnabled">vtpmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `additionalCapabilities`<sup>Required</sup> <a name="additionalCapabilities" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.additionalCapabilities"></a>

```java
public LinuxVirtualMachineAdditionalCapabilitiesOutputReference getAdditionalCapabilities();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference">LinuxVirtualMachineAdditionalCapabilitiesOutputReference</a>

---

##### `adminSshKey`<sup>Required</sup> <a name="adminSshKey" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.adminSshKey"></a>

```java
public LinuxVirtualMachineAdminSshKeyList getAdminSshKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList">LinuxVirtualMachineAdminSshKeyList</a>

---

##### `bootDiagnostics`<sup>Required</sup> <a name="bootDiagnostics" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.bootDiagnostics"></a>

```java
public LinuxVirtualMachineBootDiagnosticsOutputReference getBootDiagnostics();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference">LinuxVirtualMachineBootDiagnosticsOutputReference</a>

---

##### `galleryApplication`<sup>Required</sup> <a name="galleryApplication" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.galleryApplication"></a>

```java
public LinuxVirtualMachineGalleryApplicationList getGalleryApplication();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList">LinuxVirtualMachineGalleryApplicationList</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.identity"></a>

```java
public LinuxVirtualMachineIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference">LinuxVirtualMachineIdentityOutputReference</a>

---

##### `osDisk`<sup>Required</sup> <a name="osDisk" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.osDisk"></a>

```java
public LinuxVirtualMachineOsDiskOutputReference getOsDisk();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference">LinuxVirtualMachineOsDiskOutputReference</a>

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.plan"></a>

```java
public LinuxVirtualMachinePlanOutputReference getPlan();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference">LinuxVirtualMachinePlanOutputReference</a>

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `privateIpAddresses`<sup>Required</sup> <a name="privateIpAddresses" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.privateIpAddresses"></a>

```java
public java.util.List<java.lang.String> getPrivateIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.publicIpAddress"></a>

```java
public java.lang.String getPublicIpAddress();
```

- *Type:* java.lang.String

---

##### `publicIpAddresses`<sup>Required</sup> <a name="publicIpAddresses" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.publicIpAddresses"></a>

```java
public java.util.List<java.lang.String> getPublicIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.secret"></a>

```java
public LinuxVirtualMachineSecretList getSecret();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList">LinuxVirtualMachineSecretList</a>

---

##### `sourceImageReference`<sup>Required</sup> <a name="sourceImageReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.sourceImageReference"></a>

```java
public LinuxVirtualMachineSourceImageReferenceOutputReference getSourceImageReference();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference">LinuxVirtualMachineSourceImageReferenceOutputReference</a>

---

##### `terminationNotification`<sup>Required</sup> <a name="terminationNotification" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.terminationNotification"></a>

```java
public LinuxVirtualMachineTerminationNotificationOutputReference getTerminationNotification();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference">LinuxVirtualMachineTerminationNotificationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.timeouts"></a>

```java
public LinuxVirtualMachineTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference">LinuxVirtualMachineTimeoutsOutputReference</a>

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.virtualMachineId"></a>

```java
public java.lang.String getVirtualMachineId();
```

- *Type:* java.lang.String

---

##### `additionalCapabilitiesInput`<sup>Optional</sup> <a name="additionalCapabilitiesInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.additionalCapabilitiesInput"></a>

```java
public LinuxVirtualMachineAdditionalCapabilities getAdditionalCapabilitiesInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a>

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.adminPasswordInput"></a>

```java
public java.lang.String getAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `adminSshKeyInput`<sup>Optional</sup> <a name="adminSshKeyInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.adminSshKeyInput"></a>

```java
public java.lang.Object getAdminSshKeyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey">LinuxVirtualMachineAdminSshKey</a>>

---

##### `adminUsernameInput`<sup>Optional</sup> <a name="adminUsernameInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.adminUsernameInput"></a>

```java
public java.lang.String getAdminUsernameInput();
```

- *Type:* java.lang.String

---

##### `allowExtensionOperationsInput`<sup>Optional</sup> <a name="allowExtensionOperationsInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.allowExtensionOperationsInput"></a>

```java
public java.lang.Object getAllowExtensionOperationsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilitySetIdInput`<sup>Optional</sup> <a name="availabilitySetIdInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.availabilitySetIdInput"></a>

```java
public java.lang.String getAvailabilitySetIdInput();
```

- *Type:* java.lang.String

---

##### `bootDiagnosticsInput`<sup>Optional</sup> <a name="bootDiagnosticsInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.bootDiagnosticsInput"></a>

```java
public LinuxVirtualMachineBootDiagnostics getBootDiagnosticsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a>

---

##### `bypassPlatformSafetyChecksOnUserScheduleEnabledInput`<sup>Optional</sup> <a name="bypassPlatformSafetyChecksOnUserScheduleEnabledInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.bypassPlatformSafetyChecksOnUserScheduleEnabledInput"></a>

```java
public java.lang.Object getBypassPlatformSafetyChecksOnUserScheduleEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `capacityReservationGroupIdInput`<sup>Optional</sup> <a name="capacityReservationGroupIdInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.capacityReservationGroupIdInput"></a>

```java
public java.lang.String getCapacityReservationGroupIdInput();
```

- *Type:* java.lang.String

---

##### `computerNameInput`<sup>Optional</sup> <a name="computerNameInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.computerNameInput"></a>

```java
public java.lang.String getComputerNameInput();
```

- *Type:* java.lang.String

---

##### `customDataInput`<sup>Optional</sup> <a name="customDataInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.customDataInput"></a>

```java
public java.lang.String getCustomDataInput();
```

- *Type:* java.lang.String

---

##### `dedicatedHostGroupIdInput`<sup>Optional</sup> <a name="dedicatedHostGroupIdInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.dedicatedHostGroupIdInput"></a>

```java
public java.lang.String getDedicatedHostGroupIdInput();
```

- *Type:* java.lang.String

---

##### `dedicatedHostIdInput`<sup>Optional</sup> <a name="dedicatedHostIdInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.dedicatedHostIdInput"></a>

```java
public java.lang.String getDedicatedHostIdInput();
```

- *Type:* java.lang.String

---

##### `disablePasswordAuthenticationInput`<sup>Optional</sup> <a name="disablePasswordAuthenticationInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.disablePasswordAuthenticationInput"></a>

```java
public java.lang.Object getDisablePasswordAuthenticationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `edgeZoneInput`<sup>Optional</sup> <a name="edgeZoneInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.edgeZoneInput"></a>

```java
public java.lang.String getEdgeZoneInput();
```

- *Type:* java.lang.String

---

##### `encryptionAtHostEnabledInput`<sup>Optional</sup> <a name="encryptionAtHostEnabledInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.encryptionAtHostEnabledInput"></a>

```java
public java.lang.Object getEncryptionAtHostEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `evictionPolicyInput`<sup>Optional</sup> <a name="evictionPolicyInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.evictionPolicyInput"></a>

```java
public java.lang.String getEvictionPolicyInput();
```

- *Type:* java.lang.String

---

##### `extensionsTimeBudgetInput`<sup>Optional</sup> <a name="extensionsTimeBudgetInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.extensionsTimeBudgetInput"></a>

```java
public java.lang.String getExtensionsTimeBudgetInput();
```

- *Type:* java.lang.String

---

##### `galleryApplicationInput`<sup>Optional</sup> <a name="galleryApplicationInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.galleryApplicationInput"></a>

```java
public java.lang.Object getGalleryApplicationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication">LinuxVirtualMachineGalleryApplication</a>>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.identityInput"></a>

```java
public LinuxVirtualMachineIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity">LinuxVirtualMachineIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.licenseTypeInput"></a>

```java
public java.lang.String getLicenseTypeInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maxBidPriceInput`<sup>Optional</sup> <a name="maxBidPriceInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.maxBidPriceInput"></a>

```java
public java.lang.Number getMaxBidPriceInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIdsInput`<sup>Optional</sup> <a name="networkInterfaceIdsInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.networkInterfaceIdsInput"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfaceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `osDiskInput`<sup>Optional</sup> <a name="osDiskInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.osDiskInput"></a>

```java
public LinuxVirtualMachineOsDisk getOsDiskInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a>

---

##### `patchAssessmentModeInput`<sup>Optional</sup> <a name="patchAssessmentModeInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.patchAssessmentModeInput"></a>

```java
public java.lang.String getPatchAssessmentModeInput();
```

- *Type:* java.lang.String

---

##### `patchModeInput`<sup>Optional</sup> <a name="patchModeInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.patchModeInput"></a>

```java
public java.lang.String getPatchModeInput();
```

- *Type:* java.lang.String

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.planInput"></a>

```java
public LinuxVirtualMachinePlan getPlanInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a>

---

##### `platformFaultDomainInput`<sup>Optional</sup> <a name="platformFaultDomainInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.platformFaultDomainInput"></a>

```java
public java.lang.Number getPlatformFaultDomainInput();
```

- *Type:* java.lang.Number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.priorityInput"></a>

```java
public java.lang.String getPriorityInput();
```

- *Type:* java.lang.String

---

##### `provisionVmAgentInput`<sup>Optional</sup> <a name="provisionVmAgentInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.provisionVmAgentInput"></a>

```java
public java.lang.Object getProvisionVmAgentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `proximityPlacementGroupIdInput`<sup>Optional</sup> <a name="proximityPlacementGroupIdInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.proximityPlacementGroupIdInput"></a>

```java
public java.lang.String getProximityPlacementGroupIdInput();
```

- *Type:* java.lang.String

---

##### `rebootSettingInput`<sup>Optional</sup> <a name="rebootSettingInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.rebootSettingInput"></a>

```java
public java.lang.String getRebootSettingInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.secretInput"></a>

```java
public java.lang.Object getSecretInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecret">LinuxVirtualMachineSecret</a>>

---

##### `secureBootEnabledInput`<sup>Optional</sup> <a name="secureBootEnabledInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.secureBootEnabledInput"></a>

```java
public java.lang.Object getSecureBootEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.sizeInput"></a>

```java
public java.lang.String getSizeInput();
```

- *Type:* java.lang.String

---

##### `sourceImageIdInput`<sup>Optional</sup> <a name="sourceImageIdInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.sourceImageIdInput"></a>

```java
public java.lang.String getSourceImageIdInput();
```

- *Type:* java.lang.String

---

##### `sourceImageReferenceInput`<sup>Optional</sup> <a name="sourceImageReferenceInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.sourceImageReferenceInput"></a>

```java
public LinuxVirtualMachineSourceImageReference getSourceImageReferenceInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `terminationNotificationInput`<sup>Optional</sup> <a name="terminationNotificationInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.terminationNotificationInput"></a>

```java
public LinuxVirtualMachineTerminationNotification getTerminationNotificationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification">LinuxVirtualMachineTerminationNotification</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts">LinuxVirtualMachineTimeouts</a>

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.userDataInput"></a>

```java
public java.lang.String getUserDataInput();
```

- *Type:* java.lang.String

---

##### `virtualMachineScaleSetIdInput`<sup>Optional</sup> <a name="virtualMachineScaleSetIdInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.virtualMachineScaleSetIdInput"></a>

```java
public java.lang.String getVirtualMachineScaleSetIdInput();
```

- *Type:* java.lang.String

---

##### `vtpmEnabledInput`<sup>Optional</sup> <a name="vtpmEnabledInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.vtpmEnabledInput"></a>

```java
public java.lang.Object getVtpmEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

---

##### `allowExtensionOperations`<sup>Required</sup> <a name="allowExtensionOperations" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.allowExtensionOperations"></a>

```java
public java.lang.Object getAllowExtensionOperations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilitySetId`<sup>Required</sup> <a name="availabilitySetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.availabilitySetId"></a>

```java
public java.lang.String getAvailabilitySetId();
```

- *Type:* java.lang.String

---

##### `bypassPlatformSafetyChecksOnUserScheduleEnabled`<sup>Required</sup> <a name="bypassPlatformSafetyChecksOnUserScheduleEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.bypassPlatformSafetyChecksOnUserScheduleEnabled"></a>

```java
public java.lang.Object getBypassPlatformSafetyChecksOnUserScheduleEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `capacityReservationGroupId`<sup>Required</sup> <a name="capacityReservationGroupId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.capacityReservationGroupId"></a>

```java
public java.lang.String getCapacityReservationGroupId();
```

- *Type:* java.lang.String

---

##### `computerName`<sup>Required</sup> <a name="computerName" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.computerName"></a>

```java
public java.lang.String getComputerName();
```

- *Type:* java.lang.String

---

##### `customData`<sup>Required</sup> <a name="customData" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.customData"></a>

```java
public java.lang.String getCustomData();
```

- *Type:* java.lang.String

---

##### `dedicatedHostGroupId`<sup>Required</sup> <a name="dedicatedHostGroupId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.dedicatedHostGroupId"></a>

```java
public java.lang.String getDedicatedHostGroupId();
```

- *Type:* java.lang.String

---

##### `dedicatedHostId`<sup>Required</sup> <a name="dedicatedHostId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.dedicatedHostId"></a>

```java
public java.lang.String getDedicatedHostId();
```

- *Type:* java.lang.String

---

##### `disablePasswordAuthentication`<sup>Required</sup> <a name="disablePasswordAuthentication" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.disablePasswordAuthentication"></a>

```java
public java.lang.Object getDisablePasswordAuthentication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `edgeZone`<sup>Required</sup> <a name="edgeZone" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.edgeZone"></a>

```java
public java.lang.String getEdgeZone();
```

- *Type:* java.lang.String

---

##### `encryptionAtHostEnabled`<sup>Required</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.encryptionAtHostEnabled"></a>

```java
public java.lang.Object getEncryptionAtHostEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `evictionPolicy`<sup>Required</sup> <a name="evictionPolicy" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.evictionPolicy"></a>

```java
public java.lang.String getEvictionPolicy();
```

- *Type:* java.lang.String

---

##### `extensionsTimeBudget`<sup>Required</sup> <a name="extensionsTimeBudget" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.extensionsTimeBudget"></a>

```java
public java.lang.String getExtensionsTimeBudget();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `maxBidPrice`<sup>Required</sup> <a name="maxBidPrice" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.maxBidPrice"></a>

```java
public java.lang.Number getMaxBidPrice();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.networkInterfaceIds"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfaceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `patchAssessmentMode`<sup>Required</sup> <a name="patchAssessmentMode" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.patchAssessmentMode"></a>

```java
public java.lang.String getPatchAssessmentMode();
```

- *Type:* java.lang.String

---

##### `patchMode`<sup>Required</sup> <a name="patchMode" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.patchMode"></a>

```java
public java.lang.String getPatchMode();
```

- *Type:* java.lang.String

---

##### `platformFaultDomain`<sup>Required</sup> <a name="platformFaultDomain" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.platformFaultDomain"></a>

```java
public java.lang.Number getPlatformFaultDomain();
```

- *Type:* java.lang.Number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

---

##### `provisionVmAgent`<sup>Required</sup> <a name="provisionVmAgent" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.provisionVmAgent"></a>

```java
public java.lang.Object getProvisionVmAgent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `proximityPlacementGroupId`<sup>Required</sup> <a name="proximityPlacementGroupId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.proximityPlacementGroupId"></a>

```java
public java.lang.String getProximityPlacementGroupId();
```

- *Type:* java.lang.String

---

##### `rebootSetting`<sup>Required</sup> <a name="rebootSetting" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.rebootSetting"></a>

```java
public java.lang.String getRebootSetting();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `secureBootEnabled`<sup>Required</sup> <a name="secureBootEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.secureBootEnabled"></a>

```java
public java.lang.Object getSecureBootEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

---

##### `sourceImageId`<sup>Required</sup> <a name="sourceImageId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.sourceImageId"></a>

```java
public java.lang.String getSourceImageId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

---

##### `virtualMachineScaleSetId`<sup>Required</sup> <a name="virtualMachineScaleSetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.virtualMachineScaleSetId"></a>

```java
public java.lang.String getVirtualMachineScaleSetId();
```

- *Type:* java.lang.String

---

##### `vtpmEnabled`<sup>Required</sup> <a name="vtpmEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.vtpmEnabled"></a>

```java
public java.lang.Object getVtpmEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LinuxVirtualMachineAdditionalCapabilities <a name="LinuxVirtualMachineAdditionalCapabilities" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineAdditionalCapabilities;

LinuxVirtualMachineAdditionalCapabilities.builder()
//  .ultraSsdEnabled(java.lang.Boolean)
//  .ultraSsdEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities.property.ultraSsdEnabled">ultraSsdEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#ultra_ssd_enabled LinuxVirtualMachine#ultra_ssd_enabled}. |

---

##### `ultraSsdEnabled`<sup>Optional</sup> <a name="ultraSsdEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities.property.ultraSsdEnabled"></a>

```java
public java.lang.Object getUltraSsdEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#ultra_ssd_enabled LinuxVirtualMachine#ultra_ssd_enabled}.

---

### LinuxVirtualMachineAdminSshKey <a name="LinuxVirtualMachineAdminSshKey" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineAdminSshKey;

LinuxVirtualMachineAdminSshKey.builder()
    .publicKey(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#public_key LinuxVirtualMachine#public_key}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#username LinuxVirtualMachine#username}. |

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#public_key LinuxVirtualMachine#public_key}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#username LinuxVirtualMachine#username}.

---

### LinuxVirtualMachineBootDiagnostics <a name="LinuxVirtualMachineBootDiagnostics" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineBootDiagnostics;

LinuxVirtualMachineBootDiagnostics.builder()
//  .storageAccountUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics.property.storageAccountUri">storageAccountUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#storage_account_uri LinuxVirtualMachine#storage_account_uri}. |

---

##### `storageAccountUri`<sup>Optional</sup> <a name="storageAccountUri" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics.property.storageAccountUri"></a>

```java
public java.lang.String getStorageAccountUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#storage_account_uri LinuxVirtualMachine#storage_account_uri}.

---

### LinuxVirtualMachineConfig <a name="LinuxVirtualMachineConfig" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineConfig;

LinuxVirtualMachineConfig.builder()
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
    .adminUsername(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .networkInterfaceIds(java.util.List<java.lang.String>)
    .osDisk(LinuxVirtualMachineOsDisk)
    .resourceGroupName(java.lang.String)
    .size(java.lang.String)
//  .additionalCapabilities(LinuxVirtualMachineAdditionalCapabilities)
//  .adminPassword(java.lang.String)
//  .adminSshKey(IResolvable)
//  .adminSshKey(java.util.List<LinuxVirtualMachineAdminSshKey>)
//  .allowExtensionOperations(java.lang.Boolean)
//  .allowExtensionOperations(IResolvable)
//  .availabilitySetId(java.lang.String)
//  .bootDiagnostics(LinuxVirtualMachineBootDiagnostics)
//  .bypassPlatformSafetyChecksOnUserScheduleEnabled(java.lang.Boolean)
//  .bypassPlatformSafetyChecksOnUserScheduleEnabled(IResolvable)
//  .capacityReservationGroupId(java.lang.String)
//  .computerName(java.lang.String)
//  .customData(java.lang.String)
//  .dedicatedHostGroupId(java.lang.String)
//  .dedicatedHostId(java.lang.String)
//  .disablePasswordAuthentication(java.lang.Boolean)
//  .disablePasswordAuthentication(IResolvable)
//  .edgeZone(java.lang.String)
//  .encryptionAtHostEnabled(java.lang.Boolean)
//  .encryptionAtHostEnabled(IResolvable)
//  .evictionPolicy(java.lang.String)
//  .extensionsTimeBudget(java.lang.String)
//  .galleryApplication(IResolvable)
//  .galleryApplication(java.util.List<LinuxVirtualMachineGalleryApplication>)
//  .id(java.lang.String)
//  .identity(LinuxVirtualMachineIdentity)
//  .licenseType(java.lang.String)
//  .maxBidPrice(java.lang.Number)
//  .patchAssessmentMode(java.lang.String)
//  .patchMode(java.lang.String)
//  .plan(LinuxVirtualMachinePlan)
//  .platformFaultDomain(java.lang.Number)
//  .priority(java.lang.String)
//  .provisionVmAgent(java.lang.Boolean)
//  .provisionVmAgent(IResolvable)
//  .proximityPlacementGroupId(java.lang.String)
//  .rebootSetting(java.lang.String)
//  .secret(IResolvable)
//  .secret(java.util.List<LinuxVirtualMachineSecret>)
//  .secureBootEnabled(java.lang.Boolean)
//  .secureBootEnabled(IResolvable)
//  .sourceImageId(java.lang.String)
//  .sourceImageReference(LinuxVirtualMachineSourceImageReference)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .terminationNotification(LinuxVirtualMachineTerminationNotification)
//  .timeouts(LinuxVirtualMachineTimeouts)
//  .userData(java.lang.String)
//  .virtualMachineScaleSetId(java.lang.String)
//  .vtpmEnabled(java.lang.Boolean)
//  .vtpmEnabled(IResolvable)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#admin_username LinuxVirtualMachine#admin_username}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#location LinuxVirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#name LinuxVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#network_interface_ids LinuxVirtualMachine#network_interface_ids}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.osDisk">osDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#resource_group_name LinuxVirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.size">size</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#size LinuxVirtualMachine#size}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.additionalCapabilities">additionalCapabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a></code> | additional_capabilities block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#admin_password LinuxVirtualMachine#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.adminSshKey">adminSshKey</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey">LinuxVirtualMachineAdminSshKey</a>></code> | admin_ssh_key block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.allowExtensionOperations">allowExtensionOperations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#allow_extension_operations LinuxVirtualMachine#allow_extension_operations}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.availabilitySetId">availabilitySetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#availability_set_id LinuxVirtualMachine#availability_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.bootDiagnostics">bootDiagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a></code> | boot_diagnostics block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.bypassPlatformSafetyChecksOnUserScheduleEnabled">bypassPlatformSafetyChecksOnUserScheduleEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#bypass_platform_safety_checks_on_user_schedule_enabled LinuxVirtualMachine#bypass_platform_safety_checks_on_user_schedule_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.capacityReservationGroupId">capacityReservationGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#capacity_reservation_group_id LinuxVirtualMachine#capacity_reservation_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.computerName">computerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#computer_name LinuxVirtualMachine#computer_name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.customData">customData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#custom_data LinuxVirtualMachine#custom_data}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.dedicatedHostGroupId">dedicatedHostGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#dedicated_host_group_id LinuxVirtualMachine#dedicated_host_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.dedicatedHostId">dedicatedHostId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#dedicated_host_id LinuxVirtualMachine#dedicated_host_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.disablePasswordAuthentication">disablePasswordAuthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#disable_password_authentication LinuxVirtualMachine#disable_password_authentication}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.edgeZone">edgeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#edge_zone LinuxVirtualMachine#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#encryption_at_host_enabled LinuxVirtualMachine#encryption_at_host_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.evictionPolicy">evictionPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#eviction_policy LinuxVirtualMachine#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.extensionsTimeBudget">extensionsTimeBudget</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#extensions_time_budget LinuxVirtualMachine#extensions_time_budget}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.galleryApplication">galleryApplication</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication">LinuxVirtualMachineGalleryApplication</a>></code> | gallery_application block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#id LinuxVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity">LinuxVirtualMachineIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#license_type LinuxVirtualMachine#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.maxBidPrice">maxBidPrice</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#max_bid_price LinuxVirtualMachine#max_bid_price}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.patchAssessmentMode">patchAssessmentMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#patch_assessment_mode LinuxVirtualMachine#patch_assessment_mode}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.patchMode">patchMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#patch_mode LinuxVirtualMachine#patch_mode}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.platformFaultDomain">platformFaultDomain</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#platform_fault_domain LinuxVirtualMachine#platform_fault_domain}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.priority">priority</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#priority LinuxVirtualMachine#priority}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.provisionVmAgent">provisionVmAgent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#provision_vm_agent LinuxVirtualMachine#provision_vm_agent}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.proximityPlacementGroupId">proximityPlacementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#proximity_placement_group_id LinuxVirtualMachine#proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.rebootSetting">rebootSetting</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#reboot_setting LinuxVirtualMachine#reboot_setting}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.secret">secret</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecret">LinuxVirtualMachineSecret</a>></code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.secureBootEnabled">secureBootEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#secure_boot_enabled LinuxVirtualMachine#secure_boot_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.sourceImageId">sourceImageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#source_image_id LinuxVirtualMachine#source_image_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.sourceImageReference">sourceImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a></code> | source_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#tags LinuxVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.terminationNotification">terminationNotification</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification">LinuxVirtualMachineTerminationNotification</a></code> | termination_notification block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts">LinuxVirtualMachineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.userData">userData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#user_data LinuxVirtualMachine#user_data}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.virtualMachineScaleSetId">virtualMachineScaleSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#virtual_machine_scale_set_id LinuxVirtualMachine#virtual_machine_scale_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.vtpmEnabled">vtpmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#vtpm_enabled LinuxVirtualMachine#vtpm_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#zone LinuxVirtualMachine#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#admin_username LinuxVirtualMachine#admin_username}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#location LinuxVirtualMachine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#name LinuxVirtualMachine#name}.

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.networkInterfaceIds"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfaceIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#network_interface_ids LinuxVirtualMachine#network_interface_ids}.

---

##### `osDisk`<sup>Required</sup> <a name="osDisk" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.osDisk"></a>

```java
public LinuxVirtualMachineOsDisk getOsDisk();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#os_disk LinuxVirtualMachine#os_disk}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#resource_group_name LinuxVirtualMachine#resource_group_name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#size LinuxVirtualMachine#size}.

---

##### `additionalCapabilities`<sup>Optional</sup> <a name="additionalCapabilities" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.additionalCapabilities"></a>

```java
public LinuxVirtualMachineAdditionalCapabilities getAdditionalCapabilities();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a>

additional_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#additional_capabilities LinuxVirtualMachine#additional_capabilities}

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#admin_password LinuxVirtualMachine#admin_password}.

---

##### `adminSshKey`<sup>Optional</sup> <a name="adminSshKey" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.adminSshKey"></a>

```java
public java.lang.Object getAdminSshKey();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey">LinuxVirtualMachineAdminSshKey</a>>

admin_ssh_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#admin_ssh_key LinuxVirtualMachine#admin_ssh_key}

---

##### `allowExtensionOperations`<sup>Optional</sup> <a name="allowExtensionOperations" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.allowExtensionOperations"></a>

```java
public java.lang.Object getAllowExtensionOperations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#allow_extension_operations LinuxVirtualMachine#allow_extension_operations}.

---

##### `availabilitySetId`<sup>Optional</sup> <a name="availabilitySetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.availabilitySetId"></a>

```java
public java.lang.String getAvailabilitySetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#availability_set_id LinuxVirtualMachine#availability_set_id}.

---

##### `bootDiagnostics`<sup>Optional</sup> <a name="bootDiagnostics" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.bootDiagnostics"></a>

```java
public LinuxVirtualMachineBootDiagnostics getBootDiagnostics();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a>

boot_diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#boot_diagnostics LinuxVirtualMachine#boot_diagnostics}

---

##### `bypassPlatformSafetyChecksOnUserScheduleEnabled`<sup>Optional</sup> <a name="bypassPlatformSafetyChecksOnUserScheduleEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.bypassPlatformSafetyChecksOnUserScheduleEnabled"></a>

```java
public java.lang.Object getBypassPlatformSafetyChecksOnUserScheduleEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#bypass_platform_safety_checks_on_user_schedule_enabled LinuxVirtualMachine#bypass_platform_safety_checks_on_user_schedule_enabled}.

---

##### `capacityReservationGroupId`<sup>Optional</sup> <a name="capacityReservationGroupId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.capacityReservationGroupId"></a>

```java
public java.lang.String getCapacityReservationGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#capacity_reservation_group_id LinuxVirtualMachine#capacity_reservation_group_id}.

---

##### `computerName`<sup>Optional</sup> <a name="computerName" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.computerName"></a>

```java
public java.lang.String getComputerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#computer_name LinuxVirtualMachine#computer_name}.

---

##### `customData`<sup>Optional</sup> <a name="customData" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.customData"></a>

```java
public java.lang.String getCustomData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#custom_data LinuxVirtualMachine#custom_data}.

---

##### `dedicatedHostGroupId`<sup>Optional</sup> <a name="dedicatedHostGroupId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.dedicatedHostGroupId"></a>

```java
public java.lang.String getDedicatedHostGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#dedicated_host_group_id LinuxVirtualMachine#dedicated_host_group_id}.

---

##### `dedicatedHostId`<sup>Optional</sup> <a name="dedicatedHostId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.dedicatedHostId"></a>

```java
public java.lang.String getDedicatedHostId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#dedicated_host_id LinuxVirtualMachine#dedicated_host_id}.

---

##### `disablePasswordAuthentication`<sup>Optional</sup> <a name="disablePasswordAuthentication" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.disablePasswordAuthentication"></a>

```java
public java.lang.Object getDisablePasswordAuthentication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#disable_password_authentication LinuxVirtualMachine#disable_password_authentication}.

---

##### `edgeZone`<sup>Optional</sup> <a name="edgeZone" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.edgeZone"></a>

```java
public java.lang.String getEdgeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#edge_zone LinuxVirtualMachine#edge_zone}.

---

##### `encryptionAtHostEnabled`<sup>Optional</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.encryptionAtHostEnabled"></a>

```java
public java.lang.Object getEncryptionAtHostEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#encryption_at_host_enabled LinuxVirtualMachine#encryption_at_host_enabled}.

---

##### `evictionPolicy`<sup>Optional</sup> <a name="evictionPolicy" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.evictionPolicy"></a>

```java
public java.lang.String getEvictionPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#eviction_policy LinuxVirtualMachine#eviction_policy}.

---

##### `extensionsTimeBudget`<sup>Optional</sup> <a name="extensionsTimeBudget" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.extensionsTimeBudget"></a>

```java
public java.lang.String getExtensionsTimeBudget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#extensions_time_budget LinuxVirtualMachine#extensions_time_budget}.

---

##### `galleryApplication`<sup>Optional</sup> <a name="galleryApplication" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.galleryApplication"></a>

```java
public java.lang.Object getGalleryApplication();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication">LinuxVirtualMachineGalleryApplication</a>>

gallery_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#gallery_application LinuxVirtualMachine#gallery_application}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#id LinuxVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.identity"></a>

```java
public LinuxVirtualMachineIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity">LinuxVirtualMachineIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#identity LinuxVirtualMachine#identity}

---

##### `licenseType`<sup>Optional</sup> <a name="licenseType" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#license_type LinuxVirtualMachine#license_type}.

---

##### `maxBidPrice`<sup>Optional</sup> <a name="maxBidPrice" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.maxBidPrice"></a>

```java
public java.lang.Number getMaxBidPrice();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#max_bid_price LinuxVirtualMachine#max_bid_price}.

---

##### `patchAssessmentMode`<sup>Optional</sup> <a name="patchAssessmentMode" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.patchAssessmentMode"></a>

```java
public java.lang.String getPatchAssessmentMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#patch_assessment_mode LinuxVirtualMachine#patch_assessment_mode}.

---

##### `patchMode`<sup>Optional</sup> <a name="patchMode" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.patchMode"></a>

```java
public java.lang.String getPatchMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#patch_mode LinuxVirtualMachine#patch_mode}.

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.plan"></a>

```java
public LinuxVirtualMachinePlan getPlan();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#plan LinuxVirtualMachine#plan}

---

##### `platformFaultDomain`<sup>Optional</sup> <a name="platformFaultDomain" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.platformFaultDomain"></a>

```java
public java.lang.Number getPlatformFaultDomain();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#platform_fault_domain LinuxVirtualMachine#platform_fault_domain}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#priority LinuxVirtualMachine#priority}.

---

##### `provisionVmAgent`<sup>Optional</sup> <a name="provisionVmAgent" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.provisionVmAgent"></a>

```java
public java.lang.Object getProvisionVmAgent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#provision_vm_agent LinuxVirtualMachine#provision_vm_agent}.

---

##### `proximityPlacementGroupId`<sup>Optional</sup> <a name="proximityPlacementGroupId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.proximityPlacementGroupId"></a>

```java
public java.lang.String getProximityPlacementGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#proximity_placement_group_id LinuxVirtualMachine#proximity_placement_group_id}.

---

##### `rebootSetting`<sup>Optional</sup> <a name="rebootSetting" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.rebootSetting"></a>

```java
public java.lang.String getRebootSetting();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#reboot_setting LinuxVirtualMachine#reboot_setting}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.secret"></a>

```java
public java.lang.Object getSecret();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecret">LinuxVirtualMachineSecret</a>>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#secret LinuxVirtualMachine#secret}

---

##### `secureBootEnabled`<sup>Optional</sup> <a name="secureBootEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.secureBootEnabled"></a>

```java
public java.lang.Object getSecureBootEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#secure_boot_enabled LinuxVirtualMachine#secure_boot_enabled}.

---

##### `sourceImageId`<sup>Optional</sup> <a name="sourceImageId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.sourceImageId"></a>

```java
public java.lang.String getSourceImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#source_image_id LinuxVirtualMachine#source_image_id}.

---

##### `sourceImageReference`<sup>Optional</sup> <a name="sourceImageReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.sourceImageReference"></a>

```java
public LinuxVirtualMachineSourceImageReference getSourceImageReference();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a>

source_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#source_image_reference LinuxVirtualMachine#source_image_reference}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#tags LinuxVirtualMachine#tags}.

---

##### `terminationNotification`<sup>Optional</sup> <a name="terminationNotification" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.terminationNotification"></a>

```java
public LinuxVirtualMachineTerminationNotification getTerminationNotification();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification">LinuxVirtualMachineTerminationNotification</a>

termination_notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#termination_notification LinuxVirtualMachine#termination_notification}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.timeouts"></a>

```java
public LinuxVirtualMachineTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts">LinuxVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#timeouts LinuxVirtualMachine#timeouts}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#user_data LinuxVirtualMachine#user_data}.

---

##### `virtualMachineScaleSetId`<sup>Optional</sup> <a name="virtualMachineScaleSetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.virtualMachineScaleSetId"></a>

```java
public java.lang.String getVirtualMachineScaleSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#virtual_machine_scale_set_id LinuxVirtualMachine#virtual_machine_scale_set_id}.

---

##### `vtpmEnabled`<sup>Optional</sup> <a name="vtpmEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.vtpmEnabled"></a>

```java
public java.lang.Object getVtpmEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#vtpm_enabled LinuxVirtualMachine#vtpm_enabled}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#zone LinuxVirtualMachine#zone}.

---

### LinuxVirtualMachineGalleryApplication <a name="LinuxVirtualMachineGalleryApplication" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineGalleryApplication;

LinuxVirtualMachineGalleryApplication.builder()
    .versionId(java.lang.String)
//  .configurationBlobUri(java.lang.String)
//  .order(java.lang.Number)
//  .tag(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication.property.versionId">versionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#version_id LinuxVirtualMachine#version_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication.property.configurationBlobUri">configurationBlobUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#configuration_blob_uri LinuxVirtualMachine#configuration_blob_uri}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication.property.order">order</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#order LinuxVirtualMachine#order}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication.property.tag">tag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#tag LinuxVirtualMachine#tag}. |

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#version_id LinuxVirtualMachine#version_id}.

---

##### `configurationBlobUri`<sup>Optional</sup> <a name="configurationBlobUri" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication.property.configurationBlobUri"></a>

```java
public java.lang.String getConfigurationBlobUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#configuration_blob_uri LinuxVirtualMachine#configuration_blob_uri}.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#order LinuxVirtualMachine#order}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#tag LinuxVirtualMachine#tag}.

---

### LinuxVirtualMachineIdentity <a name="LinuxVirtualMachineIdentity" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineIdentity;

LinuxVirtualMachineIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#type LinuxVirtualMachine#type}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#identity_ids LinuxVirtualMachine#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#type LinuxVirtualMachine#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#identity_ids LinuxVirtualMachine#identity_ids}.

---

### LinuxVirtualMachineOsDisk <a name="LinuxVirtualMachineOsDisk" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineOsDisk;

LinuxVirtualMachineOsDisk.builder()
    .caching(java.lang.String)
    .storageAccountType(java.lang.String)
//  .diffDiskSettings(LinuxVirtualMachineOsDiskDiffDiskSettings)
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
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.caching">caching</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#caching LinuxVirtualMachine#caching}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#storage_account_type LinuxVirtualMachine#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.diffDiskSettings">diffDiskSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings">LinuxVirtualMachineOsDiskDiffDiskSettings</a></code> | diff_disk_settings block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#disk_encryption_set_id LinuxVirtualMachine#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#disk_size_gb LinuxVirtualMachine#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#name LinuxVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.secureVmDiskEncryptionSetId">secureVmDiskEncryptionSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#secure_vm_disk_encryption_set_id LinuxVirtualMachine#secure_vm_disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.securityEncryptionType">securityEncryptionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#security_encryption_type LinuxVirtualMachine#security_encryption_type}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.writeAcceleratorEnabled">writeAcceleratorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#write_accelerator_enabled LinuxVirtualMachine#write_accelerator_enabled}. |

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.caching"></a>

```java
public java.lang.String getCaching();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#caching LinuxVirtualMachine#caching}.

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.storageAccountType"></a>

```java
public java.lang.String getStorageAccountType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#storage_account_type LinuxVirtualMachine#storage_account_type}.

---

##### `diffDiskSettings`<sup>Optional</sup> <a name="diffDiskSettings" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.diffDiskSettings"></a>

```java
public LinuxVirtualMachineOsDiskDiffDiskSettings getDiffDiskSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings">LinuxVirtualMachineOsDiskDiffDiskSettings</a>

diff_disk_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#diff_disk_settings LinuxVirtualMachine#diff_disk_settings}

---

##### `diskEncryptionSetId`<sup>Optional</sup> <a name="diskEncryptionSetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.diskEncryptionSetId"></a>

```java
public java.lang.String getDiskEncryptionSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#disk_encryption_set_id LinuxVirtualMachine#disk_encryption_set_id}.

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#disk_size_gb LinuxVirtualMachine#disk_size_gb}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#name LinuxVirtualMachine#name}.

---

##### `secureVmDiskEncryptionSetId`<sup>Optional</sup> <a name="secureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.secureVmDiskEncryptionSetId"></a>

```java
public java.lang.String getSecureVmDiskEncryptionSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#secure_vm_disk_encryption_set_id LinuxVirtualMachine#secure_vm_disk_encryption_set_id}.

---

##### `securityEncryptionType`<sup>Optional</sup> <a name="securityEncryptionType" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.securityEncryptionType"></a>

```java
public java.lang.String getSecurityEncryptionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#security_encryption_type LinuxVirtualMachine#security_encryption_type}.

---

##### `writeAcceleratorEnabled`<sup>Optional</sup> <a name="writeAcceleratorEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk.property.writeAcceleratorEnabled"></a>

```java
public java.lang.Object getWriteAcceleratorEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#write_accelerator_enabled LinuxVirtualMachine#write_accelerator_enabled}.

---

### LinuxVirtualMachineOsDiskDiffDiskSettings <a name="LinuxVirtualMachineOsDiskDiffDiskSettings" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineOsDiskDiffDiskSettings;

LinuxVirtualMachineOsDiskDiffDiskSettings.builder()
    .option(java.lang.String)
//  .placement(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings.property.option">option</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#option LinuxVirtualMachine#option}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings.property.placement">placement</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#placement LinuxVirtualMachine#placement}. |

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings.property.option"></a>

```java
public java.lang.String getOption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#option LinuxVirtualMachine#option}.

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings.property.placement"></a>

```java
public java.lang.String getPlacement();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#placement LinuxVirtualMachine#placement}.

---

### LinuxVirtualMachinePlan <a name="LinuxVirtualMachinePlan" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachinePlan;

LinuxVirtualMachinePlan.builder()
    .name(java.lang.String)
    .product(java.lang.String)
    .publisher(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#name LinuxVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan.property.product">product</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#product LinuxVirtualMachine#product}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan.property.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#publisher LinuxVirtualMachine#publisher}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#name LinuxVirtualMachine#name}.

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#product LinuxVirtualMachine#product}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#publisher LinuxVirtualMachine#publisher}.

---

### LinuxVirtualMachineSecret <a name="LinuxVirtualMachineSecret" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecret.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineSecret;

LinuxVirtualMachineSecret.builder()
    .certificate(IResolvable)
    .certificate(java.util.List<LinuxVirtualMachineSecretCertificate>)
    .keyVaultId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecret.property.certificate">certificate</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate">LinuxVirtualMachineSecretCertificate</a>></code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecret.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#key_vault_id LinuxVirtualMachine#key_vault_id}. |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecret.property.certificate"></a>

```java
public java.lang.Object getCertificate();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate">LinuxVirtualMachineSecretCertificate</a>>

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#certificate LinuxVirtualMachine#certificate}

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecret.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#key_vault_id LinuxVirtualMachine#key_vault_id}.

---

### LinuxVirtualMachineSecretCertificate <a name="LinuxVirtualMachineSecretCertificate" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineSecretCertificate;

LinuxVirtualMachineSecretCertificate.builder()
    .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#url LinuxVirtualMachine#url}. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#url LinuxVirtualMachine#url}.

---

### LinuxVirtualMachineSourceImageReference <a name="LinuxVirtualMachineSourceImageReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineSourceImageReference;

LinuxVirtualMachineSourceImageReference.builder()
    .offer(java.lang.String)
    .publisher(java.lang.String)
    .sku(java.lang.String)
    .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.property.offer">offer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#offer LinuxVirtualMachine#offer}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#publisher LinuxVirtualMachine#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#sku LinuxVirtualMachine#sku}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#version LinuxVirtualMachine#version}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#offer LinuxVirtualMachine#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#publisher LinuxVirtualMachine#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#sku LinuxVirtualMachine#sku}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#version LinuxVirtualMachine#version}.

---

### LinuxVirtualMachineTerminationNotification <a name="LinuxVirtualMachineTerminationNotification" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineTerminationNotification;

LinuxVirtualMachineTerminationNotification.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .timeout(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#enabled LinuxVirtualMachine#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification.property.timeout">timeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#timeout LinuxVirtualMachine#timeout}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#enabled LinuxVirtualMachine#enabled}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#timeout LinuxVirtualMachine#timeout}.

---

### LinuxVirtualMachineTimeouts <a name="LinuxVirtualMachineTimeouts" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineTimeouts;

LinuxVirtualMachineTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#create LinuxVirtualMachine#create}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#delete LinuxVirtualMachine#delete}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#read LinuxVirtualMachine#read}. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#update LinuxVirtualMachine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#create LinuxVirtualMachine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#delete LinuxVirtualMachine#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#read LinuxVirtualMachine#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/linux_virtual_machine#update LinuxVirtualMachine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LinuxVirtualMachineAdditionalCapabilitiesOutputReference <a name="LinuxVirtualMachineAdditionalCapabilitiesOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference;

new LinuxVirtualMachineAdditionalCapabilitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled">resetUltraSsdEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUltraSsdEnabled` <a name="resetUltraSsdEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.resetUltraSsdEnabled"></a>

```java
public void resetUltraSsdEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput">ultraSsdEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled">ultraSsdEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ultraSsdEnabledInput`<sup>Optional</sup> <a name="ultraSsdEnabledInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabledInput"></a>

```java
public java.lang.Object getUltraSsdEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ultraSsdEnabled`<sup>Required</sup> <a name="ultraSsdEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.ultraSsdEnabled"></a>

```java
public java.lang.Object getUltraSsdEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilitiesOutputReference.property.internalValue"></a>

```java
public LinuxVirtualMachineAdditionalCapabilities getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdditionalCapabilities">LinuxVirtualMachineAdditionalCapabilities</a>

---


### LinuxVirtualMachineAdminSshKeyList <a name="LinuxVirtualMachineAdminSshKeyList" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineAdminSshKeyList;

new LinuxVirtualMachineAdminSshKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.get"></a>

```java
public LinuxVirtualMachineAdminSshKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey">LinuxVirtualMachineAdminSshKey</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey">LinuxVirtualMachineAdminSshKey</a>>

---


### LinuxVirtualMachineAdminSshKeyOutputReference <a name="LinuxVirtualMachineAdminSshKeyOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineAdminSshKeyOutputReference;

new LinuxVirtualMachineAdminSshKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.publicKeyInput">publicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey">LinuxVirtualMachineAdminSshKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.publicKeyInput"></a>

```java
public java.lang.String getPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKeyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineAdminSshKey">LinuxVirtualMachineAdminSshKey</a>

---


### LinuxVirtualMachineBootDiagnosticsOutputReference <a name="LinuxVirtualMachineBootDiagnosticsOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineBootDiagnosticsOutputReference;

new LinuxVirtualMachineBootDiagnosticsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.resetStorageAccountUri">resetStorageAccountUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageAccountUri` <a name="resetStorageAccountUri" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.resetStorageAccountUri"></a>

```java
public void resetStorageAccountUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUriInput">storageAccountUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUri">storageAccountUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storageAccountUriInput`<sup>Optional</sup> <a name="storageAccountUriInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUriInput"></a>

```java
public java.lang.String getStorageAccountUriInput();
```

- *Type:* java.lang.String

---

##### `storageAccountUri`<sup>Required</sup> <a name="storageAccountUri" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.storageAccountUri"></a>

```java
public java.lang.String getStorageAccountUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnosticsOutputReference.property.internalValue"></a>

```java
public LinuxVirtualMachineBootDiagnostics getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineBootDiagnostics">LinuxVirtualMachineBootDiagnostics</a>

---


### LinuxVirtualMachineGalleryApplicationList <a name="LinuxVirtualMachineGalleryApplicationList" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineGalleryApplicationList;

new LinuxVirtualMachineGalleryApplicationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.get"></a>

```java
public LinuxVirtualMachineGalleryApplicationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication">LinuxVirtualMachineGalleryApplication</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication">LinuxVirtualMachineGalleryApplication</a>>

---


### LinuxVirtualMachineGalleryApplicationOutputReference <a name="LinuxVirtualMachineGalleryApplicationOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineGalleryApplicationOutputReference;

new LinuxVirtualMachineGalleryApplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.resetConfigurationBlobUri">resetConfigurationBlobUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.resetTag">resetTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigurationBlobUri` <a name="resetConfigurationBlobUri" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.resetConfigurationBlobUri"></a>

```java
public void resetConfigurationBlobUri()
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.resetTag"></a>

```java
public void resetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.configurationBlobUriInput">configurationBlobUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.tagInput">tagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.versionIdInput">versionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.configurationBlobUri">configurationBlobUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.order">order</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication">LinuxVirtualMachineGalleryApplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configurationBlobUriInput`<sup>Optional</sup> <a name="configurationBlobUriInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.configurationBlobUriInput"></a>

```java
public java.lang.String getConfigurationBlobUriInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.orderInput"></a>

```java
public java.lang.Number getOrderInput();
```

- *Type:* java.lang.Number

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.tagInput"></a>

```java
public java.lang.String getTagInput();
```

- *Type:* java.lang.String

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.versionIdInput"></a>

```java
public java.lang.String getVersionIdInput();
```

- *Type:* java.lang.String

---

##### `configurationBlobUri`<sup>Required</sup> <a name="configurationBlobUri" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.configurationBlobUri"></a>

```java
public java.lang.String getConfigurationBlobUri();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplicationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineGalleryApplication">LinuxVirtualMachineGalleryApplication</a>

---


### LinuxVirtualMachineIdentityOutputReference <a name="LinuxVirtualMachineIdentityOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineIdentityOutputReference;

new LinuxVirtualMachineIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity">LinuxVirtualMachineIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentityOutputReference.property.internalValue"></a>

```java
public LinuxVirtualMachineIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineIdentity">LinuxVirtualMachineIdentity</a>

---


### LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference <a name="LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference;

new LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.resetPlacement">resetPlacement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPlacement` <a name="resetPlacement" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.resetPlacement"></a>

```java
public void resetPlacement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.optionInput">optionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.placementInput">placementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.option">option</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.placement">placement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings">LinuxVirtualMachineOsDiskDiffDiskSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `optionInput`<sup>Optional</sup> <a name="optionInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.optionInput"></a>

```java
public java.lang.String getOptionInput();
```

- *Type:* java.lang.String

---

##### `placementInput`<sup>Optional</sup> <a name="placementInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.placementInput"></a>

```java
public java.lang.String getPlacementInput();
```

- *Type:* java.lang.String

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.option"></a>

```java
public java.lang.String getOption();
```

- *Type:* java.lang.String

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.placement"></a>

```java
public java.lang.String getPlacement();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference.property.internalValue"></a>

```java
public LinuxVirtualMachineOsDiskDiffDiskSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings">LinuxVirtualMachineOsDiskDiffDiskSettings</a>

---


### LinuxVirtualMachineOsDiskOutputReference <a name="LinuxVirtualMachineOsDiskOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineOsDiskOutputReference;

new LinuxVirtualMachineOsDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.putDiffDiskSettings">putDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetDiffDiskSettings">resetDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetDiskEncryptionSetId">resetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetSecureVmDiskEncryptionSetId">resetSecureVmDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetSecurityEncryptionType">resetSecurityEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetWriteAcceleratorEnabled">resetWriteAcceleratorEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDiffDiskSettings` <a name="putDiffDiskSettings" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.putDiffDiskSettings"></a>

```java
public void putDiffDiskSettings(LinuxVirtualMachineOsDiskDiffDiskSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.putDiffDiskSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings">LinuxVirtualMachineOsDiskDiffDiskSettings</a>

---

##### `resetDiffDiskSettings` <a name="resetDiffDiskSettings" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetDiffDiskSettings"></a>

```java
public void resetDiffDiskSettings()
```

##### `resetDiskEncryptionSetId` <a name="resetDiskEncryptionSetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetDiskEncryptionSetId"></a>

```java
public void resetDiskEncryptionSetId()
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetSecureVmDiskEncryptionSetId` <a name="resetSecureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetSecureVmDiskEncryptionSetId"></a>

```java
public void resetSecureVmDiskEncryptionSetId()
```

##### `resetSecurityEncryptionType` <a name="resetSecurityEncryptionType" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetSecurityEncryptionType"></a>

```java
public void resetSecurityEncryptionType()
```

##### `resetWriteAcceleratorEnabled` <a name="resetWriteAcceleratorEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.resetWriteAcceleratorEnabled"></a>

```java
public void resetWriteAcceleratorEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diffDiskSettings">diffDiskSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference">LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.cachingInput">cachingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diffDiskSettingsInput">diffDiskSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings">LinuxVirtualMachineOsDiskDiffDiskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diskEncryptionSetIdInput">diskEncryptionSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.secureVmDiskEncryptionSetIdInput">secureVmDiskEncryptionSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.securityEncryptionTypeInput">securityEncryptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.storageAccountTypeInput">storageAccountTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabledInput">writeAcceleratorEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.caching">caching</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.secureVmDiskEncryptionSetId">secureVmDiskEncryptionSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.securityEncryptionType">securityEncryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabled">writeAcceleratorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diffDiskSettings`<sup>Required</sup> <a name="diffDiskSettings" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diffDiskSettings"></a>

```java
public LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference getDiffDiskSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference">LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference</a>

---

##### `cachingInput`<sup>Optional</sup> <a name="cachingInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.cachingInput"></a>

```java
public java.lang.String getCachingInput();
```

- *Type:* java.lang.String

---

##### `diffDiskSettingsInput`<sup>Optional</sup> <a name="diffDiskSettingsInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diffDiskSettingsInput"></a>

```java
public LinuxVirtualMachineOsDiskDiffDiskSettings getDiffDiskSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskDiffDiskSettings">LinuxVirtualMachineOsDiskDiffDiskSettings</a>

---

##### `diskEncryptionSetIdInput`<sup>Optional</sup> <a name="diskEncryptionSetIdInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diskEncryptionSetIdInput"></a>

```java
public java.lang.String getDiskEncryptionSetIdInput();
```

- *Type:* java.lang.String

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diskSizeGbInput"></a>

```java
public java.lang.Number getDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `secureVmDiskEncryptionSetIdInput`<sup>Optional</sup> <a name="secureVmDiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.secureVmDiskEncryptionSetIdInput"></a>

```java
public java.lang.String getSecureVmDiskEncryptionSetIdInput();
```

- *Type:* java.lang.String

---

##### `securityEncryptionTypeInput`<sup>Optional</sup> <a name="securityEncryptionTypeInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.securityEncryptionTypeInput"></a>

```java
public java.lang.String getSecurityEncryptionTypeInput();
```

- *Type:* java.lang.String

---

##### `storageAccountTypeInput`<sup>Optional</sup> <a name="storageAccountTypeInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.storageAccountTypeInput"></a>

```java
public java.lang.String getStorageAccountTypeInput();
```

- *Type:* java.lang.String

---

##### `writeAcceleratorEnabledInput`<sup>Optional</sup> <a name="writeAcceleratorEnabledInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabledInput"></a>

```java
public java.lang.Object getWriteAcceleratorEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.caching"></a>

```java
public java.lang.String getCaching();
```

- *Type:* java.lang.String

---

##### `diskEncryptionSetId`<sup>Required</sup> <a name="diskEncryptionSetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diskEncryptionSetId"></a>

```java
public java.lang.String getDiskEncryptionSetId();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `secureVmDiskEncryptionSetId`<sup>Required</sup> <a name="secureVmDiskEncryptionSetId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.secureVmDiskEncryptionSetId"></a>

```java
public java.lang.String getSecureVmDiskEncryptionSetId();
```

- *Type:* java.lang.String

---

##### `securityEncryptionType`<sup>Required</sup> <a name="securityEncryptionType" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.securityEncryptionType"></a>

```java
public java.lang.String getSecurityEncryptionType();
```

- *Type:* java.lang.String

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.storageAccountType"></a>

```java
public java.lang.String getStorageAccountType();
```

- *Type:* java.lang.String

---

##### `writeAcceleratorEnabled`<sup>Required</sup> <a name="writeAcceleratorEnabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.writeAcceleratorEnabled"></a>

```java
public java.lang.Object getWriteAcceleratorEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDiskOutputReference.property.internalValue"></a>

```java
public LinuxVirtualMachineOsDisk getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineOsDisk">LinuxVirtualMachineOsDisk</a>

---


### LinuxVirtualMachinePlanOutputReference <a name="LinuxVirtualMachinePlanOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachinePlanOutputReference;

new LinuxVirtualMachinePlanOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.productInput">productInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.publisherInput">publisherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.product">product</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.productInput"></a>

```java
public java.lang.String getProductInput();
```

- *Type:* java.lang.String

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.publisherInput"></a>

```java
public java.lang.String getPublisherInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlanOutputReference.property.internalValue"></a>

```java
public LinuxVirtualMachinePlan getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachinePlan">LinuxVirtualMachinePlan</a>

---


### LinuxVirtualMachineSecretCertificateList <a name="LinuxVirtualMachineSecretCertificateList" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineSecretCertificateList;

new LinuxVirtualMachineSecretCertificateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.get"></a>

```java
public LinuxVirtualMachineSecretCertificateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate">LinuxVirtualMachineSecretCertificate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate">LinuxVirtualMachineSecretCertificate</a>>

---


### LinuxVirtualMachineSecretCertificateOutputReference <a name="LinuxVirtualMachineSecretCertificateOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineSecretCertificateOutputReference;

new LinuxVirtualMachineSecretCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate">LinuxVirtualMachineSecretCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate">LinuxVirtualMachineSecretCertificate</a>

---


### LinuxVirtualMachineSecretList <a name="LinuxVirtualMachineSecretList" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineSecretList;

new LinuxVirtualMachineSecretList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.get"></a>

```java
public LinuxVirtualMachineSecretOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecret">LinuxVirtualMachineSecret</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecret">LinuxVirtualMachineSecret</a>>

---


### LinuxVirtualMachineSecretOutputReference <a name="LinuxVirtualMachineSecretOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineSecretOutputReference;

new LinuxVirtualMachineSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.putCertificate">putCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificate` <a name="putCertificate" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.putCertificate"></a>

```java
public void putCertificate(IResolvable OR java.util.List<LinuxVirtualMachineSecretCertificate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.putCertificate.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate">LinuxVirtualMachineSecretCertificate</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList">LinuxVirtualMachineSecretCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.certificateInput">certificateInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate">LinuxVirtualMachineSecretCertificate</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecret">LinuxVirtualMachineSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.certificate"></a>

```java
public LinuxVirtualMachineSecretCertificateList getCertificate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificateList">LinuxVirtualMachineSecretCertificateList</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.certificateInput"></a>

```java
public java.lang.Object getCertificateInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretCertificate">LinuxVirtualMachineSecretCertificate</a>>

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.keyVaultIdInput"></a>

```java
public java.lang.String getKeyVaultIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecretOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSecret">LinuxVirtualMachineSecret</a>

---


### LinuxVirtualMachineSourceImageReferenceOutputReference <a name="LinuxVirtualMachineSourceImageReferenceOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineSourceImageReferenceOutputReference;

new LinuxVirtualMachineSourceImageReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.offerInput">offerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.publisherInput">publisherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.offer">offer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `offerInput`<sup>Optional</sup> <a name="offerInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.offerInput"></a>

```java
public java.lang.String getOfferInput();
```

- *Type:* java.lang.String

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.publisherInput"></a>

```java
public java.lang.String getPublisherInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReferenceOutputReference.property.internalValue"></a>

```java
public LinuxVirtualMachineSourceImageReference getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineSourceImageReference">LinuxVirtualMachineSourceImageReference</a>

---


### LinuxVirtualMachineTerminationNotificationOutputReference <a name="LinuxVirtualMachineTerminationNotificationOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineTerminationNotificationOutputReference;

new LinuxVirtualMachineTerminationNotificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.timeout">timeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification">LinuxVirtualMachineTerminationNotification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.timeoutInput"></a>

```java
public java.lang.String getTimeoutInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotificationOutputReference.property.internalValue"></a>

```java
public LinuxVirtualMachineTerminationNotification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTerminationNotification">LinuxVirtualMachineTerminationNotification</a>

---


### LinuxVirtualMachineTimeoutsOutputReference <a name="LinuxVirtualMachineTimeoutsOutputReference" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.linux_virtual_machine.LinuxVirtualMachineTimeoutsOutputReference;

new LinuxVirtualMachineTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts">LinuxVirtualMachineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.linuxVirtualMachine.LinuxVirtualMachineTimeouts">LinuxVirtualMachineTimeouts</a>

---



