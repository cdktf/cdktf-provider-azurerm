// https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageManagementPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#id StorageManagementPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#storage_account_id StorageManagementPolicy#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#rule StorageManagementPolicy#rule}
  */
  readonly rule?: StorageManagementPolicyRule[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#timeouts StorageManagementPolicy#timeouts}
  */
  readonly timeouts?: StorageManagementPolicyTimeouts;
}
export interface StorageManagementPolicyRuleActionsBaseBlob {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#delete_after_days_since_last_access_time_greater_than StorageManagementPolicy#delete_after_days_since_last_access_time_greater_than}
  */
  readonly deleteAfterDaysSinceLastAccessTimeGreaterThan?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#delete_after_days_since_modification_greater_than StorageManagementPolicy#delete_after_days_since_modification_greater_than}
  */
  readonly deleteAfterDaysSinceModificationGreaterThan?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_archive_after_days_since_last_access_time_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_last_access_time_greater_than}
  */
  readonly tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_archive_after_days_since_modification_greater_than StorageManagementPolicy#tier_to_archive_after_days_since_modification_greater_than}
  */
  readonly tierToArchiveAfterDaysSinceModificationGreaterThan?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_cool_after_days_since_last_access_time_greater_than StorageManagementPolicy#tier_to_cool_after_days_since_last_access_time_greater_than}
  */
  readonly tierToCoolAfterDaysSinceLastAccessTimeGreaterThan?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#tier_to_cool_after_days_since_modification_greater_than StorageManagementPolicy#tier_to_cool_after_days_since_modification_greater_than}
  */
  readonly tierToCoolAfterDaysSinceModificationGreaterThan?: number;
}

export function storageManagementPolicyRuleActionsBaseBlobToTerraform(struct?: StorageManagementPolicyRuleActionsBaseBlobOutputReference | StorageManagementPolicyRuleActionsBaseBlob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_after_days_since_last_access_time_greater_than: cdktf.numberToTerraform(struct!.deleteAfterDaysSinceLastAccessTimeGreaterThan),
    delete_after_days_since_modification_greater_than: cdktf.numberToTerraform(struct!.deleteAfterDaysSinceModificationGreaterThan),
    tier_to_archive_after_days_since_last_access_time_greater_than: cdktf.numberToTerraform(struct!.tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan),
    tier_to_archive_after_days_since_modification_greater_than: cdktf.numberToTerraform(struct!.tierToArchiveAfterDaysSinceModificationGreaterThan),
    tier_to_cool_after_days_since_last_access_time_greater_than: cdktf.numberToTerraform(struct!.tierToCoolAfterDaysSinceLastAccessTimeGreaterThan),
    tier_to_cool_after_days_since_modification_greater_than: cdktf.numberToTerraform(struct!.tierToCoolAfterDaysSinceModificationGreaterThan),
  }
}

export class StorageManagementPolicyRuleActionsBaseBlobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageManagementPolicyRuleActionsBaseBlob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteAfterDaysSinceLastAccessTimeGreaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteAfterDaysSinceLastAccessTimeGreaterThan = this._deleteAfterDaysSinceLastAccessTimeGreaterThan;
    }
    if (this._deleteAfterDaysSinceModificationGreaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteAfterDaysSinceModificationGreaterThan = this._deleteAfterDaysSinceModificationGreaterThan;
    }
    if (this._tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan = this._tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan;
    }
    if (this._tierToArchiveAfterDaysSinceModificationGreaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.tierToArchiveAfterDaysSinceModificationGreaterThan = this._tierToArchiveAfterDaysSinceModificationGreaterThan;
    }
    if (this._tierToCoolAfterDaysSinceLastAccessTimeGreaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.tierToCoolAfterDaysSinceLastAccessTimeGreaterThan = this._tierToCoolAfterDaysSinceLastAccessTimeGreaterThan;
    }
    if (this._tierToCoolAfterDaysSinceModificationGreaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.tierToCoolAfterDaysSinceModificationGreaterThan = this._tierToCoolAfterDaysSinceModificationGreaterThan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageManagementPolicyRuleActionsBaseBlob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteAfterDaysSinceLastAccessTimeGreaterThan = undefined;
      this._deleteAfterDaysSinceModificationGreaterThan = undefined;
      this._tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan = undefined;
      this._tierToArchiveAfterDaysSinceModificationGreaterThan = undefined;
      this._tierToCoolAfterDaysSinceLastAccessTimeGreaterThan = undefined;
      this._tierToCoolAfterDaysSinceModificationGreaterThan = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteAfterDaysSinceLastAccessTimeGreaterThan = value.deleteAfterDaysSinceLastAccessTimeGreaterThan;
      this._deleteAfterDaysSinceModificationGreaterThan = value.deleteAfterDaysSinceModificationGreaterThan;
      this._tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan = value.tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan;
      this._tierToArchiveAfterDaysSinceModificationGreaterThan = value.tierToArchiveAfterDaysSinceModificationGreaterThan;
      this._tierToCoolAfterDaysSinceLastAccessTimeGreaterThan = value.tierToCoolAfterDaysSinceLastAccessTimeGreaterThan;
      this._tierToCoolAfterDaysSinceModificationGreaterThan = value.tierToCoolAfterDaysSinceModificationGreaterThan;
    }
  }

  // delete_after_days_since_last_access_time_greater_than - computed: false, optional: true, required: false
  private _deleteAfterDaysSinceLastAccessTimeGreaterThan?: number; 
  public get deleteAfterDaysSinceLastAccessTimeGreaterThan() {
    return this.getNumberAttribute('delete_after_days_since_last_access_time_greater_than');
  }
  public set deleteAfterDaysSinceLastAccessTimeGreaterThan(value: number) {
    this._deleteAfterDaysSinceLastAccessTimeGreaterThan = value;
  }
  public resetDeleteAfterDaysSinceLastAccessTimeGreaterThan() {
    this._deleteAfterDaysSinceLastAccessTimeGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAfterDaysSinceLastAccessTimeGreaterThanInput() {
    return this._deleteAfterDaysSinceLastAccessTimeGreaterThan;
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

  // tier_to_archive_after_days_since_last_access_time_greater_than - computed: false, optional: true, required: false
  private _tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan?: number; 
  public get tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan() {
    return this.getNumberAttribute('tier_to_archive_after_days_since_last_access_time_greater_than');
  }
  public set tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan(value: number) {
    this._tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan = value;
  }
  public resetTierToArchiveAfterDaysSinceLastAccessTimeGreaterThan() {
    this._tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierToArchiveAfterDaysSinceLastAccessTimeGreaterThanInput() {
    return this._tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan;
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

  // tier_to_cool_after_days_since_last_access_time_greater_than - computed: false, optional: true, required: false
  private _tierToCoolAfterDaysSinceLastAccessTimeGreaterThan?: number; 
  public get tierToCoolAfterDaysSinceLastAccessTimeGreaterThan() {
    return this.getNumberAttribute('tier_to_cool_after_days_since_last_access_time_greater_than');
  }
  public set tierToCoolAfterDaysSinceLastAccessTimeGreaterThan(value: number) {
    this._tierToCoolAfterDaysSinceLastAccessTimeGreaterThan = value;
  }
  public resetTierToCoolAfterDaysSinceLastAccessTimeGreaterThan() {
    this._tierToCoolAfterDaysSinceLastAccessTimeGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierToCoolAfterDaysSinceLastAccessTimeGreaterThanInput() {
    return this._tierToCoolAfterDaysSinceLastAccessTimeGreaterThan;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#change_tier_to_archive_after_days_since_creation StorageManagementPolicy#change_tier_to_archive_after_days_since_creation}
  */
  readonly changeTierToArchiveAfterDaysSinceCreation?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#change_tier_to_cool_after_days_since_creation StorageManagementPolicy#change_tier_to_cool_after_days_since_creation}
  */
  readonly changeTierToCoolAfterDaysSinceCreation?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#delete_after_days_since_creation_greater_than StorageManagementPolicy#delete_after_days_since_creation_greater_than}
  */
  readonly deleteAfterDaysSinceCreationGreaterThan?: number;
}

export function storageManagementPolicyRuleActionsSnapshotToTerraform(struct?: StorageManagementPolicyRuleActionsSnapshotOutputReference | StorageManagementPolicyRuleActionsSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageManagementPolicyRuleActionsSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changeTierToArchiveAfterDaysSinceCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeTierToArchiveAfterDaysSinceCreation = this._changeTierToArchiveAfterDaysSinceCreation;
    }
    if (this._changeTierToCoolAfterDaysSinceCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeTierToCoolAfterDaysSinceCreation = this._changeTierToCoolAfterDaysSinceCreation;
    }
    if (this._deleteAfterDaysSinceCreationGreaterThan !== undefined) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#change_tier_to_archive_after_days_since_creation StorageManagementPolicy#change_tier_to_archive_after_days_since_creation}
  */
  readonly changeTierToArchiveAfterDaysSinceCreation?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#change_tier_to_cool_after_days_since_creation StorageManagementPolicy#change_tier_to_cool_after_days_since_creation}
  */
  readonly changeTierToCoolAfterDaysSinceCreation?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#delete_after_days_since_creation StorageManagementPolicy#delete_after_days_since_creation}
  */
  readonly deleteAfterDaysSinceCreation?: number;
}

export function storageManagementPolicyRuleActionsVersionToTerraform(struct?: StorageManagementPolicyRuleActionsVersionOutputReference | StorageManagementPolicyRuleActionsVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageManagementPolicyRuleActionsVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changeTierToArchiveAfterDaysSinceCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeTierToArchiveAfterDaysSinceCreation = this._changeTierToArchiveAfterDaysSinceCreation;
    }
    if (this._changeTierToCoolAfterDaysSinceCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeTierToCoolAfterDaysSinceCreation = this._changeTierToCoolAfterDaysSinceCreation;
    }
    if (this._deleteAfterDaysSinceCreation !== undefined) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#base_blob StorageManagementPolicy#base_blob}
  */
  readonly baseBlob?: StorageManagementPolicyRuleActionsBaseBlob;
  /**
  * snapshot block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#snapshot StorageManagementPolicy#snapshot}
  */
  readonly snapshot?: StorageManagementPolicyRuleActionsSnapshot;
  /**
  * version block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#version StorageManagementPolicy#version}
  */
  readonly version?: StorageManagementPolicyRuleActionsVersion;
}

export function storageManagementPolicyRuleActionsToTerraform(struct?: StorageManagementPolicyRuleActionsOutputReference | StorageManagementPolicyRuleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageManagementPolicyRuleActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseBlob?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseBlob = this._baseBlob?.internalValue;
    }
    if (this._snapshot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshot = this._snapshot?.internalValue;
    }
    if (this._version?.internalValue !== undefined) {
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
  private _baseBlob = new StorageManagementPolicyRuleActionsBaseBlobOutputReference(this, "base_blob");
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
  private _snapshot = new StorageManagementPolicyRuleActionsSnapshotOutputReference(this, "snapshot");
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
  private _version = new StorageManagementPolicyRuleActionsVersionOutputReference(this, "version");
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#name StorageManagementPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#operation StorageManagementPolicy#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#value StorageManagementPolicy#value}
  */
  readonly value: string;
}

export function storageManagementPolicyRuleFiltersMatchBlobIndexTagToTerraform(struct?: StorageManagementPolicyRuleFiltersMatchBlobIndexTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StorageManagementPolicyRuleFiltersMatchBlobIndexTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageManagementPolicyRuleFiltersMatchBlobIndexTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operation = value.operation;
      this._value = value.value;
    }
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

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class StorageManagementPolicyRuleFiltersMatchBlobIndexTagList extends cdktf.ComplexList {
  public internalValue? : StorageManagementPolicyRuleFiltersMatchBlobIndexTag[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference {
    return new StorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageManagementPolicyRuleFilters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#blob_types StorageManagementPolicy#blob_types}
  */
  readonly blobTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#prefix_match StorageManagementPolicy#prefix_match}
  */
  readonly prefixMatch?: string[];
  /**
  * match_blob_index_tag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#match_blob_index_tag StorageManagementPolicy#match_blob_index_tag}
  */
  readonly matchBlobIndexTag?: StorageManagementPolicyRuleFiltersMatchBlobIndexTag[] | cdktf.IResolvable;
}

export function storageManagementPolicyRuleFiltersToTerraform(struct?: StorageManagementPolicyRuleFiltersOutputReference | StorageManagementPolicyRuleFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blob_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blobTypes),
    prefix_match: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixMatch),
    match_blob_index_tag: cdktf.listMapper(storageManagementPolicyRuleFiltersMatchBlobIndexTagToTerraform, true)(struct!.matchBlobIndexTag),
  }
}

export class StorageManagementPolicyRuleFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageManagementPolicyRuleFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blobTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.blobTypes = this._blobTypes;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._matchBlobIndexTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchBlobIndexTag = this._matchBlobIndexTag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageManagementPolicyRuleFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blobTypes = undefined;
      this._prefixMatch = undefined;
      this._matchBlobIndexTag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blobTypes = value.blobTypes;
      this._prefixMatch = value.prefixMatch;
      this._matchBlobIndexTag.internalValue = value.matchBlobIndexTag;
    }
  }

  // blob_types - computed: false, optional: false, required: true
  private _blobTypes?: string[]; 
  public get blobTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('blob_types'));
  }
  public set blobTypes(value: string[]) {
    this._blobTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blobTypesInput() {
    return this._blobTypes;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string[]; 
  public get prefixMatch() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_match'));
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
  private _matchBlobIndexTag = new StorageManagementPolicyRuleFiltersMatchBlobIndexTagList(this, "match_blob_index_tag", true);
  public get matchBlobIndexTag() {
    return this._matchBlobIndexTag;
  }
  public putMatchBlobIndexTag(value: StorageManagementPolicyRuleFiltersMatchBlobIndexTag[] | cdktf.IResolvable) {
    this._matchBlobIndexTag.internalValue = value;
  }
  public resetMatchBlobIndexTag() {
    this._matchBlobIndexTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchBlobIndexTagInput() {
    return this._matchBlobIndexTag.internalValue;
  }
}
export interface StorageManagementPolicyRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#enabled StorageManagementPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#name StorageManagementPolicy#name}
  */
  readonly name: string;
  /**
  * actions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#actions StorageManagementPolicy#actions}
  */
  readonly actions: StorageManagementPolicyRuleActions;
  /**
  * filters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#filters StorageManagementPolicy#filters}
  */
  readonly filters?: StorageManagementPolicyRuleFilters;
}

export function storageManagementPolicyRuleToTerraform(struct?: StorageManagementPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class StorageManagementPolicyRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StorageManagementPolicyRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageManagementPolicyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._actions.internalValue = undefined;
      this._filters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._name = value.name;
      this._actions.internalValue = value.actions;
      this._filters.internalValue = value.filters;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // actions - computed: false, optional: false, required: true
  private _actions = new StorageManagementPolicyRuleActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: StorageManagementPolicyRuleActions) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new StorageManagementPolicyRuleFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: StorageManagementPolicyRuleFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}

export class StorageManagementPolicyRuleList extends cdktf.ComplexList {
  public internalValue? : StorageManagementPolicyRule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StorageManagementPolicyRuleOutputReference {
    return new StorageManagementPolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageManagementPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#create StorageManagementPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#delete StorageManagementPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#read StorageManagementPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy#update StorageManagementPolicy#update}
  */
  readonly update?: string;
}

export function storageManagementPolicyTimeoutsToTerraform(struct?: StorageManagementPolicyTimeoutsOutputReference | StorageManagementPolicyTimeouts | cdktf.IResolvable): any {
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

export class StorageManagementPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageManagementPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StorageManagementPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy azurerm_storage_management_policy}
*/
export class StorageManagementPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_storage_management_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/storage_management_policy azurerm_storage_management_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageManagementPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: StorageManagementPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_management_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.23.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._storageAccountId = config.storageAccountId;
    this._rule.internalValue = config.rule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _rule = new StorageManagementPolicyRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: StorageManagementPolicyRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StorageManagementPolicyTimeoutsOutputReference(this, "timeouts");
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
      id: cdktf.stringToTerraform(this._id),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      rule: cdktf.listMapper(storageManagementPolicyRuleToTerraform, true)(this._rule.internalValue),
      timeouts: storageManagementPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
