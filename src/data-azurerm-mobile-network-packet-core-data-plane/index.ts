// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/mobile_network_packet_core_data_plane
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermMobileNetworkPacketCoreDataPlaneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/mobile_network_packet_core_data_plane#id DataAzurermMobileNetworkPacketCoreDataPlane#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/mobile_network_packet_core_data_plane#mobile_network_packet_core_control_plane_id DataAzurermMobileNetworkPacketCoreDataPlane#mobile_network_packet_core_control_plane_id}
  */
  readonly mobileNetworkPacketCoreControlPlaneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/mobile_network_packet_core_data_plane#name DataAzurermMobileNetworkPacketCoreDataPlane#name}
  */
  readonly name: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/mobile_network_packet_core_data_plane#timeouts DataAzurermMobileNetworkPacketCoreDataPlane#timeouts}
  */
  readonly timeouts?: DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts;
}
export interface DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/mobile_network_packet_core_data_plane#read DataAzurermMobileNetworkPacketCoreDataPlane#read}
  */
  readonly read?: string;
}

export function dataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsToTerraform(struct?: DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsToHclTerraform(struct?: DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/mobile_network_packet_core_data_plane azurerm_mobile_network_packet_core_data_plane}
*/
export class DataAzurermMobileNetworkPacketCoreDataPlane extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_mobile_network_packet_core_data_plane";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermMobileNetworkPacketCoreDataPlane resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermMobileNetworkPacketCoreDataPlane to import
  * @param importFromId The id of the existing DataAzurermMobileNetworkPacketCoreDataPlane that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/mobile_network_packet_core_data_plane#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermMobileNetworkPacketCoreDataPlane to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_mobile_network_packet_core_data_plane", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/mobile_network_packet_core_data_plane azurerm_mobile_network_packet_core_data_plane} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermMobileNetworkPacketCoreDataPlaneConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermMobileNetworkPacketCoreDataPlaneConfig) {
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
    this._mobileNetworkPacketCoreControlPlaneId = config.mobileNetworkPacketCoreControlPlaneId;
    this._name = config.name;
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

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // user_plane_access_ipv4_address - computed: true, optional: false, required: false
  public get userPlaneAccessIpv4Address() {
    return this.getStringAttribute('user_plane_access_ipv4_address');
  }

  // user_plane_access_ipv4_gateway - computed: true, optional: false, required: false
  public get userPlaneAccessIpv4Gateway() {
    return this.getStringAttribute('user_plane_access_ipv4_gateway');
  }

  // user_plane_access_ipv4_subnet - computed: true, optional: false, required: false
  public get userPlaneAccessIpv4Subnet() {
    return this.getStringAttribute('user_plane_access_ipv4_subnet');
  }

  // user_plane_access_name - computed: true, optional: false, required: false
  public get userPlaneAccessName() {
    return this.getStringAttribute('user_plane_access_name');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts) {
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
      mobile_network_packet_core_control_plane_id: cdktf.stringToTerraform(this._mobileNetworkPacketCoreControlPlaneId),
      name: cdktf.stringToTerraform(this._name),
      timeouts: dataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsToTerraform(this._timeouts.internalValue),
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
      timeouts: {
        value: dataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
