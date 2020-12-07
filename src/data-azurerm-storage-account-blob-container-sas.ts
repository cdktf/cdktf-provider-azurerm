// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_storage_account_blob_container_sas.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermStorageAccountBlobContainerSasConfig extends cdktf.TerraformMetaArguments {
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

function dataAzurermStorageAccountBlobContainerSasPermissionsToTerraform(struct?: DataAzurermStorageAccountBlobContainerSasPermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    add: cdktf.booleanToTerraform(struct!.add),
    create: cdktf.booleanToTerraform(struct!.create),
    delete: cdktf.booleanToTerraform(struct!.delete),
    list: cdktf.booleanToTerraform(struct!.list),
    read: cdktf.booleanToTerraform(struct!.read),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}

export interface DataAzurermStorageAccountBlobContainerSasTimeouts {
  readonly read?: string;
}

function dataAzurermStorageAccountBlobContainerSasTimeoutsToTerraform(struct?: DataAzurermStorageAccountBlobContainerSasTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermStorageAccountBlobContainerSas extends cdktf.TerraformDataSource {

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
    return this.getStringAttribute('cache_control');
  }
  public set cacheControl(value: string ) {
    this._cacheControl = value;
  }
  public resetCacheControl() {
    this._cacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlInput() {
    return this._cacheControl
  }

  // connection_string - computed: false, optional: false, required: true
  private _connectionString: string;
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName: string;
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName
  }

  // content_disposition - computed: false, optional: true, required: false
  private _contentDisposition?: string;
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }
  public set contentDisposition(value: string ) {
    this._contentDisposition = value;
  }
  public resetContentDisposition() {
    this._contentDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDispositionInput() {
    return this._contentDisposition
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string;
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
  public set contentEncoding(value: string ) {
    this._contentEncoding = value;
  }
  public resetContentEncoding() {
    this._contentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEncodingInput() {
    return this._contentEncoding
  }

  // content_language - computed: false, optional: true, required: false
  private _contentLanguage?: string;
  public get contentLanguage() {
    return this.getStringAttribute('content_language');
  }
  public set contentLanguage(value: string ) {
    this._contentLanguage = value;
  }
  public resetContentLanguage() {
    this._contentLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLanguageInput() {
    return this._contentLanguage
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string ) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType
  }

  // expiry - computed: false, optional: false, required: true
  private _expiry: string;
  public get expiry() {
    return this.getStringAttribute('expiry');
  }
  public set expiry(value: string) {
    this._expiry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry
  }

  // https_only - computed: false, optional: true, required: false
  private _httpsOnly?: boolean;
  public get httpsOnly() {
    return this.getBooleanAttribute('https_only');
  }
  public set httpsOnly(value: boolean ) {
    this._httpsOnly = value;
  }
  public resetHttpsOnly() {
    this._httpsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsOnlyInput() {
    return this._httpsOnly
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string;
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string ) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress
  }

  // sas - computed: true, optional: false, required: false
  public get sas() {
    return this.getStringAttribute('sas');
  }

  // start - computed: false, optional: false, required: true
  private _start: string;
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions: DataAzurermStorageAccountBlobContainerSasPermissions[];
  public get permissions() {
    return this.interpolationForAttribute('permissions') as any;
  }
  public set permissions(value: DataAzurermStorageAccountBlobContainerSasPermissions[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermStorageAccountBlobContainerSasTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermStorageAccountBlobContainerSasTimeouts ) {
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
      cache_control: cdktf.stringToTerraform(this._cacheControl),
      connection_string: cdktf.stringToTerraform(this._connectionString),
      container_name: cdktf.stringToTerraform(this._containerName),
      content_disposition: cdktf.stringToTerraform(this._contentDisposition),
      content_encoding: cdktf.stringToTerraform(this._contentEncoding),
      content_language: cdktf.stringToTerraform(this._contentLanguage),
      content_type: cdktf.stringToTerraform(this._contentType),
      expiry: cdktf.stringToTerraform(this._expiry),
      https_only: cdktf.booleanToTerraform(this._httpsOnly),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      start: cdktf.stringToTerraform(this._start),
      permissions: cdktf.listMapper(dataAzurermStorageAccountBlobContainerSasPermissionsToTerraform)(this._permissions),
      timeouts: dataAzurermStorageAccountBlobContainerSasTimeoutsToTerraform(this._timeouts),
    };
  }
}
