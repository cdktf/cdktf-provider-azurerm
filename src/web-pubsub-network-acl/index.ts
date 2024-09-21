// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_pubsub_network_acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebPubsubNetworkAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_pubsub_network_acl#default_action WebPubsubNetworkAcl#default_action}
  */
  readonly defaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_pubsub_network_acl#id WebPubsubNetworkAcl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_pubsub_network_acl#web_pubsub_id WebPubsubNetworkAcl#web_pubsub_id}
  */
  readonly webPubsubId: string;
  /**
  * private_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_pubsub_network_acl#private_endpoint WebPubsubNetworkAcl#private_endpoint}
  */
  readonly privateEndpoint?: WebPubsubNetworkAclPrivateEndpoint[] | cdktf.IResolvable;
  /**
  * public_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_pubsub_network_acl#public_network WebPubsubNetworkAcl#public_network}
  */
  readonly publicNetwork: WebPubsubNetworkAclPublicNetwork;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_pubsub_network_acl#timeouts WebPubsubNetworkAcl#timeouts}
  */
  readonly timeouts?: WebPubsubNetworkAclTimeouts;
}
export interface WebPubsubNetworkAclPrivateEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_pubsub_network_acl#allowed_request_types WebPubsubNetworkAcl#allowed_request_types}
  */
  readonly allowedRequestTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_pubsub_network_acl#denied_request_types WebPubsubNetworkAcl#denied_request_types}
  */
  readonly deniedRequestTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_pubsub_network_acl#id WebPubsubNetworkAcl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function webPubsubNetworkAclPrivateEndpointToTerraform(struct?: WebPubsubNetworkAclPrivateEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_request_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRequestTypes),
    denied_request_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deniedRequestTypes),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function webPubsubNetworkAclPrivateEndpointToHclTerraform(struct?: WebPubsubNetworkAclPrivateEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_request_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedRequestTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    denied_request_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deniedRequestTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebPubsubNetworkAclPrivateEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebPubsubNetworkAclPrivateEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRequestTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRequestTypes = this._allowedRequestTypes;
    }
    if (this._deniedRequestTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedRequestTypes = this._deniedRequestTypes;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebPubsubNetworkAclPrivateEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedRequestTypes = undefined;
      this._deniedRequestTypes = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedRequestTypes = value.allowedRequestTypes;
      this._deniedRequestTypes = value.deniedRequestTypes;
      this._id = value.id;
    }
  }

  // allowed_request_types - computed: false, optional: true, required: false
  private _allowedRequestTypes?: string[]; 
  public get allowedRequestTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_request_types'));
  }
  public set allowedRequestTypes(value: string[]) {
    this._allowedRequestTypes = value;
  }
  public resetAllowedRequestTypes() {
    this._allowedRequestTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRequestTypesInput() {
    return this._allowedRequestTypes;
  }

  // denied_request_types - computed: false, optional: true, required: false
  private _deniedRequestTypes?: string[]; 
  public get deniedRequestTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('denied_request_types'));
  }
  public set deniedRequestTypes(value: string[]) {
    this._deniedRequestTypes = value;
  }
  public resetDeniedRequestTypes() {
    this._deniedRequestTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedRequestTypesInput() {
    return this._deniedRequestTypes;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class WebPubsubNetworkAclPrivateEndpointList extends cdktf.ComplexList {
  public internalValue? : WebPubsubNetworkAclPrivateEndpoint[] | cdktf.IResolvable

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
  public get(index: number): WebPubsubNetworkAclPrivateEndpointOutputReference {
    return new WebPubsubNetworkAclPrivateEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebPubsubNetworkAclPublicNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_pubsub_network_acl#allowed_request_types WebPubsubNetworkAcl#allowed_request_types}
  */
  readonly allowedRequestTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_pubsub_network_acl#denied_request_types WebPubsubNetworkAcl#denied_request_types}
  */
  readonly deniedRequestTypes?: string[];
}

export function webPubsubNetworkAclPublicNetworkToTerraform(struct?: WebPubsubNetworkAclPublicNetworkOutputReference | WebPubsubNetworkAclPublicNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_request_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRequestTypes),
    denied_request_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deniedRequestTypes),
  }
}


export function webPubsubNetworkAclPublicNetworkToHclTerraform(struct?: WebPubsubNetworkAclPublicNetworkOutputReference | WebPubsubNetworkAclPublicNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_request_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedRequestTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    denied_request_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deniedRequestTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebPubsubNetworkAclPublicNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebPubsubNetworkAclPublicNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRequestTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRequestTypes = this._allowedRequestTypes;
    }
    if (this._deniedRequestTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedRequestTypes = this._deniedRequestTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebPubsubNetworkAclPublicNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedRequestTypes = undefined;
      this._deniedRequestTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedRequestTypes = value.allowedRequestTypes;
      this._deniedRequestTypes = value.deniedRequestTypes;
    }
  }

  // allowed_request_types - computed: false, optional: true, required: false
  private _allowedRequestTypes?: string[]; 
  public get allowedRequestTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_request_types'));
  }
  public set allowedRequestTypes(value: string[]) {
    this._allowedRequestTypes = value;
  }
  public resetAllowedRequestTypes() {
    this._allowedRequestTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRequestTypesInput() {
    return this._allowedRequestTypes;
  }

  // denied_request_types - computed: false, optional: true, required: false
  private _deniedRequestTypes?: string[]; 
  public get deniedRequestTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('denied_request_types'));
  }
  public set deniedRequestTypes(value: string[]) {
    this._deniedRequestTypes = value;
  }
  public resetDeniedRequestTypes() {
    this._deniedRequestTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedRequestTypesInput() {
    return this._deniedRequestTypes;
  }
}
export interface WebPubsubNetworkAclTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_pubsub_network_acl#create WebPubsubNetworkAcl#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_pubsub_network_acl#delete WebPubsubNetworkAcl#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_pubsub_network_acl#read WebPubsubNetworkAcl#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_pubsub_network_acl#update WebPubsubNetworkAcl#update}
  */
  readonly update?: string;
}

export function webPubsubNetworkAclTimeoutsToTerraform(struct?: WebPubsubNetworkAclTimeouts | cdktf.IResolvable): any {
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


export function webPubsubNetworkAclTimeoutsToHclTerraform(struct?: WebPubsubNetworkAclTimeouts | cdktf.IResolvable): any {
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

export class WebPubsubNetworkAclTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WebPubsubNetworkAclTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebPubsubNetworkAclTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_pubsub_network_acl azurerm_web_pubsub_network_acl}
*/
export class WebPubsubNetworkAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_web_pubsub_network_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebPubsubNetworkAcl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebPubsubNetworkAcl to import
  * @param importFromId The id of the existing WebPubsubNetworkAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_pubsub_network_acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebPubsubNetworkAcl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_web_pubsub_network_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/web_pubsub_network_acl azurerm_web_pubsub_network_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebPubsubNetworkAclConfig
  */
  public constructor(scope: Construct, id: string, config: WebPubsubNetworkAclConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_web_pubsub_network_acl',
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
    this._defaultAction = config.defaultAction;
    this._id = config.id;
    this._webPubsubId = config.webPubsubId;
    this._privateEndpoint.internalValue = config.privateEndpoint;
    this._publicNetwork.internalValue = config.publicNetwork;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
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

  // web_pubsub_id - computed: false, optional: false, required: true
  private _webPubsubId?: string; 
  public get webPubsubId() {
    return this.getStringAttribute('web_pubsub_id');
  }
  public set webPubsubId(value: string) {
    this._webPubsubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webPubsubIdInput() {
    return this._webPubsubId;
  }

  // private_endpoint - computed: false, optional: true, required: false
  private _privateEndpoint = new WebPubsubNetworkAclPrivateEndpointList(this, "private_endpoint", true);
  public get privateEndpoint() {
    return this._privateEndpoint;
  }
  public putPrivateEndpoint(value: WebPubsubNetworkAclPrivateEndpoint[] | cdktf.IResolvable) {
    this._privateEndpoint.internalValue = value;
  }
  public resetPrivateEndpoint() {
    this._privateEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointInput() {
    return this._privateEndpoint.internalValue;
  }

  // public_network - computed: false, optional: false, required: true
  private _publicNetwork = new WebPubsubNetworkAclPublicNetworkOutputReference(this, "public_network");
  public get publicNetwork() {
    return this._publicNetwork;
  }
  public putPublicNetwork(value: WebPubsubNetworkAclPublicNetwork) {
    this._publicNetwork.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkInput() {
    return this._publicNetwork.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WebPubsubNetworkAclTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WebPubsubNetworkAclTimeouts) {
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
      default_action: cdktf.stringToTerraform(this._defaultAction),
      id: cdktf.stringToTerraform(this._id),
      web_pubsub_id: cdktf.stringToTerraform(this._webPubsubId),
      private_endpoint: cdktf.listMapper(webPubsubNetworkAclPrivateEndpointToTerraform, true)(this._privateEndpoint.internalValue),
      public_network: webPubsubNetworkAclPublicNetworkToTerraform(this._publicNetwork.internalValue),
      timeouts: webPubsubNetworkAclTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_action: {
        value: cdktf.stringToHclTerraform(this._defaultAction),
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
      web_pubsub_id: {
        value: cdktf.stringToHclTerraform(this._webPubsubId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_endpoint: {
        value: cdktf.listMapperHcl(webPubsubNetworkAclPrivateEndpointToHclTerraform, true)(this._privateEndpoint.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WebPubsubNetworkAclPrivateEndpointList",
      },
      public_network: {
        value: webPubsubNetworkAclPublicNetworkToHclTerraform(this._publicNetwork.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebPubsubNetworkAclPublicNetworkList",
      },
      timeouts: {
        value: webPubsubNetworkAclTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WebPubsubNetworkAclTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
