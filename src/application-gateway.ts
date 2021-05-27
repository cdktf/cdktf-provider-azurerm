// https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#enable_http2 ApplicationGateway#enable_http2}
  */
  readonly enableHttp2?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#firewall_policy_id ApplicationGateway#firewall_policy_id}
  */
  readonly firewallPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#location ApplicationGateway#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#resource_group_name ApplicationGateway#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#tags ApplicationGateway#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#zones ApplicationGateway#zones}
  */
  readonly zones?: string[];
  /**
  * authentication_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#authentication_certificate ApplicationGateway#authentication_certificate}
  */
  readonly authenticationCertificate?: ApplicationGatewayAuthenticationCertificate[];
  /**
  * autoscale_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#autoscale_configuration ApplicationGateway#autoscale_configuration}
  */
  readonly autoscaleConfiguration?: ApplicationGatewayAutoscaleConfiguration[];
  /**
  * backend_address_pool block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#backend_address_pool ApplicationGateway#backend_address_pool}
  */
  readonly backendAddressPool: ApplicationGatewayBackendAddressPool[];
  /**
  * backend_http_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#backend_http_settings ApplicationGateway#backend_http_settings}
  */
  readonly backendHttpSettings: ApplicationGatewayBackendHttpSettings[];
  /**
  * custom_error_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#custom_error_configuration ApplicationGateway#custom_error_configuration}
  */
  readonly customErrorConfiguration?: ApplicationGatewayCustomErrorConfiguration[];
  /**
  * frontend_ip_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#frontend_ip_configuration ApplicationGateway#frontend_ip_configuration}
  */
  readonly frontendIpConfiguration: ApplicationGatewayFrontendIpConfiguration[];
  /**
  * frontend_port block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#frontend_port ApplicationGateway#frontend_port}
  */
  readonly frontendPort: ApplicationGatewayFrontendPort[];
  /**
  * gateway_ip_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#gateway_ip_configuration ApplicationGateway#gateway_ip_configuration}
  */
  readonly gatewayIpConfiguration: ApplicationGatewayGatewayIpConfiguration[];
  /**
  * http_listener block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#http_listener ApplicationGateway#http_listener}
  */
  readonly httpListener: ApplicationGatewayHttpListener[];
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#identity ApplicationGateway#identity}
  */
  readonly identity?: ApplicationGatewayIdentity[];
  /**
  * probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#probe ApplicationGateway#probe}
  */
  readonly probe?: ApplicationGatewayProbe[];
  /**
  * redirect_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#redirect_configuration ApplicationGateway#redirect_configuration}
  */
  readonly redirectConfiguration?: ApplicationGatewayRedirectConfiguration[];
  /**
  * request_routing_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#request_routing_rule ApplicationGateway#request_routing_rule}
  */
  readonly requestRoutingRule: ApplicationGatewayRequestRoutingRule[];
  /**
  * rewrite_rule_set block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#rewrite_rule_set ApplicationGateway#rewrite_rule_set}
  */
  readonly rewriteRuleSet?: ApplicationGatewayRewriteRuleSet[];
  /**
  * sku block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#sku ApplicationGateway#sku}
  */
  readonly sku: ApplicationGatewaySku[];
  /**
  * ssl_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#ssl_certificate ApplicationGateway#ssl_certificate}
  */
  readonly sslCertificate?: ApplicationGatewaySslCertificate[];
  /**
  * ssl_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#ssl_policy ApplicationGateway#ssl_policy}
  */
  readonly sslPolicy?: ApplicationGatewaySslPolicy[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#timeouts ApplicationGateway#timeouts}
  */
  readonly timeouts?: ApplicationGatewayTimeouts;
  /**
  * trusted_root_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#trusted_root_certificate ApplicationGateway#trusted_root_certificate}
  */
  readonly trustedRootCertificate?: ApplicationGatewayTrustedRootCertificate[];
  /**
  * url_path_map block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#url_path_map ApplicationGateway#url_path_map}
  */
  readonly urlPathMap?: ApplicationGatewayUrlPathMap[];
  /**
  * waf_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#waf_configuration ApplicationGateway#waf_configuration}
  */
  readonly wafConfiguration?: ApplicationGatewayWafConfiguration[];
}
export interface ApplicationGatewayAuthenticationCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#data ApplicationGateway#data}
  */
  readonly data: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#name ApplicationGateway#name}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#max_capacity ApplicationGateway#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#min_capacity ApplicationGateway#min_capacity}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#fqdns ApplicationGateway#fqdns}
  */
  readonly fqdns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#ip_addresses ApplicationGateway#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#name ApplicationGateway#name}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#name ApplicationGateway#name}
  */
  readonly name: string;
}

function applicationGatewayBackendHttpSettingsAuthenticationCertificateToTerraform(struct?: ApplicationGatewayBackendHttpSettingsAuthenticationCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface ApplicationGatewayBackendHttpSettingsConnectionDraining {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#drain_timeout_sec ApplicationGateway#drain_timeout_sec}
  */
  readonly drainTimeoutSec: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#enabled ApplicationGateway#enabled}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#affinity_cookie_name ApplicationGateway#affinity_cookie_name}
  */
  readonly affinityCookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#cookie_based_affinity ApplicationGateway#cookie_based_affinity}
  */
  readonly cookieBasedAffinity: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#host_name ApplicationGateway#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#path ApplicationGateway#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#pick_host_name_from_backend_address ApplicationGateway#pick_host_name_from_backend_address}
  */
  readonly pickHostNameFromBackendAddress?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#port ApplicationGateway#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#probe_name ApplicationGateway#probe_name}
  */
  readonly probeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#protocol ApplicationGateway#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#request_timeout ApplicationGateway#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#trusted_root_certificate_names ApplicationGateway#trusted_root_certificate_names}
  */
  readonly trustedRootCertificateNames?: string[];
  /**
  * authentication_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#authentication_certificate ApplicationGateway#authentication_certificate}
  */
  readonly authenticationCertificate?: ApplicationGatewayBackendHttpSettingsAuthenticationCertificate[];
  /**
  * connection_draining block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#connection_draining ApplicationGateway#connection_draining}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#custom_error_page_url ApplicationGateway#custom_error_page_url}
  */
  readonly customErrorPageUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#status_code ApplicationGateway#status_code}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#private_ip_address ApplicationGateway#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#private_ip_address_allocation ApplicationGateway#private_ip_address_allocation}
  */
  readonly privateIpAddressAllocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#public_ip_address_id ApplicationGateway#public_ip_address_id}
  */
  readonly publicIpAddressId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#subnet_id ApplicationGateway#subnet_id}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#port ApplicationGateway#port}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#subnet_id ApplicationGateway#subnet_id}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#custom_error_page_url ApplicationGateway#custom_error_page_url}
  */
  readonly customErrorPageUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#status_code ApplicationGateway#status_code}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#firewall_policy_id ApplicationGateway#firewall_policy_id}
  */
  readonly firewallPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#frontend_ip_configuration_name ApplicationGateway#frontend_ip_configuration_name}
  */
  readonly frontendIpConfigurationName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#frontend_port_name ApplicationGateway#frontend_port_name}
  */
  readonly frontendPortName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#host_name ApplicationGateway#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#host_names ApplicationGateway#host_names}
  */
  readonly hostNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#protocol ApplicationGateway#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#require_sni ApplicationGateway#require_sni}
  */
  readonly requireSni?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#ssl_certificate_name ApplicationGateway#ssl_certificate_name}
  */
  readonly sslCertificateName?: string;
  /**
  * custom_error_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#custom_error_configuration ApplicationGateway#custom_error_configuration}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#identity_ids ApplicationGateway#identity_ids}
  */
  readonly identityIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#type ApplicationGateway#type}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#body ApplicationGateway#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#status_code ApplicationGateway#status_code}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#host ApplicationGateway#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#interval ApplicationGateway#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#minimum_servers ApplicationGateway#minimum_servers}
  */
  readonly minimumServers?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#path ApplicationGateway#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#pick_host_name_from_backend_http_settings ApplicationGateway#pick_host_name_from_backend_http_settings}
  */
  readonly pickHostNameFromBackendHttpSettings?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#port ApplicationGateway#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#protocol ApplicationGateway#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#timeout ApplicationGateway#timeout}
  */
  readonly timeout: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#unhealthy_threshold ApplicationGateway#unhealthy_threshold}
  */
  readonly unhealthyThreshold: number;
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#match ApplicationGateway#match}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#include_path ApplicationGateway#include_path}
  */
  readonly includePath?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#include_query_string ApplicationGateway#include_query_string}
  */
  readonly includeQueryString?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#redirect_type ApplicationGateway#redirect_type}
  */
  readonly redirectType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#target_listener_name ApplicationGateway#target_listener_name}
  */
  readonly targetListenerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#target_url ApplicationGateway#target_url}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#backend_address_pool_name ApplicationGateway#backend_address_pool_name}
  */
  readonly backendAddressPoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#backend_http_settings_name ApplicationGateway#backend_http_settings_name}
  */
  readonly backendHttpSettingsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#http_listener_name ApplicationGateway#http_listener_name}
  */
  readonly httpListenerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#redirect_configuration_name ApplicationGateway#redirect_configuration_name}
  */
  readonly redirectConfigurationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#rewrite_rule_set_name ApplicationGateway#rewrite_rule_set_name}
  */
  readonly rewriteRuleSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#rule_type ApplicationGateway#rule_type}
  */
  readonly ruleType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#url_path_map_name ApplicationGateway#url_path_map_name}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#ignore_case ApplicationGateway#ignore_case}
  */
  readonly ignoreCase?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#negate ApplicationGateway#negate}
  */
  readonly negate?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#pattern ApplicationGateway#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#variable ApplicationGateway#variable}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#header_name ApplicationGateway#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#header_value ApplicationGateway#header_value}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#header_name ApplicationGateway#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#header_value ApplicationGateway#header_value}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#path ApplicationGateway#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#query_string ApplicationGateway#query_string}
  */
  readonly queryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#reroute ApplicationGateway#reroute}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#rule_sequence ApplicationGateway#rule_sequence}
  */
  readonly ruleSequence: number;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#condition ApplicationGateway#condition}
  */
  readonly condition?: ApplicationGatewayRewriteRuleSetRewriteRuleCondition[];
  /**
  * request_header_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#request_header_configuration ApplicationGateway#request_header_configuration}
  */
  readonly requestHeaderConfiguration?: ApplicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfiguration[];
  /**
  * response_header_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#response_header_configuration ApplicationGateway#response_header_configuration}
  */
  readonly responseHeaderConfiguration?: ApplicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfiguration[];
  /**
  * url block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#url ApplicationGateway#url}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * rewrite_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#rewrite_rule ApplicationGateway#rewrite_rule}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#capacity ApplicationGateway#capacity}
  */
  readonly capacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#tier ApplicationGateway#tier}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#data ApplicationGateway#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#key_vault_secret_id ApplicationGateway#key_vault_secret_id}
  */
  readonly keyVaultSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#password ApplicationGateway#password}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#cipher_suites ApplicationGateway#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#disabled_protocols ApplicationGateway#disabled_protocols}
  */
  readonly disabledProtocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#min_protocol_version ApplicationGateway#min_protocol_version}
  */
  readonly minProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#policy_name ApplicationGateway#policy_name}
  */
  readonly policyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#policy_type ApplicationGateway#policy_type}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#create ApplicationGateway#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#delete ApplicationGateway#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#read ApplicationGateway#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#update ApplicationGateway#update}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#data ApplicationGateway#data}
  */
  readonly data: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#name ApplicationGateway#name}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#backend_address_pool_name ApplicationGateway#backend_address_pool_name}
  */
  readonly backendAddressPoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#backend_http_settings_name ApplicationGateway#backend_http_settings_name}
  */
  readonly backendHttpSettingsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#firewall_policy_id ApplicationGateway#firewall_policy_id}
  */
  readonly firewallPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#paths ApplicationGateway#paths}
  */
  readonly paths: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#redirect_configuration_name ApplicationGateway#redirect_configuration_name}
  */
  readonly redirectConfigurationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#rewrite_rule_set_name ApplicationGateway#rewrite_rule_set_name}
  */
  readonly rewriteRuleSetName?: string;
}

function applicationGatewayUrlPathMapPathRuleToTerraform(struct?: ApplicationGatewayUrlPathMapPathRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backend_address_pool_name: cdktf.stringToTerraform(struct!.backendAddressPoolName),
    backend_http_settings_name: cdktf.stringToTerraform(struct!.backendHttpSettingsName),
    firewall_policy_id: cdktf.stringToTerraform(struct!.firewallPolicyId),
    name: cdktf.stringToTerraform(struct!.name),
    paths: cdktf.listMapper(cdktf.stringToTerraform)(struct!.paths),
    redirect_configuration_name: cdktf.stringToTerraform(struct!.redirectConfigurationName),
    rewrite_rule_set_name: cdktf.stringToTerraform(struct!.rewriteRuleSetName),
  }
}

export interface ApplicationGatewayUrlPathMap {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#default_backend_address_pool_name ApplicationGateway#default_backend_address_pool_name}
  */
  readonly defaultBackendAddressPoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#default_backend_http_settings_name ApplicationGateway#default_backend_http_settings_name}
  */
  readonly defaultBackendHttpSettingsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#default_redirect_configuration_name ApplicationGateway#default_redirect_configuration_name}
  */
  readonly defaultRedirectConfigurationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#default_rewrite_rule_set_name ApplicationGateway#default_rewrite_rule_set_name}
  */
  readonly defaultRewriteRuleSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * path_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#path_rule ApplicationGateway#path_rule}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#rule_group_name ApplicationGateway#rule_group_name}
  */
  readonly ruleGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#rules ApplicationGateway#rules}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#match_variable ApplicationGateway#match_variable}
  */
  readonly matchVariable: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#selector ApplicationGateway#selector}
  */
  readonly selector?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#selector_match_operator ApplicationGateway#selector_match_operator}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#enabled ApplicationGateway#enabled}
  */
  readonly enabled: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#file_upload_limit_mb ApplicationGateway#file_upload_limit_mb}
  */
  readonly fileUploadLimitMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#firewall_mode ApplicationGateway#firewall_mode}
  */
  readonly firewallMode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#max_request_body_size_kb ApplicationGateway#max_request_body_size_kb}
  */
  readonly maxRequestBodySizeKb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#request_body_check ApplicationGateway#request_body_check}
  */
  readonly requestBodyCheck?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#rule_set_type ApplicationGateway#rule_set_type}
  */
  readonly ruleSetType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#rule_set_version ApplicationGateway#rule_set_version}
  */
  readonly ruleSetVersion: string;
  /**
  * disabled_rule_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#disabled_rule_group ApplicationGateway#disabled_rule_group}
  */
  readonly disabledRuleGroup?: ApplicationGatewayWafConfigurationDisabledRuleGroup[];
  /**
  * exclusion block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#exclusion ApplicationGateway#exclusion}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html azurerm_application_gateway}
*/
export class ApplicationGateway extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html azurerm_application_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationGatewayConfig
  */
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
