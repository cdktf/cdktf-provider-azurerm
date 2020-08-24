// https://www.terraform.io/docs/providers/azurerm/r/lb_nat_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LbNatRuleConfig extends TerraformMetaArguments {
  readonly backendPort: number;
  readonly enableFloatingIp?: boolean;
  readonly enableTcpReset?: boolean;
  readonly frontendIpConfigurationName: string;
  readonly frontendPort: number;
  readonly idleTimeoutInMinutes?: number;
  readonly loadbalancerId: string;
  readonly name: string;
  readonly protocol: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: LbNatRuleTimeouts;
}
export interface LbNatRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class LbNatRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LbNatRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_lb_nat_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backendPort = config.backendPort;
    this._enableFloatingIp = config.enableFloatingIp;
    this._enableTcpReset = config.enableTcpReset;
    this._frontendIpConfigurationName = config.frontendIpConfigurationName;
    this._frontendPort = config.frontendPort;
    this._idleTimeoutInMinutes = config.idleTimeoutInMinutes;
    this._loadbalancerId = config.loadbalancerId;
    this._name = config.name;
    this._protocol = config.protocol;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_ip_configuration_id - computed: true, optional: false, required: true
  public get backendIpConfigurationId() {
    return this.getStringAttribute('backend_ip_configuration_id');
  }

  // backend_port - computed: false, optional: false, required: true
  private _backendPort: number;
  public get backendPort() {
    return this._backendPort;
  }
  public set backendPort(value: number) {
    this._backendPort = value;
  }

  // enable_floating_ip - computed: true, optional: true, required: false
  private _enableFloatingIp?: boolean;
  public get enableFloatingIp() {
    return this._enableFloatingIp ?? this.getBooleanAttribute('enable_floating_ip');
  }
  public set enableFloatingIp(value: boolean | undefined) {
    this._enableFloatingIp = value;
  }

  // enable_tcp_reset - computed: false, optional: true, required: false
  private _enableTcpReset?: boolean;
  public get enableTcpReset() {
    return this._enableTcpReset;
  }
  public set enableTcpReset(value: boolean | undefined) {
    this._enableTcpReset = value;
  }

  // frontend_ip_configuration_id - computed: true, optional: false, required: true
  public get frontendIpConfigurationId() {
    return this.getStringAttribute('frontend_ip_configuration_id');
  }

  // frontend_ip_configuration_name - computed: false, optional: false, required: true
  private _frontendIpConfigurationName: string;
  public get frontendIpConfigurationName() {
    return this._frontendIpConfigurationName;
  }
  public set frontendIpConfigurationName(value: string) {
    this._frontendIpConfigurationName = value;
  }

  // frontend_port - computed: false, optional: false, required: true
  private _frontendPort: number;
  public get frontendPort() {
    return this._frontendPort;
  }
  public set frontendPort(value: number) {
    this._frontendPort = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // idle_timeout_in_minutes - computed: true, optional: true, required: false
  private _idleTimeoutInMinutes?: number;
  public get idleTimeoutInMinutes() {
    return this._idleTimeoutInMinutes ?? this.getNumberAttribute('idle_timeout_in_minutes');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LbNatRuleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LbNatRuleTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend_port: this._backendPort,
      enable_floating_ip: this._enableFloatingIp,
      enable_tcp_reset: this._enableTcpReset,
      frontend_ip_configuration_name: this._frontendIpConfigurationName,
      frontend_port: this._frontendPort,
      idle_timeout_in_minutes: this._idleTimeoutInMinutes,
      loadbalancer_id: this._loadbalancerId,
      name: this._name,
      protocol: this._protocol,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
