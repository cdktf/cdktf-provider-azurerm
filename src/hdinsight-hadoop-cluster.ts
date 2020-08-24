// https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface HdinsightHadoopClusterConfig extends TerraformMetaArguments {
  readonly clusterVersion: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly tier: string;
  /** component_version block */
  readonly componentVersion: HdinsightHadoopClusterComponentVersion[];
  /** gateway block */
  readonly gateway: HdinsightHadoopClusterGateway[];
  /** roles block */
  readonly roles: HdinsightHadoopClusterRoles[];
  /** storage_account block */
  readonly storageAccount?: HdinsightHadoopClusterStorageAccount[];
  /** storage_account_gen2 block */
  readonly storageAccountGen2?: HdinsightHadoopClusterStorageAccountGen2[];
  /** timeouts block */
  readonly timeouts?: HdinsightHadoopClusterTimeouts;
}
export interface HdinsightHadoopClusterComponentVersion {
  readonly hadoop: string;
}
export interface HdinsightHadoopClusterGateway {
  readonly enabled: boolean;
  readonly password: string;
  readonly username: string;
}
export interface HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction {
  readonly name: string;
  readonly uri: string;
}
export interface HdinsightHadoopClusterRolesEdgeNode {
  readonly targetInstanceCount: number;
  readonly vmSize: string;
  /** install_script_action block */
  readonly installScriptAction: HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction[];
}
export interface HdinsightHadoopClusterRolesHeadNode {
  readonly password?: string;
  readonly sshKeys?: string[];
  readonly subnetId?: string;
  readonly username: string;
  readonly virtualNetworkId?: string;
  readonly vmSize: string;
}
export interface HdinsightHadoopClusterRolesWorkerNode {
  readonly minInstanceCount?: number;
  readonly password?: string;
  readonly sshKeys?: string[];
  readonly subnetId?: string;
  readonly targetInstanceCount: number;
  readonly username: string;
  readonly virtualNetworkId?: string;
  readonly vmSize: string;
}
export interface HdinsightHadoopClusterRolesZookeeperNode {
  readonly password?: string;
  readonly sshKeys?: string[];
  readonly subnetId?: string;
  readonly username: string;
  readonly virtualNetworkId?: string;
  readonly vmSize: string;
}
export interface HdinsightHadoopClusterRoles {
  /** edge_node block */
  readonly edgeNode?: HdinsightHadoopClusterRolesEdgeNode[];
  /** head_node block */
  readonly headNode: HdinsightHadoopClusterRolesHeadNode[];
  /** worker_node block */
  readonly workerNode: HdinsightHadoopClusterRolesWorkerNode[];
  /** zookeeper_node block */
  readonly zookeeperNode: HdinsightHadoopClusterRolesZookeeperNode[];
}
export interface HdinsightHadoopClusterStorageAccount {
  readonly isDefault: boolean;
  readonly storageAccountKey: string;
  readonly storageContainerId: string;
}
export interface HdinsightHadoopClusterStorageAccountGen2 {
  readonly filesystemId: string;
  readonly isDefault: boolean;
  readonly managedIdentityResourceId: string;
  readonly storageResourceId: string;
}
export interface HdinsightHadoopClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class HdinsightHadoopCluster extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: HdinsightHadoopClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_hdinsight_hadoop_cluster',
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
  private _componentVersion: HdinsightHadoopClusterComponentVersion[];
  public get componentVersion() {
    return this._componentVersion;
  }
  public set componentVersion(value: HdinsightHadoopClusterComponentVersion[]) {
    this._componentVersion = value;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway: HdinsightHadoopClusterGateway[];
  public get gateway() {
    return this._gateway;
  }
  public set gateway(value: HdinsightHadoopClusterGateway[]) {
    this._gateway = value;
  }

  // roles - computed: false, optional: false, required: true
  private _roles: HdinsightHadoopClusterRoles[];
  public get roles() {
    return this._roles;
  }
  public set roles(value: HdinsightHadoopClusterRoles[]) {
    this._roles = value;
  }

  // storage_account - computed: false, optional: true, required: false
  private _storageAccount?: HdinsightHadoopClusterStorageAccount[];
  public get storageAccount() {
    return this._storageAccount;
  }
  public set storageAccount(value: HdinsightHadoopClusterStorageAccount[] | undefined) {
    this._storageAccount = value;
  }

  // storage_account_gen2 - computed: false, optional: true, required: false
  private _storageAccountGen2?: HdinsightHadoopClusterStorageAccountGen2[];
  public get storageAccountGen2() {
    return this._storageAccountGen2;
  }
  public set storageAccountGen2(value: HdinsightHadoopClusterStorageAccountGen2[] | undefined) {
    this._storageAccountGen2 = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HdinsightHadoopClusterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: HdinsightHadoopClusterTimeouts | undefined) {
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
