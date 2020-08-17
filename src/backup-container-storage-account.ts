// https://www.terraform.io/docs/providers/azurerm/r/backup_container_storage_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BackupContainerStorageAccountConfig extends TerraformMetaArguments {
  readonly recoveryVaultName: string;
  readonly resourceGroupName: string;
  readonly storageAccountId: string;
  /** timeouts block */
  readonly timeouts?: BackupContainerStorageAccountTimeouts;
}
export interface BackupContainerStorageAccountTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class BackupContainerStorageAccount extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BackupContainerStorageAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_backup_container_storage_account',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._recoveryVaultName = config.recoveryVaultName;
    this._resourceGroupName = config.resourceGroupName;
    this._storageAccountId = config.storageAccountId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // recovery_vault_name - computed: false, optional: false, required: true
  private _recoveryVaultName: string;
  public get recoveryVaultName() {
    return this._recoveryVaultName;
  }
  public set recoveryVaultName(value: string) {
    this._recoveryVaultName = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId: string;
  public get storageAccountId() {
    return this._storageAccountId;
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BackupContainerStorageAccountTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BackupContainerStorageAccountTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      recovery_vault_name: this._recoveryVaultName,
      resource_group_name: this._resourceGroupName,
      storage_account_id: this._storageAccountId,
      timeouts: this._timeouts,
    };
  }
}
