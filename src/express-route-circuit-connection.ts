// https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExpressRouteCircuitConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html#address_prefix_ipv4 ExpressRouteCircuitConnection#address_prefix_ipv4}
  */
  readonly addressPrefixIpv4: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html#address_prefix_ipv6 ExpressRouteCircuitConnection#address_prefix_ipv6}
  */
  readonly addressPrefixIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html#authorization_key ExpressRouteCircuitConnection#authorization_key}
  */
  readonly authorizationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html#name ExpressRouteCircuitConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html#peer_peering_id ExpressRouteCircuitConnection#peer_peering_id}
  */
  readonly peerPeeringId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html#peering_id ExpressRouteCircuitConnection#peering_id}
  */
  readonly peeringId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html#timeouts ExpressRouteCircuitConnection#timeouts}
  */
  readonly timeouts?: ExpressRouteCircuitConnectionTimeouts;
}
export interface ExpressRouteCircuitConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html#create ExpressRouteCircuitConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html#delete ExpressRouteCircuitConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html#read ExpressRouteCircuitConnection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html#update ExpressRouteCircuitConnection#update}
  */
  readonly update?: string;
}

function expressRouteCircuitConnectionTimeoutsToTerraform(struct?: ExpressRouteCircuitConnectionTimeoutsOutputReference | ExpressRouteCircuitConnectionTimeouts): any {
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

export class ExpressRouteCircuitConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html azurerm_express_route_circuit_connection}
*/
export class ExpressRouteCircuitConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_express_route_circuit_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_connection.html azurerm_express_route_circuit_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExpressRouteCircuitConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: ExpressRouteCircuitConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_express_route_circuit_connection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addressPrefixIpv4 = config.addressPrefixIpv4;
    this._addressPrefixIpv6 = config.addressPrefixIpv6;
    this._authorizationKey = config.authorizationKey;
    this._name = config.name;
    this._peerPeeringId = config.peerPeeringId;
    this._peeringId = config.peeringId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_prefix_ipv4 - computed: false, optional: false, required: true
  private _addressPrefixIpv4?: string; 
  public get addressPrefixIpv4() {
    return this.getStringAttribute('address_prefix_ipv4');
  }
  public set addressPrefixIpv4(value: string) {
    this._addressPrefixIpv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPrefixIpv4Input() {
    return this._addressPrefixIpv4
  }

  // address_prefix_ipv6 - computed: false, optional: true, required: false
  private _addressPrefixIpv6?: string | undefined; 
  public get addressPrefixIpv6() {
    return this.getStringAttribute('address_prefix_ipv6');
  }
  public set addressPrefixIpv6(value: string | undefined) {
    this._addressPrefixIpv6 = value;
  }
  public resetAddressPrefixIpv6() {
    this._addressPrefixIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPrefixIpv6Input() {
    return this._addressPrefixIpv6
  }

  // authorization_key - computed: false, optional: true, required: false
  private _authorizationKey?: string | undefined; 
  public get authorizationKey() {
    return this.getStringAttribute('authorization_key');
  }
  public set authorizationKey(value: string | undefined) {
    this._authorizationKey = value;
  }
  public resetAuthorizationKey() {
    this._authorizationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationKeyInput() {
    return this._authorizationKey
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // peer_peering_id - computed: false, optional: false, required: true
  private _peerPeeringId?: string; 
  public get peerPeeringId() {
    return this.getStringAttribute('peer_peering_id');
  }
  public set peerPeeringId(value: string) {
    this._peerPeeringId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerPeeringIdInput() {
    return this._peerPeeringId
  }

  // peering_id - computed: false, optional: false, required: true
  private _peeringId?: string; 
  public get peeringId() {
    return this.getStringAttribute('peering_id');
  }
  public set peeringId(value: string) {
    this._peeringId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringIdInput() {
    return this._peeringId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ExpressRouteCircuitConnectionTimeouts | undefined; 
  private __timeoutsOutput = new ExpressRouteCircuitConnectionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ExpressRouteCircuitConnectionTimeouts | undefined) {
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
      address_prefix_ipv4: cdktf.stringToTerraform(this._addressPrefixIpv4),
      address_prefix_ipv6: cdktf.stringToTerraform(this._addressPrefixIpv6),
      authorization_key: cdktf.stringToTerraform(this._authorizationKey),
      name: cdktf.stringToTerraform(this._name),
      peer_peering_id: cdktf.stringToTerraform(this._peerPeeringId),
      peering_id: cdktf.stringToTerraform(this._peeringId),
      timeouts: expressRouteCircuitConnectionTimeoutsToTerraform(this._timeouts),
    };
  }
}
