// https://www.terraform.io/docs/providers/azurerm/r/application_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#enable_http2 ApplicationGateway#enable_http2}
  */
  readonly enableHttp2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#fips_enabled ApplicationGateway#fips_enabled}
  */
  readonly fipsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#firewall_policy_id ApplicationGateway#firewall_policy_id}
  */
  readonly firewallPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#force_firewall_policy_association ApplicationGateway#force_firewall_policy_association}
  */
  readonly forceFirewallPolicyAssociation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#location ApplicationGateway#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#resource_group_name ApplicationGateway#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#tags ApplicationGateway#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#zones ApplicationGateway#zones}
  */
  readonly zones?: string[];
  /**
  * authentication_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#authentication_certificate ApplicationGateway#authentication_certificate}
  */
  readonly authenticationCertificate?: ApplicationGatewayAuthenticationCertificate[] | cdktf.IResolvable;
  /**
  * autoscale_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#autoscale_configuration ApplicationGateway#autoscale_configuration}
  */
  readonly autoscaleConfiguration?: ApplicationGatewayAutoscaleConfiguration;
  /**
  * backend_address_pool block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#backend_address_pool ApplicationGateway#backend_address_pool}
  */
  readonly backendAddressPool: ApplicationGatewayBackendAddressPool[] | cdktf.IResolvable;
  /**
  * backend_http_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#backend_http_settings ApplicationGateway#backend_http_settings}
  */
  readonly backendHttpSettings: ApplicationGatewayBackendHttpSettings[] | cdktf.IResolvable;
  /**
  * custom_error_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#custom_error_configuration ApplicationGateway#custom_error_configuration}
  */
  readonly customErrorConfiguration?: ApplicationGatewayCustomErrorConfiguration[] | cdktf.IResolvable;
  /**
  * frontend_ip_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#frontend_ip_configuration ApplicationGateway#frontend_ip_configuration}
  */
  readonly frontendIpConfiguration: ApplicationGatewayFrontendIpConfiguration[] | cdktf.IResolvable;
  /**
  * frontend_port block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#frontend_port ApplicationGateway#frontend_port}
  */
  readonly frontendPort: ApplicationGatewayFrontendPort[] | cdktf.IResolvable;
  /**
  * gateway_ip_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#gateway_ip_configuration ApplicationGateway#gateway_ip_configuration}
  */
  readonly gatewayIpConfiguration: ApplicationGatewayGatewayIpConfiguration[] | cdktf.IResolvable;
  /**
  * http_listener block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#http_listener ApplicationGateway#http_listener}
  */
  readonly httpListener: ApplicationGatewayHttpListener[] | cdktf.IResolvable;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#identity ApplicationGateway#identity}
  */
  readonly identity?: ApplicationGatewayIdentity;
  /**
  * private_link_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#private_link_configuration ApplicationGateway#private_link_configuration}
  */
  readonly privateLinkConfiguration?: ApplicationGatewayPrivateLinkConfiguration[] | cdktf.IResolvable;
  /**
  * probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#probe ApplicationGateway#probe}
  */
  readonly probe?: ApplicationGatewayProbe[] | cdktf.IResolvable;
  /**
  * redirect_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#redirect_configuration ApplicationGateway#redirect_configuration}
  */
  readonly redirectConfiguration?: ApplicationGatewayRedirectConfiguration[] | cdktf.IResolvable;
  /**
  * request_routing_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#request_routing_rule ApplicationGateway#request_routing_rule}
  */
  readonly requestRoutingRule: ApplicationGatewayRequestRoutingRule[] | cdktf.IResolvable;
  /**
  * rewrite_rule_set block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#rewrite_rule_set ApplicationGateway#rewrite_rule_set}
  */
  readonly rewriteRuleSet?: ApplicationGatewayRewriteRuleSet[] | cdktf.IResolvable;
  /**
  * sku block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#sku ApplicationGateway#sku}
  */
  readonly sku: ApplicationGatewaySku;
  /**
  * ssl_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#ssl_certificate ApplicationGateway#ssl_certificate}
  */
  readonly sslCertificate?: ApplicationGatewaySslCertificate[] | cdktf.IResolvable;
  /**
  * ssl_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#ssl_policy ApplicationGateway#ssl_policy}
  */
  readonly sslPolicy?: ApplicationGatewaySslPolicy;
  /**
  * ssl_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#ssl_profile ApplicationGateway#ssl_profile}
  */
  readonly sslProfile?: ApplicationGatewaySslProfile[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#timeouts ApplicationGateway#timeouts}
  */
  readonly timeouts?: ApplicationGatewayTimeouts;
  /**
  * trusted_client_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#trusted_client_certificate ApplicationGateway#trusted_client_certificate}
  */
  readonly trustedClientCertificate?: ApplicationGatewayTrustedClientCertificate[] | cdktf.IResolvable;
  /**
  * trusted_root_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#trusted_root_certificate ApplicationGateway#trusted_root_certificate}
  */
  readonly trustedRootCertificate?: ApplicationGatewayTrustedRootCertificate[] | cdktf.IResolvable;
  /**
  * url_path_map block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#url_path_map ApplicationGateway#url_path_map}
  */
  readonly urlPathMap?: ApplicationGatewayUrlPathMap[] | cdktf.IResolvable;
  /**
  * waf_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#waf_configuration ApplicationGateway#waf_configuration}
  */
  readonly wafConfiguration?: ApplicationGatewayWafConfiguration;
}
export class ApplicationGatewayPrivateEndpointConnection extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface ApplicationGatewayAuthenticationCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#data ApplicationGateway#data}
  */
  readonly data: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
}

export function applicationGatewayAuthenticationCertificateToTerraform(struct?: ApplicationGatewayAuthenticationCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#max_capacity ApplicationGateway#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#min_capacity ApplicationGateway#min_capacity}
  */
  readonly minCapacity: number;
}

export function applicationGatewayAutoscaleConfigurationToTerraform(struct?: ApplicationGatewayAutoscaleConfigurationOutputReference | ApplicationGatewayAutoscaleConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
  }
}

export class ApplicationGatewayAutoscaleConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApplicationGatewayAutoscaleConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacity = this._maxCapacity;
    }
    if (this._minCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCapacity = this._minCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayAutoscaleConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxCapacity = undefined;
      this._minCapacity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxCapacity = value.maxCapacity;
      this._minCapacity = value.minCapacity;
    }
  }

  // max_capacity - computed: false, optional: true, required: false
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
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
    return this._minCapacity;
  }
}
export interface ApplicationGatewayBackendAddressPool {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#fqdns ApplicationGateway#fqdns}
  */
  readonly fqdns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#ip_addresses ApplicationGateway#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
}

export function applicationGatewayBackendAddressPoolToTerraform(struct?: ApplicationGatewayBackendAddressPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
}

export function applicationGatewayBackendHttpSettingsAuthenticationCertificateToTerraform(struct?: ApplicationGatewayBackendHttpSettingsAuthenticationCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface ApplicationGatewayBackendHttpSettingsConnectionDraining {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#drain_timeout_sec ApplicationGateway#drain_timeout_sec}
  */
  readonly drainTimeoutSec: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#enabled ApplicationGateway#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function applicationGatewayBackendHttpSettingsConnectionDrainingToTerraform(struct?: ApplicationGatewayBackendHttpSettingsConnectionDrainingOutputReference | ApplicationGatewayBackendHttpSettingsConnectionDraining): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drain_timeout_sec: cdktf.numberToTerraform(struct!.drainTimeoutSec),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class ApplicationGatewayBackendHttpSettingsConnectionDrainingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApplicationGatewayBackendHttpSettingsConnectionDraining | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drainTimeoutSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainTimeoutSec = this._drainTimeoutSec;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayBackendHttpSettingsConnectionDraining | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drainTimeoutSec = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drainTimeoutSec = value.drainTimeoutSec;
      this._enabled = value.enabled;
    }
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
    return this._drainTimeoutSec;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ApplicationGatewayBackendHttpSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#affinity_cookie_name ApplicationGateway#affinity_cookie_name}
  */
  readonly affinityCookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#cookie_based_affinity ApplicationGateway#cookie_based_affinity}
  */
  readonly cookieBasedAffinity: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#host_name ApplicationGateway#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#path ApplicationGateway#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#pick_host_name_from_backend_address ApplicationGateway#pick_host_name_from_backend_address}
  */
  readonly pickHostNameFromBackendAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#port ApplicationGateway#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#probe_name ApplicationGateway#probe_name}
  */
  readonly probeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#protocol ApplicationGateway#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#request_timeout ApplicationGateway#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#trusted_root_certificate_names ApplicationGateway#trusted_root_certificate_names}
  */
  readonly trustedRootCertificateNames?: string[];
  /**
  * authentication_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#authentication_certificate ApplicationGateway#authentication_certificate}
  */
  readonly authenticationCertificate?: ApplicationGatewayBackendHttpSettingsAuthenticationCertificate[] | cdktf.IResolvable;
  /**
  * connection_draining block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#connection_draining ApplicationGateway#connection_draining}
  */
  readonly connectionDraining?: ApplicationGatewayBackendHttpSettingsConnectionDraining;
}

export function applicationGatewayBackendHttpSettingsToTerraform(struct?: ApplicationGatewayBackendHttpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#custom_error_page_url ApplicationGateway#custom_error_page_url}
  */
  readonly customErrorPageUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#status_code ApplicationGateway#status_code}
  */
  readonly statusCode: string;
}

export function applicationGatewayCustomErrorConfigurationToTerraform(struct?: ApplicationGatewayCustomErrorConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#private_ip_address ApplicationGateway#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#private_ip_address_allocation ApplicationGateway#private_ip_address_allocation}
  */
  readonly privateIpAddressAllocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#private_link_configuration_name ApplicationGateway#private_link_configuration_name}
  */
  readonly privateLinkConfigurationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#public_ip_address_id ApplicationGateway#public_ip_address_id}
  */
  readonly publicIpAddressId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#subnet_id ApplicationGateway#subnet_id}
  */
  readonly subnetId?: string;
}

export function applicationGatewayFrontendIpConfigurationToTerraform(struct?: ApplicationGatewayFrontendIpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    private_ip_address: cdktf.stringToTerraform(struct!.privateIpAddress),
    private_ip_address_allocation: cdktf.stringToTerraform(struct!.privateIpAddressAllocation),
    private_link_configuration_name: cdktf.stringToTerraform(struct!.privateLinkConfigurationName),
    public_ip_address_id: cdktf.stringToTerraform(struct!.publicIpAddressId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface ApplicationGatewayFrontendPort {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#port ApplicationGateway#port}
  */
  readonly port: number;
}

export function applicationGatewayFrontendPortToTerraform(struct?: ApplicationGatewayFrontendPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#subnet_id ApplicationGateway#subnet_id}
  */
  readonly subnetId: string;
}

export function applicationGatewayGatewayIpConfigurationToTerraform(struct?: ApplicationGatewayGatewayIpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#custom_error_page_url ApplicationGateway#custom_error_page_url}
  */
  readonly customErrorPageUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#status_code ApplicationGateway#status_code}
  */
  readonly statusCode: string;
}

export function applicationGatewayHttpListenerCustomErrorConfigurationToTerraform(struct?: ApplicationGatewayHttpListenerCustomErrorConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#firewall_policy_id ApplicationGateway#firewall_policy_id}
  */
  readonly firewallPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#frontend_ip_configuration_name ApplicationGateway#frontend_ip_configuration_name}
  */
  readonly frontendIpConfigurationName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#frontend_port_name ApplicationGateway#frontend_port_name}
  */
  readonly frontendPortName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#host_name ApplicationGateway#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#host_names ApplicationGateway#host_names}
  */
  readonly hostNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#protocol ApplicationGateway#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#require_sni ApplicationGateway#require_sni}
  */
  readonly requireSni?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#ssl_certificate_name ApplicationGateway#ssl_certificate_name}
  */
  readonly sslCertificateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#ssl_profile_name ApplicationGateway#ssl_profile_name}
  */
  readonly sslProfileName?: string;
  /**
  * custom_error_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#custom_error_configuration ApplicationGateway#custom_error_configuration}
  */
  readonly customErrorConfiguration?: ApplicationGatewayHttpListenerCustomErrorConfiguration[] | cdktf.IResolvable;
}

export function applicationGatewayHttpListenerToTerraform(struct?: ApplicationGatewayHttpListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#identity_ids ApplicationGateway#identity_ids}
  */
  readonly identityIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#type ApplicationGateway#type}
  */
  readonly type?: string;
}

export function applicationGatewayIdentityToTerraform(struct?: ApplicationGatewayIdentityOutputReference | ApplicationGatewayIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ApplicationGatewayIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApplicationGatewayIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
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
    return this._identityIds;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ApplicationGatewayPrivateLinkConfigurationIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#primary ApplicationGateway#primary}
  */
  readonly primary: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#private_ip_address ApplicationGateway#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#private_ip_address_allocation ApplicationGateway#private_ip_address_allocation}
  */
  readonly privateIpAddressAllocation: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#subnet_id ApplicationGateway#subnet_id}
  */
  readonly subnetId: string;
}

export function applicationGatewayPrivateLinkConfigurationIpConfigurationToTerraform(struct?: ApplicationGatewayPrivateLinkConfigurationIpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    primary: cdktf.booleanToTerraform(struct!.primary),
    private_ip_address: cdktf.stringToTerraform(struct!.privateIpAddress),
    private_ip_address_allocation: cdktf.stringToTerraform(struct!.privateIpAddressAllocation),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface ApplicationGatewayPrivateLinkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * ip_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#ip_configuration ApplicationGateway#ip_configuration}
  */
  readonly ipConfiguration: ApplicationGatewayPrivateLinkConfigurationIpConfiguration[] | cdktf.IResolvable;
}

export function applicationGatewayPrivateLinkConfigurationToTerraform(struct?: ApplicationGatewayPrivateLinkConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ip_configuration: cdktf.listMapper(applicationGatewayPrivateLinkConfigurationIpConfigurationToTerraform)(struct!.ipConfiguration),
  }
}

export interface ApplicationGatewayProbeMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#body ApplicationGateway#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#status_code ApplicationGateway#status_code}
  */
  readonly statusCode?: string[];
}

export function applicationGatewayProbeMatchToTerraform(struct?: ApplicationGatewayProbeMatchOutputReference | ApplicationGatewayProbeMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    status_code: cdktf.listMapper(cdktf.stringToTerraform)(struct!.statusCode),
  }
}

export class ApplicationGatewayProbeMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApplicationGatewayProbeMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayProbeMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._statusCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._statusCode = value.statusCode;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: string[]; 
  public get statusCode() {
    return this.getListAttribute('status_code');
  }
  public set statusCode(value: string[]) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface ApplicationGatewayProbe {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#host ApplicationGateway#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#interval ApplicationGateway#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#minimum_servers ApplicationGateway#minimum_servers}
  */
  readonly minimumServers?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#path ApplicationGateway#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#pick_host_name_from_backend_http_settings ApplicationGateway#pick_host_name_from_backend_http_settings}
  */
  readonly pickHostNameFromBackendHttpSettings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#port ApplicationGateway#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#protocol ApplicationGateway#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#timeout ApplicationGateway#timeout}
  */
  readonly timeout: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#unhealthy_threshold ApplicationGateway#unhealthy_threshold}
  */
  readonly unhealthyThreshold: number;
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#match ApplicationGateway#match}
  */
  readonly match?: ApplicationGatewayProbeMatch;
}

export function applicationGatewayProbeToTerraform(struct?: ApplicationGatewayProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#include_path ApplicationGateway#include_path}
  */
  readonly includePath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#include_query_string ApplicationGateway#include_query_string}
  */
  readonly includeQueryString?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#redirect_type ApplicationGateway#redirect_type}
  */
  readonly redirectType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#target_listener_name ApplicationGateway#target_listener_name}
  */
  readonly targetListenerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#target_url ApplicationGateway#target_url}
  */
  readonly targetUrl?: string;
}

export function applicationGatewayRedirectConfigurationToTerraform(struct?: ApplicationGatewayRedirectConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#backend_address_pool_name ApplicationGateway#backend_address_pool_name}
  */
  readonly backendAddressPoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#backend_http_settings_name ApplicationGateway#backend_http_settings_name}
  */
  readonly backendHttpSettingsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#http_listener_name ApplicationGateway#http_listener_name}
  */
  readonly httpListenerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#priority ApplicationGateway#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#redirect_configuration_name ApplicationGateway#redirect_configuration_name}
  */
  readonly redirectConfigurationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#rewrite_rule_set_name ApplicationGateway#rewrite_rule_set_name}
  */
  readonly rewriteRuleSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#rule_type ApplicationGateway#rule_type}
  */
  readonly ruleType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#url_path_map_name ApplicationGateway#url_path_map_name}
  */
  readonly urlPathMapName?: string;
}

export function applicationGatewayRequestRoutingRuleToTerraform(struct?: ApplicationGatewayRequestRoutingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#ignore_case ApplicationGateway#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#negate ApplicationGateway#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#pattern ApplicationGateway#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#variable ApplicationGateway#variable}
  */
  readonly variable: string;
}

export function applicationGatewayRewriteRuleSetRewriteRuleConditionToTerraform(struct?: ApplicationGatewayRewriteRuleSetRewriteRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#header_name ApplicationGateway#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#header_value ApplicationGateway#header_value}
  */
  readonly headerValue: string;
}

export function applicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfigurationToTerraform(struct?: ApplicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#header_name ApplicationGateway#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#header_value ApplicationGateway#header_value}
  */
  readonly headerValue: string;
}

export function applicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfigurationToTerraform(struct?: ApplicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#path ApplicationGateway#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#query_string ApplicationGateway#query_string}
  */
  readonly queryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#reroute ApplicationGateway#reroute}
  */
  readonly reroute?: boolean | cdktf.IResolvable;
}

export function applicationGatewayRewriteRuleSetRewriteRuleUrlToTerraform(struct?: ApplicationGatewayRewriteRuleSetRewriteRuleUrlOutputReference | ApplicationGatewayRewriteRuleSetRewriteRuleUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApplicationGatewayRewriteRuleSetRewriteRuleUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._reroute !== undefined) {
      hasAnyValues = true;
      internalValueResult.reroute = this._reroute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayRewriteRuleSetRewriteRuleUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._queryString = undefined;
      this._reroute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._queryString = value.queryString;
      this._reroute = value.reroute;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // reroute - computed: false, optional: true, required: false
  private _reroute?: boolean | cdktf.IResolvable; 
  public get reroute() {
    return this.getBooleanAttribute('reroute');
  }
  public set reroute(value: boolean | cdktf.IResolvable) {
    this._reroute = value;
  }
  public resetReroute() {
    this._reroute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rerouteInput() {
    return this._reroute;
  }
}
export interface ApplicationGatewayRewriteRuleSetRewriteRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#rule_sequence ApplicationGateway#rule_sequence}
  */
  readonly ruleSequence: number;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#condition ApplicationGateway#condition}
  */
  readonly condition?: ApplicationGatewayRewriteRuleSetRewriteRuleCondition[] | cdktf.IResolvable;
  /**
  * request_header_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#request_header_configuration ApplicationGateway#request_header_configuration}
  */
  readonly requestHeaderConfiguration?: ApplicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfiguration[] | cdktf.IResolvable;
  /**
  * response_header_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#response_header_configuration ApplicationGateway#response_header_configuration}
  */
  readonly responseHeaderConfiguration?: ApplicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfiguration[] | cdktf.IResolvable;
  /**
  * url block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#url ApplicationGateway#url}
  */
  readonly url?: ApplicationGatewayRewriteRuleSetRewriteRuleUrl;
}

export function applicationGatewayRewriteRuleSetRewriteRuleToTerraform(struct?: ApplicationGatewayRewriteRuleSetRewriteRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * rewrite_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#rewrite_rule ApplicationGateway#rewrite_rule}
  */
  readonly rewriteRule?: ApplicationGatewayRewriteRuleSetRewriteRule[] | cdktf.IResolvable;
}

export function applicationGatewayRewriteRuleSetToTerraform(struct?: ApplicationGatewayRewriteRuleSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#capacity ApplicationGateway#capacity}
  */
  readonly capacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#tier ApplicationGateway#tier}
  */
  readonly tier: string;
}

export function applicationGatewaySkuToTerraform(struct?: ApplicationGatewaySkuOutputReference | ApplicationGatewaySku): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApplicationGatewaySku | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewaySku | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacity = undefined;
      this._name = undefined;
      this._tier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacity = value.capacity;
      this._name = value.name;
      this._tier = value.tier;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
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
    return this._tier;
  }
}
export interface ApplicationGatewaySslCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#data ApplicationGateway#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#key_vault_secret_id ApplicationGateway#key_vault_secret_id}
  */
  readonly keyVaultSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#password ApplicationGateway#password}
  */
  readonly password?: string;
}

export function applicationGatewaySslCertificateToTerraform(struct?: ApplicationGatewaySslCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#cipher_suites ApplicationGateway#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#disabled_protocols ApplicationGateway#disabled_protocols}
  */
  readonly disabledProtocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#min_protocol_version ApplicationGateway#min_protocol_version}
  */
  readonly minProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#policy_name ApplicationGateway#policy_name}
  */
  readonly policyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#policy_type ApplicationGateway#policy_type}
  */
  readonly policyType?: string;
}

export function applicationGatewaySslPolicyToTerraform(struct?: ApplicationGatewaySslPolicyOutputReference | ApplicationGatewaySslPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApplicationGatewaySslPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._disabledProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledProtocols = this._disabledProtocols;
    }
    if (this._minProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minProtocolVersion = this._minProtocolVersion;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewaySslPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipherSuites = undefined;
      this._disabledProtocols = undefined;
      this._minProtocolVersion = undefined;
      this._policyName = undefined;
      this._policyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipherSuites = value.cipherSuites;
      this._disabledProtocols = value.disabledProtocols;
      this._minProtocolVersion = value.minProtocolVersion;
      this._policyName = value.policyName;
      this._policyType = value.policyType;
    }
  }

  // cipher_suites - computed: false, optional: true, required: false
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  public resetCipherSuites() {
    this._cipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // disabled_protocols - computed: false, optional: true, required: false
  private _disabledProtocols?: string[]; 
  public get disabledProtocols() {
    return this.getListAttribute('disabled_protocols');
  }
  public set disabledProtocols(value: string[]) {
    this._disabledProtocols = value;
  }
  public resetDisabledProtocols() {
    this._disabledProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledProtocolsInput() {
    return this._disabledProtocols;
  }

  // min_protocol_version - computed: false, optional: true, required: false
  private _minProtocolVersion?: string; 
  public get minProtocolVersion() {
    return this.getStringAttribute('min_protocol_version');
  }
  public set minProtocolVersion(value: string) {
    this._minProtocolVersion = value;
  }
  public resetMinProtocolVersion() {
    this._minProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minProtocolVersionInput() {
    return this._minProtocolVersion;
  }

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // policy_type - computed: false, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }
}
export interface ApplicationGatewaySslProfileSslPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#cipher_suites ApplicationGateway#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#disabled_protocols ApplicationGateway#disabled_protocols}
  */
  readonly disabledProtocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#min_protocol_version ApplicationGateway#min_protocol_version}
  */
  readonly minProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#policy_name ApplicationGateway#policy_name}
  */
  readonly policyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#policy_type ApplicationGateway#policy_type}
  */
  readonly policyType?: string;
}

export function applicationGatewaySslProfileSslPolicyToTerraform(struct?: ApplicationGatewaySslProfileSslPolicyOutputReference | ApplicationGatewaySslProfileSslPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApplicationGatewaySslProfileSslPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._disabledProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledProtocols = this._disabledProtocols;
    }
    if (this._minProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minProtocolVersion = this._minProtocolVersion;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewaySslProfileSslPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipherSuites = undefined;
      this._disabledProtocols = undefined;
      this._minProtocolVersion = undefined;
      this._policyName = undefined;
      this._policyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipherSuites = value.cipherSuites;
      this._disabledProtocols = value.disabledProtocols;
      this._minProtocolVersion = value.minProtocolVersion;
      this._policyName = value.policyName;
      this._policyType = value.policyType;
    }
  }

  // cipher_suites - computed: false, optional: true, required: false
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  public resetCipherSuites() {
    this._cipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // disabled_protocols - computed: false, optional: true, required: false
  private _disabledProtocols?: string[]; 
  public get disabledProtocols() {
    return this.getListAttribute('disabled_protocols');
  }
  public set disabledProtocols(value: string[]) {
    this._disabledProtocols = value;
  }
  public resetDisabledProtocols() {
    this._disabledProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledProtocolsInput() {
    return this._disabledProtocols;
  }

  // min_protocol_version - computed: false, optional: true, required: false
  private _minProtocolVersion?: string; 
  public get minProtocolVersion() {
    return this.getStringAttribute('min_protocol_version');
  }
  public set minProtocolVersion(value: string) {
    this._minProtocolVersion = value;
  }
  public resetMinProtocolVersion() {
    this._minProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minProtocolVersionInput() {
    return this._minProtocolVersion;
  }

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // policy_type - computed: false, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }
}
export interface ApplicationGatewaySslProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#trusted_client_certificate_names ApplicationGateway#trusted_client_certificate_names}
  */
  readonly trustedClientCertificateNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#verify_client_cert_issuer_dn ApplicationGateway#verify_client_cert_issuer_dn}
  */
  readonly verifyClientCertIssuerDn?: boolean | cdktf.IResolvable;
  /**
  * ssl_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#ssl_policy ApplicationGateway#ssl_policy}
  */
  readonly sslPolicy?: ApplicationGatewaySslProfileSslPolicy;
}

export function applicationGatewaySslProfileToTerraform(struct?: ApplicationGatewaySslProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#create ApplicationGateway#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#delete ApplicationGateway#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#read ApplicationGateway#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#update ApplicationGateway#update}
  */
  readonly update?: string;
}

export function applicationGatewayTimeoutsToTerraform(struct?: ApplicationGatewayTimeoutsOutputReference | ApplicationGatewayTimeouts | cdktf.IResolvable): any {
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

export class ApplicationGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApplicationGatewayTimeouts | undefined {
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

  public set internalValue(value: ApplicationGatewayTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ApplicationGatewayTrustedClientCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#data ApplicationGateway#data}
  */
  readonly data: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
}

export function applicationGatewayTrustedClientCertificateToTerraform(struct?: ApplicationGatewayTrustedClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#data ApplicationGateway#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#key_vault_secret_id ApplicationGateway#key_vault_secret_id}
  */
  readonly keyVaultSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
}

export function applicationGatewayTrustedRootCertificateToTerraform(struct?: ApplicationGatewayTrustedRootCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    key_vault_secret_id: cdktf.stringToTerraform(struct!.keyVaultSecretId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface ApplicationGatewayUrlPathMapPathRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#backend_address_pool_name ApplicationGateway#backend_address_pool_name}
  */
  readonly backendAddressPoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#backend_http_settings_name ApplicationGateway#backend_http_settings_name}
  */
  readonly backendHttpSettingsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#firewall_policy_id ApplicationGateway#firewall_policy_id}
  */
  readonly firewallPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#paths ApplicationGateway#paths}
  */
  readonly paths: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#redirect_configuration_name ApplicationGateway#redirect_configuration_name}
  */
  readonly redirectConfigurationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#rewrite_rule_set_name ApplicationGateway#rewrite_rule_set_name}
  */
  readonly rewriteRuleSetName?: string;
}

export function applicationGatewayUrlPathMapPathRuleToTerraform(struct?: ApplicationGatewayUrlPathMapPathRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#default_backend_address_pool_name ApplicationGateway#default_backend_address_pool_name}
  */
  readonly defaultBackendAddressPoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#default_backend_http_settings_name ApplicationGateway#default_backend_http_settings_name}
  */
  readonly defaultBackendHttpSettingsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#default_redirect_configuration_name ApplicationGateway#default_redirect_configuration_name}
  */
  readonly defaultRedirectConfigurationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#default_rewrite_rule_set_name ApplicationGateway#default_rewrite_rule_set_name}
  */
  readonly defaultRewriteRuleSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * path_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#path_rule ApplicationGateway#path_rule}
  */
  readonly pathRule: ApplicationGatewayUrlPathMapPathRule[] | cdktf.IResolvable;
}

export function applicationGatewayUrlPathMapToTerraform(struct?: ApplicationGatewayUrlPathMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#rule_group_name ApplicationGateway#rule_group_name}
  */
  readonly ruleGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#rules ApplicationGateway#rules}
  */
  readonly rules?: number[];
}

export function applicationGatewayWafConfigurationDisabledRuleGroupToTerraform(struct?: ApplicationGatewayWafConfigurationDisabledRuleGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#match_variable ApplicationGateway#match_variable}
  */
  readonly matchVariable: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#selector ApplicationGateway#selector}
  */
  readonly selector?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#selector_match_operator ApplicationGateway#selector_match_operator}
  */
  readonly selectorMatchOperator?: string;
}

export function applicationGatewayWafConfigurationExclusionToTerraform(struct?: ApplicationGatewayWafConfigurationExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#enabled ApplicationGateway#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#file_upload_limit_mb ApplicationGateway#file_upload_limit_mb}
  */
  readonly fileUploadLimitMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#firewall_mode ApplicationGateway#firewall_mode}
  */
  readonly firewallMode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#max_request_body_size_kb ApplicationGateway#max_request_body_size_kb}
  */
  readonly maxRequestBodySizeKb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#request_body_check ApplicationGateway#request_body_check}
  */
  readonly requestBodyCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#rule_set_type ApplicationGateway#rule_set_type}
  */
  readonly ruleSetType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#rule_set_version ApplicationGateway#rule_set_version}
  */
  readonly ruleSetVersion: string;
  /**
  * disabled_rule_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#disabled_rule_group ApplicationGateway#disabled_rule_group}
  */
  readonly disabledRuleGroup?: ApplicationGatewayWafConfigurationDisabledRuleGroup[] | cdktf.IResolvable;
  /**
  * exclusion block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway#exclusion ApplicationGateway#exclusion}
  */
  readonly exclusion?: ApplicationGatewayWafConfigurationExclusion[] | cdktf.IResolvable;
}

export function applicationGatewayWafConfigurationToTerraform(struct?: ApplicationGatewayWafConfigurationOutputReference | ApplicationGatewayWafConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ApplicationGatewayWafConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fileUploadLimitMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUploadLimitMb = this._fileUploadLimitMb;
    }
    if (this._firewallMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallMode = this._firewallMode;
    }
    if (this._maxRequestBodySizeKb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestBodySizeKb = this._maxRequestBodySizeKb;
    }
    if (this._requestBodyCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBodyCheck = this._requestBodyCheck;
    }
    if (this._ruleSetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSetType = this._ruleSetType;
    }
    if (this._ruleSetVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSetVersion = this._ruleSetVersion;
    }
    if (this._disabledRuleGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledRuleGroup = this._disabledRuleGroup;
    }
    if (this._exclusion !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusion = this._exclusion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayWafConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._fileUploadLimitMb = undefined;
      this._firewallMode = undefined;
      this._maxRequestBodySizeKb = undefined;
      this._requestBodyCheck = undefined;
      this._ruleSetType = undefined;
      this._ruleSetVersion = undefined;
      this._disabledRuleGroup = undefined;
      this._exclusion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._fileUploadLimitMb = value.fileUploadLimitMb;
      this._firewallMode = value.firewallMode;
      this._maxRequestBodySizeKb = value.maxRequestBodySizeKb;
      this._requestBodyCheck = value.requestBodyCheck;
      this._ruleSetType = value.ruleSetType;
      this._ruleSetVersion = value.ruleSetVersion;
      this._disabledRuleGroup = value.disabledRuleGroup;
      this._exclusion = value.exclusion;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // file_upload_limit_mb - computed: false, optional: true, required: false
  private _fileUploadLimitMb?: number; 
  public get fileUploadLimitMb() {
    return this.getNumberAttribute('file_upload_limit_mb');
  }
  public set fileUploadLimitMb(value: number) {
    this._fileUploadLimitMb = value;
  }
  public resetFileUploadLimitMb() {
    this._fileUploadLimitMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUploadLimitMbInput() {
    return this._fileUploadLimitMb;
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
    return this._firewallMode;
  }

  // max_request_body_size_kb - computed: false, optional: true, required: false
  private _maxRequestBodySizeKb?: number; 
  public get maxRequestBodySizeKb() {
    return this.getNumberAttribute('max_request_body_size_kb');
  }
  public set maxRequestBodySizeKb(value: number) {
    this._maxRequestBodySizeKb = value;
  }
  public resetMaxRequestBodySizeKb() {
    this._maxRequestBodySizeKb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestBodySizeKbInput() {
    return this._maxRequestBodySizeKb;
  }

  // request_body_check - computed: false, optional: true, required: false
  private _requestBodyCheck?: boolean | cdktf.IResolvable; 
  public get requestBodyCheck() {
    return this.getBooleanAttribute('request_body_check');
  }
  public set requestBodyCheck(value: boolean | cdktf.IResolvable) {
    this._requestBodyCheck = value;
  }
  public resetRequestBodyCheck() {
    this._requestBodyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyCheckInput() {
    return this._requestBodyCheck;
  }

  // rule_set_type - computed: false, optional: true, required: false
  private _ruleSetType?: string; 
  public get ruleSetType() {
    return this.getStringAttribute('rule_set_type');
  }
  public set ruleSetType(value: string) {
    this._ruleSetType = value;
  }
  public resetRuleSetType() {
    this._ruleSetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetTypeInput() {
    return this._ruleSetType;
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
    return this._ruleSetVersion;
  }

  // disabled_rule_group - computed: false, optional: true, required: false
  private _disabledRuleGroup?: ApplicationGatewayWafConfigurationDisabledRuleGroup[] | cdktf.IResolvable; 
  public get disabledRuleGroup() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('disabled_rule_group');
  }
  public set disabledRuleGroup(value: ApplicationGatewayWafConfigurationDisabledRuleGroup[] | cdktf.IResolvable) {
    this._disabledRuleGroup = value;
  }
  public resetDisabledRuleGroup() {
    this._disabledRuleGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledRuleGroupInput() {
    return this._disabledRuleGroup;
  }

  // exclusion - computed: false, optional: true, required: false
  private _exclusion?: ApplicationGatewayWafConfigurationExclusion[] | cdktf.IResolvable; 
  public get exclusion() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('exclusion');
  }
  public set exclusion(value: ApplicationGatewayWafConfigurationExclusion[] | cdktf.IResolvable) {
    this._exclusion = value;
  }
  public resetExclusion() {
    this._exclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionInput() {
    return this._exclusion;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway azurerm_application_gateway}
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
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/application_gateway azurerm_application_gateway} Resource
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
    this._fipsEnabled = config.fipsEnabled;
    this._firewallPolicyId = config.firewallPolicyId;
    this._forceFirewallPolicyAssociation = config.forceFirewallPolicyAssociation;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._zones = config.zones;
    this._authenticationCertificate = config.authenticationCertificate;
    this._autoscaleConfiguration.internalValue = config.autoscaleConfiguration;
    this._backendAddressPool = config.backendAddressPool;
    this._backendHttpSettings = config.backendHttpSettings;
    this._customErrorConfiguration = config.customErrorConfiguration;
    this._frontendIpConfiguration = config.frontendIpConfiguration;
    this._frontendPort = config.frontendPort;
    this._gatewayIpConfiguration = config.gatewayIpConfiguration;
    this._httpListener = config.httpListener;
    this._identity.internalValue = config.identity;
    this._privateLinkConfiguration = config.privateLinkConfiguration;
    this._probe = config.probe;
    this._redirectConfiguration = config.redirectConfiguration;
    this._requestRoutingRule = config.requestRoutingRule;
    this._rewriteRuleSet = config.rewriteRuleSet;
    this._sku.internalValue = config.sku;
    this._sslCertificate = config.sslCertificate;
    this._sslPolicy.internalValue = config.sslPolicy;
    this._sslProfile = config.sslProfile;
    this._timeouts.internalValue = config.timeouts;
    this._trustedClientCertificate = config.trustedClientCertificate;
    this._trustedRootCertificate = config.trustedRootCertificate;
    this._urlPathMap = config.urlPathMap;
    this._wafConfiguration.internalValue = config.wafConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_http2 - computed: false, optional: true, required: false
  private _enableHttp2?: boolean | cdktf.IResolvable; 
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2');
  }
  public set enableHttp2(value: boolean | cdktf.IResolvable) {
    this._enableHttp2 = value;
  }
  public resetEnableHttp2() {
    this._enableHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttp2Input() {
    return this._enableHttp2;
  }

  // fips_enabled - computed: false, optional: true, required: false
  private _fipsEnabled?: boolean | cdktf.IResolvable; 
  public get fipsEnabled() {
    return this.getBooleanAttribute('fips_enabled');
  }
  public set fipsEnabled(value: boolean | cdktf.IResolvable) {
    this._fipsEnabled = value;
  }
  public resetFipsEnabled() {
    this._fipsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsEnabledInput() {
    return this._fipsEnabled;
  }

  // firewall_policy_id - computed: false, optional: true, required: false
  private _firewallPolicyId?: string; 
  public get firewallPolicyId() {
    return this.getStringAttribute('firewall_policy_id');
  }
  public set firewallPolicyId(value: string) {
    this._firewallPolicyId = value;
  }
  public resetFirewallPolicyId() {
    this._firewallPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyIdInput() {
    return this._firewallPolicyId;
  }

  // force_firewall_policy_association - computed: false, optional: true, required: false
  private _forceFirewallPolicyAssociation?: boolean | cdktf.IResolvable; 
  public get forceFirewallPolicyAssociation() {
    return this.getBooleanAttribute('force_firewall_policy_association');
  }
  public set forceFirewallPolicyAssociation(value: boolean | cdktf.IResolvable) {
    this._forceFirewallPolicyAssociation = value;
  }
  public resetForceFirewallPolicyAssociation() {
    this._forceFirewallPolicyAssociation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceFirewallPolicyAssociationInput() {
    return this._forceFirewallPolicyAssociation;
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
    return this._location;
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

  // private_endpoint_connection - computed: true, optional: false, required: false
  public privateEndpointConnection(index: string) {
    return new ApplicationGatewayPrivateEndpointConnection(this, 'private_endpoint_connection', index, true);
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
    return this._resourceGroupName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // authentication_certificate - computed: false, optional: true, required: false
  private _authenticationCertificate?: ApplicationGatewayAuthenticationCertificate[] | cdktf.IResolvable; 
  public get authenticationCertificate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('authentication_certificate');
  }
  public set authenticationCertificate(value: ApplicationGatewayAuthenticationCertificate[] | cdktf.IResolvable) {
    this._authenticationCertificate = value;
  }
  public resetAuthenticationCertificate() {
    this._authenticationCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationCertificateInput() {
    return this._authenticationCertificate;
  }

  // autoscale_configuration - computed: false, optional: true, required: false
  private _autoscaleConfiguration = new ApplicationGatewayAutoscaleConfigurationOutputReference(this, "autoscale_configuration", true);
  public get autoscaleConfiguration() {
    return this._autoscaleConfiguration;
  }
  public putAutoscaleConfiguration(value: ApplicationGatewayAutoscaleConfiguration) {
    this._autoscaleConfiguration.internalValue = value;
  }
  public resetAutoscaleConfiguration() {
    this._autoscaleConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleConfigurationInput() {
    return this._autoscaleConfiguration.internalValue;
  }

  // backend_address_pool - computed: false, optional: false, required: true
  private _backendAddressPool?: ApplicationGatewayBackendAddressPool[] | cdktf.IResolvable; 
  public get backendAddressPool() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('backend_address_pool');
  }
  public set backendAddressPool(value: ApplicationGatewayBackendAddressPool[] | cdktf.IResolvable) {
    this._backendAddressPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendAddressPoolInput() {
    return this._backendAddressPool;
  }

  // backend_http_settings - computed: false, optional: false, required: true
  private _backendHttpSettings?: ApplicationGatewayBackendHttpSettings[] | cdktf.IResolvable; 
  public get backendHttpSettings() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('backend_http_settings');
  }
  public set backendHttpSettings(value: ApplicationGatewayBackendHttpSettings[] | cdktf.IResolvable) {
    this._backendHttpSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendHttpSettingsInput() {
    return this._backendHttpSettings;
  }

  // custom_error_configuration - computed: false, optional: true, required: false
  private _customErrorConfiguration?: ApplicationGatewayCustomErrorConfiguration[] | cdktf.IResolvable; 
  public get customErrorConfiguration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom_error_configuration');
  }
  public set customErrorConfiguration(value: ApplicationGatewayCustomErrorConfiguration[] | cdktf.IResolvable) {
    this._customErrorConfiguration = value;
  }
  public resetCustomErrorConfiguration() {
    this._customErrorConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customErrorConfigurationInput() {
    return this._customErrorConfiguration;
  }

  // frontend_ip_configuration - computed: false, optional: false, required: true
  private _frontendIpConfiguration?: ApplicationGatewayFrontendIpConfiguration[] | cdktf.IResolvable; 
  public get frontendIpConfiguration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('frontend_ip_configuration');
  }
  public set frontendIpConfiguration(value: ApplicationGatewayFrontendIpConfiguration[] | cdktf.IResolvable) {
    this._frontendIpConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendIpConfigurationInput() {
    return this._frontendIpConfiguration;
  }

  // frontend_port - computed: false, optional: false, required: true
  private _frontendPort?: ApplicationGatewayFrontendPort[] | cdktf.IResolvable; 
  public get frontendPort() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('frontend_port')));
  }
  public set frontendPort(value: ApplicationGatewayFrontendPort[] | cdktf.IResolvable) {
    this._frontendPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendPortInput() {
    return this._frontendPort;
  }

  // gateway_ip_configuration - computed: false, optional: false, required: true
  private _gatewayIpConfiguration?: ApplicationGatewayGatewayIpConfiguration[] | cdktf.IResolvable; 
  public get gatewayIpConfiguration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('gateway_ip_configuration');
  }
  public set gatewayIpConfiguration(value: ApplicationGatewayGatewayIpConfiguration[] | cdktf.IResolvable) {
    this._gatewayIpConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpConfigurationInput() {
    return this._gatewayIpConfiguration;
  }

  // http_listener - computed: false, optional: false, required: true
  private _httpListener?: ApplicationGatewayHttpListener[] | cdktf.IResolvable; 
  public get httpListener() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_listener');
  }
  public set httpListener(value: ApplicationGatewayHttpListener[] | cdktf.IResolvable) {
    this._httpListener = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpListenerInput() {
    return this._httpListener;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new ApplicationGatewayIdentityOutputReference(this, "identity", true);
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: ApplicationGatewayIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // private_link_configuration - computed: false, optional: true, required: false
  private _privateLinkConfiguration?: ApplicationGatewayPrivateLinkConfiguration[] | cdktf.IResolvable; 
  public get privateLinkConfiguration() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('private_link_configuration')));
  }
  public set privateLinkConfiguration(value: ApplicationGatewayPrivateLinkConfiguration[] | cdktf.IResolvable) {
    this._privateLinkConfiguration = value;
  }
  public resetPrivateLinkConfiguration() {
    this._privateLinkConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkConfigurationInput() {
    return this._privateLinkConfiguration;
  }

  // probe - computed: false, optional: true, required: false
  private _probe?: ApplicationGatewayProbe[] | cdktf.IResolvable; 
  public get probe() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('probe');
  }
  public set probe(value: ApplicationGatewayProbe[] | cdktf.IResolvable) {
    this._probe = value;
  }
  public resetProbe() {
    this._probe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeInput() {
    return this._probe;
  }

  // redirect_configuration - computed: false, optional: true, required: false
  private _redirectConfiguration?: ApplicationGatewayRedirectConfiguration[] | cdktf.IResolvable; 
  public get redirectConfiguration() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('redirect_configuration')));
  }
  public set redirectConfiguration(value: ApplicationGatewayRedirectConfiguration[] | cdktf.IResolvable) {
    this._redirectConfiguration = value;
  }
  public resetRedirectConfiguration() {
    this._redirectConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectConfigurationInput() {
    return this._redirectConfiguration;
  }

  // request_routing_rule - computed: false, optional: false, required: true
  private _requestRoutingRule?: ApplicationGatewayRequestRoutingRule[] | cdktf.IResolvable; 
  public get requestRoutingRule() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('request_routing_rule')));
  }
  public set requestRoutingRule(value: ApplicationGatewayRequestRoutingRule[] | cdktf.IResolvable) {
    this._requestRoutingRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestRoutingRuleInput() {
    return this._requestRoutingRule;
  }

  // rewrite_rule_set - computed: false, optional: true, required: false
  private _rewriteRuleSet?: ApplicationGatewayRewriteRuleSet[] | cdktf.IResolvable; 
  public get rewriteRuleSet() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rewrite_rule_set');
  }
  public set rewriteRuleSet(value: ApplicationGatewayRewriteRuleSet[] | cdktf.IResolvable) {
    this._rewriteRuleSet = value;
  }
  public resetRewriteRuleSet() {
    this._rewriteRuleSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteRuleSetInput() {
    return this._rewriteRuleSet;
  }

  // sku - computed: false, optional: false, required: true
  private _sku = new ApplicationGatewaySkuOutputReference(this, "sku", true);
  public get sku() {
    return this._sku;
  }
  public putSku(value: ApplicationGatewaySku) {
    this._sku.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku.internalValue;
  }

  // ssl_certificate - computed: false, optional: true, required: false
  private _sslCertificate?: ApplicationGatewaySslCertificate[] | cdktf.IResolvable; 
  public get sslCertificate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ssl_certificate');
  }
  public set sslCertificate(value: ApplicationGatewaySslCertificate[] | cdktf.IResolvable) {
    this._sslCertificate = value;
  }
  public resetSslCertificate() {
    this._sslCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate;
  }

  // ssl_policy - computed: false, optional: true, required: false
  private _sslPolicy = new ApplicationGatewaySslPolicyOutputReference(this, "ssl_policy", true);
  public get sslPolicy() {
    return this._sslPolicy;
  }
  public putSslPolicy(value: ApplicationGatewaySslPolicy) {
    this._sslPolicy.internalValue = value;
  }
  public resetSslPolicy() {
    this._sslPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPolicyInput() {
    return this._sslPolicy.internalValue;
  }

  // ssl_profile - computed: false, optional: true, required: false
  private _sslProfile?: ApplicationGatewaySslProfile[] | cdktf.IResolvable; 
  public get sslProfile() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ssl_profile');
  }
  public set sslProfile(value: ApplicationGatewaySslProfile[] | cdktf.IResolvable) {
    this._sslProfile = value;
  }
  public resetSslProfile() {
    this._sslProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileInput() {
    return this._sslProfile;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApplicationGatewayTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApplicationGatewayTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // trusted_client_certificate - computed: false, optional: true, required: false
  private _trustedClientCertificate?: ApplicationGatewayTrustedClientCertificate[] | cdktf.IResolvable; 
  public get trustedClientCertificate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('trusted_client_certificate');
  }
  public set trustedClientCertificate(value: ApplicationGatewayTrustedClientCertificate[] | cdktf.IResolvable) {
    this._trustedClientCertificate = value;
  }
  public resetTrustedClientCertificate() {
    this._trustedClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedClientCertificateInput() {
    return this._trustedClientCertificate;
  }

  // trusted_root_certificate - computed: false, optional: true, required: false
  private _trustedRootCertificate?: ApplicationGatewayTrustedRootCertificate[] | cdktf.IResolvable; 
  public get trustedRootCertificate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('trusted_root_certificate');
  }
  public set trustedRootCertificate(value: ApplicationGatewayTrustedRootCertificate[] | cdktf.IResolvable) {
    this._trustedRootCertificate = value;
  }
  public resetTrustedRootCertificate() {
    this._trustedRootCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedRootCertificateInput() {
    return this._trustedRootCertificate;
  }

  // url_path_map - computed: false, optional: true, required: false
  private _urlPathMap?: ApplicationGatewayUrlPathMap[] | cdktf.IResolvable; 
  public get urlPathMap() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('url_path_map');
  }
  public set urlPathMap(value: ApplicationGatewayUrlPathMap[] | cdktf.IResolvable) {
    this._urlPathMap = value;
  }
  public resetUrlPathMap() {
    this._urlPathMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathMapInput() {
    return this._urlPathMap;
  }

  // waf_configuration - computed: false, optional: true, required: false
  private _wafConfiguration = new ApplicationGatewayWafConfigurationOutputReference(this, "waf_configuration", true);
  public get wafConfiguration() {
    return this._wafConfiguration;
  }
  public putWafConfiguration(value: ApplicationGatewayWafConfiguration) {
    this._wafConfiguration.internalValue = value;
  }
  public resetWafConfiguration() {
    this._wafConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafConfigurationInput() {
    return this._wafConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_http2: cdktf.booleanToTerraform(this._enableHttp2),
      fips_enabled: cdktf.booleanToTerraform(this._fipsEnabled),
      firewall_policy_id: cdktf.stringToTerraform(this._firewallPolicyId),
      force_firewall_policy_association: cdktf.booleanToTerraform(this._forceFirewallPolicyAssociation),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      authentication_certificate: cdktf.listMapper(applicationGatewayAuthenticationCertificateToTerraform)(this._authenticationCertificate),
      autoscale_configuration: applicationGatewayAutoscaleConfigurationToTerraform(this._autoscaleConfiguration.internalValue),
      backend_address_pool: cdktf.listMapper(applicationGatewayBackendAddressPoolToTerraform)(this._backendAddressPool),
      backend_http_settings: cdktf.listMapper(applicationGatewayBackendHttpSettingsToTerraform)(this._backendHttpSettings),
      custom_error_configuration: cdktf.listMapper(applicationGatewayCustomErrorConfigurationToTerraform)(this._customErrorConfiguration),
      frontend_ip_configuration: cdktf.listMapper(applicationGatewayFrontendIpConfigurationToTerraform)(this._frontendIpConfiguration),
      frontend_port: cdktf.listMapper(applicationGatewayFrontendPortToTerraform)(this._frontendPort),
      gateway_ip_configuration: cdktf.listMapper(applicationGatewayGatewayIpConfigurationToTerraform)(this._gatewayIpConfiguration),
      http_listener: cdktf.listMapper(applicationGatewayHttpListenerToTerraform)(this._httpListener),
      identity: applicationGatewayIdentityToTerraform(this._identity.internalValue),
      private_link_configuration: cdktf.listMapper(applicationGatewayPrivateLinkConfigurationToTerraform)(this._privateLinkConfiguration),
      probe: cdktf.listMapper(applicationGatewayProbeToTerraform)(this._probe),
      redirect_configuration: cdktf.listMapper(applicationGatewayRedirectConfigurationToTerraform)(this._redirectConfiguration),
      request_routing_rule: cdktf.listMapper(applicationGatewayRequestRoutingRuleToTerraform)(this._requestRoutingRule),
      rewrite_rule_set: cdktf.listMapper(applicationGatewayRewriteRuleSetToTerraform)(this._rewriteRuleSet),
      sku: applicationGatewaySkuToTerraform(this._sku.internalValue),
      ssl_certificate: cdktf.listMapper(applicationGatewaySslCertificateToTerraform)(this._sslCertificate),
      ssl_policy: applicationGatewaySslPolicyToTerraform(this._sslPolicy.internalValue),
      ssl_profile: cdktf.listMapper(applicationGatewaySslProfileToTerraform)(this._sslProfile),
      timeouts: applicationGatewayTimeoutsToTerraform(this._timeouts.internalValue),
      trusted_client_certificate: cdktf.listMapper(applicationGatewayTrustedClientCertificateToTerraform)(this._trustedClientCertificate),
      trusted_root_certificate: cdktf.listMapper(applicationGatewayTrustedRootCertificateToTerraform)(this._trustedRootCertificate),
      url_path_map: cdktf.listMapper(applicationGatewayUrlPathMapToTerraform)(this._urlPathMap),
      waf_configuration: applicationGatewayWafConfigurationToTerraform(this._wafConfiguration.internalValue),
    };
  }
}
