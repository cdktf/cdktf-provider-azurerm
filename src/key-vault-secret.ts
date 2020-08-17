// https://www.terraform.io/docs/providers/azurerm/r/key_vault_secret.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KeyVaultSecretConfig extends TerraformMetaArguments {
  readonly contentType?: string;
  readonly expirationDate?: string;
  readonly keyVaultId: string;
  readonly name: string;
  readonly notBeforeDate?: string;
  readonly tags?: { [key: string]: string };
  readonly value: string;
  /** timeouts block */
  readonly timeouts?: KeyVaultSecretTimeouts;
}
export interface KeyVaultSecretTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class KeyVaultSecret extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KeyVaultSecretConfig) {
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
    this._contentType = config.contentType;
    this._expirationDate = config.expirationDate;
    this._keyVaultId = config.keyVaultId;
    this._name = config.name;
    this._notBeforeDate = config.notBeforeDate;
    this._tags = config.tags;
    this._value = config.value;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this._contentType;
  }
  public set contentType(value: string | undefined) {
    this._contentType = value;
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

  // value - computed: false, optional: false, required: true
  private _value: string;
  public get value() {
    return this._value;
  }
  public set value(value: string) {
    this._value = value;
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KeyVaultSecretTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: KeyVaultSecretTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      content_type: this._contentType,
      expiration_date: this._expirationDate,
      key_vault_id: this._keyVaultId,
      name: this._name,
      not_before_date: this._notBeforeDate,
      tags: this._tags,
      value: this._value,
      timeouts: this._timeouts,
    };
  }
}
