// https://www.terraform.io/docs/providers/azurerm/r/lb_nat_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LbNatPoolConfig extends TerraformMetaArguments {
  readonly backendPort: number;
  readonly frontendIpConfigurationName: string;
  readonly frontendPortEnd: number;
  readonly frontendPortStart: number;
  readonly loadbalancerId: string;
  readonly name: string;
  readonly protocol: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: LbNatPoolTimeouts;
}
export interface LbNatPoolTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class LbNatPool extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LbNatPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_lb_nat_pool',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backendPort = config.backendPort;
    this._frontendIpConfigurationName = config.frontendIpConfigurationName;
    this._frontendPortEnd = config.frontendPortEnd;
    this._frontendPortStart = config.frontendPortStart;
    this._loadbalancerId = config.loadbalancerId;
    this._name = config.name;
    this._protocol = config.protocol;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_port - computed: false, optional: false, required: true
  private _backendPort: number;
  public get backendPort() {
    return this._backendPort;
  }
  public set backendPort(value: number) {
    this._backendPort = value;
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

  // frontend_port_end - computed: false, optional: false, required: true
  private _frontendPortEnd: number;
  public get frontendPortEnd() {
    return this._frontendPortEnd;
  }
  public set frontendPortEnd(value: number) {
    this._frontendPortEnd = value;
  }

  // frontend_port_start - computed: false, optional: false, required: true
  private _frontendPortStart: number;
  public get frontendPortStart() {
    return this._frontendPortStart;
  }
  public set frontendPortStart(value: number) {
    this._frontendPortStart = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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
  private _timeouts?: LbNatPoolTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LbNatPoolTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      backend_port: this._backendPort,
      frontend_ip_configuration_name: this._frontendIpConfigurationName,
      frontend_port_end: this._frontendPortEnd,
      frontend_port_start: this._frontendPortStart,
      loadbalancer_id: this._loadbalancerId,
      name: this._name,
      protocol: this._protocol,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
