// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleManagementPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#id RoleManagementPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the Azure Role to which this policy is assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#role_definition_id RoleManagementPolicy#role_definition_id}
  */
  readonly roleDefinitionId: string;
  /**
  * The scope of the role to which this policy will apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#scope RoleManagementPolicy#scope}
  */
  readonly scope: string;
  /**
  * activation_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#activation_rules RoleManagementPolicy#activation_rules}
  */
  readonly activationRules?: RoleManagementPolicyActivationRules;
  /**
  * active_assignment_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#active_assignment_rules RoleManagementPolicy#active_assignment_rules}
  */
  readonly activeAssignmentRules?: RoleManagementPolicyActiveAssignmentRules;
  /**
  * eligible_assignment_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#eligible_assignment_rules RoleManagementPolicy#eligible_assignment_rules}
  */
  readonly eligibleAssignmentRules?: RoleManagementPolicyEligibleAssignmentRules;
  /**
  * notification_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#notification_rules RoleManagementPolicy#notification_rules}
  */
  readonly notificationRules?: RoleManagementPolicyNotificationRules;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#timeouts RoleManagementPolicy#timeouts}
  */
  readonly timeouts?: RoleManagementPolicyTimeouts;
}
export interface RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover {
  /**
  * The ID of the object to act as an approver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#object_id RoleManagementPolicy#object_id}
  */
  readonly objectId: string;
  /**
  * The type of object acting as an approver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#type RoleManagementPolicy#type}
  */
  readonly type: string;
}

export function roleManagementPolicyActivationRulesApprovalStagePrimaryApproverToTerraform(struct?: RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id: cdktf.stringToTerraform(struct!.objectId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function roleManagementPolicyActivationRulesApprovalStagePrimaryApproverToHclTerraform(struct?: RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_id: {
      value: cdktf.stringToHclTerraform(struct!.objectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectId = value.objectId;
      this._type = value.type;
    }
  }

  // object_id - computed: false, optional: false, required: true
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
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

export class RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList extends cdktf.ComplexList {
  public internalValue? : RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover[] | cdktf.IResolvable

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
  public get(index: number): RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference {
    return new RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoleManagementPolicyActivationRulesApprovalStage {
  /**
  * primary_approver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#primary_approver RoleManagementPolicy#primary_approver}
  */
  readonly primaryApprover: RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover[] | cdktf.IResolvable;
}

export function roleManagementPolicyActivationRulesApprovalStageToTerraform(struct?: RoleManagementPolicyActivationRulesApprovalStageOutputReference | RoleManagementPolicyActivationRulesApprovalStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_approver: cdktf.listMapper(roleManagementPolicyActivationRulesApprovalStagePrimaryApproverToTerraform, true)(struct!.primaryApprover),
  }
}


export function roleManagementPolicyActivationRulesApprovalStageToHclTerraform(struct?: RoleManagementPolicyActivationRulesApprovalStageOutputReference | RoleManagementPolicyActivationRulesApprovalStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_approver: {
      value: cdktf.listMapperHcl(roleManagementPolicyActivationRulesApprovalStagePrimaryApproverToHclTerraform, true)(struct!.primaryApprover),
      isBlock: true,
      type: "set",
      storageClassType: "RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleManagementPolicyActivationRulesApprovalStageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoleManagementPolicyActivationRulesApprovalStage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryApprover?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryApprover = this._primaryApprover?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleManagementPolicyActivationRulesApprovalStage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._primaryApprover.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._primaryApprover.internalValue = value.primaryApprover;
    }
  }

  // primary_approver - computed: false, optional: false, required: true
  private _primaryApprover = new RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList(this, "primary_approver", true);
  public get primaryApprover() {
    return this._primaryApprover;
  }
  public putPrimaryApprover(value: RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover[] | cdktf.IResolvable) {
    this._primaryApprover.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryApproverInput() {
    return this._primaryApprover.internalValue;
  }
}
export interface RoleManagementPolicyActivationRules {
  /**
  * The time after which the an activation can be valid for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#maximum_duration RoleManagementPolicy#maximum_duration}
  */
  readonly maximumDuration?: string;
  /**
  * Whether an approval is required for activation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#require_approval RoleManagementPolicy#require_approval}
  */
  readonly requireApproval?: boolean | cdktf.IResolvable;
  /**
  * Whether a justification is required during activation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#require_justification RoleManagementPolicy#require_justification}
  */
  readonly requireJustification?: boolean | cdktf.IResolvable;
  /**
  * Whether multi-factor authentication is required during activation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#require_multifactor_authentication RoleManagementPolicy#require_multifactor_authentication}
  */
  readonly requireMultifactorAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Whether ticket information is required during activation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#require_ticket_info RoleManagementPolicy#require_ticket_info}
  */
  readonly requireTicketInfo?: boolean | cdktf.IResolvable;
  /**
  * Whether a conditional access context is required during activation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#required_conditional_access_authentication_context RoleManagementPolicy#required_conditional_access_authentication_context}
  */
  readonly requiredConditionalAccessAuthenticationContext?: string;
  /**
  * approval_stage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#approval_stage RoleManagementPolicy#approval_stage}
  */
  readonly approvalStage?: RoleManagementPolicyActivationRulesApprovalStage;
}

export function roleManagementPolicyActivationRulesToTerraform(struct?: RoleManagementPolicyActivationRulesOutputReference | RoleManagementPolicyActivationRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_duration: cdktf.stringToTerraform(struct!.maximumDuration),
    require_approval: cdktf.booleanToTerraform(struct!.requireApproval),
    require_justification: cdktf.booleanToTerraform(struct!.requireJustification),
    require_multifactor_authentication: cdktf.booleanToTerraform(struct!.requireMultifactorAuthentication),
    require_ticket_info: cdktf.booleanToTerraform(struct!.requireTicketInfo),
    required_conditional_access_authentication_context: cdktf.stringToTerraform(struct!.requiredConditionalAccessAuthenticationContext),
    approval_stage: roleManagementPolicyActivationRulesApprovalStageToTerraform(struct!.approvalStage),
  }
}


export function roleManagementPolicyActivationRulesToHclTerraform(struct?: RoleManagementPolicyActivationRulesOutputReference | RoleManagementPolicyActivationRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_duration: {
      value: cdktf.stringToHclTerraform(struct!.maximumDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_approval: {
      value: cdktf.booleanToHclTerraform(struct!.requireApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_justification: {
      value: cdktf.booleanToHclTerraform(struct!.requireJustification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_multifactor_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.requireMultifactorAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_ticket_info: {
      value: cdktf.booleanToHclTerraform(struct!.requireTicketInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required_conditional_access_authentication_context: {
      value: cdktf.stringToHclTerraform(struct!.requiredConditionalAccessAuthenticationContext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    approval_stage: {
      value: roleManagementPolicyActivationRulesApprovalStageToHclTerraform(struct!.approvalStage),
      isBlock: true,
      type: "list",
      storageClassType: "RoleManagementPolicyActivationRulesApprovalStageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleManagementPolicyActivationRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoleManagementPolicyActivationRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumDuration = this._maximumDuration;
    }
    if (this._requireApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireApproval = this._requireApproval;
    }
    if (this._requireJustification !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireJustification = this._requireJustification;
    }
    if (this._requireMultifactorAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireMultifactorAuthentication = this._requireMultifactorAuthentication;
    }
    if (this._requireTicketInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireTicketInfo = this._requireTicketInfo;
    }
    if (this._requiredConditionalAccessAuthenticationContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredConditionalAccessAuthenticationContext = this._requiredConditionalAccessAuthenticationContext;
    }
    if (this._approvalStage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvalStage = this._approvalStage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleManagementPolicyActivationRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumDuration = undefined;
      this._requireApproval = undefined;
      this._requireJustification = undefined;
      this._requireMultifactorAuthentication = undefined;
      this._requireTicketInfo = undefined;
      this._requiredConditionalAccessAuthenticationContext = undefined;
      this._approvalStage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumDuration = value.maximumDuration;
      this._requireApproval = value.requireApproval;
      this._requireJustification = value.requireJustification;
      this._requireMultifactorAuthentication = value.requireMultifactorAuthentication;
      this._requireTicketInfo = value.requireTicketInfo;
      this._requiredConditionalAccessAuthenticationContext = value.requiredConditionalAccessAuthenticationContext;
      this._approvalStage.internalValue = value.approvalStage;
    }
  }

  // maximum_duration - computed: true, optional: true, required: false
  private _maximumDuration?: string; 
  public get maximumDuration() {
    return this.getStringAttribute('maximum_duration');
  }
  public set maximumDuration(value: string) {
    this._maximumDuration = value;
  }
  public resetMaximumDuration() {
    this._maximumDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumDurationInput() {
    return this._maximumDuration;
  }

  // require_approval - computed: true, optional: true, required: false
  private _requireApproval?: boolean | cdktf.IResolvable; 
  public get requireApproval() {
    return this.getBooleanAttribute('require_approval');
  }
  public set requireApproval(value: boolean | cdktf.IResolvable) {
    this._requireApproval = value;
  }
  public resetRequireApproval() {
    this._requireApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireApprovalInput() {
    return this._requireApproval;
  }

  // require_justification - computed: true, optional: true, required: false
  private _requireJustification?: boolean | cdktf.IResolvable; 
  public get requireJustification() {
    return this.getBooleanAttribute('require_justification');
  }
  public set requireJustification(value: boolean | cdktf.IResolvable) {
    this._requireJustification = value;
  }
  public resetRequireJustification() {
    this._requireJustification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireJustificationInput() {
    return this._requireJustification;
  }

  // require_multifactor_authentication - computed: true, optional: true, required: false
  private _requireMultifactorAuthentication?: boolean | cdktf.IResolvable; 
  public get requireMultifactorAuthentication() {
    return this.getBooleanAttribute('require_multifactor_authentication');
  }
  public set requireMultifactorAuthentication(value: boolean | cdktf.IResolvable) {
    this._requireMultifactorAuthentication = value;
  }
  public resetRequireMultifactorAuthentication() {
    this._requireMultifactorAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireMultifactorAuthenticationInput() {
    return this._requireMultifactorAuthentication;
  }

  // require_ticket_info - computed: true, optional: true, required: false
  private _requireTicketInfo?: boolean | cdktf.IResolvable; 
  public get requireTicketInfo() {
    return this.getBooleanAttribute('require_ticket_info');
  }
  public set requireTicketInfo(value: boolean | cdktf.IResolvable) {
    this._requireTicketInfo = value;
  }
  public resetRequireTicketInfo() {
    this._requireTicketInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireTicketInfoInput() {
    return this._requireTicketInfo;
  }

  // required_conditional_access_authentication_context - computed: true, optional: true, required: false
  private _requiredConditionalAccessAuthenticationContext?: string; 
  public get requiredConditionalAccessAuthenticationContext() {
    return this.getStringAttribute('required_conditional_access_authentication_context');
  }
  public set requiredConditionalAccessAuthenticationContext(value: string) {
    this._requiredConditionalAccessAuthenticationContext = value;
  }
  public resetRequiredConditionalAccessAuthenticationContext() {
    this._requiredConditionalAccessAuthenticationContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredConditionalAccessAuthenticationContextInput() {
    return this._requiredConditionalAccessAuthenticationContext;
  }

  // approval_stage - computed: false, optional: true, required: false
  private _approvalStage = new RoleManagementPolicyActivationRulesApprovalStageOutputReference(this, "approval_stage");
  public get approvalStage() {
    return this._approvalStage;
  }
  public putApprovalStage(value: RoleManagementPolicyActivationRulesApprovalStage) {
    this._approvalStage.internalValue = value;
  }
  public resetApprovalStage() {
    this._approvalStage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalStageInput() {
    return this._approvalStage.internalValue;
  }
}
export interface RoleManagementPolicyActiveAssignmentRules {
  /**
  * Must the assignment have an expiry date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#expiration_required RoleManagementPolicy#expiration_required}
  */
  readonly expirationRequired?: boolean | cdktf.IResolvable;
  /**
  * The duration after which assignments expire
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#expire_after RoleManagementPolicy#expire_after}
  */
  readonly expireAfter?: string;
  /**
  * Whether a justification is required to make an assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#require_justification RoleManagementPolicy#require_justification}
  */
  readonly requireJustification?: boolean | cdktf.IResolvable;
  /**
  * Whether multi-factor authentication is required to make an assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#require_multifactor_authentication RoleManagementPolicy#require_multifactor_authentication}
  */
  readonly requireMultifactorAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Whether ticket information is required to make an assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#require_ticket_info RoleManagementPolicy#require_ticket_info}
  */
  readonly requireTicketInfo?: boolean | cdktf.IResolvable;
}

export function roleManagementPolicyActiveAssignmentRulesToTerraform(struct?: RoleManagementPolicyActiveAssignmentRulesOutputReference | RoleManagementPolicyActiveAssignmentRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_required: cdktf.booleanToTerraform(struct!.expirationRequired),
    expire_after: cdktf.stringToTerraform(struct!.expireAfter),
    require_justification: cdktf.booleanToTerraform(struct!.requireJustification),
    require_multifactor_authentication: cdktf.booleanToTerraform(struct!.requireMultifactorAuthentication),
    require_ticket_info: cdktf.booleanToTerraform(struct!.requireTicketInfo),
  }
}


export function roleManagementPolicyActiveAssignmentRulesToHclTerraform(struct?: RoleManagementPolicyActiveAssignmentRulesOutputReference | RoleManagementPolicyActiveAssignmentRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_required: {
      value: cdktf.booleanToHclTerraform(struct!.expirationRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expire_after: {
      value: cdktf.stringToHclTerraform(struct!.expireAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_justification: {
      value: cdktf.booleanToHclTerraform(struct!.requireJustification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_multifactor_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.requireMultifactorAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_ticket_info: {
      value: cdktf.booleanToHclTerraform(struct!.requireTicketInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleManagementPolicyActiveAssignmentRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoleManagementPolicyActiveAssignmentRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationRequired = this._expirationRequired;
    }
    if (this._expireAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireAfter = this._expireAfter;
    }
    if (this._requireJustification !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireJustification = this._requireJustification;
    }
    if (this._requireMultifactorAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireMultifactorAuthentication = this._requireMultifactorAuthentication;
    }
    if (this._requireTicketInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireTicketInfo = this._requireTicketInfo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleManagementPolicyActiveAssignmentRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expirationRequired = undefined;
      this._expireAfter = undefined;
      this._requireJustification = undefined;
      this._requireMultifactorAuthentication = undefined;
      this._requireTicketInfo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expirationRequired = value.expirationRequired;
      this._expireAfter = value.expireAfter;
      this._requireJustification = value.requireJustification;
      this._requireMultifactorAuthentication = value.requireMultifactorAuthentication;
      this._requireTicketInfo = value.requireTicketInfo;
    }
  }

  // expiration_required - computed: true, optional: true, required: false
  private _expirationRequired?: boolean | cdktf.IResolvable; 
  public get expirationRequired() {
    return this.getBooleanAttribute('expiration_required');
  }
  public set expirationRequired(value: boolean | cdktf.IResolvable) {
    this._expirationRequired = value;
  }
  public resetExpirationRequired() {
    this._expirationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationRequiredInput() {
    return this._expirationRequired;
  }

  // expire_after - computed: true, optional: true, required: false
  private _expireAfter?: string; 
  public get expireAfter() {
    return this.getStringAttribute('expire_after');
  }
  public set expireAfter(value: string) {
    this._expireAfter = value;
  }
  public resetExpireAfter() {
    this._expireAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireAfterInput() {
    return this._expireAfter;
  }

  // require_justification - computed: true, optional: true, required: false
  private _requireJustification?: boolean | cdktf.IResolvable; 
  public get requireJustification() {
    return this.getBooleanAttribute('require_justification');
  }
  public set requireJustification(value: boolean | cdktf.IResolvable) {
    this._requireJustification = value;
  }
  public resetRequireJustification() {
    this._requireJustification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireJustificationInput() {
    return this._requireJustification;
  }

  // require_multifactor_authentication - computed: true, optional: true, required: false
  private _requireMultifactorAuthentication?: boolean | cdktf.IResolvable; 
  public get requireMultifactorAuthentication() {
    return this.getBooleanAttribute('require_multifactor_authentication');
  }
  public set requireMultifactorAuthentication(value: boolean | cdktf.IResolvable) {
    this._requireMultifactorAuthentication = value;
  }
  public resetRequireMultifactorAuthentication() {
    this._requireMultifactorAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireMultifactorAuthenticationInput() {
    return this._requireMultifactorAuthentication;
  }

  // require_ticket_info - computed: true, optional: true, required: false
  private _requireTicketInfo?: boolean | cdktf.IResolvable; 
  public get requireTicketInfo() {
    return this.getBooleanAttribute('require_ticket_info');
  }
  public set requireTicketInfo(value: boolean | cdktf.IResolvable) {
    this._requireTicketInfo = value;
  }
  public resetRequireTicketInfo() {
    this._requireTicketInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireTicketInfoInput() {
    return this._requireTicketInfo;
  }
}
export interface RoleManagementPolicyEligibleAssignmentRules {
  /**
  * Must the assignment have an expiry date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#expiration_required RoleManagementPolicy#expiration_required}
  */
  readonly expirationRequired?: boolean | cdktf.IResolvable;
  /**
  * The duration after which assignments expire
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#expire_after RoleManagementPolicy#expire_after}
  */
  readonly expireAfter?: string;
}

export function roleManagementPolicyEligibleAssignmentRulesToTerraform(struct?: RoleManagementPolicyEligibleAssignmentRulesOutputReference | RoleManagementPolicyEligibleAssignmentRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_required: cdktf.booleanToTerraform(struct!.expirationRequired),
    expire_after: cdktf.stringToTerraform(struct!.expireAfter),
  }
}


export function roleManagementPolicyEligibleAssignmentRulesToHclTerraform(struct?: RoleManagementPolicyEligibleAssignmentRulesOutputReference | RoleManagementPolicyEligibleAssignmentRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_required: {
      value: cdktf.booleanToHclTerraform(struct!.expirationRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expire_after: {
      value: cdktf.stringToHclTerraform(struct!.expireAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleManagementPolicyEligibleAssignmentRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoleManagementPolicyEligibleAssignmentRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationRequired = this._expirationRequired;
    }
    if (this._expireAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireAfter = this._expireAfter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleManagementPolicyEligibleAssignmentRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expirationRequired = undefined;
      this._expireAfter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expirationRequired = value.expirationRequired;
      this._expireAfter = value.expireAfter;
    }
  }

  // expiration_required - computed: true, optional: true, required: false
  private _expirationRequired?: boolean | cdktf.IResolvable; 
  public get expirationRequired() {
    return this.getBooleanAttribute('expiration_required');
  }
  public set expirationRequired(value: boolean | cdktf.IResolvable) {
    this._expirationRequired = value;
  }
  public resetExpirationRequired() {
    this._expirationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationRequiredInput() {
    return this._expirationRequired;
  }

  // expire_after - computed: true, optional: true, required: false
  private _expireAfter?: string; 
  public get expireAfter() {
    return this.getStringAttribute('expire_after');
  }
  public set expireAfter(value: string) {
    this._expireAfter = value;
  }
  public resetExpireAfter() {
    this._expireAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireAfterInput() {
    return this._expireAfter;
  }
}
export interface RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications {
  /**
  * The additional recipients to notify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}
  */
  readonly additionalRecipients?: string[];
  /**
  * Whether the default recipients are notified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}
  */
  readonly defaultRecipients: boolean | cdktf.IResolvable;
  /**
  * What level of notifications are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}
  */
  readonly notificationLevel: string;
}

export function roleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsToTerraform(struct?: RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference | RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalRecipients),
    default_recipients: cdktf.booleanToTerraform(struct!.defaultRecipients),
    notification_level: cdktf.stringToTerraform(struct!.notificationLevel),
  }
}


export function roleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsToHclTerraform(struct?: RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference | RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_recipients: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRecipients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_level: {
      value: cdktf.stringToHclTerraform(struct!.notificationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRecipients = this._additionalRecipients;
    }
    if (this._defaultRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRecipients = this._defaultRecipients;
    }
    if (this._notificationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationLevel = this._notificationLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalRecipients = undefined;
      this._defaultRecipients = undefined;
      this._notificationLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalRecipients = value.additionalRecipients;
      this._defaultRecipients = value.defaultRecipients;
      this._notificationLevel = value.notificationLevel;
    }
  }

  // additional_recipients - computed: true, optional: true, required: false
  private _additionalRecipients?: string[]; 
  public get additionalRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_recipients'));
  }
  public set additionalRecipients(value: string[]) {
    this._additionalRecipients = value;
  }
  public resetAdditionalRecipients() {
    this._additionalRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRecipientsInput() {
    return this._additionalRecipients;
  }

  // default_recipients - computed: false, optional: false, required: true
  private _defaultRecipients?: boolean | cdktf.IResolvable; 
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }
  public set defaultRecipients(value: boolean | cdktf.IResolvable) {
    this._defaultRecipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRecipientsInput() {
    return this._defaultRecipients;
  }

  // notification_level - computed: false, optional: false, required: true
  private _notificationLevel?: string; 
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
  public set notificationLevel(value: string) {
    this._notificationLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationLevelInput() {
    return this._notificationLevel;
  }
}
export interface RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications {
  /**
  * The additional recipients to notify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}
  */
  readonly additionalRecipients?: string[];
  /**
  * Whether the default recipients are notified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}
  */
  readonly defaultRecipients: boolean | cdktf.IResolvable;
  /**
  * What level of notifications are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}
  */
  readonly notificationLevel: string;
}

export function roleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsToTerraform(struct?: RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference | RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalRecipients),
    default_recipients: cdktf.booleanToTerraform(struct!.defaultRecipients),
    notification_level: cdktf.stringToTerraform(struct!.notificationLevel),
  }
}


export function roleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsToHclTerraform(struct?: RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference | RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_recipients: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRecipients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_level: {
      value: cdktf.stringToHclTerraform(struct!.notificationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRecipients = this._additionalRecipients;
    }
    if (this._defaultRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRecipients = this._defaultRecipients;
    }
    if (this._notificationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationLevel = this._notificationLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalRecipients = undefined;
      this._defaultRecipients = undefined;
      this._notificationLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalRecipients = value.additionalRecipients;
      this._defaultRecipients = value.defaultRecipients;
      this._notificationLevel = value.notificationLevel;
    }
  }

  // additional_recipients - computed: true, optional: true, required: false
  private _additionalRecipients?: string[]; 
  public get additionalRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_recipients'));
  }
  public set additionalRecipients(value: string[]) {
    this._additionalRecipients = value;
  }
  public resetAdditionalRecipients() {
    this._additionalRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRecipientsInput() {
    return this._additionalRecipients;
  }

  // default_recipients - computed: false, optional: false, required: true
  private _defaultRecipients?: boolean | cdktf.IResolvable; 
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }
  public set defaultRecipients(value: boolean | cdktf.IResolvable) {
    this._defaultRecipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRecipientsInput() {
    return this._defaultRecipients;
  }

  // notification_level - computed: false, optional: false, required: true
  private _notificationLevel?: string; 
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
  public set notificationLevel(value: string) {
    this._notificationLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationLevelInput() {
    return this._notificationLevel;
  }
}
export interface RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications {
  /**
  * The additional recipients to notify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}
  */
  readonly additionalRecipients?: string[];
  /**
  * Whether the default recipients are notified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}
  */
  readonly defaultRecipients: boolean | cdktf.IResolvable;
  /**
  * What level of notifications are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}
  */
  readonly notificationLevel: string;
}

export function roleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsToTerraform(struct?: RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference | RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalRecipients),
    default_recipients: cdktf.booleanToTerraform(struct!.defaultRecipients),
    notification_level: cdktf.stringToTerraform(struct!.notificationLevel),
  }
}


export function roleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsToHclTerraform(struct?: RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference | RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_recipients: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRecipients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_level: {
      value: cdktf.stringToHclTerraform(struct!.notificationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRecipients = this._additionalRecipients;
    }
    if (this._defaultRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRecipients = this._defaultRecipients;
    }
    if (this._notificationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationLevel = this._notificationLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalRecipients = undefined;
      this._defaultRecipients = undefined;
      this._notificationLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalRecipients = value.additionalRecipients;
      this._defaultRecipients = value.defaultRecipients;
      this._notificationLevel = value.notificationLevel;
    }
  }

  // additional_recipients - computed: true, optional: true, required: false
  private _additionalRecipients?: string[]; 
  public get additionalRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_recipients'));
  }
  public set additionalRecipients(value: string[]) {
    this._additionalRecipients = value;
  }
  public resetAdditionalRecipients() {
    this._additionalRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRecipientsInput() {
    return this._additionalRecipients;
  }

  // default_recipients - computed: false, optional: false, required: true
  private _defaultRecipients?: boolean | cdktf.IResolvable; 
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }
  public set defaultRecipients(value: boolean | cdktf.IResolvable) {
    this._defaultRecipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRecipientsInput() {
    return this._defaultRecipients;
  }

  // notification_level - computed: false, optional: false, required: true
  private _notificationLevel?: string; 
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
  public set notificationLevel(value: string) {
    this._notificationLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationLevelInput() {
    return this._notificationLevel;
  }
}
export interface RoleManagementPolicyNotificationRulesActiveAssignments {
  /**
  * admin_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#admin_notifications RoleManagementPolicy#admin_notifications}
  */
  readonly adminNotifications?: RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications;
  /**
  * approver_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#approver_notifications RoleManagementPolicy#approver_notifications}
  */
  readonly approverNotifications?: RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications;
  /**
  * assignee_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#assignee_notifications RoleManagementPolicy#assignee_notifications}
  */
  readonly assigneeNotifications?: RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications;
}

export function roleManagementPolicyNotificationRulesActiveAssignmentsToTerraform(struct?: RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference | RoleManagementPolicyNotificationRulesActiveAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_notifications: roleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsToTerraform(struct!.adminNotifications),
    approver_notifications: roleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsToTerraform(struct!.approverNotifications),
    assignee_notifications: roleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsToTerraform(struct!.assigneeNotifications),
  }
}


export function roleManagementPolicyNotificationRulesActiveAssignmentsToHclTerraform(struct?: RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference | RoleManagementPolicyNotificationRulesActiveAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_notifications: {
      value: roleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsToHclTerraform(struct!.adminNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList",
    },
    approver_notifications: {
      value: roleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsToHclTerraform(struct!.approverNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList",
    },
    assignee_notifications: {
      value: roleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsToHclTerraform(struct!.assigneeNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoleManagementPolicyNotificationRulesActiveAssignments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminNotifications = this._adminNotifications?.internalValue;
    }
    if (this._approverNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.approverNotifications = this._approverNotifications?.internalValue;
    }
    if (this._assigneeNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assigneeNotifications = this._assigneeNotifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleManagementPolicyNotificationRulesActiveAssignments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminNotifications.internalValue = undefined;
      this._approverNotifications.internalValue = undefined;
      this._assigneeNotifications.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminNotifications.internalValue = value.adminNotifications;
      this._approverNotifications.internalValue = value.approverNotifications;
      this._assigneeNotifications.internalValue = value.assigneeNotifications;
    }
  }

  // admin_notifications - computed: false, optional: true, required: false
  private _adminNotifications = new RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference(this, "admin_notifications");
  public get adminNotifications() {
    return this._adminNotifications;
  }
  public putAdminNotifications(value: RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications) {
    this._adminNotifications.internalValue = value;
  }
  public resetAdminNotifications() {
    this._adminNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminNotificationsInput() {
    return this._adminNotifications.internalValue;
  }

  // approver_notifications - computed: false, optional: true, required: false
  private _approverNotifications = new RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference(this, "approver_notifications");
  public get approverNotifications() {
    return this._approverNotifications;
  }
  public putApproverNotifications(value: RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications) {
    this._approverNotifications.internalValue = value;
  }
  public resetApproverNotifications() {
    this._approverNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approverNotificationsInput() {
    return this._approverNotifications.internalValue;
  }

  // assignee_notifications - computed: false, optional: true, required: false
  private _assigneeNotifications = new RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference(this, "assignee_notifications");
  public get assigneeNotifications() {
    return this._assigneeNotifications;
  }
  public putAssigneeNotifications(value: RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications) {
    this._assigneeNotifications.internalValue = value;
  }
  public resetAssigneeNotifications() {
    this._assigneeNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assigneeNotificationsInput() {
    return this._assigneeNotifications.internalValue;
  }
}
export interface RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications {
  /**
  * The additional recipients to notify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}
  */
  readonly additionalRecipients?: string[];
  /**
  * Whether the default recipients are notified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}
  */
  readonly defaultRecipients: boolean | cdktf.IResolvable;
  /**
  * What level of notifications are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}
  */
  readonly notificationLevel: string;
}

export function roleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsToTerraform(struct?: RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference | RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalRecipients),
    default_recipients: cdktf.booleanToTerraform(struct!.defaultRecipients),
    notification_level: cdktf.stringToTerraform(struct!.notificationLevel),
  }
}


export function roleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsToHclTerraform(struct?: RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference | RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_recipients: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRecipients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_level: {
      value: cdktf.stringToHclTerraform(struct!.notificationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRecipients = this._additionalRecipients;
    }
    if (this._defaultRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRecipients = this._defaultRecipients;
    }
    if (this._notificationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationLevel = this._notificationLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalRecipients = undefined;
      this._defaultRecipients = undefined;
      this._notificationLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalRecipients = value.additionalRecipients;
      this._defaultRecipients = value.defaultRecipients;
      this._notificationLevel = value.notificationLevel;
    }
  }

  // additional_recipients - computed: true, optional: true, required: false
  private _additionalRecipients?: string[]; 
  public get additionalRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_recipients'));
  }
  public set additionalRecipients(value: string[]) {
    this._additionalRecipients = value;
  }
  public resetAdditionalRecipients() {
    this._additionalRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRecipientsInput() {
    return this._additionalRecipients;
  }

  // default_recipients - computed: false, optional: false, required: true
  private _defaultRecipients?: boolean | cdktf.IResolvable; 
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }
  public set defaultRecipients(value: boolean | cdktf.IResolvable) {
    this._defaultRecipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRecipientsInput() {
    return this._defaultRecipients;
  }

  // notification_level - computed: false, optional: false, required: true
  private _notificationLevel?: string; 
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
  public set notificationLevel(value: string) {
    this._notificationLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationLevelInput() {
    return this._notificationLevel;
  }
}
export interface RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications {
  /**
  * The additional recipients to notify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}
  */
  readonly additionalRecipients?: string[];
  /**
  * Whether the default recipients are notified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}
  */
  readonly defaultRecipients: boolean | cdktf.IResolvable;
  /**
  * What level of notifications are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}
  */
  readonly notificationLevel: string;
}

export function roleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsToTerraform(struct?: RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference | RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalRecipients),
    default_recipients: cdktf.booleanToTerraform(struct!.defaultRecipients),
    notification_level: cdktf.stringToTerraform(struct!.notificationLevel),
  }
}


export function roleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsToHclTerraform(struct?: RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference | RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_recipients: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRecipients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_level: {
      value: cdktf.stringToHclTerraform(struct!.notificationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRecipients = this._additionalRecipients;
    }
    if (this._defaultRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRecipients = this._defaultRecipients;
    }
    if (this._notificationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationLevel = this._notificationLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalRecipients = undefined;
      this._defaultRecipients = undefined;
      this._notificationLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalRecipients = value.additionalRecipients;
      this._defaultRecipients = value.defaultRecipients;
      this._notificationLevel = value.notificationLevel;
    }
  }

  // additional_recipients - computed: true, optional: true, required: false
  private _additionalRecipients?: string[]; 
  public get additionalRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_recipients'));
  }
  public set additionalRecipients(value: string[]) {
    this._additionalRecipients = value;
  }
  public resetAdditionalRecipients() {
    this._additionalRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRecipientsInput() {
    return this._additionalRecipients;
  }

  // default_recipients - computed: false, optional: false, required: true
  private _defaultRecipients?: boolean | cdktf.IResolvable; 
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }
  public set defaultRecipients(value: boolean | cdktf.IResolvable) {
    this._defaultRecipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRecipientsInput() {
    return this._defaultRecipients;
  }

  // notification_level - computed: false, optional: false, required: true
  private _notificationLevel?: string; 
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
  public set notificationLevel(value: string) {
    this._notificationLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationLevelInput() {
    return this._notificationLevel;
  }
}
export interface RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications {
  /**
  * The additional recipients to notify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}
  */
  readonly additionalRecipients?: string[];
  /**
  * Whether the default recipients are notified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}
  */
  readonly defaultRecipients: boolean | cdktf.IResolvable;
  /**
  * What level of notifications are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}
  */
  readonly notificationLevel: string;
}

export function roleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsToTerraform(struct?: RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference | RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalRecipients),
    default_recipients: cdktf.booleanToTerraform(struct!.defaultRecipients),
    notification_level: cdktf.stringToTerraform(struct!.notificationLevel),
  }
}


export function roleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsToHclTerraform(struct?: RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference | RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_recipients: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRecipients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_level: {
      value: cdktf.stringToHclTerraform(struct!.notificationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRecipients = this._additionalRecipients;
    }
    if (this._defaultRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRecipients = this._defaultRecipients;
    }
    if (this._notificationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationLevel = this._notificationLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalRecipients = undefined;
      this._defaultRecipients = undefined;
      this._notificationLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalRecipients = value.additionalRecipients;
      this._defaultRecipients = value.defaultRecipients;
      this._notificationLevel = value.notificationLevel;
    }
  }

  // additional_recipients - computed: true, optional: true, required: false
  private _additionalRecipients?: string[]; 
  public get additionalRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_recipients'));
  }
  public set additionalRecipients(value: string[]) {
    this._additionalRecipients = value;
  }
  public resetAdditionalRecipients() {
    this._additionalRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRecipientsInput() {
    return this._additionalRecipients;
  }

  // default_recipients - computed: false, optional: false, required: true
  private _defaultRecipients?: boolean | cdktf.IResolvable; 
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }
  public set defaultRecipients(value: boolean | cdktf.IResolvable) {
    this._defaultRecipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRecipientsInput() {
    return this._defaultRecipients;
  }

  // notification_level - computed: false, optional: false, required: true
  private _notificationLevel?: string; 
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
  public set notificationLevel(value: string) {
    this._notificationLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationLevelInput() {
    return this._notificationLevel;
  }
}
export interface RoleManagementPolicyNotificationRulesEligibleActivations {
  /**
  * admin_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#admin_notifications RoleManagementPolicy#admin_notifications}
  */
  readonly adminNotifications?: RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications;
  /**
  * approver_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#approver_notifications RoleManagementPolicy#approver_notifications}
  */
  readonly approverNotifications?: RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications;
  /**
  * assignee_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#assignee_notifications RoleManagementPolicy#assignee_notifications}
  */
  readonly assigneeNotifications?: RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications;
}

export function roleManagementPolicyNotificationRulesEligibleActivationsToTerraform(struct?: RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference | RoleManagementPolicyNotificationRulesEligibleActivations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_notifications: roleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsToTerraform(struct!.adminNotifications),
    approver_notifications: roleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsToTerraform(struct!.approverNotifications),
    assignee_notifications: roleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsToTerraform(struct!.assigneeNotifications),
  }
}


export function roleManagementPolicyNotificationRulesEligibleActivationsToHclTerraform(struct?: RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference | RoleManagementPolicyNotificationRulesEligibleActivations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_notifications: {
      value: roleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsToHclTerraform(struct!.adminNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList",
    },
    approver_notifications: {
      value: roleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsToHclTerraform(struct!.approverNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList",
    },
    assignee_notifications: {
      value: roleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsToHclTerraform(struct!.assigneeNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoleManagementPolicyNotificationRulesEligibleActivations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminNotifications = this._adminNotifications?.internalValue;
    }
    if (this._approverNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.approverNotifications = this._approverNotifications?.internalValue;
    }
    if (this._assigneeNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assigneeNotifications = this._assigneeNotifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleManagementPolicyNotificationRulesEligibleActivations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminNotifications.internalValue = undefined;
      this._approverNotifications.internalValue = undefined;
      this._assigneeNotifications.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminNotifications.internalValue = value.adminNotifications;
      this._approverNotifications.internalValue = value.approverNotifications;
      this._assigneeNotifications.internalValue = value.assigneeNotifications;
    }
  }

  // admin_notifications - computed: false, optional: true, required: false
  private _adminNotifications = new RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference(this, "admin_notifications");
  public get adminNotifications() {
    return this._adminNotifications;
  }
  public putAdminNotifications(value: RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications) {
    this._adminNotifications.internalValue = value;
  }
  public resetAdminNotifications() {
    this._adminNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminNotificationsInput() {
    return this._adminNotifications.internalValue;
  }

  // approver_notifications - computed: false, optional: true, required: false
  private _approverNotifications = new RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference(this, "approver_notifications");
  public get approverNotifications() {
    return this._approverNotifications;
  }
  public putApproverNotifications(value: RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications) {
    this._approverNotifications.internalValue = value;
  }
  public resetApproverNotifications() {
    this._approverNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approverNotificationsInput() {
    return this._approverNotifications.internalValue;
  }

  // assignee_notifications - computed: false, optional: true, required: false
  private _assigneeNotifications = new RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference(this, "assignee_notifications");
  public get assigneeNotifications() {
    return this._assigneeNotifications;
  }
  public putAssigneeNotifications(value: RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications) {
    this._assigneeNotifications.internalValue = value;
  }
  public resetAssigneeNotifications() {
    this._assigneeNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assigneeNotificationsInput() {
    return this._assigneeNotifications.internalValue;
  }
}
export interface RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications {
  /**
  * The additional recipients to notify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}
  */
  readonly additionalRecipients?: string[];
  /**
  * Whether the default recipients are notified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}
  */
  readonly defaultRecipients: boolean | cdktf.IResolvable;
  /**
  * What level of notifications are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}
  */
  readonly notificationLevel: string;
}

export function roleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsToTerraform(struct?: RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference | RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalRecipients),
    default_recipients: cdktf.booleanToTerraform(struct!.defaultRecipients),
    notification_level: cdktf.stringToTerraform(struct!.notificationLevel),
  }
}


export function roleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsToHclTerraform(struct?: RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference | RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_recipients: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRecipients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_level: {
      value: cdktf.stringToHclTerraform(struct!.notificationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRecipients = this._additionalRecipients;
    }
    if (this._defaultRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRecipients = this._defaultRecipients;
    }
    if (this._notificationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationLevel = this._notificationLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalRecipients = undefined;
      this._defaultRecipients = undefined;
      this._notificationLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalRecipients = value.additionalRecipients;
      this._defaultRecipients = value.defaultRecipients;
      this._notificationLevel = value.notificationLevel;
    }
  }

  // additional_recipients - computed: true, optional: true, required: false
  private _additionalRecipients?: string[]; 
  public get additionalRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_recipients'));
  }
  public set additionalRecipients(value: string[]) {
    this._additionalRecipients = value;
  }
  public resetAdditionalRecipients() {
    this._additionalRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRecipientsInput() {
    return this._additionalRecipients;
  }

  // default_recipients - computed: false, optional: false, required: true
  private _defaultRecipients?: boolean | cdktf.IResolvable; 
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }
  public set defaultRecipients(value: boolean | cdktf.IResolvable) {
    this._defaultRecipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRecipientsInput() {
    return this._defaultRecipients;
  }

  // notification_level - computed: false, optional: false, required: true
  private _notificationLevel?: string; 
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
  public set notificationLevel(value: string) {
    this._notificationLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationLevelInput() {
    return this._notificationLevel;
  }
}
export interface RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications {
  /**
  * The additional recipients to notify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}
  */
  readonly additionalRecipients?: string[];
  /**
  * Whether the default recipients are notified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}
  */
  readonly defaultRecipients: boolean | cdktf.IResolvable;
  /**
  * What level of notifications are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}
  */
  readonly notificationLevel: string;
}

export function roleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsToTerraform(struct?: RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference | RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalRecipients),
    default_recipients: cdktf.booleanToTerraform(struct!.defaultRecipients),
    notification_level: cdktf.stringToTerraform(struct!.notificationLevel),
  }
}


export function roleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsToHclTerraform(struct?: RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference | RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_recipients: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRecipients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_level: {
      value: cdktf.stringToHclTerraform(struct!.notificationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRecipients = this._additionalRecipients;
    }
    if (this._defaultRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRecipients = this._defaultRecipients;
    }
    if (this._notificationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationLevel = this._notificationLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalRecipients = undefined;
      this._defaultRecipients = undefined;
      this._notificationLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalRecipients = value.additionalRecipients;
      this._defaultRecipients = value.defaultRecipients;
      this._notificationLevel = value.notificationLevel;
    }
  }

  // additional_recipients - computed: true, optional: true, required: false
  private _additionalRecipients?: string[]; 
  public get additionalRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_recipients'));
  }
  public set additionalRecipients(value: string[]) {
    this._additionalRecipients = value;
  }
  public resetAdditionalRecipients() {
    this._additionalRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRecipientsInput() {
    return this._additionalRecipients;
  }

  // default_recipients - computed: false, optional: false, required: true
  private _defaultRecipients?: boolean | cdktf.IResolvable; 
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }
  public set defaultRecipients(value: boolean | cdktf.IResolvable) {
    this._defaultRecipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRecipientsInput() {
    return this._defaultRecipients;
  }

  // notification_level - computed: false, optional: false, required: true
  private _notificationLevel?: string; 
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
  public set notificationLevel(value: string) {
    this._notificationLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationLevelInput() {
    return this._notificationLevel;
  }
}
export interface RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications {
  /**
  * The additional recipients to notify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}
  */
  readonly additionalRecipients?: string[];
  /**
  * Whether the default recipients are notified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}
  */
  readonly defaultRecipients: boolean | cdktf.IResolvable;
  /**
  * What level of notifications are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}
  */
  readonly notificationLevel: string;
}

export function roleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsToTerraform(struct?: RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference | RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalRecipients),
    default_recipients: cdktf.booleanToTerraform(struct!.defaultRecipients),
    notification_level: cdktf.stringToTerraform(struct!.notificationLevel),
  }
}


export function roleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsToHclTerraform(struct?: RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference | RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_recipients: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRecipients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_level: {
      value: cdktf.stringToHclTerraform(struct!.notificationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRecipients = this._additionalRecipients;
    }
    if (this._defaultRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRecipients = this._defaultRecipients;
    }
    if (this._notificationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationLevel = this._notificationLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalRecipients = undefined;
      this._defaultRecipients = undefined;
      this._notificationLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalRecipients = value.additionalRecipients;
      this._defaultRecipients = value.defaultRecipients;
      this._notificationLevel = value.notificationLevel;
    }
  }

  // additional_recipients - computed: true, optional: true, required: false
  private _additionalRecipients?: string[]; 
  public get additionalRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_recipients'));
  }
  public set additionalRecipients(value: string[]) {
    this._additionalRecipients = value;
  }
  public resetAdditionalRecipients() {
    this._additionalRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRecipientsInput() {
    return this._additionalRecipients;
  }

  // default_recipients - computed: false, optional: false, required: true
  private _defaultRecipients?: boolean | cdktf.IResolvable; 
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }
  public set defaultRecipients(value: boolean | cdktf.IResolvable) {
    this._defaultRecipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRecipientsInput() {
    return this._defaultRecipients;
  }

  // notification_level - computed: false, optional: false, required: true
  private _notificationLevel?: string; 
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
  public set notificationLevel(value: string) {
    this._notificationLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationLevelInput() {
    return this._notificationLevel;
  }
}
export interface RoleManagementPolicyNotificationRulesEligibleAssignments {
  /**
  * admin_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#admin_notifications RoleManagementPolicy#admin_notifications}
  */
  readonly adminNotifications?: RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications;
  /**
  * approver_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#approver_notifications RoleManagementPolicy#approver_notifications}
  */
  readonly approverNotifications?: RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications;
  /**
  * assignee_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#assignee_notifications RoleManagementPolicy#assignee_notifications}
  */
  readonly assigneeNotifications?: RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications;
}

export function roleManagementPolicyNotificationRulesEligibleAssignmentsToTerraform(struct?: RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference | RoleManagementPolicyNotificationRulesEligibleAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_notifications: roleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsToTerraform(struct!.adminNotifications),
    approver_notifications: roleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsToTerraform(struct!.approverNotifications),
    assignee_notifications: roleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsToTerraform(struct!.assigneeNotifications),
  }
}


export function roleManagementPolicyNotificationRulesEligibleAssignmentsToHclTerraform(struct?: RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference | RoleManagementPolicyNotificationRulesEligibleAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_notifications: {
      value: roleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsToHclTerraform(struct!.adminNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList",
    },
    approver_notifications: {
      value: roleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsToHclTerraform(struct!.approverNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList",
    },
    assignee_notifications: {
      value: roleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsToHclTerraform(struct!.assigneeNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoleManagementPolicyNotificationRulesEligibleAssignments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminNotifications = this._adminNotifications?.internalValue;
    }
    if (this._approverNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.approverNotifications = this._approverNotifications?.internalValue;
    }
    if (this._assigneeNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assigneeNotifications = this._assigneeNotifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleManagementPolicyNotificationRulesEligibleAssignments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminNotifications.internalValue = undefined;
      this._approverNotifications.internalValue = undefined;
      this._assigneeNotifications.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminNotifications.internalValue = value.adminNotifications;
      this._approverNotifications.internalValue = value.approverNotifications;
      this._assigneeNotifications.internalValue = value.assigneeNotifications;
    }
  }

  // admin_notifications - computed: false, optional: true, required: false
  private _adminNotifications = new RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference(this, "admin_notifications");
  public get adminNotifications() {
    return this._adminNotifications;
  }
  public putAdminNotifications(value: RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications) {
    this._adminNotifications.internalValue = value;
  }
  public resetAdminNotifications() {
    this._adminNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminNotificationsInput() {
    return this._adminNotifications.internalValue;
  }

  // approver_notifications - computed: false, optional: true, required: false
  private _approverNotifications = new RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference(this, "approver_notifications");
  public get approverNotifications() {
    return this._approverNotifications;
  }
  public putApproverNotifications(value: RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications) {
    this._approverNotifications.internalValue = value;
  }
  public resetApproverNotifications() {
    this._approverNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approverNotificationsInput() {
    return this._approverNotifications.internalValue;
  }

  // assignee_notifications - computed: false, optional: true, required: false
  private _assigneeNotifications = new RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference(this, "assignee_notifications");
  public get assigneeNotifications() {
    return this._assigneeNotifications;
  }
  public putAssigneeNotifications(value: RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications) {
    this._assigneeNotifications.internalValue = value;
  }
  public resetAssigneeNotifications() {
    this._assigneeNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assigneeNotificationsInput() {
    return this._assigneeNotifications.internalValue;
  }
}
export interface RoleManagementPolicyNotificationRules {
  /**
  * active_assignments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#active_assignments RoleManagementPolicy#active_assignments}
  */
  readonly activeAssignments?: RoleManagementPolicyNotificationRulesActiveAssignments;
  /**
  * eligible_activations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#eligible_activations RoleManagementPolicy#eligible_activations}
  */
  readonly eligibleActivations?: RoleManagementPolicyNotificationRulesEligibleActivations;
  /**
  * eligible_assignments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#eligible_assignments RoleManagementPolicy#eligible_assignments}
  */
  readonly eligibleAssignments?: RoleManagementPolicyNotificationRulesEligibleAssignments;
}

export function roleManagementPolicyNotificationRulesToTerraform(struct?: RoleManagementPolicyNotificationRulesOutputReference | RoleManagementPolicyNotificationRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_assignments: roleManagementPolicyNotificationRulesActiveAssignmentsToTerraform(struct!.activeAssignments),
    eligible_activations: roleManagementPolicyNotificationRulesEligibleActivationsToTerraform(struct!.eligibleActivations),
    eligible_assignments: roleManagementPolicyNotificationRulesEligibleAssignmentsToTerraform(struct!.eligibleAssignments),
  }
}


export function roleManagementPolicyNotificationRulesToHclTerraform(struct?: RoleManagementPolicyNotificationRulesOutputReference | RoleManagementPolicyNotificationRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_assignments: {
      value: roleManagementPolicyNotificationRulesActiveAssignmentsToHclTerraform(struct!.activeAssignments),
      isBlock: true,
      type: "list",
      storageClassType: "RoleManagementPolicyNotificationRulesActiveAssignmentsList",
    },
    eligible_activations: {
      value: roleManagementPolicyNotificationRulesEligibleActivationsToHclTerraform(struct!.eligibleActivations),
      isBlock: true,
      type: "list",
      storageClassType: "RoleManagementPolicyNotificationRulesEligibleActivationsList",
    },
    eligible_assignments: {
      value: roleManagementPolicyNotificationRulesEligibleAssignmentsToHclTerraform(struct!.eligibleAssignments),
      isBlock: true,
      type: "list",
      storageClassType: "RoleManagementPolicyNotificationRulesEligibleAssignmentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleManagementPolicyNotificationRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoleManagementPolicyNotificationRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeAssignments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeAssignments = this._activeAssignments?.internalValue;
    }
    if (this._eligibleActivations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eligibleActivations = this._eligibleActivations?.internalValue;
    }
    if (this._eligibleAssignments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eligibleAssignments = this._eligibleAssignments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleManagementPolicyNotificationRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeAssignments.internalValue = undefined;
      this._eligibleActivations.internalValue = undefined;
      this._eligibleAssignments.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeAssignments.internalValue = value.activeAssignments;
      this._eligibleActivations.internalValue = value.eligibleActivations;
      this._eligibleAssignments.internalValue = value.eligibleAssignments;
    }
  }

  // active_assignments - computed: false, optional: true, required: false
  private _activeAssignments = new RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference(this, "active_assignments");
  public get activeAssignments() {
    return this._activeAssignments;
  }
  public putActiveAssignments(value: RoleManagementPolicyNotificationRulesActiveAssignments) {
    this._activeAssignments.internalValue = value;
  }
  public resetActiveAssignments() {
    this._activeAssignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeAssignmentsInput() {
    return this._activeAssignments.internalValue;
  }

  // eligible_activations - computed: false, optional: true, required: false
  private _eligibleActivations = new RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference(this, "eligible_activations");
  public get eligibleActivations() {
    return this._eligibleActivations;
  }
  public putEligibleActivations(value: RoleManagementPolicyNotificationRulesEligibleActivations) {
    this._eligibleActivations.internalValue = value;
  }
  public resetEligibleActivations() {
    this._eligibleActivations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eligibleActivationsInput() {
    return this._eligibleActivations.internalValue;
  }

  // eligible_assignments - computed: false, optional: true, required: false
  private _eligibleAssignments = new RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference(this, "eligible_assignments");
  public get eligibleAssignments() {
    return this._eligibleAssignments;
  }
  public putEligibleAssignments(value: RoleManagementPolicyNotificationRulesEligibleAssignments) {
    this._eligibleAssignments.internalValue = value;
  }
  public resetEligibleAssignments() {
    this._eligibleAssignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eligibleAssignmentsInput() {
    return this._eligibleAssignments.internalValue;
  }
}
export interface RoleManagementPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#create RoleManagementPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#delete RoleManagementPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#read RoleManagementPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#update RoleManagementPolicy#update}
  */
  readonly update?: string;
}

export function roleManagementPolicyTimeoutsToTerraform(struct?: RoleManagementPolicyTimeouts | cdktf.IResolvable): any {
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


export function roleManagementPolicyTimeoutsToHclTerraform(struct?: RoleManagementPolicyTimeouts | cdktf.IResolvable): any {
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

export class RoleManagementPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleManagementPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RoleManagementPolicyTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy azurerm_role_management_policy}
*/
export class RoleManagementPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_role_management_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoleManagementPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoleManagementPolicy to import
  * @param importFromId The id of the existing RoleManagementPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoleManagementPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_role_management_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/role_management_policy azurerm_role_management_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleManagementPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: RoleManagementPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_role_management_policy',
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
    this._id = config.id;
    this._roleDefinitionId = config.roleDefinitionId;
    this._scope = config.scope;
    this._activationRules.internalValue = config.activationRules;
    this._activeAssignmentRules.internalValue = config.activeAssignmentRules;
    this._eligibleAssignmentRules.internalValue = config.eligibleAssignmentRules;
    this._notificationRules.internalValue = config.notificationRules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role_definition_id - computed: false, optional: false, required: true
  private _roleDefinitionId?: string; 
  public get roleDefinitionId() {
    return this.getStringAttribute('role_definition_id');
  }
  public set roleDefinitionId(value: string) {
    this._roleDefinitionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleDefinitionIdInput() {
    return this._roleDefinitionId;
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
    return this._scope;
  }

  // activation_rules - computed: false, optional: true, required: false
  private _activationRules = new RoleManagementPolicyActivationRulesOutputReference(this, "activation_rules");
  public get activationRules() {
    return this._activationRules;
  }
  public putActivationRules(value: RoleManagementPolicyActivationRules) {
    this._activationRules.internalValue = value;
  }
  public resetActivationRules() {
    this._activationRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationRulesInput() {
    return this._activationRules.internalValue;
  }

  // active_assignment_rules - computed: false, optional: true, required: false
  private _activeAssignmentRules = new RoleManagementPolicyActiveAssignmentRulesOutputReference(this, "active_assignment_rules");
  public get activeAssignmentRules() {
    return this._activeAssignmentRules;
  }
  public putActiveAssignmentRules(value: RoleManagementPolicyActiveAssignmentRules) {
    this._activeAssignmentRules.internalValue = value;
  }
  public resetActiveAssignmentRules() {
    this._activeAssignmentRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeAssignmentRulesInput() {
    return this._activeAssignmentRules.internalValue;
  }

  // eligible_assignment_rules - computed: false, optional: true, required: false
  private _eligibleAssignmentRules = new RoleManagementPolicyEligibleAssignmentRulesOutputReference(this, "eligible_assignment_rules");
  public get eligibleAssignmentRules() {
    return this._eligibleAssignmentRules;
  }
  public putEligibleAssignmentRules(value: RoleManagementPolicyEligibleAssignmentRules) {
    this._eligibleAssignmentRules.internalValue = value;
  }
  public resetEligibleAssignmentRules() {
    this._eligibleAssignmentRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eligibleAssignmentRulesInput() {
    return this._eligibleAssignmentRules.internalValue;
  }

  // notification_rules - computed: false, optional: true, required: false
  private _notificationRules = new RoleManagementPolicyNotificationRulesOutputReference(this, "notification_rules");
  public get notificationRules() {
    return this._notificationRules;
  }
  public putNotificationRules(value: RoleManagementPolicyNotificationRules) {
    this._notificationRules.internalValue = value;
  }
  public resetNotificationRules() {
    this._notificationRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationRulesInput() {
    return this._notificationRules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RoleManagementPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RoleManagementPolicyTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      role_definition_id: cdktf.stringToTerraform(this._roleDefinitionId),
      scope: cdktf.stringToTerraform(this._scope),
      activation_rules: roleManagementPolicyActivationRulesToTerraform(this._activationRules.internalValue),
      active_assignment_rules: roleManagementPolicyActiveAssignmentRulesToTerraform(this._activeAssignmentRules.internalValue),
      eligible_assignment_rules: roleManagementPolicyEligibleAssignmentRulesToTerraform(this._eligibleAssignmentRules.internalValue),
      notification_rules: roleManagementPolicyNotificationRulesToTerraform(this._notificationRules.internalValue),
      timeouts: roleManagementPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      activation_rules: {
        value: roleManagementPolicyActivationRulesToHclTerraform(this._activationRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoleManagementPolicyActivationRulesList",
      },
      active_assignment_rules: {
        value: roleManagementPolicyActiveAssignmentRulesToHclTerraform(this._activeAssignmentRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoleManagementPolicyActiveAssignmentRulesList",
      },
      eligible_assignment_rules: {
        value: roleManagementPolicyEligibleAssignmentRulesToHclTerraform(this._eligibleAssignmentRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoleManagementPolicyEligibleAssignmentRulesList",
      },
      notification_rules: {
        value: roleManagementPolicyNotificationRulesToHclTerraform(this._notificationRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoleManagementPolicyNotificationRulesList",
      },
      timeouts: {
        value: roleManagementPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleManagementPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
