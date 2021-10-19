// https://www.terraform.io/docs/providers/azurerm/r/local_network_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocalNetworkGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/local_network_gateway.html#address_space LocalNetworkGateway#address_space}
  */
  readonly addressSpace?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/local_network_gateway.html#gateway_address LocalNetworkGateway#gateway_address}
  */
  readonly gatewayAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/local_network_gateway.html#gateway_fqdn LocalNetworkGateway#gateway_fqdn}
  */
  readonly gatewayFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/local_network_gateway.html#location LocalNetworkGateway#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/local_network_gateway.html#name LocalNetworkGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/local_network_gateway.html#resource_group_name LocalNetworkGateway#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/local_network_gateway.html#tags LocalNetworkGateway#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * bgp_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/local_network_gateway.html#bgp_settings LocalNetworkGateway#bgp_settings}
  */
  readonly bgpSettings?: LocalNetworkGatewayBgpSettings;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/local_network_gateway.html#timeouts LocalNetworkGateway#timeouts}
  */
  readonly timeouts?: LocalNetworkGatewayTimeouts;
}
export interface LocalNetworkGatewayBgpSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/local_network_gateway.html#asn LocalNetworkGateway#asn}
  */
  readonly asn: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/local_network_gateway.html#bgp_peering_address LocalNetworkGateway#bgp_peering_address}
  */
  readonly bgpPeeringAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/local_network_gateway.html#peer_weight LocalNetworkGateway#peer_weight}
  */
  readonly peerWeight?: number;
}

function localNetworkGatewayBgpSettingsToTerraform(struct?: LocalNetworkGatewayBgpSettingsOutputReference | LocalNetworkGatewayBgpSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    bgp_peering_address: cdktf.stringToTerraform(struct!.bgpPeeringAddress),
    peer_weight: cdktf.numberToTerraform(struct!.peerWeight),
  }
}

export class LocalNetworkGatewayBgpSettingsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // asn - computed: false, optional: false, required: true
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn
  }

  // bgp_peering_address - computed: false, optional: false, required: true
  private _bgpPeeringAddress?: string; 
  public get bgpPeeringAddress() {
    return this.getStringAttribute('bgp_peering_address');
  }
  public set bgpPeeringAddress(value: string) {
    this._bgpPeeringAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPeeringAddressInput() {
    return this._bgpPeeringAddress
  }

  // peer_weight - computed: true, optional: true, required: false
  private _peerWeight?: number | undefined; 
  public get peerWeight() {
    return this.getNumberAttribute('peer_weight');
  }
  public set peerWeight(value: number | undefined) {
    this._peerWeight = value;
  }
  public resetPeerWeight() {
    this._peerWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerWeightInput() {
    return this._peerWeight
  }
}
export interface LocalNetworkGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/local_network_gateway.html#create LocalNetworkGateway#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/local_network_gateway.html#delete LocalNetworkGateway#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/local_network_gateway.html#read LocalNetworkGateway#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/local_network_gateway.html#update LocalNetworkGateway#update}
  */
  readonly update?: string;
}

function localNetworkGatewayTimeoutsToTerraform(struct?: LocalNetworkGatewayTimeoutsOutputReference | LocalNetworkGatewayTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class LocalNetworkGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
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

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/local_network_gateway.html azurerm_local_network_gateway}
*/
export class LocalNetworkGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_local_network_gateway";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/local_network_gateway.html azurerm_local_network_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocalNetworkGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: LocalNetworkGatewayConfig) {
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
    this._addressSpace = config.addressSpace;
    this._gatewayAddress = config.gatewayAddress;
    this._gatewayFqdn = config.gatewayFqdn;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._bgpSettings = config.bgpSettings;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_space - computed: false, optional: true, required: false
  private _addressSpace?: string[] | undefined; 
  public get addressSpace() {
    return this.getListAttribute('address_space');
  }
  public set addressSpace(value: string[] | undefined) {
    this._addressSpace = value;
  }
  public resetAddressSpace() {
    this._addressSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSpaceInput() {
    return this._addressSpace
  }

  // gateway_address - computed: false, optional: true, required: false
  private _gatewayAddress?: string | undefined; 
  public get gatewayAddress() {
    return this.getStringAttribute('gateway_address');
  }
  public set gatewayAddress(value: string | undefined) {
    this._gatewayAddress = value;
  }
  public resetGatewayAddress() {
    this._gatewayAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayAddressInput() {
    return this._gatewayAddress
  }

  // gateway_fqdn - computed: false, optional: true, required: false
  private _gatewayFqdn?: string | undefined; 
  public get gatewayFqdn() {
    return this.getStringAttribute('gateway_fqdn');
  }
  public set gatewayFqdn(value: string | undefined) {
    this._gatewayFqdn = value;
  }
  public resetGatewayFqdn() {
    this._gatewayFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayFqdnInput() {
    return this._gatewayFqdn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // bgp_settings - computed: false, optional: true, required: false
  private _bgpSettings?: LocalNetworkGatewayBgpSettings | undefined; 
  private __bgpSettingsOutput = new LocalNetworkGatewayBgpSettingsOutputReference(this as any, "bgp_settings", true);
  public get bgpSettings() {
    return this.__bgpSettingsOutput;
  }
  public putBgpSettings(value: LocalNetworkGatewayBgpSettings | undefined) {
    this._bgpSettings = value;
  }
  public resetBgpSettings() {
    this._bgpSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpSettingsInput() {
    return this._bgpSettings
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LocalNetworkGatewayTimeouts | undefined; 
  private __timeoutsOutput = new LocalNetworkGatewayTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: LocalNetworkGatewayTimeouts | undefined) {
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
      address_space: cdktf.listMapper(cdktf.stringToTerraform)(this._addressSpace),
      gateway_address: cdktf.stringToTerraform(this._gatewayAddress),
      gateway_fqdn: cdktf.stringToTerraform(this._gatewayFqdn),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      bgp_settings: localNetworkGatewayBgpSettingsToTerraform(this._bgpSettings),
      timeouts: localNetworkGatewayTimeoutsToTerraform(this._timeouts),
    };
  }
}
