// https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageManagementPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#storage_account_id StorageManagementPolicy#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#rule StorageManagementPolicy#rule}
  */
  readonly rule?: StorageManagementPolicyRule[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#timeouts StorageManagementPolicy#timeouts}
  */
  readonly timeouts?: StorageManagementPolicyTimeouts;
}
export interface StorageManagementPolicyRuleActionsBaseBlob {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#delete_after_days_since_modification_greater_than StorageManagementPolicy#delete_after_days_since_modification_greater_than}
  */
  readonly deleteAfterDaysSinceModificationGreaterThan?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#tier_to_archive_after_days_since_modification_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_modification_greater_than}
  */
  readonly tierToArchiveAfterDaysSinceModificationGreaterThan?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#tier_to_cool_after_days_since_modification_greater_than StorageManagementPolicy#tier_to_cool_after_days_since_modification_greater_than}
  */
  readonly tierToCoolAfterDaysSinceModificationGreaterThan?: number;
}

export function storageManagementPolicyRuleActionsBaseBlobToTerraform(struct?: StorageManagementPolicyRuleActionsBaseBlobOutputReference | StorageManagementPolicyRuleActionsBaseBlob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_after_days_since_modification_greater_than: cdktf.numberToTerraform(struct!.deleteAfterDaysSinceModificationGreaterThan),
    tier_to_archive_after_days_since_modification_greater_than: cdktf.numberToTerraform(struct!.tierToArchiveAfterDaysSinceModificationGreaterThan),
    tier_to_cool_after_days_since_modification_greater_than: cdktf.numberToTerraform(struct!.tierToCoolAfterDaysSinceModificationGreaterThan),
  }
}

export class StorageManagementPolicyRuleActionsBaseBlobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageManagementPolicyRuleActionsBaseBlob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteAfterDaysSinceModificationGreaterThan) {
      hasAnyValues = true;
      internalValueResult.deleteAfterDaysSinceModificationGreaterThan = this._deleteAfterDaysSinceModificationGreaterThan;
    }
    if (this._tierToArchiveAfterDaysSinceModificationGreaterThan) {
      hasAnyValues = true;
      internalValueResult.tierToArchiveAfterDaysSinceModificationGreaterThan = this._tierToArchiveAfterDaysSinceModificationGreaterThan;
    }
    if (this._tierToCoolAfterDaysSinceModificationGreaterThan) {
      hasAnyValues = true;
      internalValueResult.tierToCoolAfterDaysSinceModificationGreaterThan = this._tierToCoolAfterDaysSinceModificationGreaterThan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageManagementPolicyRuleActionsBaseBlob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteAfterDaysSinceModificationGreaterThan = undefined;
      this._tierToArchiveAfterDaysSinceModificationGreaterThan = undefined;
      this._tierToCoolAfterDaysSinceModificationGreaterThan = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteAfterDaysSinceModificationGreaterThan = value.deleteAfterDaysSinceModificationGreaterThan;
      this._tierToArchiveAfterDaysSinceModificationGreaterThan = value.tierToArchiveAfterDaysSinceModificationGreaterThan;
      this._tierToCoolAfterDaysSinceModificationGreaterThan = value.tierToCoolAfterDaysSinceModificationGreaterThan;
    }
  }

  // delete_after_days_since_modification_greater_than - computed: false, optional: true, required: false
  private _deleteAfterDaysSinceModificationGreaterThan?: number; 
  public get deleteAfterDaysSinceModificationGreaterThan() {
    return this.getNumberAttribute('delete_after_days_since_modification_greater_than');
  }
  public set deleteAfterDaysSinceModificationGreaterThan(value: number) {
    this._deleteAfterDaysSinceModificationGreaterThan = value;
  }
  public resetDeleteAfterDaysSinceModificationGreaterThan() {
    this._deleteAfterDaysSinceModificationGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAfterDaysSinceModificationGreaterThanInput() {
    return this._deleteAfterDaysSinceModificationGreaterThan;
  }

  // tier_to_archive_after_days_since_modification_greater_than - computed: false, optional: true, required: false
  private _tierToArchiveAfterDaysSinceModificationGreaterThan?: number; 
  public get tierToArchiveAfterDaysSinceModificationGreaterThan() {
    return this.getNumberAttribute('tier_to_archive_after_days_since_modification_greater_than');
  }
  public set tierToArchiveAfterDaysSinceModificationGreaterThan(value: number) {
    this._tierToArchiveAfterDaysSinceModificationGreaterThan = value;
  }
  public resetTierToArchiveAfterDaysSinceModificationGreaterThan() {
    this._tierToArchiveAfterDaysSinceModificationGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierToArchiveAfterDaysSinceModificationGreaterThanInput() {
    return this._tierToArchiveAfterDaysSinceModificationGreaterThan;
  }

  // tier_to_cool_after_days_since_modification_greater_than - computed: false, optional: true, required: false
  private _tierToCoolAfterDaysSinceModificationGreaterThan?: number; 
  public get tierToCoolAfterDaysSinceModificationGreaterThan() {
    return this.getNumberAttribute('tier_to_cool_after_days_since_modification_greater_than');
  }
  public set tierToCoolAfterDaysSinceModificationGreaterThan(value: number) {
    this._tierToCoolAfterDaysSinceModificationGreaterThan = value;
  }
  public resetTierToCoolAfterDaysSinceModificationGreaterThan() {
    this._tierToCoolAfterDaysSinceModificationGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierToCoolAfterDaysSinceModificationGreaterThanInput() {
    return this._tierToCoolAfterDaysSinceModificationGreaterThan;
  }
}
export interface StorageManagementPolicyRuleActionsSnapshot {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#change_tier_to_archive_after_days_since_creation StorageManagementPolicy#change_tier_to_archive_after_days_since_creation}
  */
  readonly changeTierToArchiveAfterDaysSinceCreation?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#change_tier_to_cool_after_days_since_creation StorageManagementPolicy#change_tier_to_cool_after_days_since_creation}
  */
  readonly changeTierToCoolAfterDaysSinceCreation?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#delete_after_days_since_creation_greater_than StorageManagementPolicy#delete_after_days_since_creation_greater_than}
  */
  readonly deleteAfterDaysSinceCreationGreaterThan?: number;
}

export function storageManagementPolicyRuleActionsSnapshotToTerraform(struct?: StorageManagementPolicyRuleActionsSnapshotOutputReference | StorageManagementPolicyRuleActionsSnapshot): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    change_tier_to_archive_after_days_since_creation: cdktf.numberToTerraform(struct!.changeTierToArchiveAfterDaysSinceCreation),
    change_tier_to_cool_after_days_since_creation: cdktf.numberToTerraform(struct!.changeTierToCoolAfterDaysSinceCreation),
    delete_after_days_since_creation_greater_than: cdktf.numberToTerraform(struct!.deleteAfterDaysSinceCreationGreaterThan),
  }
}

export class StorageManagementPolicyRuleActionsSnapshotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageManagementPolicyRuleActionsSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changeTierToArchiveAfterDaysSinceCreation) {
      hasAnyValues = true;
      internalValueResult.changeTierToArchiveAfterDaysSinceCreation = this._changeTierToArchiveAfterDaysSinceCreation;
    }
    if (this._changeTierToCoolAfterDaysSinceCreation) {
      hasAnyValues = true;
      internalValueResult.changeTierToCoolAfterDaysSinceCreation = this._changeTierToCoolAfterDaysSinceCreation;
    }
    if (this._deleteAfterDaysSinceCreationGreaterThan) {
      hasAnyValues = true;
      internalValueResult.deleteAfterDaysSinceCreationGreaterThan = this._deleteAfterDaysSinceCreationGreaterThan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageManagementPolicyRuleActionsSnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._changeTierToArchiveAfterDaysSinceCreation = undefined;
      this._changeTierToCoolAfterDaysSinceCreation = undefined;
      this._deleteAfterDaysSinceCreationGreaterThan = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._changeTierToArchiveAfterDaysSinceCreation = value.changeTierToArchiveAfterDaysSinceCreation;
      this._changeTierToCoolAfterDaysSinceCreation = value.changeTierToCoolAfterDaysSinceCreation;
      this._deleteAfterDaysSinceCreationGreaterThan = value.deleteAfterDaysSinceCreationGreaterThan;
    }
  }

  // change_tier_to_archive_after_days_since_creation - computed: false, optional: true, required: false
  private _changeTierToArchiveAfterDaysSinceCreation?: number; 
  public get changeTierToArchiveAfterDaysSinceCreation() {
    return this.getNumberAttribute('change_tier_to_archive_after_days_since_creation');
  }
  public set changeTierToArchiveAfterDaysSinceCreation(value: number) {
    this._changeTierToArchiveAfterDaysSinceCreation = value;
  }
  public resetChangeTierToArchiveAfterDaysSinceCreation() {
    this._changeTierToArchiveAfterDaysSinceCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeTierToArchiveAfterDaysSinceCreationInput() {
    return this._changeTierToArchiveAfterDaysSinceCreation;
  }

  // change_tier_to_cool_after_days_since_creation - computed: false, optional: true, required: false
  private _changeTierToCoolAfterDaysSinceCreation?: number; 
  public get changeTierToCoolAfterDaysSinceCreation() {
    return this.getNumberAttribute('change_tier_to_cool_after_days_since_creation');
  }
  public set changeTierToCoolAfterDaysSinceCreation(value: number) {
    this._changeTierToCoolAfterDaysSinceCreation = value;
  }
  public resetChangeTierToCoolAfterDaysSinceCreation() {
    this._changeTierToCoolAfterDaysSinceCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeTierToCoolAfterDaysSinceCreationInput() {
    return this._changeTierToCoolAfterDaysSinceCreation;
  }

  // delete_after_days_since_creation_greater_than - computed: false, optional: true, required: false
  private _deleteAfterDaysSinceCreationGreaterThan?: number; 
  public get deleteAfterDaysSinceCreationGreaterThan() {
    return this.getNumberAttribute('delete_after_days_since_creation_greater_than');
  }
  public set deleteAfterDaysSinceCreationGreaterThan(value: number) {
    this._deleteAfterDaysSinceCreationGreaterThan = value;
  }
  public resetDeleteAfterDaysSinceCreationGreaterThan() {
    this._deleteAfterDaysSinceCreationGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAfterDaysSinceCreationGreaterThanInput() {
    return this._deleteAfterDaysSinceCreationGreaterThan;
  }
}
export interface StorageManagementPolicyRuleActionsVersion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#change_tier_to_archive_after_days_since_creation StorageManagementPolicy#change_tier_to_archive_after_days_since_creation}
  */
  readonly changeTierToArchiveAfterDaysSinceCreation?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#change_tier_to_cool_after_days_since_creation StorageManagementPolicy#change_tier_to_cool_after_days_since_creation}
  */
  readonly changeTierToCoolAfterDaysSinceCreation?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#delete_after_days_since_creation StorageManagementPolicy#delete_after_days_since_creation}
  */
  readonly deleteAfterDaysSinceCreation?: number;
}

export function storageManagementPolicyRuleActionsVersionToTerraform(struct?: StorageManagementPolicyRuleActionsVersionOutputReference | StorageManagementPolicyRuleActionsVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    change_tier_to_archive_after_days_since_creation: cdktf.numberToTerraform(struct!.changeTierToArchiveAfterDaysSinceCreation),
    change_tier_to_cool_after_days_since_creation: cdktf.numberToTerraform(struct!.changeTierToCoolAfterDaysSinceCreation),
    delete_after_days_since_creation: cdktf.numberToTerraform(struct!.deleteAfterDaysSinceCreation),
  }
}

export class StorageManagementPolicyRuleActionsVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageManagementPolicyRuleActionsVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changeTierToArchiveAfterDaysSinceCreation) {
      hasAnyValues = true;
      internalValueResult.changeTierToArchiveAfterDaysSinceCreation = this._changeTierToArchiveAfterDaysSinceCreation;
    }
    if (this._changeTierToCoolAfterDaysSinceCreation) {
      hasAnyValues = true;
      internalValueResult.changeTierToCoolAfterDaysSinceCreation = this._changeTierToCoolAfterDaysSinceCreation;
    }
    if (this._deleteAfterDaysSinceCreation) {
      hasAnyValues = true;
      internalValueResult.deleteAfterDaysSinceCreation = this._deleteAfterDaysSinceCreation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageManagementPolicyRuleActionsVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._changeTierToArchiveAfterDaysSinceCreation = undefined;
      this._changeTierToCoolAfterDaysSinceCreation = undefined;
      this._deleteAfterDaysSinceCreation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._changeTierToArchiveAfterDaysSinceCreation = value.changeTierToArchiveAfterDaysSinceCreation;
      this._changeTierToCoolAfterDaysSinceCreation = value.changeTierToCoolAfterDaysSinceCreation;
      this._deleteAfterDaysSinceCreation = value.deleteAfterDaysSinceCreation;
    }
  }

  // change_tier_to_archive_after_days_since_creation - computed: false, optional: true, required: false
  private _changeTierToArchiveAfterDaysSinceCreation?: number; 
  public get changeTierToArchiveAfterDaysSinceCreation() {
    return this.getNumberAttribute('change_tier_to_archive_after_days_since_creation');
  }
  public set changeTierToArchiveAfterDaysSinceCreation(value: number) {
    this._changeTierToArchiveAfterDaysSinceCreation = value;
  }
  public resetChangeTierToArchiveAfterDaysSinceCreation() {
    this._changeTierToArchiveAfterDaysSinceCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeTierToArchiveAfterDaysSinceCreationInput() {
    return this._changeTierToArchiveAfterDaysSinceCreation;
  }

  // change_tier_to_cool_after_days_since_creation - computed: false, optional: true, required: false
  private _changeTierToCoolAfterDaysSinceCreation?: number; 
  public get changeTierToCoolAfterDaysSinceCreation() {
    return this.getNumberAttribute('change_tier_to_cool_after_days_since_creation');
  }
  public set changeTierToCoolAfterDaysSinceCreation(value: number) {
    this._changeTierToCoolAfterDaysSinceCreation = value;
  }
  public resetChangeTierToCoolAfterDaysSinceCreation() {
    this._changeTierToCoolAfterDaysSinceCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeTierToCoolAfterDaysSinceCreationInput() {
    return this._changeTierToCoolAfterDaysSinceCreation;
  }

  // delete_after_days_since_creation - computed: false, optional: true, required: false
  private _deleteAfterDaysSinceCreation?: number; 
  public get deleteAfterDaysSinceCreation() {
    return this.getNumberAttribute('delete_after_days_since_creation');
  }
  public set deleteAfterDaysSinceCreation(value: number) {
    this._deleteAfterDaysSinceCreation = value;
  }
  public resetDeleteAfterDaysSinceCreation() {
    this._deleteAfterDaysSinceCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAfterDaysSinceCreationInput() {
    return this._deleteAfterDaysSinceCreation;
  }
}
export interface StorageManagementPolicyRuleActions {
  /**
  * base_blob block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#base_blob StorageManagementPolicy#base_blob}
  */
  readonly baseBlob?: StorageManagementPolicyRuleActionsBaseBlob;
  /**
  * snapshot block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#snapshot StorageManagementPolicy#snapshot}
  */
  readonly snapshot?: StorageManagementPolicyRuleActionsSnapshot;
  /**
  * version block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#version StorageManagementPolicy#version}
  */
  readonly version?: StorageManagementPolicyRuleActionsVersion;
}

export function storageManagementPolicyRuleActionsToTerraform(struct?: StorageManagementPolicyRuleActionsOutputReference | StorageManagementPolicyRuleActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_blob: storageManagementPolicyRuleActionsBaseBlobToTerraform(struct!.baseBlob),
    snapshot: storageManagementPolicyRuleActionsSnapshotToTerraform(struct!.snapshot),
    version: storageManagementPolicyRuleActionsVersionToTerraform(struct!.version),
  }
}

export class StorageManagementPolicyRuleActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageManagementPolicyRuleActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseBlob?.internalValue) {
      hasAnyValues = true;
      internalValueResult.baseBlob = this._baseBlob?.internalValue;
    }
    if (this._snapshot?.internalValue) {
      hasAnyValues = true;
      internalValueResult.snapshot = this._snapshot?.internalValue;
    }
    if (this._version?.internalValue) {
      hasAnyValues = true;
      internalValueResult.version = this._version?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageManagementPolicyRuleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseBlob.internalValue = undefined;
      this._snapshot.internalValue = undefined;
      this._version.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseBlob.internalValue = value.baseBlob;
      this._snapshot.internalValue = value.snapshot;
      this._version.internalValue = value.version;
    }
  }

  // base_blob - computed: false, optional: true, required: false
  private _baseBlob = new StorageManagementPolicyRuleActionsBaseBlobOutputReference(this as any, "base_blob", true);
  public get baseBlob() {
    return this._baseBlob;
  }
  public putBaseBlob(value: StorageManagementPolicyRuleActionsBaseBlob) {
    this._baseBlob.internalValue = value;
  }
  public resetBaseBlob() {
    this._baseBlob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseBlobInput() {
    return this._baseBlob.internalValue;
  }

  // snapshot - computed: false, optional: true, required: false
  private _snapshot = new StorageManagementPolicyRuleActionsSnapshotOutputReference(this as any, "snapshot", true);
  public get snapshot() {
    return this._snapshot;
  }
  public putSnapshot(value: StorageManagementPolicyRuleActionsSnapshot) {
    this._snapshot.internalValue = value;
  }
  public resetSnapshot() {
    this._snapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot.internalValue;
  }

  // version - computed: false, optional: true, required: false
  private _version = new StorageManagementPolicyRuleActionsVersionOutputReference(this as any, "version", true);
  public get version() {
    return this._version;
  }
  public putVersion(value: StorageManagementPolicyRuleActionsVersion) {
    this._version.internalValue = value;
  }
  public resetVersion() {
    this._version.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version.internalValue;
  }
}
export interface StorageManagementPolicyRuleFiltersMatchBlobIndexTag {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#name StorageManagementPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#operation StorageManagementPolicy#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#value StorageManagementPolicy#value}
  */
  readonly value: string;
}

export function storageManagementPolicyRuleFiltersMatchBlobIndexTagToTerraform(struct?: StorageManagementPolicyRuleFiltersMatchBlobIndexTag): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StorageManagementPolicyRuleFilters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#blob_types StorageManagementPolicy#blob_types}
  */
  readonly blobTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#prefix_match StorageManagementPolicy#prefix_match}
  */
  readonly prefixMatch?: string[];
  /**
  * match_blob_index_tag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#match_blob_index_tag StorageManagementPolicy#match_blob_index_tag}
  */
  readonly matchBlobIndexTag?: StorageManagementPolicyRuleFiltersMatchBlobIndexTag[];
}

export function storageManagementPolicyRuleFiltersToTerraform(struct?: StorageManagementPolicyRuleFiltersOutputReference | StorageManagementPolicyRuleFilters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blob_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.blobTypes),
    prefix_match: cdktf.listMapper(cdktf.stringToTerraform)(struct!.prefixMatch),
    match_blob_index_tag: cdktf.listMapper(storageManagementPolicyRuleFiltersMatchBlobIndexTagToTerraform)(struct!.matchBlobIndexTag),
  }
}

export class StorageManagementPolicyRuleFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageManagementPolicyRuleFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blobTypes) {
      hasAnyValues = true;
      internalValueResult.blobTypes = this._blobTypes;
    }
    if (this._prefixMatch) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._matchBlobIndexTag) {
      hasAnyValues = true;
      internalValueResult.matchBlobIndexTag = this._matchBlobIndexTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageManagementPolicyRuleFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blobTypes = undefined;
      this._prefixMatch = undefined;
      this._matchBlobIndexTag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blobTypes = value.blobTypes;
      this._prefixMatch = value.prefixMatch;
      this._matchBlobIndexTag = value.matchBlobIndexTag;
    }
  }

  // blob_types - computed: false, optional: true, required: false
  private _blobTypes?: string[]; 
  public get blobTypes() {
    return this.getListAttribute('blob_types');
  }
  public set blobTypes(value: string[]) {
    this._blobTypes = value;
  }
  public resetBlobTypes() {
    this._blobTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobTypesInput() {
    return this._blobTypes;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string[]; 
  public get prefixMatch() {
    return this.getListAttribute('prefix_match');
  }
  public set prefixMatch(value: string[]) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // match_blob_index_tag - computed: false, optional: true, required: false
  private _matchBlobIndexTag?: StorageManagementPolicyRuleFiltersMatchBlobIndexTag[]; 
  public get matchBlobIndexTag() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_blob_index_tag') as any;
  }
  public set matchBlobIndexTag(value: StorageManagementPolicyRuleFiltersMatchBlobIndexTag[]) {
    this._matchBlobIndexTag = value;
  }
  public resetMatchBlobIndexTag() {
    this._matchBlobIndexTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchBlobIndexTagInput() {
    return this._matchBlobIndexTag;
  }
}
export interface StorageManagementPolicyRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#enabled StorageManagementPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#name StorageManagementPolicy#name}
  */
  readonly name: string;
  /**
  * actions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#actions StorageManagementPolicy#actions}
  */
  readonly actions: StorageManagementPolicyRuleActions;
  /**
  * filters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#filters StorageManagementPolicy#filters}
  */
  readonly filters?: StorageManagementPolicyRuleFilters;
}

export function storageManagementPolicyRuleToTerraform(struct?: StorageManagementPolicyRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    actions: storageManagementPolicyRuleActionsToTerraform(struct!.actions),
    filters: storageManagementPolicyRuleFiltersToTerraform(struct!.filters),
  }
}

export interface StorageManagementPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#create StorageManagementPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#delete StorageManagementPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#read StorageManagementPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#update StorageManagementPolicy#update}
  */
  readonly update?: string;
}

export function storageManagementPolicyTimeoutsToTerraform(struct?: StorageManagementPolicyTimeoutsOutputReference | StorageManagementPolicyTimeouts): any {
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

export class StorageManagementPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageManagementPolicyTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageManagementPolicyTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html azurerm_storage_management_policy}
*/
export class StorageManagementPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_storage_management_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html azurerm_storage_management_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageManagementPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: StorageManagementPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_management_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._storageAccountId = config.storageAccountId;
    this._rule = config.rule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId;
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: StorageManagementPolicyRule[]; 
  public get rule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: StorageManagementPolicyRule[]) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StorageManagementPolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StorageManagementPolicyTimeouts) {
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
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      rule: cdktf.listMapper(storageManagementPolicyRuleToTerraform)(this._rule),
      timeouts: storageManagementPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
