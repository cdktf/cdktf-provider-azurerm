// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_dev_test_lab.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermDevTestLabConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermDevTestLabTimeouts;
}
export interface DataAzurermDevTestLabTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermDevTestLab extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermDevTestLabConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dev_test_lab',
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

  // artifacts_storage_account_id - computed: true, optional: false, required: true
  public get artifactsStorageAccountId() {
    return this.getStringAttribute('artifacts_storage_account_id');
  }

  // default_premium_storage_account_id - computed: true, optional: false, required: true
  public get defaultPremiumStorageAccountId() {
    return this.getStringAttribute('default_premium_storage_account_id');
  }

  // default_storage_account_id - computed: true, optional: false, required: true
  public get defaultStorageAccountId() {
    return this.getStringAttribute('default_storage_account_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key_vault_id - computed: true, optional: false, required: true
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
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

  // premium_data_disk_storage_account_id - computed: true, optional: false, required: true
  public get premiumDataDiskStorageAccountId() {
    return this.getStringAttribute('premium_data_disk_storage_account_id');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // storage_type - computed: true, optional: false, required: true
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // unique_identifier - computed: true, optional: false, required: true
  public get uniqueIdentifier() {
    return this.getStringAttribute('unique_identifier');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermDevTestLabTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermDevTestLabTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
