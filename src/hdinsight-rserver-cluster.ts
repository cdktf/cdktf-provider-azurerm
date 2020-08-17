// https://www.terraform.io/docs/providers/azurerm/r/hdinsight_rserver_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface HdinsightRserverClusterConfig extends TerraformMetaArguments {
  readonly clusterVersion: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly rstudio: boolean;
  readonly tags?: { [key: string]: string };
  readonly tier: string;
  /** gateway block */
  readonly gateway: HdinsightRserverClusterGateway[];
  /** roles block */
  readonly roles: HdinsightRserverClusterRoles[];
  /** storage_account block */
  readonly storageAccount?: HdinsightRserverClusterStorageAccount[];
  /** timeouts block */
  readonly timeouts?: HdinsightRserverClusterTimeouts;
}
export interface HdinsightRserverClusterGateway {
  readonly enabled: boolean;
  readonly password: string;
  readonly username: string;
}
export interface HdinsightRserverClusterRolesEdgeNode {
  readonly password?: string;
  readonly sshKeys?: string[];
  readonly subnetId?: string;
  readonly username: string;
  readonly virtualNetworkId?: string;
  readonly vmSize: string;
}
export interface HdinsightRserverClusterRolesHeadNode {
  readonly password?: string;
  readonly sshKeys?: string[];
  readonly subnetId?: string;
  readonly username: string;
  readonly virtualNetworkId?: string;
  readonly vmSize: string;
}
export interface HdinsightRserverClusterRolesWorkerNode {
  readonly minInstanceCount?: number;
  readonly password?: string;
  readonly sshKeys?: string[];
  readonly subnetId?: string;
  readonly targetInstanceCount: number;
  readonly username: string;
  readonly virtualNetworkId?: string;
  readonly vmSize: string;
}
export interface HdinsightRserverClusterRolesZookeeperNode {
  readonly password?: string;
  readonly sshKeys?: string[];
  readonly subnetId?: string;
  readonly username: string;
  readonly virtualNetworkId?: string;
  readonly vmSize: string;
}
export interface HdinsightRserverClusterRoles {
  /** edge_node block */
  readonly edgeNode: HdinsightRserverClusterRolesEdgeNode[];
  /** head_node block */
  readonly headNode: HdinsightRserverClusterRolesHeadNode[];
  /** worker_node block */
  readonly workerNode: HdinsightRserverClusterRolesWorkerNode[];
  /** zookeeper_node block */
  readonly zookeeperNode: HdinsightRserverClusterRolesZookeeperNode[];
}
export interface HdinsightRserverClusterStorageAccount {
  readonly isDefault: boolean;
  readonly storageAccountKey: string;
  readonly storageContainerId: string;
}
export interface HdinsightRserverClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class HdinsightRserverCluster extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: HdinsightRserverClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_hdinsight_rserver_cluster',
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
    this._rstudio = config.rstudio;
    this._tags = config.tags;
    this._tier = config.tier;
    this._gateway = config.gateway;
    this._roles = config.roles;
    this._storageAccount = config.storageAccount;
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

  // edge_ssh_endpoint - computed: true, optional: false, required: true
  public get edgeSshEndpoint() {
    return this.getStringAttribute('edge_ssh_endpoint');
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

  // rstudio - computed: false, optional: false, required: true
  private _rstudio: boolean;
  public get rstudio() {
    return this._rstudio;
  }
  public set rstudio(value: boolean) {
    this._rstudio = value;
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

  // gateway - computed: false, optional: false, required: true
  private _gateway: HdinsightRserverClusterGateway[];
  public get gateway() {
    return this._gateway;
  }
  public set gateway(value: HdinsightRserverClusterGateway[]) {
    this._gateway = value;
  }

  // roles - computed: false, optional: false, required: true
  private _roles: HdinsightRserverClusterRoles[];
  public get roles() {
    return this._roles;
  }
  public set roles(value: HdinsightRserverClusterRoles[]) {
    this._roles = value;
  }

  // storage_account - computed: false, optional: true, required: false
  private _storageAccount?: HdinsightRserverClusterStorageAccount[];
  public get storageAccount() {
    return this._storageAccount;
  }
  public set storageAccount(value: HdinsightRserverClusterStorageAccount[] | undefined) {
    this._storageAccount = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HdinsightRserverClusterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: HdinsightRserverClusterTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_version: this._clusterVersion,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      rstudio: this._rstudio,
      tags: this._tags,
      tier: this._tier,
      gateway: this._gateway,
      roles: this._roles,
      storage_account: this._storageAccount,
      timeouts: this._timeouts,
    };
  }
}
