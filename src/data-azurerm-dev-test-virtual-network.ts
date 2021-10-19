// https://www.terraform.io/docs/providers/azurerm/d/dev_test_virtual_network.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermDevTestVirtualNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/dev_test_virtual_network.html#lab_name DataAzurermDevTestVirtualNetwork#lab_name}
  */
  readonly labName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/dev_test_virtual_network.html#name DataAzurermDevTestVirtualNetwork#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/dev_test_virtual_network.html#resource_group_name DataAzurermDevTestVirtualNetwork#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/dev_test_virtual_network.html#timeouts DataAzurermDevTestVirtualNetwork#timeouts}
  */
  readonly timeouts?: DataAzurermDevTestVirtualNetworkTimeouts;
}
export class DataAzurermDevTestVirtualNetworkAllowedSubnets extends cdktf.ComplexComputedList {

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
export class DataAzurermDevTestVirtualNetworkSubnetOverrides extends cdktf.ComplexComputedList {

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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/dev_test_virtual_network.html#read DataAzurermDevTestVirtualNetwork#read}
  */
  readonly read?: string;
}

function dataAzurermDevTestVirtualNetworkTimeoutsToTerraform(struct?: DataAzurermDevTestVirtualNetworkTimeoutsOutputReference | DataAzurermDevTestVirtualNetworkTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermDevTestVirtualNetworkTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/dev_test_virtual_network.html azurerm_dev_test_virtual_network}
*/
export class DataAzurermDevTestVirtualNetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_dev_test_virtual_network";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/dev_test_virtual_network.html azurerm_dev_test_virtual_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermDevTestVirtualNetworkConfig
  */
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
  private _labName?: string; 
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
  private _timeouts?: DataAzurermDevTestVirtualNetworkTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermDevTestVirtualNetworkTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermDevTestVirtualNetworkTimeouts | undefined) {
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
      lab_name: cdktf.stringToTerraform(this._labName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermDevTestVirtualNetworkTimeoutsToTerraform(this._timeouts),
    };
  }
}
