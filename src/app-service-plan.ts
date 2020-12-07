// https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppServicePlanConfig extends cdktf.TerraformMetaArguments {
  readonly appServiceEnvironmentId?: string;
  readonly isXenon?: boolean;
  readonly kind?: string;
  readonly location: string;
  readonly maximumElasticWorkerCount?: number;
  readonly name: string;
  readonly perSiteScaling?: boolean;
  readonly reserved?: boolean;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** sku block */
  readonly sku: AppServicePlanSku[];
  /** timeouts block */
  readonly timeouts?: AppServicePlanTimeouts;
}
export interface AppServicePlanSku {
  readonly capacity?: number;
  readonly size: string;
  readonly tier: string;
}

function appServicePlanSkuToTerraform(struct?: AppServicePlanSku): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    size: cdktf.stringToTerraform(struct!.size),
    tier: cdktf.stringToTerraform(struct!.tier),
  }
}

export interface AppServicePlanTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function appServicePlanTimeoutsToTerraform(struct?: AppServicePlanTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class AppServicePlan extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppServicePlanConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service_plan',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appServiceEnvironmentId = config.appServiceEnvironmentId;
    this._isXenon = config.isXenon;
    this._kind = config.kind;
    this._location = config.location;
    this._maximumElasticWorkerCount = config.maximumElasticWorkerCount;
    this._name = config.name;
    this._perSiteScaling = config.perSiteScaling;
    this._reserved = config.reserved;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._sku = config.sku;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_environment_id - computed: false, optional: true, required: false
  private _appServiceEnvironmentId?: string;
  public get appServiceEnvironmentId() {
    return this.getStringAttribute('app_service_environment_id');
  }
  public set appServiceEnvironmentId(value: string ) {
    this._appServiceEnvironmentId = value;
  }
  public resetAppServiceEnvironmentId() {
    this._appServiceEnvironmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceEnvironmentIdInput() {
    return this._appServiceEnvironmentId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_xenon - computed: false, optional: true, required: false
  private _isXenon?: boolean;
  public get isXenon() {
    return this.getBooleanAttribute('is_xenon');
  }
  public set isXenon(value: boolean ) {
    this._isXenon = value;
  }
  public resetIsXenon() {
    this._isXenon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isXenonInput() {
    return this._isXenon
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string;
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string ) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
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

  // maximum_elastic_worker_count - computed: true, optional: true, required: false
  private _maximumElasticWorkerCount?: number;
  public get maximumElasticWorkerCount() {
    return this.getNumberAttribute('maximum_elastic_worker_count');
  }
  public set maximumElasticWorkerCount(value: number) {
    this._maximumElasticWorkerCount = value;
  }
  public resetMaximumElasticWorkerCount() {
    this._maximumElasticWorkerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumElasticWorkerCountInput() {
    return this._maximumElasticWorkerCount
  }

  // maximum_number_of_workers - computed: true, optional: false, required: false
  public get maximumNumberOfWorkers() {
    return this.getNumberAttribute('maximum_number_of_workers');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
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

  // per_site_scaling - computed: false, optional: true, required: false
  private _perSiteScaling?: boolean;
  public get perSiteScaling() {
    return this.getBooleanAttribute('per_site_scaling');
  }
  public set perSiteScaling(value: boolean ) {
    this._perSiteScaling = value;
  }
  public resetPerSiteScaling() {
    this._perSiteScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSiteScalingInput() {
    return this._perSiteScaling
  }

  // reserved - computed: false, optional: true, required: false
  private _reserved?: boolean;
  public get reserved() {
    return this.getBooleanAttribute('reserved');
  }
  public set reserved(value: boolean ) {
    this._reserved = value;
  }
  public resetReserved() {
    this._reserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedInput() {
    return this._reserved
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // sku - computed: false, optional: false, required: true
  private _sku: AppServicePlanSku[];
  public get sku() {
    return this.interpolationForAttribute('sku') as any;
  }
  public set sku(value: AppServicePlanSku[]) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppServicePlanTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AppServicePlanTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_service_environment_id: cdktf.stringToTerraform(this._appServiceEnvironmentId),
      is_xenon: cdktf.booleanToTerraform(this._isXenon),
      kind: cdktf.stringToTerraform(this._kind),
      location: cdktf.stringToTerraform(this._location),
      maximum_elastic_worker_count: cdktf.numberToTerraform(this._maximumElasticWorkerCount),
      name: cdktf.stringToTerraform(this._name),
      per_site_scaling: cdktf.booleanToTerraform(this._perSiteScaling),
      reserved: cdktf.booleanToTerraform(this._reserved),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      sku: cdktf.listMapper(appServicePlanSkuToTerraform)(this._sku),
      timeouts: appServicePlanTimeoutsToTerraform(this._timeouts),
    };
  }
}
