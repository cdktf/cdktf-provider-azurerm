// https://www.terraform.io/docs/providers/azurerm/r/data_lake_store_virtual_network_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLakeStoreVirtualNetworkRuleConfig extends cdktf.TerraformMetaArguments {
  readonly accountName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly subnetId: string;
  /** timeouts block */
  readonly timeouts?: DataLakeStoreVirtualNetworkRuleTimeouts;
}
export interface DataLakeStoreVirtualNetworkRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function dataLakeStoreVirtualNetworkRuleTimeoutsToTerraform(struct?: DataLakeStoreVirtualNetworkRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DataLakeStoreVirtualNetworkRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataLakeStoreVirtualNetworkRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_lake_store_virtual_network_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountName = config.accountName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._subnetId = config.subnetId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName: string;
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName
  }

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

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataLakeStoreVirtualNetworkRuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataLakeStoreVirtualNetworkRuleTimeouts ) {
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
      account_name: cdktf.stringToTerraform(this._accountName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      timeouts: dataLakeStoreVirtualNetworkRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
