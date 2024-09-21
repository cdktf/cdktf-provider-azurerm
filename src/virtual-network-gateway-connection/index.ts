// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualNetworkGatewayConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#authorization_key VirtualNetworkGatewayConnection#authorization_key}
  */
  readonly authorizationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#connection_mode VirtualNetworkGatewayConnection#connection_mode}
  */
  readonly connectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#connection_protocol VirtualNetworkGatewayConnection#connection_protocol}
  */
  readonly connectionProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#dpd_timeout_seconds VirtualNetworkGatewayConnection#dpd_timeout_seconds}
  */
  readonly dpdTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#egress_nat_rule_ids VirtualNetworkGatewayConnection#egress_nat_rule_ids}
  */
  readonly egressNatRuleIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#enable_bgp VirtualNetworkGatewayConnection#enable_bgp}
  */
  readonly enableBgp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#express_route_circuit_id VirtualNetworkGatewayConnection#express_route_circuit_id}
  */
  readonly expressRouteCircuitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#express_route_gateway_bypass VirtualNetworkGatewayConnection#express_route_gateway_bypass}
  */
  readonly expressRouteGatewayBypass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#id VirtualNetworkGatewayConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#ingress_nat_rule_ids VirtualNetworkGatewayConnection#ingress_nat_rule_ids}
  */
  readonly ingressNatRuleIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#local_azure_ip_address_enabled VirtualNetworkGatewayConnection#local_azure_ip_address_enabled}
  */
  readonly localAzureIpAddressEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#local_network_gateway_id VirtualNetworkGatewayConnection#local_network_gateway_id}
  */
  readonly localNetworkGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#location VirtualNetworkGatewayConnection#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#name VirtualNetworkGatewayConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#peer_virtual_network_gateway_id VirtualNetworkGatewayConnection#peer_virtual_network_gateway_id}
  */
  readonly peerVirtualNetworkGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#private_link_fast_path_enabled VirtualNetworkGatewayConnection#private_link_fast_path_enabled}
  */
  readonly privateLinkFastPathEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#resource_group_name VirtualNetworkGatewayConnection#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#routing_weight VirtualNetworkGatewayConnection#routing_weight}
  */
  readonly routingWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#shared_key VirtualNetworkGatewayConnection#shared_key}
  */
  readonly sharedKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#tags VirtualNetworkGatewayConnection#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#type VirtualNetworkGatewayConnection#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#use_policy_based_traffic_selectors VirtualNetworkGatewayConnection#use_policy_based_traffic_selectors}
  */
  readonly usePolicyBasedTrafficSelectors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#virtual_network_gateway_id VirtualNetworkGatewayConnection#virtual_network_gateway_id}
  */
  readonly virtualNetworkGatewayId: string;
  /**
  * custom_bgp_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#custom_bgp_addresses VirtualNetworkGatewayConnection#custom_bgp_addresses}
  */
  readonly customBgpAddresses?: VirtualNetworkGatewayConnectionCustomBgpAddresses;
  /**
  * ipsec_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#ipsec_policy VirtualNetworkGatewayConnection#ipsec_policy}
  */
  readonly ipsecPolicy?: VirtualNetworkGatewayConnectionIpsecPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#timeouts VirtualNetworkGatewayConnection#timeouts}
  */
  readonly timeouts?: VirtualNetworkGatewayConnectionTimeouts;
  /**
  * traffic_selector_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#traffic_selector_policy VirtualNetworkGatewayConnection#traffic_selector_policy}
  */
  readonly trafficSelectorPolicy?: VirtualNetworkGatewayConnectionTrafficSelectorPolicy[] | cdktf.IResolvable;
}
export interface VirtualNetworkGatewayConnectionCustomBgpAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#primary VirtualNetworkGatewayConnection#primary}
  */
  readonly primary: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#secondary VirtualNetworkGatewayConnection#secondary}
  */
  readonly secondary?: string;
}

export function virtualNetworkGatewayConnectionCustomBgpAddressesToTerraform(struct?: VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference | VirtualNetworkGatewayConnectionCustomBgpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary: cdktf.stringToTerraform(struct!.primary),
    secondary: cdktf.stringToTerraform(struct!.secondary),
  }
}


export function virtualNetworkGatewayConnectionCustomBgpAddressesToHclTerraform(struct?: VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference | VirtualNetworkGatewayConnectionCustomBgpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary: {
      value: cdktf.stringToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary: {
      value: cdktf.stringToHclTerraform(struct!.secondary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkGatewayConnectionCustomBgpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._secondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondary = this._secondary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayConnectionCustomBgpAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._primary = undefined;
      this._secondary = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._primary = value.primary;
      this._secondary = value.secondary;
    }
  }

  // primary - computed: false, optional: false, required: true
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // secondary - computed: false, optional: true, required: false
  private _secondary?: string; 
  public get secondary() {
    return this.getStringAttribute('secondary');
  }
  public set secondary(value: string) {
    this._secondary = value;
  }
  public resetSecondary() {
    this._secondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary;
  }
}
export interface VirtualNetworkGatewayConnectionIpsecPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#dh_group VirtualNetworkGatewayConnection#dh_group}
  */
  readonly dhGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#ike_encryption VirtualNetworkGatewayConnection#ike_encryption}
  */
  readonly ikeEncryption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#ike_integrity VirtualNetworkGatewayConnection#ike_integrity}
  */
  readonly ikeIntegrity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#ipsec_encryption VirtualNetworkGatewayConnection#ipsec_encryption}
  */
  readonly ipsecEncryption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#ipsec_integrity VirtualNetworkGatewayConnection#ipsec_integrity}
  */
  readonly ipsecIntegrity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#pfs_group VirtualNetworkGatewayConnection#pfs_group}
  */
  readonly pfsGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#sa_datasize VirtualNetworkGatewayConnection#sa_datasize}
  */
  readonly saDatasize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#sa_lifetime VirtualNetworkGatewayConnection#sa_lifetime}
  */
  readonly saLifetime?: number;
}

export function virtualNetworkGatewayConnectionIpsecPolicyToTerraform(struct?: VirtualNetworkGatewayConnectionIpsecPolicyOutputReference | VirtualNetworkGatewayConnectionIpsecPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function virtualNetworkGatewayConnectionIpsecPolicyToHclTerraform(struct?: VirtualNetworkGatewayConnectionIpsecPolicyOutputReference | VirtualNetworkGatewayConnectionIpsecPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dh_group: {
      value: cdktf.stringToHclTerraform(struct!.dhGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_encryption: {
      value: cdktf.stringToHclTerraform(struct!.ikeEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_integrity: {
      value: cdktf.stringToHclTerraform(struct!.ikeIntegrity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_encryption: {
      value: cdktf.stringToHclTerraform(struct!.ipsecEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_integrity: {
      value: cdktf.stringToHclTerraform(struct!.ipsecIntegrity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pfs_group: {
      value: cdktf.stringToHclTerraform(struct!.pfsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sa_datasize: {
      value: cdktf.numberToHclTerraform(struct!.saDatasize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sa_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.saLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkGatewayConnectionIpsecPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkGatewayConnectionIpsecPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhGroup = this._dhGroup;
    }
    if (this._ikeEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeEncryption = this._ikeEncryption;
    }
    if (this._ikeIntegrity !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeIntegrity = this._ikeIntegrity;
    }
    if (this._ipsecEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecEncryption = this._ipsecEncryption;
    }
    if (this._ipsecIntegrity !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecIntegrity = this._ipsecIntegrity;
    }
    if (this._pfsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.pfsGroup = this._pfsGroup;
    }
    if (this._saDatasize !== undefined) {
      hasAnyValues = true;
      internalValueResult.saDatasize = this._saDatasize;
    }
    if (this._saLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.saLifetime = this._saLifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayConnectionIpsecPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
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
      this.isEmptyObject = Object.keys(value).length === 0;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#create VirtualNetworkGatewayConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#delete VirtualNetworkGatewayConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#read VirtualNetworkGatewayConnection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#update VirtualNetworkGatewayConnection#update}
  */
  readonly update?: string;
}

export function virtualNetworkGatewayConnectionTimeoutsToTerraform(struct?: VirtualNetworkGatewayConnectionTimeouts | cdktf.IResolvable): any {
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


export function virtualNetworkGatewayConnectionTimeoutsToHclTerraform(struct?: VirtualNetworkGatewayConnectionTimeouts | cdktf.IResolvable): any {
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

export class VirtualNetworkGatewayConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualNetworkGatewayConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualNetworkGatewayConnectionTimeouts | cdktf.IResolvable | undefined) {
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
export interface VirtualNetworkGatewayConnectionTrafficSelectorPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#local_address_cidrs VirtualNetworkGatewayConnection#local_address_cidrs}
  */
  readonly localAddressCidrs: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#remote_address_cidrs VirtualNetworkGatewayConnection#remote_address_cidrs}
  */
  readonly remoteAddressCidrs: string[];
}

export function virtualNetworkGatewayConnectionTrafficSelectorPolicyToTerraform(struct?: VirtualNetworkGatewayConnectionTrafficSelectorPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_address_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localAddressCidrs),
    remote_address_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteAddressCidrs),
  }
}


export function virtualNetworkGatewayConnectionTrafficSelectorPolicyToHclTerraform(struct?: VirtualNetworkGatewayConnectionTrafficSelectorPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_address_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localAddressCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    remote_address_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteAddressCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualNetworkGatewayConnectionTrafficSelectorPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localAddressCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAddressCidrs = this._localAddressCidrs;
    }
    if (this._remoteAddressCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAddressCidrs = this._remoteAddressCidrs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayConnectionTrafficSelectorPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localAddressCidrs = undefined;
      this._remoteAddressCidrs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class VirtualNetworkGatewayConnectionTrafficSelectorPolicyList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkGatewayConnectionTrafficSelectorPolicy[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference {
    return new VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection azurerm_virtual_network_gateway_connection}
*/
export class VirtualNetworkGatewayConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_virtual_network_gateway_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualNetworkGatewayConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualNetworkGatewayConnection to import
  * @param importFromId The id of the existing VirtualNetworkGatewayConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualNetworkGatewayConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_virtual_network_gateway_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway_connection azurerm_virtual_network_gateway_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualNetworkGatewayConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualNetworkGatewayConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_network_gateway_connection',
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
    this._connectionMode = config.connectionMode;
    this._connectionProtocol = config.connectionProtocol;
    this._dpdTimeoutSeconds = config.dpdTimeoutSeconds;
    this._egressNatRuleIds = config.egressNatRuleIds;
    this._enableBgp = config.enableBgp;
    this._expressRouteCircuitId = config.expressRouteCircuitId;
    this._expressRouteGatewayBypass = config.expressRouteGatewayBypass;
    this._id = config.id;
    this._ingressNatRuleIds = config.ingressNatRuleIds;
    this._localAzureIpAddressEnabled = config.localAzureIpAddressEnabled;
    this._localNetworkGatewayId = config.localNetworkGatewayId;
    this._location = config.location;
    this._name = config.name;
    this._peerVirtualNetworkGatewayId = config.peerVirtualNetworkGatewayId;
    this._privateLinkFastPathEnabled = config.privateLinkFastPathEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._routingWeight = config.routingWeight;
    this._sharedKey = config.sharedKey;
    this._tags = config.tags;
    this._type = config.type;
    this._usePolicyBasedTrafficSelectors = config.usePolicyBasedTrafficSelectors;
    this._virtualNetworkGatewayId = config.virtualNetworkGatewayId;
    this._customBgpAddresses.internalValue = config.customBgpAddresses;
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

  // connection_mode - computed: false, optional: true, required: false
  private _connectionMode?: string; 
  public get connectionMode() {
    return this.getStringAttribute('connection_mode');
  }
  public set connectionMode(value: string) {
    this._connectionMode = value;
  }
  public resetConnectionMode() {
    this._connectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionModeInput() {
    return this._connectionMode;
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

  // egress_nat_rule_ids - computed: false, optional: true, required: false
  private _egressNatRuleIds?: string[]; 
  public get egressNatRuleIds() {
    return cdktf.Fn.tolist(this.getListAttribute('egress_nat_rule_ids'));
  }
  public set egressNatRuleIds(value: string[]) {
    this._egressNatRuleIds = value;
  }
  public resetEgressNatRuleIds() {
    this._egressNatRuleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressNatRuleIdsInput() {
    return this._egressNatRuleIds;
  }

  // enable_bgp - computed: true, optional: true, required: false
  private _enableBgp?: boolean | cdktf.IResolvable; 
  public get enableBgp() {
    return this.getBooleanAttribute('enable_bgp');
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
    return this.getBooleanAttribute('express_route_gateway_bypass');
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

  // ingress_nat_rule_ids - computed: false, optional: true, required: false
  private _ingressNatRuleIds?: string[]; 
  public get ingressNatRuleIds() {
    return cdktf.Fn.tolist(this.getListAttribute('ingress_nat_rule_ids'));
  }
  public set ingressNatRuleIds(value: string[]) {
    this._ingressNatRuleIds = value;
  }
  public resetIngressNatRuleIds() {
    this._ingressNatRuleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressNatRuleIdsInput() {
    return this._ingressNatRuleIds;
  }

  // local_azure_ip_address_enabled - computed: false, optional: true, required: false
  private _localAzureIpAddressEnabled?: boolean | cdktf.IResolvable; 
  public get localAzureIpAddressEnabled() {
    return this.getBooleanAttribute('local_azure_ip_address_enabled');
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

  // shared_key - computed: false, optional: false, required: true
  private _sharedKey?: string; 
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }
  public set sharedKey(value: string) {
    this._sharedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedKeyInput() {
    return this._sharedKey;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
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
    return this.getBooleanAttribute('use_policy_based_traffic_selectors');
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

  // custom_bgp_addresses - computed: false, optional: true, required: false
  private _customBgpAddresses = new VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference(this, "custom_bgp_addresses");
  public get customBgpAddresses() {
    return this._customBgpAddresses;
  }
  public putCustomBgpAddresses(value: VirtualNetworkGatewayConnectionCustomBgpAddresses) {
    this._customBgpAddresses.internalValue = value;
  }
  public resetCustomBgpAddresses() {
    this._customBgpAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBgpAddressesInput() {
    return this._customBgpAddresses.internalValue;
  }

  // ipsec_policy - computed: false, optional: true, required: false
  private _ipsecPolicy = new VirtualNetworkGatewayConnectionIpsecPolicyOutputReference(this, "ipsec_policy");
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
  private _timeouts = new VirtualNetworkGatewayConnectionTimeoutsOutputReference(this, "timeouts");
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
  private _trafficSelectorPolicy = new VirtualNetworkGatewayConnectionTrafficSelectorPolicyList(this, "traffic_selector_policy", false);
  public get trafficSelectorPolicy() {
    return this._trafficSelectorPolicy;
  }
  public putTrafficSelectorPolicy(value: VirtualNetworkGatewayConnectionTrafficSelectorPolicy[] | cdktf.IResolvable) {
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
      connection_mode: cdktf.stringToTerraform(this._connectionMode),
      connection_protocol: cdktf.stringToTerraform(this._connectionProtocol),
      dpd_timeout_seconds: cdktf.numberToTerraform(this._dpdTimeoutSeconds),
      egress_nat_rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._egressNatRuleIds),
      enable_bgp: cdktf.booleanToTerraform(this._enableBgp),
      express_route_circuit_id: cdktf.stringToTerraform(this._expressRouteCircuitId),
      express_route_gateway_bypass: cdktf.booleanToTerraform(this._expressRouteGatewayBypass),
      id: cdktf.stringToTerraform(this._id),
      ingress_nat_rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ingressNatRuleIds),
      local_azure_ip_address_enabled: cdktf.booleanToTerraform(this._localAzureIpAddressEnabled),
      local_network_gateway_id: cdktf.stringToTerraform(this._localNetworkGatewayId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      peer_virtual_network_gateway_id: cdktf.stringToTerraform(this._peerVirtualNetworkGatewayId),
      private_link_fast_path_enabled: cdktf.booleanToTerraform(this._privateLinkFastPathEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      routing_weight: cdktf.numberToTerraform(this._routingWeight),
      shared_key: cdktf.stringToTerraform(this._sharedKey),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      use_policy_based_traffic_selectors: cdktf.booleanToTerraform(this._usePolicyBasedTrafficSelectors),
      virtual_network_gateway_id: cdktf.stringToTerraform(this._virtualNetworkGatewayId),
      custom_bgp_addresses: virtualNetworkGatewayConnectionCustomBgpAddressesToTerraform(this._customBgpAddresses.internalValue),
      ipsec_policy: virtualNetworkGatewayConnectionIpsecPolicyToTerraform(this._ipsecPolicy.internalValue),
      timeouts: virtualNetworkGatewayConnectionTimeoutsToTerraform(this._timeouts.internalValue),
      traffic_selector_policy: cdktf.listMapper(virtualNetworkGatewayConnectionTrafficSelectorPolicyToTerraform, true)(this._trafficSelectorPolicy.internalValue),
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
      connection_mode: {
        value: cdktf.stringToHclTerraform(this._connectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_protocol: {
        value: cdktf.stringToHclTerraform(this._connectionProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dpd_timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._dpdTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      egress_nat_rule_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._egressNatRuleIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enable_bgp: {
        value: cdktf.booleanToHclTerraform(this._enableBgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      express_route_circuit_id: {
        value: cdktf.stringToHclTerraform(this._expressRouteCircuitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      express_route_gateway_bypass: {
        value: cdktf.booleanToHclTerraform(this._expressRouteGatewayBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress_nat_rule_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ingressNatRuleIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      local_azure_ip_address_enabled: {
        value: cdktf.booleanToHclTerraform(this._localAzureIpAddressEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_network_gateway_id: {
        value: cdktf.stringToHclTerraform(this._localNetworkGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      peer_virtual_network_gateway_id: {
        value: cdktf.stringToHclTerraform(this._peerVirtualNetworkGatewayId),
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
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_weight: {
        value: cdktf.numberToHclTerraform(this._routingWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_key: {
        value: cdktf.stringToHclTerraform(this._sharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_policy_based_traffic_selectors: {
        value: cdktf.booleanToHclTerraform(this._usePolicyBasedTrafficSelectors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      virtual_network_gateway_id: {
        value: cdktf.stringToHclTerraform(this._virtualNetworkGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_bgp_addresses: {
        value: virtualNetworkGatewayConnectionCustomBgpAddressesToHclTerraform(this._customBgpAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualNetworkGatewayConnectionCustomBgpAddressesList",
      },
      ipsec_policy: {
        value: virtualNetworkGatewayConnectionIpsecPolicyToHclTerraform(this._ipsecPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualNetworkGatewayConnectionIpsecPolicyList",
      },
      timeouts: {
        value: virtualNetworkGatewayConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualNetworkGatewayConnectionTimeouts",
      },
      traffic_selector_policy: {
        value: cdktf.listMapperHcl(virtualNetworkGatewayConnectionTrafficSelectorPolicyToHclTerraform, true)(this._trafficSelectorPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualNetworkGatewayConnectionTrafficSelectorPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
