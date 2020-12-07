// https://www.terraform.io/docs/providers/azurerm/r/hdinsight_storm_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HdinsightStormClusterConfig extends cdktf.TerraformMetaArguments {
  readonly clusterVersion: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly tier: string;
  readonly tlsMinVersion?: string;
  /** component_version block */
  readonly componentVersion: HdinsightStormClusterComponentVersion[];
  /** gateway block */
  readonly gateway: HdinsightStormClusterGateway[];
  /** metastores block */
  readonly metastores?: HdinsightStormClusterMetastores[];
  /** monitor block */
  readonly monitor?: HdinsightStormClusterMonitor[];
  /** roles block */
  readonly roles: HdinsightStormClusterRoles[];
  /** storage_account block */
  readonly storageAccount?: HdinsightStormClusterStorageAccount[];
  /** timeouts block */
  readonly timeouts?: HdinsightStormClusterTimeouts;
}
export interface HdinsightStormClusterComponentVersion {
  readonly storm: string;
}

function hdinsightStormClusterComponentVersionToTerraform(struct?: HdinsightStormClusterComponentVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    storm: cdktf.stringToTerraform(struct!.storm),
  }
}

export interface HdinsightStormClusterGateway {
  readonly enabled?: boolean;
  readonly password: string;
  readonly username: string;
}

function hdinsightStormClusterGatewayToTerraform(struct?: HdinsightStormClusterGateway): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface HdinsightStormClusterMetastoresAmbari {
  readonly databaseName: string;
  readonly password: string;
  readonly server: string;
  readonly username: string;
}

function hdinsightStormClusterMetastoresAmbariToTerraform(struct?: HdinsightStormClusterMetastoresAmbari): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface HdinsightStormClusterMetastoresHive {
  readonly databaseName: string;
  readonly password: string;
  readonly server: string;
  readonly username: string;
}

function hdinsightStormClusterMetastoresHiveToTerraform(struct?: HdinsightStormClusterMetastoresHive): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface HdinsightStormClusterMetastoresOozie {
  readonly databaseName: string;
  readonly password: string;
  readonly server: string;
  readonly username: string;
}

function hdinsightStormClusterMetastoresOozieToTerraform(struct?: HdinsightStormClusterMetastoresOozie): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface HdinsightStormClusterMetastores {
  /** ambari block */
  readonly ambari?: HdinsightStormClusterMetastoresAmbari[];
  /** hive block */
  readonly hive?: HdinsightStormClusterMetastoresHive[];
  /** oozie block */
  readonly oozie?: HdinsightStormClusterMetastoresOozie[];
}

function hdinsightStormClusterMetastoresToTerraform(struct?: HdinsightStormClusterMetastores): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ambari: cdktf.listMapper(hdinsightStormClusterMetastoresAmbariToTerraform)(struct!.ambari),
    hive: cdktf.listMapper(hdinsightStormClusterMetastoresHiveToTerraform)(struct!.hive),
    oozie: cdktf.listMapper(hdinsightStormClusterMetastoresOozieToTerraform)(struct!.oozie),
  }
}

export interface HdinsightStormClusterMonitor {
  readonly logAnalyticsWorkspaceId: string;
  readonly primaryKey: string;
}

function hdinsightStormClusterMonitorToTerraform(struct?: HdinsightStormClusterMonitor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_analytics_workspace_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceId),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}

export interface HdinsightStormClusterRolesHeadNode {
  readonly password?: string;
  readonly sshKeys?: string[];
  readonly subnetId?: string;
  readonly username: string;
  readonly virtualNetworkId?: string;
  readonly vmSize: string;
}

function hdinsightStormClusterRolesHeadNodeToTerraform(struct?: HdinsightStormClusterRolesHeadNode): any {
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

export interface HdinsightStormClusterRolesWorkerNode {
  readonly minInstanceCount?: number;
  readonly password?: string;
  readonly sshKeys?: string[];
  readonly subnetId?: string;
  readonly targetInstanceCount: number;
  readonly username: string;
  readonly virtualNetworkId?: string;
  readonly vmSize: string;
}

function hdinsightStormClusterRolesWorkerNodeToTerraform(struct?: HdinsightStormClusterRolesWorkerNode): any {
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

export interface HdinsightStormClusterRolesZookeeperNode {
  readonly password?: string;
  readonly sshKeys?: string[];
  readonly subnetId?: string;
  readonly username: string;
  readonly virtualNetworkId?: string;
  readonly vmSize: string;
}

function hdinsightStormClusterRolesZookeeperNodeToTerraform(struct?: HdinsightStormClusterRolesZookeeperNode): any {
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

export interface HdinsightStormClusterRoles {
  /** head_node block */
  readonly headNode: HdinsightStormClusterRolesHeadNode[];
  /** worker_node block */
  readonly workerNode: HdinsightStormClusterRolesWorkerNode[];
  /** zookeeper_node block */
  readonly zookeeperNode: HdinsightStormClusterRolesZookeeperNode[];
}

function hdinsightStormClusterRolesToTerraform(struct?: HdinsightStormClusterRoles): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    head_node: cdktf.listMapper(hdinsightStormClusterRolesHeadNodeToTerraform)(struct!.headNode),
    worker_node: cdktf.listMapper(hdinsightStormClusterRolesWorkerNodeToTerraform)(struct!.workerNode),
    zookeeper_node: cdktf.listMapper(hdinsightStormClusterRolesZookeeperNodeToTerraform)(struct!.zookeeperNode),
  }
}

export interface HdinsightStormClusterStorageAccount {
  readonly isDefault: boolean;
  readonly storageAccountKey: string;
  readonly storageContainerId: string;
}

function hdinsightStormClusterStorageAccountToTerraform(struct?: HdinsightStormClusterStorageAccount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    storage_account_key: cdktf.stringToTerraform(struct!.storageAccountKey),
    storage_container_id: cdktf.stringToTerraform(struct!.storageContainerId),
  }
}

export interface HdinsightStormClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function hdinsightStormClusterTimeoutsToTerraform(struct?: HdinsightStormClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class HdinsightStormCluster extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: HdinsightStormClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_hdinsight_storm_cluster',
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
    this._tlsMinVersion = config.tlsMinVersion;
    this._componentVersion = config.componentVersion;
    this._gateway = config.gateway;
    this._metastores = config.metastores;
    this._monitor = config.monitor;
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

  // component_version - computed: false, optional: false, required: true
  private _componentVersion: HdinsightStormClusterComponentVersion[];
  public get componentVersion() {
    return this.interpolationForAttribute('component_version') as any;
  }
  public set componentVersion(value: HdinsightStormClusterComponentVersion[]) {
    this._componentVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentVersionInput() {
    return this._componentVersion
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway: HdinsightStormClusterGateway[];
  public get gateway() {
    return this.interpolationForAttribute('gateway') as any;
  }
  public set gateway(value: HdinsightStormClusterGateway[]) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway
  }

  // metastores - computed: false, optional: true, required: false
  private _metastores?: HdinsightStormClusterMetastores[];
  public get metastores() {
    return this.interpolationForAttribute('metastores') as any;
  }
  public set metastores(value: HdinsightStormClusterMetastores[] ) {
    this._metastores = value;
  }
  public resetMetastores() {
    this._metastores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoresInput() {
    return this._metastores
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor?: HdinsightStormClusterMonitor[];
  public get monitor() {
    return this.interpolationForAttribute('monitor') as any;
  }
  public set monitor(value: HdinsightStormClusterMonitor[] ) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor
  }

  // roles - computed: false, optional: false, required: true
  private _roles: HdinsightStormClusterRoles[];
  public get roles() {
    return this.interpolationForAttribute('roles') as any;
  }
  public set roles(value: HdinsightStormClusterRoles[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles
  }

  // storage_account - computed: false, optional: true, required: false
  private _storageAccount?: HdinsightStormClusterStorageAccount[];
  public get storageAccount() {
    return this.interpolationForAttribute('storage_account') as any;
  }
  public set storageAccount(value: HdinsightStormClusterStorageAccount[] ) {
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
  private _timeouts?: HdinsightStormClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: HdinsightStormClusterTimeouts ) {
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
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tier: cdktf.stringToTerraform(this._tier),
      tls_min_version: cdktf.stringToTerraform(this._tlsMinVersion),
      component_version: cdktf.listMapper(hdinsightStormClusterComponentVersionToTerraform)(this._componentVersion),
      gateway: cdktf.listMapper(hdinsightStormClusterGatewayToTerraform)(this._gateway),
      metastores: cdktf.listMapper(hdinsightStormClusterMetastoresToTerraform)(this._metastores),
      monitor: cdktf.listMapper(hdinsightStormClusterMonitorToTerraform)(this._monitor),
      roles: cdktf.listMapper(hdinsightStormClusterRolesToTerraform)(this._roles),
      storage_account: cdktf.listMapper(hdinsightStormClusterStorageAccountToTerraform)(this._storageAccount),
      timeouts: hdinsightStormClusterTimeoutsToTerraform(this._timeouts),
    };
  }
}
