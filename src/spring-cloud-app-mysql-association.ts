// https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_mysql_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpringCloudAppMysqlAssociationConfig extends cdktf.TerraformMetaArguments {
  readonly databaseName: string;
  readonly mysqlServerId: string;
  readonly name: string;
  readonly password: string;
  readonly springCloudAppId: string;
  readonly username: string;
  /** timeouts block */
  readonly timeouts?: SpringCloudAppMysqlAssociationTimeouts;
}
export interface SpringCloudAppMysqlAssociationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function springCloudAppMysqlAssociationTimeoutsToTerraform(struct?: SpringCloudAppMysqlAssociationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class SpringCloudAppMysqlAssociation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SpringCloudAppMysqlAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_spring_cloud_app_mysql_association',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._databaseName = config.databaseName;
    this._mysqlServerId = config.mysqlServerId;
    this._name = config.name;
    this._password = config.password;
    this._springCloudAppId = config.springCloudAppId;
    this._username = config.username;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // mysql_server_id - computed: false, optional: false, required: true
  private _mysqlServerId: string;
  public get mysqlServerId() {
    return this.getStringAttribute('mysql_server_id');
  }
  public set mysqlServerId(value: string) {
    this._mysqlServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlServerIdInput() {
    return this._mysqlServerId
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

  // spring_cloud_app_id - computed: false, optional: false, required: true
  private _springCloudAppId: string;
  public get springCloudAppId() {
    return this.getStringAttribute('spring_cloud_app_id');
  }
  public set springCloudAppId(value: string) {
    this._springCloudAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get springCloudAppIdInput() {
    return this._springCloudAppId
  }

  // username - computed: false, optional: false, required: true
  private _username: string;
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
  private _timeouts?: SpringCloudAppMysqlAssociationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SpringCloudAppMysqlAssociationTimeouts ) {
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
      database_name: cdktf.stringToTerraform(this._databaseName),
      mysql_server_id: cdktf.stringToTerraform(this._mysqlServerId),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      spring_cloud_app_id: cdktf.stringToTerraform(this._springCloudAppId),
      username: cdktf.stringToTerraform(this._username),
      timeouts: springCloudAppMysqlAssociationTimeoutsToTerraform(this._timeouts),
    };
  }
}
