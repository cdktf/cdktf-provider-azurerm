// https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WindowsVirtualMachineScaleSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#admin_password WindowsVirtualMachineScaleSet#admin_password}
  */
  readonly adminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#admin_username WindowsVirtualMachineScaleSet#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#computer_name_prefix WindowsVirtualMachineScaleSet#computer_name_prefix}
  */
  readonly computerNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#custom_data WindowsVirtualMachineScaleSet#custom_data}
  */
  readonly customData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#do_not_run_extensions_on_overprovisioned_machines WindowsVirtualMachineScaleSet#do_not_run_extensions_on_overprovisioned_machines}
  */
  readonly doNotRunExtensionsOnOverprovisionedMachines?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#enable_automatic_updates WindowsVirtualMachineScaleSet#enable_automatic_updates}
  */
  readonly enableAutomaticUpdates?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#encryption_at_host_enabled WindowsVirtualMachineScaleSet#encryption_at_host_enabled}
  */
  readonly encryptionAtHostEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#eviction_policy WindowsVirtualMachineScaleSet#eviction_policy}
  */
  readonly evictionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#extensions_time_budget WindowsVirtualMachineScaleSet#extensions_time_budget}
  */
  readonly extensionsTimeBudget?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#health_probe_id WindowsVirtualMachineScaleSet#health_probe_id}
  */
  readonly healthProbeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#instances WindowsVirtualMachineScaleSet#instances}
  */
  readonly instances: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#license_type WindowsVirtualMachineScaleSet#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#location WindowsVirtualMachineScaleSet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#max_bid_price WindowsVirtualMachineScaleSet#max_bid_price}
  */
  readonly maxBidPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#name WindowsVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#overprovision WindowsVirtualMachineScaleSet#overprovision}
  */
  readonly overprovision?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#platform_fault_domain_count WindowsVirtualMachineScaleSet#platform_fault_domain_count}
  */
  readonly platformFaultDomainCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#priority WindowsVirtualMachineScaleSet#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#provision_vm_agent WindowsVirtualMachineScaleSet#provision_vm_agent}
  */
  readonly provisionVmAgent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#proximity_placement_group_id WindowsVirtualMachineScaleSet#proximity_placement_group_id}
  */
  readonly proximityPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#resource_group_name WindowsVirtualMachineScaleSet#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#scale_in_policy WindowsVirtualMachineScaleSet#scale_in_policy}
  */
  readonly scaleInPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#secure_boot_enabled WindowsVirtualMachineScaleSet#secure_boot_enabled}
  */
  readonly secureBootEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#single_placement_group WindowsVirtualMachineScaleSet#single_placement_group}
  */
  readonly singlePlacementGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#sku WindowsVirtualMachineScaleSet#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#source_image_id WindowsVirtualMachineScaleSet#source_image_id}
  */
  readonly sourceImageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#tags WindowsVirtualMachineScaleSet#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#timezone WindowsVirtualMachineScaleSet#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#upgrade_mode WindowsVirtualMachineScaleSet#upgrade_mode}
  */
  readonly upgradeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#vtpm_enabled WindowsVirtualMachineScaleSet#vtpm_enabled}
  */
  readonly vtpmEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#zone_balance WindowsVirtualMachineScaleSet#zone_balance}
  */
  readonly zoneBalance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#zones WindowsVirtualMachineScaleSet#zones}
  */
  readonly zones?: string[];
  /**
  * additional_capabilities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#additional_capabilities WindowsVirtualMachineScaleSet#additional_capabilities}
  */
  readonly additionalCapabilities?: WindowsVirtualMachineScaleSetAdditionalCapabilities;
  /**
  * additional_unattend_content block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#additional_unattend_content WindowsVirtualMachineScaleSet#additional_unattend_content}
  */
  readonly additionalUnattendContent?: WindowsVirtualMachineScaleSetAdditionalUnattendContent[];
  /**
  * automatic_instance_repair block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#automatic_instance_repair WindowsVirtualMachineScaleSet#automatic_instance_repair}
  */
  readonly automaticInstanceRepair?: WindowsVirtualMachineScaleSetAutomaticInstanceRepair;
  /**
  * automatic_os_upgrade_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#automatic_os_upgrade_policy WindowsVirtualMachineScaleSet#automatic_os_upgrade_policy}
  */
  readonly automaticOsUpgradePolicy?: WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy;
  /**
  * boot_diagnostics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#boot_diagnostics WindowsVirtualMachineScaleSet#boot_diagnostics}
  */
  readonly bootDiagnostics?: WindowsVirtualMachineScaleSetBootDiagnostics;
  /**
  * data_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#data_disk WindowsVirtualMachineScaleSet#data_disk}
  */
  readonly dataDisk?: WindowsVirtualMachineScaleSetDataDisk[];
  /**
  * extension block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#extension WindowsVirtualMachineScaleSet#extension}
  */
  readonly extension?: WindowsVirtualMachineScaleSetExtension[];
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#identity WindowsVirtualMachineScaleSet#identity}
  */
  readonly identity?: WindowsVirtualMachineScaleSetIdentity;
  /**
  * network_interface block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#network_interface WindowsVirtualMachineScaleSet#network_interface}
  */
  readonly networkInterface: WindowsVirtualMachineScaleSetNetworkInterface[];
  /**
  * os_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#os_disk WindowsVirtualMachineScaleSet#os_disk}
  */
  readonly osDisk: WindowsVirtualMachineScaleSetOsDisk;
  /**
  * plan block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#plan WindowsVirtualMachineScaleSet#plan}
  */
  readonly plan?: WindowsVirtualMachineScaleSetPlan;
  /**
  * rolling_upgrade_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#rolling_upgrade_policy WindowsVirtualMachineScaleSet#rolling_upgrade_policy}
  */
  readonly rollingUpgradePolicy?: WindowsVirtualMachineScaleSetRollingUpgradePolicy;
  /**
  * secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#secret WindowsVirtualMachineScaleSet#secret}
  */
  readonly secret?: WindowsVirtualMachineScaleSetSecret[];
  /**
  * source_image_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#source_image_reference WindowsVirtualMachineScaleSet#source_image_reference}
  */
  readonly sourceImageReference?: WindowsVirtualMachineScaleSetSourceImageReference;
  /**
  * terminate_notification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#terminate_notification WindowsVirtualMachineScaleSet#terminate_notification}
  */
  readonly terminateNotification?: WindowsVirtualMachineScaleSetTerminateNotification;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#timeouts WindowsVirtualMachineScaleSet#timeouts}
  */
  readonly timeouts?: WindowsVirtualMachineScaleSetTimeouts;
  /**
  * winrm_listener block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#winrm_listener WindowsVirtualMachineScaleSet#winrm_listener}
  */
  readonly winrmListener?: WindowsVirtualMachineScaleSetWinrmListener[];
}
export interface WindowsVirtualMachineScaleSetAdditionalCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#ultra_ssd_enabled WindowsVirtualMachineScaleSet#ultra_ssd_enabled}
  */
  readonly ultraSsdEnabled?: boolean | cdktf.IResolvable;
}

function windowsVirtualMachineScaleSetAdditionalCapabilitiesToTerraform(struct?: WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference | WindowsVirtualMachineScaleSetAdditionalCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ultra_ssd_enabled: cdktf.booleanToTerraform(struct!.ultraSsdEnabled),
  }
}

export class WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // ultra_ssd_enabled - computed: false, optional: true, required: false
  private _ultraSsdEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get ultraSsdEnabled() {
    return this.getBooleanAttribute('ultra_ssd_enabled') as any;
  }
  public set ultraSsdEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._ultraSsdEnabled = value;
  }
  public resetUltraSsdEnabled() {
    this._ultraSsdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ultraSsdEnabledInput() {
    return this._ultraSsdEnabled
  }
}
export interface WindowsVirtualMachineScaleSetAdditionalUnattendContent {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#content WindowsVirtualMachineScaleSet#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#setting WindowsVirtualMachineScaleSet#setting}
  */
  readonly setting: string;
}

function windowsVirtualMachineScaleSetAdditionalUnattendContentToTerraform(struct?: WindowsVirtualMachineScaleSetAdditionalUnattendContent): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    setting: cdktf.stringToTerraform(struct!.setting),
  }
}

export interface WindowsVirtualMachineScaleSetAutomaticInstanceRepair {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#enabled WindowsVirtualMachineScaleSet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#grace_period WindowsVirtualMachineScaleSet#grace_period}
  */
  readonly gracePeriod?: string;
}

function windowsVirtualMachineScaleSetAutomaticInstanceRepairToTerraform(struct?: WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference | WindowsVirtualMachineScaleSetAutomaticInstanceRepair): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    grace_period: cdktf.stringToTerraform(struct!.gracePeriod),
  }
}

export class WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: string | undefined; 
  public get gracePeriod() {
    return this.getStringAttribute('grace_period');
  }
  public set gracePeriod(value: string | undefined) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod
  }
}
export interface WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#disable_automatic_rollback WindowsVirtualMachineScaleSet#disable_automatic_rollback}
  */
  readonly disableAutomaticRollback: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#enable_automatic_os_upgrade WindowsVirtualMachineScaleSet#enable_automatic_os_upgrade}
  */
  readonly enableAutomaticOsUpgrade: boolean | cdktf.IResolvable;
}

function windowsVirtualMachineScaleSetAutomaticOsUpgradePolicyToTerraform(struct?: WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference | WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_automatic_rollback: cdktf.booleanToTerraform(struct!.disableAutomaticRollback),
    enable_automatic_os_upgrade: cdktf.booleanToTerraform(struct!.enableAutomaticOsUpgrade),
  }
}

export class WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // disable_automatic_rollback - computed: false, optional: false, required: true
  private _disableAutomaticRollback?: boolean | cdktf.IResolvable; 
  public get disableAutomaticRollback() {
    return this.getBooleanAttribute('disable_automatic_rollback') as any;
  }
  public set disableAutomaticRollback(value: boolean | cdktf.IResolvable) {
    this._disableAutomaticRollback = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutomaticRollbackInput() {
    return this._disableAutomaticRollback
  }

  // enable_automatic_os_upgrade - computed: false, optional: false, required: true
  private _enableAutomaticOsUpgrade?: boolean | cdktf.IResolvable; 
  public get enableAutomaticOsUpgrade() {
    return this.getBooleanAttribute('enable_automatic_os_upgrade') as any;
  }
  public set enableAutomaticOsUpgrade(value: boolean | cdktf.IResolvable) {
    this._enableAutomaticOsUpgrade = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomaticOsUpgradeInput() {
    return this._enableAutomaticOsUpgrade
  }
}
export interface WindowsVirtualMachineScaleSetBootDiagnostics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#storage_account_uri WindowsVirtualMachineScaleSet#storage_account_uri}
  */
  readonly storageAccountUri?: string;
}

function windowsVirtualMachineScaleSetBootDiagnosticsToTerraform(struct?: WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference | WindowsVirtualMachineScaleSetBootDiagnostics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_account_uri: cdktf.stringToTerraform(struct!.storageAccountUri),
  }
}

export class WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // storage_account_uri - computed: false, optional: true, required: false
  private _storageAccountUri?: string | undefined; 
  public get storageAccountUri() {
    return this.getStringAttribute('storage_account_uri');
  }
  public set storageAccountUri(value: string | undefined) {
    this._storageAccountUri = value;
  }
  public resetStorageAccountUri() {
    this._storageAccountUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountUriInput() {
    return this._storageAccountUri
  }
}
export interface WindowsVirtualMachineScaleSetDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#caching WindowsVirtualMachineScaleSet#caching}
  */
  readonly caching: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#create_option WindowsVirtualMachineScaleSet#create_option}
  */
  readonly createOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#disk_encryption_set_id WindowsVirtualMachineScaleSet#disk_encryption_set_id}
  */
  readonly diskEncryptionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#disk_iops_read_write WindowsVirtualMachineScaleSet#disk_iops_read_write}
  */
  readonly diskIopsReadWrite?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#disk_mbps_read_write WindowsVirtualMachineScaleSet#disk_mbps_read_write}
  */
  readonly diskMbpsReadWrite?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#disk_size_gb WindowsVirtualMachineScaleSet#disk_size_gb}
  */
  readonly diskSizeGb: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#lun WindowsVirtualMachineScaleSet#lun}
  */
  readonly lun: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#storage_account_type WindowsVirtualMachineScaleSet#storage_account_type}
  */
  readonly storageAccountType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#write_accelerator_enabled WindowsVirtualMachineScaleSet#write_accelerator_enabled}
  */
  readonly writeAcceleratorEnabled?: boolean | cdktf.IResolvable;
}

function windowsVirtualMachineScaleSetDataDiskToTerraform(struct?: WindowsVirtualMachineScaleSetDataDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    create_option: cdktf.stringToTerraform(struct!.createOption),
    disk_encryption_set_id: cdktf.stringToTerraform(struct!.diskEncryptionSetId),
    disk_iops_read_write: cdktf.numberToTerraform(struct!.diskIopsReadWrite),
    disk_mbps_read_write: cdktf.numberToTerraform(struct!.diskMbpsReadWrite),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    lun: cdktf.numberToTerraform(struct!.lun),
    storage_account_type: cdktf.stringToTerraform(struct!.storageAccountType),
    write_accelerator_enabled: cdktf.booleanToTerraform(struct!.writeAcceleratorEnabled),
  }
}

export interface WindowsVirtualMachineScaleSetExtension {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#auto_upgrade_minor_version WindowsVirtualMachineScaleSet#auto_upgrade_minor_version}
  */
  readonly autoUpgradeMinorVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#automatic_upgrade_enabled WindowsVirtualMachineScaleSet#automatic_upgrade_enabled}
  */
  readonly automaticUpgradeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#force_update_tag WindowsVirtualMachineScaleSet#force_update_tag}
  */
  readonly forceUpdateTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#name WindowsVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#protected_settings WindowsVirtualMachineScaleSet#protected_settings}
  */
  readonly protectedSettings?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#provision_after_extensions WindowsVirtualMachineScaleSet#provision_after_extensions}
  */
  readonly provisionAfterExtensions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#publisher WindowsVirtualMachineScaleSet#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#settings WindowsVirtualMachineScaleSet#settings}
  */
  readonly settings?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#type WindowsVirtualMachineScaleSet#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#type_handler_version WindowsVirtualMachineScaleSet#type_handler_version}
  */
  readonly typeHandlerVersion: string;
}

function windowsVirtualMachineScaleSetExtensionToTerraform(struct?: WindowsVirtualMachineScaleSetExtension): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_upgrade_minor_version: cdktf.booleanToTerraform(struct!.autoUpgradeMinorVersion),
    automatic_upgrade_enabled: cdktf.booleanToTerraform(struct!.automaticUpgradeEnabled),
    force_update_tag: cdktf.stringToTerraform(struct!.forceUpdateTag),
    name: cdktf.stringToTerraform(struct!.name),
    protected_settings: cdktf.stringToTerraform(struct!.protectedSettings),
    provision_after_extensions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.provisionAfterExtensions),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    settings: cdktf.stringToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
    type_handler_version: cdktf.stringToTerraform(struct!.typeHandlerVersion),
  }
}

export interface WindowsVirtualMachineScaleSetIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#identity_ids WindowsVirtualMachineScaleSet#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#type WindowsVirtualMachineScaleSet#type}
  */
  readonly type: string;
}

function windowsVirtualMachineScaleSetIdentityToTerraform(struct?: WindowsVirtualMachineScaleSetIdentityOutputReference | WindowsVirtualMachineScaleSetIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class WindowsVirtualMachineScaleSetIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[] | undefined; 
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }
  public set identityIds(value: string[] | undefined) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#tag WindowsVirtualMachineScaleSet#tag}
  */
  readonly tag: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#type WindowsVirtualMachineScaleSet#type}
  */
  readonly type: string;
}

function windowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagToTerraform(struct?: WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#domain_name_label WindowsVirtualMachineScaleSet#domain_name_label}
  */
  readonly domainNameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#idle_timeout_in_minutes WindowsVirtualMachineScaleSet#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#name WindowsVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#public_ip_prefix_id WindowsVirtualMachineScaleSet#public_ip_prefix_id}
  */
  readonly publicIpPrefixId?: string;
  /**
  * ip_tag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#ip_tag WindowsVirtualMachineScaleSet#ip_tag}
  */
  readonly ipTag?: WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag[];
}

function windowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressToTerraform(struct?: WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name_label: cdktf.stringToTerraform(struct!.domainNameLabel),
    idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.idleTimeoutInMinutes),
    name: cdktf.stringToTerraform(struct!.name),
    public_ip_prefix_id: cdktf.stringToTerraform(struct!.publicIpPrefixId),
    ip_tag: cdktf.listMapper(windowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagToTerraform)(struct!.ipTag),
  }
}

export interface WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#application_gateway_backend_address_pool_ids WindowsVirtualMachineScaleSet#application_gateway_backend_address_pool_ids}
  */
  readonly applicationGatewayBackendAddressPoolIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#application_security_group_ids WindowsVirtualMachineScaleSet#application_security_group_ids}
  */
  readonly applicationSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#load_balancer_backend_address_pool_ids WindowsVirtualMachineScaleSet#load_balancer_backend_address_pool_ids}
  */
  readonly loadBalancerBackendAddressPoolIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#load_balancer_inbound_nat_rules_ids WindowsVirtualMachineScaleSet#load_balancer_inbound_nat_rules_ids}
  */
  readonly loadBalancerInboundNatRulesIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#name WindowsVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#primary WindowsVirtualMachineScaleSet#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#subnet_id WindowsVirtualMachineScaleSet#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#version WindowsVirtualMachineScaleSet#version}
  */
  readonly version?: string;
  /**
  * public_ip_address block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#public_ip_address WindowsVirtualMachineScaleSet#public_ip_address}
  */
  readonly publicIpAddress?: WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress[];
}

function windowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationToTerraform(struct?: WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_gateway_backend_address_pool_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.applicationGatewayBackendAddressPoolIds),
    application_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.applicationSecurityGroupIds),
    load_balancer_backend_address_pool_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.loadBalancerBackendAddressPoolIds),
    load_balancer_inbound_nat_rules_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.loadBalancerInboundNatRulesIds),
    name: cdktf.stringToTerraform(struct!.name),
    primary: cdktf.booleanToTerraform(struct!.primary),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    version: cdktf.stringToTerraform(struct!.version),
    public_ip_address: cdktf.listMapper(windowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressToTerraform)(struct!.publicIpAddress),
  }
}

export interface WindowsVirtualMachineScaleSetNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#dns_servers WindowsVirtualMachineScaleSet#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#enable_accelerated_networking WindowsVirtualMachineScaleSet#enable_accelerated_networking}
  */
  readonly enableAcceleratedNetworking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#enable_ip_forwarding WindowsVirtualMachineScaleSet#enable_ip_forwarding}
  */
  readonly enableIpForwarding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#name WindowsVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#network_security_group_id WindowsVirtualMachineScaleSet#network_security_group_id}
  */
  readonly networkSecurityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#primary WindowsVirtualMachineScaleSet#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * ip_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#ip_configuration WindowsVirtualMachineScaleSet#ip_configuration}
  */
  readonly ipConfiguration: WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration[];
}

function windowsVirtualMachineScaleSetNetworkInterfaceToTerraform(struct?: WindowsVirtualMachineScaleSetNetworkInterface): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dnsServers),
    enable_accelerated_networking: cdktf.booleanToTerraform(struct!.enableAcceleratedNetworking),
    enable_ip_forwarding: cdktf.booleanToTerraform(struct!.enableIpForwarding),
    name: cdktf.stringToTerraform(struct!.name),
    network_security_group_id: cdktf.stringToTerraform(struct!.networkSecurityGroupId),
    primary: cdktf.booleanToTerraform(struct!.primary),
    ip_configuration: cdktf.listMapper(windowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationToTerraform)(struct!.ipConfiguration),
  }
}

export interface WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#option WindowsVirtualMachineScaleSet#option}
  */
  readonly option: string;
}

function windowsVirtualMachineScaleSetOsDiskDiffDiskSettingsToTerraform(struct?: WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference | WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    option: cdktf.stringToTerraform(struct!.option),
  }
}

export class WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // option - computed: false, optional: false, required: true
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option
  }
}
export interface WindowsVirtualMachineScaleSetOsDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#caching WindowsVirtualMachineScaleSet#caching}
  */
  readonly caching: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#disk_encryption_set_id WindowsVirtualMachineScaleSet#disk_encryption_set_id}
  */
  readonly diskEncryptionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#disk_size_gb WindowsVirtualMachineScaleSet#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#storage_account_type WindowsVirtualMachineScaleSet#storage_account_type}
  */
  readonly storageAccountType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#write_accelerator_enabled WindowsVirtualMachineScaleSet#write_accelerator_enabled}
  */
  readonly writeAcceleratorEnabled?: boolean | cdktf.IResolvable;
  /**
  * diff_disk_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#diff_disk_settings WindowsVirtualMachineScaleSet#diff_disk_settings}
  */
  readonly diffDiskSettings?: WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings;
}

function windowsVirtualMachineScaleSetOsDiskToTerraform(struct?: WindowsVirtualMachineScaleSetOsDiskOutputReference | WindowsVirtualMachineScaleSetOsDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    disk_encryption_set_id: cdktf.stringToTerraform(struct!.diskEncryptionSetId),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    storage_account_type: cdktf.stringToTerraform(struct!.storageAccountType),
    write_accelerator_enabled: cdktf.booleanToTerraform(struct!.writeAcceleratorEnabled),
    diff_disk_settings: windowsVirtualMachineScaleSetOsDiskDiffDiskSettingsToTerraform(struct!.diffDiskSettings),
  }
}

export class WindowsVirtualMachineScaleSetOsDiskOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // caching - computed: false, optional: false, required: true
  private _caching?: string; 
  public get caching() {
    return this.getStringAttribute('caching');
  }
  public set caching(value: string) {
    this._caching = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingInput() {
    return this._caching
  }

  // disk_encryption_set_id - computed: false, optional: true, required: false
  private _diskEncryptionSetId?: string | undefined; 
  public get diskEncryptionSetId() {
    return this.getStringAttribute('disk_encryption_set_id');
  }
  public set diskEncryptionSetId(value: string | undefined) {
    this._diskEncryptionSetId = value;
  }
  public resetDiskEncryptionSetId() {
    this._diskEncryptionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetIdInput() {
    return this._diskEncryptionSetId
  }

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: number | undefined; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number | undefined) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb
  }

  // storage_account_type - computed: false, optional: false, required: true
  private _storageAccountType?: string; 
  public get storageAccountType() {
    return this.getStringAttribute('storage_account_type');
  }
  public set storageAccountType(value: string) {
    this._storageAccountType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountTypeInput() {
    return this._storageAccountType
  }

  // write_accelerator_enabled - computed: false, optional: true, required: false
  private _writeAcceleratorEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get writeAcceleratorEnabled() {
    return this.getBooleanAttribute('write_accelerator_enabled') as any;
  }
  public set writeAcceleratorEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._writeAcceleratorEnabled = value;
  }
  public resetWriteAcceleratorEnabled() {
    this._writeAcceleratorEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeAcceleratorEnabledInput() {
    return this._writeAcceleratorEnabled
  }

  // diff_disk_settings - computed: false, optional: true, required: false
  private _diffDiskSettings?: WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings | undefined; 
  private __diffDiskSettingsOutput = new WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference(this as any, "diff_disk_settings", true);
  public get diffDiskSettings() {
    return this.__diffDiskSettingsOutput;
  }
  public putDiffDiskSettings(value: WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings | undefined) {
    this._diffDiskSettings = value;
  }
  public resetDiffDiskSettings() {
    this._diffDiskSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffDiskSettingsInput() {
    return this._diffDiskSettings
  }
}
export interface WindowsVirtualMachineScaleSetPlan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#name WindowsVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#product WindowsVirtualMachineScaleSet#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#publisher WindowsVirtualMachineScaleSet#publisher}
  */
  readonly publisher: string;
}

function windowsVirtualMachineScaleSetPlanToTerraform(struct?: WindowsVirtualMachineScaleSetPlanOutputReference | WindowsVirtualMachineScaleSetPlan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.stringToTerraform(struct!.product),
    publisher: cdktf.stringToTerraform(struct!.publisher),
  }
}

export class WindowsVirtualMachineScaleSetPlanOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher
  }
}
export interface WindowsVirtualMachineScaleSetRollingUpgradePolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#max_batch_instance_percent WindowsVirtualMachineScaleSet#max_batch_instance_percent}
  */
  readonly maxBatchInstancePercent: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#max_unhealthy_instance_percent WindowsVirtualMachineScaleSet#max_unhealthy_instance_percent}
  */
  readonly maxUnhealthyInstancePercent: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#max_unhealthy_upgraded_instance_percent WindowsVirtualMachineScaleSet#max_unhealthy_upgraded_instance_percent}
  */
  readonly maxUnhealthyUpgradedInstancePercent: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#pause_time_between_batches WindowsVirtualMachineScaleSet#pause_time_between_batches}
  */
  readonly pauseTimeBetweenBatches: string;
}

function windowsVirtualMachineScaleSetRollingUpgradePolicyToTerraform(struct?: WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference | WindowsVirtualMachineScaleSetRollingUpgradePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_batch_instance_percent: cdktf.numberToTerraform(struct!.maxBatchInstancePercent),
    max_unhealthy_instance_percent: cdktf.numberToTerraform(struct!.maxUnhealthyInstancePercent),
    max_unhealthy_upgraded_instance_percent: cdktf.numberToTerraform(struct!.maxUnhealthyUpgradedInstancePercent),
    pause_time_between_batches: cdktf.stringToTerraform(struct!.pauseTimeBetweenBatches),
  }
}

export class WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max_batch_instance_percent - computed: false, optional: false, required: true
  private _maxBatchInstancePercent?: number; 
  public get maxBatchInstancePercent() {
    return this.getNumberAttribute('max_batch_instance_percent');
  }
  public set maxBatchInstancePercent(value: number) {
    this._maxBatchInstancePercent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBatchInstancePercentInput() {
    return this._maxBatchInstancePercent
  }

  // max_unhealthy_instance_percent - computed: false, optional: false, required: true
  private _maxUnhealthyInstancePercent?: number; 
  public get maxUnhealthyInstancePercent() {
    return this.getNumberAttribute('max_unhealthy_instance_percent');
  }
  public set maxUnhealthyInstancePercent(value: number) {
    this._maxUnhealthyInstancePercent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnhealthyInstancePercentInput() {
    return this._maxUnhealthyInstancePercent
  }

  // max_unhealthy_upgraded_instance_percent - computed: false, optional: false, required: true
  private _maxUnhealthyUpgradedInstancePercent?: number; 
  public get maxUnhealthyUpgradedInstancePercent() {
    return this.getNumberAttribute('max_unhealthy_upgraded_instance_percent');
  }
  public set maxUnhealthyUpgradedInstancePercent(value: number) {
    this._maxUnhealthyUpgradedInstancePercent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnhealthyUpgradedInstancePercentInput() {
    return this._maxUnhealthyUpgradedInstancePercent
  }

  // pause_time_between_batches - computed: false, optional: false, required: true
  private _pauseTimeBetweenBatches?: string; 
  public get pauseTimeBetweenBatches() {
    return this.getStringAttribute('pause_time_between_batches');
  }
  public set pauseTimeBetweenBatches(value: string) {
    this._pauseTimeBetweenBatches = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseTimeBetweenBatchesInput() {
    return this._pauseTimeBetweenBatches
  }
}
export interface WindowsVirtualMachineScaleSetSecretCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#store WindowsVirtualMachineScaleSet#store}
  */
  readonly store: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#url WindowsVirtualMachineScaleSet#url}
  */
  readonly url: string;
}

function windowsVirtualMachineScaleSetSecretCertificateToTerraform(struct?: WindowsVirtualMachineScaleSetSecretCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    store: cdktf.stringToTerraform(struct!.store),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface WindowsVirtualMachineScaleSetSecret {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#key_vault_id WindowsVirtualMachineScaleSet#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#certificate WindowsVirtualMachineScaleSet#certificate}
  */
  readonly certificate: WindowsVirtualMachineScaleSetSecretCertificate[];
}

function windowsVirtualMachineScaleSetSecretToTerraform(struct?: WindowsVirtualMachineScaleSetSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    certificate: cdktf.listMapper(windowsVirtualMachineScaleSetSecretCertificateToTerraform)(struct!.certificate),
  }
}

export interface WindowsVirtualMachineScaleSetSourceImageReference {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#offer WindowsVirtualMachineScaleSet#offer}
  */
  readonly offer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#publisher WindowsVirtualMachineScaleSet#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#sku WindowsVirtualMachineScaleSet#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#version WindowsVirtualMachineScaleSet#version}
  */
  readonly version: string;
}

function windowsVirtualMachineScaleSetSourceImageReferenceToTerraform(struct?: WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference | WindowsVirtualMachineScaleSetSourceImageReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // offer - computed: false, optional: false, required: true
  private _offer?: string; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher
  }

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }
}
export interface WindowsVirtualMachineScaleSetTerminateNotification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#enabled WindowsVirtualMachineScaleSet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#timeout WindowsVirtualMachineScaleSet#timeout}
  */
  readonly timeout?: string;
}

function windowsVirtualMachineScaleSetTerminateNotificationToTerraform(struct?: WindowsVirtualMachineScaleSetTerminateNotificationOutputReference | WindowsVirtualMachineScaleSetTerminateNotification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}

export class WindowsVirtualMachineScaleSetTerminateNotificationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string | undefined; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }
}
export interface WindowsVirtualMachineScaleSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#create WindowsVirtualMachineScaleSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#delete WindowsVirtualMachineScaleSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#read WindowsVirtualMachineScaleSet#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#update WindowsVirtualMachineScaleSet#update}
  */
  readonly update?: string;
}

function windowsVirtualMachineScaleSetTimeoutsToTerraform(struct?: WindowsVirtualMachineScaleSetTimeoutsOutputReference | WindowsVirtualMachineScaleSetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class WindowsVirtualMachineScaleSetTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}
export interface WindowsVirtualMachineScaleSetWinrmListener {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#certificate_url WindowsVirtualMachineScaleSet#certificate_url}
  */
  readonly certificateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html#protocol WindowsVirtualMachineScaleSet#protocol}
  */
  readonly protocol: string;
}

function windowsVirtualMachineScaleSetWinrmListenerToTerraform(struct?: WindowsVirtualMachineScaleSetWinrmListener): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html azurerm_windows_virtual_machine_scale_set}
*/
export class WindowsVirtualMachineScaleSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_windows_virtual_machine_scale_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/windows_virtual_machine_scale_set.html azurerm_windows_virtual_machine_scale_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WindowsVirtualMachineScaleSetConfig
  */
  public constructor(scope: Construct, id: string, config: WindowsVirtualMachineScaleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_windows_virtual_machine_scale_set',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminPassword = config.adminPassword;
    this._adminUsername = config.adminUsername;
    this._computerNamePrefix = config.computerNamePrefix;
    this._customData = config.customData;
    this._doNotRunExtensionsOnOverprovisionedMachines = config.doNotRunExtensionsOnOverprovisionedMachines;
    this._enableAutomaticUpdates = config.enableAutomaticUpdates;
    this._encryptionAtHostEnabled = config.encryptionAtHostEnabled;
    this._evictionPolicy = config.evictionPolicy;
    this._extensionsTimeBudget = config.extensionsTimeBudget;
    this._healthProbeId = config.healthProbeId;
    this._instances = config.instances;
    this._licenseType = config.licenseType;
    this._location = config.location;
    this._maxBidPrice = config.maxBidPrice;
    this._name = config.name;
    this._overprovision = config.overprovision;
    this._platformFaultDomainCount = config.platformFaultDomainCount;
    this._priority = config.priority;
    this._provisionVmAgent = config.provisionVmAgent;
    this._proximityPlacementGroupId = config.proximityPlacementGroupId;
    this._resourceGroupName = config.resourceGroupName;
    this._scaleInPolicy = config.scaleInPolicy;
    this._secureBootEnabled = config.secureBootEnabled;
    this._singlePlacementGroup = config.singlePlacementGroup;
    this._sku = config.sku;
    this._sourceImageId = config.sourceImageId;
    this._tags = config.tags;
    this._timezone = config.timezone;
    this._upgradeMode = config.upgradeMode;
    this._vtpmEnabled = config.vtpmEnabled;
    this._zoneBalance = config.zoneBalance;
    this._zones = config.zones;
    this._additionalCapabilities = config.additionalCapabilities;
    this._additionalUnattendContent = config.additionalUnattendContent;
    this._automaticInstanceRepair = config.automaticInstanceRepair;
    this._automaticOsUpgradePolicy = config.automaticOsUpgradePolicy;
    this._bootDiagnostics = config.bootDiagnostics;
    this._dataDisk = config.dataDisk;
    this._extension = config.extension;
    this._identity = config.identity;
    this._networkInterface = config.networkInterface;
    this._osDisk = config.osDisk;
    this._plan = config.plan;
    this._rollingUpgradePolicy = config.rollingUpgradePolicy;
    this._secret = config.secret;
    this._sourceImageReference = config.sourceImageReference;
    this._terminateNotification = config.terminateNotification;
    this._timeouts = config.timeouts;
    this._winrmListener = config.winrmListener;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername
  }

  // computer_name_prefix - computed: true, optional: true, required: false
  private _computerNamePrefix?: string | undefined; 
  public get computerNamePrefix() {
    return this.getStringAttribute('computer_name_prefix');
  }
  public set computerNamePrefix(value: string | undefined) {
    this._computerNamePrefix = value;
  }
  public resetComputerNamePrefix() {
    this._computerNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computerNamePrefixInput() {
    return this._computerNamePrefix
  }

  // custom_data - computed: false, optional: true, required: false
  private _customData?: string | undefined; 
  public get customData() {
    return this.getStringAttribute('custom_data');
  }
  public set customData(value: string | undefined) {
    this._customData = value;
  }
  public resetCustomData() {
    this._customData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataInput() {
    return this._customData
  }

  // do_not_run_extensions_on_overprovisioned_machines - computed: false, optional: true, required: false
  private _doNotRunExtensionsOnOverprovisionedMachines?: boolean | cdktf.IResolvable | undefined; 
  public get doNotRunExtensionsOnOverprovisionedMachines() {
    return this.getBooleanAttribute('do_not_run_extensions_on_overprovisioned_machines') as any;
  }
  public set doNotRunExtensionsOnOverprovisionedMachines(value: boolean | cdktf.IResolvable | undefined) {
    this._doNotRunExtensionsOnOverprovisionedMachines = value;
  }
  public resetDoNotRunExtensionsOnOverprovisionedMachines() {
    this._doNotRunExtensionsOnOverprovisionedMachines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotRunExtensionsOnOverprovisionedMachinesInput() {
    return this._doNotRunExtensionsOnOverprovisionedMachines
  }

  // enable_automatic_updates - computed: false, optional: true, required: false
  private _enableAutomaticUpdates?: boolean | cdktf.IResolvable | undefined; 
  public get enableAutomaticUpdates() {
    return this.getBooleanAttribute('enable_automatic_updates') as any;
  }
  public set enableAutomaticUpdates(value: boolean | cdktf.IResolvable | undefined) {
    this._enableAutomaticUpdates = value;
  }
  public resetEnableAutomaticUpdates() {
    this._enableAutomaticUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomaticUpdatesInput() {
    return this._enableAutomaticUpdates
  }

  // encryption_at_host_enabled - computed: false, optional: true, required: false
  private _encryptionAtHostEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get encryptionAtHostEnabled() {
    return this.getBooleanAttribute('encryption_at_host_enabled') as any;
  }
  public set encryptionAtHostEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._encryptionAtHostEnabled = value;
  }
  public resetEncryptionAtHostEnabled() {
    this._encryptionAtHostEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAtHostEnabledInput() {
    return this._encryptionAtHostEnabled
  }

  // eviction_policy - computed: false, optional: true, required: false
  private _evictionPolicy?: string | undefined; 
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }
  public set evictionPolicy(value: string | undefined) {
    this._evictionPolicy = value;
  }
  public resetEvictionPolicy() {
    this._evictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionPolicyInput() {
    return this._evictionPolicy
  }

  // extensions_time_budget - computed: false, optional: true, required: false
  private _extensionsTimeBudget?: string | undefined; 
  public get extensionsTimeBudget() {
    return this.getStringAttribute('extensions_time_budget');
  }
  public set extensionsTimeBudget(value: string | undefined) {
    this._extensionsTimeBudget = value;
  }
  public resetExtensionsTimeBudget() {
    this._extensionsTimeBudget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsTimeBudgetInput() {
    return this._extensionsTimeBudget
  }

  // health_probe_id - computed: false, optional: true, required: false
  private _healthProbeId?: string | undefined; 
  public get healthProbeId() {
    return this.getStringAttribute('health_probe_id');
  }
  public set healthProbeId(value: string | undefined) {
    this._healthProbeId = value;
  }
  public resetHealthProbeId() {
    this._healthProbeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthProbeIdInput() {
    return this._healthProbeId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instances - computed: false, optional: false, required: true
  private _instances?: number; 
  public get instances() {
    return this.getNumberAttribute('instances');
  }
  public set instances(value: number) {
    this._instances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string | undefined; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string | undefined) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // max_bid_price - computed: false, optional: true, required: false
  private _maxBidPrice?: number | undefined; 
  public get maxBidPrice() {
    return this.getNumberAttribute('max_bid_price');
  }
  public set maxBidPrice(value: number | undefined) {
    this._maxBidPrice = value;
  }
  public resetMaxBidPrice() {
    this._maxBidPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBidPriceInput() {
    return this._maxBidPrice
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // overprovision - computed: false, optional: true, required: false
  private _overprovision?: boolean | cdktf.IResolvable | undefined; 
  public get overprovision() {
    return this.getBooleanAttribute('overprovision') as any;
  }
  public set overprovision(value: boolean | cdktf.IResolvable | undefined) {
    this._overprovision = value;
  }
  public resetOverprovision() {
    this._overprovision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overprovisionInput() {
    return this._overprovision
  }

  // platform_fault_domain_count - computed: true, optional: true, required: false
  private _platformFaultDomainCount?: number | undefined; 
  public get platformFaultDomainCount() {
    return this.getNumberAttribute('platform_fault_domain_count');
  }
  public set platformFaultDomainCount(value: number | undefined) {
    this._platformFaultDomainCount = value;
  }
  public resetPlatformFaultDomainCount() {
    this._platformFaultDomainCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformFaultDomainCountInput() {
    return this._platformFaultDomainCount
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string | undefined; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string | undefined) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
  }

  // provision_vm_agent - computed: false, optional: true, required: false
  private _provisionVmAgent?: boolean | cdktf.IResolvable | undefined; 
  public get provisionVmAgent() {
    return this.getBooleanAttribute('provision_vm_agent') as any;
  }
  public set provisionVmAgent(value: boolean | cdktf.IResolvable | undefined) {
    this._provisionVmAgent = value;
  }
  public resetProvisionVmAgent() {
    this._provisionVmAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionVmAgentInput() {
    return this._provisionVmAgent
  }

  // proximity_placement_group_id - computed: false, optional: true, required: false
  private _proximityPlacementGroupId?: string | undefined; 
  public get proximityPlacementGroupId() {
    return this.getStringAttribute('proximity_placement_group_id');
  }
  public set proximityPlacementGroupId(value: string | undefined) {
    this._proximityPlacementGroupId = value;
  }
  public resetProximityPlacementGroupId() {
    this._proximityPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityPlacementGroupIdInput() {
    return this._proximityPlacementGroupId
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // scale_in_policy - computed: false, optional: true, required: false
  private _scaleInPolicy?: string | undefined; 
  public get scaleInPolicy() {
    return this.getStringAttribute('scale_in_policy');
  }
  public set scaleInPolicy(value: string | undefined) {
    this._scaleInPolicy = value;
  }
  public resetScaleInPolicy() {
    this._scaleInPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInPolicyInput() {
    return this._scaleInPolicy
  }

  // secure_boot_enabled - computed: false, optional: true, required: false
  private _secureBootEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get secureBootEnabled() {
    return this.getBooleanAttribute('secure_boot_enabled') as any;
  }
  public set secureBootEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._secureBootEnabled = value;
  }
  public resetSecureBootEnabled() {
    this._secureBootEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureBootEnabledInput() {
    return this._secureBootEnabled
  }

  // single_placement_group - computed: false, optional: true, required: false
  private _singlePlacementGroup?: boolean | cdktf.IResolvable | undefined; 
  public get singlePlacementGroup() {
    return this.getBooleanAttribute('single_placement_group') as any;
  }
  public set singlePlacementGroup(value: boolean | cdktf.IResolvable | undefined) {
    this._singlePlacementGroup = value;
  }
  public resetSinglePlacementGroup() {
    this._singlePlacementGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singlePlacementGroupInput() {
    return this._singlePlacementGroup
  }

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }

  // source_image_id - computed: false, optional: true, required: false
  private _sourceImageId?: string | undefined; 
  public get sourceImageId() {
    return this.getStringAttribute('source_image_id');
  }
  public set sourceImageId(value: string | undefined) {
    this._sourceImageId = value;
  }
  public resetSourceImageId() {
    this._sourceImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageIdInput() {
    return this._sourceImageId
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string | undefined; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string | undefined) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone
  }

  // unique_id - computed: true, optional: false, required: false
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }

  // upgrade_mode - computed: false, optional: true, required: false
  private _upgradeMode?: string | undefined; 
  public get upgradeMode() {
    return this.getStringAttribute('upgrade_mode');
  }
  public set upgradeMode(value: string | undefined) {
    this._upgradeMode = value;
  }
  public resetUpgradeMode() {
    this._upgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeModeInput() {
    return this._upgradeMode
  }

  // vtpm_enabled - computed: false, optional: true, required: false
  private _vtpmEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get vtpmEnabled() {
    return this.getBooleanAttribute('vtpm_enabled') as any;
  }
  public set vtpmEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._vtpmEnabled = value;
  }
  public resetVtpmEnabled() {
    this._vtpmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtpmEnabledInput() {
    return this._vtpmEnabled
  }

  // zone_balance - computed: false, optional: true, required: false
  private _zoneBalance?: boolean | cdktf.IResolvable | undefined; 
  public get zoneBalance() {
    return this.getBooleanAttribute('zone_balance') as any;
  }
  public set zoneBalance(value: boolean | cdktf.IResolvable | undefined) {
    this._zoneBalance = value;
  }
  public resetZoneBalance() {
    this._zoneBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneBalanceInput() {
    return this._zoneBalance
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[] | undefined; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[] | undefined) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones
  }

  // additional_capabilities - computed: false, optional: true, required: false
  private _additionalCapabilities?: WindowsVirtualMachineScaleSetAdditionalCapabilities | undefined; 
  private __additionalCapabilitiesOutput = new WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference(this as any, "additional_capabilities", true);
  public get additionalCapabilities() {
    return this.__additionalCapabilitiesOutput;
  }
  public putAdditionalCapabilities(value: WindowsVirtualMachineScaleSetAdditionalCapabilities | undefined) {
    this._additionalCapabilities = value;
  }
  public resetAdditionalCapabilities() {
    this._additionalCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalCapabilitiesInput() {
    return this._additionalCapabilities
  }

  // additional_unattend_content - computed: false, optional: true, required: false
  private _additionalUnattendContent?: WindowsVirtualMachineScaleSetAdditionalUnattendContent[] | undefined; 
  public get additionalUnattendContent() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('additional_unattend_content') as any;
  }
  public set additionalUnattendContent(value: WindowsVirtualMachineScaleSetAdditionalUnattendContent[] | undefined) {
    this._additionalUnattendContent = value;
  }
  public resetAdditionalUnattendContent() {
    this._additionalUnattendContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalUnattendContentInput() {
    return this._additionalUnattendContent
  }

  // automatic_instance_repair - computed: false, optional: true, required: false
  private _automaticInstanceRepair?: WindowsVirtualMachineScaleSetAutomaticInstanceRepair | undefined; 
  private __automaticInstanceRepairOutput = new WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference(this as any, "automatic_instance_repair", true);
  public get automaticInstanceRepair() {
    return this.__automaticInstanceRepairOutput;
  }
  public putAutomaticInstanceRepair(value: WindowsVirtualMachineScaleSetAutomaticInstanceRepair | undefined) {
    this._automaticInstanceRepair = value;
  }
  public resetAutomaticInstanceRepair() {
    this._automaticInstanceRepair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInstanceRepairInput() {
    return this._automaticInstanceRepair
  }

  // automatic_os_upgrade_policy - computed: false, optional: true, required: false
  private _automaticOsUpgradePolicy?: WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy | undefined; 
  private __automaticOsUpgradePolicyOutput = new WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference(this as any, "automatic_os_upgrade_policy", true);
  public get automaticOsUpgradePolicy() {
    return this.__automaticOsUpgradePolicyOutput;
  }
  public putAutomaticOsUpgradePolicy(value: WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy | undefined) {
    this._automaticOsUpgradePolicy = value;
  }
  public resetAutomaticOsUpgradePolicy() {
    this._automaticOsUpgradePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticOsUpgradePolicyInput() {
    return this._automaticOsUpgradePolicy
  }

  // boot_diagnostics - computed: false, optional: true, required: false
  private _bootDiagnostics?: WindowsVirtualMachineScaleSetBootDiagnostics | undefined; 
  private __bootDiagnosticsOutput = new WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference(this as any, "boot_diagnostics", true);
  public get bootDiagnostics() {
    return this.__bootDiagnosticsOutput;
  }
  public putBootDiagnostics(value: WindowsVirtualMachineScaleSetBootDiagnostics | undefined) {
    this._bootDiagnostics = value;
  }
  public resetBootDiagnostics() {
    this._bootDiagnostics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiagnosticsInput() {
    return this._bootDiagnostics
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk?: WindowsVirtualMachineScaleSetDataDisk[] | undefined; 
  public get dataDisk() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('data_disk') as any;
  }
  public set dataDisk(value: WindowsVirtualMachineScaleSetDataDisk[] | undefined) {
    this._dataDisk = value;
  }
  public resetDataDisk() {
    this._dataDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk
  }

  // extension - computed: false, optional: true, required: false
  private _extension?: WindowsVirtualMachineScaleSetExtension[] | undefined; 
  public get extension() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('extension') as any;
  }
  public set extension(value: WindowsVirtualMachineScaleSetExtension[] | undefined) {
    this._extension = value;
  }
  public resetExtension() {
    this._extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: WindowsVirtualMachineScaleSetIdentity | undefined; 
  private __identityOutput = new WindowsVirtualMachineScaleSetIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this.__identityOutput;
  }
  public putIdentity(value: WindowsVirtualMachineScaleSetIdentity | undefined) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // network_interface - computed: false, optional: false, required: true
  private _networkInterface?: WindowsVirtualMachineScaleSetNetworkInterface[]; 
  public get networkInterface() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_interface') as any;
  }
  public set networkInterface(value: WindowsVirtualMachineScaleSetNetworkInterface[]) {
    this._networkInterface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface
  }

  // os_disk - computed: false, optional: false, required: true
  private _osDisk?: WindowsVirtualMachineScaleSetOsDisk; 
  private __osDiskOutput = new WindowsVirtualMachineScaleSetOsDiskOutputReference(this as any, "os_disk", true);
  public get osDisk() {
    return this.__osDiskOutput;
  }
  public putOsDisk(value: WindowsVirtualMachineScaleSetOsDisk) {
    this._osDisk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskInput() {
    return this._osDisk
  }

  // plan - computed: false, optional: true, required: false
  private _plan?: WindowsVirtualMachineScaleSetPlan | undefined; 
  private __planOutput = new WindowsVirtualMachineScaleSetPlanOutputReference(this as any, "plan", true);
  public get plan() {
    return this.__planOutput;
  }
  public putPlan(value: WindowsVirtualMachineScaleSetPlan | undefined) {
    this._plan = value;
  }
  public resetPlan() {
    this._plan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan
  }

  // rolling_upgrade_policy - computed: false, optional: true, required: false
  private _rollingUpgradePolicy?: WindowsVirtualMachineScaleSetRollingUpgradePolicy | undefined; 
  private __rollingUpgradePolicyOutput = new WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference(this as any, "rolling_upgrade_policy", true);
  public get rollingUpgradePolicy() {
    return this.__rollingUpgradePolicyOutput;
  }
  public putRollingUpgradePolicy(value: WindowsVirtualMachineScaleSetRollingUpgradePolicy | undefined) {
    this._rollingUpgradePolicy = value;
  }
  public resetRollingUpgradePolicy() {
    this._rollingUpgradePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpgradePolicyInput() {
    return this._rollingUpgradePolicy
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: WindowsVirtualMachineScaleSetSecret[] | undefined; 
  public get secret() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secret') as any;
  }
  public set secret(value: WindowsVirtualMachineScaleSetSecret[] | undefined) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret
  }

  // source_image_reference - computed: false, optional: true, required: false
  private _sourceImageReference?: WindowsVirtualMachineScaleSetSourceImageReference | undefined; 
  private __sourceImageReferenceOutput = new WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference(this as any, "source_image_reference", true);
  public get sourceImageReference() {
    return this.__sourceImageReferenceOutput;
  }
  public putSourceImageReference(value: WindowsVirtualMachineScaleSetSourceImageReference | undefined) {
    this._sourceImageReference = value;
  }
  public resetSourceImageReference() {
    this._sourceImageReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageReferenceInput() {
    return this._sourceImageReference
  }

  // terminate_notification - computed: false, optional: true, required: false
  private _terminateNotification?: WindowsVirtualMachineScaleSetTerminateNotification | undefined; 
  private __terminateNotificationOutput = new WindowsVirtualMachineScaleSetTerminateNotificationOutputReference(this as any, "terminate_notification", true);
  public get terminateNotification() {
    return this.__terminateNotificationOutput;
  }
  public putTerminateNotification(value: WindowsVirtualMachineScaleSetTerminateNotification | undefined) {
    this._terminateNotification = value;
  }
  public resetTerminateNotification() {
    this._terminateNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateNotificationInput() {
    return this._terminateNotification
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: WindowsVirtualMachineScaleSetTimeouts | undefined; 
  private __timeoutsOutput = new WindowsVirtualMachineScaleSetTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: WindowsVirtualMachineScaleSetTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // winrm_listener - computed: false, optional: true, required: false
  private _winrmListener?: WindowsVirtualMachineScaleSetWinrmListener[] | undefined; 
  public get winrmListener() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('winrm_listener') as any;
  }
  public set winrmListener(value: WindowsVirtualMachineScaleSetWinrmListener[] | undefined) {
    this._winrmListener = value;
  }
  public resetWinrmListener() {
    this._winrmListener = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winrmListenerInput() {
    return this._winrmListener
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      admin_username: cdktf.stringToTerraform(this._adminUsername),
      computer_name_prefix: cdktf.stringToTerraform(this._computerNamePrefix),
      custom_data: cdktf.stringToTerraform(this._customData),
      do_not_run_extensions_on_overprovisioned_machines: cdktf.booleanToTerraform(this._doNotRunExtensionsOnOverprovisionedMachines),
      enable_automatic_updates: cdktf.booleanToTerraform(this._enableAutomaticUpdates),
      encryption_at_host_enabled: cdktf.booleanToTerraform(this._encryptionAtHostEnabled),
      eviction_policy: cdktf.stringToTerraform(this._evictionPolicy),
      extensions_time_budget: cdktf.stringToTerraform(this._extensionsTimeBudget),
      health_probe_id: cdktf.stringToTerraform(this._healthProbeId),
      instances: cdktf.numberToTerraform(this._instances),
      license_type: cdktf.stringToTerraform(this._licenseType),
      location: cdktf.stringToTerraform(this._location),
      max_bid_price: cdktf.numberToTerraform(this._maxBidPrice),
      name: cdktf.stringToTerraform(this._name),
      overprovision: cdktf.booleanToTerraform(this._overprovision),
      platform_fault_domain_count: cdktf.numberToTerraform(this._platformFaultDomainCount),
      priority: cdktf.stringToTerraform(this._priority),
      provision_vm_agent: cdktf.booleanToTerraform(this._provisionVmAgent),
      proximity_placement_group_id: cdktf.stringToTerraform(this._proximityPlacementGroupId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      scale_in_policy: cdktf.stringToTerraform(this._scaleInPolicy),
      secure_boot_enabled: cdktf.booleanToTerraform(this._secureBootEnabled),
      single_placement_group: cdktf.booleanToTerraform(this._singlePlacementGroup),
      sku: cdktf.stringToTerraform(this._sku),
      source_image_id: cdktf.stringToTerraform(this._sourceImageId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timezone: cdktf.stringToTerraform(this._timezone),
      upgrade_mode: cdktf.stringToTerraform(this._upgradeMode),
      vtpm_enabled: cdktf.booleanToTerraform(this._vtpmEnabled),
      zone_balance: cdktf.booleanToTerraform(this._zoneBalance),
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      additional_capabilities: windowsVirtualMachineScaleSetAdditionalCapabilitiesToTerraform(this._additionalCapabilities),
      additional_unattend_content: cdktf.listMapper(windowsVirtualMachineScaleSetAdditionalUnattendContentToTerraform)(this._additionalUnattendContent),
      automatic_instance_repair: windowsVirtualMachineScaleSetAutomaticInstanceRepairToTerraform(this._automaticInstanceRepair),
      automatic_os_upgrade_policy: windowsVirtualMachineScaleSetAutomaticOsUpgradePolicyToTerraform(this._automaticOsUpgradePolicy),
      boot_diagnostics: windowsVirtualMachineScaleSetBootDiagnosticsToTerraform(this._bootDiagnostics),
      data_disk: cdktf.listMapper(windowsVirtualMachineScaleSetDataDiskToTerraform)(this._dataDisk),
      extension: cdktf.listMapper(windowsVirtualMachineScaleSetExtensionToTerraform)(this._extension),
      identity: windowsVirtualMachineScaleSetIdentityToTerraform(this._identity),
      network_interface: cdktf.listMapper(windowsVirtualMachineScaleSetNetworkInterfaceToTerraform)(this._networkInterface),
      os_disk: windowsVirtualMachineScaleSetOsDiskToTerraform(this._osDisk),
      plan: windowsVirtualMachineScaleSetPlanToTerraform(this._plan),
      rolling_upgrade_policy: windowsVirtualMachineScaleSetRollingUpgradePolicyToTerraform(this._rollingUpgradePolicy),
      secret: cdktf.listMapper(windowsVirtualMachineScaleSetSecretToTerraform)(this._secret),
      source_image_reference: windowsVirtualMachineScaleSetSourceImageReferenceToTerraform(this._sourceImageReference),
      terminate_notification: windowsVirtualMachineScaleSetTerminateNotificationToTerraform(this._terminateNotification),
      timeouts: windowsVirtualMachineScaleSetTimeoutsToTerraform(this._timeouts),
      winrm_listener: cdktf.listMapper(windowsVirtualMachineScaleSetWinrmListenerToTerraform)(this._winrmListener),
    };
  }
}
