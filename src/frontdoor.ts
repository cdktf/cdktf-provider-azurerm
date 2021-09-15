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

function frontdoorRoutingRuleForwardingConfigurationToTerraform(struct?: FrontdoorRoutingRuleForwardingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

function frontdoorRoutingRuleRedirectConfigurationToTerraform(struct?: FrontdoorRoutingRuleRedirectConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_fragment: cdktf.stringToTerraform(struct!.customFragment),
    custom_host: cdktf.stringToTerraform(struct!.customHost),
    custom_path: cdktf.stringToTerraform(struct!.customPath),
    custom_query_string: cdktf.stringToTerraform(struct!.customQueryString),
    redirect_protocol: cdktf.stringToTerraform(struct!.redirectProtocol),
    redirect_type: cdktf.stringToTerraform(struct!.redirectType),
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
  readonly forwardingConfiguration?: FrontdoorRoutingRuleForwardingConfiguration[];
  /**
  * redirect_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html#redirect_configuration Frontdoor#redirect_configuration}
  */
  readonly redirectConfiguration?: FrontdoorRoutingRuleRedirectConfiguration[];
}

function frontdoorRoutingRuleToTerraform(struct?: FrontdoorRoutingRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    accepted_protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct!.acceptedProtocols),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    frontend_endpoints: cdktf.listMapper(cdktf.stringToTerraform)(struct!.frontendEndpoints),
    name: cdktf.stringToTerraform(struct!.name),
    patterns_to_match: cdktf.listMapper(cdktf.stringToTerraform)(struct!.patternsToMatch),
    forwarding_configuration: cdktf.listMapper(frontdoorRoutingRuleForwardingConfigurationToTerraform)(struct!.forwardingConfiguration),
    redirect_configuration: cdktf.listMapper(frontdoorRoutingRuleRedirectConfigurationToTerraform)(struct!.redirectConfiguration),
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

function frontdoorTimeoutsToTerraform(struct?: FrontdoorTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
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
  private _backendPoolsSendReceiveTimeoutSeconds?: number;
  public get backendPoolsSendReceiveTimeoutSeconds() {
    return this.getNumberAttribute('backend_pools_send_receive_timeout_seconds');
  }
  public set backendPoolsSendReceiveTimeoutSeconds(value: number ) {
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
  private _enforceBackendPoolsCertificateNameCheck: boolean | cdktf.IResolvable;
  public get enforceBackendPoolsCertificateNameCheck() {
    return this.getBooleanAttribute('enforce_backend_pools_certificate_name_check');
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
  private _friendlyName?: string;
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string ) {
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
  private _loadBalancerEnabled?: boolean | cdktf.IResolvable;
  public get loadBalancerEnabled() {
    return this.getBooleanAttribute('load_balancer_enabled');
  }
  public set loadBalancerEnabled(value: boolean | cdktf.IResolvable ) {
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
  private _location?: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
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

  // routing_rules - computed: true, optional: false, required: false
  public routingRules(key: string): string {
    return new cdktf.StringMap(this, 'routing_rules').lookup(key);
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
  private _backendPool: FrontdoorBackendPool[];
  public get backendPool() {
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
  private _backendPoolHealthProbe: FrontdoorBackendPoolHealthProbe[];
  public get backendPoolHealthProbe() {
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
  private _backendPoolLoadBalancing: FrontdoorBackendPoolLoadBalancing[];
  public get backendPoolLoadBalancing() {
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
  private _frontendEndpoint: FrontdoorFrontendEndpoint[];
  public get frontendEndpoint() {
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
  private _routingRule: FrontdoorRoutingRule[];
  public get routingRule() {
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
  private _timeouts?: FrontdoorTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: FrontdoorTimeouts ) {
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
