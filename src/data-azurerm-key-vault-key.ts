// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_key_vault_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermKeyVaultKeyConfig extends TerraformMetaArguments {
  readonly keyVaultId: string;
  readonly name: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermKeyVaultKeyTimeouts;
}
export interface DataAzurermKeyVaultKeyTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermKeyVaultKey extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermKeyVaultKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_key',
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

  // e - computed: true, optional: false, required: true
  public get e() {
    return this.getStringAttribute('e');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key_opts - computed: true, optional: false, required: true
  public get keyOpts() {
    return this.getListAttribute('key_opts');
  }

  // key_size - computed: true, optional: false, required: true
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }

  // key_type - computed: true, optional: false, required: true
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // key_vault_id - computed: false, optional: false, required: true
  private _keyVaultId: string;
  public get keyVaultId() {
    return this._keyVaultId;
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }

  // n - computed: true, optional: false, required: true
  public get n() {
    return this.getStringAttribute('n');
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

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermKeyVaultKeyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermKeyVaultKeyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key_vault_id: this._keyVaultId,
      name: this._name,
      timeouts: this._timeouts,
    };
  }
}
