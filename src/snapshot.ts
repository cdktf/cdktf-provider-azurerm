// https://www.terraform.io/docs/providers/azurerm/r/snapshot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SnapshotConfig extends TerraformMetaArguments {
  readonly createOption: string;
  readonly diskSizeGb?: number;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly sourceResourceId?: string;
  readonly sourceUri?: string;
  readonly storageAccountId?: string;
  readonly tags?: { [key: string]: string };
  /** encryption_settings block */
  readonly encryptionSettings?: SnapshotEncryptionSettings[];
  /** timeouts block */
  readonly timeouts?: SnapshotTimeouts;
}
export interface SnapshotEncryptionSettingsDiskEncryptionKey {
  readonly secretUrl: string;
  readonly sourceVaultId: string;
}
export interface SnapshotEncryptionSettingsKeyEncryptionKey {
  readonly keyUrl: string;
  readonly sourceVaultId: string;
}
export interface SnapshotEncryptionSettings {
  readonly enabled: boolean;
  /** disk_encryption_key block */
  readonly diskEncryptionKey?: SnapshotEncryptionSettingsDiskEncryptionKey[];
  /** key_encryption_key block */
  readonly keyEncryptionKey?: SnapshotEncryptionSettingsKeyEncryptionKey[];
}
export interface SnapshotTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class Snapshot extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SnapshotConfig) {
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
    this._createOption = config.createOption;
    this._diskSizeGb = config.diskSizeGb;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sourceResourceId = config.sourceResourceId;
    this._sourceUri = config.sourceUri;
    this._storageAccountId = config.storageAccountId;
    this._tags = config.tags;
    this._encryptionSettings = config.encryptionSettings;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_option - computed: false, optional: false, required: true
  private _createOption: string;
  public get createOption() {
    return this._createOption;
  }
  public set createOption(value: string) {
    this._createOption = value;
  }

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: number;
  public get diskSizeGb() {
    return this._diskSizeGb ?? this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number | undefined) {
    this._diskSizeGb = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // source_resource_id - computed: false, optional: true, required: false
  private _sourceResourceId?: string;
  public get sourceResourceId() {
    return this._sourceResourceId;
  }
  public set sourceResourceId(value: string | undefined) {
    this._sourceResourceId = value;
  }

  // source_uri - computed: false, optional: true, required: false
  private _sourceUri?: string;
  public get sourceUri() {
    return this._sourceUri;
  }
  public set sourceUri(value: string | undefined) {
    this._sourceUri = value;
  }

  // storage_account_id - computed: false, optional: true, required: false
  private _storageAccountId?: string;
  public get storageAccountId() {
    return this._storageAccountId;
  }
  public set storageAccountId(value: string | undefined) {
    this._storageAccountId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // encryption_settings - computed: false, optional: true, required: false
  private _encryptionSettings?: SnapshotEncryptionSettings[];
  public get encryptionSettings() {
    return this._encryptionSettings;
  }
  public set encryptionSettings(value: SnapshotEncryptionSettings[] | undefined) {
    this._encryptionSettings = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SnapshotTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SnapshotTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      create_option: this._createOption,
      disk_size_gb: this._diskSizeGb,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      source_resource_id: this._sourceResourceId,
      source_uri: this._sourceUri,
      storage_account_id: this._storageAccountId,
      tags: this._tags,
      encryption_settings: this._encryptionSettings,
      timeouts: this._timeouts,
    };
  }
}
