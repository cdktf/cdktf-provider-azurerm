// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_sql_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermSqlDatabaseConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  readonly serverName: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: DataAzurermSqlDatabaseTimeouts;
}
export interface DataAzurermSqlDatabaseTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermSqlDatabase extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermSqlDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sql_database',
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
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collation - computed: true, optional: false, required: true
  public get collation() {
    return this.getStringAttribute('collation');
  }

  // default_secondary_location - computed: true, optional: false, required: true
  public get defaultSecondaryLocation() {
    return this.getStringAttribute('default_secondary_location');
  }

  // edition - computed: true, optional: false, required: true
  public get edition() {
    return this.getStringAttribute('edition');
  }

  // elastic_pool_name - computed: true, optional: false, required: true
  public get elasticPoolName() {
    return this.getStringAttribute('elastic_pool_name');
  }

  // failover_group_id - computed: true, optional: false, required: true
  public get failoverGroupId() {
    return this.getStringAttribute('failover_group_id');
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

  // read_scale - computed: true, optional: false, required: true
  public get readScale() {
    return this.getBooleanAttribute('read_scale');
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermSqlDatabaseTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermSqlDatabaseTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      server_name: this._serverName,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
