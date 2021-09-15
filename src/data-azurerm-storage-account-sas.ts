// https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermStorageAccountSasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#connection_string DataAzurermStorageAccountSas#connection_string}
  */
  readonly connectionString: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#expiry DataAzurermStorageAccountSas#expiry}
  */
  readonly expiry: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#https_only DataAzurermStorageAccountSas#https_only}
  */
  readonly httpsOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#ip_addresses DataAzurermStorageAccountSas#ip_addresses}
  */
  readonly ipAddresses?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#signed_version DataAzurermStorageAccountSas#signed_version}
  */
  readonly signedVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#start DataAzurermStorageAccountSas#start}
  */
  readonly start: string;
  /**
  * permissions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#permissions DataAzurermStorageAccountSas#permissions}
  */
  readonly permissions: DataAzurermStorageAccountSasPermissions[];
  /**
  * resource_types block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#resource_types DataAzurermStorageAccountSas#resource_types}
  */
  readonly resourceTypes: DataAzurermStorageAccountSasResourceTypes[];
  /**
  * services block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#services DataAzurermStorageAccountSas#services}
  */
  readonly services: DataAzurermStorageAccountSasServices[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#timeouts DataAzurermStorageAccountSas#timeouts}
  */
  readonly timeouts?: DataAzurermStorageAccountSasTimeouts;
}
export interface DataAzurermStorageAccountSasPermissions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#add DataAzurermStorageAccountSas#add}
  */
  readonly add: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#create DataAzurermStorageAccountSas#create}
  */
  readonly create: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#delete DataAzurermStorageAccountSas#delete}
  */
  readonly delete: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#list DataAzurermStorageAccountSas#list}
  */
  readonly list: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#process DataAzurermStorageAccountSas#process}
  */
  readonly process: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#read DataAzurermStorageAccountSas#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#update DataAzurermStorageAccountSas#update}
  */
  readonly update: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#write DataAzurermStorageAccountSas#write}
  */
  readonly write: boolean | cdktf.IResolvable;
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#container DataAzurermStorageAccountSas#container}
  */
  readonly container: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#object DataAzurermStorageAccountSas#object}
  */
  readonly object: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#service DataAzurermStorageAccountSas#service}
  */
  readonly service: boolean | cdktf.IResolvable;
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#blob DataAzurermStorageAccountSas#blob}
  */
  readonly blob: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#file DataAzurermStorageAccountSas#file}
  */
  readonly file: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#queue DataAzurermStorageAccountSas#queue}
  */
  readonly queue: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#table DataAzurermStorageAccountSas#table}
  */
  readonly table: boolean | cdktf.IResolvable;
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html#read DataAzurermStorageAccountSas#read}
  */
  readonly read?: string;
}

function dataAzurermStorageAccountSasTimeoutsToTerraform(struct?: DataAzurermStorageAccountSasTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html azurerm_storage_account_sas}
*/
export class DataAzurermStorageAccountSas extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_storage_account_sas";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/storage_account_sas.html azurerm_storage_account_sas} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermStorageAccountSasConfig
  */
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
    this._ipAddresses = config.ipAddresses;
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
  private _httpsOnly?: boolean | cdktf.IResolvable;
  public get httpsOnly() {
    return this.getBooleanAttribute('https_only');
  }
  public set httpsOnly(value: boolean | cdktf.IResolvable ) {
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

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string;
  public get ipAddresses() {
    return this.getStringAttribute('ip_addresses');
  }
  public set ipAddresses(value: string ) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses
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
      ip_addresses: cdktf.stringToTerraform(this._ipAddresses),
      signed_version: cdktf.stringToTerraform(this._signedVersion),
      start: cdktf.stringToTerraform(this._start),
      permissions: cdktf.listMapper(dataAzurermStorageAccountSasPermissionsToTerraform)(this._permissions),
      resource_types: cdktf.listMapper(dataAzurermStorageAccountSasResourceTypesToTerraform)(this._resourceTypes),
      services: cdktf.listMapper(dataAzurermStorageAccountSasServicesToTerraform)(this._services),
      timeouts: dataAzurermStorageAccountSasTimeoutsToTerraform(this._timeouts),
    };
  }
}
