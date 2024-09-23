// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_center_project_environment_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevCenterProjectEnvironmentTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_center_project_environment_type#creator_role_assignment_roles DevCenterProjectEnvironmentType#creator_role_assignment_roles}
  */
  readonly creatorRoleAssignmentRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_center_project_environment_type#deployment_target_id DevCenterProjectEnvironmentType#deployment_target_id}
  */
  readonly deploymentTargetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_center_project_environment_type#dev_center_project_id DevCenterProjectEnvironmentType#dev_center_project_id}
  */
  readonly devCenterProjectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_center_project_environment_type#id DevCenterProjectEnvironmentType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_center_project_environment_type#location DevCenterProjectEnvironmentType#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_center_project_environment_type#name DevCenterProjectEnvironmentType#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_center_project_environment_type#tags DevCenterProjectEnvironmentType#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_center_project_environment_type#identity DevCenterProjectEnvironmentType#identity}
  */
  readonly identity: DevCenterProjectEnvironmentTypeIdentity;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_center_project_environment_type#timeouts DevCenterProjectEnvironmentType#timeouts}
  */
  readonly timeouts?: DevCenterProjectEnvironmentTypeTimeouts;
  /**
  * user_role_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_center_project_environment_type#user_role_assignment DevCenterProjectEnvironmentType#user_role_assignment}
  */
  readonly userRoleAssignment?: DevCenterProjectEnvironmentTypeUserRoleAssignment[] | cdktf.IResolvable;
}
export interface DevCenterProjectEnvironmentTypeIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_center_project_environment_type#identity_ids DevCenterProjectEnvironmentType#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_center_project_environment_type#type DevCenterProjectEnvironmentType#type}
  */
  readonly type: string;
}

export function devCenterProjectEnvironmentTypeIdentityToTerraform(struct?: DevCenterProjectEnvironmentTypeIdentityOutputReference | DevCenterProjectEnvironmentTypeIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function devCenterProjectEnvironmentTypeIdentityToHclTerraform(struct?: DevCenterProjectEnvironmentTypeIdentityOutputReference | DevCenterProjectEnvironmentTypeIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevCenterProjectEnvironmentTypeIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevCenterProjectEnvironmentTypeIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevCenterProjectEnvironmentTypeIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DevCenterProjectEnvironmentTypeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_center_project_environment_type#create DevCenterProjectEnvironmentType#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_center_project_environment_type#delete DevCenterProjectEnvironmentType#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_center_project_environment_type#read DevCenterProjectEnvironmentType#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_center_project_environment_type#update DevCenterProjectEnvironmentType#update}
  */
  readonly update?: string;
}

export function devCenterProjectEnvironmentTypeTimeoutsToTerraform(struct?: DevCenterProjectEnvironmentTypeTimeouts | cdktf.IResolvable): any {
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


export function devCenterProjectEnvironmentTypeTimeoutsToHclTerraform(struct?: DevCenterProjectEnvironmentTypeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevCenterProjectEnvironmentTypeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevCenterProjectEnvironmentTypeTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DevCenterProjectEnvironmentTypeTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
export interface DevCenterProjectEnvironmentTypeUserRoleAssignment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_center_project_environment_type#roles DevCenterProjectEnvironmentType#roles}
  */
  readonly roles: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_center_project_environment_type#user_id DevCenterProjectEnvironmentType#user_id}
  */
  readonly userId: string;
}

export function devCenterProjectEnvironmentTypeUserRoleAssignmentToTerraform(struct?: DevCenterProjectEnvironmentTypeUserRoleAssignment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function devCenterProjectEnvironmentTypeUserRoleAssignmentToHclTerraform(struct?: DevCenterProjectEnvironmentTypeUserRoleAssignment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DevCenterProjectEnvironmentTypeUserRoleAssignment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevCenterProjectEnvironmentTypeUserRoleAssignment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roles = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roles = value.roles;
      this._userId = value.userId;
    }
  }

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class DevCenterProjectEnvironmentTypeUserRoleAssignmentList extends cdktf.ComplexList {
  public internalValue? : DevCenterProjectEnvironmentTypeUserRoleAssignment[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference {
    return new DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_center_project_environment_type azurerm_dev_center_project_environment_type}
*/
export class DevCenterProjectEnvironmentType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_dev_center_project_environment_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DevCenterProjectEnvironmentType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevCenterProjectEnvironmentType to import
  * @param importFromId The id of the existing DevCenterProjectEnvironmentType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_center_project_environment_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevCenterProjectEnvironmentType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_dev_center_project_environment_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_center_project_environment_type azurerm_dev_center_project_environment_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevCenterProjectEnvironmentTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DevCenterProjectEnvironmentTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dev_center_project_environment_type',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._creatorRoleAssignmentRoles = config.creatorRoleAssignmentRoles;
    this._deploymentTargetId = config.deploymentTargetId;
    this._devCenterProjectId = config.devCenterProjectId;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._tags = config.tags;
    this._identity.internalValue = config.identity;
    this._timeouts.internalValue = config.timeouts;
    this._userRoleAssignment.internalValue = config.userRoleAssignment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creator_role_assignment_roles - computed: false, optional: true, required: false
  private _creatorRoleAssignmentRoles?: string[]; 
  public get creatorRoleAssignmentRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('creator_role_assignment_roles'));
  }
  public set creatorRoleAssignmentRoles(value: string[]) {
    this._creatorRoleAssignmentRoles = value;
  }
  public resetCreatorRoleAssignmentRoles() {
    this._creatorRoleAssignmentRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorRoleAssignmentRolesInput() {
    return this._creatorRoleAssignmentRoles;
  }

  // deployment_target_id - computed: false, optional: false, required: true
  private _deploymentTargetId?: string; 
  public get deploymentTargetId() {
    return this.getStringAttribute('deployment_target_id');
  }
  public set deploymentTargetId(value: string) {
    this._deploymentTargetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTargetIdInput() {
    return this._deploymentTargetId;
  }

  // dev_center_project_id - computed: false, optional: false, required: true
  private _devCenterProjectId?: string; 
  public get devCenterProjectId() {
    return this.getStringAttribute('dev_center_project_id');
  }
  public set devCenterProjectId(value: string) {
    this._devCenterProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devCenterProjectIdInput() {
    return this._devCenterProjectId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // identity - computed: false, optional: false, required: true
  private _identity = new DevCenterProjectEnvironmentTypeIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: DevCenterProjectEnvironmentTypeIdentity) {
    this._identity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DevCenterProjectEnvironmentTypeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DevCenterProjectEnvironmentTypeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user_role_assignment - computed: false, optional: true, required: false
  private _userRoleAssignment = new DevCenterProjectEnvironmentTypeUserRoleAssignmentList(this, "user_role_assignment", true);
  public get userRoleAssignment() {
    return this._userRoleAssignment;
  }
  public putUserRoleAssignment(value: DevCenterProjectEnvironmentTypeUserRoleAssignment[] | cdktf.IResolvable) {
    this._userRoleAssignment.internalValue = value;
  }
  public resetUserRoleAssignment() {
    this._userRoleAssignment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRoleAssignmentInput() {
    return this._userRoleAssignment.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      creator_role_assignment_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._creatorRoleAssignmentRoles),
      deployment_target_id: cdktf.stringToTerraform(this._deploymentTargetId),
      dev_center_project_id: cdktf.stringToTerraform(this._devCenterProjectId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      identity: devCenterProjectEnvironmentTypeIdentityToTerraform(this._identity.internalValue),
      timeouts: devCenterProjectEnvironmentTypeTimeoutsToTerraform(this._timeouts.internalValue),
      user_role_assignment: cdktf.listMapper(devCenterProjectEnvironmentTypeUserRoleAssignmentToTerraform, true)(this._userRoleAssignment.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      creator_role_assignment_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._creatorRoleAssignmentRoles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      deployment_target_id: {
        value: cdktf.stringToHclTerraform(this._deploymentTargetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dev_center_project_id: {
        value: cdktf.stringToHclTerraform(this._devCenterProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      identity: {
        value: devCenterProjectEnvironmentTypeIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevCenterProjectEnvironmentTypeIdentityList",
      },
      timeouts: {
        value: devCenterProjectEnvironmentTypeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DevCenterProjectEnvironmentTypeTimeouts",
      },
      user_role_assignment: {
        value: cdktf.listMapperHcl(devCenterProjectEnvironmentTypeUserRoleAssignmentToHclTerraform, true)(this._userRoleAssignment.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DevCenterProjectEnvironmentTypeUserRoleAssignmentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
