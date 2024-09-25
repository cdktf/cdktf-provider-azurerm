// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_reference_input_mssql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamAnalyticsReferenceInputMssqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_reference_input_mssql#database StreamAnalyticsReferenceInputMssql#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_reference_input_mssql#delta_snapshot_query StreamAnalyticsReferenceInputMssql#delta_snapshot_query}
  */
  readonly deltaSnapshotQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_reference_input_mssql#full_snapshot_query StreamAnalyticsReferenceInputMssql#full_snapshot_query}
  */
  readonly fullSnapshotQuery: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_reference_input_mssql#id StreamAnalyticsReferenceInputMssql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_reference_input_mssql#name StreamAnalyticsReferenceInputMssql#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_reference_input_mssql#password StreamAnalyticsReferenceInputMssql#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_reference_input_mssql#refresh_interval_duration StreamAnalyticsReferenceInputMssql#refresh_interval_duration}
  */
  readonly refreshIntervalDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_reference_input_mssql#refresh_type StreamAnalyticsReferenceInputMssql#refresh_type}
  */
  readonly refreshType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_reference_input_mssql#resource_group_name StreamAnalyticsReferenceInputMssql#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_reference_input_mssql#server StreamAnalyticsReferenceInputMssql#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_reference_input_mssql#stream_analytics_job_name StreamAnalyticsReferenceInputMssql#stream_analytics_job_name}
  */
  readonly streamAnalyticsJobName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_reference_input_mssql#table StreamAnalyticsReferenceInputMssql#table}
  */
  readonly table?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_reference_input_mssql#username StreamAnalyticsReferenceInputMssql#username}
  */
  readonly username: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_reference_input_mssql#timeouts StreamAnalyticsReferenceInputMssql#timeouts}
  */
  readonly timeouts?: StreamAnalyticsReferenceInputMssqlTimeouts;
}
export interface StreamAnalyticsReferenceInputMssqlTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_reference_input_mssql#create StreamAnalyticsReferenceInputMssql#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_reference_input_mssql#delete StreamAnalyticsReferenceInputMssql#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_reference_input_mssql#read StreamAnalyticsReferenceInputMssql#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_reference_input_mssql#update StreamAnalyticsReferenceInputMssql#update}
  */
  readonly update?: string;
}

export function streamAnalyticsReferenceInputMssqlTimeoutsToTerraform(struct?: StreamAnalyticsReferenceInputMssqlTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function streamAnalyticsReferenceInputMssqlTimeoutsToHclTerraform(struct?: StreamAnalyticsReferenceInputMssqlTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamAnalyticsReferenceInputMssqlTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamAnalyticsReferenceInputMssqlTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_reference_input_mssql azurerm_stream_analytics_reference_input_mssql}
*/
export class StreamAnalyticsReferenceInputMssql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_stream_analytics_reference_input_mssql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StreamAnalyticsReferenceInputMssql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StreamAnalyticsReferenceInputMssql to import
  * @param importFromId The id of the existing StreamAnalyticsReferenceInputMssql that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_reference_input_mssql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StreamAnalyticsReferenceInputMssql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_stream_analytics_reference_input_mssql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_reference_input_mssql azurerm_stream_analytics_reference_input_mssql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamAnalyticsReferenceInputMssqlConfig
  */
  public constructor(scope: Construct, id: string, config: StreamAnalyticsReferenceInputMssqlConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_stream_analytics_reference_input_mssql',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._database = config.database;
    this._deltaSnapshotQuery = config.deltaSnapshotQuery;
    this._fullSnapshotQuery = config.fullSnapshotQuery;
    this._id = config.id;
    this._name = config.name;
    this._password = config.password;
    this._refreshIntervalDuration = config.refreshIntervalDuration;
    this._refreshType = config.refreshType;
    this._resourceGroupName = config.resourceGroupName;
    this._server = config.server;
    this._streamAnalyticsJobName = config.streamAnalyticsJobName;
    this._table = config.table;
    this._username = config.username;
    this._timeouts.internalValue = config.timeouts;
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
    return this._database;
  }

  // delta_snapshot_query - computed: false, optional: true, required: false
  private _deltaSnapshotQuery?: string; 
  public get deltaSnapshotQuery() {
    return this.getStringAttribute('delta_snapshot_query');
  }
  public set deltaSnapshotQuery(value: string) {
    this._deltaSnapshotQuery = value;
  }
  public resetDeltaSnapshotQuery() {
    this._deltaSnapshotQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaSnapshotQueryInput() {
    return this._deltaSnapshotQuery;
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
    return this._fullSnapshotQuery;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._name;
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
    return this._password;
  }

  // refresh_interval_duration - computed: false, optional: true, required: false
  private _refreshIntervalDuration?: string; 
  public get refreshIntervalDuration() {
    return this.getStringAttribute('refresh_interval_duration');
  }
  public set refreshIntervalDuration(value: string) {
    this._refreshIntervalDuration = value;
  }
  public resetRefreshIntervalDuration() {
    this._refreshIntervalDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalDurationInput() {
    return this._refreshIntervalDuration;
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
    return this._refreshType;
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
    return this._resourceGroupName;
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
    return this._server;
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
    return this._streamAnalyticsJobName;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
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
    return this._username;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StreamAnalyticsReferenceInputMssqlTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database: cdktf.stringToTerraform(this._database),
      delta_snapshot_query: cdktf.stringToTerraform(this._deltaSnapshotQuery),
      full_snapshot_query: cdktf.stringToTerraform(this._fullSnapshotQuery),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      refresh_interval_duration: cdktf.stringToTerraform(this._refreshIntervalDuration),
      refresh_type: cdktf.stringToTerraform(this._refreshType),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      server: cdktf.stringToTerraform(this._server),
      stream_analytics_job_name: cdktf.stringToTerraform(this._streamAnalyticsJobName),
      table: cdktf.stringToTerraform(this._table),
      username: cdktf.stringToTerraform(this._username),
      timeouts: streamAnalyticsReferenceInputMssqlTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delta_snapshot_query: {
        value: cdktf.stringToHclTerraform(this._deltaSnapshotQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_snapshot_query: {
        value: cdktf.stringToHclTerraform(this._fullSnapshotQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_interval_duration: {
        value: cdktf.stringToHclTerraform(this._refreshIntervalDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_type: {
        value: cdktf.stringToHclTerraform(this._refreshType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_analytics_job_name: {
        value: cdktf.stringToHclTerraform(this._streamAnalyticsJobName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table: {
        value: cdktf.stringToHclTerraform(this._table),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: streamAnalyticsReferenceInputMssqlTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StreamAnalyticsReferenceInputMssqlTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
