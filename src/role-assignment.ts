// https://www.terraform.io/docs/providers/azurerm/r/role_assignment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleAssignmentConfig extends cdktf.TerraformMetaArguments {
  readonly name?: string;
  readonly principalId: string;
  readonly roleDefinitionId?: string;
  readonly roleDefinitionName?: string;
  readonly scope: string;
  readonly skipServicePrincipalAadCheck?: boolean;
  /** timeouts block */
  readonly timeouts?: RoleAssignmentTimeouts;
}
export interface RoleAssignmentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function roleAssignmentTimeoutsToTerraform(struct?: RoleAssignmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class RoleAssignment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RoleAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_role_assignment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._principalId = config.principalId;
    this._roleDefinitionId = config.roleDefinitionId;
    this._roleDefinitionName = config.roleDefinitionName;
    this._scope = config.scope;
    this._skipServicePrincipalAadCheck = config.skipServicePrincipalAadCheck;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // principal_type - computed: true, optional: false, required: false
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }

  // role_definition_id - computed: true, optional: true, required: false
  private _roleDefinitionId?: string;
  public get roleDefinitionId() {
    return this.getStringAttribute('role_definition_id');
  }
  public set roleDefinitionId(value: string) {
    this._roleDefinitionId = value;
  }
  public resetRoleDefinitionId() {
    this._roleDefinitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleDefinitionIdInput() {
    return this._roleDefinitionId
  }

  // role_definition_name - computed: true, optional: true, required: false
  private _roleDefinitionName?: string;
  public get roleDefinitionName() {
    return this.getStringAttribute('role_definition_name');
  }
  public set roleDefinitionName(value: string) {
    this._roleDefinitionName = value;
  }
  public resetRoleDefinitionName() {
    this._roleDefinitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleDefinitionNameInput() {
    return this._roleDefinitionName
  }

  // scope - computed: false, optional: false, required: true
  private _scope: string;
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
  }

  // skip_service_principal_aad_check - computed: true, optional: true, required: false
  private _skipServicePrincipalAadCheck?: boolean;
  public get skipServicePrincipalAadCheck() {
    return this.getBooleanAttribute('skip_service_principal_aad_check');
  }
  public set skipServicePrincipalAadCheck(value: boolean) {
    this._skipServicePrincipalAadCheck = value;
  }
  public resetSkipServicePrincipalAadCheck() {
    this._skipServicePrincipalAadCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipServicePrincipalAadCheckInput() {
    return this._skipServicePrincipalAadCheck
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RoleAssignmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: RoleAssignmentTimeouts ) {
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
      principal_id: cdktf.stringToTerraform(this._principalId),
      role_definition_id: cdktf.stringToTerraform(this._roleDefinitionId),
      role_definition_name: cdktf.stringToTerraform(this._roleDefinitionName),
      scope: cdktf.stringToTerraform(this._scope),
      skip_service_principal_aad_check: cdktf.booleanToTerraform(this._skipServicePrincipalAadCheck),
      timeouts: roleAssignmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
