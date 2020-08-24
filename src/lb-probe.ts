// https://www.terraform.io/docs/providers/azurerm/r/lb_probe.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LbProbeConfig extends TerraformMetaArguments {
  readonly intervalInSeconds?: number;
  readonly loadbalancerId: string;
  readonly name: string;
  readonly numberOfProbes?: number;
  readonly port: number;
  readonly protocol?: string;
  readonly requestPath?: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: LbProbeTimeouts;
}
export interface LbProbeTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class LbProbe extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LbProbeConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_lb_probe',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._intervalInSeconds = config.intervalInSeconds;
    this._loadbalancerId = config.loadbalancerId;
    this._name = config.name;
    this._numberOfProbes = config.numberOfProbes;
    this._port = config.port;
    this._protocol = config.protocol;
    this._requestPath = config.requestPath;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // interval_in_seconds - computed: false, optional: true, required: false
  private _intervalInSeconds?: number;
  public get intervalInSeconds() {
    return this._intervalInSeconds;
  }
  public set intervalInSeconds(value: number | undefined) {
    this._intervalInSeconds = value;
  }

  // load_balancer_rules - computed: true, optional: false, required: true
  public get loadBalancerRules() {
    return this.getListAttribute('load_balancer_rules');
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

  // number_of_probes - computed: false, optional: true, required: false
  private _numberOfProbes?: number;
  public get numberOfProbes() {
    return this._numberOfProbes;
  }
  public set numberOfProbes(value: number | undefined) {
    this._numberOfProbes = value;
  }

  // port - computed: false, optional: false, required: true
  private _port: number;
  public get port() {
    return this._port;
  }
  public set port(value: number) {
    this._port = value;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string;
  public get protocol() {
    return this._protocol ?? this.getStringAttribute('protocol');
  }
  public set protocol(value: string | undefined) {
    this._protocol = value;
  }

  // request_path - computed: false, optional: true, required: false
  private _requestPath?: string;
  public get requestPath() {
    return this._requestPath;
  }
  public set requestPath(value: string | undefined) {
    this._requestPath = value;
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
  private _timeouts?: LbProbeTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LbProbeTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      interval_in_seconds: this._intervalInSeconds,
      loadbalancer_id: this._loadbalancerId,
      name: this._name,
      number_of_probes: this._numberOfProbes,
      port: this._port,
      protocol: this._protocol,
      request_path: this._requestPath,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
