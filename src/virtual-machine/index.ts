// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#availability_set_id VirtualMachine#availability_set_id}
  */
  readonly availabilitySetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#delete_data_disks_on_termination VirtualMachine#delete_data_disks_on_termination}
  */
  readonly deleteDataDisksOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#delete_os_disk_on_termination VirtualMachine#delete_os_disk_on_termination}
  */
  readonly deleteOsDiskOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#id VirtualMachine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#license_type VirtualMachine#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#location VirtualMachine#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#name VirtualMachine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#network_interface_ids VirtualMachine#network_interface_ids}
  */
  readonly networkInterfaceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#primary_network_interface_id VirtualMachine#primary_network_interface_id}
  */
  readonly primaryNetworkInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#proximity_placement_group_id VirtualMachine#proximity_placement_group_id}
  */
  readonly proximityPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#resource_group_name VirtualMachine#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#tags VirtualMachine#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#vm_size VirtualMachine#vm_size}
  */
  readonly vmSize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#zones VirtualMachine#zones}
  */
  readonly zones?: string[];
  /**
  * additional_capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#additional_capabilities VirtualMachine#additional_capabilities}
  */
  readonly additionalCapabilities?: VirtualMachineAdditionalCapabilities;
  /**
  * boot_diagnostics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#boot_diagnostics VirtualMachine#boot_diagnostics}
  */
  readonly bootDiagnostics?: VirtualMachineBootDiagnostics;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#identity VirtualMachine#identity}
  */
  readonly identity?: VirtualMachineIdentity;
  /**
  * os_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#os_profile VirtualMachine#os_profile}
  */
  readonly osProfile?: VirtualMachineOsProfile;
  /**
  * os_profile_linux_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#os_profile_linux_config VirtualMachine#os_profile_linux_config}
  */
  readonly osProfileLinuxConfig?: VirtualMachineOsProfileLinuxConfig;
  /**
  * os_profile_secrets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#os_profile_secrets VirtualMachine#os_profile_secrets}
  */
  readonly osProfileSecrets?: VirtualMachineOsProfileSecrets[] | cdktf.IResolvable;
  /**
  * os_profile_windows_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#os_profile_windows_config VirtualMachine#os_profile_windows_config}
  */
  readonly osProfileWindowsConfig?: VirtualMachineOsProfileWindowsConfig;
  /**
  * plan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#plan VirtualMachine#plan}
  */
  readonly plan?: VirtualMachinePlan;
  /**
  * storage_data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#storage_data_disk VirtualMachine#storage_data_disk}
  */
  readonly storageDataDisk?: VirtualMachineStorageDataDisk[] | cdktf.IResolvable;
  /**
  * storage_image_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#storage_image_reference VirtualMachine#storage_image_reference}
  */
  readonly storageImageReference?: VirtualMachineStorageImageReference;
  /**
  * storage_os_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#storage_os_disk VirtualMachine#storage_os_disk}
  */
  readonly storageOsDisk: VirtualMachineStorageOsDisk;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#timeouts VirtualMachine#timeouts}
  */
  readonly timeouts?: VirtualMachineTimeouts;
}
export interface VirtualMachineAdditionalCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#ultra_ssd_enabled VirtualMachine#ultra_ssd_enabled}
  */
  readonly ultraSsdEnabled: boolean | cdktf.IResolvable;
}

export function virtualMachineAdditionalCapabilitiesToTerraform(struct?: VirtualMachineAdditionalCapabilitiesOutputReference | VirtualMachineAdditionalCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ultra_ssd_enabled: cdktf.booleanToTerraform(struct!.ultraSsdEnabled),
  }
}


export function virtualMachineAdditionalCapabilitiesToHclTerraform(struct?: VirtualMachineAdditionalCapabilitiesOutputReference | VirtualMachineAdditionalCapabilities): any {
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

export class VirtualMachineAdditionalCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineAdditionalCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ultraSsdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ultraSsdEnabled = this._ultraSsdEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineAdditionalCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ultraSsdEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ultraSsdEnabled = value.ultraSsdEnabled;
    }
  }

  // ultra_ssd_enabled - computed: false, optional: false, required: true
  private _ultraSsdEnabled?: boolean | cdktf.IResolvable; 
  public get ultraSsdEnabled() {
    return this.getBooleanAttribute('ultra_ssd_enabled');
  }
  public set ultraSsdEnabled(value: boolean | cdktf.IResolvable) {
    this._ultraSsdEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ultraSsdEnabledInput() {
    return this._ultraSsdEnabled;
  }
}
export interface VirtualMachineBootDiagnostics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#enabled VirtualMachine#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#storage_uri VirtualMachine#storage_uri}
  */
  readonly storageUri: string;
}

export function virtualMachineBootDiagnosticsToTerraform(struct?: VirtualMachineBootDiagnosticsOutputReference | VirtualMachineBootDiagnostics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    storage_uri: cdktf.stringToTerraform(struct!.storageUri),
  }
}


export function virtualMachineBootDiagnosticsToHclTerraform(struct?: VirtualMachineBootDiagnosticsOutputReference | VirtualMachineBootDiagnostics): any {
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
    storage_uri: {
      value: cdktf.stringToHclTerraform(struct!.storageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineBootDiagnosticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineBootDiagnostics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._storageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageUri = this._storageUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineBootDiagnostics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._storageUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._storageUri = value.storageUri;
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

  // storage_uri - computed: false, optional: false, required: true
  private _storageUri?: string; 
  public get storageUri() {
    return this.getStringAttribute('storage_uri');
  }
  public set storageUri(value: string) {
    this._storageUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageUriInput() {
    return this._storageUri;
  }
}
export interface VirtualMachineIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#identity_ids VirtualMachine#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#type VirtualMachine#type}
  */
  readonly type: string;
}

export function virtualMachineIdentityToTerraform(struct?: VirtualMachineIdentityOutputReference | VirtualMachineIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualMachineIdentityToHclTerraform(struct?: VirtualMachineIdentityOutputReference | VirtualMachineIdentity): any {
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

export class VirtualMachineIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineIdentity | undefined {
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

  public set internalValue(value: VirtualMachineIdentity | undefined) {
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
export interface VirtualMachineOsProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#admin_password VirtualMachine#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#admin_username VirtualMachine#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#computer_name VirtualMachine#computer_name}
  */
  readonly computerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#custom_data VirtualMachine#custom_data}
  */
  readonly customData?: string;
}

export function virtualMachineOsProfileToTerraform(struct?: VirtualMachineOsProfileOutputReference | VirtualMachineOsProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    computer_name: cdktf.stringToTerraform(struct!.computerName),
    custom_data: cdktf.stringToTerraform(struct!.customData),
  }
}


export function virtualMachineOsProfileToHclTerraform(struct?: VirtualMachineOsProfileOutputReference | VirtualMachineOsProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    computer_name: {
      value: cdktf.stringToHclTerraform(struct!.computerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_data: {
      value: cdktf.stringToHclTerraform(struct!.customData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineOsProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineOsProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._computerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.computerName = this._computerName;
    }
    if (this._customData !== undefined) {
      hasAnyValues = true;
      internalValueResult.customData = this._customData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineOsProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminPassword = undefined;
      this._adminUsername = undefined;
      this._computerName = undefined;
      this._customData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminPassword = value.adminPassword;
      this._adminUsername = value.adminUsername;
      this._computerName = value.computerName;
      this._customData = value.customData;
    }
  }

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

  // computer_name - computed: false, optional: false, required: true
  private _computerName?: string; 
  public get computerName() {
    return this.getStringAttribute('computer_name');
  }
  public set computerName(value: string) {
    this._computerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computerNameInput() {
    return this._computerName;
  }

  // custom_data - computed: true, optional: true, required: false
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
}
export interface VirtualMachineOsProfileLinuxConfigSshKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#key_data VirtualMachine#key_data}
  */
  readonly keyData: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#path VirtualMachine#path}
  */
  readonly path: string;
}

export function virtualMachineOsProfileLinuxConfigSshKeysToTerraform(struct?: VirtualMachineOsProfileLinuxConfigSshKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_data: cdktf.stringToTerraform(struct!.keyData),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function virtualMachineOsProfileLinuxConfigSshKeysToHclTerraform(struct?: VirtualMachineOsProfileLinuxConfigSshKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_data: {
      value: cdktf.stringToHclTerraform(struct!.keyData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineOsProfileLinuxConfigSshKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineOsProfileLinuxConfigSshKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyData !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyData = this._keyData;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineOsProfileLinuxConfigSshKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyData = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyData = value.keyData;
      this._path = value.path;
    }
  }

  // key_data - computed: false, optional: false, required: true
  private _keyData?: string; 
  public get keyData() {
    return this.getStringAttribute('key_data');
  }
  public set keyData(value: string) {
    this._keyData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDataInput() {
    return this._keyData;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class VirtualMachineOsProfileLinuxConfigSshKeysList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineOsProfileLinuxConfigSshKeys[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineOsProfileLinuxConfigSshKeysOutputReference {
    return new VirtualMachineOsProfileLinuxConfigSshKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineOsProfileLinuxConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#disable_password_authentication VirtualMachine#disable_password_authentication}
  */
  readonly disablePasswordAuthentication: boolean | cdktf.IResolvable;
  /**
  * ssh_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#ssh_keys VirtualMachine#ssh_keys}
  */
  readonly sshKeys?: VirtualMachineOsProfileLinuxConfigSshKeys[] | cdktf.IResolvable;
}

export function virtualMachineOsProfileLinuxConfigToTerraform(struct?: VirtualMachineOsProfileLinuxConfigOutputReference | VirtualMachineOsProfileLinuxConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_password_authentication: cdktf.booleanToTerraform(struct!.disablePasswordAuthentication),
    ssh_keys: cdktf.listMapper(virtualMachineOsProfileLinuxConfigSshKeysToTerraform, true)(struct!.sshKeys),
  }
}


export function virtualMachineOsProfileLinuxConfigToHclTerraform(struct?: VirtualMachineOsProfileLinuxConfigOutputReference | VirtualMachineOsProfileLinuxConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_password_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.disablePasswordAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssh_keys: {
      value: cdktf.listMapperHcl(virtualMachineOsProfileLinuxConfigSshKeysToHclTerraform, true)(struct!.sshKeys),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineOsProfileLinuxConfigSshKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineOsProfileLinuxConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineOsProfileLinuxConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disablePasswordAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePasswordAuthentication = this._disablePasswordAuthentication;
    }
    if (this._sshKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineOsProfileLinuxConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disablePasswordAuthentication = undefined;
      this._sshKeys.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disablePasswordAuthentication = value.disablePasswordAuthentication;
      this._sshKeys.internalValue = value.sshKeys;
    }
  }

  // disable_password_authentication - computed: false, optional: false, required: true
  private _disablePasswordAuthentication?: boolean | cdktf.IResolvable; 
  public get disablePasswordAuthentication() {
    return this.getBooleanAttribute('disable_password_authentication');
  }
  public set disablePasswordAuthentication(value: boolean | cdktf.IResolvable) {
    this._disablePasswordAuthentication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePasswordAuthenticationInput() {
    return this._disablePasswordAuthentication;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys = new VirtualMachineOsProfileLinuxConfigSshKeysList(this, "ssh_keys", false);
  public get sshKeys() {
    return this._sshKeys;
  }
  public putSshKeys(value: VirtualMachineOsProfileLinuxConfigSshKeys[] | cdktf.IResolvable) {
    this._sshKeys.internalValue = value;
  }
  public resetSshKeys() {
    this._sshKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys.internalValue;
  }
}
export interface VirtualMachineOsProfileSecretsVaultCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#certificate_store VirtualMachine#certificate_store}
  */
  readonly certificateStore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#certificate_url VirtualMachine#certificate_url}
  */
  readonly certificateUrl: string;
}

export function virtualMachineOsProfileSecretsVaultCertificatesToTerraform(struct?: VirtualMachineOsProfileSecretsVaultCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_store: cdktf.stringToTerraform(struct!.certificateStore),
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
  }
}


export function virtualMachineOsProfileSecretsVaultCertificatesToHclTerraform(struct?: VirtualMachineOsProfileSecretsVaultCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_store: {
      value: cdktf.stringToHclTerraform(struct!.certificateStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_url: {
      value: cdktf.stringToHclTerraform(struct!.certificateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineOsProfileSecretsVaultCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineOsProfileSecretsVaultCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateStore = this._certificateStore;
    }
    if (this._certificateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateUrl = this._certificateUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineOsProfileSecretsVaultCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateStore = undefined;
      this._certificateUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateStore = value.certificateStore;
      this._certificateUrl = value.certificateUrl;
    }
  }

  // certificate_store - computed: false, optional: true, required: false
  private _certificateStore?: string; 
  public get certificateStore() {
    return this.getStringAttribute('certificate_store');
  }
  public set certificateStore(value: string) {
    this._certificateStore = value;
  }
  public resetCertificateStore() {
    this._certificateStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateStoreInput() {
    return this._certificateStore;
  }

  // certificate_url - computed: false, optional: false, required: true
  private _certificateUrl?: string; 
  public get certificateUrl() {
    return this.getStringAttribute('certificate_url');
  }
  public set certificateUrl(value: string) {
    this._certificateUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateUrlInput() {
    return this._certificateUrl;
  }
}

export class VirtualMachineOsProfileSecretsVaultCertificatesList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineOsProfileSecretsVaultCertificates[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineOsProfileSecretsVaultCertificatesOutputReference {
    return new VirtualMachineOsProfileSecretsVaultCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineOsProfileSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#source_vault_id VirtualMachine#source_vault_id}
  */
  readonly sourceVaultId: string;
  /**
  * vault_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#vault_certificates VirtualMachine#vault_certificates}
  */
  readonly vaultCertificates?: VirtualMachineOsProfileSecretsVaultCertificates[] | cdktf.IResolvable;
}

export function virtualMachineOsProfileSecretsToTerraform(struct?: VirtualMachineOsProfileSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_vault_id: cdktf.stringToTerraform(struct!.sourceVaultId),
    vault_certificates: cdktf.listMapper(virtualMachineOsProfileSecretsVaultCertificatesToTerraform, true)(struct!.vaultCertificates),
  }
}


export function virtualMachineOsProfileSecretsToHclTerraform(struct?: VirtualMachineOsProfileSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_certificates: {
      value: cdktf.listMapperHcl(virtualMachineOsProfileSecretsVaultCertificatesToHclTerraform, true)(struct!.vaultCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineOsProfileSecretsVaultCertificatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineOsProfileSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineOsProfileSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVaultId = this._sourceVaultId;
    }
    if (this._vaultCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultCertificates = this._vaultCertificates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineOsProfileSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceVaultId = undefined;
      this._vaultCertificates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceVaultId = value.sourceVaultId;
      this._vaultCertificates.internalValue = value.vaultCertificates;
    }
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

  // vault_certificates - computed: false, optional: true, required: false
  private _vaultCertificates = new VirtualMachineOsProfileSecretsVaultCertificatesList(this, "vault_certificates", false);
  public get vaultCertificates() {
    return this._vaultCertificates;
  }
  public putVaultCertificates(value: VirtualMachineOsProfileSecretsVaultCertificates[] | cdktf.IResolvable) {
    this._vaultCertificates.internalValue = value;
  }
  public resetVaultCertificates() {
    this._vaultCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultCertificatesInput() {
    return this._vaultCertificates.internalValue;
  }
}

export class VirtualMachineOsProfileSecretsList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineOsProfileSecrets[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineOsProfileSecretsOutputReference {
    return new VirtualMachineOsProfileSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#component VirtualMachine#component}
  */
  readonly component: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#content VirtualMachine#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#pass VirtualMachine#pass}
  */
  readonly pass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#setting_name VirtualMachine#setting_name}
  */
  readonly settingName: string;
}

export function virtualMachineOsProfileWindowsConfigAdditionalUnattendConfigToTerraform(struct?: VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component: cdktf.stringToTerraform(struct!.component),
    content: cdktf.stringToTerraform(struct!.content),
    pass: cdktf.stringToTerraform(struct!.pass),
    setting_name: cdktf.stringToTerraform(struct!.settingName),
  }
}


export function virtualMachineOsProfileWindowsConfigAdditionalUnattendConfigToHclTerraform(struct?: VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component: {
      value: cdktf.stringToHclTerraform(struct!.component),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pass: {
      value: cdktf.stringToHclTerraform(struct!.pass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    setting_name: {
      value: cdktf.stringToHclTerraform(struct!.settingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._component !== undefined) {
      hasAnyValues = true;
      internalValueResult.component = this._component;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    if (this._settingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.settingName = this._settingName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._component = undefined;
      this._content = undefined;
      this._pass = undefined;
      this._settingName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._component = value.component;
      this._content = value.content;
      this._pass = value.pass;
      this._settingName = value.settingName;
    }
  }

  // component - computed: false, optional: false, required: true
  private _component?: string; 
  public get component() {
    return this.getStringAttribute('component');
  }
  public set component(value: string) {
    this._component = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component;
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

  // pass - computed: false, optional: false, required: true
  private _pass?: string; 
  public get pass() {
    return this.getStringAttribute('pass');
  }
  public set pass(value: string) {
    this._pass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }

  // setting_name - computed: false, optional: false, required: true
  private _settingName?: string; 
  public get settingName() {
    return this.getStringAttribute('setting_name');
  }
  public set settingName(value: string) {
    this._settingName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingNameInput() {
    return this._settingName;
  }
}

export class VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference {
    return new VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineOsProfileWindowsConfigWinrm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#certificate_url VirtualMachine#certificate_url}
  */
  readonly certificateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#protocol VirtualMachine#protocol}
  */
  readonly protocol: string;
}

export function virtualMachineOsProfileWindowsConfigWinrmToTerraform(struct?: VirtualMachineOsProfileWindowsConfigWinrm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function virtualMachineOsProfileWindowsConfigWinrmToHclTerraform(struct?: VirtualMachineOsProfileWindowsConfigWinrm | cdktf.IResolvable): any {
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

export class VirtualMachineOsProfileWindowsConfigWinrmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineOsProfileWindowsConfigWinrm | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualMachineOsProfileWindowsConfigWinrm | cdktf.IResolvable | undefined) {
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

export class VirtualMachineOsProfileWindowsConfigWinrmList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineOsProfileWindowsConfigWinrm[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineOsProfileWindowsConfigWinrmOutputReference {
    return new VirtualMachineOsProfileWindowsConfigWinrmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineOsProfileWindowsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#enable_automatic_upgrades VirtualMachine#enable_automatic_upgrades}
  */
  readonly enableAutomaticUpgrades?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#provision_vm_agent VirtualMachine#provision_vm_agent}
  */
  readonly provisionVmAgent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#timezone VirtualMachine#timezone}
  */
  readonly timezone?: string;
  /**
  * additional_unattend_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#additional_unattend_config VirtualMachine#additional_unattend_config}
  */
  readonly additionalUnattendConfig?: VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig[] | cdktf.IResolvable;
  /**
  * winrm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#winrm VirtualMachine#winrm}
  */
  readonly winrm?: VirtualMachineOsProfileWindowsConfigWinrm[] | cdktf.IResolvable;
}

export function virtualMachineOsProfileWindowsConfigToTerraform(struct?: VirtualMachineOsProfileWindowsConfigOutputReference | VirtualMachineOsProfileWindowsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_automatic_upgrades: cdktf.booleanToTerraform(struct!.enableAutomaticUpgrades),
    provision_vm_agent: cdktf.booleanToTerraform(struct!.provisionVmAgent),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    additional_unattend_config: cdktf.listMapper(virtualMachineOsProfileWindowsConfigAdditionalUnattendConfigToTerraform, true)(struct!.additionalUnattendConfig),
    winrm: cdktf.listMapper(virtualMachineOsProfileWindowsConfigWinrmToTerraform, true)(struct!.winrm),
  }
}


export function virtualMachineOsProfileWindowsConfigToHclTerraform(struct?: VirtualMachineOsProfileWindowsConfigOutputReference | VirtualMachineOsProfileWindowsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_automatic_upgrades: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutomaticUpgrades),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    provision_vm_agent: {
      value: cdktf.booleanToHclTerraform(struct!.provisionVmAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_unattend_config: {
      value: cdktf.listMapperHcl(virtualMachineOsProfileWindowsConfigAdditionalUnattendConfigToHclTerraform, true)(struct!.additionalUnattendConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList",
    },
    winrm: {
      value: cdktf.listMapperHcl(virtualMachineOsProfileWindowsConfigWinrmToHclTerraform, true)(struct!.winrm),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineOsProfileWindowsConfigWinrmList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineOsProfileWindowsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineOsProfileWindowsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAutomaticUpgrades !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutomaticUpgrades = this._enableAutomaticUpgrades;
    }
    if (this._provisionVmAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionVmAgent = this._provisionVmAgent;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._additionalUnattendConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalUnattendConfig = this._additionalUnattendConfig?.internalValue;
    }
    if (this._winrm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.winrm = this._winrm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineOsProfileWindowsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableAutomaticUpgrades = undefined;
      this._provisionVmAgent = undefined;
      this._timezone = undefined;
      this._additionalUnattendConfig.internalValue = undefined;
      this._winrm.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableAutomaticUpgrades = value.enableAutomaticUpgrades;
      this._provisionVmAgent = value.provisionVmAgent;
      this._timezone = value.timezone;
      this._additionalUnattendConfig.internalValue = value.additionalUnattendConfig;
      this._winrm.internalValue = value.winrm;
    }
  }

  // enable_automatic_upgrades - computed: false, optional: true, required: false
  private _enableAutomaticUpgrades?: boolean | cdktf.IResolvable; 
  public get enableAutomaticUpgrades() {
    return this.getBooleanAttribute('enable_automatic_upgrades');
  }
  public set enableAutomaticUpgrades(value: boolean | cdktf.IResolvable) {
    this._enableAutomaticUpgrades = value;
  }
  public resetEnableAutomaticUpgrades() {
    this._enableAutomaticUpgrades = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomaticUpgradesInput() {
    return this._enableAutomaticUpgrades;
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

  // additional_unattend_config - computed: false, optional: true, required: false
  private _additionalUnattendConfig = new VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfigList(this, "additional_unattend_config", false);
  public get additionalUnattendConfig() {
    return this._additionalUnattendConfig;
  }
  public putAdditionalUnattendConfig(value: VirtualMachineOsProfileWindowsConfigAdditionalUnattendConfig[] | cdktf.IResolvable) {
    this._additionalUnattendConfig.internalValue = value;
  }
  public resetAdditionalUnattendConfig() {
    this._additionalUnattendConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalUnattendConfigInput() {
    return this._additionalUnattendConfig.internalValue;
  }

  // winrm - computed: false, optional: true, required: false
  private _winrm = new VirtualMachineOsProfileWindowsConfigWinrmList(this, "winrm", false);
  public get winrm() {
    return this._winrm;
  }
  public putWinrm(value: VirtualMachineOsProfileWindowsConfigWinrm[] | cdktf.IResolvable) {
    this._winrm.internalValue = value;
  }
  public resetWinrm() {
    this._winrm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winrmInput() {
    return this._winrm.internalValue;
  }
}
export interface VirtualMachinePlan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#name VirtualMachine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#product VirtualMachine#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#publisher VirtualMachine#publisher}
  */
  readonly publisher: string;
}

export function virtualMachinePlanToTerraform(struct?: VirtualMachinePlanOutputReference | VirtualMachinePlan): any {
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


export function virtualMachinePlanToHclTerraform(struct?: VirtualMachinePlanOutputReference | VirtualMachinePlan): any {
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

export class VirtualMachinePlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachinePlan | undefined {
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

  public set internalValue(value: VirtualMachinePlan | undefined) {
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
export interface VirtualMachineStorageDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#caching VirtualMachine#caching}
  */
  readonly caching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#create_option VirtualMachine#create_option}
  */
  readonly createOption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#disk_size_gb VirtualMachine#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#lun VirtualMachine#lun}
  */
  readonly lun: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#managed_disk_id VirtualMachine#managed_disk_id}
  */
  readonly managedDiskId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#managed_disk_type VirtualMachine#managed_disk_type}
  */
  readonly managedDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#name VirtualMachine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#vhd_uri VirtualMachine#vhd_uri}
  */
  readonly vhdUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#write_accelerator_enabled VirtualMachine#write_accelerator_enabled}
  */
  readonly writeAcceleratorEnabled?: boolean | cdktf.IResolvable;
}

export function virtualMachineStorageDataDiskToTerraform(struct?: VirtualMachineStorageDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    create_option: cdktf.stringToTerraform(struct!.createOption),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    lun: cdktf.numberToTerraform(struct!.lun),
    managed_disk_id: cdktf.stringToTerraform(struct!.managedDiskId),
    managed_disk_type: cdktf.stringToTerraform(struct!.managedDiskType),
    name: cdktf.stringToTerraform(struct!.name),
    vhd_uri: cdktf.stringToTerraform(struct!.vhdUri),
    write_accelerator_enabled: cdktf.booleanToTerraform(struct!.writeAcceleratorEnabled),
  }
}


export function virtualMachineStorageDataDiskToHclTerraform(struct?: VirtualMachineStorageDataDisk | cdktf.IResolvable): any {
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
    managed_disk_id: {
      value: cdktf.stringToHclTerraform(struct!.managedDiskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_disk_type: {
      value: cdktf.stringToHclTerraform(struct!.managedDiskType),
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
    vhd_uri: {
      value: cdktf.stringToHclTerraform(struct!.vhdUri),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineStorageDataDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineStorageDataDisk | cdktf.IResolvable | undefined {
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
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._managedDiskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedDiskId = this._managedDiskId;
    }
    if (this._managedDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedDiskType = this._managedDiskType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vhdUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.vhdUri = this._vhdUri;
    }
    if (this._writeAcceleratorEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeAcceleratorEnabled = this._writeAcceleratorEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineStorageDataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caching = undefined;
      this._createOption = undefined;
      this._diskSizeGb = undefined;
      this._lun = undefined;
      this._managedDiskId = undefined;
      this._managedDiskType = undefined;
      this._name = undefined;
      this._vhdUri = undefined;
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
      this._diskSizeGb = value.diskSizeGb;
      this._lun = value.lun;
      this._managedDiskId = value.managedDiskId;
      this._managedDiskType = value.managedDiskType;
      this._name = value.name;
      this._vhdUri = value.vhdUri;
      this._writeAcceleratorEnabled = value.writeAcceleratorEnabled;
    }
  }

  // caching - computed: true, optional: true, required: false
  private _caching?: string; 
  public get caching() {
    return this.getStringAttribute('caching');
  }
  public set caching(value: string) {
    this._caching = value;
  }
  public resetCaching() {
    this._caching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingInput() {
    return this._caching;
  }

  // create_option - computed: false, optional: false, required: true
  private _createOption?: string; 
  public get createOption() {
    return this.getStringAttribute('create_option');
  }
  public set createOption(value: string) {
    this._createOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createOptionInput() {
    return this._createOption;
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

  // managed_disk_id - computed: true, optional: true, required: false
  private _managedDiskId?: string; 
  public get managedDiskId() {
    return this.getStringAttribute('managed_disk_id');
  }
  public set managedDiskId(value: string) {
    this._managedDiskId = value;
  }
  public resetManagedDiskId() {
    this._managedDiskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDiskIdInput() {
    return this._managedDiskId;
  }

  // managed_disk_type - computed: true, optional: true, required: false
  private _managedDiskType?: string; 
  public get managedDiskType() {
    return this.getStringAttribute('managed_disk_type');
  }
  public set managedDiskType(value: string) {
    this._managedDiskType = value;
  }
  public resetManagedDiskType() {
    this._managedDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDiskTypeInput() {
    return this._managedDiskType;
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

  // vhd_uri - computed: false, optional: true, required: false
  private _vhdUri?: string; 
  public get vhdUri() {
    return this.getStringAttribute('vhd_uri');
  }
  public set vhdUri(value: string) {
    this._vhdUri = value;
  }
  public resetVhdUri() {
    this._vhdUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhdUriInput() {
    return this._vhdUri;
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

export class VirtualMachineStorageDataDiskList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineStorageDataDisk[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineStorageDataDiskOutputReference {
    return new VirtualMachineStorageDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineStorageImageReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#id VirtualMachine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#offer VirtualMachine#offer}
  */
  readonly offer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#publisher VirtualMachine#publisher}
  */
  readonly publisher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#sku VirtualMachine#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#version VirtualMachine#version}
  */
  readonly version?: string;
}

export function virtualMachineStorageImageReferenceToTerraform(struct?: VirtualMachineStorageImageReferenceOutputReference | VirtualMachineStorageImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function virtualMachineStorageImageReferenceToHclTerraform(struct?: VirtualMachineStorageImageReferenceOutputReference | VirtualMachineStorageImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class VirtualMachineStorageImageReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineStorageImageReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
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

  public set internalValue(value: VirtualMachineStorageImageReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._offer = undefined;
      this._publisher = undefined;
      this._sku = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._offer = value.offer;
      this._publisher = value.publisher;
      this._sku = value.sku;
      this._version = value.version;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // offer - computed: false, optional: true, required: false
  private _offer?: string; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  public resetOffer() {
    this._offer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer;
  }

  // publisher - computed: false, optional: true, required: false
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  public resetPublisher() {
    this._publisher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }

  // sku - computed: false, optional: true, required: false
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // version - computed: true, optional: true, required: false
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
}
export interface VirtualMachineStorageOsDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#caching VirtualMachine#caching}
  */
  readonly caching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#create_option VirtualMachine#create_option}
  */
  readonly createOption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#disk_size_gb VirtualMachine#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#image_uri VirtualMachine#image_uri}
  */
  readonly imageUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#managed_disk_id VirtualMachine#managed_disk_id}
  */
  readonly managedDiskId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#managed_disk_type VirtualMachine#managed_disk_type}
  */
  readonly managedDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#name VirtualMachine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#os_type VirtualMachine#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#vhd_uri VirtualMachine#vhd_uri}
  */
  readonly vhdUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#write_accelerator_enabled VirtualMachine#write_accelerator_enabled}
  */
  readonly writeAcceleratorEnabled?: boolean | cdktf.IResolvable;
}

export function virtualMachineStorageOsDiskToTerraform(struct?: VirtualMachineStorageOsDiskOutputReference | VirtualMachineStorageOsDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    create_option: cdktf.stringToTerraform(struct!.createOption),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
    managed_disk_id: cdktf.stringToTerraform(struct!.managedDiskId),
    managed_disk_type: cdktf.stringToTerraform(struct!.managedDiskType),
    name: cdktf.stringToTerraform(struct!.name),
    os_type: cdktf.stringToTerraform(struct!.osType),
    vhd_uri: cdktf.stringToTerraform(struct!.vhdUri),
    write_accelerator_enabled: cdktf.booleanToTerraform(struct!.writeAcceleratorEnabled),
  }
}


export function virtualMachineStorageOsDiskToHclTerraform(struct?: VirtualMachineStorageOsDiskOutputReference | VirtualMachineStorageOsDisk): any {
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
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_uri: {
      value: cdktf.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_disk_id: {
      value: cdktf.stringToHclTerraform(struct!.managedDiskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_disk_type: {
      value: cdktf.stringToHclTerraform(struct!.managedDiskType),
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
    os_type: {
      value: cdktf.stringToHclTerraform(struct!.osType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vhd_uri: {
      value: cdktf.stringToHclTerraform(struct!.vhdUri),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineStorageOsDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineStorageOsDisk | undefined {
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
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    if (this._managedDiskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedDiskId = this._managedDiskId;
    }
    if (this._managedDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedDiskType = this._managedDiskType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._osType !== undefined) {
      hasAnyValues = true;
      internalValueResult.osType = this._osType;
    }
    if (this._vhdUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.vhdUri = this._vhdUri;
    }
    if (this._writeAcceleratorEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeAcceleratorEnabled = this._writeAcceleratorEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineStorageOsDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caching = undefined;
      this._createOption = undefined;
      this._diskSizeGb = undefined;
      this._imageUri = undefined;
      this._managedDiskId = undefined;
      this._managedDiskType = undefined;
      this._name = undefined;
      this._osType = undefined;
      this._vhdUri = undefined;
      this._writeAcceleratorEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caching = value.caching;
      this._createOption = value.createOption;
      this._diskSizeGb = value.diskSizeGb;
      this._imageUri = value.imageUri;
      this._managedDiskId = value.managedDiskId;
      this._managedDiskType = value.managedDiskType;
      this._name = value.name;
      this._osType = value.osType;
      this._vhdUri = value.vhdUri;
      this._writeAcceleratorEnabled = value.writeAcceleratorEnabled;
    }
  }

  // caching - computed: true, optional: true, required: false
  private _caching?: string; 
  public get caching() {
    return this.getStringAttribute('caching');
  }
  public set caching(value: string) {
    this._caching = value;
  }
  public resetCaching() {
    this._caching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingInput() {
    return this._caching;
  }

  // create_option - computed: false, optional: false, required: true
  private _createOption?: string; 
  public get createOption() {
    return this.getStringAttribute('create_option');
  }
  public set createOption(value: string) {
    this._createOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createOptionInput() {
    return this._createOption;
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

  // image_uri - computed: false, optional: true, required: false
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  public resetImageUri() {
    this._imageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }

  // managed_disk_id - computed: true, optional: true, required: false
  private _managedDiskId?: string; 
  public get managedDiskId() {
    return this.getStringAttribute('managed_disk_id');
  }
  public set managedDiskId(value: string) {
    this._managedDiskId = value;
  }
  public resetManagedDiskId() {
    this._managedDiskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDiskIdInput() {
    return this._managedDiskId;
  }

  // managed_disk_type - computed: true, optional: true, required: false
  private _managedDiskType?: string; 
  public get managedDiskType() {
    return this.getStringAttribute('managed_disk_type');
  }
  public set managedDiskType(value: string) {
    this._managedDiskType = value;
  }
  public resetManagedDiskType() {
    this._managedDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDiskTypeInput() {
    return this._managedDiskType;
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

  // os_type - computed: true, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // vhd_uri - computed: false, optional: true, required: false
  private _vhdUri?: string; 
  public get vhdUri() {
    return this.getStringAttribute('vhd_uri');
  }
  public set vhdUri(value: string) {
    this._vhdUri = value;
  }
  public resetVhdUri() {
    this._vhdUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhdUriInput() {
    return this._vhdUri;
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
export interface VirtualMachineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#create VirtualMachine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#delete VirtualMachine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#read VirtualMachine#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#update VirtualMachine#update}
  */
  readonly update?: string;
}

export function virtualMachineTimeoutsToTerraform(struct?: VirtualMachineTimeouts | cdktf.IResolvable): any {
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


export function virtualMachineTimeoutsToHclTerraform(struct?: VirtualMachineTimeouts | cdktf.IResolvable): any {
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

export class VirtualMachineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualMachineTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualMachineTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine azurerm_virtual_machine}
*/
export class VirtualMachine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_virtual_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualMachine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualMachine to import
  * @param importFromId The id of the existing VirtualMachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualMachine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_virtual_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine azurerm_virtual_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualMachineConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_machine',
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
    this._availabilitySetId = config.availabilitySetId;
    this._deleteDataDisksOnTermination = config.deleteDataDisksOnTermination;
    this._deleteOsDiskOnTermination = config.deleteOsDiskOnTermination;
    this._id = config.id;
    this._licenseType = config.licenseType;
    this._location = config.location;
    this._name = config.name;
    this._networkInterfaceIds = config.networkInterfaceIds;
    this._primaryNetworkInterfaceId = config.primaryNetworkInterfaceId;
    this._proximityPlacementGroupId = config.proximityPlacementGroupId;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._vmSize = config.vmSize;
    this._zones = config.zones;
    this._additionalCapabilities.internalValue = config.additionalCapabilities;
    this._bootDiagnostics.internalValue = config.bootDiagnostics;
    this._identity.internalValue = config.identity;
    this._osProfile.internalValue = config.osProfile;
    this._osProfileLinuxConfig.internalValue = config.osProfileLinuxConfig;
    this._osProfileSecrets.internalValue = config.osProfileSecrets;
    this._osProfileWindowsConfig.internalValue = config.osProfileWindowsConfig;
    this._plan.internalValue = config.plan;
    this._storageDataDisk.internalValue = config.storageDataDisk;
    this._storageImageReference.internalValue = config.storageImageReference;
    this._storageOsDisk.internalValue = config.storageOsDisk;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_set_id - computed: true, optional: true, required: false
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

  // delete_data_disks_on_termination - computed: false, optional: true, required: false
  private _deleteDataDisksOnTermination?: boolean | cdktf.IResolvable; 
  public get deleteDataDisksOnTermination() {
    return this.getBooleanAttribute('delete_data_disks_on_termination');
  }
  public set deleteDataDisksOnTermination(value: boolean | cdktf.IResolvable) {
    this._deleteDataDisksOnTermination = value;
  }
  public resetDeleteDataDisksOnTermination() {
    this._deleteDataDisksOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDataDisksOnTerminationInput() {
    return this._deleteDataDisksOnTermination;
  }

  // delete_os_disk_on_termination - computed: false, optional: true, required: false
  private _deleteOsDiskOnTermination?: boolean | cdktf.IResolvable; 
  public get deleteOsDiskOnTermination() {
    return this.getBooleanAttribute('delete_os_disk_on_termination');
  }
  public set deleteOsDiskOnTermination(value: boolean | cdktf.IResolvable) {
    this._deleteOsDiskOnTermination = value;
  }
  public resetDeleteOsDiskOnTermination() {
    this._deleteOsDiskOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOsDiskOnTerminationInput() {
    return this._deleteOsDiskOnTermination;
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

  // license_type - computed: true, optional: true, required: false
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

  // primary_network_interface_id - computed: false, optional: true, required: false
  private _primaryNetworkInterfaceId?: string; 
  public get primaryNetworkInterfaceId() {
    return this.getStringAttribute('primary_network_interface_id');
  }
  public set primaryNetworkInterfaceId(value: string) {
    this._primaryNetworkInterfaceId = value;
  }
  public resetPrimaryNetworkInterfaceId() {
    this._primaryNetworkInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryNetworkInterfaceIdInput() {
    return this._primaryNetworkInterfaceId;
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

  // vm_size - computed: false, optional: false, required: true
  private _vmSize?: string; 
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
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
  private _additionalCapabilities = new VirtualMachineAdditionalCapabilitiesOutputReference(this, "additional_capabilities");
  public get additionalCapabilities() {
    return this._additionalCapabilities;
  }
  public putAdditionalCapabilities(value: VirtualMachineAdditionalCapabilities) {
    this._additionalCapabilities.internalValue = value;
  }
  public resetAdditionalCapabilities() {
    this._additionalCapabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalCapabilitiesInput() {
    return this._additionalCapabilities.internalValue;
  }

  // boot_diagnostics - computed: false, optional: true, required: false
  private _bootDiagnostics = new VirtualMachineBootDiagnosticsOutputReference(this, "boot_diagnostics");
  public get bootDiagnostics() {
    return this._bootDiagnostics;
  }
  public putBootDiagnostics(value: VirtualMachineBootDiagnostics) {
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
  private _identity = new VirtualMachineIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: VirtualMachineIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // os_profile - computed: false, optional: true, required: false
  private _osProfile = new VirtualMachineOsProfileOutputReference(this, "os_profile");
  public get osProfile() {
    return this._osProfile;
  }
  public putOsProfile(value: VirtualMachineOsProfile) {
    this._osProfile.internalValue = value;
  }
  public resetOsProfile() {
    this._osProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osProfileInput() {
    return this._osProfile.internalValue;
  }

  // os_profile_linux_config - computed: false, optional: true, required: false
  private _osProfileLinuxConfig = new VirtualMachineOsProfileLinuxConfigOutputReference(this, "os_profile_linux_config");
  public get osProfileLinuxConfig() {
    return this._osProfileLinuxConfig;
  }
  public putOsProfileLinuxConfig(value: VirtualMachineOsProfileLinuxConfig) {
    this._osProfileLinuxConfig.internalValue = value;
  }
  public resetOsProfileLinuxConfig() {
    this._osProfileLinuxConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osProfileLinuxConfigInput() {
    return this._osProfileLinuxConfig.internalValue;
  }

  // os_profile_secrets - computed: false, optional: true, required: false
  private _osProfileSecrets = new VirtualMachineOsProfileSecretsList(this, "os_profile_secrets", false);
  public get osProfileSecrets() {
    return this._osProfileSecrets;
  }
  public putOsProfileSecrets(value: VirtualMachineOsProfileSecrets[] | cdktf.IResolvable) {
    this._osProfileSecrets.internalValue = value;
  }
  public resetOsProfileSecrets() {
    this._osProfileSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osProfileSecretsInput() {
    return this._osProfileSecrets.internalValue;
  }

  // os_profile_windows_config - computed: false, optional: true, required: false
  private _osProfileWindowsConfig = new VirtualMachineOsProfileWindowsConfigOutputReference(this, "os_profile_windows_config");
  public get osProfileWindowsConfig() {
    return this._osProfileWindowsConfig;
  }
  public putOsProfileWindowsConfig(value: VirtualMachineOsProfileWindowsConfig) {
    this._osProfileWindowsConfig.internalValue = value;
  }
  public resetOsProfileWindowsConfig() {
    this._osProfileWindowsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osProfileWindowsConfigInput() {
    return this._osProfileWindowsConfig.internalValue;
  }

  // plan - computed: false, optional: true, required: false
  private _plan = new VirtualMachinePlanOutputReference(this, "plan");
  public get plan() {
    return this._plan;
  }
  public putPlan(value: VirtualMachinePlan) {
    this._plan.internalValue = value;
  }
  public resetPlan() {
    this._plan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan.internalValue;
  }

  // storage_data_disk - computed: false, optional: true, required: false
  private _storageDataDisk = new VirtualMachineStorageDataDiskList(this, "storage_data_disk", false);
  public get storageDataDisk() {
    return this._storageDataDisk;
  }
  public putStorageDataDisk(value: VirtualMachineStorageDataDisk[] | cdktf.IResolvable) {
    this._storageDataDisk.internalValue = value;
  }
  public resetStorageDataDisk() {
    this._storageDataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDataDiskInput() {
    return this._storageDataDisk.internalValue;
  }

  // storage_image_reference - computed: false, optional: true, required: false
  private _storageImageReference = new VirtualMachineStorageImageReferenceOutputReference(this, "storage_image_reference");
  public get storageImageReference() {
    return this._storageImageReference;
  }
  public putStorageImageReference(value: VirtualMachineStorageImageReference) {
    this._storageImageReference.internalValue = value;
  }
  public resetStorageImageReference() {
    this._storageImageReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageImageReferenceInput() {
    return this._storageImageReference.internalValue;
  }

  // storage_os_disk - computed: false, optional: false, required: true
  private _storageOsDisk = new VirtualMachineStorageOsDiskOutputReference(this, "storage_os_disk");
  public get storageOsDisk() {
    return this._storageOsDisk;
  }
  public putStorageOsDisk(value: VirtualMachineStorageOsDisk) {
    this._storageOsDisk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageOsDiskInput() {
    return this._storageOsDisk.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualMachineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualMachineTimeouts) {
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
      availability_set_id: cdktf.stringToTerraform(this._availabilitySetId),
      delete_data_disks_on_termination: cdktf.booleanToTerraform(this._deleteDataDisksOnTermination),
      delete_os_disk_on_termination: cdktf.booleanToTerraform(this._deleteOsDiskOnTermination),
      id: cdktf.stringToTerraform(this._id),
      license_type: cdktf.stringToTerraform(this._licenseType),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      network_interface_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkInterfaceIds),
      primary_network_interface_id: cdktf.stringToTerraform(this._primaryNetworkInterfaceId),
      proximity_placement_group_id: cdktf.stringToTerraform(this._proximityPlacementGroupId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vm_size: cdktf.stringToTerraform(this._vmSize),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
      additional_capabilities: virtualMachineAdditionalCapabilitiesToTerraform(this._additionalCapabilities.internalValue),
      boot_diagnostics: virtualMachineBootDiagnosticsToTerraform(this._bootDiagnostics.internalValue),
      identity: virtualMachineIdentityToTerraform(this._identity.internalValue),
      os_profile: virtualMachineOsProfileToTerraform(this._osProfile.internalValue),
      os_profile_linux_config: virtualMachineOsProfileLinuxConfigToTerraform(this._osProfileLinuxConfig.internalValue),
      os_profile_secrets: cdktf.listMapper(virtualMachineOsProfileSecretsToTerraform, true)(this._osProfileSecrets.internalValue),
      os_profile_windows_config: virtualMachineOsProfileWindowsConfigToTerraform(this._osProfileWindowsConfig.internalValue),
      plan: virtualMachinePlanToTerraform(this._plan.internalValue),
      storage_data_disk: cdktf.listMapper(virtualMachineStorageDataDiskToTerraform, true)(this._storageDataDisk.internalValue),
      storage_image_reference: virtualMachineStorageImageReferenceToTerraform(this._storageImageReference.internalValue),
      storage_os_disk: virtualMachineStorageOsDiskToTerraform(this._storageOsDisk.internalValue),
      timeouts: virtualMachineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_set_id: {
        value: cdktf.stringToHclTerraform(this._availabilitySetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_data_disks_on_termination: {
        value: cdktf.booleanToHclTerraform(this._deleteDataDisksOnTermination),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_os_disk_on_termination: {
        value: cdktf.booleanToHclTerraform(this._deleteOsDiskOnTermination),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_interface_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkInterfaceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      primary_network_interface_id: {
        value: cdktf.stringToHclTerraform(this._primaryNetworkInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vm_size: {
        value: cdktf.stringToHclTerraform(this._vmSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      additional_capabilities: {
        value: virtualMachineAdditionalCapabilitiesToHclTerraform(this._additionalCapabilities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineAdditionalCapabilitiesList",
      },
      boot_diagnostics: {
        value: virtualMachineBootDiagnosticsToHclTerraform(this._bootDiagnostics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineBootDiagnosticsList",
      },
      identity: {
        value: virtualMachineIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineIdentityList",
      },
      os_profile: {
        value: virtualMachineOsProfileToHclTerraform(this._osProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualMachineOsProfileList",
      },
      os_profile_linux_config: {
        value: virtualMachineOsProfileLinuxConfigToHclTerraform(this._osProfileLinuxConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualMachineOsProfileLinuxConfigList",
      },
      os_profile_secrets: {
        value: cdktf.listMapperHcl(virtualMachineOsProfileSecretsToHclTerraform, true)(this._osProfileSecrets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineOsProfileSecretsList",
      },
      os_profile_windows_config: {
        value: virtualMachineOsProfileWindowsConfigToHclTerraform(this._osProfileWindowsConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualMachineOsProfileWindowsConfigList",
      },
      plan: {
        value: virtualMachinePlanToHclTerraform(this._plan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachinePlanList",
      },
      storage_data_disk: {
        value: cdktf.listMapperHcl(virtualMachineStorageDataDiskToHclTerraform, true)(this._storageDataDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineStorageDataDiskList",
      },
      storage_image_reference: {
        value: virtualMachineStorageImageReferenceToHclTerraform(this._storageImageReference.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualMachineStorageImageReferenceList",
      },
      storage_os_disk: {
        value: virtualMachineStorageOsDiskToHclTerraform(this._storageOsDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineStorageOsDiskList",
      },
      timeouts: {
        value: virtualMachineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualMachineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
