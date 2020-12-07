// https://www.terraform.io/docs/providers/azurerm/r/storage_data_lake_gen2_filesystem.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageDataLakeGen2FilesystemConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly properties?: { [key: string]: string };
  readonly storageAccountId: string;
  /** timeouts block */
  readonly timeouts?: StorageDataLakeGen2FilesystemTimeouts;
}
export interface StorageDataLakeGen2FilesystemTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
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


// Resource

export class StorageDataLakeGen2Filesystem extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
      timeouts: storageDataLakeGen2FilesystemTimeoutsToTerraform(this._timeouts),
    };
  }
}
