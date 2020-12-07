// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_sql_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermSqlDatabaseConfig extends cdktf.TerraformMetaArguments {
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

function dataAzurermSqlDatabaseTimeoutsToTerraform(struct?: DataAzurermSqlDatabaseTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermSqlDatabase extends cdktf.TerraformDataSource {

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

  // collation - computed: true, optional: false, required: false
  public get collation() {
    return this.getStringAttribute('collation');
  }

  // default_secondary_location - computed: true, optional: false, required: false
  public get defaultSecondaryLocation() {
    return this.getStringAttribute('default_secondary_location');
  }

  // edition - computed: true, optional: false, required: false
  public get edition() {
    return this.getStringAttribute('edition');
  }

  // elastic_pool_name - computed: true, optional: false, required: false
  public get elasticPoolName() {
    return this.getStringAttribute('elastic_pool_name');
  }

  // failover_group_id - computed: true, optional: false, required: false
  public get failoverGroupId() {
    return this.getStringAttribute('failover_group_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // read_scale - computed: true, optional: false, required: false
  public get readScale() {
    return this.getBooleanAttribute('read_scale');
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

  // server_name - computed: false, optional: false, required: true
  private _serverName: string;
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermSqlDatabaseTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermSqlDatabaseTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      server_name: cdktf.stringToTerraform(this._serverName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: dataAzurermSqlDatabaseTimeoutsToTerraform(this._timeouts),
    };
  }
}
