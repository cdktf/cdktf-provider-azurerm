// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualNetworkPeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_peering#allow_forwarded_traffic VirtualNetworkPeering#allow_forwarded_traffic}
  */
  readonly allowForwardedTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_peering#allow_gateway_transit VirtualNetworkPeering#allow_gateway_transit}
  */
  readonly allowGatewayTransit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_peering#allow_virtual_network_access VirtualNetworkPeering#allow_virtual_network_access}
  */
  readonly allowVirtualNetworkAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_peering#id VirtualNetworkPeering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_peering#local_subnet_names VirtualNetworkPeering#local_subnet_names}
  */
  readonly localSubnetNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_peering#name VirtualNetworkPeering#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_peering#only_ipv6_peering_enabled VirtualNetworkPeering#only_ipv6_peering_enabled}
  */
  readonly onlyIpv6PeeringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_peering#peer_complete_virtual_networks_enabled VirtualNetworkPeering#peer_complete_virtual_networks_enabled}
  */
  readonly peerCompleteVirtualNetworksEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_peering#remote_subnet_names VirtualNetworkPeering#remote_subnet_names}
  */
  readonly remoteSubnetNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_peering#remote_virtual_network_id VirtualNetworkPeering#remote_virtual_network_id}
  */
  readonly remoteVirtualNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_peering#resource_group_name VirtualNetworkPeering#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_peering#triggers VirtualNetworkPeering#triggers}
  */
  readonly triggers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_peering#use_remote_gateways VirtualNetworkPeering#use_remote_gateways}
  */
  readonly useRemoteGateways?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_peering#virtual_network_name VirtualNetworkPeering#virtual_network_name}
  */
  readonly virtualNetworkName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_peering#timeouts VirtualNetworkPeering#timeouts}
  */
  readonly timeouts?: VirtualNetworkPeeringTimeouts;
}
export interface VirtualNetworkPeeringTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_peering#create VirtualNetworkPeering#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_peering#delete VirtualNetworkPeering#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_peering#read VirtualNetworkPeering#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_peering#update VirtualNetworkPeering#update}
  */
  readonly update?: string;
}

export function virtualNetworkPeeringTimeoutsToTerraform(struct?: VirtualNetworkPeeringTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function virtualNetworkPeeringTimeoutsToHclTerraform(struct?: VirtualNetworkPeeringTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkPeeringTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualNetworkPeeringTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkPeeringTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_peering azurerm_virtual_network_peering}
*/
export class VirtualNetworkPeering extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_virtual_network_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualNetworkPeering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualNetworkPeering to import
  * @param importFromId The id of the existing VirtualNetworkPeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualNetworkPeering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_virtual_network_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_peering azurerm_virtual_network_peering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualNetworkPeeringConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualNetworkPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_network_peering',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowForwardedTraffic = config.allowForwardedTraffic;
    this._allowGatewayTransit = config.allowGatewayTransit;
    this._allowVirtualNetworkAccess = config.allowVirtualNetworkAccess;
    this._id = config.id;
    this._localSubnetNames = config.localSubnetNames;
    this._name = config.name;
    this._onlyIpv6PeeringEnabled = config.onlyIpv6PeeringEnabled;
    this._peerCompleteVirtualNetworksEnabled = config.peerCompleteVirtualNetworksEnabled;
    this._remoteSubnetNames = config.remoteSubnetNames;
    this._remoteVirtualNetworkId = config.remoteVirtualNetworkId;
    this._resourceGroupName = config.resourceGroupName;
    this._triggers = config.triggers;
    this._useRemoteGateways = config.useRemoteGateways;
    this._virtualNetworkName = config.virtualNetworkName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_forwarded_traffic - computed: false, optional: true, required: false
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
    return this._allowForwardedTraffic;
  }

  // allow_gateway_transit - computed: false, optional: true, required: false
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
    return this._allowGatewayTransit;
  }

  // allow_virtual_network_access - computed: false, optional: true, required: false
  private _allowVirtualNetworkAccess?: boolean | cdktf.IResolvable; 
  public get allowVirtualNetworkAccess() {
    return this.getBooleanAttribute('allow_virtual_network_access');
  }
  public set allowVirtualNetworkAccess(value: boolean | cdktf.IResolvable) {
    this._allowVirtualNetworkAccess = value;
  }
  public resetAllowVirtualNetworkAccess() {
    this._allowVirtualNetworkAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowVirtualNetworkAccessInput() {
    return this._allowVirtualNetworkAccess;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // local_subnet_names - computed: false, optional: true, required: false
  private _localSubnetNames?: string[]; 
  public get localSubnetNames() {
    return this.getListAttribute('local_subnet_names');
  }
  public set localSubnetNames(value: string[]) {
    this._localSubnetNames = value;
  }
  public resetLocalSubnetNames() {
    this._localSubnetNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetNamesInput() {
    return this._localSubnetNames;
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
    return this._name;
  }

  // only_ipv6_peering_enabled - computed: false, optional: true, required: false
  private _onlyIpv6PeeringEnabled?: boolean | cdktf.IResolvable; 
  public get onlyIpv6PeeringEnabled() {
    return this.getBooleanAttribute('only_ipv6_peering_enabled');
  }
  public set onlyIpv6PeeringEnabled(value: boolean | cdktf.IResolvable) {
    this._onlyIpv6PeeringEnabled = value;
  }
  public resetOnlyIpv6PeeringEnabled() {
    this._onlyIpv6PeeringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyIpv6PeeringEnabledInput() {
    return this._onlyIpv6PeeringEnabled;
  }

  // peer_complete_virtual_networks_enabled - computed: false, optional: true, required: false
  private _peerCompleteVirtualNetworksEnabled?: boolean | cdktf.IResolvable; 
  public get peerCompleteVirtualNetworksEnabled() {
    return this.getBooleanAttribute('peer_complete_virtual_networks_enabled');
  }
  public set peerCompleteVirtualNetworksEnabled(value: boolean | cdktf.IResolvable) {
    this._peerCompleteVirtualNetworksEnabled = value;
  }
  public resetPeerCompleteVirtualNetworksEnabled() {
    this._peerCompleteVirtualNetworksEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerCompleteVirtualNetworksEnabledInput() {
    return this._peerCompleteVirtualNetworksEnabled;
  }

  // remote_subnet_names - computed: false, optional: true, required: false
  private _remoteSubnetNames?: string[]; 
  public get remoteSubnetNames() {
    return this.getListAttribute('remote_subnet_names');
  }
  public set remoteSubnetNames(value: string[]) {
    this._remoteSubnetNames = value;
  }
  public resetRemoteSubnetNames() {
    this._remoteSubnetNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSubnetNamesInput() {
    return this._remoteSubnetNames;
  }

  // remote_virtual_network_id - computed: false, optional: false, required: true
  private _remoteVirtualNetworkId?: string; 
  public get remoteVirtualNetworkId() {
    return this.getStringAttribute('remote_virtual_network_id');
  }
  public set remoteVirtualNetworkId(value: string) {
    this._remoteVirtualNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVirtualNetworkIdInput() {
    return this._remoteVirtualNetworkId;
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
    return this._resourceGroupName;
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: { [key: string]: string }; 
  public get triggers() {
    return this.getStringMapAttribute('triggers');
  }
  public set triggers(value: { [key: string]: string }) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // use_remote_gateways - computed: false, optional: true, required: false
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
    return this._useRemoteGateways;
  }

  // virtual_network_name - computed: false, optional: false, required: true
  private _virtualNetworkName?: string; 
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkNameInput() {
    return this._virtualNetworkName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualNetworkPeeringTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualNetworkPeeringTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_forwarded_traffic: cdktf.booleanToTerraform(this._allowForwardedTraffic),
      allow_gateway_transit: cdktf.booleanToTerraform(this._allowGatewayTransit),
      allow_virtual_network_access: cdktf.booleanToTerraform(this._allowVirtualNetworkAccess),
      id: cdktf.stringToTerraform(this._id),
      local_subnet_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._localSubnetNames),
      name: cdktf.stringToTerraform(this._name),
      only_ipv6_peering_enabled: cdktf.booleanToTerraform(this._onlyIpv6PeeringEnabled),
      peer_complete_virtual_networks_enabled: cdktf.booleanToTerraform(this._peerCompleteVirtualNetworksEnabled),
      remote_subnet_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteSubnetNames),
      remote_virtual_network_id: cdktf.stringToTerraform(this._remoteVirtualNetworkId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._triggers),
      use_remote_gateways: cdktf.booleanToTerraform(this._useRemoteGateways),
      virtual_network_name: cdktf.stringToTerraform(this._virtualNetworkName),
      timeouts: virtualNetworkPeeringTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_forwarded_traffic: {
        value: cdktf.booleanToHclTerraform(this._allowForwardedTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_gateway_transit: {
        value: cdktf.booleanToHclTerraform(this._allowGatewayTransit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_virtual_network_access: {
        value: cdktf.booleanToHclTerraform(this._allowVirtualNetworkAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_subnet_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._localSubnetNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      only_ipv6_peering_enabled: {
        value: cdktf.booleanToHclTerraform(this._onlyIpv6PeeringEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      peer_complete_virtual_networks_enabled: {
        value: cdktf.booleanToHclTerraform(this._peerCompleteVirtualNetworksEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remote_subnet_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteSubnetNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      remote_virtual_network_id: {
        value: cdktf.stringToHclTerraform(this._remoteVirtualNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      triggers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._triggers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      use_remote_gateways: {
        value: cdktf.booleanToHclTerraform(this._useRemoteGateways),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      virtual_network_name: {
        value: cdktf.stringToHclTerraform(this._virtualNetworkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: virtualNetworkPeeringTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualNetworkPeeringTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
