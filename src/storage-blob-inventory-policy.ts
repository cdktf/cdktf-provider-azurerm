// https://www.terraform.io/docs/providers/azurerm/r/storage_blob_inventory_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageBlobInventoryPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob_inventory_policy.html#storage_account_id StorageBlobInventoryPolicy#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob_inventory_policy.html#storage_container_name StorageBlobInventoryPolicy#storage_container_name}
  */
  readonly storageContainerName: string;
  /**
  * rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob_inventory_policy.html#rules StorageBlobInventoryPolicy#rules}
  */
  readonly rules: StorageBlobInventoryPolicyRules[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob_inventory_policy.html#timeouts StorageBlobInventoryPolicy#timeouts}
  */
  readonly timeouts?: StorageBlobInventoryPolicyTimeouts;
}
export interface StorageBlobInventoryPolicyRulesFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob_inventory_policy.html#blob_types StorageBlobInventoryPolicy#blob_types}
  */
  readonly blobTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob_inventory_policy.html#include_blob_versions StorageBlobInventoryPolicy#include_blob_versions}
  */
  readonly includeBlobVersions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob_inventory_policy.html#include_snapshots StorageBlobInventoryPolicy#include_snapshots}
  */
  readonly includeSnapshots?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob_inventory_policy.html#prefix_match StorageBlobInventoryPolicy#prefix_match}
  */
  readonly prefixMatch?: string[];
}

function storageBlobInventoryPolicyRulesFilterToTerraform(struct?: StorageBlobInventoryPolicyRulesFilterOutputReference | StorageBlobInventoryPolicyRulesFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blob_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.blobTypes),
    include_blob_versions: cdktf.booleanToTerraform(struct!.includeBlobVersions),
    include_snapshots: cdktf.booleanToTerraform(struct!.includeSnapshots),
    prefix_match: cdktf.listMapper(cdktf.stringToTerraform)(struct!.prefixMatch),
  }
}

export class StorageBlobInventoryPolicyRulesFilterOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // blob_types - computed: false, optional: false, required: true
  private _blobTypes?: string[]; 
  public get blobTypes() {
    return this.getListAttribute('blob_types');
  }
  public set blobTypes(value: string[]) {
    this._blobTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blobTypesInput() {
    return this._blobTypes
  }

  // include_blob_versions - computed: false, optional: true, required: false
  private _includeBlobVersions?: boolean | cdktf.IResolvable | undefined; 
  public get includeBlobVersions() {
    return this.getBooleanAttribute('include_blob_versions') as any;
  }
  public set includeBlobVersions(value: boolean | cdktf.IResolvable | undefined) {
    this._includeBlobVersions = value;
  }
  public resetIncludeBlobVersions() {
    this._includeBlobVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBlobVersionsInput() {
    return this._includeBlobVersions
  }

  // include_snapshots - computed: false, optional: true, required: false
  private _includeSnapshots?: boolean | cdktf.IResolvable | undefined; 
  public get includeSnapshots() {
    return this.getBooleanAttribute('include_snapshots') as any;
  }
  public set includeSnapshots(value: boolean | cdktf.IResolvable | undefined) {
    this._includeSnapshots = value;
  }
  public resetIncludeSnapshots() {
    this._includeSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSnapshotsInput() {
    return this._includeSnapshots
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
}
export interface StorageBlobInventoryPolicyRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob_inventory_policy.html#name StorageBlobInventoryPolicy#name}
  */
  readonly name: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob_inventory_policy.html#filter StorageBlobInventoryPolicy#filter}
  */
  readonly filter: StorageBlobInventoryPolicyRulesFilter;
}

function storageBlobInventoryPolicyRulesToTerraform(struct?: StorageBlobInventoryPolicyRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    filter: storageBlobInventoryPolicyRulesFilterToTerraform(struct!.filter),
  }
}

export interface StorageBlobInventoryPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob_inventory_policy.html#create StorageBlobInventoryPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob_inventory_policy.html#delete StorageBlobInventoryPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob_inventory_policy.html#read StorageBlobInventoryPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob_inventory_policy.html#update StorageBlobInventoryPolicy#update}
  */
  readonly update?: string;
}

function storageBlobInventoryPolicyTimeoutsToTerraform(struct?: StorageBlobInventoryPolicyTimeoutsOutputReference | StorageBlobInventoryPolicyTimeouts): any {
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

export class StorageBlobInventoryPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob_inventory_policy.html azurerm_storage_blob_inventory_policy}
*/
export class StorageBlobInventoryPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_storage_blob_inventory_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/storage_blob_inventory_policy.html azurerm_storage_blob_inventory_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageBlobInventoryPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: StorageBlobInventoryPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_blob_inventory_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._storageAccountId = config.storageAccountId;
    this._storageContainerName = config.storageContainerName;
    this._rules = config.rules;
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
    return this._storageContainerName
  }

  // rules - computed: false, optional: false, required: true
  private _rules?: StorageBlobInventoryPolicyRules[]; 
  public get rules() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rules') as any;
  }
  public set rules(value: StorageBlobInventoryPolicyRules[]) {
    this._rules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageBlobInventoryPolicyTimeouts | undefined; 
  private __timeoutsOutput = new StorageBlobInventoryPolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: StorageBlobInventoryPolicyTimeouts | undefined) {
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
      storage_container_name: cdktf.stringToTerraform(this._storageContainerName),
      rules: cdktf.listMapper(storageBlobInventoryPolicyRulesToTerraform)(this._rules),
      timeouts: storageBlobInventoryPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
