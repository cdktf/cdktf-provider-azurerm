// https://www.terraform.io/docs/providers/azurerm/r/app_service_environment_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppServiceEnvironmentV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment_v3.html#allow_new_private_endpoint_connections AppServiceEnvironmentV3#allow_new_private_endpoint_connections}
  */
  readonly allowNewPrivateEndpointConnections?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment_v3.html#dedicated_host_count AppServiceEnvironmentV3#dedicated_host_count}
  */
  readonly dedicatedHostCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment_v3.html#internal_load_balancing_mode AppServiceEnvironmentV3#internal_load_balancing_mode}
  */
  readonly internalLoadBalancingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment_v3.html#name AppServiceEnvironmentV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment_v3.html#resource_group_name AppServiceEnvironmentV3#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment_v3.html#subnet_id AppServiceEnvironmentV3#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment_v3.html#tags AppServiceEnvironmentV3#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment_v3.html#zone_redundant AppServiceEnvironmentV3#zone_redundant}
  */
  readonly zoneRedundant?: boolean | cdktf.IResolvable;
  /**
  * cluster_setting block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment_v3.html#cluster_setting AppServiceEnvironmentV3#cluster_setting}
  */
  readonly clusterSetting?: AppServiceEnvironmentV3ClusterSetting[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment_v3.html#timeouts AppServiceEnvironmentV3#timeouts}
  */
  readonly timeouts?: AppServiceEnvironmentV3Timeouts;
}
export class AppServiceEnvironmentV3InboundNetworkDependencies extends cdktf.ComplexComputedList {

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
export interface AppServiceEnvironmentV3ClusterSetting {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment_v3.html#name AppServiceEnvironmentV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment_v3.html#value AppServiceEnvironmentV3#value}
  */
  readonly value: string;
}

function appServiceEnvironmentV3ClusterSettingToTerraform(struct?: AppServiceEnvironmentV3ClusterSetting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface AppServiceEnvironmentV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment_v3.html#create AppServiceEnvironmentV3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment_v3.html#delete AppServiceEnvironmentV3#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment_v3.html#read AppServiceEnvironmentV3#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment_v3.html#update AppServiceEnvironmentV3#update}
  */
  readonly update?: string;
}

function appServiceEnvironmentV3TimeoutsToTerraform(struct?: AppServiceEnvironmentV3TimeoutsOutputReference | AppServiceEnvironmentV3Timeouts): any {
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

export class AppServiceEnvironmentV3TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment_v3.html azurerm_app_service_environment_v3}
*/
export class AppServiceEnvironmentV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_app_service_environment_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_environment_v3.html azurerm_app_service_environment_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppServiceEnvironmentV3Config
  */
  public constructor(scope: Construct, id: string, config: AppServiceEnvironmentV3Config) {
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
    this._allowNewPrivateEndpointConnections = config.allowNewPrivateEndpointConnections;
    this._dedicatedHostCount = config.dedicatedHostCount;
    this._internalLoadBalancingMode = config.internalLoadBalancingMode;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._zoneRedundant = config.zoneRedundant;
    this._clusterSetting = config.clusterSetting;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_new_private_endpoint_connections - computed: false, optional: true, required: false
  private _allowNewPrivateEndpointConnections?: boolean | cdktf.IResolvable | undefined; 
  public get allowNewPrivateEndpointConnections() {
    return this.getBooleanAttribute('allow_new_private_endpoint_connections') as any;
  }
  public set allowNewPrivateEndpointConnections(value: boolean | cdktf.IResolvable | undefined) {
    this._allowNewPrivateEndpointConnections = value;
  }
  public resetAllowNewPrivateEndpointConnections() {
    this._allowNewPrivateEndpointConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNewPrivateEndpointConnectionsInput() {
    return this._allowNewPrivateEndpointConnections
  }

  // dedicated_host_count - computed: false, optional: true, required: false
  private _dedicatedHostCount?: number | undefined; 
  public get dedicatedHostCount() {
    return this.getNumberAttribute('dedicated_host_count');
  }
  public set dedicatedHostCount(value: number | undefined) {
    this._dedicatedHostCount = value;
  }
  public resetDedicatedHostCount() {
    this._dedicatedHostCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostCountInput() {
    return this._dedicatedHostCount
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
    return new AppServiceEnvironmentV3InboundNetworkDependencies(this, 'inbound_network_dependencies', index);
  }

  // internal_inbound_ip_addresses - computed: true, optional: false, required: false
  public get internalInboundIpAddresses() {
    return this.getListAttribute('internal_inbound_ip_addresses');
  }

  // internal_load_balancing_mode - computed: false, optional: true, required: false
  private _internalLoadBalancingMode?: string | undefined; 
  public get internalLoadBalancingMode() {
    return this.getStringAttribute('internal_load_balancing_mode');
  }
  public set internalLoadBalancingMode(value: string | undefined) {
    this._internalLoadBalancingMode = value;
  }
  public resetInternalLoadBalancingMode() {
    this._internalLoadBalancingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalLoadBalancingModeInput() {
    return this._internalLoadBalancingMode
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

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // windows_outbound_ip_addresses - computed: true, optional: false, required: false
  public get windowsOutboundIpAddresses() {
    return this.getListAttribute('windows_outbound_ip_addresses');
  }

  // zone_redundant - computed: false, optional: true, required: false
  private _zoneRedundant?: boolean | cdktf.IResolvable | undefined; 
  public get zoneRedundant() {
    return this.getBooleanAttribute('zone_redundant') as any;
  }
  public set zoneRedundant(value: boolean | cdktf.IResolvable | undefined) {
    this._zoneRedundant = value;
  }
  public resetZoneRedundant() {
    this._zoneRedundant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneRedundantInput() {
    return this._zoneRedundant
  }

  // cluster_setting - computed: false, optional: true, required: false
  private _clusterSetting?: AppServiceEnvironmentV3ClusterSetting[] | undefined; 
  public get clusterSetting() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('cluster_setting') as any;
  }
  public set clusterSetting(value: AppServiceEnvironmentV3ClusterSetting[] | undefined) {
    this._clusterSetting = value;
  }
  public resetClusterSetting() {
    this._clusterSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSettingInput() {
    return this._clusterSetting
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppServiceEnvironmentV3Timeouts | undefined; 
  private __timeoutsOutput = new AppServiceEnvironmentV3TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: AppServiceEnvironmentV3Timeouts | undefined) {
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
      allow_new_private_endpoint_connections: cdktf.booleanToTerraform(this._allowNewPrivateEndpointConnections),
      dedicated_host_count: cdktf.numberToTerraform(this._dedicatedHostCount),
      internal_load_balancing_mode: cdktf.stringToTerraform(this._internalLoadBalancingMode),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      zone_redundant: cdktf.booleanToTerraform(this._zoneRedundant),
      cluster_setting: cdktf.listMapper(appServiceEnvironmentV3ClusterSettingToTerraform)(this._clusterSetting),
      timeouts: appServiceEnvironmentV3TimeoutsToTerraform(this._timeouts),
    };
  }
}
