// https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#create_option ManagedDisk#create_option}
  */
  readonly createOption: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#disk_access_id ManagedDisk#disk_access_id}
  */
  readonly diskAccessId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#disk_encryption_set_id ManagedDisk#disk_encryption_set_id}
  */
  readonly diskEncryptionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#disk_iops_read_only ManagedDisk#disk_iops_read_only}
  */
  readonly diskIopsReadOnly?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#disk_iops_read_write ManagedDisk#disk_iops_read_write}
  */
  readonly diskIopsReadWrite?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#disk_mbps_read_only ManagedDisk#disk_mbps_read_only}
  */
  readonly diskMbpsReadOnly?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#disk_mbps_read_write ManagedDisk#disk_mbps_read_write}
  */
  readonly diskMbpsReadWrite?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#disk_size_gb ManagedDisk#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#image_reference_id ManagedDisk#image_reference_id}
  */
  readonly imageReferenceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#location ManagedDisk#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#logical_sector_size ManagedDisk#logical_sector_size}
  */
  readonly logicalSectorSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#max_shares ManagedDisk#max_shares}
  */
  readonly maxShares?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#name ManagedDisk#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#network_access_policy ManagedDisk#network_access_policy}
  */
  readonly networkAccessPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#on_demand_bursting_enabled ManagedDisk#on_demand_bursting_enabled}
  */
  readonly onDemandBurstingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#os_type ManagedDisk#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#resource_group_name ManagedDisk#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#source_resource_id ManagedDisk#source_resource_id}
  */
  readonly sourceResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#source_uri ManagedDisk#source_uri}
  */
  readonly sourceUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#storage_account_id ManagedDisk#storage_account_id}
  */
  readonly storageAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#storage_account_type ManagedDisk#storage_account_type}
  */
  readonly storageAccountType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#tags ManagedDisk#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#tier ManagedDisk#tier}
  */
  readonly tier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#trusted_launch_enabled ManagedDisk#trusted_launch_enabled}
  */
  readonly trustedLaunchEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#zones ManagedDisk#zones}
  */
  readonly zones?: string[];
  /**
  * encryption_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#encryption_settings ManagedDisk#encryption_settings}
  */
  readonly encryptionSettings?: ManagedDiskEncryptionSettings;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#timeouts ManagedDisk#timeouts}
  */
  readonly timeouts?: ManagedDiskTimeouts;
}
export interface ManagedDiskEncryptionSettingsDiskEncryptionKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#secret_url ManagedDisk#secret_url}
  */
  readonly secretUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#source_vault_id ManagedDisk#source_vault_id}
  */
  readonly sourceVaultId: string;
}

function managedDiskEncryptionSettingsDiskEncryptionKeyToTerraform(struct?: ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference | ManagedDiskEncryptionSettingsDiskEncryptionKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_url: cdktf.stringToTerraform(struct!.secretUrl),
    source_vault_id: cdktf.stringToTerraform(struct!.sourceVaultId),
  }
}

export class ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // secret_url - computed: false, optional: false, required: true
  private _secretUrl?: string; 
  public get secretUrl() {
    return this.getStringAttribute('secret_url');
  }
  public set secretUrl(value: string) {
    this._secretUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretUrlInput() {
    return this._secretUrl
  }

  // source_vault_id - computed: false, optional: false, required: true
  private _sourceVaultId?: string; 
  public get sourceVaultId() {
    return this.getStringAttribute('source_vault_id');
  }
  public set sourceVaultId(value: string) {
    this._sourceVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVaultIdInput() {
    return this._sourceVaultId
  }
}
export interface ManagedDiskEncryptionSettingsKeyEncryptionKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#key_url ManagedDisk#key_url}
  */
  readonly keyUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#source_vault_id ManagedDisk#source_vault_id}
  */
  readonly sourceVaultId: string;
}

function managedDiskEncryptionSettingsKeyEncryptionKeyToTerraform(struct?: ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference | ManagedDiskEncryptionSettingsKeyEncryptionKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_url: cdktf.stringToTerraform(struct!.keyUrl),
    source_vault_id: cdktf.stringToTerraform(struct!.sourceVaultId),
  }
}

export class ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // key_url - computed: false, optional: false, required: true
  private _keyUrl?: string; 
  public get keyUrl() {
    return this.getStringAttribute('key_url');
  }
  public set keyUrl(value: string) {
    this._keyUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUrlInput() {
    return this._keyUrl
  }

  // source_vault_id - computed: false, optional: false, required: true
  private _sourceVaultId?: string; 
  public get sourceVaultId() {
    return this.getStringAttribute('source_vault_id');
  }
  public set sourceVaultId(value: string) {
    this._sourceVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVaultIdInput() {
    return this._sourceVaultId
  }
}
export interface ManagedDiskEncryptionSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#enabled ManagedDisk#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * disk_encryption_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#disk_encryption_key ManagedDisk#disk_encryption_key}
  */
  readonly diskEncryptionKey?: ManagedDiskEncryptionSettingsDiskEncryptionKey;
  /**
  * key_encryption_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#key_encryption_key ManagedDisk#key_encryption_key}
  */
  readonly keyEncryptionKey?: ManagedDiskEncryptionSettingsKeyEncryptionKey;
}

function managedDiskEncryptionSettingsToTerraform(struct?: ManagedDiskEncryptionSettingsOutputReference | ManagedDiskEncryptionSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    disk_encryption_key: managedDiskEncryptionSettingsDiskEncryptionKeyToTerraform(struct!.diskEncryptionKey),
    key_encryption_key: managedDiskEncryptionSettingsKeyEncryptionKeyToTerraform(struct!.keyEncryptionKey),
  }
}

export class ManagedDiskEncryptionSettingsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // disk_encryption_key - computed: false, optional: true, required: false
  private _diskEncryptionKey?: ManagedDiskEncryptionSettingsDiskEncryptionKey | undefined; 
  private __diskEncryptionKeyOutput = new ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference(this as any, "disk_encryption_key", true);
  public get diskEncryptionKey() {
    return this.__diskEncryptionKeyOutput;
  }
  public putDiskEncryptionKey(value: ManagedDiskEncryptionSettingsDiskEncryptionKey | undefined) {
    this._diskEncryptionKey = value;
  }
  public resetDiskEncryptionKey() {
    this._diskEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionKeyInput() {
    return this._diskEncryptionKey
  }

  // key_encryption_key - computed: false, optional: true, required: false
  private _keyEncryptionKey?: ManagedDiskEncryptionSettingsKeyEncryptionKey | undefined; 
  private __keyEncryptionKeyOutput = new ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference(this as any, "key_encryption_key", true);
  public get keyEncryptionKey() {
    return this.__keyEncryptionKeyOutput;
  }
  public putKeyEncryptionKey(value: ManagedDiskEncryptionSettingsKeyEncryptionKey | undefined) {
    this._keyEncryptionKey = value;
  }
  public resetKeyEncryptionKey() {
    this._keyEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyEncryptionKeyInput() {
    return this._keyEncryptionKey
  }
}
export interface ManagedDiskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#create ManagedDisk#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#delete ManagedDisk#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#read ManagedDisk#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html#update ManagedDisk#update}
  */
  readonly update?: string;
}

function managedDiskTimeoutsToTerraform(struct?: ManagedDiskTimeoutsOutputReference | ManagedDiskTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ManagedDiskTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html azurerm_managed_disk}
*/
export class ManagedDisk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_managed_disk";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/managed_disk.html azurerm_managed_disk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedDiskConfig
  */
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
    this._diskAccessId = config.diskAccessId;
    this._diskEncryptionSetId = config.diskEncryptionSetId;
    this._diskIopsReadOnly = config.diskIopsReadOnly;
    this._diskIopsReadWrite = config.diskIopsReadWrite;
    this._diskMbpsReadOnly = config.diskMbpsReadOnly;
    this._diskMbpsReadWrite = config.diskMbpsReadWrite;
    this._diskSizeGb = config.diskSizeGb;
    this._imageReferenceId = config.imageReferenceId;
    this._location = config.location;
    this._logicalSectorSize = config.logicalSectorSize;
    this._maxShares = config.maxShares;
    this._name = config.name;
    this._networkAccessPolicy = config.networkAccessPolicy;
    this._onDemandBurstingEnabled = config.onDemandBurstingEnabled;
    this._osType = config.osType;
    this._resourceGroupName = config.resourceGroupName;
    this._sourceResourceId = config.sourceResourceId;
    this._sourceUri = config.sourceUri;
    this._storageAccountId = config.storageAccountId;
    this._storageAccountType = config.storageAccountType;
    this._tags = config.tags;
    this._tier = config.tier;
    this._trustedLaunchEnabled = config.trustedLaunchEnabled;
    this._zones = config.zones;
    this._encryptionSettings = config.encryptionSettings;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_option - computed: false, optional: false, required: true
  private _createOption?: string; 
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

  // disk_access_id - computed: false, optional: true, required: false
  private _diskAccessId?: string | undefined; 
  public get diskAccessId() {
    return this.getStringAttribute('disk_access_id');
  }
  public set diskAccessId(value: string | undefined) {
    this._diskAccessId = value;
  }
  public resetDiskAccessId() {
    this._diskAccessId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskAccessIdInput() {
    return this._diskAccessId
  }

  // disk_encryption_set_id - computed: false, optional: true, required: false
  private _diskEncryptionSetId?: string | undefined; 
  public get diskEncryptionSetId() {
    return this.getStringAttribute('disk_encryption_set_id');
  }
  public set diskEncryptionSetId(value: string | undefined) {
    this._diskEncryptionSetId = value;
  }
  public resetDiskEncryptionSetId() {
    this._diskEncryptionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetIdInput() {
    return this._diskEncryptionSetId
  }

  // disk_iops_read_only - computed: true, optional: true, required: false
  private _diskIopsReadOnly?: number | undefined; 
  public get diskIopsReadOnly() {
    return this.getNumberAttribute('disk_iops_read_only');
  }
  public set diskIopsReadOnly(value: number | undefined) {
    this._diskIopsReadOnly = value;
  }
  public resetDiskIopsReadOnly() {
    this._diskIopsReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIopsReadOnlyInput() {
    return this._diskIopsReadOnly
  }

  // disk_iops_read_write - computed: true, optional: true, required: false
  private _diskIopsReadWrite?: number | undefined; 
  public get diskIopsReadWrite() {
    return this.getNumberAttribute('disk_iops_read_write');
  }
  public set diskIopsReadWrite(value: number | undefined) {
    this._diskIopsReadWrite = value;
  }
  public resetDiskIopsReadWrite() {
    this._diskIopsReadWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIopsReadWriteInput() {
    return this._diskIopsReadWrite
  }

  // disk_mbps_read_only - computed: true, optional: true, required: false
  private _diskMbpsReadOnly?: number | undefined; 
  public get diskMbpsReadOnly() {
    return this.getNumberAttribute('disk_mbps_read_only');
  }
  public set diskMbpsReadOnly(value: number | undefined) {
    this._diskMbpsReadOnly = value;
  }
  public resetDiskMbpsReadOnly() {
    this._diskMbpsReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskMbpsReadOnlyInput() {
    return this._diskMbpsReadOnly
  }

  // disk_mbps_read_write - computed: true, optional: true, required: false
  private _diskMbpsReadWrite?: number | undefined; 
  public get diskMbpsReadWrite() {
    return this.getNumberAttribute('disk_mbps_read_write');
  }
  public set diskMbpsReadWrite(value: number | undefined) {
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
  private _diskSizeGb?: number | undefined; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number | undefined) {
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
  private _imageReferenceId?: string | undefined; 
  public get imageReferenceId() {
    return this.getStringAttribute('image_reference_id');
  }
  public set imageReferenceId(value: string | undefined) {
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
  private _location?: string; 
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

  // logical_sector_size - computed: true, optional: true, required: false
  private _logicalSectorSize?: number | undefined; 
  public get logicalSectorSize() {
    return this.getNumberAttribute('logical_sector_size');
  }
  public set logicalSectorSize(value: number | undefined) {
    this._logicalSectorSize = value;
  }
  public resetLogicalSectorSize() {
    this._logicalSectorSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalSectorSizeInput() {
    return this._logicalSectorSize
  }

  // max_shares - computed: true, optional: true, required: false
  private _maxShares?: number | undefined; 
  public get maxShares() {
    return this.getNumberAttribute('max_shares');
  }
  public set maxShares(value: number | undefined) {
    this._maxShares = value;
  }
  public resetMaxShares() {
    this._maxShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSharesInput() {
    return this._maxShares
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
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

  // network_access_policy - computed: false, optional: true, required: false
  private _networkAccessPolicy?: string | undefined; 
  public get networkAccessPolicy() {
    return this.getStringAttribute('network_access_policy');
  }
  public set networkAccessPolicy(value: string | undefined) {
    this._networkAccessPolicy = value;
  }
  public resetNetworkAccessPolicy() {
    this._networkAccessPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAccessPolicyInput() {
    return this._networkAccessPolicy
  }

  // on_demand_bursting_enabled - computed: false, optional: true, required: false
  private _onDemandBurstingEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get onDemandBurstingEnabled() {
    return this.getBooleanAttribute('on_demand_bursting_enabled') as any;
  }
  public set onDemandBurstingEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._onDemandBurstingEnabled = value;
  }
  public resetOnDemandBurstingEnabled() {
    this._onDemandBurstingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandBurstingEnabledInput() {
    return this._onDemandBurstingEnabled
  }

  // os_type - computed: false, optional: true, required: false
  private _osType?: string | undefined; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string | undefined) {
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
  private _resourceGroupName?: string; 
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
  private _sourceResourceId?: string | undefined; 
  public get sourceResourceId() {
    return this.getStringAttribute('source_resource_id');
  }
  public set sourceResourceId(value: string | undefined) {
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
  private _sourceUri?: string | undefined; 
  public get sourceUri() {
    return this.getStringAttribute('source_uri');
  }
  public set sourceUri(value: string | undefined) {
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
  private _storageAccountId?: string | undefined; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string | undefined) {
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
  private _storageAccountType?: string; 
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tier - computed: true, optional: true, required: false
  private _tier?: string | undefined; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string | undefined) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier
  }

  // trusted_launch_enabled - computed: false, optional: true, required: false
  private _trustedLaunchEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get trustedLaunchEnabled() {
    return this.getBooleanAttribute('trusted_launch_enabled') as any;
  }
  public set trustedLaunchEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._trustedLaunchEnabled = value;
  }
  public resetTrustedLaunchEnabled() {
    this._trustedLaunchEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedLaunchEnabledInput() {
    return this._trustedLaunchEnabled
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[] | undefined; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[] | undefined) {
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
  private _encryptionSettings?: ManagedDiskEncryptionSettings | undefined; 
  private __encryptionSettingsOutput = new ManagedDiskEncryptionSettingsOutputReference(this as any, "encryption_settings", true);
  public get encryptionSettings() {
    return this.__encryptionSettingsOutput;
  }
  public putEncryptionSettings(value: ManagedDiskEncryptionSettings | undefined) {
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
  private _timeouts?: ManagedDiskTimeouts | undefined; 
  private __timeoutsOutput = new ManagedDiskTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ManagedDiskTimeouts | undefined) {
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
      disk_access_id: cdktf.stringToTerraform(this._diskAccessId),
      disk_encryption_set_id: cdktf.stringToTerraform(this._diskEncryptionSetId),
      disk_iops_read_only: cdktf.numberToTerraform(this._diskIopsReadOnly),
      disk_iops_read_write: cdktf.numberToTerraform(this._diskIopsReadWrite),
      disk_mbps_read_only: cdktf.numberToTerraform(this._diskMbpsReadOnly),
      disk_mbps_read_write: cdktf.numberToTerraform(this._diskMbpsReadWrite),
      disk_size_gb: cdktf.numberToTerraform(this._diskSizeGb),
      image_reference_id: cdktf.stringToTerraform(this._imageReferenceId),
      location: cdktf.stringToTerraform(this._location),
      logical_sector_size: cdktf.numberToTerraform(this._logicalSectorSize),
      max_shares: cdktf.numberToTerraform(this._maxShares),
      name: cdktf.stringToTerraform(this._name),
      network_access_policy: cdktf.stringToTerraform(this._networkAccessPolicy),
      on_demand_bursting_enabled: cdktf.booleanToTerraform(this._onDemandBurstingEnabled),
      os_type: cdktf.stringToTerraform(this._osType),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      source_resource_id: cdktf.stringToTerraform(this._sourceResourceId),
      source_uri: cdktf.stringToTerraform(this._sourceUri),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      storage_account_type: cdktf.stringToTerraform(this._storageAccountType),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tier: cdktf.stringToTerraform(this._tier),
      trusted_launch_enabled: cdktf.booleanToTerraform(this._trustedLaunchEnabled),
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      encryption_settings: managedDiskEncryptionSettingsToTerraform(this._encryptionSettings),
      timeouts: managedDiskTimeoutsToTerraform(this._timeouts),
    };
  }
}
