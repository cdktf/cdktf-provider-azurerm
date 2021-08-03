// https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SignalrServiceNetworkAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl.html#default_action SignalrServiceNetworkAcl#default_action}
  */
  readonly defaultAction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl.html#signalr_service_id SignalrServiceNetworkAcl#signalr_service_id}
  */
  readonly signalrServiceId: string;
  /**
  * private_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl.html#private_endpoint SignalrServiceNetworkAcl#private_endpoint}
  */
  readonly privateEndpoint?: SignalrServiceNetworkAclPrivateEndpoint[];
  /**
  * public_network block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl.html#public_network SignalrServiceNetworkAcl#public_network}
  */
  readonly publicNetwork: SignalrServiceNetworkAclPublicNetwork[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl.html#timeouts SignalrServiceNetworkAcl#timeouts}
  */
  readonly timeouts?: SignalrServiceNetworkAclTimeouts;
}
export interface SignalrServiceNetworkAclPrivateEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl.html#allowed_request_types SignalrServiceNetworkAcl#allowed_request_types}
  */
  readonly allowedRequestTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl.html#denied_request_types SignalrServiceNetworkAcl#denied_request_types}
  */
  readonly deniedRequestTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl.html#id SignalrServiceNetworkAcl#id}
  */
  readonly id: string;
}

function signalrServiceNetworkAclPrivateEndpointToTerraform(struct?: SignalrServiceNetworkAclPrivateEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_request_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedRequestTypes),
    denied_request_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.deniedRequestTypes),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface SignalrServiceNetworkAclPublicNetwork {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl.html#allowed_request_types SignalrServiceNetworkAcl#allowed_request_types}
  */
  readonly allowedRequestTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl.html#denied_request_types SignalrServiceNetworkAcl#denied_request_types}
  */
  readonly deniedRequestTypes?: string[];
}

function signalrServiceNetworkAclPublicNetworkToTerraform(struct?: SignalrServiceNetworkAclPublicNetwork): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_request_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedRequestTypes),
    denied_request_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.deniedRequestTypes),
  }
}

export interface SignalrServiceNetworkAclTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl.html#create SignalrServiceNetworkAcl#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl.html#delete SignalrServiceNetworkAcl#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl.html#read SignalrServiceNetworkAcl#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl.html#update SignalrServiceNetworkAcl#update}
  */
  readonly update?: string;
}

function signalrServiceNetworkAclTimeoutsToTerraform(struct?: SignalrServiceNetworkAclTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl.html azurerm_signalr_service_network_acl}
*/
export class SignalrServiceNetworkAcl extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl.html azurerm_signalr_service_network_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SignalrServiceNetworkAclConfig
  */
  public constructor(scope: Construct, id: string, config: SignalrServiceNetworkAclConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_signalr_service_network_acl',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultAction = config.defaultAction;
    this._signalrServiceId = config.signalrServiceId;
    this._privateEndpoint = config.privateEndpoint;
    this._publicNetwork = config.publicNetwork;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_action - computed: false, optional: false, required: true
  private _defaultAction: string;
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // signalr_service_id - computed: false, optional: false, required: true
  private _signalrServiceId: string;
  public get signalrServiceId() {
    return this.getStringAttribute('signalr_service_id');
  }
  public set signalrServiceId(value: string) {
    this._signalrServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signalrServiceIdInput() {
    return this._signalrServiceId
  }

  // private_endpoint - computed: false, optional: true, required: false
  private _privateEndpoint?: SignalrServiceNetworkAclPrivateEndpoint[];
  public get privateEndpoint() {
    return this.interpolationForAttribute('private_endpoint') as any;
  }
  public set privateEndpoint(value: SignalrServiceNetworkAclPrivateEndpoint[] ) {
    this._privateEndpoint = value;
  }
  public resetPrivateEndpoint() {
    this._privateEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointInput() {
    return this._privateEndpoint
  }

  // public_network - computed: false, optional: false, required: true
  private _publicNetwork: SignalrServiceNetworkAclPublicNetwork[];
  public get publicNetwork() {
    return this.interpolationForAttribute('public_network') as any;
  }
  public set publicNetwork(value: SignalrServiceNetworkAclPublicNetwork[]) {
    this._publicNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkInput() {
    return this._publicNetwork
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SignalrServiceNetworkAclTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SignalrServiceNetworkAclTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_action: cdktf.stringToTerraform(this._defaultAction),
      signalr_service_id: cdktf.stringToTerraform(this._signalrServiceId),
      private_endpoint: cdktf.listMapper(signalrServiceNetworkAclPrivateEndpointToTerraform)(this._privateEndpoint),
      public_network: cdktf.listMapper(signalrServiceNetworkAclPublicNetworkToTerraform)(this._publicNetwork),
      timeouts: signalrServiceNetworkAclTimeoutsToTerraform(this._timeouts),
    };
  }
}
