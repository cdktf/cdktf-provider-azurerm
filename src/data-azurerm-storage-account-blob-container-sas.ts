// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_storage_account_blob_container_sas.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermStorageAccountBlobContainerSasConfig extends TerraformMetaArguments {
  readonly cacheControl?: string;
  readonly connectionString: string;
  readonly containerName: string;
  readonly contentDisposition?: string;
  readonly contentEncoding?: string;
  readonly contentLanguage?: string;
  readonly contentType?: string;
  readonly expiry: string;
  readonly httpsOnly?: boolean;
  readonly ipAddress?: string;
  readonly start: string;
  /** permissions block */
  readonly permissions: DataAzurermStorageAccountBlobContainerSasPermissions[];
  /** timeouts block */
  readonly timeouts?: DataAzurermStorageAccountBlobContainerSasTimeouts;
}
export interface DataAzurermStorageAccountBlobContainerSasPermissions {
  readonly add: boolean;
  readonly create: boolean;
  readonly delete: boolean;
  readonly list: boolean;
  readonly read: boolean;
  readonly write: boolean;
}
export interface DataAzurermStorageAccountBlobContainerSasTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermStorageAccountBlobContainerSas extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermStorageAccountBlobContainerSasConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_account_blob_container_sas',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cacheControl = config.cacheControl;
    this._connectionString = config.connectionString;
    this._containerName = config.containerName;
    this._contentDisposition = config.contentDisposition;
    this._contentEncoding = config.contentEncoding;
    this._contentLanguage = config.contentLanguage;
    this._contentType = config.contentType;
    this._expiry = config.expiry;
    this._httpsOnly = config.httpsOnly;
    this._ipAddress = config.ipAddress;
    this._start = config.start;
    this._permissions = config.permissions;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_control - computed: false, optional: true, required: false
  private _cacheControl?: string;
  public get cacheControl() {
    return this._cacheControl;
  }
  public set cacheControl(value: string | undefined) {
    this._cacheControl = value;
  }

  // connection_string - computed: false, optional: false, required: true
  private _connectionString: string;
  public get connectionString() {
    return this._connectionString;
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName: string;
  public get containerName() {
    return this._containerName;
  }
  public set containerName(value: string) {
    this._containerName = value;
  }

  // content_disposition - computed: false, optional: true, required: false
  private _contentDisposition?: string;
  public get contentDisposition() {
    return this._contentDisposition;
  }
  public set contentDisposition(value: string | undefined) {
    this._contentDisposition = value;
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string;
  public get contentEncoding() {
    return this._contentEncoding;
  }
  public set contentEncoding(value: string | undefined) {
    this._contentEncoding = value;
  }

  // content_language - computed: false, optional: true, required: false
  private _contentLanguage?: string;
  public get contentLanguage() {
    return this._contentLanguage;
  }
  public set contentLanguage(value: string | undefined) {
    this._contentLanguage = value;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this._contentType;
  }
  public set contentType(value: string | undefined) {
    this._contentType = value;
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

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string;
  public get ipAddress() {
    return this._ipAddress;
  }
  public set ipAddress(value: string | undefined) {
    this._ipAddress = value;
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
  private _permissions: DataAzurermStorageAccountBlobContainerSasPermissions[];
  public get permissions() {
    return this._permissions;
  }
  public set permissions(value: DataAzurermStorageAccountBlobContainerSasPermissions[]) {
    this._permissions = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermStorageAccountBlobContainerSasTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermStorageAccountBlobContainerSasTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_control: this._cacheControl,
      connection_string: this._connectionString,
      container_name: this._containerName,
      content_disposition: this._contentDisposition,
      content_encoding: this._contentEncoding,
      content_language: this._contentLanguage,
      content_type: this._contentType,
      expiry: this._expiry,
      https_only: this._httpsOnly,
      ip_address: this._ipAddress,
      start: this._start,
      permissions: this._permissions,
      timeouts: this._timeouts,
    };
  }
}
