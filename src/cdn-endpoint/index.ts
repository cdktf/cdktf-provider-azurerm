// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#content_types_to_compress CdnEndpoint#content_types_to_compress}
  */
  readonly contentTypesToCompress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#id CdnEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#is_compression_enabled CdnEndpoint#is_compression_enabled}
  */
  readonly isCompressionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#is_http_allowed CdnEndpoint#is_http_allowed}
  */
  readonly isHttpAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#is_https_allowed CdnEndpoint#is_https_allowed}
  */
  readonly isHttpsAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#location CdnEndpoint#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#optimization_type CdnEndpoint#optimization_type}
  */
  readonly optimizationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#origin_host_header CdnEndpoint#origin_host_header}
  */
  readonly originHostHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#origin_path CdnEndpoint#origin_path}
  */
  readonly originPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#probe_path CdnEndpoint#probe_path}
  */
  readonly probePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#profile_name CdnEndpoint#profile_name}
  */
  readonly profileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#querystring_caching_behaviour CdnEndpoint#querystring_caching_behaviour}
  */
  readonly querystringCachingBehaviour?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#resource_group_name CdnEndpoint#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#tags CdnEndpoint#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * delivery_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#delivery_rule CdnEndpoint#delivery_rule}
  */
  readonly deliveryRule?: CdnEndpointDeliveryRule[] | cdktf.IResolvable;
  /**
  * geo_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#geo_filter CdnEndpoint#geo_filter}
  */
  readonly geoFilter?: CdnEndpointGeoFilter[] | cdktf.IResolvable;
  /**
  * global_delivery_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#global_delivery_rule CdnEndpoint#global_delivery_rule}
  */
  readonly globalDeliveryRule?: CdnEndpointGlobalDeliveryRule;
  /**
  * origin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#origin CdnEndpoint#origin}
  */
  readonly origin: CdnEndpointOrigin[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#timeouts CdnEndpoint#timeouts}
  */
  readonly timeouts?: CdnEndpointTimeouts;
}
export interface CdnEndpointDeliveryRuleCacheExpirationAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}
  */
  readonly behavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#duration CdnEndpoint#duration}
  */
  readonly duration?: string;
}

export function cdnEndpointDeliveryRuleCacheExpirationActionToTerraform(struct?: CdnEndpointDeliveryRuleCacheExpirationActionOutputReference | CdnEndpointDeliveryRuleCacheExpirationAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function cdnEndpointDeliveryRuleCacheExpirationActionToHclTerraform(struct?: CdnEndpointDeliveryRuleCacheExpirationActionOutputReference | CdnEndpointDeliveryRuleCacheExpirationAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnEndpointDeliveryRuleCacheExpirationActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnEndpointDeliveryRuleCacheExpirationAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnEndpointDeliveryRuleCacheExpirationAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._behavior = undefined;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._behavior = value.behavior;
      this._duration = value.duration;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface CdnEndpointDeliveryRuleCacheKeyQueryStringAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}
  */
  readonly behavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#parameters CdnEndpoint#parameters}
  */
  readonly parameters?: string;
}

export function cdnEndpointDeliveryRuleCacheKeyQueryStringActionToTerraform(struct?: CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference | CdnEndpointDeliveryRuleCacheKeyQueryStringAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    parameters: cdktf.stringToTerraform(struct!.parameters),
  }
}


export function cdnEndpointDeliveryRuleCacheKeyQueryStringActionToHclTerraform(struct?: CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference | CdnEndpointDeliveryRuleCacheKeyQueryStringAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.stringToHclTerraform(struct!.parameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnEndpointDeliveryRuleCacheKeyQueryStringAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnEndpointDeliveryRuleCacheKeyQueryStringAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._behavior = undefined;
      this._parameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._behavior = value.behavior;
      this._parameters = value.parameters;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }
}
export interface CdnEndpointDeliveryRuleCookiesCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#selector CdnEndpoint#selector}
  */
  readonly selector: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}
  */
  readonly transforms?: string[];
}

export function cdnEndpointDeliveryRuleCookiesConditionToTerraform(struct?: CdnEndpointDeliveryRuleCookiesCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    selector: cdktf.stringToTerraform(struct!.selector),
    transforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transforms),
  }
}


export function cdnEndpointDeliveryRuleCookiesConditionToHclTerraform(struct?: CdnEndpointDeliveryRuleCookiesCondition | cdktf.IResolvable): any {
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
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnEndpointDeliveryRuleCookiesConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnEndpointDeliveryRuleCookiesCondition | cdktf.IResolvable | undefined {
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
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnEndpointDeliveryRuleCookiesCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
      this._selector = undefined;
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
      this._selector = value.selector;
      this._transforms = value.transforms;
    }
  }

  // match_values - computed: false, optional: true, required: false
  private _matchValues?: string[]; 
  public get matchValues() {
    return cdktf.Fn.tolist(this.getListAttribute('match_values'));
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

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return this.getListAttribute('transforms');
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

export class CdnEndpointDeliveryRuleCookiesConditionList extends cdktf.ComplexList {
  public internalValue? : CdnEndpointDeliveryRuleCookiesCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnEndpointDeliveryRuleCookiesConditionOutputReference {
    return new CdnEndpointDeliveryRuleCookiesConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnEndpointDeliveryRuleDeviceCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}
  */
  readonly matchValues: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}
  */
  readonly operator?: string;
}

export function cdnEndpointDeliveryRuleDeviceConditionToTerraform(struct?: CdnEndpointDeliveryRuleDeviceConditionOutputReference | CdnEndpointDeliveryRuleDeviceCondition): any {
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


export function cdnEndpointDeliveryRuleDeviceConditionToHclTerraform(struct?: CdnEndpointDeliveryRuleDeviceConditionOutputReference | CdnEndpointDeliveryRuleDeviceCondition): any {
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

export class CdnEndpointDeliveryRuleDeviceConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnEndpointDeliveryRuleDeviceCondition | undefined {
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

  public set internalValue(value: CdnEndpointDeliveryRuleDeviceCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface CdnEndpointDeliveryRuleHttpVersionCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}
  */
  readonly matchValues: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}
  */
  readonly operator?: string;
}

export function cdnEndpointDeliveryRuleHttpVersionConditionToTerraform(struct?: CdnEndpointDeliveryRuleHttpVersionCondition | cdktf.IResolvable): any {
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


export function cdnEndpointDeliveryRuleHttpVersionConditionToHclTerraform(struct?: CdnEndpointDeliveryRuleHttpVersionCondition | cdktf.IResolvable): any {
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

export class CdnEndpointDeliveryRuleHttpVersionConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnEndpointDeliveryRuleHttpVersionCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnEndpointDeliveryRuleHttpVersionCondition | cdktf.IResolvable | undefined) {
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

export class CdnEndpointDeliveryRuleHttpVersionConditionList extends cdktf.ComplexList {
  public internalValue? : CdnEndpointDeliveryRuleHttpVersionCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnEndpointDeliveryRuleHttpVersionConditionOutputReference {
    return new CdnEndpointDeliveryRuleHttpVersionConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnEndpointDeliveryRuleModifyRequestHeaderAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}
  */
  readonly value?: string;
}

export function cdnEndpointDeliveryRuleModifyRequestHeaderActionToTerraform(struct?: CdnEndpointDeliveryRuleModifyRequestHeaderAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnEndpointDeliveryRuleModifyRequestHeaderActionToHclTerraform(struct?: CdnEndpointDeliveryRuleModifyRequestHeaderAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnEndpointDeliveryRuleModifyRequestHeaderAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
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

  public set internalValue(value: CdnEndpointDeliveryRuleModifyRequestHeaderAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
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
      this._action = value.action;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

export class CdnEndpointDeliveryRuleModifyRequestHeaderActionList extends cdktf.ComplexList {
  public internalValue? : CdnEndpointDeliveryRuleModifyRequestHeaderAction[] | cdktf.IResolvable

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
  public get(index: number): CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference {
    return new CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnEndpointDeliveryRuleModifyResponseHeaderAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}
  */
  readonly value?: string;
}

export function cdnEndpointDeliveryRuleModifyResponseHeaderActionToTerraform(struct?: CdnEndpointDeliveryRuleModifyResponseHeaderAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnEndpointDeliveryRuleModifyResponseHeaderActionToHclTerraform(struct?: CdnEndpointDeliveryRuleModifyResponseHeaderAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnEndpointDeliveryRuleModifyResponseHeaderAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
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

  public set internalValue(value: CdnEndpointDeliveryRuleModifyResponseHeaderAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
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
      this._action = value.action;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

export class CdnEndpointDeliveryRuleModifyResponseHeaderActionList extends cdktf.ComplexList {
  public internalValue? : CdnEndpointDeliveryRuleModifyResponseHeaderAction[] | cdktf.IResolvable

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
  public get(index: number): CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference {
    return new CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnEndpointDeliveryRulePostArgCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#selector CdnEndpoint#selector}
  */
  readonly selector: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}
  */
  readonly transforms?: string[];
}

export function cdnEndpointDeliveryRulePostArgConditionToTerraform(struct?: CdnEndpointDeliveryRulePostArgCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    selector: cdktf.stringToTerraform(struct!.selector),
    transforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transforms),
  }
}


export function cdnEndpointDeliveryRulePostArgConditionToHclTerraform(struct?: CdnEndpointDeliveryRulePostArgCondition | cdktf.IResolvable): any {
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
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnEndpointDeliveryRulePostArgConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnEndpointDeliveryRulePostArgCondition | cdktf.IResolvable | undefined {
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
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnEndpointDeliveryRulePostArgCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
      this._selector = undefined;
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
      this._selector = value.selector;
      this._transforms = value.transforms;
    }
  }

  // match_values - computed: false, optional: true, required: false
  private _matchValues?: string[]; 
  public get matchValues() {
    return cdktf.Fn.tolist(this.getListAttribute('match_values'));
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

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return this.getListAttribute('transforms');
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

export class CdnEndpointDeliveryRulePostArgConditionList extends cdktf.ComplexList {
  public internalValue? : CdnEndpointDeliveryRulePostArgCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnEndpointDeliveryRulePostArgConditionOutputReference {
    return new CdnEndpointDeliveryRulePostArgConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnEndpointDeliveryRuleQueryStringCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}
  */
  readonly transforms?: string[];
}

export function cdnEndpointDeliveryRuleQueryStringConditionToTerraform(struct?: CdnEndpointDeliveryRuleQueryStringCondition | cdktf.IResolvable): any {
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


export function cdnEndpointDeliveryRuleQueryStringConditionToHclTerraform(struct?: CdnEndpointDeliveryRuleQueryStringCondition | cdktf.IResolvable): any {
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
    transforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnEndpointDeliveryRuleQueryStringConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnEndpointDeliveryRuleQueryStringCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnEndpointDeliveryRuleQueryStringCondition | cdktf.IResolvable | undefined) {
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
    return cdktf.Fn.tolist(this.getListAttribute('match_values'));
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
    return this.getListAttribute('transforms');
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

export class CdnEndpointDeliveryRuleQueryStringConditionList extends cdktf.ComplexList {
  public internalValue? : CdnEndpointDeliveryRuleQueryStringCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnEndpointDeliveryRuleQueryStringConditionOutputReference {
    return new CdnEndpointDeliveryRuleQueryStringConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnEndpointDeliveryRuleRemoteAddressCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}
  */
  readonly operator: string;
}

export function cdnEndpointDeliveryRuleRemoteAddressConditionToTerraform(struct?: CdnEndpointDeliveryRuleRemoteAddressCondition | cdktf.IResolvable): any {
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


export function cdnEndpointDeliveryRuleRemoteAddressConditionToHclTerraform(struct?: CdnEndpointDeliveryRuleRemoteAddressCondition | cdktf.IResolvable): any {
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

export class CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnEndpointDeliveryRuleRemoteAddressCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnEndpointDeliveryRuleRemoteAddressCondition | cdktf.IResolvable | undefined) {
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
    return cdktf.Fn.tolist(this.getListAttribute('match_values'));
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

export class CdnEndpointDeliveryRuleRemoteAddressConditionList extends cdktf.ComplexList {
  public internalValue? : CdnEndpointDeliveryRuleRemoteAddressCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference {
    return new CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnEndpointDeliveryRuleRequestBodyCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}
  */
  readonly transforms?: string[];
}

export function cdnEndpointDeliveryRuleRequestBodyConditionToTerraform(struct?: CdnEndpointDeliveryRuleRequestBodyCondition | cdktf.IResolvable): any {
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


export function cdnEndpointDeliveryRuleRequestBodyConditionToHclTerraform(struct?: CdnEndpointDeliveryRuleRequestBodyCondition | cdktf.IResolvable): any {
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
    transforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnEndpointDeliveryRuleRequestBodyConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnEndpointDeliveryRuleRequestBodyCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnEndpointDeliveryRuleRequestBodyCondition | cdktf.IResolvable | undefined) {
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
    return cdktf.Fn.tolist(this.getListAttribute('match_values'));
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
    return this.getListAttribute('transforms');
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

export class CdnEndpointDeliveryRuleRequestBodyConditionList extends cdktf.ComplexList {
  public internalValue? : CdnEndpointDeliveryRuleRequestBodyCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnEndpointDeliveryRuleRequestBodyConditionOutputReference {
    return new CdnEndpointDeliveryRuleRequestBodyConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnEndpointDeliveryRuleRequestHeaderCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#selector CdnEndpoint#selector}
  */
  readonly selector: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}
  */
  readonly transforms?: string[];
}

export function cdnEndpointDeliveryRuleRequestHeaderConditionToTerraform(struct?: CdnEndpointDeliveryRuleRequestHeaderCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    selector: cdktf.stringToTerraform(struct!.selector),
    transforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transforms),
  }
}


export function cdnEndpointDeliveryRuleRequestHeaderConditionToHclTerraform(struct?: CdnEndpointDeliveryRuleRequestHeaderCondition | cdktf.IResolvable): any {
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
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnEndpointDeliveryRuleRequestHeaderCondition | cdktf.IResolvable | undefined {
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
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnEndpointDeliveryRuleRequestHeaderCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
      this._selector = undefined;
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
      this._selector = value.selector;
      this._transforms = value.transforms;
    }
  }

  // match_values - computed: false, optional: true, required: false
  private _matchValues?: string[]; 
  public get matchValues() {
    return cdktf.Fn.tolist(this.getListAttribute('match_values'));
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

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return this.getListAttribute('transforms');
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

export class CdnEndpointDeliveryRuleRequestHeaderConditionList extends cdktf.ComplexList {
  public internalValue? : CdnEndpointDeliveryRuleRequestHeaderCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference {
    return new CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnEndpointDeliveryRuleRequestMethodCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}
  */
  readonly matchValues: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}
  */
  readonly operator?: string;
}

export function cdnEndpointDeliveryRuleRequestMethodConditionToTerraform(struct?: CdnEndpointDeliveryRuleRequestMethodConditionOutputReference | CdnEndpointDeliveryRuleRequestMethodCondition): any {
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


export function cdnEndpointDeliveryRuleRequestMethodConditionToHclTerraform(struct?: CdnEndpointDeliveryRuleRequestMethodConditionOutputReference | CdnEndpointDeliveryRuleRequestMethodCondition): any {
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

export class CdnEndpointDeliveryRuleRequestMethodConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnEndpointDeliveryRuleRequestMethodCondition | undefined {
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

  public set internalValue(value: CdnEndpointDeliveryRuleRequestMethodCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface CdnEndpointDeliveryRuleRequestSchemeCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}
  */
  readonly matchValues: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}
  */
  readonly operator?: string;
}

export function cdnEndpointDeliveryRuleRequestSchemeConditionToTerraform(struct?: CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference | CdnEndpointDeliveryRuleRequestSchemeCondition): any {
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


export function cdnEndpointDeliveryRuleRequestSchemeConditionToHclTerraform(struct?: CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference | CdnEndpointDeliveryRuleRequestSchemeCondition): any {
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

export class CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnEndpointDeliveryRuleRequestSchemeCondition | undefined {
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

  public set internalValue(value: CdnEndpointDeliveryRuleRequestSchemeCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchValues = undefined;
      this._negateCondition = undefined;
      this._operator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface CdnEndpointDeliveryRuleRequestUriCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}
  */
  readonly transforms?: string[];
}

export function cdnEndpointDeliveryRuleRequestUriConditionToTerraform(struct?: CdnEndpointDeliveryRuleRequestUriCondition | cdktf.IResolvable): any {
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


export function cdnEndpointDeliveryRuleRequestUriConditionToHclTerraform(struct?: CdnEndpointDeliveryRuleRequestUriCondition | cdktf.IResolvable): any {
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
    transforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnEndpointDeliveryRuleRequestUriConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnEndpointDeliveryRuleRequestUriCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnEndpointDeliveryRuleRequestUriCondition | cdktf.IResolvable | undefined) {
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
    return cdktf.Fn.tolist(this.getListAttribute('match_values'));
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
    return this.getListAttribute('transforms');
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

export class CdnEndpointDeliveryRuleRequestUriConditionList extends cdktf.ComplexList {
  public internalValue? : CdnEndpointDeliveryRuleRequestUriCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnEndpointDeliveryRuleRequestUriConditionOutputReference {
    return new CdnEndpointDeliveryRuleRequestUriConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnEndpointDeliveryRuleUrlFileExtensionCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}
  */
  readonly transforms?: string[];
}

export function cdnEndpointDeliveryRuleUrlFileExtensionConditionToTerraform(struct?: CdnEndpointDeliveryRuleUrlFileExtensionCondition | cdktf.IResolvable): any {
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


export function cdnEndpointDeliveryRuleUrlFileExtensionConditionToHclTerraform(struct?: CdnEndpointDeliveryRuleUrlFileExtensionCondition | cdktf.IResolvable): any {
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
    transforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnEndpointDeliveryRuleUrlFileExtensionCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnEndpointDeliveryRuleUrlFileExtensionCondition | cdktf.IResolvable | undefined) {
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
    return cdktf.Fn.tolist(this.getListAttribute('match_values'));
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
    return this.getListAttribute('transforms');
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

export class CdnEndpointDeliveryRuleUrlFileExtensionConditionList extends cdktf.ComplexList {
  public internalValue? : CdnEndpointDeliveryRuleUrlFileExtensionCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference {
    return new CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnEndpointDeliveryRuleUrlFileNameCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}
  */
  readonly transforms?: string[];
}

export function cdnEndpointDeliveryRuleUrlFileNameConditionToTerraform(struct?: CdnEndpointDeliveryRuleUrlFileNameCondition | cdktf.IResolvable): any {
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


export function cdnEndpointDeliveryRuleUrlFileNameConditionToHclTerraform(struct?: CdnEndpointDeliveryRuleUrlFileNameCondition | cdktf.IResolvable): any {
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
    transforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnEndpointDeliveryRuleUrlFileNameCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnEndpointDeliveryRuleUrlFileNameCondition | cdktf.IResolvable | undefined) {
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
    return cdktf.Fn.tolist(this.getListAttribute('match_values'));
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
    return this.getListAttribute('transforms');
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

export class CdnEndpointDeliveryRuleUrlFileNameConditionList extends cdktf.ComplexList {
  public internalValue? : CdnEndpointDeliveryRuleUrlFileNameCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference {
    return new CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnEndpointDeliveryRuleUrlPathCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}
  */
  readonly matchValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}
  */
  readonly negateCondition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}
  */
  readonly transforms?: string[];
}

export function cdnEndpointDeliveryRuleUrlPathConditionToTerraform(struct?: CdnEndpointDeliveryRuleUrlPathCondition | cdktf.IResolvable): any {
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


export function cdnEndpointDeliveryRuleUrlPathConditionToHclTerraform(struct?: CdnEndpointDeliveryRuleUrlPathCondition | cdktf.IResolvable): any {
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
    transforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnEndpointDeliveryRuleUrlPathConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnEndpointDeliveryRuleUrlPathCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnEndpointDeliveryRuleUrlPathCondition | cdktf.IResolvable | undefined) {
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
    return cdktf.Fn.tolist(this.getListAttribute('match_values'));
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
    return this.getListAttribute('transforms');
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

export class CdnEndpointDeliveryRuleUrlPathConditionList extends cdktf.ComplexList {
  public internalValue? : CdnEndpointDeliveryRuleUrlPathCondition[] | cdktf.IResolvable

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
  public get(index: number): CdnEndpointDeliveryRuleUrlPathConditionOutputReference {
    return new CdnEndpointDeliveryRuleUrlPathConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnEndpointDeliveryRuleUrlRedirectAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#fragment CdnEndpoint#fragment}
  */
  readonly fragment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#hostname CdnEndpoint#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#path CdnEndpoint#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#protocol CdnEndpoint#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#query_string CdnEndpoint#query_string}
  */
  readonly queryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#redirect_type CdnEndpoint#redirect_type}
  */
  readonly redirectType: string;
}

export function cdnEndpointDeliveryRuleUrlRedirectActionToTerraform(struct?: CdnEndpointDeliveryRuleUrlRedirectActionOutputReference | CdnEndpointDeliveryRuleUrlRedirectAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fragment: cdktf.stringToTerraform(struct!.fragment),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    path: cdktf.stringToTerraform(struct!.path),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    query_string: cdktf.stringToTerraform(struct!.queryString),
    redirect_type: cdktf.stringToTerraform(struct!.redirectType),
  }
}


export function cdnEndpointDeliveryRuleUrlRedirectActionToHclTerraform(struct?: CdnEndpointDeliveryRuleUrlRedirectActionOutputReference | CdnEndpointDeliveryRuleUrlRedirectAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fragment: {
      value: cdktf.stringToHclTerraform(struct!.fragment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
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

export class CdnEndpointDeliveryRuleUrlRedirectActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnEndpointDeliveryRuleUrlRedirectAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fragment !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragment = this._fragment;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._redirectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectType = this._redirectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnEndpointDeliveryRuleUrlRedirectAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fragment = undefined;
      this._hostname = undefined;
      this._path = undefined;
      this._protocol = undefined;
      this._queryString = undefined;
      this._redirectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fragment = value.fragment;
      this._hostname = value.hostname;
      this._path = value.path;
      this._protocol = value.protocol;
      this._queryString = value.queryString;
      this._redirectType = value.redirectType;
    }
  }

  // fragment - computed: false, optional: true, required: false
  private _fragment?: string; 
  public get fragment() {
    return this.getStringAttribute('fragment');
  }
  public set fragment(value: string) {
    this._fragment = value;
  }
  public resetFragment() {
    this._fragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentInput() {
    return this._fragment;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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
export interface CdnEndpointDeliveryRuleUrlRewriteAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#destination CdnEndpoint#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#preserve_unmatched_path CdnEndpoint#preserve_unmatched_path}
  */
  readonly preserveUnmatchedPath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#source_pattern CdnEndpoint#source_pattern}
  */
  readonly sourcePattern: string;
}

export function cdnEndpointDeliveryRuleUrlRewriteActionToTerraform(struct?: CdnEndpointDeliveryRuleUrlRewriteActionOutputReference | CdnEndpointDeliveryRuleUrlRewriteAction): any {
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


export function cdnEndpointDeliveryRuleUrlRewriteActionToHclTerraform(struct?: CdnEndpointDeliveryRuleUrlRewriteActionOutputReference | CdnEndpointDeliveryRuleUrlRewriteAction): any {
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

export class CdnEndpointDeliveryRuleUrlRewriteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnEndpointDeliveryRuleUrlRewriteAction | undefined {
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

  public set internalValue(value: CdnEndpointDeliveryRuleUrlRewriteAction | undefined) {
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
export interface CdnEndpointDeliveryRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#order CdnEndpoint#order}
  */
  readonly order: number;
  /**
  * cache_expiration_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#cache_expiration_action CdnEndpoint#cache_expiration_action}
  */
  readonly cacheExpirationAction?: CdnEndpointDeliveryRuleCacheExpirationAction;
  /**
  * cache_key_query_string_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#cache_key_query_string_action CdnEndpoint#cache_key_query_string_action}
  */
  readonly cacheKeyQueryStringAction?: CdnEndpointDeliveryRuleCacheKeyQueryStringAction;
  /**
  * cookies_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#cookies_condition CdnEndpoint#cookies_condition}
  */
  readonly cookiesCondition?: CdnEndpointDeliveryRuleCookiesCondition[] | cdktf.IResolvable;
  /**
  * device_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#device_condition CdnEndpoint#device_condition}
  */
  readonly deviceCondition?: CdnEndpointDeliveryRuleDeviceCondition;
  /**
  * http_version_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#http_version_condition CdnEndpoint#http_version_condition}
  */
  readonly httpVersionCondition?: CdnEndpointDeliveryRuleHttpVersionCondition[] | cdktf.IResolvable;
  /**
  * modify_request_header_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#modify_request_header_action CdnEndpoint#modify_request_header_action}
  */
  readonly modifyRequestHeaderAction?: CdnEndpointDeliveryRuleModifyRequestHeaderAction[] | cdktf.IResolvable;
  /**
  * modify_response_header_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#modify_response_header_action CdnEndpoint#modify_response_header_action}
  */
  readonly modifyResponseHeaderAction?: CdnEndpointDeliveryRuleModifyResponseHeaderAction[] | cdktf.IResolvable;
  /**
  * post_arg_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#post_arg_condition CdnEndpoint#post_arg_condition}
  */
  readonly postArgCondition?: CdnEndpointDeliveryRulePostArgCondition[] | cdktf.IResolvable;
  /**
  * query_string_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#query_string_condition CdnEndpoint#query_string_condition}
  */
  readonly queryStringCondition?: CdnEndpointDeliveryRuleQueryStringCondition[] | cdktf.IResolvable;
  /**
  * remote_address_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#remote_address_condition CdnEndpoint#remote_address_condition}
  */
  readonly remoteAddressCondition?: CdnEndpointDeliveryRuleRemoteAddressCondition[] | cdktf.IResolvable;
  /**
  * request_body_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#request_body_condition CdnEndpoint#request_body_condition}
  */
  readonly requestBodyCondition?: CdnEndpointDeliveryRuleRequestBodyCondition[] | cdktf.IResolvable;
  /**
  * request_header_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#request_header_condition CdnEndpoint#request_header_condition}
  */
  readonly requestHeaderCondition?: CdnEndpointDeliveryRuleRequestHeaderCondition[] | cdktf.IResolvable;
  /**
  * request_method_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#request_method_condition CdnEndpoint#request_method_condition}
  */
  readonly requestMethodCondition?: CdnEndpointDeliveryRuleRequestMethodCondition;
  /**
  * request_scheme_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#request_scheme_condition CdnEndpoint#request_scheme_condition}
  */
  readonly requestSchemeCondition?: CdnEndpointDeliveryRuleRequestSchemeCondition;
  /**
  * request_uri_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#request_uri_condition CdnEndpoint#request_uri_condition}
  */
  readonly requestUriCondition?: CdnEndpointDeliveryRuleRequestUriCondition[] | cdktf.IResolvable;
  /**
  * url_file_extension_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#url_file_extension_condition CdnEndpoint#url_file_extension_condition}
  */
  readonly urlFileExtensionCondition?: CdnEndpointDeliveryRuleUrlFileExtensionCondition[] | cdktf.IResolvable;
  /**
  * url_file_name_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#url_file_name_condition CdnEndpoint#url_file_name_condition}
  */
  readonly urlFileNameCondition?: CdnEndpointDeliveryRuleUrlFileNameCondition[] | cdktf.IResolvable;
  /**
  * url_path_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#url_path_condition CdnEndpoint#url_path_condition}
  */
  readonly urlPathCondition?: CdnEndpointDeliveryRuleUrlPathCondition[] | cdktf.IResolvable;
  /**
  * url_redirect_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#url_redirect_action CdnEndpoint#url_redirect_action}
  */
  readonly urlRedirectAction?: CdnEndpointDeliveryRuleUrlRedirectAction;
  /**
  * url_rewrite_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#url_rewrite_action CdnEndpoint#url_rewrite_action}
  */
  readonly urlRewriteAction?: CdnEndpointDeliveryRuleUrlRewriteAction;
}

export function cdnEndpointDeliveryRuleToTerraform(struct?: CdnEndpointDeliveryRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    order: cdktf.numberToTerraform(struct!.order),
    cache_expiration_action: cdnEndpointDeliveryRuleCacheExpirationActionToTerraform(struct!.cacheExpirationAction),
    cache_key_query_string_action: cdnEndpointDeliveryRuleCacheKeyQueryStringActionToTerraform(struct!.cacheKeyQueryStringAction),
    cookies_condition: cdktf.listMapper(cdnEndpointDeliveryRuleCookiesConditionToTerraform, true)(struct!.cookiesCondition),
    device_condition: cdnEndpointDeliveryRuleDeviceConditionToTerraform(struct!.deviceCondition),
    http_version_condition: cdktf.listMapper(cdnEndpointDeliveryRuleHttpVersionConditionToTerraform, true)(struct!.httpVersionCondition),
    modify_request_header_action: cdktf.listMapper(cdnEndpointDeliveryRuleModifyRequestHeaderActionToTerraform, true)(struct!.modifyRequestHeaderAction),
    modify_response_header_action: cdktf.listMapper(cdnEndpointDeliveryRuleModifyResponseHeaderActionToTerraform, true)(struct!.modifyResponseHeaderAction),
    post_arg_condition: cdktf.listMapper(cdnEndpointDeliveryRulePostArgConditionToTerraform, true)(struct!.postArgCondition),
    query_string_condition: cdktf.listMapper(cdnEndpointDeliveryRuleQueryStringConditionToTerraform, true)(struct!.queryStringCondition),
    remote_address_condition: cdktf.listMapper(cdnEndpointDeliveryRuleRemoteAddressConditionToTerraform, true)(struct!.remoteAddressCondition),
    request_body_condition: cdktf.listMapper(cdnEndpointDeliveryRuleRequestBodyConditionToTerraform, true)(struct!.requestBodyCondition),
    request_header_condition: cdktf.listMapper(cdnEndpointDeliveryRuleRequestHeaderConditionToTerraform, true)(struct!.requestHeaderCondition),
    request_method_condition: cdnEndpointDeliveryRuleRequestMethodConditionToTerraform(struct!.requestMethodCondition),
    request_scheme_condition: cdnEndpointDeliveryRuleRequestSchemeConditionToTerraform(struct!.requestSchemeCondition),
    request_uri_condition: cdktf.listMapper(cdnEndpointDeliveryRuleRequestUriConditionToTerraform, true)(struct!.requestUriCondition),
    url_file_extension_condition: cdktf.listMapper(cdnEndpointDeliveryRuleUrlFileExtensionConditionToTerraform, true)(struct!.urlFileExtensionCondition),
    url_file_name_condition: cdktf.listMapper(cdnEndpointDeliveryRuleUrlFileNameConditionToTerraform, true)(struct!.urlFileNameCondition),
    url_path_condition: cdktf.listMapper(cdnEndpointDeliveryRuleUrlPathConditionToTerraform, true)(struct!.urlPathCondition),
    url_redirect_action: cdnEndpointDeliveryRuleUrlRedirectActionToTerraform(struct!.urlRedirectAction),
    url_rewrite_action: cdnEndpointDeliveryRuleUrlRewriteActionToTerraform(struct!.urlRewriteAction),
  }
}


export function cdnEndpointDeliveryRuleToHclTerraform(struct?: CdnEndpointDeliveryRule | cdktf.IResolvable): any {
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
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_expiration_action: {
      value: cdnEndpointDeliveryRuleCacheExpirationActionToHclTerraform(struct!.cacheExpirationAction),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointDeliveryRuleCacheExpirationActionList",
    },
    cache_key_query_string_action: {
      value: cdnEndpointDeliveryRuleCacheKeyQueryStringActionToHclTerraform(struct!.cacheKeyQueryStringAction),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointDeliveryRuleCacheKeyQueryStringActionList",
    },
    cookies_condition: {
      value: cdktf.listMapperHcl(cdnEndpointDeliveryRuleCookiesConditionToHclTerraform, true)(struct!.cookiesCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointDeliveryRuleCookiesConditionList",
    },
    device_condition: {
      value: cdnEndpointDeliveryRuleDeviceConditionToHclTerraform(struct!.deviceCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointDeliveryRuleDeviceConditionList",
    },
    http_version_condition: {
      value: cdktf.listMapperHcl(cdnEndpointDeliveryRuleHttpVersionConditionToHclTerraform, true)(struct!.httpVersionCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointDeliveryRuleHttpVersionConditionList",
    },
    modify_request_header_action: {
      value: cdktf.listMapperHcl(cdnEndpointDeliveryRuleModifyRequestHeaderActionToHclTerraform, true)(struct!.modifyRequestHeaderAction),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointDeliveryRuleModifyRequestHeaderActionList",
    },
    modify_response_header_action: {
      value: cdktf.listMapperHcl(cdnEndpointDeliveryRuleModifyResponseHeaderActionToHclTerraform, true)(struct!.modifyResponseHeaderAction),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointDeliveryRuleModifyResponseHeaderActionList",
    },
    post_arg_condition: {
      value: cdktf.listMapperHcl(cdnEndpointDeliveryRulePostArgConditionToHclTerraform, true)(struct!.postArgCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointDeliveryRulePostArgConditionList",
    },
    query_string_condition: {
      value: cdktf.listMapperHcl(cdnEndpointDeliveryRuleQueryStringConditionToHclTerraform, true)(struct!.queryStringCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointDeliveryRuleQueryStringConditionList",
    },
    remote_address_condition: {
      value: cdktf.listMapperHcl(cdnEndpointDeliveryRuleRemoteAddressConditionToHclTerraform, true)(struct!.remoteAddressCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointDeliveryRuleRemoteAddressConditionList",
    },
    request_body_condition: {
      value: cdktf.listMapperHcl(cdnEndpointDeliveryRuleRequestBodyConditionToHclTerraform, true)(struct!.requestBodyCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointDeliveryRuleRequestBodyConditionList",
    },
    request_header_condition: {
      value: cdktf.listMapperHcl(cdnEndpointDeliveryRuleRequestHeaderConditionToHclTerraform, true)(struct!.requestHeaderCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointDeliveryRuleRequestHeaderConditionList",
    },
    request_method_condition: {
      value: cdnEndpointDeliveryRuleRequestMethodConditionToHclTerraform(struct!.requestMethodCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointDeliveryRuleRequestMethodConditionList",
    },
    request_scheme_condition: {
      value: cdnEndpointDeliveryRuleRequestSchemeConditionToHclTerraform(struct!.requestSchemeCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointDeliveryRuleRequestSchemeConditionList",
    },
    request_uri_condition: {
      value: cdktf.listMapperHcl(cdnEndpointDeliveryRuleRequestUriConditionToHclTerraform, true)(struct!.requestUriCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointDeliveryRuleRequestUriConditionList",
    },
    url_file_extension_condition: {
      value: cdktf.listMapperHcl(cdnEndpointDeliveryRuleUrlFileExtensionConditionToHclTerraform, true)(struct!.urlFileExtensionCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointDeliveryRuleUrlFileExtensionConditionList",
    },
    url_file_name_condition: {
      value: cdktf.listMapperHcl(cdnEndpointDeliveryRuleUrlFileNameConditionToHclTerraform, true)(struct!.urlFileNameCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointDeliveryRuleUrlFileNameConditionList",
    },
    url_path_condition: {
      value: cdktf.listMapperHcl(cdnEndpointDeliveryRuleUrlPathConditionToHclTerraform, true)(struct!.urlPathCondition),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointDeliveryRuleUrlPathConditionList",
    },
    url_redirect_action: {
      value: cdnEndpointDeliveryRuleUrlRedirectActionToHclTerraform(struct!.urlRedirectAction),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointDeliveryRuleUrlRedirectActionList",
    },
    url_rewrite_action: {
      value: cdnEndpointDeliveryRuleUrlRewriteActionToHclTerraform(struct!.urlRewriteAction),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointDeliveryRuleUrlRewriteActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnEndpointDeliveryRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnEndpointDeliveryRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._cacheExpirationAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheExpirationAction = this._cacheExpirationAction?.internalValue;
    }
    if (this._cacheKeyQueryStringAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheKeyQueryStringAction = this._cacheKeyQueryStringAction?.internalValue;
    }
    if (this._cookiesCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookiesCondition = this._cookiesCondition?.internalValue;
    }
    if (this._deviceCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceCondition = this._deviceCondition?.internalValue;
    }
    if (this._httpVersionCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpVersionCondition = this._httpVersionCondition?.internalValue;
    }
    if (this._modifyRequestHeaderAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyRequestHeaderAction = this._modifyRequestHeaderAction?.internalValue;
    }
    if (this._modifyResponseHeaderAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyResponseHeaderAction = this._modifyResponseHeaderAction?.internalValue;
    }
    if (this._postArgCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postArgCondition = this._postArgCondition?.internalValue;
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
    if (this._urlFileExtensionCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlFileExtensionCondition = this._urlFileExtensionCondition?.internalValue;
    }
    if (this._urlFileNameCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlFileNameCondition = this._urlFileNameCondition?.internalValue;
    }
    if (this._urlPathCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlPathCondition = this._urlPathCondition?.internalValue;
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

  public set internalValue(value: CdnEndpointDeliveryRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._order = undefined;
      this._cacheExpirationAction.internalValue = undefined;
      this._cacheKeyQueryStringAction.internalValue = undefined;
      this._cookiesCondition.internalValue = undefined;
      this._deviceCondition.internalValue = undefined;
      this._httpVersionCondition.internalValue = undefined;
      this._modifyRequestHeaderAction.internalValue = undefined;
      this._modifyResponseHeaderAction.internalValue = undefined;
      this._postArgCondition.internalValue = undefined;
      this._queryStringCondition.internalValue = undefined;
      this._remoteAddressCondition.internalValue = undefined;
      this._requestBodyCondition.internalValue = undefined;
      this._requestHeaderCondition.internalValue = undefined;
      this._requestMethodCondition.internalValue = undefined;
      this._requestSchemeCondition.internalValue = undefined;
      this._requestUriCondition.internalValue = undefined;
      this._urlFileExtensionCondition.internalValue = undefined;
      this._urlFileNameCondition.internalValue = undefined;
      this._urlPathCondition.internalValue = undefined;
      this._urlRedirectAction.internalValue = undefined;
      this._urlRewriteAction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._order = value.order;
      this._cacheExpirationAction.internalValue = value.cacheExpirationAction;
      this._cacheKeyQueryStringAction.internalValue = value.cacheKeyQueryStringAction;
      this._cookiesCondition.internalValue = value.cookiesCondition;
      this._deviceCondition.internalValue = value.deviceCondition;
      this._httpVersionCondition.internalValue = value.httpVersionCondition;
      this._modifyRequestHeaderAction.internalValue = value.modifyRequestHeaderAction;
      this._modifyResponseHeaderAction.internalValue = value.modifyResponseHeaderAction;
      this._postArgCondition.internalValue = value.postArgCondition;
      this._queryStringCondition.internalValue = value.queryStringCondition;
      this._remoteAddressCondition.internalValue = value.remoteAddressCondition;
      this._requestBodyCondition.internalValue = value.requestBodyCondition;
      this._requestHeaderCondition.internalValue = value.requestHeaderCondition;
      this._requestMethodCondition.internalValue = value.requestMethodCondition;
      this._requestSchemeCondition.internalValue = value.requestSchemeCondition;
      this._requestUriCondition.internalValue = value.requestUriCondition;
      this._urlFileExtensionCondition.internalValue = value.urlFileExtensionCondition;
      this._urlFileNameCondition.internalValue = value.urlFileNameCondition;
      this._urlPathCondition.internalValue = value.urlPathCondition;
      this._urlRedirectAction.internalValue = value.urlRedirectAction;
      this._urlRewriteAction.internalValue = value.urlRewriteAction;
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

  // cache_expiration_action - computed: false, optional: true, required: false
  private _cacheExpirationAction = new CdnEndpointDeliveryRuleCacheExpirationActionOutputReference(this, "cache_expiration_action");
  public get cacheExpirationAction() {
    return this._cacheExpirationAction;
  }
  public putCacheExpirationAction(value: CdnEndpointDeliveryRuleCacheExpirationAction) {
    this._cacheExpirationAction.internalValue = value;
  }
  public resetCacheExpirationAction() {
    this._cacheExpirationAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheExpirationActionInput() {
    return this._cacheExpirationAction.internalValue;
  }

  // cache_key_query_string_action - computed: false, optional: true, required: false
  private _cacheKeyQueryStringAction = new CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference(this, "cache_key_query_string_action");
  public get cacheKeyQueryStringAction() {
    return this._cacheKeyQueryStringAction;
  }
  public putCacheKeyQueryStringAction(value: CdnEndpointDeliveryRuleCacheKeyQueryStringAction) {
    this._cacheKeyQueryStringAction.internalValue = value;
  }
  public resetCacheKeyQueryStringAction() {
    this._cacheKeyQueryStringAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheKeyQueryStringActionInput() {
    return this._cacheKeyQueryStringAction.internalValue;
  }

  // cookies_condition - computed: false, optional: true, required: false
  private _cookiesCondition = new CdnEndpointDeliveryRuleCookiesConditionList(this, "cookies_condition", false);
  public get cookiesCondition() {
    return this._cookiesCondition;
  }
  public putCookiesCondition(value: CdnEndpointDeliveryRuleCookiesCondition[] | cdktf.IResolvable) {
    this._cookiesCondition.internalValue = value;
  }
  public resetCookiesCondition() {
    this._cookiesCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesConditionInput() {
    return this._cookiesCondition.internalValue;
  }

  // device_condition - computed: false, optional: true, required: false
  private _deviceCondition = new CdnEndpointDeliveryRuleDeviceConditionOutputReference(this, "device_condition");
  public get deviceCondition() {
    return this._deviceCondition;
  }
  public putDeviceCondition(value: CdnEndpointDeliveryRuleDeviceCondition) {
    this._deviceCondition.internalValue = value;
  }
  public resetDeviceCondition() {
    this._deviceCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceConditionInput() {
    return this._deviceCondition.internalValue;
  }

  // http_version_condition - computed: false, optional: true, required: false
  private _httpVersionCondition = new CdnEndpointDeliveryRuleHttpVersionConditionList(this, "http_version_condition", false);
  public get httpVersionCondition() {
    return this._httpVersionCondition;
  }
  public putHttpVersionCondition(value: CdnEndpointDeliveryRuleHttpVersionCondition[] | cdktf.IResolvable) {
    this._httpVersionCondition.internalValue = value;
  }
  public resetHttpVersionCondition() {
    this._httpVersionCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionConditionInput() {
    return this._httpVersionCondition.internalValue;
  }

  // modify_request_header_action - computed: false, optional: true, required: false
  private _modifyRequestHeaderAction = new CdnEndpointDeliveryRuleModifyRequestHeaderActionList(this, "modify_request_header_action", false);
  public get modifyRequestHeaderAction() {
    return this._modifyRequestHeaderAction;
  }
  public putModifyRequestHeaderAction(value: CdnEndpointDeliveryRuleModifyRequestHeaderAction[] | cdktf.IResolvable) {
    this._modifyRequestHeaderAction.internalValue = value;
  }
  public resetModifyRequestHeaderAction() {
    this._modifyRequestHeaderAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyRequestHeaderActionInput() {
    return this._modifyRequestHeaderAction.internalValue;
  }

  // modify_response_header_action - computed: false, optional: true, required: false
  private _modifyResponseHeaderAction = new CdnEndpointDeliveryRuleModifyResponseHeaderActionList(this, "modify_response_header_action", false);
  public get modifyResponseHeaderAction() {
    return this._modifyResponseHeaderAction;
  }
  public putModifyResponseHeaderAction(value: CdnEndpointDeliveryRuleModifyResponseHeaderAction[] | cdktf.IResolvable) {
    this._modifyResponseHeaderAction.internalValue = value;
  }
  public resetModifyResponseHeaderAction() {
    this._modifyResponseHeaderAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyResponseHeaderActionInput() {
    return this._modifyResponseHeaderAction.internalValue;
  }

  // post_arg_condition - computed: false, optional: true, required: false
  private _postArgCondition = new CdnEndpointDeliveryRulePostArgConditionList(this, "post_arg_condition", false);
  public get postArgCondition() {
    return this._postArgCondition;
  }
  public putPostArgCondition(value: CdnEndpointDeliveryRulePostArgCondition[] | cdktf.IResolvable) {
    this._postArgCondition.internalValue = value;
  }
  public resetPostArgCondition() {
    this._postArgCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postArgConditionInput() {
    return this._postArgCondition.internalValue;
  }

  // query_string_condition - computed: false, optional: true, required: false
  private _queryStringCondition = new CdnEndpointDeliveryRuleQueryStringConditionList(this, "query_string_condition", false);
  public get queryStringCondition() {
    return this._queryStringCondition;
  }
  public putQueryStringCondition(value: CdnEndpointDeliveryRuleQueryStringCondition[] | cdktf.IResolvable) {
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
  private _remoteAddressCondition = new CdnEndpointDeliveryRuleRemoteAddressConditionList(this, "remote_address_condition", false);
  public get remoteAddressCondition() {
    return this._remoteAddressCondition;
  }
  public putRemoteAddressCondition(value: CdnEndpointDeliveryRuleRemoteAddressCondition[] | cdktf.IResolvable) {
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
  private _requestBodyCondition = new CdnEndpointDeliveryRuleRequestBodyConditionList(this, "request_body_condition", false);
  public get requestBodyCondition() {
    return this._requestBodyCondition;
  }
  public putRequestBodyCondition(value: CdnEndpointDeliveryRuleRequestBodyCondition[] | cdktf.IResolvable) {
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
  private _requestHeaderCondition = new CdnEndpointDeliveryRuleRequestHeaderConditionList(this, "request_header_condition", false);
  public get requestHeaderCondition() {
    return this._requestHeaderCondition;
  }
  public putRequestHeaderCondition(value: CdnEndpointDeliveryRuleRequestHeaderCondition[] | cdktf.IResolvable) {
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
  private _requestMethodCondition = new CdnEndpointDeliveryRuleRequestMethodConditionOutputReference(this, "request_method_condition");
  public get requestMethodCondition() {
    return this._requestMethodCondition;
  }
  public putRequestMethodCondition(value: CdnEndpointDeliveryRuleRequestMethodCondition) {
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
  private _requestSchemeCondition = new CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference(this, "request_scheme_condition");
  public get requestSchemeCondition() {
    return this._requestSchemeCondition;
  }
  public putRequestSchemeCondition(value: CdnEndpointDeliveryRuleRequestSchemeCondition) {
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
  private _requestUriCondition = new CdnEndpointDeliveryRuleRequestUriConditionList(this, "request_uri_condition", false);
  public get requestUriCondition() {
    return this._requestUriCondition;
  }
  public putRequestUriCondition(value: CdnEndpointDeliveryRuleRequestUriCondition[] | cdktf.IResolvable) {
    this._requestUriCondition.internalValue = value;
  }
  public resetRequestUriCondition() {
    this._requestUriCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUriConditionInput() {
    return this._requestUriCondition.internalValue;
  }

  // url_file_extension_condition - computed: false, optional: true, required: false
  private _urlFileExtensionCondition = new CdnEndpointDeliveryRuleUrlFileExtensionConditionList(this, "url_file_extension_condition", false);
  public get urlFileExtensionCondition() {
    return this._urlFileExtensionCondition;
  }
  public putUrlFileExtensionCondition(value: CdnEndpointDeliveryRuleUrlFileExtensionCondition[] | cdktf.IResolvable) {
    this._urlFileExtensionCondition.internalValue = value;
  }
  public resetUrlFileExtensionCondition() {
    this._urlFileExtensionCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFileExtensionConditionInput() {
    return this._urlFileExtensionCondition.internalValue;
  }

  // url_file_name_condition - computed: false, optional: true, required: false
  private _urlFileNameCondition = new CdnEndpointDeliveryRuleUrlFileNameConditionList(this, "url_file_name_condition", false);
  public get urlFileNameCondition() {
    return this._urlFileNameCondition;
  }
  public putUrlFileNameCondition(value: CdnEndpointDeliveryRuleUrlFileNameCondition[] | cdktf.IResolvable) {
    this._urlFileNameCondition.internalValue = value;
  }
  public resetUrlFileNameCondition() {
    this._urlFileNameCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFileNameConditionInput() {
    return this._urlFileNameCondition.internalValue;
  }

  // url_path_condition - computed: false, optional: true, required: false
  private _urlPathCondition = new CdnEndpointDeliveryRuleUrlPathConditionList(this, "url_path_condition", false);
  public get urlPathCondition() {
    return this._urlPathCondition;
  }
  public putUrlPathCondition(value: CdnEndpointDeliveryRuleUrlPathCondition[] | cdktf.IResolvable) {
    this._urlPathCondition.internalValue = value;
  }
  public resetUrlPathCondition() {
    this._urlPathCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathConditionInput() {
    return this._urlPathCondition.internalValue;
  }

  // url_redirect_action - computed: false, optional: true, required: false
  private _urlRedirectAction = new CdnEndpointDeliveryRuleUrlRedirectActionOutputReference(this, "url_redirect_action");
  public get urlRedirectAction() {
    return this._urlRedirectAction;
  }
  public putUrlRedirectAction(value: CdnEndpointDeliveryRuleUrlRedirectAction) {
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
  private _urlRewriteAction = new CdnEndpointDeliveryRuleUrlRewriteActionOutputReference(this, "url_rewrite_action");
  public get urlRewriteAction() {
    return this._urlRewriteAction;
  }
  public putUrlRewriteAction(value: CdnEndpointDeliveryRuleUrlRewriteAction) {
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

export class CdnEndpointDeliveryRuleList extends cdktf.ComplexList {
  public internalValue? : CdnEndpointDeliveryRule[] | cdktf.IResolvable

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
  public get(index: number): CdnEndpointDeliveryRuleOutputReference {
    return new CdnEndpointDeliveryRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnEndpointGeoFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#country_codes CdnEndpoint#country_codes}
  */
  readonly countryCodes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#relative_path CdnEndpoint#relative_path}
  */
  readonly relativePath: string;
}

export function cdnEndpointGeoFilterToTerraform(struct?: CdnEndpointGeoFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    country_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countryCodes),
    relative_path: cdktf.stringToTerraform(struct!.relativePath),
  }
}


export function cdnEndpointGeoFilterToHclTerraform(struct?: CdnEndpointGeoFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countryCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    relative_path: {
      value: cdktf.stringToHclTerraform(struct!.relativePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnEndpointGeoFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnEndpointGeoFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._countryCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCodes = this._countryCodes;
    }
    if (this._relativePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativePath = this._relativePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnEndpointGeoFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._countryCodes = undefined;
      this._relativePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._countryCodes = value.countryCodes;
      this._relativePath = value.relativePath;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // country_codes - computed: false, optional: false, required: true
  private _countryCodes?: string[]; 
  public get countryCodes() {
    return this.getListAttribute('country_codes');
  }
  public set countryCodes(value: string[]) {
    this._countryCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodesInput() {
    return this._countryCodes;
  }

  // relative_path - computed: false, optional: false, required: true
  private _relativePath?: string; 
  public get relativePath() {
    return this.getStringAttribute('relative_path');
  }
  public set relativePath(value: string) {
    this._relativePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativePathInput() {
    return this._relativePath;
  }
}

export class CdnEndpointGeoFilterList extends cdktf.ComplexList {
  public internalValue? : CdnEndpointGeoFilter[] | cdktf.IResolvable

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
  public get(index: number): CdnEndpointGeoFilterOutputReference {
    return new CdnEndpointGeoFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnEndpointGlobalDeliveryRuleCacheExpirationAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}
  */
  readonly behavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#duration CdnEndpoint#duration}
  */
  readonly duration?: string;
}

export function cdnEndpointGlobalDeliveryRuleCacheExpirationActionToTerraform(struct?: CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference | CdnEndpointGlobalDeliveryRuleCacheExpirationAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function cdnEndpointGlobalDeliveryRuleCacheExpirationActionToHclTerraform(struct?: CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference | CdnEndpointGlobalDeliveryRuleCacheExpirationAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnEndpointGlobalDeliveryRuleCacheExpirationAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnEndpointGlobalDeliveryRuleCacheExpirationAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._behavior = undefined;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._behavior = value.behavior;
      this._duration = value.duration;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}
  */
  readonly behavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#parameters CdnEndpoint#parameters}
  */
  readonly parameters?: string;
}

export function cdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionToTerraform(struct?: CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference | CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    parameters: cdktf.stringToTerraform(struct!.parameters),
  }
}


export function cdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionToHclTerraform(struct?: CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference | CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.stringToHclTerraform(struct!.parameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._behavior = undefined;
      this._parameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._behavior = value.behavior;
      this._parameters = value.parameters;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }
}
export interface CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}
  */
  readonly value?: string;
}

export function cdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionToTerraform(struct?: CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionToHclTerraform(struct?: CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
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

  public set internalValue(value: CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
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
      this._action = value.action;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

export class CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList extends cdktf.ComplexList {
  public internalValue? : CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction[] | cdktf.IResolvable

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
  public get(index: number): CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference {
    return new CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}
  */
  readonly value?: string;
}

export function cdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionToTerraform(struct?: CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionToHclTerraform(struct?: CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
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

  public set internalValue(value: CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
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
      this._action = value.action;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

export class CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList extends cdktf.ComplexList {
  public internalValue? : CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction[] | cdktf.IResolvable

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
  public get(index: number): CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference {
    return new CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnEndpointGlobalDeliveryRuleUrlRedirectAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#fragment CdnEndpoint#fragment}
  */
  readonly fragment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#hostname CdnEndpoint#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#path CdnEndpoint#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#protocol CdnEndpoint#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#query_string CdnEndpoint#query_string}
  */
  readonly queryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#redirect_type CdnEndpoint#redirect_type}
  */
  readonly redirectType: string;
}

export function cdnEndpointGlobalDeliveryRuleUrlRedirectActionToTerraform(struct?: CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference | CdnEndpointGlobalDeliveryRuleUrlRedirectAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fragment: cdktf.stringToTerraform(struct!.fragment),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    path: cdktf.stringToTerraform(struct!.path),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    query_string: cdktf.stringToTerraform(struct!.queryString),
    redirect_type: cdktf.stringToTerraform(struct!.redirectType),
  }
}


export function cdnEndpointGlobalDeliveryRuleUrlRedirectActionToHclTerraform(struct?: CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference | CdnEndpointGlobalDeliveryRuleUrlRedirectAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fragment: {
      value: cdktf.stringToHclTerraform(struct!.fragment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
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

export class CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnEndpointGlobalDeliveryRuleUrlRedirectAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fragment !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragment = this._fragment;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._redirectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectType = this._redirectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnEndpointGlobalDeliveryRuleUrlRedirectAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fragment = undefined;
      this._hostname = undefined;
      this._path = undefined;
      this._protocol = undefined;
      this._queryString = undefined;
      this._redirectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fragment = value.fragment;
      this._hostname = value.hostname;
      this._path = value.path;
      this._protocol = value.protocol;
      this._queryString = value.queryString;
      this._redirectType = value.redirectType;
    }
  }

  // fragment - computed: false, optional: true, required: false
  private _fragment?: string; 
  public get fragment() {
    return this.getStringAttribute('fragment');
  }
  public set fragment(value: string) {
    this._fragment = value;
  }
  public resetFragment() {
    this._fragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentInput() {
    return this._fragment;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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
export interface CdnEndpointGlobalDeliveryRuleUrlRewriteAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#destination CdnEndpoint#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#preserve_unmatched_path CdnEndpoint#preserve_unmatched_path}
  */
  readonly preserveUnmatchedPath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#source_pattern CdnEndpoint#source_pattern}
  */
  readonly sourcePattern: string;
}

export function cdnEndpointGlobalDeliveryRuleUrlRewriteActionToTerraform(struct?: CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference | CdnEndpointGlobalDeliveryRuleUrlRewriteAction): any {
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


export function cdnEndpointGlobalDeliveryRuleUrlRewriteActionToHclTerraform(struct?: CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference | CdnEndpointGlobalDeliveryRuleUrlRewriteAction): any {
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

export class CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnEndpointGlobalDeliveryRuleUrlRewriteAction | undefined {
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

  public set internalValue(value: CdnEndpointGlobalDeliveryRuleUrlRewriteAction | undefined) {
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
export interface CdnEndpointGlobalDeliveryRule {
  /**
  * cache_expiration_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#cache_expiration_action CdnEndpoint#cache_expiration_action}
  */
  readonly cacheExpirationAction?: CdnEndpointGlobalDeliveryRuleCacheExpirationAction;
  /**
  * cache_key_query_string_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#cache_key_query_string_action CdnEndpoint#cache_key_query_string_action}
  */
  readonly cacheKeyQueryStringAction?: CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction;
  /**
  * modify_request_header_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#modify_request_header_action CdnEndpoint#modify_request_header_action}
  */
  readonly modifyRequestHeaderAction?: CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction[] | cdktf.IResolvable;
  /**
  * modify_response_header_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#modify_response_header_action CdnEndpoint#modify_response_header_action}
  */
  readonly modifyResponseHeaderAction?: CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction[] | cdktf.IResolvable;
  /**
  * url_redirect_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#url_redirect_action CdnEndpoint#url_redirect_action}
  */
  readonly urlRedirectAction?: CdnEndpointGlobalDeliveryRuleUrlRedirectAction;
  /**
  * url_rewrite_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#url_rewrite_action CdnEndpoint#url_rewrite_action}
  */
  readonly urlRewriteAction?: CdnEndpointGlobalDeliveryRuleUrlRewriteAction;
}

export function cdnEndpointGlobalDeliveryRuleToTerraform(struct?: CdnEndpointGlobalDeliveryRuleOutputReference | CdnEndpointGlobalDeliveryRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_expiration_action: cdnEndpointGlobalDeliveryRuleCacheExpirationActionToTerraform(struct!.cacheExpirationAction),
    cache_key_query_string_action: cdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionToTerraform(struct!.cacheKeyQueryStringAction),
    modify_request_header_action: cdktf.listMapper(cdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionToTerraform, true)(struct!.modifyRequestHeaderAction),
    modify_response_header_action: cdktf.listMapper(cdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionToTerraform, true)(struct!.modifyResponseHeaderAction),
    url_redirect_action: cdnEndpointGlobalDeliveryRuleUrlRedirectActionToTerraform(struct!.urlRedirectAction),
    url_rewrite_action: cdnEndpointGlobalDeliveryRuleUrlRewriteActionToTerraform(struct!.urlRewriteAction),
  }
}


export function cdnEndpointGlobalDeliveryRuleToHclTerraform(struct?: CdnEndpointGlobalDeliveryRuleOutputReference | CdnEndpointGlobalDeliveryRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_expiration_action: {
      value: cdnEndpointGlobalDeliveryRuleCacheExpirationActionToHclTerraform(struct!.cacheExpirationAction),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointGlobalDeliveryRuleCacheExpirationActionList",
    },
    cache_key_query_string_action: {
      value: cdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionToHclTerraform(struct!.cacheKeyQueryStringAction),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionList",
    },
    modify_request_header_action: {
      value: cdktf.listMapperHcl(cdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionToHclTerraform, true)(struct!.modifyRequestHeaderAction),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList",
    },
    modify_response_header_action: {
      value: cdktf.listMapperHcl(cdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionToHclTerraform, true)(struct!.modifyResponseHeaderAction),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList",
    },
    url_redirect_action: {
      value: cdnEndpointGlobalDeliveryRuleUrlRedirectActionToHclTerraform(struct!.urlRedirectAction),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointGlobalDeliveryRuleUrlRedirectActionList",
    },
    url_rewrite_action: {
      value: cdnEndpointGlobalDeliveryRuleUrlRewriteActionToHclTerraform(struct!.urlRewriteAction),
      isBlock: true,
      type: "list",
      storageClassType: "CdnEndpointGlobalDeliveryRuleUrlRewriteActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnEndpointGlobalDeliveryRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnEndpointGlobalDeliveryRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheExpirationAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheExpirationAction = this._cacheExpirationAction?.internalValue;
    }
    if (this._cacheKeyQueryStringAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheKeyQueryStringAction = this._cacheKeyQueryStringAction?.internalValue;
    }
    if (this._modifyRequestHeaderAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyRequestHeaderAction = this._modifyRequestHeaderAction?.internalValue;
    }
    if (this._modifyResponseHeaderAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyResponseHeaderAction = this._modifyResponseHeaderAction?.internalValue;
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

  public set internalValue(value: CdnEndpointGlobalDeliveryRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheExpirationAction.internalValue = undefined;
      this._cacheKeyQueryStringAction.internalValue = undefined;
      this._modifyRequestHeaderAction.internalValue = undefined;
      this._modifyResponseHeaderAction.internalValue = undefined;
      this._urlRedirectAction.internalValue = undefined;
      this._urlRewriteAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheExpirationAction.internalValue = value.cacheExpirationAction;
      this._cacheKeyQueryStringAction.internalValue = value.cacheKeyQueryStringAction;
      this._modifyRequestHeaderAction.internalValue = value.modifyRequestHeaderAction;
      this._modifyResponseHeaderAction.internalValue = value.modifyResponseHeaderAction;
      this._urlRedirectAction.internalValue = value.urlRedirectAction;
      this._urlRewriteAction.internalValue = value.urlRewriteAction;
    }
  }

  // cache_expiration_action - computed: false, optional: true, required: false
  private _cacheExpirationAction = new CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference(this, "cache_expiration_action");
  public get cacheExpirationAction() {
    return this._cacheExpirationAction;
  }
  public putCacheExpirationAction(value: CdnEndpointGlobalDeliveryRuleCacheExpirationAction) {
    this._cacheExpirationAction.internalValue = value;
  }
  public resetCacheExpirationAction() {
    this._cacheExpirationAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheExpirationActionInput() {
    return this._cacheExpirationAction.internalValue;
  }

  // cache_key_query_string_action - computed: false, optional: true, required: false
  private _cacheKeyQueryStringAction = new CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference(this, "cache_key_query_string_action");
  public get cacheKeyQueryStringAction() {
    return this._cacheKeyQueryStringAction;
  }
  public putCacheKeyQueryStringAction(value: CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction) {
    this._cacheKeyQueryStringAction.internalValue = value;
  }
  public resetCacheKeyQueryStringAction() {
    this._cacheKeyQueryStringAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheKeyQueryStringActionInput() {
    return this._cacheKeyQueryStringAction.internalValue;
  }

  // modify_request_header_action - computed: false, optional: true, required: false
  private _modifyRequestHeaderAction = new CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList(this, "modify_request_header_action", false);
  public get modifyRequestHeaderAction() {
    return this._modifyRequestHeaderAction;
  }
  public putModifyRequestHeaderAction(value: CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction[] | cdktf.IResolvable) {
    this._modifyRequestHeaderAction.internalValue = value;
  }
  public resetModifyRequestHeaderAction() {
    this._modifyRequestHeaderAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyRequestHeaderActionInput() {
    return this._modifyRequestHeaderAction.internalValue;
  }

  // modify_response_header_action - computed: false, optional: true, required: false
  private _modifyResponseHeaderAction = new CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList(this, "modify_response_header_action", false);
  public get modifyResponseHeaderAction() {
    return this._modifyResponseHeaderAction;
  }
  public putModifyResponseHeaderAction(value: CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction[] | cdktf.IResolvable) {
    this._modifyResponseHeaderAction.internalValue = value;
  }
  public resetModifyResponseHeaderAction() {
    this._modifyResponseHeaderAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyResponseHeaderActionInput() {
    return this._modifyResponseHeaderAction.internalValue;
  }

  // url_redirect_action - computed: false, optional: true, required: false
  private _urlRedirectAction = new CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference(this, "url_redirect_action");
  public get urlRedirectAction() {
    return this._urlRedirectAction;
  }
  public putUrlRedirectAction(value: CdnEndpointGlobalDeliveryRuleUrlRedirectAction) {
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
  private _urlRewriteAction = new CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference(this, "url_rewrite_action");
  public get urlRewriteAction() {
    return this._urlRewriteAction;
  }
  public putUrlRewriteAction(value: CdnEndpointGlobalDeliveryRuleUrlRewriteAction) {
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
export interface CdnEndpointOrigin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#host_name CdnEndpoint#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#http_port CdnEndpoint#http_port}
  */
  readonly httpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#https_port CdnEndpoint#https_port}
  */
  readonly httpsPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}
  */
  readonly name: string;
}

export function cdnEndpointOriginToTerraform(struct?: CdnEndpointOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    https_port: cdktf.numberToTerraform(struct!.httpsPort),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnEndpointOriginToHclTerraform(struct?: CdnEndpointOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_port: {
      value: cdktf.numberToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_port: {
      value: cdktf.numberToHclTerraform(struct!.httpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnEndpointOriginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnEndpointOrigin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._httpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPort = this._httpsPort;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnEndpointOrigin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostName = undefined;
      this._httpPort = undefined;
      this._httpsPort = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostName = value.hostName;
      this._httpPort = value.httpPort;
      this._httpsPort = value.httpsPort;
      this._name = value.name;
    }
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // http_port - computed: false, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // https_port - computed: false, optional: true, required: false
  private _httpsPort?: number; 
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }
  public set httpsPort(value: number) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
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
}

export class CdnEndpointOriginList extends cdktf.ComplexList {
  public internalValue? : CdnEndpointOrigin[] | cdktf.IResolvable

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
  public get(index: number): CdnEndpointOriginOutputReference {
    return new CdnEndpointOriginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#create CdnEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#delete CdnEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#read CdnEndpoint#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#update CdnEndpoint#update}
  */
  readonly update?: string;
}

export function cdnEndpointTimeoutsToTerraform(struct?: CdnEndpointTimeouts | cdktf.IResolvable): any {
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


export function cdnEndpointTimeoutsToHclTerraform(struct?: CdnEndpointTimeouts | cdktf.IResolvable): any {
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

export class CdnEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnEndpointTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnEndpointTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint azurerm_cdn_endpoint}
*/
export class CdnEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_cdn_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnEndpoint to import
  * @param importFromId The id of the existing CdnEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_cdn_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_endpoint azurerm_cdn_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: CdnEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cdn_endpoint',
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
    this._contentTypesToCompress = config.contentTypesToCompress;
    this._id = config.id;
    this._isCompressionEnabled = config.isCompressionEnabled;
    this._isHttpAllowed = config.isHttpAllowed;
    this._isHttpsAllowed = config.isHttpsAllowed;
    this._location = config.location;
    this._name = config.name;
    this._optimizationType = config.optimizationType;
    this._originHostHeader = config.originHostHeader;
    this._originPath = config.originPath;
    this._probePath = config.probePath;
    this._profileName = config.profileName;
    this._querystringCachingBehaviour = config.querystringCachingBehaviour;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._deliveryRule.internalValue = config.deliveryRule;
    this._geoFilter.internalValue = config.geoFilter;
    this._globalDeliveryRule.internalValue = config.globalDeliveryRule;
    this._origin.internalValue = config.origin;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_types_to_compress - computed: false, optional: true, required: false
  private _contentTypesToCompress?: string[]; 
  public get contentTypesToCompress() {
    return cdktf.Fn.tolist(this.getListAttribute('content_types_to_compress'));
  }
  public set contentTypesToCompress(value: string[]) {
    this._contentTypesToCompress = value;
  }
  public resetContentTypesToCompress() {
    this._contentTypesToCompress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypesToCompressInput() {
    return this._contentTypesToCompress;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
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

  // is_compression_enabled - computed: false, optional: true, required: false
  private _isCompressionEnabled?: boolean | cdktf.IResolvable; 
  public get isCompressionEnabled() {
    return this.getBooleanAttribute('is_compression_enabled');
  }
  public set isCompressionEnabled(value: boolean | cdktf.IResolvable) {
    this._isCompressionEnabled = value;
  }
  public resetIsCompressionEnabled() {
    this._isCompressionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCompressionEnabledInput() {
    return this._isCompressionEnabled;
  }

  // is_http_allowed - computed: false, optional: true, required: false
  private _isHttpAllowed?: boolean | cdktf.IResolvable; 
  public get isHttpAllowed() {
    return this.getBooleanAttribute('is_http_allowed');
  }
  public set isHttpAllowed(value: boolean | cdktf.IResolvable) {
    this._isHttpAllowed = value;
  }
  public resetIsHttpAllowed() {
    this._isHttpAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHttpAllowedInput() {
    return this._isHttpAllowed;
  }

  // is_https_allowed - computed: false, optional: true, required: false
  private _isHttpsAllowed?: boolean | cdktf.IResolvable; 
  public get isHttpsAllowed() {
    return this.getBooleanAttribute('is_https_allowed');
  }
  public set isHttpsAllowed(value: boolean | cdktf.IResolvable) {
    this._isHttpsAllowed = value;
  }
  public resetIsHttpsAllowed() {
    this._isHttpsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHttpsAllowedInput() {
    return this._isHttpsAllowed;
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

  // optimization_type - computed: false, optional: true, required: false
  private _optimizationType?: string; 
  public get optimizationType() {
    return this.getStringAttribute('optimization_type');
  }
  public set optimizationType(value: string) {
    this._optimizationType = value;
  }
  public resetOptimizationType() {
    this._optimizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizationTypeInput() {
    return this._optimizationType;
  }

  // origin_host_header - computed: false, optional: true, required: false
  private _originHostHeader?: string; 
  public get originHostHeader() {
    return this.getStringAttribute('origin_host_header');
  }
  public set originHostHeader(value: string) {
    this._originHostHeader = value;
  }
  public resetOriginHostHeader() {
    this._originHostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originHostHeaderInput() {
    return this._originHostHeader;
  }

  // origin_path - computed: false, optional: true, required: false
  private _originPath?: string; 
  public get originPath() {
    return this.getStringAttribute('origin_path');
  }
  public set originPath(value: string) {
    this._originPath = value;
  }
  public resetOriginPath() {
    this._originPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originPathInput() {
    return this._originPath;
  }

  // probe_path - computed: false, optional: true, required: false
  private _probePath?: string; 
  public get probePath() {
    return this.getStringAttribute('probe_path');
  }
  public set probePath(value: string) {
    this._probePath = value;
  }
  public resetProbePath() {
    this._probePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probePathInput() {
    return this._probePath;
  }

  // profile_name - computed: false, optional: false, required: true
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // querystring_caching_behaviour - computed: false, optional: true, required: false
  private _querystringCachingBehaviour?: string; 
  public get querystringCachingBehaviour() {
    return this.getStringAttribute('querystring_caching_behaviour');
  }
  public set querystringCachingBehaviour(value: string) {
    this._querystringCachingBehaviour = value;
  }
  public resetQuerystringCachingBehaviour() {
    this._querystringCachingBehaviour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querystringCachingBehaviourInput() {
    return this._querystringCachingBehaviour;
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

  // delivery_rule - computed: false, optional: true, required: false
  private _deliveryRule = new CdnEndpointDeliveryRuleList(this, "delivery_rule", false);
  public get deliveryRule() {
    return this._deliveryRule;
  }
  public putDeliveryRule(value: CdnEndpointDeliveryRule[] | cdktf.IResolvable) {
    this._deliveryRule.internalValue = value;
  }
  public resetDeliveryRule() {
    this._deliveryRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryRuleInput() {
    return this._deliveryRule.internalValue;
  }

  // geo_filter - computed: false, optional: true, required: false
  private _geoFilter = new CdnEndpointGeoFilterList(this, "geo_filter", false);
  public get geoFilter() {
    return this._geoFilter;
  }
  public putGeoFilter(value: CdnEndpointGeoFilter[] | cdktf.IResolvable) {
    this._geoFilter.internalValue = value;
  }
  public resetGeoFilter() {
    this._geoFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoFilterInput() {
    return this._geoFilter.internalValue;
  }

  // global_delivery_rule - computed: false, optional: true, required: false
  private _globalDeliveryRule = new CdnEndpointGlobalDeliveryRuleOutputReference(this, "global_delivery_rule");
  public get globalDeliveryRule() {
    return this._globalDeliveryRule;
  }
  public putGlobalDeliveryRule(value: CdnEndpointGlobalDeliveryRule) {
    this._globalDeliveryRule.internalValue = value;
  }
  public resetGlobalDeliveryRule() {
    this._globalDeliveryRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalDeliveryRuleInput() {
    return this._globalDeliveryRule.internalValue;
  }

  // origin - computed: false, optional: false, required: true
  private _origin = new CdnEndpointOriginList(this, "origin", true);
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: CdnEndpointOrigin[] | cdktf.IResolvable) {
    this._origin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CdnEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CdnEndpointTimeouts) {
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
      content_types_to_compress: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contentTypesToCompress),
      id: cdktf.stringToTerraform(this._id),
      is_compression_enabled: cdktf.booleanToTerraform(this._isCompressionEnabled),
      is_http_allowed: cdktf.booleanToTerraform(this._isHttpAllowed),
      is_https_allowed: cdktf.booleanToTerraform(this._isHttpsAllowed),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      optimization_type: cdktf.stringToTerraform(this._optimizationType),
      origin_host_header: cdktf.stringToTerraform(this._originHostHeader),
      origin_path: cdktf.stringToTerraform(this._originPath),
      probe_path: cdktf.stringToTerraform(this._probePath),
      profile_name: cdktf.stringToTerraform(this._profileName),
      querystring_caching_behaviour: cdktf.stringToTerraform(this._querystringCachingBehaviour),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      delivery_rule: cdktf.listMapper(cdnEndpointDeliveryRuleToTerraform, true)(this._deliveryRule.internalValue),
      geo_filter: cdktf.listMapper(cdnEndpointGeoFilterToTerraform, true)(this._geoFilter.internalValue),
      global_delivery_rule: cdnEndpointGlobalDeliveryRuleToTerraform(this._globalDeliveryRule.internalValue),
      origin: cdktf.listMapper(cdnEndpointOriginToTerraform, true)(this._origin.internalValue),
      timeouts: cdnEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content_types_to_compress: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contentTypesToCompress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_compression_enabled: {
        value: cdktf.booleanToHclTerraform(this._isCompressionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_http_allowed: {
        value: cdktf.booleanToHclTerraform(this._isHttpAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_https_allowed: {
        value: cdktf.booleanToHclTerraform(this._isHttpsAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      optimization_type: {
        value: cdktf.stringToHclTerraform(this._optimizationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_host_header: {
        value: cdktf.stringToHclTerraform(this._originHostHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_path: {
        value: cdktf.stringToHclTerraform(this._originPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      probe_path: {
        value: cdktf.stringToHclTerraform(this._probePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_name: {
        value: cdktf.stringToHclTerraform(this._profileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      querystring_caching_behaviour: {
        value: cdktf.stringToHclTerraform(this._querystringCachingBehaviour),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      delivery_rule: {
        value: cdktf.listMapperHcl(cdnEndpointDeliveryRuleToHclTerraform, true)(this._deliveryRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnEndpointDeliveryRuleList",
      },
      geo_filter: {
        value: cdktf.listMapperHcl(cdnEndpointGeoFilterToHclTerraform, true)(this._geoFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnEndpointGeoFilterList",
      },
      global_delivery_rule: {
        value: cdnEndpointGlobalDeliveryRuleToHclTerraform(this._globalDeliveryRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnEndpointGlobalDeliveryRuleList",
      },
      origin: {
        value: cdktf.listMapperHcl(cdnEndpointOriginToHclTerraform, true)(this._origin.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CdnEndpointOriginList",
      },
      timeouts: {
        value: cdnEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CdnEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
