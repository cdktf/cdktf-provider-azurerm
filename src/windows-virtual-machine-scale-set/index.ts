// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WindowsVirtualMachineScaleSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#admin_password WindowsVirtualMachineScaleSet#admin_password}
  */
  readonly adminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#admin_username WindowsVirtualMachineScaleSet#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#capacity_reservation_group_id WindowsVirtualMachineScaleSet#capacity_reservation_group_id}
  */
  readonly capacityReservationGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#computer_name_prefix WindowsVirtualMachineScaleSet#computer_name_prefix}
  */
  readonly computerNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#custom_data WindowsVirtualMachineScaleSet#custom_data}
  */
  readonly customData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#do_not_run_extensions_on_overprovisioned_machines WindowsVirtualMachineScaleSet#do_not_run_extensions_on_overprovisioned_machines}
  */
  readonly doNotRunExtensionsOnOverprovisionedMachines?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#edge_zone WindowsVirtualMachineScaleSet#edge_zone}
  */
  readonly edgeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#enable_automatic_updates WindowsVirtualMachineScaleSet#enable_automatic_updates}
  */
  readonly enableAutomaticUpdates?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#encryption_at_host_enabled WindowsVirtualMachineScaleSet#encryption_at_host_enabled}
  */
  readonly encryptionAtHostEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#eviction_policy WindowsVirtualMachineScaleSet#eviction_policy}
  */
  readonly evictionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#extension_operations_enabled WindowsVirtualMachineScaleSet#extension_operations_enabled}
  */
  readonly extensionOperationsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#extensions_time_budget WindowsVirtualMachineScaleSet#extensions_time_budget}
  */
  readonly extensionsTimeBudget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#health_probe_id WindowsVirtualMachineScaleSet#health_probe_id}
  */
  readonly healthProbeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#host_group_id WindowsVirtualMachineScaleSet#host_group_id}
  */
  readonly hostGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#id WindowsVirtualMachineScaleSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#instances WindowsVirtualMachineScaleSet#instances}
  */
  readonly instances: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#license_type WindowsVirtualMachineScaleSet#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#location WindowsVirtualMachineScaleSet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#max_bid_price WindowsVirtualMachineScaleSet#max_bid_price}
  */
  readonly maxBidPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#overprovision WindowsVirtualMachineScaleSet#overprovision}
  */
  readonly overprovision?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#platform_fault_domain_count WindowsVirtualMachineScaleSet#platform_fault_domain_count}
  */
  readonly platformFaultDomainCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#priority WindowsVirtualMachineScaleSet#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#provision_vm_agent WindowsVirtualMachineScaleSet#provision_vm_agent}
  */
  readonly provisionVmAgent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#proximity_placement_group_id WindowsVirtualMachineScaleSet#proximity_placement_group_id}
  */
  readonly proximityPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#resource_group_name WindowsVirtualMachineScaleSet#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#secure_boot_enabled WindowsVirtualMachineScaleSet#secure_boot_enabled}
  */
  readonly secureBootEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#single_placement_group WindowsVirtualMachineScaleSet#single_placement_group}
  */
  readonly singlePlacementGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#sku WindowsVirtualMachineScaleSet#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#source_image_id WindowsVirtualMachineScaleSet#source_image_id}
  */
  readonly sourceImageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#tags WindowsVirtualMachineScaleSet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#timezone WindowsVirtualMachineScaleSet#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#upgrade_mode WindowsVirtualMachineScaleSet#upgrade_mode}
  */
  readonly upgradeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#user_data WindowsVirtualMachineScaleSet#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#vtpm_enabled WindowsVirtualMachineScaleSet#vtpm_enabled}
  */
  readonly vtpmEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#zone_balance WindowsVirtualMachineScaleSet#zone_balance}
  */
  readonly zoneBalance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#zones WindowsVirtualMachineScaleSet#zones}
  */
  readonly zones?: string[];
  /**
  * additional_capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#additional_capabilities WindowsVirtualMachineScaleSet#additional_capabilities}
  */
  readonly additionalCapabilities?: WindowsVirtualMachineScaleSetAdditionalCapabilities;
  /**
  * additional_unattend_content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#additional_unattend_content WindowsVirtualMachineScaleSet#additional_unattend_content}
  */
  readonly additionalUnattendContent?: WindowsVirtualMachineScaleSetAdditionalUnattendContent[] | cdktf.IResolvable;
  /**
  * automatic_instance_repair block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#automatic_instance_repair WindowsVirtualMachineScaleSet#automatic_instance_repair}
  */
  readonly automaticInstanceRepair?: WindowsVirtualMachineScaleSetAutomaticInstanceRepair;
  /**
  * automatic_os_upgrade_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#automatic_os_upgrade_policy WindowsVirtualMachineScaleSet#automatic_os_upgrade_policy}
  */
  readonly automaticOsUpgradePolicy?: WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy;
  /**
  * boot_diagnostics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#boot_diagnostics WindowsVirtualMachineScaleSet#boot_diagnostics}
  */
  readonly bootDiagnostics?: WindowsVirtualMachineScaleSetBootDiagnostics;
  /**
  * data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#data_disk WindowsVirtualMachineScaleSet#data_disk}
  */
  readonly dataDisk?: WindowsVirtualMachineScaleSetDataDisk[] | cdktf.IResolvable;
  /**
  * extension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#extension WindowsVirtualMachineScaleSet#extension}
  */
  readonly extension?: WindowsVirtualMachineScaleSetExtension[] | cdktf.IResolvable;
  /**
  * gallery_application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#gallery_application WindowsVirtualMachineScaleSet#gallery_application}
  */
  readonly galleryApplication?: WindowsVirtualMachineScaleSetGalleryApplication[] | cdktf.IResolvable;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#identity WindowsVirtualMachineScaleSet#identity}
  */
  readonly identity?: WindowsVirtualMachineScaleSetIdentity;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#network_interface WindowsVirtualMachineScaleSet#network_interface}
  */
  readonly networkInterface: WindowsVirtualMachineScaleSetNetworkInterface[] | cdktf.IResolvable;
  /**
  * os_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#os_disk WindowsVirtualMachineScaleSet#os_disk}
  */
  readonly osDisk: WindowsVirtualMachineScaleSetOsDisk;
  /**
  * plan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#plan WindowsVirtualMachineScaleSet#plan}
  */
  readonly plan?: WindowsVirtualMachineScaleSetPlan;
  /**
  * rolling_upgrade_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#rolling_upgrade_policy WindowsVirtualMachineScaleSet#rolling_upgrade_policy}
  */
  readonly rollingUpgradePolicy?: WindowsVirtualMachineScaleSetRollingUpgradePolicy;
  /**
  * scale_in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#scale_in WindowsVirtualMachineScaleSet#scale_in}
  */
  readonly scaleIn?: WindowsVirtualMachineScaleSetScaleIn;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#secret WindowsVirtualMachineScaleSet#secret}
  */
  readonly secret?: WindowsVirtualMachineScaleSetSecret[] | cdktf.IResolvable;
  /**
  * source_image_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#source_image_reference WindowsVirtualMachineScaleSet#source_image_reference}
  */
  readonly sourceImageReference?: WindowsVirtualMachineScaleSetSourceImageReference;
  /**
  * spot_restore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#spot_restore WindowsVirtualMachineScaleSet#spot_restore}
  */
  readonly spotRestore?: WindowsVirtualMachineScaleSetSpotRestore;
  /**
  * termination_notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#termination_notification WindowsVirtualMachineScaleSet#termination_notification}
  */
  readonly terminationNotification?: WindowsVirtualMachineScaleSetTerminationNotification;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#timeouts WindowsVirtualMachineScaleSet#timeouts}
  */
  readonly timeouts?: WindowsVirtualMachineScaleSetTimeouts;
  /**
  * winrm_listener block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#winrm_listener WindowsVirtualMachineScaleSet#winrm_listener}
  */
  readonly winrmListener?: WindowsVirtualMachineScaleSetWinrmListener[] | cdktf.IResolvable;
}
export interface WindowsVirtualMachineScaleSetAdditionalCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#ultra_ssd_enabled WindowsVirtualMachineScaleSet#ultra_ssd_enabled}
  */
  readonly ultraSsdEnabled?: boolean | cdktf.IResolvable;
}

export function windowsVirtualMachineScaleSetAdditionalCapabilitiesToTerraform(struct?: WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference | WindowsVirtualMachineScaleSetAdditionalCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ultra_ssd_enabled: cdktf.booleanToTerraform(struct!.ultraSsdEnabled),
  }
}


export function windowsVirtualMachineScaleSetAdditionalCapabilitiesToHclTerraform(struct?: WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference | WindowsVirtualMachineScaleSetAdditionalCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ultra_ssd_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ultraSsdEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetAdditionalCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ultraSsdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ultraSsdEnabled = this._ultraSsdEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetAdditionalCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ultraSsdEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ultraSsdEnabled = value.ultraSsdEnabled;
    }
  }

  // ultra_ssd_enabled - computed: false, optional: true, required: false
  private _ultraSsdEnabled?: boolean | cdktf.IResolvable; 
  public get ultraSsdEnabled() {
    return this.getBooleanAttribute('ultra_ssd_enabled');
  }
  public set ultraSsdEnabled(value: boolean | cdktf.IResolvable) {
    this._ultraSsdEnabled = value;
  }
  public resetUltraSsdEnabled() {
    this._ultraSsdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ultraSsdEnabledInput() {
    return this._ultraSsdEnabled;
  }
}
export interface WindowsVirtualMachineScaleSetAdditionalUnattendContent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#content WindowsVirtualMachineScaleSet#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#setting WindowsVirtualMachineScaleSet#setting}
  */
  readonly setting: string;
}

export function windowsVirtualMachineScaleSetAdditionalUnattendContentToTerraform(struct?: WindowsVirtualMachineScaleSetAdditionalUnattendContent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    setting: cdktf.stringToTerraform(struct!.setting),
  }
}


export function windowsVirtualMachineScaleSetAdditionalUnattendContentToHclTerraform(struct?: WindowsVirtualMachineScaleSetAdditionalUnattendContent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    setting: {
      value: cdktf.stringToHclTerraform(struct!.setting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetAdditionalUnattendContent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._setting !== undefined) {
      hasAnyValues = true;
      internalValueResult.setting = this._setting;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetAdditionalUnattendContent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._setting = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._setting = value.setting;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // setting - computed: false, optional: false, required: true
  private _setting?: string; 
  public get setting() {
    return this.getStringAttribute('setting');
  }
  public set setting(value: string) {
    this._setting = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingInput() {
    return this._setting;
  }
}

export class WindowsVirtualMachineScaleSetAdditionalUnattendContentList extends cdktf.ComplexList {
  public internalValue? : WindowsVirtualMachineScaleSetAdditionalUnattendContent[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference {
    return new WindowsVirtualMachineScaleSetAdditionalUnattendContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsVirtualMachineScaleSetAutomaticInstanceRepair {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#action WindowsVirtualMachineScaleSet#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#enabled WindowsVirtualMachineScaleSet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#grace_period WindowsVirtualMachineScaleSet#grace_period}
  */
  readonly gracePeriod?: string;
}

export function windowsVirtualMachineScaleSetAutomaticInstanceRepairToTerraform(struct?: WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference | WindowsVirtualMachineScaleSetAutomaticInstanceRepair): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    grace_period: cdktf.stringToTerraform(struct!.gracePeriod),
  }
}


export function windowsVirtualMachineScaleSetAutomaticInstanceRepairToHclTerraform(struct?: WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference | WindowsVirtualMachineScaleSetAutomaticInstanceRepair): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grace_period: {
      value: cdktf.stringToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetAutomaticInstanceRepair | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetAutomaticInstanceRepair | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._enabled = undefined;
      this._gracePeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._enabled = value.enabled;
      this._gracePeriod = value.gracePeriod;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // grace_period - computed: true, optional: true, required: false
  private _gracePeriod?: string; 
  public get gracePeriod() {
    return this.getStringAttribute('grace_period');
  }
  public set gracePeriod(value: string) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }
}
export interface WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#disable_automatic_rollback WindowsVirtualMachineScaleSet#disable_automatic_rollback}
  */
  readonly disableAutomaticRollback: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#enable_automatic_os_upgrade WindowsVirtualMachineScaleSet#enable_automatic_os_upgrade}
  */
  readonly enableAutomaticOsUpgrade: boolean | cdktf.IResolvable;
}

export function windowsVirtualMachineScaleSetAutomaticOsUpgradePolicyToTerraform(struct?: WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference | WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_automatic_rollback: cdktf.booleanToTerraform(struct!.disableAutomaticRollback),
    enable_automatic_os_upgrade: cdktf.booleanToTerraform(struct!.enableAutomaticOsUpgrade),
  }
}


export function windowsVirtualMachineScaleSetAutomaticOsUpgradePolicyToHclTerraform(struct?: WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference | WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_automatic_rollback: {
      value: cdktf.booleanToHclTerraform(struct!.disableAutomaticRollback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_automatic_os_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutomaticOsUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAutomaticRollback !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAutomaticRollback = this._disableAutomaticRollback;
    }
    if (this._enableAutomaticOsUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutomaticOsUpgrade = this._enableAutomaticOsUpgrade;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableAutomaticRollback = undefined;
      this._enableAutomaticOsUpgrade = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableAutomaticRollback = value.disableAutomaticRollback;
      this._enableAutomaticOsUpgrade = value.enableAutomaticOsUpgrade;
    }
  }

  // disable_automatic_rollback - computed: false, optional: false, required: true
  private _disableAutomaticRollback?: boolean | cdktf.IResolvable; 
  public get disableAutomaticRollback() {
    return this.getBooleanAttribute('disable_automatic_rollback');
  }
  public set disableAutomaticRollback(value: boolean | cdktf.IResolvable) {
    this._disableAutomaticRollback = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutomaticRollbackInput() {
    return this._disableAutomaticRollback;
  }

  // enable_automatic_os_upgrade - computed: false, optional: false, required: true
  private _enableAutomaticOsUpgrade?: boolean | cdktf.IResolvable; 
  public get enableAutomaticOsUpgrade() {
    return this.getBooleanAttribute('enable_automatic_os_upgrade');
  }
  public set enableAutomaticOsUpgrade(value: boolean | cdktf.IResolvable) {
    this._enableAutomaticOsUpgrade = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomaticOsUpgradeInput() {
    return this._enableAutomaticOsUpgrade;
  }
}
export interface WindowsVirtualMachineScaleSetBootDiagnostics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#storage_account_uri WindowsVirtualMachineScaleSet#storage_account_uri}
  */
  readonly storageAccountUri?: string;
}

export function windowsVirtualMachineScaleSetBootDiagnosticsToTerraform(struct?: WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference | WindowsVirtualMachineScaleSetBootDiagnostics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_account_uri: cdktf.stringToTerraform(struct!.storageAccountUri),
  }
}


export function windowsVirtualMachineScaleSetBootDiagnosticsToHclTerraform(struct?: WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference | WindowsVirtualMachineScaleSetBootDiagnostics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_account_uri: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetBootDiagnostics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageAccountUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountUri = this._storageAccountUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetBootDiagnostics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageAccountUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageAccountUri = value.storageAccountUri;
    }
  }

  // storage_account_uri - computed: false, optional: true, required: false
  private _storageAccountUri?: string; 
  public get storageAccountUri() {
    return this.getStringAttribute('storage_account_uri');
  }
  public set storageAccountUri(value: string) {
    this._storageAccountUri = value;
  }
  public resetStorageAccountUri() {
    this._storageAccountUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountUriInput() {
    return this._storageAccountUri;
  }
}
export interface WindowsVirtualMachineScaleSetDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#caching WindowsVirtualMachineScaleSet#caching}
  */
  readonly caching: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#create_option WindowsVirtualMachineScaleSet#create_option}
  */
  readonly createOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#disk_encryption_set_id WindowsVirtualMachineScaleSet#disk_encryption_set_id}
  */
  readonly diskEncryptionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#disk_size_gb WindowsVirtualMachineScaleSet#disk_size_gb}
  */
  readonly diskSizeGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#lun WindowsVirtualMachineScaleSet#lun}
  */
  readonly lun: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#storage_account_type WindowsVirtualMachineScaleSet#storage_account_type}
  */
  readonly storageAccountType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#ultra_ssd_disk_iops_read_write WindowsVirtualMachineScaleSet#ultra_ssd_disk_iops_read_write}
  */
  readonly ultraSsdDiskIopsReadWrite?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#ultra_ssd_disk_mbps_read_write WindowsVirtualMachineScaleSet#ultra_ssd_disk_mbps_read_write}
  */
  readonly ultraSsdDiskMbpsReadWrite?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#write_accelerator_enabled WindowsVirtualMachineScaleSet#write_accelerator_enabled}
  */
  readonly writeAcceleratorEnabled?: boolean | cdktf.IResolvable;
}

export function windowsVirtualMachineScaleSetDataDiskToTerraform(struct?: WindowsVirtualMachineScaleSetDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    create_option: cdktf.stringToTerraform(struct!.createOption),
    disk_encryption_set_id: cdktf.stringToTerraform(struct!.diskEncryptionSetId),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    lun: cdktf.numberToTerraform(struct!.lun),
    name: cdktf.stringToTerraform(struct!.name),
    storage_account_type: cdktf.stringToTerraform(struct!.storageAccountType),
    ultra_ssd_disk_iops_read_write: cdktf.numberToTerraform(struct!.ultraSsdDiskIopsReadWrite),
    ultra_ssd_disk_mbps_read_write: cdktf.numberToTerraform(struct!.ultraSsdDiskMbpsReadWrite),
    write_accelerator_enabled: cdktf.booleanToTerraform(struct!.writeAcceleratorEnabled),
  }
}


export function windowsVirtualMachineScaleSetDataDiskToHclTerraform(struct?: WindowsVirtualMachineScaleSetDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    caching: {
      value: cdktf.stringToHclTerraform(struct!.caching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_option: {
      value: cdktf.stringToHclTerraform(struct!.createOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_encryption_set_id: {
      value: cdktf.stringToHclTerraform(struct!.diskEncryptionSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lun: {
      value: cdktf.numberToHclTerraform(struct!.lun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_type: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ultra_ssd_disk_iops_read_write: {
      value: cdktf.numberToHclTerraform(struct!.ultraSsdDiskIopsReadWrite),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ultra_ssd_disk_mbps_read_write: {
      value: cdktf.numberToHclTerraform(struct!.ultraSsdDiskMbpsReadWrite),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_accelerator_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.writeAcceleratorEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetDataDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetDataDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caching !== undefined) {
      hasAnyValues = true;
      internalValueResult.caching = this._caching;
    }
    if (this._createOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.createOption = this._createOption;
    }
    if (this._diskEncryptionSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionSetId = this._diskEncryptionSetId;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._storageAccountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountType = this._storageAccountType;
    }
    if (this._ultraSsdDiskIopsReadWrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.ultraSsdDiskIopsReadWrite = this._ultraSsdDiskIopsReadWrite;
    }
    if (this._ultraSsdDiskMbpsReadWrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.ultraSsdDiskMbpsReadWrite = this._ultraSsdDiskMbpsReadWrite;
    }
    if (this._writeAcceleratorEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeAcceleratorEnabled = this._writeAcceleratorEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetDataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caching = undefined;
      this._createOption = undefined;
      this._diskEncryptionSetId = undefined;
      this._diskSizeGb = undefined;
      this._lun = undefined;
      this._name = undefined;
      this._storageAccountType = undefined;
      this._ultraSsdDiskIopsReadWrite = undefined;
      this._ultraSsdDiskMbpsReadWrite = undefined;
      this._writeAcceleratorEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caching = value.caching;
      this._createOption = value.createOption;
      this._diskEncryptionSetId = value.diskEncryptionSetId;
      this._diskSizeGb = value.diskSizeGb;
      this._lun = value.lun;
      this._name = value.name;
      this._storageAccountType = value.storageAccountType;
      this._ultraSsdDiskIopsReadWrite = value.ultraSsdDiskIopsReadWrite;
      this._ultraSsdDiskMbpsReadWrite = value.ultraSsdDiskMbpsReadWrite;
      this._writeAcceleratorEnabled = value.writeAcceleratorEnabled;
    }
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
    return this._caching;
  }

  // create_option - computed: false, optional: true, required: false
  private _createOption?: string; 
  public get createOption() {
    return this.getStringAttribute('create_option');
  }
  public set createOption(value: string) {
    this._createOption = value;
  }
  public resetCreateOption() {
    this._createOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createOptionInput() {
    return this._createOption;
  }

  // disk_encryption_set_id - computed: false, optional: true, required: false
  private _diskEncryptionSetId?: string; 
  public get diskEncryptionSetId() {
    return this.getStringAttribute('disk_encryption_set_id');
  }
  public set diskEncryptionSetId(value: string) {
    this._diskEncryptionSetId = value;
  }
  public resetDiskEncryptionSetId() {
    this._diskEncryptionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetIdInput() {
    return this._diskEncryptionSetId;
  }

  // disk_size_gb - computed: false, optional: false, required: true
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // lun - computed: false, optional: false, required: true
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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
    return this._storageAccountType;
  }

  // ultra_ssd_disk_iops_read_write - computed: true, optional: true, required: false
  private _ultraSsdDiskIopsReadWrite?: number; 
  public get ultraSsdDiskIopsReadWrite() {
    return this.getNumberAttribute('ultra_ssd_disk_iops_read_write');
  }
  public set ultraSsdDiskIopsReadWrite(value: number) {
    this._ultraSsdDiskIopsReadWrite = value;
  }
  public resetUltraSsdDiskIopsReadWrite() {
    this._ultraSsdDiskIopsReadWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ultraSsdDiskIopsReadWriteInput() {
    return this._ultraSsdDiskIopsReadWrite;
  }

  // ultra_ssd_disk_mbps_read_write - computed: true, optional: true, required: false
  private _ultraSsdDiskMbpsReadWrite?: number; 
  public get ultraSsdDiskMbpsReadWrite() {
    return this.getNumberAttribute('ultra_ssd_disk_mbps_read_write');
  }
  public set ultraSsdDiskMbpsReadWrite(value: number) {
    this._ultraSsdDiskMbpsReadWrite = value;
  }
  public resetUltraSsdDiskMbpsReadWrite() {
    this._ultraSsdDiskMbpsReadWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ultraSsdDiskMbpsReadWriteInput() {
    return this._ultraSsdDiskMbpsReadWrite;
  }

  // write_accelerator_enabled - computed: false, optional: true, required: false
  private _writeAcceleratorEnabled?: boolean | cdktf.IResolvable; 
  public get writeAcceleratorEnabled() {
    return this.getBooleanAttribute('write_accelerator_enabled');
  }
  public set writeAcceleratorEnabled(value: boolean | cdktf.IResolvable) {
    this._writeAcceleratorEnabled = value;
  }
  public resetWriteAcceleratorEnabled() {
    this._writeAcceleratorEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeAcceleratorEnabledInput() {
    return this._writeAcceleratorEnabled;
  }
}

export class WindowsVirtualMachineScaleSetDataDiskList extends cdktf.ComplexList {
  public internalValue? : WindowsVirtualMachineScaleSetDataDisk[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WindowsVirtualMachineScaleSetDataDiskOutputReference {
    return new WindowsVirtualMachineScaleSetDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#secret_url WindowsVirtualMachineScaleSet#secret_url}
  */
  readonly secretUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#source_vault_id WindowsVirtualMachineScaleSet#source_vault_id}
  */
  readonly sourceVaultId: string;
}

export function windowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultToTerraform(struct?: WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference | WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_url: cdktf.stringToTerraform(struct!.secretUrl),
    source_vault_id: cdktf.stringToTerraform(struct!.sourceVaultId),
  }
}


export function windowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultToHclTerraform(struct?: WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference | WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_url: {
      value: cdktf.stringToHclTerraform(struct!.secretUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretUrl = this._secretUrl;
    }
    if (this._sourceVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVaultId = this._sourceVaultId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretUrl = undefined;
      this._sourceVaultId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretUrl = value.secretUrl;
      this._sourceVaultId = value.sourceVaultId;
    }
  }

  // secret_url - computed: false, optional: false, required: true
  private _secretUrl?: string; 
  public get secretUrl() {
    return this.getStringAttribute('secret_url');
  }
  public set secretUrl(value: string) {
    this._secretUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretUrlInput() {
    return this._secretUrl;
  }

  // source_vault_id - computed: false, optional: false, required: true
  private _sourceVaultId?: string; 
  public get sourceVaultId() {
    return this.getStringAttribute('source_vault_id');
  }
  public set sourceVaultId(value: string) {
    this._sourceVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVaultIdInput() {
    return this._sourceVaultId;
  }
}
export interface WindowsVirtualMachineScaleSetExtension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#auto_upgrade_minor_version WindowsVirtualMachineScaleSet#auto_upgrade_minor_version}
  */
  readonly autoUpgradeMinorVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#automatic_upgrade_enabled WindowsVirtualMachineScaleSet#automatic_upgrade_enabled}
  */
  readonly automaticUpgradeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#force_update_tag WindowsVirtualMachineScaleSet#force_update_tag}
  */
  readonly forceUpdateTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#protected_settings WindowsVirtualMachineScaleSet#protected_settings}
  */
  readonly protectedSettings?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#provision_after_extensions WindowsVirtualMachineScaleSet#provision_after_extensions}
  */
  readonly provisionAfterExtensions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#publisher WindowsVirtualMachineScaleSet#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#settings WindowsVirtualMachineScaleSet#settings}
  */
  readonly settings?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#type WindowsVirtualMachineScaleSet#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#type_handler_version WindowsVirtualMachineScaleSet#type_handler_version}
  */
  readonly typeHandlerVersion: string;
  /**
  * protected_settings_from_key_vault block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#protected_settings_from_key_vault WindowsVirtualMachineScaleSet#protected_settings_from_key_vault}
  */
  readonly protectedSettingsFromKeyVault?: WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault;
}

export function windowsVirtualMachineScaleSetExtensionToTerraform(struct?: WindowsVirtualMachineScaleSetExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_upgrade_minor_version: cdktf.booleanToTerraform(struct!.autoUpgradeMinorVersion),
    automatic_upgrade_enabled: cdktf.booleanToTerraform(struct!.automaticUpgradeEnabled),
    force_update_tag: cdktf.stringToTerraform(struct!.forceUpdateTag),
    name: cdktf.stringToTerraform(struct!.name),
    protected_settings: cdktf.stringToTerraform(struct!.protectedSettings),
    provision_after_extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.provisionAfterExtensions),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    settings: cdktf.stringToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
    type_handler_version: cdktf.stringToTerraform(struct!.typeHandlerVersion),
    protected_settings_from_key_vault: windowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultToTerraform(struct!.protectedSettingsFromKeyVault),
  }
}


export function windowsVirtualMachineScaleSetExtensionToHclTerraform(struct?: WindowsVirtualMachineScaleSetExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_upgrade_minor_version: {
      value: cdktf.booleanToHclTerraform(struct!.autoUpgradeMinorVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    automatic_upgrade_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.automaticUpgradeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_update_tag: {
      value: cdktf.stringToHclTerraform(struct!.forceUpdateTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protected_settings: {
      value: cdktf.stringToHclTerraform(struct!.protectedSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provision_after_extensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.provisionAfterExtensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    publisher: {
      value: cdktf.stringToHclTerraform(struct!.publisher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.stringToHclTerraform(struct!.settings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_handler_version: {
      value: cdktf.stringToHclTerraform(struct!.typeHandlerVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protected_settings_from_key_vault: {
      value: windowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultToHclTerraform(struct!.protectedSettingsFromKeyVault),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetExtensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetExtension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoUpgradeMinorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgradeMinorVersion = this._autoUpgradeMinorVersion;
    }
    if (this._automaticUpgradeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticUpgradeEnabled = this._automaticUpgradeEnabled;
    }
    if (this._forceUpdateTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceUpdateTag = this._forceUpdateTag;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protectedSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedSettings = this._protectedSettings;
    }
    if (this._provisionAfterExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionAfterExtensions = this._provisionAfterExtensions;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._typeHandlerVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeHandlerVersion = this._typeHandlerVersion;
    }
    if (this._protectedSettingsFromKeyVault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedSettingsFromKeyVault = this._protectedSettingsFromKeyVault?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetExtension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoUpgradeMinorVersion = undefined;
      this._automaticUpgradeEnabled = undefined;
      this._forceUpdateTag = undefined;
      this._name = undefined;
      this._protectedSettings = undefined;
      this._provisionAfterExtensions = undefined;
      this._publisher = undefined;
      this._settings = undefined;
      this._type = undefined;
      this._typeHandlerVersion = undefined;
      this._protectedSettingsFromKeyVault.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoUpgradeMinorVersion = value.autoUpgradeMinorVersion;
      this._automaticUpgradeEnabled = value.automaticUpgradeEnabled;
      this._forceUpdateTag = value.forceUpdateTag;
      this._name = value.name;
      this._protectedSettings = value.protectedSettings;
      this._provisionAfterExtensions = value.provisionAfterExtensions;
      this._publisher = value.publisher;
      this._settings = value.settings;
      this._type = value.type;
      this._typeHandlerVersion = value.typeHandlerVersion;
      this._protectedSettingsFromKeyVault.internalValue = value.protectedSettingsFromKeyVault;
    }
  }

  // auto_upgrade_minor_version - computed: false, optional: true, required: false
  private _autoUpgradeMinorVersion?: boolean | cdktf.IResolvable; 
  public get autoUpgradeMinorVersion() {
    return this.getBooleanAttribute('auto_upgrade_minor_version');
  }
  public set autoUpgradeMinorVersion(value: boolean | cdktf.IResolvable) {
    this._autoUpgradeMinorVersion = value;
  }
  public resetAutoUpgradeMinorVersion() {
    this._autoUpgradeMinorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeMinorVersionInput() {
    return this._autoUpgradeMinorVersion;
  }

  // automatic_upgrade_enabled - computed: false, optional: true, required: false
  private _automaticUpgradeEnabled?: boolean | cdktf.IResolvable; 
  public get automaticUpgradeEnabled() {
    return this.getBooleanAttribute('automatic_upgrade_enabled');
  }
  public set automaticUpgradeEnabled(value: boolean | cdktf.IResolvable) {
    this._automaticUpgradeEnabled = value;
  }
  public resetAutomaticUpgradeEnabled() {
    this._automaticUpgradeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticUpgradeEnabledInput() {
    return this._automaticUpgradeEnabled;
  }

  // force_update_tag - computed: false, optional: true, required: false
  private _forceUpdateTag?: string; 
  public get forceUpdateTag() {
    return this.getStringAttribute('force_update_tag');
  }
  public set forceUpdateTag(value: string) {
    this._forceUpdateTag = value;
  }
  public resetForceUpdateTag() {
    this._forceUpdateTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdateTagInput() {
    return this._forceUpdateTag;
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
    return this._name;
  }

  // protected_settings - computed: false, optional: true, required: false
  private _protectedSettings?: string; 
  public get protectedSettings() {
    return this.getStringAttribute('protected_settings');
  }
  public set protectedSettings(value: string) {
    this._protectedSettings = value;
  }
  public resetProtectedSettings() {
    this._protectedSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedSettingsInput() {
    return this._protectedSettings;
  }

  // provision_after_extensions - computed: false, optional: true, required: false
  private _provisionAfterExtensions?: string[]; 
  public get provisionAfterExtensions() {
    return this.getListAttribute('provision_after_extensions');
  }
  public set provisionAfterExtensions(value: string[]) {
    this._provisionAfterExtensions = value;
  }
  public resetProvisionAfterExtensions() {
    this._provisionAfterExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionAfterExtensionsInput() {
    return this._provisionAfterExtensions;
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
    return this._publisher;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: string; 
  public get settings() {
    return this.getStringAttribute('settings');
  }
  public set settings(value: string) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
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
    return this._type;
  }

  // type_handler_version - computed: false, optional: false, required: true
  private _typeHandlerVersion?: string; 
  public get typeHandlerVersion() {
    return this.getStringAttribute('type_handler_version');
  }
  public set typeHandlerVersion(value: string) {
    this._typeHandlerVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeHandlerVersionInput() {
    return this._typeHandlerVersion;
  }

  // protected_settings_from_key_vault - computed: false, optional: true, required: false
  private _protectedSettingsFromKeyVault = new WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVaultOutputReference(this, "protected_settings_from_key_vault");
  public get protectedSettingsFromKeyVault() {
    return this._protectedSettingsFromKeyVault;
  }
  public putProtectedSettingsFromKeyVault(value: WindowsVirtualMachineScaleSetExtensionProtectedSettingsFromKeyVault) {
    this._protectedSettingsFromKeyVault.internalValue = value;
  }
  public resetProtectedSettingsFromKeyVault() {
    this._protectedSettingsFromKeyVault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedSettingsFromKeyVaultInput() {
    return this._protectedSettingsFromKeyVault.internalValue;
  }
}

export class WindowsVirtualMachineScaleSetExtensionList extends cdktf.ComplexList {
  public internalValue? : WindowsVirtualMachineScaleSetExtension[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WindowsVirtualMachineScaleSetExtensionOutputReference {
    return new WindowsVirtualMachineScaleSetExtensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsVirtualMachineScaleSetGalleryApplication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#configuration_blob_uri WindowsVirtualMachineScaleSet#configuration_blob_uri}
  */
  readonly configurationBlobUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#order WindowsVirtualMachineScaleSet#order}
  */
  readonly order?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#tag WindowsVirtualMachineScaleSet#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#version_id WindowsVirtualMachineScaleSet#version_id}
  */
  readonly versionId: string;
}

export function windowsVirtualMachineScaleSetGalleryApplicationToTerraform(struct?: WindowsVirtualMachineScaleSetGalleryApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration_blob_uri: cdktf.stringToTerraform(struct!.configurationBlobUri),
    order: cdktf.numberToTerraform(struct!.order),
    tag: cdktf.stringToTerraform(struct!.tag),
    version_id: cdktf.stringToTerraform(struct!.versionId),
  }
}


export function windowsVirtualMachineScaleSetGalleryApplicationToHclTerraform(struct?: WindowsVirtualMachineScaleSetGalleryApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration_blob_uri: {
      value: cdktf.stringToHclTerraform(struct!.configurationBlobUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktf.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetGalleryApplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetGalleryApplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationBlobUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationBlobUri = this._configurationBlobUri;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetGalleryApplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configurationBlobUri = undefined;
      this._order = undefined;
      this._tag = undefined;
      this._versionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configurationBlobUri = value.configurationBlobUri;
      this._order = value.order;
      this._tag = value.tag;
      this._versionId = value.versionId;
    }
  }

  // configuration_blob_uri - computed: false, optional: true, required: false
  private _configurationBlobUri?: string; 
  public get configurationBlobUri() {
    return this.getStringAttribute('configuration_blob_uri');
  }
  public set configurationBlobUri(value: string) {
    this._configurationBlobUri = value;
  }
  public resetConfigurationBlobUri() {
    this._configurationBlobUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationBlobUriInput() {
    return this._configurationBlobUri;
  }

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // version_id - computed: false, optional: false, required: true
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }
}

export class WindowsVirtualMachineScaleSetGalleryApplicationList extends cdktf.ComplexList {
  public internalValue? : WindowsVirtualMachineScaleSetGalleryApplication[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WindowsVirtualMachineScaleSetGalleryApplicationOutputReference {
    return new WindowsVirtualMachineScaleSetGalleryApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsVirtualMachineScaleSetIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#identity_ids WindowsVirtualMachineScaleSet#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#type WindowsVirtualMachineScaleSet#type}
  */
  readonly type: string;
}

export function windowsVirtualMachineScaleSetIdentityToTerraform(struct?: WindowsVirtualMachineScaleSetIdentityOutputReference | WindowsVirtualMachineScaleSetIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function windowsVirtualMachineScaleSetIdentityToHclTerraform(struct?: WindowsVirtualMachineScaleSetIdentityOutputReference | WindowsVirtualMachineScaleSetIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
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
    return this._type;
  }
}
export interface WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#tag WindowsVirtualMachineScaleSet#tag}
  */
  readonly tag: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#type WindowsVirtualMachineScaleSet#type}
  */
  readonly type: string;
}

export function windowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagToTerraform(struct?: WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function windowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagToHclTerraform(struct?: WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tag = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tag = value.tag;
      this._type = value.type;
    }
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
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
    return this._type;
  }
}

export class WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList extends cdktf.ComplexList {
  public internalValue? : WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference {
    return new WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#domain_name_label WindowsVirtualMachineScaleSet#domain_name_label}
  */
  readonly domainNameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#idle_timeout_in_minutes WindowsVirtualMachineScaleSet#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#public_ip_prefix_id WindowsVirtualMachineScaleSet#public_ip_prefix_id}
  */
  readonly publicIpPrefixId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#version WindowsVirtualMachineScaleSet#version}
  */
  readonly version?: string;
  /**
  * ip_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#ip_tag WindowsVirtualMachineScaleSet#ip_tag}
  */
  readonly ipTag?: WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag[] | cdktf.IResolvable;
}

export function windowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressToTerraform(struct?: WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name_label: cdktf.stringToTerraform(struct!.domainNameLabel),
    idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.idleTimeoutInMinutes),
    name: cdktf.stringToTerraform(struct!.name),
    public_ip_prefix_id: cdktf.stringToTerraform(struct!.publicIpPrefixId),
    version: cdktf.stringToTerraform(struct!.version),
    ip_tag: cdktf.listMapper(windowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagToTerraform, true)(struct!.ipTag),
  }
}


export function windowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressToHclTerraform(struct?: WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_name_label: {
      value: cdktf.stringToHclTerraform(struct!.domainNameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip_prefix_id: {
      value: cdktf.stringToHclTerraform(struct!.publicIpPrefixId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_tag: {
      value: cdktf.listMapperHcl(windowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagToHclTerraform, true)(struct!.ipTag),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainNameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainNameLabel = this._domainNameLabel;
    }
    if (this._idleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutInMinutes = this._idleTimeoutInMinutes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._publicIpPrefixId !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpPrefixId = this._publicIpPrefixId;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._ipTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTag = this._ipTag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainNameLabel = undefined;
      this._idleTimeoutInMinutes = undefined;
      this._name = undefined;
      this._publicIpPrefixId = undefined;
      this._version = undefined;
      this._ipTag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainNameLabel = value.domainNameLabel;
      this._idleTimeoutInMinutes = value.idleTimeoutInMinutes;
      this._name = value.name;
      this._publicIpPrefixId = value.publicIpPrefixId;
      this._version = value.version;
      this._ipTag.internalValue = value.ipTag;
    }
  }

  // domain_name_label - computed: false, optional: true, required: false
  private _domainNameLabel?: string; 
  public get domainNameLabel() {
    return this.getStringAttribute('domain_name_label');
  }
  public set domainNameLabel(value: string) {
    this._domainNameLabel = value;
  }
  public resetDomainNameLabel() {
    this._domainNameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameLabelInput() {
    return this._domainNameLabel;
  }

  // idle_timeout_in_minutes - computed: true, optional: true, required: false
  private _idleTimeoutInMinutes?: number; 
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: number) {
    this._idleTimeoutInMinutes = value;
  }
  public resetIdleTimeoutInMinutes() {
    this._idleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMinutesInput() {
    return this._idleTimeoutInMinutes;
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
    return this._name;
  }

  // public_ip_prefix_id - computed: false, optional: true, required: false
  private _publicIpPrefixId?: string; 
  public get publicIpPrefixId() {
    return this.getStringAttribute('public_ip_prefix_id');
  }
  public set publicIpPrefixId(value: string) {
    this._publicIpPrefixId = value;
  }
  public resetPublicIpPrefixId() {
    this._publicIpPrefixId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpPrefixIdInput() {
    return this._publicIpPrefixId;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // ip_tag - computed: false, optional: true, required: false
  private _ipTag = new WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList(this, "ip_tag", false);
  public get ipTag() {
    return this._ipTag;
  }
  public putIpTag(value: WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag[] | cdktf.IResolvable) {
    this._ipTag.internalValue = value;
  }
  public resetIpTag() {
    this._ipTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTagInput() {
    return this._ipTag.internalValue;
  }
}

export class WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList extends cdktf.ComplexList {
  public internalValue? : WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference {
    return new WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#application_gateway_backend_address_pool_ids WindowsVirtualMachineScaleSet#application_gateway_backend_address_pool_ids}
  */
  readonly applicationGatewayBackendAddressPoolIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#application_security_group_ids WindowsVirtualMachineScaleSet#application_security_group_ids}
  */
  readonly applicationSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#load_balancer_backend_address_pool_ids WindowsVirtualMachineScaleSet#load_balancer_backend_address_pool_ids}
  */
  readonly loadBalancerBackendAddressPoolIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#load_balancer_inbound_nat_rules_ids WindowsVirtualMachineScaleSet#load_balancer_inbound_nat_rules_ids}
  */
  readonly loadBalancerInboundNatRulesIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#primary WindowsVirtualMachineScaleSet#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#subnet_id WindowsVirtualMachineScaleSet#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#version WindowsVirtualMachineScaleSet#version}
  */
  readonly version?: string;
  /**
  * public_ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#public_ip_address WindowsVirtualMachineScaleSet#public_ip_address}
  */
  readonly publicIpAddress?: WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress[] | cdktf.IResolvable;
}

export function windowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationToTerraform(struct?: WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_gateway_backend_address_pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applicationGatewayBackendAddressPoolIds),
    application_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applicationSecurityGroupIds),
    load_balancer_backend_address_pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loadBalancerBackendAddressPoolIds),
    load_balancer_inbound_nat_rules_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loadBalancerInboundNatRulesIds),
    name: cdktf.stringToTerraform(struct!.name),
    primary: cdktf.booleanToTerraform(struct!.primary),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    version: cdktf.stringToTerraform(struct!.version),
    public_ip_address: cdktf.listMapper(windowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressToTerraform, true)(struct!.publicIpAddress),
  }
}


export function windowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationToHclTerraform(struct?: WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_gateway_backend_address_pool_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applicationGatewayBackendAddressPoolIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    application_security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applicationSecurityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    load_balancer_backend_address_pool_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loadBalancerBackendAddressPoolIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    load_balancer_inbound_nat_rules_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loadBalancerInboundNatRulesIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip_address: {
      value: cdktf.listMapperHcl(windowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressToHclTerraform, true)(struct!.publicIpAddress),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationGatewayBackendAddressPoolIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationGatewayBackendAddressPoolIds = this._applicationGatewayBackendAddressPoolIds;
    }
    if (this._applicationSecurityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationSecurityGroupIds = this._applicationSecurityGroupIds;
    }
    if (this._loadBalancerBackendAddressPoolIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerBackendAddressPoolIds = this._loadBalancerBackendAddressPoolIds;
    }
    if (this._loadBalancerInboundNatRulesIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerInboundNatRulesIds = this._loadBalancerInboundNatRulesIds;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._publicIpAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpAddress = this._publicIpAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationGatewayBackendAddressPoolIds = undefined;
      this._applicationSecurityGroupIds = undefined;
      this._loadBalancerBackendAddressPoolIds = undefined;
      this._loadBalancerInboundNatRulesIds = undefined;
      this._name = undefined;
      this._primary = undefined;
      this._subnetId = undefined;
      this._version = undefined;
      this._publicIpAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationGatewayBackendAddressPoolIds = value.applicationGatewayBackendAddressPoolIds;
      this._applicationSecurityGroupIds = value.applicationSecurityGroupIds;
      this._loadBalancerBackendAddressPoolIds = value.loadBalancerBackendAddressPoolIds;
      this._loadBalancerInboundNatRulesIds = value.loadBalancerInboundNatRulesIds;
      this._name = value.name;
      this._primary = value.primary;
      this._subnetId = value.subnetId;
      this._version = value.version;
      this._publicIpAddress.internalValue = value.publicIpAddress;
    }
  }

  // application_gateway_backend_address_pool_ids - computed: false, optional: true, required: false
  private _applicationGatewayBackendAddressPoolIds?: string[]; 
  public get applicationGatewayBackendAddressPoolIds() {
    return cdktf.Fn.tolist(this.getListAttribute('application_gateway_backend_address_pool_ids'));
  }
  public set applicationGatewayBackendAddressPoolIds(value: string[]) {
    this._applicationGatewayBackendAddressPoolIds = value;
  }
  public resetApplicationGatewayBackendAddressPoolIds() {
    this._applicationGatewayBackendAddressPoolIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationGatewayBackendAddressPoolIdsInput() {
    return this._applicationGatewayBackendAddressPoolIds;
  }

  // application_security_group_ids - computed: false, optional: true, required: false
  private _applicationSecurityGroupIds?: string[]; 
  public get applicationSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('application_security_group_ids'));
  }
  public set applicationSecurityGroupIds(value: string[]) {
    this._applicationSecurityGroupIds = value;
  }
  public resetApplicationSecurityGroupIds() {
    this._applicationSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSecurityGroupIdsInput() {
    return this._applicationSecurityGroupIds;
  }

  // load_balancer_backend_address_pool_ids - computed: false, optional: true, required: false
  private _loadBalancerBackendAddressPoolIds?: string[]; 
  public get loadBalancerBackendAddressPoolIds() {
    return cdktf.Fn.tolist(this.getListAttribute('load_balancer_backend_address_pool_ids'));
  }
  public set loadBalancerBackendAddressPoolIds(value: string[]) {
    this._loadBalancerBackendAddressPoolIds = value;
  }
  public resetLoadBalancerBackendAddressPoolIds() {
    this._loadBalancerBackendAddressPoolIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerBackendAddressPoolIdsInput() {
    return this._loadBalancerBackendAddressPoolIds;
  }

  // load_balancer_inbound_nat_rules_ids - computed: false, optional: true, required: false
  private _loadBalancerInboundNatRulesIds?: string[]; 
  public get loadBalancerInboundNatRulesIds() {
    return cdktf.Fn.tolist(this.getListAttribute('load_balancer_inbound_nat_rules_ids'));
  }
  public set loadBalancerInboundNatRulesIds(value: string[]) {
    this._loadBalancerInboundNatRulesIds = value;
  }
  public resetLoadBalancerInboundNatRulesIds() {
    this._loadBalancerInboundNatRulesIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInboundNatRulesIdsInput() {
    return this._loadBalancerInboundNatRulesIds;
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
    return this._name;
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // public_ip_address - computed: false, optional: true, required: false
  private _publicIpAddress = new WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList(this, "public_ip_address", false);
  public get publicIpAddress() {
    return this._publicIpAddress;
  }
  public putPublicIpAddress(value: WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress[] | cdktf.IResolvable) {
    this._publicIpAddress.internalValue = value;
  }
  public resetPublicIpAddress() {
    this._publicIpAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressInput() {
    return this._publicIpAddress.internalValue;
  }
}

export class WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList extends cdktf.ComplexList {
  public internalValue? : WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference {
    return new WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsVirtualMachineScaleSetNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#dns_servers WindowsVirtualMachineScaleSet#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#enable_accelerated_networking WindowsVirtualMachineScaleSet#enable_accelerated_networking}
  */
  readonly enableAcceleratedNetworking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#enable_ip_forwarding WindowsVirtualMachineScaleSet#enable_ip_forwarding}
  */
  readonly enableIpForwarding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#network_security_group_id WindowsVirtualMachineScaleSet#network_security_group_id}
  */
  readonly networkSecurityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#primary WindowsVirtualMachineScaleSet#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * ip_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#ip_configuration WindowsVirtualMachineScaleSet#ip_configuration}
  */
  readonly ipConfiguration: WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration[] | cdktf.IResolvable;
}

export function windowsVirtualMachineScaleSetNetworkInterfaceToTerraform(struct?: WindowsVirtualMachineScaleSetNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServers),
    enable_accelerated_networking: cdktf.booleanToTerraform(struct!.enableAcceleratedNetworking),
    enable_ip_forwarding: cdktf.booleanToTerraform(struct!.enableIpForwarding),
    name: cdktf.stringToTerraform(struct!.name),
    network_security_group_id: cdktf.stringToTerraform(struct!.networkSecurityGroupId),
    primary: cdktf.booleanToTerraform(struct!.primary),
    ip_configuration: cdktf.listMapper(windowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationToTerraform, true)(struct!.ipConfiguration),
  }
}


export function windowsVirtualMachineScaleSetNetworkInterfaceToHclTerraform(struct?: WindowsVirtualMachineScaleSetNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_accelerated_networking: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceleratedNetworking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ip_forwarding: {
      value: cdktf.booleanToHclTerraform(struct!.enableIpForwarding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.networkSecurityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_configuration: {
      value: cdktf.listMapperHcl(windowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationToHclTerraform, true)(struct!.ipConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServers = this._dnsServers;
    }
    if (this._enableAcceleratedNetworking !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceleratedNetworking = this._enableAcceleratedNetworking;
    }
    if (this._enableIpForwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpForwarding = this._enableIpForwarding;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkSecurityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSecurityGroupId = this._networkSecurityGroupId;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._ipConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipConfiguration = this._ipConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsServers = undefined;
      this._enableAcceleratedNetworking = undefined;
      this._enableIpForwarding = undefined;
      this._name = undefined;
      this._networkSecurityGroupId = undefined;
      this._primary = undefined;
      this._ipConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsServers = value.dnsServers;
      this._enableAcceleratedNetworking = value.enableAcceleratedNetworking;
      this._enableIpForwarding = value.enableIpForwarding;
      this._name = value.name;
      this._networkSecurityGroupId = value.networkSecurityGroupId;
      this._primary = value.primary;
      this._ipConfiguration.internalValue = value.ipConfiguration;
    }
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // enable_accelerated_networking - computed: false, optional: true, required: false
  private _enableAcceleratedNetworking?: boolean | cdktf.IResolvable; 
  public get enableAcceleratedNetworking() {
    return this.getBooleanAttribute('enable_accelerated_networking');
  }
  public set enableAcceleratedNetworking(value: boolean | cdktf.IResolvable) {
    this._enableAcceleratedNetworking = value;
  }
  public resetEnableAcceleratedNetworking() {
    this._enableAcceleratedNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAcceleratedNetworkingInput() {
    return this._enableAcceleratedNetworking;
  }

  // enable_ip_forwarding - computed: false, optional: true, required: false
  private _enableIpForwarding?: boolean | cdktf.IResolvable; 
  public get enableIpForwarding() {
    return this.getBooleanAttribute('enable_ip_forwarding');
  }
  public set enableIpForwarding(value: boolean | cdktf.IResolvable) {
    this._enableIpForwarding = value;
  }
  public resetEnableIpForwarding() {
    this._enableIpForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpForwardingInput() {
    return this._enableIpForwarding;
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
    return this._name;
  }

  // network_security_group_id - computed: false, optional: true, required: false
  private _networkSecurityGroupId?: string; 
  public get networkSecurityGroupId() {
    return this.getStringAttribute('network_security_group_id');
  }
  public set networkSecurityGroupId(value: string) {
    this._networkSecurityGroupId = value;
  }
  public resetNetworkSecurityGroupId() {
    this._networkSecurityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityGroupIdInput() {
    return this._networkSecurityGroupId;
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // ip_configuration - computed: false, optional: false, required: true
  private _ipConfiguration = new WindowsVirtualMachineScaleSetNetworkInterfaceIpConfigurationList(this, "ip_configuration", false);
  public get ipConfiguration() {
    return this._ipConfiguration;
  }
  public putIpConfiguration(value: WindowsVirtualMachineScaleSetNetworkInterfaceIpConfiguration[] | cdktf.IResolvable) {
    this._ipConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationInput() {
    return this._ipConfiguration.internalValue;
  }
}

export class WindowsVirtualMachineScaleSetNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : WindowsVirtualMachineScaleSetNetworkInterface[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference {
    return new WindowsVirtualMachineScaleSetNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#option WindowsVirtualMachineScaleSet#option}
  */
  readonly option: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#placement WindowsVirtualMachineScaleSet#placement}
  */
  readonly placement?: string;
}

export function windowsVirtualMachineScaleSetOsDiskDiffDiskSettingsToTerraform(struct?: WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference | WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    option: cdktf.stringToTerraform(struct!.option),
    placement: cdktf.stringToTerraform(struct!.placement),
  }
}


export function windowsVirtualMachineScaleSetOsDiskDiffDiskSettingsToHclTerraform(struct?: WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference | WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    option: {
      value: cdktf.stringToHclTerraform(struct!.option),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    placement: {
      value: cdktf.stringToHclTerraform(struct!.placement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
    }
    if (this._placement !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._option = undefined;
      this._placement = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._option = value.option;
      this._placement = value.placement;
    }
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
    return this._option;
  }

  // placement - computed: false, optional: true, required: false
  private _placement?: string; 
  public get placement() {
    return this.getStringAttribute('placement');
  }
  public set placement(value: string) {
    this._placement = value;
  }
  public resetPlacement() {
    this._placement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement;
  }
}
export interface WindowsVirtualMachineScaleSetOsDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#caching WindowsVirtualMachineScaleSet#caching}
  */
  readonly caching: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#disk_encryption_set_id WindowsVirtualMachineScaleSet#disk_encryption_set_id}
  */
  readonly diskEncryptionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#disk_size_gb WindowsVirtualMachineScaleSet#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#secure_vm_disk_encryption_set_id WindowsVirtualMachineScaleSet#secure_vm_disk_encryption_set_id}
  */
  readonly secureVmDiskEncryptionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#security_encryption_type WindowsVirtualMachineScaleSet#security_encryption_type}
  */
  readonly securityEncryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#storage_account_type WindowsVirtualMachineScaleSet#storage_account_type}
  */
  readonly storageAccountType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#write_accelerator_enabled WindowsVirtualMachineScaleSet#write_accelerator_enabled}
  */
  readonly writeAcceleratorEnabled?: boolean | cdktf.IResolvable;
  /**
  * diff_disk_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#diff_disk_settings WindowsVirtualMachineScaleSet#diff_disk_settings}
  */
  readonly diffDiskSettings?: WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings;
}

export function windowsVirtualMachineScaleSetOsDiskToTerraform(struct?: WindowsVirtualMachineScaleSetOsDiskOutputReference | WindowsVirtualMachineScaleSetOsDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    disk_encryption_set_id: cdktf.stringToTerraform(struct!.diskEncryptionSetId),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    secure_vm_disk_encryption_set_id: cdktf.stringToTerraform(struct!.secureVmDiskEncryptionSetId),
    security_encryption_type: cdktf.stringToTerraform(struct!.securityEncryptionType),
    storage_account_type: cdktf.stringToTerraform(struct!.storageAccountType),
    write_accelerator_enabled: cdktf.booleanToTerraform(struct!.writeAcceleratorEnabled),
    diff_disk_settings: windowsVirtualMachineScaleSetOsDiskDiffDiskSettingsToTerraform(struct!.diffDiskSettings),
  }
}


export function windowsVirtualMachineScaleSetOsDiskToHclTerraform(struct?: WindowsVirtualMachineScaleSetOsDiskOutputReference | WindowsVirtualMachineScaleSetOsDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    caching: {
      value: cdktf.stringToHclTerraform(struct!.caching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_encryption_set_id: {
      value: cdktf.stringToHclTerraform(struct!.diskEncryptionSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secure_vm_disk_encryption_set_id: {
      value: cdktf.stringToHclTerraform(struct!.secureVmDiskEncryptionSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_encryption_type: {
      value: cdktf.stringToHclTerraform(struct!.securityEncryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_type: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_accelerator_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.writeAcceleratorEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    diff_disk_settings: {
      value: windowsVirtualMachineScaleSetOsDiskDiffDiskSettingsToHclTerraform(struct!.diffDiskSettings),
      isBlock: true,
      type: "list",
      storageClassType: "WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetOsDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetOsDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caching !== undefined) {
      hasAnyValues = true;
      internalValueResult.caching = this._caching;
    }
    if (this._diskEncryptionSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionSetId = this._diskEncryptionSetId;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._secureVmDiskEncryptionSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureVmDiskEncryptionSetId = this._secureVmDiskEncryptionSetId;
    }
    if (this._securityEncryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityEncryptionType = this._securityEncryptionType;
    }
    if (this._storageAccountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountType = this._storageAccountType;
    }
    if (this._writeAcceleratorEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeAcceleratorEnabled = this._writeAcceleratorEnabled;
    }
    if (this._diffDiskSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diffDiskSettings = this._diffDiskSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetOsDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caching = undefined;
      this._diskEncryptionSetId = undefined;
      this._diskSizeGb = undefined;
      this._secureVmDiskEncryptionSetId = undefined;
      this._securityEncryptionType = undefined;
      this._storageAccountType = undefined;
      this._writeAcceleratorEnabled = undefined;
      this._diffDiskSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caching = value.caching;
      this._diskEncryptionSetId = value.diskEncryptionSetId;
      this._diskSizeGb = value.diskSizeGb;
      this._secureVmDiskEncryptionSetId = value.secureVmDiskEncryptionSetId;
      this._securityEncryptionType = value.securityEncryptionType;
      this._storageAccountType = value.storageAccountType;
      this._writeAcceleratorEnabled = value.writeAcceleratorEnabled;
      this._diffDiskSettings.internalValue = value.diffDiskSettings;
    }
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
    return this._caching;
  }

  // disk_encryption_set_id - computed: false, optional: true, required: false
  private _diskEncryptionSetId?: string; 
  public get diskEncryptionSetId() {
    return this.getStringAttribute('disk_encryption_set_id');
  }
  public set diskEncryptionSetId(value: string) {
    this._diskEncryptionSetId = value;
  }
  public resetDiskEncryptionSetId() {
    this._diskEncryptionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetIdInput() {
    return this._diskEncryptionSetId;
  }

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // secure_vm_disk_encryption_set_id - computed: false, optional: true, required: false
  private _secureVmDiskEncryptionSetId?: string; 
  public get secureVmDiskEncryptionSetId() {
    return this.getStringAttribute('secure_vm_disk_encryption_set_id');
  }
  public set secureVmDiskEncryptionSetId(value: string) {
    this._secureVmDiskEncryptionSetId = value;
  }
  public resetSecureVmDiskEncryptionSetId() {
    this._secureVmDiskEncryptionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureVmDiskEncryptionSetIdInput() {
    return this._secureVmDiskEncryptionSetId;
  }

  // security_encryption_type - computed: false, optional: true, required: false
  private _securityEncryptionType?: string; 
  public get securityEncryptionType() {
    return this.getStringAttribute('security_encryption_type');
  }
  public set securityEncryptionType(value: string) {
    this._securityEncryptionType = value;
  }
  public resetSecurityEncryptionType() {
    this._securityEncryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityEncryptionTypeInput() {
    return this._securityEncryptionType;
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
    return this._storageAccountType;
  }

  // write_accelerator_enabled - computed: false, optional: true, required: false
  private _writeAcceleratorEnabled?: boolean | cdktf.IResolvable; 
  public get writeAcceleratorEnabled() {
    return this.getBooleanAttribute('write_accelerator_enabled');
  }
  public set writeAcceleratorEnabled(value: boolean | cdktf.IResolvable) {
    this._writeAcceleratorEnabled = value;
  }
  public resetWriteAcceleratorEnabled() {
    this._writeAcceleratorEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeAcceleratorEnabledInput() {
    return this._writeAcceleratorEnabled;
  }

  // diff_disk_settings - computed: false, optional: true, required: false
  private _diffDiskSettings = new WindowsVirtualMachineScaleSetOsDiskDiffDiskSettingsOutputReference(this, "diff_disk_settings");
  public get diffDiskSettings() {
    return this._diffDiskSettings;
  }
  public putDiffDiskSettings(value: WindowsVirtualMachineScaleSetOsDiskDiffDiskSettings) {
    this._diffDiskSettings.internalValue = value;
  }
  public resetDiffDiskSettings() {
    this._diffDiskSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffDiskSettingsInput() {
    return this._diffDiskSettings.internalValue;
  }
}
export interface WindowsVirtualMachineScaleSetPlan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#name WindowsVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#product WindowsVirtualMachineScaleSet#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#publisher WindowsVirtualMachineScaleSet#publisher}
  */
  readonly publisher: string;
}

export function windowsVirtualMachineScaleSetPlanToTerraform(struct?: WindowsVirtualMachineScaleSetPlanOutputReference | WindowsVirtualMachineScaleSetPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.stringToTerraform(struct!.product),
    publisher: cdktf.stringToTerraform(struct!.publisher),
  }
}


export function windowsVirtualMachineScaleSetPlanToHclTerraform(struct?: WindowsVirtualMachineScaleSetPlanOutputReference | WindowsVirtualMachineScaleSetPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product: {
      value: cdktf.stringToHclTerraform(struct!.product),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publisher: {
      value: cdktf.stringToHclTerraform(struct!.publisher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetPlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetPlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetPlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._product = undefined;
      this._publisher = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._product = value.product;
      this._publisher = value.publisher;
    }
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
    return this._name;
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
    return this._product;
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
    return this._publisher;
  }
}
export interface WindowsVirtualMachineScaleSetRollingUpgradePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#cross_zone_upgrades_enabled WindowsVirtualMachineScaleSet#cross_zone_upgrades_enabled}
  */
  readonly crossZoneUpgradesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#max_batch_instance_percent WindowsVirtualMachineScaleSet#max_batch_instance_percent}
  */
  readonly maxBatchInstancePercent: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#max_unhealthy_instance_percent WindowsVirtualMachineScaleSet#max_unhealthy_instance_percent}
  */
  readonly maxUnhealthyInstancePercent: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#max_unhealthy_upgraded_instance_percent WindowsVirtualMachineScaleSet#max_unhealthy_upgraded_instance_percent}
  */
  readonly maxUnhealthyUpgradedInstancePercent: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#maximum_surge_instances_enabled WindowsVirtualMachineScaleSet#maximum_surge_instances_enabled}
  */
  readonly maximumSurgeInstancesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#pause_time_between_batches WindowsVirtualMachineScaleSet#pause_time_between_batches}
  */
  readonly pauseTimeBetweenBatches: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#prioritize_unhealthy_instances_enabled WindowsVirtualMachineScaleSet#prioritize_unhealthy_instances_enabled}
  */
  readonly prioritizeUnhealthyInstancesEnabled?: boolean | cdktf.IResolvable;
}

export function windowsVirtualMachineScaleSetRollingUpgradePolicyToTerraform(struct?: WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference | WindowsVirtualMachineScaleSetRollingUpgradePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cross_zone_upgrades_enabled: cdktf.booleanToTerraform(struct!.crossZoneUpgradesEnabled),
    max_batch_instance_percent: cdktf.numberToTerraform(struct!.maxBatchInstancePercent),
    max_unhealthy_instance_percent: cdktf.numberToTerraform(struct!.maxUnhealthyInstancePercent),
    max_unhealthy_upgraded_instance_percent: cdktf.numberToTerraform(struct!.maxUnhealthyUpgradedInstancePercent),
    maximum_surge_instances_enabled: cdktf.booleanToTerraform(struct!.maximumSurgeInstancesEnabled),
    pause_time_between_batches: cdktf.stringToTerraform(struct!.pauseTimeBetweenBatches),
    prioritize_unhealthy_instances_enabled: cdktf.booleanToTerraform(struct!.prioritizeUnhealthyInstancesEnabled),
  }
}


export function windowsVirtualMachineScaleSetRollingUpgradePolicyToHclTerraform(struct?: WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference | WindowsVirtualMachineScaleSetRollingUpgradePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cross_zone_upgrades_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.crossZoneUpgradesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_batch_instance_percent: {
      value: cdktf.numberToHclTerraform(struct!.maxBatchInstancePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_unhealthy_instance_percent: {
      value: cdktf.numberToHclTerraform(struct!.maxUnhealthyInstancePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_unhealthy_upgraded_instance_percent: {
      value: cdktf.numberToHclTerraform(struct!.maxUnhealthyUpgradedInstancePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_surge_instances_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.maximumSurgeInstancesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pause_time_between_batches: {
      value: cdktf.stringToHclTerraform(struct!.pauseTimeBetweenBatches),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prioritize_unhealthy_instances_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.prioritizeUnhealthyInstancesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetRollingUpgradePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossZoneUpgradesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossZoneUpgradesEnabled = this._crossZoneUpgradesEnabled;
    }
    if (this._maxBatchInstancePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBatchInstancePercent = this._maxBatchInstancePercent;
    }
    if (this._maxUnhealthyInstancePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnhealthyInstancePercent = this._maxUnhealthyInstancePercent;
    }
    if (this._maxUnhealthyUpgradedInstancePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnhealthyUpgradedInstancePercent = this._maxUnhealthyUpgradedInstancePercent;
    }
    if (this._maximumSurgeInstancesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumSurgeInstancesEnabled = this._maximumSurgeInstancesEnabled;
    }
    if (this._pauseTimeBetweenBatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseTimeBetweenBatches = this._pauseTimeBetweenBatches;
    }
    if (this._prioritizeUnhealthyInstancesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.prioritizeUnhealthyInstancesEnabled = this._prioritizeUnhealthyInstancesEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetRollingUpgradePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crossZoneUpgradesEnabled = undefined;
      this._maxBatchInstancePercent = undefined;
      this._maxUnhealthyInstancePercent = undefined;
      this._maxUnhealthyUpgradedInstancePercent = undefined;
      this._maximumSurgeInstancesEnabled = undefined;
      this._pauseTimeBetweenBatches = undefined;
      this._prioritizeUnhealthyInstancesEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crossZoneUpgradesEnabled = value.crossZoneUpgradesEnabled;
      this._maxBatchInstancePercent = value.maxBatchInstancePercent;
      this._maxUnhealthyInstancePercent = value.maxUnhealthyInstancePercent;
      this._maxUnhealthyUpgradedInstancePercent = value.maxUnhealthyUpgradedInstancePercent;
      this._maximumSurgeInstancesEnabled = value.maximumSurgeInstancesEnabled;
      this._pauseTimeBetweenBatches = value.pauseTimeBetweenBatches;
      this._prioritizeUnhealthyInstancesEnabled = value.prioritizeUnhealthyInstancesEnabled;
    }
  }

  // cross_zone_upgrades_enabled - computed: false, optional: true, required: false
  private _crossZoneUpgradesEnabled?: boolean | cdktf.IResolvable; 
  public get crossZoneUpgradesEnabled() {
    return this.getBooleanAttribute('cross_zone_upgrades_enabled');
  }
  public set crossZoneUpgradesEnabled(value: boolean | cdktf.IResolvable) {
    this._crossZoneUpgradesEnabled = value;
  }
  public resetCrossZoneUpgradesEnabled() {
    this._crossZoneUpgradesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossZoneUpgradesEnabledInput() {
    return this._crossZoneUpgradesEnabled;
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
    return this._maxBatchInstancePercent;
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
    return this._maxUnhealthyInstancePercent;
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
    return this._maxUnhealthyUpgradedInstancePercent;
  }

  // maximum_surge_instances_enabled - computed: false, optional: true, required: false
  private _maximumSurgeInstancesEnabled?: boolean | cdktf.IResolvable; 
  public get maximumSurgeInstancesEnabled() {
    return this.getBooleanAttribute('maximum_surge_instances_enabled');
  }
  public set maximumSurgeInstancesEnabled(value: boolean | cdktf.IResolvable) {
    this._maximumSurgeInstancesEnabled = value;
  }
  public resetMaximumSurgeInstancesEnabled() {
    this._maximumSurgeInstancesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumSurgeInstancesEnabledInput() {
    return this._maximumSurgeInstancesEnabled;
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
    return this._pauseTimeBetweenBatches;
  }

  // prioritize_unhealthy_instances_enabled - computed: false, optional: true, required: false
  private _prioritizeUnhealthyInstancesEnabled?: boolean | cdktf.IResolvable; 
  public get prioritizeUnhealthyInstancesEnabled() {
    return this.getBooleanAttribute('prioritize_unhealthy_instances_enabled');
  }
  public set prioritizeUnhealthyInstancesEnabled(value: boolean | cdktf.IResolvable) {
    this._prioritizeUnhealthyInstancesEnabled = value;
  }
  public resetPrioritizeUnhealthyInstancesEnabled() {
    this._prioritizeUnhealthyInstancesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioritizeUnhealthyInstancesEnabledInput() {
    return this._prioritizeUnhealthyInstancesEnabled;
  }
}
export interface WindowsVirtualMachineScaleSetScaleIn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#force_deletion_enabled WindowsVirtualMachineScaleSet#force_deletion_enabled}
  */
  readonly forceDeletionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#rule WindowsVirtualMachineScaleSet#rule}
  */
  readonly rule?: string;
}

export function windowsVirtualMachineScaleSetScaleInToTerraform(struct?: WindowsVirtualMachineScaleSetScaleInOutputReference | WindowsVirtualMachineScaleSetScaleIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_deletion_enabled: cdktf.booleanToTerraform(struct!.forceDeletionEnabled),
    rule: cdktf.stringToTerraform(struct!.rule),
  }
}


export function windowsVirtualMachineScaleSetScaleInToHclTerraform(struct?: WindowsVirtualMachineScaleSetScaleInOutputReference | WindowsVirtualMachineScaleSetScaleIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_deletion_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.forceDeletionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetScaleInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetScaleIn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceDeletionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceDeletionEnabled = this._forceDeletionEnabled;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetScaleIn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forceDeletionEnabled = undefined;
      this._rule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forceDeletionEnabled = value.forceDeletionEnabled;
      this._rule = value.rule;
    }
  }

  // force_deletion_enabled - computed: false, optional: true, required: false
  private _forceDeletionEnabled?: boolean | cdktf.IResolvable; 
  public get forceDeletionEnabled() {
    return this.getBooleanAttribute('force_deletion_enabled');
  }
  public set forceDeletionEnabled(value: boolean | cdktf.IResolvable) {
    this._forceDeletionEnabled = value;
  }
  public resetForceDeletionEnabled() {
    this._forceDeletionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeletionEnabledInput() {
    return this._forceDeletionEnabled;
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }
}
export interface WindowsVirtualMachineScaleSetSecretCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#store WindowsVirtualMachineScaleSet#store}
  */
  readonly store: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#url WindowsVirtualMachineScaleSet#url}
  */
  readonly url: string;
}

export function windowsVirtualMachineScaleSetSecretCertificateToTerraform(struct?: WindowsVirtualMachineScaleSetSecretCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    store: cdktf.stringToTerraform(struct!.store),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function windowsVirtualMachineScaleSetSecretCertificateToHclTerraform(struct?: WindowsVirtualMachineScaleSetSecretCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    store: {
      value: cdktf.stringToHclTerraform(struct!.store),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetSecretCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetSecretCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._store !== undefined) {
      hasAnyValues = true;
      internalValueResult.store = this._store;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetSecretCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._store = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._store = value.store;
      this._url = value.url;
    }
  }

  // store - computed: false, optional: false, required: true
  private _store?: string; 
  public get store() {
    return this.getStringAttribute('store');
  }
  public set store(value: string) {
    this._store = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storeInput() {
    return this._store;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class WindowsVirtualMachineScaleSetSecretCertificateList extends cdktf.ComplexList {
  public internalValue? : WindowsVirtualMachineScaleSetSecretCertificate[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WindowsVirtualMachineScaleSetSecretCertificateOutputReference {
    return new WindowsVirtualMachineScaleSetSecretCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsVirtualMachineScaleSetSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#key_vault_id WindowsVirtualMachineScaleSet#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#certificate WindowsVirtualMachineScaleSet#certificate}
  */
  readonly certificate: WindowsVirtualMachineScaleSetSecretCertificate[] | cdktf.IResolvable;
}

export function windowsVirtualMachineScaleSetSecretToTerraform(struct?: WindowsVirtualMachineScaleSetSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    certificate: cdktf.listMapper(windowsVirtualMachineScaleSetSecretCertificateToTerraform, true)(struct!.certificate),
  }
}


export function windowsVirtualMachineScaleSetSecretToHclTerraform(struct?: WindowsVirtualMachineScaleSetSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate: {
      value: cdktf.listMapperHcl(windowsVirtualMachineScaleSetSecretCertificateToHclTerraform, true)(struct!.certificate),
      isBlock: true,
      type: "set",
      storageClassType: "WindowsVirtualMachineScaleSetSecretCertificateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultId = this._keyVaultId;
    }
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyVaultId = undefined;
      this._certificate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyVaultId = value.keyVaultId;
      this._certificate.internalValue = value.certificate;
    }
  }

  // key_vault_id - computed: false, optional: false, required: true
  private _keyVaultId?: string; 
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId;
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate = new WindowsVirtualMachineScaleSetSecretCertificateList(this, "certificate", true);
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: WindowsVirtualMachineScaleSetSecretCertificate[] | cdktf.IResolvable) {
    this._certificate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }
}

export class WindowsVirtualMachineScaleSetSecretList extends cdktf.ComplexList {
  public internalValue? : WindowsVirtualMachineScaleSetSecret[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WindowsVirtualMachineScaleSetSecretOutputReference {
    return new WindowsVirtualMachineScaleSetSecretOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WindowsVirtualMachineScaleSetSourceImageReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#offer WindowsVirtualMachineScaleSet#offer}
  */
  readonly offer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#publisher WindowsVirtualMachineScaleSet#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#sku WindowsVirtualMachineScaleSet#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#version WindowsVirtualMachineScaleSet#version}
  */
  readonly version: string;
}

export function windowsVirtualMachineScaleSetSourceImageReferenceToTerraform(struct?: WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference | WindowsVirtualMachineScaleSetSourceImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function windowsVirtualMachineScaleSetSourceImageReferenceToHclTerraform(struct?: WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference | WindowsVirtualMachineScaleSetSourceImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offer: {
      value: cdktf.stringToHclTerraform(struct!.offer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publisher: {
      value: cdktf.stringToHclTerraform(struct!.publisher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sku: {
      value: cdktf.stringToHclTerraform(struct!.sku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetSourceImageReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offer !== undefined) {
      hasAnyValues = true;
      internalValueResult.offer = this._offer;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._sku !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetSourceImageReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._offer = undefined;
      this._publisher = undefined;
      this._sku = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._offer = value.offer;
      this._publisher = value.publisher;
      this._sku = value.sku;
      this._version = value.version;
    }
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
    return this._offer;
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
    return this._publisher;
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
    return this._sku;
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
    return this._version;
  }
}
export interface WindowsVirtualMachineScaleSetSpotRestore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#enabled WindowsVirtualMachineScaleSet#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#timeout WindowsVirtualMachineScaleSet#timeout}
  */
  readonly timeout?: string;
}

export function windowsVirtualMachineScaleSetSpotRestoreToTerraform(struct?: WindowsVirtualMachineScaleSetSpotRestoreOutputReference | WindowsVirtualMachineScaleSetSpotRestore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function windowsVirtualMachineScaleSetSpotRestoreToHclTerraform(struct?: WindowsVirtualMachineScaleSetSpotRestoreOutputReference | WindowsVirtualMachineScaleSetSpotRestore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetSpotRestoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetSpotRestore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetSpotRestore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._timeout = value.timeout;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface WindowsVirtualMachineScaleSetTerminationNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#enabled WindowsVirtualMachineScaleSet#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#timeout WindowsVirtualMachineScaleSet#timeout}
  */
  readonly timeout?: string;
}

export function windowsVirtualMachineScaleSetTerminationNotificationToTerraform(struct?: WindowsVirtualMachineScaleSetTerminationNotificationOutputReference | WindowsVirtualMachineScaleSetTerminationNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function windowsVirtualMachineScaleSetTerminationNotificationToHclTerraform(struct?: WindowsVirtualMachineScaleSetTerminationNotificationOutputReference | WindowsVirtualMachineScaleSetTerminationNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetTerminationNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetTerminationNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetTerminationNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._timeout = value.timeout;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface WindowsVirtualMachineScaleSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#create WindowsVirtualMachineScaleSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#delete WindowsVirtualMachineScaleSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#read WindowsVirtualMachineScaleSet#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#update WindowsVirtualMachineScaleSet#update}
  */
  readonly update?: string;
}

export function windowsVirtualMachineScaleSetTimeoutsToTerraform(struct?: WindowsVirtualMachineScaleSetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function windowsVirtualMachineScaleSetTimeoutsToHclTerraform(struct?: WindowsVirtualMachineScaleSetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface WindowsVirtualMachineScaleSetWinrmListener {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#certificate_url WindowsVirtualMachineScaleSet#certificate_url}
  */
  readonly certificateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#protocol WindowsVirtualMachineScaleSet#protocol}
  */
  readonly protocol: string;
}

export function windowsVirtualMachineScaleSetWinrmListenerToTerraform(struct?: WindowsVirtualMachineScaleSetWinrmListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function windowsVirtualMachineScaleSetWinrmListenerToHclTerraform(struct?: WindowsVirtualMachineScaleSetWinrmListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_url: {
      value: cdktf.stringToHclTerraform(struct!.certificateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WindowsVirtualMachineScaleSetWinrmListenerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WindowsVirtualMachineScaleSetWinrmListener | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateUrl = this._certificateUrl;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WindowsVirtualMachineScaleSetWinrmListener | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateUrl = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateUrl = value.certificateUrl;
      this._protocol = value.protocol;
    }
  }

  // certificate_url - computed: false, optional: true, required: false
  private _certificateUrl?: string; 
  public get certificateUrl() {
    return this.getStringAttribute('certificate_url');
  }
  public set certificateUrl(value: string) {
    this._certificateUrl = value;
  }
  public resetCertificateUrl() {
    this._certificateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateUrlInput() {
    return this._certificateUrl;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class WindowsVirtualMachineScaleSetWinrmListenerList extends cdktf.ComplexList {
  public internalValue? : WindowsVirtualMachineScaleSetWinrmListener[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WindowsVirtualMachineScaleSetWinrmListenerOutputReference {
    return new WindowsVirtualMachineScaleSetWinrmListenerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set azurerm_windows_virtual_machine_scale_set}
*/
export class WindowsVirtualMachineScaleSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_windows_virtual_machine_scale_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WindowsVirtualMachineScaleSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WindowsVirtualMachineScaleSet to import
  * @param importFromId The id of the existing WindowsVirtualMachineScaleSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WindowsVirtualMachineScaleSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_windows_virtual_machine_scale_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/windows_virtual_machine_scale_set azurerm_windows_virtual_machine_scale_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WindowsVirtualMachineScaleSetConfig
  */
  public constructor(scope: Construct, id: string, config: WindowsVirtualMachineScaleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_windows_virtual_machine_scale_set',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminPassword = config.adminPassword;
    this._adminUsername = config.adminUsername;
    this._capacityReservationGroupId = config.capacityReservationGroupId;
    this._computerNamePrefix = config.computerNamePrefix;
    this._customData = config.customData;
    this._doNotRunExtensionsOnOverprovisionedMachines = config.doNotRunExtensionsOnOverprovisionedMachines;
    this._edgeZone = config.edgeZone;
    this._enableAutomaticUpdates = config.enableAutomaticUpdates;
    this._encryptionAtHostEnabled = config.encryptionAtHostEnabled;
    this._evictionPolicy = config.evictionPolicy;
    this._extensionOperationsEnabled = config.extensionOperationsEnabled;
    this._extensionsTimeBudget = config.extensionsTimeBudget;
    this._healthProbeId = config.healthProbeId;
    this._hostGroupId = config.hostGroupId;
    this._id = config.id;
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
    this._secureBootEnabled = config.secureBootEnabled;
    this._singlePlacementGroup = config.singlePlacementGroup;
    this._sku = config.sku;
    this._sourceImageId = config.sourceImageId;
    this._tags = config.tags;
    this._timezone = config.timezone;
    this._upgradeMode = config.upgradeMode;
    this._userData = config.userData;
    this._vtpmEnabled = config.vtpmEnabled;
    this._zoneBalance = config.zoneBalance;
    this._zones = config.zones;
    this._additionalCapabilities.internalValue = config.additionalCapabilities;
    this._additionalUnattendContent.internalValue = config.additionalUnattendContent;
    this._automaticInstanceRepair.internalValue = config.automaticInstanceRepair;
    this._automaticOsUpgradePolicy.internalValue = config.automaticOsUpgradePolicy;
    this._bootDiagnostics.internalValue = config.bootDiagnostics;
    this._dataDisk.internalValue = config.dataDisk;
    this._extension.internalValue = config.extension;
    this._galleryApplication.internalValue = config.galleryApplication;
    this._identity.internalValue = config.identity;
    this._networkInterface.internalValue = config.networkInterface;
    this._osDisk.internalValue = config.osDisk;
    this._plan.internalValue = config.plan;
    this._rollingUpgradePolicy.internalValue = config.rollingUpgradePolicy;
    this._scaleIn.internalValue = config.scaleIn;
    this._secret.internalValue = config.secret;
    this._sourceImageReference.internalValue = config.sourceImageReference;
    this._spotRestore.internalValue = config.spotRestore;
    this._terminationNotification.internalValue = config.terminationNotification;
    this._timeouts.internalValue = config.timeouts;
    this._winrmListener.internalValue = config.winrmListener;
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
    return this._adminPassword;
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
    return this._adminUsername;
  }

  // capacity_reservation_group_id - computed: false, optional: true, required: false
  private _capacityReservationGroupId?: string; 
  public get capacityReservationGroupId() {
    return this.getStringAttribute('capacity_reservation_group_id');
  }
  public set capacityReservationGroupId(value: string) {
    this._capacityReservationGroupId = value;
  }
  public resetCapacityReservationGroupId() {
    this._capacityReservationGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationGroupIdInput() {
    return this._capacityReservationGroupId;
  }

  // computer_name_prefix - computed: true, optional: true, required: false
  private _computerNamePrefix?: string; 
  public get computerNamePrefix() {
    return this.getStringAttribute('computer_name_prefix');
  }
  public set computerNamePrefix(value: string) {
    this._computerNamePrefix = value;
  }
  public resetComputerNamePrefix() {
    this._computerNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computerNamePrefixInput() {
    return this._computerNamePrefix;
  }

  // custom_data - computed: false, optional: true, required: false
  private _customData?: string; 
  public get customData() {
    return this.getStringAttribute('custom_data');
  }
  public set customData(value: string) {
    this._customData = value;
  }
  public resetCustomData() {
    this._customData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataInput() {
    return this._customData;
  }

  // do_not_run_extensions_on_overprovisioned_machines - computed: false, optional: true, required: false
  private _doNotRunExtensionsOnOverprovisionedMachines?: boolean | cdktf.IResolvable; 
  public get doNotRunExtensionsOnOverprovisionedMachines() {
    return this.getBooleanAttribute('do_not_run_extensions_on_overprovisioned_machines');
  }
  public set doNotRunExtensionsOnOverprovisionedMachines(value: boolean | cdktf.IResolvable) {
    this._doNotRunExtensionsOnOverprovisionedMachines = value;
  }
  public resetDoNotRunExtensionsOnOverprovisionedMachines() {
    this._doNotRunExtensionsOnOverprovisionedMachines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotRunExtensionsOnOverprovisionedMachinesInput() {
    return this._doNotRunExtensionsOnOverprovisionedMachines;
  }

  // edge_zone - computed: false, optional: true, required: false
  private _edgeZone?: string; 
  public get edgeZone() {
    return this.getStringAttribute('edge_zone');
  }
  public set edgeZone(value: string) {
    this._edgeZone = value;
  }
  public resetEdgeZone() {
    this._edgeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeZoneInput() {
    return this._edgeZone;
  }

  // enable_automatic_updates - computed: false, optional: true, required: false
  private _enableAutomaticUpdates?: boolean | cdktf.IResolvable; 
  public get enableAutomaticUpdates() {
    return this.getBooleanAttribute('enable_automatic_updates');
  }
  public set enableAutomaticUpdates(value: boolean | cdktf.IResolvable) {
    this._enableAutomaticUpdates = value;
  }
  public resetEnableAutomaticUpdates() {
    this._enableAutomaticUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomaticUpdatesInput() {
    return this._enableAutomaticUpdates;
  }

  // encryption_at_host_enabled - computed: false, optional: true, required: false
  private _encryptionAtHostEnabled?: boolean | cdktf.IResolvable; 
  public get encryptionAtHostEnabled() {
    return this.getBooleanAttribute('encryption_at_host_enabled');
  }
  public set encryptionAtHostEnabled(value: boolean | cdktf.IResolvable) {
    this._encryptionAtHostEnabled = value;
  }
  public resetEncryptionAtHostEnabled() {
    this._encryptionAtHostEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAtHostEnabledInput() {
    return this._encryptionAtHostEnabled;
  }

  // eviction_policy - computed: false, optional: true, required: false
  private _evictionPolicy?: string; 
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }
  public set evictionPolicy(value: string) {
    this._evictionPolicy = value;
  }
  public resetEvictionPolicy() {
    this._evictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionPolicyInput() {
    return this._evictionPolicy;
  }

  // extension_operations_enabled - computed: false, optional: true, required: false
  private _extensionOperationsEnabled?: boolean | cdktf.IResolvable; 
  public get extensionOperationsEnabled() {
    return this.getBooleanAttribute('extension_operations_enabled');
  }
  public set extensionOperationsEnabled(value: boolean | cdktf.IResolvable) {
    this._extensionOperationsEnabled = value;
  }
  public resetExtensionOperationsEnabled() {
    this._extensionOperationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionOperationsEnabledInput() {
    return this._extensionOperationsEnabled;
  }

  // extensions_time_budget - computed: false, optional: true, required: false
  private _extensionsTimeBudget?: string; 
  public get extensionsTimeBudget() {
    return this.getStringAttribute('extensions_time_budget');
  }
  public set extensionsTimeBudget(value: string) {
    this._extensionsTimeBudget = value;
  }
  public resetExtensionsTimeBudget() {
    this._extensionsTimeBudget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsTimeBudgetInput() {
    return this._extensionsTimeBudget;
  }

  // health_probe_id - computed: false, optional: true, required: false
  private _healthProbeId?: string; 
  public get healthProbeId() {
    return this.getStringAttribute('health_probe_id');
  }
  public set healthProbeId(value: string) {
    this._healthProbeId = value;
  }
  public resetHealthProbeId() {
    this._healthProbeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthProbeIdInput() {
    return this._healthProbeId;
  }

  // host_group_id - computed: false, optional: true, required: false
  private _hostGroupId?: string; 
  public get hostGroupId() {
    return this.getStringAttribute('host_group_id');
  }
  public set hostGroupId(value: string) {
    this._hostGroupId = value;
  }
  public resetHostGroupId() {
    this._hostGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupIdInput() {
    return this._hostGroupId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._instances;
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
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
    return this._location;
  }

  // max_bid_price - computed: false, optional: true, required: false
  private _maxBidPrice?: number; 
  public get maxBidPrice() {
    return this.getNumberAttribute('max_bid_price');
  }
  public set maxBidPrice(value: number) {
    this._maxBidPrice = value;
  }
  public resetMaxBidPrice() {
    this._maxBidPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBidPriceInput() {
    return this._maxBidPrice;
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
    return this._name;
  }

  // overprovision - computed: false, optional: true, required: false
  private _overprovision?: boolean | cdktf.IResolvable; 
  public get overprovision() {
    return this.getBooleanAttribute('overprovision');
  }
  public set overprovision(value: boolean | cdktf.IResolvable) {
    this._overprovision = value;
  }
  public resetOverprovision() {
    this._overprovision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overprovisionInput() {
    return this._overprovision;
  }

  // platform_fault_domain_count - computed: true, optional: true, required: false
  private _platformFaultDomainCount?: number; 
  public get platformFaultDomainCount() {
    return this.getNumberAttribute('platform_fault_domain_count');
  }
  public set platformFaultDomainCount(value: number) {
    this._platformFaultDomainCount = value;
  }
  public resetPlatformFaultDomainCount() {
    this._platformFaultDomainCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformFaultDomainCountInput() {
    return this._platformFaultDomainCount;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // provision_vm_agent - computed: false, optional: true, required: false
  private _provisionVmAgent?: boolean | cdktf.IResolvable; 
  public get provisionVmAgent() {
    return this.getBooleanAttribute('provision_vm_agent');
  }
  public set provisionVmAgent(value: boolean | cdktf.IResolvable) {
    this._provisionVmAgent = value;
  }
  public resetProvisionVmAgent() {
    this._provisionVmAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionVmAgentInput() {
    return this._provisionVmAgent;
  }

  // proximity_placement_group_id - computed: false, optional: true, required: false
  private _proximityPlacementGroupId?: string; 
  public get proximityPlacementGroupId() {
    return this.getStringAttribute('proximity_placement_group_id');
  }
  public set proximityPlacementGroupId(value: string) {
    this._proximityPlacementGroupId = value;
  }
  public resetProximityPlacementGroupId() {
    this._proximityPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityPlacementGroupIdInput() {
    return this._proximityPlacementGroupId;
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
    return this._resourceGroupName;
  }

  // secure_boot_enabled - computed: false, optional: true, required: false
  private _secureBootEnabled?: boolean | cdktf.IResolvable; 
  public get secureBootEnabled() {
    return this.getBooleanAttribute('secure_boot_enabled');
  }
  public set secureBootEnabled(value: boolean | cdktf.IResolvable) {
    this._secureBootEnabled = value;
  }
  public resetSecureBootEnabled() {
    this._secureBootEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureBootEnabledInput() {
    return this._secureBootEnabled;
  }

  // single_placement_group - computed: false, optional: true, required: false
  private _singlePlacementGroup?: boolean | cdktf.IResolvable; 
  public get singlePlacementGroup() {
    return this.getBooleanAttribute('single_placement_group');
  }
  public set singlePlacementGroup(value: boolean | cdktf.IResolvable) {
    this._singlePlacementGroup = value;
  }
  public resetSinglePlacementGroup() {
    this._singlePlacementGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singlePlacementGroupInput() {
    return this._singlePlacementGroup;
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
    return this._sku;
  }

  // source_image_id - computed: false, optional: true, required: false
  private _sourceImageId?: string; 
  public get sourceImageId() {
    return this.getStringAttribute('source_image_id');
  }
  public set sourceImageId(value: string) {
    this._sourceImageId = value;
  }
  public resetSourceImageId() {
    this._sourceImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageIdInput() {
    return this._sourceImageId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // unique_id - computed: true, optional: false, required: false
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }

  // upgrade_mode - computed: false, optional: true, required: false
  private _upgradeMode?: string; 
  public get upgradeMode() {
    return this.getStringAttribute('upgrade_mode');
  }
  public set upgradeMode(value: string) {
    this._upgradeMode = value;
  }
  public resetUpgradeMode() {
    this._upgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeModeInput() {
    return this._upgradeMode;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // vtpm_enabled - computed: false, optional: true, required: false
  private _vtpmEnabled?: boolean | cdktf.IResolvable; 
  public get vtpmEnabled() {
    return this.getBooleanAttribute('vtpm_enabled');
  }
  public set vtpmEnabled(value: boolean | cdktf.IResolvable) {
    this._vtpmEnabled = value;
  }
  public resetVtpmEnabled() {
    this._vtpmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtpmEnabledInput() {
    return this._vtpmEnabled;
  }

  // zone_balance - computed: false, optional: true, required: false
  private _zoneBalance?: boolean | cdktf.IResolvable; 
  public get zoneBalance() {
    return this.getBooleanAttribute('zone_balance');
  }
  public set zoneBalance(value: boolean | cdktf.IResolvable) {
    this._zoneBalance = value;
  }
  public resetZoneBalance() {
    this._zoneBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneBalanceInput() {
    return this._zoneBalance;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // additional_capabilities - computed: false, optional: true, required: false
  private _additionalCapabilities = new WindowsVirtualMachineScaleSetAdditionalCapabilitiesOutputReference(this, "additional_capabilities");
  public get additionalCapabilities() {
    return this._additionalCapabilities;
  }
  public putAdditionalCapabilities(value: WindowsVirtualMachineScaleSetAdditionalCapabilities) {
    this._additionalCapabilities.internalValue = value;
  }
  public resetAdditionalCapabilities() {
    this._additionalCapabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalCapabilitiesInput() {
    return this._additionalCapabilities.internalValue;
  }

  // additional_unattend_content - computed: false, optional: true, required: false
  private _additionalUnattendContent = new WindowsVirtualMachineScaleSetAdditionalUnattendContentList(this, "additional_unattend_content", false);
  public get additionalUnattendContent() {
    return this._additionalUnattendContent;
  }
  public putAdditionalUnattendContent(value: WindowsVirtualMachineScaleSetAdditionalUnattendContent[] | cdktf.IResolvable) {
    this._additionalUnattendContent.internalValue = value;
  }
  public resetAdditionalUnattendContent() {
    this._additionalUnattendContent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalUnattendContentInput() {
    return this._additionalUnattendContent.internalValue;
  }

  // automatic_instance_repair - computed: false, optional: true, required: false
  private _automaticInstanceRepair = new WindowsVirtualMachineScaleSetAutomaticInstanceRepairOutputReference(this, "automatic_instance_repair");
  public get automaticInstanceRepair() {
    return this._automaticInstanceRepair;
  }
  public putAutomaticInstanceRepair(value: WindowsVirtualMachineScaleSetAutomaticInstanceRepair) {
    this._automaticInstanceRepair.internalValue = value;
  }
  public resetAutomaticInstanceRepair() {
    this._automaticInstanceRepair.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInstanceRepairInput() {
    return this._automaticInstanceRepair.internalValue;
  }

  // automatic_os_upgrade_policy - computed: false, optional: true, required: false
  private _automaticOsUpgradePolicy = new WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyOutputReference(this, "automatic_os_upgrade_policy");
  public get automaticOsUpgradePolicy() {
    return this._automaticOsUpgradePolicy;
  }
  public putAutomaticOsUpgradePolicy(value: WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicy) {
    this._automaticOsUpgradePolicy.internalValue = value;
  }
  public resetAutomaticOsUpgradePolicy() {
    this._automaticOsUpgradePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticOsUpgradePolicyInput() {
    return this._automaticOsUpgradePolicy.internalValue;
  }

  // boot_diagnostics - computed: false, optional: true, required: false
  private _bootDiagnostics = new WindowsVirtualMachineScaleSetBootDiagnosticsOutputReference(this, "boot_diagnostics");
  public get bootDiagnostics() {
    return this._bootDiagnostics;
  }
  public putBootDiagnostics(value: WindowsVirtualMachineScaleSetBootDiagnostics) {
    this._bootDiagnostics.internalValue = value;
  }
  public resetBootDiagnostics() {
    this._bootDiagnostics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiagnosticsInput() {
    return this._bootDiagnostics.internalValue;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk = new WindowsVirtualMachineScaleSetDataDiskList(this, "data_disk", false);
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: WindowsVirtualMachineScaleSetDataDisk[] | cdktf.IResolvable) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }

  // extension - computed: false, optional: true, required: false
  private _extension = new WindowsVirtualMachineScaleSetExtensionList(this, "extension", true);
  public get extension() {
    return this._extension;
  }
  public putExtension(value: WindowsVirtualMachineScaleSetExtension[] | cdktf.IResolvable) {
    this._extension.internalValue = value;
  }
  public resetExtension() {
    this._extension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension.internalValue;
  }

  // gallery_application - computed: false, optional: true, required: false
  private _galleryApplication = new WindowsVirtualMachineScaleSetGalleryApplicationList(this, "gallery_application", false);
  public get galleryApplication() {
    return this._galleryApplication;
  }
  public putGalleryApplication(value: WindowsVirtualMachineScaleSetGalleryApplication[] | cdktf.IResolvable) {
    this._galleryApplication.internalValue = value;
  }
  public resetGalleryApplication() {
    this._galleryApplication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get galleryApplicationInput() {
    return this._galleryApplication.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new WindowsVirtualMachineScaleSetIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: WindowsVirtualMachineScaleSetIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // network_interface - computed: false, optional: false, required: true
  private _networkInterface = new WindowsVirtualMachineScaleSetNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: WindowsVirtualMachineScaleSetNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // os_disk - computed: false, optional: false, required: true
  private _osDisk = new WindowsVirtualMachineScaleSetOsDiskOutputReference(this, "os_disk");
  public get osDisk() {
    return this._osDisk;
  }
  public putOsDisk(value: WindowsVirtualMachineScaleSetOsDisk) {
    this._osDisk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskInput() {
    return this._osDisk.internalValue;
  }

  // plan - computed: false, optional: true, required: false
  private _plan = new WindowsVirtualMachineScaleSetPlanOutputReference(this, "plan");
  public get plan() {
    return this._plan;
  }
  public putPlan(value: WindowsVirtualMachineScaleSetPlan) {
    this._plan.internalValue = value;
  }
  public resetPlan() {
    this._plan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan.internalValue;
  }

  // rolling_upgrade_policy - computed: false, optional: true, required: false
  private _rollingUpgradePolicy = new WindowsVirtualMachineScaleSetRollingUpgradePolicyOutputReference(this, "rolling_upgrade_policy");
  public get rollingUpgradePolicy() {
    return this._rollingUpgradePolicy;
  }
  public putRollingUpgradePolicy(value: WindowsVirtualMachineScaleSetRollingUpgradePolicy) {
    this._rollingUpgradePolicy.internalValue = value;
  }
  public resetRollingUpgradePolicy() {
    this._rollingUpgradePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpgradePolicyInput() {
    return this._rollingUpgradePolicy.internalValue;
  }

  // scale_in - computed: false, optional: true, required: false
  private _scaleIn = new WindowsVirtualMachineScaleSetScaleInOutputReference(this, "scale_in");
  public get scaleIn() {
    return this._scaleIn;
  }
  public putScaleIn(value: WindowsVirtualMachineScaleSetScaleIn) {
    this._scaleIn.internalValue = value;
  }
  public resetScaleIn() {
    this._scaleIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInInput() {
    return this._scaleIn.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new WindowsVirtualMachineScaleSetSecretList(this, "secret", false);
  public get secret() {
    return this._secret;
  }
  public putSecret(value: WindowsVirtualMachineScaleSetSecret[] | cdktf.IResolvable) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // source_image_reference - computed: false, optional: true, required: false
  private _sourceImageReference = new WindowsVirtualMachineScaleSetSourceImageReferenceOutputReference(this, "source_image_reference");
  public get sourceImageReference() {
    return this._sourceImageReference;
  }
  public putSourceImageReference(value: WindowsVirtualMachineScaleSetSourceImageReference) {
    this._sourceImageReference.internalValue = value;
  }
  public resetSourceImageReference() {
    this._sourceImageReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageReferenceInput() {
    return this._sourceImageReference.internalValue;
  }

  // spot_restore - computed: false, optional: true, required: false
  private _spotRestore = new WindowsVirtualMachineScaleSetSpotRestoreOutputReference(this, "spot_restore");
  public get spotRestore() {
    return this._spotRestore;
  }
  public putSpotRestore(value: WindowsVirtualMachineScaleSetSpotRestore) {
    this._spotRestore.internalValue = value;
  }
  public resetSpotRestore() {
    this._spotRestore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotRestoreInput() {
    return this._spotRestore.internalValue;
  }

  // termination_notification - computed: false, optional: true, required: false
  private _terminationNotification = new WindowsVirtualMachineScaleSetTerminationNotificationOutputReference(this, "termination_notification");
  public get terminationNotification() {
    return this._terminationNotification;
  }
  public putTerminationNotification(value: WindowsVirtualMachineScaleSetTerminationNotification) {
    this._terminationNotification.internalValue = value;
  }
  public resetTerminationNotification() {
    this._terminationNotification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationNotificationInput() {
    return this._terminationNotification.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WindowsVirtualMachineScaleSetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WindowsVirtualMachineScaleSetTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // winrm_listener - computed: false, optional: true, required: false
  private _winrmListener = new WindowsVirtualMachineScaleSetWinrmListenerList(this, "winrm_listener", true);
  public get winrmListener() {
    return this._winrmListener;
  }
  public putWinrmListener(value: WindowsVirtualMachineScaleSetWinrmListener[] | cdktf.IResolvable) {
    this._winrmListener.internalValue = value;
  }
  public resetWinrmListener() {
    this._winrmListener.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winrmListenerInput() {
    return this._winrmListener.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      admin_username: cdktf.stringToTerraform(this._adminUsername),
      capacity_reservation_group_id: cdktf.stringToTerraform(this._capacityReservationGroupId),
      computer_name_prefix: cdktf.stringToTerraform(this._computerNamePrefix),
      custom_data: cdktf.stringToTerraform(this._customData),
      do_not_run_extensions_on_overprovisioned_machines: cdktf.booleanToTerraform(this._doNotRunExtensionsOnOverprovisionedMachines),
      edge_zone: cdktf.stringToTerraform(this._edgeZone),
      enable_automatic_updates: cdktf.booleanToTerraform(this._enableAutomaticUpdates),
      encryption_at_host_enabled: cdktf.booleanToTerraform(this._encryptionAtHostEnabled),
      eviction_policy: cdktf.stringToTerraform(this._evictionPolicy),
      extension_operations_enabled: cdktf.booleanToTerraform(this._extensionOperationsEnabled),
      extensions_time_budget: cdktf.stringToTerraform(this._extensionsTimeBudget),
      health_probe_id: cdktf.stringToTerraform(this._healthProbeId),
      host_group_id: cdktf.stringToTerraform(this._hostGroupId),
      id: cdktf.stringToTerraform(this._id),
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
      secure_boot_enabled: cdktf.booleanToTerraform(this._secureBootEnabled),
      single_placement_group: cdktf.booleanToTerraform(this._singlePlacementGroup),
      sku: cdktf.stringToTerraform(this._sku),
      source_image_id: cdktf.stringToTerraform(this._sourceImageId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timezone: cdktf.stringToTerraform(this._timezone),
      upgrade_mode: cdktf.stringToTerraform(this._upgradeMode),
      user_data: cdktf.stringToTerraform(this._userData),
      vtpm_enabled: cdktf.booleanToTerraform(this._vtpmEnabled),
      zone_balance: cdktf.booleanToTerraform(this._zoneBalance),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
      additional_capabilities: windowsVirtualMachineScaleSetAdditionalCapabilitiesToTerraform(this._additionalCapabilities.internalValue),
      additional_unattend_content: cdktf.listMapper(windowsVirtualMachineScaleSetAdditionalUnattendContentToTerraform, true)(this._additionalUnattendContent.internalValue),
      automatic_instance_repair: windowsVirtualMachineScaleSetAutomaticInstanceRepairToTerraform(this._automaticInstanceRepair.internalValue),
      automatic_os_upgrade_policy: windowsVirtualMachineScaleSetAutomaticOsUpgradePolicyToTerraform(this._automaticOsUpgradePolicy.internalValue),
      boot_diagnostics: windowsVirtualMachineScaleSetBootDiagnosticsToTerraform(this._bootDiagnostics.internalValue),
      data_disk: cdktf.listMapper(windowsVirtualMachineScaleSetDataDiskToTerraform, true)(this._dataDisk.internalValue),
      extension: cdktf.listMapper(windowsVirtualMachineScaleSetExtensionToTerraform, true)(this._extension.internalValue),
      gallery_application: cdktf.listMapper(windowsVirtualMachineScaleSetGalleryApplicationToTerraform, true)(this._galleryApplication.internalValue),
      identity: windowsVirtualMachineScaleSetIdentityToTerraform(this._identity.internalValue),
      network_interface: cdktf.listMapper(windowsVirtualMachineScaleSetNetworkInterfaceToTerraform, true)(this._networkInterface.internalValue),
      os_disk: windowsVirtualMachineScaleSetOsDiskToTerraform(this._osDisk.internalValue),
      plan: windowsVirtualMachineScaleSetPlanToTerraform(this._plan.internalValue),
      rolling_upgrade_policy: windowsVirtualMachineScaleSetRollingUpgradePolicyToTerraform(this._rollingUpgradePolicy.internalValue),
      scale_in: windowsVirtualMachineScaleSetScaleInToTerraform(this._scaleIn.internalValue),
      secret: cdktf.listMapper(windowsVirtualMachineScaleSetSecretToTerraform, true)(this._secret.internalValue),
      source_image_reference: windowsVirtualMachineScaleSetSourceImageReferenceToTerraform(this._sourceImageReference.internalValue),
      spot_restore: windowsVirtualMachineScaleSetSpotRestoreToTerraform(this._spotRestore.internalValue),
      termination_notification: windowsVirtualMachineScaleSetTerminationNotificationToTerraform(this._terminationNotification.internalValue),
      timeouts: windowsVirtualMachineScaleSetTimeoutsToTerraform(this._timeouts.internalValue),
      winrm_listener: cdktf.listMapper(windowsVirtualMachineScaleSetWinrmListenerToTerraform, true)(this._winrmListener.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_password: {
        value: cdktf.stringToHclTerraform(this._adminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_username: {
        value: cdktf.stringToHclTerraform(this._adminUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_reservation_group_id: {
        value: cdktf.stringToHclTerraform(this._capacityReservationGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      computer_name_prefix: {
        value: cdktf.stringToHclTerraform(this._computerNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_data: {
        value: cdktf.stringToHclTerraform(this._customData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      do_not_run_extensions_on_overprovisioned_machines: {
        value: cdktf.booleanToHclTerraform(this._doNotRunExtensionsOnOverprovisionedMachines),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      edge_zone: {
        value: cdktf.stringToHclTerraform(this._edgeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_automatic_updates: {
        value: cdktf.booleanToHclTerraform(this._enableAutomaticUpdates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_at_host_enabled: {
        value: cdktf.booleanToHclTerraform(this._encryptionAtHostEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eviction_policy: {
        value: cdktf.stringToHclTerraform(this._evictionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension_operations_enabled: {
        value: cdktf.booleanToHclTerraform(this._extensionOperationsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extensions_time_budget: {
        value: cdktf.stringToHclTerraform(this._extensionsTimeBudget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_probe_id: {
        value: cdktf.stringToHclTerraform(this._healthProbeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_group_id: {
        value: cdktf.stringToHclTerraform(this._hostGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instances: {
        value: cdktf.numberToHclTerraform(this._instances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_bid_price: {
        value: cdktf.numberToHclTerraform(this._maxBidPrice),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overprovision: {
        value: cdktf.booleanToHclTerraform(this._overprovision),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      platform_fault_domain_count: {
        value: cdktf.numberToHclTerraform(this._platformFaultDomainCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provision_vm_agent: {
        value: cdktf.booleanToHclTerraform(this._provisionVmAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      proximity_placement_group_id: {
        value: cdktf.stringToHclTerraform(this._proximityPlacementGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_boot_enabled: {
        value: cdktf.booleanToHclTerraform(this._secureBootEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      single_placement_group: {
        value: cdktf.booleanToHclTerraform(this._singlePlacementGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sku: {
        value: cdktf.stringToHclTerraform(this._sku),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_image_id: {
        value: cdktf.stringToHclTerraform(this._sourceImageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_mode: {
        value: cdktf.stringToHclTerraform(this._upgradeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vtpm_enabled: {
        value: cdktf.booleanToHclTerraform(this._vtpmEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone_balance: {
        value: cdktf.booleanToHclTerraform(this._zoneBalance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      additional_capabilities: {
        value: windowsVirtualMachineScaleSetAdditionalCapabilitiesToHclTerraform(this._additionalCapabilities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WindowsVirtualMachineScaleSetAdditionalCapabilitiesList",
      },
      additional_unattend_content: {
        value: cdktf.listMapperHcl(windowsVirtualMachineScaleSetAdditionalUnattendContentToHclTerraform, true)(this._additionalUnattendContent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WindowsVirtualMachineScaleSetAdditionalUnattendContentList",
      },
      automatic_instance_repair: {
        value: windowsVirtualMachineScaleSetAutomaticInstanceRepairToHclTerraform(this._automaticInstanceRepair.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WindowsVirtualMachineScaleSetAutomaticInstanceRepairList",
      },
      automatic_os_upgrade_policy: {
        value: windowsVirtualMachineScaleSetAutomaticOsUpgradePolicyToHclTerraform(this._automaticOsUpgradePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WindowsVirtualMachineScaleSetAutomaticOsUpgradePolicyList",
      },
      boot_diagnostics: {
        value: windowsVirtualMachineScaleSetBootDiagnosticsToHclTerraform(this._bootDiagnostics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WindowsVirtualMachineScaleSetBootDiagnosticsList",
      },
      data_disk: {
        value: cdktf.listMapperHcl(windowsVirtualMachineScaleSetDataDiskToHclTerraform, true)(this._dataDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WindowsVirtualMachineScaleSetDataDiskList",
      },
      extension: {
        value: cdktf.listMapperHcl(windowsVirtualMachineScaleSetExtensionToHclTerraform, true)(this._extension.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WindowsVirtualMachineScaleSetExtensionList",
      },
      gallery_application: {
        value: cdktf.listMapperHcl(windowsVirtualMachineScaleSetGalleryApplicationToHclTerraform, true)(this._galleryApplication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WindowsVirtualMachineScaleSetGalleryApplicationList",
      },
      identity: {
        value: windowsVirtualMachineScaleSetIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WindowsVirtualMachineScaleSetIdentityList",
      },
      network_interface: {
        value: cdktf.listMapperHcl(windowsVirtualMachineScaleSetNetworkInterfaceToHclTerraform, true)(this._networkInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WindowsVirtualMachineScaleSetNetworkInterfaceList",
      },
      os_disk: {
        value: windowsVirtualMachineScaleSetOsDiskToHclTerraform(this._osDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WindowsVirtualMachineScaleSetOsDiskList",
      },
      plan: {
        value: windowsVirtualMachineScaleSetPlanToHclTerraform(this._plan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WindowsVirtualMachineScaleSetPlanList",
      },
      rolling_upgrade_policy: {
        value: windowsVirtualMachineScaleSetRollingUpgradePolicyToHclTerraform(this._rollingUpgradePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WindowsVirtualMachineScaleSetRollingUpgradePolicyList",
      },
      scale_in: {
        value: windowsVirtualMachineScaleSetScaleInToHclTerraform(this._scaleIn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WindowsVirtualMachineScaleSetScaleInList",
      },
      secret: {
        value: cdktf.listMapperHcl(windowsVirtualMachineScaleSetSecretToHclTerraform, true)(this._secret.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WindowsVirtualMachineScaleSetSecretList",
      },
      source_image_reference: {
        value: windowsVirtualMachineScaleSetSourceImageReferenceToHclTerraform(this._sourceImageReference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WindowsVirtualMachineScaleSetSourceImageReferenceList",
      },
      spot_restore: {
        value: windowsVirtualMachineScaleSetSpotRestoreToHclTerraform(this._spotRestore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WindowsVirtualMachineScaleSetSpotRestoreList",
      },
      termination_notification: {
        value: windowsVirtualMachineScaleSetTerminationNotificationToHclTerraform(this._terminationNotification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WindowsVirtualMachineScaleSetTerminationNotificationList",
      },
      timeouts: {
        value: windowsVirtualMachineScaleSetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WindowsVirtualMachineScaleSetTimeouts",
      },
      winrm_listener: {
        value: cdktf.listMapperHcl(windowsVirtualMachineScaleSetWinrmListenerToHclTerraform, true)(this._winrmListener.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WindowsVirtualMachineScaleSetWinrmListenerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
