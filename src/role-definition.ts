// https://www.terraform.io/docs/providers/azurerm/r/role_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RoleDefinitionConfig extends TerraformMetaArguments {
  readonly assignableScopes: string[];
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

  // assignable_scopes - computed: false, optional: false, required: true
  private _assignableScopes: string[];
  public get assignableScopes() {
    return this._assignableScopes;
  }
  public set assignableScopes(value: string[]) {
    this._assignableScopes = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // role_definition_id - computed: true, optional: true, required: false
  private _roleDefinitionId?: string;
  public get roleDefinitionId() {
    return this._roleDefinitionId ?? this.getStringAttribute('role_definition_id');
  }
  public set roleDefinitionId(value: string | undefined) {
    this._roleDefinitionId = value;
  }

  // scope - computed: false, optional: false, required: true
  private _scope: string;
  public get scope() {
    return this._scope;
  }
  public set scope(value: string) {
    this._scope = value;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions: RoleDefinitionPermissions[];
  public get permissions() {
    return this._permissions;
  }
  public set permissions(value: RoleDefinitionPermissions[]) {
    this._permissions = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RoleDefinitionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: RoleDefinitionTimeouts | undefined) {
    this._timeouts = value;
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
