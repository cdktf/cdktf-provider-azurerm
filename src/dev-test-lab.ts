// https://www.terraform.io/docs/providers/azurerm/r/dev_test_lab.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DevTestLabConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly storageType?: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: DevTestLabTimeouts;
}
export interface DevTestLabTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class DevTestLab extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DevTestLabConfig) {
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
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._storageType = config.storageType;
    this._tags = config.tags;
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

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
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

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string;
  public get storageType() {
    return this._storageType;
  }
  public set storageType(value: string | undefined) {
    this._storageType = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // unique_identifier - computed: true, optional: false, required: true
  public get uniqueIdentifier() {
    return this.getStringAttribute('unique_identifier');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DevTestLabTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DevTestLabTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      storage_type: this._storageType,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
