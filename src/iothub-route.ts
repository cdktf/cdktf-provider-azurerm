// https://www.terraform.io/docs/providers/azurerm/r/iothub_route_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IothubRouteAConfig extends cdktf.TerraformMetaArguments {
  readonly condition?: string;
  readonly enabled: boolean;
  readonly endpointNames: string[];
  readonly iothubName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly source: string;
  /** timeouts block */
  readonly timeouts?: IothubRouteTimeouts;
}
export interface IothubRouteTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function iothubRouteTimeoutsToTerraform(struct?: IothubRouteTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class IothubRouteA extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IothubRouteAConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iothub_route',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._condition = config.condition;
    this._enabled = config.enabled;
    this._endpointNames = config.endpointNames;
    this._iothubName = config.iothubName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._source = config.source;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // condition - computed: false, optional: true, required: false
  private _condition?: string;
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string ) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // endpoint_names - computed: false, optional: false, required: true
  private _endpointNames: string[];
  public get endpointNames() {
    return this.getListAttribute('endpoint_names');
  }
  public set endpointNames(value: string[]) {
    this._endpointNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNamesInput() {
    return this._endpointNames
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iothub_name - computed: false, optional: false, required: true
  private _iothubName: string;
  public get iothubName() {
    return this.getStringAttribute('iothub_name');
  }
  public set iothubName(value: string) {
    this._iothubName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iothubNameInput() {
    return this._iothubName
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

  // source - computed: false, optional: false, required: true
  private _source: string;
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IothubRouteTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: IothubRouteTimeouts ) {
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
      condition: cdktf.stringToTerraform(this._condition),
      enabled: cdktf.booleanToTerraform(this._enabled),
      endpoint_names: cdktf.listMapper(cdktf.stringToTerraform)(this._endpointNames),
      iothub_name: cdktf.stringToTerraform(this._iothubName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      source: cdktf.stringToTerraform(this._source),
      timeouts: iothubRouteTimeoutsToTerraform(this._timeouts),
    };
  }
}
