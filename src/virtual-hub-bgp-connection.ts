// https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_bgp_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualHubBgpConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_bgp_connection.html#name VirtualHubBgpConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_bgp_connection.html#peer_asn VirtualHubBgpConnection#peer_asn}
  */
  readonly peerAsn: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_bgp_connection.html#peer_ip VirtualHubBgpConnection#peer_ip}
  */
  readonly peerIp: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_bgp_connection.html#virtual_hub_id VirtualHubBgpConnection#virtual_hub_id}
  */
  readonly virtualHubId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_bgp_connection.html#timeouts VirtualHubBgpConnection#timeouts}
  */
  readonly timeouts?: VirtualHubBgpConnectionTimeouts;
}
export interface VirtualHubBgpConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_bgp_connection.html#create VirtualHubBgpConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_bgp_connection.html#delete VirtualHubBgpConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_bgp_connection.html#read VirtualHubBgpConnection#read}
  */
  readonly read?: string;
}

function virtualHubBgpConnectionTimeoutsToTerraform(struct?: VirtualHubBgpConnectionTimeoutsOutputReference | VirtualHubBgpConnectionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class VirtualHubBgpConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_bgp_connection.html azurerm_virtual_hub_bgp_connection}
*/
export class VirtualHubBgpConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_virtual_hub_bgp_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_bgp_connection.html azurerm_virtual_hub_bgp_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualHubBgpConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualHubBgpConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_hub_bgp_connection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._peerAsn = config.peerAsn;
    this._peerIp = config.peerIp;
    this._virtualHubId = config.virtualHubId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // peer_asn - computed: false, optional: false, required: true
  private _peerAsn?: number; 
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }
  public set peerAsn(value: number) {
    this._peerAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsnInput() {
    return this._peerAsn
  }

  // peer_ip - computed: false, optional: false, required: true
  private _peerIp?: string; 
  public get peerIp() {
    return this.getStringAttribute('peer_ip');
  }
  public set peerIp(value: string) {
    this._peerIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpInput() {
    return this._peerIp
  }

  // virtual_hub_id - computed: false, optional: false, required: true
  private _virtualHubId?: string; 
  public get virtualHubId() {
    return this.getStringAttribute('virtual_hub_id');
  }
  public set virtualHubId(value: string) {
    this._virtualHubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHubIdInput() {
    return this._virtualHubId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualHubBgpConnectionTimeouts | undefined; 
  private __timeoutsOutput = new VirtualHubBgpConnectionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: VirtualHubBgpConnectionTimeouts | undefined) {
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
      peer_asn: cdktf.numberToTerraform(this._peerAsn),
      peer_ip: cdktf.stringToTerraform(this._peerIp),
      virtual_hub_id: cdktf.stringToTerraform(this._virtualHubId),
      timeouts: virtualHubBgpConnectionTimeoutsToTerraform(this._timeouts),
    };
  }
}
