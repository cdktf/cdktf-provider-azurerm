// https://www.terraform.io/docs/providers/azurerm/r/lb_outbound_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbOutboundRuleConfig extends cdktf.TerraformMetaArguments {
  readonly allocatedOutboundPorts?: number;
  readonly backendAddressPoolId: string;
  readonly enableTcpReset?: boolean;
  readonly idleTimeoutInMinutes?: number;
  readonly loadbalancerId: string;
  readonly name: string;
  readonly protocol: string;
  readonly resourceGroupName: string;
  /** frontend_ip_configuration block */
  readonly frontendIpConfiguration?: LbOutboundRuleFrontendIpConfiguration[];
  /** timeouts block */
  readonly timeouts?: LbOutboundRuleTimeouts;
}
export interface LbOutboundRuleFrontendIpConfiguration {
  readonly name: string;
}

function lbOutboundRuleFrontendIpConfigurationToTerraform(struct?: LbOutboundRuleFrontendIpConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface LbOutboundRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function lbOutboundRuleTimeoutsToTerraform(struct?: LbOutboundRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class LbOutboundRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LbOutboundRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_lb_outbound_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allocatedOutboundPorts = config.allocatedOutboundPorts;
    this._backendAddressPoolId = config.backendAddressPoolId;
    this._enableTcpReset = config.enableTcpReset;
    this._idleTimeoutInMinutes = config.idleTimeoutInMinutes;
    this._loadbalancerId = config.loadbalancerId;
    this._name = config.name;
    this._protocol = config.protocol;
    this._resourceGroupName = config.resourceGroupName;
    this._frontendIpConfiguration = config.frontendIpConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocated_outbound_ports - computed: false, optional: true, required: false
  private _allocatedOutboundPorts?: number;
  public get allocatedOutboundPorts() {
    return this.getNumberAttribute('allocated_outbound_ports');
  }
  public set allocatedOutboundPorts(value: number ) {
    this._allocatedOutboundPorts = value;
  }
  public resetAllocatedOutboundPorts() {
    this._allocatedOutboundPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedOutboundPortsInput() {
    return this._allocatedOutboundPorts
  }

  // backend_address_pool_id - computed: false, optional: false, required: true
  private _backendAddressPoolId: string;
  public get backendAddressPoolId() {
    return this.getStringAttribute('backend_address_pool_id');
  }
  public set backendAddressPoolId(value: string) {
    this._backendAddressPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendAddressPoolIdInput() {
    return this._backendAddressPoolId
  }

  // enable_tcp_reset - computed: false, optional: true, required: false
  private _enableTcpReset?: boolean;
  public get enableTcpReset() {
    return this.getBooleanAttribute('enable_tcp_reset');
  }
  public set enableTcpReset(value: boolean ) {
    this._enableTcpReset = value;
  }
  public resetEnableTcpReset() {
    this._enableTcpReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTcpResetInput() {
    return this._enableTcpReset
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _idleTimeoutInMinutes?: number;
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: number ) {
    this._idleTimeoutInMinutes = value;
  }
  public resetIdleTimeoutInMinutes() {
    this._idleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMinutesInput() {
    return this._idleTimeoutInMinutes
  }

  // loadbalancer_id - computed: false, optional: false, required: true
  private _loadbalancerId: string;
  public get loadbalancerId() {
    return this.getStringAttribute('loadbalancer_id');
  }
  public set loadbalancerId(value: string) {
    this._loadbalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerIdInput() {
    return this._loadbalancerId
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

  // protocol - computed: false, optional: false, required: true
  private _protocol: string;
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
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

  // frontend_ip_configuration - computed: false, optional: true, required: false
  private _frontendIpConfiguration?: LbOutboundRuleFrontendIpConfiguration[];
  public get frontendIpConfiguration() {
    return this.interpolationForAttribute('frontend_ip_configuration') as any;
  }
  public set frontendIpConfiguration(value: LbOutboundRuleFrontendIpConfiguration[] ) {
    this._frontendIpConfiguration = value;
  }
  public resetFrontendIpConfiguration() {
    this._frontendIpConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendIpConfigurationInput() {
    return this._frontendIpConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LbOutboundRuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LbOutboundRuleTimeouts ) {
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
      allocated_outbound_ports: cdktf.numberToTerraform(this._allocatedOutboundPorts),
      backend_address_pool_id: cdktf.stringToTerraform(this._backendAddressPoolId),
      enable_tcp_reset: cdktf.booleanToTerraform(this._enableTcpReset),
      idle_timeout_in_minutes: cdktf.numberToTerraform(this._idleTimeoutInMinutes),
      loadbalancer_id: cdktf.stringToTerraform(this._loadbalancerId),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      frontend_ip_configuration: cdktf.listMapper(lbOutboundRuleFrontendIpConfigurationToTerraform)(this._frontendIpConfiguration),
      timeouts: lbOutboundRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
