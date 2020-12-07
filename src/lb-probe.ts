// https://www.terraform.io/docs/providers/azurerm/r/lb_probe.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbProbeConfig extends cdktf.TerraformMetaArguments {
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

function lbProbeTimeoutsToTerraform(struct?: LbProbeTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class LbProbe extends cdktf.TerraformResource {

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
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval_in_seconds - computed: false, optional: true, required: false
  private _intervalInSeconds?: number;
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }
  public set intervalInSeconds(value: number ) {
    this._intervalInSeconds = value;
  }
  public resetIntervalInSeconds() {
    this._intervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInSecondsInput() {
    return this._intervalInSeconds
  }

  // load_balancer_rules - computed: true, optional: false, required: false
  public get loadBalancerRules() {
    return this.getListAttribute('load_balancer_rules');
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

  // number_of_probes - computed: false, optional: true, required: false
  private _numberOfProbes?: number;
  public get numberOfProbes() {
    return this.getNumberAttribute('number_of_probes');
  }
  public set numberOfProbes(value: number ) {
    this._numberOfProbes = value;
  }
  public resetNumberOfProbes() {
    this._numberOfProbes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfProbesInput() {
    return this._numberOfProbes
  }

  // port - computed: false, optional: false, required: true
  private _port: number;
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string;
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
  }

  // request_path - computed: false, optional: true, required: false
  private _requestPath?: string;
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }
  public set requestPath(value: string ) {
    this._requestPath = value;
  }
  public resetRequestPath() {
    this._requestPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPathInput() {
    return this._requestPath
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
  private _timeouts?: LbProbeTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LbProbeTimeouts ) {
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
      interval_in_seconds: cdktf.numberToTerraform(this._intervalInSeconds),
      loadbalancer_id: cdktf.stringToTerraform(this._loadbalancerId),
      name: cdktf.stringToTerraform(this._name),
      number_of_probes: cdktf.numberToTerraform(this._numberOfProbes),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      request_path: cdktf.stringToTerraform(this._requestPath),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: lbProbeTimeoutsToTerraform(this._timeouts),
    };
  }
}
