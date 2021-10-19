// https://www.terraform.io/docs/providers/azurerm/r/lb_outbound_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbOutboundRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_outbound_rule.html#allocated_outbound_ports LbOutboundRule#allocated_outbound_ports}
  */
  readonly allocatedOutboundPorts?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_outbound_rule.html#backend_address_pool_id LbOutboundRule#backend_address_pool_id}
  */
  readonly backendAddressPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_outbound_rule.html#enable_tcp_reset LbOutboundRule#enable_tcp_reset}
  */
  readonly enableTcpReset?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_outbound_rule.html#idle_timeout_in_minutes LbOutboundRule#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_outbound_rule.html#loadbalancer_id LbOutboundRule#loadbalancer_id}
  */
  readonly loadbalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_outbound_rule.html#name LbOutboundRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_outbound_rule.html#protocol LbOutboundRule#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_outbound_rule.html#resource_group_name LbOutboundRule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * frontend_ip_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_outbound_rule.html#frontend_ip_configuration LbOutboundRule#frontend_ip_configuration}
  */
  readonly frontendIpConfiguration?: LbOutboundRuleFrontendIpConfiguration[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_outbound_rule.html#timeouts LbOutboundRule#timeouts}
  */
  readonly timeouts?: LbOutboundRuleTimeouts;
}
export interface LbOutboundRuleFrontendIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_outbound_rule.html#name LbOutboundRule#name}
  */
  readonly name: string;
}

function lbOutboundRuleFrontendIpConfigurationToTerraform(struct?: LbOutboundRuleFrontendIpConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface LbOutboundRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_outbound_rule.html#create LbOutboundRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_outbound_rule.html#delete LbOutboundRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_outbound_rule.html#read LbOutboundRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_outbound_rule.html#update LbOutboundRule#update}
  */
  readonly update?: string;
}

function lbOutboundRuleTimeoutsToTerraform(struct?: LbOutboundRuleTimeoutsOutputReference | LbOutboundRuleTimeouts): any {
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

export class LbOutboundRuleTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/lb_outbound_rule.html azurerm_lb_outbound_rule}
*/
export class LbOutboundRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_lb_outbound_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/lb_outbound_rule.html azurerm_lb_outbound_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbOutboundRuleConfig
  */
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
  private _allocatedOutboundPorts?: number | undefined; 
  public get allocatedOutboundPorts() {
    return this.getNumberAttribute('allocated_outbound_ports');
  }
  public set allocatedOutboundPorts(value: number | undefined) {
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
  private _backendAddressPoolId?: string; 
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
  private _enableTcpReset?: boolean | cdktf.IResolvable | undefined; 
  public get enableTcpReset() {
    return this.getBooleanAttribute('enable_tcp_reset') as any;
  }
  public set enableTcpReset(value: boolean | cdktf.IResolvable | undefined) {
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

  // frontend_ip_configuration - computed: false, optional: true, required: false
  private _frontendIpConfiguration?: LbOutboundRuleFrontendIpConfiguration[] | undefined; 
  public get frontendIpConfiguration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('frontend_ip_configuration') as any;
  }
  public set frontendIpConfiguration(value: LbOutboundRuleFrontendIpConfiguration[] | undefined) {
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
  private _timeouts?: LbOutboundRuleTimeouts | undefined; 
  private __timeoutsOutput = new LbOutboundRuleTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: LbOutboundRuleTimeouts | undefined) {
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
