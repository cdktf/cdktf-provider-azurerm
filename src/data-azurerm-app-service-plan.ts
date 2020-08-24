// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_app_service_plan.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermAppServicePlanConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermAppServicePlanTimeouts;
}
export class DataAzurermAppServicePlanSku extends ComplexComputedList {

  // capacity - computed: true, optional: false, required: true
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }

  // size - computed: true, optional: false, required: true
  public get size() {
    return this.getStringAttribute('size');
  }

  // tier - computed: true, optional: false, required: true
  public get tier() {
    return this.getStringAttribute('tier');
  }
}
export interface DataAzurermAppServicePlanTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermAppServicePlan extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermAppServicePlanConfig) {
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
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_environment_id - computed: true, optional: false, required: true
  public get appServiceEnvironmentId() {
    return this.getStringAttribute('app_service_environment_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_xenon - computed: true, optional: false, required: true
  public get isXenon() {
    return this.getBooleanAttribute('is_xenon');
  }

  // kind - computed: true, optional: false, required: true
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // maximum_elastic_worker_count - computed: true, optional: false, required: true
  public get maximumElasticWorkerCount() {
    return this.getNumberAttribute('maximum_elastic_worker_count');
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

  // per_site_scaling - computed: true, optional: false, required: true
  public get perSiteScaling() {
    return this.getBooleanAttribute('per_site_scaling');
  }

  // reserved - computed: true, optional: false, required: true
  public get reserved() {
    return this.getBooleanAttribute('reserved');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // sku - computed: true, optional: false, required: true
  public sku(index: string) {
    return new DataAzurermAppServicePlanSku(this, 'sku', index);
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermAppServicePlanTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermAppServicePlanTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
