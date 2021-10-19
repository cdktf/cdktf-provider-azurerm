// https://www.terraform.io/docs/providers/azurerm/d/app_service_environment_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermAppServiceEnvironmentV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/app_service_environment_v3.html#name DataAzurermAppServiceEnvironmentV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/app_service_environment_v3.html#resource_group_name DataAzurermAppServiceEnvironmentV3#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/app_service_environment_v3.html#timeouts DataAzurermAppServiceEnvironmentV3#timeouts}
  */
  readonly timeouts?: DataAzurermAppServiceEnvironmentV3Timeouts;
}
export class DataAzurermAppServiceEnvironmentV3ClusterSetting extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies extends cdktf.ComplexComputedList {

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return this.getListAttribute('ports');
  }
}
export interface DataAzurermAppServiceEnvironmentV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/app_service_environment_v3.html#read DataAzurermAppServiceEnvironmentV3#read}
  */
  readonly read?: string;
}

function dataAzurermAppServiceEnvironmentV3TimeoutsToTerraform(struct?: DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference | DataAzurermAppServiceEnvironmentV3Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/app_service_environment_v3.html azurerm_app_service_environment_v3}
*/
export class DataAzurermAppServiceEnvironmentV3 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_app_service_environment_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/app_service_environment_v3.html azurerm_app_service_environment_v3} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermAppServiceEnvironmentV3Config
  */
  public constructor(scope: Construct, id: string, config: DataAzurermAppServiceEnvironmentV3Config) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service_environment_v3',
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

  // allow_new_private_endpoint_connections - computed: true, optional: false, required: false
  public get allowNewPrivateEndpointConnections() {
    return this.getBooleanAttribute('allow_new_private_endpoint_connections') as any;
  }

  // cluster_setting - computed: true, optional: false, required: false
  public clusterSetting(index: string) {
    return new DataAzurermAppServiceEnvironmentV3ClusterSetting(this, 'cluster_setting', index);
  }

  // dedicated_host_count - computed: true, optional: false, required: false
  public get dedicatedHostCount() {
    return this.getNumberAttribute('dedicated_host_count');
  }

  // dns_suffix - computed: true, optional: false, required: false
  public get dnsSuffix() {
    return this.getStringAttribute('dns_suffix');
  }

  // external_inbound_ip_addresses - computed: true, optional: false, required: false
  public get externalInboundIpAddresses() {
    return this.getListAttribute('external_inbound_ip_addresses');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inbound_network_dependencies - computed: true, optional: false, required: false
  public inboundNetworkDependencies(index: string) {
    return new DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies(this, 'inbound_network_dependencies', index);
  }

  // internal_inbound_ip_addresses - computed: true, optional: false, required: false
  public get internalInboundIpAddresses() {
    return this.getListAttribute('internal_inbound_ip_addresses');
  }

  // internal_load_balancing_mode - computed: true, optional: false, required: false
  public get internalLoadBalancingMode() {
    return this.getStringAttribute('internal_load_balancing_mode');
  }

  // ip_ssl_address_count - computed: true, optional: false, required: false
  public get ipSslAddressCount() {
    return this.getNumberAttribute('ip_ssl_address_count');
  }

  // linux_outbound_ip_addresses - computed: true, optional: false, required: false
  public get linuxOutboundIpAddresses() {
    return this.getListAttribute('linux_outbound_ip_addresses');
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

  // pricing_tier - computed: true, optional: false, required: false
  public get pricingTier() {
    return this.getStringAttribute('pricing_tier');
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

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // windows_outbound_ip_addresses - computed: true, optional: false, required: false
  public get windowsOutboundIpAddresses() {
    return this.getListAttribute('windows_outbound_ip_addresses');
  }

  // zone_redundant - computed: true, optional: false, required: false
  public get zoneRedundant() {
    return this.getBooleanAttribute('zone_redundant') as any;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermAppServiceEnvironmentV3Timeouts | undefined; 
  private __timeoutsOutput = new DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermAppServiceEnvironmentV3Timeouts | undefined) {
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
      timeouts: dataAzurermAppServiceEnvironmentV3TimeoutsToTerraform(this._timeouts),
    };
  }
}
