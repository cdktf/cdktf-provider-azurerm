// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationInsightsStandardWebTestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#application_insights_id ApplicationInsightsStandardWebTest#application_insights_id}
  */
  readonly applicationInsightsId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#description ApplicationInsightsStandardWebTest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#enabled ApplicationInsightsStandardWebTest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#frequency ApplicationInsightsStandardWebTest#frequency}
  */
  readonly frequency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#geo_locations ApplicationInsightsStandardWebTest#geo_locations}
  */
  readonly geoLocations: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#id ApplicationInsightsStandardWebTest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#location ApplicationInsightsStandardWebTest#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#name ApplicationInsightsStandardWebTest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#resource_group_name ApplicationInsightsStandardWebTest#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#retry_enabled ApplicationInsightsStandardWebTest#retry_enabled}
  */
  readonly retryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#tags ApplicationInsightsStandardWebTest#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#timeout ApplicationInsightsStandardWebTest#timeout}
  */
  readonly timeout?: number;
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#request ApplicationInsightsStandardWebTest#request}
  */
  readonly request: ApplicationInsightsStandardWebTestRequest;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#timeouts ApplicationInsightsStandardWebTest#timeouts}
  */
  readonly timeouts?: ApplicationInsightsStandardWebTestTimeouts;
  /**
  * validation_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#validation_rules ApplicationInsightsStandardWebTest#validation_rules}
  */
  readonly validationRules?: ApplicationInsightsStandardWebTestValidationRules;
}
export interface ApplicationInsightsStandardWebTestRequestHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#name ApplicationInsightsStandardWebTest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#value ApplicationInsightsStandardWebTest#value}
  */
  readonly value: string;
}

export function applicationInsightsStandardWebTestRequestHeaderToTerraform(struct?: ApplicationInsightsStandardWebTestRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationInsightsStandardWebTestRequestHeaderToHclTerraform(struct?: ApplicationInsightsStandardWebTestRequestHeader | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationInsightsStandardWebTestRequestHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationInsightsStandardWebTestRequestHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationInsightsStandardWebTestRequestHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationInsightsStandardWebTestRequestHeaderList extends cdktf.ComplexList {
  public internalValue? : ApplicationInsightsStandardWebTestRequestHeader[] | cdktf.IResolvable

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
  public get(index: number): ApplicationInsightsStandardWebTestRequestHeaderOutputReference {
    return new ApplicationInsightsStandardWebTestRequestHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationInsightsStandardWebTestRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#body ApplicationInsightsStandardWebTest#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#follow_redirects_enabled ApplicationInsightsStandardWebTest#follow_redirects_enabled}
  */
  readonly followRedirectsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#http_verb ApplicationInsightsStandardWebTest#http_verb}
  */
  readonly httpVerb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#parse_dependent_requests_enabled ApplicationInsightsStandardWebTest#parse_dependent_requests_enabled}
  */
  readonly parseDependentRequestsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#url ApplicationInsightsStandardWebTest#url}
  */
  readonly url: string;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#header ApplicationInsightsStandardWebTest#header}
  */
  readonly header?: ApplicationInsightsStandardWebTestRequestHeader[] | cdktf.IResolvable;
}

export function applicationInsightsStandardWebTestRequestToTerraform(struct?: ApplicationInsightsStandardWebTestRequestOutputReference | ApplicationInsightsStandardWebTestRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    follow_redirects_enabled: cdktf.booleanToTerraform(struct!.followRedirectsEnabled),
    http_verb: cdktf.stringToTerraform(struct!.httpVerb),
    parse_dependent_requests_enabled: cdktf.booleanToTerraform(struct!.parseDependentRequestsEnabled),
    url: cdktf.stringToTerraform(struct!.url),
    header: cdktf.listMapper(applicationInsightsStandardWebTestRequestHeaderToTerraform, true)(struct!.header),
  }
}


export function applicationInsightsStandardWebTestRequestToHclTerraform(struct?: ApplicationInsightsStandardWebTestRequestOutputReference | ApplicationInsightsStandardWebTestRequest): any {
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
    follow_redirects_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirectsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_verb: {
      value: cdktf.stringToHclTerraform(struct!.httpVerb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parse_dependent_requests_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.parseDependentRequestsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.listMapperHcl(applicationInsightsStandardWebTestRequestHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationInsightsStandardWebTestRequestHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationInsightsStandardWebTestRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationInsightsStandardWebTestRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._followRedirectsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirectsEnabled = this._followRedirectsEnabled;
    }
    if (this._httpVerb !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpVerb = this._httpVerb;
    }
    if (this._parseDependentRequestsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseDependentRequestsEnabled = this._parseDependentRequestsEnabled;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationInsightsStandardWebTestRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._followRedirectsEnabled = undefined;
      this._httpVerb = undefined;
      this._parseDependentRequestsEnabled = undefined;
      this._url = undefined;
      this._header.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._followRedirectsEnabled = value.followRedirectsEnabled;
      this._httpVerb = value.httpVerb;
      this._parseDependentRequestsEnabled = value.parseDependentRequestsEnabled;
      this._url = value.url;
      this._header.internalValue = value.header;
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

  // follow_redirects_enabled - computed: false, optional: true, required: false
  private _followRedirectsEnabled?: boolean | cdktf.IResolvable; 
  public get followRedirectsEnabled() {
    return this.getBooleanAttribute('follow_redirects_enabled');
  }
  public set followRedirectsEnabled(value: boolean | cdktf.IResolvable) {
    this._followRedirectsEnabled = value;
  }
  public resetFollowRedirectsEnabled() {
    this._followRedirectsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsEnabledInput() {
    return this._followRedirectsEnabled;
  }

  // http_verb - computed: false, optional: true, required: false
  private _httpVerb?: string; 
  public get httpVerb() {
    return this.getStringAttribute('http_verb');
  }
  public set httpVerb(value: string) {
    this._httpVerb = value;
  }
  public resetHttpVerb() {
    this._httpVerb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVerbInput() {
    return this._httpVerb;
  }

  // parse_dependent_requests_enabled - computed: false, optional: true, required: false
  private _parseDependentRequestsEnabled?: boolean | cdktf.IResolvable; 
  public get parseDependentRequestsEnabled() {
    return this.getBooleanAttribute('parse_dependent_requests_enabled');
  }
  public set parseDependentRequestsEnabled(value: boolean | cdktf.IResolvable) {
    this._parseDependentRequestsEnabled = value;
  }
  public resetParseDependentRequestsEnabled() {
    this._parseDependentRequestsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseDependentRequestsEnabledInput() {
    return this._parseDependentRequestsEnabled;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // header - computed: false, optional: true, required: false
  private _header = new ApplicationInsightsStandardWebTestRequestHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: ApplicationInsightsStandardWebTestRequestHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}
export interface ApplicationInsightsStandardWebTestTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#create ApplicationInsightsStandardWebTest#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#delete ApplicationInsightsStandardWebTest#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#read ApplicationInsightsStandardWebTest#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#update ApplicationInsightsStandardWebTest#update}
  */
  readonly update?: string;
}

export function applicationInsightsStandardWebTestTimeoutsToTerraform(struct?: ApplicationInsightsStandardWebTestTimeouts | cdktf.IResolvable): any {
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


export function applicationInsightsStandardWebTestTimeoutsToHclTerraform(struct?: ApplicationInsightsStandardWebTestTimeouts | cdktf.IResolvable): any {
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

export class ApplicationInsightsStandardWebTestTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationInsightsStandardWebTestTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationInsightsStandardWebTestTimeouts | cdktf.IResolvable | undefined) {
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
export interface ApplicationInsightsStandardWebTestValidationRulesContent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#content_match ApplicationInsightsStandardWebTest#content_match}
  */
  readonly contentMatch: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#ignore_case ApplicationInsightsStandardWebTest#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#pass_if_text_found ApplicationInsightsStandardWebTest#pass_if_text_found}
  */
  readonly passIfTextFound?: boolean | cdktf.IResolvable;
}

export function applicationInsightsStandardWebTestValidationRulesContentToTerraform(struct?: ApplicationInsightsStandardWebTestValidationRulesContentOutputReference | ApplicationInsightsStandardWebTestValidationRulesContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_match: cdktf.stringToTerraform(struct!.contentMatch),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    pass_if_text_found: cdktf.booleanToTerraform(struct!.passIfTextFound),
  }
}


export function applicationInsightsStandardWebTestValidationRulesContentToHclTerraform(struct?: ApplicationInsightsStandardWebTestValidationRulesContentOutputReference | ApplicationInsightsStandardWebTestValidationRulesContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_match: {
      value: cdktf.stringToHclTerraform(struct!.contentMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pass_if_text_found: {
      value: cdktf.booleanToHclTerraform(struct!.passIfTextFound),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationInsightsStandardWebTestValidationRulesContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationInsightsStandardWebTestValidationRulesContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentMatch = this._contentMatch;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._passIfTextFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.passIfTextFound = this._passIfTextFound;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationInsightsStandardWebTestValidationRulesContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentMatch = undefined;
      this._ignoreCase = undefined;
      this._passIfTextFound = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentMatch = value.contentMatch;
      this._ignoreCase = value.ignoreCase;
      this._passIfTextFound = value.passIfTextFound;
    }
  }

  // content_match - computed: false, optional: false, required: true
  private _contentMatch?: string; 
  public get contentMatch() {
    return this.getStringAttribute('content_match');
  }
  public set contentMatch(value: string) {
    this._contentMatch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentMatchInput() {
    return this._contentMatch;
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

  // pass_if_text_found - computed: false, optional: true, required: false
  private _passIfTextFound?: boolean | cdktf.IResolvable; 
  public get passIfTextFound() {
    return this.getBooleanAttribute('pass_if_text_found');
  }
  public set passIfTextFound(value: boolean | cdktf.IResolvable) {
    this._passIfTextFound = value;
  }
  public resetPassIfTextFound() {
    this._passIfTextFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passIfTextFoundInput() {
    return this._passIfTextFound;
  }
}
export interface ApplicationInsightsStandardWebTestValidationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#expected_status_code ApplicationInsightsStandardWebTest#expected_status_code}
  */
  readonly expectedStatusCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#ssl_cert_remaining_lifetime ApplicationInsightsStandardWebTest#ssl_cert_remaining_lifetime}
  */
  readonly sslCertRemainingLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#ssl_check_enabled ApplicationInsightsStandardWebTest#ssl_check_enabled}
  */
  readonly sslCheckEnabled?: boolean | cdktf.IResolvable;
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#content ApplicationInsightsStandardWebTest#content}
  */
  readonly content?: ApplicationInsightsStandardWebTestValidationRulesContent;
}

export function applicationInsightsStandardWebTestValidationRulesToTerraform(struct?: ApplicationInsightsStandardWebTestValidationRulesOutputReference | ApplicationInsightsStandardWebTestValidationRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_status_code: cdktf.numberToTerraform(struct!.expectedStatusCode),
    ssl_cert_remaining_lifetime: cdktf.numberToTerraform(struct!.sslCertRemainingLifetime),
    ssl_check_enabled: cdktf.booleanToTerraform(struct!.sslCheckEnabled),
    content: applicationInsightsStandardWebTestValidationRulesContentToTerraform(struct!.content),
  }
}


export function applicationInsightsStandardWebTestValidationRulesToHclTerraform(struct?: ApplicationInsightsStandardWebTestValidationRulesOutputReference | ApplicationInsightsStandardWebTestValidationRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected_status_code: {
      value: cdktf.numberToHclTerraform(struct!.expectedStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_cert_remaining_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.sslCertRemainingLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_check_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sslCheckEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    content: {
      value: applicationInsightsStandardWebTestValidationRulesContentToHclTerraform(struct!.content),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationInsightsStandardWebTestValidationRulesContentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationInsightsStandardWebTestValidationRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationInsightsStandardWebTestValidationRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedStatusCode = this._expectedStatusCode;
    }
    if (this._sslCertRemainingLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertRemainingLifetime = this._sslCertRemainingLifetime;
    }
    if (this._sslCheckEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCheckEnabled = this._sslCheckEnabled;
    }
    if (this._content?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationInsightsStandardWebTestValidationRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expectedStatusCode = undefined;
      this._sslCertRemainingLifetime = undefined;
      this._sslCheckEnabled = undefined;
      this._content.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expectedStatusCode = value.expectedStatusCode;
      this._sslCertRemainingLifetime = value.sslCertRemainingLifetime;
      this._sslCheckEnabled = value.sslCheckEnabled;
      this._content.internalValue = value.content;
    }
  }

  // expected_status_code - computed: false, optional: true, required: false
  private _expectedStatusCode?: number; 
  public get expectedStatusCode() {
    return this.getNumberAttribute('expected_status_code');
  }
  public set expectedStatusCode(value: number) {
    this._expectedStatusCode = value;
  }
  public resetExpectedStatusCode() {
    this._expectedStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedStatusCodeInput() {
    return this._expectedStatusCode;
  }

  // ssl_cert_remaining_lifetime - computed: false, optional: true, required: false
  private _sslCertRemainingLifetime?: number; 
  public get sslCertRemainingLifetime() {
    return this.getNumberAttribute('ssl_cert_remaining_lifetime');
  }
  public set sslCertRemainingLifetime(value: number) {
    this._sslCertRemainingLifetime = value;
  }
  public resetSslCertRemainingLifetime() {
    this._sslCertRemainingLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertRemainingLifetimeInput() {
    return this._sslCertRemainingLifetime;
  }

  // ssl_check_enabled - computed: false, optional: true, required: false
  private _sslCheckEnabled?: boolean | cdktf.IResolvable; 
  public get sslCheckEnabled() {
    return this.getBooleanAttribute('ssl_check_enabled');
  }
  public set sslCheckEnabled(value: boolean | cdktf.IResolvable) {
    this._sslCheckEnabled = value;
  }
  public resetSslCheckEnabled() {
    this._sslCheckEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCheckEnabledInput() {
    return this._sslCheckEnabled;
  }

  // content - computed: false, optional: true, required: false
  private _content = new ApplicationInsightsStandardWebTestValidationRulesContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: ApplicationInsightsStandardWebTestValidationRulesContent) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test azurerm_application_insights_standard_web_test}
*/
export class ApplicationInsightsStandardWebTest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_application_insights_standard_web_test";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationInsightsStandardWebTest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationInsightsStandardWebTest to import
  * @param importFromId The id of the existing ApplicationInsightsStandardWebTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationInsightsStandardWebTest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_application_insights_standard_web_test", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/application_insights_standard_web_test azurerm_application_insights_standard_web_test} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationInsightsStandardWebTestConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationInsightsStandardWebTestConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_application_insights_standard_web_test',
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
    this._applicationInsightsId = config.applicationInsightsId;
    this._description = config.description;
    this._enabled = config.enabled;
    this._frequency = config.frequency;
    this._geoLocations = config.geoLocations;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._retryEnabled = config.retryEnabled;
    this._tags = config.tags;
    this._timeout = config.timeout;
    this._request.internalValue = config.request;
    this._timeouts.internalValue = config.timeouts;
    this._validationRules.internalValue = config.validationRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_insights_id - computed: false, optional: false, required: true
  private _applicationInsightsId?: string; 
  public get applicationInsightsId() {
    return this.getStringAttribute('application_insights_id');
  }
  public set applicationInsightsId(value: string) {
    this._applicationInsightsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInsightsIdInput() {
    return this._applicationInsightsId;
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

  // frequency - computed: false, optional: true, required: false
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // geo_locations - computed: false, optional: false, required: true
  private _geoLocations?: string[]; 
  public get geoLocations() {
    return this.getListAttribute('geo_locations');
  }
  public set geoLocations(value: string[]) {
    this._geoLocations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationsInput() {
    return this._geoLocations;
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

  // retry_enabled - computed: false, optional: true, required: false
  private _retryEnabled?: boolean | cdktf.IResolvable; 
  public get retryEnabled() {
    return this.getBooleanAttribute('retry_enabled');
  }
  public set retryEnabled(value: boolean | cdktf.IResolvable) {
    this._retryEnabled = value;
  }
  public resetRetryEnabled() {
    this._retryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryEnabledInput() {
    return this._retryEnabled;
  }

  // synthetic_monitor_id - computed: true, optional: false, required: false
  public get syntheticMonitorId() {
    return this.getStringAttribute('synthetic_monitor_id');
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // request - computed: false, optional: false, required: true
  private _request = new ApplicationInsightsStandardWebTestRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: ApplicationInsightsStandardWebTestRequest) {
    this._request.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApplicationInsightsStandardWebTestTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApplicationInsightsStandardWebTestTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // validation_rules - computed: false, optional: true, required: false
  private _validationRules = new ApplicationInsightsStandardWebTestValidationRulesOutputReference(this, "validation_rules");
  public get validationRules() {
    return this._validationRules;
  }
  public putValidationRules(value: ApplicationInsightsStandardWebTestValidationRules) {
    this._validationRules.internalValue = value;
  }
  public resetValidationRules() {
    this._validationRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationRulesInput() {
    return this._validationRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_insights_id: cdktf.stringToTerraform(this._applicationInsightsId),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      frequency: cdktf.numberToTerraform(this._frequency),
      geo_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._geoLocations),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      retry_enabled: cdktf.booleanToTerraform(this._retryEnabled),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeout: cdktf.numberToTerraform(this._timeout),
      request: applicationInsightsStandardWebTestRequestToTerraform(this._request.internalValue),
      timeouts: applicationInsightsStandardWebTestTimeoutsToTerraform(this._timeouts.internalValue),
      validation_rules: applicationInsightsStandardWebTestValidationRulesToTerraform(this._validationRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_insights_id: {
        value: cdktf.stringToHclTerraform(this._applicationInsightsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      frequency: {
        value: cdktf.numberToHclTerraform(this._frequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      geo_locations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._geoLocations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      retry_enabled: {
        value: cdktf.booleanToHclTerraform(this._retryEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request: {
        value: applicationInsightsStandardWebTestRequestToHclTerraform(this._request.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationInsightsStandardWebTestRequestList",
      },
      timeouts: {
        value: applicationInsightsStandardWebTestTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationInsightsStandardWebTestTimeouts",
      },
      validation_rules: {
        value: applicationInsightsStandardWebTestValidationRulesToHclTerraform(this._validationRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationInsightsStandardWebTestValidationRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
