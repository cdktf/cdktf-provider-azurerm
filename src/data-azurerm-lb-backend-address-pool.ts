// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_lb_backend_address_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAzurermLbBackendAddressPoolConfig extends TerraformMetaArguments {
  readonly loadbalancerId: string;
  readonly name: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermLbBackendAddressPoolTimeouts;
}
export class DataAzurermLbBackendAddressPoolBackendIpConfigurations extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAzurermLbBackendAddressPoolTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermLbBackendAddressPool extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermLbBackendAddressPoolConfig) {
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
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_ip_configurations - computed: true, optional: false, required: true
  public backendIpConfigurations(index: string) {
    return new DataAzurermLbBackendAddressPoolBackendIpConfigurations(this, 'backend_ip_configurations', index);
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermLbBackendAddressPoolTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermLbBackendAddressPoolTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      loadbalancer_id: this._loadbalancerId,
      name: this._name,
      timeouts: this._timeouts,
    };
  }
}
