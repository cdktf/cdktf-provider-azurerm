// https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualNetworkGatewayConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#authorization_key VirtualNetworkGatewayConnection#authorization_key}
  */
  readonly authorizationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#connection_protocol VirtualNetworkGatewayConnection#connection_protocol}
  */
  readonly connectionProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#dpd_timeout_seconds VirtualNetworkGatewayConnection#dpd_timeout_seconds}
  */
  readonly dpdTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#enable_bgp VirtualNetworkGatewayConnection#enable_bgp}
  */
  readonly enableBgp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#express_route_circuit_id VirtualNetworkGatewayConnection#express_route_circuit_id}
  */
  readonly expressRouteCircuitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#express_route_gateway_bypass VirtualNetworkGatewayConnection#express_route_gateway_bypass}
  */
  readonly expressRouteGatewayBypass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#local_azure_ip_address_enabled VirtualNetworkGatewayConnection#local_azure_ip_address_enabled}
  */
  readonly localAzureIpAddressEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#local_network_gateway_id VirtualNetworkGatewayConnection#local_network_gateway_id}
  */
  readonly localNetworkGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#location VirtualNetworkGatewayConnection#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#name VirtualNetworkGatewayConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#peer_virtual_network_gateway_id VirtualNetworkGatewayConnection#peer_virtual_network_gateway_id}
  */
  readonly peerVirtualNetworkGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#resource_group_name VirtualNetworkGatewayConnection#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#routing_weight VirtualNetworkGatewayConnection#routing_weight}
  */
  readonly routingWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#shared_key VirtualNetworkGatewayConnection#shared_key}
  */
  readonly sharedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#tags VirtualNetworkGatewayConnection#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#type VirtualNetworkGatewayConnection#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#use_policy_based_traffic_selectors VirtualNetworkGatewayConnection#use_policy_based_traffic_selectors}
  */
  readonly usePolicyBasedTrafficSelectors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#virtual_network_gateway_id VirtualNetworkGatewayConnection#virtual_network_gateway_id}
  */
  readonly virtualNetworkGatewayId: string;
  /**
  * ipsec_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#ipsec_policy VirtualNetworkGatewayConnection#ipsec_policy}
  */
  readonly ipsecPolicy?: VirtualNetworkGatewayConnectionIpsecPolicy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#timeouts VirtualNetworkGatewayConnection#timeouts}
  */
  readonly timeouts?: VirtualNetworkGatewayConnectionTimeouts;
  /**
  * traffic_selector_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#traffic_selector_policy VirtualNetworkGatewayConnection#traffic_selector_policy}
  */
  readonly trafficSelectorPolicy?: VirtualNetworkGatewayConnectionTrafficSelectorPolicy;
}
export interface VirtualNetworkGatewayConnectionIpsecPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#dh_group VirtualNetworkGatewayConnection#dh_group}
  */
  readonly dhGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#ike_encryption VirtualNetworkGatewayConnection#ike_encryption}
  */
  readonly ikeEncryption: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#ike_integrity VirtualNetworkGatewayConnection#ike_integrity}
  */
  readonly ikeIntegrity: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#ipsec_encryption VirtualNetworkGatewayConnection#ipsec_encryption}
  */
  readonly ipsecEncryption: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#ipsec_integrity VirtualNetworkGatewayConnection#ipsec_integrity}
  */
  readonly ipsecIntegrity: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#pfs_group VirtualNetworkGatewayConnection#pfs_group}
  */
  readonly pfsGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#sa_datasize VirtualNetworkGatewayConnection#sa_datasize}
  */
  readonly saDatasize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#sa_lifetime VirtualNetworkGatewayConnection#sa_lifetime}
  */
  readonly saLifetime?: number;
}

export function virtualNetworkGatewayConnectionIpsecPolicyToTerraform(struct?: VirtualNetworkGatewayConnectionIpsecPolicyOutputReference | VirtualNetworkGatewayConnectionIpsecPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dh_group: cdktf.stringToTerraform(struct!.dhGroup),
    ike_encryption: cdktf.stringToTerraform(struct!.ikeEncryption),
    ike_integrity: cdktf.stringToTerraform(struct!.ikeIntegrity),
    ipsec_encryption: cdktf.stringToTerraform(struct!.ipsecEncryption),
    ipsec_integrity: cdktf.stringToTerraform(struct!.ipsecIntegrity),
    pfs_group: cdktf.stringToTerraform(struct!.pfsGroup),
    sa_datasize: cdktf.numberToTerraform(struct!.saDatasize),
    sa_lifetime: cdktf.numberToTerraform(struct!.saLifetime),
  }
}

export class VirtualNetworkGatewayConnectionIpsecPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VirtualNetworkGatewayConnectionIpsecPolicy | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._dhGroup) {
      hasAnyValues = true;
      internalValueResult.dhGroup = this._dhGroup;
    }
    if (this._ikeEncryption) {
      hasAnyValues = true;
      internalValueResult.ikeEncryption = this._ikeEncryption;
    }
    if (this._ikeIntegrity) {
      hasAnyValues = true;
      internalValueResult.ikeIntegrity = this._ikeIntegrity;
    }
    if (this._ipsecEncryption) {
      hasAnyValues = true;
      internalValueResult.ipsecEncryption = this._ipsecEncryption;
    }
    if (this._ipsecIntegrity) {
      hasAnyValues = true;
      internalValueResult.ipsecIntegrity = this._ipsecIntegrity;
    }
    if (this._pfsGroup) {
      hasAnyValues = true;
      internalValueResult.pfsGroup = this._pfsGroup;
    }
    if (this._saDatasize) {
      hasAnyValues = true;
      internalValueResult.saDatasize = this._saDatasize;
    }
    if (this._saLifetime) {
      hasAnyValues = true;
      internalValueResult.saLifetime = this._saLifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayConnectionIpsecPolicy | undefined) {
    if (value === undefined) {
      this._dhGroup = undefined;
      this._ikeEncryption = undefined;
      this._ikeIntegrity = undefined;
      this._ipsecEncryption = undefined;
      this._ipsecIntegrity = undefined;
      this._pfsGroup = undefined;
      this._saDatasize = undefined;
      this._saLifetime = undefined;
    }
    else {
      this._dhGroup = value.dhGroup;
      this._ikeEncryption = value.ikeEncryption;
      this._ikeIntegrity = value.ikeIntegrity;
      this._ipsecEncryption = value.ipsecEncryption;
      this._ipsecIntegrity = value.ipsecIntegrity;
      this._pfsGroup = value.pfsGroup;
      this._saDatasize = value.saDatasize;
      this._saLifetime = value.saLifetime;
    }
  }

  // dh_group - computed: false, optional: false, required: true
  private _dhGroup?: string; 
  public get dhGroup() {
    return this.getStringAttribute('dh_group');
  }
  public set dhGroup(value: string) {
    this._dhGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupInput() {
    return this._dhGroup;
  }

  // ike_encryption - computed: false, optional: false, required: true
  private _ikeEncryption?: string; 
  public get ikeEncryption() {
    return this.getStringAttribute('ike_encryption');
  }
  public set ikeEncryption(value: string) {
    this._ikeEncryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeEncryptionInput() {
    return this._ikeEncryption;
  }

  // ike_integrity - computed: false, optional: false, required: true
  private _ikeIntegrity?: string; 
  public get ikeIntegrity() {
    return this.getStringAttribute('ike_integrity');
  }
  public set ikeIntegrity(value: string) {
    this._ikeIntegrity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeIntegrityInput() {
    return this._ikeIntegrity;
  }

  // ipsec_encryption - computed: false, optional: false, required: true
  private _ipsecEncryption?: string; 
  public get ipsecEncryption() {
    return this.getStringAttribute('ipsec_encryption');
  }
  public set ipsecEncryption(value: string) {
    this._ipsecEncryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecEncryptionInput() {
    return this._ipsecEncryption;
  }

  // ipsec_integrity - computed: false, optional: false, required: true
  private _ipsecIntegrity?: string; 
  public get ipsecIntegrity() {
    return this.getStringAttribute('ipsec_integrity');
  }
  public set ipsecIntegrity(value: string) {
    this._ipsecIntegrity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecIntegrityInput() {
    return this._ipsecIntegrity;
  }

  // pfs_group - computed: false, optional: false, required: true
  private _pfsGroup?: string; 
  public get pfsGroup() {
    return this.getStringAttribute('pfs_group');
  }
  public set pfsGroup(value: string) {
    this._pfsGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pfsGroupInput() {
    return this._pfsGroup;
  }

  // sa_datasize - computed: true, optional: true, required: false
  private _saDatasize?: number; 
  public get saDatasize() {
    return this.getNumberAttribute('sa_datasize');
  }
  public set saDatasize(value: number) {
    this._saDatasize = value;
  }
  public resetSaDatasize() {
    this._saDatasize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saDatasizeInput() {
    return this._saDatasize;
  }

  // sa_lifetime - computed: true, optional: true, required: false
  private _saLifetime?: number; 
  public get saLifetime() {
    return this.getNumberAttribute('sa_lifetime');
  }
  public set saLifetime(value: number) {
    this._saLifetime = value;
  }
  public resetSaLifetime() {
    this._saLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saLifetimeInput() {
    return this._saLifetime;
  }
}
export interface VirtualNetworkGatewayConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#create VirtualNetworkGatewayConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#delete VirtualNetworkGatewayConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#read VirtualNetworkGatewayConnection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#update VirtualNetworkGatewayConnection#update}
  */
  readonly update?: string;
}

export function virtualNetworkGatewayConnectionTimeoutsToTerraform(struct?: VirtualNetworkGatewayConnectionTimeoutsOutputReference | VirtualNetworkGatewayConnectionTimeouts): any {
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

export class VirtualNetworkGatewayConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VirtualNetworkGatewayConnectionTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayConnectionTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
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
export interface VirtualNetworkGatewayConnectionTrafficSelectorPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#local_address_cidrs VirtualNetworkGatewayConnection#local_address_cidrs}
  */
  readonly localAddressCidrs: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html#remote_address_cidrs VirtualNetworkGatewayConnection#remote_address_cidrs}
  */
  readonly remoteAddressCidrs: string[];
}

export function virtualNetworkGatewayConnectionTrafficSelectorPolicyToTerraform(struct?: VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference | VirtualNetworkGatewayConnectionTrafficSelectorPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_address_cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct!.localAddressCidrs),
    remote_address_cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct!.remoteAddressCidrs),
  }
}

export class VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VirtualNetworkGatewayConnectionTrafficSelectorPolicy | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._localAddressCidrs) {
      hasAnyValues = true;
      internalValueResult.localAddressCidrs = this._localAddressCidrs;
    }
    if (this._remoteAddressCidrs) {
      hasAnyValues = true;
      internalValueResult.remoteAddressCidrs = this._remoteAddressCidrs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayConnectionTrafficSelectorPolicy | undefined) {
    if (value === undefined) {
      this._localAddressCidrs = undefined;
      this._remoteAddressCidrs = undefined;
    }
    else {
      this._localAddressCidrs = value.localAddressCidrs;
      this._remoteAddressCidrs = value.remoteAddressCidrs;
    }
  }

  // local_address_cidrs - computed: false, optional: false, required: true
  private _localAddressCidrs?: string[]; 
  public get localAddressCidrs() {
    return this.getListAttribute('local_address_cidrs');
  }
  public set localAddressCidrs(value: string[]) {
    this._localAddressCidrs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressCidrsInput() {
    return this._localAddressCidrs;
  }

  // remote_address_cidrs - computed: false, optional: false, required: true
  private _remoteAddressCidrs?: string[]; 
  public get remoteAddressCidrs() {
    return this.getListAttribute('remote_address_cidrs');
  }
  public set remoteAddressCidrs(value: string[]) {
    this._remoteAddressCidrs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressCidrsInput() {
    return this._remoteAddressCidrs;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html azurerm_virtual_network_gateway_connection}
*/
export class VirtualNetworkGatewayConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_virtual_network_gateway_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html azurerm_virtual_network_gateway_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualNetworkGatewayConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualNetworkGatewayConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_network_gateway_connection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authorizationKey = config.authorizationKey;
    this._connectionProtocol = config.connectionProtocol;
    this._dpdTimeoutSeconds = config.dpdTimeoutSeconds;
    this._enableBgp = config.enableBgp;
    this._expressRouteCircuitId = config.expressRouteCircuitId;
    this._expressRouteGatewayBypass = config.expressRouteGatewayBypass;
    this._localAzureIpAddressEnabled = config.localAzureIpAddressEnabled;
    this._localNetworkGatewayId = config.localNetworkGatewayId;
    this._location = config.location;
    this._name = config.name;
    this._peerVirtualNetworkGatewayId = config.peerVirtualNetworkGatewayId;
    this._resourceGroupName = config.resourceGroupName;
    this._routingWeight = config.routingWeight;
    this._sharedKey = config.sharedKey;
    this._tags = config.tags;
    this._type = config.type;
    this._usePolicyBasedTrafficSelectors = config.usePolicyBasedTrafficSelectors;
    this._virtualNetworkGatewayId = config.virtualNetworkGatewayId;
    this._ipsecPolicy.internalValue = config.ipsecPolicy;
    this._timeouts.internalValue = config.timeouts;
    this._trafficSelectorPolicy.internalValue = config.trafficSelectorPolicy;
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

  // connection_protocol - computed: true, optional: true, required: false
  private _connectionProtocol?: string; 
  public get connectionProtocol() {
    return this.getStringAttribute('connection_protocol');
  }
  public set connectionProtocol(value: string) {
    this._connectionProtocol = value;
  }
  public resetConnectionProtocol() {
    this._connectionProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionProtocolInput() {
    return this._connectionProtocol;
  }

  // dpd_timeout_seconds - computed: false, optional: true, required: false
  private _dpdTimeoutSeconds?: number; 
  public get dpdTimeoutSeconds() {
    return this.getNumberAttribute('dpd_timeout_seconds');
  }
  public set dpdTimeoutSeconds(value: number) {
    this._dpdTimeoutSeconds = value;
  }
  public resetDpdTimeoutSeconds() {
    this._dpdTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdTimeoutSecondsInput() {
    return this._dpdTimeoutSeconds;
  }

  // enable_bgp - computed: true, optional: true, required: false
  private _enableBgp?: boolean | cdktf.IResolvable; 
  public get enableBgp() {
    return this.getBooleanAttribute('enable_bgp') as any;
  }
  public set enableBgp(value: boolean | cdktf.IResolvable) {
    this._enableBgp = value;
  }
  public resetEnableBgp() {
    this._enableBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBgpInput() {
    return this._enableBgp;
  }

  // express_route_circuit_id - computed: false, optional: true, required: false
  private _expressRouteCircuitId?: string; 
  public get expressRouteCircuitId() {
    return this.getStringAttribute('express_route_circuit_id');
  }
  public set expressRouteCircuitId(value: string) {
    this._expressRouteCircuitId = value;
  }
  public resetExpressRouteCircuitId() {
    this._expressRouteCircuitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressRouteCircuitIdInput() {
    return this._expressRouteCircuitId;
  }

  // express_route_gateway_bypass - computed: true, optional: true, required: false
  private _expressRouteGatewayBypass?: boolean | cdktf.IResolvable; 
  public get expressRouteGatewayBypass() {
    return this.getBooleanAttribute('express_route_gateway_bypass') as any;
  }
  public set expressRouteGatewayBypass(value: boolean | cdktf.IResolvable) {
    this._expressRouteGatewayBypass = value;
  }
  public resetExpressRouteGatewayBypass() {
    this._expressRouteGatewayBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressRouteGatewayBypassInput() {
    return this._expressRouteGatewayBypass;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_azure_ip_address_enabled - computed: false, optional: true, required: false
  private _localAzureIpAddressEnabled?: boolean | cdktf.IResolvable; 
  public get localAzureIpAddressEnabled() {
    return this.getBooleanAttribute('local_azure_ip_address_enabled') as any;
  }
  public set localAzureIpAddressEnabled(value: boolean | cdktf.IResolvable) {
    this._localAzureIpAddressEnabled = value;
  }
  public resetLocalAzureIpAddressEnabled() {
    this._localAzureIpAddressEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAzureIpAddressEnabledInput() {
    return this._localAzureIpAddressEnabled;
  }

  // local_network_gateway_id - computed: false, optional: true, required: false
  private _localNetworkGatewayId?: string; 
  public get localNetworkGatewayId() {
    return this.getStringAttribute('local_network_gateway_id');
  }
  public set localNetworkGatewayId(value: string) {
    this._localNetworkGatewayId = value;
  }
  public resetLocalNetworkGatewayId() {
    this._localNetworkGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localNetworkGatewayIdInput() {
    return this._localNetworkGatewayId;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // peer_virtual_network_gateway_id - computed: false, optional: true, required: false
  private _peerVirtualNetworkGatewayId?: string; 
  public get peerVirtualNetworkGatewayId() {
    return this.getStringAttribute('peer_virtual_network_gateway_id');
  }
  public set peerVirtualNetworkGatewayId(value: string) {
    this._peerVirtualNetworkGatewayId = value;
  }
  public resetPeerVirtualNetworkGatewayId() {
    this._peerVirtualNetworkGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVirtualNetworkGatewayIdInput() {
    return this._peerVirtualNetworkGatewayId;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // routing_weight - computed: true, optional: true, required: false
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

  // shared_key - computed: false, optional: true, required: false
  private _sharedKey?: string; 
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }
  public set sharedKey(value: string) {
    this._sharedKey = value;
  }
  public resetSharedKey() {
    this._sharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedKeyInput() {
    return this._sharedKey;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // use_policy_based_traffic_selectors - computed: true, optional: true, required: false
  private _usePolicyBasedTrafficSelectors?: boolean | cdktf.IResolvable; 
  public get usePolicyBasedTrafficSelectors() {
    return this.getBooleanAttribute('use_policy_based_traffic_selectors') as any;
  }
  public set usePolicyBasedTrafficSelectors(value: boolean | cdktf.IResolvable) {
    this._usePolicyBasedTrafficSelectors = value;
  }
  public resetUsePolicyBasedTrafficSelectors() {
    this._usePolicyBasedTrafficSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePolicyBasedTrafficSelectorsInput() {
    return this._usePolicyBasedTrafficSelectors;
  }

  // virtual_network_gateway_id - computed: false, optional: false, required: true
  private _virtualNetworkGatewayId?: string; 
  public get virtualNetworkGatewayId() {
    return this.getStringAttribute('virtual_network_gateway_id');
  }
  public set virtualNetworkGatewayId(value: string) {
    this._virtualNetworkGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkGatewayIdInput() {
    return this._virtualNetworkGatewayId;
  }

  // ipsec_policy - computed: false, optional: true, required: false
  private _ipsecPolicy = new VirtualNetworkGatewayConnectionIpsecPolicyOutputReference(this as any, "ipsec_policy", true);
  public get ipsecPolicy() {
    return this._ipsecPolicy;
  }
  public putIpsecPolicy(value: VirtualNetworkGatewayConnectionIpsecPolicy) {
    this._ipsecPolicy.internalValue = value;
  }
  public resetIpsecPolicy() {
    this._ipsecPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPolicyInput() {
    return this._ipsecPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualNetworkGatewayConnectionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualNetworkGatewayConnectionTimeouts) {
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
  private _trafficSelectorPolicy = new VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference(this as any, "traffic_selector_policy", true);
  public get trafficSelectorPolicy() {
    return this._trafficSelectorPolicy;
  }
  public putTrafficSelectorPolicy(value: VirtualNetworkGatewayConnectionTrafficSelectorPolicy) {
    this._trafficSelectorPolicy.internalValue = value;
  }
  public resetTrafficSelectorPolicy() {
    this._trafficSelectorPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSelectorPolicyInput() {
    return this._trafficSelectorPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorization_key: cdktf.stringToTerraform(this._authorizationKey),
      connection_protocol: cdktf.stringToTerraform(this._connectionProtocol),
      dpd_timeout_seconds: cdktf.numberToTerraform(this._dpdTimeoutSeconds),
      enable_bgp: cdktf.booleanToTerraform(this._enableBgp),
      express_route_circuit_id: cdktf.stringToTerraform(this._expressRouteCircuitId),
      express_route_gateway_bypass: cdktf.booleanToTerraform(this._expressRouteGatewayBypass),
      local_azure_ip_address_enabled: cdktf.booleanToTerraform(this._localAzureIpAddressEnabled),
      local_network_gateway_id: cdktf.stringToTerraform(this._localNetworkGatewayId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      peer_virtual_network_gateway_id: cdktf.stringToTerraform(this._peerVirtualNetworkGatewayId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      routing_weight: cdktf.numberToTerraform(this._routingWeight),
      shared_key: cdktf.stringToTerraform(this._sharedKey),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      use_policy_based_traffic_selectors: cdktf.booleanToTerraform(this._usePolicyBasedTrafficSelectors),
      virtual_network_gateway_id: cdktf.stringToTerraform(this._virtualNetworkGatewayId),
      ipsec_policy: virtualNetworkGatewayConnectionIpsecPolicyToTerraform(this._ipsecPolicy.internalValue),
      timeouts: virtualNetworkGatewayConnectionTimeoutsToTerraform(this._timeouts.internalValue),
      traffic_selector_policy: virtualNetworkGatewayConnectionTrafficSelectorPolicyToTerraform(this._trafficSelectorPolicy.internalValue),
    };
  }
}
