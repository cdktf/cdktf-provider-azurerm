// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_storage_management_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAzurermStorageManagementPolicyConfig extends TerraformMetaArguments {
  readonly storageAccountId: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermStorageManagementPolicyTimeouts;
}
export class DataAzurermStorageManagementPolicyRuleActionsBaseBlob extends ComplexComputedList {

  // delete_after_days_since_modification_greater_than - computed: true, optional: false, required: true
  public get deleteAfterDaysSinceModificationGreaterThan() {
    return this.getNumberAttribute('delete_after_days_since_modification_greater_than');
  }

  // tier_to_archive_after_days_since_modification_greater_than - computed: true, optional: false, required: true
  public get tierToArchiveAfterDaysSinceModificationGreaterThan() {
    return this.getNumberAttribute('tier_to_archive_after_days_since_modification_greater_than');
  }

  // tier_to_cool_after_days_since_modification_greater_than - computed: true, optional: false, required: true
  public get tierToCoolAfterDaysSinceModificationGreaterThan() {
    return this.getNumberAttribute('tier_to_cool_after_days_since_modification_greater_than');
  }
}
export class DataAzurermStorageManagementPolicyRuleActionsSnapshot extends ComplexComputedList {

  // delete_after_days_since_creation_greater_than - computed: true, optional: false, required: true
  public get deleteAfterDaysSinceCreationGreaterThan() {
    return this.getNumberAttribute('delete_after_days_since_creation_greater_than');
  }
}
export class DataAzurermStorageManagementPolicyRuleActions extends ComplexComputedList {

  // base_blob - computed: true, optional: false, required: true
  public get baseBlob() {
    return 'not implemented' as any;
  }

  // snapshot - computed: true, optional: false, required: true
  public get snapshot() {
    return 'not implemented' as any;
  }
}
export class DataAzurermStorageManagementPolicyRuleFilters extends ComplexComputedList {

  // blob_types - computed: true, optional: false, required: true
  public get blobTypes() {
    return this.getListAttribute('blob_types');
  }

  // prefix_match - computed: true, optional: false, required: true
  public get prefixMatch() {
    return this.getListAttribute('prefix_match');
  }
}
export class DataAzurermStorageManagementPolicyRule extends ComplexComputedList {

  // actions - computed: true, optional: false, required: true
  public get actions() {
    return 'not implemented' as any;
  }

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filters - computed: true, optional: false, required: true
  public get filters() {
    return 'not implemented' as any;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataAzurermStorageManagementPolicyTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermStorageManagementPolicy extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermStorageManagementPolicyConfig) {
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
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // rule - computed: true, optional: false, required: true
  public rule(index: string) {
    return new DataAzurermStorageManagementPolicyRule(this, 'rule', index);
  }

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId: string;
  public get storageAccountId() {
    return this._storageAccountId;
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermStorageManagementPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermStorageManagementPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      storage_account_id: this._storageAccountId,
      timeouts: this._timeouts,
    };
  }
}
