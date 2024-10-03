// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_test_virtual_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevTestVirtualNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_test_virtual_network#description DevTestVirtualNetwork#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_test_virtual_network#id DevTestVirtualNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_test_virtual_network#lab_name DevTestVirtualNetwork#lab_name}
  */
  readonly labName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_test_virtual_network#name DevTestVirtualNetwork#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_test_virtual_network#resource_group_name DevTestVirtualNetwork#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_test_virtual_network#tags DevTestVirtualNetwork#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_test_virtual_network#subnet DevTestVirtualNetwork#subnet}
  */
  readonly subnet?: DevTestVirtualNetworkSubnet;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_test_virtual_network#timeouts DevTestVirtualNetwork#timeouts}
  */
  readonly timeouts?: DevTestVirtualNetworkTimeouts;
}
export interface DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_test_virtual_network#backend_port DevTestVirtualNetwork#backend_port}
  */
  readonly backendPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_test_virtual_network#transport_protocol DevTestVirtualNetwork#transport_protocol}
  */
  readonly transportProtocol?: string;
}

export function devTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsToTerraform(struct?: DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_port: cdktf.numberToTerraform(struct!.backendPort),
    transport_protocol: cdktf.stringToTerraform(struct!.transportProtocol),
  }
}


export function devTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsToHclTerraform(struct?: DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_port: {
      value: cdktf.numberToHclTerraform(struct!.backendPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transport_protocol: {
      value: cdktf.stringToHclTerraform(struct!.transportProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendPort = this._backendPort;
    }
    if (this._transportProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportProtocol = this._transportProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendPort = undefined;
      this._transportProtocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendPort = value.backendPort;
      this._transportProtocol = value.transportProtocol;
    }
  }

  // backend_port - computed: false, optional: true, required: false
  private _backendPort?: number; 
  public get backendPort() {
    return this.getNumberAttribute('backend_port');
  }
  public set backendPort(value: number) {
    this._backendPort = value;
  }
  public resetBackendPort() {
    this._backendPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPortInput() {
    return this._backendPort;
  }

  // transport_protocol - computed: false, optional: true, required: false
  private _transportProtocol?: string; 
  public get transportProtocol() {
    return this.getStringAttribute('transport_protocol');
  }
  public set transportProtocol(value: string) {
    this._transportProtocol = value;
  }
  public resetTransportProtocol() {
    this._transportProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportProtocolInput() {
    return this._transportProtocol;
  }
}

export class DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList extends cdktf.ComplexList {
  public internalValue? : DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts[] | cdktf.IResolvable

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
  public get(index: number): DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference {
    return new DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevTestVirtualNetworkSubnetSharedPublicIpAddress {
  /**
  * allowed_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_test_virtual_network#allowed_ports DevTestVirtualNetwork#allowed_ports}
  */
  readonly allowedPorts?: DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts[] | cdktf.IResolvable;
}

export function devTestVirtualNetworkSubnetSharedPublicIpAddressToTerraform(struct?: DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference | DevTestVirtualNetworkSubnetSharedPublicIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ports: cdktf.listMapper(devTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsToTerraform, true)(struct!.allowedPorts),
  }
}


export function devTestVirtualNetworkSubnetSharedPublicIpAddressToHclTerraform(struct?: DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference | DevTestVirtualNetworkSubnetSharedPublicIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_ports: {
      value: cdktf.listMapperHcl(devTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsToHclTerraform, true)(struct!.allowedPorts),
      isBlock: true,
      type: "list",
      storageClassType: "DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevTestVirtualNetworkSubnetSharedPublicIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedPorts = this._allowedPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevTestVirtualNetworkSubnetSharedPublicIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedPorts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedPorts.internalValue = value.allowedPorts;
    }
  }

  // allowed_ports - computed: false, optional: true, required: false
  private _allowedPorts = new DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList(this, "allowed_ports", false);
  public get allowedPorts() {
    return this._allowedPorts;
  }
  public putAllowedPorts(value: DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts[] | cdktf.IResolvable) {
    this._allowedPorts.internalValue = value;
  }
  public resetAllowedPorts() {
    this._allowedPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPortsInput() {
    return this._allowedPorts.internalValue;
  }
}
export interface DevTestVirtualNetworkSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_test_virtual_network#use_in_virtual_machine_creation DevTestVirtualNetwork#use_in_virtual_machine_creation}
  */
  readonly useInVirtualMachineCreation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_test_virtual_network#use_public_ip_address DevTestVirtualNetwork#use_public_ip_address}
  */
  readonly usePublicIpAddress?: string;
  /**
  * shared_public_ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_test_virtual_network#shared_public_ip_address DevTestVirtualNetwork#shared_public_ip_address}
  */
  readonly sharedPublicIpAddress?: DevTestVirtualNetworkSubnetSharedPublicIpAddress;
}

export function devTestVirtualNetworkSubnetToTerraform(struct?: DevTestVirtualNetworkSubnetOutputReference | DevTestVirtualNetworkSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_in_virtual_machine_creation: cdktf.stringToTerraform(struct!.useInVirtualMachineCreation),
    use_public_ip_address: cdktf.stringToTerraform(struct!.usePublicIpAddress),
    shared_public_ip_address: devTestVirtualNetworkSubnetSharedPublicIpAddressToTerraform(struct!.sharedPublicIpAddress),
  }
}


export function devTestVirtualNetworkSubnetToHclTerraform(struct?: DevTestVirtualNetworkSubnetOutputReference | DevTestVirtualNetworkSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_in_virtual_machine_creation: {
      value: cdktf.stringToHclTerraform(struct!.useInVirtualMachineCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_public_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.usePublicIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_public_ip_address: {
      value: devTestVirtualNetworkSubnetSharedPublicIpAddressToHclTerraform(struct!.sharedPublicIpAddress),
      isBlock: true,
      type: "list",
      storageClassType: "DevTestVirtualNetworkSubnetSharedPublicIpAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevTestVirtualNetworkSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevTestVirtualNetworkSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useInVirtualMachineCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.useInVirtualMachineCreation = this._useInVirtualMachineCreation;
    }
    if (this._usePublicIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePublicIpAddress = this._usePublicIpAddress;
    }
    if (this._sharedPublicIpAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPublicIpAddress = this._sharedPublicIpAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevTestVirtualNetworkSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useInVirtualMachineCreation = undefined;
      this._usePublicIpAddress = undefined;
      this._sharedPublicIpAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useInVirtualMachineCreation = value.useInVirtualMachineCreation;
      this._usePublicIpAddress = value.usePublicIpAddress;
      this._sharedPublicIpAddress.internalValue = value.sharedPublicIpAddress;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // use_in_virtual_machine_creation - computed: false, optional: true, required: false
  private _useInVirtualMachineCreation?: string; 
  public get useInVirtualMachineCreation() {
    return this.getStringAttribute('use_in_virtual_machine_creation');
  }
  public set useInVirtualMachineCreation(value: string) {
    this._useInVirtualMachineCreation = value;
  }
  public resetUseInVirtualMachineCreation() {
    this._useInVirtualMachineCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInVirtualMachineCreationInput() {
    return this._useInVirtualMachineCreation;
  }

  // use_public_ip_address - computed: false, optional: true, required: false
  private _usePublicIpAddress?: string; 
  public get usePublicIpAddress() {
    return this.getStringAttribute('use_public_ip_address');
  }
  public set usePublicIpAddress(value: string) {
    this._usePublicIpAddress = value;
  }
  public resetUsePublicIpAddress() {
    this._usePublicIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePublicIpAddressInput() {
    return this._usePublicIpAddress;
  }

  // shared_public_ip_address - computed: false, optional: true, required: false
  private _sharedPublicIpAddress = new DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference(this, "shared_public_ip_address");
  public get sharedPublicIpAddress() {
    return this._sharedPublicIpAddress;
  }
  public putSharedPublicIpAddress(value: DevTestVirtualNetworkSubnetSharedPublicIpAddress) {
    this._sharedPublicIpAddress.internalValue = value;
  }
  public resetSharedPublicIpAddress() {
    this._sharedPublicIpAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPublicIpAddressInput() {
    return this._sharedPublicIpAddress.internalValue;
  }
}
export interface DevTestVirtualNetworkTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_test_virtual_network#create DevTestVirtualNetwork#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_test_virtual_network#delete DevTestVirtualNetwork#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_test_virtual_network#read DevTestVirtualNetwork#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_test_virtual_network#update DevTestVirtualNetwork#update}
  */
  readonly update?: string;
}

export function devTestVirtualNetworkTimeoutsToTerraform(struct?: DevTestVirtualNetworkTimeouts | cdktf.IResolvable): any {
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


export function devTestVirtualNetworkTimeoutsToHclTerraform(struct?: DevTestVirtualNetworkTimeouts | cdktf.IResolvable): any {
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

export class DevTestVirtualNetworkTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevTestVirtualNetworkTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DevTestVirtualNetworkTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_test_virtual_network azurerm_dev_test_virtual_network}
*/
export class DevTestVirtualNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_dev_test_virtual_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DevTestVirtualNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevTestVirtualNetwork to import
  * @param importFromId The id of the existing DevTestVirtualNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_test_virtual_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevTestVirtualNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_dev_test_virtual_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/dev_test_virtual_network azurerm_dev_test_virtual_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevTestVirtualNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DevTestVirtualNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dev_test_virtual_network',
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
    this._description = config.description;
    this._id = config.id;
    this._labName = config.labName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._subnet.internalValue = config.subnet;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // lab_name - computed: false, optional: false, required: true
  private _labName?: string; 
  public get labName() {
    return this.getStringAttribute('lab_name');
  }
  public set labName(value: string) {
    this._labName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labNameInput() {
    return this._labName;
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

  // unique_identifier - computed: true, optional: false, required: false
  public get uniqueIdentifier() {
    return this.getStringAttribute('unique_identifier');
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new DevTestVirtualNetworkSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: DevTestVirtualNetworkSubnet) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DevTestVirtualNetworkTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DevTestVirtualNetworkTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      lab_name: cdktf.stringToTerraform(this._labName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      subnet: devTestVirtualNetworkSubnetToTerraform(this._subnet.internalValue),
      timeouts: devTestVirtualNetworkTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      lab_name: {
        value: cdktf.stringToHclTerraform(this._labName),
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
      subnet: {
        value: devTestVirtualNetworkSubnetToHclTerraform(this._subnet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevTestVirtualNetworkSubnetList",
      },
      timeouts: {
        value: devTestVirtualNetworkTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DevTestVirtualNetworkTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
