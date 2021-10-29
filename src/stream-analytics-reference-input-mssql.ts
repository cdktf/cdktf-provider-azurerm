// https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_reference_input_mssql.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamAnalyticsReferenceInputMssqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_reference_input_mssql.html#database StreamAnalyticsReferenceInputMssql#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_reference_input_mssql.html#delta_snapshot_query StreamAnalyticsReferenceInputMssql#delta_snapshot_query}
  */
  readonly deltaSnapshotQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_reference_input_mssql.html#full_snapshot_query StreamAnalyticsReferenceInputMssql#full_snapshot_query}
  */
  readonly fullSnapshotQuery: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_reference_input_mssql.html#name StreamAnalyticsReferenceInputMssql#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_reference_input_mssql.html#password StreamAnalyticsReferenceInputMssql#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_reference_input_mssql.html#refresh_interval_duration StreamAnalyticsReferenceInputMssql#refresh_interval_duration}
  */
  readonly refreshIntervalDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_reference_input_mssql.html#refresh_type StreamAnalyticsReferenceInputMssql#refresh_type}
  */
  readonly refreshType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_reference_input_mssql.html#resource_group_name StreamAnalyticsReferenceInputMssql#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_reference_input_mssql.html#server StreamAnalyticsReferenceInputMssql#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_reference_input_mssql.html#stream_analytics_job_name StreamAnalyticsReferenceInputMssql#stream_analytics_job_name}
  */
  readonly streamAnalyticsJobName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_reference_input_mssql.html#username StreamAnalyticsReferenceInputMssql#username}
  */
  readonly username: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_reference_input_mssql.html#timeouts StreamAnalyticsReferenceInputMssql#timeouts}
  */
  readonly timeouts?: StreamAnalyticsReferenceInputMssqlTimeouts;
}
export interface StreamAnalyticsReferenceInputMssqlTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_reference_input_mssql.html#create StreamAnalyticsReferenceInputMssql#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_reference_input_mssql.html#delete StreamAnalyticsReferenceInputMssql#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_reference_input_mssql.html#read StreamAnalyticsReferenceInputMssql#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_reference_input_mssql.html#update StreamAnalyticsReferenceInputMssql#update}
  */
  readonly update?: string;
}

function streamAnalyticsReferenceInputMssqlTimeoutsToTerraform(struct?: StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference | StreamAnalyticsReferenceInputMssqlTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_reference_input_mssql.html azurerm_stream_analytics_reference_input_mssql}
*/
export class StreamAnalyticsReferenceInputMssql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_stream_analytics_reference_input_mssql";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_reference_input_mssql.html azurerm_stream_analytics_reference_input_mssql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamAnalyticsReferenceInputMssqlConfig
  */
  public constructor(scope: Construct, id: string, config: StreamAnalyticsReferenceInputMssqlConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_stream_analytics_reference_input_mssql',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._database = config.database;
    this._deltaSnapshotQuery = config.deltaSnapshotQuery;
    this._fullSnapshotQuery = config.fullSnapshotQuery;
    this._name = config.name;
    this._password = config.password;
    this._refreshIntervalDuration = config.refreshIntervalDuration;
    this._refreshType = config.refreshType;
    this._resourceGroupName = config.resourceGroupName;
    this._server = config.server;
    this._streamAnalyticsJobName = config.streamAnalyticsJobName;
    this._username = config.username;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database - computed: false, optional: false, required: true
  private _database?: string; 
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

  // delta_snapshot_query - computed: false, optional: true, required: false
  private _deltaSnapshotQuery?: string | undefined; 
  public get deltaSnapshotQuery() {
    return this.getStringAttribute('delta_snapshot_query');
  }
  public set deltaSnapshotQuery(value: string | undefined) {
    this._deltaSnapshotQuery = value;
  }
  public resetDeltaSnapshotQuery() {
    this._deltaSnapshotQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaSnapshotQueryInput() {
    return this._deltaSnapshotQuery
  }

  // full_snapshot_query - computed: false, optional: false, required: true
  private _fullSnapshotQuery?: string; 
  public get fullSnapshotQuery() {
    return this.getStringAttribute('full_snapshot_query');
  }
  public set fullSnapshotQuery(value: string) {
    this._fullSnapshotQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullSnapshotQueryInput() {
    return this._fullSnapshotQuery
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
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
  private _password?: string; 
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

  // refresh_interval_duration - computed: false, optional: true, required: false
  private _refreshIntervalDuration?: string | undefined; 
  public get refreshIntervalDuration() {
    return this.getStringAttribute('refresh_interval_duration');
  }
  public set refreshIntervalDuration(value: string | undefined) {
    this._refreshIntervalDuration = value;
  }
  public resetRefreshIntervalDuration() {
    this._refreshIntervalDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalDurationInput() {
    return this._refreshIntervalDuration
  }

  // refresh_type - computed: false, optional: false, required: true
  private _refreshType?: string; 
  public get refreshType() {
    return this.getStringAttribute('refresh_type');
  }
  public set refreshType(value: string) {
    this._refreshType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTypeInput() {
    return this._refreshType
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
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
  private _server?: string; 
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
  private _streamAnalyticsJobName?: string; 
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

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StreamAnalyticsReferenceInputMssqlTimeouts | undefined; 
  private __timeoutsOutput = new StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: StreamAnalyticsReferenceInputMssqlTimeouts | undefined) {
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
      delta_snapshot_query: cdktf.stringToTerraform(this._deltaSnapshotQuery),
      full_snapshot_query: cdktf.stringToTerraform(this._fullSnapshotQuery),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      refresh_interval_duration: cdktf.stringToTerraform(this._refreshIntervalDuration),
      refresh_type: cdktf.stringToTerraform(this._refreshType),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      server: cdktf.stringToTerraform(this._server),
      stream_analytics_job_name: cdktf.stringToTerraform(this._streamAnalyticsJobName),
      username: cdktf.stringToTerraform(this._username),
      timeouts: streamAnalyticsReferenceInputMssqlTimeoutsToTerraform(this._timeouts),
    };
  }
}
