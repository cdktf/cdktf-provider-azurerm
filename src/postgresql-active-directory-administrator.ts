// https://www.terraform.io/docs/providers/azurerm/r/postgresql_active_directory_administrator.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresqlActiveDirectoryAdministratorConfig extends cdktf.TerraformMetaArguments {
  readonly login: string;
  readonly objectId: string;
  readonly resourceGroupName: string;
  readonly serverName: string;
  readonly tenantId: string;
  /** timeouts block */
  readonly timeouts?: PostgresqlActiveDirectoryAdministratorTimeouts;
}
export interface PostgresqlActiveDirectoryAdministratorTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function postgresqlActiveDirectoryAdministratorTimeoutsToTerraform(struct?: PostgresqlActiveDirectoryAdministratorTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class PostgresqlActiveDirectoryAdministrator extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PostgresqlActiveDirectoryAdministratorConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_postgresql_active_directory_administrator',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._login = config.login;
    this._objectId = config.objectId;
    this._resourceGroupName = config.resourceGroupName;
    this._serverName = config.serverName;
    this._tenantId = config.tenantId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // login - computed: false, optional: false, required: true
  private _login: string;
  public get login() {
    return this.getStringAttribute('login');
  }
  public set login(value: string) {
    this._login = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login
  }

  // object_id - computed: false, optional: false, required: true
  private _objectId: string;
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId
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

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId: string;
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PostgresqlActiveDirectoryAdministratorTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PostgresqlActiveDirectoryAdministratorTimeouts ) {
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
      login: cdktf.stringToTerraform(this._login),
      object_id: cdktf.stringToTerraform(this._objectId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      server_name: cdktf.stringToTerraform(this._serverName),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timeouts: postgresqlActiveDirectoryAdministratorTimeoutsToTerraform(this._timeouts),
    };
  }
}
