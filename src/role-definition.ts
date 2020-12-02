// https://www.terraform.io/docs/providers/azurerm/r/role_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RoleDefinitionConfig extends TerraformMetaArguments {
  readonly assignableScopes?: string[];
  readonly description?: string;
  readonly name: string;
  readonly roleDefinitionId?: string;
  readonly scope: string;
  /** permissions block */
  readonly permissions: RoleDefinitionPermissions[];
  /** timeouts block */
  readonly timeouts?: RoleDefinitionTimeouts;
}
export interface RoleDefinitionPermissions {
  readonly actions?: string[];
  readonly dataActions?: string[];
  readonly notActions?: string[];
  readonly notDataActions?: string[];
}
export interface RoleDefinitionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class RoleDefinition extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RoleDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_role_definition',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._assignableScopes = config.assignableScopes;
    this._description = config.description;
    this._name = config.name;
    this._roleDefinitionId = config.roleDefinitionId;
    this._scope = config.scope;
    this._permissions = config.permissions;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignable_scopes - computed: true, optional: true, required: false
  private _assignableScopes?: string[];
  public get assignableScopes() {
    return this.getListAttribute('assignable_scopes');
  }
  public set assignableScopes(value: string[]) {
    this._assignableScopes = value;
  }
  public resetAssignableScopes() {
    this._assignableScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignableScopesInput() {
    return this._assignableScopes
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
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

  // role_definition_resource_id - computed: true, optional: false, required: false
  public get roleDefinitionResourceId() {
    return this.getStringAttribute('role_definition_resource_id');
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

  // permissions - computed: false, optional: false, required: true
  private _permissions: RoleDefinitionPermissions[];
  public get permissions() {
    return this.interpolationForAttribute('permissions') as any;
  }
  public set permissions(value: RoleDefinitionPermissions[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RoleDefinitionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: RoleDefinitionTimeouts ) {
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
      assignable_scopes: this._assignableScopes,
      description: this._description,
      name: this._name,
      role_definition_id: this._roleDefinitionId,
      scope: this._scope,
      permissions: this._permissions,
      timeouts: this._timeouts,
    };
  }
}
