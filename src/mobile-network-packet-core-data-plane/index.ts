// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_data_plane
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MobileNetworkPacketCoreDataPlaneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_data_plane#id MobileNetworkPacketCoreDataPlane#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_data_plane#location MobileNetworkPacketCoreDataPlane#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_data_plane#mobile_network_packet_core_control_plane_id MobileNetworkPacketCoreDataPlane#mobile_network_packet_core_control_plane_id}
  */
  readonly mobileNetworkPacketCoreControlPlaneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_data_plane#name MobileNetworkPacketCoreDataPlane#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_data_plane#tags MobileNetworkPacketCoreDataPlane#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_address MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_address}
  */
  readonly userPlaneAccessIpv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_gateway MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_gateway}
  */
  readonly userPlaneAccessIpv4Gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_subnet MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_subnet}
  */
  readonly userPlaneAccessIpv4Subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_name MobileNetworkPacketCoreDataPlane#user_plane_access_name}
  */
  readonly userPlaneAccessName?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_data_plane#timeouts MobileNetworkPacketCoreDataPlane#timeouts}
  */
  readonly timeouts?: MobileNetworkPacketCoreDataPlaneTimeouts;
}
export interface MobileNetworkPacketCoreDataPlaneTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_data_plane#create MobileNetworkPacketCoreDataPlane#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_data_plane#delete MobileNetworkPacketCoreDataPlane#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_data_plane#read MobileNetworkPacketCoreDataPlane#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_data_plane#update MobileNetworkPacketCoreDataPlane#update}
  */
  readonly update?: string;
}

export function mobileNetworkPacketCoreDataPlaneTimeoutsToTerraform(struct?: MobileNetworkPacketCoreDataPlaneTimeouts | cdktf.IResolvable): any {
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


export function mobileNetworkPacketCoreDataPlaneTimeoutsToHclTerraform(struct?: MobileNetworkPacketCoreDataPlaneTimeouts | cdktf.IResolvable): any {
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

export class MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MobileNetworkPacketCoreDataPlaneTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MobileNetworkPacketCoreDataPlaneTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_data_plane azurerm_mobile_network_packet_core_data_plane}
*/
export class MobileNetworkPacketCoreDataPlane extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_mobile_network_packet_core_data_plane";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MobileNetworkPacketCoreDataPlane resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MobileNetworkPacketCoreDataPlane to import
  * @param importFromId The id of the existing MobileNetworkPacketCoreDataPlane that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_data_plane#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MobileNetworkPacketCoreDataPlane to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_mobile_network_packet_core_data_plane", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_data_plane azurerm_mobile_network_packet_core_data_plane} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MobileNetworkPacketCoreDataPlaneConfig
  */
  public constructor(scope: Construct, id: string, config: MobileNetworkPacketCoreDataPlaneConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mobile_network_packet_core_data_plane',
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
    this._id = config.id;
    this._location = config.location;
    this._mobileNetworkPacketCoreControlPlaneId = config.mobileNetworkPacketCoreControlPlaneId;
    this._name = config.name;
    this._tags = config.tags;
    this._userPlaneAccessIpv4Address = config.userPlaneAccessIpv4Address;
    this._userPlaneAccessIpv4Gateway = config.userPlaneAccessIpv4Gateway;
    this._userPlaneAccessIpv4Subnet = config.userPlaneAccessIpv4Subnet;
    this._userPlaneAccessName = config.userPlaneAccessName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // mobile_network_packet_core_control_plane_id - computed: false, optional: false, required: true
  private _mobileNetworkPacketCoreControlPlaneId?: string; 
  public get mobileNetworkPacketCoreControlPlaneId() {
    return this.getStringAttribute('mobile_network_packet_core_control_plane_id');
  }
  public set mobileNetworkPacketCoreControlPlaneId(value: string) {
    this._mobileNetworkPacketCoreControlPlaneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileNetworkPacketCoreControlPlaneIdInput() {
    return this._mobileNetworkPacketCoreControlPlaneId;
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

  // user_plane_access_ipv4_address - computed: false, optional: true, required: false
  private _userPlaneAccessIpv4Address?: string; 
  public get userPlaneAccessIpv4Address() {
    return this.getStringAttribute('user_plane_access_ipv4_address');
  }
  public set userPlaneAccessIpv4Address(value: string) {
    this._userPlaneAccessIpv4Address = value;
  }
  public resetUserPlaneAccessIpv4Address() {
    this._userPlaneAccessIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPlaneAccessIpv4AddressInput() {
    return this._userPlaneAccessIpv4Address;
  }

  // user_plane_access_ipv4_gateway - computed: false, optional: true, required: false
  private _userPlaneAccessIpv4Gateway?: string; 
  public get userPlaneAccessIpv4Gateway() {
    return this.getStringAttribute('user_plane_access_ipv4_gateway');
  }
  public set userPlaneAccessIpv4Gateway(value: string) {
    this._userPlaneAccessIpv4Gateway = value;
  }
  public resetUserPlaneAccessIpv4Gateway() {
    this._userPlaneAccessIpv4Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPlaneAccessIpv4GatewayInput() {
    return this._userPlaneAccessIpv4Gateway;
  }

  // user_plane_access_ipv4_subnet - computed: false, optional: true, required: false
  private _userPlaneAccessIpv4Subnet?: string; 
  public get userPlaneAccessIpv4Subnet() {
    return this.getStringAttribute('user_plane_access_ipv4_subnet');
  }
  public set userPlaneAccessIpv4Subnet(value: string) {
    this._userPlaneAccessIpv4Subnet = value;
  }
  public resetUserPlaneAccessIpv4Subnet() {
    this._userPlaneAccessIpv4Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPlaneAccessIpv4SubnetInput() {
    return this._userPlaneAccessIpv4Subnet;
  }

  // user_plane_access_name - computed: false, optional: true, required: false
  private _userPlaneAccessName?: string; 
  public get userPlaneAccessName() {
    return this.getStringAttribute('user_plane_access_name');
  }
  public set userPlaneAccessName(value: string) {
    this._userPlaneAccessName = value;
  }
  public resetUserPlaneAccessName() {
    this._userPlaneAccessName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPlaneAccessNameInput() {
    return this._userPlaneAccessName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MobileNetworkPacketCoreDataPlaneTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      mobile_network_packet_core_control_plane_id: cdktf.stringToTerraform(this._mobileNetworkPacketCoreControlPlaneId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_plane_access_ipv4_address: cdktf.stringToTerraform(this._userPlaneAccessIpv4Address),
      user_plane_access_ipv4_gateway: cdktf.stringToTerraform(this._userPlaneAccessIpv4Gateway),
      user_plane_access_ipv4_subnet: cdktf.stringToTerraform(this._userPlaneAccessIpv4Subnet),
      user_plane_access_name: cdktf.stringToTerraform(this._userPlaneAccessName),
      timeouts: mobileNetworkPacketCoreDataPlaneTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      mobile_network_packet_core_control_plane_id: {
        value: cdktf.stringToHclTerraform(this._mobileNetworkPacketCoreControlPlaneId),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      user_plane_access_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._userPlaneAccessIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_plane_access_ipv4_gateway: {
        value: cdktf.stringToHclTerraform(this._userPlaneAccessIpv4Gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_plane_access_ipv4_subnet: {
        value: cdktf.stringToHclTerraform(this._userPlaneAccessIpv4Subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_plane_access_name: {
        value: cdktf.stringToHclTerraform(this._userPlaneAccessName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: mobileNetworkPacketCoreDataPlaneTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MobileNetworkPacketCoreDataPlaneTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
