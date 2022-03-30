// https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_network_acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebPubsubNetworkAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_network_acl#default_action WebPubsubNetworkAcl#default_action}
  */
  readonly defaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_network_acl#web_pubsub_id WebPubsubNetworkAcl#web_pubsub_id}
  */
  readonly webPubsubId: string;
  /**
  * private_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_network_acl#private_endpoint WebPubsubNetworkAcl#private_endpoint}
  */
  readonly privateEndpoint?: WebPubsubNetworkAclPrivateEndpoint[] | cdktf.IResolvable;
  /**
  * public_network block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_network_acl#public_network WebPubsubNetworkAcl#public_network}
  */
  readonly publicNetwork: WebPubsubNetworkAclPublicNetwork;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_network_acl#timeouts WebPubsubNetworkAcl#timeouts}
  */
  readonly timeouts?: WebPubsubNetworkAclTimeouts;
}
export interface WebPubsubNetworkAclPrivateEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_network_acl#allowed_request_types WebPubsubNetworkAcl#allowed_request_types}
  */
  readonly allowedRequestTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_network_acl#denied_request_types WebPubsubNetworkAcl#denied_request_types}
  */
  readonly deniedRequestTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_network_acl#id WebPubsubNetworkAcl#id}
  */
  readonly id: string;
}

export function webPubsubNetworkAclPrivateEndpointToTerraform(struct?: WebPubsubNetworkAclPrivateEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_request_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedRequestTypes),
    denied_request_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.deniedRequestTypes),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface WebPubsubNetworkAclPublicNetwork {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_network_acl#allowed_request_types WebPubsubNetworkAcl#allowed_request_types}
  */
  readonly allowedRequestTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_network_acl#denied_request_types WebPubsubNetworkAcl#denied_request_types}
  */
  readonly deniedRequestTypes?: string[];
}

export function webPubsubNetworkAclPublicNetworkToTerraform(struct?: WebPubsubNetworkAclPublicNetworkOutputReference | WebPubsubNetworkAclPublicNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_request_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedRequestTypes),
    denied_request_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.deniedRequestTypes),
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_network_acl#create WebPubsubNetworkAcl#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_network_acl#delete WebPubsubNetworkAcl#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_network_acl#read WebPubsubNetworkAcl#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_network_acl#update WebPubsubNetworkAcl#update}
  */
  readonly update?: string;
}

export function webPubsubNetworkAclTimeoutsToTerraform(struct?: WebPubsubNetworkAclTimeoutsOutputReference | WebPubsubNetworkAclTimeouts | cdktf.IResolvable): any {
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

export class WebPubsubNetworkAclTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebPubsubNetworkAclTimeouts | undefined {
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

  public set internalValue(value: WebPubsubNetworkAclTimeouts | undefined) {
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_network_acl azurerm_web_pubsub_network_acl}
*/
export class WebPubsubNetworkAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_web_pubsub_network_acl";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_network_acl azurerm_web_pubsub_network_acl} Resource
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
        providerVersion: '2.99.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultAction = config.defaultAction;
    this._webPubsubId = config.webPubsubId;
    this._privateEndpoint = config.privateEndpoint;
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
  public get id() {
    return this.getStringAttribute('id');
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
  private _privateEndpoint?: WebPubsubNetworkAclPrivateEndpoint[] | cdktf.IResolvable; 
  public get privateEndpoint() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('private_endpoint')));
  }
  public set privateEndpoint(value: WebPubsubNetworkAclPrivateEndpoint[] | cdktf.IResolvable) {
    this._privateEndpoint = value;
  }
  public resetPrivateEndpoint() {
    this._privateEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointInput() {
    return this._privateEndpoint;
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
      web_pubsub_id: cdktf.stringToTerraform(this._webPubsubId),
      private_endpoint: cdktf.listMapper(webPubsubNetworkAclPrivateEndpointToTerraform)(this._privateEndpoint),
      public_network: webPubsubNetworkAclPublicNetworkToTerraform(this._publicNetwork.internalValue),
      timeouts: webPubsubNetworkAclTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
