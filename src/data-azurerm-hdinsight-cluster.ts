// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_hdinsight_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAzurermHdinsightClusterConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermHdinsightClusterTimeouts;
}
export class DataAzurermHdinsightClusterGateway extends ComplexComputedList {

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // password - computed: true, optional: false, required: true
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: true
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataAzurermHdinsightClusterTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermHdinsightCluster extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermHdinsightClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_hdinsight_cluster',
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

  // cluster_version - computed: true, optional: false, required: true
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }

  // component_versions - computed: true, optional: false, required: true
  public componentVersions(key: string): string {
    return new StringMap(this, 'component_versions').lookup(key);
  }

  // edge_ssh_endpoint - computed: true, optional: false, required: true
  public get edgeSshEndpoint() {
    return this.getStringAttribute('edge_ssh_endpoint');
  }

  // gateway - computed: true, optional: false, required: true
  public gateway(index: string) {
    return new DataAzurermHdinsightClusterGateway(this, 'gateway', index);
  }

  // https_endpoint - computed: true, optional: false, required: true
  public get httpsEndpoint() {
    return this.getStringAttribute('https_endpoint');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kind - computed: true, optional: false, required: true
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // ssh_endpoint - computed: true, optional: false, required: true
  public get sshEndpoint() {
    return this.getStringAttribute('ssh_endpoint');
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // tier - computed: true, optional: false, required: true
  public get tier() {
    return this.getStringAttribute('tier');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermHdinsightClusterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermHdinsightClusterTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
