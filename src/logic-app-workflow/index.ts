// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicAppWorkflowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#enabled LogicAppWorkflow#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#id LogicAppWorkflow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#integration_service_environment_id LogicAppWorkflow#integration_service_environment_id}
  */
  readonly integrationServiceEnvironmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#location LogicAppWorkflow#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#logic_app_integration_account_id LogicAppWorkflow#logic_app_integration_account_id}
  */
  readonly logicAppIntegrationAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#name LogicAppWorkflow#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#parameters LogicAppWorkflow#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#resource_group_name LogicAppWorkflow#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#tags LogicAppWorkflow#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#workflow_parameters LogicAppWorkflow#workflow_parameters}
  */
  readonly workflowParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#workflow_schema LogicAppWorkflow#workflow_schema}
  */
  readonly workflowSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#workflow_version LogicAppWorkflow#workflow_version}
  */
  readonly workflowVersion?: string;
  /**
  * access_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#access_control LogicAppWorkflow#access_control}
  */
  readonly accessControl?: LogicAppWorkflowAccessControl;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#identity LogicAppWorkflow#identity}
  */
  readonly identity?: LogicAppWorkflowIdentity;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#timeouts LogicAppWorkflow#timeouts}
  */
  readonly timeouts?: LogicAppWorkflowTimeouts;
}
export interface LogicAppWorkflowAccessControlAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}
  */
  readonly allowedCallerIpAddressRange: string[];
}

export function logicAppWorkflowAccessControlActionToTerraform(struct?: LogicAppWorkflowAccessControlActionOutputReference | LogicAppWorkflowAccessControlAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_caller_ip_address_range: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedCallerIpAddressRange),
  }
}


export function logicAppWorkflowAccessControlActionToHclTerraform(struct?: LogicAppWorkflowAccessControlActionOutputReference | LogicAppWorkflowAccessControlAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_caller_ip_address_range: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedCallerIpAddressRange),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicAppWorkflowAccessControlActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogicAppWorkflowAccessControlAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCallerIpAddressRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCallerIpAddressRange = this._allowedCallerIpAddressRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicAppWorkflowAccessControlAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedCallerIpAddressRange = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedCallerIpAddressRange = value.allowedCallerIpAddressRange;
    }
  }

  // allowed_caller_ip_address_range - computed: false, optional: false, required: true
  private _allowedCallerIpAddressRange?: string[]; 
  public get allowedCallerIpAddressRange() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_caller_ip_address_range'));
  }
  public set allowedCallerIpAddressRange(value: string[]) {
    this._allowedCallerIpAddressRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCallerIpAddressRangeInput() {
    return this._allowedCallerIpAddressRange;
  }
}
export interface LogicAppWorkflowAccessControlContent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}
  */
  readonly allowedCallerIpAddressRange: string[];
}

export function logicAppWorkflowAccessControlContentToTerraform(struct?: LogicAppWorkflowAccessControlContentOutputReference | LogicAppWorkflowAccessControlContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_caller_ip_address_range: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedCallerIpAddressRange),
  }
}


export function logicAppWorkflowAccessControlContentToHclTerraform(struct?: LogicAppWorkflowAccessControlContentOutputReference | LogicAppWorkflowAccessControlContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_caller_ip_address_range: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedCallerIpAddressRange),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicAppWorkflowAccessControlContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogicAppWorkflowAccessControlContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCallerIpAddressRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCallerIpAddressRange = this._allowedCallerIpAddressRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicAppWorkflowAccessControlContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedCallerIpAddressRange = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedCallerIpAddressRange = value.allowedCallerIpAddressRange;
    }
  }

  // allowed_caller_ip_address_range - computed: false, optional: false, required: true
  private _allowedCallerIpAddressRange?: string[]; 
  public get allowedCallerIpAddressRange() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_caller_ip_address_range'));
  }
  public set allowedCallerIpAddressRange(value: string[]) {
    this._allowedCallerIpAddressRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCallerIpAddressRangeInput() {
    return this._allowedCallerIpAddressRange;
  }
}
export interface LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#name LogicAppWorkflow#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#value LogicAppWorkflow#value}
  */
  readonly value: string;
}

export function logicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimToTerraform(struct?: LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function logicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimToHclTerraform(struct?: LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList extends cdktf.ComplexList {
  public internalValue? : LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim[] | cdktf.IResolvable

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
  public get(index: number): LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference {
    return new LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#name LogicAppWorkflow#name}
  */
  readonly name: string;
  /**
  * claim block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#claim LogicAppWorkflow#claim}
  */
  readonly claim: LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim[] | cdktf.IResolvable;
}

export function logicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyToTerraform(struct?: LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    claim: cdktf.listMapper(logicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimToTerraform, true)(struct!.claim),
  }
}


export function logicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyToHclTerraform(struct?: LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy | cdktf.IResolvable): any {
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
    claim: {
      value: cdktf.listMapperHcl(logicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimToHclTerraform, true)(struct!.claim),
      isBlock: true,
      type: "set",
      storageClassType: "LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._claim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claim = this._claim?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._claim.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._claim.internalValue = value.claim;
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

  // claim - computed: false, optional: false, required: true
  private _claim = new LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList(this, "claim", true);
  public get claim() {
    return this._claim;
  }
  public putClaim(value: LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim[] | cdktf.IResolvable) {
    this._claim.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimInput() {
    return this._claim.internalValue;
  }
}

export class LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList extends cdktf.ComplexList {
  public internalValue? : LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy[] | cdktf.IResolvable

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
  public get(index: number): LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference {
    return new LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicAppWorkflowAccessControlTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}
  */
  readonly allowedCallerIpAddressRange: string[];
  /**
  * open_authentication_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#open_authentication_policy LogicAppWorkflow#open_authentication_policy}
  */
  readonly openAuthenticationPolicy?: LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy[] | cdktf.IResolvable;
}

export function logicAppWorkflowAccessControlTriggerToTerraform(struct?: LogicAppWorkflowAccessControlTriggerOutputReference | LogicAppWorkflowAccessControlTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_caller_ip_address_range: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedCallerIpAddressRange),
    open_authentication_policy: cdktf.listMapper(logicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyToTerraform, true)(struct!.openAuthenticationPolicy),
  }
}


export function logicAppWorkflowAccessControlTriggerToHclTerraform(struct?: LogicAppWorkflowAccessControlTriggerOutputReference | LogicAppWorkflowAccessControlTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_caller_ip_address_range: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedCallerIpAddressRange),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    open_authentication_policy: {
      value: cdktf.listMapperHcl(logicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyToHclTerraform, true)(struct!.openAuthenticationPolicy),
      isBlock: true,
      type: "set",
      storageClassType: "LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicAppWorkflowAccessControlTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogicAppWorkflowAccessControlTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCallerIpAddressRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCallerIpAddressRange = this._allowedCallerIpAddressRange;
    }
    if (this._openAuthenticationPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openAuthenticationPolicy = this._openAuthenticationPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicAppWorkflowAccessControlTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedCallerIpAddressRange = undefined;
      this._openAuthenticationPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedCallerIpAddressRange = value.allowedCallerIpAddressRange;
      this._openAuthenticationPolicy.internalValue = value.openAuthenticationPolicy;
    }
  }

  // allowed_caller_ip_address_range - computed: false, optional: false, required: true
  private _allowedCallerIpAddressRange?: string[]; 
  public get allowedCallerIpAddressRange() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_caller_ip_address_range'));
  }
  public set allowedCallerIpAddressRange(value: string[]) {
    this._allowedCallerIpAddressRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCallerIpAddressRangeInput() {
    return this._allowedCallerIpAddressRange;
  }

  // open_authentication_policy - computed: false, optional: true, required: false
  private _openAuthenticationPolicy = new LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList(this, "open_authentication_policy", true);
  public get openAuthenticationPolicy() {
    return this._openAuthenticationPolicy;
  }
  public putOpenAuthenticationPolicy(value: LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy[] | cdktf.IResolvable) {
    this._openAuthenticationPolicy.internalValue = value;
  }
  public resetOpenAuthenticationPolicy() {
    this._openAuthenticationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openAuthenticationPolicyInput() {
    return this._openAuthenticationPolicy.internalValue;
  }
}
export interface LogicAppWorkflowAccessControlWorkflowManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}
  */
  readonly allowedCallerIpAddressRange: string[];
}

export function logicAppWorkflowAccessControlWorkflowManagementToTerraform(struct?: LogicAppWorkflowAccessControlWorkflowManagementOutputReference | LogicAppWorkflowAccessControlWorkflowManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_caller_ip_address_range: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedCallerIpAddressRange),
  }
}


export function logicAppWorkflowAccessControlWorkflowManagementToHclTerraform(struct?: LogicAppWorkflowAccessControlWorkflowManagementOutputReference | LogicAppWorkflowAccessControlWorkflowManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_caller_ip_address_range: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedCallerIpAddressRange),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicAppWorkflowAccessControlWorkflowManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogicAppWorkflowAccessControlWorkflowManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCallerIpAddressRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCallerIpAddressRange = this._allowedCallerIpAddressRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicAppWorkflowAccessControlWorkflowManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedCallerIpAddressRange = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedCallerIpAddressRange = value.allowedCallerIpAddressRange;
    }
  }

  // allowed_caller_ip_address_range - computed: false, optional: false, required: true
  private _allowedCallerIpAddressRange?: string[]; 
  public get allowedCallerIpAddressRange() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_caller_ip_address_range'));
  }
  public set allowedCallerIpAddressRange(value: string[]) {
    this._allowedCallerIpAddressRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCallerIpAddressRangeInput() {
    return this._allowedCallerIpAddressRange;
  }
}
export interface LogicAppWorkflowAccessControl {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#action LogicAppWorkflow#action}
  */
  readonly action?: LogicAppWorkflowAccessControlAction;
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#content LogicAppWorkflow#content}
  */
  readonly content?: LogicAppWorkflowAccessControlContent;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#trigger LogicAppWorkflow#trigger}
  */
  readonly trigger?: LogicAppWorkflowAccessControlTrigger;
  /**
  * workflow_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#workflow_management LogicAppWorkflow#workflow_management}
  */
  readonly workflowManagement?: LogicAppWorkflowAccessControlWorkflowManagement;
}

export function logicAppWorkflowAccessControlToTerraform(struct?: LogicAppWorkflowAccessControlOutputReference | LogicAppWorkflowAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: logicAppWorkflowAccessControlActionToTerraform(struct!.action),
    content: logicAppWorkflowAccessControlContentToTerraform(struct!.content),
    trigger: logicAppWorkflowAccessControlTriggerToTerraform(struct!.trigger),
    workflow_management: logicAppWorkflowAccessControlWorkflowManagementToTerraform(struct!.workflowManagement),
  }
}


export function logicAppWorkflowAccessControlToHclTerraform(struct?: LogicAppWorkflowAccessControlOutputReference | LogicAppWorkflowAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: logicAppWorkflowAccessControlActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "LogicAppWorkflowAccessControlActionList",
    },
    content: {
      value: logicAppWorkflowAccessControlContentToHclTerraform(struct!.content),
      isBlock: true,
      type: "list",
      storageClassType: "LogicAppWorkflowAccessControlContentList",
    },
    trigger: {
      value: logicAppWorkflowAccessControlTriggerToHclTerraform(struct!.trigger),
      isBlock: true,
      type: "list",
      storageClassType: "LogicAppWorkflowAccessControlTriggerList",
    },
    workflow_management: {
      value: logicAppWorkflowAccessControlWorkflowManagementToHclTerraform(struct!.workflowManagement),
      isBlock: true,
      type: "list",
      storageClassType: "LogicAppWorkflowAccessControlWorkflowManagementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicAppWorkflowAccessControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogicAppWorkflowAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._content?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content?.internalValue;
    }
    if (this._trigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger?.internalValue;
    }
    if (this._workflowManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowManagement = this._workflowManagement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicAppWorkflowAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action.internalValue = undefined;
      this._content.internalValue = undefined;
      this._trigger.internalValue = undefined;
      this._workflowManagement.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action.internalValue = value.action;
      this._content.internalValue = value.content;
      this._trigger.internalValue = value.trigger;
      this._workflowManagement.internalValue = value.workflowManagement;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new LogicAppWorkflowAccessControlActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: LogicAppWorkflowAccessControlAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // content - computed: false, optional: true, required: false
  private _content = new LogicAppWorkflowAccessControlContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: LogicAppWorkflowAccessControlContent) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger = new LogicAppWorkflowAccessControlTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: LogicAppWorkflowAccessControlTrigger) {
    this._trigger.internalValue = value;
  }
  public resetTrigger() {
    this._trigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }

  // workflow_management - computed: false, optional: true, required: false
  private _workflowManagement = new LogicAppWorkflowAccessControlWorkflowManagementOutputReference(this, "workflow_management");
  public get workflowManagement() {
    return this._workflowManagement;
  }
  public putWorkflowManagement(value: LogicAppWorkflowAccessControlWorkflowManagement) {
    this._workflowManagement.internalValue = value;
  }
  public resetWorkflowManagement() {
    this._workflowManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowManagementInput() {
    return this._workflowManagement.internalValue;
  }
}
export interface LogicAppWorkflowIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#identity_ids LogicAppWorkflow#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#type LogicAppWorkflow#type}
  */
  readonly type: string;
}

export function logicAppWorkflowIdentityToTerraform(struct?: LogicAppWorkflowIdentityOutputReference | LogicAppWorkflowIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function logicAppWorkflowIdentityToHclTerraform(struct?: LogicAppWorkflowIdentityOutputReference | LogicAppWorkflowIdentity): any {
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

export class LogicAppWorkflowIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogicAppWorkflowIdentity | undefined {
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

  public set internalValue(value: LogicAppWorkflowIdentity | undefined) {
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
export interface LogicAppWorkflowTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#create LogicAppWorkflow#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#delete LogicAppWorkflow#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#read LogicAppWorkflow#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#update LogicAppWorkflow#update}
  */
  readonly update?: string;
}

export function logicAppWorkflowTimeoutsToTerraform(struct?: LogicAppWorkflowTimeouts | cdktf.IResolvable): any {
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


export function logicAppWorkflowTimeoutsToHclTerraform(struct?: LogicAppWorkflowTimeouts | cdktf.IResolvable): any {
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

export class LogicAppWorkflowTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicAppWorkflowTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicAppWorkflowTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow azurerm_logic_app_workflow}
*/
export class LogicAppWorkflow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_logic_app_workflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogicAppWorkflow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogicAppWorkflow to import
  * @param importFromId The id of the existing LogicAppWorkflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogicAppWorkflow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_logic_app_workflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/logic_app_workflow azurerm_logic_app_workflow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicAppWorkflowConfig
  */
  public constructor(scope: Construct, id: string, config: LogicAppWorkflowConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_logic_app_workflow',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._integrationServiceEnvironmentId = config.integrationServiceEnvironmentId;
    this._location = config.location;
    this._logicAppIntegrationAccountId = config.logicAppIntegrationAccountId;
    this._name = config.name;
    this._parameters = config.parameters;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._workflowParameters = config.workflowParameters;
    this._workflowSchema = config.workflowSchema;
    this._workflowVersion = config.workflowVersion;
    this._accessControl.internalValue = config.accessControl;
    this._identity.internalValue = config.identity;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_endpoint - computed: true, optional: false, required: false
  public get accessEndpoint() {
    return this.getStringAttribute('access_endpoint');
  }

  // connector_endpoint_ip_addresses - computed: true, optional: false, required: false
  public get connectorEndpointIpAddresses() {
    return this.getListAttribute('connector_endpoint_ip_addresses');
  }

  // connector_outbound_ip_addresses - computed: true, optional: false, required: false
  public get connectorOutboundIpAddresses() {
    return this.getListAttribute('connector_outbound_ip_addresses');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // integration_service_environment_id - computed: false, optional: true, required: false
  private _integrationServiceEnvironmentId?: string; 
  public get integrationServiceEnvironmentId() {
    return this.getStringAttribute('integration_service_environment_id');
  }
  public set integrationServiceEnvironmentId(value: string) {
    this._integrationServiceEnvironmentId = value;
  }
  public resetIntegrationServiceEnvironmentId() {
    this._integrationServiceEnvironmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationServiceEnvironmentIdInput() {
    return this._integrationServiceEnvironmentId;
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

  // logic_app_integration_account_id - computed: false, optional: true, required: false
  private _logicAppIntegrationAccountId?: string; 
  public get logicAppIntegrationAccountId() {
    return this.getStringAttribute('logic_app_integration_account_id');
  }
  public set logicAppIntegrationAccountId(value: string) {
    this._logicAppIntegrationAccountId = value;
  }
  public resetLogicAppIntegrationAccountId() {
    this._logicAppIntegrationAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicAppIntegrationAccountIdInput() {
    return this._logicAppIntegrationAccountId;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
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

  // workflow_endpoint_ip_addresses - computed: true, optional: false, required: false
  public get workflowEndpointIpAddresses() {
    return this.getListAttribute('workflow_endpoint_ip_addresses');
  }

  // workflow_outbound_ip_addresses - computed: true, optional: false, required: false
  public get workflowOutboundIpAddresses() {
    return this.getListAttribute('workflow_outbound_ip_addresses');
  }

  // workflow_parameters - computed: false, optional: true, required: false
  private _workflowParameters?: { [key: string]: string }; 
  public get workflowParameters() {
    return this.getStringMapAttribute('workflow_parameters');
  }
  public set workflowParameters(value: { [key: string]: string }) {
    this._workflowParameters = value;
  }
  public resetWorkflowParameters() {
    this._workflowParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowParametersInput() {
    return this._workflowParameters;
  }

  // workflow_schema - computed: false, optional: true, required: false
  private _workflowSchema?: string; 
  public get workflowSchema() {
    return this.getStringAttribute('workflow_schema');
  }
  public set workflowSchema(value: string) {
    this._workflowSchema = value;
  }
  public resetWorkflowSchema() {
    this._workflowSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowSchemaInput() {
    return this._workflowSchema;
  }

  // workflow_version - computed: false, optional: true, required: false
  private _workflowVersion?: string; 
  public get workflowVersion() {
    return this.getStringAttribute('workflow_version');
  }
  public set workflowVersion(value: string) {
    this._workflowVersion = value;
  }
  public resetWorkflowVersion() {
    this._workflowVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowVersionInput() {
    return this._workflowVersion;
  }

  // access_control - computed: false, optional: true, required: false
  private _accessControl = new LogicAppWorkflowAccessControlOutputReference(this, "access_control");
  public get accessControl() {
    return this._accessControl;
  }
  public putAccessControl(value: LogicAppWorkflowAccessControl) {
    this._accessControl.internalValue = value;
  }
  public resetAccessControl() {
    this._accessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlInput() {
    return this._accessControl.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new LogicAppWorkflowIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: LogicAppWorkflowIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LogicAppWorkflowTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LogicAppWorkflowTimeouts) {
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      integration_service_environment_id: cdktf.stringToTerraform(this._integrationServiceEnvironmentId),
      location: cdktf.stringToTerraform(this._location),
      logic_app_integration_account_id: cdktf.stringToTerraform(this._logicAppIntegrationAccountId),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      workflow_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._workflowParameters),
      workflow_schema: cdktf.stringToTerraform(this._workflowSchema),
      workflow_version: cdktf.stringToTerraform(this._workflowVersion),
      access_control: logicAppWorkflowAccessControlToTerraform(this._accessControl.internalValue),
      identity: logicAppWorkflowIdentityToTerraform(this._identity.internalValue),
      timeouts: logicAppWorkflowTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_service_environment_id: {
        value: cdktf.stringToHclTerraform(this._integrationServiceEnvironmentId),
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
      logic_app_integration_account_id: {
        value: cdktf.stringToHclTerraform(this._logicAppIntegrationAccountId),
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
      parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
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
      workflow_parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._workflowParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      workflow_schema: {
        value: cdktf.stringToHclTerraform(this._workflowSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workflow_version: {
        value: cdktf.stringToHclTerraform(this._workflowVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_control: {
        value: logicAppWorkflowAccessControlToHclTerraform(this._accessControl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogicAppWorkflowAccessControlList",
      },
      identity: {
        value: logicAppWorkflowIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogicAppWorkflowIdentityList",
      },
      timeouts: {
        value: logicAppWorkflowTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogicAppWorkflowTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
