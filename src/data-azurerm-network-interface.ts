// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_network_interface.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermNetworkInterfaceConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermNetworkInterfaceTimeouts;
}
export class DataAzurermNetworkInterfaceIpConfiguration extends ComplexComputedList {

  // application_gateway_backend_address_pools_ids - computed: true, optional: false, required: true
  public get applicationGatewayBackendAddressPoolsIds() {
    return this.getListAttribute('application_gateway_backend_address_pools_ids');
  }

  // application_security_group_ids - computed: true, optional: false, required: true
  public get applicationSecurityGroupIds() {
    return this.getListAttribute('application_security_group_ids');
  }

  // load_balancer_backend_address_pools_ids - computed: true, optional: false, required: true
  public get loadBalancerBackendAddressPoolsIds() {
    return this.getListAttribute('load_balancer_backend_address_pools_ids');
  }

  // load_balancer_inbound_nat_rules_ids - computed: true, optional: false, required: true
  public get loadBalancerInboundNatRulesIds() {
    return this.getListAttribute('load_balancer_inbound_nat_rules_ids');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary - computed: true, optional: false, required: true
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // private_ip_address - computed: true, optional: false, required: true
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // private_ip_address_allocation - computed: true, optional: false, required: true
  public get privateIpAddressAllocation() {
    return this.getStringAttribute('private_ip_address_allocation');
  }

  // private_ip_address_version - computed: true, optional: false, required: true
  public get privateIpAddressVersion() {
    return this.getStringAttribute('private_ip_address_version');
  }

  // public_ip_address_id - computed: true, optional: false, required: true
  public get publicIpAddressId() {
    return this.getStringAttribute('public_ip_address_id');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export interface DataAzurermNetworkInterfaceTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermNetworkInterface extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermNetworkInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_interface',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applied_dns_servers - computed: true, optional: false, required: true
  public get appliedDnsServers() {
    return this.getListAttribute('applied_dns_servers');
  }

  // dns_servers - computed: true, optional: false, required: true
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }

  // enable_accelerated_networking - computed: true, optional: false, required: true
  public get enableAcceleratedNetworking() {
    return this.getBooleanAttribute('enable_accelerated_networking');
  }

  // enable_ip_forwarding - computed: true, optional: false, required: true
  public get enableIpForwarding() {
    return this.getBooleanAttribute('enable_ip_forwarding');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // internal_dns_name_label - computed: true, optional: false, required: true
  public get internalDnsNameLabel() {
    return this.getStringAttribute('internal_dns_name_label');
  }

  // ip_configuration - computed: true, optional: false, required: true
  public ipConfiguration(index: string) {
    return new DataAzurermNetworkInterfaceIpConfiguration(this, 'ip_configuration', index);
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // mac_address - computed: true, optional: false, required: true
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network_security_group_id - computed: true, optional: false, required: true
  public get networkSecurityGroupId() {
    return this.getStringAttribute('network_security_group_id');
  }

  // private_ip_address - computed: true, optional: false, required: true
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // private_ip_addresses - computed: true, optional: false, required: true
  public get privateIpAddresses() {
    return this.getListAttribute('private_ip_addresses');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // virtual_machine_id - computed: true, optional: false, required: true
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermNetworkInterfaceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermNetworkInterfaceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
