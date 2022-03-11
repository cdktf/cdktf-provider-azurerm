// https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_role_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosmosdbSqlRoleDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_role_definition#account_name CosmosdbSqlRoleDefinition#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_role_definition#assignable_scopes CosmosdbSqlRoleDefinition#assignable_scopes}
  */
  readonly assignableScopes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_role_definition#name CosmosdbSqlRoleDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_role_definition#resource_group_name CosmosdbSqlRoleDefinition#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_role_definition#role_definition_id CosmosdbSqlRoleDefinition#role_definition_id}
  */
  readonly roleDefinitionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_role_definition#type CosmosdbSqlRoleDefinition#type}
  */
  readonly type?: string;
  /**
  * permissions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_role_definition#permissions CosmosdbSqlRoleDefinition#permissions}
  */
  readonly permissions: CosmosdbSqlRoleDefinitionPermissions[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_role_definition#timeouts CosmosdbSqlRoleDefinition#timeouts}
  */
  readonly timeouts?: CosmosdbSqlRoleDefinitionTimeouts;
}
export interface CosmosdbSqlRoleDefinitionPermissions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_role_definition#data_actions CosmosdbSqlRoleDefinition#data_actions}
  */
  readonly dataActions: string[];
}

export function cosmosdbSqlRoleDefinitionPermissionsToTerraform(struct?: CosmosdbSqlRoleDefinitionPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dataActions),
  }
}

export interface CosmosdbSqlRoleDefinitionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_role_definition#create CosmosdbSqlRoleDefinition#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_role_definition#delete CosmosdbSqlRoleDefinition#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_role_definition#read CosmosdbSqlRoleDefinition#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_role_definition#update CosmosdbSqlRoleDefinition#update}
  */
  readonly update?: string;
}

export function cosmosdbSqlRoleDefinitionTimeoutsToTerraform(struct?: CosmosdbSqlRoleDefinitionTimeoutsOutputReference | CosmosdbSqlRoleDefinitionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class CosmosdbSqlRoleDefinitionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CosmosdbSqlRoleDefinitionTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbSqlRoleDefinitionTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_role_definition azurerm_cosmosdb_sql_role_definition}
*/
export class CosmosdbSqlRoleDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_cosmosdb_sql_role_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_sql_role_definition azurerm_cosmosdb_sql_role_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CosmosdbSqlRoleDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: CosmosdbSqlRoleDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cosmosdb_sql_role_definition',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountName = config.accountName;
    this._assignableScopes = config.assignableScopes;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._roleDefinitionId = config.roleDefinitionId;
    this._type = config.type;
    this._permissions = config.permissions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // assignable_scopes - computed: false, optional: false, required: true
  private _assignableScopes?: string[]; 
  public get assignableScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('assignable_scopes'));
  }
  public set assignableScopes(value: string[]) {
    this._assignableScopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignableScopesInput() {
    return this._assignableScopes;
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
    return this._name;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
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
    return this._roleDefinitionId;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions?: CosmosdbSqlRoleDefinitionPermissions[] | cdktf.IResolvable; 
  public get permissions() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('permissions')));
  }
  public set permissions(value: CosmosdbSqlRoleDefinitionPermissions[] | cdktf.IResolvable) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CosmosdbSqlRoleDefinitionTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CosmosdbSqlRoleDefinitionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      assignable_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._assignableScopes),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      role_definition_id: cdktf.stringToTerraform(this._roleDefinitionId),
      type: cdktf.stringToTerraform(this._type),
      permissions: cdktf.listMapper(cosmosdbSqlRoleDefinitionPermissionsToTerraform)(this._permissions),
      timeouts: cosmosdbSqlRoleDefinitionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
