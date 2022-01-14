// https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SignalrServiceNetworkAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl#default_action SignalrServiceNetworkAcl#default_action}
  */
  readonly defaultAction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl#signalr_service_id SignalrServiceNetworkAcl#signalr_service_id}
  */
  readonly signalrServiceId: string;
  /**
  * private_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl#private_endpoint SignalrServiceNetworkAcl#private_endpoint}
  */
  readonly privateEndpoint?: SignalrServiceNetworkAclPrivateEndpoint[];
  /**
  * public_network block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl#public_network SignalrServiceNetworkAcl#public_network}
  */
  readonly publicNetwork: SignalrServiceNetworkAclPublicNetwork;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl#timeouts SignalrServiceNetworkAcl#timeouts}
  */
  readonly timeouts?: SignalrServiceNetworkAclTimeouts;
}
export interface SignalrServiceNetworkAclPrivateEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl#allowed_request_types SignalrServiceNetworkAcl#allowed_request_types}
  */
  readonly allowedRequestTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl#denied_request_types SignalrServiceNetworkAcl#denied_request_types}
  */
  readonly deniedRequestTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl#id SignalrServiceNetworkAcl#id}
  */
  readonly id: string;
}

export function signalrServiceNetworkAclPrivateEndpointToTerraform(struct?: SignalrServiceNetworkAclPrivateEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_request_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedRequestTypes),
    denied_request_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.deniedRequestTypes),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface SignalrServiceNetworkAclPublicNetwork {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl#allowed_request_types SignalrServiceNetworkAcl#allowed_request_types}
  */
  readonly allowedRequestTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl#denied_request_types SignalrServiceNetworkAcl#denied_request_types}
  */
  readonly deniedRequestTypes?: string[];
}

export function signalrServiceNetworkAclPublicNetworkToTerraform(struct?: SignalrServiceNetworkAclPublicNetworkOutputReference | SignalrServiceNetworkAclPublicNetwork): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_request_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedRequestTypes),
    denied_request_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.deniedRequestTypes),
  }
}

export class SignalrServiceNetworkAclPublicNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SignalrServiceNetworkAclPublicNetwork | undefined {
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

  public set internalValue(value: SignalrServiceNetworkAclPublicNetwork | undefined) {
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
    return this.getListAttribute('allowed_request_types');
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
    return this.getListAttribute('denied_request_types');
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
export interface SignalrServiceNetworkAclTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl#create SignalrServiceNetworkAcl#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl#delete SignalrServiceNetworkAcl#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl#read SignalrServiceNetworkAcl#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl#update SignalrServiceNetworkAcl#update}
  */
  readonly update?: string;
}

export function signalrServiceNetworkAclTimeoutsToTerraform(struct?: SignalrServiceNetworkAclTimeoutsOutputReference | SignalrServiceNetworkAclTimeouts): any {
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

export class SignalrServiceNetworkAclTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SignalrServiceNetworkAclTimeouts | undefined {
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

  public set internalValue(value: SignalrServiceNetworkAclTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl azurerm_signalr_service_network_acl}
*/
export class SignalrServiceNetworkAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_signalr_service_network_acl";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service_network_acl azurerm_signalr_service_network_acl} Resource
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
    this._publicNetwork.internalValue = config.publicNetwork;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_action - computed: false, optional: false, required: true
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // signalr_service_id - computed: false, optional: false, required: true
  private _signalrServiceId?: string; 
  public get signalrServiceId() {
    return this.getStringAttribute('signalr_service_id');
  }
  public set signalrServiceId(value: string) {
    this._signalrServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signalrServiceIdInput() {
    return this._signalrServiceId;
  }

  // private_endpoint - computed: false, optional: true, required: false
  private _privateEndpoint?: SignalrServiceNetworkAclPrivateEndpoint[]; 
  public get privateEndpoint() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('private_endpoint') as any;
  }
  public set privateEndpoint(value: SignalrServiceNetworkAclPrivateEndpoint[]) {
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
  private _publicNetwork = new SignalrServiceNetworkAclPublicNetworkOutputReference(this as any, "public_network", true);
  public get publicNetwork() {
    return this._publicNetwork;
  }
  public putPublicNetwork(value: SignalrServiceNetworkAclPublicNetwork) {
    this._publicNetwork.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkInput() {
    return this._publicNetwork.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SignalrServiceNetworkAclTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SignalrServiceNetworkAclTimeouts) {
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
      signalr_service_id: cdktf.stringToTerraform(this._signalrServiceId),
      private_endpoint: cdktf.listMapper(signalrServiceNetworkAclPrivateEndpointToTerraform)(this._privateEndpoint),
      public_network: signalrServiceNetworkAclPublicNetworkToTerraform(this._publicNetwork.internalValue),
      timeouts: signalrServiceNetworkAclTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
