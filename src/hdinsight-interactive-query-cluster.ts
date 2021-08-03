// https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HdinsightInteractiveQueryClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#cluster_version HdinsightInteractiveQueryCluster#cluster_version}
  */
  readonly clusterVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#encryption_in_transit_enabled HdinsightInteractiveQueryCluster#encryption_in_transit_enabled}
  */
  readonly encryptionInTransitEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#location HdinsightInteractiveQueryCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#name HdinsightInteractiveQueryCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#resource_group_name HdinsightInteractiveQueryCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#tags HdinsightInteractiveQueryCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#tier HdinsightInteractiveQueryCluster#tier}
  */
  readonly tier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#tls_min_version HdinsightInteractiveQueryCluster#tls_min_version}
  */
  readonly tlsMinVersion?: string;
  /**
  * component_version block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#component_version HdinsightInteractiveQueryCluster#component_version}
  */
  readonly componentVersion: HdinsightInteractiveQueryClusterComponentVersion[];
  /**
  * gateway block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#gateway HdinsightInteractiveQueryCluster#gateway}
  */
  readonly gateway: HdinsightInteractiveQueryClusterGateway[];
  /**
  * metastores block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#metastores HdinsightInteractiveQueryCluster#metastores}
  */
  readonly metastores?: HdinsightInteractiveQueryClusterMetastores[];
  /**
  * monitor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#monitor HdinsightInteractiveQueryCluster#monitor}
  */
  readonly monitor?: HdinsightInteractiveQueryClusterMonitor[];
  /**
  * network block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#network HdinsightInteractiveQueryCluster#network}
  */
  readonly network?: HdinsightInteractiveQueryClusterNetwork[];
  /**
  * roles block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#roles HdinsightInteractiveQueryCluster#roles}
  */
  readonly roles: HdinsightInteractiveQueryClusterRoles[];
  /**
  * storage_account block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#storage_account HdinsightInteractiveQueryCluster#storage_account}
  */
  readonly storageAccount?: HdinsightInteractiveQueryClusterStorageAccount[];
  /**
  * storage_account_gen2 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#storage_account_gen2 HdinsightInteractiveQueryCluster#storage_account_gen2}
  */
  readonly storageAccountGen2?: HdinsightInteractiveQueryClusterStorageAccountGen2[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#timeouts HdinsightInteractiveQueryCluster#timeouts}
  */
  readonly timeouts?: HdinsightInteractiveQueryClusterTimeouts;
}
export interface HdinsightInteractiveQueryClusterComponentVersion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#interactive_hive HdinsightInteractiveQueryCluster#interactive_hive}
  */
  readonly interactiveHive: string;
}

function hdinsightInteractiveQueryClusterComponentVersionToTerraform(struct?: HdinsightInteractiveQueryClusterComponentVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interactive_hive: cdktf.stringToTerraform(struct!.interactiveHive),
  }
}

export interface HdinsightInteractiveQueryClusterGateway {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#enabled HdinsightInteractiveQueryCluster#enabled}
  */
  readonly enabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#password HdinsightInteractiveQueryCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#username HdinsightInteractiveQueryCluster#username}
  */
  readonly username: string;
}

function hdinsightInteractiveQueryClusterGatewayToTerraform(struct?: HdinsightInteractiveQueryClusterGateway): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface HdinsightInteractiveQueryClusterMetastoresAmbari {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#database_name HdinsightInteractiveQueryCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#password HdinsightInteractiveQueryCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#server HdinsightInteractiveQueryCluster#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#username HdinsightInteractiveQueryCluster#username}
  */
  readonly username: string;
}

function hdinsightInteractiveQueryClusterMetastoresAmbariToTerraform(struct?: HdinsightInteractiveQueryClusterMetastoresAmbari): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface HdinsightInteractiveQueryClusterMetastoresHive {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#database_name HdinsightInteractiveQueryCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#password HdinsightInteractiveQueryCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#server HdinsightInteractiveQueryCluster#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#username HdinsightInteractiveQueryCluster#username}
  */
  readonly username: string;
}

function hdinsightInteractiveQueryClusterMetastoresHiveToTerraform(struct?: HdinsightInteractiveQueryClusterMetastoresHive): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface HdinsightInteractiveQueryClusterMetastoresOozie {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#database_name HdinsightInteractiveQueryCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#password HdinsightInteractiveQueryCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#server HdinsightInteractiveQueryCluster#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#username HdinsightInteractiveQueryCluster#username}
  */
  readonly username: string;
}

function hdinsightInteractiveQueryClusterMetastoresOozieToTerraform(struct?: HdinsightInteractiveQueryClusterMetastoresOozie): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface HdinsightInteractiveQueryClusterMetastores {
  /**
  * ambari block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#ambari HdinsightInteractiveQueryCluster#ambari}
  */
  readonly ambari?: HdinsightInteractiveQueryClusterMetastoresAmbari[];
  /**
  * hive block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#hive HdinsightInteractiveQueryCluster#hive}
  */
  readonly hive?: HdinsightInteractiveQueryClusterMetastoresHive[];
  /**
  * oozie block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#oozie HdinsightInteractiveQueryCluster#oozie}
  */
  readonly oozie?: HdinsightInteractiveQueryClusterMetastoresOozie[];
}

function hdinsightInteractiveQueryClusterMetastoresToTerraform(struct?: HdinsightInteractiveQueryClusterMetastores): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ambari: cdktf.listMapper(hdinsightInteractiveQueryClusterMetastoresAmbariToTerraform)(struct!.ambari),
    hive: cdktf.listMapper(hdinsightInteractiveQueryClusterMetastoresHiveToTerraform)(struct!.hive),
    oozie: cdktf.listMapper(hdinsightInteractiveQueryClusterMetastoresOozieToTerraform)(struct!.oozie),
  }
}

export interface HdinsightInteractiveQueryClusterMonitor {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#log_analytics_workspace_id HdinsightInteractiveQueryCluster#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#primary_key HdinsightInteractiveQueryCluster#primary_key}
  */
  readonly primaryKey: string;
}

function hdinsightInteractiveQueryClusterMonitorToTerraform(struct?: HdinsightInteractiveQueryClusterMonitor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_analytics_workspace_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceId),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}

export interface HdinsightInteractiveQueryClusterNetwork {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#connection_direction HdinsightInteractiveQueryCluster#connection_direction}
  */
  readonly connectionDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#private_link_enabled HdinsightInteractiveQueryCluster#private_link_enabled}
  */
  readonly privateLinkEnabled?: boolean;
}

function hdinsightInteractiveQueryClusterNetworkToTerraform(struct?: HdinsightInteractiveQueryClusterNetwork): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connection_direction: cdktf.stringToTerraform(struct!.connectionDirection),
    private_link_enabled: cdktf.booleanToTerraform(struct!.privateLinkEnabled),
  }
}

export interface HdinsightInteractiveQueryClusterRolesHeadNode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#password HdinsightInteractiveQueryCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#ssh_keys HdinsightInteractiveQueryCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#subnet_id HdinsightInteractiveQueryCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#username HdinsightInteractiveQueryCluster#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#virtual_network_id HdinsightInteractiveQueryCluster#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#vm_size HdinsightInteractiveQueryCluster#vm_size}
  */
  readonly vmSize: string;
}

function hdinsightInteractiveQueryClusterRolesHeadNodeToTerraform(struct?: HdinsightInteractiveQueryClusterRolesHeadNode): any {
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

export interface HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#max_instance_count HdinsightInteractiveQueryCluster#max_instance_count}
  */
  readonly maxInstanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#min_instance_count HdinsightInteractiveQueryCluster#min_instance_count}
  */
  readonly minInstanceCount: number;
}

function hdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityToTerraform(struct?: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_instance_count: cdktf.numberToTerraform(struct!.maxInstanceCount),
    min_instance_count: cdktf.numberToTerraform(struct!.minInstanceCount),
  }
}

export interface HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#days HdinsightInteractiveQueryCluster#days}
  */
  readonly days: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#target_instance_count HdinsightInteractiveQueryCluster#target_instance_count}
  */
  readonly targetInstanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#time HdinsightInteractiveQueryCluster#time}
  */
  readonly time: string;
}

function hdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleToTerraform(struct?: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform)(struct!.days),
    target_instance_count: cdktf.numberToTerraform(struct!.targetInstanceCount),
    time: cdktf.stringToTerraform(struct!.time),
  }
}

export interface HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#timezone HdinsightInteractiveQueryCluster#timezone}
  */
  readonly timezone: string;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#schedule HdinsightInteractiveQueryCluster#schedule}
  */
  readonly schedule: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule[];
}

function hdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceToTerraform(struct?: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    timezone: cdktf.stringToTerraform(struct!.timezone),
    schedule: cdktf.listMapper(hdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleToTerraform)(struct!.schedule),
  }
}

export interface HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale {
  /**
  * capacity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#capacity HdinsightInteractiveQueryCluster#capacity}
  */
  readonly capacity?: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity[];
  /**
  * recurrence block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#recurrence HdinsightInteractiveQueryCluster#recurrence}
  */
  readonly recurrence?: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence[];
}

function hdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleToTerraform(struct?: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacity: cdktf.listMapper(hdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityToTerraform)(struct!.capacity),
    recurrence: cdktf.listMapper(hdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceToTerraform)(struct!.recurrence),
  }
}

export interface HdinsightInteractiveQueryClusterRolesWorkerNode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#min_instance_count HdinsightInteractiveQueryCluster#min_instance_count}
  */
  readonly minInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#password HdinsightInteractiveQueryCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#ssh_keys HdinsightInteractiveQueryCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#subnet_id HdinsightInteractiveQueryCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#target_instance_count HdinsightInteractiveQueryCluster#target_instance_count}
  */
  readonly targetInstanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#username HdinsightInteractiveQueryCluster#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#virtual_network_id HdinsightInteractiveQueryCluster#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#vm_size HdinsightInteractiveQueryCluster#vm_size}
  */
  readonly vmSize: string;
  /**
  * autoscale block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#autoscale HdinsightInteractiveQueryCluster#autoscale}
  */
  readonly autoscale?: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale[];
}

function hdinsightInteractiveQueryClusterRolesWorkerNodeToTerraform(struct?: HdinsightInteractiveQueryClusterRolesWorkerNode): any {
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
    autoscale: cdktf.listMapper(hdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleToTerraform)(struct!.autoscale),
  }
}

export interface HdinsightInteractiveQueryClusterRolesZookeeperNode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#password HdinsightInteractiveQueryCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#ssh_keys HdinsightInteractiveQueryCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#subnet_id HdinsightInteractiveQueryCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#username HdinsightInteractiveQueryCluster#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#virtual_network_id HdinsightInteractiveQueryCluster#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#vm_size HdinsightInteractiveQueryCluster#vm_size}
  */
  readonly vmSize: string;
}

function hdinsightInteractiveQueryClusterRolesZookeeperNodeToTerraform(struct?: HdinsightInteractiveQueryClusterRolesZookeeperNode): any {
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

export interface HdinsightInteractiveQueryClusterRoles {
  /**
  * head_node block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#head_node HdinsightInteractiveQueryCluster#head_node}
  */
  readonly headNode: HdinsightInteractiveQueryClusterRolesHeadNode[];
  /**
  * worker_node block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#worker_node HdinsightInteractiveQueryCluster#worker_node}
  */
  readonly workerNode: HdinsightInteractiveQueryClusterRolesWorkerNode[];
  /**
  * zookeeper_node block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#zookeeper_node HdinsightInteractiveQueryCluster#zookeeper_node}
  */
  readonly zookeeperNode: HdinsightInteractiveQueryClusterRolesZookeeperNode[];
}

function hdinsightInteractiveQueryClusterRolesToTerraform(struct?: HdinsightInteractiveQueryClusterRoles): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    head_node: cdktf.listMapper(hdinsightInteractiveQueryClusterRolesHeadNodeToTerraform)(struct!.headNode),
    worker_node: cdktf.listMapper(hdinsightInteractiveQueryClusterRolesWorkerNodeToTerraform)(struct!.workerNode),
    zookeeper_node: cdktf.listMapper(hdinsightInteractiveQueryClusterRolesZookeeperNodeToTerraform)(struct!.zookeeperNode),
  }
}

export interface HdinsightInteractiveQueryClusterStorageAccount {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#is_default HdinsightInteractiveQueryCluster#is_default}
  */
  readonly isDefault: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#storage_account_key HdinsightInteractiveQueryCluster#storage_account_key}
  */
  readonly storageAccountKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#storage_container_id HdinsightInteractiveQueryCluster#storage_container_id}
  */
  readonly storageContainerId: string;
}

function hdinsightInteractiveQueryClusterStorageAccountToTerraform(struct?: HdinsightInteractiveQueryClusterStorageAccount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    storage_account_key: cdktf.stringToTerraform(struct!.storageAccountKey),
    storage_container_id: cdktf.stringToTerraform(struct!.storageContainerId),
  }
}

export interface HdinsightInteractiveQueryClusterStorageAccountGen2 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#filesystem_id HdinsightInteractiveQueryCluster#filesystem_id}
  */
  readonly filesystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#is_default HdinsightInteractiveQueryCluster#is_default}
  */
  readonly isDefault: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#managed_identity_resource_id HdinsightInteractiveQueryCluster#managed_identity_resource_id}
  */
  readonly managedIdentityResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#storage_resource_id HdinsightInteractiveQueryCluster#storage_resource_id}
  */
  readonly storageResourceId: string;
}

function hdinsightInteractiveQueryClusterStorageAccountGen2ToTerraform(struct?: HdinsightInteractiveQueryClusterStorageAccountGen2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    filesystem_id: cdktf.stringToTerraform(struct!.filesystemId),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    managed_identity_resource_id: cdktf.stringToTerraform(struct!.managedIdentityResourceId),
    storage_resource_id: cdktf.stringToTerraform(struct!.storageResourceId),
  }
}

export interface HdinsightInteractiveQueryClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#create HdinsightInteractiveQueryCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#delete HdinsightInteractiveQueryCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#read HdinsightInteractiveQueryCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html#update HdinsightInteractiveQueryCluster#update}
  */
  readonly update?: string;
}

function hdinsightInteractiveQueryClusterTimeoutsToTerraform(struct?: HdinsightInteractiveQueryClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html azurerm_hdinsight_interactive_query_cluster}
*/
export class HdinsightInteractiveQueryCluster extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster.html azurerm_hdinsight_interactive_query_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HdinsightInteractiveQueryClusterConfig
  */
  public constructor(scope: Construct, id: string, config: HdinsightInteractiveQueryClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_hdinsight_interactive_query_cluster',
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
  private _componentVersion: HdinsightInteractiveQueryClusterComponentVersion[];
  public get componentVersion() {
    return this.interpolationForAttribute('component_version') as any;
  }
  public set componentVersion(value: HdinsightInteractiveQueryClusterComponentVersion[]) {
    this._componentVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentVersionInput() {
    return this._componentVersion
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway: HdinsightInteractiveQueryClusterGateway[];
  public get gateway() {
    return this.interpolationForAttribute('gateway') as any;
  }
  public set gateway(value: HdinsightInteractiveQueryClusterGateway[]) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway
  }

  // metastores - computed: false, optional: true, required: false
  private _metastores?: HdinsightInteractiveQueryClusterMetastores[];
  public get metastores() {
    return this.interpolationForAttribute('metastores') as any;
  }
  public set metastores(value: HdinsightInteractiveQueryClusterMetastores[] ) {
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
  private _monitor?: HdinsightInteractiveQueryClusterMonitor[];
  public get monitor() {
    return this.interpolationForAttribute('monitor') as any;
  }
  public set monitor(value: HdinsightInteractiveQueryClusterMonitor[] ) {
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
  private _network?: HdinsightInteractiveQueryClusterNetwork[];
  public get network() {
    return this.interpolationForAttribute('network') as any;
  }
  public set network(value: HdinsightInteractiveQueryClusterNetwork[] ) {
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
  private _roles: HdinsightInteractiveQueryClusterRoles[];
  public get roles() {
    return this.interpolationForAttribute('roles') as any;
  }
  public set roles(value: HdinsightInteractiveQueryClusterRoles[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles
  }

  // storage_account - computed: false, optional: true, required: false
  private _storageAccount?: HdinsightInteractiveQueryClusterStorageAccount[];
  public get storageAccount() {
    return this.interpolationForAttribute('storage_account') as any;
  }
  public set storageAccount(value: HdinsightInteractiveQueryClusterStorageAccount[] ) {
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
  private _storageAccountGen2?: HdinsightInteractiveQueryClusterStorageAccountGen2[];
  public get storageAccountGen2() {
    return this.interpolationForAttribute('storage_account_gen2') as any;
  }
  public set storageAccountGen2(value: HdinsightInteractiveQueryClusterStorageAccountGen2[] ) {
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
  private _timeouts?: HdinsightInteractiveQueryClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: HdinsightInteractiveQueryClusterTimeouts ) {
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
      component_version: cdktf.listMapper(hdinsightInteractiveQueryClusterComponentVersionToTerraform)(this._componentVersion),
      gateway: cdktf.listMapper(hdinsightInteractiveQueryClusterGatewayToTerraform)(this._gateway),
      metastores: cdktf.listMapper(hdinsightInteractiveQueryClusterMetastoresToTerraform)(this._metastores),
      monitor: cdktf.listMapper(hdinsightInteractiveQueryClusterMonitorToTerraform)(this._monitor),
      network: cdktf.listMapper(hdinsightInteractiveQueryClusterNetworkToTerraform)(this._network),
      roles: cdktf.listMapper(hdinsightInteractiveQueryClusterRolesToTerraform)(this._roles),
      storage_account: cdktf.listMapper(hdinsightInteractiveQueryClusterStorageAccountToTerraform)(this._storageAccount),
      storage_account_gen2: cdktf.listMapper(hdinsightInteractiveQueryClusterStorageAccountGen2ToTerraform)(this._storageAccountGen2),
      timeouts: hdinsightInteractiveQueryClusterTimeoutsToTerraform(this._timeouts),
    };
  }
}
