// https://www.terraform.io/docs/providers/azurerm/r/dev_test_virtual_network.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevTestVirtualNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_virtual_network.html#description DevTestVirtualNetwork#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_virtual_network.html#lab_name DevTestVirtualNetwork#lab_name}
  */
  readonly labName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_virtual_network.html#name DevTestVirtualNetwork#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_virtual_network.html#resource_group_name DevTestVirtualNetwork#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_virtual_network.html#tags DevTestVirtualNetwork#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * subnet block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_virtual_network.html#subnet DevTestVirtualNetwork#subnet}
  */
  readonly subnet?: DevTestVirtualNetworkSubnet;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_virtual_network.html#timeouts DevTestVirtualNetwork#timeouts}
  */
  readonly timeouts?: DevTestVirtualNetworkTimeouts;
}
export interface DevTestVirtualNetworkSubnet {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_virtual_network.html#use_in_virtual_machine_creation DevTestVirtualNetwork#use_in_virtual_machine_creation}
  */
  readonly useInVirtualMachineCreation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_virtual_network.html#use_public_ip_address DevTestVirtualNetwork#use_public_ip_address}
  */
  readonly usePublicIpAddress?: string;
}

function devTestVirtualNetworkSubnetToTerraform(struct?: DevTestVirtualNetworkSubnetOutputReference | DevTestVirtualNetworkSubnet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_in_virtual_machine_creation: cdktf.stringToTerraform(struct!.useInVirtualMachineCreation),
    use_public_ip_address: cdktf.stringToTerraform(struct!.usePublicIpAddress),
  }
}

export class DevTestVirtualNetworkSubnetOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // use_in_virtual_machine_creation - computed: false, optional: true, required: false
  private _useInVirtualMachineCreation?: string | undefined; 
  public get useInVirtualMachineCreation() {
    return this.getStringAttribute('use_in_virtual_machine_creation');
  }
  public set useInVirtualMachineCreation(value: string | undefined) {
    this._useInVirtualMachineCreation = value;
  }
  public resetUseInVirtualMachineCreation() {
    this._useInVirtualMachineCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInVirtualMachineCreationInput() {
    return this._useInVirtualMachineCreation
  }

  // use_public_ip_address - computed: false, optional: true, required: false
  private _usePublicIpAddress?: string | undefined; 
  public get usePublicIpAddress() {
    return this.getStringAttribute('use_public_ip_address');
  }
  public set usePublicIpAddress(value: string | undefined) {
    this._usePublicIpAddress = value;
  }
  public resetUsePublicIpAddress() {
    this._usePublicIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePublicIpAddressInput() {
    return this._usePublicIpAddress
  }
}
export interface DevTestVirtualNetworkTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_virtual_network.html#create DevTestVirtualNetwork#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_virtual_network.html#delete DevTestVirtualNetwork#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_virtual_network.html#read DevTestVirtualNetwork#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_virtual_network.html#update DevTestVirtualNetwork#update}
  */
  readonly update?: string;
}

function devTestVirtualNetworkTimeoutsToTerraform(struct?: DevTestVirtualNetworkTimeoutsOutputReference | DevTestVirtualNetworkTimeouts): any {
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

export class DevTestVirtualNetworkTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_virtual_network.html azurerm_dev_test_virtual_network}
*/
export class DevTestVirtualNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_dev_test_virtual_network";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_virtual_network.html azurerm_dev_test_virtual_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevTestVirtualNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DevTestVirtualNetworkConfig) {
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
    this._description = config.description;
    this._labName = config.labName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._subnet = config.subnet;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // unique_identifier - computed: true, optional: false, required: false
  public get uniqueIdentifier() {
    return this.getStringAttribute('unique_identifier');
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: DevTestVirtualNetworkSubnet | undefined; 
  private __subnetOutput = new DevTestVirtualNetworkSubnetOutputReference(this as any, "subnet", true);
  public get subnet() {
    return this.__subnetOutput;
  }
  public putSubnet(value: DevTestVirtualNetworkSubnet | undefined) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DevTestVirtualNetworkTimeouts | undefined; 
  private __timeoutsOutput = new DevTestVirtualNetworkTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DevTestVirtualNetworkTimeouts | undefined) {
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
      description: cdktf.stringToTerraform(this._description),
      lab_name: cdktf.stringToTerraform(this._labName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      subnet: devTestVirtualNetworkSubnetToTerraform(this._subnet),
      timeouts: devTestVirtualNetworkTimeoutsToTerraform(this._timeouts),
    };
  }
}
