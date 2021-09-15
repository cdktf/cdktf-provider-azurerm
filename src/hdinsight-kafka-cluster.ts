// https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HdinsightKafkaClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#cluster_version HdinsightKafkaCluster#cluster_version}
  */
  readonly clusterVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#encryption_in_transit_enabled HdinsightKafkaCluster#encryption_in_transit_enabled}
  */
  readonly encryptionInTransitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#location HdinsightKafkaCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#name HdinsightKafkaCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#resource_group_name HdinsightKafkaCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#tags HdinsightKafkaCluster#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#tier HdinsightKafkaCluster#tier}
  */
  readonly tier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#tls_min_version HdinsightKafkaCluster#tls_min_version}
  */
  readonly tlsMinVersion?: string;
  /**
  * component_version block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#component_version HdinsightKafkaCluster#component_version}
  */
  readonly componentVersion: HdinsightKafkaClusterComponentVersion[];
  /**
  * gateway block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#gateway HdinsightKafkaCluster#gateway}
  */
  readonly gateway: HdinsightKafkaClusterGateway[];
  /**
  * metastores block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#metastores HdinsightKafkaCluster#metastores}
  */
  readonly metastores?: HdinsightKafkaClusterMetastores[];
  /**
  * monitor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#monitor HdinsightKafkaCluster#monitor}
  */
  readonly monitor?: HdinsightKafkaClusterMonitor[];
  /**
  * rest_proxy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#rest_proxy HdinsightKafkaCluster#rest_proxy}
  */
  readonly restProxy?: HdinsightKafkaClusterRestProxy[];
  /**
  * roles block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#roles HdinsightKafkaCluster#roles}
  */
  readonly roles: HdinsightKafkaClusterRoles[];
  /**
  * security_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#security_profile HdinsightKafkaCluster#security_profile}
  */
  readonly securityProfile?: HdinsightKafkaClusterSecurityProfile[];
  /**
  * storage_account block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#storage_account HdinsightKafkaCluster#storage_account}
  */
  readonly storageAccount?: HdinsightKafkaClusterStorageAccount[];
  /**
  * storage_account_gen2 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#storage_account_gen2 HdinsightKafkaCluster#storage_account_gen2}
  */
  readonly storageAccountGen2?: HdinsightKafkaClusterStorageAccountGen2[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#timeouts HdinsightKafkaCluster#timeouts}
  */
  readonly timeouts?: HdinsightKafkaClusterTimeouts;
}
export interface HdinsightKafkaClusterComponentVersion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#kafka HdinsightKafkaCluster#kafka}
  */
  readonly kafka: string;
}

function hdinsightKafkaClusterComponentVersionToTerraform(struct?: HdinsightKafkaClusterComponentVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kafka: cdktf.stringToTerraform(struct!.kafka),
  }
}

export interface HdinsightKafkaClusterGateway {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#enabled HdinsightKafkaCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#password HdinsightKafkaCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#username HdinsightKafkaCluster#username}
  */
  readonly username: string;
}

function hdinsightKafkaClusterGatewayToTerraform(struct?: HdinsightKafkaClusterGateway): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface HdinsightKafkaClusterMetastoresAmbari {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#database_name HdinsightKafkaCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#password HdinsightKafkaCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#server HdinsightKafkaCluster#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#username HdinsightKafkaCluster#username}
  */
  readonly username: string;
}

function hdinsightKafkaClusterMetastoresAmbariToTerraform(struct?: HdinsightKafkaClusterMetastoresAmbari): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface HdinsightKafkaClusterMetastoresHive {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#database_name HdinsightKafkaCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#password HdinsightKafkaCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#server HdinsightKafkaCluster#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#username HdinsightKafkaCluster#username}
  */
  readonly username: string;
}

function hdinsightKafkaClusterMetastoresHiveToTerraform(struct?: HdinsightKafkaClusterMetastoresHive): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface HdinsightKafkaClusterMetastoresOozie {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#database_name HdinsightKafkaCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#password HdinsightKafkaCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#server HdinsightKafkaCluster#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#username HdinsightKafkaCluster#username}
  */
  readonly username: string;
}

function hdinsightKafkaClusterMetastoresOozieToTerraform(struct?: HdinsightKafkaClusterMetastoresOozie): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface HdinsightKafkaClusterMetastores {
  /**
  * ambari block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#ambari HdinsightKafkaCluster#ambari}
  */
  readonly ambari?: HdinsightKafkaClusterMetastoresAmbari[];
  /**
  * hive block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#hive HdinsightKafkaCluster#hive}
  */
  readonly hive?: HdinsightKafkaClusterMetastoresHive[];
  /**
  * oozie block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#oozie HdinsightKafkaCluster#oozie}
  */
  readonly oozie?: HdinsightKafkaClusterMetastoresOozie[];
}

function hdinsightKafkaClusterMetastoresToTerraform(struct?: HdinsightKafkaClusterMetastores): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ambari: cdktf.listMapper(hdinsightKafkaClusterMetastoresAmbariToTerraform)(struct!.ambari),
    hive: cdktf.listMapper(hdinsightKafkaClusterMetastoresHiveToTerraform)(struct!.hive),
    oozie: cdktf.listMapper(hdinsightKafkaClusterMetastoresOozieToTerraform)(struct!.oozie),
  }
}

export interface HdinsightKafkaClusterMonitor {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#log_analytics_workspace_id HdinsightKafkaCluster#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#primary_key HdinsightKafkaCluster#primary_key}
  */
  readonly primaryKey: string;
}

function hdinsightKafkaClusterMonitorToTerraform(struct?: HdinsightKafkaClusterMonitor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_analytics_workspace_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceId),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}

export interface HdinsightKafkaClusterRestProxy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#security_group_id HdinsightKafkaCluster#security_group_id}
  */
  readonly securityGroupId: string;
}

function hdinsightKafkaClusterRestProxyToTerraform(struct?: HdinsightKafkaClusterRestProxy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
  }
}

export interface HdinsightKafkaClusterRolesHeadNode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#password HdinsightKafkaCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#ssh_keys HdinsightKafkaCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#subnet_id HdinsightKafkaCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#username HdinsightKafkaCluster#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#virtual_network_id HdinsightKafkaCluster#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#vm_size HdinsightKafkaCluster#vm_size}
  */
  readonly vmSize: string;
}

function hdinsightKafkaClusterRolesHeadNodeToTerraform(struct?: HdinsightKafkaClusterRolesHeadNode): any {
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

export interface HdinsightKafkaClusterRolesKafkaManagementNode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#password HdinsightKafkaCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#ssh_keys HdinsightKafkaCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#subnet_id HdinsightKafkaCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#username HdinsightKafkaCluster#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#virtual_network_id HdinsightKafkaCluster#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#vm_size HdinsightKafkaCluster#vm_size}
  */
  readonly vmSize: string;
}

function hdinsightKafkaClusterRolesKafkaManagementNodeToTerraform(struct?: HdinsightKafkaClusterRolesKafkaManagementNode): any {
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

export interface HdinsightKafkaClusterRolesWorkerNode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#min_instance_count HdinsightKafkaCluster#min_instance_count}
  */
  readonly minInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#number_of_disks_per_node HdinsightKafkaCluster#number_of_disks_per_node}
  */
  readonly numberOfDisksPerNode: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#password HdinsightKafkaCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#ssh_keys HdinsightKafkaCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#subnet_id HdinsightKafkaCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#target_instance_count HdinsightKafkaCluster#target_instance_count}
  */
  readonly targetInstanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#username HdinsightKafkaCluster#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#virtual_network_id HdinsightKafkaCluster#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#vm_size HdinsightKafkaCluster#vm_size}
  */
  readonly vmSize: string;
}

function hdinsightKafkaClusterRolesWorkerNodeToTerraform(struct?: HdinsightKafkaClusterRolesWorkerNode): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    min_instance_count: cdktf.numberToTerraform(struct!.minInstanceCount),
    number_of_disks_per_node: cdktf.numberToTerraform(struct!.numberOfDisksPerNode),
    password: cdktf.stringToTerraform(struct!.password),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sshKeys),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    target_instance_count: cdktf.numberToTerraform(struct!.targetInstanceCount),
    username: cdktf.stringToTerraform(struct!.username),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
  }
}

export interface HdinsightKafkaClusterRolesZookeeperNode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#password HdinsightKafkaCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#ssh_keys HdinsightKafkaCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#subnet_id HdinsightKafkaCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#username HdinsightKafkaCluster#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#virtual_network_id HdinsightKafkaCluster#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#vm_size HdinsightKafkaCluster#vm_size}
  */
  readonly vmSize: string;
}

function hdinsightKafkaClusterRolesZookeeperNodeToTerraform(struct?: HdinsightKafkaClusterRolesZookeeperNode): any {
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

export interface HdinsightKafkaClusterRoles {
  /**
  * head_node block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#head_node HdinsightKafkaCluster#head_node}
  */
  readonly headNode: HdinsightKafkaClusterRolesHeadNode[];
  /**
  * kafka_management_node block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#kafka_management_node HdinsightKafkaCluster#kafka_management_node}
  */
  readonly kafkaManagementNode?: HdinsightKafkaClusterRolesKafkaManagementNode[];
  /**
  * worker_node block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#worker_node HdinsightKafkaCluster#worker_node}
  */
  readonly workerNode: HdinsightKafkaClusterRolesWorkerNode[];
  /**
  * zookeeper_node block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#zookeeper_node HdinsightKafkaCluster#zookeeper_node}
  */
  readonly zookeeperNode: HdinsightKafkaClusterRolesZookeeperNode[];
}

function hdinsightKafkaClusterRolesToTerraform(struct?: HdinsightKafkaClusterRoles): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    head_node: cdktf.listMapper(hdinsightKafkaClusterRolesHeadNodeToTerraform)(struct!.headNode),
    kafka_management_node: cdktf.listMapper(hdinsightKafkaClusterRolesKafkaManagementNodeToTerraform)(struct!.kafkaManagementNode),
    worker_node: cdktf.listMapper(hdinsightKafkaClusterRolesWorkerNodeToTerraform)(struct!.workerNode),
    zookeeper_node: cdktf.listMapper(hdinsightKafkaClusterRolesZookeeperNodeToTerraform)(struct!.zookeeperNode),
  }
}

export interface HdinsightKafkaClusterSecurityProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#aadds_resource_id HdinsightKafkaCluster#aadds_resource_id}
  */
  readonly aaddsResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#cluster_users_group_dns HdinsightKafkaCluster#cluster_users_group_dns}
  */
  readonly clusterUsersGroupDns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#domain_name HdinsightKafkaCluster#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#domain_user_password HdinsightKafkaCluster#domain_user_password}
  */
  readonly domainUserPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#domain_username HdinsightKafkaCluster#domain_username}
  */
  readonly domainUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#ldaps_urls HdinsightKafkaCluster#ldaps_urls}
  */
  readonly ldapsUrls: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#msi_resource_id HdinsightKafkaCluster#msi_resource_id}
  */
  readonly msiResourceId: string;
}

function hdinsightKafkaClusterSecurityProfileToTerraform(struct?: HdinsightKafkaClusterSecurityProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aadds_resource_id: cdktf.stringToTerraform(struct!.aaddsResourceId),
    cluster_users_group_dns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.clusterUsersGroupDns),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    domain_user_password: cdktf.stringToTerraform(struct!.domainUserPassword),
    domain_username: cdktf.stringToTerraform(struct!.domainUsername),
    ldaps_urls: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ldapsUrls),
    msi_resource_id: cdktf.stringToTerraform(struct!.msiResourceId),
  }
}

export interface HdinsightKafkaClusterStorageAccount {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#is_default HdinsightKafkaCluster#is_default}
  */
  readonly isDefault: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#storage_account_key HdinsightKafkaCluster#storage_account_key}
  */
  readonly storageAccountKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#storage_container_id HdinsightKafkaCluster#storage_container_id}
  */
  readonly storageContainerId: string;
}

function hdinsightKafkaClusterStorageAccountToTerraform(struct?: HdinsightKafkaClusterStorageAccount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    storage_account_key: cdktf.stringToTerraform(struct!.storageAccountKey),
    storage_container_id: cdktf.stringToTerraform(struct!.storageContainerId),
  }
}

export interface HdinsightKafkaClusterStorageAccountGen2 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#filesystem_id HdinsightKafkaCluster#filesystem_id}
  */
  readonly filesystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#is_default HdinsightKafkaCluster#is_default}
  */
  readonly isDefault: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#managed_identity_resource_id HdinsightKafkaCluster#managed_identity_resource_id}
  */
  readonly managedIdentityResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#storage_resource_id HdinsightKafkaCluster#storage_resource_id}
  */
  readonly storageResourceId: string;
}

function hdinsightKafkaClusterStorageAccountGen2ToTerraform(struct?: HdinsightKafkaClusterStorageAccountGen2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    filesystem_id: cdktf.stringToTerraform(struct!.filesystemId),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    managed_identity_resource_id: cdktf.stringToTerraform(struct!.managedIdentityResourceId),
    storage_resource_id: cdktf.stringToTerraform(struct!.storageResourceId),
  }
}

export interface HdinsightKafkaClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#create HdinsightKafkaCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#delete HdinsightKafkaCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#read HdinsightKafkaCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html#update HdinsightKafkaCluster#update}
  */
  readonly update?: string;
}

function hdinsightKafkaClusterTimeoutsToTerraform(struct?: HdinsightKafkaClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html azurerm_hdinsight_kafka_cluster}
*/
export class HdinsightKafkaCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_hdinsight_kafka_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster.html azurerm_hdinsight_kafka_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HdinsightKafkaClusterConfig
  */
  public constructor(scope: Construct, id: string, config: HdinsightKafkaClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_hdinsight_kafka_cluster',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterVersion = config.clusterVersion;
    this._encryptionInTransitEnabled = config.encryptionInTransitEnabled;
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
    this._restProxy = config.restProxy;
    this._roles = config.roles;
    this._securityProfile = config.securityProfile;
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

  // encryption_in_transit_enabled - computed: false, optional: true, required: false
  private _encryptionInTransitEnabled?: boolean | cdktf.IResolvable;
  public get encryptionInTransitEnabled() {
    return this.getBooleanAttribute('encryption_in_transit_enabled');
  }
  public set encryptionInTransitEnabled(value: boolean | cdktf.IResolvable ) {
    this._encryptionInTransitEnabled = value;
  }
  public resetEncryptionInTransitEnabled() {
    this._encryptionInTransitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInTransitEnabledInput() {
    return this._encryptionInTransitEnabled
  }

  // https_endpoint - computed: true, optional: false, required: false
  public get httpsEndpoint() {
    return this.getStringAttribute('https_endpoint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kafka_rest_proxy_endpoint - computed: true, optional: false, required: false
  public get kafkaRestProxyEndpoint() {
    return this.getStringAttribute('kafka_rest_proxy_endpoint');
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
  private _componentVersion: HdinsightKafkaClusterComponentVersion[];
  public get componentVersion() {
    return this.interpolationForAttribute('component_version') as any;
  }
  public set componentVersion(value: HdinsightKafkaClusterComponentVersion[]) {
    this._componentVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentVersionInput() {
    return this._componentVersion
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway: HdinsightKafkaClusterGateway[];
  public get gateway() {
    return this.interpolationForAttribute('gateway') as any;
  }
  public set gateway(value: HdinsightKafkaClusterGateway[]) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway
  }

  // metastores - computed: false, optional: true, required: false
  private _metastores?: HdinsightKafkaClusterMetastores[];
  public get metastores() {
    return this.interpolationForAttribute('metastores') as any;
  }
  public set metastores(value: HdinsightKafkaClusterMetastores[] ) {
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
  private _monitor?: HdinsightKafkaClusterMonitor[];
  public get monitor() {
    return this.interpolationForAttribute('monitor') as any;
  }
  public set monitor(value: HdinsightKafkaClusterMonitor[] ) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor
  }

  // rest_proxy - computed: false, optional: true, required: false
  private _restProxy?: HdinsightKafkaClusterRestProxy[];
  public get restProxy() {
    return this.interpolationForAttribute('rest_proxy') as any;
  }
  public set restProxy(value: HdinsightKafkaClusterRestProxy[] ) {
    this._restProxy = value;
  }
  public resetRestProxy() {
    this._restProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restProxyInput() {
    return this._restProxy
  }

  // roles - computed: false, optional: false, required: true
  private _roles: HdinsightKafkaClusterRoles[];
  public get roles() {
    return this.interpolationForAttribute('roles') as any;
  }
  public set roles(value: HdinsightKafkaClusterRoles[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles
  }

  // security_profile - computed: false, optional: true, required: false
  private _securityProfile?: HdinsightKafkaClusterSecurityProfile[];
  public get securityProfile() {
    return this.interpolationForAttribute('security_profile') as any;
  }
  public set securityProfile(value: HdinsightKafkaClusterSecurityProfile[] ) {
    this._securityProfile = value;
  }
  public resetSecurityProfile() {
    this._securityProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileInput() {
    return this._securityProfile
  }

  // storage_account - computed: false, optional: true, required: false
  private _storageAccount?: HdinsightKafkaClusterStorageAccount[];
  public get storageAccount() {
    return this.interpolationForAttribute('storage_account') as any;
  }
  public set storageAccount(value: HdinsightKafkaClusterStorageAccount[] ) {
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
  private _storageAccountGen2?: HdinsightKafkaClusterStorageAccountGen2[];
  public get storageAccountGen2() {
    return this.interpolationForAttribute('storage_account_gen2') as any;
  }
  public set storageAccountGen2(value: HdinsightKafkaClusterStorageAccountGen2[] ) {
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
  private _timeouts?: HdinsightKafkaClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: HdinsightKafkaClusterTimeouts ) {
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
      encryption_in_transit_enabled: cdktf.booleanToTerraform(this._encryptionInTransitEnabled),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tier: cdktf.stringToTerraform(this._tier),
      tls_min_version: cdktf.stringToTerraform(this._tlsMinVersion),
      component_version: cdktf.listMapper(hdinsightKafkaClusterComponentVersionToTerraform)(this._componentVersion),
      gateway: cdktf.listMapper(hdinsightKafkaClusterGatewayToTerraform)(this._gateway),
      metastores: cdktf.listMapper(hdinsightKafkaClusterMetastoresToTerraform)(this._metastores),
      monitor: cdktf.listMapper(hdinsightKafkaClusterMonitorToTerraform)(this._monitor),
      rest_proxy: cdktf.listMapper(hdinsightKafkaClusterRestProxyToTerraform)(this._restProxy),
      roles: cdktf.listMapper(hdinsightKafkaClusterRolesToTerraform)(this._roles),
      security_profile: cdktf.listMapper(hdinsightKafkaClusterSecurityProfileToTerraform)(this._securityProfile),
      storage_account: cdktf.listMapper(hdinsightKafkaClusterStorageAccountToTerraform)(this._storageAccount),
      storage_account_gen2: cdktf.listMapper(hdinsightKafkaClusterStorageAccountGen2ToTerraform)(this._storageAccountGen2),
      timeouts: hdinsightKafkaClusterTimeoutsToTerraform(this._timeouts),
    };
  }
}
