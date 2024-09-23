// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GalleryApplicationVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#config_file GalleryApplicationVersion#config_file}
  */
  readonly configFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#enable_health_check GalleryApplicationVersion#enable_health_check}
  */
  readonly enableHealthCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#end_of_life_date GalleryApplicationVersion#end_of_life_date}
  */
  readonly endOfLifeDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#exclude_from_latest GalleryApplicationVersion#exclude_from_latest}
  */
  readonly excludeFromLatest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#gallery_application_id GalleryApplicationVersion#gallery_application_id}
  */
  readonly galleryApplicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#id GalleryApplicationVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#location GalleryApplicationVersion#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#name GalleryApplicationVersion#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#package_file GalleryApplicationVersion#package_file}
  */
  readonly packageFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#tags GalleryApplicationVersion#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * manage_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#manage_action GalleryApplicationVersion#manage_action}
  */
  readonly manageAction: GalleryApplicationVersionManageAction;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#source GalleryApplicationVersion#source}
  */
  readonly source: GalleryApplicationVersionSource;
  /**
  * target_region block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#target_region GalleryApplicationVersion#target_region}
  */
  readonly targetRegion: GalleryApplicationVersionTargetRegion[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#timeouts GalleryApplicationVersion#timeouts}
  */
  readonly timeouts?: GalleryApplicationVersionTimeouts;
}
export interface GalleryApplicationVersionManageAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#install GalleryApplicationVersion#install}
  */
  readonly install: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#remove GalleryApplicationVersion#remove}
  */
  readonly remove: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#update GalleryApplicationVersion#update}
  */
  readonly update?: string;
}

export function galleryApplicationVersionManageActionToTerraform(struct?: GalleryApplicationVersionManageActionOutputReference | GalleryApplicationVersionManageAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    install: cdktf.stringToTerraform(struct!.install),
    remove: cdktf.stringToTerraform(struct!.remove),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function galleryApplicationVersionManageActionToHclTerraform(struct?: GalleryApplicationVersionManageActionOutputReference | GalleryApplicationVersionManageAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    install: {
      value: cdktf.stringToHclTerraform(struct!.install),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove: {
      value: cdktf.stringToHclTerraform(struct!.remove),
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

export class GalleryApplicationVersionManageActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GalleryApplicationVersionManageAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._install !== undefined) {
      hasAnyValues = true;
      internalValueResult.install = this._install;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GalleryApplicationVersionManageAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._install = undefined;
      this._remove = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._install = value.install;
      this._remove = value.remove;
      this._update = value.update;
    }
  }

  // install - computed: false, optional: false, required: true
  private _install?: string; 
  public get install() {
    return this.getStringAttribute('install');
  }
  public set install(value: string) {
    this._install = value;
  }
  // Temporarily expose input value. Use with caution.
  public get installInput() {
    return this._install;
  }

  // remove - computed: false, optional: false, required: true
  private _remove?: string; 
  public get remove() {
    return this.getStringAttribute('remove');
  }
  public set remove(value: string) {
    this._remove = value;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
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
export interface GalleryApplicationVersionSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#default_configuration_link GalleryApplicationVersion#default_configuration_link}
  */
  readonly defaultConfigurationLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#media_link GalleryApplicationVersion#media_link}
  */
  readonly mediaLink: string;
}

export function galleryApplicationVersionSourceToTerraform(struct?: GalleryApplicationVersionSourceOutputReference | GalleryApplicationVersionSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_configuration_link: cdktf.stringToTerraform(struct!.defaultConfigurationLink),
    media_link: cdktf.stringToTerraform(struct!.mediaLink),
  }
}


export function galleryApplicationVersionSourceToHclTerraform(struct?: GalleryApplicationVersionSourceOutputReference | GalleryApplicationVersionSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_configuration_link: {
      value: cdktf.stringToHclTerraform(struct!.defaultConfigurationLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    media_link: {
      value: cdktf.stringToHclTerraform(struct!.mediaLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GalleryApplicationVersionSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GalleryApplicationVersionSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultConfigurationLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultConfigurationLink = this._defaultConfigurationLink;
    }
    if (this._mediaLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaLink = this._mediaLink;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GalleryApplicationVersionSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultConfigurationLink = undefined;
      this._mediaLink = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultConfigurationLink = value.defaultConfigurationLink;
      this._mediaLink = value.mediaLink;
    }
  }

  // default_configuration_link - computed: false, optional: true, required: false
  private _defaultConfigurationLink?: string; 
  public get defaultConfigurationLink() {
    return this.getStringAttribute('default_configuration_link');
  }
  public set defaultConfigurationLink(value: string) {
    this._defaultConfigurationLink = value;
  }
  public resetDefaultConfigurationLink() {
    this._defaultConfigurationLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConfigurationLinkInput() {
    return this._defaultConfigurationLink;
  }

  // media_link - computed: false, optional: false, required: true
  private _mediaLink?: string; 
  public get mediaLink() {
    return this.getStringAttribute('media_link');
  }
  public set mediaLink(value: string) {
    this._mediaLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaLinkInput() {
    return this._mediaLink;
  }
}
export interface GalleryApplicationVersionTargetRegion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#exclude_from_latest GalleryApplicationVersion#exclude_from_latest}
  */
  readonly excludeFromLatest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#name GalleryApplicationVersion#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#regional_replica_count GalleryApplicationVersion#regional_replica_count}
  */
  readonly regionalReplicaCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#storage_account_type GalleryApplicationVersion#storage_account_type}
  */
  readonly storageAccountType?: string;
}

export function galleryApplicationVersionTargetRegionToTerraform(struct?: GalleryApplicationVersionTargetRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_from_latest: cdktf.booleanToTerraform(struct!.excludeFromLatest),
    name: cdktf.stringToTerraform(struct!.name),
    regional_replica_count: cdktf.numberToTerraform(struct!.regionalReplicaCount),
    storage_account_type: cdktf.stringToTerraform(struct!.storageAccountType),
  }
}


export function galleryApplicationVersionTargetRegionToHclTerraform(struct?: GalleryApplicationVersionTargetRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_from_latest: {
      value: cdktf.booleanToHclTerraform(struct!.excludeFromLatest),
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
    regional_replica_count: {
      value: cdktf.numberToHclTerraform(struct!.regionalReplicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_account_type: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GalleryApplicationVersionTargetRegionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GalleryApplicationVersionTargetRegion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeFromLatest !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeFromLatest = this._excludeFromLatest;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regionalReplicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionalReplicaCount = this._regionalReplicaCount;
    }
    if (this._storageAccountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountType = this._storageAccountType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GalleryApplicationVersionTargetRegion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeFromLatest = undefined;
      this._name = undefined;
      this._regionalReplicaCount = undefined;
      this._storageAccountType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeFromLatest = value.excludeFromLatest;
      this._name = value.name;
      this._regionalReplicaCount = value.regionalReplicaCount;
      this._storageAccountType = value.storageAccountType;
    }
  }

  // exclude_from_latest - computed: false, optional: true, required: false
  private _excludeFromLatest?: boolean | cdktf.IResolvable; 
  public get excludeFromLatest() {
    return this.getBooleanAttribute('exclude_from_latest');
  }
  public set excludeFromLatest(value: boolean | cdktf.IResolvable) {
    this._excludeFromLatest = value;
  }
  public resetExcludeFromLatest() {
    this._excludeFromLatest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFromLatestInput() {
    return this._excludeFromLatest;
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

  // regional_replica_count - computed: false, optional: false, required: true
  private _regionalReplicaCount?: number; 
  public get regionalReplicaCount() {
    return this.getNumberAttribute('regional_replica_count');
  }
  public set regionalReplicaCount(value: number) {
    this._regionalReplicaCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionalReplicaCountInput() {
    return this._regionalReplicaCount;
  }

  // storage_account_type - computed: false, optional: true, required: false
  private _storageAccountType?: string; 
  public get storageAccountType() {
    return this.getStringAttribute('storage_account_type');
  }
  public set storageAccountType(value: string) {
    this._storageAccountType = value;
  }
  public resetStorageAccountType() {
    this._storageAccountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountTypeInput() {
    return this._storageAccountType;
  }
}

export class GalleryApplicationVersionTargetRegionList extends cdktf.ComplexList {
  public internalValue? : GalleryApplicationVersionTargetRegion[] | cdktf.IResolvable

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
  public get(index: number): GalleryApplicationVersionTargetRegionOutputReference {
    return new GalleryApplicationVersionTargetRegionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GalleryApplicationVersionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#create GalleryApplicationVersion#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#delete GalleryApplicationVersion#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#read GalleryApplicationVersion#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#update GalleryApplicationVersion#update}
  */
  readonly update?: string;
}

export function galleryApplicationVersionTimeoutsToTerraform(struct?: GalleryApplicationVersionTimeouts | cdktf.IResolvable): any {
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


export function galleryApplicationVersionTimeoutsToHclTerraform(struct?: GalleryApplicationVersionTimeouts | cdktf.IResolvable): any {
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

export class GalleryApplicationVersionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GalleryApplicationVersionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GalleryApplicationVersionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version azurerm_gallery_application_version}
*/
export class GalleryApplicationVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_gallery_application_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GalleryApplicationVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GalleryApplicationVersion to import
  * @param importFromId The id of the existing GalleryApplicationVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GalleryApplicationVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_gallery_application_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/gallery_application_version azurerm_gallery_application_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GalleryApplicationVersionConfig
  */
  public constructor(scope: Construct, id: string, config: GalleryApplicationVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_gallery_application_version',
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
    this._configFile = config.configFile;
    this._enableHealthCheck = config.enableHealthCheck;
    this._endOfLifeDate = config.endOfLifeDate;
    this._excludeFromLatest = config.excludeFromLatest;
    this._galleryApplicationId = config.galleryApplicationId;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._packageFile = config.packageFile;
    this._tags = config.tags;
    this._manageAction.internalValue = config.manageAction;
    this._source.internalValue = config.source;
    this._targetRegion.internalValue = config.targetRegion;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_file - computed: false, optional: true, required: false
  private _configFile?: string; 
  public get configFile() {
    return this.getStringAttribute('config_file');
  }
  public set configFile(value: string) {
    this._configFile = value;
  }
  public resetConfigFile() {
    this._configFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileInput() {
    return this._configFile;
  }

  // enable_health_check - computed: false, optional: true, required: false
  private _enableHealthCheck?: boolean | cdktf.IResolvable; 
  public get enableHealthCheck() {
    return this.getBooleanAttribute('enable_health_check');
  }
  public set enableHealthCheck(value: boolean | cdktf.IResolvable) {
    this._enableHealthCheck = value;
  }
  public resetEnableHealthCheck() {
    this._enableHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHealthCheckInput() {
    return this._enableHealthCheck;
  }

  // end_of_life_date - computed: false, optional: true, required: false
  private _endOfLifeDate?: string; 
  public get endOfLifeDate() {
    return this.getStringAttribute('end_of_life_date');
  }
  public set endOfLifeDate(value: string) {
    this._endOfLifeDate = value;
  }
  public resetEndOfLifeDate() {
    this._endOfLifeDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endOfLifeDateInput() {
    return this._endOfLifeDate;
  }

  // exclude_from_latest - computed: false, optional: true, required: false
  private _excludeFromLatest?: boolean | cdktf.IResolvable; 
  public get excludeFromLatest() {
    return this.getBooleanAttribute('exclude_from_latest');
  }
  public set excludeFromLatest(value: boolean | cdktf.IResolvable) {
    this._excludeFromLatest = value;
  }
  public resetExcludeFromLatest() {
    this._excludeFromLatest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFromLatestInput() {
    return this._excludeFromLatest;
  }

  // gallery_application_id - computed: false, optional: false, required: true
  private _galleryApplicationId?: string; 
  public get galleryApplicationId() {
    return this.getStringAttribute('gallery_application_id');
  }
  public set galleryApplicationId(value: string) {
    this._galleryApplicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get galleryApplicationIdInput() {
    return this._galleryApplicationId;
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

  // package_file - computed: false, optional: true, required: false
  private _packageFile?: string; 
  public get packageFile() {
    return this.getStringAttribute('package_file');
  }
  public set packageFile(value: string) {
    this._packageFile = value;
  }
  public resetPackageFile() {
    this._packageFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageFileInput() {
    return this._packageFile;
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

  // manage_action - computed: false, optional: false, required: true
  private _manageAction = new GalleryApplicationVersionManageActionOutputReference(this, "manage_action");
  public get manageAction() {
    return this._manageAction;
  }
  public putManageAction(value: GalleryApplicationVersionManageAction) {
    this._manageAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manageActionInput() {
    return this._manageAction.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new GalleryApplicationVersionSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: GalleryApplicationVersionSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // target_region - computed: false, optional: false, required: true
  private _targetRegion = new GalleryApplicationVersionTargetRegionList(this, "target_region", false);
  public get targetRegion() {
    return this._targetRegion;
  }
  public putTargetRegion(value: GalleryApplicationVersionTargetRegion[] | cdktf.IResolvable) {
    this._targetRegion.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRegionInput() {
    return this._targetRegion.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GalleryApplicationVersionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GalleryApplicationVersionTimeouts) {
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
      config_file: cdktf.stringToTerraform(this._configFile),
      enable_health_check: cdktf.booleanToTerraform(this._enableHealthCheck),
      end_of_life_date: cdktf.stringToTerraform(this._endOfLifeDate),
      exclude_from_latest: cdktf.booleanToTerraform(this._excludeFromLatest),
      gallery_application_id: cdktf.stringToTerraform(this._galleryApplicationId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      package_file: cdktf.stringToTerraform(this._packageFile),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      manage_action: galleryApplicationVersionManageActionToTerraform(this._manageAction.internalValue),
      source: galleryApplicationVersionSourceToTerraform(this._source.internalValue),
      target_region: cdktf.listMapper(galleryApplicationVersionTargetRegionToTerraform, true)(this._targetRegion.internalValue),
      timeouts: galleryApplicationVersionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_file: {
        value: cdktf.stringToHclTerraform(this._configFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_health_check: {
        value: cdktf.booleanToHclTerraform(this._enableHealthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      end_of_life_date: {
        value: cdktf.stringToHclTerraform(this._endOfLifeDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_from_latest: {
        value: cdktf.booleanToHclTerraform(this._excludeFromLatest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gallery_application_id: {
        value: cdktf.stringToHclTerraform(this._galleryApplicationId),
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
      package_file: {
        value: cdktf.stringToHclTerraform(this._packageFile),
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
      manage_action: {
        value: galleryApplicationVersionManageActionToHclTerraform(this._manageAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GalleryApplicationVersionManageActionList",
      },
      source: {
        value: galleryApplicationVersionSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GalleryApplicationVersionSourceList",
      },
      target_region: {
        value: cdktf.listMapperHcl(galleryApplicationVersionTargetRegionToHclTerraform, true)(this._targetRegion.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GalleryApplicationVersionTargetRegionList",
      },
      timeouts: {
        value: galleryApplicationVersionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GalleryApplicationVersionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
