// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualMachineScaleSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#automatic_os_upgrade VirtualMachineScaleSet#automatic_os_upgrade}
  */
  readonly automaticOsUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#eviction_policy VirtualMachineScaleSet#eviction_policy}
  */
  readonly evictionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#health_probe_id VirtualMachineScaleSet#health_probe_id}
  */
  readonly healthProbeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#id VirtualMachineScaleSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#license_type VirtualMachineScaleSet#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#location VirtualMachineScaleSet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#name VirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#overprovision VirtualMachineScaleSet#overprovision}
  */
  readonly overprovision?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#priority VirtualMachineScaleSet#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#proximity_placement_group_id VirtualMachineScaleSet#proximity_placement_group_id}
  */
  readonly proximityPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#resource_group_name VirtualMachineScaleSet#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#single_placement_group VirtualMachineScaleSet#single_placement_group}
  */
  readonly singlePlacementGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#tags VirtualMachineScaleSet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#upgrade_policy_mode VirtualMachineScaleSet#upgrade_policy_mode}
  */
  readonly upgradePolicyMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#zones VirtualMachineScaleSet#zones}
  */
  readonly zones?: string[];
  /**
  * boot_diagnostics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#boot_diagnostics VirtualMachineScaleSet#boot_diagnostics}
  */
  readonly bootDiagnostics?: VirtualMachineScaleSetBootDiagnostics;
  /**
  * extension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#extension VirtualMachineScaleSet#extension}
  */
  readonly extension?: VirtualMachineScaleSetExtension[] | cdktf.IResolvable;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#identity VirtualMachineScaleSet#identity}
  */
  readonly identity?: VirtualMachineScaleSetIdentity;
  /**
  * network_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#network_profile VirtualMachineScaleSet#network_profile}
  */
  readonly networkProfile: VirtualMachineScaleSetNetworkProfile[] | cdktf.IResolvable;
  /**
  * os_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#os_profile VirtualMachineScaleSet#os_profile}
  */
  readonly osProfile: VirtualMachineScaleSetOsProfile;
  /**
  * os_profile_linux_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#os_profile_linux_config VirtualMachineScaleSet#os_profile_linux_config}
  */
  readonly osProfileLinuxConfig?: VirtualMachineScaleSetOsProfileLinuxConfig;
  /**
  * os_profile_secrets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#os_profile_secrets VirtualMachineScaleSet#os_profile_secrets}
  */
  readonly osProfileSecrets?: VirtualMachineScaleSetOsProfileSecrets[] | cdktf.IResolvable;
  /**
  * os_profile_windows_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#os_profile_windows_config VirtualMachineScaleSet#os_profile_windows_config}
  */
  readonly osProfileWindowsConfig?: VirtualMachineScaleSetOsProfileWindowsConfig;
  /**
  * plan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#plan VirtualMachineScaleSet#plan}
  */
  readonly plan?: VirtualMachineScaleSetPlan;
  /**
  * rolling_upgrade_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#rolling_upgrade_policy VirtualMachineScaleSet#rolling_upgrade_policy}
  */
  readonly rollingUpgradePolicy?: VirtualMachineScaleSetRollingUpgradePolicy;
  /**
  * sku block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#sku VirtualMachineScaleSet#sku}
  */
  readonly sku: VirtualMachineScaleSetSku;
  /**
  * storage_profile_data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#storage_profile_data_disk VirtualMachineScaleSet#storage_profile_data_disk}
  */
  readonly storageProfileDataDisk?: VirtualMachineScaleSetStorageProfileDataDisk[] | cdktf.IResolvable;
  /**
  * storage_profile_image_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#storage_profile_image_reference VirtualMachineScaleSet#storage_profile_image_reference}
  */
  readonly storageProfileImageReference?: VirtualMachineScaleSetStorageProfileImageReference;
  /**
  * storage_profile_os_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#storage_profile_os_disk VirtualMachineScaleSet#storage_profile_os_disk}
  */
  readonly storageProfileOsDisk: VirtualMachineScaleSetStorageProfileOsDisk;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#timeouts VirtualMachineScaleSet#timeouts}
  */
  readonly timeouts?: VirtualMachineScaleSetTimeouts;
}
export interface VirtualMachineScaleSetBootDiagnostics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#enabled VirtualMachineScaleSet#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#storage_uri VirtualMachineScaleSet#storage_uri}
  */
  readonly storageUri: string;
}

export function virtualMachineScaleSetBootDiagnosticsToTerraform(struct?: VirtualMachineScaleSetBootDiagnosticsOutputReference | VirtualMachineScaleSetBootDiagnostics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    storage_uri: cdktf.stringToTerraform(struct!.storageUri),
  }
}


export function virtualMachineScaleSetBootDiagnosticsToHclTerraform(struct?: VirtualMachineScaleSetBootDiagnosticsOutputReference | VirtualMachineScaleSetBootDiagnostics): any {
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

export class VirtualMachineScaleSetBootDiagnosticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineScaleSetBootDiagnostics | undefined {
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

  public set internalValue(value: VirtualMachineScaleSetBootDiagnostics | undefined) {
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
export interface VirtualMachineScaleSetExtension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#auto_upgrade_minor_version VirtualMachineScaleSet#auto_upgrade_minor_version}
  */
  readonly autoUpgradeMinorVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#name VirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#protected_settings VirtualMachineScaleSet#protected_settings}
  */
  readonly protectedSettings?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#provision_after_extensions VirtualMachineScaleSet#provision_after_extensions}
  */
  readonly provisionAfterExtensions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#publisher VirtualMachineScaleSet#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#settings VirtualMachineScaleSet#settings}
  */
  readonly settings?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#type VirtualMachineScaleSet#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#type_handler_version VirtualMachineScaleSet#type_handler_version}
  */
  readonly typeHandlerVersion: string;
}

export function virtualMachineScaleSetExtensionToTerraform(struct?: VirtualMachineScaleSetExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_upgrade_minor_version: cdktf.booleanToTerraform(struct!.autoUpgradeMinorVersion),
    name: cdktf.stringToTerraform(struct!.name),
    protected_settings: cdktf.stringToTerraform(struct!.protectedSettings),
    provision_after_extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.provisionAfterExtensions),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    settings: cdktf.stringToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
    type_handler_version: cdktf.stringToTerraform(struct!.typeHandlerVersion),
  }
}


export function virtualMachineScaleSetExtensionToHclTerraform(struct?: VirtualMachineScaleSetExtension | cdktf.IResolvable): any {
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
      type: "set",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineScaleSetExtensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineScaleSetExtension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoUpgradeMinorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgradeMinorVersion = this._autoUpgradeMinorVersion;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineScaleSetExtension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoUpgradeMinorVersion = undefined;
      this._name = undefined;
      this._protectedSettings = undefined;
      this._provisionAfterExtensions = undefined;
      this._publisher = undefined;
      this._settings = undefined;
      this._type = undefined;
      this._typeHandlerVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoUpgradeMinorVersion = value.autoUpgradeMinorVersion;
      this._name = value.name;
      this._protectedSettings = value.protectedSettings;
      this._provisionAfterExtensions = value.provisionAfterExtensions;
      this._publisher = value.publisher;
      this._settings = value.settings;
      this._type = value.type;
      this._typeHandlerVersion = value.typeHandlerVersion;
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
    return cdktf.Fn.tolist(this.getListAttribute('provision_after_extensions'));
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
}

export class VirtualMachineScaleSetExtensionList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineScaleSetExtension[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineScaleSetExtensionOutputReference {
    return new VirtualMachineScaleSetExtensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineScaleSetIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#identity_ids VirtualMachineScaleSet#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#type VirtualMachineScaleSet#type}
  */
  readonly type: string;
}

export function virtualMachineScaleSetIdentityToTerraform(struct?: VirtualMachineScaleSetIdentityOutputReference | VirtualMachineScaleSetIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualMachineScaleSetIdentityToHclTerraform(struct?: VirtualMachineScaleSetIdentityOutputReference | VirtualMachineScaleSetIdentity): any {
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

export class VirtualMachineScaleSetIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineScaleSetIdentity | undefined {
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

  public set internalValue(value: VirtualMachineScaleSetIdentity | undefined) {
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
export interface VirtualMachineScaleSetNetworkProfileDnsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#dns_servers VirtualMachineScaleSet#dns_servers}
  */
  readonly dnsServers: string[];
}

export function virtualMachineScaleSetNetworkProfileDnsSettingsToTerraform(struct?: VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference | VirtualMachineScaleSetNetworkProfileDnsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServers),
  }
}


export function virtualMachineScaleSetNetworkProfileDnsSettingsToHclTerraform(struct?: VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference | VirtualMachineScaleSetNetworkProfileDnsSettings): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineScaleSetNetworkProfileDnsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServers = this._dnsServers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineScaleSetNetworkProfileDnsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsServers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsServers = value.dnsServers;
    }
  }

  // dns_servers - computed: false, optional: false, required: true
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }
}
export interface VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#domain_name_label VirtualMachineScaleSet#domain_name_label}
  */
  readonly domainNameLabel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#idle_timeout VirtualMachineScaleSet#idle_timeout}
  */
  readonly idleTimeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#name VirtualMachineScaleSet#name}
  */
  readonly name: string;
}

export function virtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationToTerraform(struct?: VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference | VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name_label: cdktf.stringToTerraform(struct!.domainNameLabel),
    idle_timeout: cdktf.numberToTerraform(struct!.idleTimeout),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function virtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationToHclTerraform(struct?: VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference | VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration): any {
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
    idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeout),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainNameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainNameLabel = this._domainNameLabel;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainNameLabel = undefined;
      this._idleTimeout = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainNameLabel = value.domainNameLabel;
      this._idleTimeout = value.idleTimeout;
      this._name = value.name;
    }
  }

  // domain_name_label - computed: false, optional: false, required: true
  private _domainNameLabel?: string; 
  public get domainNameLabel() {
    return this.getStringAttribute('domain_name_label');
  }
  public set domainNameLabel(value: string) {
    this._domainNameLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameLabelInput() {
    return this._domainNameLabel;
  }

  // idle_timeout - computed: false, optional: false, required: true
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
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
}
export interface VirtualMachineScaleSetNetworkProfileIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#application_gateway_backend_address_pool_ids VirtualMachineScaleSet#application_gateway_backend_address_pool_ids}
  */
  readonly applicationGatewayBackendAddressPoolIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#application_security_group_ids VirtualMachineScaleSet#application_security_group_ids}
  */
  readonly applicationSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#load_balancer_backend_address_pool_ids VirtualMachineScaleSet#load_balancer_backend_address_pool_ids}
  */
  readonly loadBalancerBackendAddressPoolIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#load_balancer_inbound_nat_rules_ids VirtualMachineScaleSet#load_balancer_inbound_nat_rules_ids}
  */
  readonly loadBalancerInboundNatRulesIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#name VirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#primary VirtualMachineScaleSet#primary}
  */
  readonly primary: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#subnet_id VirtualMachineScaleSet#subnet_id}
  */
  readonly subnetId: string;
  /**
  * public_ip_address_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#public_ip_address_configuration VirtualMachineScaleSet#public_ip_address_configuration}
  */
  readonly publicIpAddressConfiguration?: VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration;
}

export function virtualMachineScaleSetNetworkProfileIpConfigurationToTerraform(struct?: VirtualMachineScaleSetNetworkProfileIpConfiguration | cdktf.IResolvable): any {
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
    public_ip_address_configuration: virtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationToTerraform(struct!.publicIpAddressConfiguration),
  }
}


export function virtualMachineScaleSetNetworkProfileIpConfigurationToHclTerraform(struct?: VirtualMachineScaleSetNetworkProfileIpConfiguration | cdktf.IResolvable): any {
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
    public_ip_address_configuration: {
      value: virtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationToHclTerraform(struct!.publicIpAddressConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineScaleSetNetworkProfileIpConfiguration | cdktf.IResolvable | undefined {
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
    if (this._publicIpAddressConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpAddressConfiguration = this._publicIpAddressConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineScaleSetNetworkProfileIpConfiguration | cdktf.IResolvable | undefined) {
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
      this._publicIpAddressConfiguration.internalValue = undefined;
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
      this._publicIpAddressConfiguration.internalValue = value.publicIpAddressConfiguration;
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

  // load_balancer_inbound_nat_rules_ids - computed: true, optional: true, required: false
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

  // primary - computed: false, optional: false, required: true
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // public_ip_address_configuration - computed: false, optional: true, required: false
  private _publicIpAddressConfiguration = new VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutputReference(this, "public_ip_address_configuration");
  public get publicIpAddressConfiguration() {
    return this._publicIpAddressConfiguration;
  }
  public putPublicIpAddressConfiguration(value: VirtualMachineScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration) {
    this._publicIpAddressConfiguration.internalValue = value;
  }
  public resetPublicIpAddressConfiguration() {
    this._publicIpAddressConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressConfigurationInput() {
    return this._publicIpAddressConfiguration.internalValue;
  }
}

export class VirtualMachineScaleSetNetworkProfileIpConfigurationList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineScaleSetNetworkProfileIpConfiguration[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference {
    return new VirtualMachineScaleSetNetworkProfileIpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineScaleSetNetworkProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#accelerated_networking VirtualMachineScaleSet#accelerated_networking}
  */
  readonly acceleratedNetworking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#ip_forwarding VirtualMachineScaleSet#ip_forwarding}
  */
  readonly ipForwarding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#name VirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#network_security_group_id VirtualMachineScaleSet#network_security_group_id}
  */
  readonly networkSecurityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#primary VirtualMachineScaleSet#primary}
  */
  readonly primary: boolean | cdktf.IResolvable;
  /**
  * dns_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#dns_settings VirtualMachineScaleSet#dns_settings}
  */
  readonly dnsSettings?: VirtualMachineScaleSetNetworkProfileDnsSettings;
  /**
  * ip_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#ip_configuration VirtualMachineScaleSet#ip_configuration}
  */
  readonly ipConfiguration: VirtualMachineScaleSetNetworkProfileIpConfiguration[] | cdktf.IResolvable;
}

export function virtualMachineScaleSetNetworkProfileToTerraform(struct?: VirtualMachineScaleSetNetworkProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerated_networking: cdktf.booleanToTerraform(struct!.acceleratedNetworking),
    ip_forwarding: cdktf.booleanToTerraform(struct!.ipForwarding),
    name: cdktf.stringToTerraform(struct!.name),
    network_security_group_id: cdktf.stringToTerraform(struct!.networkSecurityGroupId),
    primary: cdktf.booleanToTerraform(struct!.primary),
    dns_settings: virtualMachineScaleSetNetworkProfileDnsSettingsToTerraform(struct!.dnsSettings),
    ip_configuration: cdktf.listMapper(virtualMachineScaleSetNetworkProfileIpConfigurationToTerraform, true)(struct!.ipConfiguration),
  }
}


export function virtualMachineScaleSetNetworkProfileToHclTerraform(struct?: VirtualMachineScaleSetNetworkProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerated_networking: {
      value: cdktf.booleanToHclTerraform(struct!.acceleratedNetworking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_forwarding: {
      value: cdktf.booleanToHclTerraform(struct!.ipForwarding),
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
    dns_settings: {
      value: virtualMachineScaleSetNetworkProfileDnsSettingsToHclTerraform(struct!.dnsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineScaleSetNetworkProfileDnsSettingsList",
    },
    ip_configuration: {
      value: cdktf.listMapperHcl(virtualMachineScaleSetNetworkProfileIpConfigurationToHclTerraform, true)(struct!.ipConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineScaleSetNetworkProfileIpConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineScaleSetNetworkProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineScaleSetNetworkProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratedNetworking !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratedNetworking = this._acceleratedNetworking;
    }
    if (this._ipForwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipForwarding = this._ipForwarding;
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
    if (this._dnsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSettings = this._dnsSettings?.internalValue;
    }
    if (this._ipConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipConfiguration = this._ipConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineScaleSetNetworkProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceleratedNetworking = undefined;
      this._ipForwarding = undefined;
      this._name = undefined;
      this._networkSecurityGroupId = undefined;
      this._primary = undefined;
      this._dnsSettings.internalValue = undefined;
      this._ipConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceleratedNetworking = value.acceleratedNetworking;
      this._ipForwarding = value.ipForwarding;
      this._name = value.name;
      this._networkSecurityGroupId = value.networkSecurityGroupId;
      this._primary = value.primary;
      this._dnsSettings.internalValue = value.dnsSettings;
      this._ipConfiguration.internalValue = value.ipConfiguration;
    }
  }

  // accelerated_networking - computed: false, optional: true, required: false
  private _acceleratedNetworking?: boolean | cdktf.IResolvable; 
  public get acceleratedNetworking() {
    return this.getBooleanAttribute('accelerated_networking');
  }
  public set acceleratedNetworking(value: boolean | cdktf.IResolvable) {
    this._acceleratedNetworking = value;
  }
  public resetAcceleratedNetworking() {
    this._acceleratedNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratedNetworkingInput() {
    return this._acceleratedNetworking;
  }

  // ip_forwarding - computed: false, optional: true, required: false
  private _ipForwarding?: boolean | cdktf.IResolvable; 
  public get ipForwarding() {
    return this.getBooleanAttribute('ip_forwarding');
  }
  public set ipForwarding(value: boolean | cdktf.IResolvable) {
    this._ipForwarding = value;
  }
  public resetIpForwarding() {
    this._ipForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipForwardingInput() {
    return this._ipForwarding;
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

  // primary - computed: false, optional: false, required: true
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // dns_settings - computed: false, optional: true, required: false
  private _dnsSettings = new VirtualMachineScaleSetNetworkProfileDnsSettingsOutputReference(this, "dns_settings");
  public get dnsSettings() {
    return this._dnsSettings;
  }
  public putDnsSettings(value: VirtualMachineScaleSetNetworkProfileDnsSettings) {
    this._dnsSettings.internalValue = value;
  }
  public resetDnsSettings() {
    this._dnsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSettingsInput() {
    return this._dnsSettings.internalValue;
  }

  // ip_configuration - computed: false, optional: false, required: true
  private _ipConfiguration = new VirtualMachineScaleSetNetworkProfileIpConfigurationList(this, "ip_configuration", false);
  public get ipConfiguration() {
    return this._ipConfiguration;
  }
  public putIpConfiguration(value: VirtualMachineScaleSetNetworkProfileIpConfiguration[] | cdktf.IResolvable) {
    this._ipConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationInput() {
    return this._ipConfiguration.internalValue;
  }
}

export class VirtualMachineScaleSetNetworkProfileList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineScaleSetNetworkProfile[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineScaleSetNetworkProfileOutputReference {
    return new VirtualMachineScaleSetNetworkProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineScaleSetOsProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#admin_password VirtualMachineScaleSet#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#admin_username VirtualMachineScaleSet#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#computer_name_prefix VirtualMachineScaleSet#computer_name_prefix}
  */
  readonly computerNamePrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#custom_data VirtualMachineScaleSet#custom_data}
  */
  readonly customData?: string;
}

export function virtualMachineScaleSetOsProfileToTerraform(struct?: VirtualMachineScaleSetOsProfileOutputReference | VirtualMachineScaleSetOsProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    computer_name_prefix: cdktf.stringToTerraform(struct!.computerNamePrefix),
    custom_data: cdktf.stringToTerraform(struct!.customData),
  }
}


export function virtualMachineScaleSetOsProfileToHclTerraform(struct?: VirtualMachineScaleSetOsProfileOutputReference | VirtualMachineScaleSetOsProfile): any {
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
    computer_name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.computerNamePrefix),
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

export class VirtualMachineScaleSetOsProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineScaleSetOsProfile | undefined {
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
    if (this._computerNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.computerNamePrefix = this._computerNamePrefix;
    }
    if (this._customData !== undefined) {
      hasAnyValues = true;
      internalValueResult.customData = this._customData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineScaleSetOsProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminPassword = undefined;
      this._adminUsername = undefined;
      this._computerNamePrefix = undefined;
      this._customData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminPassword = value.adminPassword;
      this._adminUsername = value.adminUsername;
      this._computerNamePrefix = value.computerNamePrefix;
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

  // computer_name_prefix - computed: false, optional: false, required: true
  private _computerNamePrefix?: string; 
  public get computerNamePrefix() {
    return this.getStringAttribute('computer_name_prefix');
  }
  public set computerNamePrefix(value: string) {
    this._computerNamePrefix = value;
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
}
export interface VirtualMachineScaleSetOsProfileLinuxConfigSshKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#key_data VirtualMachineScaleSet#key_data}
  */
  readonly keyData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#path VirtualMachineScaleSet#path}
  */
  readonly path: string;
}

export function virtualMachineScaleSetOsProfileLinuxConfigSshKeysToTerraform(struct?: VirtualMachineScaleSetOsProfileLinuxConfigSshKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_data: cdktf.stringToTerraform(struct!.keyData),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function virtualMachineScaleSetOsProfileLinuxConfigSshKeysToHclTerraform(struct?: VirtualMachineScaleSetOsProfileLinuxConfigSshKeys | cdktf.IResolvable): any {
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

export class VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineScaleSetOsProfileLinuxConfigSshKeys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualMachineScaleSetOsProfileLinuxConfigSshKeys | cdktf.IResolvable | undefined) {
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

  // key_data - computed: false, optional: true, required: false
  private _keyData?: string; 
  public get keyData() {
    return this.getStringAttribute('key_data');
  }
  public set keyData(value: string) {
    this._keyData = value;
  }
  public resetKeyData() {
    this._keyData = undefined;
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

export class VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineScaleSetOsProfileLinuxConfigSshKeys[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference {
    return new VirtualMachineScaleSetOsProfileLinuxConfigSshKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineScaleSetOsProfileLinuxConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#disable_password_authentication VirtualMachineScaleSet#disable_password_authentication}
  */
  readonly disablePasswordAuthentication?: boolean | cdktf.IResolvable;
  /**
  * ssh_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#ssh_keys VirtualMachineScaleSet#ssh_keys}
  */
  readonly sshKeys?: VirtualMachineScaleSetOsProfileLinuxConfigSshKeys[] | cdktf.IResolvable;
}

export function virtualMachineScaleSetOsProfileLinuxConfigToTerraform(struct?: VirtualMachineScaleSetOsProfileLinuxConfigOutputReference | VirtualMachineScaleSetOsProfileLinuxConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_password_authentication: cdktf.booleanToTerraform(struct!.disablePasswordAuthentication),
    ssh_keys: cdktf.listMapper(virtualMachineScaleSetOsProfileLinuxConfigSshKeysToTerraform, true)(struct!.sshKeys),
  }
}


export function virtualMachineScaleSetOsProfileLinuxConfigToHclTerraform(struct?: VirtualMachineScaleSetOsProfileLinuxConfigOutputReference | VirtualMachineScaleSetOsProfileLinuxConfig): any {
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
      value: cdktf.listMapperHcl(virtualMachineScaleSetOsProfileLinuxConfigSshKeysToHclTerraform, true)(struct!.sshKeys),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineScaleSetOsProfileLinuxConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineScaleSetOsProfileLinuxConfig | undefined {
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

  public set internalValue(value: VirtualMachineScaleSetOsProfileLinuxConfig | undefined) {
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

  // disable_password_authentication - computed: false, optional: true, required: false
  private _disablePasswordAuthentication?: boolean | cdktf.IResolvable; 
  public get disablePasswordAuthentication() {
    return this.getBooleanAttribute('disable_password_authentication');
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

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys = new VirtualMachineScaleSetOsProfileLinuxConfigSshKeysList(this, "ssh_keys", false);
  public get sshKeys() {
    return this._sshKeys;
  }
  public putSshKeys(value: VirtualMachineScaleSetOsProfileLinuxConfigSshKeys[] | cdktf.IResolvable) {
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
export interface VirtualMachineScaleSetOsProfileSecretsVaultCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#certificate_store VirtualMachineScaleSet#certificate_store}
  */
  readonly certificateStore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#certificate_url VirtualMachineScaleSet#certificate_url}
  */
  readonly certificateUrl: string;
}

export function virtualMachineScaleSetOsProfileSecretsVaultCertificatesToTerraform(struct?: VirtualMachineScaleSetOsProfileSecretsVaultCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_store: cdktf.stringToTerraform(struct!.certificateStore),
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
  }
}


export function virtualMachineScaleSetOsProfileSecretsVaultCertificatesToHclTerraform(struct?: VirtualMachineScaleSetOsProfileSecretsVaultCertificates | cdktf.IResolvable): any {
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

export class VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineScaleSetOsProfileSecretsVaultCertificates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualMachineScaleSetOsProfileSecretsVaultCertificates | cdktf.IResolvable | undefined) {
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

export class VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineScaleSetOsProfileSecretsVaultCertificates[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference {
    return new VirtualMachineScaleSetOsProfileSecretsVaultCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineScaleSetOsProfileSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#source_vault_id VirtualMachineScaleSet#source_vault_id}
  */
  readonly sourceVaultId: string;
  /**
  * vault_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#vault_certificates VirtualMachineScaleSet#vault_certificates}
  */
  readonly vaultCertificates?: VirtualMachineScaleSetOsProfileSecretsVaultCertificates[] | cdktf.IResolvable;
}

export function virtualMachineScaleSetOsProfileSecretsToTerraform(struct?: VirtualMachineScaleSetOsProfileSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_vault_id: cdktf.stringToTerraform(struct!.sourceVaultId),
    vault_certificates: cdktf.listMapper(virtualMachineScaleSetOsProfileSecretsVaultCertificatesToTerraform, true)(struct!.vaultCertificates),
  }
}


export function virtualMachineScaleSetOsProfileSecretsToHclTerraform(struct?: VirtualMachineScaleSetOsProfileSecrets | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(virtualMachineScaleSetOsProfileSecretsVaultCertificatesToHclTerraform, true)(struct!.vaultCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineScaleSetOsProfileSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineScaleSetOsProfileSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualMachineScaleSetOsProfileSecrets | cdktf.IResolvable | undefined) {
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
  private _vaultCertificates = new VirtualMachineScaleSetOsProfileSecretsVaultCertificatesList(this, "vault_certificates", false);
  public get vaultCertificates() {
    return this._vaultCertificates;
  }
  public putVaultCertificates(value: VirtualMachineScaleSetOsProfileSecretsVaultCertificates[] | cdktf.IResolvable) {
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

export class VirtualMachineScaleSetOsProfileSecretsList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineScaleSetOsProfileSecrets[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineScaleSetOsProfileSecretsOutputReference {
    return new VirtualMachineScaleSetOsProfileSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#component VirtualMachineScaleSet#component}
  */
  readonly component: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#content VirtualMachineScaleSet#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#pass VirtualMachineScaleSet#pass}
  */
  readonly pass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#setting_name VirtualMachineScaleSet#setting_name}
  */
  readonly settingName: string;
}

export function virtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigToTerraform(struct?: VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig | cdktf.IResolvable): any {
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


export function virtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigToHclTerraform(struct?: VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig | cdktf.IResolvable): any {
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

export class VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig | cdktf.IResolvable | undefined) {
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

export class VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference {
    return new VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineScaleSetOsProfileWindowsConfigWinrm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#certificate_url VirtualMachineScaleSet#certificate_url}
  */
  readonly certificateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#protocol VirtualMachineScaleSet#protocol}
  */
  readonly protocol: string;
}

export function virtualMachineScaleSetOsProfileWindowsConfigWinrmToTerraform(struct?: VirtualMachineScaleSetOsProfileWindowsConfigWinrm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function virtualMachineScaleSetOsProfileWindowsConfigWinrmToHclTerraform(struct?: VirtualMachineScaleSetOsProfileWindowsConfigWinrm | cdktf.IResolvable): any {
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

export class VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineScaleSetOsProfileWindowsConfigWinrm | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualMachineScaleSetOsProfileWindowsConfigWinrm | cdktf.IResolvable | undefined) {
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

export class VirtualMachineScaleSetOsProfileWindowsConfigWinrmList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineScaleSetOsProfileWindowsConfigWinrm[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference {
    return new VirtualMachineScaleSetOsProfileWindowsConfigWinrmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineScaleSetOsProfileWindowsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#enable_automatic_upgrades VirtualMachineScaleSet#enable_automatic_upgrades}
  */
  readonly enableAutomaticUpgrades?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#provision_vm_agent VirtualMachineScaleSet#provision_vm_agent}
  */
  readonly provisionVmAgent?: boolean | cdktf.IResolvable;
  /**
  * additional_unattend_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#additional_unattend_config VirtualMachineScaleSet#additional_unattend_config}
  */
  readonly additionalUnattendConfig?: VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig[] | cdktf.IResolvable;
  /**
  * winrm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#winrm VirtualMachineScaleSet#winrm}
  */
  readonly winrm?: VirtualMachineScaleSetOsProfileWindowsConfigWinrm[] | cdktf.IResolvable;
}

export function virtualMachineScaleSetOsProfileWindowsConfigToTerraform(struct?: VirtualMachineScaleSetOsProfileWindowsConfigOutputReference | VirtualMachineScaleSetOsProfileWindowsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_automatic_upgrades: cdktf.booleanToTerraform(struct!.enableAutomaticUpgrades),
    provision_vm_agent: cdktf.booleanToTerraform(struct!.provisionVmAgent),
    additional_unattend_config: cdktf.listMapper(virtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigToTerraform, true)(struct!.additionalUnattendConfig),
    winrm: cdktf.listMapper(virtualMachineScaleSetOsProfileWindowsConfigWinrmToTerraform, true)(struct!.winrm),
  }
}


export function virtualMachineScaleSetOsProfileWindowsConfigToHclTerraform(struct?: VirtualMachineScaleSetOsProfileWindowsConfigOutputReference | VirtualMachineScaleSetOsProfileWindowsConfig): any {
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
    additional_unattend_config: {
      value: cdktf.listMapperHcl(virtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigToHclTerraform, true)(struct!.additionalUnattendConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList",
    },
    winrm: {
      value: cdktf.listMapperHcl(virtualMachineScaleSetOsProfileWindowsConfigWinrmToHclTerraform, true)(struct!.winrm),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualMachineScaleSetOsProfileWindowsConfigWinrmList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineScaleSetOsProfileWindowsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineScaleSetOsProfileWindowsConfig | undefined {
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

  public set internalValue(value: VirtualMachineScaleSetOsProfileWindowsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableAutomaticUpgrades = undefined;
      this._provisionVmAgent = undefined;
      this._additionalUnattendConfig.internalValue = undefined;
      this._winrm.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableAutomaticUpgrades = value.enableAutomaticUpgrades;
      this._provisionVmAgent = value.provisionVmAgent;
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

  // additional_unattend_config - computed: false, optional: true, required: false
  private _additionalUnattendConfig = new VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfigList(this, "additional_unattend_config", false);
  public get additionalUnattendConfig() {
    return this._additionalUnattendConfig;
  }
  public putAdditionalUnattendConfig(value: VirtualMachineScaleSetOsProfileWindowsConfigAdditionalUnattendConfig[] | cdktf.IResolvable) {
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
  private _winrm = new VirtualMachineScaleSetOsProfileWindowsConfigWinrmList(this, "winrm", false);
  public get winrm() {
    return this._winrm;
  }
  public putWinrm(value: VirtualMachineScaleSetOsProfileWindowsConfigWinrm[] | cdktf.IResolvable) {
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
export interface VirtualMachineScaleSetPlan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#name VirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#product VirtualMachineScaleSet#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#publisher VirtualMachineScaleSet#publisher}
  */
  readonly publisher: string;
}

export function virtualMachineScaleSetPlanToTerraform(struct?: VirtualMachineScaleSetPlanOutputReference | VirtualMachineScaleSetPlan): any {
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


export function virtualMachineScaleSetPlanToHclTerraform(struct?: VirtualMachineScaleSetPlanOutputReference | VirtualMachineScaleSetPlan): any {
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

export class VirtualMachineScaleSetPlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineScaleSetPlan | undefined {
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

  public set internalValue(value: VirtualMachineScaleSetPlan | undefined) {
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
export interface VirtualMachineScaleSetRollingUpgradePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#max_batch_instance_percent VirtualMachineScaleSet#max_batch_instance_percent}
  */
  readonly maxBatchInstancePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#max_unhealthy_instance_percent VirtualMachineScaleSet#max_unhealthy_instance_percent}
  */
  readonly maxUnhealthyInstancePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#max_unhealthy_upgraded_instance_percent VirtualMachineScaleSet#max_unhealthy_upgraded_instance_percent}
  */
  readonly maxUnhealthyUpgradedInstancePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#pause_time_between_batches VirtualMachineScaleSet#pause_time_between_batches}
  */
  readonly pauseTimeBetweenBatches?: string;
}

export function virtualMachineScaleSetRollingUpgradePolicyToTerraform(struct?: VirtualMachineScaleSetRollingUpgradePolicyOutputReference | VirtualMachineScaleSetRollingUpgradePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function virtualMachineScaleSetRollingUpgradePolicyToHclTerraform(struct?: VirtualMachineScaleSetRollingUpgradePolicyOutputReference | VirtualMachineScaleSetRollingUpgradePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    pause_time_between_batches: {
      value: cdktf.stringToHclTerraform(struct!.pauseTimeBetweenBatches),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineScaleSetRollingUpgradePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineScaleSetRollingUpgradePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._pauseTimeBetweenBatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseTimeBetweenBatches = this._pauseTimeBetweenBatches;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineScaleSetRollingUpgradePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxBatchInstancePercent = undefined;
      this._maxUnhealthyInstancePercent = undefined;
      this._maxUnhealthyUpgradedInstancePercent = undefined;
      this._pauseTimeBetweenBatches = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxBatchInstancePercent = value.maxBatchInstancePercent;
      this._maxUnhealthyInstancePercent = value.maxUnhealthyInstancePercent;
      this._maxUnhealthyUpgradedInstancePercent = value.maxUnhealthyUpgradedInstancePercent;
      this._pauseTimeBetweenBatches = value.pauseTimeBetweenBatches;
    }
  }

  // max_batch_instance_percent - computed: false, optional: true, required: false
  private _maxBatchInstancePercent?: number; 
  public get maxBatchInstancePercent() {
    return this.getNumberAttribute('max_batch_instance_percent');
  }
  public set maxBatchInstancePercent(value: number) {
    this._maxBatchInstancePercent = value;
  }
  public resetMaxBatchInstancePercent() {
    this._maxBatchInstancePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBatchInstancePercentInput() {
    return this._maxBatchInstancePercent;
  }

  // max_unhealthy_instance_percent - computed: false, optional: true, required: false
  private _maxUnhealthyInstancePercent?: number; 
  public get maxUnhealthyInstancePercent() {
    return this.getNumberAttribute('max_unhealthy_instance_percent');
  }
  public set maxUnhealthyInstancePercent(value: number) {
    this._maxUnhealthyInstancePercent = value;
  }
  public resetMaxUnhealthyInstancePercent() {
    this._maxUnhealthyInstancePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnhealthyInstancePercentInput() {
    return this._maxUnhealthyInstancePercent;
  }

  // max_unhealthy_upgraded_instance_percent - computed: false, optional: true, required: false
  private _maxUnhealthyUpgradedInstancePercent?: number; 
  public get maxUnhealthyUpgradedInstancePercent() {
    return this.getNumberAttribute('max_unhealthy_upgraded_instance_percent');
  }
  public set maxUnhealthyUpgradedInstancePercent(value: number) {
    this._maxUnhealthyUpgradedInstancePercent = value;
  }
  public resetMaxUnhealthyUpgradedInstancePercent() {
    this._maxUnhealthyUpgradedInstancePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnhealthyUpgradedInstancePercentInput() {
    return this._maxUnhealthyUpgradedInstancePercent;
  }

  // pause_time_between_batches - computed: false, optional: true, required: false
  private _pauseTimeBetweenBatches?: string; 
  public get pauseTimeBetweenBatches() {
    return this.getStringAttribute('pause_time_between_batches');
  }
  public set pauseTimeBetweenBatches(value: string) {
    this._pauseTimeBetweenBatches = value;
  }
  public resetPauseTimeBetweenBatches() {
    this._pauseTimeBetweenBatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseTimeBetweenBatchesInput() {
    return this._pauseTimeBetweenBatches;
  }
}
export interface VirtualMachineScaleSetSku {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#capacity VirtualMachineScaleSet#capacity}
  */
  readonly capacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#name VirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#tier VirtualMachineScaleSet#tier}
  */
  readonly tier?: string;
}

export function virtualMachineScaleSetSkuToTerraform(struct?: VirtualMachineScaleSetSkuOutputReference | VirtualMachineScaleSetSku): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    name: cdktf.stringToTerraform(struct!.name),
    tier: cdktf.stringToTerraform(struct!.tier),
  }
}


export function virtualMachineScaleSetSkuToHclTerraform(struct?: VirtualMachineScaleSetSkuOutputReference | VirtualMachineScaleSetSku): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.numberToHclTerraform(struct!.capacity),
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
    tier: {
      value: cdktf.stringToHclTerraform(struct!.tier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineScaleSetSkuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineScaleSetSku | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineScaleSetSku | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacity = undefined;
      this._name = undefined;
      this._tier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacity = value.capacity;
      this._name = value.name;
      this._tier = value.tier;
    }
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
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

  // tier - computed: true, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }
}
export interface VirtualMachineScaleSetStorageProfileDataDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#caching VirtualMachineScaleSet#caching}
  */
  readonly caching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#create_option VirtualMachineScaleSet#create_option}
  */
  readonly createOption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#disk_size_gb VirtualMachineScaleSet#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#lun VirtualMachineScaleSet#lun}
  */
  readonly lun: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#managed_disk_type VirtualMachineScaleSet#managed_disk_type}
  */
  readonly managedDiskType?: string;
}

export function virtualMachineScaleSetStorageProfileDataDiskToTerraform(struct?: VirtualMachineScaleSetStorageProfileDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    create_option: cdktf.stringToTerraform(struct!.createOption),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    lun: cdktf.numberToTerraform(struct!.lun),
    managed_disk_type: cdktf.stringToTerraform(struct!.managedDiskType),
  }
}


export function virtualMachineScaleSetStorageProfileDataDiskToHclTerraform(struct?: VirtualMachineScaleSetStorageProfileDataDisk | cdktf.IResolvable): any {
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
    managed_disk_type: {
      value: cdktf.stringToHclTerraform(struct!.managedDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineScaleSetStorageProfileDataDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineScaleSetStorageProfileDataDisk | cdktf.IResolvable | undefined {
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
    if (this._managedDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedDiskType = this._managedDiskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineScaleSetStorageProfileDataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caching = undefined;
      this._createOption = undefined;
      this._diskSizeGb = undefined;
      this._lun = undefined;
      this._managedDiskType = undefined;
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
      this._managedDiskType = value.managedDiskType;
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
}

export class VirtualMachineScaleSetStorageProfileDataDiskList extends cdktf.ComplexList {
  public internalValue? : VirtualMachineScaleSetStorageProfileDataDisk[] | cdktf.IResolvable

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
  public get(index: number): VirtualMachineScaleSetStorageProfileDataDiskOutputReference {
    return new VirtualMachineScaleSetStorageProfileDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachineScaleSetStorageProfileImageReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#id VirtualMachineScaleSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#offer VirtualMachineScaleSet#offer}
  */
  readonly offer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#publisher VirtualMachineScaleSet#publisher}
  */
  readonly publisher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#sku VirtualMachineScaleSet#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#version VirtualMachineScaleSet#version}
  */
  readonly version?: string;
}

export function virtualMachineScaleSetStorageProfileImageReferenceToTerraform(struct?: VirtualMachineScaleSetStorageProfileImageReferenceOutputReference | VirtualMachineScaleSetStorageProfileImageReference): any {
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


export function virtualMachineScaleSetStorageProfileImageReferenceToHclTerraform(struct?: VirtualMachineScaleSetStorageProfileImageReferenceOutputReference | VirtualMachineScaleSetStorageProfileImageReference): any {
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

export class VirtualMachineScaleSetStorageProfileImageReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineScaleSetStorageProfileImageReference | undefined {
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

  public set internalValue(value: VirtualMachineScaleSetStorageProfileImageReference | undefined) {
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
}
export interface VirtualMachineScaleSetStorageProfileOsDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#caching VirtualMachineScaleSet#caching}
  */
  readonly caching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#create_option VirtualMachineScaleSet#create_option}
  */
  readonly createOption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#image VirtualMachineScaleSet#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#managed_disk_type VirtualMachineScaleSet#managed_disk_type}
  */
  readonly managedDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#name VirtualMachineScaleSet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#os_type VirtualMachineScaleSet#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#vhd_containers VirtualMachineScaleSet#vhd_containers}
  */
  readonly vhdContainers?: string[];
}

export function virtualMachineScaleSetStorageProfileOsDiskToTerraform(struct?: VirtualMachineScaleSetStorageProfileOsDiskOutputReference | VirtualMachineScaleSetStorageProfileOsDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    create_option: cdktf.stringToTerraform(struct!.createOption),
    image: cdktf.stringToTerraform(struct!.image),
    managed_disk_type: cdktf.stringToTerraform(struct!.managedDiskType),
    name: cdktf.stringToTerraform(struct!.name),
    os_type: cdktf.stringToTerraform(struct!.osType),
    vhd_containers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vhdContainers),
  }
}


export function virtualMachineScaleSetStorageProfileOsDiskToHclTerraform(struct?: VirtualMachineScaleSetStorageProfileOsDiskOutputReference | VirtualMachineScaleSetStorageProfileOsDisk): any {
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
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
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
    vhd_containers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vhdContainers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachineScaleSetStorageProfileOsDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineScaleSetStorageProfileOsDisk | undefined {
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
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
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
    if (this._vhdContainers !== undefined) {
      hasAnyValues = true;
      internalValueResult.vhdContainers = this._vhdContainers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineScaleSetStorageProfileOsDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caching = undefined;
      this._createOption = undefined;
      this._image = undefined;
      this._managedDiskType = undefined;
      this._name = undefined;
      this._osType = undefined;
      this._vhdContainers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caching = value.caching;
      this._createOption = value.createOption;
      this._image = value.image;
      this._managedDiskType = value.managedDiskType;
      this._name = value.name;
      this._osType = value.osType;
      this._vhdContainers = value.vhdContainers;
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

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
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

  // os_type - computed: false, optional: true, required: false
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

  // vhd_containers - computed: false, optional: true, required: false
  private _vhdContainers?: string[]; 
  public get vhdContainers() {
    return cdktf.Fn.tolist(this.getListAttribute('vhd_containers'));
  }
  public set vhdContainers(value: string[]) {
    this._vhdContainers = value;
  }
  public resetVhdContainers() {
    this._vhdContainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhdContainersInput() {
    return this._vhdContainers;
  }
}
export interface VirtualMachineScaleSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#create VirtualMachineScaleSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#delete VirtualMachineScaleSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#read VirtualMachineScaleSet#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#update VirtualMachineScaleSet#update}
  */
  readonly update?: string;
}

export function virtualMachineScaleSetTimeoutsToTerraform(struct?: VirtualMachineScaleSetTimeouts | cdktf.IResolvable): any {
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


export function virtualMachineScaleSetTimeoutsToHclTerraform(struct?: VirtualMachineScaleSetTimeouts | cdktf.IResolvable): any {
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

export class VirtualMachineScaleSetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualMachineScaleSetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualMachineScaleSetTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set azurerm_virtual_machine_scale_set}
*/
export class VirtualMachineScaleSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_virtual_machine_scale_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualMachineScaleSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualMachineScaleSet to import
  * @param importFromId The id of the existing VirtualMachineScaleSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualMachineScaleSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_virtual_machine_scale_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_scale_set azurerm_virtual_machine_scale_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualMachineScaleSetConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualMachineScaleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_machine_scale_set',
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
    this._automaticOsUpgrade = config.automaticOsUpgrade;
    this._evictionPolicy = config.evictionPolicy;
    this._healthProbeId = config.healthProbeId;
    this._id = config.id;
    this._licenseType = config.licenseType;
    this._location = config.location;
    this._name = config.name;
    this._overprovision = config.overprovision;
    this._priority = config.priority;
    this._proximityPlacementGroupId = config.proximityPlacementGroupId;
    this._resourceGroupName = config.resourceGroupName;
    this._singlePlacementGroup = config.singlePlacementGroup;
    this._tags = config.tags;
    this._upgradePolicyMode = config.upgradePolicyMode;
    this._zones = config.zones;
    this._bootDiagnostics.internalValue = config.bootDiagnostics;
    this._extension.internalValue = config.extension;
    this._identity.internalValue = config.identity;
    this._networkProfile.internalValue = config.networkProfile;
    this._osProfile.internalValue = config.osProfile;
    this._osProfileLinuxConfig.internalValue = config.osProfileLinuxConfig;
    this._osProfileSecrets.internalValue = config.osProfileSecrets;
    this._osProfileWindowsConfig.internalValue = config.osProfileWindowsConfig;
    this._plan.internalValue = config.plan;
    this._rollingUpgradePolicy.internalValue = config.rollingUpgradePolicy;
    this._sku.internalValue = config.sku;
    this._storageProfileDataDisk.internalValue = config.storageProfileDataDisk;
    this._storageProfileImageReference.internalValue = config.storageProfileImageReference;
    this._storageProfileOsDisk.internalValue = config.storageProfileOsDisk;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_os_upgrade - computed: false, optional: true, required: false
  private _automaticOsUpgrade?: boolean | cdktf.IResolvable; 
  public get automaticOsUpgrade() {
    return this.getBooleanAttribute('automatic_os_upgrade');
  }
  public set automaticOsUpgrade(value: boolean | cdktf.IResolvable) {
    this._automaticOsUpgrade = value;
  }
  public resetAutomaticOsUpgrade() {
    this._automaticOsUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticOsUpgradeInput() {
    return this._automaticOsUpgrade;
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

  // upgrade_policy_mode - computed: false, optional: false, required: true
  private _upgradePolicyMode?: string; 
  public get upgradePolicyMode() {
    return this.getStringAttribute('upgrade_policy_mode');
  }
  public set upgradePolicyMode(value: string) {
    this._upgradePolicyMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradePolicyModeInput() {
    return this._upgradePolicyMode;
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

  // boot_diagnostics - computed: false, optional: true, required: false
  private _bootDiagnostics = new VirtualMachineScaleSetBootDiagnosticsOutputReference(this, "boot_diagnostics");
  public get bootDiagnostics() {
    return this._bootDiagnostics;
  }
  public putBootDiagnostics(value: VirtualMachineScaleSetBootDiagnostics) {
    this._bootDiagnostics.internalValue = value;
  }
  public resetBootDiagnostics() {
    this._bootDiagnostics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiagnosticsInput() {
    return this._bootDiagnostics.internalValue;
  }

  // extension - computed: false, optional: true, required: false
  private _extension = new VirtualMachineScaleSetExtensionList(this, "extension", true);
  public get extension() {
    return this._extension;
  }
  public putExtension(value: VirtualMachineScaleSetExtension[] | cdktf.IResolvable) {
    this._extension.internalValue = value;
  }
  public resetExtension() {
    this._extension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new VirtualMachineScaleSetIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: VirtualMachineScaleSetIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // network_profile - computed: false, optional: false, required: true
  private _networkProfile = new VirtualMachineScaleSetNetworkProfileList(this, "network_profile", true);
  public get networkProfile() {
    return this._networkProfile;
  }
  public putNetworkProfile(value: VirtualMachineScaleSetNetworkProfile[] | cdktf.IResolvable) {
    this._networkProfile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileInput() {
    return this._networkProfile.internalValue;
  }

  // os_profile - computed: false, optional: false, required: true
  private _osProfile = new VirtualMachineScaleSetOsProfileOutputReference(this, "os_profile");
  public get osProfile() {
    return this._osProfile;
  }
  public putOsProfile(value: VirtualMachineScaleSetOsProfile) {
    this._osProfile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osProfileInput() {
    return this._osProfile.internalValue;
  }

  // os_profile_linux_config - computed: false, optional: true, required: false
  private _osProfileLinuxConfig = new VirtualMachineScaleSetOsProfileLinuxConfigOutputReference(this, "os_profile_linux_config");
  public get osProfileLinuxConfig() {
    return this._osProfileLinuxConfig;
  }
  public putOsProfileLinuxConfig(value: VirtualMachineScaleSetOsProfileLinuxConfig) {
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
  private _osProfileSecrets = new VirtualMachineScaleSetOsProfileSecretsList(this, "os_profile_secrets", true);
  public get osProfileSecrets() {
    return this._osProfileSecrets;
  }
  public putOsProfileSecrets(value: VirtualMachineScaleSetOsProfileSecrets[] | cdktf.IResolvable) {
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
  private _osProfileWindowsConfig = new VirtualMachineScaleSetOsProfileWindowsConfigOutputReference(this, "os_profile_windows_config");
  public get osProfileWindowsConfig() {
    return this._osProfileWindowsConfig;
  }
  public putOsProfileWindowsConfig(value: VirtualMachineScaleSetOsProfileWindowsConfig) {
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
  private _plan = new VirtualMachineScaleSetPlanOutputReference(this, "plan");
  public get plan() {
    return this._plan;
  }
  public putPlan(value: VirtualMachineScaleSetPlan) {
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
  private _rollingUpgradePolicy = new VirtualMachineScaleSetRollingUpgradePolicyOutputReference(this, "rolling_upgrade_policy");
  public get rollingUpgradePolicy() {
    return this._rollingUpgradePolicy;
  }
  public putRollingUpgradePolicy(value: VirtualMachineScaleSetRollingUpgradePolicy) {
    this._rollingUpgradePolicy.internalValue = value;
  }
  public resetRollingUpgradePolicy() {
    this._rollingUpgradePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpgradePolicyInput() {
    return this._rollingUpgradePolicy.internalValue;
  }

  // sku - computed: false, optional: false, required: true
  private _sku = new VirtualMachineScaleSetSkuOutputReference(this, "sku");
  public get sku() {
    return this._sku;
  }
  public putSku(value: VirtualMachineScaleSetSku) {
    this._sku.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku.internalValue;
  }

  // storage_profile_data_disk - computed: false, optional: true, required: false
  private _storageProfileDataDisk = new VirtualMachineScaleSetStorageProfileDataDiskList(this, "storage_profile_data_disk", false);
  public get storageProfileDataDisk() {
    return this._storageProfileDataDisk;
  }
  public putStorageProfileDataDisk(value: VirtualMachineScaleSetStorageProfileDataDisk[] | cdktf.IResolvable) {
    this._storageProfileDataDisk.internalValue = value;
  }
  public resetStorageProfileDataDisk() {
    this._storageProfileDataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProfileDataDiskInput() {
    return this._storageProfileDataDisk.internalValue;
  }

  // storage_profile_image_reference - computed: false, optional: true, required: false
  private _storageProfileImageReference = new VirtualMachineScaleSetStorageProfileImageReferenceOutputReference(this, "storage_profile_image_reference");
  public get storageProfileImageReference() {
    return this._storageProfileImageReference;
  }
  public putStorageProfileImageReference(value: VirtualMachineScaleSetStorageProfileImageReference) {
    this._storageProfileImageReference.internalValue = value;
  }
  public resetStorageProfileImageReference() {
    this._storageProfileImageReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProfileImageReferenceInput() {
    return this._storageProfileImageReference.internalValue;
  }

  // storage_profile_os_disk - computed: false, optional: false, required: true
  private _storageProfileOsDisk = new VirtualMachineScaleSetStorageProfileOsDiskOutputReference(this, "storage_profile_os_disk");
  public get storageProfileOsDisk() {
    return this._storageProfileOsDisk;
  }
  public putStorageProfileOsDisk(value: VirtualMachineScaleSetStorageProfileOsDisk) {
    this._storageProfileOsDisk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProfileOsDiskInput() {
    return this._storageProfileOsDisk.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualMachineScaleSetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualMachineScaleSetTimeouts) {
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
      automatic_os_upgrade: cdktf.booleanToTerraform(this._automaticOsUpgrade),
      eviction_policy: cdktf.stringToTerraform(this._evictionPolicy),
      health_probe_id: cdktf.stringToTerraform(this._healthProbeId),
      id: cdktf.stringToTerraform(this._id),
      license_type: cdktf.stringToTerraform(this._licenseType),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      overprovision: cdktf.booleanToTerraform(this._overprovision),
      priority: cdktf.stringToTerraform(this._priority),
      proximity_placement_group_id: cdktf.stringToTerraform(this._proximityPlacementGroupId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      single_placement_group: cdktf.booleanToTerraform(this._singlePlacementGroup),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      upgrade_policy_mode: cdktf.stringToTerraform(this._upgradePolicyMode),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
      boot_diagnostics: virtualMachineScaleSetBootDiagnosticsToTerraform(this._bootDiagnostics.internalValue),
      extension: cdktf.listMapper(virtualMachineScaleSetExtensionToTerraform, true)(this._extension.internalValue),
      identity: virtualMachineScaleSetIdentityToTerraform(this._identity.internalValue),
      network_profile: cdktf.listMapper(virtualMachineScaleSetNetworkProfileToTerraform, true)(this._networkProfile.internalValue),
      os_profile: virtualMachineScaleSetOsProfileToTerraform(this._osProfile.internalValue),
      os_profile_linux_config: virtualMachineScaleSetOsProfileLinuxConfigToTerraform(this._osProfileLinuxConfig.internalValue),
      os_profile_secrets: cdktf.listMapper(virtualMachineScaleSetOsProfileSecretsToTerraform, true)(this._osProfileSecrets.internalValue),
      os_profile_windows_config: virtualMachineScaleSetOsProfileWindowsConfigToTerraform(this._osProfileWindowsConfig.internalValue),
      plan: virtualMachineScaleSetPlanToTerraform(this._plan.internalValue),
      rolling_upgrade_policy: virtualMachineScaleSetRollingUpgradePolicyToTerraform(this._rollingUpgradePolicy.internalValue),
      sku: virtualMachineScaleSetSkuToTerraform(this._sku.internalValue),
      storage_profile_data_disk: cdktf.listMapper(virtualMachineScaleSetStorageProfileDataDiskToTerraform, true)(this._storageProfileDataDisk.internalValue),
      storage_profile_image_reference: virtualMachineScaleSetStorageProfileImageReferenceToTerraform(this._storageProfileImageReference.internalValue),
      storage_profile_os_disk: virtualMachineScaleSetStorageProfileOsDiskToTerraform(this._storageProfileOsDisk.internalValue),
      timeouts: virtualMachineScaleSetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic_os_upgrade: {
        value: cdktf.booleanToHclTerraform(this._automaticOsUpgrade),
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
      health_probe_id: {
        value: cdktf.stringToHclTerraform(this._healthProbeId),
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
      overprovision: {
        value: cdktf.booleanToHclTerraform(this._overprovision),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
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
      single_placement_group: {
        value: cdktf.booleanToHclTerraform(this._singlePlacementGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      upgrade_policy_mode: {
        value: cdktf.stringToHclTerraform(this._upgradePolicyMode),
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
      boot_diagnostics: {
        value: virtualMachineScaleSetBootDiagnosticsToHclTerraform(this._bootDiagnostics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineScaleSetBootDiagnosticsList",
      },
      extension: {
        value: cdktf.listMapperHcl(virtualMachineScaleSetExtensionToHclTerraform, true)(this._extension.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualMachineScaleSetExtensionList",
      },
      identity: {
        value: virtualMachineScaleSetIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineScaleSetIdentityList",
      },
      network_profile: {
        value: cdktf.listMapperHcl(virtualMachineScaleSetNetworkProfileToHclTerraform, true)(this._networkProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualMachineScaleSetNetworkProfileList",
      },
      os_profile: {
        value: virtualMachineScaleSetOsProfileToHclTerraform(this._osProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineScaleSetOsProfileList",
      },
      os_profile_linux_config: {
        value: virtualMachineScaleSetOsProfileLinuxConfigToHclTerraform(this._osProfileLinuxConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualMachineScaleSetOsProfileLinuxConfigList",
      },
      os_profile_secrets: {
        value: cdktf.listMapperHcl(virtualMachineScaleSetOsProfileSecretsToHclTerraform, true)(this._osProfileSecrets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualMachineScaleSetOsProfileSecretsList",
      },
      os_profile_windows_config: {
        value: virtualMachineScaleSetOsProfileWindowsConfigToHclTerraform(this._osProfileWindowsConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualMachineScaleSetOsProfileWindowsConfigList",
      },
      plan: {
        value: virtualMachineScaleSetPlanToHclTerraform(this._plan.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualMachineScaleSetPlanList",
      },
      rolling_upgrade_policy: {
        value: virtualMachineScaleSetRollingUpgradePolicyToHclTerraform(this._rollingUpgradePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineScaleSetRollingUpgradePolicyList",
      },
      sku: {
        value: virtualMachineScaleSetSkuToHclTerraform(this._sku.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineScaleSetSkuList",
      },
      storage_profile_data_disk: {
        value: cdktf.listMapperHcl(virtualMachineScaleSetStorageProfileDataDiskToHclTerraform, true)(this._storageProfileDataDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachineScaleSetStorageProfileDataDiskList",
      },
      storage_profile_image_reference: {
        value: virtualMachineScaleSetStorageProfileImageReferenceToHclTerraform(this._storageProfileImageReference.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualMachineScaleSetStorageProfileImageReferenceList",
      },
      storage_profile_os_disk: {
        value: virtualMachineScaleSetStorageProfileOsDiskToHclTerraform(this._storageProfileOsDisk.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualMachineScaleSetStorageProfileOsDiskList",
      },
      timeouts: {
        value: virtualMachineScaleSetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualMachineScaleSetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
