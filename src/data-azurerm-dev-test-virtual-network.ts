// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_dev_test_virtual_network.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAzurermDevTestVirtualNetworkConfig extends TerraformMetaArguments {
  readonly labName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermDevTestVirtualNetworkTimeouts;
}
export class DataAzurermDevTestVirtualNetworkAllowedSubnets extends ComplexComputedList {

  // allow_public_ip - computed: true, optional: false, required: false
  public get allowPublicIp() {
    return this.getStringAttribute('allow_public_ip');
  }

  // lab_subnet_name - computed: true, optional: false, required: false
  public get labSubnetName() {
    return this.getStringAttribute('lab_subnet_name');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
}
export class DataAzurermDevTestVirtualNetworkSubnetOverrides extends ComplexComputedList {

  // lab_subnet_name - computed: true, optional: false, required: false
  public get labSubnetName() {
    return this.getStringAttribute('lab_subnet_name');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // use_in_vm_creation_permission - computed: true, optional: false, required: false
  public get useInVmCreationPermission() {
    return this.getStringAttribute('use_in_vm_creation_permission');
  }

  // use_public_ip_address_permission - computed: true, optional: false, required: false
  public get usePublicIpAddressPermission() {
    return this.getStringAttribute('use_public_ip_address_permission');
  }

  // virtual_network_pool_name - computed: true, optional: false, required: false
  public get virtualNetworkPoolName() {
    return this.getStringAttribute('virtual_network_pool_name');
  }
}
export interface DataAzurermDevTestVirtualNetworkTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermDevTestVirtualNetwork extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermDevTestVirtualNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dev_test_virtual_network',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._labName = config.labName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_subnets - computed: true, optional: false, required: false
  public allowedSubnets(index: string) {
    return new DataAzurermDevTestVirtualNetworkAllowedSubnets(this, 'allowed_subnets', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lab_name - computed: false, optional: false, required: true
  private _labName: string;
  public get labName() {
    return this.getStringAttribute('lab_name');
  }
  public set labName(value: string) {
    this._labName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labNameInput() {
    return this._labName
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // subnet_overrides - computed: true, optional: false, required: false
  public subnetOverrides(index: string) {
    return new DataAzurermDevTestVirtualNetworkSubnetOverrides(this, 'subnet_overrides', index);
  }

  // unique_identifier - computed: true, optional: false, required: false
  public get uniqueIdentifier() {
    return this.getStringAttribute('unique_identifier');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermDevTestVirtualNetworkTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermDevTestVirtualNetworkTimeouts ) {
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
      lab_name: this._labName,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
