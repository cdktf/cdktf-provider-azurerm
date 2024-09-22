// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_management_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermStorageManagementPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_management_policy#id DataAzurermStorageManagementPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_management_policy#storage_account_id DataAzurermStorageManagementPolicy#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_management_policy#timeouts DataAzurermStorageManagementPolicy#timeouts}
  */
  readonly timeouts?: DataAzurermStorageManagementPolicyTimeouts;
}
export interface DataAzurermStorageManagementPolicyRuleActionsBaseBlob {
}

export function dataAzurermStorageManagementPolicyRuleActionsBaseBlobToTerraform(struct?: DataAzurermStorageManagementPolicyRuleActionsBaseBlob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermStorageManagementPolicyRuleActionsBaseBlobToHclTerraform(struct?: DataAzurermStorageManagementPolicyRuleActionsBaseBlob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermStorageManagementPolicyRuleActionsBaseBlob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermStorageManagementPolicyRuleActionsBaseBlob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_tier_to_hot_from_cool_enabled - computed: true, optional: false, required: false
  public get autoTierToHotFromCoolEnabled() {
    return this.getBooleanAttribute('auto_tier_to_hot_from_cool_enabled');
  }

  // delete_after_days_since_creation_greater_than - computed: true, optional: false, required: false
  public get deleteAfterDaysSinceCreationGreaterThan() {
    return this.getNumberAttribute('delete_after_days_since_creation_greater_than');
  }

  // delete_after_days_since_last_access_time_greater_than - computed: true, optional: false, required: false
  public get deleteAfterDaysSinceLastAccessTimeGreaterThan() {
    return this.getNumberAttribute('delete_after_days_since_last_access_time_greater_than');
  }

  // delete_after_days_since_modification_greater_than - computed: true, optional: false, required: false
  public get deleteAfterDaysSinceModificationGreaterThan() {
    return this.getNumberAttribute('delete_after_days_since_modification_greater_than');
  }

  // tier_to_archive_after_days_since_creation_greater_than - computed: true, optional: false, required: false
  public get tierToArchiveAfterDaysSinceCreationGreaterThan() {
    return this.getNumberAttribute('tier_to_archive_after_days_since_creation_greater_than');
  }

  // tier_to_archive_after_days_since_last_access_time_greater_than - computed: true, optional: false, required: false
  public get tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan() {
    return this.getNumberAttribute('tier_to_archive_after_days_since_last_access_time_greater_than');
  }

  // tier_to_archive_after_days_since_last_tier_change_greater_than - computed: true, optional: false, required: false
  public get tierToArchiveAfterDaysSinceLastTierChangeGreaterThan() {
    return this.getNumberAttribute('tier_to_archive_after_days_since_last_tier_change_greater_than');
  }

  // tier_to_archive_after_days_since_modification_greater_than - computed: true, optional: false, required: false
  public get tierToArchiveAfterDaysSinceModificationGreaterThan() {
    return this.getNumberAttribute('tier_to_archive_after_days_since_modification_greater_than');
  }

  // tier_to_cold_after_days_since_creation_greater_than - computed: true, optional: false, required: false
  public get tierToColdAfterDaysSinceCreationGreaterThan() {
    return this.getNumberAttribute('tier_to_cold_after_days_since_creation_greater_than');
  }

  // tier_to_cold_after_days_since_last_access_time_greater_than - computed: true, optional: false, required: false
  public get tierToColdAfterDaysSinceLastAccessTimeGreaterThan() {
    return this.getNumberAttribute('tier_to_cold_after_days_since_last_access_time_greater_than');
  }

  // tier_to_cold_after_days_since_modification_greater_than - computed: true, optional: false, required: false
  public get tierToColdAfterDaysSinceModificationGreaterThan() {
    return this.getNumberAttribute('tier_to_cold_after_days_since_modification_greater_than');
  }

  // tier_to_cool_after_days_since_creation_greater_than - computed: true, optional: false, required: false
  public get tierToCoolAfterDaysSinceCreationGreaterThan() {
    return this.getNumberAttribute('tier_to_cool_after_days_since_creation_greater_than');
  }

  // tier_to_cool_after_days_since_last_access_time_greater_than - computed: true, optional: false, required: false
  public get tierToCoolAfterDaysSinceLastAccessTimeGreaterThan() {
    return this.getNumberAttribute('tier_to_cool_after_days_since_last_access_time_greater_than');
  }

  // tier_to_cool_after_days_since_modification_greater_than - computed: true, optional: false, required: false
  public get tierToCoolAfterDaysSinceModificationGreaterThan() {
    return this.getNumberAttribute('tier_to_cool_after_days_since_modification_greater_than');
  }
}

export class DataAzurermStorageManagementPolicyRuleActionsBaseBlobList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference {
    return new DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermStorageManagementPolicyRuleActionsSnapshot {
}

export function dataAzurermStorageManagementPolicyRuleActionsSnapshotToTerraform(struct?: DataAzurermStorageManagementPolicyRuleActionsSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermStorageManagementPolicyRuleActionsSnapshotToHclTerraform(struct?: DataAzurermStorageManagementPolicyRuleActionsSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermStorageManagementPolicyRuleActionsSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermStorageManagementPolicyRuleActionsSnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

  // tier_to_archive_after_days_since_last_tier_change_greater_than - computed: true, optional: false, required: false
  public get tierToArchiveAfterDaysSinceLastTierChangeGreaterThan() {
    return this.getNumberAttribute('tier_to_archive_after_days_since_last_tier_change_greater_than');
  }

  // tier_to_cold_after_days_since_creation_greater_than - computed: true, optional: false, required: false
  public get tierToColdAfterDaysSinceCreationGreaterThan() {
    return this.getNumberAttribute('tier_to_cold_after_days_since_creation_greater_than');
  }
}

export class DataAzurermStorageManagementPolicyRuleActionsSnapshotList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference {
    return new DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermStorageManagementPolicyRuleActionsVersion {
}

export function dataAzurermStorageManagementPolicyRuleActionsVersionToTerraform(struct?: DataAzurermStorageManagementPolicyRuleActionsVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermStorageManagementPolicyRuleActionsVersionToHclTerraform(struct?: DataAzurermStorageManagementPolicyRuleActionsVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermStorageManagementPolicyRuleActionsVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermStorageManagementPolicyRuleActionsVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

  // tier_to_archive_after_days_since_last_tier_change_greater_than - computed: true, optional: false, required: false
  public get tierToArchiveAfterDaysSinceLastTierChangeGreaterThan() {
    return this.getNumberAttribute('tier_to_archive_after_days_since_last_tier_change_greater_than');
  }

  // tier_to_cold_after_days_since_creation_greater_than - computed: true, optional: false, required: false
  public get tierToColdAfterDaysSinceCreationGreaterThan() {
    return this.getNumberAttribute('tier_to_cold_after_days_since_creation_greater_than');
  }
}

export class DataAzurermStorageManagementPolicyRuleActionsVersionList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference {
    return new DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermStorageManagementPolicyRuleActions {
}

export function dataAzurermStorageManagementPolicyRuleActionsToTerraform(struct?: DataAzurermStorageManagementPolicyRuleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermStorageManagementPolicyRuleActionsToHclTerraform(struct?: DataAzurermStorageManagementPolicyRuleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermStorageManagementPolicyRuleActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermStorageManagementPolicyRuleActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermStorageManagementPolicyRuleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_blob - computed: true, optional: false, required: false
  private _baseBlob = new DataAzurermStorageManagementPolicyRuleActionsBaseBlobList(this, "base_blob", false);
  public get baseBlob() {
    return this._baseBlob;
  }

  // snapshot - computed: true, optional: false, required: false
  private _snapshot = new DataAzurermStorageManagementPolicyRuleActionsSnapshotList(this, "snapshot", false);
  public get snapshot() {
    return this._snapshot;
  }

  // version - computed: true, optional: false, required: false
  private _version = new DataAzurermStorageManagementPolicyRuleActionsVersionList(this, "version", false);
  public get version() {
    return this._version;
  }
}

export class DataAzurermStorageManagementPolicyRuleActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermStorageManagementPolicyRuleActionsOutputReference {
    return new DataAzurermStorageManagementPolicyRuleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag {
}

export function dataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagToTerraform(struct?: DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagToHclTerraform(struct?: DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference {
    return new DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermStorageManagementPolicyRuleFilters {
}

export function dataAzurermStorageManagementPolicyRuleFiltersToTerraform(struct?: DataAzurermStorageManagementPolicyRuleFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermStorageManagementPolicyRuleFiltersToHclTerraform(struct?: DataAzurermStorageManagementPolicyRuleFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermStorageManagementPolicyRuleFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermStorageManagementPolicyRuleFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermStorageManagementPolicyRuleFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blob_types - computed: true, optional: false, required: false
  public get blobTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('blob_types'));
  }

  // match_blob_index_tag - computed: true, optional: false, required: false
  private _matchBlobIndexTag = new DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList(this, "match_blob_index_tag", false);
  public get matchBlobIndexTag() {
    return this._matchBlobIndexTag;
  }

  // prefix_match - computed: true, optional: false, required: false
  public get prefixMatch() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_match'));
  }
}

export class DataAzurermStorageManagementPolicyRuleFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermStorageManagementPolicyRuleFiltersOutputReference {
    return new DataAzurermStorageManagementPolicyRuleFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermStorageManagementPolicyRule {
}

export function dataAzurermStorageManagementPolicyRuleToTerraform(struct?: DataAzurermStorageManagementPolicyRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermStorageManagementPolicyRuleToHclTerraform(struct?: DataAzurermStorageManagementPolicyRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermStorageManagementPolicyRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermStorageManagementPolicyRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermStorageManagementPolicyRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataAzurermStorageManagementPolicyRuleActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataAzurermStorageManagementPolicyRuleFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAzurermStorageManagementPolicyRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermStorageManagementPolicyRuleOutputReference {
    return new DataAzurermStorageManagementPolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermStorageManagementPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_management_policy#read DataAzurermStorageManagementPolicy#read}
  */
  readonly read?: string;
}

export function dataAzurermStorageManagementPolicyTimeoutsToTerraform(struct?: DataAzurermStorageManagementPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermStorageManagementPolicyTimeoutsToHclTerraform(struct?: DataAzurermStorageManagementPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermStorageManagementPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermStorageManagementPolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermStorageManagementPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_management_policy azurerm_storage_management_policy}
*/
export class DataAzurermStorageManagementPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_storage_management_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermStorageManagementPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermStorageManagementPolicy to import
  * @param importFromId The id of the existing DataAzurermStorageManagementPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_management_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermStorageManagementPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_storage_management_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_management_policy azurerm_storage_management_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermStorageManagementPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermStorageManagementPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_management_policy',
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
    this._id = config.id;
    this._storageAccountId = config.storageAccountId;
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

  // rule - computed: true, optional: false, required: false
  private _rule = new DataAzurermStorageManagementPolicyRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermStorageManagementPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermStorageManagementPolicyTimeouts) {
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
      timeouts: dataAzurermStorageManagementPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      timeouts: {
        value: dataAzurermStorageManagementPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermStorageManagementPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
