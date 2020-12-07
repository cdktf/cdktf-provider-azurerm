// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_virtual_network.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermVirtualNetworkConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermVirtualNetworkTimeouts;
}
export interface DataAzurermVirtualNetworkTimeouts {
  readonly read?: string;
}

function dataAzurermVirtualNetworkTimeoutsToTerraform(struct?: DataAzurermVirtualNetworkTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermVirtualNetwork extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermVirtualNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_network',
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

  // address_space - computed: true, optional: false, required: false
  public get addressSpace() {
    return this.getListAttribute('address_space');
  }

  // dns_servers - computed: true, optional: false, required: false
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
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

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }

  // vnet_peerings - computed: true, optional: false, required: false
  public vnetPeerings(key: string): string {
    return new cdktf.StringMap(this, 'vnet_peerings').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermVirtualNetworkTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermVirtualNetworkTimeouts ) {
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
      timeouts: dataAzurermVirtualNetworkTimeoutsToTerraform(this._timeouts),
    };
  }
}
