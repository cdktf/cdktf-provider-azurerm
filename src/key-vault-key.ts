// https://www.terraform.io/docs/providers/azurerm/r/key_vault_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KeyVaultKeyConfig extends TerraformMetaArguments {
  readonly curve?: string;
  readonly expirationDate?: string;
  readonly keyOpts: string[];
  readonly keySize?: number;
  readonly keyType: string;
  readonly keyVaultId: string;
  readonly name: string;
  readonly notBeforeDate?: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: KeyVaultKeyTimeouts;
}
export interface KeyVaultKeyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class KeyVaultKey extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KeyVaultKeyConfig) {
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
    this._curve = config.curve;
    this._expirationDate = config.expirationDate;
    this._keyOpts = config.keyOpts;
    this._keySize = config.keySize;
    this._keyType = config.keyType;
    this._keyVaultId = config.keyVaultId;
    this._name = config.name;
    this._notBeforeDate = config.notBeforeDate;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // curve - computed: true, optional: true, required: false
  private _curve?: string;
  public get curve() {
    return this._curve ?? this.getStringAttribute('curve');
  }
  public set curve(value: string | undefined) {
    this._curve = value;
  }

  // e - computed: true, optional: false, required: true
  public get e() {
    return this.getStringAttribute('e');
  }

  // expiration_date - computed: false, optional: true, required: false
  private _expirationDate?: string;
  public get expirationDate() {
    return this._expirationDate;
  }
  public set expirationDate(value: string | undefined) {
    this._expirationDate = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key_opts - computed: false, optional: false, required: true
  private _keyOpts: string[];
  public get keyOpts() {
    return this._keyOpts;
  }
  public set keyOpts(value: string[]) {
    this._keyOpts = value;
  }

  // key_size - computed: false, optional: true, required: false
  private _keySize?: number;
  public get keySize() {
    return this._keySize;
  }
  public set keySize(value: number | undefined) {
    this._keySize = value;
  }

  // key_type - computed: false, optional: false, required: true
  private _keyType: string;
  public get keyType() {
    return this._keyType;
  }
  public set keyType(value: string) {
    this._keyType = value;
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

  // not_before_date - computed: false, optional: true, required: false
  private _notBeforeDate?: string;
  public get notBeforeDate() {
    return this._notBeforeDate;
  }
  public set notBeforeDate(value: string | undefined) {
    this._notBeforeDate = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // x - computed: true, optional: false, required: true
  public get x() {
    return this.getStringAttribute('x');
  }

  // y - computed: true, optional: false, required: true
  public get y() {
    return this.getStringAttribute('y');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KeyVaultKeyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: KeyVaultKeyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      curve: this._curve,
      expiration_date: this._expirationDate,
      key_opts: this._keyOpts,
      key_size: this._keySize,
      key_type: this._keyType,
      key_vault_id: this._keyVaultId,
      name: this._name,
      not_before_date: this._notBeforeDate,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
