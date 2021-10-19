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

function storageManagementPolicyRuleActionsBaseBlobToTerraform(struct?: StorageManagementPolicyRuleActionsBaseBlobOutputReference | StorageManagementPolicyRuleActionsBaseBlob): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // delete_after_days_since_modification_greater_than - computed: false, optional: true, required: false
  private _deleteAfterDaysSinceModificationGreaterThan?: number | undefined; 
  public get deleteAfterDaysSinceModificationGreaterThan() {
    return this.getNumberAttribute('delete_after_days_since_modification_greater_than');
  }
  public set deleteAfterDaysSinceModificationGreaterThan(value: number | undefined) {
    this._deleteAfterDaysSinceModificationGreaterThan = value;
  }
  public resetDeleteAfterDaysSinceModificationGreaterThan() {
    this._deleteAfterDaysSinceModificationGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAfterDaysSinceModificationGreaterThanInput() {
    return this._deleteAfterDaysSinceModificationGreaterThan
  }

  // tier_to_archive_after_days_since_modification_greater_than - computed: false, optional: true, required: false
  private _tierToArchiveAfterDaysSinceModificationGreaterThan?: number | undefined; 
  public get tierToArchiveAfterDaysSinceModificationGreaterThan() {
    return this.getNumberAttribute('tier_to_archive_after_days_since_modification_greater_than');
  }
  public set tierToArchiveAfterDaysSinceModificationGreaterThan(value: number | undefined) {
    this._tierToArchiveAfterDaysSinceModificationGreaterThan = value;
  }
  public resetTierToArchiveAfterDaysSinceModificationGreaterThan() {
    this._tierToArchiveAfterDaysSinceModificationGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierToArchiveAfterDaysSinceModificationGreaterThanInput() {
    return this._tierToArchiveAfterDaysSinceModificationGreaterThan
  }

  // tier_to_cool_after_days_since_modification_greater_than - computed: false, optional: true, required: false
  private _tierToCoolAfterDaysSinceModificationGreaterThan?: number | undefined; 
  public get tierToCoolAfterDaysSinceModificationGreaterThan() {
    return this.getNumberAttribute('tier_to_cool_after_days_since_modification_greater_than');
  }
  public set tierToCoolAfterDaysSinceModificationGreaterThan(value: number | undefined) {
    this._tierToCoolAfterDaysSinceModificationGreaterThan = value;
  }
  public resetTierToCoolAfterDaysSinceModificationGreaterThan() {
    this._tierToCoolAfterDaysSinceModificationGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierToCoolAfterDaysSinceModificationGreaterThanInput() {
    return this._tierToCoolAfterDaysSinceModificationGreaterThan
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

function storageManagementPolicyRuleActionsSnapshotToTerraform(struct?: StorageManagementPolicyRuleActionsSnapshotOutputReference | StorageManagementPolicyRuleActionsSnapshot): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // change_tier_to_archive_after_days_since_creation - computed: false, optional: true, required: false
  private _changeTierToArchiveAfterDaysSinceCreation?: number | undefined; 
  public get changeTierToArchiveAfterDaysSinceCreation() {
    return this.getNumberAttribute('change_tier_to_archive_after_days_since_creation');
  }
  public set changeTierToArchiveAfterDaysSinceCreation(value: number | undefined) {
    this._changeTierToArchiveAfterDaysSinceCreation = value;
  }
  public resetChangeTierToArchiveAfterDaysSinceCreation() {
    this._changeTierToArchiveAfterDaysSinceCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeTierToArchiveAfterDaysSinceCreationInput() {
    return this._changeTierToArchiveAfterDaysSinceCreation
  }

  // change_tier_to_cool_after_days_since_creation - computed: false, optional: true, required: false
  private _changeTierToCoolAfterDaysSinceCreation?: number | undefined; 
  public get changeTierToCoolAfterDaysSinceCreation() {
    return this.getNumberAttribute('change_tier_to_cool_after_days_since_creation');
  }
  public set changeTierToCoolAfterDaysSinceCreation(value: number | undefined) {
    this._changeTierToCoolAfterDaysSinceCreation = value;
  }
  public resetChangeTierToCoolAfterDaysSinceCreation() {
    this._changeTierToCoolAfterDaysSinceCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeTierToCoolAfterDaysSinceCreationInput() {
    return this._changeTierToCoolAfterDaysSinceCreation
  }

  // delete_after_days_since_creation_greater_than - computed: false, optional: true, required: false
  private _deleteAfterDaysSinceCreationGreaterThan?: number | undefined; 
  public get deleteAfterDaysSinceCreationGreaterThan() {
    return this.getNumberAttribute('delete_after_days_since_creation_greater_than');
  }
  public set deleteAfterDaysSinceCreationGreaterThan(value: number | undefined) {
    this._deleteAfterDaysSinceCreationGreaterThan = value;
  }
  public resetDeleteAfterDaysSinceCreationGreaterThan() {
    this._deleteAfterDaysSinceCreationGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAfterDaysSinceCreationGreaterThanInput() {
    return this._deleteAfterDaysSinceCreationGreaterThan
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

function storageManagementPolicyRuleActionsVersionToTerraform(struct?: StorageManagementPolicyRuleActionsVersionOutputReference | StorageManagementPolicyRuleActionsVersion): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // change_tier_to_archive_after_days_since_creation - computed: false, optional: true, required: false
  private _changeTierToArchiveAfterDaysSinceCreation?: number | undefined; 
  public get changeTierToArchiveAfterDaysSinceCreation() {
    return this.getNumberAttribute('change_tier_to_archive_after_days_since_creation');
  }
  public set changeTierToArchiveAfterDaysSinceCreation(value: number | undefined) {
    this._changeTierToArchiveAfterDaysSinceCreation = value;
  }
  public resetChangeTierToArchiveAfterDaysSinceCreation() {
    this._changeTierToArchiveAfterDaysSinceCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeTierToArchiveAfterDaysSinceCreationInput() {
    return this._changeTierToArchiveAfterDaysSinceCreation
  }

  // change_tier_to_cool_after_days_since_creation - computed: false, optional: true, required: false
  private _changeTierToCoolAfterDaysSinceCreation?: number | undefined; 
  public get changeTierToCoolAfterDaysSinceCreation() {
    return this.getNumberAttribute('change_tier_to_cool_after_days_since_creation');
  }
  public set changeTierToCoolAfterDaysSinceCreation(value: number | undefined) {
    this._changeTierToCoolAfterDaysSinceCreation = value;
  }
  public resetChangeTierToCoolAfterDaysSinceCreation() {
    this._changeTierToCoolAfterDaysSinceCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeTierToCoolAfterDaysSinceCreationInput() {
    return this._changeTierToCoolAfterDaysSinceCreation
  }

  // delete_after_days_since_creation - computed: false, optional: true, required: false
  private _deleteAfterDaysSinceCreation?: number | undefined; 
  public get deleteAfterDaysSinceCreation() {
    return this.getNumberAttribute('delete_after_days_since_creation');
  }
  public set deleteAfterDaysSinceCreation(value: number | undefined) {
    this._deleteAfterDaysSinceCreation = value;
  }
  public resetDeleteAfterDaysSinceCreation() {
    this._deleteAfterDaysSinceCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAfterDaysSinceCreationInput() {
    return this._deleteAfterDaysSinceCreation
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

function storageManagementPolicyRuleActionsToTerraform(struct?: StorageManagementPolicyRuleActionsOutputReference | StorageManagementPolicyRuleActions): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // base_blob - computed: false, optional: true, required: false
  private _baseBlob?: StorageManagementPolicyRuleActionsBaseBlob | undefined; 
  private __baseBlobOutput = new StorageManagementPolicyRuleActionsBaseBlobOutputReference(this as any, "base_blob", true);
  public get baseBlob() {
    return this.__baseBlobOutput;
  }
  public putBaseBlob(value: StorageManagementPolicyRuleActionsBaseBlob | undefined) {
    this._baseBlob = value;
  }
  public resetBaseBlob() {
    this._baseBlob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseBlobInput() {
    return this._baseBlob
  }

  // snapshot - computed: false, optional: true, required: false
  private _snapshot?: StorageManagementPolicyRuleActionsSnapshot | undefined; 
  private __snapshotOutput = new StorageManagementPolicyRuleActionsSnapshotOutputReference(this as any, "snapshot", true);
  public get snapshot() {
    return this.__snapshotOutput;
  }
  public putSnapshot(value: StorageManagementPolicyRuleActionsSnapshot | undefined) {
    this._snapshot = value;
  }
  public resetSnapshot() {
    this._snapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot
  }

  // version - computed: false, optional: true, required: false
  private _version?: StorageManagementPolicyRuleActionsVersion | undefined; 
  private __versionOutput = new StorageManagementPolicyRuleActionsVersionOutputReference(this as any, "version", true);
  public get version() {
    return this.__versionOutput;
  }
  public putVersion(value: StorageManagementPolicyRuleActionsVersion | undefined) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
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

function storageManagementPolicyRuleFiltersMatchBlobIndexTagToTerraform(struct?: StorageManagementPolicyRuleFiltersMatchBlobIndexTag): any {
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

function storageManagementPolicyRuleFiltersToTerraform(struct?: StorageManagementPolicyRuleFiltersOutputReference | StorageManagementPolicyRuleFilters): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // blob_types - computed: false, optional: true, required: false
  private _blobTypes?: string[] | undefined; 
  public get blobTypes() {
    return this.getListAttribute('blob_types');
  }
  public set blobTypes(value: string[] | undefined) {
    this._blobTypes = value;
  }
  public resetBlobTypes() {
    this._blobTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobTypesInput() {
    return this._blobTypes
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string[] | undefined; 
  public get prefixMatch() {
    return this.getListAttribute('prefix_match');
  }
  public set prefixMatch(value: string[] | undefined) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch
  }

  // match_blob_index_tag - computed: false, optional: true, required: false
  private _matchBlobIndexTag?: StorageManagementPolicyRuleFiltersMatchBlobIndexTag[] | undefined; 
  public get matchBlobIndexTag() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_blob_index_tag') as any;
  }
  public set matchBlobIndexTag(value: StorageManagementPolicyRuleFiltersMatchBlobIndexTag[] | undefined) {
    this._matchBlobIndexTag = value;
  }
  public resetMatchBlobIndexTag() {
    this._matchBlobIndexTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchBlobIndexTagInput() {
    return this._matchBlobIndexTag
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

function storageManagementPolicyRuleToTerraform(struct?: StorageManagementPolicyRule): any {
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

function storageManagementPolicyTimeoutsToTerraform(struct?: StorageManagementPolicyTimeoutsOutputReference | StorageManagementPolicyTimeouts): any {
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
    this._timeouts = config.timeouts;
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
    return this._storageAccountId
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: StorageManagementPolicyRule[] | undefined; 
  public get rule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: StorageManagementPolicyRule[] | undefined) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageManagementPolicyTimeouts | undefined; 
  private __timeoutsOutput = new StorageManagementPolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: StorageManagementPolicyTimeouts | undefined) {
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
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      rule: cdktf.listMapper(storageManagementPolicyRuleToTerraform)(this._rule),
      timeouts: storageManagementPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
