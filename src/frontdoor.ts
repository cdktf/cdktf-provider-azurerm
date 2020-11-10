// https://www.terraform.io/docs/providers/azurerm/r/frontdoor.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface FrontdoorConfig extends TerraformMetaArguments {
  readonly enforceBackendPoolsCertificateNameCheck: boolean;
  readonly friendlyName?: string;
  readonly loadBalancerEnabled?: boolean;
  readonly location: string;
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
export interface FrontdoorBackendPool {
  readonly healthProbeName: string;
  readonly loadBalancingName: string;
  readonly name: string;
  /** backend block */
  readonly backend: FrontdoorBackendPoolBackend[];
}
export interface FrontdoorBackendPoolHealthProbe {
  readonly intervalInSeconds?: number;
  readonly name: string;
  readonly path?: string;
  readonly protocol?: string;
}
export interface FrontdoorBackendPoolLoadBalancing {
  readonly additionalLatencyMilliseconds?: number;
  readonly name: string;
  readonly sampleSize?: number;
  readonly successfulSamplesRequired?: number;
}
export interface FrontdoorFrontendEndpointCustomHttpsConfiguration {
  readonly azureKeyVaultCertificateSecretName?: string;
  readonly azureKeyVaultCertificateSecretVersion?: string;
  readonly azureKeyVaultCertificateVaultId?: string;
  readonly certificateSource?: string;
}
export interface FrontdoorFrontendEndpoint {
  readonly customHttpsProvisioningEnabled: boolean;
  readonly hostName: string;
  readonly name: string;
  readonly sessionAffinityEnabled?: boolean;
  readonly sessionAffinityTtlSeconds?: number;
  readonly webApplicationFirewallPolicyLinkId?: string;
  /** custom_https_configuration block */
  readonly customHttpsConfiguration?: FrontdoorFrontendEndpointCustomHttpsConfiguration[];
}
export interface FrontdoorRoutingRuleForwardingConfiguration {
  readonly backendPoolName: string;
  readonly cacheEnabled?: boolean;
  readonly cacheQueryParameterStripDirective?: string;
  readonly cacheUseDynamicCompression?: boolean;
  readonly customForwardingPath?: string;
  readonly forwardingProtocol?: string;
}
export interface FrontdoorRoutingRuleRedirectConfiguration {
  readonly customFragment?: string;
  readonly customHost?: string;
  readonly customPath?: string;
  readonly customQueryString?: string;
  readonly redirectProtocol: string;
  readonly redirectType: string;
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
export interface FrontdoorTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class Frontdoor extends TerraformResource {

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
      enforce_backend_pools_certificate_name_check: this._enforceBackendPoolsCertificateNameCheck,
      friendly_name: this._friendlyName,
      load_balancer_enabled: this._loadBalancerEnabled,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      backend_pool: this._backendPool,
      backend_pool_health_probe: this._backendPoolHealthProbe,
      backend_pool_load_balancing: this._backendPoolLoadBalancing,
      frontend_endpoint: this._frontendEndpoint,
      routing_rule: this._routingRule,
      timeouts: this._timeouts,
    };
  }
}
