// https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ManagedDiskConfig extends TerraformMetaArguments {
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
export interface ManagedDiskEncryptionSettingsKeyEncryptionKey {
  readonly keyUrl: string;
  readonly sourceVaultId: string;
}
export interface ManagedDiskEncryptionSettings {
  readonly enabled: boolean;
  /** disk_encryption_key block */
  readonly diskEncryptionKey?: ManagedDiskEncryptionSettingsDiskEncryptionKey[];
  /** key_encryption_key block */
  readonly keyEncryptionKey?: ManagedDiskEncryptionSettingsKeyEncryptionKey[];
}
export interface ManagedDiskTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ManagedDisk extends TerraformResource {

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
    return this._createOption;
  }
  public set createOption(value: string) {
    this._createOption = value;
  }

  // disk_encryption_set_id - computed: false, optional: true, required: false
  private _diskEncryptionSetId?: string;
  public get diskEncryptionSetId() {
    return this._diskEncryptionSetId;
  }
  public set diskEncryptionSetId(value: string | undefined) {
    this._diskEncryptionSetId = value;
  }

  // disk_iops_read_write - computed: true, optional: true, required: false
  private _diskIopsReadWrite?: number;
  public get diskIopsReadWrite() {
    return this._diskIopsReadWrite ?? this.getNumberAttribute('disk_iops_read_write');
  }
  public set diskIopsReadWrite(value: number | undefined) {
    this._diskIopsReadWrite = value;
  }

  // disk_mbps_read_write - computed: true, optional: true, required: false
  private _diskMbpsReadWrite?: number;
  public get diskMbpsReadWrite() {
    return this._diskMbpsReadWrite ?? this.getNumberAttribute('disk_mbps_read_write');
  }
  public set diskMbpsReadWrite(value: number | undefined) {
    this._diskMbpsReadWrite = value;
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

  // image_reference_id - computed: false, optional: true, required: false
  private _imageReferenceId?: string;
  public get imageReferenceId() {
    return this._imageReferenceId;
  }
  public set imageReferenceId(value: string | undefined) {
    this._imageReferenceId = value;
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

  // os_type - computed: false, optional: true, required: false
  private _osType?: string;
  public get osType() {
    return this._osType;
  }
  public set osType(value: string | undefined) {
    this._osType = value;
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

  // source_uri - computed: true, optional: true, required: false
  private _sourceUri?: string;
  public get sourceUri() {
    return this._sourceUri ?? this.getStringAttribute('source_uri');
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

  // storage_account_type - computed: false, optional: false, required: true
  private _storageAccountType: string;
  public get storageAccountType() {
    return this._storageAccountType;
  }
  public set storageAccountType(value: string) {
    this._storageAccountType = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[];
  public get zones() {
    return this._zones;
  }
  public set zones(value: string[] | undefined) {
    this._zones = value;
  }

  // encryption_settings - computed: false, optional: true, required: false
  private _encryptionSettings?: ManagedDiskEncryptionSettings[];
  public get encryptionSettings() {
    return this._encryptionSettings;
  }
  public set encryptionSettings(value: ManagedDiskEncryptionSettings[] | undefined) {
    this._encryptionSettings = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ManagedDiskTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ManagedDiskTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_option: this._createOption,
      disk_encryption_set_id: this._diskEncryptionSetId,
      disk_iops_read_write: this._diskIopsReadWrite,
      disk_mbps_read_write: this._diskMbpsReadWrite,
      disk_size_gb: this._diskSizeGb,
      image_reference_id: this._imageReferenceId,
      location: this._location,
      name: this._name,
      os_type: this._osType,
      resource_group_name: this._resourceGroupName,
      source_resource_id: this._sourceResourceId,
      source_uri: this._sourceUri,
      storage_account_id: this._storageAccountId,
      storage_account_type: this._storageAccountType,
      tags: this._tags,
      zones: this._zones,
      encryption_settings: this._encryptionSettings,
      timeouts: this._timeouts,
    };
  }
}
