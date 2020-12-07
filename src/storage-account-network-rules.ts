// https://www.terraform.io/docs/providers/azurerm/r/storage_account_network_rules_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageAccountNetworkRulesAConfig extends cdktf.TerraformMetaArguments {
  readonly bypass?: string[];
  readonly defaultAction: string;
  readonly ipRules?: string[];
  readonly resourceGroupName: string;
  readonly storageAccountName: string;
  readonly virtualNetworkSubnetIds?: string[];
  /** timeouts block */
  readonly timeouts?: StorageAccountNetworkRulesTimeouts;
}
export interface StorageAccountNetworkRulesTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function storageAccountNetworkRulesTimeoutsToTerraform(struct?: StorageAccountNetworkRulesTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class StorageAccountNetworkRulesA extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StorageAccountNetworkRulesAConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_account_network_rules',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bypass = config.bypass;
    this._defaultAction = config.defaultAction;
    this._ipRules = config.ipRules;
    this._resourceGroupName = config.resourceGroupName;
    this._storageAccountName = config.storageAccountName;
    this._virtualNetworkSubnetIds = config.virtualNetworkSubnetIds;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bypass - computed: true, optional: true, required: false
  private _bypass?: string[];
  public get bypass() {
    return this.getListAttribute('bypass');
  }
  public set bypass(value: string[]) {
    this._bypass = value;
  }
  public resetBypass() {
    this._bypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassInput() {
    return this._bypass
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction: string;
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_rules - computed: true, optional: true, required: false
  private _ipRules?: string[];
  public get ipRules() {
    return this.getListAttribute('ip_rules');
  }
  public set ipRules(value: string[]) {
    this._ipRules = value;
  }
  public resetIpRules() {
    this._ipRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRulesInput() {
    return this._ipRules
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

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName: string;
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName
  }

  // virtual_network_subnet_ids - computed: true, optional: true, required: false
  private _virtualNetworkSubnetIds?: string[];
  public get virtualNetworkSubnetIds() {
    return this.getListAttribute('virtual_network_subnet_ids');
  }
  public set virtualNetworkSubnetIds(value: string[]) {
    this._virtualNetworkSubnetIds = value;
  }
  public resetVirtualNetworkSubnetIds() {
    this._virtualNetworkSubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkSubnetIdsInput() {
    return this._virtualNetworkSubnetIds
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageAccountNetworkRulesTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StorageAccountNetworkRulesTimeouts ) {
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
      bypass: cdktf.listMapper(cdktf.stringToTerraform)(this._bypass),
      default_action: cdktf.stringToTerraform(this._defaultAction),
      ip_rules: cdktf.listMapper(cdktf.stringToTerraform)(this._ipRules),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      storage_account_name: cdktf.stringToTerraform(this._storageAccountName),
      virtual_network_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._virtualNetworkSubnetIds),
      timeouts: storageAccountNetworkRulesTimeoutsToTerraform(this._timeouts),
    };
  }
}
