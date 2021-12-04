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

export function vmwareExpressRouteAuthorizationTimeoutsToTerraform(struct?: VmwareExpressRouteAuthorizationTimeoutsOutputReference | VmwareExpressRouteAuthorizationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class VmwareExpressRouteAuthorizationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VmwareExpressRouteAuthorizationTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwareExpressRouteAuthorizationTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
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
    this._timeouts.internalValue = config.timeouts;
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

  // private_cloud_id - computed: false, optional: false, required: true
  private _privateCloudId?: string; 
  public get privateCloudId() {
    return this.getStringAttribute('private_cloud_id');
  }
  public set privateCloudId(value: string) {
    this._privateCloudId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateCloudIdInput() {
    return this._privateCloudId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VmwareExpressRouteAuthorizationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VmwareExpressRouteAuthorizationTimeouts) {
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
      name: cdktf.stringToTerraform(this._name),
      private_cloud_id: cdktf.stringToTerraform(this._privateCloudId),
      timeouts: vmwareExpressRouteAuthorizationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
