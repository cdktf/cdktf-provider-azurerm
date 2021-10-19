// https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualHubRouteTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table.html#labels VirtualHubRouteTable#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table.html#name VirtualHubRouteTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table.html#virtual_hub_id VirtualHubRouteTable#virtual_hub_id}
  */
  readonly virtualHubId: string;
  /**
  * route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table.html#route VirtualHubRouteTable#route}
  */
  readonly route?: VirtualHubRouteTableRoute[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table.html#timeouts VirtualHubRouteTable#timeouts}
  */
  readonly timeouts?: VirtualHubRouteTableTimeouts;
}
export interface VirtualHubRouteTableRoute {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table.html#destinations VirtualHubRouteTable#destinations}
  */
  readonly destinations: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table.html#destinations_type VirtualHubRouteTable#destinations_type}
  */
  readonly destinationsType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table.html#name VirtualHubRouteTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table.html#next_hop VirtualHubRouteTable#next_hop}
  */
  readonly nextHop: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table.html#next_hop_type VirtualHubRouteTable#next_hop_type}
  */
  readonly nextHopType?: string;
}

function virtualHubRouteTableRouteToTerraform(struct?: VirtualHubRouteTableRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destinations: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinations),
    destinations_type: cdktf.stringToTerraform(struct!.destinationsType),
    name: cdktf.stringToTerraform(struct!.name),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    next_hop_type: cdktf.stringToTerraform(struct!.nextHopType),
  }
}

export interface VirtualHubRouteTableTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table.html#create VirtualHubRouteTable#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table.html#delete VirtualHubRouteTable#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table.html#read VirtualHubRouteTable#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table.html#update VirtualHubRouteTable#update}
  */
  readonly update?: string;
}

function virtualHubRouteTableTimeoutsToTerraform(struct?: VirtualHubRouteTableTimeoutsOutputReference | VirtualHubRouteTableTimeouts): any {
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

export class VirtualHubRouteTableTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table.html azurerm_virtual_hub_route_table}
*/
export class VirtualHubRouteTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_virtual_hub_route_table";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_route_table.html azurerm_virtual_hub_route_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualHubRouteTableConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualHubRouteTableConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_hub_route_table',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._labels = config.labels;
    this._name = config.name;
    this._virtualHubId = config.virtualHubId;
    this._route = config.route;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[] | undefined; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[] | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
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

  // virtual_hub_id - computed: false, optional: false, required: true
  private _virtualHubId?: string; 
  public get virtualHubId() {
    return this.getStringAttribute('virtual_hub_id');
  }
  public set virtualHubId(value: string) {
    this._virtualHubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHubIdInput() {
    return this._virtualHubId
  }

  // route - computed: false, optional: true, required: false
  private _route?: VirtualHubRouteTableRoute[] | undefined; 
  public get route() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('route') as any;
  }
  public set route(value: VirtualHubRouteTableRoute[] | undefined) {
    this._route = value;
  }
  public resetRoute() {
    this._route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualHubRouteTableTimeouts | undefined; 
  private __timeoutsOutput = new VirtualHubRouteTableTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: VirtualHubRouteTableTimeouts | undefined) {
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
      labels: cdktf.listMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      virtual_hub_id: cdktf.stringToTerraform(this._virtualHubId),
      route: cdktf.listMapper(virtualHubRouteTableRouteToTerraform)(this._route),
      timeouts: virtualHubRouteTableTimeoutsToTerraform(this._timeouts),
    };
  }
}
