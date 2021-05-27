// https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbBackendAddressPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool.html#loadbalancer_id LbBackendAddressPool#loadbalancer_id}
  */
  readonly loadbalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool.html#name LbBackendAddressPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool.html#resource_group_name LbBackendAddressPool#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * backend_address block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool.html#backend_address LbBackendAddressPool#backend_address}
  */
  readonly backendAddress?: LbBackendAddressPoolBackendAddress[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool.html#timeouts LbBackendAddressPool#timeouts}
  */
  readonly timeouts?: LbBackendAddressPoolTimeouts;
}
export interface LbBackendAddressPoolBackendAddress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool.html#ip_address LbBackendAddressPool#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool.html#name LbBackendAddressPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool.html#virtual_network_id LbBackendAddressPool#virtual_network_id}
  */
  readonly virtualNetworkId: string;
}

function lbBackendAddressPoolBackendAddressToTerraform(struct?: LbBackendAddressPoolBackendAddress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
  }
}

export interface LbBackendAddressPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool.html#create LbBackendAddressPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool.html#delete LbBackendAddressPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool.html#read LbBackendAddressPool#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool.html#update LbBackendAddressPool#update}
  */
  readonly update?: string;
}

function lbBackendAddressPoolTimeoutsToTerraform(struct?: LbBackendAddressPoolTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool.html azurerm_lb_backend_address_pool}
*/
export class LbBackendAddressPool extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool.html azurerm_lb_backend_address_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbBackendAddressPoolConfig
  */
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
    this._backendAddress = config.backendAddress;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_ip_configurations - computed: true, optional: false, required: false
  public get backendIpConfigurations() {
    return this.getListAttribute('backend_ip_configurations');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balancing_rules - computed: true, optional: false, required: false
  public get loadBalancingRules() {
    return this.getListAttribute('load_balancing_rules');
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

  // outbound_rules - computed: true, optional: false, required: false
  public get outboundRules() {
    return this.getListAttribute('outbound_rules');
  }

  // resource_group_name - computed: true, optional: true, required: false
  private _resourceGroupName?: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // backend_address - computed: false, optional: true, required: false
  private _backendAddress?: LbBackendAddressPoolBackendAddress[];
  public get backendAddress() {
    return this.interpolationForAttribute('backend_address') as any;
  }
  public set backendAddress(value: LbBackendAddressPoolBackendAddress[] ) {
    this._backendAddress = value;
  }
  public resetBackendAddress() {
    this._backendAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendAddressInput() {
    return this._backendAddress
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LbBackendAddressPoolTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LbBackendAddressPoolTimeouts ) {
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
      loadbalancer_id: cdktf.stringToTerraform(this._loadbalancerId),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      backend_address: cdktf.listMapper(lbBackendAddressPoolBackendAddressToTerraform)(this._backendAddress),
      timeouts: lbBackendAddressPoolTimeoutsToTerraform(this._timeouts),
    };
  }
}
