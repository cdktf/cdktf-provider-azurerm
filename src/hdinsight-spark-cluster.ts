// https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HdinsightSparkClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#cluster_version HdinsightSparkCluster#cluster_version}
  */
  readonly clusterVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#encryption_in_transit_enabled HdinsightSparkCluster#encryption_in_transit_enabled}
  */
  readonly encryptionInTransitEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#location HdinsightSparkCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#name HdinsightSparkCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#resource_group_name HdinsightSparkCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#tags HdinsightSparkCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#tier HdinsightSparkCluster#tier}
  */
  readonly tier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#tls_min_version HdinsightSparkCluster#tls_min_version}
  */
  readonly tlsMinVersion?: string;
  /**
  * component_version block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#component_version HdinsightSparkCluster#component_version}
  */
  readonly componentVersion: HdinsightSparkClusterComponentVersion[];
  /**
  * gateway block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#gateway HdinsightSparkCluster#gateway}
  */
  readonly gateway: HdinsightSparkClusterGateway[];
  /**
  * metastores block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#metastores HdinsightSparkCluster#metastores}
  */
  readonly metastores?: HdinsightSparkClusterMetastores[];
  /**
  * monitor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#monitor HdinsightSparkCluster#monitor}
  */
  readonly monitor?: HdinsightSparkClusterMonitor[];
  /**
  * network block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#network HdinsightSparkCluster#network}
  */
  readonly network?: HdinsightSparkClusterNetwork[];
  /**
  * roles block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#roles HdinsightSparkCluster#roles}
  */
  readonly roles: HdinsightSparkClusterRoles[];
  /**
  * storage_account block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#storage_account HdinsightSparkCluster#storage_account}
  */
  readonly storageAccount?: HdinsightSparkClusterStorageAccount[];
  /**
  * storage_account_gen2 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#storage_account_gen2 HdinsightSparkCluster#storage_account_gen2}
  */
  readonly storageAccountGen2?: HdinsightSparkClusterStorageAccountGen2[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#timeouts HdinsightSparkCluster#timeouts}
  */
  readonly timeouts?: HdinsightSparkClusterTimeouts;
}
export interface HdinsightSparkClusterComponentVersion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#spark HdinsightSparkCluster#spark}
  */
  readonly spark: string;
}

function hdinsightSparkClusterComponentVersionToTerraform(struct?: HdinsightSparkClusterComponentVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    spark: cdktf.stringToTerraform(struct!.spark),
  }
}

export interface HdinsightSparkClusterGateway {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#enabled HdinsightSparkCluster#enabled}
  */
  readonly enabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#password HdinsightSparkCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#username HdinsightSparkCluster#username}
  */
  readonly username: string;
}

function hdinsightSparkClusterGatewayToTerraform(struct?: HdinsightSparkClusterGateway): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface HdinsightSparkClusterMetastoresAmbari {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#database_name HdinsightSparkCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#password HdinsightSparkCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#server HdinsightSparkCluster#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#username HdinsightSparkCluster#username}
  */
  readonly username: string;
}

function hdinsightSparkClusterMetastoresAmbariToTerraform(struct?: HdinsightSparkClusterMetastoresAmbari): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface HdinsightSparkClusterMetastoresHive {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#database_name HdinsightSparkCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#password HdinsightSparkCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#server HdinsightSparkCluster#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#username HdinsightSparkCluster#username}
  */
  readonly username: string;
}

function hdinsightSparkClusterMetastoresHiveToTerraform(struct?: HdinsightSparkClusterMetastoresHive): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface HdinsightSparkClusterMetastoresOozie {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#database_name HdinsightSparkCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#password HdinsightSparkCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#server HdinsightSparkCluster#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#username HdinsightSparkCluster#username}
  */
  readonly username: string;
}

function hdinsightSparkClusterMetastoresOozieToTerraform(struct?: HdinsightSparkClusterMetastoresOozie): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface HdinsightSparkClusterMetastores {
  /**
  * ambari block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#ambari HdinsightSparkCluster#ambari}
  */
  readonly ambari?: HdinsightSparkClusterMetastoresAmbari[];
  /**
  * hive block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#hive HdinsightSparkCluster#hive}
  */
  readonly hive?: HdinsightSparkClusterMetastoresHive[];
  /**
  * oozie block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#oozie HdinsightSparkCluster#oozie}
  */
  readonly oozie?: HdinsightSparkClusterMetastoresOozie[];
}

function hdinsightSparkClusterMetastoresToTerraform(struct?: HdinsightSparkClusterMetastores): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ambari: cdktf.listMapper(hdinsightSparkClusterMetastoresAmbariToTerraform)(struct!.ambari),
    hive: cdktf.listMapper(hdinsightSparkClusterMetastoresHiveToTerraform)(struct!.hive),
    oozie: cdktf.listMapper(hdinsightSparkClusterMetastoresOozieToTerraform)(struct!.oozie),
  }
}

export interface HdinsightSparkClusterMonitor {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#log_analytics_workspace_id HdinsightSparkCluster#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#primary_key HdinsightSparkCluster#primary_key}
  */
  readonly primaryKey: string;
}

function hdinsightSparkClusterMonitorToTerraform(struct?: HdinsightSparkClusterMonitor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_analytics_workspace_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceId),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}

export interface HdinsightSparkClusterNetwork {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#connection_direction HdinsightSparkCluster#connection_direction}
  */
  readonly connectionDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#private_link_enabled HdinsightSparkCluster#private_link_enabled}
  */
  readonly privateLinkEnabled?: boolean;
}

function hdinsightSparkClusterNetworkToTerraform(struct?: HdinsightSparkClusterNetwork): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connection_direction: cdktf.stringToTerraform(struct!.connectionDirection),
    private_link_enabled: cdktf.booleanToTerraform(struct!.privateLinkEnabled),
  }
}

export interface HdinsightSparkClusterRolesHeadNode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#password HdinsightSparkCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#ssh_keys HdinsightSparkCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#subnet_id HdinsightSparkCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#username HdinsightSparkCluster#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#virtual_network_id HdinsightSparkCluster#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#vm_size HdinsightSparkCluster#vm_size}
  */
  readonly vmSize: string;
}

function hdinsightSparkClusterRolesHeadNodeToTerraform(struct?: HdinsightSparkClusterRolesHeadNode): any {
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

export interface HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#max_instance_count HdinsightSparkCluster#max_instance_count}
  */
  readonly maxInstanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#min_instance_count HdinsightSparkCluster#min_instance_count}
  */
  readonly minInstanceCount: number;
}

function hdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityToTerraform(struct?: HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_instance_count: cdktf.numberToTerraform(struct!.maxInstanceCount),
    min_instance_count: cdktf.numberToTerraform(struct!.minInstanceCount),
  }
}

export interface HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#days HdinsightSparkCluster#days}
  */
  readonly days: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#target_instance_count HdinsightSparkCluster#target_instance_count}
  */
  readonly targetInstanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#time HdinsightSparkCluster#time}
  */
  readonly time: string;
}

function hdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleToTerraform(struct?: HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform)(struct!.days),
    target_instance_count: cdktf.numberToTerraform(struct!.targetInstanceCount),
    time: cdktf.stringToTerraform(struct!.time),
  }
}

export interface HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#timezone HdinsightSparkCluster#timezone}
  */
  readonly timezone: string;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#schedule HdinsightSparkCluster#schedule}
  */
  readonly schedule: HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule[];
}

function hdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceToTerraform(struct?: HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    timezone: cdktf.stringToTerraform(struct!.timezone),
    schedule: cdktf.listMapper(hdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleToTerraform)(struct!.schedule),
  }
}

export interface HdinsightSparkClusterRolesWorkerNodeAutoscale {
  /**
  * capacity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#capacity HdinsightSparkCluster#capacity}
  */
  readonly capacity?: HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity[];
  /**
  * recurrence block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#recurrence HdinsightSparkCluster#recurrence}
  */
  readonly recurrence?: HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence[];
}

function hdinsightSparkClusterRolesWorkerNodeAutoscaleToTerraform(struct?: HdinsightSparkClusterRolesWorkerNodeAutoscale): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacity: cdktf.listMapper(hdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityToTerraform)(struct!.capacity),
    recurrence: cdktf.listMapper(hdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceToTerraform)(struct!.recurrence),
  }
}

export interface HdinsightSparkClusterRolesWorkerNode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#min_instance_count HdinsightSparkCluster#min_instance_count}
  */
  readonly minInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#password HdinsightSparkCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#ssh_keys HdinsightSparkCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#subnet_id HdinsightSparkCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#target_instance_count HdinsightSparkCluster#target_instance_count}
  */
  readonly targetInstanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#username HdinsightSparkCluster#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#virtual_network_id HdinsightSparkCluster#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#vm_size HdinsightSparkCluster#vm_size}
  */
  readonly vmSize: string;
  /**
  * autoscale block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#autoscale HdinsightSparkCluster#autoscale}
  */
  readonly autoscale?: HdinsightSparkClusterRolesWorkerNodeAutoscale[];
}

function hdinsightSparkClusterRolesWorkerNodeToTerraform(struct?: HdinsightSparkClusterRolesWorkerNode): any {
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
    autoscale: cdktf.listMapper(hdinsightSparkClusterRolesWorkerNodeAutoscaleToTerraform)(struct!.autoscale),
  }
}

export interface HdinsightSparkClusterRolesZookeeperNode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#password HdinsightSparkCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#ssh_keys HdinsightSparkCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#subnet_id HdinsightSparkCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#username HdinsightSparkCluster#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#virtual_network_id HdinsightSparkCluster#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#vm_size HdinsightSparkCluster#vm_size}
  */
  readonly vmSize: string;
}

function hdinsightSparkClusterRolesZookeeperNodeToTerraform(struct?: HdinsightSparkClusterRolesZookeeperNode): any {
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

export interface HdinsightSparkClusterRoles {
  /**
  * head_node block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#head_node HdinsightSparkCluster#head_node}
  */
  readonly headNode: HdinsightSparkClusterRolesHeadNode[];
  /**
  * worker_node block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#worker_node HdinsightSparkCluster#worker_node}
  */
  readonly workerNode: HdinsightSparkClusterRolesWorkerNode[];
  /**
  * zookeeper_node block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#zookeeper_node HdinsightSparkCluster#zookeeper_node}
  */
  readonly zookeeperNode: HdinsightSparkClusterRolesZookeeperNode[];
}

function hdinsightSparkClusterRolesToTerraform(struct?: HdinsightSparkClusterRoles): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    head_node: cdktf.listMapper(hdinsightSparkClusterRolesHeadNodeToTerraform)(struct!.headNode),
    worker_node: cdktf.listMapper(hdinsightSparkClusterRolesWorkerNodeToTerraform)(struct!.workerNode),
    zookeeper_node: cdktf.listMapper(hdinsightSparkClusterRolesZookeeperNodeToTerraform)(struct!.zookeeperNode),
  }
}

export interface HdinsightSparkClusterStorageAccount {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#is_default HdinsightSparkCluster#is_default}
  */
  readonly isDefault: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#storage_account_key HdinsightSparkCluster#storage_account_key}
  */
  readonly storageAccountKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#storage_container_id HdinsightSparkCluster#storage_container_id}
  */
  readonly storageContainerId: string;
}

function hdinsightSparkClusterStorageAccountToTerraform(struct?: HdinsightSparkClusterStorageAccount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    storage_account_key: cdktf.stringToTerraform(struct!.storageAccountKey),
    storage_container_id: cdktf.stringToTerraform(struct!.storageContainerId),
  }
}

export interface HdinsightSparkClusterStorageAccountGen2 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#filesystem_id HdinsightSparkCluster#filesystem_id}
  */
  readonly filesystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#is_default HdinsightSparkCluster#is_default}
  */
  readonly isDefault: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#managed_identity_resource_id HdinsightSparkCluster#managed_identity_resource_id}
  */
  readonly managedIdentityResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#storage_resource_id HdinsightSparkCluster#storage_resource_id}
  */
  readonly storageResourceId: string;
}

function hdinsightSparkClusterStorageAccountGen2ToTerraform(struct?: HdinsightSparkClusterStorageAccountGen2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    filesystem_id: cdktf.stringToTerraform(struct!.filesystemId),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    managed_identity_resource_id: cdktf.stringToTerraform(struct!.managedIdentityResourceId),
    storage_resource_id: cdktf.stringToTerraform(struct!.storageResourceId),
  }
}

export interface HdinsightSparkClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#create HdinsightSparkCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#delete HdinsightSparkCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#read HdinsightSparkCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#update HdinsightSparkCluster#update}
  */
  readonly update?: string;
}

function hdinsightSparkClusterTimeoutsToTerraform(struct?: HdinsightSparkClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html azurerm_hdinsight_spark_cluster}
*/
export class HdinsightSparkCluster extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html azurerm_hdinsight_spark_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HdinsightSparkClusterConfig
  */
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

  // encryption_in_transit_enabled - computed: true, optional: true, required: false
  private _encryptionInTransitEnabled?: boolean;
  public get encryptionInTransitEnabled() {
    return this.getBooleanAttribute('encryption_in_transit_enabled');
  }
  public set encryptionInTransitEnabled(value: boolean) {
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
  private _componentVersion: HdinsightSparkClusterComponentVersion[];
  public get componentVersion() {
    return this.interpolationForAttribute('component_version') as any;
  }
  public set componentVersion(value: HdinsightSparkClusterComponentVersion[]) {
    this._componentVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentVersionInput() {
    return this._componentVersion
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway: HdinsightSparkClusterGateway[];
  public get gateway() {
    return this.interpolationForAttribute('gateway') as any;
  }
  public set gateway(value: HdinsightSparkClusterGateway[]) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway
  }

  // metastores - computed: false, optional: true, required: false
  private _metastores?: HdinsightSparkClusterMetastores[];
  public get metastores() {
    return this.interpolationForAttribute('metastores') as any;
  }
  public set metastores(value: HdinsightSparkClusterMetastores[] ) {
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
  private _monitor?: HdinsightSparkClusterMonitor[];
  public get monitor() {
    return this.interpolationForAttribute('monitor') as any;
  }
  public set monitor(value: HdinsightSparkClusterMonitor[] ) {
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
  private _network?: HdinsightSparkClusterNetwork[];
  public get network() {
    return this.interpolationForAttribute('network') as any;
  }
  public set network(value: HdinsightSparkClusterNetwork[] ) {
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
  private _roles: HdinsightSparkClusterRoles[];
  public get roles() {
    return this.interpolationForAttribute('roles') as any;
  }
  public set roles(value: HdinsightSparkClusterRoles[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles
  }

  // storage_account - computed: false, optional: true, required: false
  private _storageAccount?: HdinsightSparkClusterStorageAccount[];
  public get storageAccount() {
    return this.interpolationForAttribute('storage_account') as any;
  }
  public set storageAccount(value: HdinsightSparkClusterStorageAccount[] ) {
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
  private _storageAccountGen2?: HdinsightSparkClusterStorageAccountGen2[];
  public get storageAccountGen2() {
    return this.interpolationForAttribute('storage_account_gen2') as any;
  }
  public set storageAccountGen2(value: HdinsightSparkClusterStorageAccountGen2[] ) {
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
  private _timeouts?: HdinsightSparkClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: HdinsightSparkClusterTimeouts ) {
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
      component_version: cdktf.listMapper(hdinsightSparkClusterComponentVersionToTerraform)(this._componentVersion),
      gateway: cdktf.listMapper(hdinsightSparkClusterGatewayToTerraform)(this._gateway),
      metastores: cdktf.listMapper(hdinsightSparkClusterMetastoresToTerraform)(this._metastores),
      monitor: cdktf.listMapper(hdinsightSparkClusterMonitorToTerraform)(this._monitor),
      network: cdktf.listMapper(hdinsightSparkClusterNetworkToTerraform)(this._network),
      roles: cdktf.listMapper(hdinsightSparkClusterRolesToTerraform)(this._roles),
      storage_account: cdktf.listMapper(hdinsightSparkClusterStorageAccountToTerraform)(this._storageAccount),
      storage_account_gen2: cdktf.listMapper(hdinsightSparkClusterStorageAccountGen2ToTerraform)(this._storageAccountGen2),
      timeouts: hdinsightSparkClusterTimeoutsToTerraform(this._timeouts),
    };
  }
}
