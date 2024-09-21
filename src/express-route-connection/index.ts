// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExpressRouteConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection#authorization_key ExpressRouteConnection#authorization_key}
  */
  readonly authorizationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection#enable_internet_security ExpressRouteConnection#enable_internet_security}
  */
  readonly enableInternetSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection#express_route_circuit_peering_id ExpressRouteConnection#express_route_circuit_peering_id}
  */
  readonly expressRouteCircuitPeeringId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection#express_route_gateway_bypass_enabled ExpressRouteConnection#express_route_gateway_bypass_enabled}
  */
  readonly expressRouteGatewayBypassEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection#express_route_gateway_id ExpressRouteConnection#express_route_gateway_id}
  */
  readonly expressRouteGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection#id ExpressRouteConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection#name ExpressRouteConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection#private_link_fast_path_enabled ExpressRouteConnection#private_link_fast_path_enabled}
  */
  readonly privateLinkFastPathEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection#routing_weight ExpressRouteConnection#routing_weight}
  */
  readonly routingWeight?: number;
  /**
  * routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection#routing ExpressRouteConnection#routing}
  */
  readonly routing?: ExpressRouteConnectionRouting;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection#timeouts ExpressRouteConnection#timeouts}
  */
  readonly timeouts?: ExpressRouteConnectionTimeouts;
}
export interface ExpressRouteConnectionRoutingPropagatedRouteTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection#labels ExpressRouteConnection#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection#route_table_ids ExpressRouteConnection#route_table_ids}
  */
  readonly routeTableIds?: string[];
}

export function expressRouteConnectionRoutingPropagatedRouteTableToTerraform(struct?: ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference | ExpressRouteConnectionRoutingPropagatedRouteTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
    route_table_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeTableIds),
  }
}


export function expressRouteConnectionRoutingPropagatedRouteTableToHclTerraform(struct?: ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference | ExpressRouteConnectionRoutingPropagatedRouteTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_table_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeTableIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExpressRouteConnectionRoutingPropagatedRouteTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._routeTableIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTableIds = this._routeTableIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExpressRouteConnectionRoutingPropagatedRouteTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._routeTableIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._routeTableIds = value.routeTableIds;
    }
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // route_table_ids - computed: true, optional: true, required: false
  private _routeTableIds?: string[]; 
  public get routeTableIds() {
    return this.getListAttribute('route_table_ids');
  }
  public set routeTableIds(value: string[]) {
    this._routeTableIds = value;
  }
  public resetRouteTableIds() {
    this._routeTableIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdsInput() {
    return this._routeTableIds;
  }
}
export interface ExpressRouteConnectionRouting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection#associated_route_table_id ExpressRouteConnection#associated_route_table_id}
  */
  readonly associatedRouteTableId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection#inbound_route_map_id ExpressRouteConnection#inbound_route_map_id}
  */
  readonly inboundRouteMapId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection#outbound_route_map_id ExpressRouteConnection#outbound_route_map_id}
  */
  readonly outboundRouteMapId?: string;
  /**
  * propagated_route_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection#propagated_route_table ExpressRouteConnection#propagated_route_table}
  */
  readonly propagatedRouteTable?: ExpressRouteConnectionRoutingPropagatedRouteTable;
}

export function expressRouteConnectionRoutingToTerraform(struct?: ExpressRouteConnectionRoutingOutputReference | ExpressRouteConnectionRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associated_route_table_id: cdktf.stringToTerraform(struct!.associatedRouteTableId),
    inbound_route_map_id: cdktf.stringToTerraform(struct!.inboundRouteMapId),
    outbound_route_map_id: cdktf.stringToTerraform(struct!.outboundRouteMapId),
    propagated_route_table: expressRouteConnectionRoutingPropagatedRouteTableToTerraform(struct!.propagatedRouteTable),
  }
}


export function expressRouteConnectionRoutingToHclTerraform(struct?: ExpressRouteConnectionRoutingOutputReference | ExpressRouteConnectionRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    associated_route_table_id: {
      value: cdktf.stringToHclTerraform(struct!.associatedRouteTableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_route_map_id: {
      value: cdktf.stringToHclTerraform(struct!.inboundRouteMapId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_route_map_id: {
      value: cdktf.stringToHclTerraform(struct!.outboundRouteMapId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagated_route_table: {
      value: expressRouteConnectionRoutingPropagatedRouteTableToHclTerraform(struct!.propagatedRouteTable),
      isBlock: true,
      type: "list",
      storageClassType: "ExpressRouteConnectionRoutingPropagatedRouteTableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExpressRouteConnectionRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExpressRouteConnectionRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associatedRouteTableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatedRouteTableId = this._associatedRouteTableId;
    }
    if (this._inboundRouteMapId !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundRouteMapId = this._inboundRouteMapId;
    }
    if (this._outboundRouteMapId !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundRouteMapId = this._outboundRouteMapId;
    }
    if (this._propagatedRouteTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagatedRouteTable = this._propagatedRouteTable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExpressRouteConnectionRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._associatedRouteTableId = undefined;
      this._inboundRouteMapId = undefined;
      this._outboundRouteMapId = undefined;
      this._propagatedRouteTable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._associatedRouteTableId = value.associatedRouteTableId;
      this._inboundRouteMapId = value.inboundRouteMapId;
      this._outboundRouteMapId = value.outboundRouteMapId;
      this._propagatedRouteTable.internalValue = value.propagatedRouteTable;
    }
  }

  // associated_route_table_id - computed: true, optional: true, required: false
  private _associatedRouteTableId?: string; 
  public get associatedRouteTableId() {
    return this.getStringAttribute('associated_route_table_id');
  }
  public set associatedRouteTableId(value: string) {
    this._associatedRouteTableId = value;
  }
  public resetAssociatedRouteTableId() {
    this._associatedRouteTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedRouteTableIdInput() {
    return this._associatedRouteTableId;
  }

  // inbound_route_map_id - computed: false, optional: true, required: false
  private _inboundRouteMapId?: string; 
  public get inboundRouteMapId() {
    return this.getStringAttribute('inbound_route_map_id');
  }
  public set inboundRouteMapId(value: string) {
    this._inboundRouteMapId = value;
  }
  public resetInboundRouteMapId() {
    this._inboundRouteMapId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundRouteMapIdInput() {
    return this._inboundRouteMapId;
  }

  // outbound_route_map_id - computed: false, optional: true, required: false
  private _outboundRouteMapId?: string; 
  public get outboundRouteMapId() {
    return this.getStringAttribute('outbound_route_map_id');
  }
  public set outboundRouteMapId(value: string) {
    this._outboundRouteMapId = value;
  }
  public resetOutboundRouteMapId() {
    this._outboundRouteMapId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundRouteMapIdInput() {
    return this._outboundRouteMapId;
  }

  // propagated_route_table - computed: false, optional: true, required: false
  private _propagatedRouteTable = new ExpressRouteConnectionRoutingPropagatedRouteTableOutputReference(this, "propagated_route_table");
  public get propagatedRouteTable() {
    return this._propagatedRouteTable;
  }
  public putPropagatedRouteTable(value: ExpressRouteConnectionRoutingPropagatedRouteTable) {
    this._propagatedRouteTable.internalValue = value;
  }
  public resetPropagatedRouteTable() {
    this._propagatedRouteTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatedRouteTableInput() {
    return this._propagatedRouteTable.internalValue;
  }
}
export interface ExpressRouteConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection#create ExpressRouteConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection#delete ExpressRouteConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection#read ExpressRouteConnection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection#update ExpressRouteConnection#update}
  */
  readonly update?: string;
}

export function expressRouteConnectionTimeoutsToTerraform(struct?: ExpressRouteConnectionTimeouts | cdktf.IResolvable): any {
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


export function expressRouteConnectionTimeoutsToHclTerraform(struct?: ExpressRouteConnectionTimeouts | cdktf.IResolvable): any {
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

export class ExpressRouteConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExpressRouteConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExpressRouteConnectionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection azurerm_express_route_connection}
*/
export class ExpressRouteConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_express_route_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExpressRouteConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExpressRouteConnection to import
  * @param importFromId The id of the existing ExpressRouteConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExpressRouteConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_express_route_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_connection azurerm_express_route_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExpressRouteConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: ExpressRouteConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_express_route_connection',
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
    this._authorizationKey = config.authorizationKey;
    this._enableInternetSecurity = config.enableInternetSecurity;
    this._expressRouteCircuitPeeringId = config.expressRouteCircuitPeeringId;
    this._expressRouteGatewayBypassEnabled = config.expressRouteGatewayBypassEnabled;
    this._expressRouteGatewayId = config.expressRouteGatewayId;
    this._id = config.id;
    this._name = config.name;
    this._privateLinkFastPathEnabled = config.privateLinkFastPathEnabled;
    this._routingWeight = config.routingWeight;
    this._routing.internalValue = config.routing;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_key - computed: false, optional: true, required: false
  private _authorizationKey?: string; 
  public get authorizationKey() {
    return this.getStringAttribute('authorization_key');
  }
  public set authorizationKey(value: string) {
    this._authorizationKey = value;
  }
  public resetAuthorizationKey() {
    this._authorizationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationKeyInput() {
    return this._authorizationKey;
  }

  // enable_internet_security - computed: false, optional: true, required: false
  private _enableInternetSecurity?: boolean | cdktf.IResolvable; 
  public get enableInternetSecurity() {
    return this.getBooleanAttribute('enable_internet_security');
  }
  public set enableInternetSecurity(value: boolean | cdktf.IResolvable) {
    this._enableInternetSecurity = value;
  }
  public resetEnableInternetSecurity() {
    this._enableInternetSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInternetSecurityInput() {
    return this._enableInternetSecurity;
  }

  // express_route_circuit_peering_id - computed: false, optional: false, required: true
  private _expressRouteCircuitPeeringId?: string; 
  public get expressRouteCircuitPeeringId() {
    return this.getStringAttribute('express_route_circuit_peering_id');
  }
  public set expressRouteCircuitPeeringId(value: string) {
    this._expressRouteCircuitPeeringId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressRouteCircuitPeeringIdInput() {
    return this._expressRouteCircuitPeeringId;
  }

  // express_route_gateway_bypass_enabled - computed: false, optional: true, required: false
  private _expressRouteGatewayBypassEnabled?: boolean | cdktf.IResolvable; 
  public get expressRouteGatewayBypassEnabled() {
    return this.getBooleanAttribute('express_route_gateway_bypass_enabled');
  }
  public set expressRouteGatewayBypassEnabled(value: boolean | cdktf.IResolvable) {
    this._expressRouteGatewayBypassEnabled = value;
  }
  public resetExpressRouteGatewayBypassEnabled() {
    this._expressRouteGatewayBypassEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressRouteGatewayBypassEnabledInput() {
    return this._expressRouteGatewayBypassEnabled;
  }

  // express_route_gateway_id - computed: false, optional: false, required: true
  private _expressRouteGatewayId?: string; 
  public get expressRouteGatewayId() {
    return this.getStringAttribute('express_route_gateway_id');
  }
  public set expressRouteGatewayId(value: string) {
    this._expressRouteGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressRouteGatewayIdInput() {
    return this._expressRouteGatewayId;
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

  // private_link_fast_path_enabled - computed: false, optional: true, required: false
  private _privateLinkFastPathEnabled?: boolean | cdktf.IResolvable; 
  public get privateLinkFastPathEnabled() {
    return this.getBooleanAttribute('private_link_fast_path_enabled');
  }
  public set privateLinkFastPathEnabled(value: boolean | cdktf.IResolvable) {
    this._privateLinkFastPathEnabled = value;
  }
  public resetPrivateLinkFastPathEnabled() {
    this._privateLinkFastPathEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkFastPathEnabledInput() {
    return this._privateLinkFastPathEnabled;
  }

  // routing_weight - computed: false, optional: true, required: false
  private _routingWeight?: number; 
  public get routingWeight() {
    return this.getNumberAttribute('routing_weight');
  }
  public set routingWeight(value: number) {
    this._routingWeight = value;
  }
  public resetRoutingWeight() {
    this._routingWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingWeightInput() {
    return this._routingWeight;
  }

  // routing - computed: false, optional: true, required: false
  private _routing = new ExpressRouteConnectionRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }
  public putRouting(value: ExpressRouteConnectionRouting) {
    this._routing.internalValue = value;
  }
  public resetRouting() {
    this._routing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ExpressRouteConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ExpressRouteConnectionTimeouts) {
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
      authorization_key: cdktf.stringToTerraform(this._authorizationKey),
      enable_internet_security: cdktf.booleanToTerraform(this._enableInternetSecurity),
      express_route_circuit_peering_id: cdktf.stringToTerraform(this._expressRouteCircuitPeeringId),
      express_route_gateway_bypass_enabled: cdktf.booleanToTerraform(this._expressRouteGatewayBypassEnabled),
      express_route_gateway_id: cdktf.stringToTerraform(this._expressRouteGatewayId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      private_link_fast_path_enabled: cdktf.booleanToTerraform(this._privateLinkFastPathEnabled),
      routing_weight: cdktf.numberToTerraform(this._routingWeight),
      routing: expressRouteConnectionRoutingToTerraform(this._routing.internalValue),
      timeouts: expressRouteConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorization_key: {
        value: cdktf.stringToHclTerraform(this._authorizationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_internet_security: {
        value: cdktf.booleanToHclTerraform(this._enableInternetSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      express_route_circuit_peering_id: {
        value: cdktf.stringToHclTerraform(this._expressRouteCircuitPeeringId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      express_route_gateway_bypass_enabled: {
        value: cdktf.booleanToHclTerraform(this._expressRouteGatewayBypassEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      express_route_gateway_id: {
        value: cdktf.stringToHclTerraform(this._expressRouteGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      private_link_fast_path_enabled: {
        value: cdktf.booleanToHclTerraform(this._privateLinkFastPathEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      routing_weight: {
        value: cdktf.numberToHclTerraform(this._routingWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      routing: {
        value: expressRouteConnectionRoutingToHclTerraform(this._routing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExpressRouteConnectionRoutingList",
      },
      timeouts: {
        value: expressRouteConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ExpressRouteConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
