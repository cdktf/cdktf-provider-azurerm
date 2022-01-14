// https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbBackendAddressPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool#loadbalancer_id LbBackendAddressPool#loadbalancer_id}
  */
  readonly loadbalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool#name LbBackendAddressPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool#resource_group_name LbBackendAddressPool#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * backend_address block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool#backend_address LbBackendAddressPool#backend_address}
  */
  readonly backendAddress?: LbBackendAddressPoolBackendAddress[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool#timeouts LbBackendAddressPool#timeouts}
  */
  readonly timeouts?: LbBackendAddressPoolTimeouts;
  /**
  * tunnel_interface block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool#tunnel_interface LbBackendAddressPool#tunnel_interface}
  */
  readonly tunnelInterface?: LbBackendAddressPoolTunnelInterface[];
}
export interface LbBackendAddressPoolBackendAddress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool#ip_address LbBackendAddressPool#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool#name LbBackendAddressPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool#virtual_network_id LbBackendAddressPool#virtual_network_id}
  */
  readonly virtualNetworkId: string;
}

export function lbBackendAddressPoolBackendAddressToTerraform(struct?: LbBackendAddressPoolBackendAddress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
  }
}

export interface LbBackendAddressPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool#create LbBackendAddressPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool#delete LbBackendAddressPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool#read LbBackendAddressPool#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool#update LbBackendAddressPool#update}
  */
  readonly update?: string;
}

export function lbBackendAddressPoolTimeoutsToTerraform(struct?: LbBackendAddressPoolTimeoutsOutputReference | LbBackendAddressPoolTimeouts): any {
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

export class LbBackendAddressPoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LbBackendAddressPoolTimeouts | undefined {
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

  public set internalValue(value: LbBackendAddressPoolTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface LbBackendAddressPoolTunnelInterface {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool#identifier LbBackendAddressPool#identifier}
  */
  readonly identifier: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool#port LbBackendAddressPool#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool#protocol LbBackendAddressPool#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool#type LbBackendAddressPool#type}
  */
  readonly type: string;
}

export function lbBackendAddressPoolTunnelInterfaceToTerraform(struct?: LbBackendAddressPoolTunnelInterface): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifier: cdktf.numberToTerraform(struct!.identifier),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool azurerm_lb_backend_address_pool}
*/
export class LbBackendAddressPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_lb_backend_address_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool azurerm_lb_backend_address_pool} Resource
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
    this._timeouts.internalValue = config.timeouts;
    this._tunnelInterface = config.tunnelInterface;
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
    return this._resourceGroupName;
  }

  // backend_address - computed: false, optional: true, required: false
  private _backendAddress?: LbBackendAddressPoolBackendAddress[]; 
  public get backendAddress() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('backend_address') as any;
  }
  public set backendAddress(value: LbBackendAddressPoolBackendAddress[]) {
    this._backendAddress = value;
  }
  public resetBackendAddress() {
    this._backendAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendAddressInput() {
    return this._backendAddress;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LbBackendAddressPoolTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LbBackendAddressPoolTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tunnel_interface - computed: false, optional: true, required: false
  private _tunnelInterface?: LbBackendAddressPoolTunnelInterface[]; 
  public get tunnelInterface() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tunnel_interface') as any;
  }
  public set tunnelInterface(value: LbBackendAddressPoolTunnelInterface[]) {
    this._tunnelInterface = value;
  }
  public resetTunnelInterface() {
    this._tunnelInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceInput() {
    return this._tunnelInterface;
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
      timeouts: lbBackendAddressPoolTimeoutsToTerraform(this._timeouts.internalValue),
      tunnel_interface: cdktf.listMapper(lbBackendAddressPoolTunnelInterfaceToTerraform)(this._tunnelInterface),
    };
  }
}
