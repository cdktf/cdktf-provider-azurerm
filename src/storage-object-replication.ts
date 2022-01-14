// https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageObjectReplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication#destination_storage_account_id StorageObjectReplication#destination_storage_account_id}
  */
  readonly destinationStorageAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication#source_storage_account_id StorageObjectReplication#source_storage_account_id}
  */
  readonly sourceStorageAccountId: string;
  /**
  * rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication#rules StorageObjectReplication#rules}
  */
  readonly rules: StorageObjectReplicationRules[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication#timeouts StorageObjectReplication#timeouts}
  */
  readonly timeouts?: StorageObjectReplicationTimeouts;
}
export interface StorageObjectReplicationRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication#copy_blobs_created_after StorageObjectReplication#copy_blobs_created_after}
  */
  readonly copyBlobsCreatedAfter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication#destination_container_name StorageObjectReplication#destination_container_name}
  */
  readonly destinationContainerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication#filter_out_blobs_with_prefix StorageObjectReplication#filter_out_blobs_with_prefix}
  */
  readonly filterOutBlobsWithPrefix?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication#source_container_name StorageObjectReplication#source_container_name}
  */
  readonly sourceContainerName: string;
}

export function storageObjectReplicationRulesToTerraform(struct?: StorageObjectReplicationRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    copy_blobs_created_after: cdktf.stringToTerraform(struct!.copyBlobsCreatedAfter),
    destination_container_name: cdktf.stringToTerraform(struct!.destinationContainerName),
    filter_out_blobs_with_prefix: cdktf.listMapper(cdktf.stringToTerraform)(struct!.filterOutBlobsWithPrefix),
    source_container_name: cdktf.stringToTerraform(struct!.sourceContainerName),
  }
}

export interface StorageObjectReplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication#create StorageObjectReplication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication#delete StorageObjectReplication#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication#read StorageObjectReplication#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication#update StorageObjectReplication#update}
  */
  readonly update?: string;
}

export function storageObjectReplicationTimeoutsToTerraform(struct?: StorageObjectReplicationTimeoutsOutputReference | StorageObjectReplicationTimeouts): any {
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

export class StorageObjectReplicationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StorageObjectReplicationTimeouts | undefined {
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

  public set internalValue(value: StorageObjectReplicationTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication azurerm_storage_object_replication}
*/
export class StorageObjectReplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_storage_object_replication";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/storage_object_replication azurerm_storage_object_replication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageObjectReplicationConfig
  */
  public constructor(scope: Construct, id: string, config: StorageObjectReplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_object_replication',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._destinationStorageAccountId = config.destinationStorageAccountId;
    this._sourceStorageAccountId = config.sourceStorageAccountId;
    this._rules = config.rules;
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
  public get id() {
    return this.getStringAttribute('id');
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
  private _rules?: StorageObjectReplicationRules[]; 
  public get rules() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rules') as any;
  }
  public set rules(value: StorageObjectReplicationRules[]) {
    this._rules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StorageObjectReplicationTimeoutsOutputReference(this as any, "timeouts", true);
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
      source_storage_account_id: cdktf.stringToTerraform(this._sourceStorageAccountId),
      rules: cdktf.listMapper(storageObjectReplicationRulesToTerraform)(this._rules),
      timeouts: storageObjectReplicationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
