// https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_access_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotTimeSeriesInsightsAccessPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly name: string;
  readonly principalObjectId: string;
  readonly roles: string[];
  readonly timeSeriesInsightsEnvironmentId: string;
  /** timeouts block */
  readonly timeouts?: IotTimeSeriesInsightsAccessPolicyTimeouts;
}
export interface IotTimeSeriesInsightsAccessPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function iotTimeSeriesInsightsAccessPolicyTimeoutsToTerraform(struct?: IotTimeSeriesInsightsAccessPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class IotTimeSeriesInsightsAccessPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IotTimeSeriesInsightsAccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iot_time_series_insights_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._principalObjectId = config.principalObjectId;
    this._roles = config.roles;
    this._timeSeriesInsightsEnvironmentId = config.timeSeriesInsightsEnvironmentId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // principal_object_id - computed: false, optional: false, required: true
  private _principalObjectId: string;
  public get principalObjectId() {
    return this.getStringAttribute('principal_object_id');
  }
  public set principalObjectId(value: string) {
    this._principalObjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalObjectIdInput() {
    return this._principalObjectId
  }

  // roles - computed: false, optional: false, required: true
  private _roles: string[];
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles
  }

  // time_series_insights_environment_id - computed: false, optional: false, required: true
  private _timeSeriesInsightsEnvironmentId: string;
  public get timeSeriesInsightsEnvironmentId() {
    return this.getStringAttribute('time_series_insights_environment_id');
  }
  public set timeSeriesInsightsEnvironmentId(value: string) {
    this._timeSeriesInsightsEnvironmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSeriesInsightsEnvironmentIdInput() {
    return this._timeSeriesInsightsEnvironmentId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IotTimeSeriesInsightsAccessPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: IotTimeSeriesInsightsAccessPolicyTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      principal_object_id: cdktf.stringToTerraform(this._principalObjectId),
      roles: cdktf.listMapper(cdktf.stringToTerraform)(this._roles),
      time_series_insights_environment_id: cdktf.stringToTerraform(this._timeSeriesInsightsEnvironmentId),
      timeouts: iotTimeSeriesInsightsAccessPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
