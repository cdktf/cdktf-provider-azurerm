// https://www.terraform.io/docs/providers/azurerm/r/snapshot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot.html#create_option Snapshot#create_option}
  */
  readonly createOption: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot.html#disk_size_gb Snapshot#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot.html#location Snapshot#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot.html#name Snapshot#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot.html#resource_group_name Snapshot#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot.html#source_resource_id Snapshot#source_resource_id}
  */
  readonly sourceResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot.html#source_uri Snapshot#source_uri}
  */
  readonly sourceUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot.html#storage_account_id Snapshot#storage_account_id}
  */
  readonly storageAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot.html#tags Snapshot#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * encryption_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot.html#encryption_settings Snapshot#encryption_settings}
  */
  readonly encryptionSettings?: SnapshotEncryptionSettings;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot.html#timeouts Snapshot#timeouts}
  */
  readonly timeouts?: SnapshotTimeouts;
}
export interface SnapshotEncryptionSettingsDiskEncryptionKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot.html#secret_url Snapshot#secret_url}
  */
  readonly secretUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot.html#source_vault_id Snapshot#source_vault_id}
  */
  readonly sourceVaultId: string;
}

function snapshotEncryptionSettingsDiskEncryptionKeyToTerraform(struct?: SnapshotEncryptionSettingsDiskEncryptionKeyOutputReference | SnapshotEncryptionSettingsDiskEncryptionKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_url: cdktf.stringToTerraform(struct!.secretUrl),
    source_vault_id: cdktf.stringToTerraform(struct!.sourceVaultId),
  }
}

export class SnapshotEncryptionSettingsDiskEncryptionKeyOutputReference extends cdktf.ComplexObject {
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
export interface SnapshotEncryptionSettingsKeyEncryptionKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot.html#key_url Snapshot#key_url}
  */
  readonly keyUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot.html#source_vault_id Snapshot#source_vault_id}
  */
  readonly sourceVaultId: string;
}

function snapshotEncryptionSettingsKeyEncryptionKeyToTerraform(struct?: SnapshotEncryptionSettingsKeyEncryptionKeyOutputReference | SnapshotEncryptionSettingsKeyEncryptionKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_url: cdktf.stringToTerraform(struct!.keyUrl),
    source_vault_id: cdktf.stringToTerraform(struct!.sourceVaultId),
  }
}

export class SnapshotEncryptionSettingsKeyEncryptionKeyOutputReference extends cdktf.ComplexObject {
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
export interface SnapshotEncryptionSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot.html#enabled Snapshot#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * disk_encryption_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot.html#disk_encryption_key Snapshot#disk_encryption_key}
  */
  readonly diskEncryptionKey?: SnapshotEncryptionSettingsDiskEncryptionKey;
  /**
  * key_encryption_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot.html#key_encryption_key Snapshot#key_encryption_key}
  */
  readonly keyEncryptionKey?: SnapshotEncryptionSettingsKeyEncryptionKey;
}

function snapshotEncryptionSettingsToTerraform(struct?: SnapshotEncryptionSettingsOutputReference | SnapshotEncryptionSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    disk_encryption_key: snapshotEncryptionSettingsDiskEncryptionKeyToTerraform(struct!.diskEncryptionKey),
    key_encryption_key: snapshotEncryptionSettingsKeyEncryptionKeyToTerraform(struct!.keyEncryptionKey),
  }
}

export class SnapshotEncryptionSettingsOutputReference extends cdktf.ComplexObject {
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
  private _diskEncryptionKey?: SnapshotEncryptionSettingsDiskEncryptionKey | undefined; 
  private __diskEncryptionKeyOutput = new SnapshotEncryptionSettingsDiskEncryptionKeyOutputReference(this as any, "disk_encryption_key", true);
  public get diskEncryptionKey() {
    return this.__diskEncryptionKeyOutput;
  }
  public putDiskEncryptionKey(value: SnapshotEncryptionSettingsDiskEncryptionKey | undefined) {
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
  private _keyEncryptionKey?: SnapshotEncryptionSettingsKeyEncryptionKey | undefined; 
  private __keyEncryptionKeyOutput = new SnapshotEncryptionSettingsKeyEncryptionKeyOutputReference(this as any, "key_encryption_key", true);
  public get keyEncryptionKey() {
    return this.__keyEncryptionKeyOutput;
  }
  public putKeyEncryptionKey(value: SnapshotEncryptionSettingsKeyEncryptionKey | undefined) {
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
export interface SnapshotTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot.html#create Snapshot#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot.html#delete Snapshot#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot.html#read Snapshot#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot.html#update Snapshot#update}
  */
  readonly update?: string;
}

function snapshotTimeoutsToTerraform(struct?: SnapshotTimeoutsOutputReference | SnapshotTimeouts): any {
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

export class SnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot.html azurerm_snapshot}
*/
export class Snapshot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_snapshot";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot.html azurerm_snapshot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnapshotConfig
  */
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

  // source_uri - computed: false, optional: true, required: false
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

  // encryption_settings - computed: false, optional: true, required: false
  private _encryptionSettings?: SnapshotEncryptionSettings | undefined; 
  private __encryptionSettingsOutput = new SnapshotEncryptionSettingsOutputReference(this as any, "encryption_settings", true);
  public get encryptionSettings() {
    return this.__encryptionSettingsOutput;
  }
  public putEncryptionSettings(value: SnapshotEncryptionSettings | undefined) {
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
  private _timeouts?: SnapshotTimeouts | undefined; 
  private __timeoutsOutput = new SnapshotTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SnapshotTimeouts | undefined) {
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
      encryption_settings: snapshotEncryptionSettingsToTerraform(this._encryptionSettings),
      timeouts: snapshotTimeoutsToTerraform(this._timeouts),
    };
  }
}
