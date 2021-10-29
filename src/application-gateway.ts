// https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#enable_http2 ApplicationGateway#enable_http2}
  */
  readonly enableHttp2?: boolean | cdktf.IResolvable;
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
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
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
  readonly autoscaleConfiguration?: ApplicationGatewayAutoscaleConfiguration;
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
  readonly identity?: ApplicationGatewayIdentity;
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
  readonly sku: ApplicationGatewaySku;
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
  readonly sslPolicy?: ApplicationGatewaySslPolicy;
  /**
  * ssl_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#ssl_profile ApplicationGateway#ssl_profile}
  */
  readonly sslProfile?: ApplicationGatewaySslProfile[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#timeouts ApplicationGateway#timeouts}
  */
  readonly timeouts?: ApplicationGatewayTimeouts;
  /**
  * trusted_client_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#trusted_client_certificate ApplicationGateway#trusted_client_certificate}
  */
  readonly trustedClientCertificate?: ApplicationGatewayTrustedClientCertificate[];
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
  readonly wafConfiguration?: ApplicationGatewayWafConfiguration;
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

function applicationGatewayAutoscaleConfigurationToTerraform(struct?: ApplicationGatewayAutoscaleConfigurationOutputReference | ApplicationGatewayAutoscaleConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
  }
}

export class ApplicationGatewayAutoscaleConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max_capacity - computed: false, optional: true, required: false
  private _maxCapacity?: number | undefined; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number | undefined) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity
  }

  // min_capacity - computed: false, optional: false, required: true
  private _minCapacity?: number; 
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }
  public set minCapacity(value: number) {
    this._minCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  readonly enabled: boolean | cdktf.IResolvable;
}

function applicationGatewayBackendHttpSettingsConnectionDrainingToTerraform(struct?: ApplicationGatewayBackendHttpSettingsConnectionDrainingOutputReference | ApplicationGatewayBackendHttpSettingsConnectionDraining): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drain_timeout_sec: cdktf.numberToTerraform(struct!.drainTimeoutSec),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class ApplicationGatewayBackendHttpSettingsConnectionDrainingOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // drain_timeout_sec - computed: false, optional: false, required: true
  private _drainTimeoutSec?: number; 
  public get drainTimeoutSec() {
    return this.getNumberAttribute('drain_timeout_sec');
  }
  public set drainTimeoutSec(value: number) {
    this._drainTimeoutSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drainTimeoutSecInput() {
    return this._drainTimeoutSec
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
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
  readonly pickHostNameFromBackendAddress?: boolean | cdktf.IResolvable;
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
  readonly connectionDraining?: ApplicationGatewayBackendHttpSettingsConnectionDraining;
}

function applicationGatewayBackendHttpSettingsToTerraform(struct?: ApplicationGatewayBackendHttpSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
    connection_draining: applicationGatewayBackendHttpSettingsConnectionDrainingToTerraform(struct!.connectionDraining),
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  readonly requireSni?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#ssl_certificate_name ApplicationGateway#ssl_certificate_name}
  */
  readonly sslCertificateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#ssl_profile_name ApplicationGateway#ssl_profile_name}
  */
  readonly sslProfileName?: string;
  /**
  * custom_error_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#custom_error_configuration ApplicationGateway#custom_error_configuration}
  */
  readonly customErrorConfiguration?: ApplicationGatewayHttpListenerCustomErrorConfiguration[];
}

function applicationGatewayHttpListenerToTerraform(struct?: ApplicationGatewayHttpListener): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
    ssl_profile_name: cdktf.stringToTerraform(struct!.sslProfileName),
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

function applicationGatewayIdentityToTerraform(struct?: ApplicationGatewayIdentityOutputReference | ApplicationGatewayIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ApplicationGatewayIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // identity_ids - computed: false, optional: false, required: true
  private _identityIds?: string[]; 
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
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

function applicationGatewayProbeMatchToTerraform(struct?: ApplicationGatewayProbeMatchOutputReference | ApplicationGatewayProbeMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    status_code: cdktf.listMapper(cdktf.stringToTerraform)(struct!.statusCode),
  }
}

export class ApplicationGatewayProbeMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // body - computed: false, optional: true, required: false
  private _body?: string | undefined; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string | undefined) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: string[] | undefined; 
  public get statusCode() {
    return this.getListAttribute('status_code');
  }
  public set statusCode(value: string[] | undefined) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode
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
  readonly pickHostNameFromBackendHttpSettings?: boolean | cdktf.IResolvable;
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
  readonly match?: ApplicationGatewayProbeMatch;
}

function applicationGatewayProbeToTerraform(struct?: ApplicationGatewayProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
    match: applicationGatewayProbeMatchToTerraform(struct!.match),
  }
}

export interface ApplicationGatewayRedirectConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#include_path ApplicationGateway#include_path}
  */
  readonly includePath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#include_query_string ApplicationGateway#include_query_string}
  */
  readonly includeQueryString?: boolean | cdktf.IResolvable;
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#priority ApplicationGateway#priority}
  */
  readonly priority?: number;
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_address_pool_name: cdktf.stringToTerraform(struct!.backendAddressPoolName),
    backend_http_settings_name: cdktf.stringToTerraform(struct!.backendHttpSettingsName),
    http_listener_name: cdktf.stringToTerraform(struct!.httpListenerName),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
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
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#negate ApplicationGateway#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  readonly reroute?: boolean | cdktf.IResolvable;
}

function applicationGatewayRewriteRuleSetRewriteRuleUrlToTerraform(struct?: ApplicationGatewayRewriteRuleSetRewriteRuleUrlOutputReference | ApplicationGatewayRewriteRuleSetRewriteRuleUrl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    query_string: cdktf.stringToTerraform(struct!.queryString),
    reroute: cdktf.booleanToTerraform(struct!.reroute),
  }
}

export class ApplicationGatewayRewriteRuleSetRewriteRuleUrlOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: string | undefined; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string | undefined) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString
  }

  // reroute - computed: false, optional: true, required: false
  private _reroute?: boolean | cdktf.IResolvable | undefined; 
  public get reroute() {
    return this.getBooleanAttribute('reroute') as any;
  }
  public set reroute(value: boolean | cdktf.IResolvable | undefined) {
    this._reroute = value;
  }
  public resetReroute() {
    this._reroute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rerouteInput() {
    return this._reroute
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
  readonly url?: ApplicationGatewayRewriteRuleSetRewriteRuleUrl;
}

function applicationGatewayRewriteRuleSetRewriteRuleToTerraform(struct?: ApplicationGatewayRewriteRuleSetRewriteRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    rule_sequence: cdktf.numberToTerraform(struct!.ruleSequence),
    condition: cdktf.listMapper(applicationGatewayRewriteRuleSetRewriteRuleConditionToTerraform)(struct!.condition),
    request_header_configuration: cdktf.listMapper(applicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfigurationToTerraform)(struct!.requestHeaderConfiguration),
    response_header_configuration: cdktf.listMapper(applicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfigurationToTerraform)(struct!.responseHeaderConfiguration),
    url: applicationGatewayRewriteRuleSetRewriteRuleUrlToTerraform(struct!.url),
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

function applicationGatewaySkuToTerraform(struct?: ApplicationGatewaySkuOutputReference | ApplicationGatewaySku): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    name: cdktf.stringToTerraform(struct!.name),
    tier: cdktf.stringToTerraform(struct!.tier),
  }
}

export class ApplicationGatewaySkuOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: number | undefined; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number | undefined) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity
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

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

function applicationGatewaySslPolicyToTerraform(struct?: ApplicationGatewaySslPolicyOutputReference | ApplicationGatewaySslPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cipherSuites),
    disabled_protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct!.disabledProtocols),
    min_protocol_version: cdktf.stringToTerraform(struct!.minProtocolVersion),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
  }
}

export class ApplicationGatewaySslPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cipher_suites - computed: false, optional: true, required: false
  private _cipherSuites?: string[] | undefined; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[] | undefined) {
    this._cipherSuites = value;
  }
  public resetCipherSuites() {
    this._cipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites
  }

  // disabled_protocols - computed: false, optional: true, required: false
  private _disabledProtocols?: string[] | undefined; 
  public get disabledProtocols() {
    return this.getListAttribute('disabled_protocols');
  }
  public set disabledProtocols(value: string[] | undefined) {
    this._disabledProtocols = value;
  }
  public resetDisabledProtocols() {
    this._disabledProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledProtocolsInput() {
    return this._disabledProtocols
  }

  // min_protocol_version - computed: false, optional: true, required: false
  private _minProtocolVersion?: string | undefined; 
  public get minProtocolVersion() {
    return this.getStringAttribute('min_protocol_version');
  }
  public set minProtocolVersion(value: string | undefined) {
    this._minProtocolVersion = value;
  }
  public resetMinProtocolVersion() {
    this._minProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minProtocolVersionInput() {
    return this._minProtocolVersion
  }

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string | undefined; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string | undefined) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName
  }

  // policy_type - computed: false, optional: true, required: false
  private _policyType?: string | undefined; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string | undefined) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType
  }
}
export interface ApplicationGatewaySslProfileSslPolicy {
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

function applicationGatewaySslProfileSslPolicyToTerraform(struct?: ApplicationGatewaySslProfileSslPolicyOutputReference | ApplicationGatewaySslProfileSslPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cipherSuites),
    disabled_protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct!.disabledProtocols),
    min_protocol_version: cdktf.stringToTerraform(struct!.minProtocolVersion),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
  }
}

export class ApplicationGatewaySslProfileSslPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cipher_suites - computed: false, optional: true, required: false
  private _cipherSuites?: string[] | undefined; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[] | undefined) {
    this._cipherSuites = value;
  }
  public resetCipherSuites() {
    this._cipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites
  }

  // disabled_protocols - computed: false, optional: true, required: false
  private _disabledProtocols?: string[] | undefined; 
  public get disabledProtocols() {
    return this.getListAttribute('disabled_protocols');
  }
  public set disabledProtocols(value: string[] | undefined) {
    this._disabledProtocols = value;
  }
  public resetDisabledProtocols() {
    this._disabledProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledProtocolsInput() {
    return this._disabledProtocols
  }

  // min_protocol_version - computed: false, optional: true, required: false
  private _minProtocolVersion?: string | undefined; 
  public get minProtocolVersion() {
    return this.getStringAttribute('min_protocol_version');
  }
  public set minProtocolVersion(value: string | undefined) {
    this._minProtocolVersion = value;
  }
  public resetMinProtocolVersion() {
    this._minProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minProtocolVersionInput() {
    return this._minProtocolVersion
  }

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string | undefined; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string | undefined) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName
  }

  // policy_type - computed: false, optional: true, required: false
  private _policyType?: string | undefined; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string | undefined) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType
  }
}
export interface ApplicationGatewaySslProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#trusted_client_certificate_names ApplicationGateway#trusted_client_certificate_names}
  */
  readonly trustedClientCertificateNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#verify_client_cert_issuer_dn ApplicationGateway#verify_client_cert_issuer_dn}
  */
  readonly verifyClientCertIssuerDn?: boolean | cdktf.IResolvable;
  /**
  * ssl_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#ssl_policy ApplicationGateway#ssl_policy}
  */
  readonly sslPolicy?: ApplicationGatewaySslProfileSslPolicy;
}

function applicationGatewaySslProfileToTerraform(struct?: ApplicationGatewaySslProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    trusted_client_certificate_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.trustedClientCertificateNames),
    verify_client_cert_issuer_dn: cdktf.booleanToTerraform(struct!.verifyClientCertIssuerDn),
    ssl_policy: applicationGatewaySslProfileSslPolicyToTerraform(struct!.sslPolicy),
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

function applicationGatewayTimeoutsToTerraform(struct?: ApplicationGatewayTimeoutsOutputReference | ApplicationGatewayTimeouts): any {
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

export class ApplicationGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
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
export interface ApplicationGatewayTrustedClientCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#data ApplicationGateway#data}
  */
  readonly data: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html#name ApplicationGateway#name}
  */
  readonly name: string;
}

function applicationGatewayTrustedClientCertificateToTerraform(struct?: ApplicationGatewayTrustedClientCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    name: cdktf.stringToTerraform(struct!.name),
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  readonly enabled: boolean | cdktf.IResolvable;
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
  readonly requestBodyCheck?: boolean | cdktf.IResolvable;
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

function applicationGatewayWafConfigurationToTerraform(struct?: ApplicationGatewayWafConfigurationOutputReference | ApplicationGatewayWafConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export class ApplicationGatewayWafConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // file_upload_limit_mb - computed: false, optional: true, required: false
  private _fileUploadLimitMb?: number | undefined; 
  public get fileUploadLimitMb() {
    return this.getNumberAttribute('file_upload_limit_mb');
  }
  public set fileUploadLimitMb(value: number | undefined) {
    this._fileUploadLimitMb = value;
  }
  public resetFileUploadLimitMb() {
    this._fileUploadLimitMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUploadLimitMbInput() {
    return this._fileUploadLimitMb
  }

  // firewall_mode - computed: false, optional: false, required: true
  private _firewallMode?: string; 
  public get firewallMode() {
    return this.getStringAttribute('firewall_mode');
  }
  public set firewallMode(value: string) {
    this._firewallMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallModeInput() {
    return this._firewallMode
  }

  // max_request_body_size_kb - computed: false, optional: true, required: false
  private _maxRequestBodySizeKb?: number | undefined; 
  public get maxRequestBodySizeKb() {
    return this.getNumberAttribute('max_request_body_size_kb');
  }
  public set maxRequestBodySizeKb(value: number | undefined) {
    this._maxRequestBodySizeKb = value;
  }
  public resetMaxRequestBodySizeKb() {
    this._maxRequestBodySizeKb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestBodySizeKbInput() {
    return this._maxRequestBodySizeKb
  }

  // request_body_check - computed: false, optional: true, required: false
  private _requestBodyCheck?: boolean | cdktf.IResolvable | undefined; 
  public get requestBodyCheck() {
    return this.getBooleanAttribute('request_body_check') as any;
  }
  public set requestBodyCheck(value: boolean | cdktf.IResolvable | undefined) {
    this._requestBodyCheck = value;
  }
  public resetRequestBodyCheck() {
    this._requestBodyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyCheckInput() {
    return this._requestBodyCheck
  }

  // rule_set_type - computed: false, optional: true, required: false
  private _ruleSetType?: string | undefined; 
  public get ruleSetType() {
    return this.getStringAttribute('rule_set_type');
  }
  public set ruleSetType(value: string | undefined) {
    this._ruleSetType = value;
  }
  public resetRuleSetType() {
    this._ruleSetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetTypeInput() {
    return this._ruleSetType
  }

  // rule_set_version - computed: false, optional: false, required: true
  private _ruleSetVersion?: string; 
  public get ruleSetVersion() {
    return this.getStringAttribute('rule_set_version');
  }
  public set ruleSetVersion(value: string) {
    this._ruleSetVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetVersionInput() {
    return this._ruleSetVersion
  }

  // disabled_rule_group - computed: false, optional: true, required: false
  private _disabledRuleGroup?: ApplicationGatewayWafConfigurationDisabledRuleGroup[] | undefined; 
  public get disabledRuleGroup() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('disabled_rule_group') as any;
  }
  public set disabledRuleGroup(value: ApplicationGatewayWafConfigurationDisabledRuleGroup[] | undefined) {
    this._disabledRuleGroup = value;
  }
  public resetDisabledRuleGroup() {
    this._disabledRuleGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledRuleGroupInput() {
    return this._disabledRuleGroup
  }

  // exclusion - computed: false, optional: true, required: false
  private _exclusion?: ApplicationGatewayWafConfigurationExclusion[] | undefined; 
  public get exclusion() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('exclusion') as any;
  }
  public set exclusion(value: ApplicationGatewayWafConfigurationExclusion[] | undefined) {
    this._exclusion = value;
  }
  public resetExclusion() {
    this._exclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionInput() {
    return this._exclusion
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway.html azurerm_application_gateway}
*/
export class ApplicationGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_application_gateway";

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
    this._sslProfile = config.sslProfile;
    this._timeouts = config.timeouts;
    this._trustedClientCertificate = config.trustedClientCertificate;
    this._trustedRootCertificate = config.trustedRootCertificate;
    this._urlPathMap = config.urlPathMap;
    this._wafConfiguration = config.wafConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_http2 - computed: false, optional: true, required: false
  private _enableHttp2?: boolean | cdktf.IResolvable | undefined; 
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2') as any;
  }
  public set enableHttp2(value: boolean | cdktf.IResolvable | undefined) {
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
  private _firewallPolicyId?: string | undefined; 
  public get firewallPolicyId() {
    return this.getStringAttribute('firewall_policy_id');
  }
  public set firewallPolicyId(value: string | undefined) {
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
  private _location?: string; 
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

  // zones - computed: false, optional: true, required: false
  private _zones?: string[] | undefined; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[] | undefined) {
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
  private _authenticationCertificate?: ApplicationGatewayAuthenticationCertificate[] | undefined; 
  public get authenticationCertificate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('authentication_certificate') as any;
  }
  public set authenticationCertificate(value: ApplicationGatewayAuthenticationCertificate[] | undefined) {
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
  private _autoscaleConfiguration?: ApplicationGatewayAutoscaleConfiguration | undefined; 
  private __autoscaleConfigurationOutput = new ApplicationGatewayAutoscaleConfigurationOutputReference(this as any, "autoscale_configuration", true);
  public get autoscaleConfiguration() {
    return this.__autoscaleConfigurationOutput;
  }
  public putAutoscaleConfiguration(value: ApplicationGatewayAutoscaleConfiguration | undefined) {
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
  private _backendAddressPool?: ApplicationGatewayBackendAddressPool[]; 
  public get backendAddressPool() {
    // Getting the computed value is not yet implemented
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
  private _backendHttpSettings?: ApplicationGatewayBackendHttpSettings[]; 
  public get backendHttpSettings() {
    // Getting the computed value is not yet implemented
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
  private _customErrorConfiguration?: ApplicationGatewayCustomErrorConfiguration[] | undefined; 
  public get customErrorConfiguration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom_error_configuration') as any;
  }
  public set customErrorConfiguration(value: ApplicationGatewayCustomErrorConfiguration[] | undefined) {
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
  private _frontendIpConfiguration?: ApplicationGatewayFrontendIpConfiguration[]; 
  public get frontendIpConfiguration() {
    // Getting the computed value is not yet implemented
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
  private _frontendPort?: ApplicationGatewayFrontendPort[]; 
  public get frontendPort() {
    // Getting the computed value is not yet implemented
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
  private _gatewayIpConfiguration?: ApplicationGatewayGatewayIpConfiguration[]; 
  public get gatewayIpConfiguration() {
    // Getting the computed value is not yet implemented
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
  private _httpListener?: ApplicationGatewayHttpListener[]; 
  public get httpListener() {
    // Getting the computed value is not yet implemented
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
  private _identity?: ApplicationGatewayIdentity | undefined; 
  private __identityOutput = new ApplicationGatewayIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this.__identityOutput;
  }
  public putIdentity(value: ApplicationGatewayIdentity | undefined) {
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
  private _probe?: ApplicationGatewayProbe[] | undefined; 
  public get probe() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('probe') as any;
  }
  public set probe(value: ApplicationGatewayProbe[] | undefined) {
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
  private _redirectConfiguration?: ApplicationGatewayRedirectConfiguration[] | undefined; 
  public get redirectConfiguration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('redirect_configuration') as any;
  }
  public set redirectConfiguration(value: ApplicationGatewayRedirectConfiguration[] | undefined) {
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
  private _requestRoutingRule?: ApplicationGatewayRequestRoutingRule[]; 
  public get requestRoutingRule() {
    // Getting the computed value is not yet implemented
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
  private _rewriteRuleSet?: ApplicationGatewayRewriteRuleSet[] | undefined; 
  public get rewriteRuleSet() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rewrite_rule_set') as any;
  }
  public set rewriteRuleSet(value: ApplicationGatewayRewriteRuleSet[] | undefined) {
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
  private _sku?: ApplicationGatewaySku; 
  private __skuOutput = new ApplicationGatewaySkuOutputReference(this as any, "sku", true);
  public get sku() {
    return this.__skuOutput;
  }
  public putSku(value: ApplicationGatewaySku) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }

  // ssl_certificate - computed: false, optional: true, required: false
  private _sslCertificate?: ApplicationGatewaySslCertificate[] | undefined; 
  public get sslCertificate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ssl_certificate') as any;
  }
  public set sslCertificate(value: ApplicationGatewaySslCertificate[] | undefined) {
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
  private _sslPolicy?: ApplicationGatewaySslPolicy | undefined; 
  private __sslPolicyOutput = new ApplicationGatewaySslPolicyOutputReference(this as any, "ssl_policy", true);
  public get sslPolicy() {
    return this.__sslPolicyOutput;
  }
  public putSslPolicy(value: ApplicationGatewaySslPolicy | undefined) {
    this._sslPolicy = value;
  }
  public resetSslPolicy() {
    this._sslPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPolicyInput() {
    return this._sslPolicy
  }

  // ssl_profile - computed: false, optional: true, required: false
  private _sslProfile?: ApplicationGatewaySslProfile[] | undefined; 
  public get sslProfile() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ssl_profile') as any;
  }
  public set sslProfile(value: ApplicationGatewaySslProfile[] | undefined) {
    this._sslProfile = value;
  }
  public resetSslProfile() {
    this._sslProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileInput() {
    return this._sslProfile
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApplicationGatewayTimeouts | undefined; 
  private __timeoutsOutput = new ApplicationGatewayTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ApplicationGatewayTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // trusted_client_certificate - computed: false, optional: true, required: false
  private _trustedClientCertificate?: ApplicationGatewayTrustedClientCertificate[] | undefined; 
  public get trustedClientCertificate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('trusted_client_certificate') as any;
  }
  public set trustedClientCertificate(value: ApplicationGatewayTrustedClientCertificate[] | undefined) {
    this._trustedClientCertificate = value;
  }
  public resetTrustedClientCertificate() {
    this._trustedClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedClientCertificateInput() {
    return this._trustedClientCertificate
  }

  // trusted_root_certificate - computed: false, optional: true, required: false
  private _trustedRootCertificate?: ApplicationGatewayTrustedRootCertificate[] | undefined; 
  public get trustedRootCertificate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('trusted_root_certificate') as any;
  }
  public set trustedRootCertificate(value: ApplicationGatewayTrustedRootCertificate[] | undefined) {
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
  private _urlPathMap?: ApplicationGatewayUrlPathMap[] | undefined; 
  public get urlPathMap() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('url_path_map') as any;
  }
  public set urlPathMap(value: ApplicationGatewayUrlPathMap[] | undefined) {
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
  private _wafConfiguration?: ApplicationGatewayWafConfiguration | undefined; 
  private __wafConfigurationOutput = new ApplicationGatewayWafConfigurationOutputReference(this as any, "waf_configuration", true);
  public get wafConfiguration() {
    return this.__wafConfigurationOutput;
  }
  public putWafConfiguration(value: ApplicationGatewayWafConfiguration | undefined) {
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
      autoscale_configuration: applicationGatewayAutoscaleConfigurationToTerraform(this._autoscaleConfiguration),
      backend_address_pool: cdktf.listMapper(applicationGatewayBackendAddressPoolToTerraform)(this._backendAddressPool),
      backend_http_settings: cdktf.listMapper(applicationGatewayBackendHttpSettingsToTerraform)(this._backendHttpSettings),
      custom_error_configuration: cdktf.listMapper(applicationGatewayCustomErrorConfigurationToTerraform)(this._customErrorConfiguration),
      frontend_ip_configuration: cdktf.listMapper(applicationGatewayFrontendIpConfigurationToTerraform)(this._frontendIpConfiguration),
      frontend_port: cdktf.listMapper(applicationGatewayFrontendPortToTerraform)(this._frontendPort),
      gateway_ip_configuration: cdktf.listMapper(applicationGatewayGatewayIpConfigurationToTerraform)(this._gatewayIpConfiguration),
      http_listener: cdktf.listMapper(applicationGatewayHttpListenerToTerraform)(this._httpListener),
      identity: applicationGatewayIdentityToTerraform(this._identity),
      probe: cdktf.listMapper(applicationGatewayProbeToTerraform)(this._probe),
      redirect_configuration: cdktf.listMapper(applicationGatewayRedirectConfigurationToTerraform)(this._redirectConfiguration),
      request_routing_rule: cdktf.listMapper(applicationGatewayRequestRoutingRuleToTerraform)(this._requestRoutingRule),
      rewrite_rule_set: cdktf.listMapper(applicationGatewayRewriteRuleSetToTerraform)(this._rewriteRuleSet),
      sku: applicationGatewaySkuToTerraform(this._sku),
      ssl_certificate: cdktf.listMapper(applicationGatewaySslCertificateToTerraform)(this._sslCertificate),
      ssl_policy: applicationGatewaySslPolicyToTerraform(this._sslPolicy),
      ssl_profile: cdktf.listMapper(applicationGatewaySslProfileToTerraform)(this._sslProfile),
      timeouts: applicationGatewayTimeoutsToTerraform(this._timeouts),
      trusted_client_certificate: cdktf.listMapper(applicationGatewayTrustedClientCertificateToTerraform)(this._trustedClientCertificate),
      trusted_root_certificate: cdktf.listMapper(applicationGatewayTrustedRootCertificateToTerraform)(this._trustedRootCertificate),
      url_path_map: cdktf.listMapper(applicationGatewayUrlPathMapToTerraform)(this._urlPathMap),
      waf_configuration: applicationGatewayWafConfigurationToTerraform(this._wafConfiguration),
    };
  }
}
