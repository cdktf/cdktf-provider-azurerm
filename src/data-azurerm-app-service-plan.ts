// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_app_service_plan.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermAppServicePlanConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermAppServicePlanTimeouts;
}
export class DataAzurermAppServicePlanSku extends cdktf.ComplexComputedList {

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
  }

  // tier - computed: true, optional: false, required: false
  public get tier() {
    return this.getStringAttribute('tier');
  }
}
export interface DataAzurermAppServicePlanTimeouts {
  readonly read?: string;
}

function dataAzurermAppServicePlanTimeoutsToTerraform(struct?: DataAzurermAppServicePlanTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermAppServicePlan extends cdktf.TerraformDataSource {

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

  // app_service_environment_id - computed: true, optional: false, required: false
  public get appServiceEnvironmentId() {
    return this.getStringAttribute('app_service_environment_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_xenon - computed: true, optional: false, required: false
  public get isXenon() {
    return this.getBooleanAttribute('is_xenon');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // maximum_elastic_worker_count - computed: true, optional: false, required: false
  public get maximumElasticWorkerCount() {
    return this.getNumberAttribute('maximum_elastic_worker_count');
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

  // per_site_scaling - computed: true, optional: false, required: false
  public get perSiteScaling() {
    return this.getBooleanAttribute('per_site_scaling');
  }

  // reserved - computed: true, optional: false, required: false
  public get reserved() {
    return this.getBooleanAttribute('reserved');
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

  // sku - computed: true, optional: false, required: false
  public sku(index: string) {
    return new DataAzurermAppServicePlanSku(this, 'sku', index);
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermAppServicePlanTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermAppServicePlanTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermAppServicePlanTimeoutsToTerraform(this._timeouts),
    };
  }
}
