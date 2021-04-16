// https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExpressRoutePortConfig extends cdktf.TerraformMetaArguments {
  readonly bandwidthInGbps: number;
  readonly encapsulation: string;
  readonly location: string;
  readonly name: string;
  readonly peeringLocation: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** identity block */
  readonly identity?: ExpressRoutePortIdentity[];
  /** link1 block */
  readonly link1?: ExpressRoutePortLink1[];
  /** link2 block */
  readonly link2?: ExpressRoutePortLink2[];
  /** timeouts block */
  readonly timeouts?: ExpressRoutePortTimeouts;
}
export interface ExpressRoutePortIdentity {
  readonly identityIds?: string[];
  readonly type: string;
}

function expressRoutePortIdentityToTerraform(struct?: ExpressRoutePortIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ExpressRoutePortLink1 {
  readonly adminEnabled?: boolean;
  readonly macsecCakKeyvaultSecretId?: string;
  readonly macsecCipher?: string;
  readonly macsecCknKeyvaultSecretId?: string;
}

function expressRoutePortLink1ToTerraform(struct?: ExpressRoutePortLink1): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    admin_enabled: cdktf.booleanToTerraform(struct!.adminEnabled),
    macsec_cak_keyvault_secret_id: cdktf.stringToTerraform(struct!.macsecCakKeyvaultSecretId),
    macsec_cipher: cdktf.stringToTerraform(struct!.macsecCipher),
    macsec_ckn_keyvault_secret_id: cdktf.stringToTerraform(struct!.macsecCknKeyvaultSecretId),
  }
}

export interface ExpressRoutePortLink2 {
  readonly adminEnabled?: boolean;
  readonly macsecCakKeyvaultSecretId?: string;
  readonly macsecCipher?: string;
  readonly macsecCknKeyvaultSecretId?: string;
}

function expressRoutePortLink2ToTerraform(struct?: ExpressRoutePortLink2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    admin_enabled: cdktf.booleanToTerraform(struct!.adminEnabled),
    macsec_cak_keyvault_secret_id: cdktf.stringToTerraform(struct!.macsecCakKeyvaultSecretId),
    macsec_cipher: cdktf.stringToTerraform(struct!.macsecCipher),
    macsec_ckn_keyvault_secret_id: cdktf.stringToTerraform(struct!.macsecCknKeyvaultSecretId),
  }
}

export interface ExpressRoutePortTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function expressRoutePortTimeoutsToTerraform(struct?: ExpressRoutePortTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ExpressRoutePort extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ExpressRoutePortConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_express_route_port',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bandwidthInGbps = config.bandwidthInGbps;
    this._encapsulation = config.encapsulation;
    this._location = config.location;
    this._name = config.name;
    this._peeringLocation = config.peeringLocation;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._identity = config.identity;
    this._link1 = config.link1;
    this._link2 = config.link2;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_in_gbps - computed: false, optional: false, required: true
  private _bandwidthInGbps: number;
  public get bandwidthInGbps() {
    return this.getNumberAttribute('bandwidth_in_gbps');
  }
  public set bandwidthInGbps(value: number) {
    this._bandwidthInGbps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInGbpsInput() {
    return this._bandwidthInGbps
  }

  // encapsulation - computed: false, optional: false, required: true
  private _encapsulation: string;
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }
  public set encapsulation(value: string) {
    this._encapsulation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationInput() {
    return this._encapsulation
  }

  // ethertype - computed: true, optional: false, required: false
  public get ethertype() {
    return this.getStringAttribute('ethertype');
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
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

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getStringAttribute('mtu');
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

  // identity - computed: false, optional: true, required: false
  private _identity?: ExpressRoutePortIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: ExpressRoutePortIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // link1 - computed: false, optional: true, required: false
  private _link1?: ExpressRoutePortLink1[];
  public get link1() {
    return this.interpolationForAttribute('link1') as any;
  }
  public set link1(value: ExpressRoutePortLink1[] ) {
    this._link1 = value;
  }
  public resetLink1() {
    this._link1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get link1Input() {
    return this._link1
  }

  // link2 - computed: false, optional: true, required: false
  private _link2?: ExpressRoutePortLink2[];
  public get link2() {
    return this.interpolationForAttribute('link2') as any;
  }
  public set link2(value: ExpressRoutePortLink2[] ) {
    this._link2 = value;
  }
  public resetLink2() {
    this._link2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get link2Input() {
    return this._link2
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ExpressRoutePortTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ExpressRoutePortTimeouts ) {
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
      bandwidth_in_gbps: cdktf.numberToTerraform(this._bandwidthInGbps),
      encapsulation: cdktf.stringToTerraform(this._encapsulation),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      peering_location: cdktf.stringToTerraform(this._peeringLocation),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      identity: cdktf.listMapper(expressRoutePortIdentityToTerraform)(this._identity),
      link1: cdktf.listMapper(expressRoutePortLink1ToTerraform)(this._link1),
      link2: cdktf.listMapper(expressRoutePortLink2ToTerraform)(this._link2),
      timeouts: expressRoutePortTimeoutsToTerraform(this._timeouts),
    };
  }
}
