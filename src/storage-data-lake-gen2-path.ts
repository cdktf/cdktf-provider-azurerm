// https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_path.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageDataLakeGen2PathConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_path.html#filesystem_name StorageDataLakeGen2Path#filesystem_name}
  */
  readonly filesystemName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_path.html#group StorageDataLakeGen2Path#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_path.html#owner StorageDataLakeGen2Path#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_path.html#path StorageDataLakeGen2Path#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_path.html#resource StorageDataLakeGen2Path#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_path.html#storage_account_id StorageDataLakeGen2Path#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * ace block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_path.html#ace StorageDataLakeGen2Path#ace}
  */
  readonly ace?: StorageDataLakeGen2PathAce[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_path.html#timeouts StorageDataLakeGen2Path#timeouts}
  */
  readonly timeouts?: StorageDataLakeGen2PathTimeouts;
}
export interface StorageDataLakeGen2PathAce {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_path.html#id StorageDataLakeGen2Path#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_path.html#permissions StorageDataLakeGen2Path#permissions}
  */
  readonly permissions: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_path.html#scope StorageDataLakeGen2Path#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_path.html#type StorageDataLakeGen2Path#type}
  */
  readonly type: string;
}

function storageDataLakeGen2PathAceToTerraform(struct?: StorageDataLakeGen2PathAce): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    permissions: cdktf.stringToTerraform(struct!.permissions),
    scope: cdktf.stringToTerraform(struct!.scope),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface StorageDataLakeGen2PathTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_path.html#create StorageDataLakeGen2Path#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_path.html#delete StorageDataLakeGen2Path#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_path.html#read StorageDataLakeGen2Path#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_path.html#update StorageDataLakeGen2Path#update}
  */
  readonly update?: string;
}

function storageDataLakeGen2PathTimeoutsToTerraform(struct?: StorageDataLakeGen2PathTimeoutsOutputReference | StorageDataLakeGen2PathTimeouts): any {
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

export class StorageDataLakeGen2PathTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_path.html azurerm_storage_data_lake_gen2_path}
*/
export class StorageDataLakeGen2Path extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_storage_data_lake_gen2_path";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_path.html azurerm_storage_data_lake_gen2_path} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageDataLakeGen2PathConfig
  */
  public constructor(scope: Construct, id: string, config: StorageDataLakeGen2PathConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_data_lake_gen2_path',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._filesystemName = config.filesystemName;
    this._group = config.group;
    this._owner = config.owner;
    this._path = config.path;
    this._resource = config.resource;
    this._storageAccountId = config.storageAccountId;
    this._ace = config.ace;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filesystem_name - computed: false, optional: false, required: true
  private _filesystemName?: string; 
  public get filesystemName() {
    return this.getStringAttribute('filesystem_name');
  }
  public set filesystemName(value: string) {
    this._filesystemName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemNameInput() {
    return this._filesystemName
  }

  // group - computed: true, optional: true, required: false
  private _group?: string | undefined; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string | undefined) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner - computed: true, optional: true, required: false
  private _owner?: string | undefined; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string | undefined) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource
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

  // ace - computed: false, optional: true, required: false
  private _ace?: StorageDataLakeGen2PathAce[] | undefined; 
  public get ace() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ace') as any;
  }
  public set ace(value: StorageDataLakeGen2PathAce[] | undefined) {
    this._ace = value;
  }
  public resetAce() {
    this._ace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aceInput() {
    return this._ace
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageDataLakeGen2PathTimeouts | undefined; 
  private __timeoutsOutput = new StorageDataLakeGen2PathTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: StorageDataLakeGen2PathTimeouts | undefined) {
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
      filesystem_name: cdktf.stringToTerraform(this._filesystemName),
      group: cdktf.stringToTerraform(this._group),
      owner: cdktf.stringToTerraform(this._owner),
      path: cdktf.stringToTerraform(this._path),
      resource: cdktf.stringToTerraform(this._resource),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      ace: cdktf.listMapper(storageDataLakeGen2PathAceToTerraform)(this._ace),
      timeouts: storageDataLakeGen2PathTimeoutsToTerraform(this._timeouts),
    };
  }
}
