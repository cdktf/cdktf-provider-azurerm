// https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnGatewayConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#internet_security_enabled VpnGatewayConnection#internet_security_enabled}
  */
  readonly internetSecurityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#name VpnGatewayConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#remote_vpn_site_id VpnGatewayConnection#remote_vpn_site_id}
  */
  readonly remoteVpnSiteId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#vpn_gateway_id VpnGatewayConnection#vpn_gateway_id}
  */
  readonly vpnGatewayId: string;
  /**
  * routing block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#routing VpnGatewayConnection#routing}
  */
  readonly routing?: VpnGatewayConnectionRouting;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#timeouts VpnGatewayConnection#timeouts}
  */
  readonly timeouts?: VpnGatewayConnectionTimeouts;
  /**
  * traffic_selector_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#traffic_selector_policy VpnGatewayConnection#traffic_selector_policy}
  */
  readonly trafficSelectorPolicy?: VpnGatewayConnectionTrafficSelectorPolicy[];
  /**
  * vpn_link block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#vpn_link VpnGatewayConnection#vpn_link}
  */
  readonly vpnLink: VpnGatewayConnectionVpnLink[];
}
export interface VpnGatewayConnectionRoutingPropagatedRouteTable {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#labels VpnGatewayConnection#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#route_table_ids VpnGatewayConnection#route_table_ids}
  */
  readonly routeTableIds: string[];
}

export function vpnGatewayConnectionRoutingPropagatedRouteTableToTerraform(struct?: VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference | VpnGatewayConnectionRoutingPropagatedRouteTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.labels),
    route_table_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.routeTableIds),
  }
}

export class VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VpnGatewayConnectionRoutingPropagatedRouteTable | undefined {
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

  public set internalValue(value: VpnGatewayConnectionRoutingPropagatedRouteTable | undefined) {
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

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
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

  // route_table_ids - computed: false, optional: false, required: true
  private _routeTableIds?: string[]; 
  public get routeTableIds() {
    return this.getListAttribute('route_table_ids');
  }
  public set routeTableIds(value: string[]) {
    this._routeTableIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdsInput() {
    return this._routeTableIds;
  }
}
export interface VpnGatewayConnectionRouting {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#associated_route_table VpnGatewayConnection#associated_route_table}
  */
  readonly associatedRouteTable: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#propagated_route_tables VpnGatewayConnection#propagated_route_tables}
  */
  readonly propagatedRouteTables?: string[];
  /**
  * propagated_route_table block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#propagated_route_table VpnGatewayConnection#propagated_route_table}
  */
  readonly propagatedRouteTable?: VpnGatewayConnectionRoutingPropagatedRouteTable;
}

export function vpnGatewayConnectionRoutingToTerraform(struct?: VpnGatewayConnectionRoutingOutputReference | VpnGatewayConnectionRouting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associated_route_table: cdktf.stringToTerraform(struct!.associatedRouteTable),
    propagated_route_tables: cdktf.listMapper(cdktf.stringToTerraform)(struct!.propagatedRouteTables),
    propagated_route_table: vpnGatewayConnectionRoutingPropagatedRouteTableToTerraform(struct!.propagatedRouteTable),
  }
}

export class VpnGatewayConnectionRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VpnGatewayConnectionRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associatedRouteTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatedRouteTable = this._associatedRouteTable;
    }
    if (this._propagatedRouteTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagatedRouteTables = this._propagatedRouteTables;
    }
    if (this._propagatedRouteTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagatedRouteTable = this._propagatedRouteTable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnGatewayConnectionRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._associatedRouteTable = undefined;
      this._propagatedRouteTables = undefined;
      this._propagatedRouteTable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._associatedRouteTable = value.associatedRouteTable;
      this._propagatedRouteTables = value.propagatedRouteTables;
      this._propagatedRouteTable.internalValue = value.propagatedRouteTable;
    }
  }

  // associated_route_table - computed: false, optional: false, required: true
  private _associatedRouteTable?: string; 
  public get associatedRouteTable() {
    return this.getStringAttribute('associated_route_table');
  }
  public set associatedRouteTable(value: string) {
    this._associatedRouteTable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedRouteTableInput() {
    return this._associatedRouteTable;
  }

  // propagated_route_tables - computed: true, optional: true, required: false
  private _propagatedRouteTables?: string[]; 
  public get propagatedRouteTables() {
    return this.getListAttribute('propagated_route_tables');
  }
  public set propagatedRouteTables(value: string[]) {
    this._propagatedRouteTables = value;
  }
  public resetPropagatedRouteTables() {
    this._propagatedRouteTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatedRouteTablesInput() {
    return this._propagatedRouteTables;
  }

  // propagated_route_table - computed: false, optional: true, required: false
  private _propagatedRouteTable = new VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference(this as any, "propagated_route_table", true);
  public get propagatedRouteTable() {
    return this._propagatedRouteTable;
  }
  public putPropagatedRouteTable(value: VpnGatewayConnectionRoutingPropagatedRouteTable) {
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
export interface VpnGatewayConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#create VpnGatewayConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#delete VpnGatewayConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#read VpnGatewayConnection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#update VpnGatewayConnection#update}
  */
  readonly update?: string;
}

export function vpnGatewayConnectionTimeoutsToTerraform(struct?: VpnGatewayConnectionTimeoutsOutputReference | VpnGatewayConnectionTimeouts): any {
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

export class VpnGatewayConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VpnGatewayConnectionTimeouts | undefined {
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

  public set internalValue(value: VpnGatewayConnectionTimeouts | undefined) {
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
export interface VpnGatewayConnectionTrafficSelectorPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#local_address_ranges VpnGatewayConnection#local_address_ranges}
  */
  readonly localAddressRanges: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#remote_address_ranges VpnGatewayConnection#remote_address_ranges}
  */
  readonly remoteAddressRanges: string[];
}

export function vpnGatewayConnectionTrafficSelectorPolicyToTerraform(struct?: VpnGatewayConnectionTrafficSelectorPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_address_ranges: cdktf.listMapper(cdktf.stringToTerraform)(struct!.localAddressRanges),
    remote_address_ranges: cdktf.listMapper(cdktf.stringToTerraform)(struct!.remoteAddressRanges),
  }
}

export interface VpnGatewayConnectionVpnLinkIpsecPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#dh_group VpnGatewayConnection#dh_group}
  */
  readonly dhGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#encryption_algorithm VpnGatewayConnection#encryption_algorithm}
  */
  readonly encryptionAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#ike_encryption_algorithm VpnGatewayConnection#ike_encryption_algorithm}
  */
  readonly ikeEncryptionAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#ike_integrity_algorithm VpnGatewayConnection#ike_integrity_algorithm}
  */
  readonly ikeIntegrityAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#integrity_algorithm VpnGatewayConnection#integrity_algorithm}
  */
  readonly integrityAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#pfs_group VpnGatewayConnection#pfs_group}
  */
  readonly pfsGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#sa_data_size_kb VpnGatewayConnection#sa_data_size_kb}
  */
  readonly saDataSizeKb: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#sa_lifetime_sec VpnGatewayConnection#sa_lifetime_sec}
  */
  readonly saLifetimeSec: number;
}

export function vpnGatewayConnectionVpnLinkIpsecPolicyToTerraform(struct?: VpnGatewayConnectionVpnLinkIpsecPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dh_group: cdktf.stringToTerraform(struct!.dhGroup),
    encryption_algorithm: cdktf.stringToTerraform(struct!.encryptionAlgorithm),
    ike_encryption_algorithm: cdktf.stringToTerraform(struct!.ikeEncryptionAlgorithm),
    ike_integrity_algorithm: cdktf.stringToTerraform(struct!.ikeIntegrityAlgorithm),
    integrity_algorithm: cdktf.stringToTerraform(struct!.integrityAlgorithm),
    pfs_group: cdktf.stringToTerraform(struct!.pfsGroup),
    sa_data_size_kb: cdktf.numberToTerraform(struct!.saDataSizeKb),
    sa_lifetime_sec: cdktf.numberToTerraform(struct!.saLifetimeSec),
  }
}

export interface VpnGatewayConnectionVpnLink {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#bandwidth_mbps VpnGatewayConnection#bandwidth_mbps}
  */
  readonly bandwidthMbps?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#bgp_enabled VpnGatewayConnection#bgp_enabled}
  */
  readonly bgpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#connection_mode VpnGatewayConnection#connection_mode}
  */
  readonly connectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#egress_nat_rule_ids VpnGatewayConnection#egress_nat_rule_ids}
  */
  readonly egressNatRuleIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#ingress_nat_rule_ids VpnGatewayConnection#ingress_nat_rule_ids}
  */
  readonly ingressNatRuleIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#local_azure_ip_address_enabled VpnGatewayConnection#local_azure_ip_address_enabled}
  */
  readonly localAzureIpAddressEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#name VpnGatewayConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#policy_based_traffic_selector_enabled VpnGatewayConnection#policy_based_traffic_selector_enabled}
  */
  readonly policyBasedTrafficSelectorEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#protocol VpnGatewayConnection#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#ratelimit_enabled VpnGatewayConnection#ratelimit_enabled}
  */
  readonly ratelimitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#route_weight VpnGatewayConnection#route_weight}
  */
  readonly routeWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#shared_key VpnGatewayConnection#shared_key}
  */
  readonly sharedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#vpn_site_link_id VpnGatewayConnection#vpn_site_link_id}
  */
  readonly vpnSiteLinkId: string;
  /**
  * ipsec_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection#ipsec_policy VpnGatewayConnection#ipsec_policy}
  */
  readonly ipsecPolicy?: VpnGatewayConnectionVpnLinkIpsecPolicy[];
}

export function vpnGatewayConnectionVpnLinkToTerraform(struct?: VpnGatewayConnectionVpnLink): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_mbps: cdktf.numberToTerraform(struct!.bandwidthMbps),
    bgp_enabled: cdktf.booleanToTerraform(struct!.bgpEnabled),
    connection_mode: cdktf.stringToTerraform(struct!.connectionMode),
    egress_nat_rule_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.egressNatRuleIds),
    ingress_nat_rule_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ingressNatRuleIds),
    local_azure_ip_address_enabled: cdktf.booleanToTerraform(struct!.localAzureIpAddressEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    policy_based_traffic_selector_enabled: cdktf.booleanToTerraform(struct!.policyBasedTrafficSelectorEnabled),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    ratelimit_enabled: cdktf.booleanToTerraform(struct!.ratelimitEnabled),
    route_weight: cdktf.numberToTerraform(struct!.routeWeight),
    shared_key: cdktf.stringToTerraform(struct!.sharedKey),
    vpn_site_link_id: cdktf.stringToTerraform(struct!.vpnSiteLinkId),
    ipsec_policy: cdktf.listMapper(vpnGatewayConnectionVpnLinkIpsecPolicyToTerraform)(struct!.ipsecPolicy),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection azurerm_vpn_gateway_connection}
*/
export class VpnGatewayConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_vpn_gateway_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection azurerm_vpn_gateway_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnGatewayConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: VpnGatewayConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_vpn_gateway_connection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._internetSecurityEnabled = config.internetSecurityEnabled;
    this._name = config.name;
    this._remoteVpnSiteId = config.remoteVpnSiteId;
    this._vpnGatewayId = config.vpnGatewayId;
    this._routing.internalValue = config.routing;
    this._timeouts.internalValue = config.timeouts;
    this._trafficSelectorPolicy = config.trafficSelectorPolicy;
    this._vpnLink = config.vpnLink;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internet_security_enabled - computed: false, optional: true, required: false
  private _internetSecurityEnabled?: boolean | cdktf.IResolvable; 
  public get internetSecurityEnabled() {
    return this.getBooleanAttribute('internet_security_enabled') as any;
  }
  public set internetSecurityEnabled(value: boolean | cdktf.IResolvable) {
    this._internetSecurityEnabled = value;
  }
  public resetInternetSecurityEnabled() {
    this._internetSecurityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetSecurityEnabledInput() {
    return this._internetSecurityEnabled;
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

  // remote_vpn_site_id - computed: false, optional: false, required: true
  private _remoteVpnSiteId?: string; 
  public get remoteVpnSiteId() {
    return this.getStringAttribute('remote_vpn_site_id');
  }
  public set remoteVpnSiteId(value: string) {
    this._remoteVpnSiteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVpnSiteIdInput() {
    return this._remoteVpnSiteId;
  }

  // vpn_gateway_id - computed: false, optional: false, required: true
  private _vpnGatewayId?: string; 
  public get vpnGatewayId() {
    return this.getStringAttribute('vpn_gateway_id');
  }
  public set vpnGatewayId(value: string) {
    this._vpnGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGatewayIdInput() {
    return this._vpnGatewayId;
  }

  // routing - computed: false, optional: true, required: false
  private _routing = new VpnGatewayConnectionRoutingOutputReference(this as any, "routing", true);
  public get routing() {
    return this._routing;
  }
  public putRouting(value: VpnGatewayConnectionRouting) {
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
  private _timeouts = new VpnGatewayConnectionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpnGatewayConnectionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // traffic_selector_policy - computed: false, optional: true, required: false
  private _trafficSelectorPolicy?: VpnGatewayConnectionTrafficSelectorPolicy[]; 
  public get trafficSelectorPolicy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('traffic_selector_policy') as any;
  }
  public set trafficSelectorPolicy(value: VpnGatewayConnectionTrafficSelectorPolicy[]) {
    this._trafficSelectorPolicy = value;
  }
  public resetTrafficSelectorPolicy() {
    this._trafficSelectorPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSelectorPolicyInput() {
    return this._trafficSelectorPolicy;
  }

  // vpn_link - computed: false, optional: false, required: true
  private _vpnLink?: VpnGatewayConnectionVpnLink[]; 
  public get vpnLink() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('vpn_link') as any;
  }
  public set vpnLink(value: VpnGatewayConnectionVpnLink[]) {
    this._vpnLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnLinkInput() {
    return this._vpnLink;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      internet_security_enabled: cdktf.booleanToTerraform(this._internetSecurityEnabled),
      name: cdktf.stringToTerraform(this._name),
      remote_vpn_site_id: cdktf.stringToTerraform(this._remoteVpnSiteId),
      vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
      routing: vpnGatewayConnectionRoutingToTerraform(this._routing.internalValue),
      timeouts: vpnGatewayConnectionTimeoutsToTerraform(this._timeouts.internalValue),
      traffic_selector_policy: cdktf.listMapper(vpnGatewayConnectionTrafficSelectorPolicyToTerraform)(this._trafficSelectorPolicy),
      vpn_link: cdktf.listMapper(vpnGatewayConnectionVpnLinkToTerraform)(this._vpnLink),
    };
  }
}
