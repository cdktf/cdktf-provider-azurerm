// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_express_route_circuit.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAzurermExpressRouteCircuitConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermExpressRouteCircuitTimeouts;
}
export class DataAzurermExpressRouteCircuitPeerings extends ComplexComputedList {

  // azure_asn - computed: true, optional: false, required: true
  public get azureAsn() {
    return this.getNumberAttribute('azure_asn');
  }

  // peer_asn - computed: true, optional: false, required: true
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }

  // peering_type - computed: true, optional: false, required: true
  public get peeringType() {
    return this.getStringAttribute('peering_type');
  }

  // primary_peer_address_prefix - computed: true, optional: false, required: true
  public get primaryPeerAddressPrefix() {
    return this.getStringAttribute('primary_peer_address_prefix');
  }

  // secondary_peer_address_prefix - computed: true, optional: false, required: true
  public get secondaryPeerAddressPrefix() {
    return this.getStringAttribute('secondary_peer_address_prefix');
  }

  // shared_key - computed: true, optional: false, required: true
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }

  // vlan_id - computed: true, optional: false, required: true
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
}
export class DataAzurermExpressRouteCircuitServiceProviderProperties extends ComplexComputedList {

  // bandwidth_in_mbps - computed: true, optional: false, required: true
  public get bandwidthInMbps() {
    return this.getNumberAttribute('bandwidth_in_mbps');
  }

  // peering_location - computed: true, optional: false, required: true
  public get peeringLocation() {
    return this.getStringAttribute('peering_location');
  }

  // service_provider_name - computed: true, optional: false, required: true
  public get serviceProviderName() {
    return this.getStringAttribute('service_provider_name');
  }
}
export class DataAzurermExpressRouteCircuitSku extends ComplexComputedList {

  // family - computed: true, optional: false, required: true
  public get family() {
    return this.getStringAttribute('family');
  }

  // tier - computed: true, optional: false, required: true
  public get tier() {
    return this.getStringAttribute('tier');
  }
}
export interface DataAzurermExpressRouteCircuitTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermExpressRouteCircuit extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermExpressRouteCircuitConfig) {
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
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
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

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // peerings - computed: true, optional: false, required: true
  public peerings(index: string) {
    return new DataAzurermExpressRouteCircuitPeerings(this, 'peerings', index);
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

  // service_provider_properties - computed: true, optional: false, required: true
  public serviceProviderProperties(index: string) {
    return new DataAzurermExpressRouteCircuitServiceProviderProperties(this, 'service_provider_properties', index);
  }

  // service_provider_provisioning_state - computed: true, optional: false, required: true
  public get serviceProviderProvisioningState() {
    return this.getStringAttribute('service_provider_provisioning_state');
  }

  // sku - computed: true, optional: false, required: true
  public sku(index: string) {
    return new DataAzurermExpressRouteCircuitSku(this, 'sku', index);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermExpressRouteCircuitTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermExpressRouteCircuitTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
