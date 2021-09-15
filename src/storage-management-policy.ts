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

function storageManagementPolicyRuleActionsBaseBlobToTerraform(struct?: StorageManagementPolicyRuleActionsBaseBlob): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_after_days_since_modification_greater_than: cdktf.numberToTerraform(struct!.deleteAfterDaysSinceModificationGreaterThan),
    tier_to_archive_after_days_since_modification_greater_than: cdktf.numberToTerraform(struct!.tierToArchiveAfterDaysSinceModificationGreaterThan),
    tier_to_cool_after_days_since_modification_greater_than: cdktf.numberToTerraform(struct!.tierToCoolAfterDaysSinceModificationGreaterThan),
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

function storageManagementPolicyRuleActionsSnapshotToTerraform(struct?: StorageManagementPolicyRuleActionsSnapshot): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    change_tier_to_archive_after_days_since_creation: cdktf.numberToTerraform(struct!.changeTierToArchiveAfterDaysSinceCreation),
    change_tier_to_cool_after_days_since_creation: cdktf.numberToTerraform(struct!.changeTierToCoolAfterDaysSinceCreation),
    delete_after_days_since_creation_greater_than: cdktf.numberToTerraform(struct!.deleteAfterDaysSinceCreationGreaterThan),
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

function storageManagementPolicyRuleActionsVersionToTerraform(struct?: StorageManagementPolicyRuleActionsVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    change_tier_to_archive_after_days_since_creation: cdktf.numberToTerraform(struct!.changeTierToArchiveAfterDaysSinceCreation),
    change_tier_to_cool_after_days_since_creation: cdktf.numberToTerraform(struct!.changeTierToCoolAfterDaysSinceCreation),
    delete_after_days_since_creation: cdktf.numberToTerraform(struct!.deleteAfterDaysSinceCreation),
  }
}

export interface StorageManagementPolicyRuleActions {
  /**
  * base_blob block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#base_blob StorageManagementPolicy#base_blob}
  */
  readonly baseBlob?: StorageManagementPolicyRuleActionsBaseBlob[];
  /**
  * snapshot block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#snapshot StorageManagementPolicy#snapshot}
  */
  readonly snapshot?: StorageManagementPolicyRuleActionsSnapshot[];
  /**
  * version block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#version StorageManagementPolicy#version}
  */
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

function storageManagementPolicyRuleFiltersToTerraform(struct?: StorageManagementPolicyRuleFilters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    blob_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.blobTypes),
    prefix_match: cdktf.listMapper(cdktf.stringToTerraform)(struct!.prefixMatch),
    match_blob_index_tag: cdktf.listMapper(storageManagementPolicyRuleFiltersMatchBlobIndexTagToTerraform)(struct!.matchBlobIndexTag),
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
  readonly actions: StorageManagementPolicyRuleActions[];
  /**
  * filters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy.html#filters StorageManagementPolicy#filters}
  */
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

function storageManagementPolicyTimeoutsToTerraform(struct?: StorageManagementPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
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
