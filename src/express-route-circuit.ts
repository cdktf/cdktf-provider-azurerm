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
    return this.getBooleanAttribute('allow_classic_operations');
  }
  public set allowClassicOperations(value: boolean ) {
    this._allowClassicOperations = value;
  }
  public resetAllowClassicOperations() {
    this._allowClassicOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowClassicOperationsInput() {
    return this._allowClassicOperations
  }

  // bandwidth_in_mbps - computed: false, optional: false, required: true
  private _bandwidthInMbps: number;
  public get bandwidthInMbps() {
    return this.getNumberAttribute('bandwidth_in_mbps');
  }
  public set bandwidthInMbps(value: number) {
    this._bandwidthInMbps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInMbpsInput() {
    return this._bandwidthInMbps
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // peering_location - computed: false, optional: false, required: true
  private _peeringLocation: string;
  public get peeringLocation() {
    return this.getStringAttribute('peering_location');
  }
  public set peeringLocation(value: string) {
    this._peeringLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringLocationInput() {
    return this._peeringLocation
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

  // service_key - computed: true, optional: false, required: false
  public get serviceKey() {
    return this.getStringAttribute('service_key');
  }

  // service_provider_name - computed: false, optional: false, required: true
  private _serviceProviderName: string;
  public get serviceProviderName() {
    return this.getStringAttribute('service_provider_name');
  }
  public set serviceProviderName(value: string) {
    this._serviceProviderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderNameInput() {
    return this._serviceProviderName
  }

  // service_provider_provisioning_state - computed: true, optional: false, required: false
  public get serviceProviderProvisioningState() {
    return this.getStringAttribute('service_provider_provisioning_state');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // sku - computed: false, optional: false, required: true
  private _sku: ExpressRouteCircuitSku[];
  public get sku() {
    return this.interpolationForAttribute('sku') as any;
  }
  public set sku(value: ExpressRouteCircuitSku[]) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ExpressRouteCircuitTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ExpressRouteCircuitTimeouts ) {
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
