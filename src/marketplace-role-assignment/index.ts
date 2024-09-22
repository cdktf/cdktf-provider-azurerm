// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/marketplace_role_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MarketplaceRoleAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/marketplace_role_assignment#condition MarketplaceRoleAssignment#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/marketplace_role_assignment#condition_version MarketplaceRoleAssignment#condition_version}
  */
  readonly conditionVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/marketplace_role_assignment#delegated_managed_identity_resource_id MarketplaceRoleAssignment#delegated_managed_identity_resource_id}
  */
  readonly delegatedManagedIdentityResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/marketplace_role_assignment#description MarketplaceRoleAssignment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/marketplace_role_assignment#id MarketplaceRoleAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/marketplace_role_assignment#name MarketplaceRoleAssignment#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/marketplace_role_assignment#principal_id MarketplaceRoleAssignment#principal_id}
  */
  readonly principalId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/marketplace_role_assignment#role_definition_id MarketplaceRoleAssignment#role_definition_id}
  */
  readonly roleDefinitionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/marketplace_role_assignment#role_definition_name MarketplaceRoleAssignment#role_definition_name}
  */
  readonly roleDefinitionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/marketplace_role_assignment#skip_service_principal_aad_check MarketplaceRoleAssignment#skip_service_principal_aad_check}
  */
  readonly skipServicePrincipalAadCheck?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/marketplace_role_assignment#timeouts MarketplaceRoleAssignment#timeouts}
  */
  readonly timeouts?: MarketplaceRoleAssignmentTimeouts;
}
export interface MarketplaceRoleAssignmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/marketplace_role_assignment#create MarketplaceRoleAssignment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/marketplace_role_assignment#delete MarketplaceRoleAssignment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/marketplace_role_assignment#read MarketplaceRoleAssignment#read}
  */
  readonly read?: string;
}

export function marketplaceRoleAssignmentTimeoutsToTerraform(struct?: MarketplaceRoleAssignmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function marketplaceRoleAssignmentTimeoutsToHclTerraform(struct?: MarketplaceRoleAssignmentTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MarketplaceRoleAssignmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MarketplaceRoleAssignmentTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MarketplaceRoleAssignmentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/marketplace_role_assignment azurerm_marketplace_role_assignment}
*/
export class MarketplaceRoleAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_marketplace_role_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MarketplaceRoleAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MarketplaceRoleAssignment to import
  * @param importFromId The id of the existing MarketplaceRoleAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/marketplace_role_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MarketplaceRoleAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_marketplace_role_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/marketplace_role_assignment azurerm_marketplace_role_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MarketplaceRoleAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: MarketplaceRoleAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_marketplace_role_assignment',
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
    this._condition = config.condition;
    this._conditionVersion = config.conditionVersion;
    this._delegatedManagedIdentityResourceId = config.delegatedManagedIdentityResourceId;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._principalId = config.principalId;
    this._roleDefinitionId = config.roleDefinitionId;
    this._roleDefinitionName = config.roleDefinitionName;
    this._skipServicePrincipalAadCheck = config.skipServicePrincipalAadCheck;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // condition_version - computed: false, optional: true, required: false
  private _conditionVersion?: string; 
  public get conditionVersion() {
    return this.getStringAttribute('condition_version');
  }
  public set conditionVersion(value: string) {
    this._conditionVersion = value;
  }
  public resetConditionVersion() {
    this._conditionVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionVersionInput() {
    return this._conditionVersion;
  }

  // delegated_managed_identity_resource_id - computed: false, optional: true, required: false
  private _delegatedManagedIdentityResourceId?: string; 
  public get delegatedManagedIdentityResourceId() {
    return this.getStringAttribute('delegated_managed_identity_resource_id');
  }
  public set delegatedManagedIdentityResourceId(value: string) {
    this._delegatedManagedIdentityResourceId = value;
  }
  public resetDelegatedManagedIdentityResourceId() {
    this._delegatedManagedIdentityResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedManagedIdentityResourceIdInput() {
    return this._delegatedManagedIdentityResourceId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // name - computed: false, optional: true, required: false
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
    return this._name;
  }

  // principal_id - computed: false, optional: false, required: true
  private _principalId?: string; 
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // principal_type - computed: true, optional: false, required: false
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }

  // role_definition_id - computed: false, optional: true, required: false
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

  // role_definition_name - computed: false, optional: true, required: false
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
    return this._roleDefinitionName;
  }

  // skip_service_principal_aad_check - computed: false, optional: true, required: false
  private _skipServicePrincipalAadCheck?: boolean | cdktf.IResolvable; 
  public get skipServicePrincipalAadCheck() {
    return this.getBooleanAttribute('skip_service_principal_aad_check');
  }
  public set skipServicePrincipalAadCheck(value: boolean | cdktf.IResolvable) {
    this._skipServicePrincipalAadCheck = value;
  }
  public resetSkipServicePrincipalAadCheck() {
    this._skipServicePrincipalAadCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipServicePrincipalAadCheckInput() {
    return this._skipServicePrincipalAadCheck;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MarketplaceRoleAssignmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MarketplaceRoleAssignmentTimeouts) {
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
      condition: cdktf.stringToTerraform(this._condition),
      condition_version: cdktf.stringToTerraform(this._conditionVersion),
      delegated_managed_identity_resource_id: cdktf.stringToTerraform(this._delegatedManagedIdentityResourceId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      principal_id: cdktf.stringToTerraform(this._principalId),
      role_definition_id: cdktf.stringToTerraform(this._roleDefinitionId),
      role_definition_name: cdktf.stringToTerraform(this._roleDefinitionName),
      skip_service_principal_aad_check: cdktf.booleanToTerraform(this._skipServicePrincipalAadCheck),
      timeouts: marketplaceRoleAssignmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      condition: {
        value: cdktf.stringToHclTerraform(this._condition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition_version: {
        value: cdktf.stringToHclTerraform(this._conditionVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delegated_managed_identity_resource_id: {
        value: cdktf.stringToHclTerraform(this._delegatedManagedIdentityResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal_id: {
        value: cdktf.stringToHclTerraform(this._principalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_definition_id: {
        value: cdktf.stringToHclTerraform(this._roleDefinitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_definition_name: {
        value: cdktf.stringToHclTerraform(this._roleDefinitionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_service_principal_aad_check: {
        value: cdktf.booleanToHclTerraform(this._skipServicePrincipalAadCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: marketplaceRoleAssignmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MarketplaceRoleAssignmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
