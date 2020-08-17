// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_snapshot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAzurermSnapshotConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermSnapshotTimeouts;
}
export class DataAzurermSnapshotEncryptionSettingsDiskEncryptionKey extends ComplexComputedList {

  // secret_url - computed: true, optional: false, required: true
  public get secretUrl() {
    return this.getStringAttribute('secret_url');
  }

  // source_vault_id - computed: true, optional: false, required: true
  public get sourceVaultId() {
    return this.getStringAttribute('source_vault_id');
  }
}
export class DataAzurermSnapshotEncryptionSettingsKeyEncryptionKey extends ComplexComputedList {

  // key_url - computed: true, optional: false, required: true
  public get keyUrl() {
    return this.getStringAttribute('key_url');
  }

  // source_vault_id - computed: true, optional: false, required: true
  public get sourceVaultId() {
    return this.getStringAttribute('source_vault_id');
  }
}
export class DataAzurermSnapshotEncryptionSettings extends ComplexComputedList {

  // disk_encryption_key - computed: true, optional: false, required: true
  public get diskEncryptionKey() {
    return 'not implemented' as any;
  }

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // key_encryption_key - computed: true, optional: false, required: true
  public get keyEncryptionKey() {
    return 'not implemented' as any;
  }
}
export interface DataAzurermSnapshotTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermSnapshot extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_snapshot',
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

  // creation_option - computed: true, optional: false, required: true
  public get creationOption() {
    return this.getStringAttribute('creation_option');
  }

  // disk_size_gb - computed: true, optional: false, required: true
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }

  // encryption_settings - computed: true, optional: false, required: true
  public encryptionSettings(index: string) {
    return new DataAzurermSnapshotEncryptionSettings(this, 'encryption_settings', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // os_type - computed: true, optional: false, required: true
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // source_resource_id - computed: true, optional: false, required: true
  public get sourceResourceId() {
    return this.getStringAttribute('source_resource_id');
  }

  // source_uri - computed: true, optional: false, required: true
  public get sourceUri() {
    return this.getStringAttribute('source_uri');
  }

  // storage_account_id - computed: true, optional: false, required: true
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermSnapshotTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermSnapshotTimeouts | undefined) {
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
