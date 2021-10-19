// https://www.terraform.io/docs/providers/azurerm/r/lb_probe.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbProbeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_probe.html#interval_in_seconds LbProbe#interval_in_seconds}
  */
  readonly intervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_probe.html#loadbalancer_id LbProbe#loadbalancer_id}
  */
  readonly loadbalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_probe.html#name LbProbe#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_probe.html#number_of_probes LbProbe#number_of_probes}
  */
  readonly numberOfProbes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_probe.html#port LbProbe#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_probe.html#protocol LbProbe#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_probe.html#request_path LbProbe#request_path}
  */
  readonly requestPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_probe.html#resource_group_name LbProbe#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_probe.html#timeouts LbProbe#timeouts}
  */
  readonly timeouts?: LbProbeTimeouts;
}
export interface LbProbeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_probe.html#create LbProbe#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_probe.html#delete LbProbe#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_probe.html#read LbProbe#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_probe.html#update LbProbe#update}
  */
  readonly update?: string;
}

function lbProbeTimeoutsToTerraform(struct?: LbProbeTimeoutsOutputReference | LbProbeTimeouts): any {
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

export class LbProbeTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/lb_probe.html azurerm_lb_probe}
*/
export class LbProbe extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_lb_probe";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/lb_probe.html azurerm_lb_probe} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbProbeConfig
  */
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
  private _intervalInSeconds?: number | undefined; 
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }
  public set intervalInSeconds(value: number | undefined) {
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
  private _loadbalancerId?: string; 
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

  // number_of_probes - computed: false, optional: true, required: false
  private _numberOfProbes?: number | undefined; 
  public get numberOfProbes() {
    return this.getNumberAttribute('number_of_probes');
  }
  public set numberOfProbes(value: number | undefined) {
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
  private _port?: number; 
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
  private _protocol?: string | undefined; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string | undefined) {
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
  private _requestPath?: string | undefined; 
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }
  public set requestPath(value: string | undefined) {
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
  private _timeouts?: LbProbeTimeouts | undefined; 
  private __timeoutsOutput = new LbProbeTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: LbProbeTimeouts | undefined) {
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
