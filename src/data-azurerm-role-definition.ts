// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_role_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAzurermRoleDefinitionConfig extends TerraformMetaArguments {
  readonly name?: string;
  readonly roleDefinitionId?: string;
  readonly scope?: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermRoleDefinitionTimeouts;
}
export class DataAzurermRoleDefinitionPermissions extends ComplexComputedList {

  // actions - computed: true, optional: false, required: true
  public get actions() {
    return this.getListAttribute('actions');
  }

  // data_actions - computed: true, optional: false, required: true
  public get dataActions() {
    return this.getListAttribute('data_actions');
  }

  // not_actions - computed: true, optional: false, required: true
  public get notActions() {
    return this.getListAttribute('not_actions');
  }

  // not_data_actions - computed: true, optional: false, required: true
  public get notDataActions() {
    return this.getListAttribute('not_data_actions');
  }
}
export interface DataAzurermRoleDefinitionTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermRoleDefinition extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermRoleDefinitionConfig = {}) {
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
    this._name = config.name;
    this._roleDefinitionId = config.roleDefinitionId;
    this._scope = config.scope;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignable_scopes - computed: true, optional: false, required: true
  public get assignableScopes() {
    return this.getListAttribute('assignable_scopes');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

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

  // permissions - computed: true, optional: false, required: true
  public permissions(index: string) {
    return new DataAzurermRoleDefinitionPermissions(this, 'permissions', index);
  }

  // role_definition_id - computed: true, optional: true, required: false
  private _roleDefinitionId?: string;
  public get roleDefinitionId() {
    return this._roleDefinitionId ?? this.getStringAttribute('role_definition_id');
  }
  public set roleDefinitionId(value: string | undefined) {
    this._roleDefinitionId = value;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string;
  public get scope() {
    return this._scope;
  }
  public set scope(value: string | undefined) {
    this._scope = value;
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermRoleDefinitionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermRoleDefinitionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      role_definition_id: this._roleDefinitionId,
      scope: this._scope,
      timeouts: this._timeouts,
    };
  }
}
