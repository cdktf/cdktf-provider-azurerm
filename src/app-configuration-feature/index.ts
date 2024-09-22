// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppConfigurationFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#configuration_store_id AppConfigurationFeature#configuration_store_id}
  */
  readonly configurationStoreId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#description AppConfigurationFeature#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#enabled AppConfigurationFeature#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#etag AppConfigurationFeature#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#id AppConfigurationFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#key AppConfigurationFeature#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#label AppConfigurationFeature#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#locked AppConfigurationFeature#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#name AppConfigurationFeature#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#percentage_filter_value AppConfigurationFeature#percentage_filter_value}
  */
  readonly percentageFilterValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#tags AppConfigurationFeature#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * targeting_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#targeting_filter AppConfigurationFeature#targeting_filter}
  */
  readonly targetingFilter?: AppConfigurationFeatureTargetingFilter[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#timeouts AppConfigurationFeature#timeouts}
  */
  readonly timeouts?: AppConfigurationFeatureTimeouts;
  /**
  * timewindow_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#timewindow_filter AppConfigurationFeature#timewindow_filter}
  */
  readonly timewindowFilter?: AppConfigurationFeatureTimewindowFilter[] | cdktf.IResolvable;
}
export interface AppConfigurationFeatureTargetingFilterGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#name AppConfigurationFeature#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#rollout_percentage AppConfigurationFeature#rollout_percentage}
  */
  readonly rolloutPercentage: number;
}

export function appConfigurationFeatureTargetingFilterGroupsToTerraform(struct?: AppConfigurationFeatureTargetingFilterGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    rollout_percentage: cdktf.numberToTerraform(struct!.rolloutPercentage),
  }
}


export function appConfigurationFeatureTargetingFilterGroupsToHclTerraform(struct?: AppConfigurationFeatureTargetingFilterGroups | cdktf.IResolvable): any {
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
    rollout_percentage: {
      value: cdktf.numberToHclTerraform(struct!.rolloutPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppConfigurationFeatureTargetingFilterGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppConfigurationFeatureTargetingFilterGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rolloutPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolloutPercentage = this._rolloutPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppConfigurationFeatureTargetingFilterGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._rolloutPercentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._rolloutPercentage = value.rolloutPercentage;
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

  // rollout_percentage - computed: false, optional: false, required: true
  private _rolloutPercentage?: number; 
  public get rolloutPercentage() {
    return this.getNumberAttribute('rollout_percentage');
  }
  public set rolloutPercentage(value: number) {
    this._rolloutPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutPercentageInput() {
    return this._rolloutPercentage;
  }
}

export class AppConfigurationFeatureTargetingFilterGroupsList extends cdktf.ComplexList {
  public internalValue? : AppConfigurationFeatureTargetingFilterGroups[] | cdktf.IResolvable

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
  public get(index: number): AppConfigurationFeatureTargetingFilterGroupsOutputReference {
    return new AppConfigurationFeatureTargetingFilterGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppConfigurationFeatureTargetingFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#default_rollout_percentage AppConfigurationFeature#default_rollout_percentage}
  */
  readonly defaultRolloutPercentage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#users AppConfigurationFeature#users}
  */
  readonly users?: string[];
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#groups AppConfigurationFeature#groups}
  */
  readonly groups?: AppConfigurationFeatureTargetingFilterGroups[] | cdktf.IResolvable;
}

export function appConfigurationFeatureTargetingFilterToTerraform(struct?: AppConfigurationFeatureTargetingFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_rollout_percentage: cdktf.numberToTerraform(struct!.defaultRolloutPercentage),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
    groups: cdktf.listMapper(appConfigurationFeatureTargetingFilterGroupsToTerraform, true)(struct!.groups),
  }
}


export function appConfigurationFeatureTargetingFilterToHclTerraform(struct?: AppConfigurationFeatureTargetingFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_rollout_percentage: {
      value: cdktf.numberToHclTerraform(struct!.defaultRolloutPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    groups: {
      value: cdktf.listMapperHcl(appConfigurationFeatureTargetingFilterGroupsToHclTerraform, true)(struct!.groups),
      isBlock: true,
      type: "list",
      storageClassType: "AppConfigurationFeatureTargetingFilterGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppConfigurationFeatureTargetingFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppConfigurationFeatureTargetingFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultRolloutPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRolloutPercentage = this._defaultRolloutPercentage;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    if (this._groups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppConfigurationFeatureTargetingFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultRolloutPercentage = undefined;
      this._users = undefined;
      this._groups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultRolloutPercentage = value.defaultRolloutPercentage;
      this._users = value.users;
      this._groups.internalValue = value.groups;
    }
  }

  // default_rollout_percentage - computed: false, optional: false, required: true
  private _defaultRolloutPercentage?: number; 
  public get defaultRolloutPercentage() {
    return this.getNumberAttribute('default_rollout_percentage');
  }
  public set defaultRolloutPercentage(value: number) {
    this._defaultRolloutPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRolloutPercentageInput() {
    return this._defaultRolloutPercentage;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new AppConfigurationFeatureTargetingFilterGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: AppConfigurationFeatureTargetingFilterGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }
}

export class AppConfigurationFeatureTargetingFilterList extends cdktf.ComplexList {
  public internalValue? : AppConfigurationFeatureTargetingFilter[] | cdktf.IResolvable

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
  public get(index: number): AppConfigurationFeatureTargetingFilterOutputReference {
    return new AppConfigurationFeatureTargetingFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppConfigurationFeatureTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#create AppConfigurationFeature#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#delete AppConfigurationFeature#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#read AppConfigurationFeature#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#update AppConfigurationFeature#update}
  */
  readonly update?: string;
}

export function appConfigurationFeatureTimeoutsToTerraform(struct?: AppConfigurationFeatureTimeouts | cdktf.IResolvable): any {
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


export function appConfigurationFeatureTimeoutsToHclTerraform(struct?: AppConfigurationFeatureTimeouts | cdktf.IResolvable): any {
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

export class AppConfigurationFeatureTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppConfigurationFeatureTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppConfigurationFeatureTimeouts | cdktf.IResolvable | undefined) {
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
export interface AppConfigurationFeatureTimewindowFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#end AppConfigurationFeature#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#start AppConfigurationFeature#start}
  */
  readonly start?: string;
}

export function appConfigurationFeatureTimewindowFilterToTerraform(struct?: AppConfigurationFeatureTimewindowFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function appConfigurationFeatureTimewindowFilterToHclTerraform(struct?: AppConfigurationFeatureTimewindowFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppConfigurationFeatureTimewindowFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppConfigurationFeatureTimewindowFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppConfigurationFeatureTimewindowFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class AppConfigurationFeatureTimewindowFilterList extends cdktf.ComplexList {
  public internalValue? : AppConfigurationFeatureTimewindowFilter[] | cdktf.IResolvable

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
  public get(index: number): AppConfigurationFeatureTimewindowFilterOutputReference {
    return new AppConfigurationFeatureTimewindowFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature azurerm_app_configuration_feature}
*/
export class AppConfigurationFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_app_configuration_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppConfigurationFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppConfigurationFeature to import
  * @param importFromId The id of the existing AppConfigurationFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppConfigurationFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_app_configuration_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/app_configuration_feature azurerm_app_configuration_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppConfigurationFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: AppConfigurationFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_configuration_feature',
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
    this._configurationStoreId = config.configurationStoreId;
    this._description = config.description;
    this._enabled = config.enabled;
    this._etag = config.etag;
    this._id = config.id;
    this._key = config.key;
    this._label = config.label;
    this._locked = config.locked;
    this._name = config.name;
    this._percentageFilterValue = config.percentageFilterValue;
    this._tags = config.tags;
    this._targetingFilter.internalValue = config.targetingFilter;
    this._timeouts.internalValue = config.timeouts;
    this._timewindowFilter.internalValue = config.timewindowFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_store_id - computed: false, optional: false, required: true
  private _configurationStoreId?: string; 
  public get configurationStoreId() {
    return this.getStringAttribute('configuration_store_id');
  }
  public set configurationStoreId(value: string) {
    this._configurationStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationStoreIdInput() {
    return this._configurationStoreId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // etag - computed: true, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // locked - computed: false, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
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

  // percentage_filter_value - computed: false, optional: true, required: false
  private _percentageFilterValue?: number; 
  public get percentageFilterValue() {
    return this.getNumberAttribute('percentage_filter_value');
  }
  public set percentageFilterValue(value: number) {
    this._percentageFilterValue = value;
  }
  public resetPercentageFilterValue() {
    this._percentageFilterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageFilterValueInput() {
    return this._percentageFilterValue;
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

  // targeting_filter - computed: false, optional: true, required: false
  private _targetingFilter = new AppConfigurationFeatureTargetingFilterList(this, "targeting_filter", false);
  public get targetingFilter() {
    return this._targetingFilter;
  }
  public putTargetingFilter(value: AppConfigurationFeatureTargetingFilter[] | cdktf.IResolvable) {
    this._targetingFilter.internalValue = value;
  }
  public resetTargetingFilter() {
    this._targetingFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetingFilterInput() {
    return this._targetingFilter.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AppConfigurationFeatureTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppConfigurationFeatureTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // timewindow_filter - computed: false, optional: true, required: false
  private _timewindowFilter = new AppConfigurationFeatureTimewindowFilterList(this, "timewindow_filter", false);
  public get timewindowFilter() {
    return this._timewindowFilter;
  }
  public putTimewindowFilter(value: AppConfigurationFeatureTimewindowFilter[] | cdktf.IResolvable) {
    this._timewindowFilter.internalValue = value;
  }
  public resetTimewindowFilter() {
    this._timewindowFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timewindowFilterInput() {
    return this._timewindowFilter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration_store_id: cdktf.stringToTerraform(this._configurationStoreId),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      etag: cdktf.stringToTerraform(this._etag),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      label: cdktf.stringToTerraform(this._label),
      locked: cdktf.booleanToTerraform(this._locked),
      name: cdktf.stringToTerraform(this._name),
      percentage_filter_value: cdktf.numberToTerraform(this._percentageFilterValue),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      targeting_filter: cdktf.listMapper(appConfigurationFeatureTargetingFilterToTerraform, true)(this._targetingFilter.internalValue),
      timeouts: appConfigurationFeatureTimeoutsToTerraform(this._timeouts.internalValue),
      timewindow_filter: cdktf.listMapper(appConfigurationFeatureTimewindowFilterToTerraform, true)(this._timewindowFilter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration_store_id: {
        value: cdktf.stringToHclTerraform(this._configurationStoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      etag: {
        value: cdktf.stringToHclTerraform(this._etag),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locked: {
        value: cdktf.booleanToHclTerraform(this._locked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      percentage_filter_value: {
        value: cdktf.numberToHclTerraform(this._percentageFilterValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      targeting_filter: {
        value: cdktf.listMapperHcl(appConfigurationFeatureTargetingFilterToHclTerraform, true)(this._targetingFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppConfigurationFeatureTargetingFilterList",
      },
      timeouts: {
        value: appConfigurationFeatureTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppConfigurationFeatureTimeouts",
      },
      timewindow_filter: {
        value: cdktf.listMapperHcl(appConfigurationFeatureTimewindowFilterToHclTerraform, true)(this._timewindowFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppConfigurationFeatureTimewindowFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
