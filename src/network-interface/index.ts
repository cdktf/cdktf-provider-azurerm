// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#accelerated_networking_enabled NetworkInterface#accelerated_networking_enabled}
  */
  readonly acceleratedNetworkingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#auxiliary_mode NetworkInterface#auxiliary_mode}
  */
  readonly auxiliaryMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#auxiliary_sku NetworkInterface#auxiliary_sku}
  */
  readonly auxiliarySku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#dns_servers NetworkInterface#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#edge_zone NetworkInterface#edge_zone}
  */
  readonly edgeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#id NetworkInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#internal_dns_name_label NetworkInterface#internal_dns_name_label}
  */
  readonly internalDnsNameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#ip_forwarding_enabled NetworkInterface#ip_forwarding_enabled}
  */
  readonly ipForwardingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#location NetworkInterface#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#name NetworkInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#resource_group_name NetworkInterface#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#tags NetworkInterface#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * ip_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#ip_configuration NetworkInterface#ip_configuration}
  */
  readonly ipConfiguration: NetworkInterfaceIpConfiguration[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#timeouts NetworkInterface#timeouts}
  */
  readonly timeouts?: NetworkInterfaceTimeouts;
}
export interface NetworkInterfaceIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#gateway_load_balancer_frontend_ip_configuration_id NetworkInterface#gateway_load_balancer_frontend_ip_configuration_id}
  */
  readonly gatewayLoadBalancerFrontendIpConfigurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#name NetworkInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#primary NetworkInterface#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#private_ip_address NetworkInterface#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#private_ip_address_allocation NetworkInterface#private_ip_address_allocation}
  */
  readonly privateIpAddressAllocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#private_ip_address_version NetworkInterface#private_ip_address_version}
  */
  readonly privateIpAddressVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#public_ip_address_id NetworkInterface#public_ip_address_id}
  */
  readonly publicIpAddressId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#subnet_id NetworkInterface#subnet_id}
  */
  readonly subnetId?: string;
}

export function networkInterfaceIpConfigurationToTerraform(struct?: NetworkInterfaceIpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway_load_balancer_frontend_ip_configuration_id: cdktf.stringToTerraform(struct!.gatewayLoadBalancerFrontendIpConfigurationId),
    name: cdktf.stringToTerraform(struct!.name),
    primary: cdktf.booleanToTerraform(struct!.primary),
    private_ip_address: cdktf.stringToTerraform(struct!.privateIpAddress),
    private_ip_address_allocation: cdktf.stringToTerraform(struct!.privateIpAddressAllocation),
    private_ip_address_version: cdktf.stringToTerraform(struct!.privateIpAddressVersion),
    public_ip_address_id: cdktf.stringToTerraform(struct!.publicIpAddressId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function networkInterfaceIpConfigurationToHclTerraform(struct?: NetworkInterfaceIpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway_load_balancer_frontend_ip_configuration_id: {
      value: cdktf.stringToHclTerraform(struct!.gatewayLoadBalancerFrontendIpConfigurationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip_address_allocation: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAddressAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip_address_version: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAddressVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip_address_id: {
      value: cdktf.stringToHclTerraform(struct!.publicIpAddressId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkInterfaceIpConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkInterfaceIpConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayLoadBalancerFrontendIpConfigurationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayLoadBalancerFrontendIpConfigurationId = this._gatewayLoadBalancerFrontendIpConfigurationId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._privateIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddress = this._privateIpAddress;
    }
    if (this._privateIpAddressAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddressAllocation = this._privateIpAddressAllocation;
    }
    if (this._privateIpAddressVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddressVersion = this._privateIpAddressVersion;
    }
    if (this._publicIpAddressId !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpAddressId = this._publicIpAddressId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkInterfaceIpConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gatewayLoadBalancerFrontendIpConfigurationId = undefined;
      this._name = undefined;
      this._primary = undefined;
      this._privateIpAddress = undefined;
      this._privateIpAddressAllocation = undefined;
      this._privateIpAddressVersion = undefined;
      this._publicIpAddressId = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gatewayLoadBalancerFrontendIpConfigurationId = value.gatewayLoadBalancerFrontendIpConfigurationId;
      this._name = value.name;
      this._primary = value.primary;
      this._privateIpAddress = value.privateIpAddress;
      this._privateIpAddressAllocation = value.privateIpAddressAllocation;
      this._privateIpAddressVersion = value.privateIpAddressVersion;
      this._publicIpAddressId = value.publicIpAddressId;
      this._subnetId = value.subnetId;
    }
  }

  // gateway_load_balancer_frontend_ip_configuration_id - computed: true, optional: true, required: false
  private _gatewayLoadBalancerFrontendIpConfigurationId?: string; 
  public get gatewayLoadBalancerFrontendIpConfigurationId() {
    return this.getStringAttribute('gateway_load_balancer_frontend_ip_configuration_id');
  }
  public set gatewayLoadBalancerFrontendIpConfigurationId(value: string) {
    this._gatewayLoadBalancerFrontendIpConfigurationId = value;
  }
  public resetGatewayLoadBalancerFrontendIpConfigurationId() {
    this._gatewayLoadBalancerFrontendIpConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayLoadBalancerFrontendIpConfigurationIdInput() {
    return this._gatewayLoadBalancerFrontendIpConfigurationId;
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

  // primary - computed: true, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // private_ip_address - computed: true, optional: true, required: false
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // private_ip_address_allocation - computed: false, optional: false, required: true
  private _privateIpAddressAllocation?: string; 
  public get privateIpAddressAllocation() {
    return this.getStringAttribute('private_ip_address_allocation');
  }
  public set privateIpAddressAllocation(value: string) {
    this._privateIpAddressAllocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressAllocationInput() {
    return this._privateIpAddressAllocation;
  }

  // private_ip_address_version - computed: false, optional: true, required: false
  private _privateIpAddressVersion?: string; 
  public get privateIpAddressVersion() {
    return this.getStringAttribute('private_ip_address_version');
  }
  public set privateIpAddressVersion(value: string) {
    this._privateIpAddressVersion = value;
  }
  public resetPrivateIpAddressVersion() {
    this._privateIpAddressVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressVersionInput() {
    return this._privateIpAddressVersion;
  }

  // public_ip_address_id - computed: false, optional: true, required: false
  private _publicIpAddressId?: string; 
  public get publicIpAddressId() {
    return this.getStringAttribute('public_ip_address_id');
  }
  public set publicIpAddressId(value: string) {
    this._publicIpAddressId = value;
  }
  public resetPublicIpAddressId() {
    this._publicIpAddressId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressIdInput() {
    return this._publicIpAddressId;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class NetworkInterfaceIpConfigurationList extends cdktf.ComplexList {
  public internalValue? : NetworkInterfaceIpConfiguration[] | cdktf.IResolvable

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
  public get(index: number): NetworkInterfaceIpConfigurationOutputReference {
    return new NetworkInterfaceIpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkInterfaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#create NetworkInterface#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#delete NetworkInterface#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#read NetworkInterface#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#update NetworkInterface#update}
  */
  readonly update?: string;
}

export function networkInterfaceTimeoutsToTerraform(struct?: NetworkInterfaceTimeouts | cdktf.IResolvable): any {
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


export function networkInterfaceTimeoutsToHclTerraform(struct?: NetworkInterfaceTimeouts | cdktf.IResolvable): any {
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

export class NetworkInterfaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkInterfaceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkInterfaceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface azurerm_network_interface}
*/
export class NetworkInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_network_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkInterface to import
  * @param importFromId The id of the existing NetworkInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_network_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface azurerm_network_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_interface',
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
    this._acceleratedNetworkingEnabled = config.acceleratedNetworkingEnabled;
    this._auxiliaryMode = config.auxiliaryMode;
    this._auxiliarySku = config.auxiliarySku;
    this._dnsServers = config.dnsServers;
    this._edgeZone = config.edgeZone;
    this._id = config.id;
    this._internalDnsNameLabel = config.internalDnsNameLabel;
    this._ipForwardingEnabled = config.ipForwardingEnabled;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._ipConfiguration.internalValue = config.ipConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerated_networking_enabled - computed: false, optional: true, required: false
  private _acceleratedNetworkingEnabled?: boolean | cdktf.IResolvable; 
  public get acceleratedNetworkingEnabled() {
    return this.getBooleanAttribute('accelerated_networking_enabled');
  }
  public set acceleratedNetworkingEnabled(value: boolean | cdktf.IResolvable) {
    this._acceleratedNetworkingEnabled = value;
  }
  public resetAcceleratedNetworkingEnabled() {
    this._acceleratedNetworkingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratedNetworkingEnabledInput() {
    return this._acceleratedNetworkingEnabled;
  }

  // applied_dns_servers - computed: true, optional: false, required: false
  public get appliedDnsServers() {
    return this.getListAttribute('applied_dns_servers');
  }

  // auxiliary_mode - computed: false, optional: true, required: false
  private _auxiliaryMode?: string; 
  public get auxiliaryMode() {
    return this.getStringAttribute('auxiliary_mode');
  }
  public set auxiliaryMode(value: string) {
    this._auxiliaryMode = value;
  }
  public resetAuxiliaryMode() {
    this._auxiliaryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliaryModeInput() {
    return this._auxiliaryMode;
  }

  // auxiliary_sku - computed: false, optional: true, required: false
  private _auxiliarySku?: string; 
  public get auxiliarySku() {
    return this.getStringAttribute('auxiliary_sku');
  }
  public set auxiliarySku(value: string) {
    this._auxiliarySku = value;
  }
  public resetAuxiliarySku() {
    this._auxiliarySku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliarySkuInput() {
    return this._auxiliarySku;
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // edge_zone - computed: false, optional: true, required: false
  private _edgeZone?: string; 
  public get edgeZone() {
    return this.getStringAttribute('edge_zone');
  }
  public set edgeZone(value: string) {
    this._edgeZone = value;
  }
  public resetEdgeZone() {
    this._edgeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeZoneInput() {
    return this._edgeZone;
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

  // internal_dns_name_label - computed: false, optional: true, required: false
  private _internalDnsNameLabel?: string; 
  public get internalDnsNameLabel() {
    return this.getStringAttribute('internal_dns_name_label');
  }
  public set internalDnsNameLabel(value: string) {
    this._internalDnsNameLabel = value;
  }
  public resetInternalDnsNameLabel() {
    this._internalDnsNameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalDnsNameLabelInput() {
    return this._internalDnsNameLabel;
  }

  // internal_domain_name_suffix - computed: true, optional: false, required: false
  public get internalDomainNameSuffix() {
    return this.getStringAttribute('internal_domain_name_suffix');
  }

  // ip_forwarding_enabled - computed: false, optional: true, required: false
  private _ipForwardingEnabled?: boolean | cdktf.IResolvable; 
  public get ipForwardingEnabled() {
    return this.getBooleanAttribute('ip_forwarding_enabled');
  }
  public set ipForwardingEnabled(value: boolean | cdktf.IResolvable) {
    this._ipForwardingEnabled = value;
  }
  public resetIpForwardingEnabled() {
    this._ipForwardingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipForwardingEnabledInput() {
    return this._ipForwardingEnabled;
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

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
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

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // private_ip_addresses - computed: true, optional: false, required: false
  public get privateIpAddresses() {
    return this.getListAttribute('private_ip_addresses');
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

  // virtual_machine_id - computed: true, optional: false, required: false
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }

  // ip_configuration - computed: false, optional: false, required: true
  private _ipConfiguration = new NetworkInterfaceIpConfigurationList(this, "ip_configuration", false);
  public get ipConfiguration() {
    return this._ipConfiguration;
  }
  public putIpConfiguration(value: NetworkInterfaceIpConfiguration[] | cdktf.IResolvable) {
    this._ipConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationInput() {
    return this._ipConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkInterfaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkInterfaceTimeouts) {
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
      accelerated_networking_enabled: cdktf.booleanToTerraform(this._acceleratedNetworkingEnabled),
      auxiliary_mode: cdktf.stringToTerraform(this._auxiliaryMode),
      auxiliary_sku: cdktf.stringToTerraform(this._auxiliarySku),
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsServers),
      edge_zone: cdktf.stringToTerraform(this._edgeZone),
      id: cdktf.stringToTerraform(this._id),
      internal_dns_name_label: cdktf.stringToTerraform(this._internalDnsNameLabel),
      ip_forwarding_enabled: cdktf.booleanToTerraform(this._ipForwardingEnabled),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      ip_configuration: cdktf.listMapper(networkInterfaceIpConfigurationToTerraform, true)(this._ipConfiguration.internalValue),
      timeouts: networkInterfaceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accelerated_networking_enabled: {
        value: cdktf.booleanToHclTerraform(this._acceleratedNetworkingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auxiliary_mode: {
        value: cdktf.stringToHclTerraform(this._auxiliaryMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auxiliary_sku: {
        value: cdktf.stringToHclTerraform(this._auxiliarySku),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      edge_zone: {
        value: cdktf.stringToHclTerraform(this._edgeZone),
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
      internal_dns_name_label: {
        value: cdktf.stringToHclTerraform(this._internalDnsNameLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_forwarding_enabled: {
        value: cdktf.booleanToHclTerraform(this._ipForwardingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ip_configuration: {
        value: cdktf.listMapperHcl(networkInterfaceIpConfigurationToHclTerraform, true)(this._ipConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkInterfaceIpConfigurationList",
      },
      timeouts: {
        value: networkInterfaceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkInterfaceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
