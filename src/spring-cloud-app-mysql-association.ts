// https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_mysql_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpringCloudAppMysqlAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_mysql_association.html#database_name SpringCloudAppMysqlAssociation#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_mysql_association.html#mysql_server_id SpringCloudAppMysqlAssociation#mysql_server_id}
  */
  readonly mysqlServerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_mysql_association.html#name SpringCloudAppMysqlAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_mysql_association.html#password SpringCloudAppMysqlAssociation#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_mysql_association.html#spring_cloud_app_id SpringCloudAppMysqlAssociation#spring_cloud_app_id}
  */
  readonly springCloudAppId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_mysql_association.html#username SpringCloudAppMysqlAssociation#username}
  */
  readonly username: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_mysql_association.html#timeouts SpringCloudAppMysqlAssociation#timeouts}
  */
  readonly timeouts?: SpringCloudAppMysqlAssociationTimeouts;
}
export interface SpringCloudAppMysqlAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_mysql_association.html#create SpringCloudAppMysqlAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_mysql_association.html#delete SpringCloudAppMysqlAssociation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_mysql_association.html#read SpringCloudAppMysqlAssociation#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_mysql_association.html#update SpringCloudAppMysqlAssociation#update}
  */
  readonly update?: string;
}

function springCloudAppMysqlAssociationTimeoutsToTerraform(struct?: SpringCloudAppMysqlAssociationTimeoutsOutputReference | SpringCloudAppMysqlAssociationTimeouts): any {
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

export class SpringCloudAppMysqlAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_mysql_association.html azurerm_spring_cloud_app_mysql_association}
*/
export class SpringCloudAppMysqlAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_spring_cloud_app_mysql_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app_mysql_association.html azurerm_spring_cloud_app_mysql_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpringCloudAppMysqlAssociationConfig
  */
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
  private _databaseName?: string; 
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
  private _mysqlServerId?: string; 
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

  // spring_cloud_app_id - computed: false, optional: false, required: true
  private _springCloudAppId?: string; 
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
  private _timeouts?: SpringCloudAppMysqlAssociationTimeouts | undefined; 
  private __timeoutsOutput = new SpringCloudAppMysqlAssociationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SpringCloudAppMysqlAssociationTimeouts | undefined) {
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
