// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#create_option ManagedDisk#create_option}
  */
  readonly createOption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#disk_access_id ManagedDisk#disk_access_id}
  */
  readonly diskAccessId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#disk_encryption_set_id ManagedDisk#disk_encryption_set_id}
  */
  readonly diskEncryptionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#disk_iops_read_only ManagedDisk#disk_iops_read_only}
  */
  readonly diskIopsReadOnly?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#disk_iops_read_write ManagedDisk#disk_iops_read_write}
  */
  readonly diskIopsReadWrite?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#disk_mbps_read_only ManagedDisk#disk_mbps_read_only}
  */
  readonly diskMbpsReadOnly?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#disk_mbps_read_write ManagedDisk#disk_mbps_read_write}
  */
  readonly diskMbpsReadWrite?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#disk_size_gb ManagedDisk#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#edge_zone ManagedDisk#edge_zone}
  */
  readonly edgeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#gallery_image_reference_id ManagedDisk#gallery_image_reference_id}
  */
  readonly galleryImageReferenceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#hyper_v_generation ManagedDisk#hyper_v_generation}
  */
  readonly hyperVGeneration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#id ManagedDisk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#image_reference_id ManagedDisk#image_reference_id}
  */
  readonly imageReferenceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#location ManagedDisk#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#logical_sector_size ManagedDisk#logical_sector_size}
  */
  readonly logicalSectorSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#max_shares ManagedDisk#max_shares}
  */
  readonly maxShares?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#name ManagedDisk#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#network_access_policy ManagedDisk#network_access_policy}
  */
  readonly networkAccessPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#on_demand_bursting_enabled ManagedDisk#on_demand_bursting_enabled}
  */
  readonly onDemandBurstingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#optimized_frequent_attach_enabled ManagedDisk#optimized_frequent_attach_enabled}
  */
  readonly optimizedFrequentAttachEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#os_type ManagedDisk#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#performance_plus_enabled ManagedDisk#performance_plus_enabled}
  */
  readonly performancePlusEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#public_network_access_enabled ManagedDisk#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#resource_group_name ManagedDisk#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#secure_vm_disk_encryption_set_id ManagedDisk#secure_vm_disk_encryption_set_id}
  */
  readonly secureVmDiskEncryptionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#security_type ManagedDisk#security_type}
  */
  readonly securityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#source_resource_id ManagedDisk#source_resource_id}
  */
  readonly sourceResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#source_uri ManagedDisk#source_uri}
  */
  readonly sourceUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#storage_account_id ManagedDisk#storage_account_id}
  */
  readonly storageAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#storage_account_type ManagedDisk#storage_account_type}
  */
  readonly storageAccountType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#tags ManagedDisk#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#tier ManagedDisk#tier}
  */
  readonly tier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#trusted_launch_enabled ManagedDisk#trusted_launch_enabled}
  */
  readonly trustedLaunchEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#upload_size_bytes ManagedDisk#upload_size_bytes}
  */
  readonly uploadSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#zone ManagedDisk#zone}
  */
  readonly zone?: string;
  /**
  * encryption_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#encryption_settings ManagedDisk#encryption_settings}
  */
  readonly encryptionSettings?: ManagedDiskEncryptionSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#timeouts ManagedDisk#timeouts}
  */
  readonly timeouts?: ManagedDiskTimeouts;
}
export interface ManagedDiskEncryptionSettingsDiskEncryptionKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#secret_url ManagedDisk#secret_url}
  */
  readonly secretUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#source_vault_id ManagedDisk#source_vault_id}
  */
  readonly sourceVaultId: string;
}

export function managedDiskEncryptionSettingsDiskEncryptionKeyToTerraform(struct?: ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference | ManagedDiskEncryptionSettingsDiskEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_url: cdktf.stringToTerraform(struct!.secretUrl),
    source_vault_id: cdktf.stringToTerraform(struct!.sourceVaultId),
  }
}


export function managedDiskEncryptionSettingsDiskEncryptionKeyToHclTerraform(struct?: ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference | ManagedDiskEncryptionSettingsDiskEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_url: {
      value: cdktf.stringToHclTerraform(struct!.secretUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDiskEncryptionSettingsDiskEncryptionKey | undefined {
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

  public set internalValue(value: ManagedDiskEncryptionSettingsDiskEncryptionKey | undefined) {
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
export interface ManagedDiskEncryptionSettingsKeyEncryptionKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#key_url ManagedDisk#key_url}
  */
  readonly keyUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#source_vault_id ManagedDisk#source_vault_id}
  */
  readonly sourceVaultId: string;
}

export function managedDiskEncryptionSettingsKeyEncryptionKeyToTerraform(struct?: ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference | ManagedDiskEncryptionSettingsKeyEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_url: cdktf.stringToTerraform(struct!.keyUrl),
    source_vault_id: cdktf.stringToTerraform(struct!.sourceVaultId),
  }
}


export function managedDiskEncryptionSettingsKeyEncryptionKeyToHclTerraform(struct?: ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference | ManagedDiskEncryptionSettingsKeyEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_url: {
      value: cdktf.stringToHclTerraform(struct!.keyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDiskEncryptionSettingsKeyEncryptionKey | undefined {
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

  public set internalValue(value: ManagedDiskEncryptionSettingsKeyEncryptionKey | undefined) {
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
export interface ManagedDiskEncryptionSettings {
  /**
  * disk_encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#disk_encryption_key ManagedDisk#disk_encryption_key}
  */
  readonly diskEncryptionKey: ManagedDiskEncryptionSettingsDiskEncryptionKey;
  /**
  * key_encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#key_encryption_key ManagedDisk#key_encryption_key}
  */
  readonly keyEncryptionKey?: ManagedDiskEncryptionSettingsKeyEncryptionKey;
}

export function managedDiskEncryptionSettingsToTerraform(struct?: ManagedDiskEncryptionSettingsOutputReference | ManagedDiskEncryptionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_encryption_key: managedDiskEncryptionSettingsDiskEncryptionKeyToTerraform(struct!.diskEncryptionKey),
    key_encryption_key: managedDiskEncryptionSettingsKeyEncryptionKeyToTerraform(struct!.keyEncryptionKey),
  }
}


export function managedDiskEncryptionSettingsToHclTerraform(struct?: ManagedDiskEncryptionSettingsOutputReference | ManagedDiskEncryptionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_encryption_key: {
      value: managedDiskEncryptionSettingsDiskEncryptionKeyToHclTerraform(struct!.diskEncryptionKey),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDiskEncryptionSettingsDiskEncryptionKeyList",
    },
    key_encryption_key: {
      value: managedDiskEncryptionSettingsKeyEncryptionKeyToHclTerraform(struct!.keyEncryptionKey),
      isBlock: true,
      type: "list",
      storageClassType: "ManagedDiskEncryptionSettingsKeyEncryptionKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDiskEncryptionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedDiskEncryptionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: ManagedDiskEncryptionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskEncryptionKey.internalValue = undefined;
      this._keyEncryptionKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskEncryptionKey.internalValue = value.diskEncryptionKey;
      this._keyEncryptionKey.internalValue = value.keyEncryptionKey;
    }
  }

  // disk_encryption_key - computed: false, optional: false, required: true
  private _diskEncryptionKey = new ManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference(this, "disk_encryption_key");
  public get diskEncryptionKey() {
    return this._diskEncryptionKey;
  }
  public putDiskEncryptionKey(value: ManagedDiskEncryptionSettingsDiskEncryptionKey) {
    this._diskEncryptionKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionKeyInput() {
    return this._diskEncryptionKey.internalValue;
  }

  // key_encryption_key - computed: false, optional: true, required: false
  private _keyEncryptionKey = new ManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference(this, "key_encryption_key");
  public get keyEncryptionKey() {
    return this._keyEncryptionKey;
  }
  public putKeyEncryptionKey(value: ManagedDiskEncryptionSettingsKeyEncryptionKey) {
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
export interface ManagedDiskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#create ManagedDisk#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#delete ManagedDisk#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#read ManagedDisk#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#update ManagedDisk#update}
  */
  readonly update?: string;
}

export function managedDiskTimeoutsToTerraform(struct?: ManagedDiskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function managedDiskTimeoutsToHclTerraform(struct?: ManagedDiskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedDiskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagedDiskTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ManagedDiskTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk azurerm_managed_disk}
*/
export class ManagedDisk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_managed_disk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedDisk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedDisk to import
  * @param importFromId The id of the existing ManagedDisk that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedDisk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_managed_disk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/managed_disk azurerm_managed_disk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedDiskConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedDiskConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_managed_disk',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createOption = config.createOption;
    this._diskAccessId = config.diskAccessId;
    this._diskEncryptionSetId = config.diskEncryptionSetId;
    this._diskIopsReadOnly = config.diskIopsReadOnly;
    this._diskIopsReadWrite = config.diskIopsReadWrite;
    this._diskMbpsReadOnly = config.diskMbpsReadOnly;
    this._diskMbpsReadWrite = config.diskMbpsReadWrite;
    this._diskSizeGb = config.diskSizeGb;
    this._edgeZone = config.edgeZone;
    this._galleryImageReferenceId = config.galleryImageReferenceId;
    this._hyperVGeneration = config.hyperVGeneration;
    this._id = config.id;
    this._imageReferenceId = config.imageReferenceId;
    this._location = config.location;
    this._logicalSectorSize = config.logicalSectorSize;
    this._maxShares = config.maxShares;
    this._name = config.name;
    this._networkAccessPolicy = config.networkAccessPolicy;
    this._onDemandBurstingEnabled = config.onDemandBurstingEnabled;
    this._optimizedFrequentAttachEnabled = config.optimizedFrequentAttachEnabled;
    this._osType = config.osType;
    this._performancePlusEnabled = config.performancePlusEnabled;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._secureVmDiskEncryptionSetId = config.secureVmDiskEncryptionSetId;
    this._securityType = config.securityType;
    this._sourceResourceId = config.sourceResourceId;
    this._sourceUri = config.sourceUri;
    this._storageAccountId = config.storageAccountId;
    this._storageAccountType = config.storageAccountType;
    this._tags = config.tags;
    this._tier = config.tier;
    this._trustedLaunchEnabled = config.trustedLaunchEnabled;
    this._uploadSizeBytes = config.uploadSizeBytes;
    this._zone = config.zone;
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

  // disk_access_id - computed: false, optional: true, required: false
  private _diskAccessId?: string; 
  public get diskAccessId() {
    return this.getStringAttribute('disk_access_id');
  }
  public set diskAccessId(value: string) {
    this._diskAccessId = value;
  }
  public resetDiskAccessId() {
    this._diskAccessId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskAccessIdInput() {
    return this._diskAccessId;
  }

  // disk_encryption_set_id - computed: false, optional: true, required: false
  private _diskEncryptionSetId?: string; 
  public get diskEncryptionSetId() {
    return this.getStringAttribute('disk_encryption_set_id');
  }
  public set diskEncryptionSetId(value: string) {
    this._diskEncryptionSetId = value;
  }
  public resetDiskEncryptionSetId() {
    this._diskEncryptionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetIdInput() {
    return this._diskEncryptionSetId;
  }

  // disk_iops_read_only - computed: true, optional: true, required: false
  private _diskIopsReadOnly?: number; 
  public get diskIopsReadOnly() {
    return this.getNumberAttribute('disk_iops_read_only');
  }
  public set diskIopsReadOnly(value: number) {
    this._diskIopsReadOnly = value;
  }
  public resetDiskIopsReadOnly() {
    this._diskIopsReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIopsReadOnlyInput() {
    return this._diskIopsReadOnly;
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
    return this._diskIopsReadWrite;
  }

  // disk_mbps_read_only - computed: true, optional: true, required: false
  private _diskMbpsReadOnly?: number; 
  public get diskMbpsReadOnly() {
    return this.getNumberAttribute('disk_mbps_read_only');
  }
  public set diskMbpsReadOnly(value: number) {
    this._diskMbpsReadOnly = value;
  }
  public resetDiskMbpsReadOnly() {
    this._diskMbpsReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskMbpsReadOnlyInput() {
    return this._diskMbpsReadOnly;
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
    return this._diskMbpsReadWrite;
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

  // edge_zone - computed: false, optional: true, required: false
  private _edgeZone?: string; 
  public get edgeZone() {
    return this.getStringAttribute('edge_zone');
  }
  public set edgeZone(value: string) {
    this._edgeZone = value;
  }
  public resetEdgeZone() {
    this._edgeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeZoneInput() {
    return this._edgeZone;
  }

  // gallery_image_reference_id - computed: false, optional: true, required: false
  private _galleryImageReferenceId?: string; 
  public get galleryImageReferenceId() {
    return this.getStringAttribute('gallery_image_reference_id');
  }
  public set galleryImageReferenceId(value: string) {
    this._galleryImageReferenceId = value;
  }
  public resetGalleryImageReferenceId() {
    this._galleryImageReferenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get galleryImageReferenceIdInput() {
    return this._galleryImageReferenceId;
  }

  // hyper_v_generation - computed: false, optional: true, required: false
  private _hyperVGeneration?: string; 
  public get hyperVGeneration() {
    return this.getStringAttribute('hyper_v_generation');
  }
  public set hyperVGeneration(value: string) {
    this._hyperVGeneration = value;
  }
  public resetHyperVGeneration() {
    this._hyperVGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperVGenerationInput() {
    return this._hyperVGeneration;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // image_reference_id - computed: false, optional: true, required: false
  private _imageReferenceId?: string; 
  public get imageReferenceId() {
    return this.getStringAttribute('image_reference_id');
  }
  public set imageReferenceId(value: string) {
    this._imageReferenceId = value;
  }
  public resetImageReferenceId() {
    this._imageReferenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageReferenceIdInput() {
    return this._imageReferenceId;
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

  // logical_sector_size - computed: true, optional: true, required: false
  private _logicalSectorSize?: number; 
  public get logicalSectorSize() {
    return this.getNumberAttribute('logical_sector_size');
  }
  public set logicalSectorSize(value: number) {
    this._logicalSectorSize = value;
  }
  public resetLogicalSectorSize() {
    this._logicalSectorSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalSectorSizeInput() {
    return this._logicalSectorSize;
  }

  // max_shares - computed: true, optional: true, required: false
  private _maxShares?: number; 
  public get maxShares() {
    return this.getNumberAttribute('max_shares');
  }
  public set maxShares(value: number) {
    this._maxShares = value;
  }
  public resetMaxShares() {
    this._maxShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSharesInput() {
    return this._maxShares;
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

  // network_access_policy - computed: false, optional: true, required: false
  private _networkAccessPolicy?: string; 
  public get networkAccessPolicy() {
    return this.getStringAttribute('network_access_policy');
  }
  public set networkAccessPolicy(value: string) {
    this._networkAccessPolicy = value;
  }
  public resetNetworkAccessPolicy() {
    this._networkAccessPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAccessPolicyInput() {
    return this._networkAccessPolicy;
  }

  // on_demand_bursting_enabled - computed: false, optional: true, required: false
  private _onDemandBurstingEnabled?: boolean | cdktf.IResolvable; 
  public get onDemandBurstingEnabled() {
    return this.getBooleanAttribute('on_demand_bursting_enabled');
  }
  public set onDemandBurstingEnabled(value: boolean | cdktf.IResolvable) {
    this._onDemandBurstingEnabled = value;
  }
  public resetOnDemandBurstingEnabled() {
    this._onDemandBurstingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandBurstingEnabledInput() {
    return this._onDemandBurstingEnabled;
  }

  // optimized_frequent_attach_enabled - computed: false, optional: true, required: false
  private _optimizedFrequentAttachEnabled?: boolean | cdktf.IResolvable; 
  public get optimizedFrequentAttachEnabled() {
    return this.getBooleanAttribute('optimized_frequent_attach_enabled');
  }
  public set optimizedFrequentAttachEnabled(value: boolean | cdktf.IResolvable) {
    this._optimizedFrequentAttachEnabled = value;
  }
  public resetOptimizedFrequentAttachEnabled() {
    this._optimizedFrequentAttachEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizedFrequentAttachEnabledInput() {
    return this._optimizedFrequentAttachEnabled;
  }

  // os_type - computed: false, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // performance_plus_enabled - computed: false, optional: true, required: false
  private _performancePlusEnabled?: boolean | cdktf.IResolvable; 
  public get performancePlusEnabled() {
    return this.getBooleanAttribute('performance_plus_enabled');
  }
  public set performancePlusEnabled(value: boolean | cdktf.IResolvable) {
    this._performancePlusEnabled = value;
  }
  public resetPerformancePlusEnabled() {
    this._performancePlusEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performancePlusEnabledInput() {
    return this._performancePlusEnabled;
  }

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable; 
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled;
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

  // secure_vm_disk_encryption_set_id - computed: false, optional: true, required: false
  private _secureVmDiskEncryptionSetId?: string; 
  public get secureVmDiskEncryptionSetId() {
    return this.getStringAttribute('secure_vm_disk_encryption_set_id');
  }
  public set secureVmDiskEncryptionSetId(value: string) {
    this._secureVmDiskEncryptionSetId = value;
  }
  public resetSecureVmDiskEncryptionSetId() {
    this._secureVmDiskEncryptionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureVmDiskEncryptionSetIdInput() {
    return this._secureVmDiskEncryptionSetId;
  }

  // security_type - computed: false, optional: true, required: false
  private _securityType?: string; 
  public get securityType() {
    return this.getStringAttribute('security_type');
  }
  public set securityType(value: string) {
    this._securityType = value;
  }
  public resetSecurityType() {
    this._securityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityTypeInput() {
    return this._securityType;
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
    return this._storageAccountType;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tier - computed: true, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // trusted_launch_enabled - computed: false, optional: true, required: false
  private _trustedLaunchEnabled?: boolean | cdktf.IResolvable; 
  public get trustedLaunchEnabled() {
    return this.getBooleanAttribute('trusted_launch_enabled');
  }
  public set trustedLaunchEnabled(value: boolean | cdktf.IResolvable) {
    this._trustedLaunchEnabled = value;
  }
  public resetTrustedLaunchEnabled() {
    this._trustedLaunchEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedLaunchEnabledInput() {
    return this._trustedLaunchEnabled;
  }

  // upload_size_bytes - computed: false, optional: true, required: false
  private _uploadSizeBytes?: number; 
  public get uploadSizeBytes() {
    return this.getNumberAttribute('upload_size_bytes');
  }
  public set uploadSizeBytes(value: number) {
    this._uploadSizeBytes = value;
  }
  public resetUploadSizeBytes() {
    this._uploadSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadSizeBytesInput() {
    return this._uploadSizeBytes;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // encryption_settings - computed: false, optional: true, required: false
  private _encryptionSettings = new ManagedDiskEncryptionSettingsOutputReference(this, "encryption_settings");
  public get encryptionSettings() {
    return this._encryptionSettings;
  }
  public putEncryptionSettings(value: ManagedDiskEncryptionSettings) {
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
  private _timeouts = new ManagedDiskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ManagedDiskTimeouts) {
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
      disk_access_id: cdktf.stringToTerraform(this._diskAccessId),
      disk_encryption_set_id: cdktf.stringToTerraform(this._diskEncryptionSetId),
      disk_iops_read_only: cdktf.numberToTerraform(this._diskIopsReadOnly),
      disk_iops_read_write: cdktf.numberToTerraform(this._diskIopsReadWrite),
      disk_mbps_read_only: cdktf.numberToTerraform(this._diskMbpsReadOnly),
      disk_mbps_read_write: cdktf.numberToTerraform(this._diskMbpsReadWrite),
      disk_size_gb: cdktf.numberToTerraform(this._diskSizeGb),
      edge_zone: cdktf.stringToTerraform(this._edgeZone),
      gallery_image_reference_id: cdktf.stringToTerraform(this._galleryImageReferenceId),
      hyper_v_generation: cdktf.stringToTerraform(this._hyperVGeneration),
      id: cdktf.stringToTerraform(this._id),
      image_reference_id: cdktf.stringToTerraform(this._imageReferenceId),
      location: cdktf.stringToTerraform(this._location),
      logical_sector_size: cdktf.numberToTerraform(this._logicalSectorSize),
      max_shares: cdktf.numberToTerraform(this._maxShares),
      name: cdktf.stringToTerraform(this._name),
      network_access_policy: cdktf.stringToTerraform(this._networkAccessPolicy),
      on_demand_bursting_enabled: cdktf.booleanToTerraform(this._onDemandBurstingEnabled),
      optimized_frequent_attach_enabled: cdktf.booleanToTerraform(this._optimizedFrequentAttachEnabled),
      os_type: cdktf.stringToTerraform(this._osType),
      performance_plus_enabled: cdktf.booleanToTerraform(this._performancePlusEnabled),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      secure_vm_disk_encryption_set_id: cdktf.stringToTerraform(this._secureVmDiskEncryptionSetId),
      security_type: cdktf.stringToTerraform(this._securityType),
      source_resource_id: cdktf.stringToTerraform(this._sourceResourceId),
      source_uri: cdktf.stringToTerraform(this._sourceUri),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      storage_account_type: cdktf.stringToTerraform(this._storageAccountType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tier: cdktf.stringToTerraform(this._tier),
      trusted_launch_enabled: cdktf.booleanToTerraform(this._trustedLaunchEnabled),
      upload_size_bytes: cdktf.numberToTerraform(this._uploadSizeBytes),
      zone: cdktf.stringToTerraform(this._zone),
      encryption_settings: managedDiskEncryptionSettingsToTerraform(this._encryptionSettings.internalValue),
      timeouts: managedDiskTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_option: {
        value: cdktf.stringToHclTerraform(this._createOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_access_id: {
        value: cdktf.stringToHclTerraform(this._diskAccessId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_encryption_set_id: {
        value: cdktf.stringToHclTerraform(this._diskEncryptionSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_iops_read_only: {
        value: cdktf.numberToHclTerraform(this._diskIopsReadOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_iops_read_write: {
        value: cdktf.numberToHclTerraform(this._diskIopsReadWrite),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_mbps_read_only: {
        value: cdktf.numberToHclTerraform(this._diskMbpsReadOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_mbps_read_write: {
        value: cdktf.numberToHclTerraform(this._diskMbpsReadWrite),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_size_gb: {
        value: cdktf.numberToHclTerraform(this._diskSizeGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      edge_zone: {
        value: cdktf.stringToHclTerraform(this._edgeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gallery_image_reference_id: {
        value: cdktf.stringToHclTerraform(this._galleryImageReferenceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hyper_v_generation: {
        value: cdktf.stringToHclTerraform(this._hyperVGeneration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_reference_id: {
        value: cdktf.stringToHclTerraform(this._imageReferenceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logical_sector_size: {
        value: cdktf.numberToHclTerraform(this._logicalSectorSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_shares: {
        value: cdktf.numberToHclTerraform(this._maxShares),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_access_policy: {
        value: cdktf.stringToHclTerraform(this._networkAccessPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_demand_bursting_enabled: {
        value: cdktf.booleanToHclTerraform(this._onDemandBurstingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      optimized_frequent_attach_enabled: {
        value: cdktf.booleanToHclTerraform(this._optimizedFrequentAttachEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      os_type: {
        value: cdktf.stringToHclTerraform(this._osType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      performance_plus_enabled: {
        value: cdktf.booleanToHclTerraform(this._performancePlusEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      public_network_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._publicNetworkAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_vm_disk_encryption_set_id: {
        value: cdktf.stringToHclTerraform(this._secureVmDiskEncryptionSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_type: {
        value: cdktf.stringToHclTerraform(this._securityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_resource_id: {
        value: cdktf.stringToHclTerraform(this._sourceResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_uri: {
        value: cdktf.stringToHclTerraform(this._sourceUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_account_id: {
        value: cdktf.stringToHclTerraform(this._storageAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_account_type: {
        value: cdktf.stringToHclTerraform(this._storageAccountType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tier: {
        value: cdktf.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusted_launch_enabled: {
        value: cdktf.booleanToHclTerraform(this._trustedLaunchEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      upload_size_bytes: {
        value: cdktf.numberToHclTerraform(this._uploadSizeBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_settings: {
        value: managedDiskEncryptionSettingsToHclTerraform(this._encryptionSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagedDiskEncryptionSettingsList",
      },
      timeouts: {
        value: managedDiskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ManagedDiskTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
