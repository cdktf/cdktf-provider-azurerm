// https://www.terraform.io/docs/providers/azurerm/r/hdinsight_storm_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface HdinsightStormClusterConfig extends TerraformMetaArguments {
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
export interface HdinsightStormClusterGateway {
  readonly enabled?: boolean;
  readonly password: string;
  readonly username: string;
}
export interface HdinsightStormClusterMetastoresAmbari {
  readonly databaseName: string;
  readonly password: string;
  readonly server: string;
  readonly username: string;
}
export interface HdinsightStormClusterMetastoresHive {
  readonly databaseName: string;
  readonly password: string;
  readonly server: string;
  readonly username: string;
}
export interface HdinsightStormClusterMetastoresOozie {
  readonly databaseName: string;
  readonly password: string;
  readonly server: string;
  readonly username: string;
}
export interface HdinsightStormClusterMetastores {
  /** ambari block */
  readonly ambari?: HdinsightStormClusterMetastoresAmbari[];
  /** hive block */
  readonly hive?: HdinsightStormClusterMetastoresHive[];
  /** oozie block */
  readonly oozie?: HdinsightStormClusterMetastoresOozie[];
}
export interface HdinsightStormClusterMonitor {
  readonly logAnalyticsWorkspaceId: string;
  readonly primaryKey: string;
}
export interface HdinsightStormClusterRolesHeadNode {
  readonly password?: string;
  readonly sshKeys?: string[];
  readonly subnetId?: string;
  readonly username: string;
  readonly virtualNetworkId?: string;
  readonly vmSize: string;
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
export interface HdinsightStormClusterRolesZookeeperNode {
  readonly password?: string;
  readonly sshKeys?: string[];
  readonly subnetId?: string;
  readonly username: string;
  readonly virtualNetworkId?: string;
  readonly vmSize: string;
}
export interface HdinsightStormClusterRoles {
  /** head_node block */
  readonly headNode: HdinsightStormClusterRolesHeadNode[];
  /** worker_node block */
  readonly workerNode: HdinsightStormClusterRolesWorkerNode[];
  /** zookeeper_node block */
  readonly zookeeperNode: HdinsightStormClusterRolesZookeeperNode[];
}
export interface HdinsightStormClusterStorageAccount {
  readonly isDefault: boolean;
  readonly storageAccountKey: string;
  readonly storageContainerId: string;
}
export interface HdinsightStormClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class HdinsightStormCluster extends TerraformResource {

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
      cluster_version: this._clusterVersion,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      tier: this._tier,
      tls_min_version: this._tlsMinVersion,
      component_version: this._componentVersion,
      gateway: this._gateway,
      metastores: this._metastores,
      monitor: this._monitor,
      roles: this._roles,
      storage_account: this._storageAccount,
      timeouts: this._timeouts,
    };
  }
}
