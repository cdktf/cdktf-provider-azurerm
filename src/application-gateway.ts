// https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationGatewayConfig extends cdktf.TerraformMetaArguments {
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

function applicationGatewayAuthenticationCertificateToTerraform(struct?: ApplicationGatewayAuthenticationCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface ApplicationGatewayAutoscaleConfiguration {
  readonly maxCapacity?: number;
  readonly minCapacity: number;
}

function applicationGatewayAutoscaleConfigurationToTerraform(struct?: ApplicationGatewayAutoscaleConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
  }
}

export interface ApplicationGatewayBackendAddressPool {
  readonly fqdns?: string[];
  readonly ipAddresses?: string[];
  readonly name: string;
}

function applicationGatewayBackendAddressPoolToTerraform(struct?: ApplicationGatewayBackendAddressPool): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fqdns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fqdns),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipAddresses),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface ApplicationGatewayBackendHttpSettingsAuthenticationCertificate {
  readonly name: string;
}

function applicationGatewayBackendHttpSettingsAuthenticationCertificateToTerraform(struct?: ApplicationGatewayBackendHttpSettingsAuthenticationCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface ApplicationGatewayBackendHttpSettingsConnectionDraining {
  readonly drainTimeoutSec: number;
  readonly enabled: boolean;
}

function applicationGatewayBackendHttpSettingsConnectionDrainingToTerraform(struct?: ApplicationGatewayBackendHttpSettingsConnectionDraining): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    drain_timeout_sec: cdktf.numberToTerraform(struct!.drainTimeoutSec),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
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

function applicationGatewayBackendHttpSettingsToTerraform(struct?: ApplicationGatewayBackendHttpSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    affinity_cookie_name: cdktf.stringToTerraform(struct!.affinityCookieName),
    cookie_based_affinity: cdktf.stringToTerraform(struct!.cookieBasedAffinity),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    pick_host_name_from_backend_address: cdktf.booleanToTerraform(struct!.pickHostNameFromBackendAddress),
    port: cdktf.numberToTerraform(struct!.port),
    probe_name: cdktf.stringToTerraform(struct!.probeName),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    request_timeout: cdktf.numberToTerraform(struct!.requestTimeout),
    trusted_root_certificate_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.trustedRootCertificateNames),
    authentication_certificate: cdktf.listMapper(applicationGatewayBackendHttpSettingsAuthenticationCertificateToTerraform)(struct!.authenticationCertificate),
    connection_draining: cdktf.listMapper(applicationGatewayBackendHttpSettingsConnectionDrainingToTerraform)(struct!.connectionDraining),
  }
}

export interface ApplicationGatewayCustomErrorConfiguration {
  readonly customErrorPageUrl: string;
  readonly statusCode: string;
}

function applicationGatewayCustomErrorConfigurationToTerraform(struct?: ApplicationGatewayCustomErrorConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_error_page_url: cdktf.stringToTerraform(struct!.customErrorPageUrl),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
  }
}

export interface ApplicationGatewayFrontendIpConfiguration {
  readonly name: string;
  readonly privateIpAddress?: string;
  readonly privateIpAddressAllocation?: string;
  readonly publicIpAddressId?: string;
  readonly subnetId?: string;
}

function applicationGatewayFrontendIpConfigurationToTerraform(struct?: ApplicationGatewayFrontendIpConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    private_ip_address: cdktf.stringToTerraform(struct!.privateIpAddress),
    private_ip_address_allocation: cdktf.stringToTerraform(struct!.privateIpAddressAllocation),
    public_ip_address_id: cdktf.stringToTerraform(struct!.publicIpAddressId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface ApplicationGatewayFrontendPort {
  readonly name: string;
  readonly port: number;
}

function applicationGatewayFrontendPortToTerraform(struct?: ApplicationGatewayFrontendPort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export interface ApplicationGatewayGatewayIpConfiguration {
  readonly name: string;
  readonly subnetId: string;
}

function applicationGatewayGatewayIpConfigurationToTerraform(struct?: ApplicationGatewayGatewayIpConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface ApplicationGatewayHttpListenerCustomErrorConfiguration {
  readonly customErrorPageUrl: string;
  readonly statusCode: string;
}

function applicationGatewayHttpListenerCustomErrorConfigurationToTerraform(struct?: ApplicationGatewayHttpListenerCustomErrorConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_error_page_url: cdktf.stringToTerraform(struct!.customErrorPageUrl),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
  }
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

function applicationGatewayHttpListenerToTerraform(struct?: ApplicationGatewayHttpListener): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    firewall_policy_id: cdktf.stringToTerraform(struct!.firewallPolicyId),
    frontend_ip_configuration_name: cdktf.stringToTerraform(struct!.frontendIpConfigurationName),
    frontend_port_name: cdktf.stringToTerraform(struct!.frontendPortName),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    host_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.hostNames),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    require_sni: cdktf.booleanToTerraform(struct!.requireSni),
    ssl_certificate_name: cdktf.stringToTerraform(struct!.sslCertificateName),
    custom_error_configuration: cdktf.listMapper(applicationGatewayHttpListenerCustomErrorConfigurationToTerraform)(struct!.customErrorConfiguration),
  }
}

export interface ApplicationGatewayIdentity {
  readonly identityIds: string[];
  readonly type?: string;
}

function applicationGatewayIdentityToTerraform(struct?: ApplicationGatewayIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ApplicationGatewayProbeMatch {
  readonly body?: string;
  readonly statusCode?: string[];
}

function applicationGatewayProbeMatchToTerraform(struct?: ApplicationGatewayProbeMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    status_code: cdktf.listMapper(cdktf.stringToTerraform)(struct!.statusCode),
  }
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

function applicationGatewayProbeToTerraform(struct?: ApplicationGatewayProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    interval: cdktf.numberToTerraform(struct!.interval),
    minimum_servers: cdktf.numberToTerraform(struct!.minimumServers),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    pick_host_name_from_backend_http_settings: cdktf.booleanToTerraform(struct!.pickHostNameFromBackendHttpSettings),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
    match: cdktf.listMapper(applicationGatewayProbeMatchToTerraform)(struct!.match),
  }
}

export interface ApplicationGatewayRedirectConfiguration {
  readonly includePath?: boolean;
  readonly includeQueryString?: boolean;
  readonly name: string;
  readonly redirectType: string;
  readonly targetListenerName?: string;
  readonly targetUrl?: string;
}

function applicationGatewayRedirectConfigurationToTerraform(struct?: ApplicationGatewayRedirectConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    include_path: cdktf.booleanToTerraform(struct!.includePath),
    include_query_string: cdktf.booleanToTerraform(struct!.includeQueryString),
    name: cdktf.stringToTerraform(struct!.name),
    redirect_type: cdktf.stringToTerraform(struct!.redirectType),
    target_listener_name: cdktf.stringToTerraform(struct!.targetListenerName),
    target_url: cdktf.stringToTerraform(struct!.targetUrl),
  }
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

function applicationGatewayRequestRoutingRuleToTerraform(struct?: ApplicationGatewayRequestRoutingRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backend_address_pool_name: cdktf.stringToTerraform(struct!.backendAddressPoolName),
    backend_http_settings_name: cdktf.stringToTerraform(struct!.backendHttpSettingsName),
    http_listener_name: cdktf.stringToTerraform(struct!.httpListenerName),
    name: cdktf.stringToTerraform(struct!.name),
    redirect_configuration_name: cdktf.stringToTerraform(struct!.redirectConfigurationName),
    rewrite_rule_set_name: cdktf.stringToTerraform(struct!.rewriteRuleSetName),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    url_path_map_name: cdktf.stringToTerraform(struct!.urlPathMapName),
  }
}

export interface ApplicationGatewayRewriteRuleSetRewriteRuleCondition {
  readonly ignoreCase?: boolean;
  readonly negate?: boolean;
  readonly pattern: string;
  readonly variable: string;
}

function applicationGatewayRewriteRuleSetRewriteRuleConditionToTerraform(struct?: ApplicationGatewayRewriteRuleSetRewriteRuleCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    negate: cdktf.booleanToTerraform(struct!.negate),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    variable: cdktf.stringToTerraform(struct!.variable),
  }
}

export interface ApplicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfiguration {
  readonly headerName: string;
  readonly headerValue: string;
}

function applicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfigurationToTerraform(struct?: ApplicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
  }
}

export interface ApplicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfiguration {
  readonly headerName: string;
  readonly headerValue: string;
}

function applicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfigurationToTerraform(struct?: ApplicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
  }
}

export interface ApplicationGatewayRewriteRuleSetRewriteRuleUrl {
  readonly path?: string;
  readonly queryString?: string;
  readonly reroute?: boolean;
}

function applicationGatewayRewriteRuleSetRewriteRuleUrlToTerraform(struct?: ApplicationGatewayRewriteRuleSetRewriteRuleUrl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    query_string: cdktf.stringToTerraform(struct!.queryString),
    reroute: cdktf.booleanToTerraform(struct!.reroute),
  }
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
  /** url block */
  readonly url?: ApplicationGatewayRewriteRuleSetRewriteRuleUrl[];
}

function applicationGatewayRewriteRuleSetRewriteRuleToTerraform(struct?: ApplicationGatewayRewriteRuleSetRewriteRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    rule_sequence: cdktf.numberToTerraform(struct!.ruleSequence),
    condition: cdktf.listMapper(applicationGatewayRewriteRuleSetRewriteRuleConditionToTerraform)(struct!.condition),
    request_header_configuration: cdktf.listMapper(applicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfigurationToTerraform)(struct!.requestHeaderConfiguration),
    response_header_configuration: cdktf.listMapper(applicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfigurationToTerraform)(struct!.responseHeaderConfiguration),
    url: cdktf.listMapper(applicationGatewayRewriteRuleSetRewriteRuleUrlToTerraform)(struct!.url),
  }
}

export interface ApplicationGatewayRewriteRuleSet {
  readonly name: string;
  /** rewrite_rule block */
  readonly rewriteRule?: ApplicationGatewayRewriteRuleSetRewriteRule[];
}

function applicationGatewayRewriteRuleSetToTerraform(struct?: ApplicationGatewayRewriteRuleSet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    rewrite_rule: cdktf.listMapper(applicationGatewayRewriteRuleSetRewriteRuleToTerraform)(struct!.rewriteRule),
  }
}

export interface ApplicationGatewaySku {
  readonly capacity?: number;
  readonly name: string;
  readonly tier: string;
}

function applicationGatewaySkuToTerraform(struct?: ApplicationGatewaySku): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    name: cdktf.stringToTerraform(struct!.name),
    tier: cdktf.stringToTerraform(struct!.tier),
  }
}

export interface ApplicationGatewaySslCertificate {
  readonly data?: string;
  readonly keyVaultSecretId?: string;
  readonly name: string;
  readonly password?: string;
}

function applicationGatewaySslCertificateToTerraform(struct?: ApplicationGatewaySslCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    key_vault_secret_id: cdktf.stringToTerraform(struct!.keyVaultSecretId),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
  }
}

export interface ApplicationGatewaySslPolicy {
  readonly cipherSuites?: string[];
  readonly disabledProtocols?: string[];
  readonly minProtocolVersion?: string;
  readonly policyName?: string;
  readonly policyType?: string;
}

function applicationGatewaySslPolicyToTerraform(struct?: ApplicationGatewaySslPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cipherSuites),
    disabled_protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct!.disabledProtocols),
    min_protocol_version: cdktf.stringToTerraform(struct!.minProtocolVersion),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
  }
}

export interface ApplicationGatewayTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function applicationGatewayTimeoutsToTerraform(struct?: ApplicationGatewayTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface ApplicationGatewayTrustedRootCertificate {
  readonly data: string;
  readonly name: string;
}

function applicationGatewayTrustedRootCertificateToTerraform(struct?: ApplicationGatewayTrustedRootCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface ApplicationGatewayUrlPathMapPathRule {
  readonly backendAddressPoolName?: string;
  readonly backendHttpSettingsName?: string;
  readonly name: string;
  readonly paths: string[];
  readonly redirectConfigurationName?: string;
  readonly rewriteRuleSetName?: string;
}

function applicationGatewayUrlPathMapPathRuleToTerraform(struct?: ApplicationGatewayUrlPathMapPathRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backend_address_pool_name: cdktf.stringToTerraform(struct!.backendAddressPoolName),
    backend_http_settings_name: cdktf.stringToTerraform(struct!.backendHttpSettingsName),
    name: cdktf.stringToTerraform(struct!.name),
    paths: cdktf.listMapper(cdktf.stringToTerraform)(struct!.paths),
    redirect_configuration_name: cdktf.stringToTerraform(struct!.redirectConfigurationName),
    rewrite_rule_set_name: cdktf.stringToTerraform(struct!.rewriteRuleSetName),
  }
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

function applicationGatewayUrlPathMapToTerraform(struct?: ApplicationGatewayUrlPathMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_backend_address_pool_name: cdktf.stringToTerraform(struct!.defaultBackendAddressPoolName),
    default_backend_http_settings_name: cdktf.stringToTerraform(struct!.defaultBackendHttpSettingsName),
    default_redirect_configuration_name: cdktf.stringToTerraform(struct!.defaultRedirectConfigurationName),
    default_rewrite_rule_set_name: cdktf.stringToTerraform(struct!.defaultRewriteRuleSetName),
    name: cdktf.stringToTerraform(struct!.name),
    path_rule: cdktf.listMapper(applicationGatewayUrlPathMapPathRuleToTerraform)(struct!.pathRule),
  }
}

export interface ApplicationGatewayWafConfigurationDisabledRuleGroup {
  readonly ruleGroupName: string;
  readonly rules?: number[];
}

function applicationGatewayWafConfigurationDisabledRuleGroupToTerraform(struct?: ApplicationGatewayWafConfigurationDisabledRuleGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    rule_group_name: cdktf.stringToTerraform(struct!.ruleGroupName),
    rules: cdktf.listMapper(cdktf.numberToTerraform)(struct!.rules),
  }
}

export interface ApplicationGatewayWafConfigurationExclusion {
  readonly matchVariable: string;
  readonly selector?: string;
  readonly selectorMatchOperator?: string;
}

function applicationGatewayWafConfigurationExclusionToTerraform(struct?: ApplicationGatewayWafConfigurationExclusion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_variable: cdktf.stringToTerraform(struct!.matchVariable),
    selector: cdktf.stringToTerraform(struct!.selector),
    selector_match_operator: cdktf.stringToTerraform(struct!.selectorMatchOperator),
  }
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

function applicationGatewayWafConfigurationToTerraform(struct?: ApplicationGatewayWafConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    file_upload_limit_mb: cdktf.numberToTerraform(struct!.fileUploadLimitMb),
    firewall_mode: cdktf.stringToTerraform(struct!.firewallMode),
    max_request_body_size_kb: cdktf.numberToTerraform(struct!.maxRequestBodySizeKb),
    request_body_check: cdktf.booleanToTerraform(struct!.requestBodyCheck),
    rule_set_type: cdktf.stringToTerraform(struct!.ruleSetType),
    rule_set_version: cdktf.stringToTerraform(struct!.ruleSetVersion),
    disabled_rule_group: cdktf.listMapper(applicationGatewayWafConfigurationDisabledRuleGroupToTerraform)(struct!.disabledRuleGroup),
    exclusion: cdktf.listMapper(applicationGatewayWafConfigurationExclusionToTerraform)(struct!.exclusion),
  }
}


// Resource

export class ApplicationGateway extends cdktf.TerraformResource {

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
      enable_http2: cdktf.booleanToTerraform(this._enableHttp2),
      firewall_policy_id: cdktf.stringToTerraform(this._firewallPolicyId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      authentication_certificate: cdktf.listMapper(applicationGatewayAuthenticationCertificateToTerraform)(this._authenticationCertificate),
      autoscale_configuration: cdktf.listMapper(applicationGatewayAutoscaleConfigurationToTerraform)(this._autoscaleConfiguration),
      backend_address_pool: cdktf.listMapper(applicationGatewayBackendAddressPoolToTerraform)(this._backendAddressPool),
      backend_http_settings: cdktf.listMapper(applicationGatewayBackendHttpSettingsToTerraform)(this._backendHttpSettings),
      custom_error_configuration: cdktf.listMapper(applicationGatewayCustomErrorConfigurationToTerraform)(this._customErrorConfiguration),
      frontend_ip_configuration: cdktf.listMapper(applicationGatewayFrontendIpConfigurationToTerraform)(this._frontendIpConfiguration),
      frontend_port: cdktf.listMapper(applicationGatewayFrontendPortToTerraform)(this._frontendPort),
      gateway_ip_configuration: cdktf.listMapper(applicationGatewayGatewayIpConfigurationToTerraform)(this._gatewayIpConfiguration),
      http_listener: cdktf.listMapper(applicationGatewayHttpListenerToTerraform)(this._httpListener),
      identity: cdktf.listMapper(applicationGatewayIdentityToTerraform)(this._identity),
      probe: cdktf.listMapper(applicationGatewayProbeToTerraform)(this._probe),
      redirect_configuration: cdktf.listMapper(applicationGatewayRedirectConfigurationToTerraform)(this._redirectConfiguration),
      request_routing_rule: cdktf.listMapper(applicationGatewayRequestRoutingRuleToTerraform)(this._requestRoutingRule),
      rewrite_rule_set: cdktf.listMapper(applicationGatewayRewriteRuleSetToTerraform)(this._rewriteRuleSet),
      sku: cdktf.listMapper(applicationGatewaySkuToTerraform)(this._sku),
      ssl_certificate: cdktf.listMapper(applicationGatewaySslCertificateToTerraform)(this._sslCertificate),
      ssl_policy: cdktf.listMapper(applicationGatewaySslPolicyToTerraform)(this._sslPolicy),
      timeouts: applicationGatewayTimeoutsToTerraform(this._timeouts),
      trusted_root_certificate: cdktf.listMapper(applicationGatewayTrustedRootCertificateToTerraform)(this._trustedRootCertificate),
      url_path_map: cdktf.listMapper(applicationGatewayUrlPathMapToTerraform)(this._urlPathMap),
      waf_configuration: cdktf.listMapper(applicationGatewayWafConfigurationToTerraform)(this._wafConfiguration),
    };
  }
}
