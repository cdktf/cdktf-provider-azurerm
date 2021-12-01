// https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LinuxVirtualMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#admin_password LinuxVirtualMachine#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#admin_username LinuxVirtualMachine#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#allow_extension_operations LinuxVirtualMachine#allow_extension_operations}
  */
  readonly allowExtensionOperations?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#availability_set_id LinuxVirtualMachine#availability_set_id}
  */
  readonly availabilitySetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#computer_name LinuxVirtualMachine#computer_name}
  */
  readonly computerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#custom_data LinuxVirtualMachine#custom_data}
  */
  readonly customData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#dedicated_host_id LinuxVirtualMachine#dedicated_host_id}
  */
  readonly dedicatedHostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#disable_password_authentication LinuxVirtualMachine#disable_password_authentication}
  */
  readonly disablePasswordAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#encryption_at_host_enabled LinuxVirtualMachine#encryption_at_host_enabled}
  */
  readonly encryptionAtHostEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#eviction_policy LinuxVirtualMachine#eviction_policy}
  */
  readonly evictionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#extensions_time_budget LinuxVirtualMachine#extensions_time_budget}
  */
  readonly extensionsTimeBudget?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#license_type LinuxVirtualMachine#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#location LinuxVirtualMachine#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#max_bid_price LinuxVirtualMachine#max_bid_price}
  */
  readonly maxBidPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#name LinuxVirtualMachine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#network_interface_ids LinuxVirtualMachine#network_interface_ids}
  */
  readonly networkInterfaceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#patch_mode LinuxVirtualMachine#patch_mode}
  */
  readonly patchMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#platform_fault_domain LinuxVirtualMachine#platform_fault_domain}
  */
  readonly platformFaultDomain?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#priority LinuxVirtualMachine#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#provision_vm_agent LinuxVirtualMachine#provision_vm_agent}
  */
  readonly provisionVmAgent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#proximity_placement_group_id LinuxVirtualMachine#proximity_placement_group_id}
  */
  readonly proximityPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#resource_group_name LinuxVirtualMachine#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#size LinuxVirtualMachine#size}
  */
  readonly size: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#source_image_id LinuxVirtualMachine#source_image_id}
  */
  readonly sourceImageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#tags LinuxVirtualMachine#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#virtual_machine_scale_set_id LinuxVirtualMachine#virtual_machine_scale_set_id}
  */
  readonly virtualMachineScaleSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#zone LinuxVirtualMachine#zone}
  */
  readonly zone?: string;
  /**
  * additional_capabilities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#additional_capabilities LinuxVirtualMachine#additional_capabilities}
  */
  readonly additionalCapabilities?: LinuxVirtualMachineAdditionalCapabilities;
  /**
  * admin_ssh_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#admin_ssh_key LinuxVirtualMachine#admin_ssh_key}
  */
  readonly adminSshKey?: LinuxVirtualMachineAdminSshKey[];
  /**
  * boot_diagnostics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#boot_diagnostics LinuxVirtualMachine#boot_diagnostics}
  */
  readonly bootDiagnostics?: LinuxVirtualMachineBootDiagnostics;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#identity LinuxVirtualMachine#identity}
  */
  readonly identity?: LinuxVirtualMachineIdentity;
  /**
  * os_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#os_disk LinuxVirtualMachine#os_disk}
  */
  readonly osDisk: LinuxVirtualMachineOsDisk;
  /**
  * plan block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#plan LinuxVirtualMachine#plan}
  */
  readonly plan?: LinuxVirtualMachinePlan;
  /**
  * secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#secret LinuxVirtualMachine#secret}
  */
  readonly secret?: LinuxVirtualMachineSecret[];
  /**
  * source_image_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#source_image_reference LinuxVirtualMachine#source_image_reference}
  */
  readonly sourceImageReference?: LinuxVirtualMachineSourceImageReference;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#timeouts LinuxVirtualMachine#timeouts}
  */
  readonly timeouts?: LinuxVirtualMachineTimeouts;
}
export interface LinuxVirtualMachineAdditionalCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#ultra_ssd_enabled LinuxVirtualMachine#ultra_ssd_enabled}
  */
  readonly ultraSsdEnabled?: boolean | cdktf.IResolvable;
}

export function linuxVirtualMachineAdditionalCapabilitiesToTerraform(struct?: LinuxVirtualMachineAdditionalCapabilitiesOutputReference | LinuxVirtualMachineAdditionalCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ultra_ssd_enabled: cdktf.booleanToTerraform(struct!.ultraSsdEnabled),
  }
}

export class LinuxVirtualMachineAdditionalCapabilitiesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LinuxVirtualMachineAdditionalCapabilities | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._ultraSsdEnabled) {
      hasAnyValues = true;
      internalValueResult.ultraSsdEnabled = this._ultraSsdEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxVirtualMachineAdditionalCapabilities | undefined) {
    if (value === undefined) {
      this._ultraSsdEnabled = undefined;
    }
    else {
      this._ultraSsdEnabled = value.ultraSsdEnabled;
    }
  }

  // ultra_ssd_enabled - computed: false, optional: true, required: false
  private _ultraSsdEnabled?: boolean | cdktf.IResolvable; 
  public get ultraSsdEnabled() {
    return this.getBooleanAttribute('ultra_ssd_enabled') as any;
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
export interface LinuxVirtualMachineAdminSshKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#public_key LinuxVirtualMachine#public_key}
  */
  readonly publicKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#username LinuxVirtualMachine#username}
  */
  readonly username: string;
}

export function linuxVirtualMachineAdminSshKeyToTerraform(struct?: LinuxVirtualMachineAdminSshKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface LinuxVirtualMachineBootDiagnostics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#storage_account_uri LinuxVirtualMachine#storage_account_uri}
  */
  readonly storageAccountUri?: string;
}

export function linuxVirtualMachineBootDiagnosticsToTerraform(struct?: LinuxVirtualMachineBootDiagnosticsOutputReference | LinuxVirtualMachineBootDiagnostics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_account_uri: cdktf.stringToTerraform(struct!.storageAccountUri),
  }
}

export class LinuxVirtualMachineBootDiagnosticsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LinuxVirtualMachineBootDiagnostics | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._storageAccountUri) {
      hasAnyValues = true;
      internalValueResult.storageAccountUri = this._storageAccountUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxVirtualMachineBootDiagnostics | undefined) {
    if (value === undefined) {
      this._storageAccountUri = undefined;
    }
    else {
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
export interface LinuxVirtualMachineIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#identity_ids LinuxVirtualMachine#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#type LinuxVirtualMachine#type}
  */
  readonly type: string;
}

export function linuxVirtualMachineIdentityToTerraform(struct?: LinuxVirtualMachineIdentityOutputReference | LinuxVirtualMachineIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class LinuxVirtualMachineIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LinuxVirtualMachineIdentity | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._identityIds) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxVirtualMachineIdentity | undefined) {
    if (value === undefined) {
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return this.getListAttribute('identity_ids');
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
export interface LinuxVirtualMachineOsDiskDiffDiskSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#option LinuxVirtualMachine#option}
  */
  readonly option: string;
}

export function linuxVirtualMachineOsDiskDiffDiskSettingsToTerraform(struct?: LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference | LinuxVirtualMachineOsDiskDiffDiskSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    option: cdktf.stringToTerraform(struct!.option),
  }
}

export class LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LinuxVirtualMachineOsDiskDiffDiskSettings | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._option) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxVirtualMachineOsDiskDiffDiskSettings | undefined) {
    if (value === undefined) {
      this._option = undefined;
    }
    else {
      this._option = value.option;
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
}
export interface LinuxVirtualMachineOsDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#caching LinuxVirtualMachine#caching}
  */
  readonly caching: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#disk_encryption_set_id LinuxVirtualMachine#disk_encryption_set_id}
  */
  readonly diskEncryptionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#disk_size_gb LinuxVirtualMachine#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#name LinuxVirtualMachine#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#storage_account_type LinuxVirtualMachine#storage_account_type}
  */
  readonly storageAccountType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#write_accelerator_enabled LinuxVirtualMachine#write_accelerator_enabled}
  */
  readonly writeAcceleratorEnabled?: boolean | cdktf.IResolvable;
  /**
  * diff_disk_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#diff_disk_settings LinuxVirtualMachine#diff_disk_settings}
  */
  readonly diffDiskSettings?: LinuxVirtualMachineOsDiskDiffDiskSettings;
}

export function linuxVirtualMachineOsDiskToTerraform(struct?: LinuxVirtualMachineOsDiskOutputReference | LinuxVirtualMachineOsDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    disk_encryption_set_id: cdktf.stringToTerraform(struct!.diskEncryptionSetId),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    name: cdktf.stringToTerraform(struct!.name),
    storage_account_type: cdktf.stringToTerraform(struct!.storageAccountType),
    write_accelerator_enabled: cdktf.booleanToTerraform(struct!.writeAcceleratorEnabled),
    diff_disk_settings: linuxVirtualMachineOsDiskDiffDiskSettingsToTerraform(struct!.diffDiskSettings),
  }
}

export class LinuxVirtualMachineOsDiskOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LinuxVirtualMachineOsDisk | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._caching) {
      hasAnyValues = true;
      internalValueResult.caching = this._caching;
    }
    if (this._diskEncryptionSetId) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionSetId = this._diskEncryptionSetId;
    }
    if (this._diskSizeGb) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._name) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._storageAccountType) {
      hasAnyValues = true;
      internalValueResult.storageAccountType = this._storageAccountType;
    }
    if (this._writeAcceleratorEnabled) {
      hasAnyValues = true;
      internalValueResult.writeAcceleratorEnabled = this._writeAcceleratorEnabled;
    }
    if (this._diffDiskSettings) {
      hasAnyValues = true;
      internalValueResult.diffDiskSettings = this._diffDiskSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxVirtualMachineOsDisk | undefined) {
    if (value === undefined) {
      this._caching = undefined;
      this._diskEncryptionSetId = undefined;
      this._diskSizeGb = undefined;
      this._name = undefined;
      this._storageAccountType = undefined;
      this._writeAcceleratorEnabled = undefined;
      this._diffDiskSettings.internalValue = undefined;
    }
    else {
      this._caching = value.caching;
      this._diskEncryptionSetId = value.diskEncryptionSetId;
      this._diskSizeGb = value.diskSizeGb;
      this._name = value.name;
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

  // name - computed: true, optional: true, required: false
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

  // write_accelerator_enabled - computed: false, optional: true, required: false
  private _writeAcceleratorEnabled?: boolean | cdktf.IResolvable; 
  public get writeAcceleratorEnabled() {
    return this.getBooleanAttribute('write_accelerator_enabled') as any;
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
  private _diffDiskSettings = new LinuxVirtualMachineOsDiskDiffDiskSettingsOutputReference(this as any, "diff_disk_settings", true);
  public get diffDiskSettings() {
    return this._diffDiskSettings;
  }
  public putDiffDiskSettings(value: LinuxVirtualMachineOsDiskDiffDiskSettings) {
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
export interface LinuxVirtualMachinePlan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#name LinuxVirtualMachine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#product LinuxVirtualMachine#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#publisher LinuxVirtualMachine#publisher}
  */
  readonly publisher: string;
}

export function linuxVirtualMachinePlanToTerraform(struct?: LinuxVirtualMachinePlanOutputReference | LinuxVirtualMachinePlan): any {
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

export class LinuxVirtualMachinePlanOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LinuxVirtualMachinePlan | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._name) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._product) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._publisher) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxVirtualMachinePlan | undefined) {
    if (value === undefined) {
      this._name = undefined;
      this._product = undefined;
      this._publisher = undefined;
    }
    else {
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
export interface LinuxVirtualMachineSecretCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#url LinuxVirtualMachine#url}
  */
  readonly url: string;
}

export function linuxVirtualMachineSecretCertificateToTerraform(struct?: LinuxVirtualMachineSecretCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface LinuxVirtualMachineSecret {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#key_vault_id LinuxVirtualMachine#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#certificate LinuxVirtualMachine#certificate}
  */
  readonly certificate: LinuxVirtualMachineSecretCertificate[];
}

export function linuxVirtualMachineSecretToTerraform(struct?: LinuxVirtualMachineSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    certificate: cdktf.listMapper(linuxVirtualMachineSecretCertificateToTerraform)(struct!.certificate),
  }
}

export interface LinuxVirtualMachineSourceImageReference {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#offer LinuxVirtualMachine#offer}
  */
  readonly offer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#publisher LinuxVirtualMachine#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#sku LinuxVirtualMachine#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#version LinuxVirtualMachine#version}
  */
  readonly version: string;
}

export function linuxVirtualMachineSourceImageReferenceToTerraform(struct?: LinuxVirtualMachineSourceImageReferenceOutputReference | LinuxVirtualMachineSourceImageReference): any {
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

export class LinuxVirtualMachineSourceImageReferenceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LinuxVirtualMachineSourceImageReference | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._offer) {
      hasAnyValues = true;
      internalValueResult.offer = this._offer;
    }
    if (this._publisher) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._sku) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    if (this._version) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxVirtualMachineSourceImageReference | undefined) {
    if (value === undefined) {
      this._offer = undefined;
      this._publisher = undefined;
      this._sku = undefined;
      this._version = undefined;
    }
    else {
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
export interface LinuxVirtualMachineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#create LinuxVirtualMachine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#delete LinuxVirtualMachine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#read LinuxVirtualMachine#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html#update LinuxVirtualMachine#update}
  */
  readonly update?: string;
}

export function linuxVirtualMachineTimeoutsToTerraform(struct?: LinuxVirtualMachineTimeoutsOutputReference | LinuxVirtualMachineTimeouts): any {
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

export class LinuxVirtualMachineTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LinuxVirtualMachineTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinuxVirtualMachineTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html azurerm_linux_virtual_machine}
*/
export class LinuxVirtualMachine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_linux_virtual_machine";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine.html azurerm_linux_virtual_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LinuxVirtualMachineConfig
  */
  public constructor(scope: Construct, id: string, config: LinuxVirtualMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_linux_virtual_machine',
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
    this._allowExtensionOperations = config.allowExtensionOperations;
    this._availabilitySetId = config.availabilitySetId;
    this._computerName = config.computerName;
    this._customData = config.customData;
    this._dedicatedHostId = config.dedicatedHostId;
    this._disablePasswordAuthentication = config.disablePasswordAuthentication;
    this._encryptionAtHostEnabled = config.encryptionAtHostEnabled;
    this._evictionPolicy = config.evictionPolicy;
    this._extensionsTimeBudget = config.extensionsTimeBudget;
    this._licenseType = config.licenseType;
    this._location = config.location;
    this._maxBidPrice = config.maxBidPrice;
    this._name = config.name;
    this._networkInterfaceIds = config.networkInterfaceIds;
    this._patchMode = config.patchMode;
    this._platformFaultDomain = config.platformFaultDomain;
    this._priority = config.priority;
    this._provisionVmAgent = config.provisionVmAgent;
    this._proximityPlacementGroupId = config.proximityPlacementGroupId;
    this._resourceGroupName = config.resourceGroupName;
    this._size = config.size;
    this._sourceImageId = config.sourceImageId;
    this._tags = config.tags;
    this._virtualMachineScaleSetId = config.virtualMachineScaleSetId;
    this._zone = config.zone;
    this._additionalCapabilities.internalValue = config.additionalCapabilities;
    this._adminSshKey = config.adminSshKey;
    this._bootDiagnostics.internalValue = config.bootDiagnostics;
    this._identity.internalValue = config.identity;
    this._osDisk.internalValue = config.osDisk;
    this._plan.internalValue = config.plan;
    this._secret = config.secret;
    this._sourceImageReference.internalValue = config.sourceImageReference;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
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

  // allow_extension_operations - computed: false, optional: true, required: false
  private _allowExtensionOperations?: boolean | cdktf.IResolvable; 
  public get allowExtensionOperations() {
    return this.getBooleanAttribute('allow_extension_operations') as any;
  }
  public set allowExtensionOperations(value: boolean | cdktf.IResolvable) {
    this._allowExtensionOperations = value;
  }
  public resetAllowExtensionOperations() {
    this._allowExtensionOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowExtensionOperationsInput() {
    return this._allowExtensionOperations;
  }

  // availability_set_id - computed: false, optional: true, required: false
  private _availabilitySetId?: string; 
  public get availabilitySetId() {
    return this.getStringAttribute('availability_set_id');
  }
  public set availabilitySetId(value: string) {
    this._availabilitySetId = value;
  }
  public resetAvailabilitySetId() {
    this._availabilitySetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilitySetIdInput() {
    return this._availabilitySetId;
  }

  // computer_name - computed: true, optional: true, required: false
  private _computerName?: string; 
  public get computerName() {
    return this.getStringAttribute('computer_name');
  }
  public set computerName(value: string) {
    this._computerName = value;
  }
  public resetComputerName() {
    this._computerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computerNameInput() {
    return this._computerName;
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

  // dedicated_host_id - computed: false, optional: true, required: false
  private _dedicatedHostId?: string; 
  public get dedicatedHostId() {
    return this.getStringAttribute('dedicated_host_id');
  }
  public set dedicatedHostId(value: string) {
    this._dedicatedHostId = value;
  }
  public resetDedicatedHostId() {
    this._dedicatedHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostIdInput() {
    return this._dedicatedHostId;
  }

  // disable_password_authentication - computed: false, optional: true, required: false
  private _disablePasswordAuthentication?: boolean | cdktf.IResolvable; 
  public get disablePasswordAuthentication() {
    return this.getBooleanAttribute('disable_password_authentication') as any;
  }
  public set disablePasswordAuthentication(value: boolean | cdktf.IResolvable) {
    this._disablePasswordAuthentication = value;
  }
  public resetDisablePasswordAuthentication() {
    this._disablePasswordAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePasswordAuthenticationInput() {
    return this._disablePasswordAuthentication;
  }

  // encryption_at_host_enabled - computed: false, optional: true, required: false
  private _encryptionAtHostEnabled?: boolean | cdktf.IResolvable; 
  public get encryptionAtHostEnabled() {
    return this.getBooleanAttribute('encryption_at_host_enabled') as any;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // network_interface_ids - computed: false, optional: false, required: true
  private _networkInterfaceIds?: string[]; 
  public get networkInterfaceIds() {
    return this.getListAttribute('network_interface_ids');
  }
  public set networkInterfaceIds(value: string[]) {
    this._networkInterfaceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdsInput() {
    return this._networkInterfaceIds;
  }

  // patch_mode - computed: false, optional: true, required: false
  private _patchMode?: string; 
  public get patchMode() {
    return this.getStringAttribute('patch_mode');
  }
  public set patchMode(value: string) {
    this._patchMode = value;
  }
  public resetPatchMode() {
    this._patchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchModeInput() {
    return this._patchMode;
  }

  // platform_fault_domain - computed: false, optional: true, required: false
  private _platformFaultDomain?: number; 
  public get platformFaultDomain() {
    return this.getNumberAttribute('platform_fault_domain');
  }
  public set platformFaultDomain(value: number) {
    this._platformFaultDomain = value;
  }
  public resetPlatformFaultDomain() {
    this._platformFaultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformFaultDomainInput() {
    return this._platformFaultDomain;
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

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // private_ip_addresses - computed: true, optional: false, required: false
  public get privateIpAddresses() {
    return this.getListAttribute('private_ip_addresses');
  }

  // provision_vm_agent - computed: false, optional: true, required: false
  private _provisionVmAgent?: boolean | cdktf.IResolvable; 
  public get provisionVmAgent() {
    return this.getBooleanAttribute('provision_vm_agent') as any;
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

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }

  // public_ip_addresses - computed: true, optional: false, required: false
  public get publicIpAddresses() {
    return this.getListAttribute('public_ip_addresses');
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

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // virtual_machine_id - computed: true, optional: false, required: false
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }

  // virtual_machine_scale_set_id - computed: false, optional: true, required: false
  private _virtualMachineScaleSetId?: string; 
  public get virtualMachineScaleSetId() {
    return this.getStringAttribute('virtual_machine_scale_set_id');
  }
  public set virtualMachineScaleSetId(value: string) {
    this._virtualMachineScaleSetId = value;
  }
  public resetVirtualMachineScaleSetId() {
    this._virtualMachineScaleSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineScaleSetIdInput() {
    return this._virtualMachineScaleSetId;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // additional_capabilities - computed: false, optional: true, required: false
  private _additionalCapabilities = new LinuxVirtualMachineAdditionalCapabilitiesOutputReference(this as any, "additional_capabilities", true);
  public get additionalCapabilities() {
    return this._additionalCapabilities;
  }
  public putAdditionalCapabilities(value: LinuxVirtualMachineAdditionalCapabilities) {
    this._additionalCapabilities.internalValue = value;
  }
  public resetAdditionalCapabilities() {
    this._additionalCapabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalCapabilitiesInput() {
    return this._additionalCapabilities.internalValue;
  }

  // admin_ssh_key - computed: false, optional: true, required: false
  private _adminSshKey?: LinuxVirtualMachineAdminSshKey[]; 
  public get adminSshKey() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('admin_ssh_key') as any;
  }
  public set adminSshKey(value: LinuxVirtualMachineAdminSshKey[]) {
    this._adminSshKey = value;
  }
  public resetAdminSshKey() {
    this._adminSshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSshKeyInput() {
    return this._adminSshKey;
  }

  // boot_diagnostics - computed: false, optional: true, required: false
  private _bootDiagnostics = new LinuxVirtualMachineBootDiagnosticsOutputReference(this as any, "boot_diagnostics", true);
  public get bootDiagnostics() {
    return this._bootDiagnostics;
  }
  public putBootDiagnostics(value: LinuxVirtualMachineBootDiagnostics) {
    this._bootDiagnostics.internalValue = value;
  }
  public resetBootDiagnostics() {
    this._bootDiagnostics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiagnosticsInput() {
    return this._bootDiagnostics.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new LinuxVirtualMachineIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: LinuxVirtualMachineIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // os_disk - computed: false, optional: false, required: true
  private _osDisk = new LinuxVirtualMachineOsDiskOutputReference(this as any, "os_disk", true);
  public get osDisk() {
    return this._osDisk;
  }
  public putOsDisk(value: LinuxVirtualMachineOsDisk) {
    this._osDisk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskInput() {
    return this._osDisk.internalValue;
  }

  // plan - computed: false, optional: true, required: false
  private _plan = new LinuxVirtualMachinePlanOutputReference(this as any, "plan", true);
  public get plan() {
    return this._plan;
  }
  public putPlan(value: LinuxVirtualMachinePlan) {
    this._plan.internalValue = value;
  }
  public resetPlan() {
    this._plan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: LinuxVirtualMachineSecret[]; 
  public get secret() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secret') as any;
  }
  public set secret(value: LinuxVirtualMachineSecret[]) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // source_image_reference - computed: false, optional: true, required: false
  private _sourceImageReference = new LinuxVirtualMachineSourceImageReferenceOutputReference(this as any, "source_image_reference", true);
  public get sourceImageReference() {
    return this._sourceImageReference;
  }
  public putSourceImageReference(value: LinuxVirtualMachineSourceImageReference) {
    this._sourceImageReference.internalValue = value;
  }
  public resetSourceImageReference() {
    this._sourceImageReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageReferenceInput() {
    return this._sourceImageReference.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LinuxVirtualMachineTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LinuxVirtualMachineTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      admin_username: cdktf.stringToTerraform(this._adminUsername),
      allow_extension_operations: cdktf.booleanToTerraform(this._allowExtensionOperations),
      availability_set_id: cdktf.stringToTerraform(this._availabilitySetId),
      computer_name: cdktf.stringToTerraform(this._computerName),
      custom_data: cdktf.stringToTerraform(this._customData),
      dedicated_host_id: cdktf.stringToTerraform(this._dedicatedHostId),
      disable_password_authentication: cdktf.booleanToTerraform(this._disablePasswordAuthentication),
      encryption_at_host_enabled: cdktf.booleanToTerraform(this._encryptionAtHostEnabled),
      eviction_policy: cdktf.stringToTerraform(this._evictionPolicy),
      extensions_time_budget: cdktf.stringToTerraform(this._extensionsTimeBudget),
      license_type: cdktf.stringToTerraform(this._licenseType),
      location: cdktf.stringToTerraform(this._location),
      max_bid_price: cdktf.numberToTerraform(this._maxBidPrice),
      name: cdktf.stringToTerraform(this._name),
      network_interface_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._networkInterfaceIds),
      patch_mode: cdktf.stringToTerraform(this._patchMode),
      platform_fault_domain: cdktf.numberToTerraform(this._platformFaultDomain),
      priority: cdktf.stringToTerraform(this._priority),
      provision_vm_agent: cdktf.booleanToTerraform(this._provisionVmAgent),
      proximity_placement_group_id: cdktf.stringToTerraform(this._proximityPlacementGroupId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      size: cdktf.stringToTerraform(this._size),
      source_image_id: cdktf.stringToTerraform(this._sourceImageId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      virtual_machine_scale_set_id: cdktf.stringToTerraform(this._virtualMachineScaleSetId),
      zone: cdktf.stringToTerraform(this._zone),
      additional_capabilities: linuxVirtualMachineAdditionalCapabilitiesToTerraform(this._additionalCapabilities.internalValue),
      admin_ssh_key: cdktf.listMapper(linuxVirtualMachineAdminSshKeyToTerraform)(this._adminSshKey),
      boot_diagnostics: linuxVirtualMachineBootDiagnosticsToTerraform(this._bootDiagnostics.internalValue),
      identity: linuxVirtualMachineIdentityToTerraform(this._identity.internalValue),
      os_disk: linuxVirtualMachineOsDiskToTerraform(this._osDisk.internalValue),
      plan: linuxVirtualMachinePlanToTerraform(this._plan.internalValue),
      secret: cdktf.listMapper(linuxVirtualMachineSecretToTerraform)(this._secret),
      source_image_reference: linuxVirtualMachineSourceImageReferenceToTerraform(this._sourceImageReference.internalValue),
      timeouts: linuxVirtualMachineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
