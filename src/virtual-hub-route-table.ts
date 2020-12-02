// https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VirtualHubRouteTableConfig extends TerraformMetaArguments {
  readonly labels?: string[];
  readonly name: string;
  readonly virtualHubId: string;
  /** route block */
  readonly route?: VirtualHubRouteTableRoute[];
  /** timeouts block */
  readonly timeouts?: VirtualHubRouteTableTimeouts;
}
export interface VirtualHubRouteTableRoute {
  readonly destinations: string[];
  readonly destinationsType: string;
  readonly name: string;
  readonly nextHop: string;
  readonly nextHopType?: string;
}
export interface VirtualHubRouteTableTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class VirtualHubRouteTable extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VirtualHubRouteTableConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_hub_route_table',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._labels = config.labels;
    this._name = config.name;
    this._virtualHubId = config.virtualHubId;
    this._route = config.route;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[];
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[] ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
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

  // virtual_hub_id - computed: false, optional: false, required: true
  private _virtualHubId: string;
  public get virtualHubId() {
    return this.getStringAttribute('virtual_hub_id');
  }
  public set virtualHubId(value: string) {
    this._virtualHubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHubIdInput() {
    return this._virtualHubId
  }

  // route - computed: false, optional: true, required: false
  private _route?: VirtualHubRouteTableRoute[];
  public get route() {
    return this.interpolationForAttribute('route') as any;
  }
  public set route(value: VirtualHubRouteTableRoute[] ) {
    this._route = value;
  }
  public resetRoute() {
    this._route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualHubRouteTableTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VirtualHubRouteTableTimeouts ) {
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
      labels: this._labels,
      name: this._name,
      virtual_hub_id: this._virtualHubId,
      route: this._route,
      timeouts: this._timeouts,
    };
  }
}
