// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_storage_account_sas.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermStorageAccountSasConfig extends TerraformMetaArguments {
  readonly connectionString: string;
  readonly expiry: string;
  readonly httpsOnly?: boolean;
  readonly start: string;
  /** permissions block */
  readonly permissions: DataAzurermStorageAccountSasPermissions[];
  /** resource_types block */
  readonly resourceTypes: DataAzurermStorageAccountSasResourceTypes[];
  /** services block */
  readonly services: DataAzurermStorageAccountSasServices[];
  /** timeouts block */
  readonly timeouts?: DataAzurermStorageAccountSasTimeouts;
}
export interface DataAzurermStorageAccountSasPermissions {
  readonly add: boolean;
  readonly create: boolean;
  readonly delete: boolean;
  readonly list: boolean;
  readonly process: boolean;
  readonly read: boolean;
  readonly update: boolean;
  readonly write: boolean;
}
export interface DataAzurermStorageAccountSasResourceTypes {
  readonly container: boolean;
  readonly object: boolean;
  readonly service: boolean;
}
export interface DataAzurermStorageAccountSasServices {
  readonly blob: boolean;
  readonly file: boolean;
  readonly queue: boolean;
  readonly table: boolean;
}
export interface DataAzurermStorageAccountSasTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermStorageAccountSas extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermStorageAccountSasConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_account_sas',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._connectionString = config.connectionString;
    this._expiry = config.expiry;
    this._httpsOnly = config.httpsOnly;
    this._start = config.start;
    this._permissions = config.permissions;
    this._resourceTypes = config.resourceTypes;
    this._services = config.services;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_string - computed: false, optional: false, required: true
  private _connectionString: string;
  public get connectionString() {
    return this._connectionString;
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }

  // expiry - computed: false, optional: false, required: true
  private _expiry: string;
  public get expiry() {
    return this._expiry;
  }
  public set expiry(value: string) {
    this._expiry = value;
  }

  // https_only - computed: false, optional: true, required: false
  private _httpsOnly?: boolean;
  public get httpsOnly() {
    return this._httpsOnly;
  }
  public set httpsOnly(value: boolean | undefined) {
    this._httpsOnly = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // sas - computed: true, optional: false, required: true
  public get sas() {
    return this.getStringAttribute('sas');
  }

  // start - computed: false, optional: false, required: true
  private _start: string;
  public get start() {
    return this._start;
  }
  public set start(value: string) {
    this._start = value;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions: DataAzurermStorageAccountSasPermissions[];
  public get permissions() {
    return this._permissions;
  }
  public set permissions(value: DataAzurermStorageAccountSasPermissions[]) {
    this._permissions = value;
  }

  // resource_types - computed: false, optional: false, required: true
  private _resourceTypes: DataAzurermStorageAccountSasResourceTypes[];
  public get resourceTypes() {
    return this._resourceTypes;
  }
  public set resourceTypes(value: DataAzurermStorageAccountSasResourceTypes[]) {
    this._resourceTypes = value;
  }

  // services - computed: false, optional: false, required: true
  private _services: DataAzurermStorageAccountSasServices[];
  public get services() {
    return this._services;
  }
  public set services(value: DataAzurermStorageAccountSasServices[]) {
    this._services = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermStorageAccountSasTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermStorageAccountSasTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_string: this._connectionString,
      expiry: this._expiry,
      https_only: this._httpsOnly,
      start: this._start,
      permissions: this._permissions,
      resource_types: this._resourceTypes,
      services: this._services,
      timeouts: this._timeouts,
    };
  }
}
