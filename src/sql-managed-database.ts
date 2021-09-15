// https://www.terraform.io/docs/providers/azurerm/r/sql_managed_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlManagedDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_database.html#location SqlManagedDatabase#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_database.html#name SqlManagedDatabase#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_database.html#sql_managed_instance_id SqlManagedDatabase#sql_managed_instance_id}
  */
  readonly sqlManagedInstanceId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_database.html#timeouts SqlManagedDatabase#timeouts}
  */
  readonly timeouts?: SqlManagedDatabaseTimeouts;
}
export interface SqlManagedDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_database.html#create SqlManagedDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_database.html#delete SqlManagedDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_database.html#read SqlManagedDatabase#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_database.html#update SqlManagedDatabase#update}
  */
  readonly update?: string;
}

function sqlManagedDatabaseTimeoutsToTerraform(struct?: SqlManagedDatabaseTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_database.html azurerm_sql_managed_database}
*/
export class SqlManagedDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_sql_managed_database";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_database.html azurerm_sql_managed_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlManagedDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: SqlManagedDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sql_managed_database',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._sqlManagedInstanceId = config.sqlManagedInstanceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // sql_managed_instance_id - computed: false, optional: false, required: true
  private _sqlManagedInstanceId: string;
  public get sqlManagedInstanceId() {
    return this.getStringAttribute('sql_managed_instance_id');
  }
  public set sqlManagedInstanceId(value: string) {
    this._sqlManagedInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlManagedInstanceIdInput() {
    return this._sqlManagedInstanceId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SqlManagedDatabaseTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SqlManagedDatabaseTimeouts ) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      sql_managed_instance_id: cdktf.stringToTerraform(this._sqlManagedInstanceId),
      timeouts: sqlManagedDatabaseTimeoutsToTerraform(this._timeouts),
    };
  }
}
