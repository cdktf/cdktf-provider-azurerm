// https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApplicationGatewayConfig extends TerraformMetaArguments {
  readonly enableHttp2?: boolean;
  readonly firewallPolicyId?: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly zones?: string[];
  /** authentication_certificate block */
  readonly authenticationCertificate?: ApplicationGatewayAuthenticationCertificate[];
  /** autoscale_configuration block */
  readonly autoscaleConfiguration?: ApplicationGatewayAutoscaleConfiguration[];
  /** backend_address_pool block */
  readonly backendAddressPool: ApplicationGatewayBackendAddressPool[];
  /** backend_http_settings block */
  readonly backendHttpSettings: ApplicationGatewayBackendHttpSettings[];
  /** custom_error_configuration block */
  readonly customErrorConfiguration?: ApplicationGatewayCustomErrorConfiguration[];
  /** frontend_ip_configuration block */
  readonly frontendIpConfiguration: ApplicationGatewayFrontendIpConfiguration[];
  /** frontend_port block */
  readonly frontendPort: ApplicationGatewayFrontendPort[];
  /** gateway_ip_configuration block */
  readonly gatewayIpConfiguration: ApplicationGatewayGatewayIpConfiguration[];
  /** http_listener block */
  readonly httpListener: ApplicationGatewayHttpListener[];
  /** identity block */
  readonly identity?: ApplicationGatewayIdentity[];
  /** probe block */
  readonly probe?: ApplicationGatewayProbe[];
  /** redirect_configuration block */
  readonly redirectConfiguration?: ApplicationGatewayRedirectConfiguration[];
  /** request_routing_rule block */
  readonly requestRoutingRule: ApplicationGatewayRequestRoutingRule[];
  /** rewrite_rule_set block */
  readonly rewriteRuleSet?: ApplicationGatewayRewriteRuleSet[];
  /** sku block */
  readonly sku: ApplicationGatewaySku[];
  /** ssl_certificate block */
  readonly sslCertificate?: ApplicationGatewaySslCertificate[];
  /** ssl_policy block */
  readonly sslPolicy?: ApplicationGatewaySslPolicy[];
  /** timeouts block */
  readonly timeouts?: ApplicationGatewayTimeouts;
  /** trusted_root_certificate block */
  readonly trustedRootCertificate?: ApplicationGatewayTrustedRootCertificate[];
  /** url_path_map block */
  readonly urlPathMap?: ApplicationGatewayUrlPathMap[];
  /** waf_configuration block */
  readonly wafConfiguration?: ApplicationGatewayWafConfiguration[];
}
export interface ApplicationGatewayAuthenticationCertificate {
  readonly data: string;
  readonly name: string;
}
export interface ApplicationGatewayAutoscaleConfiguration {
  readonly maxCapacity?: number;
  readonly minCapacity: number;
}
export interface ApplicationGatewayBackendAddressPool {
  readonly fqdns?: string[];
  readonly ipAddresses?: string[];
  readonly name: string;
}
export interface ApplicationGatewayBackendHttpSettingsAuthenticationCertificate {
  readonly name: string;
}
export interface ApplicationGatewayBackendHttpSettingsConnectionDraining {
  readonly drainTimeoutSec: number;
  readonly enabled: boolean;
}
export interface ApplicationGatewayBackendHttpSettings {
  readonly affinityCookieName?: string;
  readonly cookieBasedAffinity: string;
  readonly hostName?: string;
  readonly name: string;
  readonly path?: string;
  readonly pickHostNameFromBackendAddress?: boolean;
  readonly port: number;
  readonly probeName?: string;
  readonly protocol: string;
  readonly requestTimeout?: number;
  readonly trustedRootCertificateNames?: string[];
  /** authentication_certificate block */
  readonly authenticationCertificate?: ApplicationGatewayBackendHttpSettingsAuthenticationCertificate[];
  /** connection_draining block */
  readonly connectionDraining?: ApplicationGatewayBackendHttpSettingsConnectionDraining[];
}
export interface ApplicationGatewayCustomErrorConfiguration {
  readonly customErrorPageUrl: string;
  readonly statusCode: string;
}
export interface ApplicationGatewayFrontendIpConfiguration {
  readonly name: string;
  readonly privateIpAddress?: string;
  readonly privateIpAddressAllocation?: string;
  readonly publicIpAddressId?: string;
  readonly subnetId?: string;
}
export interface ApplicationGatewayFrontendPort {
  readonly name: string;
  readonly port: number;
}
export interface ApplicationGatewayGatewayIpConfiguration {
  readonly name: string;
  readonly subnetId: string;
}
export interface ApplicationGatewayHttpListenerCustomErrorConfiguration {
  readonly customErrorPageUrl: string;
  readonly statusCode: string;
}
export interface ApplicationGatewayHttpListener {
  readonly firewallPolicyId?: string;
  readonly frontendIpConfigurationName: string;
  readonly frontendPortName: string;
  readonly hostName?: string;
  readonly hostNames?: string[];
  readonly name: string;
  readonly protocol: string;
  readonly requireSni?: boolean;
  readonly sslCertificateName?: string;
  /** custom_error_configuration block */
  readonly customErrorConfiguration?: ApplicationGatewayHttpListenerCustomErrorConfiguration[];
}
export interface ApplicationGatewayIdentity {
  readonly identityIds: string[];
  readonly type?: string;
}
export interface ApplicationGatewayProbeMatch {
  readonly body?: string;
  readonly statusCode?: string[];
}
export interface ApplicationGatewayProbe {
  readonly host?: string;
  readonly interval: number;
  readonly minimumServers?: number;
  readonly name: string;
  readonly path: string;
  readonly pickHostNameFromBackendHttpSettings?: boolean;
  readonly port?: number;
  readonly protocol: string;
  readonly timeout: number;
  readonly unhealthyThreshold: number;
  /** match block */
  readonly match?: ApplicationGatewayProbeMatch[];
}
export interface ApplicationGatewayRedirectConfiguration {
  readonly includePath?: boolean;
  readonly includeQueryString?: boolean;
  readonly name: string;
  readonly redirectType: string;
  readonly targetListenerName?: string;
  readonly targetUrl?: string;
}
export interface ApplicationGatewayRequestRoutingRule {
  readonly backendAddressPoolName?: string;
  readonly backendHttpSettingsName?: string;
  readonly httpListenerName: string;
  readonly name: string;
  readonly redirectConfigurationName?: string;
  readonly rewriteRuleSetName?: string;
  readonly ruleType: string;
  readonly urlPathMapName?: string;
}
export interface ApplicationGatewayRewriteRuleSetRewriteRuleCondition {
  readonly ignoreCase?: boolean;
  readonly negate?: boolean;
  readonly pattern: string;
  readonly variable: string;
}
export interface ApplicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfiguration {
  readonly headerName: string;
  readonly headerValue: string;
}
export interface ApplicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfiguration {
  readonly headerName: string;
  readonly headerValue: string;
}
export interface ApplicationGatewayRewriteRuleSetRewriteRule {
  readonly name: string;
  readonly ruleSequence: number;
  /** condition block */
  readonly condition?: ApplicationGatewayRewriteRuleSetRewriteRuleCondition[];
  /** request_header_configuration block */
  readonly requestHeaderConfiguration?: ApplicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfiguration[];
  /** response_header_configuration block */
  readonly responseHeaderConfiguration?: ApplicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfiguration[];
}
export interface ApplicationGatewayRewriteRuleSet {
  readonly name: string;
  /** rewrite_rule block */
  readonly rewriteRule?: ApplicationGatewayRewriteRuleSetRewriteRule[];
}
export interface ApplicationGatewaySku {
  readonly capacity?: number;
  readonly name: string;
  readonly tier: string;
}
export interface ApplicationGatewaySslCertificate {
  readonly data?: string;
  readonly keyVaultSecretId?: string;
  readonly name: string;
  readonly password?: string;
}
export interface ApplicationGatewaySslPolicy {
  readonly cipherSuites?: string[];
  readonly disabledProtocols?: string[];
  readonly minProtocolVersion?: string;
  readonly policyName?: string;
  readonly policyType?: string;
}
export interface ApplicationGatewayTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}
export interface ApplicationGatewayTrustedRootCertificate {
  readonly data: string;
  readonly name: string;
}
export interface ApplicationGatewayUrlPathMapPathRule {
  readonly backendAddressPoolName?: string;
  readonly backendHttpSettingsName?: string;
  readonly name: string;
  readonly paths: string[];
  readonly redirectConfigurationName?: string;
  readonly rewriteRuleSetName?: string;
}
export interface ApplicationGatewayUrlPathMap {
  readonly defaultBackendAddressPoolName?: string;
  readonly defaultBackendHttpSettingsName?: string;
  readonly defaultRedirectConfigurationName?: string;
  readonly defaultRewriteRuleSetName?: string;
  readonly name: string;
  /** path_rule block */
  readonly pathRule: ApplicationGatewayUrlPathMapPathRule[];
}
export interface ApplicationGatewayWafConfigurationDisabledRuleGroup {
  readonly ruleGroupName: string;
  readonly rules?: number[];
}
export interface ApplicationGatewayWafConfigurationExclusion {
  readonly matchVariable: string;
  readonly selector?: string;
  readonly selectorMatchOperator?: string;
}
export interface ApplicationGatewayWafConfiguration {
  readonly enabled: boolean;
  readonly fileUploadLimitMb?: number;
  readonly firewallMode: string;
  readonly maxRequestBodySizeKb?: number;
  readonly requestBodyCheck?: boolean;
  readonly ruleSetType?: string;
  readonly ruleSetVersion: string;
  /** disabled_rule_group block */
  readonly disabledRuleGroup?: ApplicationGatewayWafConfigurationDisabledRuleGroup[];
  /** exclusion block */
  readonly exclusion?: ApplicationGatewayWafConfigurationExclusion[];
}

// Resource

export class ApplicationGateway extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApplicationGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_application_gateway',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enableHttp2 = config.enableHttp2;
    this._firewallPolicyId = config.firewallPolicyId;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._zones = config.zones;
    this._authenticationCertificate = config.authenticationCertificate;
    this._autoscaleConfiguration = config.autoscaleConfiguration;
    this._backendAddressPool = config.backendAddressPool;
    this._backendHttpSettings = config.backendHttpSettings;
    this._customErrorConfiguration = config.customErrorConfiguration;
    this._frontendIpConfiguration = config.frontendIpConfiguration;
    this._frontendPort = config.frontendPort;
    this._gatewayIpConfiguration = config.gatewayIpConfiguration;
    this._httpListener = config.httpListener;
    this._identity = config.identity;
    this._probe = config.probe;
    this._redirectConfiguration = config.redirectConfiguration;
    this._requestRoutingRule = config.requestRoutingRule;
    this._rewriteRuleSet = config.rewriteRuleSet;
    this._sku = config.sku;
    this._sslCertificate = config.sslCertificate;
    this._sslPolicy = config.sslPolicy;
    this._timeouts = config.timeouts;
    this._trustedRootCertificate = config.trustedRootCertificate;
    this._urlPathMap = config.urlPathMap;
    this._wafConfiguration = config.wafConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_http2 - computed: false, optional: true, required: false
  private _enableHttp2?: boolean;
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2');
  }
  public set enableHttp2(value: boolean ) {
    this._enableHttp2 = value;
  }
  public resetEnableHttp2() {
    this._enableHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttp2Input() {
    return this._enableHttp2
  }

  // firewall_policy_id - computed: false, optional: true, required: false
  private _firewallPolicyId?: string;
  public get firewallPolicyId() {
    return this.getStringAttribute('firewall_policy_id');
  }
  public set firewallPolicyId(value: string ) {
    this._firewallPolicyId = value;
  }
  public resetFirewallPolicyId() {
    this._firewallPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyIdInput() {
    return this._firewallPolicyId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // zones - computed: false, optional: true, required: false
  private _zones?: string[];
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[] ) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones
  }

  // authentication_certificate - computed: false, optional: true, required: false
  private _authenticationCertificate?: ApplicationGatewayAuthenticationCertificate[];
  public get authenticationCertificate() {
    return this.interpolationForAttribute('authentication_certificate') as any;
  }
  public set authenticationCertificate(value: ApplicationGatewayAuthenticationCertificate[] ) {
    this._authenticationCertificate = value;
  }
  public resetAuthenticationCertificate() {
    this._authenticationCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationCertificateInput() {
    return this._authenticationCertificate
  }

  // autoscale_configuration - computed: false, optional: true, required: false
  private _autoscaleConfiguration?: ApplicationGatewayAutoscaleConfiguration[];
  public get autoscaleConfiguration() {
    return this.interpolationForAttribute('autoscale_configuration') as any;
  }
  public set autoscaleConfiguration(value: ApplicationGatewayAutoscaleConfiguration[] ) {
    this._autoscaleConfiguration = value;
  }
  public resetAutoscaleConfiguration() {
    this._autoscaleConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleConfigurationInput() {
    return this._autoscaleConfiguration
  }

  // backend_address_pool - computed: false, optional: false, required: true
  private _backendAddressPool: ApplicationGatewayBackendAddressPool[];
  public get backendAddressPool() {
    return this.interpolationForAttribute('backend_address_pool') as any;
  }
  public set backendAddressPool(value: ApplicationGatewayBackendAddressPool[]) {
    this._backendAddressPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendAddressPoolInput() {
    return this._backendAddressPool
  }

  // backend_http_settings - computed: false, optional: false, required: true
  private _backendHttpSettings: ApplicationGatewayBackendHttpSettings[];
  public get backendHttpSettings() {
    return this.interpolationForAttribute('backend_http_settings') as any;
  }
  public set backendHttpSettings(value: ApplicationGatewayBackendHttpSettings[]) {
    this._backendHttpSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendHttpSettingsInput() {
    return this._backendHttpSettings
  }

  // custom_error_configuration - computed: false, optional: true, required: false
  private _customErrorConfiguration?: ApplicationGatewayCustomErrorConfiguration[];
  public get customErrorConfiguration() {
    return this.interpolationForAttribute('custom_error_configuration') as any;
  }
  public set customErrorConfiguration(value: ApplicationGatewayCustomErrorConfiguration[] ) {
    this._customErrorConfiguration = value;
  }
  public resetCustomErrorConfiguration() {
    this._customErrorConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customErrorConfigurationInput() {
    return this._customErrorConfiguration
  }

  // frontend_ip_configuration - computed: false, optional: false, required: true
  private _frontendIpConfiguration: ApplicationGatewayFrontendIpConfiguration[];
  public get frontendIpConfiguration() {
    return this.interpolationForAttribute('frontend_ip_configuration') as any;
  }
  public set frontendIpConfiguration(value: ApplicationGatewayFrontendIpConfiguration[]) {
    this._frontendIpConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendIpConfigurationInput() {
    return this._frontendIpConfiguration
  }

  // frontend_port - computed: false, optional: false, required: true
  private _frontendPort: ApplicationGatewayFrontendPort[];
  public get frontendPort() {
    return this.interpolationForAttribute('frontend_port') as any;
  }
  public set frontendPort(value: ApplicationGatewayFrontendPort[]) {
    this._frontendPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendPortInput() {
    return this._frontendPort
  }

  // gateway_ip_configuration - computed: false, optional: false, required: true
  private _gatewayIpConfiguration: ApplicationGatewayGatewayIpConfiguration[];
  public get gatewayIpConfiguration() {
    return this.interpolationForAttribute('gateway_ip_configuration') as any;
  }
  public set gatewayIpConfiguration(value: ApplicationGatewayGatewayIpConfiguration[]) {
    this._gatewayIpConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpConfigurationInput() {
    return this._gatewayIpConfiguration
  }

  // http_listener - computed: false, optional: false, required: true
  private _httpListener: ApplicationGatewayHttpListener[];
  public get httpListener() {
    return this.interpolationForAttribute('http_listener') as any;
  }
  public set httpListener(value: ApplicationGatewayHttpListener[]) {
    this._httpListener = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpListenerInput() {
    return this._httpListener
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: ApplicationGatewayIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: ApplicationGatewayIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // probe - computed: false, optional: true, required: false
  private _probe?: ApplicationGatewayProbe[];
  public get probe() {
    return this.interpolationForAttribute('probe') as any;
  }
  public set probe(value: ApplicationGatewayProbe[] ) {
    this._probe = value;
  }
  public resetProbe() {
    this._probe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeInput() {
    return this._probe
  }

  // redirect_configuration - computed: false, optional: true, required: false
  private _redirectConfiguration?: ApplicationGatewayRedirectConfiguration[];
  public get redirectConfiguration() {
    return this.interpolationForAttribute('redirect_configuration') as any;
  }
  public set redirectConfiguration(value: ApplicationGatewayRedirectConfiguration[] ) {
    this._redirectConfiguration = value;
  }
  public resetRedirectConfiguration() {
    this._redirectConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectConfigurationInput() {
    return this._redirectConfiguration
  }

  // request_routing_rule - computed: false, optional: false, required: true
  private _requestRoutingRule: ApplicationGatewayRequestRoutingRule[];
  public get requestRoutingRule() {
    return this.interpolationForAttribute('request_routing_rule') as any;
  }
  public set requestRoutingRule(value: ApplicationGatewayRequestRoutingRule[]) {
    this._requestRoutingRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestRoutingRuleInput() {
    return this._requestRoutingRule
  }

  // rewrite_rule_set - computed: false, optional: true, required: false
  private _rewriteRuleSet?: ApplicationGatewayRewriteRuleSet[];
  public get rewriteRuleSet() {
    return this.interpolationForAttribute('rewrite_rule_set') as any;
  }
  public set rewriteRuleSet(value: ApplicationGatewayRewriteRuleSet[] ) {
    this._rewriteRuleSet = value;
  }
  public resetRewriteRuleSet() {
    this._rewriteRuleSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteRuleSetInput() {
    return this._rewriteRuleSet
  }

  // sku - computed: false, optional: false, required: true
  private _sku: ApplicationGatewaySku[];
  public get sku() {
    return this.interpolationForAttribute('sku') as any;
  }
  public set sku(value: ApplicationGatewaySku[]) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }

  // ssl_certificate - computed: false, optional: true, required: false
  private _sslCertificate?: ApplicationGatewaySslCertificate[];
  public get sslCertificate() {
    return this.interpolationForAttribute('ssl_certificate') as any;
  }
  public set sslCertificate(value: ApplicationGatewaySslCertificate[] ) {
    this._sslCertificate = value;
  }
  public resetSslCertificate() {
    this._sslCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate
  }

  // ssl_policy - computed: false, optional: true, required: false
  private _sslPolicy?: ApplicationGatewaySslPolicy[];
  public get sslPolicy() {
    return this.interpolationForAttribute('ssl_policy') as any;
  }
  public set sslPolicy(value: ApplicationGatewaySslPolicy[] ) {
    this._sslPolicy = value;
  }
  public resetSslPolicy() {
    this._sslPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPolicyInput() {
    return this._sslPolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApplicationGatewayTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApplicationGatewayTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // trusted_root_certificate - computed: false, optional: true, required: false
  private _trustedRootCertificate?: ApplicationGatewayTrustedRootCertificate[];
  public get trustedRootCertificate() {
    return this.interpolationForAttribute('trusted_root_certificate') as any;
  }
  public set trustedRootCertificate(value: ApplicationGatewayTrustedRootCertificate[] ) {
    this._trustedRootCertificate = value;
  }
  public resetTrustedRootCertificate() {
    this._trustedRootCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedRootCertificateInput() {
    return this._trustedRootCertificate
  }

  // url_path_map - computed: false, optional: true, required: false
  private _urlPathMap?: ApplicationGatewayUrlPathMap[];
  public get urlPathMap() {
    return this.interpolationForAttribute('url_path_map') as any;
  }
  public set urlPathMap(value: ApplicationGatewayUrlPathMap[] ) {
    this._urlPathMap = value;
  }
  public resetUrlPathMap() {
    this._urlPathMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathMapInput() {
    return this._urlPathMap
  }

  // waf_configuration - computed: false, optional: true, required: false
  private _wafConfiguration?: ApplicationGatewayWafConfiguration[];
  public get wafConfiguration() {
    return this.interpolationForAttribute('waf_configuration') as any;
  }
  public set wafConfiguration(value: ApplicationGatewayWafConfiguration[] ) {
    this._wafConfiguration = value;
  }
  public resetWafConfiguration() {
    this._wafConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafConfigurationInput() {
    return this._wafConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_http2: this._enableHttp2,
      firewall_policy_id: this._firewallPolicyId,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      zones: this._zones,
      authentication_certificate: this._authenticationCertificate,
      autoscale_configuration: this._autoscaleConfiguration,
      backend_address_pool: this._backendAddressPool,
      backend_http_settings: this._backendHttpSettings,
      custom_error_configuration: this._customErrorConfiguration,
      frontend_ip_configuration: this._frontendIpConfiguration,
      frontend_port: this._frontendPort,
      gateway_ip_configuration: this._gatewayIpConfiguration,
      http_listener: this._httpListener,
      identity: this._identity,
      probe: this._probe,
      redirect_configuration: this._redirectConfiguration,
      request_routing_rule: this._requestRoutingRule,
      rewrite_rule_set: this._rewriteRuleSet,
      sku: this._sku,
      ssl_certificate: this._sslCertificate,
      ssl_policy: this._sslPolicy,
      timeouts: this._timeouts,
      trusted_root_certificate: this._trustedRootCertificate,
      url_path_map: this._urlPathMap,
      waf_configuration: this._wafConfiguration,
    };
  }
}
