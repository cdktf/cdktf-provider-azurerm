// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SignalrServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#aad_auth_enabled SignalrService#aad_auth_enabled}
  */
  readonly aadAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#connectivity_logs_enabled SignalrService#connectivity_logs_enabled}
  */
  readonly connectivityLogsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#http_request_logs_enabled SignalrService#http_request_logs_enabled}
  */
  readonly httpRequestLogsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#id SignalrService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#live_trace_enabled SignalrService#live_trace_enabled}
  */
  readonly liveTraceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#local_auth_enabled SignalrService#local_auth_enabled}
  */
  readonly localAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#location SignalrService#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#messaging_logs_enabled SignalrService#messaging_logs_enabled}
  */
  readonly messagingLogsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#name SignalrService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#public_network_access_enabled SignalrService#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#resource_group_name SignalrService#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#serverless_connection_timeout_in_seconds SignalrService#serverless_connection_timeout_in_seconds}
  */
  readonly serverlessConnectionTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#service_mode SignalrService#service_mode}
  */
  readonly serviceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#tags SignalrService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#tls_client_cert_enabled SignalrService#tls_client_cert_enabled}
  */
  readonly tlsClientCertEnabled?: boolean | cdktf.IResolvable;
  /**
  * cors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#cors SignalrService#cors}
  */
  readonly cors?: SignalrServiceCors[] | cdktf.IResolvable;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#identity SignalrService#identity}
  */
  readonly identity?: SignalrServiceIdentity;
  /**
  * live_trace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#live_trace SignalrService#live_trace}
  */
  readonly liveTrace?: SignalrServiceLiveTrace;
  /**
  * sku block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#sku SignalrService#sku}
  */
  readonly sku: SignalrServiceSku;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#timeouts SignalrService#timeouts}
  */
  readonly timeouts?: SignalrServiceTimeouts;
  /**
  * upstream_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#upstream_endpoint SignalrService#upstream_endpoint}
  */
  readonly upstreamEndpoint?: SignalrServiceUpstreamEndpoint[] | cdktf.IResolvable;
}
export interface SignalrServiceCors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#allowed_origins SignalrService#allowed_origins}
  */
  readonly allowedOrigins: string[];
}

export function signalrServiceCorsToTerraform(struct?: SignalrServiceCors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
  }
}


export function signalrServiceCorsToHclTerraform(struct?: SignalrServiceCors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SignalrServiceCorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SignalrServiceCors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SignalrServiceCors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedOrigins = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedOrigins = value.allowedOrigins;
    }
  }

  // allowed_origins - computed: false, optional: false, required: true
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_origins'));
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }
}

export class SignalrServiceCorsList extends cdktf.ComplexList {
  public internalValue? : SignalrServiceCors[] | cdktf.IResolvable

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
  public get(index: number): SignalrServiceCorsOutputReference {
    return new SignalrServiceCorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SignalrServiceIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#identity_ids SignalrService#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#type SignalrService#type}
  */
  readonly type: string;
}

export function signalrServiceIdentityToTerraform(struct?: SignalrServiceIdentityOutputReference | SignalrServiceIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function signalrServiceIdentityToHclTerraform(struct?: SignalrServiceIdentityOutputReference | SignalrServiceIdentity): any {
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

export class SignalrServiceIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SignalrServiceIdentity | undefined {
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

  public set internalValue(value: SignalrServiceIdentity | undefined) {
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
export interface SignalrServiceLiveTrace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#connectivity_logs_enabled SignalrService#connectivity_logs_enabled}
  */
  readonly connectivityLogsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#enabled SignalrService#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#http_request_logs_enabled SignalrService#http_request_logs_enabled}
  */
  readonly httpRequestLogsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#messaging_logs_enabled SignalrService#messaging_logs_enabled}
  */
  readonly messagingLogsEnabled?: boolean | cdktf.IResolvable;
}

export function signalrServiceLiveTraceToTerraform(struct?: SignalrServiceLiveTraceOutputReference | SignalrServiceLiveTrace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connectivity_logs_enabled: cdktf.booleanToTerraform(struct!.connectivityLogsEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    http_request_logs_enabled: cdktf.booleanToTerraform(struct!.httpRequestLogsEnabled),
    messaging_logs_enabled: cdktf.booleanToTerraform(struct!.messagingLogsEnabled),
  }
}


export function signalrServiceLiveTraceToHclTerraform(struct?: SignalrServiceLiveTraceOutputReference | SignalrServiceLiveTrace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connectivity_logs_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.connectivityLogsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_request_logs_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.httpRequestLogsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    messaging_logs_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.messagingLogsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SignalrServiceLiveTraceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SignalrServiceLiveTrace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectivityLogsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivityLogsEnabled = this._connectivityLogsEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._httpRequestLogsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestLogsEnabled = this._httpRequestLogsEnabled;
    }
    if (this._messagingLogsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.messagingLogsEnabled = this._messagingLogsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SignalrServiceLiveTrace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectivityLogsEnabled = undefined;
      this._enabled = undefined;
      this._httpRequestLogsEnabled = undefined;
      this._messagingLogsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectivityLogsEnabled = value.connectivityLogsEnabled;
      this._enabled = value.enabled;
      this._httpRequestLogsEnabled = value.httpRequestLogsEnabled;
      this._messagingLogsEnabled = value.messagingLogsEnabled;
    }
  }

  // connectivity_logs_enabled - computed: false, optional: true, required: false
  private _connectivityLogsEnabled?: boolean | cdktf.IResolvable; 
  public get connectivityLogsEnabled() {
    return this.getBooleanAttribute('connectivity_logs_enabled');
  }
  public set connectivityLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._connectivityLogsEnabled = value;
  }
  public resetConnectivityLogsEnabled() {
    this._connectivityLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityLogsEnabledInput() {
    return this._connectivityLogsEnabled;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // http_request_logs_enabled - computed: false, optional: true, required: false
  private _httpRequestLogsEnabled?: boolean | cdktf.IResolvable; 
  public get httpRequestLogsEnabled() {
    return this.getBooleanAttribute('http_request_logs_enabled');
  }
  public set httpRequestLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._httpRequestLogsEnabled = value;
  }
  public resetHttpRequestLogsEnabled() {
    this._httpRequestLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestLogsEnabledInput() {
    return this._httpRequestLogsEnabled;
  }

  // messaging_logs_enabled - computed: false, optional: true, required: false
  private _messagingLogsEnabled?: boolean | cdktf.IResolvable; 
  public get messagingLogsEnabled() {
    return this.getBooleanAttribute('messaging_logs_enabled');
  }
  public set messagingLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._messagingLogsEnabled = value;
  }
  public resetMessagingLogsEnabled() {
    this._messagingLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingLogsEnabledInput() {
    return this._messagingLogsEnabled;
  }
}
export interface SignalrServiceSku {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#capacity SignalrService#capacity}
  */
  readonly capacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#name SignalrService#name}
  */
  readonly name: string;
}

export function signalrServiceSkuToTerraform(struct?: SignalrServiceSkuOutputReference | SignalrServiceSku): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function signalrServiceSkuToHclTerraform(struct?: SignalrServiceSkuOutputReference | SignalrServiceSku): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SignalrServiceSkuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SignalrServiceSku | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SignalrServiceSku | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacity = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacity = value.capacity;
      this._name = value.name;
    }
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
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
}
export interface SignalrServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#create SignalrService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#delete SignalrService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#read SignalrService#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#update SignalrService#update}
  */
  readonly update?: string;
}

export function signalrServiceTimeoutsToTerraform(struct?: SignalrServiceTimeouts | cdktf.IResolvable): any {
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


export function signalrServiceTimeoutsToHclTerraform(struct?: SignalrServiceTimeouts | cdktf.IResolvable): any {
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

export class SignalrServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SignalrServiceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SignalrServiceTimeouts | cdktf.IResolvable | undefined) {
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
export interface SignalrServiceUpstreamEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#category_pattern SignalrService#category_pattern}
  */
  readonly categoryPattern: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#event_pattern SignalrService#event_pattern}
  */
  readonly eventPattern: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#hub_pattern SignalrService#hub_pattern}
  */
  readonly hubPattern: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#url_template SignalrService#url_template}
  */
  readonly urlTemplate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#user_assigned_identity_id SignalrService#user_assigned_identity_id}
  */
  readonly userAssignedIdentityId?: string;
}

export function signalrServiceUpstreamEndpointToTerraform(struct?: SignalrServiceUpstreamEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categoryPattern),
    event_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventPattern),
    hub_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hubPattern),
    url_template: cdktf.stringToTerraform(struct!.urlTemplate),
    user_assigned_identity_id: cdktf.stringToTerraform(struct!.userAssignedIdentityId),
  }
}


export function signalrServiceUpstreamEndpointToHclTerraform(struct?: SignalrServiceUpstreamEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category_pattern: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.categoryPattern),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    event_pattern: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eventPattern),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hub_pattern: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hubPattern),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    url_template: {
      value: cdktf.stringToHclTerraform(struct!.urlTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_assigned_identity_id: {
      value: cdktf.stringToHclTerraform(struct!.userAssignedIdentityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SignalrServiceUpstreamEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SignalrServiceUpstreamEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryPattern = this._categoryPattern;
    }
    if (this._eventPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventPattern = this._eventPattern;
    }
    if (this._hubPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubPattern = this._hubPattern;
    }
    if (this._urlTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlTemplate = this._urlTemplate;
    }
    if (this._userAssignedIdentityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentityId = this._userAssignedIdentityId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SignalrServiceUpstreamEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categoryPattern = undefined;
      this._eventPattern = undefined;
      this._hubPattern = undefined;
      this._urlTemplate = undefined;
      this._userAssignedIdentityId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categoryPattern = value.categoryPattern;
      this._eventPattern = value.eventPattern;
      this._hubPattern = value.hubPattern;
      this._urlTemplate = value.urlTemplate;
      this._userAssignedIdentityId = value.userAssignedIdentityId;
    }
  }

  // category_pattern - computed: false, optional: false, required: true
  private _categoryPattern?: string[]; 
  public get categoryPattern() {
    return this.getListAttribute('category_pattern');
  }
  public set categoryPattern(value: string[]) {
    this._categoryPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryPatternInput() {
    return this._categoryPattern;
  }

  // event_pattern - computed: false, optional: false, required: true
  private _eventPattern?: string[]; 
  public get eventPattern() {
    return this.getListAttribute('event_pattern');
  }
  public set eventPattern(value: string[]) {
    this._eventPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPatternInput() {
    return this._eventPattern;
  }

  // hub_pattern - computed: false, optional: false, required: true
  private _hubPattern?: string[]; 
  public get hubPattern() {
    return this.getListAttribute('hub_pattern');
  }
  public set hubPattern(value: string[]) {
    this._hubPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hubPatternInput() {
    return this._hubPattern;
  }

  // url_template - computed: false, optional: false, required: true
  private _urlTemplate?: string; 
  public get urlTemplate() {
    return this.getStringAttribute('url_template');
  }
  public set urlTemplate(value: string) {
    this._urlTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlTemplateInput() {
    return this._urlTemplate;
  }

  // user_assigned_identity_id - computed: false, optional: true, required: false
  private _userAssignedIdentityId?: string; 
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
  public set userAssignedIdentityId(value: string) {
    this._userAssignedIdentityId = value;
  }
  public resetUserAssignedIdentityId() {
    this._userAssignedIdentityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentityIdInput() {
    return this._userAssignedIdentityId;
  }
}

export class SignalrServiceUpstreamEndpointList extends cdktf.ComplexList {
  public internalValue? : SignalrServiceUpstreamEndpoint[] | cdktf.IResolvable

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
  public get(index: number): SignalrServiceUpstreamEndpointOutputReference {
    return new SignalrServiceUpstreamEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service azurerm_signalr_service}
*/
export class SignalrService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_signalr_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SignalrService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SignalrService to import
  * @param importFromId The id of the existing SignalrService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SignalrService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_signalr_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/signalr_service azurerm_signalr_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SignalrServiceConfig
  */
  public constructor(scope: Construct, id: string, config: SignalrServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_signalr_service',
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
    this._aadAuthEnabled = config.aadAuthEnabled;
    this._connectivityLogsEnabled = config.connectivityLogsEnabled;
    this._httpRequestLogsEnabled = config.httpRequestLogsEnabled;
    this._id = config.id;
    this._liveTraceEnabled = config.liveTraceEnabled;
    this._localAuthEnabled = config.localAuthEnabled;
    this._location = config.location;
    this._messagingLogsEnabled = config.messagingLogsEnabled;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._serverlessConnectionTimeoutInSeconds = config.serverlessConnectionTimeoutInSeconds;
    this._serviceMode = config.serviceMode;
    this._tags = config.tags;
    this._tlsClientCertEnabled = config.tlsClientCertEnabled;
    this._cors.internalValue = config.cors;
    this._identity.internalValue = config.identity;
    this._liveTrace.internalValue = config.liveTrace;
    this._sku.internalValue = config.sku;
    this._timeouts.internalValue = config.timeouts;
    this._upstreamEndpoint.internalValue = config.upstreamEndpoint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aad_auth_enabled - computed: false, optional: true, required: false
  private _aadAuthEnabled?: boolean | cdktf.IResolvable; 
  public get aadAuthEnabled() {
    return this.getBooleanAttribute('aad_auth_enabled');
  }
  public set aadAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._aadAuthEnabled = value;
  }
  public resetAadAuthEnabled() {
    this._aadAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadAuthEnabledInput() {
    return this._aadAuthEnabled;
  }

  // connectivity_logs_enabled - computed: false, optional: true, required: false
  private _connectivityLogsEnabled?: boolean | cdktf.IResolvable; 
  public get connectivityLogsEnabled() {
    return this.getBooleanAttribute('connectivity_logs_enabled');
  }
  public set connectivityLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._connectivityLogsEnabled = value;
  }
  public resetConnectivityLogsEnabled() {
    this._connectivityLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityLogsEnabledInput() {
    return this._connectivityLogsEnabled;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // http_request_logs_enabled - computed: false, optional: true, required: false
  private _httpRequestLogsEnabled?: boolean | cdktf.IResolvable; 
  public get httpRequestLogsEnabled() {
    return this.getBooleanAttribute('http_request_logs_enabled');
  }
  public set httpRequestLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._httpRequestLogsEnabled = value;
  }
  public resetHttpRequestLogsEnabled() {
    this._httpRequestLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestLogsEnabledInput() {
    return this._httpRequestLogsEnabled;
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // live_trace_enabled - computed: false, optional: true, required: false
  private _liveTraceEnabled?: boolean | cdktf.IResolvable; 
  public get liveTraceEnabled() {
    return this.getBooleanAttribute('live_trace_enabled');
  }
  public set liveTraceEnabled(value: boolean | cdktf.IResolvable) {
    this._liveTraceEnabled = value;
  }
  public resetLiveTraceEnabled() {
    this._liveTraceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveTraceEnabledInput() {
    return this._liveTraceEnabled;
  }

  // local_auth_enabled - computed: false, optional: true, required: false
  private _localAuthEnabled?: boolean | cdktf.IResolvable; 
  public get localAuthEnabled() {
    return this.getBooleanAttribute('local_auth_enabled');
  }
  public set localAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._localAuthEnabled = value;
  }
  public resetLocalAuthEnabled() {
    this._localAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthEnabledInput() {
    return this._localAuthEnabled;
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

  // messaging_logs_enabled - computed: false, optional: true, required: false
  private _messagingLogsEnabled?: boolean | cdktf.IResolvable; 
  public get messagingLogsEnabled() {
    return this.getBooleanAttribute('messaging_logs_enabled');
  }
  public set messagingLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._messagingLogsEnabled = value;
  }
  public resetMessagingLogsEnabled() {
    this._messagingLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingLogsEnabledInput() {
    return this._messagingLogsEnabled;
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

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // primary_connection_string - computed: true, optional: false, required: false
  public get primaryConnectionString() {
    return this.getStringAttribute('primary_connection_string');
  }

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable; 
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled;
  }

  // public_port - computed: true, optional: false, required: false
  public get publicPort() {
    return this.getNumberAttribute('public_port');
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

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // secondary_connection_string - computed: true, optional: false, required: false
  public get secondaryConnectionString() {
    return this.getStringAttribute('secondary_connection_string');
  }

  // server_port - computed: true, optional: false, required: false
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }

  // serverless_connection_timeout_in_seconds - computed: false, optional: true, required: false
  private _serverlessConnectionTimeoutInSeconds?: number; 
  public get serverlessConnectionTimeoutInSeconds() {
    return this.getNumberAttribute('serverless_connection_timeout_in_seconds');
  }
  public set serverlessConnectionTimeoutInSeconds(value: number) {
    this._serverlessConnectionTimeoutInSeconds = value;
  }
  public resetServerlessConnectionTimeoutInSeconds() {
    this._serverlessConnectionTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessConnectionTimeoutInSecondsInput() {
    return this._serverlessConnectionTimeoutInSeconds;
  }

  // service_mode - computed: false, optional: true, required: false
  private _serviceMode?: string; 
  public get serviceMode() {
    return this.getStringAttribute('service_mode');
  }
  public set serviceMode(value: string) {
    this._serviceMode = value;
  }
  public resetServiceMode() {
    this._serviceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceModeInput() {
    return this._serviceMode;
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

  // tls_client_cert_enabled - computed: false, optional: true, required: false
  private _tlsClientCertEnabled?: boolean | cdktf.IResolvable; 
  public get tlsClientCertEnabled() {
    return this.getBooleanAttribute('tls_client_cert_enabled');
  }
  public set tlsClientCertEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsClientCertEnabled = value;
  }
  public resetTlsClientCertEnabled() {
    this._tlsClientCertEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientCertEnabledInput() {
    return this._tlsClientCertEnabled;
  }

  // cors - computed: false, optional: true, required: false
  private _cors = new SignalrServiceCorsList(this, "cors", false);
  public get cors() {
    return this._cors;
  }
  public putCors(value: SignalrServiceCors[] | cdktf.IResolvable) {
    this._cors.internalValue = value;
  }
  public resetCors() {
    this._cors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new SignalrServiceIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: SignalrServiceIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // live_trace - computed: false, optional: true, required: false
  private _liveTrace = new SignalrServiceLiveTraceOutputReference(this, "live_trace");
  public get liveTrace() {
    return this._liveTrace;
  }
  public putLiveTrace(value: SignalrServiceLiveTrace) {
    this._liveTrace.internalValue = value;
  }
  public resetLiveTrace() {
    this._liveTrace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveTraceInput() {
    return this._liveTrace.internalValue;
  }

  // sku - computed: false, optional: false, required: true
  private _sku = new SignalrServiceSkuOutputReference(this, "sku");
  public get sku() {
    return this._sku;
  }
  public putSku(value: SignalrServiceSku) {
    this._sku.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SignalrServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SignalrServiceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // upstream_endpoint - computed: false, optional: true, required: false
  private _upstreamEndpoint = new SignalrServiceUpstreamEndpointList(this, "upstream_endpoint", true);
  public get upstreamEndpoint() {
    return this._upstreamEndpoint;
  }
  public putUpstreamEndpoint(value: SignalrServiceUpstreamEndpoint[] | cdktf.IResolvable) {
    this._upstreamEndpoint.internalValue = value;
  }
  public resetUpstreamEndpoint() {
    this._upstreamEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamEndpointInput() {
    return this._upstreamEndpoint.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aad_auth_enabled: cdktf.booleanToTerraform(this._aadAuthEnabled),
      connectivity_logs_enabled: cdktf.booleanToTerraform(this._connectivityLogsEnabled),
      http_request_logs_enabled: cdktf.booleanToTerraform(this._httpRequestLogsEnabled),
      id: cdktf.stringToTerraform(this._id),
      live_trace_enabled: cdktf.booleanToTerraform(this._liveTraceEnabled),
      local_auth_enabled: cdktf.booleanToTerraform(this._localAuthEnabled),
      location: cdktf.stringToTerraform(this._location),
      messaging_logs_enabled: cdktf.booleanToTerraform(this._messagingLogsEnabled),
      name: cdktf.stringToTerraform(this._name),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      serverless_connection_timeout_in_seconds: cdktf.numberToTerraform(this._serverlessConnectionTimeoutInSeconds),
      service_mode: cdktf.stringToTerraform(this._serviceMode),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tls_client_cert_enabled: cdktf.booleanToTerraform(this._tlsClientCertEnabled),
      cors: cdktf.listMapper(signalrServiceCorsToTerraform, true)(this._cors.internalValue),
      identity: signalrServiceIdentityToTerraform(this._identity.internalValue),
      live_trace: signalrServiceLiveTraceToTerraform(this._liveTrace.internalValue),
      sku: signalrServiceSkuToTerraform(this._sku.internalValue),
      timeouts: signalrServiceTimeoutsToTerraform(this._timeouts.internalValue),
      upstream_endpoint: cdktf.listMapper(signalrServiceUpstreamEndpointToTerraform, true)(this._upstreamEndpoint.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aad_auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._aadAuthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connectivity_logs_enabled: {
        value: cdktf.booleanToHclTerraform(this._connectivityLogsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_request_logs_enabled: {
        value: cdktf.booleanToHclTerraform(this._httpRequestLogsEnabled),
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
      live_trace_enabled: {
        value: cdktf.booleanToHclTerraform(this._liveTraceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._localAuthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      messaging_logs_enabled: {
        value: cdktf.booleanToHclTerraform(this._messagingLogsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_network_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._publicNetworkAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverless_connection_timeout_in_seconds: {
        value: cdktf.numberToHclTerraform(this._serverlessConnectionTimeoutInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_mode: {
        value: cdktf.stringToHclTerraform(this._serviceMode),
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
      tls_client_cert_enabled: {
        value: cdktf.booleanToHclTerraform(this._tlsClientCertEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cors: {
        value: cdktf.listMapperHcl(signalrServiceCorsToHclTerraform, true)(this._cors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SignalrServiceCorsList",
      },
      identity: {
        value: signalrServiceIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SignalrServiceIdentityList",
      },
      live_trace: {
        value: signalrServiceLiveTraceToHclTerraform(this._liveTrace.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SignalrServiceLiveTraceList",
      },
      sku: {
        value: signalrServiceSkuToHclTerraform(this._sku.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SignalrServiceSkuList",
      },
      timeouts: {
        value: signalrServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SignalrServiceTimeouts",
      },
      upstream_endpoint: {
        value: cdktf.listMapperHcl(signalrServiceUpstreamEndpointToHclTerraform, true)(this._upstreamEndpoint.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SignalrServiceUpstreamEndpointList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
