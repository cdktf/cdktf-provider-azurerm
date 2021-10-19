// https://www.terraform.io/docs/providers/azurerm/d/virtual_machine_scale_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermVirtualMachineScaleSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_machine_scale_set.html#name DataAzurermVirtualMachineScaleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_machine_scale_set.html#resource_group_name DataAzurermVirtualMachineScaleSet#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_machine_scale_set.html#timeouts DataAzurermVirtualMachineScaleSet#timeouts}
  */
  readonly timeouts?: DataAzurermVirtualMachineScaleSetTimeouts;
}
export class DataAzurermVirtualMachineScaleSetIdentity extends cdktf.ComplexComputedList {

  // identity_ids - computed: true, optional: false, required: false
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag extends cdktf.ComplexComputedList {

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress extends cdktf.ComplexComputedList {

  // domain_name_label - computed: true, optional: false, required: false
  public get domainNameLabel() {
    return this.getStringAttribute('domain_name_label');
  }

  // idle_timeout_in_minutes - computed: true, optional: false, required: false
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }

  // ip_tag - computed: true, optional: false, required: false
  public get ipTag() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ip_tag') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // public_ip_prefix_id - computed: true, optional: false, required: false
  public get publicIpPrefixId() {
    return this.getStringAttribute('public_ip_prefix_id');
  }
}
export class DataAzurermVirtualMachineScaleSetNetworkInterfaceIpConfiguration extends cdktf.ComplexComputedList {

  // application_gateway_backend_address_pool_ids - computed: true, optional: false, required: false
  public get applicationGatewayBackendAddressPoolIds() {
    return this.getListAttribute('application_gateway_backend_address_pool_ids');
  }

  // application_security_group_ids - computed: true, optional: false, required: false
  public get applicationSecurityGroupIds() {
    return this.getListAttribute('application_security_group_ids');
  }

  // load_balancer_backend_address_pool_ids - computed: true, optional: false, required: false
  public get loadBalancerBackendAddressPoolIds() {
    return this.getListAttribute('load_balancer_backend_address_pool_ids');
  }

  // load_balancer_inbound_nat_rules_ids - computed: true, optional: false, required: false
  public get loadBalancerInboundNatRulesIds() {
    return this.getListAttribute('load_balancer_inbound_nat_rules_ids');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary') as any;
  }

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('public_ip_address') as any;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export class DataAzurermVirtualMachineScaleSetNetworkInterface extends cdktf.ComplexComputedList {

  // dns_servers - computed: true, optional: false, required: false
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }

  // enable_accelerated_networking - computed: true, optional: false, required: false
  public get enableAcceleratedNetworking() {
    return this.getBooleanAttribute('enable_accelerated_networking') as any;
  }

  // enable_ip_forwarding - computed: true, optional: false, required: false
  public get enableIpForwarding() {
    return this.getBooleanAttribute('enable_ip_forwarding') as any;
  }

  // ip_configuration - computed: true, optional: false, required: false
  public get ipConfiguration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ip_configuration') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_security_group_id - computed: true, optional: false, required: false
  public get networkSecurityGroupId() {
    return this.getStringAttribute('network_security_group_id');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary') as any;
  }
}
export interface DataAzurermVirtualMachineScaleSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_machine_scale_set.html#read DataAzurermVirtualMachineScaleSet#read}
  */
  readonly read?: string;
}

function dataAzurermVirtualMachineScaleSetTimeoutsToTerraform(struct?: DataAzurermVirtualMachineScaleSetTimeoutsOutputReference | DataAzurermVirtualMachineScaleSetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermVirtualMachineScaleSetTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_machine_scale_set.html azurerm_virtual_machine_scale_set}
*/
export class DataAzurermVirtualMachineScaleSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_virtual_machine_scale_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_machine_scale_set.html azurerm_virtual_machine_scale_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermVirtualMachineScaleSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermVirtualMachineScaleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_machine_scale_set',
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: true, optional: false, required: false
  public identity(index: string) {
    return new DataAzurermVirtualMachineScaleSetIdentity(this, 'identity', index);
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // network_interface - computed: true, optional: false, required: false
  public networkInterface(index: string) {
    return new DataAzurermVirtualMachineScaleSetNetworkInterface(this, 'network_interface', index);
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermVirtualMachineScaleSetTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermVirtualMachineScaleSetTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermVirtualMachineScaleSetTimeouts | undefined) {
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
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermVirtualMachineScaleSetTimeoutsToTerraform(this._timeouts),
    };
  }
}
