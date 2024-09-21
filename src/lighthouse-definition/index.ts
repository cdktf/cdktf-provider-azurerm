// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LighthouseDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#description LighthouseDefinition#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#id LighthouseDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#lighthouse_definition_id LighthouseDefinition#lighthouse_definition_id}
  */
  readonly lighthouseDefinitionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#managing_tenant_id LighthouseDefinition#managing_tenant_id}
  */
  readonly managingTenantId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#name LighthouseDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#scope LighthouseDefinition#scope}
  */
  readonly scope: string;
  /**
  * authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#authorization LighthouseDefinition#authorization}
  */
  readonly authorization: LighthouseDefinitionAuthorization[] | cdktf.IResolvable;
  /**
  * eligible_authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#eligible_authorization LighthouseDefinition#eligible_authorization}
  */
  readonly eligibleAuthorization?: LighthouseDefinitionEligibleAuthorization[] | cdktf.IResolvable;
  /**
  * plan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#plan LighthouseDefinition#plan}
  */
  readonly plan?: LighthouseDefinitionPlan;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#timeouts LighthouseDefinition#timeouts}
  */
  readonly timeouts?: LighthouseDefinitionTimeouts;
}
export interface LighthouseDefinitionAuthorization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#delegated_role_definition_ids LighthouseDefinition#delegated_role_definition_ids}
  */
  readonly delegatedRoleDefinitionIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#principal_display_name LighthouseDefinition#principal_display_name}
  */
  readonly principalDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#principal_id LighthouseDefinition#principal_id}
  */
  readonly principalId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#role_definition_id LighthouseDefinition#role_definition_id}
  */
  readonly roleDefinitionId: string;
}

export function lighthouseDefinitionAuthorizationToTerraform(struct?: LighthouseDefinitionAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delegated_role_definition_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.delegatedRoleDefinitionIds),
    principal_display_name: cdktf.stringToTerraform(struct!.principalDisplayName),
    principal_id: cdktf.stringToTerraform(struct!.principalId),
    role_definition_id: cdktf.stringToTerraform(struct!.roleDefinitionId),
  }
}


export function lighthouseDefinitionAuthorizationToHclTerraform(struct?: LighthouseDefinitionAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delegated_role_definition_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.delegatedRoleDefinitionIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    principal_display_name: {
      value: cdktf.stringToHclTerraform(struct!.principalDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal_id: {
      value: cdktf.stringToHclTerraform(struct!.principalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_definition_id: {
      value: cdktf.stringToHclTerraform(struct!.roleDefinitionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LighthouseDefinitionAuthorizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LighthouseDefinitionAuthorization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delegatedRoleDefinitionIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegatedRoleDefinitionIds = this._delegatedRoleDefinitionIds;
    }
    if (this._principalDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalDisplayName = this._principalDisplayName;
    }
    if (this._principalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalId = this._principalId;
    }
    if (this._roleDefinitionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleDefinitionId = this._roleDefinitionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LighthouseDefinitionAuthorization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delegatedRoleDefinitionIds = undefined;
      this._principalDisplayName = undefined;
      this._principalId = undefined;
      this._roleDefinitionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delegatedRoleDefinitionIds = value.delegatedRoleDefinitionIds;
      this._principalDisplayName = value.principalDisplayName;
      this._principalId = value.principalId;
      this._roleDefinitionId = value.roleDefinitionId;
    }
  }

  // delegated_role_definition_ids - computed: false, optional: true, required: false
  private _delegatedRoleDefinitionIds?: string[]; 
  public get delegatedRoleDefinitionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('delegated_role_definition_ids'));
  }
  public set delegatedRoleDefinitionIds(value: string[]) {
    this._delegatedRoleDefinitionIds = value;
  }
  public resetDelegatedRoleDefinitionIds() {
    this._delegatedRoleDefinitionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedRoleDefinitionIdsInput() {
    return this._delegatedRoleDefinitionIds;
  }

  // principal_display_name - computed: false, optional: true, required: false
  private _principalDisplayName?: string; 
  public get principalDisplayName() {
    return this.getStringAttribute('principal_display_name');
  }
  public set principalDisplayName(value: string) {
    this._principalDisplayName = value;
  }
  public resetPrincipalDisplayName() {
    this._principalDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalDisplayNameInput() {
    return this._principalDisplayName;
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
}

export class LighthouseDefinitionAuthorizationList extends cdktf.ComplexList {
  public internalValue? : LighthouseDefinitionAuthorization[] | cdktf.IResolvable

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
  public get(index: number): LighthouseDefinitionAuthorizationOutputReference {
    return new LighthouseDefinitionAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#principal_display_name LighthouseDefinition#principal_display_name}
  */
  readonly principalDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#principal_id LighthouseDefinition#principal_id}
  */
  readonly principalId: string;
}

export function lighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverToTerraform(struct?: LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_display_name: cdktf.stringToTerraform(struct!.principalDisplayName),
    principal_id: cdktf.stringToTerraform(struct!.principalId),
  }
}


export function lighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverToHclTerraform(struct?: LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principal_display_name: {
      value: cdktf.stringToHclTerraform(struct!.principalDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal_id: {
      value: cdktf.stringToHclTerraform(struct!.principalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principalDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalDisplayName = this._principalDisplayName;
    }
    if (this._principalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalId = this._principalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principalDisplayName = undefined;
      this._principalId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principalDisplayName = value.principalDisplayName;
      this._principalId = value.principalId;
    }
  }

  // principal_display_name - computed: false, optional: true, required: false
  private _principalDisplayName?: string; 
  public get principalDisplayName() {
    return this.getStringAttribute('principal_display_name');
  }
  public set principalDisplayName(value: string) {
    this._principalDisplayName = value;
  }
  public resetPrincipalDisplayName() {
    this._principalDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalDisplayNameInput() {
    return this._principalDisplayName;
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
}

export class LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList extends cdktf.ComplexList {
  public internalValue? : LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover[] | cdktf.IResolvable

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
  public get(index: number): LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference {
    return new LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#maximum_activation_duration LighthouseDefinition#maximum_activation_duration}
  */
  readonly maximumActivationDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#multi_factor_auth_provider LighthouseDefinition#multi_factor_auth_provider}
  */
  readonly multiFactorAuthProvider?: string;
  /**
  * approver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#approver LighthouseDefinition#approver}
  */
  readonly approver?: LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover[] | cdktf.IResolvable;
}

export function lighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyToTerraform(struct?: LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference | LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_activation_duration: cdktf.stringToTerraform(struct!.maximumActivationDuration),
    multi_factor_auth_provider: cdktf.stringToTerraform(struct!.multiFactorAuthProvider),
    approver: cdktf.listMapper(lighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverToTerraform, true)(struct!.approver),
  }
}


export function lighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyToHclTerraform(struct?: LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference | LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_activation_duration: {
      value: cdktf.stringToHclTerraform(struct!.maximumActivationDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_factor_auth_provider: {
      value: cdktf.stringToHclTerraform(struct!.multiFactorAuthProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    approver: {
      value: cdktf.listMapperHcl(lighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverToHclTerraform, true)(struct!.approver),
      isBlock: true,
      type: "set",
      storageClassType: "LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumActivationDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumActivationDuration = this._maximumActivationDuration;
    }
    if (this._multiFactorAuthProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiFactorAuthProvider = this._multiFactorAuthProvider;
    }
    if (this._approver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.approver = this._approver?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumActivationDuration = undefined;
      this._multiFactorAuthProvider = undefined;
      this._approver.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumActivationDuration = value.maximumActivationDuration;
      this._multiFactorAuthProvider = value.multiFactorAuthProvider;
      this._approver.internalValue = value.approver;
    }
  }

  // maximum_activation_duration - computed: false, optional: true, required: false
  private _maximumActivationDuration?: string; 
  public get maximumActivationDuration() {
    return this.getStringAttribute('maximum_activation_duration');
  }
  public set maximumActivationDuration(value: string) {
    this._maximumActivationDuration = value;
  }
  public resetMaximumActivationDuration() {
    this._maximumActivationDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumActivationDurationInput() {
    return this._maximumActivationDuration;
  }

  // multi_factor_auth_provider - computed: false, optional: true, required: false
  private _multiFactorAuthProvider?: string; 
  public get multiFactorAuthProvider() {
    return this.getStringAttribute('multi_factor_auth_provider');
  }
  public set multiFactorAuthProvider(value: string) {
    this._multiFactorAuthProvider = value;
  }
  public resetMultiFactorAuthProvider() {
    this._multiFactorAuthProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiFactorAuthProviderInput() {
    return this._multiFactorAuthProvider;
  }

  // approver - computed: false, optional: true, required: false
  private _approver = new LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList(this, "approver", true);
  public get approver() {
    return this._approver;
  }
  public putApprover(value: LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover[] | cdktf.IResolvable) {
    this._approver.internalValue = value;
  }
  public resetApprover() {
    this._approver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approverInput() {
    return this._approver.internalValue;
  }
}
export interface LighthouseDefinitionEligibleAuthorization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#principal_display_name LighthouseDefinition#principal_display_name}
  */
  readonly principalDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#principal_id LighthouseDefinition#principal_id}
  */
  readonly principalId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#role_definition_id LighthouseDefinition#role_definition_id}
  */
  readonly roleDefinitionId: string;
  /**
  * just_in_time_access_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#just_in_time_access_policy LighthouseDefinition#just_in_time_access_policy}
  */
  readonly justInTimeAccessPolicy?: LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy;
}

export function lighthouseDefinitionEligibleAuthorizationToTerraform(struct?: LighthouseDefinitionEligibleAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_display_name: cdktf.stringToTerraform(struct!.principalDisplayName),
    principal_id: cdktf.stringToTerraform(struct!.principalId),
    role_definition_id: cdktf.stringToTerraform(struct!.roleDefinitionId),
    just_in_time_access_policy: lighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyToTerraform(struct!.justInTimeAccessPolicy),
  }
}


export function lighthouseDefinitionEligibleAuthorizationToHclTerraform(struct?: LighthouseDefinitionEligibleAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principal_display_name: {
      value: cdktf.stringToHclTerraform(struct!.principalDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal_id: {
      value: cdktf.stringToHclTerraform(struct!.principalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_definition_id: {
      value: cdktf.stringToHclTerraform(struct!.roleDefinitionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    just_in_time_access_policy: {
      value: lighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyToHclTerraform(struct!.justInTimeAccessPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LighthouseDefinitionEligibleAuthorizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LighthouseDefinitionEligibleAuthorization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principalDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalDisplayName = this._principalDisplayName;
    }
    if (this._principalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalId = this._principalId;
    }
    if (this._roleDefinitionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleDefinitionId = this._roleDefinitionId;
    }
    if (this._justInTimeAccessPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.justInTimeAccessPolicy = this._justInTimeAccessPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LighthouseDefinitionEligibleAuthorization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principalDisplayName = undefined;
      this._principalId = undefined;
      this._roleDefinitionId = undefined;
      this._justInTimeAccessPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principalDisplayName = value.principalDisplayName;
      this._principalId = value.principalId;
      this._roleDefinitionId = value.roleDefinitionId;
      this._justInTimeAccessPolicy.internalValue = value.justInTimeAccessPolicy;
    }
  }

  // principal_display_name - computed: false, optional: true, required: false
  private _principalDisplayName?: string; 
  public get principalDisplayName() {
    return this.getStringAttribute('principal_display_name');
  }
  public set principalDisplayName(value: string) {
    this._principalDisplayName = value;
  }
  public resetPrincipalDisplayName() {
    this._principalDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalDisplayNameInput() {
    return this._principalDisplayName;
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

  // just_in_time_access_policy - computed: false, optional: true, required: false
  private _justInTimeAccessPolicy = new LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference(this, "just_in_time_access_policy");
  public get justInTimeAccessPolicy() {
    return this._justInTimeAccessPolicy;
  }
  public putJustInTimeAccessPolicy(value: LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy) {
    this._justInTimeAccessPolicy.internalValue = value;
  }
  public resetJustInTimeAccessPolicy() {
    this._justInTimeAccessPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get justInTimeAccessPolicyInput() {
    return this._justInTimeAccessPolicy.internalValue;
  }
}

export class LighthouseDefinitionEligibleAuthorizationList extends cdktf.ComplexList {
  public internalValue? : LighthouseDefinitionEligibleAuthorization[] | cdktf.IResolvable

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
  public get(index: number): LighthouseDefinitionEligibleAuthorizationOutputReference {
    return new LighthouseDefinitionEligibleAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LighthouseDefinitionPlan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#name LighthouseDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#product LighthouseDefinition#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#publisher LighthouseDefinition#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#version LighthouseDefinition#version}
  */
  readonly version: string;
}

export function lighthouseDefinitionPlanToTerraform(struct?: LighthouseDefinitionPlanOutputReference | LighthouseDefinitionPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.stringToTerraform(struct!.product),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function lighthouseDefinitionPlanToHclTerraform(struct?: LighthouseDefinitionPlanOutputReference | LighthouseDefinitionPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product: {
      value: cdktf.stringToHclTerraform(struct!.product),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publisher: {
      value: cdktf.stringToHclTerraform(struct!.publisher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LighthouseDefinitionPlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LighthouseDefinitionPlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LighthouseDefinitionPlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._product = undefined;
      this._publisher = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._product = value.product;
      this._publisher = value.publisher;
      this._version = value.version;
    }
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

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface LighthouseDefinitionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#create LighthouseDefinition#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#delete LighthouseDefinition#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#read LighthouseDefinition#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#update LighthouseDefinition#update}
  */
  readonly update?: string;
}

export function lighthouseDefinitionTimeoutsToTerraform(struct?: LighthouseDefinitionTimeouts | cdktf.IResolvable): any {
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


export function lighthouseDefinitionTimeoutsToHclTerraform(struct?: LighthouseDefinitionTimeouts | cdktf.IResolvable): any {
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

export class LighthouseDefinitionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LighthouseDefinitionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LighthouseDefinitionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition azurerm_lighthouse_definition}
*/
export class LighthouseDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_lighthouse_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LighthouseDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LighthouseDefinition to import
  * @param importFromId The id of the existing LighthouseDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LighthouseDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_lighthouse_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lighthouse_definition azurerm_lighthouse_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LighthouseDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: LighthouseDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_lighthouse_definition',
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
    this._description = config.description;
    this._id = config.id;
    this._lighthouseDefinitionId = config.lighthouseDefinitionId;
    this._managingTenantId = config.managingTenantId;
    this._name = config.name;
    this._scope = config.scope;
    this._authorization.internalValue = config.authorization;
    this._eligibleAuthorization.internalValue = config.eligibleAuthorization;
    this._plan.internalValue = config.plan;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // lighthouse_definition_id - computed: true, optional: true, required: false
  private _lighthouseDefinitionId?: string; 
  public get lighthouseDefinitionId() {
    return this.getStringAttribute('lighthouse_definition_id');
  }
  public set lighthouseDefinitionId(value: string) {
    this._lighthouseDefinitionId = value;
  }
  public resetLighthouseDefinitionId() {
    this._lighthouseDefinitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lighthouseDefinitionIdInput() {
    return this._lighthouseDefinitionId;
  }

  // managing_tenant_id - computed: false, optional: false, required: true
  private _managingTenantId?: string; 
  public get managingTenantId() {
    return this.getStringAttribute('managing_tenant_id');
  }
  public set managingTenantId(value: string) {
    this._managingTenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managingTenantIdInput() {
    return this._managingTenantId;
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

  // authorization - computed: false, optional: false, required: true
  private _authorization = new LighthouseDefinitionAuthorizationList(this, "authorization", true);
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: LighthouseDefinitionAuthorization[] | cdktf.IResolvable) {
    this._authorization.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // eligible_authorization - computed: false, optional: true, required: false
  private _eligibleAuthorization = new LighthouseDefinitionEligibleAuthorizationList(this, "eligible_authorization", true);
  public get eligibleAuthorization() {
    return this._eligibleAuthorization;
  }
  public putEligibleAuthorization(value: LighthouseDefinitionEligibleAuthorization[] | cdktf.IResolvable) {
    this._eligibleAuthorization.internalValue = value;
  }
  public resetEligibleAuthorization() {
    this._eligibleAuthorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eligibleAuthorizationInput() {
    return this._eligibleAuthorization.internalValue;
  }

  // plan - computed: false, optional: true, required: false
  private _plan = new LighthouseDefinitionPlanOutputReference(this, "plan");
  public get plan() {
    return this._plan;
  }
  public putPlan(value: LighthouseDefinitionPlan) {
    this._plan.internalValue = value;
  }
  public resetPlan() {
    this._plan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LighthouseDefinitionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LighthouseDefinitionTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      lighthouse_definition_id: cdktf.stringToTerraform(this._lighthouseDefinitionId),
      managing_tenant_id: cdktf.stringToTerraform(this._managingTenantId),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      authorization: cdktf.listMapper(lighthouseDefinitionAuthorizationToTerraform, true)(this._authorization.internalValue),
      eligible_authorization: cdktf.listMapper(lighthouseDefinitionEligibleAuthorizationToTerraform, true)(this._eligibleAuthorization.internalValue),
      plan: lighthouseDefinitionPlanToTerraform(this._plan.internalValue),
      timeouts: lighthouseDefinitionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      lighthouse_definition_id: {
        value: cdktf.stringToHclTerraform(this._lighthouseDefinitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managing_tenant_id: {
        value: cdktf.stringToHclTerraform(this._managingTenantId),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization: {
        value: cdktf.listMapperHcl(lighthouseDefinitionAuthorizationToHclTerraform, true)(this._authorization.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LighthouseDefinitionAuthorizationList",
      },
      eligible_authorization: {
        value: cdktf.listMapperHcl(lighthouseDefinitionEligibleAuthorizationToHclTerraform, true)(this._eligibleAuthorization.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LighthouseDefinitionEligibleAuthorizationList",
      },
      plan: {
        value: lighthouseDefinitionPlanToHclTerraform(this._plan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LighthouseDefinitionPlanList",
      },
      timeouts: {
        value: lighthouseDefinitionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LighthouseDefinitionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
