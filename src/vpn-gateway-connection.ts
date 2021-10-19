// https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnGatewayConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#internet_security_enabled VpnGatewayConnection#internet_security_enabled}
  */
  readonly internetSecurityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#name VpnGatewayConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#remote_vpn_site_id VpnGatewayConnection#remote_vpn_site_id}
  */
  readonly remoteVpnSiteId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#vpn_gateway_id VpnGatewayConnection#vpn_gateway_id}
  */
  readonly vpnGatewayId: string;
  /**
  * routing block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#routing VpnGatewayConnection#routing}
  */
  readonly routing?: VpnGatewayConnectionRouting[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#timeouts VpnGatewayConnection#timeouts}
  */
  readonly timeouts?: VpnGatewayConnectionTimeouts;
  /**
  * vpn_link block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#vpn_link VpnGatewayConnection#vpn_link}
  */
  readonly vpnLink: VpnGatewayConnectionVpnLink[];
}
export interface VpnGatewayConnectionRouting {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#associated_route_table VpnGatewayConnection#associated_route_table}
  */
  readonly associatedRouteTable: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#propagated_route_tables VpnGatewayConnection#propagated_route_tables}
  */
  readonly propagatedRouteTables: string[];
}

function vpnGatewayConnectionRoutingToTerraform(struct?: VpnGatewayConnectionRouting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associated_route_table: cdktf.stringToTerraform(struct!.associatedRouteTable),
    propagated_route_tables: cdktf.listMapper(cdktf.stringToTerraform)(struct!.propagatedRouteTables),
  }
}

export interface VpnGatewayConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#create VpnGatewayConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#delete VpnGatewayConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#read VpnGatewayConnection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#update VpnGatewayConnection#update}
  */
  readonly update?: string;
}

function vpnGatewayConnectionTimeoutsToTerraform(struct?: VpnGatewayConnectionTimeoutsOutputReference | VpnGatewayConnectionTimeouts): any {
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
export interface VpnGatewayConnectionVpnLinkIpsecPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#dh_group VpnGatewayConnection#dh_group}
  */
  readonly dhGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#encryption_algorithm VpnGatewayConnection#encryption_algorithm}
  */
  readonly encryptionAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#ike_encryption_algorithm VpnGatewayConnection#ike_encryption_algorithm}
  */
  readonly ikeEncryptionAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#ike_integrity_algorithm VpnGatewayConnection#ike_integrity_algorithm}
  */
  readonly ikeIntegrityAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#integrity_algorithm VpnGatewayConnection#integrity_algorithm}
  */
  readonly integrityAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#pfs_group VpnGatewayConnection#pfs_group}
  */
  readonly pfsGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#sa_data_size_kb VpnGatewayConnection#sa_data_size_kb}
  */
  readonly saDataSizeKb: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#sa_lifetime_sec VpnGatewayConnection#sa_lifetime_sec}
  */
  readonly saLifetimeSec: number;
}

function vpnGatewayConnectionVpnLinkIpsecPolicyToTerraform(struct?: VpnGatewayConnectionVpnLinkIpsecPolicy): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#bandwidth_mbps VpnGatewayConnection#bandwidth_mbps}
  */
  readonly bandwidthMbps?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#bgp_enabled VpnGatewayConnection#bgp_enabled}
  */
  readonly bgpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#local_azure_ip_address_enabled VpnGatewayConnection#local_azure_ip_address_enabled}
  */
  readonly localAzureIpAddressEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#name VpnGatewayConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#policy_based_traffic_selector_enabled VpnGatewayConnection#policy_based_traffic_selector_enabled}
  */
  readonly policyBasedTrafficSelectorEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#protocol VpnGatewayConnection#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#ratelimit_enabled VpnGatewayConnection#ratelimit_enabled}
  */
  readonly ratelimitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#route_weight VpnGatewayConnection#route_weight}
  */
  readonly routeWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#shared_key VpnGatewayConnection#shared_key}
  */
  readonly sharedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#vpn_site_link_id VpnGatewayConnection#vpn_site_link_id}
  */
  readonly vpnSiteLinkId: string;
  /**
  * ipsec_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html#ipsec_policy VpnGatewayConnection#ipsec_policy}
  */
  readonly ipsecPolicy?: VpnGatewayConnectionVpnLinkIpsecPolicy[];
}

function vpnGatewayConnectionVpnLinkToTerraform(struct?: VpnGatewayConnectionVpnLink): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_mbps: cdktf.numberToTerraform(struct!.bandwidthMbps),
    bgp_enabled: cdktf.booleanToTerraform(struct!.bgpEnabled),
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html azurerm_vpn_gateway_connection}
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
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html azurerm_vpn_gateway_connection} Resource
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
    this._routing = config.routing;
    this._timeouts = config.timeouts;
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
  private _internetSecurityEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get internetSecurityEnabled() {
    return this.getBooleanAttribute('internet_security_enabled') as any;
  }
  public set internetSecurityEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._internetSecurityEnabled = value;
  }
  public resetInternetSecurityEnabled() {
    this._internetSecurityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetSecurityEnabledInput() {
    return this._internetSecurityEnabled
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
    return this._remoteVpnSiteId
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
    return this._vpnGatewayId
  }

  // routing - computed: false, optional: true, required: false
  private _routing?: VpnGatewayConnectionRouting[] | undefined; 
  public get routing() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('routing') as any;
  }
  public set routing(value: VpnGatewayConnectionRouting[] | undefined) {
    this._routing = value;
  }
  public resetRouting() {
    this._routing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VpnGatewayConnectionTimeouts | undefined; 
  private __timeoutsOutput = new VpnGatewayConnectionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: VpnGatewayConnectionTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
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
    return this._vpnLink
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
      routing: cdktf.listMapper(vpnGatewayConnectionRoutingToTerraform)(this._routing),
      timeouts: vpnGatewayConnectionTimeoutsToTerraform(this._timeouts),
      vpn_link: cdktf.listMapper(vpnGatewayConnectionVpnLinkToTerraform)(this._vpnLink),
    };
  }
}
