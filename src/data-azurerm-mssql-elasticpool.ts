// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_mssql_elasticpool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermMssqlElasticpoolConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  readonly serverName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermMssqlElasticpoolTimeouts;
}
export interface DataAzurermMssqlElasticpoolTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermMssqlElasticpool extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermMssqlElasticpoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_elasticpool',
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
    this._serverName = config.serverName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // max_size_bytes - computed: true, optional: false, required: true
  public get maxSizeBytes() {
    return this.getNumberAttribute('max_size_bytes');
  }

  // max_size_gb - computed: true, optional: false, required: true
  public get maxSizeGb() {
    return this.getNumberAttribute('max_size_gb');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // per_db_max_capacity - computed: true, optional: false, required: true
  public get perDbMaxCapacity() {
    return this.getNumberAttribute('per_db_max_capacity');
  }

  // per_db_min_capacity - computed: true, optional: false, required: true
  public get perDbMinCapacity() {
    return this.getNumberAttribute('per_db_min_capacity');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // server_name - computed: false, optional: false, required: true
  private _serverName: string;
  public get serverName() {
    return this._serverName;
  }
  public set serverName(value: string) {
    this._serverName = value;
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // zone_redundant - computed: true, optional: false, required: true
  public get zoneRedundant() {
    return this.getBooleanAttribute('zone_redundant');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermMssqlElasticpoolTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermMssqlElasticpoolTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      server_name: this._serverName,
      timeouts: this._timeouts,
    };
  }
}
