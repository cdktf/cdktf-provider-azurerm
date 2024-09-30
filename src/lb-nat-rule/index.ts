// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lb_nat_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbNatRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lb_nat_rule#backend_address_pool_id LbNatRule#backend_address_pool_id}
  */
  readonly backendAddressPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lb_nat_rule#backend_port LbNatRule#backend_port}
  */
  readonly backendPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lb_nat_rule#enable_floating_ip LbNatRule#enable_floating_ip}
  */
  readonly enableFloatingIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lb_nat_rule#enable_tcp_reset LbNatRule#enable_tcp_reset}
  */
  readonly enableTcpReset?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lb_nat_rule#frontend_ip_configuration_name LbNatRule#frontend_ip_configuration_name}
  */
  readonly frontendIpConfigurationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lb_nat_rule#frontend_port LbNatRule#frontend_port}
  */
  readonly frontendPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lb_nat_rule#frontend_port_end LbNatRule#frontend_port_end}
  */
  readonly frontendPortEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lb_nat_rule#frontend_port_start LbNatRule#frontend_port_start}
  */
  readonly frontendPortStart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lb_nat_rule#id LbNatRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lb_nat_rule#idle_timeout_in_minutes LbNatRule#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lb_nat_rule#loadbalancer_id LbNatRule#loadbalancer_id}
  */
  readonly loadbalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lb_nat_rule#name LbNatRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lb_nat_rule#protocol LbNatRule#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lb_nat_rule#resource_group_name LbNatRule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lb_nat_rule#timeouts LbNatRule#timeouts}
  */
  readonly timeouts?: LbNatRuleTimeouts;
}
export interface LbNatRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lb_nat_rule#create LbNatRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lb_nat_rule#delete LbNatRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lb_nat_rule#read LbNatRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lb_nat_rule#update LbNatRule#update}
  */
  readonly update?: string;
}

export function lbNatRuleTimeoutsToTerraform(struct?: LbNatRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function lbNatRuleTimeoutsToHclTerraform(struct?: LbNatRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbNatRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LbNatRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbNatRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lb_nat_rule azurerm_lb_nat_rule}
*/
export class LbNatRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_lb_nat_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbNatRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbNatRule to import
  * @param importFromId The id of the existing LbNatRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lb_nat_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbNatRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_lb_nat_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/lb_nat_rule azurerm_lb_nat_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbNatRuleConfig
  */
  public constructor(scope: Construct, id: string, config: LbNatRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_lb_nat_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backendAddressPoolId = config.backendAddressPoolId;
    this._backendPort = config.backendPort;
    this._enableFloatingIp = config.enableFloatingIp;
    this._enableTcpReset = config.enableTcpReset;
    this._frontendIpConfigurationName = config.frontendIpConfigurationName;
    this._frontendPort = config.frontendPort;
    this._frontendPortEnd = config.frontendPortEnd;
    this._frontendPortStart = config.frontendPortStart;
    this._id = config.id;
    this._idleTimeoutInMinutes = config.idleTimeoutInMinutes;
    this._loadbalancerId = config.loadbalancerId;
    this._name = config.name;
    this._protocol = config.protocol;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_address_pool_id - computed: false, optional: true, required: false
  private _backendAddressPoolId?: string; 
  public get backendAddressPoolId() {
    return this.getStringAttribute('backend_address_pool_id');
  }
  public set backendAddressPoolId(value: string) {
    this._backendAddressPoolId = value;
  }
  public resetBackendAddressPoolId() {
    this._backendAddressPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendAddressPoolIdInput() {
    return this._backendAddressPoolId;
  }

  // backend_ip_configuration_id - computed: true, optional: false, required: false
  public get backendIpConfigurationId() {
    return this.getStringAttribute('backend_ip_configuration_id');
  }

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
    return this._backendPort;
  }

  // enable_floating_ip - computed: true, optional: true, required: false
  private _enableFloatingIp?: boolean | cdktf.IResolvable; 
  public get enableFloatingIp() {
    return this.getBooleanAttribute('enable_floating_ip');
  }
  public set enableFloatingIp(value: boolean | cdktf.IResolvable) {
    this._enableFloatingIp = value;
  }
  public resetEnableFloatingIp() {
    this._enableFloatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFloatingIpInput() {
    return this._enableFloatingIp;
  }

  // enable_tcp_reset - computed: false, optional: true, required: false
  private _enableTcpReset?: boolean | cdktf.IResolvable; 
  public get enableTcpReset() {
    return this.getBooleanAttribute('enable_tcp_reset');
  }
  public set enableTcpReset(value: boolean | cdktf.IResolvable) {
    this._enableTcpReset = value;
  }
  public resetEnableTcpReset() {
    this._enableTcpReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTcpResetInput() {
    return this._enableTcpReset;
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
    return this._frontendIpConfigurationName;
  }

  // frontend_port - computed: false, optional: true, required: false
  private _frontendPort?: number; 
  public get frontendPort() {
    return this.getNumberAttribute('frontend_port');
  }
  public set frontendPort(value: number) {
    this._frontendPort = value;
  }
  public resetFrontendPort() {
    this._frontendPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendPortInput() {
    return this._frontendPort;
  }

  // frontend_port_end - computed: false, optional: true, required: false
  private _frontendPortEnd?: number; 
  public get frontendPortEnd() {
    return this.getNumberAttribute('frontend_port_end');
  }
  public set frontendPortEnd(value: number) {
    this._frontendPortEnd = value;
  }
  public resetFrontendPortEnd() {
    this._frontendPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendPortEndInput() {
    return this._frontendPortEnd;
  }

  // frontend_port_start - computed: false, optional: true, required: false
  private _frontendPortStart?: number; 
  public get frontendPortStart() {
    return this.getNumberAttribute('frontend_port_start');
  }
  public set frontendPortStart(value: number) {
    this._frontendPortStart = value;
  }
  public resetFrontendPortStart() {
    this._frontendPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendPortStartInput() {
    return this._frontendPortStart;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _idleTimeoutInMinutes?: number; 
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: number) {
    this._idleTimeoutInMinutes = value;
  }
  public resetIdleTimeoutInMinutes() {
    this._idleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMinutesInput() {
    return this._idleTimeoutInMinutes;
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
    return this._loadbalancerId;
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
    return this._name;
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
    return this._protocol;
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
    return this._resourceGroupName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LbNatRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LbNatRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend_address_pool_id: cdktf.stringToTerraform(this._backendAddressPoolId),
      backend_port: cdktf.numberToTerraform(this._backendPort),
      enable_floating_ip: cdktf.booleanToTerraform(this._enableFloatingIp),
      enable_tcp_reset: cdktf.booleanToTerraform(this._enableTcpReset),
      frontend_ip_configuration_name: cdktf.stringToTerraform(this._frontendIpConfigurationName),
      frontend_port: cdktf.numberToTerraform(this._frontendPort),
      frontend_port_end: cdktf.numberToTerraform(this._frontendPortEnd),
      frontend_port_start: cdktf.numberToTerraform(this._frontendPortStart),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout_in_minutes: cdktf.numberToTerraform(this._idleTimeoutInMinutes),
      loadbalancer_id: cdktf.stringToTerraform(this._loadbalancerId),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: lbNatRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend_address_pool_id: {
        value: cdktf.stringToHclTerraform(this._backendAddressPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend_port: {
        value: cdktf.numberToHclTerraform(this._backendPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_floating_ip: {
        value: cdktf.booleanToHclTerraform(this._enableFloatingIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_tcp_reset: {
        value: cdktf.booleanToHclTerraform(this._enableTcpReset),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      frontend_ip_configuration_name: {
        value: cdktf.stringToHclTerraform(this._frontendIpConfigurationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frontend_port: {
        value: cdktf.numberToHclTerraform(this._frontendPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      frontend_port_end: {
        value: cdktf.numberToHclTerraform(this._frontendPortEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      frontend_port_start: {
        value: cdktf.numberToHclTerraform(this._frontendPortStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_timeout_in_minutes: {
        value: cdktf.numberToHclTerraform(this._idleTimeoutInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      loadbalancer_id: {
        value: cdktf.stringToHclTerraform(this._loadbalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: lbNatRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LbNatRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
