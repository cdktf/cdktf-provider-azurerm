// https://www.terraform.io/docs/providers/azurerm/r/role_assignment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RoleAssignmentConfig extends TerraformMetaArguments {
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

// Resource

export class RoleAssignment extends TerraformResource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // principal_id - computed: false, optional: false, required: true
  private _principalId: string;
  public get principalId() {
    return this._principalId;
  }
  public set principalId(value: string) {
    this._principalId = value;
  }

  // principal_type - computed: true, optional: false, required: true
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }

  // role_definition_id - computed: true, optional: true, required: false
  private _roleDefinitionId?: string;
  public get roleDefinitionId() {
    return this._roleDefinitionId ?? this.getStringAttribute('role_definition_id');
  }
  public set roleDefinitionId(value: string | undefined) {
    this._roleDefinitionId = value;
  }

  // role_definition_name - computed: true, optional: true, required: false
  private _roleDefinitionName?: string;
  public get roleDefinitionName() {
    return this._roleDefinitionName ?? this.getStringAttribute('role_definition_name');
  }
  public set roleDefinitionName(value: string | undefined) {
    this._roleDefinitionName = value;
  }

  // scope - computed: false, optional: false, required: true
  private _scope: string;
  public get scope() {
    return this._scope;
  }
  public set scope(value: string) {
    this._scope = value;
  }

  // skip_service_principal_aad_check - computed: true, optional: true, required: false
  private _skipServicePrincipalAadCheck?: boolean;
  public get skipServicePrincipalAadCheck() {
    return this._skipServicePrincipalAadCheck ?? this.getBooleanAttribute('skip_service_principal_aad_check');
  }
  public set skipServicePrincipalAadCheck(value: boolean | undefined) {
    this._skipServicePrincipalAadCheck = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RoleAssignmentTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: RoleAssignmentTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      principal_id: this._principalId,
      role_definition_id: this._roleDefinitionId,
      role_definition_name: this._roleDefinitionName,
      scope: this._scope,
      skip_service_principal_aad_check: this._skipServicePrincipalAadCheck,
      timeouts: this._timeouts,
    };
  }
}
