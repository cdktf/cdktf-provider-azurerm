// https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageManagementPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly storageAccountId: string;
  /** rule block */
  readonly rule?: StorageManagementPolicyRule[];
  /** timeouts block */
  readonly timeouts?: StorageManagementPolicyTimeouts;
}
export interface StorageManagementPolicyRuleActionsBaseBlob {
  readonly deleteAfterDaysSinceModificationGreaterThan?: number;
  readonly tierToArchiveAfterDaysSinceModificationGreaterThan?: number;
  readonly tierToCoolAfterDaysSinceModificationGreaterThan?: number;
}

function storageManagementPolicyRuleActionsBaseBlobToTerraform(struct?: StorageManagementPolicyRuleActionsBaseBlob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_after_days_since_modification_greater_than: cdktf.numberToTerraform(struct!.deleteAfterDaysSinceModificationGreaterThan),
    tier_to_archive_after_days_since_modification_greater_than: cdktf.numberToTerraform(struct!.tierToArchiveAfterDaysSinceModificationGreaterThan),
    tier_to_cool_after_days_since_modification_greater_than: cdktf.numberToTerraform(struct!.tierToCoolAfterDaysSinceModificationGreaterThan),
  }
}

export interface StorageManagementPolicyRuleActionsSnapshot {
  readonly changeTierToArchiveAfterDaysSinceCreation?: number;
  readonly changeTierToCoolAfterDaysSinceCreation?: number;
  readonly deleteAfterDaysSinceCreationGreaterThan?: number;
}

function storageManagementPolicyRuleActionsSnapshotToTerraform(struct?: StorageManagementPolicyRuleActionsSnapshot): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    change_tier_to_archive_after_days_since_creation: cdktf.numberToTerraform(struct!.changeTierToArchiveAfterDaysSinceCreation),
    change_tier_to_cool_after_days_since_creation: cdktf.numberToTerraform(struct!.changeTierToCoolAfterDaysSinceCreation),
    delete_after_days_since_creation_greater_than: cdktf.numberToTerraform(struct!.deleteAfterDaysSinceCreationGreaterThan),
  }
}

export interface StorageManagementPolicyRuleActionsVersion {
  readonly changeTierToArchiveAfterDaysSinceCreation?: number;
  readonly changeTierToCoolAfterDaysSinceCreation?: number;
  readonly deleteAfterDaysSinceCreation?: number;
}

function storageManagementPolicyRuleActionsVersionToTerraform(struct?: StorageManagementPolicyRuleActionsVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    change_tier_to_archive_after_days_since_creation: cdktf.numberToTerraform(struct!.changeTierToArchiveAfterDaysSinceCreation),
    change_tier_to_cool_after_days_since_creation: cdktf.numberToTerraform(struct!.changeTierToCoolAfterDaysSinceCreation),
    delete_after_days_since_creation: cdktf.numberToTerraform(struct!.deleteAfterDaysSinceCreation),
  }
}

export interface StorageManagementPolicyRuleActions {
  /** base_blob block */
  readonly baseBlob?: StorageManagementPolicyRuleActionsBaseBlob[];
  /** snapshot block */
  readonly snapshot?: StorageManagementPolicyRuleActionsSnapshot[];
  /** version block */
  readonly version?: StorageManagementPolicyRuleActionsVersion[];
}

function storageManagementPolicyRuleActionsToTerraform(struct?: StorageManagementPolicyRuleActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    base_blob: cdktf.listMapper(storageManagementPolicyRuleActionsBaseBlobToTerraform)(struct!.baseBlob),
    snapshot: cdktf.listMapper(storageManagementPolicyRuleActionsSnapshotToTerraform)(struct!.snapshot),
    version: cdktf.listMapper(storageManagementPolicyRuleActionsVersionToTerraform)(struct!.version),
  }
}

export interface StorageManagementPolicyRuleFiltersMatchBlobIndexTag {
  readonly name: string;
  readonly operation?: string;
  readonly value: string;
}

function storageManagementPolicyRuleFiltersMatchBlobIndexTagToTerraform(struct?: StorageManagementPolicyRuleFiltersMatchBlobIndexTag): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StorageManagementPolicyRuleFilters {
  readonly blobTypes?: string[];
  readonly prefixMatch?: string[];
  /** match_blob_index_tag block */
  readonly matchBlobIndexTag?: StorageManagementPolicyRuleFiltersMatchBlobIndexTag[];
}

function storageManagementPolicyRuleFiltersToTerraform(struct?: StorageManagementPolicyRuleFilters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    blob_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.blobTypes),
    prefix_match: cdktf.listMapper(cdktf.stringToTerraform)(struct!.prefixMatch),
    match_blob_index_tag: cdktf.listMapper(storageManagementPolicyRuleFiltersMatchBlobIndexTagToTerraform)(struct!.matchBlobIndexTag),
  }
}

export interface StorageManagementPolicyRule {
  readonly enabled: boolean;
  readonly name: string;
  /** actions block */
  readonly actions: StorageManagementPolicyRuleActions[];
  /** filters block */
  readonly filters?: StorageManagementPolicyRuleFilters[];
}

function storageManagementPolicyRuleToTerraform(struct?: StorageManagementPolicyRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    actions: cdktf.listMapper(storageManagementPolicyRuleActionsToTerraform)(struct!.actions),
    filters: cdktf.listMapper(storageManagementPolicyRuleFiltersToTerraform)(struct!.filters),
  }
}

export interface StorageManagementPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function storageManagementPolicyTimeoutsToTerraform(struct?: StorageManagementPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class StorageManagementPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _storageAccountId: string;
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
  private _rule?: StorageManagementPolicyRule[];
  public get rule() {
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: StorageManagementPolicyRule[] ) {
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
  private _timeouts?: StorageManagementPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StorageManagementPolicyTimeouts ) {
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
