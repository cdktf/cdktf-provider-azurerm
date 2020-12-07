// https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FrontdoorConfig extends cdktf.TerraformMetaArguments {
  readonly backendPoolsSendReceiveTimeoutSeconds?: number;
  readonly enforceBackendPoolsCertificateNameCheck: boolean;
  readonly friendlyName?: string;
  readonly loadBalancerEnabled?: boolean;
  readonly location?: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** backend_pool block */
  readonly backendPool: FrontdoorBackendPool[];
  /** backend_pool_health_probe block */
  readonly backendPoolHealthProbe: FrontdoorBackendPoolHealthProbe[];
  /** backend_pool_load_balancing block */
  readonly backendPoolLoadBalancing: FrontdoorBackendPoolLoadBalancing[];
  /** frontend_endpoint block */
  readonly frontendEndpoint: FrontdoorFrontendEndpoint[];
  /** routing_rule block */
  readonly routingRule: FrontdoorRoutingRule[];
  /** timeouts block */
  readonly timeouts?: FrontdoorTimeouts;
}
export interface FrontdoorBackendPoolBackend {
  readonly address: string;
  readonly enabled?: boolean;
  readonly hostHeader: string;
  readonly httpPort: number;
  readonly httpsPort: number;
  readonly priority?: number;
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
  readonly healthProbeName: string;
  readonly loadBalancingName: string;
  readonly name: string;
  /** backend block */
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
  readonly enabled?: boolean;
  readonly intervalInSeconds?: number;
  readonly name: string;
  readonly path?: string;
  readonly probeMethod?: string;
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
  readonly additionalLatencyMilliseconds?: number;
  readonly name: string;
  readonly sampleSize?: number;
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

export interface FrontdoorFrontendEndpointCustomHttpsConfiguration {
  readonly azureKeyVaultCertificateSecretName?: string;
  readonly azureKeyVaultCertificateSecretVersion?: string;
  readonly azureKeyVaultCertificateVaultId?: string;
  readonly certificateSource?: string;
}

function frontdoorFrontendEndpointCustomHttpsConfigurationToTerraform(struct?: FrontdoorFrontendEndpointCustomHttpsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    azure_key_vault_certificate_secret_name: cdktf.stringToTerraform(struct!.azureKeyVaultCertificateSecretName),
    azure_key_vault_certificate_secret_version: cdktf.stringToTerraform(struct!.azureKeyVaultCertificateSecretVersion),
    azure_key_vault_certificate_vault_id: cdktf.stringToTerraform(struct!.azureKeyVaultCertificateVaultId),
    certificate_source: cdktf.stringToTerraform(struct!.certificateSource),
  }
}

export interface FrontdoorFrontendEndpoint {
  readonly customHttpsProvisioningEnabled?: boolean;
  readonly hostName: string;
  readonly name: string;
  readonly sessionAffinityEnabled?: boolean;
  readonly sessionAffinityTtlSeconds?: number;
  readonly webApplicationFirewallPolicyLinkId?: string;
  /** custom_https_configuration block */
  readonly customHttpsConfiguration?: FrontdoorFrontendEndpointCustomHttpsConfiguration[];
}

function frontdoorFrontendEndpointToTerraform(struct?: FrontdoorFrontendEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_https_provisioning_enabled: cdktf.booleanToTerraform(struct!.customHttpsProvisioningEnabled),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    name: cdktf.stringToTerraform(struct!.name),
    session_affinity_enabled: cdktf.booleanToTerraform(struct!.sessionAffinityEnabled),
    session_affinity_ttl_seconds: cdktf.numberToTerraform(struct!.sessionAffinityTtlSeconds),
    web_application_firewall_policy_link_id: cdktf.stringToTerraform(struct!.webApplicationFirewallPolicyLinkId),
    custom_https_configuration: cdktf.listMapper(frontdoorFrontendEndpointCustomHttpsConfigurationToTerraform)(struct!.customHttpsConfiguration),
  }
}

export interface FrontdoorRoutingRuleForwardingConfiguration {
  readonly backendPoolName: string;
  readonly cacheEnabled?: boolean;
  readonly cacheQueryParameterStripDirective?: string;
  readonly cacheUseDynamicCompression?: boolean;
  readonly customForwardingPath?: string;
  readonly forwardingProtocol?: string;
}

function frontdoorRoutingRuleForwardingConfigurationToTerraform(struct?: FrontdoorRoutingRuleForwardingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backend_pool_name: cdktf.stringToTerraform(struct!.backendPoolName),
    cache_enabled: cdktf.booleanToTerraform(struct!.cacheEnabled),
    cache_query_parameter_strip_directive: cdktf.stringToTerraform(struct!.cacheQueryParameterStripDirective),
    cache_use_dynamic_compression: cdktf.booleanToTerraform(struct!.cacheUseDynamicCompression),
    custom_forwarding_path: cdktf.stringToTerraform(struct!.customForwardingPath),
    forwarding_protocol: cdktf.stringToTerraform(struct!.forwardingProtocol),
  }
}

export interface FrontdoorRoutingRuleRedirectConfiguration {
  readonly customFragment?: string;
  readonly customHost?: string;
  readonly customPath?: string;
  readonly customQueryString?: string;
  readonly redirectProtocol: string;
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
  readonly acceptedProtocols: string[];
  readonly enabled?: boolean;
  readonly frontendEndpoints: string[];
  readonly name: string;
  readonly patternsToMatch: string[];
  /** forwarding_configuration block */
  readonly forwardingConfiguration?: FrontdoorRoutingRuleForwardingConfiguration[];
  /** redirect_configuration block */
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
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
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


// Resource

export class Frontdoor extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _enforceBackendPoolsCertificateNameCheck: boolean;
  public get enforceBackendPoolsCertificateNameCheck() {
    return this.getBooleanAttribute('enforce_backend_pools_certificate_name_check');
  }
  public set enforceBackendPoolsCertificateNameCheck(value: boolean) {
    this._enforceBackendPoolsCertificateNameCheck = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceBackendPoolsCertificateNameCheckInput() {
    return this._enforceBackendPoolsCertificateNameCheck
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

  // header_frontdoor_id - computed: true, optional: false, required: false
  public get headerFrontdoorId() {
    return this.getStringAttribute('header_frontdoor_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balancer_enabled - computed: false, optional: true, required: false
  private _loadBalancerEnabled?: boolean;
  public get loadBalancerEnabled() {
    return this.getBooleanAttribute('load_balancer_enabled');
  }
  public set loadBalancerEnabled(value: boolean ) {
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
