// https://www.terraform.io/docs/providers/azurerm/r/mariadb_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MariadbDatabaseConfig extends cdktf.TerraformMetaArguments {
  readonly charset: string;
  readonly collation: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly serverName: string;
  /** timeouts block */
  readonly timeouts?: MariadbDatabaseTimeouts;
}
export interface MariadbDatabaseTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function mariadbDatabaseTimeoutsToTerraform(struct?: MariadbDatabaseTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class MariadbDatabase extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MariadbDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mariadb_database',
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
    return this.getStringAttribute('charset');
  }
  public set charset(value: string) {
    this._charset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get charsetInput() {
    return this._charset
  }

  // collation - computed: false, optional: false, required: true
  private _collation: string;
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MariadbDatabaseTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MariadbDatabaseTimeouts ) {
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
      charset: cdktf.stringToTerraform(this._charset),
      collation: cdktf.stringToTerraform(this._collation),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      server_name: cdktf.stringToTerraform(this._serverName),
      timeouts: mariadbDatabaseTimeoutsToTerraform(this._timeouts),
    };
  }
}
