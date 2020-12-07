// https://www.terraform.io/docs/providers/azurerm/r/snapshot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnapshotConfig extends cdktf.TerraformMetaArguments {
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

function snapshotEncryptionSettingsDiskEncryptionKeyToTerraform(struct?: SnapshotEncryptionSettingsDiskEncryptionKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    secret_url: cdktf.stringToTerraform(struct!.secretUrl),
    source_vault_id: cdktf.stringToTerraform(struct!.sourceVaultId),
  }
}

export interface SnapshotEncryptionSettingsKeyEncryptionKey {
  readonly keyUrl: string;
  readonly sourceVaultId: string;
}

function snapshotEncryptionSettingsKeyEncryptionKeyToTerraform(struct?: SnapshotEncryptionSettingsKeyEncryptionKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_url: cdktf.stringToTerraform(struct!.keyUrl),
    source_vault_id: cdktf.stringToTerraform(struct!.sourceVaultId),
  }
}

export interface SnapshotEncryptionSettings {
  readonly enabled: boolean;
  /** disk_encryption_key block */
  readonly diskEncryptionKey?: SnapshotEncryptionSettingsDiskEncryptionKey[];
  /** key_encryption_key block */
  readonly keyEncryptionKey?: SnapshotEncryptionSettingsKeyEncryptionKey[];
}

function snapshotEncryptionSettingsToTerraform(struct?: SnapshotEncryptionSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    disk_encryption_key: cdktf.listMapper(snapshotEncryptionSettingsDiskEncryptionKeyToTerraform)(struct!.diskEncryptionKey),
    key_encryption_key: cdktf.listMapper(snapshotEncryptionSettingsKeyEncryptionKeyToTerraform)(struct!.keyEncryptionKey),
  }
}

export interface SnapshotTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function snapshotTimeoutsToTerraform(struct?: SnapshotTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Snapshot extends cdktf.TerraformResource {

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
    return this.getStringAttribute('create_option');
  }
  public set createOption(value: string) {
    this._createOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createOptionInput() {
    return this._createOption
  }

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: number;
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // source_resource_id - computed: false, optional: true, required: false
  private _sourceResourceId?: string;
  public get sourceResourceId() {
    return this.getStringAttribute('source_resource_id');
  }
  public set sourceResourceId(value: string ) {
    this._sourceResourceId = value;
  }
  public resetSourceResourceId() {
    this._sourceResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceResourceIdInput() {
    return this._sourceResourceId
  }

  // source_uri - computed: false, optional: true, required: false
  private _sourceUri?: string;
  public get sourceUri() {
    return this.getStringAttribute('source_uri');
  }
  public set sourceUri(value: string ) {
    this._sourceUri = value;
  }
  public resetSourceUri() {
    this._sourceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUriInput() {
    return this._sourceUri
  }

  // storage_account_id - computed: false, optional: true, required: false
  private _storageAccountId?: string;
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string ) {
    this._storageAccountId = value;
  }
  public resetStorageAccountId() {
    this._storageAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // encryption_settings - computed: false, optional: true, required: false
  private _encryptionSettings?: SnapshotEncryptionSettings[];
  public get encryptionSettings() {
    return this.interpolationForAttribute('encryption_settings') as any;
  }
  public set encryptionSettings(value: SnapshotEncryptionSettings[] ) {
    this._encryptionSettings = value;
  }
  public resetEncryptionSettings() {
    this._encryptionSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSettingsInput() {
    return this._encryptionSettings
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SnapshotTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SnapshotTimeouts ) {
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
      create_option: cdktf.stringToTerraform(this._createOption),
      disk_size_gb: cdktf.numberToTerraform(this._diskSizeGb),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      source_resource_id: cdktf.stringToTerraform(this._sourceResourceId),
      source_uri: cdktf.stringToTerraform(this._sourceUri),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      encryption_settings: cdktf.listMapper(snapshotEncryptionSettingsToTerraform)(this._encryptionSettings),
      timeouts: snapshotTimeoutsToTerraform(this._timeouts),
    };
  }
}
