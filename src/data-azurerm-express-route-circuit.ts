// https://www.terraform.io/docs/providers/azurerm/d/express_route_circuit.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermExpressRouteCircuitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/express_route_circuit.html#name DataAzurermExpressRouteCircuit#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/express_route_circuit.html#resource_group_name DataAzurermExpressRouteCircuit#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/express_route_circuit.html#timeouts DataAzurermExpressRouteCircuit#timeouts}
  */
  readonly timeouts?: DataAzurermExpressRouteCircuitTimeouts;
}
export class DataAzurermExpressRouteCircuitPeerings extends cdktf.ComplexComputedList {

  // azure_asn - computed: true, optional: false, required: false
  public get azureAsn() {
    return this.getNumberAttribute('azure_asn');
  }

  // peer_asn - computed: true, optional: false, required: false
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }

  // peering_type - computed: true, optional: false, required: false
  public get peeringType() {
    return this.getStringAttribute('peering_type');
  }

  // primary_peer_address_prefix - computed: true, optional: false, required: false
  public get primaryPeerAddressPrefix() {
    return this.getStringAttribute('primary_peer_address_prefix');
  }

  // secondary_peer_address_prefix - computed: true, optional: false, required: false
  public get secondaryPeerAddressPrefix() {
    return this.getStringAttribute('secondary_peer_address_prefix');
  }

  // shared_key - computed: true, optional: false, required: false
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
}
export class DataAzurermExpressRouteCircuitServiceProviderProperties extends cdktf.ComplexComputedList {

  // bandwidth_in_mbps - computed: true, optional: false, required: false
  public get bandwidthInMbps() {
    return this.getNumberAttribute('bandwidth_in_mbps');
  }

  // peering_location - computed: true, optional: false, required: false
  public get peeringLocation() {
    return this.getStringAttribute('peering_location');
  }

  // service_provider_name - computed: true, optional: false, required: false
  public get serviceProviderName() {
    return this.getStringAttribute('service_provider_name');
  }
}
export class DataAzurermExpressRouteCircuitSku extends cdktf.ComplexComputedList {

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getStringAttribute('family');
  }

  // tier - computed: true, optional: false, required: false
  public get tier() {
    return this.getStringAttribute('tier');
  }
}
export interface DataAzurermExpressRouteCircuitTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/express_route_circuit.html#read DataAzurermExpressRouteCircuit#read}
  */
  readonly read?: string;
}

function dataAzurermExpressRouteCircuitTimeoutsToTerraform(struct?: DataAzurermExpressRouteCircuitTimeoutsOutputReference | DataAzurermExpressRouteCircuitTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermExpressRouteCircuitTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/express_route_circuit.html azurerm_express_route_circuit}
*/
export class DataAzurermExpressRouteCircuit extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_express_route_circuit";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/express_route_circuit.html azurerm_express_route_circuit} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermExpressRouteCircuitConfig
  */
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
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

  // peerings - computed: true, optional: false, required: false
  public peerings(index: string) {
    return new DataAzurermExpressRouteCircuitPeerings(this, 'peerings', index);
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
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

  // service_provider_properties - computed: true, optional: false, required: false
  public serviceProviderProperties(index: string) {
    return new DataAzurermExpressRouteCircuitServiceProviderProperties(this, 'service_provider_properties', index);
  }

  // service_provider_provisioning_state - computed: true, optional: false, required: false
  public get serviceProviderProvisioningState() {
    return this.getStringAttribute('service_provider_provisioning_state');
  }

  // sku - computed: true, optional: false, required: false
  public sku(index: string) {
    return new DataAzurermExpressRouteCircuitSku(this, 'sku', index);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermExpressRouteCircuitTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermExpressRouteCircuitTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermExpressRouteCircuitTimeouts | undefined) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermExpressRouteCircuitTimeoutsToTerraform(this._timeouts),
    };
  }
}
