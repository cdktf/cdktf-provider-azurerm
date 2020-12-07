// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_virtual_wan.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermVirtualWanConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermVirtualWanTimeouts;
}
export interface DataAzurermVirtualWanTimeouts {
  readonly read?: string;
}

function dataAzurermVirtualWanTimeoutsToTerraform(struct?: DataAzurermVirtualWanTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermVirtualWan extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermVirtualWanConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_wan',
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

  // allow_branch_to_branch_traffic - computed: true, optional: false, required: false
  public get allowBranchToBranchTraffic() {
    return this.getBooleanAttribute('allow_branch_to_branch_traffic');
  }

  // disable_vpn_encryption - computed: true, optional: false, required: false
  public get disableVpnEncryption() {
    return this.getBooleanAttribute('disable_vpn_encryption');
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

  // office365_local_breakout_category - computed: true, optional: false, required: false
  public get office365LocalBreakoutCategory() {
    return this.getStringAttribute('office365_local_breakout_category');
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

  // sku - computed: true, optional: false, required: false
  public get sku() {
    return this.getStringAttribute('sku');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // virtual_hub_ids - computed: true, optional: false, required: false
  public get virtualHubIds() {
    return this.getListAttribute('virtual_hub_ids');
  }

  // vpn_site_ids - computed: true, optional: false, required: false
  public get vpnSiteIds() {
    return this.getListAttribute('vpn_site_ids');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermVirtualWanTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermVirtualWanTimeouts ) {
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
      timeouts: dataAzurermVirtualWanTimeoutsToTerraform(this._timeouts),
    };
  }
}
