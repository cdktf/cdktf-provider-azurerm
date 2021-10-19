// https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppConfigurationFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html#configuration_store_id AppConfigurationFeature#configuration_store_id}
  */
  readonly configurationStoreId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html#description AppConfigurationFeature#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html#enabled AppConfigurationFeature#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html#etag AppConfigurationFeature#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html#label AppConfigurationFeature#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html#locked AppConfigurationFeature#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html#name AppConfigurationFeature#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html#percentage_filter_value AppConfigurationFeature#percentage_filter_value}
  */
  readonly percentageFilterValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html#tags AppConfigurationFeature#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * targeting_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html#targeting_filter AppConfigurationFeature#targeting_filter}
  */
  readonly targetingFilter?: AppConfigurationFeatureTargetingFilter[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html#timeouts AppConfigurationFeature#timeouts}
  */
  readonly timeouts?: AppConfigurationFeatureTimeouts;
  /**
  * timewindow_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html#timewindow_filter AppConfigurationFeature#timewindow_filter}
  */
  readonly timewindowFilter?: AppConfigurationFeatureTimewindowFilter[];
}
export interface AppConfigurationFeatureTargetingFilterGroups {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html#name AppConfigurationFeature#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html#rollout_percentage AppConfigurationFeature#rollout_percentage}
  */
  readonly rolloutPercentage: number;
}

function appConfigurationFeatureTargetingFilterGroupsToTerraform(struct?: AppConfigurationFeatureTargetingFilterGroups): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    rollout_percentage: cdktf.numberToTerraform(struct!.rolloutPercentage),
  }
}

export interface AppConfigurationFeatureTargetingFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html#default_rollout_percentage AppConfigurationFeature#default_rollout_percentage}
  */
  readonly defaultRolloutPercentage: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html#users AppConfigurationFeature#users}
  */
  readonly users?: string[];
  /**
  * groups block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html#groups AppConfigurationFeature#groups}
  */
  readonly groups?: AppConfigurationFeatureTargetingFilterGroups[];
}

function appConfigurationFeatureTargetingFilterToTerraform(struct?: AppConfigurationFeatureTargetingFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_rollout_percentage: cdktf.numberToTerraform(struct!.defaultRolloutPercentage),
    users: cdktf.listMapper(cdktf.stringToTerraform)(struct!.users),
    groups: cdktf.listMapper(appConfigurationFeatureTargetingFilterGroupsToTerraform)(struct!.groups),
  }
}

export interface AppConfigurationFeatureTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html#create AppConfigurationFeature#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html#delete AppConfigurationFeature#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html#read AppConfigurationFeature#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html#update AppConfigurationFeature#update}
  */
  readonly update?: string;
}

function appConfigurationFeatureTimeoutsToTerraform(struct?: AppConfigurationFeatureTimeoutsOutputReference | AppConfigurationFeatureTimeouts): any {
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

export class AppConfigurationFeatureTimeoutsOutputReference extends cdktf.ComplexObject {
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
export interface AppConfigurationFeatureTimewindowFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html#end AppConfigurationFeature#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html#start AppConfigurationFeature#start}
  */
  readonly start?: string;
}

function appConfigurationFeatureTimewindowFilterToTerraform(struct?: AppConfigurationFeatureTimewindowFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html azurerm_app_configuration_feature}
*/
export class AppConfigurationFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_app_configuration_feature";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/app_configuration_feature.html azurerm_app_configuration_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppConfigurationFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: AppConfigurationFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_configuration_feature',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._configurationStoreId = config.configurationStoreId;
    this._description = config.description;
    this._enabled = config.enabled;
    this._etag = config.etag;
    this._label = config.label;
    this._locked = config.locked;
    this._name = config.name;
    this._percentageFilterValue = config.percentageFilterValue;
    this._tags = config.tags;
    this._targetingFilter = config.targetingFilter;
    this._timeouts = config.timeouts;
    this._timewindowFilter = config.timewindowFilter;
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
    return this._configurationStoreId
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // etag - computed: true, optional: true, required: false
  private _etag?: string | undefined; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string | undefined) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: false, optional: true, required: false
  private _label?: string | undefined; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string | undefined) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label
  }

  // locked - computed: false, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable | undefined; 
  public get locked() {
    return this.getBooleanAttribute('locked') as any;
  }
  public set locked(value: boolean | cdktf.IResolvable | undefined) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked
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

  // percentage_filter_value - computed: false, optional: true, required: false
  private _percentageFilterValue?: number | undefined; 
  public get percentageFilterValue() {
    return this.getNumberAttribute('percentage_filter_value');
  }
  public set percentageFilterValue(value: number | undefined) {
    this._percentageFilterValue = value;
  }
  public resetPercentageFilterValue() {
    this._percentageFilterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageFilterValueInput() {
    return this._percentageFilterValue
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

  // targeting_filter - computed: false, optional: true, required: false
  private _targetingFilter?: AppConfigurationFeatureTargetingFilter[] | undefined; 
  public get targetingFilter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('targeting_filter') as any;
  }
  public set targetingFilter(value: AppConfigurationFeatureTargetingFilter[] | undefined) {
    this._targetingFilter = value;
  }
  public resetTargetingFilter() {
    this._targetingFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetingFilterInput() {
    return this._targetingFilter
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppConfigurationFeatureTimeouts | undefined; 
  private __timeoutsOutput = new AppConfigurationFeatureTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: AppConfigurationFeatureTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // timewindow_filter - computed: false, optional: true, required: false
  private _timewindowFilter?: AppConfigurationFeatureTimewindowFilter[] | undefined; 
  public get timewindowFilter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('timewindow_filter') as any;
  }
  public set timewindowFilter(value: AppConfigurationFeatureTimewindowFilter[] | undefined) {
    this._timewindowFilter = value;
  }
  public resetTimewindowFilter() {
    this._timewindowFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timewindowFilterInput() {
    return this._timewindowFilter
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
      label: cdktf.stringToTerraform(this._label),
      locked: cdktf.booleanToTerraform(this._locked),
      name: cdktf.stringToTerraform(this._name),
      percentage_filter_value: cdktf.numberToTerraform(this._percentageFilterValue),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      targeting_filter: cdktf.listMapper(appConfigurationFeatureTargetingFilterToTerraform)(this._targetingFilter),
      timeouts: appConfigurationFeatureTimeoutsToTerraform(this._timeouts),
      timewindow_filter: cdktf.listMapper(appConfigurationFeatureTimewindowFilterToTerraform)(this._timewindowFilter),
    };
  }
}
