// https://www.terraform.io/docs/providers/azurerm/d/role_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermRoleDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/role_definition.html#name DataAzurermRoleDefinition#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/role_definition.html#role_definition_id DataAzurermRoleDefinition#role_definition_id}
  */
  readonly roleDefinitionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/role_definition.html#scope DataAzurermRoleDefinition#scope}
  */
  readonly scope?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/role_definition.html#timeouts DataAzurermRoleDefinition#timeouts}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/role_definition.html#read DataAzurermRoleDefinition#read}
  */
  readonly read?: string;
}

function dataAzurermRoleDefinitionTimeoutsToTerraform(struct?: DataAzurermRoleDefinitionTimeoutsOutputReference | DataAzurermRoleDefinitionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermRoleDefinitionTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/role_definition.html azurerm_role_definition}
*/
export class DataAzurermRoleDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_role_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/role_definition.html azurerm_role_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermRoleDefinitionConfig = {}
  */
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
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
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
  private _roleDefinitionId?: string | undefined; 
  public get roleDefinitionId() {
    return this.getStringAttribute('role_definition_id');
  }
  public set roleDefinitionId(value: string | undefined) {
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
  private _scope?: string | undefined; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string | undefined) {
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
  private _timeouts?: DataAzurermRoleDefinitionTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermRoleDefinitionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermRoleDefinitionTimeouts | undefined) {
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
