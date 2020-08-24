// https://www.terraform.io/docs/providers/azurerm/r/kusto_database_principal.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KustoDatabasePrincipalConfig extends TerraformMetaArguments {
  readonly clientId: string;
  readonly clusterName: string;
  readonly databaseName: string;
  readonly objectId: string;
  readonly resourceGroupName: string;
  readonly role: string;
  readonly type: string;
  /** timeouts block */
  readonly timeouts?: KustoDatabasePrincipalTimeouts;
}
export interface KustoDatabasePrincipalTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class KustoDatabasePrincipal extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KustoDatabasePrincipalConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kusto_database_principal',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clientId = config.clientId;
    this._clusterName = config.clusterName;
    this._databaseName = config.databaseName;
    this._objectId = config.objectId;
    this._resourceGroupName = config.resourceGroupName;
    this._role = config.role;
    this._type = config.type;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: true, optional: false, required: true
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId: string;
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string) {
    this._clientId = value;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName: string;
  public get clusterName() {
    return this._clusterName;
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName: string;
  public get databaseName() {
    return this._databaseName;
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }

  // email - computed: true, optional: false, required: true
  public get email() {
    return this.getStringAttribute('email');
  }

  // fully_qualified_name - computed: true, optional: false, required: true
  public get fullyQualifiedName() {
    return this.getStringAttribute('fully_qualified_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
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

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this._role;
  }
  public set role(value: string) {
    this._role = value;
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KustoDatabasePrincipalTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: KustoDatabasePrincipalTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: this._clientId,
      cluster_name: this._clusterName,
      database_name: this._databaseName,
      object_id: this._objectId,
      resource_group_name: this._resourceGroupName,
      role: this._role,
      type: this._type,
      timeouts: this._timeouts,
    };
  }
}
