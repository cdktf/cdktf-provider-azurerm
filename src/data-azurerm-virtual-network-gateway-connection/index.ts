// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/virtual_network_gateway_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermVirtualNetworkGatewayConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/virtual_network_gateway_connection#id DataAzurermVirtualNetworkGatewayConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/virtual_network_gateway_connection#name DataAzurermVirtualNetworkGatewayConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/virtual_network_gateway_connection#resource_group_name DataAzurermVirtualNetworkGatewayConnection#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/virtual_network_gateway_connection#timeouts DataAzurermVirtualNetworkGatewayConnection#timeouts}
  */
  readonly timeouts?: DataAzurermVirtualNetworkGatewayConnectionTimeouts;
}
export interface DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy {
}

export function dataAzurermVirtualNetworkGatewayConnectionIpsecPolicyToTerraform(struct?: DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermVirtualNetworkGatewayConnectionIpsecPolicyToHclTerraform(struct?: DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dh_group - computed: true, optional: false, required: false
  public get dhGroup() {
    return this.getStringAttribute('dh_group');
  }

  // ike_encryption - computed: true, optional: false, required: false
  public get ikeEncryption() {
    return this.getStringAttribute('ike_encryption');
  }

  // ike_integrity - computed: true, optional: false, required: false
  public get ikeIntegrity() {
    return this.getStringAttribute('ike_integrity');
  }

  // ipsec_encryption - computed: true, optional: false, required: false
  public get ipsecEncryption() {
    return this.getStringAttribute('ipsec_encryption');
  }

  // ipsec_integrity - computed: true, optional: false, required: false
  public get ipsecIntegrity() {
    return this.getStringAttribute('ipsec_integrity');
  }

  // pfs_group - computed: true, optional: false, required: false
  public get pfsGroup() {
    return this.getStringAttribute('pfs_group');
  }

  // sa_datasize - computed: true, optional: false, required: false
  public get saDatasize() {
    return this.getNumberAttribute('sa_datasize');
  }

  // sa_lifetime - computed: true, optional: false, required: false
  public get saLifetime() {
    return this.getNumberAttribute('sa_lifetime');
  }
}

export class DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference {
    return new DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy {
}

export function dataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyToTerraform(struct?: DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyToHclTerraform(struct?: DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local_address_cidrs - computed: true, optional: false, required: false
  public get localAddressCidrs() {
    return this.getListAttribute('local_address_cidrs');
  }

  // remote_address_cidrs - computed: true, optional: false, required: false
  public get remoteAddressCidrs() {
    return this.getListAttribute('remote_address_cidrs');
  }
}

export class DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference {
    return new DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermVirtualNetworkGatewayConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/virtual_network_gateway_connection#read DataAzurermVirtualNetworkGatewayConnection#read}
  */
  readonly read?: string;
}

export function dataAzurermVirtualNetworkGatewayConnectionTimeoutsToTerraform(struct?: DataAzurermVirtualNetworkGatewayConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermVirtualNetworkGatewayConnectionTimeoutsToHclTerraform(struct?: DataAzurermVirtualNetworkGatewayConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermVirtualNetworkGatewayConnectionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermVirtualNetworkGatewayConnectionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/virtual_network_gateway_connection azurerm_virtual_network_gateway_connection}
*/
export class DataAzurermVirtualNetworkGatewayConnection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_virtual_network_gateway_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermVirtualNetworkGatewayConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermVirtualNetworkGatewayConnection to import
  * @param importFromId The id of the existing DataAzurermVirtualNetworkGatewayConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/virtual_network_gateway_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermVirtualNetworkGatewayConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_virtual_network_gateway_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/virtual_network_gateway_connection azurerm_virtual_network_gateway_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermVirtualNetworkGatewayConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermVirtualNetworkGatewayConnectionConfig) {
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
    this._id = config.id;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_key - computed: true, optional: false, required: false
  public get authorizationKey() {
    return this.getStringAttribute('authorization_key');
  }

  // connection_protocol - computed: true, optional: false, required: false
  public get connectionProtocol() {
    return this.getStringAttribute('connection_protocol');
  }

  // dpd_timeout_seconds - computed: true, optional: false, required: false
  public get dpdTimeoutSeconds() {
    return this.getNumberAttribute('dpd_timeout_seconds');
  }

  // egress_bytes_transferred - computed: true, optional: false, required: false
  public get egressBytesTransferred() {
    return this.getNumberAttribute('egress_bytes_transferred');
  }

  // enable_bgp - computed: true, optional: false, required: false
  public get enableBgp() {
    return this.getBooleanAttribute('enable_bgp');
  }

  // express_route_circuit_id - computed: true, optional: false, required: false
  public get expressRouteCircuitId() {
    return this.getStringAttribute('express_route_circuit_id');
  }

  // express_route_gateway_bypass - computed: true, optional: false, required: false
  public get expressRouteGatewayBypass() {
    return this.getBooleanAttribute('express_route_gateway_bypass');
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

  // ingress_bytes_transferred - computed: true, optional: false, required: false
  public get ingressBytesTransferred() {
    return this.getNumberAttribute('ingress_bytes_transferred');
  }

  // ipsec_policy - computed: true, optional: false, required: false
  private _ipsecPolicy = new DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList(this, "ipsec_policy", false);
  public get ipsecPolicy() {
    return this._ipsecPolicy;
  }

  // local_azure_ip_address_enabled - computed: true, optional: false, required: false
  public get localAzureIpAddressEnabled() {
    return this.getBooleanAttribute('local_azure_ip_address_enabled');
  }

  // local_network_gateway_id - computed: true, optional: false, required: false
  public get localNetworkGatewayId() {
    return this.getStringAttribute('local_network_gateway_id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // peer_virtual_network_gateway_id - computed: true, optional: false, required: false
  public get peerVirtualNetworkGatewayId() {
    return this.getStringAttribute('peer_virtual_network_gateway_id');
  }

  // private_link_fast_path_enabled - computed: true, optional: false, required: false
  public get privateLinkFastPathEnabled() {
    return this.getBooleanAttribute('private_link_fast_path_enabled');
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

  // resource_guid - computed: true, optional: false, required: false
  public get resourceGuid() {
    return this.getStringAttribute('resource_guid');
  }

  // routing_weight - computed: true, optional: false, required: false
  public get routingWeight() {
    return this.getNumberAttribute('routing_weight');
  }

  // shared_key - computed: true, optional: false, required: false
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // traffic_selector_policy - computed: true, optional: false, required: false
  private _trafficSelectorPolicy = new DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList(this, "traffic_selector_policy", false);
  public get trafficSelectorPolicy() {
    return this._trafficSelectorPolicy;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_policy_based_traffic_selectors - computed: true, optional: false, required: false
  public get usePolicyBasedTrafficSelectors() {
    return this.getBooleanAttribute('use_policy_based_traffic_selectors');
  }

  // virtual_network_gateway_id - computed: true, optional: false, required: false
  public get virtualNetworkGatewayId() {
    return this.getStringAttribute('virtual_network_gateway_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermVirtualNetworkGatewayConnectionTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermVirtualNetworkGatewayConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataAzurermVirtualNetworkGatewayConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermVirtualNetworkGatewayConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
