// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_netapp_volume.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermNetappVolumeConfig extends TerraformMetaArguments {
  readonly accountName: string;
  readonly name: string;
  readonly poolName: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermNetappVolumeTimeouts;
}
export interface DataAzurermNetappVolumeTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermNetappVolume extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermNetappVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_netapp_volume',
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
    this._poolName = config.poolName;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName: string;
  public get accountName() {
    return this._accountName;
  }
  public set accountName(value: string) {
    this._accountName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // pool_name - computed: false, optional: false, required: true
  private _poolName: string;
  public get poolName() {
    return this._poolName;
  }
  public set poolName(value: string) {
    this._poolName = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // service_level - computed: true, optional: false, required: true
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }

  // storage_quota_in_gb - computed: true, optional: false, required: true
  public get storageQuotaInGb() {
    return this.getNumberAttribute('storage_quota_in_gb');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // volume_path - computed: true, optional: false, required: true
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermNetappVolumeTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermNetappVolumeTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: this._accountName,
      name: this._name,
      pool_name: this._poolName,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
