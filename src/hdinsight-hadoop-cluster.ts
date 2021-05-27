// https://www.terraform.io/docs/providers/azurerm/r/hdinsight_hadoop_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HdinsightHadoopClusterConfig extends cdktf.TerraformMetaArguments {
  readonly clusterVersion: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly tier: string;
  readonly tlsMinVersion?: string;
  /** component_version block */
  readonly componentVersion: HdinsightHadoopClusterComponentVersion[];
  /** gateway block */
  readonly gateway: HdinsightHadoopClusterGateway[];
  /** metastores block */
  readonly metastores?: HdinsightHadoopClusterMetastores[];
  /** monitor block */
  readonly monitor?: HdinsightHadoopClusterMonitor[];
  /** network block */
  readonly network?: HdinsightHadoopClusterNetwork[];
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

function hdinsightHadoopClusterComponentVersionToTerraform(struct?: HdinsightHadoopClusterComponentVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hadoop: cdktf.stringToTerraform(struct!.hadoop),
  }
}

export interface HdinsightHadoopClusterGateway {
  readonly enabled?: boolean;
  readonly password: string;
  readonly username: string;
}

function hdinsightHadoopClusterGatewayToTerraform(struct?: HdinsightHadoopClusterGateway): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface HdinsightHadoopClusterMetastoresAmbari {
  readonly databaseName: string;
  readonly password: string;
  readonly server: string;
  readonly username: string;
}

function hdinsightHadoopClusterMetastoresAmbariToTerraform(struct?: HdinsightHadoopClusterMetastoresAmbari): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface HdinsightHadoopClusterMetastoresHive {
  readonly databaseName: string;
  readonly password: string;
  readonly server: string;
  readonly username: string;
}

function hdinsightHadoopClusterMetastoresHiveToTerraform(struct?: HdinsightHadoopClusterMetastoresHive): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface HdinsightHadoopClusterMetastoresOozie {
  readonly databaseName: string;
  readonly password: string;
  readonly server: string;
  readonly username: string;
}

function hdinsightHadoopClusterMetastoresOozieToTerraform(struct?: HdinsightHadoopClusterMetastoresOozie): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface HdinsightHadoopClusterMetastores {
  /** ambari block */
  readonly ambari?: HdinsightHadoopClusterMetastoresAmbari[];
  /** hive block */
  readonly hive?: HdinsightHadoopClusterMetastoresHive[];
  /** oozie block */
  readonly oozie?: HdinsightHadoopClusterMetastoresOozie[];
}

function hdinsightHadoopClusterMetastoresToTerraform(struct?: HdinsightHadoopClusterMetastores): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ambari: cdktf.listMapper(hdinsightHadoopClusterMetastoresAmbariToTerraform)(struct!.ambari),
    hive: cdktf.listMapper(hdinsightHadoopClusterMetastoresHiveToTerraform)(struct!.hive),
    oozie: cdktf.listMapper(hdinsightHadoopClusterMetastoresOozieToTerraform)(struct!.oozie),
  }
}

export interface HdinsightHadoopClusterMonitor {
  readonly logAnalyticsWorkspaceId: string;
  readonly primaryKey: string;
}

function hdinsightHadoopClusterMonitorToTerraform(struct?: HdinsightHadoopClusterMonitor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_analytics_workspace_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceId),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}

export interface HdinsightHadoopClusterNetwork {
  readonly connectionDirection?: string;
  readonly privateLinkEnabled?: boolean;
}

function hdinsightHadoopClusterNetworkToTerraform(struct?: HdinsightHadoopClusterNetwork): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connection_direction: cdktf.stringToTerraform(struct!.connectionDirection),
    private_link_enabled: cdktf.booleanToTerraform(struct!.privateLinkEnabled),
  }
}

export interface HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction {
  readonly name: string;
  readonly uri: string;
}

function hdinsightHadoopClusterRolesEdgeNodeInstallScriptActionToTerraform(struct?: HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}

export interface HdinsightHadoopClusterRolesEdgeNode {
  readonly targetInstanceCount: number;
  readonly vmSize: string;
  /** install_script_action block */
  readonly installScriptAction: HdinsightHadoopClusterRolesEdgeNodeInstallScriptAction[];
}

function hdinsightHadoopClusterRolesEdgeNodeToTerraform(struct?: HdinsightHadoopClusterRolesEdgeNode): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    target_instance_count: cdktf.numberToTerraform(struct!.targetInstanceCount),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
    install_script_action: cdktf.listMapper(hdinsightHadoopClusterRolesEdgeNodeInstallScriptActionToTerraform)(struct!.installScriptAction),
  }
}

export interface HdinsightHadoopClusterRolesHeadNode {
  readonly password?: string;
  readonly sshKeys?: string[];
  readonly subnetId?: string;
  readonly username: string;
  readonly virtualNetworkId?: string;
  readonly vmSize: string;
}

function hdinsightHadoopClusterRolesHeadNodeToTerraform(struct?: HdinsightHadoopClusterRolesHeadNode): any {
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

export interface HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity {
  readonly maxInstanceCount: number;
  readonly minInstanceCount: number;
}

function hdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityToTerraform(struct?: HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_instance_count: cdktf.numberToTerraform(struct!.maxInstanceCount),
    min_instance_count: cdktf.numberToTerraform(struct!.minInstanceCount),
  }
}

export interface HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule {
  readonly days: string[];
  readonly targetInstanceCount: number;
  readonly time: string;
}

function hdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleToTerraform(struct?: HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform)(struct!.days),
    target_instance_count: cdktf.numberToTerraform(struct!.targetInstanceCount),
    time: cdktf.stringToTerraform(struct!.time),
  }
}

export interface HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence {
  readonly timezone: string;
  /** schedule block */
  readonly schedule: HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceSchedule[];
}

function hdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceToTerraform(struct?: HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    timezone: cdktf.stringToTerraform(struct!.timezone),
    schedule: cdktf.listMapper(hdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceScheduleToTerraform)(struct!.schedule),
  }
}

export interface HdinsightHadoopClusterRolesWorkerNodeAutoscale {
  /** capacity block */
  readonly capacity?: HdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacity[];
  /** recurrence block */
  readonly recurrence?: HdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrence[];
}

function hdinsightHadoopClusterRolesWorkerNodeAutoscaleToTerraform(struct?: HdinsightHadoopClusterRolesWorkerNodeAutoscale): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacity: cdktf.listMapper(hdinsightHadoopClusterRolesWorkerNodeAutoscaleCapacityToTerraform)(struct!.capacity),
    recurrence: cdktf.listMapper(hdinsightHadoopClusterRolesWorkerNodeAutoscaleRecurrenceToTerraform)(struct!.recurrence),
  }
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
  /** autoscale block */
  readonly autoscale?: HdinsightHadoopClusterRolesWorkerNodeAutoscale[];
}

function hdinsightHadoopClusterRolesWorkerNodeToTerraform(struct?: HdinsightHadoopClusterRolesWorkerNode): any {
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
    autoscale: cdktf.listMapper(hdinsightHadoopClusterRolesWorkerNodeAutoscaleToTerraform)(struct!.autoscale),
  }
}

export interface HdinsightHadoopClusterRolesZookeeperNode {
  readonly password?: string;
  readonly sshKeys?: string[];
  readonly subnetId?: string;
  readonly username: string;
  readonly virtualNetworkId?: string;
  readonly vmSize: string;
}

function hdinsightHadoopClusterRolesZookeeperNodeToTerraform(struct?: HdinsightHadoopClusterRolesZookeeperNode): any {
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

function hdinsightHadoopClusterRolesToTerraform(struct?: HdinsightHadoopClusterRoles): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    edge_node: cdktf.listMapper(hdinsightHadoopClusterRolesEdgeNodeToTerraform)(struct!.edgeNode),
    head_node: cdktf.listMapper(hdinsightHadoopClusterRolesHeadNodeToTerraform)(struct!.headNode),
    worker_node: cdktf.listMapper(hdinsightHadoopClusterRolesWorkerNodeToTerraform)(struct!.workerNode),
    zookeeper_node: cdktf.listMapper(hdinsightHadoopClusterRolesZookeeperNodeToTerraform)(struct!.zookeeperNode),
  }
}

export interface HdinsightHadoopClusterStorageAccount {
  readonly isDefault: boolean;
  readonly storageAccountKey: string;
  readonly storageContainerId: string;
}

function hdinsightHadoopClusterStorageAccountToTerraform(struct?: HdinsightHadoopClusterStorageAccount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    storage_account_key: cdktf.stringToTerraform(struct!.storageAccountKey),
    storage_container_id: cdktf.stringToTerraform(struct!.storageContainerId),
  }
}

export interface HdinsightHadoopClusterStorageAccountGen2 {
  readonly filesystemId: string;
  readonly isDefault: boolean;
  readonly managedIdentityResourceId: string;
  readonly storageResourceId: string;
}

function hdinsightHadoopClusterStorageAccountGen2ToTerraform(struct?: HdinsightHadoopClusterStorageAccountGen2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    filesystem_id: cdktf.stringToTerraform(struct!.filesystemId),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    managed_identity_resource_id: cdktf.stringToTerraform(struct!.managedIdentityResourceId),
    storage_resource_id: cdktf.stringToTerraform(struct!.storageResourceId),
  }
}

export interface HdinsightHadoopClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function hdinsightHadoopClusterTimeoutsToTerraform(struct?: HdinsightHadoopClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class HdinsightHadoopCluster extends cdktf.TerraformResource {

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
    this._tlsMinVersion = config.tlsMinVersion;
    this._componentVersion = config.componentVersion;
    this._gateway = config.gateway;
    this._metastores = config.metastores;
    this._monitor = config.monitor;
    this._network = config.network;
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
  private _componentVersion: HdinsightHadoopClusterComponentVersion[];
  public get componentVersion() {
    return this.interpolationForAttribute('component_version') as any;
  }
  public set componentVersion(value: HdinsightHadoopClusterComponentVersion[]) {
    this._componentVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentVersionInput() {
    return this._componentVersion
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway: HdinsightHadoopClusterGateway[];
  public get gateway() {
    return this.interpolationForAttribute('gateway') as any;
  }
  public set gateway(value: HdinsightHadoopClusterGateway[]) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway
  }

  // metastores - computed: false, optional: true, required: false
  private _metastores?: HdinsightHadoopClusterMetastores[];
  public get metastores() {
    return this.interpolationForAttribute('metastores') as any;
  }
  public set metastores(value: HdinsightHadoopClusterMetastores[] ) {
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
  private _monitor?: HdinsightHadoopClusterMonitor[];
  public get monitor() {
    return this.interpolationForAttribute('monitor') as any;
  }
  public set monitor(value: HdinsightHadoopClusterMonitor[] ) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor
  }

  // network - computed: false, optional: true, required: false
  private _network?: HdinsightHadoopClusterNetwork[];
  public get network() {
    return this.interpolationForAttribute('network') as any;
  }
  public set network(value: HdinsightHadoopClusterNetwork[] ) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network
  }

  // roles - computed: false, optional: false, required: true
  private _roles: HdinsightHadoopClusterRoles[];
  public get roles() {
    return this.interpolationForAttribute('roles') as any;
  }
  public set roles(value: HdinsightHadoopClusterRoles[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles
  }

  // storage_account - computed: false, optional: true, required: false
  private _storageAccount?: HdinsightHadoopClusterStorageAccount[];
  public get storageAccount() {
    return this.interpolationForAttribute('storage_account') as any;
  }
  public set storageAccount(value: HdinsightHadoopClusterStorageAccount[] ) {
    this._storageAccount = value;
  }
  public resetStorageAccount() {
    this._storageAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountInput() {
    return this._storageAccount
  }

  // storage_account_gen2 - computed: false, optional: true, required: false
  private _storageAccountGen2?: HdinsightHadoopClusterStorageAccountGen2[];
  public get storageAccountGen2() {
    return this.interpolationForAttribute('storage_account_gen2') as any;
  }
  public set storageAccountGen2(value: HdinsightHadoopClusterStorageAccountGen2[] ) {
    this._storageAccountGen2 = value;
  }
  public resetStorageAccountGen2() {
    this._storageAccountGen2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountGen2Input() {
    return this._storageAccountGen2
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HdinsightHadoopClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: HdinsightHadoopClusterTimeouts ) {
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
      component_version: cdktf.listMapper(hdinsightHadoopClusterComponentVersionToTerraform)(this._componentVersion),
      gateway: cdktf.listMapper(hdinsightHadoopClusterGatewayToTerraform)(this._gateway),
      metastores: cdktf.listMapper(hdinsightHadoopClusterMetastoresToTerraform)(this._metastores),
      monitor: cdktf.listMapper(hdinsightHadoopClusterMonitorToTerraform)(this._monitor),
      network: cdktf.listMapper(hdinsightHadoopClusterNetworkToTerraform)(this._network),
      roles: cdktf.listMapper(hdinsightHadoopClusterRolesToTerraform)(this._roles),
      storage_account: cdktf.listMapper(hdinsightHadoopClusterStorageAccountToTerraform)(this._storageAccount),
      storage_account_gen2: cdktf.listMapper(hdinsightHadoopClusterStorageAccountGen2ToTerraform)(this._storageAccountGen2),
      timeouts: hdinsightHadoopClusterTimeoutsToTerraform(this._timeouts),
    };
  }
}
