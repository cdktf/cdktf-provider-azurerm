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
