// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_role_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermRoleDefinitionConfig extends cdktf.TerraformMetaArguments {
  readonly name?: string;
  readonly roleDefinitionId?: string;
  readonly scope?: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermRoleDefinitionTimeouts;
}
export class DataAzurermRoleDefinitionPermissions extends cdktf.ComplexComputedList {

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

  // data_actions - computed: true, optional: false, required: false
  public get dataActions() {
    return this.getListAttribute('data_actions');
  }

  // not_actions - computed: true, optional: false, required: false
  public get notActions() {
    return this.getListAttribute('not_actions');
  }

  // not_data_actions - computed: true, optional: false, required: false
  public get notDataActions() {
    return this.getListAttribute('not_data_actions');
  }
}
export interface DataAzurermRoleDefinitionTimeouts {
  readonly read?: string;
}

function dataAzurermRoleDefinitionTimeoutsToTerraform(struct?: DataAzurermRoleDefinitionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermRoleDefinition extends cdktf.TerraformDataSource {

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

  // assignable_scopes - computed: true, optional: false, required: false
  public get assignableScopes() {
    return this.getListAttribute('assignable_scopes');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

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

  // permissions - computed: true, optional: false, required: false
  public permissions(index: string) {
    return new DataAzurermRoleDefinitionPermissions(this, 'permissions', index);
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string;
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string ) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermRoleDefinitionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermRoleDefinitionTimeouts ) {
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
      role_definition_id: cdktf.stringToTerraform(this._roleDefinitionId),
      scope: cdktf.stringToTerraform(this._scope),
      timeouts: dataAzurermRoleDefinitionTimeoutsToTerraform(this._timeouts),
    };
  }
}
