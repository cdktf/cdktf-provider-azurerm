// https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_stored_procedure.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosmosdbSqlStoredProcedureConfig extends cdktf.TerraformMetaArguments {
  readonly accountName: string;
  readonly body: string;
  readonly containerName: string;
  readonly databaseName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: CosmosdbSqlStoredProcedureTimeouts;
}
export interface CosmosdbSqlStoredProcedureTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function cosmosdbSqlStoredProcedureTimeoutsToTerraform(struct?: CosmosdbSqlStoredProcedureTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class CosmosdbSqlStoredProcedure extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CosmosdbSqlStoredProcedureConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cosmosdb_sql_stored_procedure',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountName = config.accountName;
    this._body = config.body;
    this._containerName = config.containerName;
    this._databaseName = config.databaseName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName: string;
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName
  }

  // body - computed: false, optional: false, required: true
  private _body: string;
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName: string;
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName: string;
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CosmosdbSqlStoredProcedureTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CosmosdbSqlStoredProcedureTimeouts ) {
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
      account_name: cdktf.stringToTerraform(this._accountName),
      body: cdktf.stringToTerraform(this._body),
      container_name: cdktf.stringToTerraform(this._containerName),
      database_name: cdktf.stringToTerraform(this._databaseName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: cosmosdbSqlStoredProcedureTimeoutsToTerraform(this._timeouts),
    };
  }
}
