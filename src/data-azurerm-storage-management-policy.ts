// https://www.terraform.io/docs/providers/azurerm/d/storage_management_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermStorageManagementPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_management_policy.html#storage_account_id DataAzurermStorageManagementPolicy#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_management_policy.html#timeouts DataAzurermStorageManagementPolicy#timeouts}
  */
  readonly timeouts?: DataAzurermStorageManagementPolicyTimeouts;
}
export class DataAzurermStorageManagementPolicyRuleActionsBaseBlob extends cdktf.ComplexComputedList {

  // delete_after_days_since_modification_greater_than - computed: true, optional: false, required: false
  public get deleteAfterDaysSinceModificationGreaterThan() {
    return this.getNumberAttribute('delete_after_days_since_modification_greater_than');
  }

  // tier_to_archive_after_days_since_modification_greater_than - computed: true, optional: false, required: false
  public get tierToArchiveAfterDaysSinceModificationGreaterThan() {
    return this.getNumberAttribute('tier_to_archive_after_days_since_modification_greater_than');
  }

  // tier_to_cool_after_days_since_modification_greater_than - computed: true, optional: false, required: false
  public get tierToCoolAfterDaysSinceModificationGreaterThan() {
    return this.getNumberAttribute('tier_to_cool_after_days_since_modification_greater_than');
  }
}
export class DataAzurermStorageManagementPolicyRuleActionsSnapshot extends cdktf.ComplexComputedList {

  // change_tier_to_archive_after_days_since_creation - computed: true, optional: false, required: false
  public get changeTierToArchiveAfterDaysSinceCreation() {
    return this.getNumberAttribute('change_tier_to_archive_after_days_since_creation');
  }

  // change_tier_to_cool_after_days_since_creation - computed: true, optional: false, required: false
  public get changeTierToCoolAfterDaysSinceCreation() {
    return this.getNumberAttribute('change_tier_to_cool_after_days_since_creation');
  }

  // delete_after_days_since_creation_greater_than - computed: true, optional: false, required: false
  public get deleteAfterDaysSinceCreationGreaterThan() {
    return this.getNumberAttribute('delete_after_days_since_creation_greater_than');
  }
}
export class DataAzurermStorageManagementPolicyRuleActionsVersion extends cdktf.ComplexComputedList {

  // change_tier_to_archive_after_days_since_creation - computed: true, optional: false, required: false
  public get changeTierToArchiveAfterDaysSinceCreation() {
    return this.getNumberAttribute('change_tier_to_archive_after_days_since_creation');
  }

  // change_tier_to_cool_after_days_since_creation - computed: true, optional: false, required: false
  public get changeTierToCoolAfterDaysSinceCreation() {
    return this.getNumberAttribute('change_tier_to_cool_after_days_since_creation');
  }

  // delete_after_days_since_creation - computed: true, optional: false, required: false
  public get deleteAfterDaysSinceCreation() {
    return this.getNumberAttribute('delete_after_days_since_creation');
  }
}
export class DataAzurermStorageManagementPolicyRuleActions extends cdktf.ComplexComputedList {

  // base_blob - computed: true, optional: false, required: false
  public get baseBlob() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('base_blob') as any;
  }

  // snapshot - computed: true, optional: false, required: false
  public get snapshot() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('snapshot') as any;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('version') as any;
  }
}
export class DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataAzurermStorageManagementPolicyRuleFilters extends cdktf.ComplexComputedList {

  // blob_types - computed: true, optional: false, required: false
  public get blobTypes() {
    return this.getListAttribute('blob_types');
  }

  // match_blob_index_tag - computed: true, optional: false, required: false
  public get matchBlobIndexTag() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_blob_index_tag') as any;
  }

  // prefix_match - computed: true, optional: false, required: false
  public get prefixMatch() {
    return this.getListAttribute('prefix_match');
  }
}
export class DataAzurermStorageManagementPolicyRule extends cdktf.ComplexComputedList {

  // actions - computed: true, optional: false, required: false
  public get actions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('actions') as any;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }

  // filters - computed: true, optional: false, required: false
  public get filters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filters') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataAzurermStorageManagementPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_management_policy.html#read DataAzurermStorageManagementPolicy#read}
  */
  readonly read?: string;
}

function dataAzurermStorageManagementPolicyTimeoutsToTerraform(struct?: DataAzurermStorageManagementPolicyTimeoutsOutputReference | DataAzurermStorageManagementPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermStorageManagementPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/storage_management_policy.html azurerm_storage_management_policy}
*/
export class DataAzurermStorageManagementPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_storage_management_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/storage_management_policy.html azurerm_storage_management_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermStorageManagementPolicyConfig
  */
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // rule - computed: true, optional: false, required: false
  public rule(index: string) {
    return new DataAzurermStorageManagementPolicyRule(this, 'rule', index);
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermStorageManagementPolicyTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermStorageManagementPolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermStorageManagementPolicyTimeouts | undefined) {
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
      timeouts: dataAzurermStorageManagementPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
