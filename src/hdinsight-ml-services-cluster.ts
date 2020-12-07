// https://www.terraform.io/docs/providers/azurerm/r/hdinsight_ml_services_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HdinsightMlServicesClusterConfig extends cdktf.TerraformMetaArguments {
  readonly clusterVersion: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly rstudio: boolean;
  readonly tags?: { [key: string]: string };
  readonly tier: string;
  readonly tlsMinVersion?: string;
  /** gateway block */
  readonly gateway: HdinsightMlServicesClusterGateway[];
  /** roles block */
  readonly roles: HdinsightMlServicesClusterRoles[];
  /** storage_account block */
  readonly storageAccount?: HdinsightMlServicesClusterStorageAccount[];
  /** timeouts block */
  readonly timeouts?: HdinsightMlServicesClusterTimeouts;
}
export interface HdinsightMlServicesClusterGateway {
  readonly enabled?: boolean;
  readonly password: string;
  readonly username: string;
}

function hdinsightMlServicesClusterGatewayToTerraform(struct?: HdinsightMlServicesClusterGateway): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface HdinsightMlServicesClusterRolesEdgeNode {
  readonly password?: string;
  readonly sshKeys?: string[];
  readonly subnetId?: string;
  readonly username: string;
  readonly virtualNetworkId?: string;
  readonly vmSize: string;
}

function hdinsightMlServicesClusterRolesEdgeNodeToTerraform(struct?: HdinsightMlServicesClusterRolesEdgeNode): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sshKeys),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    username: cdktf.stringToTerraform(struct!.username),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
  }
}

export interface HdinsightMlServicesClusterRolesHeadNode {
  readonly password?: string;
  readonly sshKeys?: string[];
  readonly subnetId?: string;
  readonly username: string;
  readonly virtualNetworkId?: string;
  readonly vmSize: string;
}

function hdinsightMlServicesClusterRolesHeadNodeToTerraform(struct?: HdinsightMlServicesClusterRolesHeadNode): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sshKeys),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    username: cdktf.stringToTerraform(struct!.username),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
  }
}

export interface HdinsightMlServicesClusterRolesWorkerNode {
  readonly minInstanceCount?: number;
  readonly password?: string;
  readonly sshKeys?: string[];
  readonly subnetId?: string;
  readonly targetInstanceCount: number;
  readonly username: string;
  readonly virtualNetworkId?: string;
  readonly vmSize: string;
}

function hdinsightMlServicesClusterRolesWorkerNodeToTerraform(struct?: HdinsightMlServicesClusterRolesWorkerNode): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    min_instance_count: cdktf.numberToTerraform(struct!.minInstanceCount),
    password: cdktf.stringToTerraform(struct!.password),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sshKeys),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    target_instance_count: cdktf.numberToTerraform(struct!.targetInstanceCount),
    username: cdktf.stringToTerraform(struct!.username),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
  }
}

export interface HdinsightMlServicesClusterRolesZookeeperNode {
  readonly password?: string;
  readonly sshKeys?: string[];
  readonly subnetId?: string;
  readonly username: string;
  readonly virtualNetworkId?: string;
  readonly vmSize: string;
}

function hdinsightMlServicesClusterRolesZookeeperNodeToTerraform(struct?: HdinsightMlServicesClusterRolesZookeeperNode): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sshKeys),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    username: cdktf.stringToTerraform(struct!.username),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
  }
}

export interface HdinsightMlServicesClusterRoles {
  /** edge_node block */
  readonly edgeNode: HdinsightMlServicesClusterRolesEdgeNode[];
  /** head_node block */
  readonly headNode: HdinsightMlServicesClusterRolesHeadNode[];
  /** worker_node block */
  readonly workerNode: HdinsightMlServicesClusterRolesWorkerNode[];
  /** zookeeper_node block */
  readonly zookeeperNode: HdinsightMlServicesClusterRolesZookeeperNode[];
}

function hdinsightMlServicesClusterRolesToTerraform(struct?: HdinsightMlServicesClusterRoles): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    edge_node: cdktf.listMapper(hdinsightMlServicesClusterRolesEdgeNodeToTerraform)(struct!.edgeNode),
    head_node: cdktf.listMapper(hdinsightMlServicesClusterRolesHeadNodeToTerraform)(struct!.headNode),
    worker_node: cdktf.listMapper(hdinsightMlServicesClusterRolesWorkerNodeToTerraform)(struct!.workerNode),
    zookeeper_node: cdktf.listMapper(hdinsightMlServicesClusterRolesZookeeperNodeToTerraform)(struct!.zookeeperNode),
  }
}

export interface HdinsightMlServicesClusterStorageAccount {
  readonly isDefault: boolean;
  readonly storageAccountKey: string;
  readonly storageContainerId: string;
}

function hdinsightMlServicesClusterStorageAccountToTerraform(struct?: HdinsightMlServicesClusterStorageAccount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    storage_account_key: cdktf.stringToTerraform(struct!.storageAccountKey),
    storage_container_id: cdktf.stringToTerraform(struct!.storageContainerId),
  }
}

export interface HdinsightMlServicesClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function hdinsightMlServicesClusterTimeoutsToTerraform(struct?: HdinsightMlServicesClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class HdinsightMlServicesCluster extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: HdinsightMlServicesClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_hdinsight_ml_services_cluster',
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
    this._tlsMinVersion = config.tlsMinVersion;
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
    return this.getStringAttribute('cluster_version');
  }
  public set clusterVersion(value: string) {
    this._clusterVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionInput() {
    return this._clusterVersion
  }

  // edge_ssh_endpoint - computed: true, optional: false, required: false
  public get edgeSshEndpoint() {
    return this.getStringAttribute('edge_ssh_endpoint');
  }

  // https_endpoint - computed: true, optional: false, required: false
  public get httpsEndpoint() {
    return this.getStringAttribute('https_endpoint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
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

  // rstudio - computed: false, optional: false, required: true
  private _rstudio: boolean;
  public get rstudio() {
    return this.getBooleanAttribute('rstudio');
  }
  public set rstudio(value: boolean) {
    this._rstudio = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rstudioInput() {
    return this._rstudio
  }

  // ssh_endpoint - computed: true, optional: false, required: false
  public get sshEndpoint() {
    return this.getStringAttribute('ssh_endpoint');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tier - computed: false, optional: false, required: true
  private _tier: string;
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier
  }

  // tls_min_version - computed: false, optional: true, required: false
  private _tlsMinVersion?: string;
  public get tlsMinVersion() {
    return this.getStringAttribute('tls_min_version');
  }
  public set tlsMinVersion(value: string ) {
    this._tlsMinVersion = value;
  }
  public resetTlsMinVersion() {
    this._tlsMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsMinVersionInput() {
    return this._tlsMinVersion
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway: HdinsightMlServicesClusterGateway[];
  public get gateway() {
    return this.interpolationForAttribute('gateway') as any;
  }
  public set gateway(value: HdinsightMlServicesClusterGateway[]) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway
  }

  // roles - computed: false, optional: false, required: true
  private _roles: HdinsightMlServicesClusterRoles[];
  public get roles() {
    return this.interpolationForAttribute('roles') as any;
  }
  public set roles(value: HdinsightMlServicesClusterRoles[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles
  }

  // storage_account - computed: false, optional: true, required: false
  private _storageAccount?: HdinsightMlServicesClusterStorageAccount[];
  public get storageAccount() {
    return this.interpolationForAttribute('storage_account') as any;
  }
  public set storageAccount(value: HdinsightMlServicesClusterStorageAccount[] ) {
    this._storageAccount = value;
  }
  public resetStorageAccount() {
    this._storageAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountInput() {
    return this._storageAccount
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HdinsightMlServicesClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: HdinsightMlServicesClusterTimeouts ) {
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
      cluster_version: cdktf.stringToTerraform(this._clusterVersion),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      rstudio: cdktf.booleanToTerraform(this._rstudio),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tier: cdktf.stringToTerraform(this._tier),
      tls_min_version: cdktf.stringToTerraform(this._tlsMinVersion),
      gateway: cdktf.listMapper(hdinsightMlServicesClusterGatewayToTerraform)(this._gateway),
      roles: cdktf.listMapper(hdinsightMlServicesClusterRolesToTerraform)(this._roles),
      storage_account: cdktf.listMapper(hdinsightMlServicesClusterStorageAccountToTerraform)(this._storageAccount),
      timeouts: hdinsightMlServicesClusterTimeoutsToTerraform(this._timeouts),
    };
  }
}
