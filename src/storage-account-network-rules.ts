// https://www.terraform.io/docs/providers/azurerm/r/storage_account_network_rules_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StorageAccountNetworkRulesAConfig extends TerraformMetaArguments {
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

// Resource

export class StorageAccountNetworkRulesA extends TerraformResource {

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
    return this._bypass ?? this.getListAttribute('bypass');
  }
  public set bypass(value: string[] | undefined) {
    this._bypass = value;
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction: string;
  public get defaultAction() {
    return this._defaultAction;
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_rules - computed: true, optional: true, required: false
  private _ipRules?: string[];
  public get ipRules() {
    return this._ipRules ?? this.getListAttribute('ip_rules');
  }
  public set ipRules(value: string[] | undefined) {
    this._ipRules = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName: string;
  public get storageAccountName() {
    return this._storageAccountName;
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }

  // virtual_network_subnet_ids - computed: true, optional: true, required: false
  private _virtualNetworkSubnetIds?: string[];
  public get virtualNetworkSubnetIds() {
    return this._virtualNetworkSubnetIds ?? this.getListAttribute('virtual_network_subnet_ids');
  }
  public set virtualNetworkSubnetIds(value: string[] | undefined) {
    this._virtualNetworkSubnetIds = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageAccountNetworkRulesTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: StorageAccountNetworkRulesTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bypass: this._bypass,
      default_action: this._defaultAction,
      ip_rules: this._ipRules,
      resource_group_name: this._resourceGroupName,
      storage_account_name: this._storageAccountName,
      virtual_network_subnet_ids: this._virtualNetworkSubnetIds,
      timeouts: this._timeouts,
    };
  }
}
