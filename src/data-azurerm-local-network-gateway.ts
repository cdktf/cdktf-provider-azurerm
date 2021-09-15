// https://www.terraform.io/docs/providers/azurerm/d/local_network_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermLocalNetworkGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/local_network_gateway.html#name DataAzurermLocalNetworkGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/local_network_gateway.html#resource_group_name DataAzurermLocalNetworkGateway#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/local_network_gateway.html#timeouts DataAzurermLocalNetworkGateway#timeouts}
  */
  readonly timeouts?: DataAzurermLocalNetworkGatewayTimeouts;
}
export class DataAzurermLocalNetworkGatewayBgpSettings extends cdktf.ComplexComputedList {

  // asn - computed: true, optional: false, required: false
  public get asn() {
    return this.getNumberAttribute('asn');
  }

  // bgp_peering_address - computed: true, optional: false, required: false
  public get bgpPeeringAddress() {
    return this.getStringAttribute('bgp_peering_address');
  }

  // peer_weight - computed: true, optional: false, required: false
  public get peerWeight() {
    return this.getNumberAttribute('peer_weight');
  }
}
export interface DataAzurermLocalNetworkGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/local_network_gateway.html#read DataAzurermLocalNetworkGateway#read}
  */
  readonly read?: string;
}

function dataAzurermLocalNetworkGatewayTimeoutsToTerraform(struct?: DataAzurermLocalNetworkGatewayTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/local_network_gateway.html azurerm_local_network_gateway}
*/
export class DataAzurermLocalNetworkGateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_local_network_gateway";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/local_network_gateway.html azurerm_local_network_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermLocalNetworkGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermLocalNetworkGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_local_network_gateway',
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

  // address_space - computed: true, optional: false, required: false
  public get addressSpace() {
    return this.getListAttribute('address_space');
  }

  // bgp_settings - computed: true, optional: false, required: false
  public bgpSettings(index: string) {
    return new DataAzurermLocalNetworkGatewayBgpSettings(this, 'bgp_settings', index);
  }

  // gateway_address - computed: true, optional: false, required: false
  public get gatewayAddress() {
    return this.getStringAttribute('gateway_address');
  }

  // gateway_fqdn - computed: true, optional: false, required: false
  public get gatewayFqdn() {
    return this.getStringAttribute('gateway_fqdn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermLocalNetworkGatewayTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermLocalNetworkGatewayTimeouts ) {
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
      timeouts: dataAzurermLocalNetworkGatewayTimeoutsToTerraform(this._timeouts),
    };
  }
}
