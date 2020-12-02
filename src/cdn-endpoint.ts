// https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CdnEndpointConfig extends TerraformMetaArguments {
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
export interface CdnEndpointDeliveryRuleCacheKeyQueryStringAction {
  readonly behavior: string;
  readonly parameters?: string;
}
export interface CdnEndpointDeliveryRuleCookiesCondition {
  readonly matchValues: string[];
  readonly negateCondition?: boolean;
  readonly operator: string;
  readonly selector: string;
  readonly transforms?: string[];
}
export interface CdnEndpointDeliveryRuleDeviceCondition {
  readonly matchValues: string[];
  readonly negateCondition?: boolean;
  readonly operator?: string;
}
export interface CdnEndpointDeliveryRuleHttpVersionCondition {
  readonly matchValues: string[];
  readonly negateCondition?: boolean;
  readonly operator?: string;
}
export interface CdnEndpointDeliveryRuleModifyRequestHeaderAction {
  readonly action: string;
  readonly name: string;
  readonly value?: string;
}
export interface CdnEndpointDeliveryRuleModifyResponseHeaderAction {
  readonly action: string;
  readonly name: string;
  readonly value?: string;
}
export interface CdnEndpointDeliveryRulePostArgCondition {
  readonly matchValues: string[];
  readonly negateCondition?: boolean;
  readonly operator: string;
  readonly selector: string;
  readonly transforms?: string[];
}
export interface CdnEndpointDeliveryRuleQueryStringCondition {
  readonly matchValues: string[];
  readonly negateCondition?: boolean;
  readonly operator: string;
  readonly transforms?: string[];
}
export interface CdnEndpointDeliveryRuleRemoteAddressCondition {
  readonly matchValues: string[];
  readonly negateCondition?: boolean;
  readonly operator: string;
}
export interface CdnEndpointDeliveryRuleRequestBodyCondition {
  readonly matchValues: string[];
  readonly negateCondition?: boolean;
  readonly operator: string;
  readonly transforms?: string[];
}
export interface CdnEndpointDeliveryRuleRequestHeaderCondition {
  readonly matchValues: string[];
  readonly negateCondition?: boolean;
  readonly operator: string;
  readonly selector: string;
  readonly transforms?: string[];
}
export interface CdnEndpointDeliveryRuleRequestMethodCondition {
  readonly matchValues: string[];
  readonly negateCondition?: boolean;
  readonly operator?: string;
}
export interface CdnEndpointDeliveryRuleRequestSchemeCondition {
  readonly matchValues: string[];
  readonly negateCondition?: boolean;
  readonly operator?: string;
}
export interface CdnEndpointDeliveryRuleRequestUriCondition {
  readonly matchValues: string[];
  readonly negateCondition?: boolean;
  readonly operator: string;
  readonly transforms?: string[];
}
export interface CdnEndpointDeliveryRuleUrlFileExtensionCondition {
  readonly matchValues: string[];
  readonly negateCondition?: boolean;
  readonly operator: string;
  readonly transforms?: string[];
}
export interface CdnEndpointDeliveryRuleUrlFileNameCondition {
  readonly matchValues: string[];
  readonly negateCondition?: boolean;
  readonly operator: string;
  readonly transforms?: string[];
}
export interface CdnEndpointDeliveryRuleUrlPathCondition {
  readonly matchValues: string[];
  readonly negateCondition?: boolean;
  readonly operator: string;
  readonly transforms?: string[];
}
export interface CdnEndpointDeliveryRuleUrlRedirectAction {
  readonly fragment?: string;
  readonly hostname?: string;
  readonly path?: string;
  readonly protocol?: string;
  readonly queryString?: string;
  readonly redirectType: string;
}
export interface CdnEndpointDeliveryRuleUrlRewriteAction {
  readonly destination: string;
  readonly preserveUnmatchedPath?: boolean;
  readonly sourcePattern: string;
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
export interface CdnEndpointGeoFilter {
  readonly action: string;
  readonly countryCodes: string[];
  readonly relativePath: string;
}
export interface CdnEndpointGlobalDeliveryRuleCacheExpirationAction {
  readonly behavior: string;
  readonly duration?: string;
}
export interface CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction {
  readonly behavior: string;
  readonly parameters?: string;
}
export interface CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction {
  readonly action: string;
  readonly name: string;
  readonly value?: string;
}
export interface CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction {
  readonly action: string;
  readonly name: string;
  readonly value?: string;
}
export interface CdnEndpointGlobalDeliveryRuleUrlRedirectAction {
  readonly fragment?: string;
  readonly hostname?: string;
  readonly path?: string;
  readonly protocol?: string;
  readonly queryString?: string;
  readonly redirectType: string;
}
export interface CdnEndpointGlobalDeliveryRuleUrlRewriteAction {
  readonly destination: string;
  readonly preserveUnmatchedPath?: boolean;
  readonly sourcePattern: string;
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
export interface CdnEndpointOrigin {
  readonly hostName: string;
  readonly httpPort?: number;
  readonly httpsPort?: number;
  readonly name: string;
}
export interface CdnEndpointTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class CdnEndpoint extends TerraformResource {

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
      content_types_to_compress: this._contentTypesToCompress,
      is_compression_enabled: this._isCompressionEnabled,
      is_http_allowed: this._isHttpAllowed,
      is_https_allowed: this._isHttpsAllowed,
      location: this._location,
      name: this._name,
      optimization_type: this._optimizationType,
      origin_host_header: this._originHostHeader,
      origin_path: this._originPath,
      probe_path: this._probePath,
      profile_name: this._profileName,
      querystring_caching_behaviour: this._querystringCachingBehaviour,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      delivery_rule: this._deliveryRule,
      geo_filter: this._geoFilter,
      global_delivery_rule: this._globalDeliveryRule,
      origin: this._origin,
      timeouts: this._timeouts,
    };
  }
}
