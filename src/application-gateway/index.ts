// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#enable_http2 ApplicationGateway#enable_http2}
  */
  readonly enableHttp2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#fips_enabled ApplicationGateway#fips_enabled}
  */
  readonly fipsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#firewall_policy_id ApplicationGateway#firewall_policy_id}
  */
  readonly firewallPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#force_firewall_policy_association ApplicationGateway#force_firewall_policy_association}
  */
  readonly forceFirewallPolicyAssociation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#id ApplicationGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#location ApplicationGateway#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#resource_group_name ApplicationGateway#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#tags ApplicationGateway#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#zones ApplicationGateway#zones}
  */
  readonly zones?: string[];
  /**
  * authentication_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#authentication_certificate ApplicationGateway#authentication_certificate}
  */
  readonly authenticationCertificate?: ApplicationGatewayAuthenticationCertificate[] | cdktf.IResolvable;
  /**
  * autoscale_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#autoscale_configuration ApplicationGateway#autoscale_configuration}
  */
  readonly autoscaleConfiguration?: ApplicationGatewayAutoscaleConfiguration;
  /**
  * backend_address_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#backend_address_pool ApplicationGateway#backend_address_pool}
  */
  readonly backendAddressPool: ApplicationGatewayBackendAddressPool[] | cdktf.IResolvable;
  /**
  * backend_http_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#backend_http_settings ApplicationGateway#backend_http_settings}
  */
  readonly backendHttpSettings: ApplicationGatewayBackendHttpSettings[] | cdktf.IResolvable;
  /**
  * custom_error_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#custom_error_configuration ApplicationGateway#custom_error_configuration}
  */
  readonly customErrorConfiguration?: ApplicationGatewayCustomErrorConfiguration[] | cdktf.IResolvable;
  /**
  * frontend_ip_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#frontend_ip_configuration ApplicationGateway#frontend_ip_configuration}
  */
  readonly frontendIpConfiguration: ApplicationGatewayFrontendIpConfiguration[] | cdktf.IResolvable;
  /**
  * frontend_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#frontend_port ApplicationGateway#frontend_port}
  */
  readonly frontendPort: ApplicationGatewayFrontendPort[] | cdktf.IResolvable;
  /**
  * gateway_ip_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#gateway_ip_configuration ApplicationGateway#gateway_ip_configuration}
  */
  readonly gatewayIpConfiguration: ApplicationGatewayGatewayIpConfiguration[] | cdktf.IResolvable;
  /**
  * global block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#global ApplicationGateway#global}
  */
  readonly global?: ApplicationGatewayGlobal;
  /**
  * http_listener block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#http_listener ApplicationGateway#http_listener}
  */
  readonly httpListener: ApplicationGatewayHttpListener[] | cdktf.IResolvable;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#identity ApplicationGateway#identity}
  */
  readonly identity?: ApplicationGatewayIdentity;
  /**
  * private_link_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#private_link_configuration ApplicationGateway#private_link_configuration}
  */
  readonly privateLinkConfiguration?: ApplicationGatewayPrivateLinkConfiguration[] | cdktf.IResolvable;
  /**
  * probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#probe ApplicationGateway#probe}
  */
  readonly probe?: ApplicationGatewayProbe[] | cdktf.IResolvable;
  /**
  * redirect_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#redirect_configuration ApplicationGateway#redirect_configuration}
  */
  readonly redirectConfiguration?: ApplicationGatewayRedirectConfiguration[] | cdktf.IResolvable;
  /**
  * request_routing_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#request_routing_rule ApplicationGateway#request_routing_rule}
  */
  readonly requestRoutingRule: ApplicationGatewayRequestRoutingRule[] | cdktf.IResolvable;
  /**
  * rewrite_rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#rewrite_rule_set ApplicationGateway#rewrite_rule_set}
  */
  readonly rewriteRuleSet?: ApplicationGatewayRewriteRuleSet[] | cdktf.IResolvable;
  /**
  * sku block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#sku ApplicationGateway#sku}
  */
  readonly sku: ApplicationGatewaySku;
  /**
  * ssl_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#ssl_certificate ApplicationGateway#ssl_certificate}
  */
  readonly sslCertificate?: ApplicationGatewaySslCertificate[] | cdktf.IResolvable;
  /**
  * ssl_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#ssl_policy ApplicationGateway#ssl_policy}
  */
  readonly sslPolicy?: ApplicationGatewaySslPolicy;
  /**
  * ssl_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#ssl_profile ApplicationGateway#ssl_profile}
  */
  readonly sslProfile?: ApplicationGatewaySslProfile[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#timeouts ApplicationGateway#timeouts}
  */
  readonly timeouts?: ApplicationGatewayTimeouts;
  /**
  * trusted_client_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#trusted_client_certificate ApplicationGateway#trusted_client_certificate}
  */
  readonly trustedClientCertificate?: ApplicationGatewayTrustedClientCertificate[] | cdktf.IResolvable;
  /**
  * trusted_root_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#trusted_root_certificate ApplicationGateway#trusted_root_certificate}
  */
  readonly trustedRootCertificate?: ApplicationGatewayTrustedRootCertificate[] | cdktf.IResolvable;
  /**
  * url_path_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#url_path_map ApplicationGateway#url_path_map}
  */
  readonly urlPathMap?: ApplicationGatewayUrlPathMap[] | cdktf.IResolvable;
  /**
  * waf_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#waf_configuration ApplicationGateway#waf_configuration}
  */
  readonly wafConfiguration?: ApplicationGatewayWafConfiguration;
}
export interface ApplicationGatewayPrivateEndpointConnection {
}

export function applicationGatewayPrivateEndpointConnectionToTerraform(struct?: ApplicationGatewayPrivateEndpointConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function applicationGatewayPrivateEndpointConnectionToHclTerraform(struct?: ApplicationGatewayPrivateEndpointConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApplicationGatewayPrivateEndpointConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayPrivateEndpointConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayPrivateEndpointConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ApplicationGatewayPrivateEndpointConnectionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayPrivateEndpointConnectionOutputReference {
    return new ApplicationGatewayPrivateEndpointConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayAuthenticationCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#data ApplicationGateway#data}
  */
  readonly data: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#name ApplicationGateway#name}
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


export function applicationGatewayAuthenticationCertificateToHclTerraform(struct?: ApplicationGatewayAuthenticationCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayAuthenticationCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayAuthenticationCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayAuthenticationCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._name = value.name;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
}

export class ApplicationGatewayAuthenticationCertificateList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayAuthenticationCertificate[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayAuthenticationCertificateOutputReference {
    return new ApplicationGatewayAuthenticationCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayAutoscaleConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#max_capacity ApplicationGateway#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#min_capacity ApplicationGateway#min_capacity}
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


export function applicationGatewayAutoscaleConfigurationToHclTerraform(struct?: ApplicationGatewayAutoscaleConfigurationOutputReference | ApplicationGatewayAutoscaleConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_capacity: {
      value: cdktf.numberToHclTerraform(struct!.maxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_capacity: {
      value: cdktf.numberToHclTerraform(struct!.minCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayAutoscaleConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#fqdns ApplicationGateway#fqdns}
  */
  readonly fqdns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#ip_addresses ApplicationGateway#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
}

export function applicationGatewayBackendAddressPoolToTerraform(struct?: ApplicationGatewayBackendAddressPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fqdns),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function applicationGatewayBackendAddressPoolToHclTerraform(struct?: ApplicationGatewayBackendAddressPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fqdns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayBackendAddressPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayBackendAddressPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdns = this._fqdns;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayBackendAddressPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdns = undefined;
      this._ipAddresses = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdns = value.fqdns;
      this._ipAddresses = value.ipAddresses;
      this._name = value.name;
    }
  }

  // fqdns - computed: false, optional: true, required: false
  private _fqdns?: string[]; 
  public get fqdns() {
    return cdktf.Fn.tolist(this.getListAttribute('fqdns'));
  }
  public set fqdns(value: string[]) {
    this._fqdns = value;
  }
  public resetFqdns() {
    this._fqdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnsInput() {
    return this._fqdns;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_addresses'));
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
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
}

export class ApplicationGatewayBackendAddressPoolList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayBackendAddressPool[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayBackendAddressPoolOutputReference {
    return new ApplicationGatewayBackendAddressPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayBackendHttpSettingsAuthenticationCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#name ApplicationGateway#name}
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


export function applicationGatewayBackendHttpSettingsAuthenticationCertificateToHclTerraform(struct?: ApplicationGatewayBackendHttpSettingsAuthenticationCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayBackendHttpSettingsAuthenticationCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayBackendHttpSettingsAuthenticationCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayBackendHttpSettingsAuthenticationCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
}

export class ApplicationGatewayBackendHttpSettingsAuthenticationCertificateList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayBackendHttpSettingsAuthenticationCertificate[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayBackendHttpSettingsAuthenticationCertificateOutputReference {
    return new ApplicationGatewayBackendHttpSettingsAuthenticationCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayBackendHttpSettingsConnectionDraining {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#drain_timeout_sec ApplicationGateway#drain_timeout_sec}
  */
  readonly drainTimeoutSec: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#enabled ApplicationGateway#enabled}
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


export function applicationGatewayBackendHttpSettingsConnectionDrainingToHclTerraform(struct?: ApplicationGatewayBackendHttpSettingsConnectionDrainingOutputReference | ApplicationGatewayBackendHttpSettingsConnectionDraining): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drain_timeout_sec: {
      value: cdktf.numberToHclTerraform(struct!.drainTimeoutSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayBackendHttpSettingsConnectionDrainingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#affinity_cookie_name ApplicationGateway#affinity_cookie_name}
  */
  readonly affinityCookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#cookie_based_affinity ApplicationGateway#cookie_based_affinity}
  */
  readonly cookieBasedAffinity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#host_name ApplicationGateway#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#path ApplicationGateway#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#pick_host_name_from_backend_address ApplicationGateway#pick_host_name_from_backend_address}
  */
  readonly pickHostNameFromBackendAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#port ApplicationGateway#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#probe_name ApplicationGateway#probe_name}
  */
  readonly probeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#protocol ApplicationGateway#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#request_timeout ApplicationGateway#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#trusted_root_certificate_names ApplicationGateway#trusted_root_certificate_names}
  */
  readonly trustedRootCertificateNames?: string[];
  /**
  * authentication_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#authentication_certificate ApplicationGateway#authentication_certificate}
  */
  readonly authenticationCertificate?: ApplicationGatewayBackendHttpSettingsAuthenticationCertificate[] | cdktf.IResolvable;
  /**
  * connection_draining block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#connection_draining ApplicationGateway#connection_draining}
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
    trusted_root_certificate_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trustedRootCertificateNames),
    authentication_certificate: cdktf.listMapper(applicationGatewayBackendHttpSettingsAuthenticationCertificateToTerraform, true)(struct!.authenticationCertificate),
    connection_draining: applicationGatewayBackendHttpSettingsConnectionDrainingToTerraform(struct!.connectionDraining),
  }
}


export function applicationGatewayBackendHttpSettingsToHclTerraform(struct?: ApplicationGatewayBackendHttpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity_cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.affinityCookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_based_affinity: {
      value: cdktf.stringToHclTerraform(struct!.cookieBasedAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pick_host_name_from_backend_address: {
      value: cdktf.booleanToHclTerraform(struct!.pickHostNameFromBackendAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    probe_name: {
      value: cdktf.stringToHclTerraform(struct!.probeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_timeout: {
      value: cdktf.numberToHclTerraform(struct!.requestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trusted_root_certificate_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trustedRootCertificateNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    authentication_certificate: {
      value: cdktf.listMapperHcl(applicationGatewayBackendHttpSettingsAuthenticationCertificateToHclTerraform, true)(struct!.authenticationCertificate),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationGatewayBackendHttpSettingsAuthenticationCertificateList",
    },
    connection_draining: {
      value: applicationGatewayBackendHttpSettingsConnectionDrainingToHclTerraform(struct!.connectionDraining),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationGatewayBackendHttpSettingsConnectionDrainingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayBackendHttpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayBackendHttpSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinityCookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinityCookieName = this._affinityCookieName;
    }
    if (this._cookieBasedAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieBasedAffinity = this._cookieBasedAffinity;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._pickHostNameFromBackendAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.pickHostNameFromBackendAddress = this._pickHostNameFromBackendAddress;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._probeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeName = this._probeName;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._requestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeout = this._requestTimeout;
    }
    if (this._trustedRootCertificateNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedRootCertificateNames = this._trustedRootCertificateNames;
    }
    if (this._authenticationCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationCertificate = this._authenticationCertificate?.internalValue;
    }
    if (this._connectionDraining?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionDraining = this._connectionDraining?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayBackendHttpSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinityCookieName = undefined;
      this._cookieBasedAffinity = undefined;
      this._hostName = undefined;
      this._name = undefined;
      this._path = undefined;
      this._pickHostNameFromBackendAddress = undefined;
      this._port = undefined;
      this._probeName = undefined;
      this._protocol = undefined;
      this._requestTimeout = undefined;
      this._trustedRootCertificateNames = undefined;
      this._authenticationCertificate.internalValue = undefined;
      this._connectionDraining.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinityCookieName = value.affinityCookieName;
      this._cookieBasedAffinity = value.cookieBasedAffinity;
      this._hostName = value.hostName;
      this._name = value.name;
      this._path = value.path;
      this._pickHostNameFromBackendAddress = value.pickHostNameFromBackendAddress;
      this._port = value.port;
      this._probeName = value.probeName;
      this._protocol = value.protocol;
      this._requestTimeout = value.requestTimeout;
      this._trustedRootCertificateNames = value.trustedRootCertificateNames;
      this._authenticationCertificate.internalValue = value.authenticationCertificate;
      this._connectionDraining.internalValue = value.connectionDraining;
    }
  }

  // affinity_cookie_name - computed: false, optional: true, required: false
  private _affinityCookieName?: string; 
  public get affinityCookieName() {
    return this.getStringAttribute('affinity_cookie_name');
  }
  public set affinityCookieName(value: string) {
    this._affinityCookieName = value;
  }
  public resetAffinityCookieName() {
    this._affinityCookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityCookieNameInput() {
    return this._affinityCookieName;
  }

  // cookie_based_affinity - computed: false, optional: false, required: true
  private _cookieBasedAffinity?: string; 
  public get cookieBasedAffinity() {
    return this.getStringAttribute('cookie_based_affinity');
  }
  public set cookieBasedAffinity(value: string) {
    this._cookieBasedAffinity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieBasedAffinityInput() {
    return this._cookieBasedAffinity;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // pick_host_name_from_backend_address - computed: false, optional: true, required: false
  private _pickHostNameFromBackendAddress?: boolean | cdktf.IResolvable; 
  public get pickHostNameFromBackendAddress() {
    return this.getBooleanAttribute('pick_host_name_from_backend_address');
  }
  public set pickHostNameFromBackendAddress(value: boolean | cdktf.IResolvable) {
    this._pickHostNameFromBackendAddress = value;
  }
  public resetPickHostNameFromBackendAddress() {
    this._pickHostNameFromBackendAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pickHostNameFromBackendAddressInput() {
    return this._pickHostNameFromBackendAddress;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // probe_id - computed: true, optional: false, required: false
  public get probeId() {
    return this.getStringAttribute('probe_id');
  }

  // probe_name - computed: false, optional: true, required: false
  private _probeName?: string; 
  public get probeName() {
    return this.getStringAttribute('probe_name');
  }
  public set probeName(value: string) {
    this._probeName = value;
  }
  public resetProbeName() {
    this._probeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeNameInput() {
    return this._probeName;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }
  public set requestTimeout(value: number) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // trusted_root_certificate_names - computed: false, optional: true, required: false
  private _trustedRootCertificateNames?: string[]; 
  public get trustedRootCertificateNames() {
    return this.getListAttribute('trusted_root_certificate_names');
  }
  public set trustedRootCertificateNames(value: string[]) {
    this._trustedRootCertificateNames = value;
  }
  public resetTrustedRootCertificateNames() {
    this._trustedRootCertificateNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedRootCertificateNamesInput() {
    return this._trustedRootCertificateNames;
  }

  // authentication_certificate - computed: false, optional: true, required: false
  private _authenticationCertificate = new ApplicationGatewayBackendHttpSettingsAuthenticationCertificateList(this, "authentication_certificate", false);
  public get authenticationCertificate() {
    return this._authenticationCertificate;
  }
  public putAuthenticationCertificate(value: ApplicationGatewayBackendHttpSettingsAuthenticationCertificate[] | cdktf.IResolvable) {
    this._authenticationCertificate.internalValue = value;
  }
  public resetAuthenticationCertificate() {
    this._authenticationCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationCertificateInput() {
    return this._authenticationCertificate.internalValue;
  }

  // connection_draining - computed: false, optional: true, required: false
  private _connectionDraining = new ApplicationGatewayBackendHttpSettingsConnectionDrainingOutputReference(this, "connection_draining");
  public get connectionDraining() {
    return this._connectionDraining;
  }
  public putConnectionDraining(value: ApplicationGatewayBackendHttpSettingsConnectionDraining) {
    this._connectionDraining.internalValue = value;
  }
  public resetConnectionDraining() {
    this._connectionDraining.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDrainingInput() {
    return this._connectionDraining.internalValue;
  }
}

export class ApplicationGatewayBackendHttpSettingsList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayBackendHttpSettings[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayBackendHttpSettingsOutputReference {
    return new ApplicationGatewayBackendHttpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayCustomErrorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#custom_error_page_url ApplicationGateway#custom_error_page_url}
  */
  readonly customErrorPageUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#status_code ApplicationGateway#status_code}
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


export function applicationGatewayCustomErrorConfigurationToHclTerraform(struct?: ApplicationGatewayCustomErrorConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_error_page_url: {
      value: cdktf.stringToHclTerraform(struct!.customErrorPageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayCustomErrorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayCustomErrorConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customErrorPageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.customErrorPageUrl = this._customErrorPageUrl;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayCustomErrorConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customErrorPageUrl = undefined;
      this._statusCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customErrorPageUrl = value.customErrorPageUrl;
      this._statusCode = value.statusCode;
    }
  }

  // custom_error_page_url - computed: false, optional: false, required: true
  private _customErrorPageUrl?: string; 
  public get customErrorPageUrl() {
    return this.getStringAttribute('custom_error_page_url');
  }
  public set customErrorPageUrl(value: string) {
    this._customErrorPageUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customErrorPageUrlInput() {
    return this._customErrorPageUrl;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status_code - computed: false, optional: false, required: true
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}

export class ApplicationGatewayCustomErrorConfigurationList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayCustomErrorConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayCustomErrorConfigurationOutputReference {
    return new ApplicationGatewayCustomErrorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayFrontendIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#private_ip_address ApplicationGateway#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#private_ip_address_allocation ApplicationGateway#private_ip_address_allocation}
  */
  readonly privateIpAddressAllocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#private_link_configuration_name ApplicationGateway#private_link_configuration_name}
  */
  readonly privateLinkConfigurationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#public_ip_address_id ApplicationGateway#public_ip_address_id}
  */
  readonly publicIpAddressId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#subnet_id ApplicationGateway#subnet_id}
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


export function applicationGatewayFrontendIpConfigurationToHclTerraform(struct?: ApplicationGatewayFrontendIpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip_address_allocation: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAddressAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_link_configuration_name: {
      value: cdktf.stringToHclTerraform(struct!.privateLinkConfigurationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip_address_id: {
      value: cdktf.stringToHclTerraform(struct!.publicIpAddressId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayFrontendIpConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayFrontendIpConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._privateIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddress = this._privateIpAddress;
    }
    if (this._privateIpAddressAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddressAllocation = this._privateIpAddressAllocation;
    }
    if (this._privateLinkConfigurationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLinkConfigurationName = this._privateLinkConfigurationName;
    }
    if (this._publicIpAddressId !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpAddressId = this._publicIpAddressId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayFrontendIpConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._privateIpAddress = undefined;
      this._privateIpAddressAllocation = undefined;
      this._privateLinkConfigurationName = undefined;
      this._publicIpAddressId = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._privateIpAddress = value.privateIpAddress;
      this._privateIpAddressAllocation = value.privateIpAddressAllocation;
      this._privateLinkConfigurationName = value.privateLinkConfigurationName;
      this._publicIpAddressId = value.publicIpAddressId;
      this._subnetId = value.subnetId;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // private_ip_address - computed: true, optional: true, required: false
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // private_ip_address_allocation - computed: false, optional: true, required: false
  private _privateIpAddressAllocation?: string; 
  public get privateIpAddressAllocation() {
    return this.getStringAttribute('private_ip_address_allocation');
  }
  public set privateIpAddressAllocation(value: string) {
    this._privateIpAddressAllocation = value;
  }
  public resetPrivateIpAddressAllocation() {
    this._privateIpAddressAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressAllocationInput() {
    return this._privateIpAddressAllocation;
  }

  // private_link_configuration_id - computed: true, optional: false, required: false
  public get privateLinkConfigurationId() {
    return this.getStringAttribute('private_link_configuration_id');
  }

  // private_link_configuration_name - computed: false, optional: true, required: false
  private _privateLinkConfigurationName?: string; 
  public get privateLinkConfigurationName() {
    return this.getStringAttribute('private_link_configuration_name');
  }
  public set privateLinkConfigurationName(value: string) {
    this._privateLinkConfigurationName = value;
  }
  public resetPrivateLinkConfigurationName() {
    this._privateLinkConfigurationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkConfigurationNameInput() {
    return this._privateLinkConfigurationName;
  }

  // public_ip_address_id - computed: false, optional: true, required: false
  private _publicIpAddressId?: string; 
  public get publicIpAddressId() {
    return this.getStringAttribute('public_ip_address_id');
  }
  public set publicIpAddressId(value: string) {
    this._publicIpAddressId = value;
  }
  public resetPublicIpAddressId() {
    this._publicIpAddressId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressIdInput() {
    return this._publicIpAddressId;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class ApplicationGatewayFrontendIpConfigurationList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayFrontendIpConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayFrontendIpConfigurationOutputReference {
    return new ApplicationGatewayFrontendIpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayFrontendPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#port ApplicationGateway#port}
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


export function applicationGatewayFrontendPortToHclTerraform(struct?: ApplicationGatewayFrontendPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayFrontendPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayFrontendPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayFrontendPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class ApplicationGatewayFrontendPortList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayFrontendPort[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayFrontendPortOutputReference {
    return new ApplicationGatewayFrontendPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayGatewayIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#subnet_id ApplicationGateway#subnet_id}
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


export function applicationGatewayGatewayIpConfigurationToHclTerraform(struct?: ApplicationGatewayGatewayIpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayGatewayIpConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayGatewayIpConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayGatewayIpConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._subnetId = value.subnetId;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class ApplicationGatewayGatewayIpConfigurationList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayGatewayIpConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayGatewayIpConfigurationOutputReference {
    return new ApplicationGatewayGatewayIpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayGlobal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#request_buffering_enabled ApplicationGateway#request_buffering_enabled}
  */
  readonly requestBufferingEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#response_buffering_enabled ApplicationGateway#response_buffering_enabled}
  */
  readonly responseBufferingEnabled: boolean | cdktf.IResolvable;
}

export function applicationGatewayGlobalToTerraform(struct?: ApplicationGatewayGlobalOutputReference | ApplicationGatewayGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_buffering_enabled: cdktf.booleanToTerraform(struct!.requestBufferingEnabled),
    response_buffering_enabled: cdktf.booleanToTerraform(struct!.responseBufferingEnabled),
  }
}


export function applicationGatewayGlobalToHclTerraform(struct?: ApplicationGatewayGlobalOutputReference | ApplicationGatewayGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_buffering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.requestBufferingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_buffering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.responseBufferingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationGatewayGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestBufferingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBufferingEnabled = this._requestBufferingEnabled;
    }
    if (this._responseBufferingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseBufferingEnabled = this._responseBufferingEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestBufferingEnabled = undefined;
      this._responseBufferingEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestBufferingEnabled = value.requestBufferingEnabled;
      this._responseBufferingEnabled = value.responseBufferingEnabled;
    }
  }

  // request_buffering_enabled - computed: false, optional: false, required: true
  private _requestBufferingEnabled?: boolean | cdktf.IResolvable; 
  public get requestBufferingEnabled() {
    return this.getBooleanAttribute('request_buffering_enabled');
  }
  public set requestBufferingEnabled(value: boolean | cdktf.IResolvable) {
    this._requestBufferingEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBufferingEnabledInput() {
    return this._requestBufferingEnabled;
  }

  // response_buffering_enabled - computed: false, optional: false, required: true
  private _responseBufferingEnabled?: boolean | cdktf.IResolvable; 
  public get responseBufferingEnabled() {
    return this.getBooleanAttribute('response_buffering_enabled');
  }
  public set responseBufferingEnabled(value: boolean | cdktf.IResolvable) {
    this._responseBufferingEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseBufferingEnabledInput() {
    return this._responseBufferingEnabled;
  }
}
export interface ApplicationGatewayHttpListenerCustomErrorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#custom_error_page_url ApplicationGateway#custom_error_page_url}
  */
  readonly customErrorPageUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#status_code ApplicationGateway#status_code}
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


export function applicationGatewayHttpListenerCustomErrorConfigurationToHclTerraform(struct?: ApplicationGatewayHttpListenerCustomErrorConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_error_page_url: {
      value: cdktf.stringToHclTerraform(struct!.customErrorPageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayHttpListenerCustomErrorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayHttpListenerCustomErrorConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customErrorPageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.customErrorPageUrl = this._customErrorPageUrl;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayHttpListenerCustomErrorConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customErrorPageUrl = undefined;
      this._statusCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customErrorPageUrl = value.customErrorPageUrl;
      this._statusCode = value.statusCode;
    }
  }

  // custom_error_page_url - computed: false, optional: false, required: true
  private _customErrorPageUrl?: string; 
  public get customErrorPageUrl() {
    return this.getStringAttribute('custom_error_page_url');
  }
  public set customErrorPageUrl(value: string) {
    this._customErrorPageUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customErrorPageUrlInput() {
    return this._customErrorPageUrl;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status_code - computed: false, optional: false, required: true
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}

export class ApplicationGatewayHttpListenerCustomErrorConfigurationList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayHttpListenerCustomErrorConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayHttpListenerCustomErrorConfigurationOutputReference {
    return new ApplicationGatewayHttpListenerCustomErrorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayHttpListener {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#firewall_policy_id ApplicationGateway#firewall_policy_id}
  */
  readonly firewallPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#frontend_ip_configuration_name ApplicationGateway#frontend_ip_configuration_name}
  */
  readonly frontendIpConfigurationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#frontend_port_name ApplicationGateway#frontend_port_name}
  */
  readonly frontendPortName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#host_name ApplicationGateway#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#host_names ApplicationGateway#host_names}
  */
  readonly hostNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#protocol ApplicationGateway#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#require_sni ApplicationGateway#require_sni}
  */
  readonly requireSni?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#ssl_certificate_name ApplicationGateway#ssl_certificate_name}
  */
  readonly sslCertificateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#ssl_profile_name ApplicationGateway#ssl_profile_name}
  */
  readonly sslProfileName?: string;
  /**
  * custom_error_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#custom_error_configuration ApplicationGateway#custom_error_configuration}
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
    host_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostNames),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    require_sni: cdktf.booleanToTerraform(struct!.requireSni),
    ssl_certificate_name: cdktf.stringToTerraform(struct!.sslCertificateName),
    ssl_profile_name: cdktf.stringToTerraform(struct!.sslProfileName),
    custom_error_configuration: cdktf.listMapper(applicationGatewayHttpListenerCustomErrorConfigurationToTerraform, true)(struct!.customErrorConfiguration),
  }
}


export function applicationGatewayHttpListenerToHclTerraform(struct?: ApplicationGatewayHttpListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    firewall_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.firewallPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frontend_ip_configuration_name: {
      value: cdktf.stringToHclTerraform(struct!.frontendIpConfigurationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frontend_port_name: {
      value: cdktf.stringToHclTerraform(struct!.frontendPortName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_sni: {
      value: cdktf.booleanToHclTerraform(struct!.requireSni),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_certificate_name: {
      value: cdktf.stringToHclTerraform(struct!.sslCertificateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.sslProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_error_configuration: {
      value: cdktf.listMapperHcl(applicationGatewayHttpListenerCustomErrorConfigurationToHclTerraform, true)(struct!.customErrorConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationGatewayHttpListenerCustomErrorConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayHttpListenerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayHttpListener | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firewallPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallPolicyId = this._firewallPolicyId;
    }
    if (this._frontendIpConfigurationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontendIpConfigurationName = this._frontendIpConfigurationName;
    }
    if (this._frontendPortName !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontendPortName = this._frontendPortName;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._hostNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNames = this._hostNames;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._requireSni !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSni = this._requireSni;
    }
    if (this._sslCertificateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertificateName = this._sslCertificateName;
    }
    if (this._sslProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProfileName = this._sslProfileName;
    }
    if (this._customErrorConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customErrorConfiguration = this._customErrorConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayHttpListener | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._firewallPolicyId = undefined;
      this._frontendIpConfigurationName = undefined;
      this._frontendPortName = undefined;
      this._hostName = undefined;
      this._hostNames = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._requireSni = undefined;
      this._sslCertificateName = undefined;
      this._sslProfileName = undefined;
      this._customErrorConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._firewallPolicyId = value.firewallPolicyId;
      this._frontendIpConfigurationName = value.frontendIpConfigurationName;
      this._frontendPortName = value.frontendPortName;
      this._hostName = value.hostName;
      this._hostNames = value.hostNames;
      this._name = value.name;
      this._protocol = value.protocol;
      this._requireSni = value.requireSni;
      this._sslCertificateName = value.sslCertificateName;
      this._sslProfileName = value.sslProfileName;
      this._customErrorConfiguration.internalValue = value.customErrorConfiguration;
    }
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

  // frontend_ip_configuration_id - computed: true, optional: false, required: false
  public get frontendIpConfigurationId() {
    return this.getStringAttribute('frontend_ip_configuration_id');
  }

  // frontend_ip_configuration_name - computed: false, optional: false, required: true
  private _frontendIpConfigurationName?: string; 
  public get frontendIpConfigurationName() {
    return this.getStringAttribute('frontend_ip_configuration_name');
  }
  public set frontendIpConfigurationName(value: string) {
    this._frontendIpConfigurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendIpConfigurationNameInput() {
    return this._frontendIpConfigurationName;
  }

  // frontend_port_id - computed: true, optional: false, required: false
  public get frontendPortId() {
    return this.getStringAttribute('frontend_port_id');
  }

  // frontend_port_name - computed: false, optional: false, required: true
  private _frontendPortName?: string; 
  public get frontendPortName() {
    return this.getStringAttribute('frontend_port_name');
  }
  public set frontendPortName(value: string) {
    this._frontendPortName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendPortNameInput() {
    return this._frontendPortName;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // host_names - computed: false, optional: true, required: false
  private _hostNames?: string[]; 
  public get hostNames() {
    return cdktf.Fn.tolist(this.getListAttribute('host_names'));
  }
  public set hostNames(value: string[]) {
    this._hostNames = value;
  }
  public resetHostNames() {
    this._hostNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNamesInput() {
    return this._hostNames;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // require_sni - computed: false, optional: true, required: false
  private _requireSni?: boolean | cdktf.IResolvable; 
  public get requireSni() {
    return this.getBooleanAttribute('require_sni');
  }
  public set requireSni(value: boolean | cdktf.IResolvable) {
    this._requireSni = value;
  }
  public resetRequireSni() {
    this._requireSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSniInput() {
    return this._requireSni;
  }

  // ssl_certificate_id - computed: true, optional: false, required: false
  public get sslCertificateId() {
    return this.getStringAttribute('ssl_certificate_id');
  }

  // ssl_certificate_name - computed: false, optional: true, required: false
  private _sslCertificateName?: string; 
  public get sslCertificateName() {
    return this.getStringAttribute('ssl_certificate_name');
  }
  public set sslCertificateName(value: string) {
    this._sslCertificateName = value;
  }
  public resetSslCertificateName() {
    this._sslCertificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateNameInput() {
    return this._sslCertificateName;
  }

  // ssl_profile_id - computed: true, optional: false, required: false
  public get sslProfileId() {
    return this.getStringAttribute('ssl_profile_id');
  }

  // ssl_profile_name - computed: false, optional: true, required: false
  private _sslProfileName?: string; 
  public get sslProfileName() {
    return this.getStringAttribute('ssl_profile_name');
  }
  public set sslProfileName(value: string) {
    this._sslProfileName = value;
  }
  public resetSslProfileName() {
    this._sslProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileNameInput() {
    return this._sslProfileName;
  }

  // custom_error_configuration - computed: false, optional: true, required: false
  private _customErrorConfiguration = new ApplicationGatewayHttpListenerCustomErrorConfigurationList(this, "custom_error_configuration", false);
  public get customErrorConfiguration() {
    return this._customErrorConfiguration;
  }
  public putCustomErrorConfiguration(value: ApplicationGatewayHttpListenerCustomErrorConfiguration[] | cdktf.IResolvable) {
    this._customErrorConfiguration.internalValue = value;
  }
  public resetCustomErrorConfiguration() {
    this._customErrorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customErrorConfigurationInput() {
    return this._customErrorConfiguration.internalValue;
  }
}

export class ApplicationGatewayHttpListenerList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayHttpListener[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayHttpListenerOutputReference {
    return new ApplicationGatewayHttpListenerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#identity_ids ApplicationGateway#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#type ApplicationGateway#type}
  */
  readonly type: string;
}

export function applicationGatewayIdentityToTerraform(struct?: ApplicationGatewayIdentityOutputReference | ApplicationGatewayIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationGatewayIdentityToHclTerraform(struct?: ApplicationGatewayIdentityOutputReference | ApplicationGatewayIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ApplicationGatewayPrivateLinkConfigurationIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#primary ApplicationGateway#primary}
  */
  readonly primary: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#private_ip_address ApplicationGateway#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#private_ip_address_allocation ApplicationGateway#private_ip_address_allocation}
  */
  readonly privateIpAddressAllocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#subnet_id ApplicationGateway#subnet_id}
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


export function applicationGatewayPrivateLinkConfigurationIpConfigurationToHclTerraform(struct?: ApplicationGatewayPrivateLinkConfigurationIpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip_address_allocation: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAddressAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayPrivateLinkConfigurationIpConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayPrivateLinkConfigurationIpConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._privateIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddress = this._privateIpAddress;
    }
    if (this._privateIpAddressAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddressAllocation = this._privateIpAddressAllocation;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayPrivateLinkConfigurationIpConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._primary = undefined;
      this._privateIpAddress = undefined;
      this._privateIpAddressAllocation = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._primary = value.primary;
      this._privateIpAddress = value.privateIpAddress;
      this._privateIpAddressAllocation = value.privateIpAddressAllocation;
      this._subnetId = value.subnetId;
    }
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

  // primary - computed: false, optional: false, required: true
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // private_ip_address - computed: true, optional: true, required: false
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // private_ip_address_allocation - computed: false, optional: false, required: true
  private _privateIpAddressAllocation?: string; 
  public get privateIpAddressAllocation() {
    return this.getStringAttribute('private_ip_address_allocation');
  }
  public set privateIpAddressAllocation(value: string) {
    this._privateIpAddressAllocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressAllocationInput() {
    return this._privateIpAddressAllocation;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class ApplicationGatewayPrivateLinkConfigurationIpConfigurationList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayPrivateLinkConfigurationIpConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayPrivateLinkConfigurationIpConfigurationOutputReference {
    return new ApplicationGatewayPrivateLinkConfigurationIpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayPrivateLinkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * ip_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#ip_configuration ApplicationGateway#ip_configuration}
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
    ip_configuration: cdktf.listMapper(applicationGatewayPrivateLinkConfigurationIpConfigurationToTerraform, true)(struct!.ipConfiguration),
  }
}


export function applicationGatewayPrivateLinkConfigurationToHclTerraform(struct?: ApplicationGatewayPrivateLinkConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_configuration: {
      value: cdktf.listMapperHcl(applicationGatewayPrivateLinkConfigurationIpConfigurationToHclTerraform, true)(struct!.ipConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationGatewayPrivateLinkConfigurationIpConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayPrivateLinkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayPrivateLinkConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ipConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipConfiguration = this._ipConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayPrivateLinkConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ipConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ipConfiguration.internalValue = value.ipConfiguration;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // ip_configuration - computed: false, optional: false, required: true
  private _ipConfiguration = new ApplicationGatewayPrivateLinkConfigurationIpConfigurationList(this, "ip_configuration", false);
  public get ipConfiguration() {
    return this._ipConfiguration;
  }
  public putIpConfiguration(value: ApplicationGatewayPrivateLinkConfigurationIpConfiguration[] | cdktf.IResolvable) {
    this._ipConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationInput() {
    return this._ipConfiguration.internalValue;
  }
}

export class ApplicationGatewayPrivateLinkConfigurationList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayPrivateLinkConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayPrivateLinkConfigurationOutputReference {
    return new ApplicationGatewayPrivateLinkConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayProbeMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#body ApplicationGateway#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#status_code ApplicationGateway#status_code}
  */
  readonly statusCode: string[];
}

export function applicationGatewayProbeMatchToTerraform(struct?: ApplicationGatewayProbeMatchOutputReference | ApplicationGatewayProbeMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    status_code: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.statusCode),
  }
}


export function applicationGatewayProbeMatchToHclTerraform(struct?: ApplicationGatewayProbeMatchOutputReference | ApplicationGatewayProbeMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.statusCode),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayProbeMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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

  // status_code - computed: false, optional: false, required: true
  private _statusCode?: string[]; 
  public get statusCode() {
    return this.getListAttribute('status_code');
  }
  public set statusCode(value: string[]) {
    this._statusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface ApplicationGatewayProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#host ApplicationGateway#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#interval ApplicationGateway#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#minimum_servers ApplicationGateway#minimum_servers}
  */
  readonly minimumServers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#path ApplicationGateway#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#pick_host_name_from_backend_http_settings ApplicationGateway#pick_host_name_from_backend_http_settings}
  */
  readonly pickHostNameFromBackendHttpSettings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#port ApplicationGateway#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#protocol ApplicationGateway#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#timeout ApplicationGateway#timeout}
  */
  readonly timeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#unhealthy_threshold ApplicationGateway#unhealthy_threshold}
  */
  readonly unhealthyThreshold: number;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#match ApplicationGateway#match}
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


export function applicationGatewayProbeToHclTerraform(struct?: ApplicationGatewayProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_servers: {
      value: cdktf.numberToHclTerraform(struct!.minimumServers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pick_host_name_from_backend_http_settings: {
      value: cdktf.booleanToHclTerraform(struct!.pickHostNameFromBackendHttpSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match: {
      value: applicationGatewayProbeMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationGatewayProbeMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._minimumServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumServers = this._minimumServers;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._pickHostNameFromBackendHttpSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.pickHostNameFromBackendHttpSettings = this._pickHostNameFromBackendHttpSettings;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._interval = undefined;
      this._minimumServers = undefined;
      this._name = undefined;
      this._path = undefined;
      this._pickHostNameFromBackendHttpSettings = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._timeout = undefined;
      this._unhealthyThreshold = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._interval = value.interval;
      this._minimumServers = value.minimumServers;
      this._name = value.name;
      this._path = value.path;
      this._pickHostNameFromBackendHttpSettings = value.pickHostNameFromBackendHttpSettings;
      this._port = value.port;
      this._protocol = value.protocol;
      this._timeout = value.timeout;
      this._unhealthyThreshold = value.unhealthyThreshold;
      this._match.internalValue = value.match;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // minimum_servers - computed: false, optional: true, required: false
  private _minimumServers?: number; 
  public get minimumServers() {
    return this.getNumberAttribute('minimum_servers');
  }
  public set minimumServers(value: number) {
    this._minimumServers = value;
  }
  public resetMinimumServers() {
    this._minimumServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumServersInput() {
    return this._minimumServers;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // pick_host_name_from_backend_http_settings - computed: false, optional: true, required: false
  private _pickHostNameFromBackendHttpSettings?: boolean | cdktf.IResolvable; 
  public get pickHostNameFromBackendHttpSettings() {
    return this.getBooleanAttribute('pick_host_name_from_backend_http_settings');
  }
  public set pickHostNameFromBackendHttpSettings(value: boolean | cdktf.IResolvable) {
    this._pickHostNameFromBackendHttpSettings = value;
  }
  public resetPickHostNameFromBackendHttpSettings() {
    this._pickHostNameFromBackendHttpSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pickHostNameFromBackendHttpSettingsInput() {
    return this._pickHostNameFromBackendHttpSettings;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // unhealthy_threshold - computed: false, optional: false, required: true
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }

  // match - computed: false, optional: true, required: false
  private _match = new ApplicationGatewayProbeMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: ApplicationGatewayProbeMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}

export class ApplicationGatewayProbeList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayProbe[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayProbeOutputReference {
    return new ApplicationGatewayProbeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayRedirectConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#include_path ApplicationGateway#include_path}
  */
  readonly includePath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#include_query_string ApplicationGateway#include_query_string}
  */
  readonly includeQueryString?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#redirect_type ApplicationGateway#redirect_type}
  */
  readonly redirectType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#target_listener_name ApplicationGateway#target_listener_name}
  */
  readonly targetListenerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#target_url ApplicationGateway#target_url}
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


export function applicationGatewayRedirectConfigurationToHclTerraform(struct?: ApplicationGatewayRedirectConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_path: {
      value: cdktf.booleanToHclTerraform(struct!.includePath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_query_string: {
      value: cdktf.booleanToHclTerraform(struct!.includeQueryString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_type: {
      value: cdktf.stringToHclTerraform(struct!.redirectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_listener_name: {
      value: cdktf.stringToHclTerraform(struct!.targetListenerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_url: {
      value: cdktf.stringToHclTerraform(struct!.targetUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayRedirectConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayRedirectConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePath = this._includePath;
    }
    if (this._includeQueryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeQueryString = this._includeQueryString;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._redirectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectType = this._redirectType;
    }
    if (this._targetListenerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetListenerName = this._targetListenerName;
    }
    if (this._targetUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUrl = this._targetUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayRedirectConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includePath = undefined;
      this._includeQueryString = undefined;
      this._name = undefined;
      this._redirectType = undefined;
      this._targetListenerName = undefined;
      this._targetUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includePath = value.includePath;
      this._includeQueryString = value.includeQueryString;
      this._name = value.name;
      this._redirectType = value.redirectType;
      this._targetListenerName = value.targetListenerName;
      this._targetUrl = value.targetUrl;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_path - computed: false, optional: true, required: false
  private _includePath?: boolean | cdktf.IResolvable; 
  public get includePath() {
    return this.getBooleanAttribute('include_path');
  }
  public set includePath(value: boolean | cdktf.IResolvable) {
    this._includePath = value;
  }
  public resetIncludePath() {
    this._includePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePathInput() {
    return this._includePath;
  }

  // include_query_string - computed: false, optional: true, required: false
  private _includeQueryString?: boolean | cdktf.IResolvable; 
  public get includeQueryString() {
    return this.getBooleanAttribute('include_query_string');
  }
  public set includeQueryString(value: boolean | cdktf.IResolvable) {
    this._includeQueryString = value;
  }
  public resetIncludeQueryString() {
    this._includeQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeQueryStringInput() {
    return this._includeQueryString;
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
    return this._redirectType;
  }

  // target_listener_id - computed: true, optional: false, required: false
  public get targetListenerId() {
    return this.getStringAttribute('target_listener_id');
  }

  // target_listener_name - computed: false, optional: true, required: false
  private _targetListenerName?: string; 
  public get targetListenerName() {
    return this.getStringAttribute('target_listener_name');
  }
  public set targetListenerName(value: string) {
    this._targetListenerName = value;
  }
  public resetTargetListenerName() {
    this._targetListenerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetListenerNameInput() {
    return this._targetListenerName;
  }

  // target_url - computed: false, optional: true, required: false
  private _targetUrl?: string; 
  public get targetUrl() {
    return this.getStringAttribute('target_url');
  }
  public set targetUrl(value: string) {
    this._targetUrl = value;
  }
  public resetTargetUrl() {
    this._targetUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUrlInput() {
    return this._targetUrl;
  }
}

export class ApplicationGatewayRedirectConfigurationList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayRedirectConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayRedirectConfigurationOutputReference {
    return new ApplicationGatewayRedirectConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayRequestRoutingRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#backend_address_pool_name ApplicationGateway#backend_address_pool_name}
  */
  readonly backendAddressPoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#backend_http_settings_name ApplicationGateway#backend_http_settings_name}
  */
  readonly backendHttpSettingsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#http_listener_name ApplicationGateway#http_listener_name}
  */
  readonly httpListenerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#priority ApplicationGateway#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#redirect_configuration_name ApplicationGateway#redirect_configuration_name}
  */
  readonly redirectConfigurationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#rewrite_rule_set_name ApplicationGateway#rewrite_rule_set_name}
  */
  readonly rewriteRuleSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#rule_type ApplicationGateway#rule_type}
  */
  readonly ruleType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#url_path_map_name ApplicationGateway#url_path_map_name}
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


export function applicationGatewayRequestRoutingRuleToHclTerraform(struct?: ApplicationGatewayRequestRoutingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_address_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.backendAddressPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_http_settings_name: {
      value: cdktf.stringToHclTerraform(struct!.backendHttpSettingsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_listener_name: {
      value: cdktf.stringToHclTerraform(struct!.httpListenerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redirect_configuration_name: {
      value: cdktf.stringToHclTerraform(struct!.redirectConfigurationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rewrite_rule_set_name: {
      value: cdktf.stringToHclTerraform(struct!.rewriteRuleSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_path_map_name: {
      value: cdktf.stringToHclTerraform(struct!.urlPathMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayRequestRoutingRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayRequestRoutingRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendAddressPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendAddressPoolName = this._backendAddressPoolName;
    }
    if (this._backendHttpSettingsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendHttpSettingsName = this._backendHttpSettingsName;
    }
    if (this._httpListenerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpListenerName = this._httpListenerName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._redirectConfigurationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectConfigurationName = this._redirectConfigurationName;
    }
    if (this._rewriteRuleSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteRuleSetName = this._rewriteRuleSetName;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._urlPathMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlPathMapName = this._urlPathMapName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayRequestRoutingRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendAddressPoolName = undefined;
      this._backendHttpSettingsName = undefined;
      this._httpListenerName = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._redirectConfigurationName = undefined;
      this._rewriteRuleSetName = undefined;
      this._ruleType = undefined;
      this._urlPathMapName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendAddressPoolName = value.backendAddressPoolName;
      this._backendHttpSettingsName = value.backendHttpSettingsName;
      this._httpListenerName = value.httpListenerName;
      this._name = value.name;
      this._priority = value.priority;
      this._redirectConfigurationName = value.redirectConfigurationName;
      this._rewriteRuleSetName = value.rewriteRuleSetName;
      this._ruleType = value.ruleType;
      this._urlPathMapName = value.urlPathMapName;
    }
  }

  // backend_address_pool_id - computed: true, optional: false, required: false
  public get backendAddressPoolId() {
    return this.getStringAttribute('backend_address_pool_id');
  }

  // backend_address_pool_name - computed: false, optional: true, required: false
  private _backendAddressPoolName?: string; 
  public get backendAddressPoolName() {
    return this.getStringAttribute('backend_address_pool_name');
  }
  public set backendAddressPoolName(value: string) {
    this._backendAddressPoolName = value;
  }
  public resetBackendAddressPoolName() {
    this._backendAddressPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendAddressPoolNameInput() {
    return this._backendAddressPoolName;
  }

  // backend_http_settings_id - computed: true, optional: false, required: false
  public get backendHttpSettingsId() {
    return this.getStringAttribute('backend_http_settings_id');
  }

  // backend_http_settings_name - computed: false, optional: true, required: false
  private _backendHttpSettingsName?: string; 
  public get backendHttpSettingsName() {
    return this.getStringAttribute('backend_http_settings_name');
  }
  public set backendHttpSettingsName(value: string) {
    this._backendHttpSettingsName = value;
  }
  public resetBackendHttpSettingsName() {
    this._backendHttpSettingsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendHttpSettingsNameInput() {
    return this._backendHttpSettingsName;
  }

  // http_listener_id - computed: true, optional: false, required: false
  public get httpListenerId() {
    return this.getStringAttribute('http_listener_id');
  }

  // http_listener_name - computed: false, optional: false, required: true
  private _httpListenerName?: string; 
  public get httpListenerName() {
    return this.getStringAttribute('http_listener_name');
  }
  public set httpListenerName(value: string) {
    this._httpListenerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpListenerNameInput() {
    return this._httpListenerName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // redirect_configuration_id - computed: true, optional: false, required: false
  public get redirectConfigurationId() {
    return this.getStringAttribute('redirect_configuration_id');
  }

  // redirect_configuration_name - computed: false, optional: true, required: false
  private _redirectConfigurationName?: string; 
  public get redirectConfigurationName() {
    return this.getStringAttribute('redirect_configuration_name');
  }
  public set redirectConfigurationName(value: string) {
    this._redirectConfigurationName = value;
  }
  public resetRedirectConfigurationName() {
    this._redirectConfigurationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectConfigurationNameInput() {
    return this._redirectConfigurationName;
  }

  // rewrite_rule_set_id - computed: true, optional: false, required: false
  public get rewriteRuleSetId() {
    return this.getStringAttribute('rewrite_rule_set_id');
  }

  // rewrite_rule_set_name - computed: false, optional: true, required: false
  private _rewriteRuleSetName?: string; 
  public get rewriteRuleSetName() {
    return this.getStringAttribute('rewrite_rule_set_name');
  }
  public set rewriteRuleSetName(value: string) {
    this._rewriteRuleSetName = value;
  }
  public resetRewriteRuleSetName() {
    this._rewriteRuleSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteRuleSetNameInput() {
    return this._rewriteRuleSetName;
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // url_path_map_id - computed: true, optional: false, required: false
  public get urlPathMapId() {
    return this.getStringAttribute('url_path_map_id');
  }

  // url_path_map_name - computed: false, optional: true, required: false
  private _urlPathMapName?: string; 
  public get urlPathMapName() {
    return this.getStringAttribute('url_path_map_name');
  }
  public set urlPathMapName(value: string) {
    this._urlPathMapName = value;
  }
  public resetUrlPathMapName() {
    this._urlPathMapName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathMapNameInput() {
    return this._urlPathMapName;
  }
}

export class ApplicationGatewayRequestRoutingRuleList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayRequestRoutingRule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayRequestRoutingRuleOutputReference {
    return new ApplicationGatewayRequestRoutingRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayRewriteRuleSetRewriteRuleCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#ignore_case ApplicationGateway#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#negate ApplicationGateway#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#pattern ApplicationGateway#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#variable ApplicationGateway#variable}
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


export function applicationGatewayRewriteRuleSetRewriteRuleConditionToHclTerraform(struct?: ApplicationGatewayRewriteRuleSetRewriteRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable: {
      value: cdktf.stringToHclTerraform(struct!.variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayRewriteRuleSetRewriteRuleConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayRewriteRuleSetRewriteRuleCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayRewriteRuleSetRewriteRuleCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreCase = undefined;
      this._negate = undefined;
      this._pattern = undefined;
      this._variable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreCase = value.ignoreCase;
      this._negate = value.negate;
      this._pattern = value.pattern;
      this._variable = value.variable;
    }
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // variable - computed: false, optional: false, required: true
  private _variable?: string; 
  public get variable() {
    return this.getStringAttribute('variable');
  }
  public set variable(value: string) {
    this._variable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable;
  }
}

export class ApplicationGatewayRewriteRuleSetRewriteRuleConditionList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayRewriteRuleSetRewriteRuleCondition[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayRewriteRuleSetRewriteRuleConditionOutputReference {
    return new ApplicationGatewayRewriteRuleSetRewriteRuleConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#header_name ApplicationGateway#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#header_value ApplicationGateway#header_value}
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


export function applicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfigurationToHclTerraform(struct?: ApplicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }
}

export class ApplicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfigurationList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfigurationOutputReference {
    return new ApplicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#header_name ApplicationGateway#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#header_value ApplicationGateway#header_value}
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


export function applicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfigurationToHclTerraform(struct?: ApplicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }
}

export class ApplicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfigurationList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfigurationOutputReference {
    return new ApplicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayRewriteRuleSetRewriteRuleUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#components ApplicationGateway#components}
  */
  readonly components?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#path ApplicationGateway#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#query_string ApplicationGateway#query_string}
  */
  readonly queryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#reroute ApplicationGateway#reroute}
  */
  readonly reroute?: boolean | cdktf.IResolvable;
}

export function applicationGatewayRewriteRuleSetRewriteRuleUrlToTerraform(struct?: ApplicationGatewayRewriteRuleSetRewriteRuleUrlOutputReference | ApplicationGatewayRewriteRuleSetRewriteRuleUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    components: cdktf.stringToTerraform(struct!.components),
    path: cdktf.stringToTerraform(struct!.path),
    query_string: cdktf.stringToTerraform(struct!.queryString),
    reroute: cdktf.booleanToTerraform(struct!.reroute),
  }
}


export function applicationGatewayRewriteRuleSetRewriteRuleUrlToHclTerraform(struct?: ApplicationGatewayRewriteRuleSetRewriteRuleUrlOutputReference | ApplicationGatewayRewriteRuleSetRewriteRuleUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    components: {
      value: cdktf.stringToHclTerraform(struct!.components),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string: {
      value: cdktf.stringToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reroute: {
      value: cdktf.booleanToHclTerraform(struct!.reroute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayRewriteRuleSetRewriteRuleUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationGatewayRewriteRuleSetRewriteRuleUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._components !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components;
    }
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
      this._components = undefined;
      this._path = undefined;
      this._queryString = undefined;
      this._reroute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._components = value.components;
      this._path = value.path;
      this._queryString = value.queryString;
      this._reroute = value.reroute;
    }
  }

  // components - computed: false, optional: true, required: false
  private _components?: string; 
  public get components() {
    return this.getStringAttribute('components');
  }
  public set components(value: string) {
    this._components = value;
  }
  public resetComponents() {
    this._components = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#rule_sequence ApplicationGateway#rule_sequence}
  */
  readonly ruleSequence: number;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#condition ApplicationGateway#condition}
  */
  readonly condition?: ApplicationGatewayRewriteRuleSetRewriteRuleCondition[] | cdktf.IResolvable;
  /**
  * request_header_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#request_header_configuration ApplicationGateway#request_header_configuration}
  */
  readonly requestHeaderConfiguration?: ApplicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfiguration[] | cdktf.IResolvable;
  /**
  * response_header_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#response_header_configuration ApplicationGateway#response_header_configuration}
  */
  readonly responseHeaderConfiguration?: ApplicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfiguration[] | cdktf.IResolvable;
  /**
  * url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#url ApplicationGateway#url}
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
    condition: cdktf.listMapper(applicationGatewayRewriteRuleSetRewriteRuleConditionToTerraform, true)(struct!.condition),
    request_header_configuration: cdktf.listMapper(applicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfigurationToTerraform, true)(struct!.requestHeaderConfiguration),
    response_header_configuration: cdktf.listMapper(applicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfigurationToTerraform, true)(struct!.responseHeaderConfiguration),
    url: applicationGatewayRewriteRuleSetRewriteRuleUrlToTerraform(struct!.url),
  }
}


export function applicationGatewayRewriteRuleSetRewriteRuleToHclTerraform(struct?: ApplicationGatewayRewriteRuleSetRewriteRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_sequence: {
      value: cdktf.numberToHclTerraform(struct!.ruleSequence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    condition: {
      value: cdktf.listMapperHcl(applicationGatewayRewriteRuleSetRewriteRuleConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationGatewayRewriteRuleSetRewriteRuleConditionList",
    },
    request_header_configuration: {
      value: cdktf.listMapperHcl(applicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfigurationToHclTerraform, true)(struct!.requestHeaderConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfigurationList",
    },
    response_header_configuration: {
      value: cdktf.listMapperHcl(applicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfigurationToHclTerraform, true)(struct!.responseHeaderConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfigurationList",
    },
    url: {
      value: applicationGatewayRewriteRuleSetRewriteRuleUrlToHclTerraform(struct!.url),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationGatewayRewriteRuleSetRewriteRuleUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayRewriteRuleSetRewriteRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayRewriteRuleSetRewriteRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ruleSequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSequence = this._ruleSequence;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._requestHeaderConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaderConfiguration = this._requestHeaderConfiguration?.internalValue;
    }
    if (this._responseHeaderConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaderConfiguration = this._responseHeaderConfiguration?.internalValue;
    }
    if (this._url?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayRewriteRuleSetRewriteRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ruleSequence = undefined;
      this._condition.internalValue = undefined;
      this._requestHeaderConfiguration.internalValue = undefined;
      this._responseHeaderConfiguration.internalValue = undefined;
      this._url.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ruleSequence = value.ruleSequence;
      this._condition.internalValue = value.condition;
      this._requestHeaderConfiguration.internalValue = value.requestHeaderConfiguration;
      this._responseHeaderConfiguration.internalValue = value.responseHeaderConfiguration;
      this._url.internalValue = value.url;
    }
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

  // rule_sequence - computed: false, optional: false, required: true
  private _ruleSequence?: number; 
  public get ruleSequence() {
    return this.getNumberAttribute('rule_sequence');
  }
  public set ruleSequence(value: number) {
    this._ruleSequence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSequenceInput() {
    return this._ruleSequence;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new ApplicationGatewayRewriteRuleSetRewriteRuleConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: ApplicationGatewayRewriteRuleSetRewriteRuleCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // request_header_configuration - computed: false, optional: true, required: false
  private _requestHeaderConfiguration = new ApplicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfigurationList(this, "request_header_configuration", false);
  public get requestHeaderConfiguration() {
    return this._requestHeaderConfiguration;
  }
  public putRequestHeaderConfiguration(value: ApplicationGatewayRewriteRuleSetRewriteRuleRequestHeaderConfiguration[] | cdktf.IResolvable) {
    this._requestHeaderConfiguration.internalValue = value;
  }
  public resetRequestHeaderConfiguration() {
    this._requestHeaderConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderConfigurationInput() {
    return this._requestHeaderConfiguration.internalValue;
  }

  // response_header_configuration - computed: false, optional: true, required: false
  private _responseHeaderConfiguration = new ApplicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfigurationList(this, "response_header_configuration", false);
  public get responseHeaderConfiguration() {
    return this._responseHeaderConfiguration;
  }
  public putResponseHeaderConfiguration(value: ApplicationGatewayRewriteRuleSetRewriteRuleResponseHeaderConfiguration[] | cdktf.IResolvable) {
    this._responseHeaderConfiguration.internalValue = value;
  }
  public resetResponseHeaderConfiguration() {
    this._responseHeaderConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderConfigurationInput() {
    return this._responseHeaderConfiguration.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url = new ApplicationGatewayRewriteRuleSetRewriteRuleUrlOutputReference(this, "url");
  public get url() {
    return this._url;
  }
  public putUrl(value: ApplicationGatewayRewriteRuleSetRewriteRuleUrl) {
    this._url.internalValue = value;
  }
  public resetUrl() {
    this._url.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url.internalValue;
  }
}

export class ApplicationGatewayRewriteRuleSetRewriteRuleList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayRewriteRuleSetRewriteRule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayRewriteRuleSetRewriteRuleOutputReference {
    return new ApplicationGatewayRewriteRuleSetRewriteRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayRewriteRuleSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * rewrite_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#rewrite_rule ApplicationGateway#rewrite_rule}
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
    rewrite_rule: cdktf.listMapper(applicationGatewayRewriteRuleSetRewriteRuleToTerraform, true)(struct!.rewriteRule),
  }
}


export function applicationGatewayRewriteRuleSetToHclTerraform(struct?: ApplicationGatewayRewriteRuleSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rewrite_rule: {
      value: cdktf.listMapperHcl(applicationGatewayRewriteRuleSetRewriteRuleToHclTerraform, true)(struct!.rewriteRule),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationGatewayRewriteRuleSetRewriteRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayRewriteRuleSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayRewriteRuleSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rewriteRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteRule = this._rewriteRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayRewriteRuleSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._rewriteRule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._rewriteRule.internalValue = value.rewriteRule;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // rewrite_rule - computed: false, optional: true, required: false
  private _rewriteRule = new ApplicationGatewayRewriteRuleSetRewriteRuleList(this, "rewrite_rule", false);
  public get rewriteRule() {
    return this._rewriteRule;
  }
  public putRewriteRule(value: ApplicationGatewayRewriteRuleSetRewriteRule[] | cdktf.IResolvable) {
    this._rewriteRule.internalValue = value;
  }
  public resetRewriteRule() {
    this._rewriteRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteRuleInput() {
    return this._rewriteRule.internalValue;
  }
}

export class ApplicationGatewayRewriteRuleSetList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayRewriteRuleSet[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayRewriteRuleSetOutputReference {
    return new ApplicationGatewayRewriteRuleSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewaySku {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#capacity ApplicationGateway#capacity}
  */
  readonly capacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#tier ApplicationGateway#tier}
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


export function applicationGatewaySkuToHclTerraform(struct?: ApplicationGatewaySkuOutputReference | ApplicationGatewaySku): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.numberToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tier: {
      value: cdktf.stringToHclTerraform(struct!.tier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewaySkuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#data ApplicationGateway#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#key_vault_secret_id ApplicationGateway#key_vault_secret_id}
  */
  readonly keyVaultSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#password ApplicationGateway#password}
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


export function applicationGatewaySslCertificateToHclTerraform(struct?: ApplicationGatewaySslCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewaySslCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewaySslCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._keyVaultSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultSecretId = this._keyVaultSecretId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewaySslCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._keyVaultSecretId = undefined;
      this._name = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._keyVaultSecretId = value.keyVaultSecretId;
      this._name = value.name;
      this._password = value.password;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_vault_secret_id - computed: false, optional: true, required: false
  private _keyVaultSecretId?: string; 
  public get keyVaultSecretId() {
    return this.getStringAttribute('key_vault_secret_id');
  }
  public set keyVaultSecretId(value: string) {
    this._keyVaultSecretId = value;
  }
  public resetKeyVaultSecretId() {
    this._keyVaultSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultSecretIdInput() {
    return this._keyVaultSecretId;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // public_cert_data - computed: true, optional: false, required: false
  public get publicCertData() {
    return this.getStringAttribute('public_cert_data');
  }
}

export class ApplicationGatewaySslCertificateList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewaySslCertificate[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewaySslCertificateOutputReference {
    return new ApplicationGatewaySslCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewaySslPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#cipher_suites ApplicationGateway#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#disabled_protocols ApplicationGateway#disabled_protocols}
  */
  readonly disabledProtocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#min_protocol_version ApplicationGateway#min_protocol_version}
  */
  readonly minProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#policy_name ApplicationGateway#policy_name}
  */
  readonly policyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#policy_type ApplicationGateway#policy_type}
  */
  readonly policyType?: string;
}

export function applicationGatewaySslPolicyToTerraform(struct?: ApplicationGatewaySslPolicyOutputReference | ApplicationGatewaySslPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    disabled_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disabledProtocols),
    min_protocol_version: cdktf.stringToTerraform(struct!.minProtocolVersion),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
  }
}


export function applicationGatewaySslPolicyToHclTerraform(struct?: ApplicationGatewaySslPolicyOutputReference | ApplicationGatewaySslPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disabled_protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disabledProtocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    min_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.minProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewaySslPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#cipher_suites ApplicationGateway#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#disabled_protocols ApplicationGateway#disabled_protocols}
  */
  readonly disabledProtocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#min_protocol_version ApplicationGateway#min_protocol_version}
  */
  readonly minProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#policy_name ApplicationGateway#policy_name}
  */
  readonly policyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#policy_type ApplicationGateway#policy_type}
  */
  readonly policyType?: string;
}

export function applicationGatewaySslProfileSslPolicyToTerraform(struct?: ApplicationGatewaySslProfileSslPolicyOutputReference | ApplicationGatewaySslProfileSslPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    disabled_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disabledProtocols),
    min_protocol_version: cdktf.stringToTerraform(struct!.minProtocolVersion),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
  }
}


export function applicationGatewaySslProfileSslPolicyToHclTerraform(struct?: ApplicationGatewaySslProfileSslPolicyOutputReference | ApplicationGatewaySslProfileSslPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disabled_protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disabledProtocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    min_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.minProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewaySslProfileSslPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#trusted_client_certificate_names ApplicationGateway#trusted_client_certificate_names}
  */
  readonly trustedClientCertificateNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#verify_client_cert_issuer_dn ApplicationGateway#verify_client_cert_issuer_dn}
  */
  readonly verifyClientCertIssuerDn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#verify_client_certificate_revocation ApplicationGateway#verify_client_certificate_revocation}
  */
  readonly verifyClientCertificateRevocation?: string;
  /**
  * ssl_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#ssl_policy ApplicationGateway#ssl_policy}
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
    trusted_client_certificate_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trustedClientCertificateNames),
    verify_client_cert_issuer_dn: cdktf.booleanToTerraform(struct!.verifyClientCertIssuerDn),
    verify_client_certificate_revocation: cdktf.stringToTerraform(struct!.verifyClientCertificateRevocation),
    ssl_policy: applicationGatewaySslProfileSslPolicyToTerraform(struct!.sslPolicy),
  }
}


export function applicationGatewaySslProfileToHclTerraform(struct?: ApplicationGatewaySslProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_client_certificate_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trustedClientCertificateNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verify_client_cert_issuer_dn: {
      value: cdktf.booleanToHclTerraform(struct!.verifyClientCertIssuerDn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_client_certificate_revocation: {
      value: cdktf.stringToHclTerraform(struct!.verifyClientCertificateRevocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_policy: {
      value: applicationGatewaySslProfileSslPolicyToHclTerraform(struct!.sslPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationGatewaySslProfileSslPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewaySslProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewaySslProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._trustedClientCertificateNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedClientCertificateNames = this._trustedClientCertificateNames;
    }
    if (this._verifyClientCertIssuerDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyClientCertIssuerDn = this._verifyClientCertIssuerDn;
    }
    if (this._verifyClientCertificateRevocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyClientCertificateRevocation = this._verifyClientCertificateRevocation;
    }
    if (this._sslPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslPolicy = this._sslPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewaySslProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._trustedClientCertificateNames = undefined;
      this._verifyClientCertIssuerDn = undefined;
      this._verifyClientCertificateRevocation = undefined;
      this._sslPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._trustedClientCertificateNames = value.trustedClientCertificateNames;
      this._verifyClientCertIssuerDn = value.verifyClientCertIssuerDn;
      this._verifyClientCertificateRevocation = value.verifyClientCertificateRevocation;
      this._sslPolicy.internalValue = value.sslPolicy;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // trusted_client_certificate_names - computed: false, optional: true, required: false
  private _trustedClientCertificateNames?: string[]; 
  public get trustedClientCertificateNames() {
    return this.getListAttribute('trusted_client_certificate_names');
  }
  public set trustedClientCertificateNames(value: string[]) {
    this._trustedClientCertificateNames = value;
  }
  public resetTrustedClientCertificateNames() {
    this._trustedClientCertificateNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedClientCertificateNamesInput() {
    return this._trustedClientCertificateNames;
  }

  // verify_client_cert_issuer_dn - computed: false, optional: true, required: false
  private _verifyClientCertIssuerDn?: boolean | cdktf.IResolvable; 
  public get verifyClientCertIssuerDn() {
    return this.getBooleanAttribute('verify_client_cert_issuer_dn');
  }
  public set verifyClientCertIssuerDn(value: boolean | cdktf.IResolvable) {
    this._verifyClientCertIssuerDn = value;
  }
  public resetVerifyClientCertIssuerDn() {
    this._verifyClientCertIssuerDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyClientCertIssuerDnInput() {
    return this._verifyClientCertIssuerDn;
  }

  // verify_client_certificate_revocation - computed: false, optional: true, required: false
  private _verifyClientCertificateRevocation?: string; 
  public get verifyClientCertificateRevocation() {
    return this.getStringAttribute('verify_client_certificate_revocation');
  }
  public set verifyClientCertificateRevocation(value: string) {
    this._verifyClientCertificateRevocation = value;
  }
  public resetVerifyClientCertificateRevocation() {
    this._verifyClientCertificateRevocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyClientCertificateRevocationInput() {
    return this._verifyClientCertificateRevocation;
  }

  // ssl_policy - computed: false, optional: true, required: false
  private _sslPolicy = new ApplicationGatewaySslProfileSslPolicyOutputReference(this, "ssl_policy");
  public get sslPolicy() {
    return this._sslPolicy;
  }
  public putSslPolicy(value: ApplicationGatewaySslProfileSslPolicy) {
    this._sslPolicy.internalValue = value;
  }
  public resetSslPolicy() {
    this._sslPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPolicyInput() {
    return this._sslPolicy.internalValue;
  }
}

export class ApplicationGatewaySslProfileList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewaySslProfile[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewaySslProfileOutputReference {
    return new ApplicationGatewaySslProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#create ApplicationGateway#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#delete ApplicationGateway#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#read ApplicationGateway#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#update ApplicationGateway#update}
  */
  readonly update?: string;
}

export function applicationGatewayTimeoutsToTerraform(struct?: ApplicationGatewayTimeouts | cdktf.IResolvable): any {
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


export function applicationGatewayTimeoutsToHclTerraform(struct?: ApplicationGatewayTimeouts | cdktf.IResolvable): any {
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

export class ApplicationGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationGatewayTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationGatewayTimeouts | cdktf.IResolvable | undefined) {
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
export interface ApplicationGatewayTrustedClientCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#data ApplicationGateway#data}
  */
  readonly data: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#name ApplicationGateway#name}
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


export function applicationGatewayTrustedClientCertificateToHclTerraform(struct?: ApplicationGatewayTrustedClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayTrustedClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayTrustedClientCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayTrustedClientCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._name = value.name;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
}

export class ApplicationGatewayTrustedClientCertificateList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayTrustedClientCertificate[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayTrustedClientCertificateOutputReference {
    return new ApplicationGatewayTrustedClientCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayTrustedRootCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#data ApplicationGateway#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#key_vault_secret_id ApplicationGateway#key_vault_secret_id}
  */
  readonly keyVaultSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#name ApplicationGateway#name}
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


export function applicationGatewayTrustedRootCertificateToHclTerraform(struct?: ApplicationGatewayTrustedRootCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayTrustedRootCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayTrustedRootCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._keyVaultSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultSecretId = this._keyVaultSecretId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayTrustedRootCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._keyVaultSecretId = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._keyVaultSecretId = value.keyVaultSecretId;
      this._name = value.name;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_vault_secret_id - computed: false, optional: true, required: false
  private _keyVaultSecretId?: string; 
  public get keyVaultSecretId() {
    return this.getStringAttribute('key_vault_secret_id');
  }
  public set keyVaultSecretId(value: string) {
    this._keyVaultSecretId = value;
  }
  public resetKeyVaultSecretId() {
    this._keyVaultSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultSecretIdInput() {
    return this._keyVaultSecretId;
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
}

export class ApplicationGatewayTrustedRootCertificateList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayTrustedRootCertificate[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayTrustedRootCertificateOutputReference {
    return new ApplicationGatewayTrustedRootCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayUrlPathMapPathRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#backend_address_pool_name ApplicationGateway#backend_address_pool_name}
  */
  readonly backendAddressPoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#backend_http_settings_name ApplicationGateway#backend_http_settings_name}
  */
  readonly backendHttpSettingsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#firewall_policy_id ApplicationGateway#firewall_policy_id}
  */
  readonly firewallPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#paths ApplicationGateway#paths}
  */
  readonly paths: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#redirect_configuration_name ApplicationGateway#redirect_configuration_name}
  */
  readonly redirectConfigurationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#rewrite_rule_set_name ApplicationGateway#rewrite_rule_set_name}
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
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
    redirect_configuration_name: cdktf.stringToTerraform(struct!.redirectConfigurationName),
    rewrite_rule_set_name: cdktf.stringToTerraform(struct!.rewriteRuleSetName),
  }
}


export function applicationGatewayUrlPathMapPathRuleToHclTerraform(struct?: ApplicationGatewayUrlPathMapPathRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_address_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.backendAddressPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_http_settings_name: {
      value: cdktf.stringToHclTerraform(struct!.backendHttpSettingsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firewall_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.firewallPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    redirect_configuration_name: {
      value: cdktf.stringToHclTerraform(struct!.redirectConfigurationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rewrite_rule_set_name: {
      value: cdktf.stringToHclTerraform(struct!.rewriteRuleSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayUrlPathMapPathRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayUrlPathMapPathRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendAddressPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendAddressPoolName = this._backendAddressPoolName;
    }
    if (this._backendHttpSettingsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendHttpSettingsName = this._backendHttpSettingsName;
    }
    if (this._firewallPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallPolicyId = this._firewallPolicyId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._redirectConfigurationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectConfigurationName = this._redirectConfigurationName;
    }
    if (this._rewriteRuleSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteRuleSetName = this._rewriteRuleSetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayUrlPathMapPathRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendAddressPoolName = undefined;
      this._backendHttpSettingsName = undefined;
      this._firewallPolicyId = undefined;
      this._name = undefined;
      this._paths = undefined;
      this._redirectConfigurationName = undefined;
      this._rewriteRuleSetName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendAddressPoolName = value.backendAddressPoolName;
      this._backendHttpSettingsName = value.backendHttpSettingsName;
      this._firewallPolicyId = value.firewallPolicyId;
      this._name = value.name;
      this._paths = value.paths;
      this._redirectConfigurationName = value.redirectConfigurationName;
      this._rewriteRuleSetName = value.rewriteRuleSetName;
    }
  }

  // backend_address_pool_id - computed: true, optional: false, required: false
  public get backendAddressPoolId() {
    return this.getStringAttribute('backend_address_pool_id');
  }

  // backend_address_pool_name - computed: false, optional: true, required: false
  private _backendAddressPoolName?: string; 
  public get backendAddressPoolName() {
    return this.getStringAttribute('backend_address_pool_name');
  }
  public set backendAddressPoolName(value: string) {
    this._backendAddressPoolName = value;
  }
  public resetBackendAddressPoolName() {
    this._backendAddressPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendAddressPoolNameInput() {
    return this._backendAddressPoolName;
  }

  // backend_http_settings_id - computed: true, optional: false, required: false
  public get backendHttpSettingsId() {
    return this.getStringAttribute('backend_http_settings_id');
  }

  // backend_http_settings_name - computed: false, optional: true, required: false
  private _backendHttpSettingsName?: string; 
  public get backendHttpSettingsName() {
    return this.getStringAttribute('backend_http_settings_name');
  }
  public set backendHttpSettingsName(value: string) {
    this._backendHttpSettingsName = value;
  }
  public resetBackendHttpSettingsName() {
    this._backendHttpSettingsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendHttpSettingsNameInput() {
    return this._backendHttpSettingsName;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // redirect_configuration_id - computed: true, optional: false, required: false
  public get redirectConfigurationId() {
    return this.getStringAttribute('redirect_configuration_id');
  }

  // redirect_configuration_name - computed: false, optional: true, required: false
  private _redirectConfigurationName?: string; 
  public get redirectConfigurationName() {
    return this.getStringAttribute('redirect_configuration_name');
  }
  public set redirectConfigurationName(value: string) {
    this._redirectConfigurationName = value;
  }
  public resetRedirectConfigurationName() {
    this._redirectConfigurationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectConfigurationNameInput() {
    return this._redirectConfigurationName;
  }

  // rewrite_rule_set_id - computed: true, optional: false, required: false
  public get rewriteRuleSetId() {
    return this.getStringAttribute('rewrite_rule_set_id');
  }

  // rewrite_rule_set_name - computed: false, optional: true, required: false
  private _rewriteRuleSetName?: string; 
  public get rewriteRuleSetName() {
    return this.getStringAttribute('rewrite_rule_set_name');
  }
  public set rewriteRuleSetName(value: string) {
    this._rewriteRuleSetName = value;
  }
  public resetRewriteRuleSetName() {
    this._rewriteRuleSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteRuleSetNameInput() {
    return this._rewriteRuleSetName;
  }
}

export class ApplicationGatewayUrlPathMapPathRuleList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayUrlPathMapPathRule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayUrlPathMapPathRuleOutputReference {
    return new ApplicationGatewayUrlPathMapPathRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayUrlPathMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#default_backend_address_pool_name ApplicationGateway#default_backend_address_pool_name}
  */
  readonly defaultBackendAddressPoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#default_backend_http_settings_name ApplicationGateway#default_backend_http_settings_name}
  */
  readonly defaultBackendHttpSettingsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#default_redirect_configuration_name ApplicationGateway#default_redirect_configuration_name}
  */
  readonly defaultRedirectConfigurationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#default_rewrite_rule_set_name ApplicationGateway#default_rewrite_rule_set_name}
  */
  readonly defaultRewriteRuleSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#name ApplicationGateway#name}
  */
  readonly name: string;
  /**
  * path_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#path_rule ApplicationGateway#path_rule}
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
    path_rule: cdktf.listMapper(applicationGatewayUrlPathMapPathRuleToTerraform, true)(struct!.pathRule),
  }
}


export function applicationGatewayUrlPathMapToHclTerraform(struct?: ApplicationGatewayUrlPathMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_backend_address_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.defaultBackendAddressPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_backend_http_settings_name: {
      value: cdktf.stringToHclTerraform(struct!.defaultBackendHttpSettingsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_redirect_configuration_name: {
      value: cdktf.stringToHclTerraform(struct!.defaultRedirectConfigurationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_rewrite_rule_set_name: {
      value: cdktf.stringToHclTerraform(struct!.defaultRewriteRuleSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_rule: {
      value: cdktf.listMapperHcl(applicationGatewayUrlPathMapPathRuleToHclTerraform, true)(struct!.pathRule),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationGatewayUrlPathMapPathRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayUrlPathMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayUrlPathMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultBackendAddressPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultBackendAddressPoolName = this._defaultBackendAddressPoolName;
    }
    if (this._defaultBackendHttpSettingsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultBackendHttpSettingsName = this._defaultBackendHttpSettingsName;
    }
    if (this._defaultRedirectConfigurationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRedirectConfigurationName = this._defaultRedirectConfigurationName;
    }
    if (this._defaultRewriteRuleSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRewriteRuleSetName = this._defaultRewriteRuleSetName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pathRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRule = this._pathRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayUrlPathMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultBackendAddressPoolName = undefined;
      this._defaultBackendHttpSettingsName = undefined;
      this._defaultRedirectConfigurationName = undefined;
      this._defaultRewriteRuleSetName = undefined;
      this._name = undefined;
      this._pathRule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultBackendAddressPoolName = value.defaultBackendAddressPoolName;
      this._defaultBackendHttpSettingsName = value.defaultBackendHttpSettingsName;
      this._defaultRedirectConfigurationName = value.defaultRedirectConfigurationName;
      this._defaultRewriteRuleSetName = value.defaultRewriteRuleSetName;
      this._name = value.name;
      this._pathRule.internalValue = value.pathRule;
    }
  }

  // default_backend_address_pool_id - computed: true, optional: false, required: false
  public get defaultBackendAddressPoolId() {
    return this.getStringAttribute('default_backend_address_pool_id');
  }

  // default_backend_address_pool_name - computed: false, optional: true, required: false
  private _defaultBackendAddressPoolName?: string; 
  public get defaultBackendAddressPoolName() {
    return this.getStringAttribute('default_backend_address_pool_name');
  }
  public set defaultBackendAddressPoolName(value: string) {
    this._defaultBackendAddressPoolName = value;
  }
  public resetDefaultBackendAddressPoolName() {
    this._defaultBackendAddressPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBackendAddressPoolNameInput() {
    return this._defaultBackendAddressPoolName;
  }

  // default_backend_http_settings_id - computed: true, optional: false, required: false
  public get defaultBackendHttpSettingsId() {
    return this.getStringAttribute('default_backend_http_settings_id');
  }

  // default_backend_http_settings_name - computed: false, optional: true, required: false
  private _defaultBackendHttpSettingsName?: string; 
  public get defaultBackendHttpSettingsName() {
    return this.getStringAttribute('default_backend_http_settings_name');
  }
  public set defaultBackendHttpSettingsName(value: string) {
    this._defaultBackendHttpSettingsName = value;
  }
  public resetDefaultBackendHttpSettingsName() {
    this._defaultBackendHttpSettingsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBackendHttpSettingsNameInput() {
    return this._defaultBackendHttpSettingsName;
  }

  // default_redirect_configuration_id - computed: true, optional: false, required: false
  public get defaultRedirectConfigurationId() {
    return this.getStringAttribute('default_redirect_configuration_id');
  }

  // default_redirect_configuration_name - computed: false, optional: true, required: false
  private _defaultRedirectConfigurationName?: string; 
  public get defaultRedirectConfigurationName() {
    return this.getStringAttribute('default_redirect_configuration_name');
  }
  public set defaultRedirectConfigurationName(value: string) {
    this._defaultRedirectConfigurationName = value;
  }
  public resetDefaultRedirectConfigurationName() {
    this._defaultRedirectConfigurationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRedirectConfigurationNameInput() {
    return this._defaultRedirectConfigurationName;
  }

  // default_rewrite_rule_set_id - computed: true, optional: false, required: false
  public get defaultRewriteRuleSetId() {
    return this.getStringAttribute('default_rewrite_rule_set_id');
  }

  // default_rewrite_rule_set_name - computed: false, optional: true, required: false
  private _defaultRewriteRuleSetName?: string; 
  public get defaultRewriteRuleSetName() {
    return this.getStringAttribute('default_rewrite_rule_set_name');
  }
  public set defaultRewriteRuleSetName(value: string) {
    this._defaultRewriteRuleSetName = value;
  }
  public resetDefaultRewriteRuleSetName() {
    this._defaultRewriteRuleSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRewriteRuleSetNameInput() {
    return this._defaultRewriteRuleSetName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // path_rule - computed: false, optional: false, required: true
  private _pathRule = new ApplicationGatewayUrlPathMapPathRuleList(this, "path_rule", false);
  public get pathRule() {
    return this._pathRule;
  }
  public putPathRule(value: ApplicationGatewayUrlPathMapPathRule[] | cdktf.IResolvable) {
    this._pathRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRuleInput() {
    return this._pathRule.internalValue;
  }
}

export class ApplicationGatewayUrlPathMapList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayUrlPathMap[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayUrlPathMapOutputReference {
    return new ApplicationGatewayUrlPathMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayWafConfigurationDisabledRuleGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#rule_group_name ApplicationGateway#rule_group_name}
  */
  readonly ruleGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#rules ApplicationGateway#rules}
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
    rules: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.rules),
  }
}


export function applicationGatewayWafConfigurationDisabledRuleGroupToHclTerraform(struct?: ApplicationGatewayWafConfigurationDisabledRuleGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_group_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayWafConfigurationDisabledRuleGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayWafConfigurationDisabledRuleGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleGroupName = this._ruleGroupName;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayWafConfigurationDisabledRuleGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleGroupName = undefined;
      this._rules = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleGroupName = value.ruleGroupName;
      this._rules = value.rules;
    }
  }

  // rule_group_name - computed: false, optional: false, required: true
  private _ruleGroupName?: string; 
  public get ruleGroupName() {
    return this.getStringAttribute('rule_group_name');
  }
  public set ruleGroupName(value: string) {
    this._ruleGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupNameInput() {
    return this._ruleGroupName;
  }

  // rules - computed: false, optional: true, required: false
  private _rules?: number[]; 
  public get rules() {
    return this.getNumberListAttribute('rules');
  }
  public set rules(value: number[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}

export class ApplicationGatewayWafConfigurationDisabledRuleGroupList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayWafConfigurationDisabledRuleGroup[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayWafConfigurationDisabledRuleGroupOutputReference {
    return new ApplicationGatewayWafConfigurationDisabledRuleGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayWafConfigurationExclusion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#match_variable ApplicationGateway#match_variable}
  */
  readonly matchVariable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#selector ApplicationGateway#selector}
  */
  readonly selector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#selector_match_operator ApplicationGateway#selector_match_operator}
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


export function applicationGatewayWafConfigurationExclusionToHclTerraform(struct?: ApplicationGatewayWafConfigurationExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_variable: {
      value: cdktf.stringToHclTerraform(struct!.matchVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector_match_operator: {
      value: cdktf.stringToHclTerraform(struct!.selectorMatchOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayWafConfigurationExclusionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplicationGatewayWafConfigurationExclusion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchVariable = this._matchVariable;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._selectorMatchOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectorMatchOperator = this._selectorMatchOperator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationGatewayWafConfigurationExclusion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchVariable = undefined;
      this._selector = undefined;
      this._selectorMatchOperator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchVariable = value.matchVariable;
      this._selector = value.selector;
      this._selectorMatchOperator = value.selectorMatchOperator;
    }
  }

  // match_variable - computed: false, optional: false, required: true
  private _matchVariable?: string; 
  public get matchVariable() {
    return this.getStringAttribute('match_variable');
  }
  public set matchVariable(value: string) {
    this._matchVariable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchVariableInput() {
    return this._matchVariable;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // selector_match_operator - computed: false, optional: true, required: false
  private _selectorMatchOperator?: string; 
  public get selectorMatchOperator() {
    return this.getStringAttribute('selector_match_operator');
  }
  public set selectorMatchOperator(value: string) {
    this._selectorMatchOperator = value;
  }
  public resetSelectorMatchOperator() {
    this._selectorMatchOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorMatchOperatorInput() {
    return this._selectorMatchOperator;
  }
}

export class ApplicationGatewayWafConfigurationExclusionList extends cdktf.ComplexList {
  public internalValue? : ApplicationGatewayWafConfigurationExclusion[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApplicationGatewayWafConfigurationExclusionOutputReference {
    return new ApplicationGatewayWafConfigurationExclusionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationGatewayWafConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#enabled ApplicationGateway#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#file_upload_limit_mb ApplicationGateway#file_upload_limit_mb}
  */
  readonly fileUploadLimitMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#firewall_mode ApplicationGateway#firewall_mode}
  */
  readonly firewallMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#max_request_body_size_kb ApplicationGateway#max_request_body_size_kb}
  */
  readonly maxRequestBodySizeKb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#request_body_check ApplicationGateway#request_body_check}
  */
  readonly requestBodyCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#rule_set_type ApplicationGateway#rule_set_type}
  */
  readonly ruleSetType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#rule_set_version ApplicationGateway#rule_set_version}
  */
  readonly ruleSetVersion: string;
  /**
  * disabled_rule_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#disabled_rule_group ApplicationGateway#disabled_rule_group}
  */
  readonly disabledRuleGroup?: ApplicationGatewayWafConfigurationDisabledRuleGroup[] | cdktf.IResolvable;
  /**
  * exclusion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#exclusion ApplicationGateway#exclusion}
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
    disabled_rule_group: cdktf.listMapper(applicationGatewayWafConfigurationDisabledRuleGroupToTerraform, true)(struct!.disabledRuleGroup),
    exclusion: cdktf.listMapper(applicationGatewayWafConfigurationExclusionToTerraform, true)(struct!.exclusion),
  }
}


export function applicationGatewayWafConfigurationToHclTerraform(struct?: ApplicationGatewayWafConfigurationOutputReference | ApplicationGatewayWafConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_upload_limit_mb: {
      value: cdktf.numberToHclTerraform(struct!.fileUploadLimitMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    firewall_mode: {
      value: cdktf.stringToHclTerraform(struct!.firewallMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_request_body_size_kb: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestBodySizeKb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_body_check: {
      value: cdktf.booleanToHclTerraform(struct!.requestBodyCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rule_set_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleSetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_set_version: {
      value: cdktf.stringToHclTerraform(struct!.ruleSetVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled_rule_group: {
      value: cdktf.listMapperHcl(applicationGatewayWafConfigurationDisabledRuleGroupToHclTerraform, true)(struct!.disabledRuleGroup),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationGatewayWafConfigurationDisabledRuleGroupList",
    },
    exclusion: {
      value: cdktf.listMapperHcl(applicationGatewayWafConfigurationExclusionToHclTerraform, true)(struct!.exclusion),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationGatewayWafConfigurationExclusionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationGatewayWafConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
    if (this._disabledRuleGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledRuleGroup = this._disabledRuleGroup?.internalValue;
    }
    if (this._exclusion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusion = this._exclusion?.internalValue;
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
      this._disabledRuleGroup.internalValue = undefined;
      this._exclusion.internalValue = undefined;
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
      this._disabledRuleGroup.internalValue = value.disabledRuleGroup;
      this._exclusion.internalValue = value.exclusion;
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
  private _disabledRuleGroup = new ApplicationGatewayWafConfigurationDisabledRuleGroupList(this, "disabled_rule_group", false);
  public get disabledRuleGroup() {
    return this._disabledRuleGroup;
  }
  public putDisabledRuleGroup(value: ApplicationGatewayWafConfigurationDisabledRuleGroup[] | cdktf.IResolvable) {
    this._disabledRuleGroup.internalValue = value;
  }
  public resetDisabledRuleGroup() {
    this._disabledRuleGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledRuleGroupInput() {
    return this._disabledRuleGroup.internalValue;
  }

  // exclusion - computed: false, optional: true, required: false
  private _exclusion = new ApplicationGatewayWafConfigurationExclusionList(this, "exclusion", false);
  public get exclusion() {
    return this._exclusion;
  }
  public putExclusion(value: ApplicationGatewayWafConfigurationExclusion[] | cdktf.IResolvable) {
    this._exclusion.internalValue = value;
  }
  public resetExclusion() {
    this._exclusion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionInput() {
    return this._exclusion.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway azurerm_application_gateway}
*/
export class ApplicationGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_application_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationGateway to import
  * @param importFromId The id of the existing ApplicationGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_application_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_gateway azurerm_application_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_application_gateway',
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
    this._enableHttp2 = config.enableHttp2;
    this._fipsEnabled = config.fipsEnabled;
    this._firewallPolicyId = config.firewallPolicyId;
    this._forceFirewallPolicyAssociation = config.forceFirewallPolicyAssociation;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._zones = config.zones;
    this._authenticationCertificate.internalValue = config.authenticationCertificate;
    this._autoscaleConfiguration.internalValue = config.autoscaleConfiguration;
    this._backendAddressPool.internalValue = config.backendAddressPool;
    this._backendHttpSettings.internalValue = config.backendHttpSettings;
    this._customErrorConfiguration.internalValue = config.customErrorConfiguration;
    this._frontendIpConfiguration.internalValue = config.frontendIpConfiguration;
    this._frontendPort.internalValue = config.frontendPort;
    this._gatewayIpConfiguration.internalValue = config.gatewayIpConfiguration;
    this._global.internalValue = config.global;
    this._httpListener.internalValue = config.httpListener;
    this._identity.internalValue = config.identity;
    this._privateLinkConfiguration.internalValue = config.privateLinkConfiguration;
    this._probe.internalValue = config.probe;
    this._redirectConfiguration.internalValue = config.redirectConfiguration;
    this._requestRoutingRule.internalValue = config.requestRoutingRule;
    this._rewriteRuleSet.internalValue = config.rewriteRuleSet;
    this._sku.internalValue = config.sku;
    this._sslCertificate.internalValue = config.sslCertificate;
    this._sslPolicy.internalValue = config.sslPolicy;
    this._sslProfile.internalValue = config.sslProfile;
    this._timeouts.internalValue = config.timeouts;
    this._trustedClientCertificate.internalValue = config.trustedClientCertificate;
    this._trustedRootCertificate.internalValue = config.trustedRootCertificate;
    this._urlPathMap.internalValue = config.urlPathMap;
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
  private _privateEndpointConnection = new ApplicationGatewayPrivateEndpointConnectionList(this, "private_endpoint_connection", true);
  public get privateEndpointConnection() {
    return this._privateEndpointConnection;
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
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
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
  private _authenticationCertificate = new ApplicationGatewayAuthenticationCertificateList(this, "authentication_certificate", false);
  public get authenticationCertificate() {
    return this._authenticationCertificate;
  }
  public putAuthenticationCertificate(value: ApplicationGatewayAuthenticationCertificate[] | cdktf.IResolvable) {
    this._authenticationCertificate.internalValue = value;
  }
  public resetAuthenticationCertificate() {
    this._authenticationCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationCertificateInput() {
    return this._authenticationCertificate.internalValue;
  }

  // autoscale_configuration - computed: false, optional: true, required: false
  private _autoscaleConfiguration = new ApplicationGatewayAutoscaleConfigurationOutputReference(this, "autoscale_configuration");
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
  private _backendAddressPool = new ApplicationGatewayBackendAddressPoolList(this, "backend_address_pool", true);
  public get backendAddressPool() {
    return this._backendAddressPool;
  }
  public putBackendAddressPool(value: ApplicationGatewayBackendAddressPool[] | cdktf.IResolvable) {
    this._backendAddressPool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendAddressPoolInput() {
    return this._backendAddressPool.internalValue;
  }

  // backend_http_settings - computed: false, optional: false, required: true
  private _backendHttpSettings = new ApplicationGatewayBackendHttpSettingsList(this, "backend_http_settings", true);
  public get backendHttpSettings() {
    return this._backendHttpSettings;
  }
  public putBackendHttpSettings(value: ApplicationGatewayBackendHttpSettings[] | cdktf.IResolvable) {
    this._backendHttpSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendHttpSettingsInput() {
    return this._backendHttpSettings.internalValue;
  }

  // custom_error_configuration - computed: false, optional: true, required: false
  private _customErrorConfiguration = new ApplicationGatewayCustomErrorConfigurationList(this, "custom_error_configuration", false);
  public get customErrorConfiguration() {
    return this._customErrorConfiguration;
  }
  public putCustomErrorConfiguration(value: ApplicationGatewayCustomErrorConfiguration[] | cdktf.IResolvable) {
    this._customErrorConfiguration.internalValue = value;
  }
  public resetCustomErrorConfiguration() {
    this._customErrorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customErrorConfigurationInput() {
    return this._customErrorConfiguration.internalValue;
  }

  // frontend_ip_configuration - computed: false, optional: false, required: true
  private _frontendIpConfiguration = new ApplicationGatewayFrontendIpConfigurationList(this, "frontend_ip_configuration", false);
  public get frontendIpConfiguration() {
    return this._frontendIpConfiguration;
  }
  public putFrontendIpConfiguration(value: ApplicationGatewayFrontendIpConfiguration[] | cdktf.IResolvable) {
    this._frontendIpConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendIpConfigurationInput() {
    return this._frontendIpConfiguration.internalValue;
  }

  // frontend_port - computed: false, optional: false, required: true
  private _frontendPort = new ApplicationGatewayFrontendPortList(this, "frontend_port", true);
  public get frontendPort() {
    return this._frontendPort;
  }
  public putFrontendPort(value: ApplicationGatewayFrontendPort[] | cdktf.IResolvable) {
    this._frontendPort.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendPortInput() {
    return this._frontendPort.internalValue;
  }

  // gateway_ip_configuration - computed: false, optional: false, required: true
  private _gatewayIpConfiguration = new ApplicationGatewayGatewayIpConfigurationList(this, "gateway_ip_configuration", false);
  public get gatewayIpConfiguration() {
    return this._gatewayIpConfiguration;
  }
  public putGatewayIpConfiguration(value: ApplicationGatewayGatewayIpConfiguration[] | cdktf.IResolvable) {
    this._gatewayIpConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpConfigurationInput() {
    return this._gatewayIpConfiguration.internalValue;
  }

  // global - computed: false, optional: true, required: false
  private _global = new ApplicationGatewayGlobalOutputReference(this, "global");
  public get global() {
    return this._global;
  }
  public putGlobal(value: ApplicationGatewayGlobal) {
    this._global.internalValue = value;
  }
  public resetGlobal() {
    this._global.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global.internalValue;
  }

  // http_listener - computed: false, optional: false, required: true
  private _httpListener = new ApplicationGatewayHttpListenerList(this, "http_listener", true);
  public get httpListener() {
    return this._httpListener;
  }
  public putHttpListener(value: ApplicationGatewayHttpListener[] | cdktf.IResolvable) {
    this._httpListener.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpListenerInput() {
    return this._httpListener.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new ApplicationGatewayIdentityOutputReference(this, "identity");
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
  private _privateLinkConfiguration = new ApplicationGatewayPrivateLinkConfigurationList(this, "private_link_configuration", true);
  public get privateLinkConfiguration() {
    return this._privateLinkConfiguration;
  }
  public putPrivateLinkConfiguration(value: ApplicationGatewayPrivateLinkConfiguration[] | cdktf.IResolvable) {
    this._privateLinkConfiguration.internalValue = value;
  }
  public resetPrivateLinkConfiguration() {
    this._privateLinkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkConfigurationInput() {
    return this._privateLinkConfiguration.internalValue;
  }

  // probe - computed: false, optional: true, required: false
  private _probe = new ApplicationGatewayProbeList(this, "probe", true);
  public get probe() {
    return this._probe;
  }
  public putProbe(value: ApplicationGatewayProbe[] | cdktf.IResolvable) {
    this._probe.internalValue = value;
  }
  public resetProbe() {
    this._probe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeInput() {
    return this._probe.internalValue;
  }

  // redirect_configuration - computed: false, optional: true, required: false
  private _redirectConfiguration = new ApplicationGatewayRedirectConfigurationList(this, "redirect_configuration", true);
  public get redirectConfiguration() {
    return this._redirectConfiguration;
  }
  public putRedirectConfiguration(value: ApplicationGatewayRedirectConfiguration[] | cdktf.IResolvable) {
    this._redirectConfiguration.internalValue = value;
  }
  public resetRedirectConfiguration() {
    this._redirectConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectConfigurationInput() {
    return this._redirectConfiguration.internalValue;
  }

  // request_routing_rule - computed: false, optional: false, required: true
  private _requestRoutingRule = new ApplicationGatewayRequestRoutingRuleList(this, "request_routing_rule", true);
  public get requestRoutingRule() {
    return this._requestRoutingRule;
  }
  public putRequestRoutingRule(value: ApplicationGatewayRequestRoutingRule[] | cdktf.IResolvable) {
    this._requestRoutingRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestRoutingRuleInput() {
    return this._requestRoutingRule.internalValue;
  }

  // rewrite_rule_set - computed: false, optional: true, required: false
  private _rewriteRuleSet = new ApplicationGatewayRewriteRuleSetList(this, "rewrite_rule_set", false);
  public get rewriteRuleSet() {
    return this._rewriteRuleSet;
  }
  public putRewriteRuleSet(value: ApplicationGatewayRewriteRuleSet[] | cdktf.IResolvable) {
    this._rewriteRuleSet.internalValue = value;
  }
  public resetRewriteRuleSet() {
    this._rewriteRuleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteRuleSetInput() {
    return this._rewriteRuleSet.internalValue;
  }

  // sku - computed: false, optional: false, required: true
  private _sku = new ApplicationGatewaySkuOutputReference(this, "sku");
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
  private _sslCertificate = new ApplicationGatewaySslCertificateList(this, "ssl_certificate", true);
  public get sslCertificate() {
    return this._sslCertificate;
  }
  public putSslCertificate(value: ApplicationGatewaySslCertificate[] | cdktf.IResolvable) {
    this._sslCertificate.internalValue = value;
  }
  public resetSslCertificate() {
    this._sslCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate.internalValue;
  }

  // ssl_policy - computed: false, optional: true, required: false
  private _sslPolicy = new ApplicationGatewaySslPolicyOutputReference(this, "ssl_policy");
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
  private _sslProfile = new ApplicationGatewaySslProfileList(this, "ssl_profile", false);
  public get sslProfile() {
    return this._sslProfile;
  }
  public putSslProfile(value: ApplicationGatewaySslProfile[] | cdktf.IResolvable) {
    this._sslProfile.internalValue = value;
  }
  public resetSslProfile() {
    this._sslProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileInput() {
    return this._sslProfile.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApplicationGatewayTimeoutsOutputReference(this, "timeouts");
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
  private _trustedClientCertificate = new ApplicationGatewayTrustedClientCertificateList(this, "trusted_client_certificate", false);
  public get trustedClientCertificate() {
    return this._trustedClientCertificate;
  }
  public putTrustedClientCertificate(value: ApplicationGatewayTrustedClientCertificate[] | cdktf.IResolvable) {
    this._trustedClientCertificate.internalValue = value;
  }
  public resetTrustedClientCertificate() {
    this._trustedClientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedClientCertificateInput() {
    return this._trustedClientCertificate.internalValue;
  }

  // trusted_root_certificate - computed: false, optional: true, required: false
  private _trustedRootCertificate = new ApplicationGatewayTrustedRootCertificateList(this, "trusted_root_certificate", false);
  public get trustedRootCertificate() {
    return this._trustedRootCertificate;
  }
  public putTrustedRootCertificate(value: ApplicationGatewayTrustedRootCertificate[] | cdktf.IResolvable) {
    this._trustedRootCertificate.internalValue = value;
  }
  public resetTrustedRootCertificate() {
    this._trustedRootCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedRootCertificateInput() {
    return this._trustedRootCertificate.internalValue;
  }

  // url_path_map - computed: false, optional: true, required: false
  private _urlPathMap = new ApplicationGatewayUrlPathMapList(this, "url_path_map", false);
  public get urlPathMap() {
    return this._urlPathMap;
  }
  public putUrlPathMap(value: ApplicationGatewayUrlPathMap[] | cdktf.IResolvable) {
    this._urlPathMap.internalValue = value;
  }
  public resetUrlPathMap() {
    this._urlPathMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathMapInput() {
    return this._urlPathMap.internalValue;
  }

  // waf_configuration - computed: false, optional: true, required: false
  private _wafConfiguration = new ApplicationGatewayWafConfigurationOutputReference(this, "waf_configuration");
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
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
      authentication_certificate: cdktf.listMapper(applicationGatewayAuthenticationCertificateToTerraform, true)(this._authenticationCertificate.internalValue),
      autoscale_configuration: applicationGatewayAutoscaleConfigurationToTerraform(this._autoscaleConfiguration.internalValue),
      backend_address_pool: cdktf.listMapper(applicationGatewayBackendAddressPoolToTerraform, true)(this._backendAddressPool.internalValue),
      backend_http_settings: cdktf.listMapper(applicationGatewayBackendHttpSettingsToTerraform, true)(this._backendHttpSettings.internalValue),
      custom_error_configuration: cdktf.listMapper(applicationGatewayCustomErrorConfigurationToTerraform, true)(this._customErrorConfiguration.internalValue),
      frontend_ip_configuration: cdktf.listMapper(applicationGatewayFrontendIpConfigurationToTerraform, true)(this._frontendIpConfiguration.internalValue),
      frontend_port: cdktf.listMapper(applicationGatewayFrontendPortToTerraform, true)(this._frontendPort.internalValue),
      gateway_ip_configuration: cdktf.listMapper(applicationGatewayGatewayIpConfigurationToTerraform, true)(this._gatewayIpConfiguration.internalValue),
      global: applicationGatewayGlobalToTerraform(this._global.internalValue),
      http_listener: cdktf.listMapper(applicationGatewayHttpListenerToTerraform, true)(this._httpListener.internalValue),
      identity: applicationGatewayIdentityToTerraform(this._identity.internalValue),
      private_link_configuration: cdktf.listMapper(applicationGatewayPrivateLinkConfigurationToTerraform, true)(this._privateLinkConfiguration.internalValue),
      probe: cdktf.listMapper(applicationGatewayProbeToTerraform, true)(this._probe.internalValue),
      redirect_configuration: cdktf.listMapper(applicationGatewayRedirectConfigurationToTerraform, true)(this._redirectConfiguration.internalValue),
      request_routing_rule: cdktf.listMapper(applicationGatewayRequestRoutingRuleToTerraform, true)(this._requestRoutingRule.internalValue),
      rewrite_rule_set: cdktf.listMapper(applicationGatewayRewriteRuleSetToTerraform, true)(this._rewriteRuleSet.internalValue),
      sku: applicationGatewaySkuToTerraform(this._sku.internalValue),
      ssl_certificate: cdktf.listMapper(applicationGatewaySslCertificateToTerraform, true)(this._sslCertificate.internalValue),
      ssl_policy: applicationGatewaySslPolicyToTerraform(this._sslPolicy.internalValue),
      ssl_profile: cdktf.listMapper(applicationGatewaySslProfileToTerraform, true)(this._sslProfile.internalValue),
      timeouts: applicationGatewayTimeoutsToTerraform(this._timeouts.internalValue),
      trusted_client_certificate: cdktf.listMapper(applicationGatewayTrustedClientCertificateToTerraform, true)(this._trustedClientCertificate.internalValue),
      trusted_root_certificate: cdktf.listMapper(applicationGatewayTrustedRootCertificateToTerraform, true)(this._trustedRootCertificate.internalValue),
      url_path_map: cdktf.listMapper(applicationGatewayUrlPathMapToTerraform, true)(this._urlPathMap.internalValue),
      waf_configuration: applicationGatewayWafConfigurationToTerraform(this._wafConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_http2: {
        value: cdktf.booleanToHclTerraform(this._enableHttp2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fips_enabled: {
        value: cdktf.booleanToHclTerraform(this._fipsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      firewall_policy_id: {
        value: cdktf.stringToHclTerraform(this._firewallPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_firewall_policy_association: {
        value: cdktf.booleanToHclTerraform(this._forceFirewallPolicyAssociation),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      authentication_certificate: {
        value: cdktf.listMapperHcl(applicationGatewayAuthenticationCertificateToHclTerraform, true)(this._authenticationCertificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationGatewayAuthenticationCertificateList",
      },
      autoscale_configuration: {
        value: applicationGatewayAutoscaleConfigurationToHclTerraform(this._autoscaleConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationGatewayAutoscaleConfigurationList",
      },
      backend_address_pool: {
        value: cdktf.listMapperHcl(applicationGatewayBackendAddressPoolToHclTerraform, true)(this._backendAddressPool.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationGatewayBackendAddressPoolList",
      },
      backend_http_settings: {
        value: cdktf.listMapperHcl(applicationGatewayBackendHttpSettingsToHclTerraform, true)(this._backendHttpSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationGatewayBackendHttpSettingsList",
      },
      custom_error_configuration: {
        value: cdktf.listMapperHcl(applicationGatewayCustomErrorConfigurationToHclTerraform, true)(this._customErrorConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationGatewayCustomErrorConfigurationList",
      },
      frontend_ip_configuration: {
        value: cdktf.listMapperHcl(applicationGatewayFrontendIpConfigurationToHclTerraform, true)(this._frontendIpConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationGatewayFrontendIpConfigurationList",
      },
      frontend_port: {
        value: cdktf.listMapperHcl(applicationGatewayFrontendPortToHclTerraform, true)(this._frontendPort.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationGatewayFrontendPortList",
      },
      gateway_ip_configuration: {
        value: cdktf.listMapperHcl(applicationGatewayGatewayIpConfigurationToHclTerraform, true)(this._gatewayIpConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationGatewayGatewayIpConfigurationList",
      },
      global: {
        value: applicationGatewayGlobalToHclTerraform(this._global.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationGatewayGlobalList",
      },
      http_listener: {
        value: cdktf.listMapperHcl(applicationGatewayHttpListenerToHclTerraform, true)(this._httpListener.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationGatewayHttpListenerList",
      },
      identity: {
        value: applicationGatewayIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationGatewayIdentityList",
      },
      private_link_configuration: {
        value: cdktf.listMapperHcl(applicationGatewayPrivateLinkConfigurationToHclTerraform, true)(this._privateLinkConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationGatewayPrivateLinkConfigurationList",
      },
      probe: {
        value: cdktf.listMapperHcl(applicationGatewayProbeToHclTerraform, true)(this._probe.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationGatewayProbeList",
      },
      redirect_configuration: {
        value: cdktf.listMapperHcl(applicationGatewayRedirectConfigurationToHclTerraform, true)(this._redirectConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationGatewayRedirectConfigurationList",
      },
      request_routing_rule: {
        value: cdktf.listMapperHcl(applicationGatewayRequestRoutingRuleToHclTerraform, true)(this._requestRoutingRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationGatewayRequestRoutingRuleList",
      },
      rewrite_rule_set: {
        value: cdktf.listMapperHcl(applicationGatewayRewriteRuleSetToHclTerraform, true)(this._rewriteRuleSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationGatewayRewriteRuleSetList",
      },
      sku: {
        value: applicationGatewaySkuToHclTerraform(this._sku.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationGatewaySkuList",
      },
      ssl_certificate: {
        value: cdktf.listMapperHcl(applicationGatewaySslCertificateToHclTerraform, true)(this._sslCertificate.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationGatewaySslCertificateList",
      },
      ssl_policy: {
        value: applicationGatewaySslPolicyToHclTerraform(this._sslPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationGatewaySslPolicyList",
      },
      ssl_profile: {
        value: cdktf.listMapperHcl(applicationGatewaySslProfileToHclTerraform, true)(this._sslProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationGatewaySslProfileList",
      },
      timeouts: {
        value: applicationGatewayTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationGatewayTimeouts",
      },
      trusted_client_certificate: {
        value: cdktf.listMapperHcl(applicationGatewayTrustedClientCertificateToHclTerraform, true)(this._trustedClientCertificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationGatewayTrustedClientCertificateList",
      },
      trusted_root_certificate: {
        value: cdktf.listMapperHcl(applicationGatewayTrustedRootCertificateToHclTerraform, true)(this._trustedRootCertificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationGatewayTrustedRootCertificateList",
      },
      url_path_map: {
        value: cdktf.listMapperHcl(applicationGatewayUrlPathMapToHclTerraform, true)(this._urlPathMap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationGatewayUrlPathMapList",
      },
      waf_configuration: {
        value: applicationGatewayWafConfigurationToHclTerraform(this._wafConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationGatewayWafConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
