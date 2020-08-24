// https://www.terraform.io/docs/providers/azurerm/r/iothub_fallback_route_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IothubFallbackRouteAConfig extends TerraformMetaArguments {
  readonly condition?: string;
  readonly enabled: boolean;
  readonly endpointNames: string[];
  readonly iothubName: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: IothubFallbackRouteTimeouts;
}
export interface IothubFallbackRouteTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class IothubFallbackRouteA extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IothubFallbackRouteAConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iothub_fallback_route',
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
    this._resourceGroupName = config.resourceGroupName;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IothubFallbackRouteTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IothubFallbackRouteTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      condition: this._condition,
      enabled: this._enabled,
      endpoint_names: this._endpointNames,
      iothub_name: this._iothubName,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
