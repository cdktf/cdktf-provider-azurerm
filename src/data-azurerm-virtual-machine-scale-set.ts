// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_virtual_machine_scale_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermVirtualMachineScaleSetConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
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
    return this.getBooleanAttribute('primary');
  }

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
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
    return this.getBooleanAttribute('enable_accelerated_networking');
  }

  // enable_ip_forwarding - computed: true, optional: false, required: false
  public get enableIpForwarding() {
    return this.getBooleanAttribute('enable_ip_forwarding');
  }

  // ip_configuration - computed: true, optional: false, required: false
  public get ipConfiguration() {
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
    return this.getBooleanAttribute('primary');
  }
}
export interface DataAzurermVirtualMachineScaleSetTimeouts {
  readonly read?: string;
}

function dataAzurermVirtualMachineScaleSetTimeoutsToTerraform(struct?: DataAzurermVirtualMachineScaleSetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermVirtualMachineScaleSet extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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

  // network_interface - computed: true, optional: false, required: false
  public networkInterface(index: string) {
    return new DataAzurermVirtualMachineScaleSetNetworkInterface(this, 'network_interface', index);
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermVirtualMachineScaleSetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermVirtualMachineScaleSetTimeouts ) {
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
