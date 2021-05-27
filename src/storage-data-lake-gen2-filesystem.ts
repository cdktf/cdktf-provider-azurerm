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
  readonly properties?: { [key: string]: string };
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

function storageDataLakeGen2FilesystemTimeoutsToTerraform(struct?: StorageDataLakeGen2FilesystemTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_filesystem.html azurerm_storage_data_lake_gen2_filesystem}
*/
export class StorageDataLakeGen2Filesystem extends cdktf.TerraformResource {

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
  private _name: string;
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
  private _properties?: { [key: string]: string };
  public get properties() {
    return this.interpolationForAttribute('properties') as any;
  }
  public set properties(value: { [key: string]: string } ) {
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
  private _storageAccountId: string;
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
  private _ace?: StorageDataLakeGen2FilesystemAce[];
  public get ace() {
    return this.interpolationForAttribute('ace') as any;
  }
  public set ace(value: StorageDataLakeGen2FilesystemAce[] ) {
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
  private _timeouts?: StorageDataLakeGen2FilesystemTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StorageDataLakeGen2FilesystemTimeouts ) {
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
