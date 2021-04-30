// https://www.terraform.io/docs/providers/azurerm/r/vmware_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmwareClusterConfig extends cdktf.TerraformMetaArguments {
  readonly clusterNodeCount: number;
  readonly name: string;
  readonly skuName: string;
  readonly vmwareCloudId: string;
  /** timeouts block */
  readonly timeouts?: VmwareClusterTimeouts;
}
export interface VmwareClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function vmwareClusterTimeoutsToTerraform(struct?: VmwareClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class VmwareCluster extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VmwareClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_vmware_cluster',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterNodeCount = config.clusterNodeCount;
    this._name = config.name;
    this._skuName = config.skuName;
    this._vmwareCloudId = config.vmwareCloudId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_node_count - computed: false, optional: false, required: true
  private _clusterNodeCount: number;
  public get clusterNodeCount() {
    return this.getNumberAttribute('cluster_node_count');
  }
  public set clusterNodeCount(value: number) {
    this._clusterNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNodeCountInput() {
    return this._clusterNodeCount
  }

  // cluster_number - computed: true, optional: false, required: false
  public get clusterNumber() {
    return this.getNumberAttribute('cluster_number');
  }

  // hosts - computed: true, optional: false, required: false
  public get hosts() {
    return this.getListAttribute('hosts');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
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

  // sku_name - computed: false, optional: false, required: true
  private _skuName: string;
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
  }

  // vmware_cloud_id - computed: false, optional: false, required: true
  private _vmwareCloudId: string;
  public get vmwareCloudId() {
    return this.getStringAttribute('vmware_cloud_id');
  }
  public set vmwareCloudId(value: string) {
    this._vmwareCloudId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmwareCloudIdInput() {
    return this._vmwareCloudId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VmwareClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VmwareClusterTimeouts ) {
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
      cluster_node_count: cdktf.numberToTerraform(this._clusterNodeCount),
      name: cdktf.stringToTerraform(this._name),
      sku_name: cdktf.stringToTerraform(this._skuName),
      vmware_cloud_id: cdktf.stringToTerraform(this._vmwareCloudId),
      timeouts: vmwareClusterTimeoutsToTerraform(this._timeouts),
    };
  }
}
