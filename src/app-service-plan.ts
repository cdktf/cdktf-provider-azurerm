// https://www.terraform.io/docs/providers/azurerm/r/app_service_plan.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AppServicePlanConfig extends TerraformMetaArguments {
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
export interface AppServicePlanTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class AppServicePlan extends TerraformResource {

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
    return this._appServiceEnvironmentId;
  }
  public set appServiceEnvironmentId(value: string | undefined) {
    this._appServiceEnvironmentId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_xenon - computed: false, optional: true, required: false
  private _isXenon?: boolean;
  public get isXenon() {
    return this._isXenon;
  }
  public set isXenon(value: boolean | undefined) {
    this._isXenon = value;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string;
  public get kind() {
    return this._kind;
  }
  public set kind(value: string | undefined) {
    this._kind = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // maximum_elastic_worker_count - computed: true, optional: true, required: false
  private _maximumElasticWorkerCount?: number;
  public get maximumElasticWorkerCount() {
    return this._maximumElasticWorkerCount ?? this.getNumberAttribute('maximum_elastic_worker_count');
  }
  public set maximumElasticWorkerCount(value: number | undefined) {
    this._maximumElasticWorkerCount = value;
  }

  // maximum_number_of_workers - computed: true, optional: false, required: true
  public get maximumNumberOfWorkers() {
    return this.getNumberAttribute('maximum_number_of_workers');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // per_site_scaling - computed: false, optional: true, required: false
  private _perSiteScaling?: boolean;
  public get perSiteScaling() {
    return this._perSiteScaling;
  }
  public set perSiteScaling(value: boolean | undefined) {
    this._perSiteScaling = value;
  }

  // reserved - computed: false, optional: true, required: false
  private _reserved?: boolean;
  public get reserved() {
    return this._reserved;
  }
  public set reserved(value: boolean | undefined) {
    this._reserved = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // sku - computed: false, optional: false, required: true
  private _sku: AppServicePlanSku[];
  public get sku() {
    return this._sku;
  }
  public set sku(value: AppServicePlanSku[]) {
    this._sku = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppServicePlanTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AppServicePlanTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_service_environment_id: this._appServiceEnvironmentId,
      is_xenon: this._isXenon,
      kind: this._kind,
      location: this._location,
      maximum_elastic_worker_count: this._maximumElasticWorkerCount,
      name: this._name,
      per_site_scaling: this._perSiteScaling,
      reserved: this._reserved,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      sku: this._sku,
      timeouts: this._timeouts,
    };
  }
}
