// https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_mssql.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamAnalyticsOutputMssqlConfig extends cdktf.TerraformMetaArguments {
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

function streamAnalyticsOutputMssqlTimeoutsToTerraform(struct?: StreamAnalyticsOutputMssqlTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class StreamAnalyticsOutputMssql extends cdktf.TerraformResource {

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
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // password - computed: false, optional: false, required: true
  private _password: string;
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // server - computed: false, optional: false, required: true
  private _server: string;
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server
  }

  // stream_analytics_job_name - computed: false, optional: false, required: true
  private _streamAnalyticsJobName: string;
  public get streamAnalyticsJobName() {
    return this.getStringAttribute('stream_analytics_job_name');
  }
  public set streamAnalyticsJobName(value: string) {
    this._streamAnalyticsJobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamAnalyticsJobNameInput() {
    return this._streamAnalyticsJobName
  }

  // table - computed: false, optional: false, required: true
  private _table: string;
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table
  }

  // user - computed: false, optional: false, required: true
  private _user: string;
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StreamAnalyticsOutputMssqlTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StreamAnalyticsOutputMssqlTimeouts ) {
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
      database: cdktf.stringToTerraform(this._database),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      server: cdktf.stringToTerraform(this._server),
      stream_analytics_job_name: cdktf.stringToTerraform(this._streamAnalyticsJobName),
      table: cdktf.stringToTerraform(this._table),
      user: cdktf.stringToTerraform(this._user),
      timeouts: streamAnalyticsOutputMssqlTimeoutsToTerraform(this._timeouts),
    };
  }
}
