// https://www.terraform.io/docs/providers/azurerm/r/express_route_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ExpressRouteGatewayConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly scaleUnits: number;
  readonly tags?: { [key: string]: string };
  readonly virtualHubId: string;
  /** timeouts block */
  readonly timeouts?: ExpressRouteGatewayTimeouts;
}
export interface ExpressRouteGatewayTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ExpressRouteGateway extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ExpressRouteGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_express_route_gateway',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._scaleUnits = config.scaleUnits;
    this._tags = config.tags;
    this._virtualHubId = config.virtualHubId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
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

  // scale_units - computed: false, optional: false, required: true
  private _scaleUnits: number;
  public get scaleUnits() {
    return this._scaleUnits;
  }
  public set scaleUnits(value: number) {
    this._scaleUnits = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // virtual_hub_id - computed: false, optional: false, required: true
  private _virtualHubId: string;
  public get virtualHubId() {
    return this._virtualHubId;
  }
  public set virtualHubId(value: string) {
    this._virtualHubId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ExpressRouteGatewayTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ExpressRouteGatewayTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      scale_units: this._scaleUnits,
      tags: this._tags,
      virtual_hub_id: this._virtualHubId,
      timeouts: this._timeouts,
    };
  }
}
