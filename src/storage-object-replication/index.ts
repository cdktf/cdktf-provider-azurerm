// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_object_replication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageObjectReplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_object_replication#destination_storage_account_id StorageObjectReplication#destination_storage_account_id}
  */
  readonly destinationStorageAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_object_replication#id StorageObjectReplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_object_replication#source_storage_account_id StorageObjectReplication#source_storage_account_id}
  */
  readonly sourceStorageAccountId: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_object_replication#rules StorageObjectReplication#rules}
  */
  readonly rules: StorageObjectReplicationRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_object_replication#timeouts StorageObjectReplication#timeouts}
  */
  readonly timeouts?: StorageObjectReplicationTimeouts;
}
export interface StorageObjectReplicationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_object_replication#copy_blobs_created_after StorageObjectReplication#copy_blobs_created_after}
  */
  readonly copyBlobsCreatedAfter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_object_replication#destination_container_name StorageObjectReplication#destination_container_name}
  */
  readonly destinationContainerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_object_replication#filter_out_blobs_with_prefix StorageObjectReplication#filter_out_blobs_with_prefix}
  */
  readonly filterOutBlobsWithPrefix?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_object_replication#source_container_name StorageObjectReplication#source_container_name}
  */
  readonly sourceContainerName: string;
}

export function storageObjectReplicationRulesToTerraform(struct?: StorageObjectReplicationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    copy_blobs_created_after: cdktf.stringToTerraform(struct!.copyBlobsCreatedAfter),
    destination_container_name: cdktf.stringToTerraform(struct!.destinationContainerName),
    filter_out_blobs_with_prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterOutBlobsWithPrefix),
    source_container_name: cdktf.stringToTerraform(struct!.sourceContainerName),
  }
}


export function storageObjectReplicationRulesToHclTerraform(struct?: StorageObjectReplicationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    copy_blobs_created_after: {
      value: cdktf.stringToHclTerraform(struct!.copyBlobsCreatedAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_container_name: {
      value: cdktf.stringToHclTerraform(struct!.destinationContainerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_out_blobs_with_prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterOutBlobsWithPrefix),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_container_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceContainerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageObjectReplicationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageObjectReplicationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyBlobsCreatedAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyBlobsCreatedAfter = this._copyBlobsCreatedAfter;
    }
    if (this._destinationContainerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationContainerName = this._destinationContainerName;
    }
    if (this._filterOutBlobsWithPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterOutBlobsWithPrefix = this._filterOutBlobsWithPrefix;
    }
    if (this._sourceContainerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceContainerName = this._sourceContainerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageObjectReplicationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._copyBlobsCreatedAfter = undefined;
      this._destinationContainerName = undefined;
      this._filterOutBlobsWithPrefix = undefined;
      this._sourceContainerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._copyBlobsCreatedAfter = value.copyBlobsCreatedAfter;
      this._destinationContainerName = value.destinationContainerName;
      this._filterOutBlobsWithPrefix = value.filterOutBlobsWithPrefix;
      this._sourceContainerName = value.sourceContainerName;
    }
  }

  // copy_blobs_created_after - computed: false, optional: true, required: false
  private _copyBlobsCreatedAfter?: string; 
  public get copyBlobsCreatedAfter() {
    return this.getStringAttribute('copy_blobs_created_after');
  }
  public set copyBlobsCreatedAfter(value: string) {
    this._copyBlobsCreatedAfter = value;
  }
  public resetCopyBlobsCreatedAfter() {
    this._copyBlobsCreatedAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyBlobsCreatedAfterInput() {
    return this._copyBlobsCreatedAfter;
  }

  // destination_container_name - computed: false, optional: false, required: true
  private _destinationContainerName?: string; 
  public get destinationContainerName() {
    return this.getStringAttribute('destination_container_name');
  }
  public set destinationContainerName(value: string) {
    this._destinationContainerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationContainerNameInput() {
    return this._destinationContainerName;
  }

  // filter_out_blobs_with_prefix - computed: false, optional: true, required: false
  private _filterOutBlobsWithPrefix?: string[]; 
  public get filterOutBlobsWithPrefix() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_out_blobs_with_prefix'));
  }
  public set filterOutBlobsWithPrefix(value: string[]) {
    this._filterOutBlobsWithPrefix = value;
  }
  public resetFilterOutBlobsWithPrefix() {
    this._filterOutBlobsWithPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOutBlobsWithPrefixInput() {
    return this._filterOutBlobsWithPrefix;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // source_container_name - computed: false, optional: false, required: true
  private _sourceContainerName?: string; 
  public get sourceContainerName() {
    return this.getStringAttribute('source_container_name');
  }
  public set sourceContainerName(value: string) {
    this._sourceContainerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceContainerNameInput() {
    return this._sourceContainerName;
  }
}

export class StorageObjectReplicationRulesList extends cdktf.ComplexList {
  public internalValue? : StorageObjectReplicationRules[] | cdktf.IResolvable

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
  public get(index: number): StorageObjectReplicationRulesOutputReference {
    return new StorageObjectReplicationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageObjectReplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_object_replication#create StorageObjectReplication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_object_replication#delete StorageObjectReplication#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_object_replication#read StorageObjectReplication#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_object_replication#update StorageObjectReplication#update}
  */
  readonly update?: string;
}

export function storageObjectReplicationTimeoutsToTerraform(struct?: StorageObjectReplicationTimeouts | cdktf.IResolvable): any {
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


export function storageObjectReplicationTimeoutsToHclTerraform(struct?: StorageObjectReplicationTimeouts | cdktf.IResolvable): any {
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

export class StorageObjectReplicationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageObjectReplicationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StorageObjectReplicationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_object_replication azurerm_storage_object_replication}
*/
export class StorageObjectReplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_storage_object_replication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageObjectReplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageObjectReplication to import
  * @param importFromId The id of the existing StorageObjectReplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_object_replication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageObjectReplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_storage_object_replication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_object_replication azurerm_storage_object_replication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageObjectReplicationConfig
  */
  public constructor(scope: Construct, id: string, config: StorageObjectReplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_object_replication',
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
    this._destinationStorageAccountId = config.destinationStorageAccountId;
    this._id = config.id;
    this._sourceStorageAccountId = config.sourceStorageAccountId;
    this._rules.internalValue = config.rules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_object_replication_id - computed: true, optional: false, required: false
  public get destinationObjectReplicationId() {
    return this.getStringAttribute('destination_object_replication_id');
  }

  // destination_storage_account_id - computed: false, optional: false, required: true
  private _destinationStorageAccountId?: string; 
  public get destinationStorageAccountId() {
    return this.getStringAttribute('destination_storage_account_id');
  }
  public set destinationStorageAccountId(value: string) {
    this._destinationStorageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationStorageAccountIdInput() {
    return this._destinationStorageAccountId;
  }

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

  // source_object_replication_id - computed: true, optional: false, required: false
  public get sourceObjectReplicationId() {
    return this.getStringAttribute('source_object_replication_id');
  }

  // source_storage_account_id - computed: false, optional: false, required: true
  private _sourceStorageAccountId?: string; 
  public get sourceStorageAccountId() {
    return this.getStringAttribute('source_storage_account_id');
  }
  public set sourceStorageAccountId(value: string) {
    this._sourceStorageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceStorageAccountIdInput() {
    return this._sourceStorageAccountId;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new StorageObjectReplicationRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: StorageObjectReplicationRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StorageObjectReplicationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StorageObjectReplicationTimeouts) {
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
      destination_storage_account_id: cdktf.stringToTerraform(this._destinationStorageAccountId),
      id: cdktf.stringToTerraform(this._id),
      source_storage_account_id: cdktf.stringToTerraform(this._sourceStorageAccountId),
      rules: cdktf.listMapper(storageObjectReplicationRulesToTerraform, true)(this._rules.internalValue),
      timeouts: storageObjectReplicationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_storage_account_id: {
        value: cdktf.stringToHclTerraform(this._destinationStorageAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_storage_account_id: {
        value: cdktf.stringToHclTerraform(this._sourceStorageAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(storageObjectReplicationRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StorageObjectReplicationRulesList",
      },
      timeouts: {
        value: storageObjectReplicationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StorageObjectReplicationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
