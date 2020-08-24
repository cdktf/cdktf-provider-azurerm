// https://www.terraform.io/docs/providers/azurerm/r/lb_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LbRuleConfig extends TerraformMetaArguments {
  readonly backendAddressPoolId?: string;
  readonly backendPort: number;
  readonly disableOutboundSnat?: boolean;
  readonly enableFloatingIp?: boolean;
  readonly enableTcpReset?: boolean;
  readonly frontendIpConfigurationName: string;
  readonly frontendPort: number;
  readonly idleTimeoutInMinutes?: number;
  readonly loadDistribution?: string;
  readonly loadbalancerId: string;
  readonly name: string;
  readonly probeId?: string;
  readonly protocol: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: LbRuleTimeouts;
}
export interface LbRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class LbRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LbRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_lb_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backendAddressPoolId = config.backendAddressPoolId;
    this._backendPort = config.backendPort;
    this._disableOutboundSnat = config.disableOutboundSnat;
    this._enableFloatingIp = config.enableFloatingIp;
    this._enableTcpReset = config.enableTcpReset;
    this._frontendIpConfigurationName = config.frontendIpConfigurationName;
    this._frontendPort = config.frontendPort;
    this._idleTimeoutInMinutes = config.idleTimeoutInMinutes;
    this._loadDistribution = config.loadDistribution;
    this._loadbalancerId = config.loadbalancerId;
    this._name = config.name;
    this._probeId = config.probeId;
    this._protocol = config.protocol;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_address_pool_id - computed: true, optional: true, required: false
  private _backendAddressPoolId?: string;
  public get backendAddressPoolId() {
    return this._backendAddressPoolId ?? this.getStringAttribute('backend_address_pool_id');
  }
  public set backendAddressPoolId(value: string | undefined) {
    this._backendAddressPoolId = value;
  }

  // backend_port - computed: false, optional: false, required: true
  private _backendPort: number;
  public get backendPort() {
    return this._backendPort;
  }
  public set backendPort(value: number) {
    this._backendPort = value;
  }

  // disable_outbound_snat - computed: false, optional: true, required: false
  private _disableOutboundSnat?: boolean;
  public get disableOutboundSnat() {
    return this._disableOutboundSnat;
  }
  public set disableOutboundSnat(value: boolean | undefined) {
    this._disableOutboundSnat = value;
  }

  // enable_floating_ip - computed: false, optional: true, required: false
  private _enableFloatingIp?: boolean;
  public get enableFloatingIp() {
    return this._enableFloatingIp;
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

  // load_distribution - computed: true, optional: true, required: false
  private _loadDistribution?: string;
  public get loadDistribution() {
    return this._loadDistribution ?? this.getStringAttribute('load_distribution');
  }
  public set loadDistribution(value: string | undefined) {
    this._loadDistribution = value;
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

  // probe_id - computed: true, optional: true, required: false
  private _probeId?: string;
  public get probeId() {
    return this._probeId ?? this.getStringAttribute('probe_id');
  }
  public set probeId(value: string | undefined) {
    this._probeId = value;
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
  private _timeouts?: LbRuleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LbRuleTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend_address_pool_id: this._backendAddressPoolId,
      backend_port: this._backendPort,
      disable_outbound_snat: this._disableOutboundSnat,
      enable_floating_ip: this._enableFloatingIp,
      enable_tcp_reset: this._enableTcpReset,
      frontend_ip_configuration_name: this._frontendIpConfigurationName,
      frontend_port: this._frontendPort,
      idle_timeout_in_minutes: this._idleTimeoutInMinutes,
      load_distribution: this._loadDistribution,
      loadbalancer_id: this._loadbalancerId,
      name: this._name,
      probe_id: this._probeId,
      protocol: this._protocol,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
