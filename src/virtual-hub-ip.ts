// https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_ip.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualHubIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_ip.html#name VirtualHubIp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_ip.html#private_ip_address VirtualHubIp#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_ip.html#private_ip_allocation_method VirtualHubIp#private_ip_allocation_method}
  */
  readonly privateIpAllocationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_ip.html#public_ip_address_id VirtualHubIp#public_ip_address_id}
  */
  readonly publicIpAddressId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_ip.html#subnet_id VirtualHubIp#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_ip.html#virtual_hub_id VirtualHubIp#virtual_hub_id}
  */
  readonly virtualHubId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_ip.html#timeouts VirtualHubIp#timeouts}
  */
  readonly timeouts?: VirtualHubIpTimeouts;
}
export interface VirtualHubIpTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_ip.html#create VirtualHubIp#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_ip.html#delete VirtualHubIp#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_ip.html#read VirtualHubIp#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_ip.html#update VirtualHubIp#update}
  */
  readonly update?: string;
}

function virtualHubIpTimeoutsToTerraform(struct?: VirtualHubIpTimeoutsOutputReference | VirtualHubIpTimeouts): any {
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

export class VirtualHubIpTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_ip.html azurerm_virtual_hub_ip}
*/
export class VirtualHubIp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_virtual_hub_ip";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_ip.html azurerm_virtual_hub_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualHubIpConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualHubIpConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_hub_ip',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._privateIpAddress = config.privateIpAddress;
    this._privateIpAllocationMethod = config.privateIpAllocationMethod;
    this._publicIpAddressId = config.publicIpAddressId;
    this._subnetId = config.subnetId;
    this._virtualHubId = config.virtualHubId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
    return this._name
  }

  // private_ip_address - computed: false, optional: true, required: false
  private _privateIpAddress?: string | undefined; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string | undefined) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress
  }

  // private_ip_allocation_method - computed: false, optional: true, required: false
  private _privateIpAllocationMethod?: string | undefined; 
  public get privateIpAllocationMethod() {
    return this.getStringAttribute('private_ip_allocation_method');
  }
  public set privateIpAllocationMethod(value: string | undefined) {
    this._privateIpAllocationMethod = value;
  }
  public resetPrivateIpAllocationMethod() {
    this._privateIpAllocationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAllocationMethodInput() {
    return this._privateIpAllocationMethod
  }

  // public_ip_address_id - computed: false, optional: true, required: false
  private _publicIpAddressId?: string | undefined; 
  public get publicIpAddressId() {
    return this.getStringAttribute('public_ip_address_id');
  }
  public set publicIpAddressId(value: string | undefined) {
    this._publicIpAddressId = value;
  }
  public resetPublicIpAddressId() {
    this._publicIpAddressId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressIdInput() {
    return this._publicIpAddressId
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // virtual_hub_id - computed: false, optional: false, required: true
  private _virtualHubId?: string; 
  public get virtualHubId() {
    return this.getStringAttribute('virtual_hub_id');
  }
  public set virtualHubId(value: string) {
    this._virtualHubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHubIdInput() {
    return this._virtualHubId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualHubIpTimeouts | undefined; 
  private __timeoutsOutput = new VirtualHubIpTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: VirtualHubIpTimeouts | undefined) {
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
      private_ip_address: cdktf.stringToTerraform(this._privateIpAddress),
      private_ip_allocation_method: cdktf.stringToTerraform(this._privateIpAllocationMethod),
      public_ip_address_id: cdktf.stringToTerraform(this._publicIpAddressId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      virtual_hub_id: cdktf.stringToTerraform(this._virtualHubId),
      timeouts: virtualHubIpTimeoutsToTerraform(this._timeouts),
    };
  }
}
