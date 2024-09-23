// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/network_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermNetworkInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/network_interface#id DataAzurermNetworkInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/network_interface#name DataAzurermNetworkInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/network_interface#resource_group_name DataAzurermNetworkInterface#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/network_interface#timeouts DataAzurermNetworkInterface#timeouts}
  */
  readonly timeouts?: DataAzurermNetworkInterfaceTimeouts;
}
export interface DataAzurermNetworkInterfaceIpConfiguration {
}

export function dataAzurermNetworkInterfaceIpConfigurationToTerraform(struct?: DataAzurermNetworkInterfaceIpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermNetworkInterfaceIpConfigurationToHclTerraform(struct?: DataAzurermNetworkInterfaceIpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermNetworkInterfaceIpConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermNetworkInterfaceIpConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermNetworkInterfaceIpConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_gateway_backend_address_pools_ids - computed: true, optional: false, required: false
  public get applicationGatewayBackendAddressPoolsIds() {
    return cdktf.Fn.tolist(this.getListAttribute('application_gateway_backend_address_pools_ids'));
  }

  // application_security_group_ids - computed: true, optional: false, required: false
  public get applicationSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('application_security_group_ids'));
  }

  // gateway_load_balancer_frontend_ip_configuration_id - computed: true, optional: false, required: false
  public get gatewayLoadBalancerFrontendIpConfigurationId() {
    return this.getStringAttribute('gateway_load_balancer_frontend_ip_configuration_id');
  }

  // load_balancer_backend_address_pools_ids - computed: true, optional: false, required: false
  public get loadBalancerBackendAddressPoolsIds() {
    return cdktf.Fn.tolist(this.getListAttribute('load_balancer_backend_address_pools_ids'));
  }

  // load_balancer_inbound_nat_rules_ids - computed: true, optional: false, required: false
  public get loadBalancerInboundNatRulesIds() {
    return cdktf.Fn.tolist(this.getListAttribute('load_balancer_inbound_nat_rules_ids'));
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // private_ip_address_allocation - computed: true, optional: false, required: false
  public get privateIpAddressAllocation() {
    return this.getStringAttribute('private_ip_address_allocation');
  }

  // private_ip_address_version - computed: true, optional: false, required: false
  public get privateIpAddressVersion() {
    return this.getStringAttribute('private_ip_address_version');
  }

  // public_ip_address_id - computed: true, optional: false, required: false
  public get publicIpAddressId() {
    return this.getStringAttribute('public_ip_address_id');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataAzurermNetworkInterfaceIpConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermNetworkInterfaceIpConfigurationOutputReference {
    return new DataAzurermNetworkInterfaceIpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermNetworkInterfaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/network_interface#read DataAzurermNetworkInterface#read}
  */
  readonly read?: string;
}

export function dataAzurermNetworkInterfaceTimeoutsToTerraform(struct?: DataAzurermNetworkInterfaceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermNetworkInterfaceTimeoutsToHclTerraform(struct?: DataAzurermNetworkInterfaceTimeouts | cdktf.IResolvable): any {
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

export class DataAzurermNetworkInterfaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermNetworkInterfaceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAzurermNetworkInterfaceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/network_interface azurerm_network_interface}
*/
export class DataAzurermNetworkInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_network_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermNetworkInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermNetworkInterface to import
  * @param importFromId The id of the existing DataAzurermNetworkInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/network_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermNetworkInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_network_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/network_interface azurerm_network_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermNetworkInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermNetworkInterfaceConfig) {
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
    this._id = config.id;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerated_networking_enabled - computed: true, optional: false, required: false
  public get acceleratedNetworkingEnabled() {
    return this.getBooleanAttribute('accelerated_networking_enabled');
  }

  // applied_dns_servers - computed: true, optional: false, required: false
  public get appliedDnsServers() {
    return cdktf.Fn.tolist(this.getListAttribute('applied_dns_servers'));
  }

  // dns_servers - computed: true, optional: false, required: false
  public get dnsServers() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_servers'));
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

  // internal_dns_name_label - computed: true, optional: false, required: false
  public get internalDnsNameLabel() {
    return this.getStringAttribute('internal_dns_name_label');
  }

  // ip_configuration - computed: true, optional: false, required: false
  private _ipConfiguration = new DataAzurermNetworkInterfaceIpConfigurationList(this, "ip_configuration", false);
  public get ipConfiguration() {
    return this._ipConfiguration;
  }

  // ip_forwarding_enabled - computed: true, optional: false, required: false
  public get ipForwardingEnabled() {
    return this.getBooleanAttribute('ip_forwarding_enabled');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // network_security_group_id - computed: true, optional: false, required: false
  public get networkSecurityGroupId() {
    return this.getStringAttribute('network_security_group_id');
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

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // virtual_machine_id - computed: true, optional: false, required: false
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermNetworkInterfaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermNetworkInterfaceTimeouts) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermNetworkInterfaceTimeoutsToTerraform(this._timeouts.internalValue),
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
      timeouts: {
        value: dataAzurermNetworkInterfaceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermNetworkInterfaceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
