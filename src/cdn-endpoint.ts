// https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnEndpointConfig extends cdktf.TerraformMetaArguments {
  readonly contentTypesToCompress?: string[];
  readonly isCompressionEnabled?: boolean;
  readonly isHttpAllowed?: boolean;
  readonly isHttpsAllowed?: boolean;
  readonly location: string;
  readonly name: string;
  readonly optimizationType?: string;
  readonly originHostHeader?: string;
  readonly originPath?: string;
  readonly probePath?: string;
  readonly profileName: string;
  readonly querystringCachingBehaviour?: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** delivery_rule block */
  readonly deliveryRule?: CdnEndpointDeliveryRule[];
  /** geo_filter block */
  readonly geoFilter?: CdnEndpointGeoFilter[];
  /** global_delivery_rule block */
  readonly globalDeliveryRule?: CdnEndpointGlobalDeliveryRule[];
  /** origin block */
  readonly origin: CdnEndpointOrigin[];
  /** timeouts block */
  readonly timeouts?: CdnEndpointTimeouts;
}
export interface CdnEndpointDeliveryRuleCacheExpirationAction {
  readonly behavior: string;
  readonly duration?: string;
}

function cdnEndpointDeliveryRuleCacheExpirationActionToTerraform(struct?: CdnEndpointDeliveryRuleCacheExpirationAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}

export interface CdnEndpointDeliveryRuleCacheKeyQueryStringAction {
  readonly behavior: string;
  readonly parameters?: string;
}

function cdnEndpointDeliveryRuleCacheKeyQueryStringActionToTerraform(struct?: CdnEndpointDeliveryRuleCacheKeyQueryStringAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    parameters: cdktf.stringToTerraform(struct!.parameters),
  }
}

export interface CdnEndpointDeliveryRuleCookiesCondition {
  readonly matchValues?: string[];
  readonly negateCondition?: boolean;
  readonly operator: string;
  readonly selector: string;
  readonly transforms?: string[];
}

function cdnEndpointDeliveryRuleCookiesConditionToTerraform(struct?: CdnEndpointDeliveryRuleCookiesCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    selector: cdktf.stringToTerraform(struct!.selector),
    transforms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.transforms),
  }
}

export interface CdnEndpointDeliveryRuleDeviceCondition {
  readonly matchValues: string[];
  readonly negateCondition?: boolean;
  readonly operator?: string;
}

function cdnEndpointDeliveryRuleDeviceConditionToTerraform(struct?: CdnEndpointDeliveryRuleDeviceCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}

export interface CdnEndpointDeliveryRuleHttpVersionCondition {
  readonly matchValues: string[];
  readonly negateCondition?: boolean;
  readonly operator?: string;
}

function cdnEndpointDeliveryRuleHttpVersionConditionToTerraform(struct?: CdnEndpointDeliveryRuleHttpVersionCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}

export interface CdnEndpointDeliveryRuleModifyRequestHeaderAction {
  readonly action: string;
  readonly name: string;
  readonly value?: string;
}

function cdnEndpointDeliveryRuleModifyRequestHeaderActionToTerraform(struct?: CdnEndpointDeliveryRuleModifyRequestHeaderAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface CdnEndpointDeliveryRuleModifyResponseHeaderAction {
  readonly action: string;
  readonly name: string;
  readonly value?: string;
}

function cdnEndpointDeliveryRuleModifyResponseHeaderActionToTerraform(struct?: CdnEndpointDeliveryRuleModifyResponseHeaderAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface CdnEndpointDeliveryRulePostArgCondition {
  readonly matchValues?: string[];
  readonly negateCondition?: boolean;
  readonly operator: string;
  readonly selector: string;
  readonly transforms?: string[];
}

function cdnEndpointDeliveryRulePostArgConditionToTerraform(struct?: CdnEndpointDeliveryRulePostArgCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    selector: cdktf.stringToTerraform(struct!.selector),
    transforms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.transforms),
  }
}

export interface CdnEndpointDeliveryRuleQueryStringCondition {
  readonly matchValues?: string[];
  readonly negateCondition?: boolean;
  readonly operator: string;
  readonly transforms?: string[];
}

function cdnEndpointDeliveryRuleQueryStringConditionToTerraform(struct?: CdnEndpointDeliveryRuleQueryStringCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    transforms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.transforms),
  }
}

export interface CdnEndpointDeliveryRuleRemoteAddressCondition {
  readonly matchValues?: string[];
  readonly negateCondition?: boolean;
  readonly operator: string;
}

function cdnEndpointDeliveryRuleRemoteAddressConditionToTerraform(struct?: CdnEndpointDeliveryRuleRemoteAddressCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}

export interface CdnEndpointDeliveryRuleRequestBodyCondition {
  readonly matchValues?: string[];
  readonly negateCondition?: boolean;
  readonly operator: string;
  readonly transforms?: string[];
}

function cdnEndpointDeliveryRuleRequestBodyConditionToTerraform(struct?: CdnEndpointDeliveryRuleRequestBodyCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    transforms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.transforms),
  }
}

export interface CdnEndpointDeliveryRuleRequestHeaderCondition {
  readonly matchValues?: string[];
  readonly negateCondition?: boolean;
  readonly operator: string;
  readonly selector: string;
  readonly transforms?: string[];
}

function cdnEndpointDeliveryRuleRequestHeaderConditionToTerraform(struct?: CdnEndpointDeliveryRuleRequestHeaderCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    selector: cdktf.stringToTerraform(struct!.selector),
    transforms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.transforms),
  }
}

export interface CdnEndpointDeliveryRuleRequestMethodCondition {
  readonly matchValues: string[];
  readonly negateCondition?: boolean;
  readonly operator?: string;
}

function cdnEndpointDeliveryRuleRequestMethodConditionToTerraform(struct?: CdnEndpointDeliveryRuleRequestMethodCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}

export interface CdnEndpointDeliveryRuleRequestSchemeCondition {
  readonly matchValues: string[];
  readonly negateCondition?: boolean;
  readonly operator?: string;
}

function cdnEndpointDeliveryRuleRequestSchemeConditionToTerraform(struct?: CdnEndpointDeliveryRuleRequestSchemeCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}

export interface CdnEndpointDeliveryRuleRequestUriCondition {
  readonly matchValues?: string[];
  readonly negateCondition?: boolean;
  readonly operator: string;
  readonly transforms?: string[];
}

function cdnEndpointDeliveryRuleRequestUriConditionToTerraform(struct?: CdnEndpointDeliveryRuleRequestUriCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    transforms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.transforms),
  }
}

export interface CdnEndpointDeliveryRuleUrlFileExtensionCondition {
  readonly matchValues?: string[];
  readonly negateCondition?: boolean;
  readonly operator: string;
  readonly transforms?: string[];
}

function cdnEndpointDeliveryRuleUrlFileExtensionConditionToTerraform(struct?: CdnEndpointDeliveryRuleUrlFileExtensionCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    transforms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.transforms),
  }
}

export interface CdnEndpointDeliveryRuleUrlFileNameCondition {
  readonly matchValues?: string[];
  readonly negateCondition?: boolean;
  readonly operator: string;
  readonly transforms?: string[];
}

function cdnEndpointDeliveryRuleUrlFileNameConditionToTerraform(struct?: CdnEndpointDeliveryRuleUrlFileNameCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    transforms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.transforms),
  }
}

export interface CdnEndpointDeliveryRuleUrlPathCondition {
  readonly matchValues?: string[];
  readonly negateCondition?: boolean;
  readonly operator: string;
  readonly transforms?: string[];
}

function cdnEndpointDeliveryRuleUrlPathConditionToTerraform(struct?: CdnEndpointDeliveryRuleUrlPathCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.matchValues),
    negate_condition: cdktf.booleanToTerraform(struct!.negateCondition),
    operator: cdktf.stringToTerraform(struct!.operator),
    transforms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.transforms),
  }
}

export interface CdnEndpointDeliveryRuleUrlRedirectAction {
  readonly fragment?: string;
  readonly hostname?: string;
  readonly path?: string;
  readonly protocol?: string;
  readonly queryString?: string;
  readonly redirectType: string;
}

function cdnEndpointDeliveryRuleUrlRedirectActionToTerraform(struct?: CdnEndpointDeliveryRuleUrlRedirectAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fragment: cdktf.stringToTerraform(struct!.fragment),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    path: cdktf.stringToTerraform(struct!.path),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    query_string: cdktf.stringToTerraform(struct!.queryString),
    redirect_type: cdktf.stringToTerraform(struct!.redirectType),
  }
}

export interface CdnEndpointDeliveryRuleUrlRewriteAction {
  readonly destination: string;
  readonly preserveUnmatchedPath?: boolean;
  readonly sourcePattern: string;
}

function cdnEndpointDeliveryRuleUrlRewriteActionToTerraform(struct?: CdnEndpointDeliveryRuleUrlRewriteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    preserve_unmatched_path: cdktf.booleanToTerraform(struct!.preserveUnmatchedPath),
    source_pattern: cdktf.stringToTerraform(struct!.sourcePattern),
  }
}

export interface CdnEndpointDeliveryRule {
  readonly name: string;
  readonly order: number;
  /** cache_expiration_action block */
  readonly cacheExpirationAction?: CdnEndpointDeliveryRuleCacheExpirationAction[];
  /** cache_key_query_string_action block */
  readonly cacheKeyQueryStringAction?: CdnEndpointDeliveryRuleCacheKeyQueryStringAction[];
  /** cookies_condition block */
  readonly cookiesCondition?: CdnEndpointDeliveryRuleCookiesCondition[];
  /** device_condition block */
  readonly deviceCondition?: CdnEndpointDeliveryRuleDeviceCondition[];
  /** http_version_condition block */
  readonly httpVersionCondition?: CdnEndpointDeliveryRuleHttpVersionCondition[];
  /** modify_request_header_action block */
  readonly modifyRequestHeaderAction?: CdnEndpointDeliveryRuleModifyRequestHeaderAction[];
  /** modify_response_header_action block */
  readonly modifyResponseHeaderAction?: CdnEndpointDeliveryRuleModifyResponseHeaderAction[];
  /** post_arg_condition block */
  readonly postArgCondition?: CdnEndpointDeliveryRulePostArgCondition[];
  /** query_string_condition block */
  readonly queryStringCondition?: CdnEndpointDeliveryRuleQueryStringCondition[];
  /** remote_address_condition block */
  readonly remoteAddressCondition?: CdnEndpointDeliveryRuleRemoteAddressCondition[];
  /** request_body_condition block */
  readonly requestBodyCondition?: CdnEndpointDeliveryRuleRequestBodyCondition[];
  /** request_header_condition block */
  readonly requestHeaderCondition?: CdnEndpointDeliveryRuleRequestHeaderCondition[];
  /** request_method_condition block */
  readonly requestMethodCondition?: CdnEndpointDeliveryRuleRequestMethodCondition[];
  /** request_scheme_condition block */
  readonly requestSchemeCondition?: CdnEndpointDeliveryRuleRequestSchemeCondition[];
  /** request_uri_condition block */
  readonly requestUriCondition?: CdnEndpointDeliveryRuleRequestUriCondition[];
  /** url_file_extension_condition block */
  readonly urlFileExtensionCondition?: CdnEndpointDeliveryRuleUrlFileExtensionCondition[];
  /** url_file_name_condition block */
  readonly urlFileNameCondition?: CdnEndpointDeliveryRuleUrlFileNameCondition[];
  /** url_path_condition block */
  readonly urlPathCondition?: CdnEndpointDeliveryRuleUrlPathCondition[];
  /** url_redirect_action block */
  readonly urlRedirectAction?: CdnEndpointDeliveryRuleUrlRedirectAction[];
  /** url_rewrite_action block */
  readonly urlRewriteAction?: CdnEndpointDeliveryRuleUrlRewriteAction[];
}

function cdnEndpointDeliveryRuleToTerraform(struct?: CdnEndpointDeliveryRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    order: cdktf.numberToTerraform(struct!.order),
    cache_expiration_action: cdktf.listMapper(cdnEndpointDeliveryRuleCacheExpirationActionToTerraform)(struct!.cacheExpirationAction),
    cache_key_query_string_action: cdktf.listMapper(cdnEndpointDeliveryRuleCacheKeyQueryStringActionToTerraform)(struct!.cacheKeyQueryStringAction),
    cookies_condition: cdktf.listMapper(cdnEndpointDeliveryRuleCookiesConditionToTerraform)(struct!.cookiesCondition),
    device_condition: cdktf.listMapper(cdnEndpointDeliveryRuleDeviceConditionToTerraform)(struct!.deviceCondition),
    http_version_condition: cdktf.listMapper(cdnEndpointDeliveryRuleHttpVersionConditionToTerraform)(struct!.httpVersionCondition),
    modify_request_header_action: cdktf.listMapper(cdnEndpointDeliveryRuleModifyRequestHeaderActionToTerraform)(struct!.modifyRequestHeaderAction),
    modify_response_header_action: cdktf.listMapper(cdnEndpointDeliveryRuleModifyResponseHeaderActionToTerraform)(struct!.modifyResponseHeaderAction),
    post_arg_condition: cdktf.listMapper(cdnEndpointDeliveryRulePostArgConditionToTerraform)(struct!.postArgCondition),
    query_string_condition: cdktf.listMapper(cdnEndpointDeliveryRuleQueryStringConditionToTerraform)(struct!.queryStringCondition),
    remote_address_condition: cdktf.listMapper(cdnEndpointDeliveryRuleRemoteAddressConditionToTerraform)(struct!.remoteAddressCondition),
    request_body_condition: cdktf.listMapper(cdnEndpointDeliveryRuleRequestBodyConditionToTerraform)(struct!.requestBodyCondition),
    request_header_condition: cdktf.listMapper(cdnEndpointDeliveryRuleRequestHeaderConditionToTerraform)(struct!.requestHeaderCondition),
    request_method_condition: cdktf.listMapper(cdnEndpointDeliveryRuleRequestMethodConditionToTerraform)(struct!.requestMethodCondition),
    request_scheme_condition: cdktf.listMapper(cdnEndpointDeliveryRuleRequestSchemeConditionToTerraform)(struct!.requestSchemeCondition),
    request_uri_condition: cdktf.listMapper(cdnEndpointDeliveryRuleRequestUriConditionToTerraform)(struct!.requestUriCondition),
    url_file_extension_condition: cdktf.listMapper(cdnEndpointDeliveryRuleUrlFileExtensionConditionToTerraform)(struct!.urlFileExtensionCondition),
    url_file_name_condition: cdktf.listMapper(cdnEndpointDeliveryRuleUrlFileNameConditionToTerraform)(struct!.urlFileNameCondition),
    url_path_condition: cdktf.listMapper(cdnEndpointDeliveryRuleUrlPathConditionToTerraform)(struct!.urlPathCondition),
    url_redirect_action: cdktf.listMapper(cdnEndpointDeliveryRuleUrlRedirectActionToTerraform)(struct!.urlRedirectAction),
    url_rewrite_action: cdktf.listMapper(cdnEndpointDeliveryRuleUrlRewriteActionToTerraform)(struct!.urlRewriteAction),
  }
}

export interface CdnEndpointGeoFilter {
  readonly action: string;
  readonly countryCodes: string[];
  readonly relativePath: string;
}

function cdnEndpointGeoFilterToTerraform(struct?: CdnEndpointGeoFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.countryCodes),
    relative_path: cdktf.stringToTerraform(struct!.relativePath),
  }
}

export interface CdnEndpointGlobalDeliveryRuleCacheExpirationAction {
  readonly behavior: string;
  readonly duration?: string;
}

function cdnEndpointGlobalDeliveryRuleCacheExpirationActionToTerraform(struct?: CdnEndpointGlobalDeliveryRuleCacheExpirationAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}

export interface CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction {
  readonly behavior: string;
  readonly parameters?: string;
}

function cdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionToTerraform(struct?: CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    parameters: cdktf.stringToTerraform(struct!.parameters),
  }
}

export interface CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction {
  readonly action: string;
  readonly name: string;
  readonly value?: string;
}

function cdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionToTerraform(struct?: CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction {
  readonly action: string;
  readonly name: string;
  readonly value?: string;
}

function cdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionToTerraform(struct?: CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface CdnEndpointGlobalDeliveryRuleUrlRedirectAction {
  readonly fragment?: string;
  readonly hostname?: string;
  readonly path?: string;
  readonly protocol?: string;
  readonly queryString?: string;
  readonly redirectType: string;
}

function cdnEndpointGlobalDeliveryRuleUrlRedirectActionToTerraform(struct?: CdnEndpointGlobalDeliveryRuleUrlRedirectAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fragment: cdktf.stringToTerraform(struct!.fragment),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    path: cdktf.stringToTerraform(struct!.path),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    query_string: cdktf.stringToTerraform(struct!.queryString),
    redirect_type: cdktf.stringToTerraform(struct!.redirectType),
  }
}

export interface CdnEndpointGlobalDeliveryRuleUrlRewriteAction {
  readonly destination: string;
  readonly preserveUnmatchedPath?: boolean;
  readonly sourcePattern: string;
}

function cdnEndpointGlobalDeliveryRuleUrlRewriteActionToTerraform(struct?: CdnEndpointGlobalDeliveryRuleUrlRewriteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    preserve_unmatched_path: cdktf.booleanToTerraform(struct!.preserveUnmatchedPath),
    source_pattern: cdktf.stringToTerraform(struct!.sourcePattern),
  }
}

export interface CdnEndpointGlobalDeliveryRule {
  /** cache_expiration_action block */
  readonly cacheExpirationAction?: CdnEndpointGlobalDeliveryRuleCacheExpirationAction[];
  /** cache_key_query_string_action block */
  readonly cacheKeyQueryStringAction?: CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction[];
  /** modify_request_header_action block */
  readonly modifyRequestHeaderAction?: CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction[];
  /** modify_response_header_action block */
  readonly modifyResponseHeaderAction?: CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction[];
  /** url_redirect_action block */
  readonly urlRedirectAction?: CdnEndpointGlobalDeliveryRuleUrlRedirectAction[];
  /** url_rewrite_action block */
  readonly urlRewriteAction?: CdnEndpointGlobalDeliveryRuleUrlRewriteAction[];
}

function cdnEndpointGlobalDeliveryRuleToTerraform(struct?: CdnEndpointGlobalDeliveryRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cache_expiration_action: cdktf.listMapper(cdnEndpointGlobalDeliveryRuleCacheExpirationActionToTerraform)(struct!.cacheExpirationAction),
    cache_key_query_string_action: cdktf.listMapper(cdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionToTerraform)(struct!.cacheKeyQueryStringAction),
    modify_request_header_action: cdktf.listMapper(cdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionToTerraform)(struct!.modifyRequestHeaderAction),
    modify_response_header_action: cdktf.listMapper(cdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionToTerraform)(struct!.modifyResponseHeaderAction),
    url_redirect_action: cdktf.listMapper(cdnEndpointGlobalDeliveryRuleUrlRedirectActionToTerraform)(struct!.urlRedirectAction),
    url_rewrite_action: cdktf.listMapper(cdnEndpointGlobalDeliveryRuleUrlRewriteActionToTerraform)(struct!.urlRewriteAction),
  }
}

export interface CdnEndpointOrigin {
  readonly hostName: string;
  readonly httpPort?: number;
  readonly httpsPort?: number;
  readonly name: string;
}

function cdnEndpointOriginToTerraform(struct?: CdnEndpointOrigin): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    https_port: cdktf.numberToTerraform(struct!.httpsPort),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface CdnEndpointTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function cdnEndpointTimeoutsToTerraform(struct?: CdnEndpointTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class CdnEndpoint extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CdnEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cdn_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._contentTypesToCompress = config.contentTypesToCompress;
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
    this._deliveryRule = config.deliveryRule;
    this._geoFilter = config.geoFilter;
    this._globalDeliveryRule = config.globalDeliveryRule;
    this._origin = config.origin;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_types_to_compress - computed: true, optional: true, required: false
  private _contentTypesToCompress?: string[];
  public get contentTypesToCompress() {
    return this.getListAttribute('content_types_to_compress');
  }
  public set contentTypesToCompress(value: string[]) {
    this._contentTypesToCompress = value;
  }
  public resetContentTypesToCompress() {
    this._contentTypesToCompress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypesToCompressInput() {
    return this._contentTypesToCompress
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_compression_enabled - computed: false, optional: true, required: false
  private _isCompressionEnabled?: boolean;
  public get isCompressionEnabled() {
    return this.getBooleanAttribute('is_compression_enabled');
  }
  public set isCompressionEnabled(value: boolean ) {
    this._isCompressionEnabled = value;
  }
  public resetIsCompressionEnabled() {
    this._isCompressionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCompressionEnabledInput() {
    return this._isCompressionEnabled
  }

  // is_http_allowed - computed: false, optional: true, required: false
  private _isHttpAllowed?: boolean;
  public get isHttpAllowed() {
    return this.getBooleanAttribute('is_http_allowed');
  }
  public set isHttpAllowed(value: boolean ) {
    this._isHttpAllowed = value;
  }
  public resetIsHttpAllowed() {
    this._isHttpAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHttpAllowedInput() {
    return this._isHttpAllowed
  }

  // is_https_allowed - computed: false, optional: true, required: false
  private _isHttpsAllowed?: boolean;
  public get isHttpsAllowed() {
    return this.getBooleanAttribute('is_https_allowed');
  }
  public set isHttpsAllowed(value: boolean ) {
    this._isHttpsAllowed = value;
  }
  public resetIsHttpsAllowed() {
    this._isHttpsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHttpsAllowedInput() {
    return this._isHttpsAllowed
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
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

  // optimization_type - computed: false, optional: true, required: false
  private _optimizationType?: string;
  public get optimizationType() {
    return this.getStringAttribute('optimization_type');
  }
  public set optimizationType(value: string ) {
    this._optimizationType = value;
  }
  public resetOptimizationType() {
    this._optimizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizationTypeInput() {
    return this._optimizationType
  }

  // origin_host_header - computed: false, optional: true, required: false
  private _originHostHeader?: string;
  public get originHostHeader() {
    return this.getStringAttribute('origin_host_header');
  }
  public set originHostHeader(value: string ) {
    this._originHostHeader = value;
  }
  public resetOriginHostHeader() {
    this._originHostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originHostHeaderInput() {
    return this._originHostHeader
  }

  // origin_path - computed: true, optional: true, required: false
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
    return this._originPath
  }

  // probe_path - computed: true, optional: true, required: false
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
    return this._probePath
  }

  // profile_name - computed: false, optional: false, required: true
  private _profileName: string;
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName
  }

  // querystring_caching_behaviour - computed: false, optional: true, required: false
  private _querystringCachingBehaviour?: string;
  public get querystringCachingBehaviour() {
    return this.getStringAttribute('querystring_caching_behaviour');
  }
  public set querystringCachingBehaviour(value: string ) {
    this._querystringCachingBehaviour = value;
  }
  public resetQuerystringCachingBehaviour() {
    this._querystringCachingBehaviour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querystringCachingBehaviourInput() {
    return this._querystringCachingBehaviour
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // delivery_rule - computed: false, optional: true, required: false
  private _deliveryRule?: CdnEndpointDeliveryRule[];
  public get deliveryRule() {
    return this.interpolationForAttribute('delivery_rule') as any;
  }
  public set deliveryRule(value: CdnEndpointDeliveryRule[] ) {
    this._deliveryRule = value;
  }
  public resetDeliveryRule() {
    this._deliveryRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryRuleInput() {
    return this._deliveryRule
  }

  // geo_filter - computed: false, optional: true, required: false
  private _geoFilter?: CdnEndpointGeoFilter[];
  public get geoFilter() {
    return this.interpolationForAttribute('geo_filter') as any;
  }
  public set geoFilter(value: CdnEndpointGeoFilter[] ) {
    this._geoFilter = value;
  }
  public resetGeoFilter() {
    this._geoFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoFilterInput() {
    return this._geoFilter
  }

  // global_delivery_rule - computed: false, optional: true, required: false
  private _globalDeliveryRule?: CdnEndpointGlobalDeliveryRule[];
  public get globalDeliveryRule() {
    return this.interpolationForAttribute('global_delivery_rule') as any;
  }
  public set globalDeliveryRule(value: CdnEndpointGlobalDeliveryRule[] ) {
    this._globalDeliveryRule = value;
  }
  public resetGlobalDeliveryRule() {
    this._globalDeliveryRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalDeliveryRuleInput() {
    return this._globalDeliveryRule
  }

  // origin - computed: false, optional: false, required: true
  private _origin: CdnEndpointOrigin[];
  public get origin() {
    return this.interpolationForAttribute('origin') as any;
  }
  public set origin(value: CdnEndpointOrigin[]) {
    this._origin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CdnEndpointTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CdnEndpointTimeouts ) {
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
      content_types_to_compress: cdktf.listMapper(cdktf.stringToTerraform)(this._contentTypesToCompress),
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
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      delivery_rule: cdktf.listMapper(cdnEndpointDeliveryRuleToTerraform)(this._deliveryRule),
      geo_filter: cdktf.listMapper(cdnEndpointGeoFilterToTerraform)(this._geoFilter),
      global_delivery_rule: cdktf.listMapper(cdnEndpointGlobalDeliveryRuleToTerraform)(this._globalDeliveryRule),
      origin: cdktf.listMapper(cdnEndpointOriginToTerraform)(this._origin),
      timeouts: cdnEndpointTimeoutsToTerraform(this._timeouts),
    };
  }
}
