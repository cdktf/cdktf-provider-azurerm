// https://www.terraform.io/docs/providers/azurerm/r/virtual_network_peering.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualNetworkPeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_peering.html#allow_forwarded_traffic VirtualNetworkPeering#allow_forwarded_traffic}
  */
  readonly allowForwardedTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_peering.html#allow_gateway_transit VirtualNetworkPeering#allow_gateway_transit}
  */
  readonly allowGatewayTransit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_peering.html#allow_virtual_network_access VirtualNetworkPeering#allow_virtual_network_access}
  */
  readonly allowVirtualNetworkAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_peering.html#name VirtualNetworkPeering#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_peering.html#remote_virtual_network_id VirtualNetworkPeering#remote_virtual_network_id}
  */
  readonly remoteVirtualNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_peering.html#resource_group_name VirtualNetworkPeering#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_peering.html#use_remote_gateways VirtualNetworkPeering#use_remote_gateways}
  */
  readonly useRemoteGateways?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_peering.html#virtual_network_name VirtualNetworkPeering#virtual_network_name}
  */
  readonly virtualNetworkName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_peering.html#timeouts VirtualNetworkPeering#timeouts}
  */
  readonly timeouts?: VirtualNetworkPeeringTimeouts;
}
export interface VirtualNetworkPeeringTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_peering.html#create VirtualNetworkPeering#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_peering.html#delete VirtualNetworkPeering#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_peering.html#read VirtualNetworkPeering#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_peering.html#update VirtualNetworkPeering#update}
  */
  readonly update?: string;
}

function virtualNetworkPeeringTimeoutsToTerraform(struct?: VirtualNetworkPeeringTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_peering.html azurerm_virtual_network_peering}
*/
export class VirtualNetworkPeering extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_virtual_network_peering";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_peering.html azurerm_virtual_network_peering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualNetworkPeeringConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualNetworkPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_network_peering',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowForwardedTraffic = config.allowForwardedTraffic;
    this._allowGatewayTransit = config.allowGatewayTransit;
    this._allowVirtualNetworkAccess = config.allowVirtualNetworkAccess;
    this._name = config.name;
    this._remoteVirtualNetworkId = config.remoteVirtualNetworkId;
    this._resourceGroupName = config.resourceGroupName;
    this._useRemoteGateways = config.useRemoteGateways;
    this._virtualNetworkName = config.virtualNetworkName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_forwarded_traffic - computed: true, optional: true, required: false
  private _allowForwardedTraffic?: boolean | cdktf.IResolvable;
  public get allowForwardedTraffic() {
    return this.getBooleanAttribute('allow_forwarded_traffic');
  }
  public set allowForwardedTraffic(value: boolean | cdktf.IResolvable) {
    this._allowForwardedTraffic = value;
  }
  public resetAllowForwardedTraffic() {
    this._allowForwardedTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowForwardedTrafficInput() {
    return this._allowForwardedTraffic
  }

  // allow_gateway_transit - computed: true, optional: true, required: false
  private _allowGatewayTransit?: boolean | cdktf.IResolvable;
  public get allowGatewayTransit() {
    return this.getBooleanAttribute('allow_gateway_transit');
  }
  public set allowGatewayTransit(value: boolean | cdktf.IResolvable) {
    this._allowGatewayTransit = value;
  }
  public resetAllowGatewayTransit() {
    this._allowGatewayTransit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGatewayTransitInput() {
    return this._allowGatewayTransit
  }

  // allow_virtual_network_access - computed: false, optional: true, required: false
  private _allowVirtualNetworkAccess?: boolean | cdktf.IResolvable;
  public get allowVirtualNetworkAccess() {
    return this.getBooleanAttribute('allow_virtual_network_access');
  }
  public set allowVirtualNetworkAccess(value: boolean | cdktf.IResolvable ) {
    this._allowVirtualNetworkAccess = value;
  }
  public resetAllowVirtualNetworkAccess() {
    this._allowVirtualNetworkAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowVirtualNetworkAccessInput() {
    return this._allowVirtualNetworkAccess
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // remote_virtual_network_id - computed: false, optional: false, required: true
  private _remoteVirtualNetworkId: string;
  public get remoteVirtualNetworkId() {
    return this.getStringAttribute('remote_virtual_network_id');
  }
  public set remoteVirtualNetworkId(value: string) {
    this._remoteVirtualNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVirtualNetworkIdInput() {
    return this._remoteVirtualNetworkId
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

  // use_remote_gateways - computed: true, optional: true, required: false
  private _useRemoteGateways?: boolean | cdktf.IResolvable;
  public get useRemoteGateways() {
    return this.getBooleanAttribute('use_remote_gateways');
  }
  public set useRemoteGateways(value: boolean | cdktf.IResolvable) {
    this._useRemoteGateways = value;
  }
  public resetUseRemoteGateways() {
    this._useRemoteGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRemoteGatewaysInput() {
    return this._useRemoteGateways
  }

  // virtual_network_name - computed: false, optional: false, required: true
  private _virtualNetworkName: string;
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkNameInput() {
    return this._virtualNetworkName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualNetworkPeeringTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VirtualNetworkPeeringTimeouts ) {
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
      allow_forwarded_traffic: cdktf.booleanToTerraform(this._allowForwardedTraffic),
      allow_gateway_transit: cdktf.booleanToTerraform(this._allowGatewayTransit),
      allow_virtual_network_access: cdktf.booleanToTerraform(this._allowVirtualNetworkAccess),
      name: cdktf.stringToTerraform(this._name),
      remote_virtual_network_id: cdktf.stringToTerraform(this._remoteVirtualNetworkId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      use_remote_gateways: cdktf.booleanToTerraform(this._useRemoteGateways),
      virtual_network_name: cdktf.stringToTerraform(this._virtualNetworkName),
      timeouts: virtualNetworkPeeringTimeoutsToTerraform(this._timeouts),
    };
  }
}
