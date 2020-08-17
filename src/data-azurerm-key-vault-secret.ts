// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_key_vault_secret.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermKeyVaultSecretConfig extends TerraformMetaArguments {
  readonly keyVaultId: string;
  readonly name: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermKeyVaultSecretTimeouts;
}
export interface DataAzurermKeyVaultSecretTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermKeyVaultSecret extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermKeyVaultSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_secret',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyVaultId = config.keyVaultId;
    this._name = config.name;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_type - computed: true, optional: false, required: true
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key_vault_id - computed: false, optional: false, required: true
  private _keyVaultId: string;
  public get keyVaultId() {
    return this._keyVaultId;
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermKeyVaultSecretTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermKeyVaultSecretTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      key_vault_id: this._keyVaultId,
      name: this._name,
      timeouts: this._timeouts,
    };
  }
}
