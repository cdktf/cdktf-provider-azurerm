// https://www.terraform.io/docs/providers/azurerm/d/kubernetes_cluster_node_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermKubernetesClusterNodePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_cluster_node_pool.html#kubernetes_cluster_name DataAzurermKubernetesClusterNodePool#kubernetes_cluster_name}
  */
  readonly kubernetesClusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_cluster_node_pool.html#name DataAzurermKubernetesClusterNodePool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_cluster_node_pool.html#resource_group_name DataAzurermKubernetesClusterNodePool#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_cluster_node_pool.html#timeouts DataAzurermKubernetesClusterNodePool#timeouts}
  */
  readonly timeouts?: DataAzurermKubernetesClusterNodePoolTimeouts;
}
export class DataAzurermKubernetesClusterNodePoolUpgradeSettings extends cdktf.ComplexComputedList {

  // max_surge - computed: true, optional: false, required: false
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }
}
export interface DataAzurermKubernetesClusterNodePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_cluster_node_pool.html#read DataAzurermKubernetesClusterNodePool#read}
  */
  readonly read?: string;
}

function dataAzurermKubernetesClusterNodePoolTimeoutsToTerraform(struct?: DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference | DataAzurermKubernetesClusterNodePoolTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_cluster_node_pool.html azurerm_kubernetes_cluster_node_pool}
*/
export class DataAzurermKubernetesClusterNodePool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_kubernetes_cluster_node_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/kubernetes_cluster_node_pool.html azurerm_kubernetes_cluster_node_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermKubernetesClusterNodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermKubernetesClusterNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kubernetes_cluster_node_pool',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._kubernetesClusterName = config.kubernetesClusterName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // enable_auto_scaling - computed: true, optional: false, required: false
  public get enableAutoScaling() {
    return this.getBooleanAttribute('enable_auto_scaling') as any;
  }

  // enable_node_public_ip - computed: true, optional: false, required: false
  public get enableNodePublicIp() {
    return this.getBooleanAttribute('enable_node_public_ip') as any;
  }

  // eviction_policy - computed: true, optional: false, required: false
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kubernetes_cluster_name - computed: false, optional: false, required: true
  private _kubernetesClusterName?: string; 
  public get kubernetesClusterName() {
    return this.getStringAttribute('kubernetes_cluster_name');
  }
  public set kubernetesClusterName(value: string) {
    this._kubernetesClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesClusterNameInput() {
    return this._kubernetesClusterName
  }

  // max_count - computed: true, optional: false, required: false
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }

  // max_pods - computed: true, optional: false, required: false
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }

  // min_count - computed: true, optional: false, required: false
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
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

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // node_labels - computed: true, optional: false, required: false
  public nodeLabels(key: string): string {
    return new cdktf.StringMap(this, 'node_labels').lookup(key);
  }

  // node_public_ip_prefix_id - computed: true, optional: false, required: false
  public get nodePublicIpPrefixId() {
    return this.getStringAttribute('node_public_ip_prefix_id');
  }

  // node_taints - computed: true, optional: false, required: false
  public get nodeTaints() {
    return this.getListAttribute('node_taints');
  }

  // orchestrator_version - computed: true, optional: false, required: false
  public get orchestratorVersion() {
    return this.getStringAttribute('orchestrator_version');
  }

  // os_disk_size_gb - computed: true, optional: false, required: false
  public get osDiskSizeGb() {
    return this.getNumberAttribute('os_disk_size_gb');
  }

  // os_disk_type - computed: true, optional: false, required: false
  public get osDiskType() {
    return this.getStringAttribute('os_disk_type');
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // proximity_placement_group_id - computed: true, optional: false, required: false
  public get proximityPlacementGroupId() {
    return this.getStringAttribute('proximity_placement_group_id');
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

  // spot_max_price - computed: true, optional: false, required: false
  public get spotMaxPrice() {
    return this.getNumberAttribute('spot_max_price');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // upgrade_settings - computed: true, optional: false, required: false
  public upgradeSettings(index: string) {
    return new DataAzurermKubernetesClusterNodePoolUpgradeSettings(this, 'upgrade_settings', index);
  }

  // vm_size - computed: true, optional: false, required: false
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }

  // vnet_subnet_id - computed: true, optional: false, required: false
  public get vnetSubnetId() {
    return this.getStringAttribute('vnet_subnet_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermKubernetesClusterNodePoolTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermKubernetesClusterNodePoolTimeouts | undefined) {
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
      kubernetes_cluster_name: cdktf.stringToTerraform(this._kubernetesClusterName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermKubernetesClusterNodePoolTimeoutsToTerraform(this._timeouts),
    };
  }
}
