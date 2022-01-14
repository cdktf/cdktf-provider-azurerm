// https://www.terraform.io/docs/providers/azurerm/r/snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot#create_option Snapshot#create_option}
  */
  readonly createOption: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot#disk_size_gb Snapshot#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot#location Snapshot#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot#name Snapshot#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot#resource_group_name Snapshot#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot#source_resource_id Snapshot#source_resource_id}
  */
  readonly sourceResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot#source_uri Snapshot#source_uri}
  */
  readonly sourceUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot#storage_account_id Snapshot#storage_account_id}
  */
  readonly storageAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot#tags Snapshot#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * encryption_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot#encryption_settings Snapshot#encryption_settings}
  */
  readonly encryptionSettings?: SnapshotEncryptionSettings;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot#timeouts Snapshot#timeouts}
  */
  readonly timeouts?: SnapshotTimeouts;
}
export interface SnapshotEncryptionSettingsDiskEncryptionKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot#secret_url Snapshot#secret_url}
  */
  readonly secretUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot#source_vault_id Snapshot#source_vault_id}
  */
  readonly sourceVaultId: string;
}

export function snapshotEncryptionSettingsDiskEncryptionKeyToTerraform(struct?: SnapshotEncryptionSettingsDiskEncryptionKeyOutputReference | SnapshotEncryptionSettingsDiskEncryptionKey): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SnapshotEncryptionSettingsDiskEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretUrl = this._secretUrl;
    }
    if (this._sourceVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVaultId = this._sourceVaultId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotEncryptionSettingsDiskEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretUrl = undefined;
      this._sourceVaultId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretUrl = value.secretUrl;
      this._sourceVaultId = value.sourceVaultId;
    }
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
    return this._secretUrl;
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
    return this._sourceVaultId;
  }
}
export interface SnapshotEncryptionSettingsKeyEncryptionKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot#key_url Snapshot#key_url}
  */
  readonly keyUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot#source_vault_id Snapshot#source_vault_id}
  */
  readonly sourceVaultId: string;
}

export function snapshotEncryptionSettingsKeyEncryptionKeyToTerraform(struct?: SnapshotEncryptionSettingsKeyEncryptionKeyOutputReference | SnapshotEncryptionSettingsKeyEncryptionKey): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SnapshotEncryptionSettingsKeyEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUrl = this._keyUrl;
    }
    if (this._sourceVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVaultId = this._sourceVaultId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotEncryptionSettingsKeyEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyUrl = undefined;
      this._sourceVaultId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyUrl = value.keyUrl;
      this._sourceVaultId = value.sourceVaultId;
    }
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
    return this._keyUrl;
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
    return this._sourceVaultId;
  }
}
export interface SnapshotEncryptionSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot#enabled Snapshot#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * disk_encryption_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot#disk_encryption_key Snapshot#disk_encryption_key}
  */
  readonly diskEncryptionKey?: SnapshotEncryptionSettingsDiskEncryptionKey;
  /**
  * key_encryption_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot#key_encryption_key Snapshot#key_encryption_key}
  */
  readonly keyEncryptionKey?: SnapshotEncryptionSettingsKeyEncryptionKey;
}

export function snapshotEncryptionSettingsToTerraform(struct?: SnapshotEncryptionSettingsOutputReference | SnapshotEncryptionSettings): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SnapshotEncryptionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._diskEncryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionKey = this._diskEncryptionKey?.internalValue;
    }
    if (this._keyEncryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyEncryptionKey = this._keyEncryptionKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotEncryptionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._diskEncryptionKey.internalValue = undefined;
      this._keyEncryptionKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._diskEncryptionKey.internalValue = value.diskEncryptionKey;
      this._keyEncryptionKey.internalValue = value.keyEncryptionKey;
    }
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
    return this._enabled;
  }

  // disk_encryption_key - computed: false, optional: true, required: false
  private _diskEncryptionKey = new SnapshotEncryptionSettingsDiskEncryptionKeyOutputReference(this as any, "disk_encryption_key", true);
  public get diskEncryptionKey() {
    return this._diskEncryptionKey;
  }
  public putDiskEncryptionKey(value: SnapshotEncryptionSettingsDiskEncryptionKey) {
    this._diskEncryptionKey.internalValue = value;
  }
  public resetDiskEncryptionKey() {
    this._diskEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionKeyInput() {
    return this._diskEncryptionKey.internalValue;
  }

  // key_encryption_key - computed: false, optional: true, required: false
  private _keyEncryptionKey = new SnapshotEncryptionSettingsKeyEncryptionKeyOutputReference(this as any, "key_encryption_key", true);
  public get keyEncryptionKey() {
    return this._keyEncryptionKey;
  }
  public putKeyEncryptionKey(value: SnapshotEncryptionSettingsKeyEncryptionKey) {
    this._keyEncryptionKey.internalValue = value;
  }
  public resetKeyEncryptionKey() {
    this._keyEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyEncryptionKeyInput() {
    return this._keyEncryptionKey.internalValue;
  }
}
export interface SnapshotTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot#create Snapshot#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot#delete Snapshot#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot#read Snapshot#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot#update Snapshot#update}
  */
  readonly update?: string;
}

export function snapshotTimeoutsToTerraform(struct?: SnapshotTimeoutsOutputReference | SnapshotTimeouts): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SnapshotTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot azurerm_snapshot}
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
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/snapshot azurerm_snapshot} Resource
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
    this._encryptionSettings.internalValue = config.encryptionSettings;
    this._timeouts.internalValue = config.timeouts;
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
    return this._createOption;
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
    return this._diskSizeGb;
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
    return this._location;
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
    return this._name;
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
    return this._resourceGroupName;
  }

  // source_resource_id - computed: false, optional: true, required: false
  private _sourceResourceId?: string; 
  public get sourceResourceId() {
    return this.getStringAttribute('source_resource_id');
  }
  public set sourceResourceId(value: string) {
    this._sourceResourceId = value;
  }
  public resetSourceResourceId() {
    this._sourceResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceResourceIdInput() {
    return this._sourceResourceId;
  }

  // source_uri - computed: false, optional: true, required: false
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
    return this._sourceUri;
  }

  // storage_account_id - computed: false, optional: true, required: false
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  public resetStorageAccountId() {
    this._storageAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // encryption_settings - computed: false, optional: true, required: false
  private _encryptionSettings = new SnapshotEncryptionSettingsOutputReference(this as any, "encryption_settings", true);
  public get encryptionSettings() {
    return this._encryptionSettings;
  }
  public putEncryptionSettings(value: SnapshotEncryptionSettings) {
    this._encryptionSettings.internalValue = value;
  }
  public resetEncryptionSettings() {
    this._encryptionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSettingsInput() {
    return this._encryptionSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SnapshotTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SnapshotTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      encryption_settings: snapshotEncryptionSettingsToTerraform(this._encryptionSettings.internalValue),
      timeouts: snapshotTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
