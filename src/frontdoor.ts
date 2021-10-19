// https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FrontdoorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#backend_pools_send_receive_timeout_seconds Frontdoor#backend_pools_send_receive_timeout_seconds}
  */
  readonly backendPoolsSendReceiveTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#enforce_backend_pools_certificate_name_check Frontdoor#enforce_backend_pools_certificate_name_check}
  */
  readonly enforceBackendPoolsCertificateNameCheck: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#friendly_name Frontdoor#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#load_balancer_enabled Frontdoor#load_balancer_enabled}
  */
  readonly loadBalancerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#location Frontdoor#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#name Frontdoor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#resource_group_name Frontdoor#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#tags Frontdoor#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * backend_pool block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#backend_pool Frontdoor#backend_pool}
  */
  readonly backendPool: FrontdoorBackendPool[];
  /**
  * backend_pool_health_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#backend_pool_health_probe Frontdoor#backend_pool_health_probe}
  */
  readonly backendPoolHealthProbe: FrontdoorBackendPoolHealthProbe[];
  /**
  * backend_pool_load_balancing block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#backend_pool_load_balancing Frontdoor#backend_pool_load_balancing}
  */
  readonly backendPoolLoadBalancing: FrontdoorBackendPoolLoadBalancing[];
  /**
  * frontend_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#frontend_endpoint Frontdoor#frontend_endpoint}
  */
  readonly frontendEndpoint: FrontdoorFrontendEndpoint[];
  /**
  * routing_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#routing_rule Frontdoor#routing_rule}
  */
  readonly routingRule: FrontdoorRoutingRule[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#timeouts Frontdoor#timeouts}
  */
  readonly timeouts?: FrontdoorTimeouts;
}
export class FrontdoorExplicitResourceOrder extends cdktf.ComplexComputedList {

  // backend_pool_health_probe_ids - computed: true, optional: false, required: false
  public get backendPoolHealthProbeIds() {
    return this.getListAttribute('backend_pool_health_probe_ids');
  }

  // backend_pool_ids - computed: true, optional: false, required: false
  public get backendPoolIds() {
    return this.getListAttribute('backend_pool_ids');
  }

  // backend_pool_load_balancing_ids - computed: true, optional: false, required: false
  public get backendPoolLoadBalancingIds() {
    return this.getListAttribute('backend_pool_load_balancing_ids');
  }

  // frontend_endpoint_ids - computed: true, optional: false, required: false
  public get frontendEndpointIds() {
    return this.getListAttribute('frontend_endpoint_ids');
  }

  // routing_rule_ids - computed: true, optional: false, required: false
  public get routingRuleIds() {
    return this.getListAttribute('routing_rule_ids');
  }
}
export interface FrontdoorBackendPoolBackend {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#address Frontdoor#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#enabled Frontdoor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#host_header Frontdoor#host_header}
  */
  readonly hostHeader: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#http_port Frontdoor#http_port}
  */
  readonly httpPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#https_port Frontdoor#https_port}
  */
  readonly httpsPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#priority Frontdoor#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#weight Frontdoor#weight}
  */
  readonly weight?: number;
}

function frontdoorBackendPoolBackendToTerraform(struct?: FrontdoorBackendPoolBackend): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    host_header: cdktf.stringToTerraform(struct!.hostHeader),
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    https_port: cdktf.numberToTerraform(struct!.httpsPort),
    priority: cdktf.numberToTerraform(struct!.priority),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface FrontdoorBackendPool {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#health_probe_name Frontdoor#health_probe_name}
  */
  readonly healthProbeName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#load_balancing_name Frontdoor#load_balancing_name}
  */
  readonly loadBalancingName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#name Frontdoor#name}
  */
  readonly name: string;
  /**
  * backend block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#backend Frontdoor#backend}
  */
  readonly backend: FrontdoorBackendPoolBackend[];
}

function frontdoorBackendPoolToTerraform(struct?: FrontdoorBackendPool): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_probe_name: cdktf.stringToTerraform(struct!.healthProbeName),
    load_balancing_name: cdktf.stringToTerraform(struct!.loadBalancingName),
    name: cdktf.stringToTerraform(struct!.name),
    backend: cdktf.listMapper(frontdoorBackendPoolBackendToTerraform)(struct!.backend),
  }
}

export interface FrontdoorBackendPoolHealthProbe {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#enabled Frontdoor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#interval_in_seconds Frontdoor#interval_in_seconds}
  */
  readonly intervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#name Frontdoor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#path Frontdoor#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#probe_method Frontdoor#probe_method}
  */
  readonly probeMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#protocol Frontdoor#protocol}
  */
  readonly protocol?: string;
}

function frontdoorBackendPoolHealthProbeToTerraform(struct?: FrontdoorBackendPoolHealthProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    probe_method: cdktf.stringToTerraform(struct!.probeMethod),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface FrontdoorBackendPoolLoadBalancing {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#additional_latency_milliseconds Frontdoor#additional_latency_milliseconds}
  */
  readonly additionalLatencyMilliseconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#name Frontdoor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#sample_size Frontdoor#sample_size}
  */
  readonly sampleSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#successful_samples_required Frontdoor#successful_samples_required}
  */
  readonly successfulSamplesRequired?: number;
}

function frontdoorBackendPoolLoadBalancingToTerraform(struct?: FrontdoorBackendPoolLoadBalancing): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_latency_milliseconds: cdktf.numberToTerraform(struct!.additionalLatencyMilliseconds),
    name: cdktf.stringToTerraform(struct!.name),
    sample_size: cdktf.numberToTerraform(struct!.sampleSize),
    successful_samples_required: cdktf.numberToTerraform(struct!.successfulSamplesRequired),
  }
}

export interface FrontdoorFrontendEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#host_name Frontdoor#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#name Frontdoor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#session_affinity_enabled Frontdoor#session_affinity_enabled}
  */
  readonly sessionAffinityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#session_affinity_ttl_seconds Frontdoor#session_affinity_ttl_seconds}
  */
  readonly sessionAffinityTtlSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#web_application_firewall_policy_link_id Frontdoor#web_application_firewall_policy_link_id}
  */
  readonly webApplicationFirewallPolicyLinkId?: string;
}

function frontdoorFrontendEndpointToTerraform(struct?: FrontdoorFrontendEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    name: cdktf.stringToTerraform(struct!.name),
    session_affinity_enabled: cdktf.booleanToTerraform(struct!.sessionAffinityEnabled),
    session_affinity_ttl_seconds: cdktf.numberToTerraform(struct!.sessionAffinityTtlSeconds),
    web_application_firewall_policy_link_id: cdktf.stringToTerraform(struct!.webApplicationFirewallPolicyLinkId),
  }
}

export interface FrontdoorRoutingRuleForwardingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#backend_pool_name Frontdoor#backend_pool_name}
  */
  readonly backendPoolName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#cache_duration Frontdoor#cache_duration}
  */
  readonly cacheDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#cache_enabled Frontdoor#cache_enabled}
  */
  readonly cacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#cache_query_parameter_strip_directive Frontdoor#cache_query_parameter_strip_directive}
  */
  readonly cacheQueryParameterStripDirective?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#cache_query_parameters Frontdoor#cache_query_parameters}
  */
  readonly cacheQueryParameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#cache_use_dynamic_compression Frontdoor#cache_use_dynamic_compression}
  */
  readonly cacheUseDynamicCompression?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#custom_forwarding_path Frontdoor#custom_forwarding_path}
  */
  readonly customForwardingPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#forwarding_protocol Frontdoor#forwarding_protocol}
  */
  readonly forwardingProtocol?: string;
}

function frontdoorRoutingRuleForwardingConfigurationToTerraform(struct?: FrontdoorRoutingRuleForwardingConfigurationOutputReference | FrontdoorRoutingRuleForwardingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_pool_name: cdktf.stringToTerraform(struct!.backendPoolName),
    cache_duration: cdktf.stringToTerraform(struct!.cacheDuration),
    cache_enabled: cdktf.booleanToTerraform(struct!.cacheEnabled),
    cache_query_parameter_strip_directive: cdktf.stringToTerraform(struct!.cacheQueryParameterStripDirective),
    cache_query_parameters: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cacheQueryParameters),
    cache_use_dynamic_compression: cdktf.booleanToTerraform(struct!.cacheUseDynamicCompression),
    custom_forwarding_path: cdktf.stringToTerraform(struct!.customForwardingPath),
    forwarding_protocol: cdktf.stringToTerraform(struct!.forwardingProtocol),
  }
}

export class FrontdoorRoutingRuleForwardingConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // backend_pool_name - computed: false, optional: false, required: true
  private _backendPoolName?: string; 
  public get backendPoolName() {
    return this.getStringAttribute('backend_pool_name');
  }
  public set backendPoolName(value: string) {
    this._backendPoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPoolNameInput() {
    return this._backendPoolName
  }

  // cache_duration - computed: false, optional: true, required: false
  private _cacheDuration?: string | undefined; 
  public get cacheDuration() {
    return this.getStringAttribute('cache_duration');
  }
  public set cacheDuration(value: string | undefined) {
    this._cacheDuration = value;
  }
  public resetCacheDuration() {
    this._cacheDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDurationInput() {
    return this._cacheDuration
  }

  // cache_enabled - computed: false, optional: true, required: false
  private _cacheEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get cacheEnabled() {
    return this.getBooleanAttribute('cache_enabled') as any;
  }
  public set cacheEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._cacheEnabled = value;
  }
  public resetCacheEnabled() {
    this._cacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheEnabledInput() {
    return this._cacheEnabled
  }

  // cache_query_parameter_strip_directive - computed: false, optional: true, required: false
  private _cacheQueryParameterStripDirective?: string | undefined; 
  public get cacheQueryParameterStripDirective() {
    return this.getStringAttribute('cache_query_parameter_strip_directive');
  }
  public set cacheQueryParameterStripDirective(value: string | undefined) {
    this._cacheQueryParameterStripDirective = value;
  }
  public resetCacheQueryParameterStripDirective() {
    this._cacheQueryParameterStripDirective = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheQueryParameterStripDirectiveInput() {
    return this._cacheQueryParameterStripDirective
  }

  // cache_query_parameters - computed: false, optional: true, required: false
  private _cacheQueryParameters?: string[] | undefined; 
  public get cacheQueryParameters() {
    return this.getListAttribute('cache_query_parameters');
  }
  public set cacheQueryParameters(value: string[] | undefined) {
    this._cacheQueryParameters = value;
  }
  public resetCacheQueryParameters() {
    this._cacheQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheQueryParametersInput() {
    return this._cacheQueryParameters
  }

  // cache_use_dynamic_compression - computed: false, optional: true, required: false
  private _cacheUseDynamicCompression?: boolean | cdktf.IResolvable | undefined; 
  public get cacheUseDynamicCompression() {
    return this.getBooleanAttribute('cache_use_dynamic_compression') as any;
  }
  public set cacheUseDynamicCompression(value: boolean | cdktf.IResolvable | undefined) {
    this._cacheUseDynamicCompression = value;
  }
  public resetCacheUseDynamicCompression() {
    this._cacheUseDynamicCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheUseDynamicCompressionInput() {
    return this._cacheUseDynamicCompression
  }

  // custom_forwarding_path - computed: false, optional: true, required: false
  private _customForwardingPath?: string | undefined; 
  public get customForwardingPath() {
    return this.getStringAttribute('custom_forwarding_path');
  }
  public set customForwardingPath(value: string | undefined) {
    this._customForwardingPath = value;
  }
  public resetCustomForwardingPath() {
    this._customForwardingPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customForwardingPathInput() {
    return this._customForwardingPath
  }

  // forwarding_protocol - computed: false, optional: true, required: false
  private _forwardingProtocol?: string | undefined; 
  public get forwardingProtocol() {
    return this.getStringAttribute('forwarding_protocol');
  }
  public set forwardingProtocol(value: string | undefined) {
    this._forwardingProtocol = value;
  }
  public resetForwardingProtocol() {
    this._forwardingProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingProtocolInput() {
    return this._forwardingProtocol
  }
}
export interface FrontdoorRoutingRuleRedirectConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#custom_fragment Frontdoor#custom_fragment}
  */
  readonly customFragment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#custom_host Frontdoor#custom_host}
  */
  readonly customHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#custom_path Frontdoor#custom_path}
  */
  readonly customPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#custom_query_string Frontdoor#custom_query_string}
  */
  readonly customQueryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#redirect_protocol Frontdoor#redirect_protocol}
  */
  readonly redirectProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#redirect_type Frontdoor#redirect_type}
  */
  readonly redirectType: string;
}

function frontdoorRoutingRuleRedirectConfigurationToTerraform(struct?: FrontdoorRoutingRuleRedirectConfigurationOutputReference | FrontdoorRoutingRuleRedirectConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_fragment: cdktf.stringToTerraform(struct!.customFragment),
    custom_host: cdktf.stringToTerraform(struct!.customHost),
    custom_path: cdktf.stringToTerraform(struct!.customPath),
    custom_query_string: cdktf.stringToTerraform(struct!.customQueryString),
    redirect_protocol: cdktf.stringToTerraform(struct!.redirectProtocol),
    redirect_type: cdktf.stringToTerraform(struct!.redirectType),
  }
}

export class FrontdoorRoutingRuleRedirectConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // custom_fragment - computed: false, optional: true, required: false
  private _customFragment?: string | undefined; 
  public get customFragment() {
    return this.getStringAttribute('custom_fragment');
  }
  public set customFragment(value: string | undefined) {
    this._customFragment = value;
  }
  public resetCustomFragment() {
    this._customFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFragmentInput() {
    return this._customFragment
  }

  // custom_host - computed: false, optional: true, required: false
  private _customHost?: string | undefined; 
  public get customHost() {
    return this.getStringAttribute('custom_host');
  }
  public set customHost(value: string | undefined) {
    this._customHost = value;
  }
  public resetCustomHost() {
    this._customHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHostInput() {
    return this._customHost
  }

  // custom_path - computed: false, optional: true, required: false
  private _customPath?: string | undefined; 
  public get customPath() {
    return this.getStringAttribute('custom_path');
  }
  public set customPath(value: string | undefined) {
    this._customPath = value;
  }
  public resetCustomPath() {
    this._customPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPathInput() {
    return this._customPath
  }

  // custom_query_string - computed: false, optional: true, required: false
  private _customQueryString?: string | undefined; 
  public get customQueryString() {
    return this.getStringAttribute('custom_query_string');
  }
  public set customQueryString(value: string | undefined) {
    this._customQueryString = value;
  }
  public resetCustomQueryString() {
    this._customQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customQueryStringInput() {
    return this._customQueryString
  }

  // redirect_protocol - computed: false, optional: false, required: true
  private _redirectProtocol?: string; 
  public get redirectProtocol() {
    return this.getStringAttribute('redirect_protocol');
  }
  public set redirectProtocol(value: string) {
    this._redirectProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectProtocolInput() {
    return this._redirectProtocol
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
    return this._redirectType
  }
}
export interface FrontdoorRoutingRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#accepted_protocols Frontdoor#accepted_protocols}
  */
  readonly acceptedProtocols: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#enabled Frontdoor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#frontend_endpoints Frontdoor#frontend_endpoints}
  */
  readonly frontendEndpoints: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#name Frontdoor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#patterns_to_match Frontdoor#patterns_to_match}
  */
  readonly patternsToMatch: string[];
  /**
  * forwarding_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#forwarding_configuration Frontdoor#forwarding_configuration}
  */
  readonly forwardingConfiguration?: FrontdoorRoutingRuleForwardingConfiguration;
  /**
  * redirect_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#redirect_configuration Frontdoor#redirect_configuration}
  */
  readonly redirectConfiguration?: FrontdoorRoutingRuleRedirectConfiguration;
}

function frontdoorRoutingRuleToTerraform(struct?: FrontdoorRoutingRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accepted_protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct!.acceptedProtocols),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    frontend_endpoints: cdktf.listMapper(cdktf.stringToTerraform)(struct!.frontendEndpoints),
    name: cdktf.stringToTerraform(struct!.name),
    patterns_to_match: cdktf.listMapper(cdktf.stringToTerraform)(struct!.patternsToMatch),
    forwarding_configuration: frontdoorRoutingRuleForwardingConfigurationToTerraform(struct!.forwardingConfiguration),
    redirect_configuration: frontdoorRoutingRuleRedirectConfigurationToTerraform(struct!.redirectConfiguration),
  }
}

export interface FrontdoorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#create Frontdoor#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#delete Frontdoor#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#read Frontdoor#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#update Frontdoor#update}
  */
  readonly update?: string;
}

function frontdoorTimeoutsToTerraform(struct?: FrontdoorTimeoutsOutputReference | FrontdoorTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class FrontdoorTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html azurerm_frontdoor}
*/
export class Frontdoor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_frontdoor";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html azurerm_frontdoor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FrontdoorConfig
  */
  public constructor(scope: Construct, id: string, config: FrontdoorConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_frontdoor',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backendPoolsSendReceiveTimeoutSeconds = config.backendPoolsSendReceiveTimeoutSeconds;
    this._enforceBackendPoolsCertificateNameCheck = config.enforceBackendPoolsCertificateNameCheck;
    this._friendlyName = config.friendlyName;
    this._loadBalancerEnabled = config.loadBalancerEnabled;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._backendPool = config.backendPool;
    this._backendPoolHealthProbe = config.backendPoolHealthProbe;
    this._backendPoolLoadBalancing = config.backendPoolLoadBalancing;
    this._frontendEndpoint = config.frontendEndpoint;
    this._routingRule = config.routingRule;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_pool_health_probes - computed: true, optional: false, required: false
  public backendPoolHealthProbes(key: string): string {
    return new cdktf.StringMap(this, 'backend_pool_health_probes').lookup(key);
  }

  // backend_pool_load_balancing_settings - computed: true, optional: false, required: false
  public backendPoolLoadBalancingSettings(key: string): string {
    return new cdktf.StringMap(this, 'backend_pool_load_balancing_settings').lookup(key);
  }

  // backend_pools - computed: true, optional: false, required: false
  public backendPools(key: string): string {
    return new cdktf.StringMap(this, 'backend_pools').lookup(key);
  }

  // backend_pools_send_receive_timeout_seconds - computed: false, optional: true, required: false
  private _backendPoolsSendReceiveTimeoutSeconds?: number | undefined; 
  public get backendPoolsSendReceiveTimeoutSeconds() {
    return this.getNumberAttribute('backend_pools_send_receive_timeout_seconds');
  }
  public set backendPoolsSendReceiveTimeoutSeconds(value: number | undefined) {
    this._backendPoolsSendReceiveTimeoutSeconds = value;
  }
  public resetBackendPoolsSendReceiveTimeoutSeconds() {
    this._backendPoolsSendReceiveTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPoolsSendReceiveTimeoutSecondsInput() {
    return this._backendPoolsSendReceiveTimeoutSeconds
  }

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // enforce_backend_pools_certificate_name_check - computed: false, optional: false, required: true
  private _enforceBackendPoolsCertificateNameCheck?: boolean | cdktf.IResolvable; 
  public get enforceBackendPoolsCertificateNameCheck() {
    return this.getBooleanAttribute('enforce_backend_pools_certificate_name_check') as any;
  }
  public set enforceBackendPoolsCertificateNameCheck(value: boolean | cdktf.IResolvable) {
    this._enforceBackendPoolsCertificateNameCheck = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceBackendPoolsCertificateNameCheckInput() {
    return this._enforceBackendPoolsCertificateNameCheck
  }

  // explicit_resource_order - computed: true, optional: false, required: false
  public explicitResourceOrder(index: string) {
    return new FrontdoorExplicitResourceOrder(this, 'explicit_resource_order', index);
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string | undefined; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string | undefined) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName
  }

  // frontend_endpoints - computed: true, optional: false, required: false
  public frontendEndpoints(key: string): string {
    return new cdktf.StringMap(this, 'frontend_endpoints').lookup(key);
  }

  // header_frontdoor_id - computed: true, optional: false, required: false
  public get headerFrontdoorId() {
    return this.getStringAttribute('header_frontdoor_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balancer_enabled - computed: false, optional: true, required: false
  private _loadBalancerEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get loadBalancerEnabled() {
    return this.getBooleanAttribute('load_balancer_enabled') as any;
  }
  public set loadBalancerEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._loadBalancerEnabled = value;
  }
  public resetLoadBalancerEnabled() {
    this._loadBalancerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerEnabledInput() {
    return this._loadBalancerEnabled
  }

  // location - computed: true, optional: true, required: false
  private _location?: string | undefined; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string | undefined) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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
    return this._name
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
    return this._resourceGroupName
  }

  // routing_rules - computed: true, optional: false, required: false
  public routingRules(key: string): string {
    return new cdktf.StringMap(this, 'routing_rules').lookup(key);
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // backend_pool - computed: false, optional: false, required: true
  private _backendPool?: FrontdoorBackendPool[]; 
  public get backendPool() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('backend_pool') as any;
  }
  public set backendPool(value: FrontdoorBackendPool[]) {
    this._backendPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPoolInput() {
    return this._backendPool
  }

  // backend_pool_health_probe - computed: false, optional: false, required: true
  private _backendPoolHealthProbe?: FrontdoorBackendPoolHealthProbe[]; 
  public get backendPoolHealthProbe() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('backend_pool_health_probe') as any;
  }
  public set backendPoolHealthProbe(value: FrontdoorBackendPoolHealthProbe[]) {
    this._backendPoolHealthProbe = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPoolHealthProbeInput() {
    return this._backendPoolHealthProbe
  }

  // backend_pool_load_balancing - computed: false, optional: false, required: true
  private _backendPoolLoadBalancing?: FrontdoorBackendPoolLoadBalancing[]; 
  public get backendPoolLoadBalancing() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('backend_pool_load_balancing') as any;
  }
  public set backendPoolLoadBalancing(value: FrontdoorBackendPoolLoadBalancing[]) {
    this._backendPoolLoadBalancing = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPoolLoadBalancingInput() {
    return this._backendPoolLoadBalancing
  }

  // frontend_endpoint - computed: false, optional: false, required: true
  private _frontendEndpoint?: FrontdoorFrontendEndpoint[]; 
  public get frontendEndpoint() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('frontend_endpoint') as any;
  }
  public set frontendEndpoint(value: FrontdoorFrontendEndpoint[]) {
    this._frontendEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendEndpointInput() {
    return this._frontendEndpoint
  }

  // routing_rule - computed: false, optional: false, required: true
  private _routingRule?: FrontdoorRoutingRule[]; 
  public get routingRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('routing_rule') as any;
  }
  public set routingRule(value: FrontdoorRoutingRule[]) {
    this._routingRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRuleInput() {
    return this._routingRule
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FrontdoorTimeouts | undefined; 
  private __timeoutsOutput = new FrontdoorTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: FrontdoorTimeouts | undefined) {
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
      backend_pools_send_receive_timeout_seconds: cdktf.numberToTerraform(this._backendPoolsSendReceiveTimeoutSeconds),
      enforce_backend_pools_certificate_name_check: cdktf.booleanToTerraform(this._enforceBackendPoolsCertificateNameCheck),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      load_balancer_enabled: cdktf.booleanToTerraform(this._loadBalancerEnabled),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      backend_pool: cdktf.listMapper(frontdoorBackendPoolToTerraform)(this._backendPool),
      backend_pool_health_probe: cdktf.listMapper(frontdoorBackendPoolHealthProbeToTerraform)(this._backendPoolHealthProbe),
      backend_pool_load_balancing: cdktf.listMapper(frontdoorBackendPoolLoadBalancingToTerraform)(this._backendPoolLoadBalancing),
      frontend_endpoint: cdktf.listMapper(frontdoorFrontendEndpointToTerraform)(this._frontendEndpoint),
      routing_rule: cdktf.listMapper(frontdoorRoutingRuleToTerraform)(this._routingRule),
      timeouts: frontdoorTimeoutsToTerraform(this._timeouts),
    };
  }
}
