// https://www.terraform.io/docs/providers/azurerm/r/role_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_definition.html#assignable_scopes RoleDefinition#assignable_scopes}
  */
  readonly assignableScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_definition.html#description RoleDefinition#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_definition.html#name RoleDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_definition.html#role_definition_id RoleDefinition#role_definition_id}
  */
  readonly roleDefinitionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_definition.html#scope RoleDefinition#scope}
  */
  readonly scope: string;
  /**
  * permissions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_definition.html#permissions RoleDefinition#permissions}
  */
  readonly permissions?: RoleDefinitionPermissions[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_definition.html#timeouts RoleDefinition#timeouts}
  */
  readonly timeouts?: RoleDefinitionTimeouts;
}
export interface RoleDefinitionPermissions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_definition.html#actions RoleDefinition#actions}
  */
  readonly actions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_definition.html#data_actions RoleDefinition#data_actions}
  */
  readonly dataActions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_definition.html#not_actions RoleDefinition#not_actions}
  */
  readonly notActions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_definition.html#not_data_actions RoleDefinition#not_data_actions}
  */
  readonly notDataActions?: string[];
}

function roleDefinitionPermissionsToTerraform(struct?: RoleDefinitionPermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
    data_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dataActions),
    not_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.notActions),
    not_data_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.notDataActions),
  }
}

export interface RoleDefinitionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_definition.html#create RoleDefinition#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_definition.html#delete RoleDefinition#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_definition.html#read RoleDefinition#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_definition.html#update RoleDefinition#update}
  */
  readonly update?: string;
}

function roleDefinitionTimeoutsToTerraform(struct?: RoleDefinitionTimeoutsOutputReference | RoleDefinitionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class RoleDefinitionTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
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

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/role_definition.html azurerm_role_definition}
*/
export class RoleDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_role_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/role_definition.html azurerm_role_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleDefinitionConfig
  */
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
  private _assignableScopes?: string[] | undefined; 
  public get assignableScopes() {
    return this.getListAttribute('assignable_scopes');
  }
  public set assignableScopes(value: string[] | undefined) {
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
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
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
  private _name?: string; 
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

  // role_definition_resource_id - computed: true, optional: false, required: false
  public get roleDefinitionResourceId() {
    return this.getStringAttribute('role_definition_resource_id');
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
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

  // permissions - computed: false, optional: true, required: false
  private _permissions?: RoleDefinitionPermissions[] | undefined; 
  public get permissions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('permissions') as any;
  }
  public set permissions(value: RoleDefinitionPermissions[] | undefined) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RoleDefinitionTimeouts | undefined; 
  private __timeoutsOutput = new RoleDefinitionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: RoleDefinitionTimeouts | undefined) {
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
      assignable_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._assignableScopes),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      role_definition_id: cdktf.stringToTerraform(this._roleDefinitionId),
      scope: cdktf.stringToTerraform(this._scope),
      permissions: cdktf.listMapper(roleDefinitionPermissionsToTerraform)(this._permissions),
      timeouts: roleDefinitionTimeoutsToTerraform(this._timeouts),
    };
  }
}
