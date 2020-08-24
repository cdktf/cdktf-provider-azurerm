// https://www.terraform.io/docs/providers/azurerm/r/lb_outbound_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LbOutboundRuleConfig extends TerraformMetaArguments {
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
export interface LbOutboundRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class LbOutboundRule extends TerraformResource {

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
    return this._allocatedOutboundPorts;
  }
  public set allocatedOutboundPorts(value: number | undefined) {
    this._allocatedOutboundPorts = value;
  }

  // backend_address_pool_id - computed: false, optional: false, required: true
  private _backendAddressPoolId: string;
  public get backendAddressPoolId() {
    return this._backendAddressPoolId;
  }
  public set backendAddressPoolId(value: string) {
    this._backendAddressPoolId = value;
  }

  // enable_tcp_reset - computed: false, optional: true, required: false
  private _enableTcpReset?: boolean;
  public get enableTcpReset() {
    return this._enableTcpReset;
  }
  public set enableTcpReset(value: boolean | undefined) {
    this._enableTcpReset = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _idleTimeoutInMinutes?: number;
  public get idleTimeoutInMinutes() {
    return this._idleTimeoutInMinutes;
  }
  public set idleTimeoutInMinutes(value: number | undefined) {
    this._idleTimeoutInMinutes = value;
  }

  // loadbalancer_id - computed: false, optional: false, required: true
  private _loadbalancerId: string;
  public get loadbalancerId() {
    return this._loadbalancerId;
  }
  public set loadbalancerId(value: string) {
    this._loadbalancerId = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol: string;
  public get protocol() {
    return this._protocol;
  }
  public set protocol(value: string) {
    this._protocol = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // frontend_ip_configuration - computed: false, optional: true, required: false
  private _frontendIpConfiguration?: LbOutboundRuleFrontendIpConfiguration[];
  public get frontendIpConfiguration() {
    return this._frontendIpConfiguration;
  }
  public set frontendIpConfiguration(value: LbOutboundRuleFrontendIpConfiguration[] | undefined) {
    this._frontendIpConfiguration = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LbOutboundRuleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LbOutboundRuleTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocated_outbound_ports: this._allocatedOutboundPorts,
      backend_address_pool_id: this._backendAddressPoolId,
      enable_tcp_reset: this._enableTcpReset,
      idle_timeout_in_minutes: this._idleTimeoutInMinutes,
      loadbalancer_id: this._loadbalancerId,
      name: this._name,
      protocol: this._protocol,
      resource_group_name: this._resourceGroupName,
      frontend_ip_configuration: this._frontendIpConfiguration,
      timeouts: this._timeouts,
    };
  }
}
