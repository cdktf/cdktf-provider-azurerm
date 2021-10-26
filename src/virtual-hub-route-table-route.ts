// https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table_route.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualHubRouteTableRouteAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table_route.html#destinations VirtualHubRouteTableRouteA#destinations}
  */
  readonly destinations: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table_route.html#destinations_type VirtualHubRouteTableRouteA#destinations_type}
  */
  readonly destinationsType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table_route.html#name VirtualHubRouteTableRouteA#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table_route.html#next_hop VirtualHubRouteTableRouteA#next_hop}
  */
  readonly nextHop: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table_route.html#next_hop_type VirtualHubRouteTableRouteA#next_hop_type}
  */
  readonly nextHopType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table_route.html#route_table_id VirtualHubRouteTableRouteA#route_table_id}
  */
  readonly routeTableId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table_route.html#timeouts VirtualHubRouteTableRouteA#timeouts}
  */
  readonly timeouts?: VirtualHubRouteTableRouteTimeouts;
}
export interface VirtualHubRouteTableRouteTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table_route.html#create VirtualHubRouteTableRouteA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table_route.html#delete VirtualHubRouteTableRouteA#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table_route.html#read VirtualHubRouteTableRouteA#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table_route.html#update VirtualHubRouteTableRouteA#update}
  */
  readonly update?: string;
}

function virtualHubRouteTableRouteTimeoutsToTerraform(struct?: VirtualHubRouteTableRouteTimeoutsOutputReference | VirtualHubRouteTableRouteTimeouts): any {
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

export class VirtualHubRouteTableRouteTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table_route.html azurerm_virtual_hub_route_table_route}
*/
export class VirtualHubRouteTableRouteA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_virtual_hub_route_table_route";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table_route.html azurerm_virtual_hub_route_table_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualHubRouteTableRouteAConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualHubRouteTableRouteAConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_hub_route_table_route',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._destinations = config.destinations;
    this._destinationsType = config.destinationsType;
    this._name = config.name;
    this._nextHop = config.nextHop;
    this._nextHopType = config.nextHopType;
    this._routeTableId = config.routeTableId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destinations - computed: false, optional: false, required: true
  private _destinations?: string[]; 
  public get destinations() {
    return this.getListAttribute('destinations');
  }
  public set destinations(value: string[]) {
    this._destinations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations
  }

  // destinations_type - computed: false, optional: false, required: true
  private _destinationsType?: string; 
  public get destinationsType() {
    return this.getStringAttribute('destinations_type');
  }
  public set destinationsType(value: string) {
    this._destinationsType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsTypeInput() {
    return this._destinationsType
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // next_hop - computed: false, optional: false, required: true
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop
  }

  // next_hop_type - computed: false, optional: true, required: false
  private _nextHopType?: string | undefined; 
  public get nextHopType() {
    return this.getStringAttribute('next_hop_type');
  }
  public set nextHopType(value: string | undefined) {
    this._nextHopType = value;
  }
  public resetNextHopType() {
    this._nextHopType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopTypeInput() {
    return this._nextHopType
  }

  // route_table_id - computed: false, optional: false, required: true
  private _routeTableId?: string; 
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdInput() {
    return this._routeTableId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualHubRouteTableRouteTimeouts | undefined; 
  private __timeoutsOutput = new VirtualHubRouteTableRouteTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: VirtualHubRouteTableRouteTimeouts | undefined) {
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
      destinations: cdktf.listMapper(cdktf.stringToTerraform)(this._destinations),
      destinations_type: cdktf.stringToTerraform(this._destinationsType),
      name: cdktf.stringToTerraform(this._name),
      next_hop: cdktf.stringToTerraform(this._nextHop),
      next_hop_type: cdktf.stringToTerraform(this._nextHopType),
      route_table_id: cdktf.stringToTerraform(this._routeTableId),
      timeouts: virtualHubRouteTableRouteTimeoutsToTerraform(this._timeouts),
    };
  }
}
