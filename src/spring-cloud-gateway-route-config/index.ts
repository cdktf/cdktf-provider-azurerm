// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpringCloudGatewayRouteConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#filters SpringCloudGatewayRouteConfig#filters}
  */
  readonly filters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#id SpringCloudGatewayRouteConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#name SpringCloudGatewayRouteConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#predicates SpringCloudGatewayRouteConfig#predicates}
  */
  readonly predicates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#protocol SpringCloudGatewayRouteConfig#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#spring_cloud_app_id SpringCloudGatewayRouteConfig#spring_cloud_app_id}
  */
  readonly springCloudAppId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#spring_cloud_gateway_id SpringCloudGatewayRouteConfig#spring_cloud_gateway_id}
  */
  readonly springCloudGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#sso_validation_enabled SpringCloudGatewayRouteConfig#sso_validation_enabled}
  */
  readonly ssoValidationEnabled?: boolean | cdktf.IResolvable;
  /**
  * open_api block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#open_api SpringCloudGatewayRouteConfig#open_api}
  */
  readonly openApi?: SpringCloudGatewayRouteConfigOpenApi;
  /**
  * route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#route SpringCloudGatewayRouteConfig#route}
  */
  readonly route?: SpringCloudGatewayRouteConfigRoute[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#timeouts SpringCloudGatewayRouteConfig#timeouts}
  */
  readonly timeouts?: SpringCloudGatewayRouteConfigTimeouts;
}
export interface SpringCloudGatewayRouteConfigOpenApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#uri SpringCloudGatewayRouteConfig#uri}
  */
  readonly uri?: string;
}

export function springCloudGatewayRouteConfigOpenApiToTerraform(struct?: SpringCloudGatewayRouteConfigOpenApiOutputReference | SpringCloudGatewayRouteConfigOpenApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function springCloudGatewayRouteConfigOpenApiToHclTerraform(struct?: SpringCloudGatewayRouteConfigOpenApiOutputReference | SpringCloudGatewayRouteConfigOpenApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudGatewayRouteConfigOpenApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpringCloudGatewayRouteConfigOpenApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudGatewayRouteConfigOpenApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uri = value.uri;
    }
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface SpringCloudGatewayRouteConfigRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#classification_tags SpringCloudGatewayRouteConfig#classification_tags}
  */
  readonly classificationTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#description SpringCloudGatewayRouteConfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#filters SpringCloudGatewayRouteConfig#filters}
  */
  readonly filters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#order SpringCloudGatewayRouteConfig#order}
  */
  readonly order: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#predicates SpringCloudGatewayRouteConfig#predicates}
  */
  readonly predicates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#sso_validation_enabled SpringCloudGatewayRouteConfig#sso_validation_enabled}
  */
  readonly ssoValidationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#title SpringCloudGatewayRouteConfig#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#token_relay SpringCloudGatewayRouteConfig#token_relay}
  */
  readonly tokenRelay?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#uri SpringCloudGatewayRouteConfig#uri}
  */
  readonly uri?: string;
}

export function springCloudGatewayRouteConfigRouteToTerraform(struct?: SpringCloudGatewayRouteConfigRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classification_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classificationTags),
    description: cdktf.stringToTerraform(struct!.description),
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
    order: cdktf.numberToTerraform(struct!.order),
    predicates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.predicates),
    sso_validation_enabled: cdktf.booleanToTerraform(struct!.ssoValidationEnabled),
    title: cdktf.stringToTerraform(struct!.title),
    token_relay: cdktf.booleanToTerraform(struct!.tokenRelay),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function springCloudGatewayRouteConfigRouteToHclTerraform(struct?: SpringCloudGatewayRouteConfigRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classification_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classificationTags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    predicates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.predicates),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sso_validation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ssoValidationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_relay: {
      value: cdktf.booleanToHclTerraform(struct!.tokenRelay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudGatewayRouteConfigRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SpringCloudGatewayRouteConfigRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classificationTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.classificationTags = this._classificationTags;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._predicates !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicates = this._predicates;
    }
    if (this._ssoValidationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoValidationEnabled = this._ssoValidationEnabled;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._tokenRelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenRelay = this._tokenRelay;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudGatewayRouteConfigRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classificationTags = undefined;
      this._description = undefined;
      this._filters = undefined;
      this._order = undefined;
      this._predicates = undefined;
      this._ssoValidationEnabled = undefined;
      this._title = undefined;
      this._tokenRelay = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classificationTags = value.classificationTags;
      this._description = value.description;
      this._filters = value.filters;
      this._order = value.order;
      this._predicates = value.predicates;
      this._ssoValidationEnabled = value.ssoValidationEnabled;
      this._title = value.title;
      this._tokenRelay = value.tokenRelay;
      this._uri = value.uri;
    }
  }

  // classification_tags - computed: false, optional: true, required: false
  private _classificationTags?: string[]; 
  public get classificationTags() {
    return cdktf.Fn.tolist(this.getListAttribute('classification_tags'));
  }
  public set classificationTags(value: string[]) {
    this._classificationTags = value;
  }
  public resetClassificationTags() {
    this._classificationTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationTagsInput() {
    return this._classificationTags;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: string[]; 
  public get filters() {
    return cdktf.Fn.tolist(this.getListAttribute('filters'));
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // predicates - computed: false, optional: true, required: false
  private _predicates?: string[]; 
  public get predicates() {
    return cdktf.Fn.tolist(this.getListAttribute('predicates'));
  }
  public set predicates(value: string[]) {
    this._predicates = value;
  }
  public resetPredicates() {
    this._predicates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicatesInput() {
    return this._predicates;
  }

  // sso_validation_enabled - computed: false, optional: true, required: false
  private _ssoValidationEnabled?: boolean | cdktf.IResolvable; 
  public get ssoValidationEnabled() {
    return this.getBooleanAttribute('sso_validation_enabled');
  }
  public set ssoValidationEnabled(value: boolean | cdktf.IResolvable) {
    this._ssoValidationEnabled = value;
  }
  public resetSsoValidationEnabled() {
    this._ssoValidationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoValidationEnabledInput() {
    return this._ssoValidationEnabled;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // token_relay - computed: false, optional: true, required: false
  private _tokenRelay?: boolean | cdktf.IResolvable; 
  public get tokenRelay() {
    return this.getBooleanAttribute('token_relay');
  }
  public set tokenRelay(value: boolean | cdktf.IResolvable) {
    this._tokenRelay = value;
  }
  public resetTokenRelay() {
    this._tokenRelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRelayInput() {
    return this._tokenRelay;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class SpringCloudGatewayRouteConfigRouteList extends cdktf.ComplexList {
  public internalValue? : SpringCloudGatewayRouteConfigRoute[] | cdktf.IResolvable

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
  public get(index: number): SpringCloudGatewayRouteConfigRouteOutputReference {
    return new SpringCloudGatewayRouteConfigRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpringCloudGatewayRouteConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#create SpringCloudGatewayRouteConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#delete SpringCloudGatewayRouteConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#read SpringCloudGatewayRouteConfig#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#update SpringCloudGatewayRouteConfig#update}
  */
  readonly update?: string;
}

export function springCloudGatewayRouteConfigTimeoutsToTerraform(struct?: SpringCloudGatewayRouteConfigTimeouts | cdktf.IResolvable): any {
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


export function springCloudGatewayRouteConfigTimeoutsToHclTerraform(struct?: SpringCloudGatewayRouteConfigTimeouts | cdktf.IResolvable): any {
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

export class SpringCloudGatewayRouteConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpringCloudGatewayRouteConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SpringCloudGatewayRouteConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config azurerm_spring_cloud_gateway_route_config}
*/
export class SpringCloudGatewayRouteConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_spring_cloud_gateway_route_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpringCloudGatewayRouteConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpringCloudGatewayRouteConfig to import
  * @param importFromId The id of the existing SpringCloudGatewayRouteConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpringCloudGatewayRouteConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_spring_cloud_gateway_route_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_gateway_route_config azurerm_spring_cloud_gateway_route_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpringCloudGatewayRouteConfigConfig
  */
  public constructor(scope: Construct, id: string, config: SpringCloudGatewayRouteConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_spring_cloud_gateway_route_config',
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
    this._filters = config.filters;
    this._id = config.id;
    this._name = config.name;
    this._predicates = config.predicates;
    this._protocol = config.protocol;
    this._springCloudAppId = config.springCloudAppId;
    this._springCloudGatewayId = config.springCloudGatewayId;
    this._ssoValidationEnabled = config.ssoValidationEnabled;
    this._openApi.internalValue = config.openApi;
    this._route.internalValue = config.route;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: true, required: false
  private _filters?: string[]; 
  public get filters() {
    return cdktf.Fn.tolist(this.getListAttribute('filters'));
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
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

  // predicates - computed: false, optional: true, required: false
  private _predicates?: string[]; 
  public get predicates() {
    return cdktf.Fn.tolist(this.getListAttribute('predicates'));
  }
  public set predicates(value: string[]) {
    this._predicates = value;
  }
  public resetPredicates() {
    this._predicates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicatesInput() {
    return this._predicates;
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

  // spring_cloud_app_id - computed: false, optional: true, required: false
  private _springCloudAppId?: string; 
  public get springCloudAppId() {
    return this.getStringAttribute('spring_cloud_app_id');
  }
  public set springCloudAppId(value: string) {
    this._springCloudAppId = value;
  }
  public resetSpringCloudAppId() {
    this._springCloudAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get springCloudAppIdInput() {
    return this._springCloudAppId;
  }

  // spring_cloud_gateway_id - computed: false, optional: false, required: true
  private _springCloudGatewayId?: string; 
  public get springCloudGatewayId() {
    return this.getStringAttribute('spring_cloud_gateway_id');
  }
  public set springCloudGatewayId(value: string) {
    this._springCloudGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get springCloudGatewayIdInput() {
    return this._springCloudGatewayId;
  }

  // sso_validation_enabled - computed: false, optional: true, required: false
  private _ssoValidationEnabled?: boolean | cdktf.IResolvable; 
  public get ssoValidationEnabled() {
    return this.getBooleanAttribute('sso_validation_enabled');
  }
  public set ssoValidationEnabled(value: boolean | cdktf.IResolvable) {
    this._ssoValidationEnabled = value;
  }
  public resetSsoValidationEnabled() {
    this._ssoValidationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoValidationEnabledInput() {
    return this._ssoValidationEnabled;
  }

  // open_api - computed: false, optional: true, required: false
  private _openApi = new SpringCloudGatewayRouteConfigOpenApiOutputReference(this, "open_api");
  public get openApi() {
    return this._openApi;
  }
  public putOpenApi(value: SpringCloudGatewayRouteConfigOpenApi) {
    this._openApi.internalValue = value;
  }
  public resetOpenApi() {
    this._openApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiInput() {
    return this._openApi.internalValue;
  }

  // route - computed: false, optional: true, required: false
  private _route = new SpringCloudGatewayRouteConfigRouteList(this, "route", true);
  public get route() {
    return this._route;
  }
  public putRoute(value: SpringCloudGatewayRouteConfigRoute[] | cdktf.IResolvable) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SpringCloudGatewayRouteConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SpringCloudGatewayRouteConfigTimeouts) {
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
      filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filters),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      predicates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._predicates),
      protocol: cdktf.stringToTerraform(this._protocol),
      spring_cloud_app_id: cdktf.stringToTerraform(this._springCloudAppId),
      spring_cloud_gateway_id: cdktf.stringToTerraform(this._springCloudGatewayId),
      sso_validation_enabled: cdktf.booleanToTerraform(this._ssoValidationEnabled),
      open_api: springCloudGatewayRouteConfigOpenApiToTerraform(this._openApi.internalValue),
      route: cdktf.listMapper(springCloudGatewayRouteConfigRouteToTerraform, true)(this._route.internalValue),
      timeouts: springCloudGatewayRouteConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filters),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      predicates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._predicates),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spring_cloud_app_id: {
        value: cdktf.stringToHclTerraform(this._springCloudAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spring_cloud_gateway_id: {
        value: cdktf.stringToHclTerraform(this._springCloudGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_validation_enabled: {
        value: cdktf.booleanToHclTerraform(this._ssoValidationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      open_api: {
        value: springCloudGatewayRouteConfigOpenApiToHclTerraform(this._openApi.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpringCloudGatewayRouteConfigOpenApiList",
      },
      route: {
        value: cdktf.listMapperHcl(springCloudGatewayRouteConfigRouteToHclTerraform, true)(this._route.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SpringCloudGatewayRouteConfigRouteList",
      },
      timeouts: {
        value: springCloudGatewayRouteConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpringCloudGatewayRouteConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
