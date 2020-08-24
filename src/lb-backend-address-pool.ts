// https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LbBackendAddressPoolConfig extends TerraformMetaArguments {
  readonly loadbalancerId: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: LbBackendAddressPoolTimeouts;
}
export interface LbBackendAddressPoolTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class LbBackendAddressPool extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LbBackendAddressPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_lb_backend_address_pool',
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

  // backend_ip_configurations - computed: true, optional: false, required: true
  public get backendIpConfigurations() {
    return this.getListAttribute('backend_ip_configurations');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // load_balancing_rules - computed: true, optional: false, required: true
  public get loadBalancingRules() {
    return this.getListAttribute('load_balancing_rules');
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LbBackendAddressPoolTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LbBackendAddressPoolTimeouts | undefined) {
    this._timeouts = value;
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
