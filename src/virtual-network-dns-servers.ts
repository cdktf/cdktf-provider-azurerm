// https://www.terraform.io/docs/providers/azurerm/r/virtual_network_dns_servers.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualNetworkDnsServersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_dns_servers.html#dns_servers VirtualNetworkDnsServers#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_dns_servers.html#virtual_network_id VirtualNetworkDnsServers#virtual_network_id}
  */
  readonly virtualNetworkId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_dns_servers.html#timeouts VirtualNetworkDnsServers#timeouts}
  */
  readonly timeouts?: VirtualNetworkDnsServersTimeouts;
}
export interface VirtualNetworkDnsServersTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_dns_servers.html#create VirtualNetworkDnsServers#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_dns_servers.html#delete VirtualNetworkDnsServers#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_dns_servers.html#read VirtualNetworkDnsServers#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_dns_servers.html#update VirtualNetworkDnsServers#update}
  */
  readonly update?: string;
}

function virtualNetworkDnsServersTimeoutsToTerraform(struct?: VirtualNetworkDnsServersTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_dns_servers.html azurerm_virtual_network_dns_servers}
*/
export class VirtualNetworkDnsServers extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_dns_servers.html azurerm_virtual_network_dns_servers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualNetworkDnsServersConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualNetworkDnsServersConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_network_dns_servers',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dnsServers = config.dnsServers;
    this._virtualNetworkId = config.virtualNetworkId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[];
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[] ) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // virtual_network_id - computed: false, optional: false, required: true
  private _virtualNetworkId: string;
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualNetworkDnsServersTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VirtualNetworkDnsServersTimeouts ) {
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
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._dnsServers),
      virtual_network_id: cdktf.stringToTerraform(this._virtualNetworkId),
      timeouts: virtualNetworkDnsServersTimeoutsToTerraform(this._timeouts),
    };
  }
}
