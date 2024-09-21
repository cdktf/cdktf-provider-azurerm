// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnFrontdoorRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#behavior_on_match CdnFrontdoorRule#behavior_on_match}
  */
  readonly behaviorOnMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#cdn_frontdoor_rule_set_id CdnFrontdoorRule#cdn_frontdoor_rule_set_id}
  */
  readonly cdnFrontdoorRuleSetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#id CdnFrontdoorRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#order CdnFrontdoorRule#order}
  */
  readonly order: number;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#actions CdnFrontdoorRule#actions}
  */
  readonly actions: CdnFrontdoorRuleActions;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#conditions CdnFrontdoorRule#conditions}
  */
  readonly conditions?: CdnFrontdoorRuleConditions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#timeouts CdnFrontdoorRule#timeouts}
  */
  readonly timeouts?: CdnFrontdoorRuleTimeouts;
}
export interface CdnFrontdoorRuleActionsRequestHeaderAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#header_action CdnFrontdoorRule#header_action}
  */
  readonly headerAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#header_name CdnFrontdoorRule#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#value CdnFrontdoorRule#value}
  */
  readonly value?: string;
}

export function cdnFrontdoorRuleActionsRequestHeaderActionToTerraform(struct?: CdnFrontdoorRuleActionsRequestHeaderAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_action: cdktf.stringToTerraform(struct!.headerAction),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnFrontdoorRuleActionsRequestHeaderActionToHclTerraform(struct?: CdnFrontdoorRuleActionsRequestHeaderAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_action: {
      value: cdktf.stringToHclTerraform(struct!.headerAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
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

export class CdnFrontdoorRuleActionsRequestHeaderActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleActionsRequestHeaderAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAction = this._headerAction;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleActionsRequestHeaderAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerAction = undefined;
      this._headerName = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerAction = value.headerAction;
      this._headerName = value.headerName;
      this._value = value.value;
    }
  }

  // header_action - computed: false, optional: false, required: true
  private _headerAction?: string; 
  public get headerAction() {
    return this.getStringAttribute('header_action');
  }
  public set headerAction(value: string) {
    this._headerAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction;
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CdnFrontdoorRuleActionsRequestHeaderActionList extends cdktf.ComplexList {
  public internalValue? : CdnFrontdoorRuleActionsRequestHeaderAction[] | cdktf.IResolvable

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
  public get(index: number): CdnFrontdoorRuleActionsRequestHeaderActionOutputReference {
    return new CdnFrontdoorRuleActionsRequestHeaderActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleActionsResponseHeaderAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#header_action CdnFrontdoorRule#header_action}
  */
  readonly headerAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#header_name CdnFrontdoorRule#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#value CdnFrontdoorRule#value}
  */
  readonly value?: string;
}

export function cdnFrontdoorRuleActionsResponseHeaderActionToTerraform(struct?: CdnFrontdoorRuleActionsResponseHeaderAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_action: cdktf.stringToTerraform(struct!.headerAction),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnFrontdoorRuleActionsResponseHeaderActionToHclTerraform(struct?: CdnFrontdoorRuleActionsResponseHeaderAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_action: {
      value: cdktf.stringToHclTerraform(struct!.headerAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
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

export class CdnFrontdoorRuleActionsResponseHeaderActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleActionsResponseHeaderAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAction = this._headerAction;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleActionsResponseHeaderAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerAction = undefined;
      this._headerName = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerAction = value.headerAction;
      this._headerName = value.headerName;
      this._value = value.value;
    }
  }

  // header_action - computed: false, optional: false, required: true
  private _headerAction?: string; 
  public get headerAction() {
    return this.getStringAttribute('header_action');
  }
  public set headerAction(value: string) {
    this._headerAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction;
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CdnFrontdoorRuleActionsResponseHeaderActionList extends cdktf.ComplexList {
  public internalValue? : CdnFrontdoorRuleActionsResponseHeaderAction[] | cdktf.IResolvable

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
  public get(index: number): CdnFrontdoorRuleActionsResponseHeaderActionOutputReference {
    return new CdnFrontdoorRuleActionsResponseHeaderActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleActionsRouteConfigurationOverrideAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#cache_behavior CdnFrontdoorRule#cache_behavior}
  */
  readonly cacheBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#cache_duration CdnFrontdoorRule#cache_duration}
  */
  readonly cacheDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#cdn_frontdoor_origin_group_id CdnFrontdoorRule#cdn_frontdoor_origin_group_id}
  */
  readonly cdnFrontdoorOriginGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#compression_enabled CdnFrontdoorRule#compression_enabled}
  */
  readonly compressionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#forwarding_protocol CdnFrontdoorRule#forwarding_protocol}
  */
  readonly forwardingProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#query_string_caching_behavior CdnFrontdoorRule#query_string_caching_behavior}
  */
  readonly queryStringCachingBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#query_string_parameters CdnFrontdoorRule#query_string_parameters}
  */
  readonly queryStringParameters?: string[];
}

export function cdnFrontdoorRuleActionsRouteConfigurationOverrideActionToTerraform(struct?: CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference | CdnFrontdoorRuleActionsRouteConfigurationOverrideAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_behavior: cdktf.stringToTerraform(struct!.cacheBehavior),
    cache_duration: cdktf.stringToTerraform(struct!.cacheDuration),
    cdn_frontdoor_origin_group_id: cdktf.stringToTerraform(struct!.cdnFrontdoorOriginGroupId),
    compression_enabled: cdktf.booleanToTerraform(struct!.compressionEnabled),
    forwarding_protocol: cdktf.stringToTerraform(struct!.forwardingProtocol),
    query_string_caching_behavior: cdktf.stringToTerraform(struct!.queryStringCachingBehavior),
    query_string_parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryStringParameters),
  }
}


export function cdnFrontdoorRuleActionsRouteConfigurationOverrideActionToHclTerraform(struct?: CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference | CdnFrontdoorRuleActionsRouteConfigurationOverrideAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_behavior: {
      value: cdktf.stringToHclTerraform(struct!.cacheBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_duration: {
      value: cdktf.stringToHclTerraform(struct!.cacheDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cdn_frontdoor_origin_group_id: {
      value: cdktf.stringToHclTerraform(struct!.cdnFrontdoorOriginGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.compressionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forwarding_protocol: {
      value: cdktf.stringToHclTerraform(struct!.forwardingProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string_caching_behavior: {
      value: cdktf.stringToHclTerraform(struct!.queryStringCachingBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string_parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.queryStringParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorRuleActionsRouteConfigurationOverrideAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheBehavior = this._cacheBehavior;
    }
    if (this._cacheDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheDuration = this._cacheDuration;
    }
    if (this._cdnFrontdoorOriginGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdnFrontdoorOriginGroupId = this._cdnFrontdoorOriginGroupId;
    }
    if (this._compressionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionEnabled = this._compressionEnabled;
    }
    if (this._forwardingProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingProtocol = this._forwardingProtocol;
    }
    if (this._queryStringCachingBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringCachingBehavior = this._queryStringCachingBehavior;
    }
    if (this._queryStringParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringParameters = this._queryStringParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleActionsRouteConfigurationOverrideAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheBehavior = undefined;
      this._cacheDuration = undefined;
      this._cdnFrontdoorOriginGroupId = undefined;
      this._compressionEnabled = undefined;
      this._forwardingProtocol = undefined;
      this._queryStringCachingBehavior = undefined;
      this._queryStringParameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheBehavior = value.cacheBehavior;
      this._cacheDuration = value.cacheDuration;
      this._cdnFrontdoorOriginGroupId = value.cdnFrontdoorOriginGroupId;
      this._compressionEnabled = value.compressionEnabled;
      this._forwardingProtocol = value.forwardingProtocol;
      this._queryStringCachingBehavior = value.queryStringCachingBehavior;
      this._queryStringParameters = value.queryStringParameters;
    }
  }

  // cache_behavior - computed: false, optional: true, required: false
  private _cacheBehavior?: string; 
  public get cacheBehavior() {
    return this.getStringAttribute('cache_behavior');
  }
  public set cacheBehavior(value: string) {
    this._cacheBehavior = value;
  }
  public resetCacheBehavior() {
    this._cacheBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheBehaviorInput() {
    return this._cacheBehavior;
  }

  // cache_duration - computed: false, optional: true, required: false
  private _cacheDuration?: string; 
  public get cacheDuration() {
    return this.getStringAttribute('cache_duration');
  }
  public set cacheDuration(value: string) {
    this._cacheDuration = value;
  }
  public resetCacheDuration() {
    this._cacheDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDurationInput() {
    return this._cacheDuration;
  }

  // cdn_frontdoor_origin_group_id - computed: false, optional: true, required: false
  private _cdnFrontdoorOriginGroupId?: string; 
  public get cdnFrontdoorOriginGroupId() {
    return this.getStringAttribute('cdn_frontdoor_origin_group_id');
  }
  public set cdnFrontdoorOriginGroupId(value: string) {
    this._cdnFrontdoorOriginGroupId = value;
  }
  public resetCdnFrontdoorOriginGroupId() {
    this._cdnFrontdoorOriginGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnFrontdoorOriginGroupIdInput() {
    return this._cdnFrontdoorOriginGroupId;
  }

  // compression_enabled - computed: false, optional: true, required: false
  private _compressionEnabled?: boolean | cdktf.IResolvable; 
  public get compressionEnabled() {
    return this.getBooleanAttribute('compression_enabled');
  }
  public set compressionEnabled(value: boolean | cdktf.IResolvable) {
    this._compressionEnabled = value;
  }
  public resetCompressionEnabled() {
    this._compressionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionEnabledInput() {
    return this._compressionEnabled;
  }

  // forwarding_protocol - computed: false, optional: true, required: false
  private _forwardingProtocol?: string; 
  public get forwardingProtocol() {
    return this.getStringAttribute('forwarding_protocol');
  }
  public set forwardingProtocol(value: string) {
    this._forwardingProtocol = value;
  }
  public resetForwardingProtocol() {
    this._forwardingProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingProtocolInput() {
    return this._forwardingProtocol;
  }

  // query_string_caching_behavior - computed: false, optional: true, required: false
  private _queryStringCachingBehavior?: string; 
  public get queryStringCachingBehavior() {
    return this.getStringAttribute('query_string_caching_behavior');
  }
  public set queryStringCachingBehavior(value: string) {
    this._queryStringCachingBehavior = value;
  }
  public resetQueryStringCachingBehavior() {
    this._queryStringCachingBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringCachingBehaviorInput() {
    return this._queryStringCachingBehavior;
  }

  // query_string_parameters - computed: false, optional: true, required: false
  private _queryStringParameters?: string[]; 
  public get queryStringParameters() {
    return this.getListAttribute('query_string_parameters');
  }
  public set queryStringParameters(value: string[]) {
    this._queryStringParameters = value;
  }
  public resetQueryStringParameters() {
    this._queryStringParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringParametersInput() {
    return this._queryStringParameters;
  }
}
export interface CdnFrontdoorRuleActionsUrlRedirectAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#destination_fragment CdnFrontdoorRule#destination_fragment}
  */
  readonly destinationFragment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#destination_hostname CdnFrontdoorRule#destination_hostname}
  */
  readonly destinationHostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#destination_path CdnFrontdoorRule#destination_path}
  */
  readonly destinationPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#query_string CdnFrontdoorRule#query_string}
  */
  readonly queryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#redirect_protocol CdnFrontdoorRule#redirect_protocol}
  */
  readonly redirectProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#redirect_type CdnFrontdoorRule#redirect_type}
  */
  readonly redirectType: string;
}

export function cdnFrontdoorRuleActionsUrlRedirectActionToTerraform(struct?: CdnFrontdoorRuleActionsUrlRedirectActionOutputReference | CdnFrontdoorRuleActionsUrlRedirectAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_fragment: cdktf.stringToTerraform(struct!.destinationFragment),
    destination_hostname: cdktf.stringToTerraform(struct!.destinationHostname),
    destination_path: cdktf.stringToTerraform(struct!.destinationPath),
    query_string: cdktf.stringToTerraform(struct!.queryString),
    redirect_protocol: cdktf.stringToTerraform(struct!.redirectProtocol),
    redirect_type: cdktf.stringToTerraform(struct!.redirectType),
  }
}


export function cdnFrontdoorRuleActionsUrlRedirectActionToHclTerraform(struct?: CdnFrontdoorRuleActionsUrlRedirectActionOutputReference | CdnFrontdoorRuleActionsUrlRedirectAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_fragment: {
      value: cdktf.stringToHclTerraform(struct!.destinationFragment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_hostname: {
      value: cdktf.stringToHclTerraform(struct!.destinationHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_path: {
      value: cdktf.stringToHclTerraform(struct!.destinationPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string: {
      value: cdktf.stringToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_protocol: {
      value: cdktf.stringToHclTerraform(struct!.redirectProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_type: {
      value: cdktf.stringToHclTerraform(struct!.redirectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleActionsUrlRedirectActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorRuleActionsUrlRedirectAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationFragment !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFragment = this._destinationFragment;
    }
    if (this._destinationHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationHostname = this._destinationHostname;
    }
    if (this._destinationPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPath = this._destinationPath;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._redirectProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectProtocol = this._redirectProtocol;
    }
    if (this._redirectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectType = this._redirectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleActionsUrlRedirectAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationFragment = undefined;
      this._destinationHostname = undefined;
      this._destinationPath = undefined;
      this._queryString = undefined;
      this._redirectProtocol = undefined;
      this._redirectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationFragment = value.destinationFragment;
      this._destinationHostname = value.destinationHostname;
      this._destinationPath = value.destinationPath;
      this._queryString = value.queryString;
      this._redirectProtocol = value.redirectProtocol;
      this._redirectType = value.redirectType;
    }
  }

  // destination_fragment - computed: false, optional: true, required: false
  private _destinationFragment?: string; 
  public get destinationFragment() {
    return this.getStringAttribute('destination_fragment');
  }
  public set destinationFragment(value: string) {
    this._destinationFragment = value;
  }
  public resetDestinationFragment() {
    this._destinationFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFragmentInput() {
    return this._destinationFragment;
  }

  // destination_hostname - computed: false, optional: false, required: true
  private _destinationHostname?: string; 
  public get destinationHostname() {
    return this.getStringAttribute('destination_hostname');
  }
  public set destinationHostname(value: string) {
    this._destinationHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationHostnameInput() {
    return this._destinationHostname;
  }

  // destination_path - computed: false, optional: true, required: false
  private _destinationPath?: string; 
  public get destinationPath() {
    return this.getStringAttribute('destination_path');
  }
  public set destinationPath(value: string) {
    this._destinationPath = value;
  }
  public resetDestinationPath() {
    this._destinationPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPathInput() {
    return this._destinationPath;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // redirect_protocol - computed: false, optional: true, required: false
  private _redirectProtocol?: string; 
  public get redirectProtocol() {
    return this.getStringAttribute('redirect_protocol');
  }
  public set redirectProtocol(value: string) {
    this._redirectProtocol = value;
  }
  public resetRedirectProtocol() {
    this._redirectProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectProtocolInput() {
    return this._redirectProtocol;
  }

  // redirect_type - computed: false, optional: false, required: true
  private _redirectType?: string; 
  public get redirectType() {
    return this.getStringAttribute('redirect_type');
  }
  public set redirectType(value: string) {
    this._redirectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectTypeInput() {
    return this._redirectType;
  }
}
export interface CdnFrontdoorRuleActionsUrlRewriteAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#destination CdnFrontdoorRule#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#preserve_unmatched_path CdnFrontdoorRule#preserve_unmatched_path}
  */
  readonly preserveUnmatchedPath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#source_pattern CdnFrontdoorRule#source_pattern}
  */
  readonly sourcePattern: string;
}

export function cdnFrontdoorRuleActionsUrlRewriteActionToTerraform(struct?: CdnFrontdoorRuleActionsUrlRewriteActionOutputReference | CdnFrontdoorRuleActionsUrlRewriteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    preserve_unmatched_path: cdktf.booleanToTerraform(struct!.preserveUnmatchedPath),
    source_pattern: cdktf.stringToTerraform(struct!.sourcePattern),
  }
}


export function cdnFrontdoorRuleActionsUrlRewriteActionToHclTerraform(struct?: CdnFrontdoorRuleActionsUrlRewriteActionOutputReference | CdnFrontdoorRuleActionsUrlRewriteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_unmatched_path: {
      value: cdktf.booleanToHclTerraform(struct!.preserveUnmatchedPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_pattern: {
      value: cdktf.stringToHclTerraform(struct!.sourcePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleActionsUrlRewriteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorRuleActionsUrlRewriteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._preserveUnmatchedPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveUnmatchedPath = this._preserveUnmatchedPath;
    }
    if (this._sourcePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePattern = this._sourcePattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleActionsUrlRewriteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
      this._preserveUnmatchedPath = undefined;
      this._sourcePattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
      this._preserveUnmatchedPath = value.preserveUnmatchedPath;
      this._sourcePattern = value.sourcePattern;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // preserve_unmatched_path - computed: false, optional: true, required: false
  private _preserveUnmatchedPath?: boolean | cdktf.IResolvable; 
  public get preserveUnmatchedPath() {
    return this.getBooleanAttribute('preserve_unmatched_path');
  }
  public set preserveUnmatchedPath(value: boolean | cdktf.IResolvable) {
    this._preserveUnmatchedPath = value;
  }
  public resetPreserveUnmatchedPath() {
    this._preserveUnmatchedPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveUnmatchedPathInput() {
    return this._preserveUnmatchedPath;
  }

  // source_pattern - computed: false, optional: false, required: true
  private _sourcePattern?: string; 
  public get sourcePattern() {
    return this.getStringAttribute('source_pattern');
  }
  public set sourcePattern(value: string) {
    this._sourcePattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePatternInput() {
    return this._sourcePattern;
  }
}
export interface CdnFrontdoorRuleActions {
  /**
  * request_header_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#request_header_action CdnFrontdoorRule#request_header_action}
  */
  readonly requestHeaderAction?: CdnFrontdoorRuleActionsRequestHeaderAction[] | cdktf.IResolvable;
  /**
  * response_header_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#response_header_action CdnFrontdoorRule#response_header_action}
  */
  readonly responseHeaderAction?: CdnFrontdoorRuleActionsResponseHeaderAction[] | cdktf.IResolvable;
  /**
  * route_configuration_override_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#route_configuration_override_action CdnFrontdoorRule#route_configuration_override_action}
  */
  readonly routeConfigurationOverrideAction?: CdnFrontdoorRuleActionsRouteConfigurationOverrideAction;
  /**
  * url_redirect_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#url_redirect_action CdnFrontdoorRule#url_redirect_action}
  */
  readonly urlRedirectAction?: CdnFrontdoorRuleActionsUrlRedirectAction;
  /**
  * url_rewrite_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#url_rewrite_action CdnFrontdoorRule#url_rewrite_action}
  */
  readonly urlRewriteAction?: CdnFrontdoorRuleActionsUrlRewriteAction;
}

export function cdnFrontdoorRuleActionsToTerraform(struct?: CdnFrontdoorRuleActionsOutputReference | CdnFrontdoorRuleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_header_action: cdktf.listMapper(cdnFrontdoorRuleActionsRequestHeaderActionToTerraform, true)(struct!.requestHeaderAction),
    response_header_action: cdktf.listMapper(cdnFrontdoorRuleActionsResponseHeaderActionToTerraform, true)(struct!.responseHeaderAction),
    route_configuration_override_action: cdnFrontdoorRuleActionsRouteConfigurationOverrideActionToTerraform(struct!.routeConfigurationOverrideAction),
    url_redirect_action: cdnFrontdoorRuleActionsUrlRedirectActionToTerraform(struct!.urlRedirectAction),
    url_rewrite_action: cdnFrontdoorRuleActionsUrlRewriteActionToTerraform(struct!.urlRewriteAction),
  }
}


export function cdnFrontdoorRuleActionsToHclTerraform(struct?: CdnFrontdoorRuleActionsOutputReference | CdnFrontdoorRuleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_header_action: {
      value: cdktf.listMapperHcl(cdnFrontdoorRuleActionsRequestHeaderActionToHclTerraform, true)(struct!.requestHeaderAction),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleActionsRequestHeaderActionList",
    },
    response_header_action: {
      value: cdktf.listMapperHcl(cdnFrontdoorRuleActionsResponseHeaderActionToHclTerraform, true)(struct!.responseHeaderAction),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleActionsResponseHeaderActionList",
    },
    route_configuration_override_action: {
      value: cdnFrontdoorRuleActionsRouteConfigurationOverrideActionToHclTerraform(struct!.routeConfigurationOverrideAction),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleActionsRouteConfigurationOverrideActionList",
    },
    url_redirect_action: {
      value: cdnFrontdoorRuleActionsUrlRedirectActionToHclTerraform(struct!.urlRedirectAction),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleActionsUrlRedirectActionList",
    },
    url_rewrite_action: {
      value: cdnFrontdoorRuleActionsUrlRewriteActionToHclTerraform(struct!.urlRewriteAction),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleActionsUrlRewriteActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorRuleActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeaderAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaderAction = this._requestHeaderAction?.internalValue;
    }
    if (this._responseHeaderAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaderAction = this._responseHeaderAction?.internalValue;
    }
    if (this._routeConfigurationOverrideAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeConfigurationOverrideAction = this._routeConfigurationOverrideAction?.internalValue;
    }
    if (this._urlRedirectAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRedirectAction = this._urlRedirectAction?.internalValue;
    }
    if (this._urlRewriteAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRewriteAction = this._urlRewriteAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestHeaderAction.internalValue = undefined;
      this._responseHeaderAction.internalValue = undefined;
      this._routeConfigurationOverrideAction.internalValue = undefined;
      this._urlRedirectAction.internalValue = undefined;
      this._urlRewriteAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestHeaderAction.internalValue = value.requestHeaderAction;
      this._responseHeaderAction.internalValue = value.responseHeaderAction;
      this._routeConfigurationOverrideAction.internalValue = value.routeConfigurationOverrideAction;
      this._urlRedirectAction.internalValue = value.urlRedirectAction;
      this._urlRewriteAction.internalValue = value.urlRewriteAction;
    }
  }

  // request_header_action - computed: false, optional: true, required: false
  private _requestHeaderAction = new CdnFrontdoorRuleActionsRequestHeaderActionList(this, "request_header_action", false);
  public get requestHeaderAction() {
    return this._requestHeaderAction;
  }
  public putRequestHeaderAction(value: CdnFrontdoorRuleActionsRequestHeaderAction[] | cdktf.IResolvable) {
    this._requestHeaderAction.internalValue = value;
  }
  public resetRequestHeaderAction() {
    this._requestHeaderAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderActionInput() {
    return this._requestHeaderAction.internalValue;
  }

  // response_header_action - computed: false, optional: true, required: false
  private _responseHeaderAction = new CdnFrontdoorRuleActionsResponseHeaderActionList(this, "response_header_action", false);
  public get responseHeaderAction() {
    return this._responseHeaderAction;
  }
  public putResponseHeaderAction(value: CdnFrontdoorRuleActionsResponseHeaderAction[] | cdktf.IResolvable) {
    this._responseHeaderAction.internalValue = value;
  }
  public resetResponseHeaderAction() {
    this._responseHeaderAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderActionInput() {
    return this._responseHeaderAction.internalValue;
  }

  // route_configuration_override_action - computed: false, optional: true, required: false
  private _routeConfigurationOverrideAction = new CdnFrontdoorRuleActionsRouteConfigurationOverrideActionOutputReference(this, "route_configuration_override_action");
  public get routeConfigurationOverrideAction() {
    return this._routeConfigurationOverrideAction;
  }
  public putRouteConfigurationOverrideAction(value: CdnFrontdoorRuleActionsRouteConfigurationOverrideAction) {
    this._routeConfigurationOverrideAction.internalValue = value;
  }
  public resetRouteConfigurationOverrideAction() {
    this._routeConfigurationOverrideAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeConfigurationOverrideActionInput() {
    return this._routeConfigurationOverrideAction.internalValue;
  }

  // url_redirect_action - computed: false, optional: true, required: false
  private _urlRedirectAction = new CdnFrontdoorRuleActionsUrlRedirectActionOutputReference(this, "url_redirect_action");
  public get urlRedirectAction() {
    return this._urlRedirectAction;
  }
  public putUrlRedirectAction(value: CdnFrontdoorRuleActionsUrlRedirectAction) {
    this._urlRedirectAction.internalValue = value;
  }
  public resetUrlRedirectAction() {
    this._urlRedirectAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRedirectActionInput() {
    return this._urlRedirectAction.internalValue;
  }

  // url_rewrite_action - computed: false, optional: true, required: false
  private _urlRewriteAction = new CdnFrontdoorRuleActionsUrlRewriteActionOutputReference(this, "url_rewrite_action");
  public get urlRewriteAction() {
    return this._urlRewriteAction;
  }
  public putUrlRewriteAction(value: CdnFrontdoorRuleActionsUrlRewriteAction) {
    this._urlRewriteAction.internalValue = value;
  }
  public resetUrlRewriteAction() {
    this._urlRewriteAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRewriteActionInput() {
    return this._urlRewriteAction.internalValue;
  }
}
export interface CdnFrontdoorRuleConditionsClientPortCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
}

export function cdnFrontdoorRuleConditionsClientPortConditionToTerraform(struct?: CdnFrontdoorRuleConditionsClientPortCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function cdnFrontdoorRuleConditionsClientPortConditionToHclTerraform(struct?: CdnFrontdoorRuleConditionsClientPortCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    negate_condition: {
      value: cdktf.booleanToHclTerraform(struct!.negateCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsClientPortConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsClientPortCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValues = this._matchValues;
    }
    if (this._negateCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.negateCondition = this._negateCondition;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsClientPortCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchValues = value.matchValues;
      this._negateCondition = value.negateCondition;
      this._operator = value.operator;
    }
  }

  // match_values - computed: false, optional: true, required: false
  private _matchValues?: string[]; 
  public get matchValues() {
    return this.getListAttribute('match_values');
  }
  public set matchValues(value: string[]) {
    this._matchValues = value;
  }
  public resetMatchValues() {
    this._matchValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValuesInput() {
    return this._matchValues;
  }

  // negate_condition - computed: false, optional: true, required: false
  private _negateCondition?: boolean | cdktf.IResolvable; 
  public get negateCondition() {
    return this.getBooleanAttribute('negate_condition');
  }
  public set negateCondition(value: boolean | cdktf.IResolvable) {
    this._negateCondition = value;
  }
  public resetNegateCondition() {
    this._negateCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateConditionInput() {
    return this._negateCondition;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}

export class CdnFrontdoorRuleConditionsClientPortConditionList extends cdktf.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsClientPortCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsClientPortConditionOutputReference {
    return new CdnFrontdoorRuleConditionsClientPortConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsCookiesCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#cookie_name CdnFrontdoorRule#cookie_name}
  */
  readonly cookieName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}
  */
  readonly transforms?: string[];
}

export function cdnFrontdoorRuleConditionsCookiesConditionToTerraform(struct?: CdnFrontdoorRuleConditionsCookiesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_name: cdktf.stringToTerraform(struct!.cookieName),
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    transforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transforms),
  }
}


export function cdnFrontdoorRuleConditionsCookiesConditionToHclTerraform(struct?: CdnFrontdoorRuleConditionsCookiesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.cookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    negate_condition: {
      value: cdktf.booleanToHclTerraform(struct!.negateCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsCookiesConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsCookiesCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieName = this._cookieName;
    }
    if (this._matchValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValues = this._matchValues;
    }
    if (this._negateCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.negateCondition = this._negateCondition;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsCookiesCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookieName = undefined;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
      this._transforms = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookieName = value.cookieName;
      this._matchValues = value.matchValues;
      this._negateCondition = value.negateCondition;
      this._operator = value.operator;
      this._transforms = value.transforms;
    }
  }

  // cookie_name - computed: false, optional: false, required: true
  private _cookieName?: string; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName;
  }

  // match_values - computed: false, optional: true, required: false
  private _matchValues?: string[]; 
  public get matchValues() {
    return this.getListAttribute('match_values');
  }
  public set matchValues(value: string[]) {
    this._matchValues = value;
  }
  public resetMatchValues() {
    this._matchValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValuesInput() {
    return this._matchValues;
  }

  // negate_condition - computed: false, optional: true, required: false
  private _negateCondition?: boolean | cdktf.IResolvable; 
  public get negateCondition() {
    return this.getBooleanAttribute('negate_condition');
  }
  public set negateCondition(value: boolean | cdktf.IResolvable) {
    this._negateCondition = value;
  }
  public resetNegateCondition() {
    this._negateCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateConditionInput() {
    return this._negateCondition;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return cdktf.Fn.tolist(this.getListAttribute('transforms'));
  }
  public set transforms(value: string[]) {
    this._transforms = value;
  }
  public resetTransforms() {
    this._transforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms;
  }
}

export class CdnFrontdoorRuleConditionsCookiesConditionList extends cdktf.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsCookiesCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsCookiesConditionOutputReference {
    return new CdnFrontdoorRuleConditionsCookiesConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsHostNameCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}
  */
  readonly transforms?: string[];
}

export function cdnFrontdoorRuleConditionsHostNameConditionToTerraform(struct?: CdnFrontdoorRuleConditionsHostNameCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    transforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transforms),
  }
}


export function cdnFrontdoorRuleConditionsHostNameConditionToHclTerraform(struct?: CdnFrontdoorRuleConditionsHostNameCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    negate_condition: {
      value: cdktf.booleanToHclTerraform(struct!.negateCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsHostNameConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsHostNameCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValues = this._matchValues;
    }
    if (this._negateCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.negateCondition = this._negateCondition;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsHostNameCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
      this._transforms = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchValues = value.matchValues;
      this._negateCondition = value.negateCondition;
      this._operator = value.operator;
      this._transforms = value.transforms;
    }
  }

  // match_values - computed: false, optional: true, required: false
  private _matchValues?: string[]; 
  public get matchValues() {
    return this.getListAttribute('match_values');
  }
  public set matchValues(value: string[]) {
    this._matchValues = value;
  }
  public resetMatchValues() {
    this._matchValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValuesInput() {
    return this._matchValues;
  }

  // negate_condition - computed: false, optional: true, required: false
  private _negateCondition?: boolean | cdktf.IResolvable; 
  public get negateCondition() {
    return this.getBooleanAttribute('negate_condition');
  }
  public set negateCondition(value: boolean | cdktf.IResolvable) {
    this._negateCondition = value;
  }
  public resetNegateCondition() {
    this._negateCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateConditionInput() {
    return this._negateCondition;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return cdktf.Fn.tolist(this.getListAttribute('transforms'));
  }
  public set transforms(value: string[]) {
    this._transforms = value;
  }
  public resetTransforms() {
    this._transforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms;
  }
}

export class CdnFrontdoorRuleConditionsHostNameConditionList extends cdktf.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsHostNameCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsHostNameConditionOutputReference {
    return new CdnFrontdoorRuleConditionsHostNameConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsHttpVersionCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}
  */
  readonly matchValues: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator?: string;
}

export function cdnFrontdoorRuleConditionsHttpVersionConditionToTerraform(struct?: CdnFrontdoorRuleConditionsHttpVersionCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function cdnFrontdoorRuleConditionsHttpVersionConditionToHclTerraform(struct?: CdnFrontdoorRuleConditionsHttpVersionCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    negate_condition: {
      value: cdktf.booleanToHclTerraform(struct!.negateCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsHttpVersionCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValues = this._matchValues;
    }
    if (this._negateCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.negateCondition = this._negateCondition;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsHttpVersionCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchValues = value.matchValues;
      this._negateCondition = value.negateCondition;
      this._operator = value.operator;
    }
  }

  // match_values - computed: false, optional: false, required: true
  private _matchValues?: string[]; 
  public get matchValues() {
    return cdktf.Fn.tolist(this.getListAttribute('match_values'));
  }
  public set matchValues(value: string[]) {
    this._matchValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValuesInput() {
    return this._matchValues;
  }

  // negate_condition - computed: false, optional: true, required: false
  private _negateCondition?: boolean | cdktf.IResolvable; 
  public get negateCondition() {
    return this.getBooleanAttribute('negate_condition');
  }
  public set negateCondition(value: boolean | cdktf.IResolvable) {
    this._negateCondition = value;
  }
  public resetNegateCondition() {
    this._negateCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateConditionInput() {
    return this._negateCondition;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}

export class CdnFrontdoorRuleConditionsHttpVersionConditionList extends cdktf.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsHttpVersionCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference {
    return new CdnFrontdoorRuleConditionsHttpVersionConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsIsDeviceCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator?: string;
}

export function cdnFrontdoorRuleConditionsIsDeviceConditionToTerraform(struct?: CdnFrontdoorRuleConditionsIsDeviceCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function cdnFrontdoorRuleConditionsIsDeviceConditionToHclTerraform(struct?: CdnFrontdoorRuleConditionsIsDeviceCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    negate_condition: {
      value: cdktf.booleanToHclTerraform(struct!.negateCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsIsDeviceCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValues = this._matchValues;
    }
    if (this._negateCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.negateCondition = this._negateCondition;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsIsDeviceCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchValues = value.matchValues;
      this._negateCondition = value.negateCondition;
      this._operator = value.operator;
    }
  }

  // match_values - computed: false, optional: true, required: false
  private _matchValues?: string[]; 
  public get matchValues() {
    return this.getListAttribute('match_values');
  }
  public set matchValues(value: string[]) {
    this._matchValues = value;
  }
  public resetMatchValues() {
    this._matchValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValuesInput() {
    return this._matchValues;
  }

  // negate_condition - computed: false, optional: true, required: false
  private _negateCondition?: boolean | cdktf.IResolvable; 
  public get negateCondition() {
    return this.getBooleanAttribute('negate_condition');
  }
  public set negateCondition(value: boolean | cdktf.IResolvable) {
    this._negateCondition = value;
  }
  public resetNegateCondition() {
    this._negateCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateConditionInput() {
    return this._negateCondition;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}

export class CdnFrontdoorRuleConditionsIsDeviceConditionList extends cdktf.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsIsDeviceCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference {
    return new CdnFrontdoorRuleConditionsIsDeviceConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsPostArgsCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#post_args_name CdnFrontdoorRule#post_args_name}
  */
  readonly postArgsName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}
  */
  readonly transforms?: string[];
}

export function cdnFrontdoorRuleConditionsPostArgsConditionToTerraform(struct?: CdnFrontdoorRuleConditionsPostArgsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    post_args_name: cdktf.stringToTerraform(struct!.postArgsName),
    transforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transforms),
  }
}


export function cdnFrontdoorRuleConditionsPostArgsConditionToHclTerraform(struct?: CdnFrontdoorRuleConditionsPostArgsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    negate_condition: {
      value: cdktf.booleanToHclTerraform(struct!.negateCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_args_name: {
      value: cdktf.stringToHclTerraform(struct!.postArgsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsPostArgsConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsPostArgsCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValues = this._matchValues;
    }
    if (this._negateCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.negateCondition = this._negateCondition;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._postArgsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.postArgsName = this._postArgsName;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsPostArgsCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
      this._postArgsName = undefined;
      this._transforms = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchValues = value.matchValues;
      this._negateCondition = value.negateCondition;
      this._operator = value.operator;
      this._postArgsName = value.postArgsName;
      this._transforms = value.transforms;
    }
  }

  // match_values - computed: false, optional: true, required: false
  private _matchValues?: string[]; 
  public get matchValues() {
    return this.getListAttribute('match_values');
  }
  public set matchValues(value: string[]) {
    this._matchValues = value;
  }
  public resetMatchValues() {
    this._matchValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValuesInput() {
    return this._matchValues;
  }

  // negate_condition - computed: false, optional: true, required: false
  private _negateCondition?: boolean | cdktf.IResolvable; 
  public get negateCondition() {
    return this.getBooleanAttribute('negate_condition');
  }
  public set negateCondition(value: boolean | cdktf.IResolvable) {
    this._negateCondition = value;
  }
  public resetNegateCondition() {
    this._negateCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateConditionInput() {
    return this._negateCondition;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // post_args_name - computed: false, optional: false, required: true
  private _postArgsName?: string; 
  public get postArgsName() {
    return this.getStringAttribute('post_args_name');
  }
  public set postArgsName(value: string) {
    this._postArgsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postArgsNameInput() {
    return this._postArgsName;
  }

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return cdktf.Fn.tolist(this.getListAttribute('transforms'));
  }
  public set transforms(value: string[]) {
    this._transforms = value;
  }
  public resetTransforms() {
    this._transforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms;
  }
}

export class CdnFrontdoorRuleConditionsPostArgsConditionList extends cdktf.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsPostArgsCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsPostArgsConditionOutputReference {
    return new CdnFrontdoorRuleConditionsPostArgsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsQueryStringCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}
  */
  readonly transforms?: string[];
}

export function cdnFrontdoorRuleConditionsQueryStringConditionToTerraform(struct?: CdnFrontdoorRuleConditionsQueryStringCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    transforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transforms),
  }
}


export function cdnFrontdoorRuleConditionsQueryStringConditionToHclTerraform(struct?: CdnFrontdoorRuleConditionsQueryStringCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    negate_condition: {
      value: cdktf.booleanToHclTerraform(struct!.negateCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsQueryStringConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsQueryStringCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValues = this._matchValues;
    }
    if (this._negateCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.negateCondition = this._negateCondition;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsQueryStringCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
      this._transforms = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchValues = value.matchValues;
      this._negateCondition = value.negateCondition;
      this._operator = value.operator;
      this._transforms = value.transforms;
    }
  }

  // match_values - computed: false, optional: true, required: false
  private _matchValues?: string[]; 
  public get matchValues() {
    return this.getListAttribute('match_values');
  }
  public set matchValues(value: string[]) {
    this._matchValues = value;
  }
  public resetMatchValues() {
    this._matchValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValuesInput() {
    return this._matchValues;
  }

  // negate_condition - computed: false, optional: true, required: false
  private _negateCondition?: boolean | cdktf.IResolvable; 
  public get negateCondition() {
    return this.getBooleanAttribute('negate_condition');
  }
  public set negateCondition(value: boolean | cdktf.IResolvable) {
    this._negateCondition = value;
  }
  public resetNegateCondition() {
    this._negateCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateConditionInput() {
    return this._negateCondition;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return cdktf.Fn.tolist(this.getListAttribute('transforms'));
  }
  public set transforms(value: string[]) {
    this._transforms = value;
  }
  public resetTransforms() {
    this._transforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms;
  }
}

export class CdnFrontdoorRuleConditionsQueryStringConditionList extends cdktf.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsQueryStringCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsQueryStringConditionOutputReference {
    return new CdnFrontdoorRuleConditionsQueryStringConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsRemoteAddressCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator?: string;
}

export function cdnFrontdoorRuleConditionsRemoteAddressConditionToTerraform(struct?: CdnFrontdoorRuleConditionsRemoteAddressCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function cdnFrontdoorRuleConditionsRemoteAddressConditionToHclTerraform(struct?: CdnFrontdoorRuleConditionsRemoteAddressCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    negate_condition: {
      value: cdktf.booleanToHclTerraform(struct!.negateCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsRemoteAddressCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValues = this._matchValues;
    }
    if (this._negateCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.negateCondition = this._negateCondition;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsRemoteAddressCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchValues = value.matchValues;
      this._negateCondition = value.negateCondition;
      this._operator = value.operator;
    }
  }

  // match_values - computed: false, optional: true, required: false
  private _matchValues?: string[]; 
  public get matchValues() {
    return this.getListAttribute('match_values');
  }
  public set matchValues(value: string[]) {
    this._matchValues = value;
  }
  public resetMatchValues() {
    this._matchValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValuesInput() {
    return this._matchValues;
  }

  // negate_condition - computed: false, optional: true, required: false
  private _negateCondition?: boolean | cdktf.IResolvable; 
  public get negateCondition() {
    return this.getBooleanAttribute('negate_condition');
  }
  public set negateCondition(value: boolean | cdktf.IResolvable) {
    this._negateCondition = value;
  }
  public resetNegateCondition() {
    this._negateCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateConditionInput() {
    return this._negateCondition;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}

export class CdnFrontdoorRuleConditionsRemoteAddressConditionList extends cdktf.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsRemoteAddressCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference {
    return new CdnFrontdoorRuleConditionsRemoteAddressConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsRequestBodyCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}
  */
  readonly matchValues: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}
  */
  readonly transforms?: string[];
}

export function cdnFrontdoorRuleConditionsRequestBodyConditionToTerraform(struct?: CdnFrontdoorRuleConditionsRequestBodyCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    transforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transforms),
  }
}


export function cdnFrontdoorRuleConditionsRequestBodyConditionToHclTerraform(struct?: CdnFrontdoorRuleConditionsRequestBodyCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    negate_condition: {
      value: cdktf.booleanToHclTerraform(struct!.negateCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsRequestBodyCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValues = this._matchValues;
    }
    if (this._negateCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.negateCondition = this._negateCondition;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsRequestBodyCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
      this._transforms = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchValues = value.matchValues;
      this._negateCondition = value.negateCondition;
      this._operator = value.operator;
      this._transforms = value.transforms;
    }
  }

  // match_values - computed: false, optional: false, required: true
  private _matchValues?: string[]; 
  public get matchValues() {
    return this.getListAttribute('match_values');
  }
  public set matchValues(value: string[]) {
    this._matchValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValuesInput() {
    return this._matchValues;
  }

  // negate_condition - computed: false, optional: true, required: false
  private _negateCondition?: boolean | cdktf.IResolvable; 
  public get negateCondition() {
    return this.getBooleanAttribute('negate_condition');
  }
  public set negateCondition(value: boolean | cdktf.IResolvable) {
    this._negateCondition = value;
  }
  public resetNegateCondition() {
    this._negateCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateConditionInput() {
    return this._negateCondition;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return cdktf.Fn.tolist(this.getListAttribute('transforms'));
  }
  public set transforms(value: string[]) {
    this._transforms = value;
  }
  public resetTransforms() {
    this._transforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms;
  }
}

export class CdnFrontdoorRuleConditionsRequestBodyConditionList extends cdktf.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsRequestBodyCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference {
    return new CdnFrontdoorRuleConditionsRequestBodyConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsRequestHeaderCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#header_name CdnFrontdoorRule#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}
  */
  readonly transforms?: string[];
}

export function cdnFrontdoorRuleConditionsRequestHeaderConditionToTerraform(struct?: CdnFrontdoorRuleConditionsRequestHeaderCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    transforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transforms),
  }
}


export function cdnFrontdoorRuleConditionsRequestHeaderConditionToHclTerraform(struct?: CdnFrontdoorRuleConditionsRequestHeaderCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    negate_condition: {
      value: cdktf.booleanToHclTerraform(struct!.negateCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsRequestHeaderCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._matchValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValues = this._matchValues;
    }
    if (this._negateCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.negateCondition = this._negateCondition;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsRequestHeaderCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
      this._transforms = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._matchValues = value.matchValues;
      this._negateCondition = value.negateCondition;
      this._operator = value.operator;
      this._transforms = value.transforms;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // match_values - computed: false, optional: true, required: false
  private _matchValues?: string[]; 
  public get matchValues() {
    return this.getListAttribute('match_values');
  }
  public set matchValues(value: string[]) {
    this._matchValues = value;
  }
  public resetMatchValues() {
    this._matchValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValuesInput() {
    return this._matchValues;
  }

  // negate_condition - computed: false, optional: true, required: false
  private _negateCondition?: boolean | cdktf.IResolvable; 
  public get negateCondition() {
    return this.getBooleanAttribute('negate_condition');
  }
  public set negateCondition(value: boolean | cdktf.IResolvable) {
    this._negateCondition = value;
  }
  public resetNegateCondition() {
    this._negateCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateConditionInput() {
    return this._negateCondition;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return cdktf.Fn.tolist(this.getListAttribute('transforms'));
  }
  public set transforms(value: string[]) {
    this._transforms = value;
  }
  public resetTransforms() {
    this._transforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms;
  }
}

export class CdnFrontdoorRuleConditionsRequestHeaderConditionList extends cdktf.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsRequestHeaderCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference {
    return new CdnFrontdoorRuleConditionsRequestHeaderConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsRequestMethodCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}
  */
  readonly matchValues: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator?: string;
}

export function cdnFrontdoorRuleConditionsRequestMethodConditionToTerraform(struct?: CdnFrontdoorRuleConditionsRequestMethodCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function cdnFrontdoorRuleConditionsRequestMethodConditionToHclTerraform(struct?: CdnFrontdoorRuleConditionsRequestMethodCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    negate_condition: {
      value: cdktf.booleanToHclTerraform(struct!.negateCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsRequestMethodCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValues = this._matchValues;
    }
    if (this._negateCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.negateCondition = this._negateCondition;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsRequestMethodCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchValues = value.matchValues;
      this._negateCondition = value.negateCondition;
      this._operator = value.operator;
    }
  }

  // match_values - computed: false, optional: false, required: true
  private _matchValues?: string[]; 
  public get matchValues() {
    return cdktf.Fn.tolist(this.getListAttribute('match_values'));
  }
  public set matchValues(value: string[]) {
    this._matchValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValuesInput() {
    return this._matchValues;
  }

  // negate_condition - computed: false, optional: true, required: false
  private _negateCondition?: boolean | cdktf.IResolvable; 
  public get negateCondition() {
    return this.getBooleanAttribute('negate_condition');
  }
  public set negateCondition(value: boolean | cdktf.IResolvable) {
    this._negateCondition = value;
  }
  public resetNegateCondition() {
    this._negateCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateConditionInput() {
    return this._negateCondition;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}

export class CdnFrontdoorRuleConditionsRequestMethodConditionList extends cdktf.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsRequestMethodCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference {
    return new CdnFrontdoorRuleConditionsRequestMethodConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsRequestSchemeCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator?: string;
}

export function cdnFrontdoorRuleConditionsRequestSchemeConditionToTerraform(struct?: CdnFrontdoorRuleConditionsRequestSchemeCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function cdnFrontdoorRuleConditionsRequestSchemeConditionToHclTerraform(struct?: CdnFrontdoorRuleConditionsRequestSchemeCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    negate_condition: {
      value: cdktf.booleanToHclTerraform(struct!.negateCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsRequestSchemeCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValues = this._matchValues;
    }
    if (this._negateCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.negateCondition = this._negateCondition;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsRequestSchemeCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchValues = value.matchValues;
      this._negateCondition = value.negateCondition;
      this._operator = value.operator;
    }
  }

  // match_values - computed: false, optional: true, required: false
  private _matchValues?: string[]; 
  public get matchValues() {
    return this.getListAttribute('match_values');
  }
  public set matchValues(value: string[]) {
    this._matchValues = value;
  }
  public resetMatchValues() {
    this._matchValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValuesInput() {
    return this._matchValues;
  }

  // negate_condition - computed: false, optional: true, required: false
  private _negateCondition?: boolean | cdktf.IResolvable; 
  public get negateCondition() {
    return this.getBooleanAttribute('negate_condition');
  }
  public set negateCondition(value: boolean | cdktf.IResolvable) {
    this._negateCondition = value;
  }
  public resetNegateCondition() {
    this._negateCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateConditionInput() {
    return this._negateCondition;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}

export class CdnFrontdoorRuleConditionsRequestSchemeConditionList extends cdktf.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsRequestSchemeCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference {
    return new CdnFrontdoorRuleConditionsRequestSchemeConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsRequestUriCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}
  */
  readonly transforms?: string[];
}

export function cdnFrontdoorRuleConditionsRequestUriConditionToTerraform(struct?: CdnFrontdoorRuleConditionsRequestUriCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    transforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transforms),
  }
}


export function cdnFrontdoorRuleConditionsRequestUriConditionToHclTerraform(struct?: CdnFrontdoorRuleConditionsRequestUriCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    negate_condition: {
      value: cdktf.booleanToHclTerraform(struct!.negateCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsRequestUriConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsRequestUriCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValues = this._matchValues;
    }
    if (this._negateCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.negateCondition = this._negateCondition;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsRequestUriCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
      this._transforms = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchValues = value.matchValues;
      this._negateCondition = value.negateCondition;
      this._operator = value.operator;
      this._transforms = value.transforms;
    }
  }

  // match_values - computed: false, optional: true, required: false
  private _matchValues?: string[]; 
  public get matchValues() {
    return this.getListAttribute('match_values');
  }
  public set matchValues(value: string[]) {
    this._matchValues = value;
  }
  public resetMatchValues() {
    this._matchValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValuesInput() {
    return this._matchValues;
  }

  // negate_condition - computed: false, optional: true, required: false
  private _negateCondition?: boolean | cdktf.IResolvable; 
  public get negateCondition() {
    return this.getBooleanAttribute('negate_condition');
  }
  public set negateCondition(value: boolean | cdktf.IResolvable) {
    this._negateCondition = value;
  }
  public resetNegateCondition() {
    this._negateCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateConditionInput() {
    return this._negateCondition;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return cdktf.Fn.tolist(this.getListAttribute('transforms'));
  }
  public set transforms(value: string[]) {
    this._transforms = value;
  }
  public resetTransforms() {
    this._transforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms;
  }
}

export class CdnFrontdoorRuleConditionsRequestUriConditionList extends cdktf.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsRequestUriCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsRequestUriConditionOutputReference {
    return new CdnFrontdoorRuleConditionsRequestUriConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsServerPortCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}
  */
  readonly matchValues: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
}

export function cdnFrontdoorRuleConditionsServerPortConditionToTerraform(struct?: CdnFrontdoorRuleConditionsServerPortCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function cdnFrontdoorRuleConditionsServerPortConditionToHclTerraform(struct?: CdnFrontdoorRuleConditionsServerPortCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    negate_condition: {
      value: cdktf.booleanToHclTerraform(struct!.negateCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsServerPortConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsServerPortCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValues = this._matchValues;
    }
    if (this._negateCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.negateCondition = this._negateCondition;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsServerPortCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchValues = value.matchValues;
      this._negateCondition = value.negateCondition;
      this._operator = value.operator;
    }
  }

  // match_values - computed: false, optional: false, required: true
  private _matchValues?: string[]; 
  public get matchValues() {
    return cdktf.Fn.tolist(this.getListAttribute('match_values'));
  }
  public set matchValues(value: string[]) {
    this._matchValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValuesInput() {
    return this._matchValues;
  }

  // negate_condition - computed: false, optional: true, required: false
  private _negateCondition?: boolean | cdktf.IResolvable; 
  public get negateCondition() {
    return this.getBooleanAttribute('negate_condition');
  }
  public set negateCondition(value: boolean | cdktf.IResolvable) {
    this._negateCondition = value;
  }
  public resetNegateCondition() {
    this._negateCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateConditionInput() {
    return this._negateCondition;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}

export class CdnFrontdoorRuleConditionsServerPortConditionList extends cdktf.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsServerPortCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsServerPortConditionOutputReference {
    return new CdnFrontdoorRuleConditionsServerPortConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsSocketAddressCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator?: string;
}

export function cdnFrontdoorRuleConditionsSocketAddressConditionToTerraform(struct?: CdnFrontdoorRuleConditionsSocketAddressCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function cdnFrontdoorRuleConditionsSocketAddressConditionToHclTerraform(struct?: CdnFrontdoorRuleConditionsSocketAddressCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    negate_condition: {
      value: cdktf.booleanToHclTerraform(struct!.negateCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsSocketAddressCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValues = this._matchValues;
    }
    if (this._negateCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.negateCondition = this._negateCondition;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsSocketAddressCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchValues = value.matchValues;
      this._negateCondition = value.negateCondition;
      this._operator = value.operator;
    }
  }

  // match_values - computed: false, optional: true, required: false
  private _matchValues?: string[]; 
  public get matchValues() {
    return this.getListAttribute('match_values');
  }
  public set matchValues(value: string[]) {
    this._matchValues = value;
  }
  public resetMatchValues() {
    this._matchValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValuesInput() {
    return this._matchValues;
  }

  // negate_condition - computed: false, optional: true, required: false
  private _negateCondition?: boolean | cdktf.IResolvable; 
  public get negateCondition() {
    return this.getBooleanAttribute('negate_condition');
  }
  public set negateCondition(value: boolean | cdktf.IResolvable) {
    this._negateCondition = value;
  }
  public resetNegateCondition() {
    this._negateCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateConditionInput() {
    return this._negateCondition;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}

export class CdnFrontdoorRuleConditionsSocketAddressConditionList extends cdktf.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsSocketAddressCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference {
    return new CdnFrontdoorRuleConditionsSocketAddressConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsSslProtocolCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}
  */
  readonly matchValues: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator?: string;
}

export function cdnFrontdoorRuleConditionsSslProtocolConditionToTerraform(struct?: CdnFrontdoorRuleConditionsSslProtocolCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function cdnFrontdoorRuleConditionsSslProtocolConditionToHclTerraform(struct?: CdnFrontdoorRuleConditionsSslProtocolCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    negate_condition: {
      value: cdktf.booleanToHclTerraform(struct!.negateCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsSslProtocolCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValues = this._matchValues;
    }
    if (this._negateCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.negateCondition = this._negateCondition;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsSslProtocolCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchValues = value.matchValues;
      this._negateCondition = value.negateCondition;
      this._operator = value.operator;
    }
  }

  // match_values - computed: false, optional: false, required: true
  private _matchValues?: string[]; 
  public get matchValues() {
    return cdktf.Fn.tolist(this.getListAttribute('match_values'));
  }
  public set matchValues(value: string[]) {
    this._matchValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValuesInput() {
    return this._matchValues;
  }

  // negate_condition - computed: false, optional: true, required: false
  private _negateCondition?: boolean | cdktf.IResolvable; 
  public get negateCondition() {
    return this.getBooleanAttribute('negate_condition');
  }
  public set negateCondition(value: boolean | cdktf.IResolvable) {
    this._negateCondition = value;
  }
  public resetNegateCondition() {
    this._negateCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateConditionInput() {
    return this._negateCondition;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}

export class CdnFrontdoorRuleConditionsSslProtocolConditionList extends cdktf.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsSslProtocolCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference {
    return new CdnFrontdoorRuleConditionsSslProtocolConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsUrlFileExtensionCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}
  */
  readonly matchValues: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}
  */
  readonly transforms?: string[];
}

export function cdnFrontdoorRuleConditionsUrlFileExtensionConditionToTerraform(struct?: CdnFrontdoorRuleConditionsUrlFileExtensionCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    transforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transforms),
  }
}


export function cdnFrontdoorRuleConditionsUrlFileExtensionConditionToHclTerraform(struct?: CdnFrontdoorRuleConditionsUrlFileExtensionCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    negate_condition: {
      value: cdktf.booleanToHclTerraform(struct!.negateCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsUrlFileExtensionCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValues = this._matchValues;
    }
    if (this._negateCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.negateCondition = this._negateCondition;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsUrlFileExtensionCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
      this._transforms = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchValues = value.matchValues;
      this._negateCondition = value.negateCondition;
      this._operator = value.operator;
      this._transforms = value.transforms;
    }
  }

  // match_values - computed: false, optional: false, required: true
  private _matchValues?: string[]; 
  public get matchValues() {
    return this.getListAttribute('match_values');
  }
  public set matchValues(value: string[]) {
    this._matchValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValuesInput() {
    return this._matchValues;
  }

  // negate_condition - computed: false, optional: true, required: false
  private _negateCondition?: boolean | cdktf.IResolvable; 
  public get negateCondition() {
    return this.getBooleanAttribute('negate_condition');
  }
  public set negateCondition(value: boolean | cdktf.IResolvable) {
    this._negateCondition = value;
  }
  public resetNegateCondition() {
    this._negateCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateConditionInput() {
    return this._negateCondition;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return cdktf.Fn.tolist(this.getListAttribute('transforms'));
  }
  public set transforms(value: string[]) {
    this._transforms = value;
  }
  public resetTransforms() {
    this._transforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms;
  }
}

export class CdnFrontdoorRuleConditionsUrlFileExtensionConditionList extends cdktf.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsUrlFileExtensionCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference {
    return new CdnFrontdoorRuleConditionsUrlFileExtensionConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsUrlFilenameCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}
  */
  readonly transforms?: string[];
}

export function cdnFrontdoorRuleConditionsUrlFilenameConditionToTerraform(struct?: CdnFrontdoorRuleConditionsUrlFilenameCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    transforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transforms),
  }
}


export function cdnFrontdoorRuleConditionsUrlFilenameConditionToHclTerraform(struct?: CdnFrontdoorRuleConditionsUrlFilenameCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    negate_condition: {
      value: cdktf.booleanToHclTerraform(struct!.negateCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsUrlFilenameCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValues = this._matchValues;
    }
    if (this._negateCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.negateCondition = this._negateCondition;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsUrlFilenameCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
      this._transforms = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchValues = value.matchValues;
      this._negateCondition = value.negateCondition;
      this._operator = value.operator;
      this._transforms = value.transforms;
    }
  }

  // match_values - computed: false, optional: true, required: false
  private _matchValues?: string[]; 
  public get matchValues() {
    return this.getListAttribute('match_values');
  }
  public set matchValues(value: string[]) {
    this._matchValues = value;
  }
  public resetMatchValues() {
    this._matchValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValuesInput() {
    return this._matchValues;
  }

  // negate_condition - computed: false, optional: true, required: false
  private _negateCondition?: boolean | cdktf.IResolvable; 
  public get negateCondition() {
    return this.getBooleanAttribute('negate_condition');
  }
  public set negateCondition(value: boolean | cdktf.IResolvable) {
    this._negateCondition = value;
  }
  public resetNegateCondition() {
    this._negateCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateConditionInput() {
    return this._negateCondition;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return cdktf.Fn.tolist(this.getListAttribute('transforms'));
  }
  public set transforms(value: string[]) {
    this._transforms = value;
  }
  public resetTransforms() {
    this._transforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms;
  }
}

export class CdnFrontdoorRuleConditionsUrlFilenameConditionList extends cdktf.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsUrlFilenameCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference {
    return new CdnFrontdoorRuleConditionsUrlFilenameConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsUrlPathCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#match_values CdnFrontdoorRule#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#negate_condition CdnFrontdoorRule#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}
  */
  readonly transforms?: string[];
}

export function cdnFrontdoorRuleConditionsUrlPathConditionToTerraform(struct?: CdnFrontdoorRuleConditionsUrlPathCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    transforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transforms),
  }
}


export function cdnFrontdoorRuleConditionsUrlPathConditionToHclTerraform(struct?: CdnFrontdoorRuleConditionsUrlPathCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    negate_condition: {
      value: cdktf.booleanToHclTerraform(struct!.negateCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsUrlPathConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsUrlPathCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValues = this._matchValues;
    }
    if (this._negateCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.negateCondition = this._negateCondition;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsUrlPathCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
      this._transforms = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchValues = value.matchValues;
      this._negateCondition = value.negateCondition;
      this._operator = value.operator;
      this._transforms = value.transforms;
    }
  }

  // match_values - computed: false, optional: true, required: false
  private _matchValues?: string[]; 
  public get matchValues() {
    return this.getListAttribute('match_values');
  }
  public set matchValues(value: string[]) {
    this._matchValues = value;
  }
  public resetMatchValues() {
    this._matchValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValuesInput() {
    return this._matchValues;
  }

  // negate_condition - computed: false, optional: true, required: false
  private _negateCondition?: boolean | cdktf.IResolvable; 
  public get negateCondition() {
    return this.getBooleanAttribute('negate_condition');
  }
  public set negateCondition(value: boolean | cdktf.IResolvable) {
    this._negateCondition = value;
  }
  public resetNegateCondition() {
    this._negateCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateConditionInput() {
    return this._negateCondition;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return cdktf.Fn.tolist(this.getListAttribute('transforms'));
  }
  public set transforms(value: string[]) {
    this._transforms = value;
  }
  public resetTransforms() {
    this._transforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms;
  }
}

export class CdnFrontdoorRuleConditionsUrlPathConditionList extends cdktf.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsUrlPathCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsUrlPathConditionOutputReference {
    return new CdnFrontdoorRuleConditionsUrlPathConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditions {
  /**
  * client_port_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#client_port_condition CdnFrontdoorRule#client_port_condition}
  */
  readonly clientPortCondition?: CdnFrontdoorRuleConditionsClientPortCondition[] | cdktf.IResolvable;
  /**
  * cookies_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#cookies_condition CdnFrontdoorRule#cookies_condition}
  */
  readonly cookiesCondition?: CdnFrontdoorRuleConditionsCookiesCondition[] | cdktf.IResolvable;
  /**
  * host_name_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#host_name_condition CdnFrontdoorRule#host_name_condition}
  */
  readonly hostNameCondition?: CdnFrontdoorRuleConditionsHostNameCondition[] | cdktf.IResolvable;
  /**
  * http_version_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#http_version_condition CdnFrontdoorRule#http_version_condition}
  */
  readonly httpVersionCondition?: CdnFrontdoorRuleConditionsHttpVersionCondition[] | cdktf.IResolvable;
  /**
  * is_device_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#is_device_condition CdnFrontdoorRule#is_device_condition}
  */
  readonly isDeviceCondition?: CdnFrontdoorRuleConditionsIsDeviceCondition[] | cdktf.IResolvable;
  /**
  * post_args_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#post_args_condition CdnFrontdoorRule#post_args_condition}
  */
  readonly postArgsCondition?: CdnFrontdoorRuleConditionsPostArgsCondition[] | cdktf.IResolvable;
  /**
  * query_string_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#query_string_condition CdnFrontdoorRule#query_string_condition}
  */
  readonly queryStringCondition?: CdnFrontdoorRuleConditionsQueryStringCondition[] | cdktf.IResolvable;
  /**
  * remote_address_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#remote_address_condition CdnFrontdoorRule#remote_address_condition}
  */
  readonly remoteAddressCondition?: CdnFrontdoorRuleConditionsRemoteAddressCondition[] | cdktf.IResolvable;
  /**
  * request_body_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#request_body_condition CdnFrontdoorRule#request_body_condition}
  */
  readonly requestBodyCondition?: CdnFrontdoorRuleConditionsRequestBodyCondition[] | cdktf.IResolvable;
  /**
  * request_header_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#request_header_condition CdnFrontdoorRule#request_header_condition}
  */
  readonly requestHeaderCondition?: CdnFrontdoorRuleConditionsRequestHeaderCondition[] | cdktf.IResolvable;
  /**
  * request_method_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#request_method_condition CdnFrontdoorRule#request_method_condition}
  */
  readonly requestMethodCondition?: CdnFrontdoorRuleConditionsRequestMethodCondition[] | cdktf.IResolvable;
  /**
  * request_scheme_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#request_scheme_condition CdnFrontdoorRule#request_scheme_condition}
  */
  readonly requestSchemeCondition?: CdnFrontdoorRuleConditionsRequestSchemeCondition[] | cdktf.IResolvable;
  /**
  * request_uri_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#request_uri_condition CdnFrontdoorRule#request_uri_condition}
  */
  readonly requestUriCondition?: CdnFrontdoorRuleConditionsRequestUriCondition[] | cdktf.IResolvable;
  /**
  * server_port_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#server_port_condition CdnFrontdoorRule#server_port_condition}
  */
  readonly serverPortCondition?: CdnFrontdoorRuleConditionsServerPortCondition[] | cdktf.IResolvable;
  /**
  * socket_address_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#socket_address_condition CdnFrontdoorRule#socket_address_condition}
  */
  readonly socketAddressCondition?: CdnFrontdoorRuleConditionsSocketAddressCondition[] | cdktf.IResolvable;
  /**
  * ssl_protocol_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#ssl_protocol_condition CdnFrontdoorRule#ssl_protocol_condition}
  */
  readonly sslProtocolCondition?: CdnFrontdoorRuleConditionsSslProtocolCondition[] | cdktf.IResolvable;
  /**
  * url_file_extension_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#url_file_extension_condition CdnFrontdoorRule#url_file_extension_condition}
  */
  readonly urlFileExtensionCondition?: CdnFrontdoorRuleConditionsUrlFileExtensionCondition[] | cdktf.IResolvable;
  /**
  * url_filename_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#url_filename_condition CdnFrontdoorRule#url_filename_condition}
  */
  readonly urlFilenameCondition?: CdnFrontdoorRuleConditionsUrlFilenameCondition[] | cdktf.IResolvable;
  /**
  * url_path_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#url_path_condition CdnFrontdoorRule#url_path_condition}
  */
  readonly urlPathCondition?: CdnFrontdoorRuleConditionsUrlPathCondition[] | cdktf.IResolvable;
}

export function cdnFrontdoorRuleConditionsToTerraform(struct?: CdnFrontdoorRuleConditionsOutputReference | CdnFrontdoorRuleConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_port_condition: cdktf.listMapper(cdnFrontdoorRuleConditionsClientPortConditionToTerraform, true)(struct!.clientPortCondition),
    cookies_condition: cdktf.listMapper(cdnFrontdoorRuleConditionsCookiesConditionToTerraform, true)(struct!.cookiesCondition),
    host_name_condition: cdktf.listMapper(cdnFrontdoorRuleConditionsHostNameConditionToTerraform, true)(struct!.hostNameCondition),
    http_version_condition: cdktf.listMapper(cdnFrontdoorRuleConditionsHttpVersionConditionToTerraform, true)(struct!.httpVersionCondition),
    is_device_condition: cdktf.listMapper(cdnFrontdoorRuleConditionsIsDeviceConditionToTerraform, true)(struct!.isDeviceCondition),
    post_args_condition: cdktf.listMapper(cdnFrontdoorRuleConditionsPostArgsConditionToTerraform, true)(struct!.postArgsCondition),
    query_string_condition: cdktf.listMapper(cdnFrontdoorRuleConditionsQueryStringConditionToTerraform, true)(struct!.queryStringCondition),
    remote_address_condition: cdktf.listMapper(cdnFrontdoorRuleConditionsRemoteAddressConditionToTerraform, true)(struct!.remoteAddressCondition),
    request_body_condition: cdktf.listMapper(cdnFrontdoorRuleConditionsRequestBodyConditionToTerraform, true)(struct!.requestBodyCondition),
    request_header_condition: cdktf.listMapper(cdnFrontdoorRuleConditionsRequestHeaderConditionToTerraform, true)(struct!.requestHeaderCondition),
    request_method_condition: cdktf.listMapper(cdnFrontdoorRuleConditionsRequestMethodConditionToTerraform, true)(struct!.requestMethodCondition),
    request_scheme_condition: cdktf.listMapper(cdnFrontdoorRuleConditionsRequestSchemeConditionToTerraform, true)(struct!.requestSchemeCondition),
    request_uri_condition: cdktf.listMapper(cdnFrontdoorRuleConditionsRequestUriConditionToTerraform, true)(struct!.requestUriCondition),
    server_port_condition: cdktf.listMapper(cdnFrontdoorRuleConditionsServerPortConditionToTerraform, true)(struct!.serverPortCondition),
    socket_address_condition: cdktf.listMapper(cdnFrontdoorRuleConditionsSocketAddressConditionToTerraform, true)(struct!.socketAddressCondition),
    ssl_protocol_condition: cdktf.listMapper(cdnFrontdoorRuleConditionsSslProtocolConditionToTerraform, true)(struct!.sslProtocolCondition),
    url_file_extension_condition: cdktf.listMapper(cdnFrontdoorRuleConditionsUrlFileExtensionConditionToTerraform, true)(struct!.urlFileExtensionCondition),
    url_filename_condition: cdktf.listMapper(cdnFrontdoorRuleConditionsUrlFilenameConditionToTerraform, true)(struct!.urlFilenameCondition),
    url_path_condition: cdktf.listMapper(cdnFrontdoorRuleConditionsUrlPathConditionToTerraform, true)(struct!.urlPathCondition),
  }
}


export function cdnFrontdoorRuleConditionsToHclTerraform(struct?: CdnFrontdoorRuleConditionsOutputReference | CdnFrontdoorRuleConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_port_condition: {
      value: cdktf.listMapperHcl(cdnFrontdoorRuleConditionsClientPortConditionToHclTerraform, true)(struct!.clientPortCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsClientPortConditionList",
    },
    cookies_condition: {
      value: cdktf.listMapperHcl(cdnFrontdoorRuleConditionsCookiesConditionToHclTerraform, true)(struct!.cookiesCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsCookiesConditionList",
    },
    host_name_condition: {
      value: cdktf.listMapperHcl(cdnFrontdoorRuleConditionsHostNameConditionToHclTerraform, true)(struct!.hostNameCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsHostNameConditionList",
    },
    http_version_condition: {
      value: cdktf.listMapperHcl(cdnFrontdoorRuleConditionsHttpVersionConditionToHclTerraform, true)(struct!.httpVersionCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsHttpVersionConditionList",
    },
    is_device_condition: {
      value: cdktf.listMapperHcl(cdnFrontdoorRuleConditionsIsDeviceConditionToHclTerraform, true)(struct!.isDeviceCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsIsDeviceConditionList",
    },
    post_args_condition: {
      value: cdktf.listMapperHcl(cdnFrontdoorRuleConditionsPostArgsConditionToHclTerraform, true)(struct!.postArgsCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsPostArgsConditionList",
    },
    query_string_condition: {
      value: cdktf.listMapperHcl(cdnFrontdoorRuleConditionsQueryStringConditionToHclTerraform, true)(struct!.queryStringCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsQueryStringConditionList",
    },
    remote_address_condition: {
      value: cdktf.listMapperHcl(cdnFrontdoorRuleConditionsRemoteAddressConditionToHclTerraform, true)(struct!.remoteAddressCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsRemoteAddressConditionList",
    },
    request_body_condition: {
      value: cdktf.listMapperHcl(cdnFrontdoorRuleConditionsRequestBodyConditionToHclTerraform, true)(struct!.requestBodyCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsRequestBodyConditionList",
    },
    request_header_condition: {
      value: cdktf.listMapperHcl(cdnFrontdoorRuleConditionsRequestHeaderConditionToHclTerraform, true)(struct!.requestHeaderCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsRequestHeaderConditionList",
    },
    request_method_condition: {
      value: cdktf.listMapperHcl(cdnFrontdoorRuleConditionsRequestMethodConditionToHclTerraform, true)(struct!.requestMethodCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsRequestMethodConditionList",
    },
    request_scheme_condition: {
      value: cdktf.listMapperHcl(cdnFrontdoorRuleConditionsRequestSchemeConditionToHclTerraform, true)(struct!.requestSchemeCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsRequestSchemeConditionList",
    },
    request_uri_condition: {
      value: cdktf.listMapperHcl(cdnFrontdoorRuleConditionsRequestUriConditionToHclTerraform, true)(struct!.requestUriCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsRequestUriConditionList",
    },
    server_port_condition: {
      value: cdktf.listMapperHcl(cdnFrontdoorRuleConditionsServerPortConditionToHclTerraform, true)(struct!.serverPortCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsServerPortConditionList",
    },
    socket_address_condition: {
      value: cdktf.listMapperHcl(cdnFrontdoorRuleConditionsSocketAddressConditionToHclTerraform, true)(struct!.socketAddressCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsSocketAddressConditionList",
    },
    ssl_protocol_condition: {
      value: cdktf.listMapperHcl(cdnFrontdoorRuleConditionsSslProtocolConditionToHclTerraform, true)(struct!.sslProtocolCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsSslProtocolConditionList",
    },
    url_file_extension_condition: {
      value: cdktf.listMapperHcl(cdnFrontdoorRuleConditionsUrlFileExtensionConditionToHclTerraform, true)(struct!.urlFileExtensionCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsUrlFileExtensionConditionList",
    },
    url_filename_condition: {
      value: cdktf.listMapperHcl(cdnFrontdoorRuleConditionsUrlFilenameConditionToHclTerraform, true)(struct!.urlFilenameCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsUrlFilenameConditionList",
    },
    url_path_condition: {
      value: cdktf.listMapperHcl(cdnFrontdoorRuleConditionsUrlPathConditionToHclTerraform, true)(struct!.urlPathCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsUrlPathConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorRuleConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientPortCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPortCondition = this._clientPortCondition?.internalValue;
    }
    if (this._cookiesCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookiesCondition = this._cookiesCondition?.internalValue;
    }
    if (this._hostNameCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNameCondition = this._hostNameCondition?.internalValue;
    }
    if (this._httpVersionCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpVersionCondition = this._httpVersionCondition?.internalValue;
    }
    if (this._isDeviceCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDeviceCondition = this._isDeviceCondition?.internalValue;
    }
    if (this._postArgsCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postArgsCondition = this._postArgsCondition?.internalValue;
    }
    if (this._queryStringCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringCondition = this._queryStringCondition?.internalValue;
    }
    if (this._remoteAddressCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAddressCondition = this._remoteAddressCondition?.internalValue;
    }
    if (this._requestBodyCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBodyCondition = this._requestBodyCondition?.internalValue;
    }
    if (this._requestHeaderCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaderCondition = this._requestHeaderCondition?.internalValue;
    }
    if (this._requestMethodCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodCondition = this._requestMethodCondition?.internalValue;
    }
    if (this._requestSchemeCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestSchemeCondition = this._requestSchemeCondition?.internalValue;
    }
    if (this._requestUriCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestUriCondition = this._requestUriCondition?.internalValue;
    }
    if (this._serverPortCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPortCondition = this._serverPortCondition?.internalValue;
    }
    if (this._socketAddressCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketAddressCondition = this._socketAddressCondition?.internalValue;
    }
    if (this._sslProtocolCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProtocolCondition = this._sslProtocolCondition?.internalValue;
    }
    if (this._urlFileExtensionCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlFileExtensionCondition = this._urlFileExtensionCondition?.internalValue;
    }
    if (this._urlFilenameCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlFilenameCondition = this._urlFilenameCondition?.internalValue;
    }
    if (this._urlPathCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlPathCondition = this._urlPathCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientPortCondition.internalValue = undefined;
      this._cookiesCondition.internalValue = undefined;
      this._hostNameCondition.internalValue = undefined;
      this._httpVersionCondition.internalValue = undefined;
      this._isDeviceCondition.internalValue = undefined;
      this._postArgsCondition.internalValue = undefined;
      this._queryStringCondition.internalValue = undefined;
      this._remoteAddressCondition.internalValue = undefined;
      this._requestBodyCondition.internalValue = undefined;
      this._requestHeaderCondition.internalValue = undefined;
      this._requestMethodCondition.internalValue = undefined;
      this._requestSchemeCondition.internalValue = undefined;
      this._requestUriCondition.internalValue = undefined;
      this._serverPortCondition.internalValue = undefined;
      this._socketAddressCondition.internalValue = undefined;
      this._sslProtocolCondition.internalValue = undefined;
      this._urlFileExtensionCondition.internalValue = undefined;
      this._urlFilenameCondition.internalValue = undefined;
      this._urlPathCondition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientPortCondition.internalValue = value.clientPortCondition;
      this._cookiesCondition.internalValue = value.cookiesCondition;
      this._hostNameCondition.internalValue = value.hostNameCondition;
      this._httpVersionCondition.internalValue = value.httpVersionCondition;
      this._isDeviceCondition.internalValue = value.isDeviceCondition;
      this._postArgsCondition.internalValue = value.postArgsCondition;
      this._queryStringCondition.internalValue = value.queryStringCondition;
      this._remoteAddressCondition.internalValue = value.remoteAddressCondition;
      this._requestBodyCondition.internalValue = value.requestBodyCondition;
      this._requestHeaderCondition.internalValue = value.requestHeaderCondition;
      this._requestMethodCondition.internalValue = value.requestMethodCondition;
      this._requestSchemeCondition.internalValue = value.requestSchemeCondition;
      this._requestUriCondition.internalValue = value.requestUriCondition;
      this._serverPortCondition.internalValue = value.serverPortCondition;
      this._socketAddressCondition.internalValue = value.socketAddressCondition;
      this._sslProtocolCondition.internalValue = value.sslProtocolCondition;
      this._urlFileExtensionCondition.internalValue = value.urlFileExtensionCondition;
      this._urlFilenameCondition.internalValue = value.urlFilenameCondition;
      this._urlPathCondition.internalValue = value.urlPathCondition;
    }
  }

  // client_port_condition - computed: false, optional: true, required: false
  private _clientPortCondition = new CdnFrontdoorRuleConditionsClientPortConditionList(this, "client_port_condition", false);
  public get clientPortCondition() {
    return this._clientPortCondition;
  }
  public putClientPortCondition(value: CdnFrontdoorRuleConditionsClientPortCondition[] | cdktf.IResolvable) {
    this._clientPortCondition.internalValue = value;
  }
  public resetClientPortCondition() {
    this._clientPortCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPortConditionInput() {
    return this._clientPortCondition.internalValue;
  }

  // cookies_condition - computed: false, optional: true, required: false
  private _cookiesCondition = new CdnFrontdoorRuleConditionsCookiesConditionList(this, "cookies_condition", false);
  public get cookiesCondition() {
    return this._cookiesCondition;
  }
  public putCookiesCondition(value: CdnFrontdoorRuleConditionsCookiesCondition[] | cdktf.IResolvable) {
    this._cookiesCondition.internalValue = value;
  }
  public resetCookiesCondition() {
    this._cookiesCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesConditionInput() {
    return this._cookiesCondition.internalValue;
  }

  // host_name_condition - computed: false, optional: true, required: false
  private _hostNameCondition = new CdnFrontdoorRuleConditionsHostNameConditionList(this, "host_name_condition", false);
  public get hostNameCondition() {
    return this._hostNameCondition;
  }
  public putHostNameCondition(value: CdnFrontdoorRuleConditionsHostNameCondition[] | cdktf.IResolvable) {
    this._hostNameCondition.internalValue = value;
  }
  public resetHostNameCondition() {
    this._hostNameCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameConditionInput() {
    return this._hostNameCondition.internalValue;
  }

  // http_version_condition - computed: false, optional: true, required: false
  private _httpVersionCondition = new CdnFrontdoorRuleConditionsHttpVersionConditionList(this, "http_version_condition", false);
  public get httpVersionCondition() {
    return this._httpVersionCondition;
  }
  public putHttpVersionCondition(value: CdnFrontdoorRuleConditionsHttpVersionCondition[] | cdktf.IResolvable) {
    this._httpVersionCondition.internalValue = value;
  }
  public resetHttpVersionCondition() {
    this._httpVersionCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionConditionInput() {
    return this._httpVersionCondition.internalValue;
  }

  // is_device_condition - computed: false, optional: true, required: false
  private _isDeviceCondition = new CdnFrontdoorRuleConditionsIsDeviceConditionList(this, "is_device_condition", false);
  public get isDeviceCondition() {
    return this._isDeviceCondition;
  }
  public putIsDeviceCondition(value: CdnFrontdoorRuleConditionsIsDeviceCondition[] | cdktf.IResolvable) {
    this._isDeviceCondition.internalValue = value;
  }
  public resetIsDeviceCondition() {
    this._isDeviceCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDeviceConditionInput() {
    return this._isDeviceCondition.internalValue;
  }

  // post_args_condition - computed: false, optional: true, required: false
  private _postArgsCondition = new CdnFrontdoorRuleConditionsPostArgsConditionList(this, "post_args_condition", false);
  public get postArgsCondition() {
    return this._postArgsCondition;
  }
  public putPostArgsCondition(value: CdnFrontdoorRuleConditionsPostArgsCondition[] | cdktf.IResolvable) {
    this._postArgsCondition.internalValue = value;
  }
  public resetPostArgsCondition() {
    this._postArgsCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postArgsConditionInput() {
    return this._postArgsCondition.internalValue;
  }

  // query_string_condition - computed: false, optional: true, required: false
  private _queryStringCondition = new CdnFrontdoorRuleConditionsQueryStringConditionList(this, "query_string_condition", false);
  public get queryStringCondition() {
    return this._queryStringCondition;
  }
  public putQueryStringCondition(value: CdnFrontdoorRuleConditionsQueryStringCondition[] | cdktf.IResolvable) {
    this._queryStringCondition.internalValue = value;
  }
  public resetQueryStringCondition() {
    this._queryStringCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringConditionInput() {
    return this._queryStringCondition.internalValue;
  }

  // remote_address_condition - computed: false, optional: true, required: false
  private _remoteAddressCondition = new CdnFrontdoorRuleConditionsRemoteAddressConditionList(this, "remote_address_condition", false);
  public get remoteAddressCondition() {
    return this._remoteAddressCondition;
  }
  public putRemoteAddressCondition(value: CdnFrontdoorRuleConditionsRemoteAddressCondition[] | cdktf.IResolvable) {
    this._remoteAddressCondition.internalValue = value;
  }
  public resetRemoteAddressCondition() {
    this._remoteAddressCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressConditionInput() {
    return this._remoteAddressCondition.internalValue;
  }

  // request_body_condition - computed: false, optional: true, required: false
  private _requestBodyCondition = new CdnFrontdoorRuleConditionsRequestBodyConditionList(this, "request_body_condition", false);
  public get requestBodyCondition() {
    return this._requestBodyCondition;
  }
  public putRequestBodyCondition(value: CdnFrontdoorRuleConditionsRequestBodyCondition[] | cdktf.IResolvable) {
    this._requestBodyCondition.internalValue = value;
  }
  public resetRequestBodyCondition() {
    this._requestBodyCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyConditionInput() {
    return this._requestBodyCondition.internalValue;
  }

  // request_header_condition - computed: false, optional: true, required: false
  private _requestHeaderCondition = new CdnFrontdoorRuleConditionsRequestHeaderConditionList(this, "request_header_condition", false);
  public get requestHeaderCondition() {
    return this._requestHeaderCondition;
  }
  public putRequestHeaderCondition(value: CdnFrontdoorRuleConditionsRequestHeaderCondition[] | cdktf.IResolvable) {
    this._requestHeaderCondition.internalValue = value;
  }
  public resetRequestHeaderCondition() {
    this._requestHeaderCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderConditionInput() {
    return this._requestHeaderCondition.internalValue;
  }

  // request_method_condition - computed: false, optional: true, required: false
  private _requestMethodCondition = new CdnFrontdoorRuleConditionsRequestMethodConditionList(this, "request_method_condition", false);
  public get requestMethodCondition() {
    return this._requestMethodCondition;
  }
  public putRequestMethodCondition(value: CdnFrontdoorRuleConditionsRequestMethodCondition[] | cdktf.IResolvable) {
    this._requestMethodCondition.internalValue = value;
  }
  public resetRequestMethodCondition() {
    this._requestMethodCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodConditionInput() {
    return this._requestMethodCondition.internalValue;
  }

  // request_scheme_condition - computed: false, optional: true, required: false
  private _requestSchemeCondition = new CdnFrontdoorRuleConditionsRequestSchemeConditionList(this, "request_scheme_condition", false);
  public get requestSchemeCondition() {
    return this._requestSchemeCondition;
  }
  public putRequestSchemeCondition(value: CdnFrontdoorRuleConditionsRequestSchemeCondition[] | cdktf.IResolvable) {
    this._requestSchemeCondition.internalValue = value;
  }
  public resetRequestSchemeCondition() {
    this._requestSchemeCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSchemeConditionInput() {
    return this._requestSchemeCondition.internalValue;
  }

  // request_uri_condition - computed: false, optional: true, required: false
  private _requestUriCondition = new CdnFrontdoorRuleConditionsRequestUriConditionList(this, "request_uri_condition", false);
  public get requestUriCondition() {
    return this._requestUriCondition;
  }
  public putRequestUriCondition(value: CdnFrontdoorRuleConditionsRequestUriCondition[] | cdktf.IResolvable) {
    this._requestUriCondition.internalValue = value;
  }
  public resetRequestUriCondition() {
    this._requestUriCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUriConditionInput() {
    return this._requestUriCondition.internalValue;
  }

  // server_port_condition - computed: false, optional: true, required: false
  private _serverPortCondition = new CdnFrontdoorRuleConditionsServerPortConditionList(this, "server_port_condition", false);
  public get serverPortCondition() {
    return this._serverPortCondition;
  }
  public putServerPortCondition(value: CdnFrontdoorRuleConditionsServerPortCondition[] | cdktf.IResolvable) {
    this._serverPortCondition.internalValue = value;
  }
  public resetServerPortCondition() {
    this._serverPortCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortConditionInput() {
    return this._serverPortCondition.internalValue;
  }

  // socket_address_condition - computed: false, optional: true, required: false
  private _socketAddressCondition = new CdnFrontdoorRuleConditionsSocketAddressConditionList(this, "socket_address_condition", false);
  public get socketAddressCondition() {
    return this._socketAddressCondition;
  }
  public putSocketAddressCondition(value: CdnFrontdoorRuleConditionsSocketAddressCondition[] | cdktf.IResolvable) {
    this._socketAddressCondition.internalValue = value;
  }
  public resetSocketAddressCondition() {
    this._socketAddressCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketAddressConditionInput() {
    return this._socketAddressCondition.internalValue;
  }

  // ssl_protocol_condition - computed: false, optional: true, required: false
  private _sslProtocolCondition = new CdnFrontdoorRuleConditionsSslProtocolConditionList(this, "ssl_protocol_condition", false);
  public get sslProtocolCondition() {
    return this._sslProtocolCondition;
  }
  public putSslProtocolCondition(value: CdnFrontdoorRuleConditionsSslProtocolCondition[] | cdktf.IResolvable) {
    this._sslProtocolCondition.internalValue = value;
  }
  public resetSslProtocolCondition() {
    this._sslProtocolCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProtocolConditionInput() {
    return this._sslProtocolCondition.internalValue;
  }

  // url_file_extension_condition - computed: false, optional: true, required: false
  private _urlFileExtensionCondition = new CdnFrontdoorRuleConditionsUrlFileExtensionConditionList(this, "url_file_extension_condition", false);
  public get urlFileExtensionCondition() {
    return this._urlFileExtensionCondition;
  }
  public putUrlFileExtensionCondition(value: CdnFrontdoorRuleConditionsUrlFileExtensionCondition[] | cdktf.IResolvable) {
    this._urlFileExtensionCondition.internalValue = value;
  }
  public resetUrlFileExtensionCondition() {
    this._urlFileExtensionCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFileExtensionConditionInput() {
    return this._urlFileExtensionCondition.internalValue;
  }

  // url_filename_condition - computed: false, optional: true, required: false
  private _urlFilenameCondition = new CdnFrontdoorRuleConditionsUrlFilenameConditionList(this, "url_filename_condition", false);
  public get urlFilenameCondition() {
    return this._urlFilenameCondition;
  }
  public putUrlFilenameCondition(value: CdnFrontdoorRuleConditionsUrlFilenameCondition[] | cdktf.IResolvable) {
    this._urlFilenameCondition.internalValue = value;
  }
  public resetUrlFilenameCondition() {
    this._urlFilenameCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilenameConditionInput() {
    return this._urlFilenameCondition.internalValue;
  }

  // url_path_condition - computed: false, optional: true, required: false
  private _urlPathCondition = new CdnFrontdoorRuleConditionsUrlPathConditionList(this, "url_path_condition", false);
  public get urlPathCondition() {
    return this._urlPathCondition;
  }
  public putUrlPathCondition(value: CdnFrontdoorRuleConditionsUrlPathCondition[] | cdktf.IResolvable) {
    this._urlPathCondition.internalValue = value;
  }
  public resetUrlPathCondition() {
    this._urlPathCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathConditionInput() {
    return this._urlPathCondition.internalValue;
  }
}
export interface CdnFrontdoorRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#create CdnFrontdoorRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#delete CdnFrontdoorRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#read CdnFrontdoorRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#update CdnFrontdoorRule#update}
  */
  readonly update?: string;
}

export function cdnFrontdoorRuleTimeoutsToTerraform(struct?: CdnFrontdoorRuleTimeouts | cdktf.IResolvable): any {
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


export function cdnFrontdoorRuleTimeoutsToHclTerraform(struct?: CdnFrontdoorRuleTimeouts | cdktf.IResolvable): any {
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

export class CdnFrontdoorRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnFrontdoorRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule azurerm_cdn_frontdoor_rule}
*/
export class CdnFrontdoorRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_cdn_frontdoor_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnFrontdoorRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnFrontdoorRule to import
  * @param importFromId The id of the existing CdnFrontdoorRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnFrontdoorRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_cdn_frontdoor_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_rule azurerm_cdn_frontdoor_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnFrontdoorRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CdnFrontdoorRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cdn_frontdoor_rule',
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
    this._behaviorOnMatch = config.behaviorOnMatch;
    this._cdnFrontdoorRuleSetId = config.cdnFrontdoorRuleSetId;
    this._id = config.id;
    this._name = config.name;
    this._order = config.order;
    this._actions.internalValue = config.actions;
    this._conditions.internalValue = config.conditions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // behavior_on_match - computed: false, optional: true, required: false
  private _behaviorOnMatch?: string; 
  public get behaviorOnMatch() {
    return this.getStringAttribute('behavior_on_match');
  }
  public set behaviorOnMatch(value: string) {
    this._behaviorOnMatch = value;
  }
  public resetBehaviorOnMatch() {
    this._behaviorOnMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorOnMatchInput() {
    return this._behaviorOnMatch;
  }

  // cdn_frontdoor_rule_set_id - computed: false, optional: false, required: true
  private _cdnFrontdoorRuleSetId?: string; 
  public get cdnFrontdoorRuleSetId() {
    return this.getStringAttribute('cdn_frontdoor_rule_set_id');
  }
  public set cdnFrontdoorRuleSetId(value: string) {
    this._cdnFrontdoorRuleSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnFrontdoorRuleSetIdInput() {
    return this._cdnFrontdoorRuleSetId;
  }

  // cdn_frontdoor_rule_set_name - computed: true, optional: false, required: false
  public get cdnFrontdoorRuleSetName() {
    return this.getStringAttribute('cdn_frontdoor_rule_set_name');
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

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // actions - computed: false, optional: false, required: true
  private _actions = new CdnFrontdoorRuleActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: CdnFrontdoorRuleActions) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new CdnFrontdoorRuleConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: CdnFrontdoorRuleConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CdnFrontdoorRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CdnFrontdoorRuleTimeouts) {
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
      behavior_on_match: cdktf.stringToTerraform(this._behaviorOnMatch),
      cdn_frontdoor_rule_set_id: cdktf.stringToTerraform(this._cdnFrontdoorRuleSetId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      order: cdktf.numberToTerraform(this._order),
      actions: cdnFrontdoorRuleActionsToTerraform(this._actions.internalValue),
      conditions: cdnFrontdoorRuleConditionsToTerraform(this._conditions.internalValue),
      timeouts: cdnFrontdoorRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      behavior_on_match: {
        value: cdktf.stringToHclTerraform(this._behaviorOnMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdn_frontdoor_rule_set_id: {
        value: cdktf.stringToHclTerraform(this._cdnFrontdoorRuleSetId),
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
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      actions: {
        value: cdnFrontdoorRuleActionsToHclTerraform(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnFrontdoorRuleActionsList",
      },
      conditions: {
        value: cdnFrontdoorRuleConditionsToHclTerraform(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnFrontdoorRuleConditionsList",
      },
      timeouts: {
        value: cdnFrontdoorRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CdnFrontdoorRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
