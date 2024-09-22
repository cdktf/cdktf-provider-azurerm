// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnFrontdoorRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_custom_domain_ids CdnFrontdoorRoute#cdn_frontdoor_custom_domain_ids}
  */
  readonly cdnFrontdoorCustomDomainIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_endpoint_id CdnFrontdoorRoute#cdn_frontdoor_endpoint_id}
  */
  readonly cdnFrontdoorEndpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_origin_group_id CdnFrontdoorRoute#cdn_frontdoor_origin_group_id}
  */
  readonly cdnFrontdoorOriginGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_origin_ids CdnFrontdoorRoute#cdn_frontdoor_origin_ids}
  */
  readonly cdnFrontdoorOriginIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_origin_path CdnFrontdoorRoute#cdn_frontdoor_origin_path}
  */
  readonly cdnFrontdoorOriginPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_rule_set_ids CdnFrontdoorRoute#cdn_frontdoor_rule_set_ids}
  */
  readonly cdnFrontdoorRuleSetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#enabled CdnFrontdoorRoute#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#forwarding_protocol CdnFrontdoorRoute#forwarding_protocol}
  */
  readonly forwardingProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#https_redirect_enabled CdnFrontdoorRoute#https_redirect_enabled}
  */
  readonly httpsRedirectEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#id CdnFrontdoorRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#link_to_default_domain CdnFrontdoorRoute#link_to_default_domain}
  */
  readonly linkToDefaultDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#name CdnFrontdoorRoute#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#patterns_to_match CdnFrontdoorRoute#patterns_to_match}
  */
  readonly patternsToMatch: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#supported_protocols CdnFrontdoorRoute#supported_protocols}
  */
  readonly supportedProtocols: string[];
  /**
  * cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#cache CdnFrontdoorRoute#cache}
  */
  readonly cache?: CdnFrontdoorRouteCache;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#timeouts CdnFrontdoorRoute#timeouts}
  */
  readonly timeouts?: CdnFrontdoorRouteTimeouts;
}
export interface CdnFrontdoorRouteCache {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#compression_enabled CdnFrontdoorRoute#compression_enabled}
  */
  readonly compressionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#content_types_to_compress CdnFrontdoorRoute#content_types_to_compress}
  */
  readonly contentTypesToCompress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#query_string_caching_behavior CdnFrontdoorRoute#query_string_caching_behavior}
  */
  readonly queryStringCachingBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#query_strings CdnFrontdoorRoute#query_strings}
  */
  readonly queryStrings?: string[];
}

export function cdnFrontdoorRouteCacheToTerraform(struct?: CdnFrontdoorRouteCacheOutputReference | CdnFrontdoorRouteCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_enabled: cdktf.booleanToTerraform(struct!.compressionEnabled),
    content_types_to_compress: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contentTypesToCompress),
    query_string_caching_behavior: cdktf.stringToTerraform(struct!.queryStringCachingBehavior),
    query_strings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryStrings),
  }
}


export function cdnFrontdoorRouteCacheToHclTerraform(struct?: CdnFrontdoorRouteCacheOutputReference | CdnFrontdoorRouteCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.compressionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    content_types_to_compress: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contentTypesToCompress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    query_string_caching_behavior: {
      value: cdktf.stringToHclTerraform(struct!.queryStringCachingBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_strings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.queryStrings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRouteCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorRouteCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionEnabled = this._compressionEnabled;
    }
    if (this._contentTypesToCompress !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTypesToCompress = this._contentTypesToCompress;
    }
    if (this._queryStringCachingBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringCachingBehavior = this._queryStringCachingBehavior;
    }
    if (this._queryStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStrings = this._queryStrings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRouteCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compressionEnabled = undefined;
      this._contentTypesToCompress = undefined;
      this._queryStringCachingBehavior = undefined;
      this._queryStrings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compressionEnabled = value.compressionEnabled;
      this._contentTypesToCompress = value.contentTypesToCompress;
      this._queryStringCachingBehavior = value.queryStringCachingBehavior;
      this._queryStrings = value.queryStrings;
    }
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

  // content_types_to_compress - computed: false, optional: true, required: false
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
    return this._contentTypesToCompress;
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

  // query_strings - computed: false, optional: true, required: false
  private _queryStrings?: string[]; 
  public get queryStrings() {
    return this.getListAttribute('query_strings');
  }
  public set queryStrings(value: string[]) {
    this._queryStrings = value;
  }
  public resetQueryStrings() {
    this._queryStrings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringsInput() {
    return this._queryStrings;
  }
}
export interface CdnFrontdoorRouteTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#create CdnFrontdoorRoute#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#delete CdnFrontdoorRoute#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#read CdnFrontdoorRoute#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#update CdnFrontdoorRoute#update}
  */
  readonly update?: string;
}

export function cdnFrontdoorRouteTimeoutsToTerraform(struct?: CdnFrontdoorRouteTimeouts | cdktf.IResolvable): any {
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


export function cdnFrontdoorRouteTimeoutsToHclTerraform(struct?: CdnFrontdoorRouteTimeouts | cdktf.IResolvable): any {
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

export class CdnFrontdoorRouteTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnFrontdoorRouteTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorRouteTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route azurerm_cdn_frontdoor_route}
*/
export class CdnFrontdoorRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_cdn_frontdoor_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnFrontdoorRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnFrontdoorRoute to import
  * @param importFromId The id of the existing CdnFrontdoorRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnFrontdoorRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_cdn_frontdoor_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cdn_frontdoor_route azurerm_cdn_frontdoor_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnFrontdoorRouteConfig
  */
  public constructor(scope: Construct, id: string, config: CdnFrontdoorRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cdn_frontdoor_route',
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
    this._cdnFrontdoorCustomDomainIds = config.cdnFrontdoorCustomDomainIds;
    this._cdnFrontdoorEndpointId = config.cdnFrontdoorEndpointId;
    this._cdnFrontdoorOriginGroupId = config.cdnFrontdoorOriginGroupId;
    this._cdnFrontdoorOriginIds = config.cdnFrontdoorOriginIds;
    this._cdnFrontdoorOriginPath = config.cdnFrontdoorOriginPath;
    this._cdnFrontdoorRuleSetIds = config.cdnFrontdoorRuleSetIds;
    this._enabled = config.enabled;
    this._forwardingProtocol = config.forwardingProtocol;
    this._httpsRedirectEnabled = config.httpsRedirectEnabled;
    this._id = config.id;
    this._linkToDefaultDomain = config.linkToDefaultDomain;
    this._name = config.name;
    this._patternsToMatch = config.patternsToMatch;
    this._supportedProtocols = config.supportedProtocols;
    this._cache.internalValue = config.cache;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdn_frontdoor_custom_domain_ids - computed: false, optional: true, required: false
  private _cdnFrontdoorCustomDomainIds?: string[]; 
  public get cdnFrontdoorCustomDomainIds() {
    return cdktf.Fn.tolist(this.getListAttribute('cdn_frontdoor_custom_domain_ids'));
  }
  public set cdnFrontdoorCustomDomainIds(value: string[]) {
    this._cdnFrontdoorCustomDomainIds = value;
  }
  public resetCdnFrontdoorCustomDomainIds() {
    this._cdnFrontdoorCustomDomainIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnFrontdoorCustomDomainIdsInput() {
    return this._cdnFrontdoorCustomDomainIds;
  }

  // cdn_frontdoor_endpoint_id - computed: false, optional: false, required: true
  private _cdnFrontdoorEndpointId?: string; 
  public get cdnFrontdoorEndpointId() {
    return this.getStringAttribute('cdn_frontdoor_endpoint_id');
  }
  public set cdnFrontdoorEndpointId(value: string) {
    this._cdnFrontdoorEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnFrontdoorEndpointIdInput() {
    return this._cdnFrontdoorEndpointId;
  }

  // cdn_frontdoor_origin_group_id - computed: false, optional: false, required: true
  private _cdnFrontdoorOriginGroupId?: string; 
  public get cdnFrontdoorOriginGroupId() {
    return this.getStringAttribute('cdn_frontdoor_origin_group_id');
  }
  public set cdnFrontdoorOriginGroupId(value: string) {
    this._cdnFrontdoorOriginGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnFrontdoorOriginGroupIdInput() {
    return this._cdnFrontdoorOriginGroupId;
  }

  // cdn_frontdoor_origin_ids - computed: false, optional: false, required: true
  private _cdnFrontdoorOriginIds?: string[]; 
  public get cdnFrontdoorOriginIds() {
    return this.getListAttribute('cdn_frontdoor_origin_ids');
  }
  public set cdnFrontdoorOriginIds(value: string[]) {
    this._cdnFrontdoorOriginIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnFrontdoorOriginIdsInput() {
    return this._cdnFrontdoorOriginIds;
  }

  // cdn_frontdoor_origin_path - computed: false, optional: true, required: false
  private _cdnFrontdoorOriginPath?: string; 
  public get cdnFrontdoorOriginPath() {
    return this.getStringAttribute('cdn_frontdoor_origin_path');
  }
  public set cdnFrontdoorOriginPath(value: string) {
    this._cdnFrontdoorOriginPath = value;
  }
  public resetCdnFrontdoorOriginPath() {
    this._cdnFrontdoorOriginPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnFrontdoorOriginPathInput() {
    return this._cdnFrontdoorOriginPath;
  }

  // cdn_frontdoor_rule_set_ids - computed: false, optional: true, required: false
  private _cdnFrontdoorRuleSetIds?: string[]; 
  public get cdnFrontdoorRuleSetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('cdn_frontdoor_rule_set_ids'));
  }
  public set cdnFrontdoorRuleSetIds(value: string[]) {
    this._cdnFrontdoorRuleSetIds = value;
  }
  public resetCdnFrontdoorRuleSetIds() {
    this._cdnFrontdoorRuleSetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnFrontdoorRuleSetIdsInput() {
    return this._cdnFrontdoorRuleSetIds;
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

  // https_redirect_enabled - computed: false, optional: true, required: false
  private _httpsRedirectEnabled?: boolean | cdktf.IResolvable; 
  public get httpsRedirectEnabled() {
    return this.getBooleanAttribute('https_redirect_enabled');
  }
  public set httpsRedirectEnabled(value: boolean | cdktf.IResolvable) {
    this._httpsRedirectEnabled = value;
  }
  public resetHttpsRedirectEnabled() {
    this._httpsRedirectEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectEnabledInput() {
    return this._httpsRedirectEnabled;
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

  // link_to_default_domain - computed: false, optional: true, required: false
  private _linkToDefaultDomain?: boolean | cdktf.IResolvable; 
  public get linkToDefaultDomain() {
    return this.getBooleanAttribute('link_to_default_domain');
  }
  public set linkToDefaultDomain(value: boolean | cdktf.IResolvable) {
    this._linkToDefaultDomain = value;
  }
  public resetLinkToDefaultDomain() {
    this._linkToDefaultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkToDefaultDomainInput() {
    return this._linkToDefaultDomain;
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

  // patterns_to_match - computed: false, optional: false, required: true
  private _patternsToMatch?: string[]; 
  public get patternsToMatch() {
    return this.getListAttribute('patterns_to_match');
  }
  public set patternsToMatch(value: string[]) {
    this._patternsToMatch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsToMatchInput() {
    return this._patternsToMatch;
  }

  // supported_protocols - computed: false, optional: false, required: true
  private _supportedProtocols?: string[]; 
  public get supportedProtocols() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_protocols'));
  }
  public set supportedProtocols(value: string[]) {
    this._supportedProtocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedProtocolsInput() {
    return this._supportedProtocols;
  }

  // cache - computed: false, optional: true, required: false
  private _cache = new CdnFrontdoorRouteCacheOutputReference(this, "cache");
  public get cache() {
    return this._cache;
  }
  public putCache(value: CdnFrontdoorRouteCache) {
    this._cache.internalValue = value;
  }
  public resetCache() {
    this._cache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CdnFrontdoorRouteTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CdnFrontdoorRouteTimeouts) {
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
      cdn_frontdoor_custom_domain_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cdnFrontdoorCustomDomainIds),
      cdn_frontdoor_endpoint_id: cdktf.stringToTerraform(this._cdnFrontdoorEndpointId),
      cdn_frontdoor_origin_group_id: cdktf.stringToTerraform(this._cdnFrontdoorOriginGroupId),
      cdn_frontdoor_origin_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cdnFrontdoorOriginIds),
      cdn_frontdoor_origin_path: cdktf.stringToTerraform(this._cdnFrontdoorOriginPath),
      cdn_frontdoor_rule_set_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cdnFrontdoorRuleSetIds),
      enabled: cdktf.booleanToTerraform(this._enabled),
      forwarding_protocol: cdktf.stringToTerraform(this._forwardingProtocol),
      https_redirect_enabled: cdktf.booleanToTerraform(this._httpsRedirectEnabled),
      id: cdktf.stringToTerraform(this._id),
      link_to_default_domain: cdktf.booleanToTerraform(this._linkToDefaultDomain),
      name: cdktf.stringToTerraform(this._name),
      patterns_to_match: cdktf.listMapper(cdktf.stringToTerraform, false)(this._patternsToMatch),
      supported_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supportedProtocols),
      cache: cdnFrontdoorRouteCacheToTerraform(this._cache.internalValue),
      timeouts: cdnFrontdoorRouteTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cdn_frontdoor_custom_domain_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cdnFrontdoorCustomDomainIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cdn_frontdoor_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._cdnFrontdoorEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdn_frontdoor_origin_group_id: {
        value: cdktf.stringToHclTerraform(this._cdnFrontdoorOriginGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdn_frontdoor_origin_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cdnFrontdoorOriginIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cdn_frontdoor_origin_path: {
        value: cdktf.stringToHclTerraform(this._cdnFrontdoorOriginPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdn_frontdoor_rule_set_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cdnFrontdoorRuleSetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forwarding_protocol: {
        value: cdktf.stringToHclTerraform(this._forwardingProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_redirect_enabled: {
        value: cdktf.booleanToHclTerraform(this._httpsRedirectEnabled),
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
      link_to_default_domain: {
        value: cdktf.booleanToHclTerraform(this._linkToDefaultDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      patterns_to_match: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._patternsToMatch),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      supported_protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._supportedProtocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cache: {
        value: cdnFrontdoorRouteCacheToHclTerraform(this._cache.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnFrontdoorRouteCacheList",
      },
      timeouts: {
        value: cdnFrontdoorRouteTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CdnFrontdoorRouteTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
