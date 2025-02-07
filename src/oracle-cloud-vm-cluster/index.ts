/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OracleCloudVmClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#backup_subnet_cidr OracleCloudVmCluster#backup_subnet_cidr}
  */
  readonly backupSubnetCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#cloud_exadata_infrastructure_id OracleCloudVmCluster#cloud_exadata_infrastructure_id}
  */
  readonly cloudExadataInfrastructureId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#cluster_name OracleCloudVmCluster#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#cpu_core_count OracleCloudVmCluster#cpu_core_count}
  */
  readonly cpuCoreCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#data_storage_percentage OracleCloudVmCluster#data_storage_percentage}
  */
  readonly dataStoragePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#data_storage_size_in_tbs OracleCloudVmCluster#data_storage_size_in_tbs}
  */
  readonly dataStorageSizeInTbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#db_node_storage_size_in_gbs OracleCloudVmCluster#db_node_storage_size_in_gbs}
  */
  readonly dbNodeStorageSizeInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#db_servers OracleCloudVmCluster#db_servers}
  */
  readonly dbServers: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#display_name OracleCloudVmCluster#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#domain OracleCloudVmCluster#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#gi_version OracleCloudVmCluster#gi_version}
  */
  readonly giVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#hostname OracleCloudVmCluster#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#id OracleCloudVmCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#license_model OracleCloudVmCluster#license_model}
  */
  readonly licenseModel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#local_backup_enabled OracleCloudVmCluster#local_backup_enabled}
  */
  readonly localBackupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#location OracleCloudVmCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#memory_size_in_gbs OracleCloudVmCluster#memory_size_in_gbs}
  */
  readonly memorySizeInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#name OracleCloudVmCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#resource_group_name OracleCloudVmCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#scan_listener_port_tcp OracleCloudVmCluster#scan_listener_port_tcp}
  */
  readonly scanListenerPortTcp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#scan_listener_port_tcp_ssl OracleCloudVmCluster#scan_listener_port_tcp_ssl}
  */
  readonly scanListenerPortTcpSsl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#sparse_diskgroup_enabled OracleCloudVmCluster#sparse_diskgroup_enabled}
  */
  readonly sparseDiskgroupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#ssh_public_keys OracleCloudVmCluster#ssh_public_keys}
  */
  readonly sshPublicKeys: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#subnet_id OracleCloudVmCluster#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#tags OracleCloudVmCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#time_zone OracleCloudVmCluster#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#virtual_network_id OracleCloudVmCluster#virtual_network_id}
  */
  readonly virtualNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#zone_id OracleCloudVmCluster#zone_id}
  */
  readonly zoneId?: string;
  /**
  * data_collection_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#data_collection_options OracleCloudVmCluster#data_collection_options}
  */
  readonly dataCollectionOptions?: OracleCloudVmClusterDataCollectionOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#timeouts OracleCloudVmCluster#timeouts}
  */
  readonly timeouts?: OracleCloudVmClusterTimeouts;
}
export interface OracleCloudVmClusterDataCollectionOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#diagnostics_events_enabled OracleCloudVmCluster#diagnostics_events_enabled}
  */
  readonly diagnosticsEventsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#health_monitoring_enabled OracleCloudVmCluster#health_monitoring_enabled}
  */
  readonly healthMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#incident_logs_enabled OracleCloudVmCluster#incident_logs_enabled}
  */
  readonly incidentLogsEnabled?: boolean | cdktf.IResolvable;
}

export function oracleCloudVmClusterDataCollectionOptionsToTerraform(struct?: OracleCloudVmClusterDataCollectionOptionsOutputReference | OracleCloudVmClusterDataCollectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    diagnostics_events_enabled: cdktf.booleanToTerraform(struct!.diagnosticsEventsEnabled),
    health_monitoring_enabled: cdktf.booleanToTerraform(struct!.healthMonitoringEnabled),
    incident_logs_enabled: cdktf.booleanToTerraform(struct!.incidentLogsEnabled),
  }
}


export function oracleCloudVmClusterDataCollectionOptionsToHclTerraform(struct?: OracleCloudVmClusterDataCollectionOptionsOutputReference | OracleCloudVmClusterDataCollectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    diagnostics_events_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.diagnosticsEventsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    health_monitoring_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.healthMonitoringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    incident_logs_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.incidentLogsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleCloudVmClusterDataCollectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleCloudVmClusterDataCollectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diagnosticsEventsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.diagnosticsEventsEnabled = this._diagnosticsEventsEnabled;
    }
    if (this._healthMonitoringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthMonitoringEnabled = this._healthMonitoringEnabled;
    }
    if (this._incidentLogsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentLogsEnabled = this._incidentLogsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleCloudVmClusterDataCollectionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diagnosticsEventsEnabled = undefined;
      this._healthMonitoringEnabled = undefined;
      this._incidentLogsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diagnosticsEventsEnabled = value.diagnosticsEventsEnabled;
      this._healthMonitoringEnabled = value.healthMonitoringEnabled;
      this._incidentLogsEnabled = value.incidentLogsEnabled;
    }
  }

  // diagnostics_events_enabled - computed: true, optional: true, required: false
  private _diagnosticsEventsEnabled?: boolean | cdktf.IResolvable; 
  public get diagnosticsEventsEnabled() {
    return this.getBooleanAttribute('diagnostics_events_enabled');
  }
  public set diagnosticsEventsEnabled(value: boolean | cdktf.IResolvable) {
    this._diagnosticsEventsEnabled = value;
  }
  public resetDiagnosticsEventsEnabled() {
    this._diagnosticsEventsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosticsEventsEnabledInput() {
    return this._diagnosticsEventsEnabled;
  }

  // health_monitoring_enabled - computed: true, optional: true, required: false
  private _healthMonitoringEnabled?: boolean | cdktf.IResolvable; 
  public get healthMonitoringEnabled() {
    return this.getBooleanAttribute('health_monitoring_enabled');
  }
  public set healthMonitoringEnabled(value: boolean | cdktf.IResolvable) {
    this._healthMonitoringEnabled = value;
  }
  public resetHealthMonitoringEnabled() {
    this._healthMonitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitoringEnabledInput() {
    return this._healthMonitoringEnabled;
  }

  // incident_logs_enabled - computed: true, optional: true, required: false
  private _incidentLogsEnabled?: boolean | cdktf.IResolvable; 
  public get incidentLogsEnabled() {
    return this.getBooleanAttribute('incident_logs_enabled');
  }
  public set incidentLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._incidentLogsEnabled = value;
  }
  public resetIncidentLogsEnabled() {
    this._incidentLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentLogsEnabledInput() {
    return this._incidentLogsEnabled;
  }
}
export interface OracleCloudVmClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#create OracleCloudVmCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#delete OracleCloudVmCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#read OracleCloudVmCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#update OracleCloudVmCluster#update}
  */
  readonly update?: string;
}

export function oracleCloudVmClusterTimeoutsToTerraform(struct?: OracleCloudVmClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function oracleCloudVmClusterTimeoutsToHclTerraform(struct?: OracleCloudVmClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleCloudVmClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OracleCloudVmClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleCloudVmClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster azurerm_oracle_cloud_vm_cluster}
*/
export class OracleCloudVmCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_oracle_cloud_vm_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OracleCloudVmCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OracleCloudVmCluster to import
  * @param importFromId The id of the existing OracleCloudVmCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OracleCloudVmCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_oracle_cloud_vm_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/oracle_cloud_vm_cluster azurerm_oracle_cloud_vm_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OracleCloudVmClusterConfig
  */
  public constructor(scope: Construct, id: string, config: OracleCloudVmClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_oracle_cloud_vm_cluster',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.18.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupSubnetCidr = config.backupSubnetCidr;
    this._cloudExadataInfrastructureId = config.cloudExadataInfrastructureId;
    this._clusterName = config.clusterName;
    this._cpuCoreCount = config.cpuCoreCount;
    this._dataStoragePercentage = config.dataStoragePercentage;
    this._dataStorageSizeInTbs = config.dataStorageSizeInTbs;
    this._dbNodeStorageSizeInGbs = config.dbNodeStorageSizeInGbs;
    this._dbServers = config.dbServers;
    this._displayName = config.displayName;
    this._domain = config.domain;
    this._giVersion = config.giVersion;
    this._hostname = config.hostname;
    this._id = config.id;
    this._licenseModel = config.licenseModel;
    this._localBackupEnabled = config.localBackupEnabled;
    this._location = config.location;
    this._memorySizeInGbs = config.memorySizeInGbs;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._scanListenerPortTcp = config.scanListenerPortTcp;
    this._scanListenerPortTcpSsl = config.scanListenerPortTcpSsl;
    this._sparseDiskgroupEnabled = config.sparseDiskgroupEnabled;
    this._sshPublicKeys = config.sshPublicKeys;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._timeZone = config.timeZone;
    this._virtualNetworkId = config.virtualNetworkId;
    this._zoneId = config.zoneId;
    this._dataCollectionOptions.internalValue = config.dataCollectionOptions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_subnet_cidr - computed: false, optional: true, required: false
  private _backupSubnetCidr?: string; 
  public get backupSubnetCidr() {
    return this.getStringAttribute('backup_subnet_cidr');
  }
  public set backupSubnetCidr(value: string) {
    this._backupSubnetCidr = value;
  }
  public resetBackupSubnetCidr() {
    this._backupSubnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSubnetCidrInput() {
    return this._backupSubnetCidr;
  }

  // cloud_exadata_infrastructure_id - computed: false, optional: false, required: true
  private _cloudExadataInfrastructureId?: string; 
  public get cloudExadataInfrastructureId() {
    return this.getStringAttribute('cloud_exadata_infrastructure_id');
  }
  public set cloudExadataInfrastructureId(value: string) {
    this._cloudExadataInfrastructureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudExadataInfrastructureIdInput() {
    return this._cloudExadataInfrastructureId;
  }

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cpu_core_count - computed: false, optional: false, required: true
  private _cpuCoreCount?: number; 
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }
  public set cpuCoreCount(value: number) {
    this._cpuCoreCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCoreCountInput() {
    return this._cpuCoreCount;
  }

  // data_storage_percentage - computed: true, optional: true, required: false
  private _dataStoragePercentage?: number; 
  public get dataStoragePercentage() {
    return this.getNumberAttribute('data_storage_percentage');
  }
  public set dataStoragePercentage(value: number) {
    this._dataStoragePercentage = value;
  }
  public resetDataStoragePercentage() {
    this._dataStoragePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoragePercentageInput() {
    return this._dataStoragePercentage;
  }

  // data_storage_size_in_tbs - computed: true, optional: true, required: false
  private _dataStorageSizeInTbs?: number; 
  public get dataStorageSizeInTbs() {
    return this.getNumberAttribute('data_storage_size_in_tbs');
  }
  public set dataStorageSizeInTbs(value: number) {
    this._dataStorageSizeInTbs = value;
  }
  public resetDataStorageSizeInTbs() {
    this._dataStorageSizeInTbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageSizeInTbsInput() {
    return this._dataStorageSizeInTbs;
  }

  // db_node_storage_size_in_gbs - computed: true, optional: true, required: false
  private _dbNodeStorageSizeInGbs?: number; 
  public get dbNodeStorageSizeInGbs() {
    return this.getNumberAttribute('db_node_storage_size_in_gbs');
  }
  public set dbNodeStorageSizeInGbs(value: number) {
    this._dbNodeStorageSizeInGbs = value;
  }
  public resetDbNodeStorageSizeInGbs() {
    this._dbNodeStorageSizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNodeStorageSizeInGbsInput() {
    return this._dbNodeStorageSizeInGbs;
  }

  // db_servers - computed: false, optional: false, required: true
  private _dbServers?: string[]; 
  public get dbServers() {
    return this.getListAttribute('db_servers');
  }
  public set dbServers(value: string[]) {
    this._dbServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbServersInput() {
    return this._dbServers;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // gi_version - computed: false, optional: false, required: true
  private _giVersion?: string; 
  public get giVersion() {
    return this.getStringAttribute('gi_version');
  }
  public set giVersion(value: string) {
    this._giVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get giVersionInput() {
    return this._giVersion;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // hostname_actual - computed: true, optional: false, required: false
  public get hostnameActual() {
    return this.getStringAttribute('hostname_actual');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // license_model - computed: false, optional: false, required: true
  private _licenseModel?: string; 
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string) {
    this._licenseModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseModelInput() {
    return this._licenseModel;
  }

  // local_backup_enabled - computed: true, optional: true, required: false
  private _localBackupEnabled?: boolean | cdktf.IResolvable; 
  public get localBackupEnabled() {
    return this.getBooleanAttribute('local_backup_enabled');
  }
  public set localBackupEnabled(value: boolean | cdktf.IResolvable) {
    this._localBackupEnabled = value;
  }
  public resetLocalBackupEnabled() {
    this._localBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localBackupEnabledInput() {
    return this._localBackupEnabled;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // memory_size_in_gbs - computed: true, optional: true, required: false
  private _memorySizeInGbs?: number; 
  public get memorySizeInGbs() {
    return this.getNumberAttribute('memory_size_in_gbs');
  }
  public set memorySizeInGbs(value: number) {
    this._memorySizeInGbs = value;
  }
  public resetMemorySizeInGbs() {
    this._memorySizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeInGbsInput() {
    return this._memorySizeInGbs;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // scan_listener_port_tcp - computed: false, optional: true, required: false
  private _scanListenerPortTcp?: number; 
  public get scanListenerPortTcp() {
    return this.getNumberAttribute('scan_listener_port_tcp');
  }
  public set scanListenerPortTcp(value: number) {
    this._scanListenerPortTcp = value;
  }
  public resetScanListenerPortTcp() {
    this._scanListenerPortTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanListenerPortTcpInput() {
    return this._scanListenerPortTcp;
  }

  // scan_listener_port_tcp_ssl - computed: false, optional: true, required: false
  private _scanListenerPortTcpSsl?: number; 
  public get scanListenerPortTcpSsl() {
    return this.getNumberAttribute('scan_listener_port_tcp_ssl');
  }
  public set scanListenerPortTcpSsl(value: number) {
    this._scanListenerPortTcpSsl = value;
  }
  public resetScanListenerPortTcpSsl() {
    this._scanListenerPortTcpSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanListenerPortTcpSslInput() {
    return this._scanListenerPortTcpSsl;
  }

  // sparse_diskgroup_enabled - computed: true, optional: true, required: false
  private _sparseDiskgroupEnabled?: boolean | cdktf.IResolvable; 
  public get sparseDiskgroupEnabled() {
    return this.getBooleanAttribute('sparse_diskgroup_enabled');
  }
  public set sparseDiskgroupEnabled(value: boolean | cdktf.IResolvable) {
    this._sparseDiskgroupEnabled = value;
  }
  public resetSparseDiskgroupEnabled() {
    this._sparseDiskgroupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparseDiskgroupEnabledInput() {
    return this._sparseDiskgroupEnabled;
  }

  // ssh_public_keys - computed: false, optional: false, required: true
  private _sshPublicKeys?: string[]; 
  public get sshPublicKeys() {
    return this.getListAttribute('ssh_public_keys');
  }
  public set sshPublicKeys(value: string[]) {
    this._sshPublicKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeysInput() {
    return this._sshPublicKeys;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // virtual_network_id - computed: false, optional: false, required: true
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // data_collection_options - computed: false, optional: true, required: false
  private _dataCollectionOptions = new OracleCloudVmClusterDataCollectionOptionsOutputReference(this, "data_collection_options");
  public get dataCollectionOptions() {
    return this._dataCollectionOptions;
  }
  public putDataCollectionOptions(value: OracleCloudVmClusterDataCollectionOptions) {
    this._dataCollectionOptions.internalValue = value;
  }
  public resetDataCollectionOptions() {
    this._dataCollectionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCollectionOptionsInput() {
    return this._dataCollectionOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OracleCloudVmClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OracleCloudVmClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_subnet_cidr: cdktf.stringToTerraform(this._backupSubnetCidr),
      cloud_exadata_infrastructure_id: cdktf.stringToTerraform(this._cloudExadataInfrastructureId),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cpu_core_count: cdktf.numberToTerraform(this._cpuCoreCount),
      data_storage_percentage: cdktf.numberToTerraform(this._dataStoragePercentage),
      data_storage_size_in_tbs: cdktf.numberToTerraform(this._dataStorageSizeInTbs),
      db_node_storage_size_in_gbs: cdktf.numberToTerraform(this._dbNodeStorageSizeInGbs),
      db_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dbServers),
      display_name: cdktf.stringToTerraform(this._displayName),
      domain: cdktf.stringToTerraform(this._domain),
      gi_version: cdktf.stringToTerraform(this._giVersion),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      license_model: cdktf.stringToTerraform(this._licenseModel),
      local_backup_enabled: cdktf.booleanToTerraform(this._localBackupEnabled),
      location: cdktf.stringToTerraform(this._location),
      memory_size_in_gbs: cdktf.numberToTerraform(this._memorySizeInGbs),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      scan_listener_port_tcp: cdktf.numberToTerraform(this._scanListenerPortTcp),
      scan_listener_port_tcp_ssl: cdktf.numberToTerraform(this._scanListenerPortTcpSsl),
      sparse_diskgroup_enabled: cdktf.booleanToTerraform(this._sparseDiskgroupEnabled),
      ssh_public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshPublicKeys),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      virtual_network_id: cdktf.stringToTerraform(this._virtualNetworkId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      data_collection_options: oracleCloudVmClusterDataCollectionOptionsToTerraform(this._dataCollectionOptions.internalValue),
      timeouts: oracleCloudVmClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_subnet_cidr: {
        value: cdktf.stringToHclTerraform(this._backupSubnetCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_exadata_infrastructure_id: {
        value: cdktf.stringToHclTerraform(this._cloudExadataInfrastructureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_core_count: {
        value: cdktf.numberToHclTerraform(this._cpuCoreCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_storage_percentage: {
        value: cdktf.numberToHclTerraform(this._dataStoragePercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_storage_size_in_tbs: {
        value: cdktf.numberToHclTerraform(this._dataStorageSizeInTbs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_node_storage_size_in_gbs: {
        value: cdktf.numberToHclTerraform(this._dbNodeStorageSizeInGbs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dbServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gi_version: {
        value: cdktf.stringToHclTerraform(this._giVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_model: {
        value: cdktf.stringToHclTerraform(this._licenseModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_backup_enabled: {
        value: cdktf.booleanToHclTerraform(this._localBackupEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_size_in_gbs: {
        value: cdktf.numberToHclTerraform(this._memorySizeInGbs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_listener_port_tcp: {
        value: cdktf.numberToHclTerraform(this._scanListenerPortTcp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scan_listener_port_tcp_ssl: {
        value: cdktf.numberToHclTerraform(this._scanListenerPortTcpSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sparse_diskgroup_enabled: {
        value: cdktf.booleanToHclTerraform(this._sparseDiskgroupEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssh_public_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshPublicKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_network_id: {
        value: cdktf.stringToHclTerraform(this._virtualNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_collection_options: {
        value: oracleCloudVmClusterDataCollectionOptionsToHclTerraform(this._dataCollectionOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OracleCloudVmClusterDataCollectionOptionsList",
      },
      timeouts: {
        value: oracleCloudVmClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OracleCloudVmClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
