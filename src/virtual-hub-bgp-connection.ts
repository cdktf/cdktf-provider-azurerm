// https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_bgp_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VirtualHubBgpConnectionConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly peerAsn: number;
  readonly peerIp: string;
  readonly virtualHubId: string;
  /** timeouts block */
  readonly timeouts?: VirtualHubBgpConnectionTimeouts;
}
export interface VirtualHubBgpConnectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
}

// Resource

export class VirtualHubBgpConnection extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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

  // peer_asn - computed: false, optional: false, required: true
  private _peerAsn: number;
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
  private _peerIp: string;
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
  private _virtualHubId: string;
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
  private _timeouts?: VirtualHubBgpConnectionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VirtualHubBgpConnectionTimeouts ) {
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
      name: this._name,
      peer_asn: this._peerAsn,
      peer_ip: this._peerIp,
      virtual_hub_id: this._virtualHubId,
      timeouts: this._timeouts,
    };
  }
}
