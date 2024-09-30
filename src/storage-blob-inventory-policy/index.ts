// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageBlobInventoryPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy#id StorageBlobInventoryPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy#storage_account_id StorageBlobInventoryPolicy#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy#rules StorageBlobInventoryPolicy#rules}
  */
  readonly rules: StorageBlobInventoryPolicyRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy#timeouts StorageBlobInventoryPolicy#timeouts}
  */
  readonly timeouts?: StorageBlobInventoryPolicyTimeouts;
}
export interface StorageBlobInventoryPolicyRulesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy#blob_types StorageBlobInventoryPolicy#blob_types}
  */
  readonly blobTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy#exclude_prefixes StorageBlobInventoryPolicy#exclude_prefixes}
  */
  readonly excludePrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy#include_blob_versions StorageBlobInventoryPolicy#include_blob_versions}
  */
  readonly includeBlobVersions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy#include_deleted StorageBlobInventoryPolicy#include_deleted}
  */
  readonly includeDeleted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy#include_snapshots StorageBlobInventoryPolicy#include_snapshots}
  */
  readonly includeSnapshots?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy#prefix_match StorageBlobInventoryPolicy#prefix_match}
  */
  readonly prefixMatch?: string[];
}

export function storageBlobInventoryPolicyRulesFilterToTerraform(struct?: StorageBlobInventoryPolicyRulesFilterOutputReference | StorageBlobInventoryPolicyRulesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blob_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blobTypes),
    exclude_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePrefixes),
    include_blob_versions: cdktf.booleanToTerraform(struct!.includeBlobVersions),
    include_deleted: cdktf.booleanToTerraform(struct!.includeDeleted),
    include_snapshots: cdktf.booleanToTerraform(struct!.includeSnapshots),
    prefix_match: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixMatch),
  }
}


export function storageBlobInventoryPolicyRulesFilterToHclTerraform(struct?: StorageBlobInventoryPolicyRulesFilterOutputReference | StorageBlobInventoryPolicyRulesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blob_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blobTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    exclude_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePrefixes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include_blob_versions: {
      value: cdktf.booleanToHclTerraform(struct!.includeBlobVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_deleted: {
      value: cdktf.booleanToHclTerraform(struct!.includeDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_snapshots: {
      value: cdktf.booleanToHclTerraform(struct!.includeSnapshots),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_match: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixMatch),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageBlobInventoryPolicyRulesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageBlobInventoryPolicyRulesFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blobTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.blobTypes = this._blobTypes;
    }
    if (this._excludePrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePrefixes = this._excludePrefixes;
    }
    if (this._includeBlobVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeBlobVersions = this._includeBlobVersions;
    }
    if (this._includeDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDeleted = this._includeDeleted;
    }
    if (this._includeSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSnapshots = this._includeSnapshots;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageBlobInventoryPolicyRulesFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blobTypes = undefined;
      this._excludePrefixes = undefined;
      this._includeBlobVersions = undefined;
      this._includeDeleted = undefined;
      this._includeSnapshots = undefined;
      this._prefixMatch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blobTypes = value.blobTypes;
      this._excludePrefixes = value.excludePrefixes;
      this._includeBlobVersions = value.includeBlobVersions;
      this._includeDeleted = value.includeDeleted;
      this._includeSnapshots = value.includeSnapshots;
      this._prefixMatch = value.prefixMatch;
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

  // exclude_prefixes - computed: false, optional: true, required: false
  private _excludePrefixes?: string[]; 
  public get excludePrefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_prefixes'));
  }
  public set excludePrefixes(value: string[]) {
    this._excludePrefixes = value;
  }
  public resetExcludePrefixes() {
    this._excludePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePrefixesInput() {
    return this._excludePrefixes;
  }

  // include_blob_versions - computed: false, optional: true, required: false
  private _includeBlobVersions?: boolean | cdktf.IResolvable; 
  public get includeBlobVersions() {
    return this.getBooleanAttribute('include_blob_versions');
  }
  public set includeBlobVersions(value: boolean | cdktf.IResolvable) {
    this._includeBlobVersions = value;
  }
  public resetIncludeBlobVersions() {
    this._includeBlobVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBlobVersionsInput() {
    return this._includeBlobVersions;
  }

  // include_deleted - computed: false, optional: true, required: false
  private _includeDeleted?: boolean | cdktf.IResolvable; 
  public get includeDeleted() {
    return this.getBooleanAttribute('include_deleted');
  }
  public set includeDeleted(value: boolean | cdktf.IResolvable) {
    this._includeDeleted = value;
  }
  public resetIncludeDeleted() {
    this._includeDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDeletedInput() {
    return this._includeDeleted;
  }

  // include_snapshots - computed: false, optional: true, required: false
  private _includeSnapshots?: boolean | cdktf.IResolvable; 
  public get includeSnapshots() {
    return this.getBooleanAttribute('include_snapshots');
  }
  public set includeSnapshots(value: boolean | cdktf.IResolvable) {
    this._includeSnapshots = value;
  }
  public resetIncludeSnapshots() {
    this._includeSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSnapshotsInput() {
    return this._includeSnapshots;
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
}
export interface StorageBlobInventoryPolicyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy#format StorageBlobInventoryPolicy#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy#name StorageBlobInventoryPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy#schedule StorageBlobInventoryPolicy#schedule}
  */
  readonly schedule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy#schema_fields StorageBlobInventoryPolicy#schema_fields}
  */
  readonly schemaFields: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy#scope StorageBlobInventoryPolicy#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy#storage_container_name StorageBlobInventoryPolicy#storage_container_name}
  */
  readonly storageContainerName: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy#filter StorageBlobInventoryPolicy#filter}
  */
  readonly filter?: StorageBlobInventoryPolicyRulesFilter;
}

export function storageBlobInventoryPolicyRulesToTerraform(struct?: StorageBlobInventoryPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    name: cdktf.stringToTerraform(struct!.name),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    schema_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.schemaFields),
    scope: cdktf.stringToTerraform(struct!.scope),
    storage_container_name: cdktf.stringToTerraform(struct!.storageContainerName),
    filter: storageBlobInventoryPolicyRulesFilterToTerraform(struct!.filter),
  }
}


export function storageBlobInventoryPolicyRulesToHclTerraform(struct?: StorageBlobInventoryPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.schemaFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_container_name: {
      value: cdktf.stringToHclTerraform(struct!.storageContainerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: storageBlobInventoryPolicyRulesFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "StorageBlobInventoryPolicyRulesFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageBlobInventoryPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageBlobInventoryPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._schemaFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaFields = this._schemaFields;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._storageContainerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageContainerName = this._storageContainerName;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageBlobInventoryPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._name = undefined;
      this._schedule = undefined;
      this._schemaFields = undefined;
      this._scope = undefined;
      this._storageContainerName = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._name = value.name;
      this._schedule = value.schedule;
      this._schemaFields = value.schemaFields;
      this._scope = value.scope;
      this._storageContainerName = value.storageContainerName;
      this._filter.internalValue = value.filter;
    }
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // schema_fields - computed: false, optional: false, required: true
  private _schemaFields?: string[]; 
  public get schemaFields() {
    return this.getListAttribute('schema_fields');
  }
  public set schemaFields(value: string[]) {
    this._schemaFields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaFieldsInput() {
    return this._schemaFields;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // storage_container_name - computed: false, optional: false, required: true
  private _storageContainerName?: string; 
  public get storageContainerName() {
    return this.getStringAttribute('storage_container_name');
  }
  public set storageContainerName(value: string) {
    this._storageContainerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerNameInput() {
    return this._storageContainerName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new StorageBlobInventoryPolicyRulesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: StorageBlobInventoryPolicyRulesFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class StorageBlobInventoryPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : StorageBlobInventoryPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): StorageBlobInventoryPolicyRulesOutputReference {
    return new StorageBlobInventoryPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageBlobInventoryPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy#create StorageBlobInventoryPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy#delete StorageBlobInventoryPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy#read StorageBlobInventoryPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy#update StorageBlobInventoryPolicy#update}
  */
  readonly update?: string;
}

export function storageBlobInventoryPolicyTimeoutsToTerraform(struct?: StorageBlobInventoryPolicyTimeouts | cdktf.IResolvable): any {
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


export function storageBlobInventoryPolicyTimeoutsToHclTerraform(struct?: StorageBlobInventoryPolicyTimeouts | cdktf.IResolvable): any {
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

export class StorageBlobInventoryPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageBlobInventoryPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StorageBlobInventoryPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy azurerm_storage_blob_inventory_policy}
*/
export class StorageBlobInventoryPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_storage_blob_inventory_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageBlobInventoryPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageBlobInventoryPolicy to import
  * @param importFromId The id of the existing StorageBlobInventoryPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageBlobInventoryPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_storage_blob_inventory_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_blob_inventory_policy azurerm_storage_blob_inventory_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageBlobInventoryPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: StorageBlobInventoryPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_blob_inventory_policy',
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
    this._rules.internalValue = config.rules;
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

  // rules - computed: false, optional: false, required: true
  private _rules = new StorageBlobInventoryPolicyRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: StorageBlobInventoryPolicyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StorageBlobInventoryPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StorageBlobInventoryPolicyTimeouts) {
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
      rules: cdktf.listMapper(storageBlobInventoryPolicyRulesToTerraform, true)(this._rules.internalValue),
      timeouts: storageBlobInventoryPolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      rules: {
        value: cdktf.listMapperHcl(storageBlobInventoryPolicyRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StorageBlobInventoryPolicyRulesList",
      },
      timeouts: {
        value: storageBlobInventoryPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StorageBlobInventoryPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
