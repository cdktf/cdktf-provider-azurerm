// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_mariadb_server.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermMariadbServerConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermMariadbServerTimeouts;
}
export class DataAzurermMariadbServerStorageProfile extends ComplexComputedList {

  // auto_grow - computed: true, optional: false, required: true
  public get autoGrow() {
    return this.getStringAttribute('auto_grow');
  }

  // backup_retention_days - computed: true, optional: false, required: true
  public get backupRetentionDays() {
    return this.getNumberAttribute('backup_retention_days');
  }

  // geo_redundant_backup - computed: true, optional: false, required: true
  public get geoRedundantBackup() {
    return this.getStringAttribute('geo_redundant_backup');
  }

  // storage_mb - computed: true, optional: false, required: true
  public get storageMb() {
    return this.getNumberAttribute('storage_mb');
  }
}
export interface DataAzurermMariadbServerTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermMariadbServer extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermMariadbServerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mariadb_server',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrator_login - computed: true, optional: false, required: true
  public get administratorLogin() {
    return this.getStringAttribute('administrator_login');
  }

  // administrator_login_password - computed: true, optional: false, required: true
  public get administratorLoginPassword() {
    return this.getStringAttribute('administrator_login_password');
  }

  // fqdn - computed: true, optional: false, required: true
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // sku_name - computed: true, optional: false, required: true
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }

  // ssl_enforcement - computed: true, optional: false, required: true
  public get sslEnforcement() {
    return this.getStringAttribute('ssl_enforcement');
  }

  // storage_profile - computed: true, optional: false, required: true
  public storageProfile(index: string) {
    return new DataAzurermMariadbServerStorageProfile(this, 'storage_profile', index);
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
  private _timeouts?: DataAzurermMariadbServerTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermMariadbServerTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
