// https://www.terraform.io/docs/providers/azurerm/r/kusto_database_principal.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KustoDatabasePrincipalConfig extends cdktf.TerraformMetaArguments {
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

function kustoDatabasePrincipalTimeoutsToTerraform(struct?: KustoDatabasePrincipalTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class KustoDatabasePrincipal extends cdktf.TerraformResource {

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

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId: string;
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName: string;
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName
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

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // fully_qualified_name - computed: true, optional: false, required: false
  public get fullyQualifiedName() {
    return this.getStringAttribute('fully_qualified_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KustoDatabasePrincipalTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: KustoDatabasePrincipalTimeouts ) {
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
      client_id: cdktf.stringToTerraform(this._clientId),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      database_name: cdktf.stringToTerraform(this._databaseName),
      object_id: cdktf.stringToTerraform(this._objectId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      role: cdktf.stringToTerraform(this._role),
      type: cdktf.stringToTerraform(this._type),
      timeouts: kustoDatabasePrincipalTimeoutsToTerraform(this._timeouts),
    };
  }
}
