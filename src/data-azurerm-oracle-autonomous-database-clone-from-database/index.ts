/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_database#id DataAzurermOracleAutonomousDatabaseCloneFromDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_database#name DataAzurermOracleAutonomousDatabaseCloneFromDatabase#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_database#resource_group_name DataAzurermOracleAutonomousDatabaseCloneFromDatabase#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_database#timeouts DataAzurermOracleAutonomousDatabaseCloneFromDatabase#timeouts}
  */
  readonly timeouts?: DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts;
}
export interface DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule {
}

export function dataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleToTerraform(struct?: DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleToHclTerraform(struct?: DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // repeat_cadence - computed: true, optional: false, required: false
  public get repeatCadence() {
    return this.getStringAttribute('repeat_cadence');
  }

  // retention_period_in_days - computed: true, optional: false, required: false
  public get retentionPeriodInDays() {
    return this.getNumberAttribute('retention_period_in_days');
  }

  // time_of_backup_in_utc - computed: true, optional: false, required: false
  public get timeOfBackupInUtc() {
    return this.getStringAttribute('time_of_backup_in_utc');
  }
}

export class DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference {
    return new DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_database#read DataAzurermOracleAutonomousDatabaseCloneFromDatabase#read}
  */
  readonly read?: string;
}

export function dataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsToTerraform(struct?: DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsToHclTerraform(struct?: DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_database azurerm_oracle_autonomous_database_clone_from_database}
*/
export class DataAzurermOracleAutonomousDatabaseCloneFromDatabase extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_oracle_autonomous_database_clone_from_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermOracleAutonomousDatabaseCloneFromDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermOracleAutonomousDatabaseCloneFromDatabase to import
  * @param importFromId The id of the existing DataAzurermOracleAutonomousDatabaseCloneFromDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermOracleAutonomousDatabaseCloneFromDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_oracle_autonomous_database_clone_from_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_database azurerm_oracle_autonomous_database_clone_from_database} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermOracleAutonomousDatabaseCloneFromDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_oracle_autonomous_database_clone_from_database',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.49.0',
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
    this._id = config.id;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actual_used_data_storage_size_in_tb - computed: true, optional: false, required: false
  public get actualUsedDataStorageSizeInTb() {
    return this.getNumberAttribute('actual_used_data_storage_size_in_tb');
  }

  // allocated_storage_size_in_tb - computed: true, optional: false, required: false
  public get allocatedStorageSizeInTb() {
    return this.getNumberAttribute('allocated_storage_size_in_tb');
  }

  // allowed_ip_addresses - computed: true, optional: false, required: false
  public get allowedIpAddresses() {
    return this.getListAttribute('allowed_ip_addresses');
  }

  // auto_scaling_enabled - computed: true, optional: false, required: false
  public get autoScalingEnabled() {
    return this.getBooleanAttribute('auto_scaling_enabled');
  }

  // auto_scaling_for_storage_enabled - computed: true, optional: false, required: false
  public get autoScalingForStorageEnabled() {
    return this.getBooleanAttribute('auto_scaling_for_storage_enabled');
  }

  // available_upgrade_versions - computed: true, optional: false, required: false
  public get availableUpgradeVersions() {
    return this.getListAttribute('available_upgrade_versions');
  }

  // backup_retention_period_in_days - computed: true, optional: false, required: false
  public get backupRetentionPeriodInDays() {
    return this.getNumberAttribute('backup_retention_period_in_days');
  }

  // character_set - computed: true, optional: false, required: false
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }

  // compute_count - computed: true, optional: false, required: false
  public get computeCount() {
    return this.getNumberAttribute('compute_count');
  }

  // compute_model - computed: true, optional: false, required: false
  public get computeModel() {
    return this.getStringAttribute('compute_model');
  }

  // connection_strings - computed: true, optional: false, required: false
  public get connectionStrings() {
    return this.getListAttribute('connection_strings');
  }

  // cpu_core_count - computed: true, optional: false, required: false
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }

  // customer_contacts - computed: true, optional: false, required: false
  public get customerContacts() {
    return this.getListAttribute('customer_contacts');
  }

  // data_storage_size_in_gb - computed: true, optional: false, required: false
  public get dataStorageSizeInGb() {
    return this.getNumberAttribute('data_storage_size_in_gb');
  }

  // data_storage_size_in_tb - computed: true, optional: false, required: false
  public get dataStorageSizeInTb() {
    return this.getNumberAttribute('data_storage_size_in_tb');
  }

  // database_version - computed: true, optional: false, required: false
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
  }

  // database_workload - computed: true, optional: false, required: false
  public get databaseWorkload() {
    return this.getStringAttribute('database_workload');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // failed_data_recovery_in_seconds - computed: true, optional: false, required: false
  public get failedDataRecoveryInSeconds() {
    return this.getNumberAttribute('failed_data_recovery_in_seconds');
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

  // in_memory_area_in_gb - computed: true, optional: false, required: false
  public get inMemoryAreaInGb() {
    return this.getNumberAttribute('in_memory_area_in_gb');
  }

  // license_model - computed: true, optional: false, required: false
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // lifecycle_state - computed: true, optional: false, required: false
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // local_adg_auto_failover_max_data_loss_limit_in_seconds - computed: true, optional: false, required: false
  public get localAdgAutoFailoverMaxDataLossLimitInSeconds() {
    return this.getNumberAttribute('local_adg_auto_failover_max_data_loss_limit_in_seconds');
  }

  // local_data_guard_enabled - computed: true, optional: false, required: false
  public get localDataGuardEnabled() {
    return this.getBooleanAttribute('local_data_guard_enabled');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // long_term_backup_schedule - computed: true, optional: false, required: false
  private _longTermBackupSchedule = new DataAzurermOracleAutonomousDatabaseCloneFromDatabaseLongTermBackupScheduleList(this, "long_term_backup_schedule", false);
  public get longTermBackupSchedule() {
    return this._longTermBackupSchedule;
  }

  // memory_per_oracle_compute_unit_in_gb - computed: true, optional: false, required: false
  public get memoryPerOracleComputeUnitInGb() {
    return this.getNumberAttribute('memory_per_oracle_compute_unit_in_gb');
  }

  // mtls_connection_required - computed: true, optional: false, required: false
  public get mtlsConnectionRequired() {
    return this.getBooleanAttribute('mtls_connection_required');
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

  // national_character_set - computed: true, optional: false, required: false
  public get nationalCharacterSet() {
    return this.getStringAttribute('national_character_set');
  }

  // next_long_term_backup_timestamp - computed: true, optional: false, required: false
  public get nextLongTermBackupTimestamp() {
    return this.getStringAttribute('next_long_term_backup_timestamp');
  }

  // oci_url - computed: true, optional: false, required: false
  public get ociUrl() {
    return this.getStringAttribute('oci_url');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // peer_database_ids - computed: true, optional: false, required: false
  public get peerDatabaseIds() {
    return this.getListAttribute('peer_database_ids');
  }

  // preview - computed: true, optional: false, required: false
  public get preview() {
    return this.getBooleanAttribute('preview');
  }

  // preview_version_with_service_terms_accepted - computed: true, optional: false, required: false
  public get previewVersionWithServiceTermsAccepted() {
    return this.getBooleanAttribute('preview_version_with_service_terms_accepted');
  }

  // private_endpoint_ip - computed: true, optional: false, required: false
  public get privateEndpointIp() {
    return this.getStringAttribute('private_endpoint_ip');
  }

  // private_endpoint_label - computed: true, optional: false, required: false
  public get privateEndpointLabel() {
    return this.getStringAttribute('private_endpoint_label');
  }

  // private_endpoint_url - computed: true, optional: false, required: false
  public get privateEndpointUrl() {
    return this.getStringAttribute('private_endpoint_url');
  }

  // provisionable_cpus - computed: true, optional: false, required: false
  public get provisionableCpus() {
    return this.getNumberListAttribute('provisionable_cpus');
  }

  // reconnect_clone_enabled - computed: true, optional: false, required: false
  public get reconnectCloneEnabled() {
    return this.getBooleanAttribute('reconnect_clone_enabled');
  }

  // refreshable_clone - computed: true, optional: false, required: false
  public get refreshableClone() {
    return this.getBooleanAttribute('refreshable_clone');
  }

  // refreshable_status - computed: true, optional: false, required: false
  public get refreshableStatus() {
    return this.getStringAttribute('refreshable_status');
  }

  // remote_data_guard_enabled - computed: true, optional: false, required: false
  public get remoteDataGuardEnabled() {
    return this.getBooleanAttribute('remote_data_guard_enabled');
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

  // service_console_url - computed: true, optional: false, required: false
  public get serviceConsoleUrl() {
    return this.getStringAttribute('service_console_url');
  }

  // source_autonomous_database_id - computed: true, optional: false, required: false
  public get sourceAutonomousDatabaseId() {
    return this.getStringAttribute('source_autonomous_database_id');
  }

  // sql_web_developer_url - computed: true, optional: false, required: false
  public get sqlWebDeveloperUrl() {
    return this.getStringAttribute('sql_web_developer_url');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // supported_regions_to_clone_to - computed: true, optional: false, required: false
  public get supportedRegionsToCloneTo() {
    return this.getListAttribute('supported_regions_to_clone_to');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // time_created_in_utc - computed: true, optional: false, required: false
  public get timeCreatedInUtc() {
    return this.getStringAttribute('time_created_in_utc');
  }

  // time_data_guard_role_changed_in_utc - computed: true, optional: false, required: false
  public get timeDataGuardRoleChangedInUtc() {
    return this.getStringAttribute('time_data_guard_role_changed_in_utc');
  }

  // time_deletion_of_free_autonomous_database_in_utc - computed: true, optional: false, required: false
  public get timeDeletionOfFreeAutonomousDatabaseInUtc() {
    return this.getStringAttribute('time_deletion_of_free_autonomous_database_in_utc');
  }

  // time_local_data_guard_enabled_in_utc - computed: true, optional: false, required: false
  public get timeLocalDataGuardEnabledInUtc() {
    return this.getStringAttribute('time_local_data_guard_enabled_in_utc');
  }

  // time_maintenance_begin_in_utc - computed: true, optional: false, required: false
  public get timeMaintenanceBeginInUtc() {
    return this.getStringAttribute('time_maintenance_begin_in_utc');
  }

  // time_maintenance_end_in_utc - computed: true, optional: false, required: false
  public get timeMaintenanceEndInUtc() {
    return this.getStringAttribute('time_maintenance_end_in_utc');
  }

  // time_of_last_failover_in_utc - computed: true, optional: false, required: false
  public get timeOfLastFailoverInUtc() {
    return this.getStringAttribute('time_of_last_failover_in_utc');
  }

  // time_of_last_refresh_in_utc - computed: true, optional: false, required: false
  public get timeOfLastRefreshInUtc() {
    return this.getStringAttribute('time_of_last_refresh_in_utc');
  }

  // time_of_last_refresh_point_in_utc - computed: true, optional: false, required: false
  public get timeOfLastRefreshPointInUtc() {
    return this.getStringAttribute('time_of_last_refresh_point_in_utc');
  }

  // time_of_last_switchover_in_utc - computed: true, optional: false, required: false
  public get timeOfLastSwitchoverInUtc() {
    return this.getStringAttribute('time_of_last_switchover_in_utc');
  }

  // time_reclamation_of_free_autonomous_database_in_utc - computed: true, optional: false, required: false
  public get timeReclamationOfFreeAutonomousDatabaseInUtc() {
    return this.getStringAttribute('time_reclamation_of_free_autonomous_database_in_utc');
  }

  // time_until_reconnect_in_utc - computed: true, optional: false, required: false
  public get timeUntilReconnectInUtc() {
    return this.getStringAttribute('time_until_reconnect_in_utc');
  }

  // used_data_storage_size_in_gb - computed: true, optional: false, required: false
  public get usedDataStorageSizeInGb() {
    return this.getNumberAttribute('used_data_storage_size_in_gb');
  }

  // used_data_storage_size_in_tb - computed: true, optional: false, required: false
  public get usedDataStorageSizeInTb() {
    return this.getNumberAttribute('used_data_storage_size_in_tb');
  }

  // virtual_network_id - computed: true, optional: false, required: false
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      timeouts: {
        value: dataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermOracleAutonomousDatabaseCloneFromDatabaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
