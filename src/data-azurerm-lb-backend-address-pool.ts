// https://www.terraform.io/docs/providers/azurerm/d/lb_backend_address_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermLbBackendAddressPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/lb_backend_address_pool.html#loadbalancer_id DataAzurermLbBackendAddressPool#loadbalancer_id}
  */
  readonly loadbalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/lb_backend_address_pool.html#name DataAzurermLbBackendAddressPool#name}
  */
  readonly name: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/lb_backend_address_pool.html#timeouts DataAzurermLbBackendAddressPool#timeouts}
  */
  readonly timeouts?: DataAzurermLbBackendAddressPoolTimeouts;
}
export class DataAzurermLbBackendAddressPoolBackendAddress extends cdktf.ComplexComputedList {

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // virtual_network_id - computed: true, optional: false, required: false
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
}
export class DataAzurermLbBackendAddressPoolBackendIpConfigurations extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAzurermLbBackendAddressPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/lb_backend_address_pool.html#read DataAzurermLbBackendAddressPool#read}
  */
  readonly read?: string;
}

function dataAzurermLbBackendAddressPoolTimeoutsToTerraform(struct?: DataAzurermLbBackendAddressPoolTimeoutsOutputReference | DataAzurermLbBackendAddressPoolTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermLbBackendAddressPoolTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/lb_backend_address_pool.html azurerm_lb_backend_address_pool}
*/
export class DataAzurermLbBackendAddressPool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_lb_backend_address_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/lb_backend_address_pool.html azurerm_lb_backend_address_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermLbBackendAddressPoolConfig
  */
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

  // backend_address - computed: true, optional: false, required: false
  public backendAddress(index: string) {
    return new DataAzurermLbBackendAddressPoolBackendAddress(this, 'backend_address', index);
  }

  // backend_ip_configurations - computed: true, optional: false, required: false
  public backendIpConfigurations(index: string) {
    return new DataAzurermLbBackendAddressPoolBackendIpConfigurations(this, 'backend_ip_configurations', index);
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

  // outbound_rules - computed: true, optional: false, required: false
  public get outboundRules() {
    return this.getListAttribute('outbound_rules');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermLbBackendAddressPoolTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermLbBackendAddressPoolTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermLbBackendAddressPoolTimeouts | undefined) {
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
      timeouts: dataAzurermLbBackendAddressPoolTimeoutsToTerraform(this._timeouts),
    };
  }
}
