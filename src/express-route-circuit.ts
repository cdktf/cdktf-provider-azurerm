// https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ExpressRouteCircuitConfig extends TerraformMetaArguments {
  readonly allowClassicOperations?: boolean;
  readonly bandwidthInMbps: number;
  readonly location: string;
  readonly name: string;
  readonly peeringLocation: string;
  readonly resourceGroupName: string;
  readonly serviceProviderName: string;
  readonly tags?: { [key: string]: string };
  /** sku block */
  readonly sku: ExpressRouteCircuitSku[];
  /** timeouts block */
  readonly timeouts?: ExpressRouteCircuitTimeouts;
}
export interface ExpressRouteCircuitSku {
  readonly family: string;
  readonly tier: string;
}
export interface ExpressRouteCircuitTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ExpressRouteCircuit extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ExpressRouteCircuitConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_express_route_circuit',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowClassicOperations = config.allowClassicOperations;
    this._bandwidthInMbps = config.bandwidthInMbps;
    this._location = config.location;
    this._name = config.name;
    this._peeringLocation = config.peeringLocation;
    this._resourceGroupName = config.resourceGroupName;
    this._serviceProviderName = config.serviceProviderName;
    this._tags = config.tags;
    this._sku = config.sku;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_classic_operations - computed: false, optional: true, required: false
  private _allowClassicOperations?: boolean;
  public get allowClassicOperations() {
    return this._allowClassicOperations;
  }
  public set allowClassicOperations(value: boolean | undefined) {
    this._allowClassicOperations = value;
  }

  // bandwidth_in_mbps - computed: false, optional: false, required: true
  private _bandwidthInMbps: number;
  public get bandwidthInMbps() {
    return this._bandwidthInMbps;
  }
  public set bandwidthInMbps(value: number) {
    this._bandwidthInMbps = value;
  }

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

  // peering_location - computed: false, optional: false, required: true
  private _peeringLocation: string;
  public get peeringLocation() {
    return this._peeringLocation;
  }
  public set peeringLocation(value: string) {
    this._peeringLocation = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // service_key - computed: true, optional: false, required: true
  public get serviceKey() {
    return this.getStringAttribute('service_key');
  }

  // service_provider_name - computed: false, optional: false, required: true
  private _serviceProviderName: string;
  public get serviceProviderName() {
    return this._serviceProviderName;
  }
  public set serviceProviderName(value: string) {
    this._serviceProviderName = value;
  }

  // service_provider_provisioning_state - computed: true, optional: false, required: true
  public get serviceProviderProvisioningState() {
    return this.getStringAttribute('service_provider_provisioning_state');
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
  private _sku: ExpressRouteCircuitSku[];
  public get sku() {
    return this._sku;
  }
  public set sku(value: ExpressRouteCircuitSku[]) {
    this._sku = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ExpressRouteCircuitTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ExpressRouteCircuitTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_classic_operations: this._allowClassicOperations,
      bandwidth_in_mbps: this._bandwidthInMbps,
      location: this._location,
      name: this._name,
      peering_location: this._peeringLocation,
      resource_group_name: this._resourceGroupName,
      service_provider_name: this._serviceProviderName,
      tags: this._tags,
      sku: this._sku,
      timeouts: this._timeouts,
    };
  }
}
