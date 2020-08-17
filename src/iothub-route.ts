// https://www.terraform.io/docs/providers/azurerm/r/iothub_route_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IothubRouteAConfig extends TerraformMetaArguments {
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

// Resource

export class IothubRouteA extends TerraformResource {

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
    return this._condition;
  }
  public set condition(value: string | undefined) {
    this._condition = value;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean) {
    this._enabled = value;
  }

  // endpoint_names - computed: false, optional: false, required: true
  private _endpointNames: string[];
  public get endpointNames() {
    return this._endpointNames;
  }
  public set endpointNames(value: string[]) {
    this._endpointNames = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // iothub_name - computed: false, optional: false, required: true
  private _iothubName: string;
  public get iothubName() {
    return this._iothubName;
  }
  public set iothubName(value: string) {
    this._iothubName = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // source - computed: false, optional: false, required: true
  private _source: string;
  public get source() {
    return this._source;
  }
  public set source(value: string) {
    this._source = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IothubRouteTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IothubRouteTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      condition: this._condition,
      enabled: this._enabled,
      endpoint_names: this._endpointNames,
      iothub_name: this._iothubName,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      source: this._source,
      timeouts: this._timeouts,
    };
  }
}
