// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_storage_account_sas.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermStorageAccountSasConfig extends cdktf.TerraformMetaArguments {
  readonly connectionString: string;
  readonly expiry: string;
  readonly httpsOnly?: boolean;
  readonly signedVersion?: string;
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

function dataAzurermStorageAccountSasPermissionsToTerraform(struct?: DataAzurermStorageAccountSasPermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    add: cdktf.booleanToTerraform(struct!.add),
    create: cdktf.booleanToTerraform(struct!.create),
    delete: cdktf.booleanToTerraform(struct!.delete),
    list: cdktf.booleanToTerraform(struct!.list),
    process: cdktf.booleanToTerraform(struct!.process),
    read: cdktf.booleanToTerraform(struct!.read),
    update: cdktf.booleanToTerraform(struct!.update),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}

export interface DataAzurermStorageAccountSasResourceTypes {
  readonly container: boolean;
  readonly object: boolean;
  readonly service: boolean;
}

function dataAzurermStorageAccountSasResourceTypesToTerraform(struct?: DataAzurermStorageAccountSasResourceTypes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container: cdktf.booleanToTerraform(struct!.container),
    object: cdktf.booleanToTerraform(struct!.object),
    service: cdktf.booleanToTerraform(struct!.service),
  }
}

export interface DataAzurermStorageAccountSasServices {
  readonly blob: boolean;
  readonly file: boolean;
  readonly queue: boolean;
  readonly table: boolean;
}

function dataAzurermStorageAccountSasServicesToTerraform(struct?: DataAzurermStorageAccountSasServices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    blob: cdktf.booleanToTerraform(struct!.blob),
    file: cdktf.booleanToTerraform(struct!.file),
    queue: cdktf.booleanToTerraform(struct!.queue),
    table: cdktf.booleanToTerraform(struct!.table),
  }
}

export interface DataAzurermStorageAccountSasTimeouts {
  readonly read?: string;
}

function dataAzurermStorageAccountSasTimeoutsToTerraform(struct?: DataAzurermStorageAccountSasTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermStorageAccountSas extends cdktf.TerraformDataSource {

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
    this._signedVersion = config.signedVersion;
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
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString
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

  // sas - computed: true, optional: false, required: false
  public get sas() {
    return this.getStringAttribute('sas');
  }

  // signed_version - computed: false, optional: true, required: false
  private _signedVersion?: string;
  public get signedVersion() {
    return this.getStringAttribute('signed_version');
  }
  public set signedVersion(value: string ) {
    this._signedVersion = value;
  }
  public resetSignedVersion() {
    this._signedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signedVersionInput() {
    return this._signedVersion
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
  private _permissions: DataAzurermStorageAccountSasPermissions[];
  public get permissions() {
    return this.interpolationForAttribute('permissions') as any;
  }
  public set permissions(value: DataAzurermStorageAccountSasPermissions[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions
  }

  // resource_types - computed: false, optional: false, required: true
  private _resourceTypes: DataAzurermStorageAccountSasResourceTypes[];
  public get resourceTypes() {
    return this.interpolationForAttribute('resource_types') as any;
  }
  public set resourceTypes(value: DataAzurermStorageAccountSasResourceTypes[]) {
    this._resourceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes
  }

  // services - computed: false, optional: false, required: true
  private _services: DataAzurermStorageAccountSasServices[];
  public get services() {
    return this.interpolationForAttribute('services') as any;
  }
  public set services(value: DataAzurermStorageAccountSasServices[]) {
    this._services = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermStorageAccountSasTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermStorageAccountSasTimeouts ) {
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
      connection_string: cdktf.stringToTerraform(this._connectionString),
      expiry: cdktf.stringToTerraform(this._expiry),
      https_only: cdktf.booleanToTerraform(this._httpsOnly),
      signed_version: cdktf.stringToTerraform(this._signedVersion),
      start: cdktf.stringToTerraform(this._start),
      permissions: cdktf.listMapper(dataAzurermStorageAccountSasPermissionsToTerraform)(this._permissions),
      resource_types: cdktf.listMapper(dataAzurermStorageAccountSasResourceTypesToTerraform)(this._resourceTypes),
      services: cdktf.listMapper(dataAzurermStorageAccountSasServicesToTerraform)(this._services),
      timeouts: dataAzurermStorageAccountSasTimeoutsToTerraform(this._timeouts),
    };
  }
}
