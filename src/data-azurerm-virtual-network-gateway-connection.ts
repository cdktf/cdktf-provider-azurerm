// https://www.terraform.io/docs/providers/azurerm/d/virtual_network_gateway_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermVirtualNetworkGatewayConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_network_gateway_connection.html#name DataAzurermVirtualNetworkGatewayConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_network_gateway_connection.html#resource_group_name DataAzurermVirtualNetworkGatewayConnection#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_network_gateway_connection.html#timeouts DataAzurermVirtualNetworkGatewayConnection#timeouts}
  */
  readonly timeouts?: DataAzurermVirtualNetworkGatewayConnectionTimeouts;
}
export class DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy extends cdktf.ComplexComputedList {

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
export class DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy extends cdktf.ComplexComputedList {

  // local_address_cidrs - computed: true, optional: false, required: false
  public get localAddressCidrs() {
    return this.getListAttribute('local_address_cidrs');
  }

  // remote_address_cidrs - computed: true, optional: false, required: false
  public get remoteAddressCidrs() {
    return this.getListAttribute('remote_address_cidrs');
  }
}
export interface DataAzurermVirtualNetworkGatewayConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_network_gateway_connection.html#read DataAzurermVirtualNetworkGatewayConnection#read}
  */
  readonly read?: string;
}

function dataAzurermVirtualNetworkGatewayConnectionTimeoutsToTerraform(struct?: DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference | DataAzurermVirtualNetworkGatewayConnectionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_network_gateway_connection.html azurerm_virtual_network_gateway_connection}
*/
export class DataAzurermVirtualNetworkGatewayConnection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_virtual_network_gateway_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_network_gateway_connection.html azurerm_virtual_network_gateway_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermVirtualNetworkGatewayConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermVirtualNetworkGatewayConnectionConfig) {
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
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
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
    return this.getBooleanAttribute('enable_bgp') as any;
  }

  // express_route_circuit_id - computed: true, optional: false, required: false
  public get expressRouteCircuitId() {
    return this.getStringAttribute('express_route_circuit_id');
  }

  // express_route_gateway_bypass - computed: true, optional: false, required: false
  public get expressRouteGatewayBypass() {
    return this.getBooleanAttribute('express_route_gateway_bypass') as any;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress_bytes_transferred - computed: true, optional: false, required: false
  public get ingressBytesTransferred() {
    return this.getNumberAttribute('ingress_bytes_transferred');
  }

  // ipsec_policy - computed: true, optional: false, required: false
  public ipsecPolicy(index: string) {
    return new DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy(this, 'ipsec_policy', index);
  }

  // local_azure_ip_address_enabled - computed: true, optional: false, required: false
  public get localAzureIpAddressEnabled() {
    return this.getBooleanAttribute('local_azure_ip_address_enabled') as any;
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
    return this._name
  }

  // peer_virtual_network_gateway_id - computed: true, optional: false, required: false
  public get peerVirtualNetworkGatewayId() {
    return this.getStringAttribute('peer_virtual_network_gateway_id');
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
    return this._resourceGroupName
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
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // traffic_selector_policy - computed: true, optional: false, required: false
  public trafficSelectorPolicy(index: string) {
    return new DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy(this, 'traffic_selector_policy', index);
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_policy_based_traffic_selectors - computed: true, optional: false, required: false
  public get usePolicyBasedTrafficSelectors() {
    return this.getBooleanAttribute('use_policy_based_traffic_selectors') as any;
  }

  // virtual_network_gateway_id - computed: true, optional: false, required: false
  public get virtualNetworkGatewayId() {
    return this.getStringAttribute('virtual_network_gateway_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermVirtualNetworkGatewayConnectionTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermVirtualNetworkGatewayConnectionTimeouts | undefined) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermVirtualNetworkGatewayConnectionTimeoutsToTerraform(this._timeouts),
    };
  }
}
