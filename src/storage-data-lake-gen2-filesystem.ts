// https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_filesystem.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageDataLakeGen2FilesystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_filesystem.html#name StorageDataLakeGen2Filesystem#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_filesystem.html#properties StorageDataLakeGen2Filesystem#properties}
  */
  readonly properties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_filesystem.html#storage_account_id StorageDataLakeGen2Filesystem#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * ace block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_filesystem.html#ace StorageDataLakeGen2Filesystem#ace}
  */
  readonly ace?: StorageDataLakeGen2FilesystemAce[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_filesystem.html#timeouts StorageDataLakeGen2Filesystem#timeouts}
  */
  readonly timeouts?: StorageDataLakeGen2FilesystemTimeouts;
}
export interface StorageDataLakeGen2FilesystemAce {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_filesystem.html#id StorageDataLakeGen2Filesystem#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_filesystem.html#permissions StorageDataLakeGen2Filesystem#permissions}
  */
  readonly permissions: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_filesystem.html#scope StorageDataLakeGen2Filesystem#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_filesystem.html#type StorageDataLakeGen2Filesystem#type}
  */
  readonly type: string;
}

function storageDataLakeGen2FilesystemAceToTerraform(struct?: StorageDataLakeGen2FilesystemAce): any {
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

export interface StorageDataLakeGen2FilesystemTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_filesystem.html#create StorageDataLakeGen2Filesystem#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_filesystem.html#delete StorageDataLakeGen2Filesystem#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_filesystem.html#read StorageDataLakeGen2Filesystem#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_filesystem.html#update StorageDataLakeGen2Filesystem#update}
  */
  readonly update?: string;
}

function storageDataLakeGen2FilesystemTimeoutsToTerraform(struct?: StorageDataLakeGen2FilesystemTimeoutsOutputReference | StorageDataLakeGen2FilesystemTimeouts): any {
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

export class StorageDataLakeGen2FilesystemTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_filesystem.html azurerm_storage_data_lake_gen2_filesystem}
*/
export class StorageDataLakeGen2Filesystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_storage_data_lake_gen2_filesystem";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_filesystem.html azurerm_storage_data_lake_gen2_filesystem} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageDataLakeGen2FilesystemConfig
  */
  public constructor(scope: Construct, id: string, config: StorageDataLakeGen2FilesystemConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_data_lake_gen2_filesystem',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._properties = config.properties;
    this._storageAccountId = config.storageAccountId;
    this._ace = config.ace;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._name
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get properties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('properties') as any;
  }
  public set properties(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties
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
  private _ace?: StorageDataLakeGen2FilesystemAce[] | undefined; 
  public get ace() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ace') as any;
  }
  public set ace(value: StorageDataLakeGen2FilesystemAce[] | undefined) {
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
  private _timeouts?: StorageDataLakeGen2FilesystemTimeouts | undefined; 
  private __timeoutsOutput = new StorageDataLakeGen2FilesystemTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: StorageDataLakeGen2FilesystemTimeouts | undefined) {
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
      name: cdktf.stringToTerraform(this._name),
      properties: cdktf.hashMapper(cdktf.anyToTerraform)(this._properties),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      ace: cdktf.listMapper(storageDataLakeGen2FilesystemAceToTerraform)(this._ace),
      timeouts: storageDataLakeGen2FilesystemTimeoutsToTerraform(this._timeouts),
    };
  }
}
