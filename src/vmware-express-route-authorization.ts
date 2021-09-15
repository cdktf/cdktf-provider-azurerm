// https://www.terraform.io/docs/providers/azurerm/r/vmware_express_route_authorization.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmwareExpressRouteAuthorizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_express_route_authorization.html#name VmwareExpressRouteAuthorization#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_express_route_authorization.html#private_cloud_id VmwareExpressRouteAuthorization#private_cloud_id}
  */
  readonly privateCloudId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_express_route_authorization.html#timeouts VmwareExpressRouteAuthorization#timeouts}
  */
  readonly timeouts?: VmwareExpressRouteAuthorizationTimeouts;
}
export interface VmwareExpressRouteAuthorizationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_express_route_authorization.html#create VmwareExpressRouteAuthorization#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_express_route_authorization.html#delete VmwareExpressRouteAuthorization#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_express_route_authorization.html#read VmwareExpressRouteAuthorization#read}
  */
  readonly read?: string;
}

function vmwareExpressRouteAuthorizationTimeoutsToTerraform(struct?: VmwareExpressRouteAuthorizationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_express_route_authorization.html azurerm_vmware_express_route_authorization}
*/
export class VmwareExpressRouteAuthorization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_vmware_express_route_authorization";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/vmware_express_route_authorization.html azurerm_vmware_express_route_authorization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmwareExpressRouteAuthorizationConfig
  */
  public constructor(scope: Construct, id: string, config: VmwareExpressRouteAuthorizationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_vmware_express_route_authorization',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._privateCloudId = config.privateCloudId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // express_route_authorization_id - computed: true, optional: false, required: false
  public get expressRouteAuthorizationId() {
    return this.getStringAttribute('express_route_authorization_id');
  }

  // express_route_authorization_key - computed: true, optional: false, required: false
  public get expressRouteAuthorizationKey() {
    return this.getStringAttribute('express_route_authorization_key');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // private_cloud_id - computed: false, optional: false, required: true
  private _privateCloudId: string;
  public get privateCloudId() {
    return this.getStringAttribute('private_cloud_id');
  }
  public set privateCloudId(value: string) {
    this._privateCloudId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateCloudIdInput() {
    return this._privateCloudId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VmwareExpressRouteAuthorizationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VmwareExpressRouteAuthorizationTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      private_cloud_id: cdktf.stringToTerraform(this._privateCloudId),
      timeouts: vmwareExpressRouteAuthorizationTimeoutsToTerraform(this._timeouts),
    };
  }
}
