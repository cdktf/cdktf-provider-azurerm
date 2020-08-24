// https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface HdinsightSparkClusterConfig extends TerraformMetaArguments {
  readonly clusterVersion: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly tier: string;
  /** component_version block */
  readonly componentVersion: HdinsightSparkClusterComponentVersion[];
  /** gateway block */
  readonly gateway: HdinsightSparkClusterGateway[];
  /** roles block */
  readonly roles: HdinsightSparkClusterRoles[];
  /** storage_account block */
  readonly storageAccount?: HdinsightSparkClusterStorageAccount[];
  /** storage_account_gen2 block */
  readonly storageAccountGen2?: HdinsightSparkClusterStorageAccountGen2[];
  /** timeouts block */
  readonly timeouts?: HdinsightSparkClusterTimeouts;
}
export interface HdinsightSparkClusterComponentVersion {
  readonly spark: string;
}
export interface HdinsightSparkClusterGateway {
  readonly enabled: boolean;
  readonly password: string;
  readonly username: string;
}
export interface HdinsightSparkClusterRolesHeadNode {
  readonly password?: string;
  readonly sshKeys?: string[];
  readonly subnetId?: string;
  readonly username: string;
  readonly virtualNetworkId?: string;
  readonly vmSize: string;
}
export interface HdinsightSparkClusterRolesWorkerNode {
  readonly minInstanceCount?: number;
  readonly password?: string;
  readonly sshKeys?: string[];
  readonly subnetId?: string;
  readonly targetInstanceCount: number;
  readonly username: string;
  readonly virtualNetworkId?: string;
  readonly vmSize: string;
}
export interface HdinsightSparkClusterRolesZookeeperNode {
  readonly password?: string;
  readonly sshKeys?: string[];
  readonly subnetId?: string;
  readonly username: string;
  readonly virtualNetworkId?: string;
  readonly vmSize: string;
}
export interface HdinsightSparkClusterRoles {
  /** head_node block */
  readonly headNode: HdinsightSparkClusterRolesHeadNode[];
  /** worker_node block */
  readonly workerNode: HdinsightSparkClusterRolesWorkerNode[];
  /** zookeeper_node block */
  readonly zookeeperNode: HdinsightSparkClusterRolesZookeeperNode[];
}
export interface HdinsightSparkClusterStorageAccount {
  readonly isDefault: boolean;
  readonly storageAccountKey: string;
  readonly storageContainerId: string;
}
export interface HdinsightSparkClusterStorageAccountGen2 {
  readonly filesystemId: string;
  readonly isDefault: boolean;
  readonly managedIdentityResourceId: string;
  readonly storageResourceId: string;
}
export interface HdinsightSparkClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class HdinsightSparkCluster extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: HdinsightSparkClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_hdinsight_spark_cluster',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterVersion = config.clusterVersion;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._tier = config.tier;
    this._componentVersion = config.componentVersion;
    this._gateway = config.gateway;
    this._roles = config.roles;
    this._storageAccount = config.storageAccount;
    this._storageAccountGen2 = config.storageAccountGen2;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_version - computed: false, optional: false, required: true
  private _clusterVersion: string;
  public get clusterVersion() {
    return this._clusterVersion;
  }
  public set clusterVersion(value: string) {
    this._clusterVersion = value;
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

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // tier - computed: false, optional: false, required: true
  private _tier: string;
  public get tier() {
    return this._tier;
  }
  public set tier(value: string) {
    this._tier = value;
  }

  // component_version - computed: false, optional: false, required: true
  private _componentVersion: HdinsightSparkClusterComponentVersion[];
  public get componentVersion() {
    return this._componentVersion;
  }
  public set componentVersion(value: HdinsightSparkClusterComponentVersion[]) {
    this._componentVersion = value;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway: HdinsightSparkClusterGateway[];
  public get gateway() {
    return this._gateway;
  }
  public set gateway(value: HdinsightSparkClusterGateway[]) {
    this._gateway = value;
  }

  // roles - computed: false, optional: false, required: true
  private _roles: HdinsightSparkClusterRoles[];
  public get roles() {
    return this._roles;
  }
  public set roles(value: HdinsightSparkClusterRoles[]) {
    this._roles = value;
  }

  // storage_account - computed: false, optional: true, required: false
  private _storageAccount?: HdinsightSparkClusterStorageAccount[];
  public get storageAccount() {
    return this._storageAccount;
  }
  public set storageAccount(value: HdinsightSparkClusterStorageAccount[] | undefined) {
    this._storageAccount = value;
  }

  // storage_account_gen2 - computed: false, optional: true, required: false
  private _storageAccountGen2?: HdinsightSparkClusterStorageAccountGen2[];
  public get storageAccountGen2() {
    return this._storageAccountGen2;
  }
  public set storageAccountGen2(value: HdinsightSparkClusterStorageAccountGen2[] | undefined) {
    this._storageAccountGen2 = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HdinsightSparkClusterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: HdinsightSparkClusterTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_version: this._clusterVersion,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      tier: this._tier,
      component_version: this._componentVersion,
      gateway: this._gateway,
      roles: this._roles,
      storage_account: this._storageAccount,
      storage_account_gen2: this._storageAccountGen2,
      timeouts: this._timeouts,
    };
  }
}
