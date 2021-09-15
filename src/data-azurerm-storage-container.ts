// https://www.terraform.io/docs/providers/azurerm/d/storage_container.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermStorageContainerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_container.html#metadata DataAzurermStorageContainer#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_container.html#name DataAzurermStorageContainer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_container.html#storage_account_name DataAzurermStorageContainer#storage_account_name}
  */
  readonly storageAccountName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_container.html#timeouts DataAzurermStorageContainer#timeouts}
  */
  readonly timeouts?: DataAzurermStorageContainerTimeouts;
}
export interface DataAzurermStorageContainerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_container.html#read DataAzurermStorageContainer#read}
  */
  readonly read?: string;
}

function dataAzurermStorageContainerTimeoutsToTerraform(struct?: DataAzurermStorageContainerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/storage_container.html azurerm_storage_container}
*/
export class DataAzurermStorageContainer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_storage_container";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/storage_container.html azurerm_storage_container} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermStorageContainerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermStorageContainerConfig) {
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
    this._metadata = config.metadata;
    this._name = config.name;
    this._storageAccountName = config.storageAccountName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_access_type - computed: true, optional: false, required: false
  public get containerAccessType() {
    return this.getStringAttribute('container_access_type');
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
  private _timeouts?: DataAzurermStorageContainerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermStorageContainerTimeouts ) {
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
      metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      storage_account_name: cdktf.stringToTerraform(this._storageAccountName),
      timeouts: dataAzurermStorageContainerTimeoutsToTerraform(this._timeouts),
    };
  }
}
