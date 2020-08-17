// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_storage_container.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermStorageContainerConfig extends TerraformMetaArguments {
  readonly metadata?: { [key: string]: string };
  readonly name: string;
  readonly storageAccountName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermStorageContainerTimeouts;
}
export interface DataAzurermStorageContainerTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermStorageContainer extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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

  // container_access_type - computed: true, optional: false, required: true
  public get containerAccessType() {
    return this.getStringAttribute('container_access_type');
  }

  // has_immutability_policy - computed: true, optional: false, required: true
  public get hasImmutabilityPolicy() {
    return this.getBooleanAttribute('has_immutability_policy');
  }

  // has_legal_hold - computed: true, optional: false, required: true
  public get hasLegalHold() {
    return this.getBooleanAttribute('has_legal_hold');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }
  public get metadata(): { [key: string]: string } | undefined {
    return this._metadata; // Getting the computed value is not yet implemented
  }
  public set metadata(value: { [key: string]: string } | undefined) {
    this._metadata = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName: string;
  public get storageAccountName() {
    return this._storageAccountName;
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermStorageContainerTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermStorageContainerTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: this._metadata,
      name: this._name,
      storage_account_name: this._storageAccountName,
      timeouts: this._timeouts,
    };
  }
}
