// https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedDiskConfig extends cdktf.TerraformMetaArguments {
  readonly createOption: string;
  readonly diskEncryptionSetId?: string;
  readonly diskIopsReadWrite?: number;
  readonly diskMbpsReadWrite?: number;
  readonly diskSizeGb?: number;
  readonly imageReferenceId?: string;
  readonly location: string;
  readonly name: string;
  readonly osType?: string;
  readonly resourceGroupName: string;
  readonly sourceResourceId?: string;
  readonly sourceUri?: string;
  readonly storageAccountId?: string;
  readonly storageAccountType: string;
  readonly tags?: { [key: string]: string };
  readonly zones?: string[];
  /** encryption_settings block */
  readonly encryptionSettings?: ManagedDiskEncryptionSettings[];
  /** timeouts block */
  readonly timeouts?: ManagedDiskTimeouts;
}
export interface ManagedDiskEncryptionSettingsDiskEncryptionKey {
  readonly secretUrl: string;
  readonly sourceVaultId: string;
}

function managedDiskEncryptionSettingsDiskEncryptionKeyToTerraform(struct?: ManagedDiskEncryptionSettingsDiskEncryptionKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    secret_url: cdktf.stringToTerraform(struct!.secretUrl),
    source_vault_id: cdktf.stringToTerraform(struct!.sourceVaultId),
  }
}

export interface ManagedDiskEncryptionSettingsKeyEncryptionKey {
  readonly keyUrl: string;
  readonly sourceVaultId: string;
}

function managedDiskEncryptionSettingsKeyEncryptionKeyToTerraform(struct?: ManagedDiskEncryptionSettingsKeyEncryptionKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_url: cdktf.stringToTerraform(struct!.keyUrl),
    source_vault_id: cdktf.stringToTerraform(struct!.sourceVaultId),
  }
}

export interface ManagedDiskEncryptionSettings {
  readonly enabled: boolean;
  /** disk_encryption_key block */
  readonly diskEncryptionKey?: ManagedDiskEncryptionSettingsDiskEncryptionKey[];
  /** key_encryption_key block */
  readonly keyEncryptionKey?: ManagedDiskEncryptionSettingsKeyEncryptionKey[];
}

function managedDiskEncryptionSettingsToTerraform(struct?: ManagedDiskEncryptionSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    disk_encryption_key: cdktf.listMapper(managedDiskEncryptionSettingsDiskEncryptionKeyToTerraform)(struct!.diskEncryptionKey),
    key_encryption_key: cdktf.listMapper(managedDiskEncryptionSettingsKeyEncryptionKeyToTerraform)(struct!.keyEncryptionKey),
  }
}

export interface ManagedDiskTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function managedDiskTimeoutsToTerraform(struct?: ManagedDiskTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ManagedDisk extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ManagedDiskConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_managed_disk',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._createOption = config.createOption;
    this._diskEncryptionSetId = config.diskEncryptionSetId;
    this._diskIopsReadWrite = config.diskIopsReadWrite;
    this._diskMbpsReadWrite = config.diskMbpsReadWrite;
    this._diskSizeGb = config.diskSizeGb;
    this._imageReferenceId = config.imageReferenceId;
    this._location = config.location;
    this._name = config.name;
    this._osType = config.osType;
    this._resourceGroupName = config.resourceGroupName;
    this._sourceResourceId = config.sourceResourceId;
    this._sourceUri = config.sourceUri;
    this._storageAccountId = config.storageAccountId;
    this._storageAccountType = config.storageAccountType;
    this._tags = config.tags;
    this._zones = config.zones;
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

  // disk_encryption_set_id - computed: false, optional: true, required: false
  private _diskEncryptionSetId?: string;
  public get diskEncryptionSetId() {
    return this.getStringAttribute('disk_encryption_set_id');
  }
  public set diskEncryptionSetId(value: string ) {
    this._diskEncryptionSetId = value;
  }
  public resetDiskEncryptionSetId() {
    this._diskEncryptionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetIdInput() {
    return this._diskEncryptionSetId
  }

  // disk_iops_read_write - computed: true, optional: true, required: false
  private _diskIopsReadWrite?: number;
  public get diskIopsReadWrite() {
    return this.getNumberAttribute('disk_iops_read_write');
  }
  public set diskIopsReadWrite(value: number) {
    this._diskIopsReadWrite = value;
  }
  public resetDiskIopsReadWrite() {
    this._diskIopsReadWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIopsReadWriteInput() {
    return this._diskIopsReadWrite
  }

  // disk_mbps_read_write - computed: true, optional: true, required: false
  private _diskMbpsReadWrite?: number;
  public get diskMbpsReadWrite() {
    return this.getNumberAttribute('disk_mbps_read_write');
  }
  public set diskMbpsReadWrite(value: number) {
    this._diskMbpsReadWrite = value;
  }
  public resetDiskMbpsReadWrite() {
    this._diskMbpsReadWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskMbpsReadWriteInput() {
    return this._diskMbpsReadWrite
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

  // image_reference_id - computed: false, optional: true, required: false
  private _imageReferenceId?: string;
  public get imageReferenceId() {
    return this.getStringAttribute('image_reference_id');
  }
  public set imageReferenceId(value: string ) {
    this._imageReferenceId = value;
  }
  public resetImageReferenceId() {
    this._imageReferenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageReferenceIdInput() {
    return this._imageReferenceId
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

  // os_type - computed: false, optional: true, required: false
  private _osType?: string;
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string ) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType
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

  // source_uri - computed: true, optional: true, required: false
  private _sourceUri?: string;
  public get sourceUri() {
    return this.getStringAttribute('source_uri');
  }
  public set sourceUri(value: string) {
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

  // storage_account_type - computed: false, optional: false, required: true
  private _storageAccountType: string;
  public get storageAccountType() {
    return this.getStringAttribute('storage_account_type');
  }
  public set storageAccountType(value: string) {
    this._storageAccountType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountTypeInput() {
    return this._storageAccountType
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

  // zones - computed: false, optional: true, required: false
  private _zones?: string[];
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[] ) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones
  }

  // encryption_settings - computed: false, optional: true, required: false
  private _encryptionSettings?: ManagedDiskEncryptionSettings[];
  public get encryptionSettings() {
    return this.interpolationForAttribute('encryption_settings') as any;
  }
  public set encryptionSettings(value: ManagedDiskEncryptionSettings[] ) {
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
  private _timeouts?: ManagedDiskTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ManagedDiskTimeouts ) {
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
      disk_encryption_set_id: cdktf.stringToTerraform(this._diskEncryptionSetId),
      disk_iops_read_write: cdktf.numberToTerraform(this._diskIopsReadWrite),
      disk_mbps_read_write: cdktf.numberToTerraform(this._diskMbpsReadWrite),
      disk_size_gb: cdktf.numberToTerraform(this._diskSizeGb),
      image_reference_id: cdktf.stringToTerraform(this._imageReferenceId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      os_type: cdktf.stringToTerraform(this._osType),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      source_resource_id: cdktf.stringToTerraform(this._sourceResourceId),
      source_uri: cdktf.stringToTerraform(this._sourceUri),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      storage_account_type: cdktf.stringToTerraform(this._storageAccountType),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      encryption_settings: cdktf.listMapper(managedDiskEncryptionSettingsToTerraform)(this._encryptionSettings),
      timeouts: managedDiskTimeoutsToTerraform(this._timeouts),
    };
  }
}
