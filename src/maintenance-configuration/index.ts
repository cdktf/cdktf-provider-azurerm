// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaintenanceConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#id MaintenanceConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#in_guest_user_patch_mode MaintenanceConfiguration#in_guest_user_patch_mode}
  */
  readonly inGuestUserPatchMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#location MaintenanceConfiguration#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#name MaintenanceConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#properties MaintenanceConfiguration#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#resource_group_name MaintenanceConfiguration#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#scope MaintenanceConfiguration#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#tags MaintenanceConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#visibility MaintenanceConfiguration#visibility}
  */
  readonly visibility?: string;
  /**
  * install_patches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#install_patches MaintenanceConfiguration#install_patches}
  */
  readonly installPatches?: MaintenanceConfigurationInstallPatches;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#timeouts MaintenanceConfiguration#timeouts}
  */
  readonly timeouts?: MaintenanceConfigurationTimeouts;
  /**
  * window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#window MaintenanceConfiguration#window}
  */
  readonly window?: MaintenanceConfigurationWindow;
}
export interface MaintenanceConfigurationInstallPatchesLinux {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#classifications_to_include MaintenanceConfiguration#classifications_to_include}
  */
  readonly classificationsToInclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#package_names_mask_to_exclude MaintenanceConfiguration#package_names_mask_to_exclude}
  */
  readonly packageNamesMaskToExclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#package_names_mask_to_include MaintenanceConfiguration#package_names_mask_to_include}
  */
  readonly packageNamesMaskToInclude?: string[];
}

export function maintenanceConfigurationInstallPatchesLinuxToTerraform(struct?: MaintenanceConfigurationInstallPatchesLinux | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classifications_to_include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classificationsToInclude),
    package_names_mask_to_exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packageNamesMaskToExclude),
    package_names_mask_to_include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packageNamesMaskToInclude),
  }
}


export function maintenanceConfigurationInstallPatchesLinuxToHclTerraform(struct?: MaintenanceConfigurationInstallPatchesLinux | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classifications_to_include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classificationsToInclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    package_names_mask_to_exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packageNamesMaskToExclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    package_names_mask_to_include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packageNamesMaskToInclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaintenanceConfigurationInstallPatchesLinuxOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MaintenanceConfigurationInstallPatchesLinux | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classificationsToInclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.classificationsToInclude = this._classificationsToInclude;
    }
    if (this._packageNamesMaskToExclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageNamesMaskToExclude = this._packageNamesMaskToExclude;
    }
    if (this._packageNamesMaskToInclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageNamesMaskToInclude = this._packageNamesMaskToInclude;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceConfigurationInstallPatchesLinux | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classificationsToInclude = undefined;
      this._packageNamesMaskToExclude = undefined;
      this._packageNamesMaskToInclude = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classificationsToInclude = value.classificationsToInclude;
      this._packageNamesMaskToExclude = value.packageNamesMaskToExclude;
      this._packageNamesMaskToInclude = value.packageNamesMaskToInclude;
    }
  }

  // classifications_to_include - computed: false, optional: true, required: false
  private _classificationsToInclude?: string[]; 
  public get classificationsToInclude() {
    return this.getListAttribute('classifications_to_include');
  }
  public set classificationsToInclude(value: string[]) {
    this._classificationsToInclude = value;
  }
  public resetClassificationsToInclude() {
    this._classificationsToInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationsToIncludeInput() {
    return this._classificationsToInclude;
  }

  // package_names_mask_to_exclude - computed: false, optional: true, required: false
  private _packageNamesMaskToExclude?: string[]; 
  public get packageNamesMaskToExclude() {
    return this.getListAttribute('package_names_mask_to_exclude');
  }
  public set packageNamesMaskToExclude(value: string[]) {
    this._packageNamesMaskToExclude = value;
  }
  public resetPackageNamesMaskToExclude() {
    this._packageNamesMaskToExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNamesMaskToExcludeInput() {
    return this._packageNamesMaskToExclude;
  }

  // package_names_mask_to_include - computed: false, optional: true, required: false
  private _packageNamesMaskToInclude?: string[]; 
  public get packageNamesMaskToInclude() {
    return this.getListAttribute('package_names_mask_to_include');
  }
  public set packageNamesMaskToInclude(value: string[]) {
    this._packageNamesMaskToInclude = value;
  }
  public resetPackageNamesMaskToInclude() {
    this._packageNamesMaskToInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNamesMaskToIncludeInput() {
    return this._packageNamesMaskToInclude;
  }
}

export class MaintenanceConfigurationInstallPatchesLinuxList extends cdktf.ComplexList {
  public internalValue? : MaintenanceConfigurationInstallPatchesLinux[] | cdktf.IResolvable

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
  public get(index: number): MaintenanceConfigurationInstallPatchesLinuxOutputReference {
    return new MaintenanceConfigurationInstallPatchesLinuxOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MaintenanceConfigurationInstallPatchesWindows {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#classifications_to_include MaintenanceConfiguration#classifications_to_include}
  */
  readonly classificationsToInclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#kb_numbers_to_exclude MaintenanceConfiguration#kb_numbers_to_exclude}
  */
  readonly kbNumbersToExclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#kb_numbers_to_include MaintenanceConfiguration#kb_numbers_to_include}
  */
  readonly kbNumbersToInclude?: string[];
}

export function maintenanceConfigurationInstallPatchesWindowsToTerraform(struct?: MaintenanceConfigurationInstallPatchesWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classifications_to_include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classificationsToInclude),
    kb_numbers_to_exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kbNumbersToExclude),
    kb_numbers_to_include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kbNumbersToInclude),
  }
}


export function maintenanceConfigurationInstallPatchesWindowsToHclTerraform(struct?: MaintenanceConfigurationInstallPatchesWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classifications_to_include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classificationsToInclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kb_numbers_to_exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kbNumbersToExclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kb_numbers_to_include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kbNumbersToInclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaintenanceConfigurationInstallPatchesWindowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MaintenanceConfigurationInstallPatchesWindows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classificationsToInclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.classificationsToInclude = this._classificationsToInclude;
    }
    if (this._kbNumbersToExclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.kbNumbersToExclude = this._kbNumbersToExclude;
    }
    if (this._kbNumbersToInclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.kbNumbersToInclude = this._kbNumbersToInclude;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceConfigurationInstallPatchesWindows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classificationsToInclude = undefined;
      this._kbNumbersToExclude = undefined;
      this._kbNumbersToInclude = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classificationsToInclude = value.classificationsToInclude;
      this._kbNumbersToExclude = value.kbNumbersToExclude;
      this._kbNumbersToInclude = value.kbNumbersToInclude;
    }
  }

  // classifications_to_include - computed: false, optional: true, required: false
  private _classificationsToInclude?: string[]; 
  public get classificationsToInclude() {
    return this.getListAttribute('classifications_to_include');
  }
  public set classificationsToInclude(value: string[]) {
    this._classificationsToInclude = value;
  }
  public resetClassificationsToInclude() {
    this._classificationsToInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationsToIncludeInput() {
    return this._classificationsToInclude;
  }

  // kb_numbers_to_exclude - computed: false, optional: true, required: false
  private _kbNumbersToExclude?: string[]; 
  public get kbNumbersToExclude() {
    return this.getListAttribute('kb_numbers_to_exclude');
  }
  public set kbNumbersToExclude(value: string[]) {
    this._kbNumbersToExclude = value;
  }
  public resetKbNumbersToExclude() {
    this._kbNumbersToExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kbNumbersToExcludeInput() {
    return this._kbNumbersToExclude;
  }

  // kb_numbers_to_include - computed: false, optional: true, required: false
  private _kbNumbersToInclude?: string[]; 
  public get kbNumbersToInclude() {
    return this.getListAttribute('kb_numbers_to_include');
  }
  public set kbNumbersToInclude(value: string[]) {
    this._kbNumbersToInclude = value;
  }
  public resetKbNumbersToInclude() {
    this._kbNumbersToInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kbNumbersToIncludeInput() {
    return this._kbNumbersToInclude;
  }
}

export class MaintenanceConfigurationInstallPatchesWindowsList extends cdktf.ComplexList {
  public internalValue? : MaintenanceConfigurationInstallPatchesWindows[] | cdktf.IResolvable

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
  public get(index: number): MaintenanceConfigurationInstallPatchesWindowsOutputReference {
    return new MaintenanceConfigurationInstallPatchesWindowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MaintenanceConfigurationInstallPatches {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#reboot MaintenanceConfiguration#reboot}
  */
  readonly reboot?: string;
  /**
  * linux block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#linux MaintenanceConfiguration#linux}
  */
  readonly linux?: MaintenanceConfigurationInstallPatchesLinux[] | cdktf.IResolvable;
  /**
  * windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#windows MaintenanceConfiguration#windows}
  */
  readonly windows?: MaintenanceConfigurationInstallPatchesWindows[] | cdktf.IResolvable;
}

export function maintenanceConfigurationInstallPatchesToTerraform(struct?: MaintenanceConfigurationInstallPatchesOutputReference | MaintenanceConfigurationInstallPatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reboot: cdktf.stringToTerraform(struct!.reboot),
    linux: cdktf.listMapper(maintenanceConfigurationInstallPatchesLinuxToTerraform, true)(struct!.linux),
    windows: cdktf.listMapper(maintenanceConfigurationInstallPatchesWindowsToTerraform, true)(struct!.windows),
  }
}


export function maintenanceConfigurationInstallPatchesToHclTerraform(struct?: MaintenanceConfigurationInstallPatchesOutputReference | MaintenanceConfigurationInstallPatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reboot: {
      value: cdktf.stringToHclTerraform(struct!.reboot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    linux: {
      value: cdktf.listMapperHcl(maintenanceConfigurationInstallPatchesLinuxToHclTerraform, true)(struct!.linux),
      isBlock: true,
      type: "list",
      storageClassType: "MaintenanceConfigurationInstallPatchesLinuxList",
    },
    windows: {
      value: cdktf.listMapperHcl(maintenanceConfigurationInstallPatchesWindowsToHclTerraform, true)(struct!.windows),
      isBlock: true,
      type: "list",
      storageClassType: "MaintenanceConfigurationInstallPatchesWindowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaintenanceConfigurationInstallPatchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaintenanceConfigurationInstallPatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reboot !== undefined) {
      hasAnyValues = true;
      internalValueResult.reboot = this._reboot;
    }
    if (this._linux?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linux = this._linux?.internalValue;
    }
    if (this._windows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windows = this._windows?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceConfigurationInstallPatches | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._reboot = undefined;
      this._linux.internalValue = undefined;
      this._windows.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._reboot = value.reboot;
      this._linux.internalValue = value.linux;
      this._windows.internalValue = value.windows;
    }
  }

  // reboot - computed: false, optional: true, required: false
  private _reboot?: string; 
  public get reboot() {
    return this.getStringAttribute('reboot');
  }
  public set reboot(value: string) {
    this._reboot = value;
  }
  public resetReboot() {
    this._reboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootInput() {
    return this._reboot;
  }

  // linux - computed: false, optional: true, required: false
  private _linux = new MaintenanceConfigurationInstallPatchesLinuxList(this, "linux", false);
  public get linux() {
    return this._linux;
  }
  public putLinux(value: MaintenanceConfigurationInstallPatchesLinux[] | cdktf.IResolvable) {
    this._linux.internalValue = value;
  }
  public resetLinux() {
    this._linux.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxInput() {
    return this._linux.internalValue;
  }

  // windows - computed: false, optional: true, required: false
  private _windows = new MaintenanceConfigurationInstallPatchesWindowsList(this, "windows", false);
  public get windows() {
    return this._windows;
  }
  public putWindows(value: MaintenanceConfigurationInstallPatchesWindows[] | cdktf.IResolvable) {
    this._windows.internalValue = value;
  }
  public resetWindows() {
    this._windows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsInput() {
    return this._windows.internalValue;
  }
}
export interface MaintenanceConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#create MaintenanceConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#delete MaintenanceConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#read MaintenanceConfiguration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#update MaintenanceConfiguration#update}
  */
  readonly update?: string;
}

export function maintenanceConfigurationTimeoutsToTerraform(struct?: MaintenanceConfigurationTimeouts | cdktf.IResolvable): any {
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


export function maintenanceConfigurationTimeoutsToHclTerraform(struct?: MaintenanceConfigurationTimeouts | cdktf.IResolvable): any {
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

export class MaintenanceConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MaintenanceConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MaintenanceConfigurationTimeouts | cdktf.IResolvable | undefined) {
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
export interface MaintenanceConfigurationWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#duration MaintenanceConfiguration#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#expiration_date_time MaintenanceConfiguration#expiration_date_time}
  */
  readonly expirationDateTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#recur_every MaintenanceConfiguration#recur_every}
  */
  readonly recurEvery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#start_date_time MaintenanceConfiguration#start_date_time}
  */
  readonly startDateTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#time_zone MaintenanceConfiguration#time_zone}
  */
  readonly timeZone: string;
}

export function maintenanceConfigurationWindowToTerraform(struct?: MaintenanceConfigurationWindowOutputReference | MaintenanceConfigurationWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    expiration_date_time: cdktf.stringToTerraform(struct!.expirationDateTime),
    recur_every: cdktf.stringToTerraform(struct!.recurEvery),
    start_date_time: cdktf.stringToTerraform(struct!.startDateTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function maintenanceConfigurationWindowToHclTerraform(struct?: MaintenanceConfigurationWindowOutputReference | MaintenanceConfigurationWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_date_time: {
      value: cdktf.stringToHclTerraform(struct!.expirationDateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recur_every: {
      value: cdktf.stringToHclTerraform(struct!.recurEvery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_date_time: {
      value: cdktf.stringToHclTerraform(struct!.startDateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaintenanceConfigurationWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaintenanceConfigurationWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._expirationDateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationDateTime = this._expirationDateTime;
    }
    if (this._recurEvery !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurEvery = this._recurEvery;
    }
    if (this._startDateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDateTime = this._startDateTime;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceConfigurationWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._expirationDateTime = undefined;
      this._recurEvery = undefined;
      this._startDateTime = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._expirationDateTime = value.expirationDateTime;
      this._recurEvery = value.recurEvery;
      this._startDateTime = value.startDateTime;
      this._timeZone = value.timeZone;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // expiration_date_time - computed: false, optional: true, required: false
  private _expirationDateTime?: string; 
  public get expirationDateTime() {
    return this.getStringAttribute('expiration_date_time');
  }
  public set expirationDateTime(value: string) {
    this._expirationDateTime = value;
  }
  public resetExpirationDateTime() {
    this._expirationDateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDateTimeInput() {
    return this._expirationDateTime;
  }

  // recur_every - computed: false, optional: true, required: false
  private _recurEvery?: string; 
  public get recurEvery() {
    return this.getStringAttribute('recur_every');
  }
  public set recurEvery(value: string) {
    this._recurEvery = value;
  }
  public resetRecurEvery() {
    this._recurEvery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurEveryInput() {
    return this._recurEvery;
  }

  // start_date_time - computed: false, optional: false, required: true
  private _startDateTime?: string; 
  public get startDateTime() {
    return this.getStringAttribute('start_date_time');
  }
  public set startDateTime(value: string) {
    this._startDateTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateTimeInput() {
    return this._startDateTime;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration azurerm_maintenance_configuration}
*/
export class MaintenanceConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_maintenance_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MaintenanceConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MaintenanceConfiguration to import
  * @param importFromId The id of the existing MaintenanceConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MaintenanceConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_maintenance_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/maintenance_configuration azurerm_maintenance_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaintenanceConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: MaintenanceConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_maintenance_configuration',
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
    this._id = config.id;
    this._inGuestUserPatchMode = config.inGuestUserPatchMode;
    this._location = config.location;
    this._name = config.name;
    this._properties = config.properties;
    this._resourceGroupName = config.resourceGroupName;
    this._scope = config.scope;
    this._tags = config.tags;
    this._visibility = config.visibility;
    this._installPatches.internalValue = config.installPatches;
    this._timeouts.internalValue = config.timeouts;
    this._window.internalValue = config.window;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // in_guest_user_patch_mode - computed: false, optional: true, required: false
  private _inGuestUserPatchMode?: string; 
  public get inGuestUserPatchMode() {
    return this.getStringAttribute('in_guest_user_patch_mode');
  }
  public set inGuestUserPatchMode(value: string) {
    this._inGuestUserPatchMode = value;
  }
  public resetInGuestUserPatchMode() {
    this._inGuestUserPatchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inGuestUserPatchModeInput() {
    return this._inGuestUserPatchMode;
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

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
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

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
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

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // install_patches - computed: false, optional: true, required: false
  private _installPatches = new MaintenanceConfigurationInstallPatchesOutputReference(this, "install_patches");
  public get installPatches() {
    return this._installPatches;
  }
  public putInstallPatches(value: MaintenanceConfigurationInstallPatches) {
    this._installPatches.internalValue = value;
  }
  public resetInstallPatches() {
    this._installPatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installPatchesInput() {
    return this._installPatches.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MaintenanceConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MaintenanceConfigurationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // window - computed: false, optional: true, required: false
  private _window = new MaintenanceConfigurationWindowOutputReference(this, "window");
  public get window() {
    return this._window;
  }
  public putWindow(value: MaintenanceConfigurationWindow) {
    this._window.internalValue = value;
  }
  public resetWindow() {
    this._window.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      in_guest_user_patch_mode: cdktf.stringToTerraform(this._inGuestUserPatchMode),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      scope: cdktf.stringToTerraform(this._scope),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      visibility: cdktf.stringToTerraform(this._visibility),
      install_patches: maintenanceConfigurationInstallPatchesToTerraform(this._installPatches.internalValue),
      timeouts: maintenanceConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
      window: maintenanceConfigurationWindowToTerraform(this._window.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      in_guest_user_patch_mode: {
        value: cdktf.stringToHclTerraform(this._inGuestUserPatchMode),
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
      properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._properties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
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
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      install_patches: {
        value: maintenanceConfigurationInstallPatchesToHclTerraform(this._installPatches.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MaintenanceConfigurationInstallPatchesList",
      },
      timeouts: {
        value: maintenanceConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MaintenanceConfigurationTimeouts",
      },
      window: {
        value: maintenanceConfigurationWindowToHclTerraform(this._window.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MaintenanceConfigurationWindowList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
