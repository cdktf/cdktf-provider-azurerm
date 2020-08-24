// https://www.terraform.io/docs/providers/azurerm/r/postgresql_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface PostgresqlDatabaseConfig extends TerraformMetaArguments {
  readonly charset: string;
  readonly collation: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly serverName: string;
  /** timeouts block */
  readonly timeouts?: PostgresqlDatabaseTimeouts;
}
export interface PostgresqlDatabaseTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class PostgresqlDatabase extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PostgresqlDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_postgresql_database',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._charset = config.charset;
    this._collation = config.collation;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._serverName = config.serverName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // charset - computed: false, optional: false, required: true
  private _charset: string;
  public get charset() {
    return this._charset;
  }
  public set charset(value: string) {
    this._charset = value;
  }

  // collation - computed: false, optional: false, required: true
  private _collation: string;
  public get collation() {
    return this._collation;
  }
  public set collation(value: string) {
    this._collation = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // server_name - computed: false, optional: false, required: true
  private _serverName: string;
  public get serverName() {
    return this._serverName;
  }
  public set serverName(value: string) {
    this._serverName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PostgresqlDatabaseTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: PostgresqlDatabaseTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      charset: this._charset,
      collation: this._collation,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      server_name: this._serverName,
      timeouts: this._timeouts,
    };
  }
}
