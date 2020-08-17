// https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_authorization.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ExpressRouteCircuitAuthorizationConfig extends TerraformMetaArguments {
  readonly expressRouteCircuitName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: ExpressRouteCircuitAuthorizationTimeouts;
}
export interface ExpressRouteCircuitAuthorizationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ExpressRouteCircuitAuthorization extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ExpressRouteCircuitAuthorizationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_express_route_circuit_authorization',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._expressRouteCircuitName = config.expressRouteCircuitName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_key - computed: true, optional: false, required: true
  public get authorizationKey() {
    return this.getStringAttribute('authorization_key');
  }

  // authorization_use_status - computed: true, optional: false, required: true
  public get authorizationUseStatus() {
    return this.getStringAttribute('authorization_use_status');
  }

  // express_route_circuit_name - computed: false, optional: false, required: true
  private _expressRouteCircuitName: string;
  public get expressRouteCircuitName() {
    return this._expressRouteCircuitName;
  }
  public set expressRouteCircuitName(value: string) {
    this._expressRouteCircuitName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ExpressRouteCircuitAuthorizationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ExpressRouteCircuitAuthorizationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      express_route_circuit_name: this._expressRouteCircuitName,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
