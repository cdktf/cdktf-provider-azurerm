// https://www.terraform.io/docs/providers/azurerm/r/storage_container.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageContainerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_container.html#container_access_type StorageContainer#container_access_type}
  */
  readonly containerAccessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_container.html#metadata StorageContainer#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_container.html#name StorageContainer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_container.html#storage_account_name StorageContainer#storage_account_name}
  */
  readonly storageAccountName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_container.html#timeouts StorageContainer#timeouts}
  */
  readonly timeouts?: StorageContainerTimeouts;
}
export interface StorageContainerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_container.html#create StorageContainer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_container.html#delete StorageContainer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_container.html#read StorageContainer#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_container.html#update StorageContainer#update}
  */
  readonly update?: string;
}

function storageContainerTimeoutsToTerraform(struct?: StorageContainerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/storage_container.html azurerm_storage_container}
*/
export class StorageContainer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_storage_container";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/storage_container.html azurerm_storage_container} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageContainerConfig
  */
  public constructor(scope: Construct, id: string, config: StorageContainerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_container',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._containerAccessType = config.containerAccessType;
    this._metadata = config.metadata;
    this._name = config.name;
    this._storageAccountName = config.storageAccountName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_access_type - computed: false, optional: true, required: false
  private _containerAccessType?: string;
  public get containerAccessType() {
    return this.getStringAttribute('container_access_type');
  }
  public set containerAccessType(value: string ) {
    this._containerAccessType = value;
  }
  public resetContainerAccessType() {
    this._containerAccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerAccessTypeInput() {
    return this._containerAccessType
  }

  // has_immutability_policy - computed: true, optional: false, required: false
  public get hasImmutabilityPolicy() {
    return this.getBooleanAttribute('has_immutability_policy');
  }

  // has_legal_hold - computed: true, optional: false, required: false
  public get hasLegalHold() {
    return this.getBooleanAttribute('has_legal_hold');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string } | cdktf.IResolvable
  public get metadata(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('metadata') as any; // Getting the computed value is not yet implemented
  }
  public set metadata(value: { [key: string]: string } | cdktf.IResolvable) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
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

  // resource_manager_id - computed: true, optional: false, required: false
  public get resourceManagerId() {
    return this.getStringAttribute('resource_manager_id');
  }

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName: string;
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageContainerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StorageContainerTimeouts ) {
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
      container_access_type: cdktf.stringToTerraform(this._containerAccessType),
      metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      storage_account_name: cdktf.stringToTerraform(this._storageAccountName),
      timeouts: storageContainerTimeoutsToTerraform(this._timeouts),
    };
  }
}
