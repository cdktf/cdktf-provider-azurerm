// https://www.terraform.io/docs/providers/azurerm/r/lb_nat_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbNatPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_nat_pool.html#backend_port LbNatPool#backend_port}
  */
  readonly backendPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_nat_pool.html#floating_ip_enabled LbNatPool#floating_ip_enabled}
  */
  readonly floatingIpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_nat_pool.html#frontend_ip_configuration_name LbNatPool#frontend_ip_configuration_name}
  */
  readonly frontendIpConfigurationName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_nat_pool.html#frontend_port_end LbNatPool#frontend_port_end}
  */
  readonly frontendPortEnd: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_nat_pool.html#frontend_port_start LbNatPool#frontend_port_start}
  */
  readonly frontendPortStart: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_nat_pool.html#idle_timeout_in_minutes LbNatPool#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_nat_pool.html#loadbalancer_id LbNatPool#loadbalancer_id}
  */
  readonly loadbalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_nat_pool.html#name LbNatPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_nat_pool.html#protocol LbNatPool#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_nat_pool.html#resource_group_name LbNatPool#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_nat_pool.html#tcp_reset_enabled LbNatPool#tcp_reset_enabled}
  */
  readonly tcpResetEnabled?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_nat_pool.html#timeouts LbNatPool#timeouts}
  */
  readonly timeouts?: LbNatPoolTimeouts;
}
export interface LbNatPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_nat_pool.html#create LbNatPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_nat_pool.html#delete LbNatPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_nat_pool.html#read LbNatPool#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_nat_pool.html#update LbNatPool#update}
  */
  readonly update?: string;
}

function lbNatPoolTimeoutsToTerraform(struct?: LbNatPoolTimeoutsOutputReference | LbNatPoolTimeouts): any {
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

export class LbNatPoolTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/lb_nat_pool.html azurerm_lb_nat_pool}
*/
export class LbNatPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_lb_nat_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/lb_nat_pool.html azurerm_lb_nat_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbNatPoolConfig
  */
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
    this._floatingIpEnabled = config.floatingIpEnabled;
    this._frontendIpConfigurationName = config.frontendIpConfigurationName;
    this._frontendPortEnd = config.frontendPortEnd;
    this._frontendPortStart = config.frontendPortStart;
    this._idleTimeoutInMinutes = config.idleTimeoutInMinutes;
    this._loadbalancerId = config.loadbalancerId;
    this._name = config.name;
    this._protocol = config.protocol;
    this._resourceGroupName = config.resourceGroupName;
    this._tcpResetEnabled = config.tcpResetEnabled;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_port - computed: false, optional: false, required: true
  private _backendPort?: number; 
  public get backendPort() {
    return this.getNumberAttribute('backend_port');
  }
  public set backendPort(value: number) {
    this._backendPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPortInput() {
    return this._backendPort
  }

  // floating_ip_enabled - computed: false, optional: true, required: false
  private _floatingIpEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get floatingIpEnabled() {
    return this.getBooleanAttribute('floating_ip_enabled') as any;
  }
  public set floatingIpEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._floatingIpEnabled = value;
  }
  public resetFloatingIpEnabled() {
    this._floatingIpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpEnabledInput() {
    return this._floatingIpEnabled
  }

  // frontend_ip_configuration_id - computed: true, optional: false, required: false
  public get frontendIpConfigurationId() {
    return this.getStringAttribute('frontend_ip_configuration_id');
  }

  // frontend_ip_configuration_name - computed: false, optional: false, required: true
  private _frontendIpConfigurationName?: string; 
  public get frontendIpConfigurationName() {
    return this.getStringAttribute('frontend_ip_configuration_name');
  }
  public set frontendIpConfigurationName(value: string) {
    this._frontendIpConfigurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendIpConfigurationNameInput() {
    return this._frontendIpConfigurationName
  }

  // frontend_port_end - computed: false, optional: false, required: true
  private _frontendPortEnd?: number; 
  public get frontendPortEnd() {
    return this.getNumberAttribute('frontend_port_end');
  }
  public set frontendPortEnd(value: number) {
    this._frontendPortEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendPortEndInput() {
    return this._frontendPortEnd
  }

  // frontend_port_start - computed: false, optional: false, required: true
  private _frontendPortStart?: number; 
  public get frontendPortStart() {
    return this.getNumberAttribute('frontend_port_start');
  }
  public set frontendPortStart(value: number) {
    this._frontendPortStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendPortStartInput() {
    return this._frontendPortStart
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _idleTimeoutInMinutes?: number | undefined; 
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: number | undefined) {
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
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

  // tcp_reset_enabled - computed: false, optional: true, required: false
  private _tcpResetEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get tcpResetEnabled() {
    return this.getBooleanAttribute('tcp_reset_enabled') as any;
  }
  public set tcpResetEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._tcpResetEnabled = value;
  }
  public resetTcpResetEnabled() {
    this._tcpResetEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpResetEnabledInput() {
    return this._tcpResetEnabled
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LbNatPoolTimeouts | undefined; 
  private __timeoutsOutput = new LbNatPoolTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: LbNatPoolTimeouts | undefined) {
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
      backend_port: cdktf.numberToTerraform(this._backendPort),
      floating_ip_enabled: cdktf.booleanToTerraform(this._floatingIpEnabled),
      frontend_ip_configuration_name: cdktf.stringToTerraform(this._frontendIpConfigurationName),
      frontend_port_end: cdktf.numberToTerraform(this._frontendPortEnd),
      frontend_port_start: cdktf.numberToTerraform(this._frontendPortStart),
      idle_timeout_in_minutes: cdktf.numberToTerraform(this._idleTimeoutInMinutes),
      loadbalancer_id: cdktf.stringToTerraform(this._loadbalancerId),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tcp_reset_enabled: cdktf.booleanToTerraform(this._tcpResetEnabled),
      timeouts: lbNatPoolTimeoutsToTerraform(this._timeouts),
    };
  }
}
