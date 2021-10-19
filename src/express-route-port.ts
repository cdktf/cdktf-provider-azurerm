// https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExpressRoutePortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#bandwidth_in_gbps ExpressRoutePort#bandwidth_in_gbps}
  */
  readonly bandwidthInGbps: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#encapsulation ExpressRoutePort#encapsulation}
  */
  readonly encapsulation: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#location ExpressRoutePort#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#name ExpressRoutePort#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#peering_location ExpressRoutePort#peering_location}
  */
  readonly peeringLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#resource_group_name ExpressRoutePort#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#tags ExpressRoutePort#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#identity ExpressRoutePort#identity}
  */
  readonly identity?: ExpressRoutePortIdentity;
  /**
  * link1 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#link1 ExpressRoutePort#link1}
  */
  readonly link1?: ExpressRoutePortLink1;
  /**
  * link2 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#link2 ExpressRoutePort#link2}
  */
  readonly link2?: ExpressRoutePortLink2;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#timeouts ExpressRoutePort#timeouts}
  */
  readonly timeouts?: ExpressRoutePortTimeouts;
}
export interface ExpressRoutePortIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#identity_ids ExpressRoutePort#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#type ExpressRoutePort#type}
  */
  readonly type: string;
}

function expressRoutePortIdentityToTerraform(struct?: ExpressRoutePortIdentityOutputReference | ExpressRoutePortIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ExpressRoutePortIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[] | undefined; 
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }
  public set identityIds(value: string[] | undefined) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface ExpressRoutePortLink1 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#admin_enabled ExpressRoutePort#admin_enabled}
  */
  readonly adminEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}
  */
  readonly macsecCakKeyvaultSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#macsec_cipher ExpressRoutePort#macsec_cipher}
  */
  readonly macsecCipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}
  */
  readonly macsecCknKeyvaultSecretId?: string;
}

function expressRoutePortLink1ToTerraform(struct?: ExpressRoutePortLink1OutputReference | ExpressRoutePortLink1): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_enabled: cdktf.booleanToTerraform(struct!.adminEnabled),
    macsec_cak_keyvault_secret_id: cdktf.stringToTerraform(struct!.macsecCakKeyvaultSecretId),
    macsec_cipher: cdktf.stringToTerraform(struct!.macsecCipher),
    macsec_ckn_keyvault_secret_id: cdktf.stringToTerraform(struct!.macsecCknKeyvaultSecretId),
  }
}

export class ExpressRoutePortLink1OutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // admin_enabled - computed: false, optional: true, required: false
  private _adminEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get adminEnabled() {
    return this.getBooleanAttribute('admin_enabled') as any;
  }
  public set adminEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._adminEnabled = value;
  }
  public resetAdminEnabled() {
    this._adminEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEnabledInput() {
    return this._adminEnabled
  }

  // macsec_cak_keyvault_secret_id - computed: false, optional: true, required: false
  private _macsecCakKeyvaultSecretId?: string | undefined; 
  public get macsecCakKeyvaultSecretId() {
    return this.getStringAttribute('macsec_cak_keyvault_secret_id');
  }
  public set macsecCakKeyvaultSecretId(value: string | undefined) {
    this._macsecCakKeyvaultSecretId = value;
  }
  public resetMacsecCakKeyvaultSecretId() {
    this._macsecCakKeyvaultSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecCakKeyvaultSecretIdInput() {
    return this._macsecCakKeyvaultSecretId
  }

  // macsec_cipher - computed: false, optional: true, required: false
  private _macsecCipher?: string | undefined; 
  public get macsecCipher() {
    return this.getStringAttribute('macsec_cipher');
  }
  public set macsecCipher(value: string | undefined) {
    this._macsecCipher = value;
  }
  public resetMacsecCipher() {
    this._macsecCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecCipherInput() {
    return this._macsecCipher
  }

  // macsec_ckn_keyvault_secret_id - computed: false, optional: true, required: false
  private _macsecCknKeyvaultSecretId?: string | undefined; 
  public get macsecCknKeyvaultSecretId() {
    return this.getStringAttribute('macsec_ckn_keyvault_secret_id');
  }
  public set macsecCknKeyvaultSecretId(value: string | undefined) {
    this._macsecCknKeyvaultSecretId = value;
  }
  public resetMacsecCknKeyvaultSecretId() {
    this._macsecCknKeyvaultSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecCknKeyvaultSecretIdInput() {
    return this._macsecCknKeyvaultSecretId
  }
}
export interface ExpressRoutePortLink2 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#admin_enabled ExpressRoutePort#admin_enabled}
  */
  readonly adminEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}
  */
  readonly macsecCakKeyvaultSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#macsec_cipher ExpressRoutePort#macsec_cipher}
  */
  readonly macsecCipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}
  */
  readonly macsecCknKeyvaultSecretId?: string;
}

function expressRoutePortLink2ToTerraform(struct?: ExpressRoutePortLink2OutputReference | ExpressRoutePortLink2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_enabled: cdktf.booleanToTerraform(struct!.adminEnabled),
    macsec_cak_keyvault_secret_id: cdktf.stringToTerraform(struct!.macsecCakKeyvaultSecretId),
    macsec_cipher: cdktf.stringToTerraform(struct!.macsecCipher),
    macsec_ckn_keyvault_secret_id: cdktf.stringToTerraform(struct!.macsecCknKeyvaultSecretId),
  }
}

export class ExpressRoutePortLink2OutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // admin_enabled - computed: false, optional: true, required: false
  private _adminEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get adminEnabled() {
    return this.getBooleanAttribute('admin_enabled') as any;
  }
  public set adminEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._adminEnabled = value;
  }
  public resetAdminEnabled() {
    this._adminEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEnabledInput() {
    return this._adminEnabled
  }

  // macsec_cak_keyvault_secret_id - computed: false, optional: true, required: false
  private _macsecCakKeyvaultSecretId?: string | undefined; 
  public get macsecCakKeyvaultSecretId() {
    return this.getStringAttribute('macsec_cak_keyvault_secret_id');
  }
  public set macsecCakKeyvaultSecretId(value: string | undefined) {
    this._macsecCakKeyvaultSecretId = value;
  }
  public resetMacsecCakKeyvaultSecretId() {
    this._macsecCakKeyvaultSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecCakKeyvaultSecretIdInput() {
    return this._macsecCakKeyvaultSecretId
  }

  // macsec_cipher - computed: false, optional: true, required: false
  private _macsecCipher?: string | undefined; 
  public get macsecCipher() {
    return this.getStringAttribute('macsec_cipher');
  }
  public set macsecCipher(value: string | undefined) {
    this._macsecCipher = value;
  }
  public resetMacsecCipher() {
    this._macsecCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecCipherInput() {
    return this._macsecCipher
  }

  // macsec_ckn_keyvault_secret_id - computed: false, optional: true, required: false
  private _macsecCknKeyvaultSecretId?: string | undefined; 
  public get macsecCknKeyvaultSecretId() {
    return this.getStringAttribute('macsec_ckn_keyvault_secret_id');
  }
  public set macsecCknKeyvaultSecretId(value: string | undefined) {
    this._macsecCknKeyvaultSecretId = value;
  }
  public resetMacsecCknKeyvaultSecretId() {
    this._macsecCknKeyvaultSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecCknKeyvaultSecretIdInput() {
    return this._macsecCknKeyvaultSecretId
  }
}
export interface ExpressRoutePortTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#create ExpressRoutePort#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#delete ExpressRoutePort#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#read ExpressRoutePort#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html#update ExpressRoutePort#update}
  */
  readonly update?: string;
}

function expressRoutePortTimeoutsToTerraform(struct?: ExpressRoutePortTimeoutsOutputReference | ExpressRoutePortTimeouts): any {
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

export class ExpressRoutePortTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html azurerm_express_route_port}
*/
export class ExpressRoutePort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_express_route_port";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port.html azurerm_express_route_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExpressRoutePortConfig
  */
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
  private _bandwidthInGbps?: number; 
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
  private _encapsulation?: string; 
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

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getStringAttribute('mtu');
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

  // peering_location - computed: false, optional: false, required: true
  private _peeringLocation?: string; 
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

  // identity - computed: false, optional: true, required: false
  private _identity?: ExpressRoutePortIdentity | undefined; 
  private __identityOutput = new ExpressRoutePortIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this.__identityOutput;
  }
  public putIdentity(value: ExpressRoutePortIdentity | undefined) {
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
  private _link1?: ExpressRoutePortLink1 | undefined; 
  private __link1Output = new ExpressRoutePortLink1OutputReference(this as any, "link1", true);
  public get link1() {
    return this.__link1Output;
  }
  public putLink1(value: ExpressRoutePortLink1 | undefined) {
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
  private _link2?: ExpressRoutePortLink2 | undefined; 
  private __link2Output = new ExpressRoutePortLink2OutputReference(this as any, "link2", true);
  public get link2() {
    return this.__link2Output;
  }
  public putLink2(value: ExpressRoutePortLink2 | undefined) {
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
  private _timeouts?: ExpressRoutePortTimeouts | undefined; 
  private __timeoutsOutput = new ExpressRoutePortTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ExpressRoutePortTimeouts | undefined) {
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
      identity: expressRoutePortIdentityToTerraform(this._identity),
      link1: expressRoutePortLink1ToTerraform(this._link1),
      link2: expressRoutePortLink2ToTerraform(this._link2),
      timeouts: expressRoutePortTimeoutsToTerraform(this._timeouts),
    };
  }
}
