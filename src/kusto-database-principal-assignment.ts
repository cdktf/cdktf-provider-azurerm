// https://www.terraform.io/docs/providers/azurerm/r/kusto_database_principal_assignment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KustoDatabasePrincipalAssignmentConfig extends cdktf.TerraformMetaArguments {
  readonly clusterName: string;
  readonly databaseName: string;
  readonly name: string;
  readonly principalId: string;
  readonly principalType: string;
  readonly resourceGroupName: string;
  readonly role: string;
  readonly tenantId: string;
  /** timeouts block */
  readonly timeouts?: KustoDatabasePrincipalAssignmentTimeouts;
}
export interface KustoDatabasePrincipalAssignmentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
}

function kustoDatabasePrincipalAssignmentTimeoutsToTerraform(struct?: KustoDatabasePrincipalAssignmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class KustoDatabasePrincipalAssignment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KustoDatabasePrincipalAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kusto_database_principal_assignment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterName = config.clusterName;
    this._databaseName = config.databaseName;
    this._name = config.name;
    this._principalId = config.principalId;
    this._principalType = config.principalType;
    this._resourceGroupName = config.resourceGroupName;
    this._role = config.role;
    this._tenantId = config.tenantId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // principal_id - computed: false, optional: false, required: true
  private _principalId: string;
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId
  }

  // principal_name - computed: true, optional: false, required: false
  public get principalName() {
    return this.getStringAttribute('principal_name');
  }

  // principal_type - computed: false, optional: false, required: true
  private _principalType: string;
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType
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

  // tenant_name - computed: true, optional: false, required: false
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KustoDatabasePrincipalAssignmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: KustoDatabasePrincipalAssignmentTimeouts ) {
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
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      database_name: cdktf.stringToTerraform(this._databaseName),
      name: cdktf.stringToTerraform(this._name),
      principal_id: cdktf.stringToTerraform(this._principalId),
      principal_type: cdktf.stringToTerraform(this._principalType),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      role: cdktf.stringToTerraform(this._role),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timeouts: kustoDatabasePrincipalAssignmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
