// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FrontdoorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#friendly_name Frontdoor#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#id Frontdoor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#load_balancer_enabled Frontdoor#load_balancer_enabled}
  */
  readonly loadBalancerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#name Frontdoor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#resource_group_name Frontdoor#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#tags Frontdoor#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * backend_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#backend_pool Frontdoor#backend_pool}
  */
  readonly backendPool: FrontdoorBackendPool[] | cdktf.IResolvable;
  /**
  * backend_pool_health_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#backend_pool_health_probe Frontdoor#backend_pool_health_probe}
  */
  readonly backendPoolHealthProbe: FrontdoorBackendPoolHealthProbe[] | cdktf.IResolvable;
  /**
  * backend_pool_load_balancing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#backend_pool_load_balancing Frontdoor#backend_pool_load_balancing}
  */
  readonly backendPoolLoadBalancing: FrontdoorBackendPoolLoadBalancing[] | cdktf.IResolvable;
  /**
  * backend_pool_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#backend_pool_settings Frontdoor#backend_pool_settings}
  */
  readonly backendPoolSettings?: FrontdoorBackendPoolSettings[] | cdktf.IResolvable;
  /**
  * frontend_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#frontend_endpoint Frontdoor#frontend_endpoint}
  */
  readonly frontendEndpoint: FrontdoorFrontendEndpoint[] | cdktf.IResolvable;
  /**
  * routing_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#routing_rule Frontdoor#routing_rule}
  */
  readonly routingRule: FrontdoorRoutingRule[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#timeouts Frontdoor#timeouts}
  */
  readonly timeouts?: FrontdoorTimeouts;
}
export interface FrontdoorExplicitResourceOrder {
}

export function frontdoorExplicitResourceOrderToTerraform(struct?: FrontdoorExplicitResourceOrder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function frontdoorExplicitResourceOrderToHclTerraform(struct?: FrontdoorExplicitResourceOrder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FrontdoorExplicitResourceOrderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrontdoorExplicitResourceOrder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontdoorExplicitResourceOrder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class FrontdoorExplicitResourceOrderList extends cdktf.ComplexList {

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
  public get(index: number): FrontdoorExplicitResourceOrderOutputReference {
    return new FrontdoorExplicitResourceOrderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrontdoorBackendPoolBackend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#address Frontdoor#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#enabled Frontdoor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#host_header Frontdoor#host_header}
  */
  readonly hostHeader: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#http_port Frontdoor#http_port}
  */
  readonly httpPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#https_port Frontdoor#https_port}
  */
  readonly httpsPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#priority Frontdoor#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#weight Frontdoor#weight}
  */
  readonly weight?: number;
}

export function frontdoorBackendPoolBackendToTerraform(struct?: FrontdoorBackendPoolBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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


export function frontdoorBackendPoolBackendToHclTerraform(struct?: FrontdoorBackendPoolBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_header: {
      value: cdktf.stringToHclTerraform(struct!.hostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_port: {
      value: cdktf.numberToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_port: {
      value: cdktf.numberToHclTerraform(struct!.httpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrontdoorBackendPoolBackendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrontdoorBackendPoolBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._hostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeader = this._hostHeader;
    }
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._httpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPort = this._httpsPort;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontdoorBackendPoolBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._enabled = undefined;
      this._hostHeader = undefined;
      this._httpPort = undefined;
      this._httpsPort = undefined;
      this._priority = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._enabled = value.enabled;
      this._hostHeader = value.hostHeader;
      this._httpPort = value.httpPort;
      this._httpsPort = value.httpsPort;
      this._priority = value.priority;
      this._weight = value.weight;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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

  // host_header - computed: false, optional: false, required: true
  private _hostHeader?: string; 
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }
  public set hostHeader(value: string) {
    this._hostHeader = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader;
  }

  // http_port - computed: false, optional: false, required: true
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // https_port - computed: false, optional: false, required: true
  private _httpsPort?: number; 
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }
  public set httpsPort(value: number) {
    this._httpsPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class FrontdoorBackendPoolBackendList extends cdktf.ComplexList {
  public internalValue? : FrontdoorBackendPoolBackend[] | cdktf.IResolvable

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
  public get(index: number): FrontdoorBackendPoolBackendOutputReference {
    return new FrontdoorBackendPoolBackendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrontdoorBackendPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#health_probe_name Frontdoor#health_probe_name}
  */
  readonly healthProbeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#load_balancing_name Frontdoor#load_balancing_name}
  */
  readonly loadBalancingName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#name Frontdoor#name}
  */
  readonly name: string;
  /**
  * backend block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#backend Frontdoor#backend}
  */
  readonly backend: FrontdoorBackendPoolBackend[] | cdktf.IResolvable;
}

export function frontdoorBackendPoolToTerraform(struct?: FrontdoorBackendPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_probe_name: cdktf.stringToTerraform(struct!.healthProbeName),
    load_balancing_name: cdktf.stringToTerraform(struct!.loadBalancingName),
    name: cdktf.stringToTerraform(struct!.name),
    backend: cdktf.listMapper(frontdoorBackendPoolBackendToTerraform, true)(struct!.backend),
  }
}


export function frontdoorBackendPoolToHclTerraform(struct?: FrontdoorBackendPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_probe_name: {
      value: cdktf.stringToHclTerraform(struct!.healthProbeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancing_name: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancingName),
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
    backend: {
      value: cdktf.listMapperHcl(frontdoorBackendPoolBackendToHclTerraform, true)(struct!.backend),
      isBlock: true,
      type: "list",
      storageClassType: "FrontdoorBackendPoolBackendList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrontdoorBackendPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrontdoorBackendPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthProbeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthProbeName = this._healthProbeName;
    }
    if (this._loadBalancingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingName = this._loadBalancingName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._backend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backend = this._backend?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontdoorBackendPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthProbeName = undefined;
      this._loadBalancingName = undefined;
      this._name = undefined;
      this._backend.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthProbeName = value.healthProbeName;
      this._loadBalancingName = value.loadBalancingName;
      this._name = value.name;
      this._backend.internalValue = value.backend;
    }
  }

  // health_probe_name - computed: false, optional: false, required: true
  private _healthProbeName?: string; 
  public get healthProbeName() {
    return this.getStringAttribute('health_probe_name');
  }
  public set healthProbeName(value: string) {
    this._healthProbeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthProbeNameInput() {
    return this._healthProbeName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balancing_name - computed: false, optional: false, required: true
  private _loadBalancingName?: string; 
  public get loadBalancingName() {
    return this.getStringAttribute('load_balancing_name');
  }
  public set loadBalancingName(value: string) {
    this._loadBalancingName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingNameInput() {
    return this._loadBalancingName;
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

  // backend - computed: false, optional: false, required: true
  private _backend = new FrontdoorBackendPoolBackendList(this, "backend", false);
  public get backend() {
    return this._backend;
  }
  public putBackend(value: FrontdoorBackendPoolBackend[] | cdktf.IResolvable) {
    this._backend.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend.internalValue;
  }
}

export class FrontdoorBackendPoolList extends cdktf.ComplexList {
  public internalValue? : FrontdoorBackendPool[] | cdktf.IResolvable

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
  public get(index: number): FrontdoorBackendPoolOutputReference {
    return new FrontdoorBackendPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrontdoorBackendPoolHealthProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#enabled Frontdoor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#interval_in_seconds Frontdoor#interval_in_seconds}
  */
  readonly intervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#name Frontdoor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#path Frontdoor#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#probe_method Frontdoor#probe_method}
  */
  readonly probeMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#protocol Frontdoor#protocol}
  */
  readonly protocol?: string;
}

export function frontdoorBackendPoolHealthProbeToTerraform(struct?: FrontdoorBackendPoolHealthProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    probe_method: cdktf.stringToTerraform(struct!.probeMethod),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function frontdoorBackendPoolHealthProbeToHclTerraform(struct?: FrontdoorBackendPoolHealthProbe | cdktf.IResolvable): any {
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
    interval_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.intervalInSeconds),
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
    probe_method: {
      value: cdktf.stringToHclTerraform(struct!.probeMethod),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrontdoorBackendPoolHealthProbeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrontdoorBackendPoolHealthProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._intervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalInSeconds = this._intervalInSeconds;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._probeMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeMethod = this._probeMethod;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontdoorBackendPoolHealthProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._intervalInSeconds = undefined;
      this._name = undefined;
      this._path = undefined;
      this._probeMethod = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._intervalInSeconds = value.intervalInSeconds;
      this._name = value.name;
      this._path = value.path;
      this._probeMethod = value.probeMethod;
      this._protocol = value.protocol;
    }
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval_in_seconds - computed: false, optional: true, required: false
  private _intervalInSeconds?: number; 
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }
  public set intervalInSeconds(value: number) {
    this._intervalInSeconds = value;
  }
  public resetIntervalInSeconds() {
    this._intervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInSecondsInput() {
    return this._intervalInSeconds;
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

  // probe_method - computed: false, optional: true, required: false
  private _probeMethod?: string; 
  public get probeMethod() {
    return this.getStringAttribute('probe_method');
  }
  public set probeMethod(value: string) {
    this._probeMethod = value;
  }
  public resetProbeMethod() {
    this._probeMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeMethodInput() {
    return this._probeMethod;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class FrontdoorBackendPoolHealthProbeList extends cdktf.ComplexList {
  public internalValue? : FrontdoorBackendPoolHealthProbe[] | cdktf.IResolvable

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
  public get(index: number): FrontdoorBackendPoolHealthProbeOutputReference {
    return new FrontdoorBackendPoolHealthProbeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrontdoorBackendPoolLoadBalancing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#additional_latency_milliseconds Frontdoor#additional_latency_milliseconds}
  */
  readonly additionalLatencyMilliseconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#name Frontdoor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#sample_size Frontdoor#sample_size}
  */
  readonly sampleSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#successful_samples_required Frontdoor#successful_samples_required}
  */
  readonly successfulSamplesRequired?: number;
}

export function frontdoorBackendPoolLoadBalancingToTerraform(struct?: FrontdoorBackendPoolLoadBalancing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_latency_milliseconds: cdktf.numberToTerraform(struct!.additionalLatencyMilliseconds),
    name: cdktf.stringToTerraform(struct!.name),
    sample_size: cdktf.numberToTerraform(struct!.sampleSize),
    successful_samples_required: cdktf.numberToTerraform(struct!.successfulSamplesRequired),
  }
}


export function frontdoorBackendPoolLoadBalancingToHclTerraform(struct?: FrontdoorBackendPoolLoadBalancing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_latency_milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.additionalLatencyMilliseconds),
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
    sample_size: {
      value: cdktf.numberToHclTerraform(struct!.sampleSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    successful_samples_required: {
      value: cdktf.numberToHclTerraform(struct!.successfulSamplesRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrontdoorBackendPoolLoadBalancingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrontdoorBackendPoolLoadBalancing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalLatencyMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalLatencyMilliseconds = this._additionalLatencyMilliseconds;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sampleSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleSize = this._sampleSize;
    }
    if (this._successfulSamplesRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.successfulSamplesRequired = this._successfulSamplesRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontdoorBackendPoolLoadBalancing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalLatencyMilliseconds = undefined;
      this._name = undefined;
      this._sampleSize = undefined;
      this._successfulSamplesRequired = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalLatencyMilliseconds = value.additionalLatencyMilliseconds;
      this._name = value.name;
      this._sampleSize = value.sampleSize;
      this._successfulSamplesRequired = value.successfulSamplesRequired;
    }
  }

  // additional_latency_milliseconds - computed: false, optional: true, required: false
  private _additionalLatencyMilliseconds?: number; 
  public get additionalLatencyMilliseconds() {
    return this.getNumberAttribute('additional_latency_milliseconds');
  }
  public set additionalLatencyMilliseconds(value: number) {
    this._additionalLatencyMilliseconds = value;
  }
  public resetAdditionalLatencyMilliseconds() {
    this._additionalLatencyMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalLatencyMillisecondsInput() {
    return this._additionalLatencyMilliseconds;
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

  // sample_size - computed: false, optional: true, required: false
  private _sampleSize?: number; 
  public get sampleSize() {
    return this.getNumberAttribute('sample_size');
  }
  public set sampleSize(value: number) {
    this._sampleSize = value;
  }
  public resetSampleSize() {
    this._sampleSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleSizeInput() {
    return this._sampleSize;
  }

  // successful_samples_required - computed: false, optional: true, required: false
  private _successfulSamplesRequired?: number; 
  public get successfulSamplesRequired() {
    return this.getNumberAttribute('successful_samples_required');
  }
  public set successfulSamplesRequired(value: number) {
    this._successfulSamplesRequired = value;
  }
  public resetSuccessfulSamplesRequired() {
    this._successfulSamplesRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successfulSamplesRequiredInput() {
    return this._successfulSamplesRequired;
  }
}

export class FrontdoorBackendPoolLoadBalancingList extends cdktf.ComplexList {
  public internalValue? : FrontdoorBackendPoolLoadBalancing[] | cdktf.IResolvable

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
  public get(index: number): FrontdoorBackendPoolLoadBalancingOutputReference {
    return new FrontdoorBackendPoolLoadBalancingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrontdoorBackendPoolSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#backend_pools_send_receive_timeout_seconds Frontdoor#backend_pools_send_receive_timeout_seconds}
  */
  readonly backendPoolsSendReceiveTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#enforce_backend_pools_certificate_name_check Frontdoor#enforce_backend_pools_certificate_name_check}
  */
  readonly enforceBackendPoolsCertificateNameCheck: boolean | cdktf.IResolvable;
}

export function frontdoorBackendPoolSettingsToTerraform(struct?: FrontdoorBackendPoolSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_pools_send_receive_timeout_seconds: cdktf.numberToTerraform(struct!.backendPoolsSendReceiveTimeoutSeconds),
    enforce_backend_pools_certificate_name_check: cdktf.booleanToTerraform(struct!.enforceBackendPoolsCertificateNameCheck),
  }
}


export function frontdoorBackendPoolSettingsToHclTerraform(struct?: FrontdoorBackendPoolSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_pools_send_receive_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.backendPoolsSendReceiveTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enforce_backend_pools_certificate_name_check: {
      value: cdktf.booleanToHclTerraform(struct!.enforceBackendPoolsCertificateNameCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrontdoorBackendPoolSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrontdoorBackendPoolSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendPoolsSendReceiveTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendPoolsSendReceiveTimeoutSeconds = this._backendPoolsSendReceiveTimeoutSeconds;
    }
    if (this._enforceBackendPoolsCertificateNameCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceBackendPoolsCertificateNameCheck = this._enforceBackendPoolsCertificateNameCheck;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontdoorBackendPoolSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendPoolsSendReceiveTimeoutSeconds = undefined;
      this._enforceBackendPoolsCertificateNameCheck = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendPoolsSendReceiveTimeoutSeconds = value.backendPoolsSendReceiveTimeoutSeconds;
      this._enforceBackendPoolsCertificateNameCheck = value.enforceBackendPoolsCertificateNameCheck;
    }
  }

  // backend_pools_send_receive_timeout_seconds - computed: false, optional: true, required: false
  private _backendPoolsSendReceiveTimeoutSeconds?: number; 
  public get backendPoolsSendReceiveTimeoutSeconds() {
    return this.getNumberAttribute('backend_pools_send_receive_timeout_seconds');
  }
  public set backendPoolsSendReceiveTimeoutSeconds(value: number) {
    this._backendPoolsSendReceiveTimeoutSeconds = value;
  }
  public resetBackendPoolsSendReceiveTimeoutSeconds() {
    this._backendPoolsSendReceiveTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPoolsSendReceiveTimeoutSecondsInput() {
    return this._backendPoolsSendReceiveTimeoutSeconds;
  }

  // enforce_backend_pools_certificate_name_check - computed: false, optional: false, required: true
  private _enforceBackendPoolsCertificateNameCheck?: boolean | cdktf.IResolvable; 
  public get enforceBackendPoolsCertificateNameCheck() {
    return this.getBooleanAttribute('enforce_backend_pools_certificate_name_check');
  }
  public set enforceBackendPoolsCertificateNameCheck(value: boolean | cdktf.IResolvable) {
    this._enforceBackendPoolsCertificateNameCheck = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceBackendPoolsCertificateNameCheckInput() {
    return this._enforceBackendPoolsCertificateNameCheck;
  }
}

export class FrontdoorBackendPoolSettingsList extends cdktf.ComplexList {
  public internalValue? : FrontdoorBackendPoolSettings[] | cdktf.IResolvable

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
  public get(index: number): FrontdoorBackendPoolSettingsOutputReference {
    return new FrontdoorBackendPoolSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrontdoorFrontendEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#host_name Frontdoor#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#name Frontdoor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#session_affinity_enabled Frontdoor#session_affinity_enabled}
  */
  readonly sessionAffinityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#session_affinity_ttl_seconds Frontdoor#session_affinity_ttl_seconds}
  */
  readonly sessionAffinityTtlSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#web_application_firewall_policy_link_id Frontdoor#web_application_firewall_policy_link_id}
  */
  readonly webApplicationFirewallPolicyLinkId?: string;
}

export function frontdoorFrontendEndpointToTerraform(struct?: FrontdoorFrontendEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    name: cdktf.stringToTerraform(struct!.name),
    session_affinity_enabled: cdktf.booleanToTerraform(struct!.sessionAffinityEnabled),
    session_affinity_ttl_seconds: cdktf.numberToTerraform(struct!.sessionAffinityTtlSeconds),
    web_application_firewall_policy_link_id: cdktf.stringToTerraform(struct!.webApplicationFirewallPolicyLinkId),
  }
}


export function frontdoorFrontendEndpointToHclTerraform(struct?: FrontdoorFrontendEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    session_affinity_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sessionAffinityEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_affinity_ttl_seconds: {
      value: cdktf.numberToHclTerraform(struct!.sessionAffinityTtlSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    web_application_firewall_policy_link_id: {
      value: cdktf.stringToHclTerraform(struct!.webApplicationFirewallPolicyLinkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrontdoorFrontendEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrontdoorFrontendEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sessionAffinityEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinityEnabled = this._sessionAffinityEnabled;
    }
    if (this._sessionAffinityTtlSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinityTtlSeconds = this._sessionAffinityTtlSeconds;
    }
    if (this._webApplicationFirewallPolicyLinkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.webApplicationFirewallPolicyLinkId = this._webApplicationFirewallPolicyLinkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontdoorFrontendEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostName = undefined;
      this._name = undefined;
      this._sessionAffinityEnabled = undefined;
      this._sessionAffinityTtlSeconds = undefined;
      this._webApplicationFirewallPolicyLinkId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostName = value.hostName;
      this._name = value.name;
      this._sessionAffinityEnabled = value.sessionAffinityEnabled;
      this._sessionAffinityTtlSeconds = value.sessionAffinityTtlSeconds;
      this._webApplicationFirewallPolicyLinkId = value.webApplicationFirewallPolicyLinkId;
    }
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
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

  // session_affinity_enabled - computed: false, optional: true, required: false
  private _sessionAffinityEnabled?: boolean | cdktf.IResolvable; 
  public get sessionAffinityEnabled() {
    return this.getBooleanAttribute('session_affinity_enabled');
  }
  public set sessionAffinityEnabled(value: boolean | cdktf.IResolvable) {
    this._sessionAffinityEnabled = value;
  }
  public resetSessionAffinityEnabled() {
    this._sessionAffinityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityEnabledInput() {
    return this._sessionAffinityEnabled;
  }

  // session_affinity_ttl_seconds - computed: false, optional: true, required: false
  private _sessionAffinityTtlSeconds?: number; 
  public get sessionAffinityTtlSeconds() {
    return this.getNumberAttribute('session_affinity_ttl_seconds');
  }
  public set sessionAffinityTtlSeconds(value: number) {
    this._sessionAffinityTtlSeconds = value;
  }
  public resetSessionAffinityTtlSeconds() {
    this._sessionAffinityTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityTtlSecondsInput() {
    return this._sessionAffinityTtlSeconds;
  }

  // web_application_firewall_policy_link_id - computed: false, optional: true, required: false
  private _webApplicationFirewallPolicyLinkId?: string; 
  public get webApplicationFirewallPolicyLinkId() {
    return this.getStringAttribute('web_application_firewall_policy_link_id');
  }
  public set webApplicationFirewallPolicyLinkId(value: string) {
    this._webApplicationFirewallPolicyLinkId = value;
  }
  public resetWebApplicationFirewallPolicyLinkId() {
    this._webApplicationFirewallPolicyLinkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webApplicationFirewallPolicyLinkIdInput() {
    return this._webApplicationFirewallPolicyLinkId;
  }
}

export class FrontdoorFrontendEndpointList extends cdktf.ComplexList {
  public internalValue? : FrontdoorFrontendEndpoint[] | cdktf.IResolvable

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
  public get(index: number): FrontdoorFrontendEndpointOutputReference {
    return new FrontdoorFrontendEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrontdoorRoutingRuleForwardingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#backend_pool_name Frontdoor#backend_pool_name}
  */
  readonly backendPoolName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#cache_duration Frontdoor#cache_duration}
  */
  readonly cacheDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#cache_enabled Frontdoor#cache_enabled}
  */
  readonly cacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#cache_query_parameter_strip_directive Frontdoor#cache_query_parameter_strip_directive}
  */
  readonly cacheQueryParameterStripDirective?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#cache_query_parameters Frontdoor#cache_query_parameters}
  */
  readonly cacheQueryParameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#cache_use_dynamic_compression Frontdoor#cache_use_dynamic_compression}
  */
  readonly cacheUseDynamicCompression?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#custom_forwarding_path Frontdoor#custom_forwarding_path}
  */
  readonly customForwardingPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#forwarding_protocol Frontdoor#forwarding_protocol}
  */
  readonly forwardingProtocol?: string;
}

export function frontdoorRoutingRuleForwardingConfigurationToTerraform(struct?: FrontdoorRoutingRuleForwardingConfigurationOutputReference | FrontdoorRoutingRuleForwardingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_pool_name: cdktf.stringToTerraform(struct!.backendPoolName),
    cache_duration: cdktf.stringToTerraform(struct!.cacheDuration),
    cache_enabled: cdktf.booleanToTerraform(struct!.cacheEnabled),
    cache_query_parameter_strip_directive: cdktf.stringToTerraform(struct!.cacheQueryParameterStripDirective),
    cache_query_parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cacheQueryParameters),
    cache_use_dynamic_compression: cdktf.booleanToTerraform(struct!.cacheUseDynamicCompression),
    custom_forwarding_path: cdktf.stringToTerraform(struct!.customForwardingPath),
    forwarding_protocol: cdktf.stringToTerraform(struct!.forwardingProtocol),
  }
}


export function frontdoorRoutingRuleForwardingConfigurationToHclTerraform(struct?: FrontdoorRoutingRuleForwardingConfigurationOutputReference | FrontdoorRoutingRuleForwardingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.backendPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_duration: {
      value: cdktf.stringToHclTerraform(struct!.cacheDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.cacheEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_query_parameter_strip_directive: {
      value: cdktf.stringToHclTerraform(struct!.cacheQueryParameterStripDirective),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_query_parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cacheQueryParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cache_use_dynamic_compression: {
      value: cdktf.booleanToHclTerraform(struct!.cacheUseDynamicCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_forwarding_path: {
      value: cdktf.stringToHclTerraform(struct!.customForwardingPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forwarding_protocol: {
      value: cdktf.stringToHclTerraform(struct!.forwardingProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrontdoorRoutingRuleForwardingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrontdoorRoutingRuleForwardingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendPoolName = this._backendPoolName;
    }
    if (this._cacheDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheDuration = this._cacheDuration;
    }
    if (this._cacheEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheEnabled = this._cacheEnabled;
    }
    if (this._cacheQueryParameterStripDirective !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheQueryParameterStripDirective = this._cacheQueryParameterStripDirective;
    }
    if (this._cacheQueryParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheQueryParameters = this._cacheQueryParameters;
    }
    if (this._cacheUseDynamicCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheUseDynamicCompression = this._cacheUseDynamicCompression;
    }
    if (this._customForwardingPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.customForwardingPath = this._customForwardingPath;
    }
    if (this._forwardingProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingProtocol = this._forwardingProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontdoorRoutingRuleForwardingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendPoolName = undefined;
      this._cacheDuration = undefined;
      this._cacheEnabled = undefined;
      this._cacheQueryParameterStripDirective = undefined;
      this._cacheQueryParameters = undefined;
      this._cacheUseDynamicCompression = undefined;
      this._customForwardingPath = undefined;
      this._forwardingProtocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendPoolName = value.backendPoolName;
      this._cacheDuration = value.cacheDuration;
      this._cacheEnabled = value.cacheEnabled;
      this._cacheQueryParameterStripDirective = value.cacheQueryParameterStripDirective;
      this._cacheQueryParameters = value.cacheQueryParameters;
      this._cacheUseDynamicCompression = value.cacheUseDynamicCompression;
      this._customForwardingPath = value.customForwardingPath;
      this._forwardingProtocol = value.forwardingProtocol;
    }
  }

  // backend_pool_name - computed: false, optional: false, required: true
  private _backendPoolName?: string; 
  public get backendPoolName() {
    return this.getStringAttribute('backend_pool_name');
  }
  public set backendPoolName(value: string) {
    this._backendPoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPoolNameInput() {
    return this._backendPoolName;
  }

  // cache_duration - computed: false, optional: true, required: false
  private _cacheDuration?: string; 
  public get cacheDuration() {
    return this.getStringAttribute('cache_duration');
  }
  public set cacheDuration(value: string) {
    this._cacheDuration = value;
  }
  public resetCacheDuration() {
    this._cacheDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDurationInput() {
    return this._cacheDuration;
  }

  // cache_enabled - computed: false, optional: true, required: false
  private _cacheEnabled?: boolean | cdktf.IResolvable; 
  public get cacheEnabled() {
    return this.getBooleanAttribute('cache_enabled');
  }
  public set cacheEnabled(value: boolean | cdktf.IResolvable) {
    this._cacheEnabled = value;
  }
  public resetCacheEnabled() {
    this._cacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheEnabledInput() {
    return this._cacheEnabled;
  }

  // cache_query_parameter_strip_directive - computed: false, optional: true, required: false
  private _cacheQueryParameterStripDirective?: string; 
  public get cacheQueryParameterStripDirective() {
    return this.getStringAttribute('cache_query_parameter_strip_directive');
  }
  public set cacheQueryParameterStripDirective(value: string) {
    this._cacheQueryParameterStripDirective = value;
  }
  public resetCacheQueryParameterStripDirective() {
    this._cacheQueryParameterStripDirective = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheQueryParameterStripDirectiveInput() {
    return this._cacheQueryParameterStripDirective;
  }

  // cache_query_parameters - computed: false, optional: true, required: false
  private _cacheQueryParameters?: string[]; 
  public get cacheQueryParameters() {
    return this.getListAttribute('cache_query_parameters');
  }
  public set cacheQueryParameters(value: string[]) {
    this._cacheQueryParameters = value;
  }
  public resetCacheQueryParameters() {
    this._cacheQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheQueryParametersInput() {
    return this._cacheQueryParameters;
  }

  // cache_use_dynamic_compression - computed: false, optional: true, required: false
  private _cacheUseDynamicCompression?: boolean | cdktf.IResolvable; 
  public get cacheUseDynamicCompression() {
    return this.getBooleanAttribute('cache_use_dynamic_compression');
  }
  public set cacheUseDynamicCompression(value: boolean | cdktf.IResolvable) {
    this._cacheUseDynamicCompression = value;
  }
  public resetCacheUseDynamicCompression() {
    this._cacheUseDynamicCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheUseDynamicCompressionInput() {
    return this._cacheUseDynamicCompression;
  }

  // custom_forwarding_path - computed: false, optional: true, required: false
  private _customForwardingPath?: string; 
  public get customForwardingPath() {
    return this.getStringAttribute('custom_forwarding_path');
  }
  public set customForwardingPath(value: string) {
    this._customForwardingPath = value;
  }
  public resetCustomForwardingPath() {
    this._customForwardingPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customForwardingPathInput() {
    return this._customForwardingPath;
  }

  // forwarding_protocol - computed: false, optional: true, required: false
  private _forwardingProtocol?: string; 
  public get forwardingProtocol() {
    return this.getStringAttribute('forwarding_protocol');
  }
  public set forwardingProtocol(value: string) {
    this._forwardingProtocol = value;
  }
  public resetForwardingProtocol() {
    this._forwardingProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingProtocolInput() {
    return this._forwardingProtocol;
  }
}
export interface FrontdoorRoutingRuleRedirectConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#custom_fragment Frontdoor#custom_fragment}
  */
  readonly customFragment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#custom_host Frontdoor#custom_host}
  */
  readonly customHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#custom_path Frontdoor#custom_path}
  */
  readonly customPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#custom_query_string Frontdoor#custom_query_string}
  */
  readonly customQueryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#redirect_protocol Frontdoor#redirect_protocol}
  */
  readonly redirectProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#redirect_type Frontdoor#redirect_type}
  */
  readonly redirectType: string;
}

export function frontdoorRoutingRuleRedirectConfigurationToTerraform(struct?: FrontdoorRoutingRuleRedirectConfigurationOutputReference | FrontdoorRoutingRuleRedirectConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_fragment: cdktf.stringToTerraform(struct!.customFragment),
    custom_host: cdktf.stringToTerraform(struct!.customHost),
    custom_path: cdktf.stringToTerraform(struct!.customPath),
    custom_query_string: cdktf.stringToTerraform(struct!.customQueryString),
    redirect_protocol: cdktf.stringToTerraform(struct!.redirectProtocol),
    redirect_type: cdktf.stringToTerraform(struct!.redirectType),
  }
}


export function frontdoorRoutingRuleRedirectConfigurationToHclTerraform(struct?: FrontdoorRoutingRuleRedirectConfigurationOutputReference | FrontdoorRoutingRuleRedirectConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_fragment: {
      value: cdktf.stringToHclTerraform(struct!.customFragment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_host: {
      value: cdktf.stringToHclTerraform(struct!.customHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_path: {
      value: cdktf.stringToHclTerraform(struct!.customPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_query_string: {
      value: cdktf.stringToHclTerraform(struct!.customQueryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_protocol: {
      value: cdktf.stringToHclTerraform(struct!.redirectProtocol),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrontdoorRoutingRuleRedirectConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrontdoorRoutingRuleRedirectConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customFragment !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFragment = this._customFragment;
    }
    if (this._customHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHost = this._customHost;
    }
    if (this._customPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPath = this._customPath;
    }
    if (this._customQueryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.customQueryString = this._customQueryString;
    }
    if (this._redirectProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectProtocol = this._redirectProtocol;
    }
    if (this._redirectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectType = this._redirectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontdoorRoutingRuleRedirectConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customFragment = undefined;
      this._customHost = undefined;
      this._customPath = undefined;
      this._customQueryString = undefined;
      this._redirectProtocol = undefined;
      this._redirectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customFragment = value.customFragment;
      this._customHost = value.customHost;
      this._customPath = value.customPath;
      this._customQueryString = value.customQueryString;
      this._redirectProtocol = value.redirectProtocol;
      this._redirectType = value.redirectType;
    }
  }

  // custom_fragment - computed: false, optional: true, required: false
  private _customFragment?: string; 
  public get customFragment() {
    return this.getStringAttribute('custom_fragment');
  }
  public set customFragment(value: string) {
    this._customFragment = value;
  }
  public resetCustomFragment() {
    this._customFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFragmentInput() {
    return this._customFragment;
  }

  // custom_host - computed: false, optional: true, required: false
  private _customHost?: string; 
  public get customHost() {
    return this.getStringAttribute('custom_host');
  }
  public set customHost(value: string) {
    this._customHost = value;
  }
  public resetCustomHost() {
    this._customHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHostInput() {
    return this._customHost;
  }

  // custom_path - computed: false, optional: true, required: false
  private _customPath?: string; 
  public get customPath() {
    return this.getStringAttribute('custom_path');
  }
  public set customPath(value: string) {
    this._customPath = value;
  }
  public resetCustomPath() {
    this._customPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPathInput() {
    return this._customPath;
  }

  // custom_query_string - computed: false, optional: true, required: false
  private _customQueryString?: string; 
  public get customQueryString() {
    return this.getStringAttribute('custom_query_string');
  }
  public set customQueryString(value: string) {
    this._customQueryString = value;
  }
  public resetCustomQueryString() {
    this._customQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customQueryStringInput() {
    return this._customQueryString;
  }

  // redirect_protocol - computed: false, optional: false, required: true
  private _redirectProtocol?: string; 
  public get redirectProtocol() {
    return this.getStringAttribute('redirect_protocol');
  }
  public set redirectProtocol(value: string) {
    this._redirectProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectProtocolInput() {
    return this._redirectProtocol;
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
}
export interface FrontdoorRoutingRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#accepted_protocols Frontdoor#accepted_protocols}
  */
  readonly acceptedProtocols: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#enabled Frontdoor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#frontend_endpoints Frontdoor#frontend_endpoints}
  */
  readonly frontendEndpoints: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#name Frontdoor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#patterns_to_match Frontdoor#patterns_to_match}
  */
  readonly patternsToMatch: string[];
  /**
  * forwarding_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#forwarding_configuration Frontdoor#forwarding_configuration}
  */
  readonly forwardingConfiguration?: FrontdoorRoutingRuleForwardingConfiguration;
  /**
  * redirect_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#redirect_configuration Frontdoor#redirect_configuration}
  */
  readonly redirectConfiguration?: FrontdoorRoutingRuleRedirectConfiguration;
}

export function frontdoorRoutingRuleToTerraform(struct?: FrontdoorRoutingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accepted_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.acceptedProtocols),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    frontend_endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.frontendEndpoints),
    name: cdktf.stringToTerraform(struct!.name),
    patterns_to_match: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.patternsToMatch),
    forwarding_configuration: frontdoorRoutingRuleForwardingConfigurationToTerraform(struct!.forwardingConfiguration),
    redirect_configuration: frontdoorRoutingRuleRedirectConfigurationToTerraform(struct!.redirectConfiguration),
  }
}


export function frontdoorRoutingRuleToHclTerraform(struct?: FrontdoorRoutingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accepted_protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.acceptedProtocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    frontend_endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.frontendEndpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patterns_to_match: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.patternsToMatch),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    forwarding_configuration: {
      value: frontdoorRoutingRuleForwardingConfigurationToHclTerraform(struct!.forwardingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "FrontdoorRoutingRuleForwardingConfigurationList",
    },
    redirect_configuration: {
      value: frontdoorRoutingRuleRedirectConfigurationToHclTerraform(struct!.redirectConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "FrontdoorRoutingRuleRedirectConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrontdoorRoutingRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrontdoorRoutingRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptedProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptedProtocols = this._acceptedProtocols;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._frontendEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontendEndpoints = this._frontendEndpoints;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._patternsToMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternsToMatch = this._patternsToMatch;
    }
    if (this._forwardingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingConfiguration = this._forwardingConfiguration?.internalValue;
    }
    if (this._redirectConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectConfiguration = this._redirectConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontdoorRoutingRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptedProtocols = undefined;
      this._enabled = undefined;
      this._frontendEndpoints = undefined;
      this._name = undefined;
      this._patternsToMatch = undefined;
      this._forwardingConfiguration.internalValue = undefined;
      this._redirectConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptedProtocols = value.acceptedProtocols;
      this._enabled = value.enabled;
      this._frontendEndpoints = value.frontendEndpoints;
      this._name = value.name;
      this._patternsToMatch = value.patternsToMatch;
      this._forwardingConfiguration.internalValue = value.forwardingConfiguration;
      this._redirectConfiguration.internalValue = value.redirectConfiguration;
    }
  }

  // accepted_protocols - computed: false, optional: false, required: true
  private _acceptedProtocols?: string[]; 
  public get acceptedProtocols() {
    return this.getListAttribute('accepted_protocols');
  }
  public set acceptedProtocols(value: string[]) {
    this._acceptedProtocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptedProtocolsInput() {
    return this._acceptedProtocols;
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

  // frontend_endpoints - computed: false, optional: false, required: true
  private _frontendEndpoints?: string[]; 
  public get frontendEndpoints() {
    return this.getListAttribute('frontend_endpoints');
  }
  public set frontendEndpoints(value: string[]) {
    this._frontendEndpoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendEndpointsInput() {
    return this._frontendEndpoints;
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

  // patterns_to_match - computed: false, optional: false, required: true
  private _patternsToMatch?: string[]; 
  public get patternsToMatch() {
    return this.getListAttribute('patterns_to_match');
  }
  public set patternsToMatch(value: string[]) {
    this._patternsToMatch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsToMatchInput() {
    return this._patternsToMatch;
  }

  // forwarding_configuration - computed: false, optional: true, required: false
  private _forwardingConfiguration = new FrontdoorRoutingRuleForwardingConfigurationOutputReference(this, "forwarding_configuration");
  public get forwardingConfiguration() {
    return this._forwardingConfiguration;
  }
  public putForwardingConfiguration(value: FrontdoorRoutingRuleForwardingConfiguration) {
    this._forwardingConfiguration.internalValue = value;
  }
  public resetForwardingConfiguration() {
    this._forwardingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingConfigurationInput() {
    return this._forwardingConfiguration.internalValue;
  }

  // redirect_configuration - computed: false, optional: true, required: false
  private _redirectConfiguration = new FrontdoorRoutingRuleRedirectConfigurationOutputReference(this, "redirect_configuration");
  public get redirectConfiguration() {
    return this._redirectConfiguration;
  }
  public putRedirectConfiguration(value: FrontdoorRoutingRuleRedirectConfiguration) {
    this._redirectConfiguration.internalValue = value;
  }
  public resetRedirectConfiguration() {
    this._redirectConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectConfigurationInput() {
    return this._redirectConfiguration.internalValue;
  }
}

export class FrontdoorRoutingRuleList extends cdktf.ComplexList {
  public internalValue? : FrontdoorRoutingRule[] | cdktf.IResolvable

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
  public get(index: number): FrontdoorRoutingRuleOutputReference {
    return new FrontdoorRoutingRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrontdoorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#create Frontdoor#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#delete Frontdoor#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#read Frontdoor#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#update Frontdoor#update}
  */
  readonly update?: string;
}

export function frontdoorTimeoutsToTerraform(struct?: FrontdoorTimeouts | cdktf.IResolvable): any {
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


export function frontdoorTimeoutsToHclTerraform(struct?: FrontdoorTimeouts | cdktf.IResolvable): any {
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

export class FrontdoorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FrontdoorTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FrontdoorTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor azurerm_frontdoor}
*/
export class Frontdoor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_frontdoor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Frontdoor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Frontdoor to import
  * @param importFromId The id of the existing Frontdoor that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Frontdoor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_frontdoor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor azurerm_frontdoor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FrontdoorConfig
  */
  public constructor(scope: Construct, id: string, config: FrontdoorConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_frontdoor',
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
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._loadBalancerEnabled = config.loadBalancerEnabled;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._backendPool.internalValue = config.backendPool;
    this._backendPoolHealthProbe.internalValue = config.backendPoolHealthProbe;
    this._backendPoolLoadBalancing.internalValue = config.backendPoolLoadBalancing;
    this._backendPoolSettings.internalValue = config.backendPoolSettings;
    this._frontendEndpoint.internalValue = config.frontendEndpoint;
    this._routingRule.internalValue = config.routingRule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_pool_health_probes - computed: true, optional: false, required: false
  private _backendPoolHealthProbes = new cdktf.StringMap(this, "backend_pool_health_probes");
  public get backendPoolHealthProbes() {
    return this._backendPoolHealthProbes;
  }

  // backend_pool_load_balancing_settings - computed: true, optional: false, required: false
  private _backendPoolLoadBalancingSettings = new cdktf.StringMap(this, "backend_pool_load_balancing_settings");
  public get backendPoolLoadBalancingSettings() {
    return this._backendPoolLoadBalancingSettings;
  }

  // backend_pools - computed: true, optional: false, required: false
  private _backendPools = new cdktf.StringMap(this, "backend_pools");
  public get backendPools() {
    return this._backendPools;
  }

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // explicit_resource_order - computed: true, optional: false, required: false
  private _explicitResourceOrder = new FrontdoorExplicitResourceOrderList(this, "explicit_resource_order", false);
  public get explicitResourceOrder() {
    return this._explicitResourceOrder;
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

  // frontend_endpoints - computed: true, optional: false, required: false
  private _frontendEndpoints = new cdktf.StringMap(this, "frontend_endpoints");
  public get frontendEndpoints() {
    return this._frontendEndpoints;
  }

  // header_frontdoor_id - computed: true, optional: false, required: false
  public get headerFrontdoorId() {
    return this.getStringAttribute('header_frontdoor_id');
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

  // load_balancer_enabled - computed: false, optional: true, required: false
  private _loadBalancerEnabled?: boolean | cdktf.IResolvable; 
  public get loadBalancerEnabled() {
    return this.getBooleanAttribute('load_balancer_enabled');
  }
  public set loadBalancerEnabled(value: boolean | cdktf.IResolvable) {
    this._loadBalancerEnabled = value;
  }
  public resetLoadBalancerEnabled() {
    this._loadBalancerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerEnabledInput() {
    return this._loadBalancerEnabled;
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

  // routing_rules - computed: true, optional: false, required: false
  private _routingRules = new cdktf.StringMap(this, "routing_rules");
  public get routingRules() {
    return this._routingRules;
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

  // backend_pool - computed: false, optional: false, required: true
  private _backendPool = new FrontdoorBackendPoolList(this, "backend_pool", false);
  public get backendPool() {
    return this._backendPool;
  }
  public putBackendPool(value: FrontdoorBackendPool[] | cdktf.IResolvable) {
    this._backendPool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPoolInput() {
    return this._backendPool.internalValue;
  }

  // backend_pool_health_probe - computed: false, optional: false, required: true
  private _backendPoolHealthProbe = new FrontdoorBackendPoolHealthProbeList(this, "backend_pool_health_probe", false);
  public get backendPoolHealthProbe() {
    return this._backendPoolHealthProbe;
  }
  public putBackendPoolHealthProbe(value: FrontdoorBackendPoolHealthProbe[] | cdktf.IResolvable) {
    this._backendPoolHealthProbe.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPoolHealthProbeInput() {
    return this._backendPoolHealthProbe.internalValue;
  }

  // backend_pool_load_balancing - computed: false, optional: false, required: true
  private _backendPoolLoadBalancing = new FrontdoorBackendPoolLoadBalancingList(this, "backend_pool_load_balancing", false);
  public get backendPoolLoadBalancing() {
    return this._backendPoolLoadBalancing;
  }
  public putBackendPoolLoadBalancing(value: FrontdoorBackendPoolLoadBalancing[] | cdktf.IResolvable) {
    this._backendPoolLoadBalancing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPoolLoadBalancingInput() {
    return this._backendPoolLoadBalancing.internalValue;
  }

  // backend_pool_settings - computed: false, optional: true, required: false
  private _backendPoolSettings = new FrontdoorBackendPoolSettingsList(this, "backend_pool_settings", false);
  public get backendPoolSettings() {
    return this._backendPoolSettings;
  }
  public putBackendPoolSettings(value: FrontdoorBackendPoolSettings[] | cdktf.IResolvable) {
    this._backendPoolSettings.internalValue = value;
  }
  public resetBackendPoolSettings() {
    this._backendPoolSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPoolSettingsInput() {
    return this._backendPoolSettings.internalValue;
  }

  // frontend_endpoint - computed: false, optional: false, required: true
  private _frontendEndpoint = new FrontdoorFrontendEndpointList(this, "frontend_endpoint", false);
  public get frontendEndpoint() {
    return this._frontendEndpoint;
  }
  public putFrontendEndpoint(value: FrontdoorFrontendEndpoint[] | cdktf.IResolvable) {
    this._frontendEndpoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendEndpointInput() {
    return this._frontendEndpoint.internalValue;
  }

  // routing_rule - computed: false, optional: false, required: true
  private _routingRule = new FrontdoorRoutingRuleList(this, "routing_rule", false);
  public get routingRule() {
    return this._routingRule;
  }
  public putRoutingRule(value: FrontdoorRoutingRule[] | cdktf.IResolvable) {
    this._routingRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRuleInput() {
    return this._routingRule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FrontdoorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FrontdoorTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      load_balancer_enabled: cdktf.booleanToTerraform(this._loadBalancerEnabled),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      backend_pool: cdktf.listMapper(frontdoorBackendPoolToTerraform, true)(this._backendPool.internalValue),
      backend_pool_health_probe: cdktf.listMapper(frontdoorBackendPoolHealthProbeToTerraform, true)(this._backendPoolHealthProbe.internalValue),
      backend_pool_load_balancing: cdktf.listMapper(frontdoorBackendPoolLoadBalancingToTerraform, true)(this._backendPoolLoadBalancing.internalValue),
      backend_pool_settings: cdktf.listMapper(frontdoorBackendPoolSettingsToTerraform, true)(this._backendPoolSettings.internalValue),
      frontend_endpoint: cdktf.listMapper(frontdoorFrontendEndpointToTerraform, true)(this._frontendEndpoint.internalValue),
      routing_rule: cdktf.listMapper(frontdoorRoutingRuleToTerraform, true)(this._routingRule.internalValue),
      timeouts: frontdoorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_enabled: {
        value: cdktf.booleanToHclTerraform(this._loadBalancerEnabled),
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
      backend_pool: {
        value: cdktf.listMapperHcl(frontdoorBackendPoolToHclTerraform, true)(this._backendPool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FrontdoorBackendPoolList",
      },
      backend_pool_health_probe: {
        value: cdktf.listMapperHcl(frontdoorBackendPoolHealthProbeToHclTerraform, true)(this._backendPoolHealthProbe.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FrontdoorBackendPoolHealthProbeList",
      },
      backend_pool_load_balancing: {
        value: cdktf.listMapperHcl(frontdoorBackendPoolLoadBalancingToHclTerraform, true)(this._backendPoolLoadBalancing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FrontdoorBackendPoolLoadBalancingList",
      },
      backend_pool_settings: {
        value: cdktf.listMapperHcl(frontdoorBackendPoolSettingsToHclTerraform, true)(this._backendPoolSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FrontdoorBackendPoolSettingsList",
      },
      frontend_endpoint: {
        value: cdktf.listMapperHcl(frontdoorFrontendEndpointToHclTerraform, true)(this._frontendEndpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FrontdoorFrontendEndpointList",
      },
      routing_rule: {
        value: cdktf.listMapperHcl(frontdoorRoutingRuleToHclTerraform, true)(this._routingRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FrontdoorRoutingRuleList",
      },
      timeouts: {
        value: frontdoorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FrontdoorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
