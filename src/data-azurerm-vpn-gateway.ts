// https://www.terraform.io/docs/providers/azurerm/d/vpn_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermVpnGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/vpn_gateway.html#name DataAzurermVpnGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/vpn_gateway.html#resource_group_name DataAzurermVpnGateway#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/vpn_gateway.html#timeouts DataAzurermVpnGateway#timeouts}
  */
  readonly timeouts?: DataAzurermVpnGatewayTimeouts;
}
export class DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddress extends cdktf.ComplexComputedList {

  // custom_ips - computed: true, optional: false, required: false
  public get customIps() {
    return this.getListAttribute('custom_ips');
  }

  // default_ips - computed: true, optional: false, required: false
  public get defaultIps() {
    return this.getListAttribute('default_ips');
  }

  // ip_configuration_id - computed: true, optional: false, required: false
  public get ipConfigurationId() {
    return this.getStringAttribute('ip_configuration_id');
  }

  // tunnel_ips - computed: true, optional: false, required: false
  public get tunnelIps() {
    return this.getListAttribute('tunnel_ips');
  }
}
export class DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddress extends cdktf.ComplexComputedList {

  // custom_ips - computed: true, optional: false, required: false
  public get customIps() {
    return this.getListAttribute('custom_ips');
  }

  // default_ips - computed: true, optional: false, required: false
  public get defaultIps() {
    return this.getListAttribute('default_ips');
  }

  // ip_configuration_id - computed: true, optional: false, required: false
  public get ipConfigurationId() {
    return this.getStringAttribute('ip_configuration_id');
  }

  // tunnel_ips - computed: true, optional: false, required: false
  public get tunnelIps() {
    return this.getListAttribute('tunnel_ips');
  }
}
export class DataAzurermVpnGatewayBgpSettings extends cdktf.ComplexComputedList {

  // asn - computed: true, optional: false, required: false
  public get asn() {
    return this.getNumberAttribute('asn');
  }

  // bgp_peering_address - computed: true, optional: false, required: false
  public get bgpPeeringAddress() {
    return this.getStringAttribute('bgp_peering_address');
  }

  // instance_0_bgp_peering_address - computed: true, optional: false, required: false
  public get instance0BgpPeeringAddress() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('instance_0_bgp_peering_address') as any;
  }

  // instance_1_bgp_peering_address - computed: true, optional: false, required: false
  public get instance1BgpPeeringAddress() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('instance_1_bgp_peering_address') as any;
  }

  // peer_weight - computed: true, optional: false, required: false
  public get peerWeight() {
    return this.getNumberAttribute('peer_weight');
  }
}
export interface DataAzurermVpnGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/vpn_gateway.html#read DataAzurermVpnGateway#read}
  */
  readonly read?: string;
}

function dataAzurermVpnGatewayTimeoutsToTerraform(struct?: DataAzurermVpnGatewayTimeoutsOutputReference | DataAzurermVpnGatewayTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermVpnGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/vpn_gateway.html azurerm_vpn_gateway}
*/
export class DataAzurermVpnGateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_vpn_gateway";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/vpn_gateway.html azurerm_vpn_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermVpnGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermVpnGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_vpn_gateway',
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

  // bgp_settings - computed: true, optional: false, required: false
  public bgpSettings(index: string) {
    return new DataAzurermVpnGatewayBgpSettings(this, 'bgp_settings', index);
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

  // scale_unit - computed: true, optional: false, required: false
  public get scaleUnit() {
    return this.getNumberAttribute('scale_unit');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // virtual_hub_id - computed: true, optional: false, required: false
  public get virtualHubId() {
    return this.getStringAttribute('virtual_hub_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermVpnGatewayTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermVpnGatewayTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermVpnGatewayTimeouts | undefined) {
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
      timeouts: dataAzurermVpnGatewayTimeoutsToTerraform(this._timeouts),
    };
  }
}
