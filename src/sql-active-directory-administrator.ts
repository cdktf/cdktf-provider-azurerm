// https://www.terraform.io/docs/providers/azurerm/r/sql_active_directory_administrator.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SqlActiveDirectoryAdministratorConfig extends TerraformMetaArguments {
  readonly login: string;
  readonly objectId: string;
  readonly resourceGroupName: string;
  readonly serverName: string;
  readonly tenantId: string;
  /** timeouts block */
  readonly timeouts?: SqlActiveDirectoryAdministratorTimeouts;
}
export interface SqlActiveDirectoryAdministratorTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SqlActiveDirectoryAdministrator extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SqlActiveDirectoryAdministratorConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sql_active_directory_administrator',
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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // login - computed: false, optional: false, required: true
  private _login: string;
  public get login() {
    return this._login;
  }
  public set login(value: string) {
    this._login = value;
  }

  // object_id - computed: false, optional: false, required: true
  private _objectId: string;
  public get objectId() {
    return this._objectId;
  }
  public set objectId(value: string) {
    this._objectId = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // server_name - computed: false, optional: false, required: true
  private _serverName: string;
  public get serverName() {
    return this._serverName;
  }
  public set serverName(value: string) {
    this._serverName = value;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId: string;
  public get tenantId() {
    return this._tenantId;
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SqlActiveDirectoryAdministratorTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SqlActiveDirectoryAdministratorTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      login: this._login,
      object_id: this._objectId,
      resource_group_name: this._resourceGroupName,
      server_name: this._serverName,
      tenant_id: this._tenantId,
      timeouts: this._timeouts,
    };
  }
}
