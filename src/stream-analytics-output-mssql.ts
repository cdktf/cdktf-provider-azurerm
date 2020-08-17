// https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_mssql.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StreamAnalyticsOutputMssqlConfig extends TerraformMetaArguments {
  readonly database: string;
  readonly name: string;
  readonly password: string;
  readonly resourceGroupName: string;
  readonly server: string;
  readonly streamAnalyticsJobName: string;
  readonly table: string;
  readonly user: string;
  /** timeouts block */
  readonly timeouts?: StreamAnalyticsOutputMssqlTimeouts;
}
export interface StreamAnalyticsOutputMssqlTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class StreamAnalyticsOutputMssql extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StreamAnalyticsOutputMssqlConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_stream_analytics_output_mssql',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._database = config.database;
    this._name = config.name;
    this._password = config.password;
    this._resourceGroupName = config.resourceGroupName;
    this._server = config.server;
    this._streamAnalyticsJobName = config.streamAnalyticsJobName;
    this._table = config.table;
    this._user = config.user;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database - computed: false, optional: false, required: true
  private _database: string;
  public get database() {
    return this._database;
  }
  public set database(value: string) {
    this._database = value;
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

  // password - computed: false, optional: false, required: true
  private _password: string;
  public get password() {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // server - computed: false, optional: false, required: true
  private _server: string;
  public get server() {
    return this._server;
  }
  public set server(value: string) {
    this._server = value;
  }

  // stream_analytics_job_name - computed: false, optional: false, required: true
  private _streamAnalyticsJobName: string;
  public get streamAnalyticsJobName() {
    return this._streamAnalyticsJobName;
  }
  public set streamAnalyticsJobName(value: string) {
    this._streamAnalyticsJobName = value;
  }

  // table - computed: false, optional: false, required: true
  private _table: string;
  public get table() {
    return this._table;
  }
  public set table(value: string) {
    this._table = value;
  }

  // user - computed: false, optional: false, required: true
  private _user: string;
  public get user() {
    return this._user;
  }
  public set user(value: string) {
    this._user = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StreamAnalyticsOutputMssqlTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: StreamAnalyticsOutputMssqlTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      database: this._database,
      name: this._name,
      password: this._password,
      resource_group_name: this._resourceGroupName,
      server: this._server,
      stream_analytics_job_name: this._streamAnalyticsJobName,
      table: this._table,
      user: this._user,
      timeouts: this._timeouts,
    };
  }
}
