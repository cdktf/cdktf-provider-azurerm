// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_lb_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermLbRuleConfig extends TerraformMetaArguments {
  readonly loadbalancerId: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermLbRuleTimeouts;
}
export interface DataAzurermLbRuleTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermLbRule extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermLbRuleConfig) {
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
    this._loadbalancerId = config.loadbalancerId;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_address_pool_id - computed: true, optional: false, required: false
  public get backendAddressPoolId() {
    return this.getStringAttribute('backend_address_pool_id');
  }

  // backend_port - computed: true, optional: false, required: false
  public get backendPort() {
    return this.getNumberAttribute('backend_port');
  }

  // disable_outbound_snat - computed: true, optional: false, required: false
  public get disableOutboundSnat() {
    return this.getBooleanAttribute('disable_outbound_snat');
  }

  // enable_floating_ip - computed: true, optional: false, required: false
  public get enableFloatingIp() {
    return this.getBooleanAttribute('enable_floating_ip');
  }

  // enable_tcp_reset - computed: true, optional: false, required: false
  public get enableTcpReset() {
    return this.getBooleanAttribute('enable_tcp_reset');
  }

  // frontend_ip_configuration_name - computed: true, optional: false, required: false
  public get frontendIpConfigurationName() {
    return this.getStringAttribute('frontend_ip_configuration_name');
  }

  // frontend_port - computed: true, optional: false, required: false
  public get frontendPort() {
    return this.getNumberAttribute('frontend_port');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_timeout_in_minutes - computed: true, optional: false, required: false
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }

  // load_distribution - computed: true, optional: false, required: false
  public get loadDistribution() {
    return this.getStringAttribute('load_distribution');
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

  // probe_id - computed: true, optional: false, required: false
  public get probeId() {
    return this.getStringAttribute('probe_id');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
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
  private _timeouts?: DataAzurermLbRuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermLbRuleTimeouts ) {
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
      loadbalancer_id: this._loadbalancerId,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
